import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Acme Dashboard',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://nextjs-dashboard-three-roan-90.vercel.app/'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* <title>Acme</title> */}
        {/* <meta name="description" content="A brief description of the page content." /> */}
        {/* <meta name="keywords" content="keyword1, keyword2, keyword3" /> */}
        <meta property="og:title" content="Acme (title)" />
        <meta property="og:url" content="https://nextjs-dashboard-three-roan-90.vercel.app/" />
        <meta property="og:description" content="Acme Dashboard (description)" />
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
      </head>
      <body className={`${inter.className} antialiased`}> 
        {children}
        <Analytics/> 
      </body>
    </html>
  );
}
