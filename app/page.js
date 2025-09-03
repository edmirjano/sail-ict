import { redirect } from 'next/navigation';

export default function RootPage() {
  // This will be handled by the middleware for locale detection
  // For now, redirect to English as fallback
  redirect('/en');
}
