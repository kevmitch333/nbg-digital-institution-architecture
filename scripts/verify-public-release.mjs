import assert from 'node:assert/strict';
const origin = 'https://nationalbrandgroup.com';
const requiredHeaders = ['x-content-type-options', 'referrer-policy', 'permissions-policy', 'strict-transport-security', 'content-security-policy'];
const get = url => fetch(url, { signal: AbortSignal.timeout(20000), headers: { 'User-Agent': 'NBG-Release-Verification/1.0' } });
let ready = false;
for (let attempt = 1; attempt <= 30; attempt++) {
  try {
    const response = await get(origin + '/?verify=site-audit-20261002');
    const html = await response.text();
    ready = response.ok && html.includes('rel="canonical" href="https://nationalbrandgroup.com/"') && requiredHeaders.every(header => response.headers.has(header));
    console.log(JSON.stringify({ attempt, status: response.status, ready, headers: Object.fromEntries(requiredHeaders.map(h => [h, response.headers.get(h)])) }));
    if (ready) break;
  } catch (error) { console.log('Waiting for deployment:', error.message); }
  if (attempt < 30) await new Promise(resolve => setTimeout(resolve, 10000));
}
assert(ready, 'Public deployment did not expose the expected metadata and headers.');
for (const route of ['/', '/about/', '/architecture/', '/partnerships/', '/content-studio/', '/ventures/agoniq/']) {
  const response = await get(origin + route);
  const html = await response.text();
  assert(response.ok, route);
  assert(html.includes(`rel="canonical" href="${origin}${route}"`), route + ' canonical');
  for (const header of requiredHeaders) assert(response.headers.has(header), route + ' missing ' + header);
  console.log('PASS page', route);
  if (route === '/') {
    const assets = [...html.matchAll(/(?:src|href)="(\/_next\/static\/[^"?]+\.(?:js|css))"/g)].map(m => m[1]);
    for (const asset of [...new Set(assets)]) {
      const result = await get(origin + asset);
      assert(result.ok, asset);
      assert.match(result.headers.get('content-type') || '', asset.endsWith('.css') ? /text\/css/ : /javascript/);
      await result.arrayBuffer();
    }
    console.log('PASS script/style MIME types', new Set(assets).size);
  }
}
for (const route of ['/sitemap.xml', '/robots.txt', '/images/nbg-institution-architecture-hero-v2.jpg']) {
  const response = await get(origin + route); assert(response.ok, route); await response.arrayBuffer(); console.log('PASS discovery/preview asset', route);
}
for (const route of ['/.git/HEAD', '/.env']) {
  const response = await get(origin + route); await response.arrayBuffer(); assert([403,404].includes(response.status), route + ' should be inaccessible'); console.log('PASS restricted path', route, response.status);
}
try {
  const response = await get('https://www.nationalbrandgroup.com/');
  const html = await response.text();
  console.log(JSON.stringify({ wwwStatus: response.status, finalUrl: response.url, canonical: html.includes('rel="canonical" href="https://nationalbrandgroup.com/"') }));
} catch (error) { console.log('WWW verification unresolved:', error.message); }
console.log('Production verification completed.');
