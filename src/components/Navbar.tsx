// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useScript } from '@/lib/ScriptContext';

export default function Navbar() {
    const { script, setScript } = useScript();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md p-4 fixed top-0 left-0 w-full z-10">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-blue-600">
                    Kana Write Learn 
                    <span className="text-xs font-light text-gray-500 ml-2 ">by Riwara</span>
                </Link>
                <div className="hidden md:flex items-center space-x-6">
                    <Link href="/" className="text-gray-700 hover:text-blue-500 transition">
                        Home
                    </Link>
                    <Link href="/practice" className="text-gray-700 hover:text-blue-500 transition">
                        Practice
                    </Link>
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => setScript('hiragana')}
                            className={`px-3 py-1 rounded-md text-sm font-medium transition ${script === 'hiragana'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            Hiragana
                        </button>
                        <button
                            onClick={() => setScript('katakana')}
                            className={`px-3 py-1 rounded-md text-sm font-medium transition ${script === 'katakana'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            Katakana
                        </button>
                    </div>
                </div>
                <button
                    className="md:hidden text-gray-700 hover:text-blue-500 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                    </svg>
                </button>
            </div>
            {isMenuOpen && (
                <div className="md:hidden mt-4 space-y-4">
                    <Link
                        href="/"
                        className="block text-gray-700 hover:text-blue-500 transition"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/practice"
                        className="block text-gray-700 hover:text-blue-500 transition"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Practice
                    </Link>
                    <div className="flex flex-col space-y-2">
                        <button
                            onClick={() => {
                                setScript('hiragana');
                                setIsMenuOpen(false);
                            }}
                            className={`px-3 py-1 rounded-md text-sm font-medium transition ${script === 'hiragana'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            Hiragana
                        </button>
                        <button
                            onClick={() => {
                                setScript('katakana');
                                setIsMenuOpen(false);
                            }}
                            className={`px-3 py-1 rounded-md text-sm font-medium transition ${script === 'katakana'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            Katakana
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}