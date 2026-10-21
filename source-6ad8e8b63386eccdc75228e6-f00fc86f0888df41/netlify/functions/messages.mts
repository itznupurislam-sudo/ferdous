import type { Config } from '@netlify/functions';
import { desc,eq } from 'drizzle-orm';
import { z } from 'zod';
import { database } from '../../db/index.js';
import { messages } from '../../db/schema.js';
import { contactSchema } from '../../lib/content.js';
import {requireAdmin,json,failure} from '../../lib/server.js';
import {verifyRequestOrigin} from '@netlify/identity';
export default async(req:Request)=>{
 try{
  const db=database();
  if(req.method==='POST'){
   verifyRequestOrigin(req);
   if(Number(req.headers.get('content-length'))>16000)return json({error:'Message is too large.'},413);
   const data=contactSchema.parse(await req.json());
   await db.insert(messages).values({name:data.name,email:data.email,message:data.message});
   return json({message:'Your message has been saved to Ferdous’s inbox. This form does not send email; for time-sensitive inquiries, please email directly.'},201);
  }
  await requireAdmin(req);
  if(req.method==='GET')return json(await db.select().from(messages).orderBy(desc(messages.createdAt)).limit(200));
  const {id}=z.object({id:z.uuid()}).parse(await req.json());
  if(req.method==='PATCH'){await db.update(messages).set({read:true}).where(eq(messages.id,id));return json({success:true});}
  if(req.method==='DELETE'){await db.delete(messages).where(eq(messages.id,id));return json({success:true});}
  return json({error:'Method not allowed.'},405);
 }catch(e){return failure(e);}
};
export const config:Config={path:'/api/messages',rateLimit:{windowLimit:8,windowSize:60,aggregateBy:['ip']}};
