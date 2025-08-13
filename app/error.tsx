// app/error.tsx
'use client';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="grid min-h-screen place-items-center">
      <h2 className="text-3xl font-bold text-red-500">
        Something went wrong!
      </h2>
      <button 
        onClick={reset}
        className="mt-4 px-4 py-2 bg-rose-500 text-white rounded"
      >
        Try Again
      </button>
    </div>
  );
}