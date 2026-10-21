export async function request<T=unknown>(url:string,options?:RequestInit):Promise<T>{
 const response=await fetch(url,{...options,headers:{...(options?.body instanceof FormData?{}:{'Content-Type':'application/json'}),...options?.headers}});
 const data=await response.json().catch(()=>null);
 if(!response.ok)throw new Error(data?.error||(response.status===401?'Your session has expired. Please sign in again.':response.status===403?'Admin access is required.':'Could not complete the request. Please try again.'));
 return data as T;
}
export async function upload(file:File,kind:'cv'|'image'|'document'){
 if(file.size>4*1024*1024)throw new Error('Please choose a file smaller than 4 MB.');
 const body=new FormData();body.set('file',file);body.set('kind',kind);
 return (await request<{url:string}>('/api/upload',{method:'POST',body})).url;
}
