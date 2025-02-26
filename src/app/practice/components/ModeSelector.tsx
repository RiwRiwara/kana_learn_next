import { Dispatch, SetStateAction } from 'react';

export default function ModeSelector({
    mode,
    setMode,
    wordCount,
    setWordCount,
}: {
    mode: string;
    setMode: Dispatch<SetStateAction<'normal' | 'together'>>;
    wordCount: number;
    setWordCount: Dispatch<SetStateAction<number>>;
}) {
    return (
        <div className="mb-6">
            <div className="flex items-center justify-center gap-4 mb-4">
                <select
                    value={mode}
                    onChange={(e) => setMode(e.target.value as 'normal' | 'together')}
                    className="border border-gray-300 rounded-lg p-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <option value="normal">Normal Mode</option>
                    <option value="together">Together Mode</option>
                </select>
                {mode === 'together' && (
                    <div>
                        <label className="text-lg mr-2">Words:</label>
                        <input
                            type="number"
                            value={wordCount}
                            min={2}
                            max={6}
                            onChange={(e) => setWordCount(Math.max(2, Math.min(6, +e.target.value)))}
                            className="border border-gray-300 rounded-lg p-2 w-16 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}