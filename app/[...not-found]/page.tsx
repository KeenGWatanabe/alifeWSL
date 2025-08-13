// app/[...not-found]/page.tsx
export async function generateStaticParams() {
  return [];
}

export default function NotFoundPage() {
  return null; // Actual content handled by not-found.jsx
}