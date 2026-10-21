import type { Metadata } from 'next';
import './globals.css';
const siteName='Ferdous Mahmud — Business Professional & Entrepreneur';
const siteDescription='Business, creativity, and community. Explore Ferdous Mahmud’s experience in business operations, document services, creative media, and volunteer leadership.';
export const metadata:Metadata={title:siteName,description:siteDescription,openGraph:{title:siteName,siteName,description:siteDescription,type:'website'},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>;}
