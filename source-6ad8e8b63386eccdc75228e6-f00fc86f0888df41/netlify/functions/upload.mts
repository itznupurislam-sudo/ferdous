import type { Config } from '@netlify/functions';
import {getStore} from '@netlify/blobs';
import {requireAdmin,json,failure} from '../../lib/server.js';
export default async(req:Request)=>{
 try{
  await requireAdmin(req);
  if(req.method!=='POST')return json({error:'Method not allowed.'},405);
  const form=await req.formData();const file=form.get('file');
  if(!(file instanceof File)||file.size===0||file.size>4*1024*1024)return json({error:'Choose a JPG, PNG, WebP or PDF up to 4 MB.'},400);
  const buffer=await file.arrayBuffer();const b=new Uint8Array(buffer);
  const ext=b[0]===0xff&&b[1]===0xd8&&b[2]===0xff?'jpg':b[0]===137&&b[1]===80&&b[2]===78&&b[3]===71?'png':String.fromCharCode(...b.slice(0,4))==='RIFF'&&String.fromCharCode(...b.slice(8,12))==='WEBP'?'webp':String.fromCharCode(...b.slice(0,5))==='%PDF-'?'pdf':null;
  if(!ext)return json({error:'Unsupported file content. Use JPG, PNG, WebP or PDF.'},400);
  if(form.get('kind')==='cv'&&ext!=='pdf')return json({error:'Your CV must be a PDF.'},400);
  if(form.get('kind')==='image'&&ext==='pdf')return json({error:'Choose an image for this field.'},400);
  const key=`${crypto.randomUUID()}.${ext}`;
  await getStore({name:'portfolio-media',consistency:'strong'}).set(key,buffer);
  return json({url:`/api/media?key=${key}`},201);
 }catch(e){return failure(e);}
};
export const config:Config={path:'/api/upload'};
