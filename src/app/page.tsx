// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl mb-4">Welcome to Kana Learn</h1>
      <Link href="/practice" className="text-blue-500 hover:underline">
        Start Practicing
      </Link>
    </div>
  );
}