// Uploaded files are local public URLs. External URLs remain untransformed
// rather than permitting arbitrary remote domains in the CDN configuration.
export function imageSource(url:string,width=800){
 return (url.startsWith('/api/media?')||url.startsWith('/images/'))?`/.netlify/images?url=${encodeURIComponent(url)}&w=${width}&fm=webp&q=82`:url;
}
