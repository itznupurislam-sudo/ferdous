import { getUser, verifyRequestOrigin } from '@netlify/identity';
import { ZodError } from 'zod';
export async function requireAdmin(req:Request){
 const user=await getUser();
 if(!user) throw new Response('Please sign in.',{status:401});
 if(!user.roles?.includes('admin')) throw new Response('An admin role is required.',{status:403});
 if(req.method!=='GET') verifyRequestOrigin(req);
 return user;
}
export function json(data:unknown,status=200){return Response.json(data,{status,headers:{'Cache-Control':'no-store'}});}
export function failure(error:unknown){
 if(error instanceof Response)return error;
 if(error instanceof ZodError)return json({error:error.issues.map(i=>`${i.path.join('.')}: ${i.message}`).join('; ')},400);
 if(error instanceof SyntaxError)return json({error:'Invalid request body.'},400);
 if(error && typeof error==='object' && 'status' in error && error.status===403)return json({error:'This request is not allowed.'},403);
 return json({error:'The service is temporarily unavailable. Please try again.'},503);
}
