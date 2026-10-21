'use client';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {ArrowUpRight,LoaderCircle} from 'lucide-react';
import {contactSchema} from '@/lib/content';
import {request} from '@/lib/client';
export default function ContactForm(){
 const [status,setStatus]=useState('');const [failed,setFailed]=useState(false);
 const {register,handleSubmit,reset,formState:{errors,isSubmitting}}=useForm<z.infer<typeof contactSchema>>({resolver:zodResolver(contactSchema)});
 return <form className="contact-form" onSubmit={handleSubmit(async values=>{setStatus('');setFailed(false);try{const result=await request<{message:string}>('/api/messages',{method:'POST',body:JSON.stringify(values)});setStatus(result.message);reset();}catch(e){setFailed(true);setStatus((e as Error).message);}})}>
 <div className="form-row"><label>Your name<input autoComplete="name" placeholder="How should I call you?" {...register('name')} aria-invalid={!!errors.name}/>{errors.name&&<small className="error">{errors.name.message}</small>}</label><label>Email address<input type="email" autoComplete="email" placeholder="you@example.com" {...register('email')} aria-invalid={!!errors.email}/>{errors.email&&<small className="error">{errors.email.message}</small>}</label></div>
 <label>Your message<textarea rows={4} placeholder="Tell me a little about what you have in mind…" {...register('message')} aria-invalid={!!errors.message}/>{errors.message&&<small className="error">{errors.message.message}</small>}</label>
 <div className="honeypot" aria-hidden="true"><label>Website<input tabIndex={-1} autoComplete="off" {...register('website')}/></label></div>
 <div className="form-end"><small>Messages go to my private portfolio inbox.</small><button className="button primary" disabled={isSubmitting}>{isSubmitting?<LoaderCircle className="spin" size={16}/>:<ArrowUpRight size={17}/>} {isSubmitting?'Saving message…':'Send message'}</button></div>
 {status&&<p className={failed?'notice error':'notice'} role={failed?'alert':'status'}>{status}</p>}
 </form>;
}
