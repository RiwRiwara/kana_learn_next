// lib/ScriptContext.tsx
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface ScriptContextType {
    script: 'hiragana' | 'katakana';
    setScript: (script: 'hiragana' | 'katakana') => void;
}

const ScriptContext = createContext<ScriptContextType | undefined>(undefined);

export function ScriptProvider({ children }: { children: ReactNode }) {
    const [script, setScript] = useState<'hiragana' | 'katakana'>('hiragana');
    return (
        <ScriptContext.Provider value={{ script, setScript }
        }>
            {children}
        </ScriptContext.Provider>
    );
}

export function useScript() {
    const context = useContext(ScriptContext);
    if (!context) throw new Error('useScript must be used within a ScriptProvider');
    return context;
}