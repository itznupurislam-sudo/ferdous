import type { Config } from '@netlify/functions';
import {getStore} from '@netlify/blobs';
export default async(req:Request)=>{
 if(req.method!=='GET')return new Response('Method not allowed',{status:405});
 const key=new URL(req.url).searchParams.get('key')||'';
 if(!/^[a-f0-9-]{36}\.(jpg|png|webp|pdf)$/.test(key))return new Response('Not found',{status:404});
 try{
  const data=await getStore({name:'portfolio-media',consistency:'strong'}).get(key,{type:'arrayBuffer'});
  if(!data)return new Response('Not found',{status:404});
  const ext=key.split('.').pop()!;
  return new Response(data,{headers:{'Content-Type':({'jpg':'image/jpeg','png':'image/png','webp':'image/webp','pdf':'application/pdf'} as Record<string,string>)[ext],'Cache-Control':'public, max-age=31536000, immutable','X-Content-Type-Options':'nosniff',...(ext==='pdf'?{'Content-Disposition':'attachment; filename="Ferdous-Mahmud-document.pdf"'}:{})}});
 }catch{return new Response('File temporarily unavailable',{status:503});}
};
export const config:Config={path:'/api/media'};
