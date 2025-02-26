import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center px-6 py-12">
      <h1 className="text-5xl font-bold mb-6">Kana Learn</h1>
      <p className="text-lg text-gray-700 mb-6">
        Master the basics of Japanese writing with <strong>Hiragana</strong> and <strong>Katakana</strong>.
      </p>

      {/* Objective Section */}
      <div className="bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto mb-8">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <p className="text-gray-700 mb-2">
          🔹 A random <strong>Romaji</strong> will appear on the screen.
        </p>
        <p className="text-gray-700 mb-2">
          🔹 You can choose to <strong>show or hide</strong> the corresponding Kana.
        </p>
        <p className="text-gray-700">
          🔹 Practice writing the correct Hiragana or Katakana!
        </p>
      </div>

      {/* Kana Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <div className="p-6 bg-white shadow-lg rounded-xl">
          <h2 className="text-2xl font-semibold mb-2">Hiragana (ひらがな)</h2>
          <p className="text-gray-600">
            The fundamental script for native Japanese words, used in everyday writing.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-xl">
          <h2 className="text-2xl font-semibold mb-2">Katakana (カタカナ)</h2>
          <p className="text-gray-600">
            Mainly used for foreign words, names, and loanwords in Japanese.
          </p>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="mt-8">
        <Link href="/practice" className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
          Start Practicing
        </Link>
      </div>
    </div>
  );
}
