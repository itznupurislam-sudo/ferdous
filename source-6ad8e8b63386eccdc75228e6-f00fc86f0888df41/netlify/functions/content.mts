import type { Config } from '@netlify/functions';
import { z } from 'zod';
import { eq, asc, and } from 'drizzle-orm';
import { database } from '../../db/index.js';
import { profiles,items } from '../../db/schema.js';
import { profileSchema,itemSchema } from '../../lib/content.js';
import { requireAdmin,json,failure } from '../../lib/server.js';
export default async(req:Request)=>{
 try{
  const db=database(); const url=new URL(req.url);
  if(req.method==='GET'){
   const admin=url.searchParams.get('admin')==='1';
   if(admin)await requireAdmin(req);
   const [profile]=await db.select().from(profiles).where(eq(profiles.id,1));
   if(!profile)return json({error:'Content is not initialized yet.'},503);
   const rows=await db.select().from(items).where(admin?undefined:eq(items.published,true)).orderBy(asc(items.position),asc(items.id));
   return json({profile:profile.data,items:rows});
  }
  await requireAdmin(req);
  if(req.method==='PATCH'){
   const data=z.object({section:z.enum(['skills','experience','bdclean','education','languages','certifications','work','social']),ids:z.array(z.uuid()).max(500)}).parse(await req.json());
   await db.transaction(async tx=>{for(const [position,id] of data.ids.entries()){await tx.update(items).set({position}).where(and(eq(items.id,id),eq(items.section,data.section)));}});
   return json({success:true});
  }
  if(req.method==='PUT'){
   const profile=profileSchema.parse(await req.json());
   await db.insert(profiles).values({id:1,data:profile}).onConflictDoUpdate({target:profiles.id,set:{data:profile,updatedAt:new Date()}});
   return json({success:true});
  }
  if(req.method==='POST'){
   const parsed=itemSchema.parse(await req.json()); const {id,...value}=parsed;
   if(id){const [saved]=await db.update(items).set(value).where(eq(items.id,id)).returning();if(!saved)return json({error:'Entry not found.'},404);return json(saved);}
   const [saved]=await db.insert(items).values(value).returning();return json(saved,201);
  }
  if(req.method==='DELETE'){
   const id=url.searchParams.get('id');if(!id||!/^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/.test(id))return json({error:'Invalid entry.'},400);
   await db.delete(items).where(eq(items.id,id));return json({success:true});
  }
  return json({error:'Method not allowed.'},405);
 }catch(e){return failure(e);}
};
export const config:Config={path:'/api/content'};
