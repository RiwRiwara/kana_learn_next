// lib/kanaLogic.ts
import { hiraganaData, katakanaData } from './kanaData';
import { KanaType } from '@/types';

interface KanaResult {
    romanji: string;
    kana: string;
}

export function getRandomKana(
    mode: 'normal' | 'together',
    wordCount: number,
    types: KanaType[],
    script: 'hiragana' | 'katakana' = 'hiragana'
): KanaResult {
    const data = script === 'hiragana' ? hiraganaData : katakanaData;
    const activeList = types.flatMap((type) => Object.keys(data[type]));
    if (activeList.length === 0) return { romanji: 'a', kana: script === 'hiragana' ? 'あ' : 'ア' };

    const getRandom = () => activeList[Math.floor(Math.random() * activeList.length)];

    let romanji = '';
    let kana = '';
    if (mode === 'normal') {
        romanji = getRandom();
        kana = getKanaText(romanji, script);
    } else {
        for (let i = 0; i < wordCount; i++) {
            const r = getRandom();
            romanji += (i > 0 ? ' ' : '') + r;
            kana += (i > 0 ? ' ' : '') + getKanaText(r, script);
        }
    }
    return { romanji, kana };
}

export function getKanaText(romanji: string, script: 'hiragana' | 'katakana' = 'hiragana'): string {
    const data = script === 'hiragana' ? hiraganaData : katakanaData;
    return (
        data.normal[romanji as keyof typeof data.normal] ||
        data.dakuon[romanji as keyof typeof data.dakuon] ||
        data.yoon[romanji as keyof typeof data.yoon] ||
        ''
    );
}