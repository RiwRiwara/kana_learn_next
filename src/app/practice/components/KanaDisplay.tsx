// KanaDisplay.tsx
export default function KanaDisplay({
  romanji,
  kana,
  showAnswer,
  onPlaySound,
}: {
  romanji: string;
  kana: string;
  showAnswer: boolean;
  onPlaySound: () => void;
}) {
  return (
    <div className="">
      <div className="text-6xl font-light mb-6">{romanji}</div>
      <div className="min-h-[110px] my-2 bg-gray-50 rounded-lg relative">
        <div className={`text-6xl mb-8 `}>{showAnswer ? kana : <span className="text-sm text-gray-500">Space to show</span>}</div>
        <button
          onClick={onPlaySound}
          className={`absolute top-2 right-2 p-2 text-white rounded `}
          aria-label="Play sound"
        >
          🔊
        </button>
      </div>
    </div>
  );
}