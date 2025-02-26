export default function KanaDisplay({
    romanji,
    kana,
    showAnswer,
  }: {
    romanji: string;
    kana: string;
    showAnswer: boolean;
  }) {
    return (
        <div className="">
            <div className="text-6xl font-light mb-6">{romanji}</div>
            <div className=" min-h-[110px] my-2 bg-gray-50 rounded-lg">
                <div className={`text-8xl mb-8 ${showAnswer ? '' : 'hidden'}`}>{kana}</div>
            </div>
        </div>
    );
}