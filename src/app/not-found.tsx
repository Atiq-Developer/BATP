// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-blue-100 pt-[300px] flex flex-col items-center justify-center p-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Oops! The Page You Are Looking For Does Not Exist.</p>
      <Link href="/">
        <h1 className="px-9 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          Go Home
        </h1>
      </Link>
    </div>
  );
}
