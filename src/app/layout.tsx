'use client';

import { ScriptProvider } from '@/lib/ScriptContext';
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Kana Write Learn</title>
        <meta name="description" content="This is my Next.js application." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-gray-50 min-h-screen flex flex-col">
        <ScriptProvider>
          <Navbar />
          <main className="flex-grow flex items-center justify-center pt-16">
            {children}
          </main>
        </ScriptProvider>
      </body>
    </html>
  );
}
