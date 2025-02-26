// app/layout.tsx
'use client';

import { ScriptProvider } from '@/lib/ScriptContext';
import Navbar from '@/components/Navbar';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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