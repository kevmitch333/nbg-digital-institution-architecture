'use client';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import { faqs } from '@/content/site';
export function FAQ(){const [open,setOpen]=useState<number|null>(0);return <div className="faq-list">{faqs.map(([q,a],i)=><article key={q}><h3><button aria-expanded={open===i} onClick={()=>setOpen(open===i?null:i)}><span>{String(i+1).padStart(2,'0')} / {q}</span><Plus className={open===i?'rotated':''} size={18}/></button></h3>{open===i&&<p>{a}</p>}</article>)}</div>}
