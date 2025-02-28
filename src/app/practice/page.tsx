// app/practice/page.tsx
'use client';

import { useState, useEffect, useCallback } from 'react';
import ModeSelector from './components/ModeSelector';
import KanaDisplay from './components/KanaDisplay';
import Controls from './components/Controls';
import Checkboxes from './components/Checkboxes';
import { getRandomKana } from '@/lib/kanaLogic';
import { KanaType } from '@/types';
import { useScript } from '@/lib/ScriptContext';

export default function Practice() {
    const { script } = useScript();
    const [mode, setMode] = useState<'normal' | 'together'>('normal');
    const [wordCount, setWordCount] = useState<number>(2);
    const [types, setTypes] = useState<KanaType[]>(['normal', 'dakuon', 'yoon']);
    const [romanji, setRomanji] = useState<string>('');
    const [kana, setKana] = useState<string>('');
    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
    const [hasInteracted, setHasInteracted] = useState<boolean>(false);

    const playSound = useCallback((romanji: string) => {
        if (!soundEnabled || !hasInteracted) return;

        const baseUrl = 'https://www.coscom.co.jp/hiragana-katakana/au50on/';
        const syllables = romanji.split(/[- ]/); // Split on hyphen or space
        
        let currentIndex = 0;

        const playNext = () => {
            if (currentIndex >= syllables.length) return;

            const audio = new Audio(`${baseUrl}kana50on_${syllables[currentIndex]}.mp3`);
            currentIndex++;
            
            audio.addEventListener('ended', playNext);
            audio.play().catch(error => {
                console.error('Error playing sound:', error);
                playNext(); // Continue even if one sound fails
            });
        };

        playNext();
    }, [soundEnabled, hasInteracted]);

    const updateKana = useCallback(() => {
        try {
            const { romanji, kana } = getRandomKana(mode, wordCount, types, script);
            setRomanji(romanji);
            setKana(kana);
            setShowAnswer(false);
            if (hasInteracted) playSound(romanji); // Only play if user has interacted
            console.log(`Script: ${script}, Romanji: ${romanji}, Kana: ${kana}`);
        } catch (error) {
            console.error('Error fetching kana:', error);
            setRomanji('Error');
            setKana('エラー');
            setShowAnswer(true);
        }
    }, [mode, wordCount, types, script, playSound, hasInteracted]);

    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            setHasInteracted(true); // Mark interaction on any key press
            switch (event.key) {
                case ' ':
                    event.preventDefault();
                    setShowAnswer((prev) => !prev);
                    break;
                case 'ArrowRight':
                    updateKana();
                    break;
                case 'ArrowLeft':
                    setMode((prev) => (prev === 'normal' ? 'together' : 'normal'));
                    break;
                default:
                    break;
            }
        },
        [updateKana]
    );

    const handlePlaySound = () => {
        setHasInteracted(true); // Mark interaction when manually playing
        playSound(romanji);
    };

    useEffect(() => {
        setIsLoading(true);
        updateKana();
        setIsLoading(false);

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [updateKana, handleKeyDown]);

    useEffect(() => {
        if (!isLoading) {
            updateKana();
        }
    }, [isLoading, mode, wordCount, types, script, updateKana]);

    return (
        <div className="bg-white p-8 rounded-xl shadow-sm text-center w-full max-w-lg">
            <h1 className="text-2xl font-semibold mb-6">
                {script === 'hiragana' ? 'Hiragana' : 'Katakana'} Practice
            </h1>
            <ModeSelector
                mode={mode}
                setMode={setMode}
                wordCount={wordCount}
                setWordCount={setWordCount}
            />
            <Checkboxes 
                types={types} 
                setTypes={setTypes}
                soundEnabled={soundEnabled}
                setSoundEnabled={setSoundEnabled}
            />
            {isLoading ? (
                <div className="text-6xl font-light mb-8 animate-pulse">Loading...</div>
            ) : (
                <KanaDisplay 
                    romanji={romanji} 
                    kana={kana} 
                    showAnswer={showAnswer}
                    onPlaySound={handlePlaySound}
                />
            )}
            <Controls
                onShow={() => setShowAnswer((prev) => !prev)}
                onNext={updateKana}
                disabled={isLoading}
            />
            <p className="text-sm text-gray-500 mt-4">
                Use <kbd>Space</kbd> to show/hide answer, <kbd>→</kbd> for next, <kbd>←</kbd> to switch mode
            </p>
        </div>
    );
}