'use client';

import { HOMEPAGE_CONST } from '@/constants/app-constants';
import { APP_ROUTES } from '@/constants/app-route';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const handleClick = () => {
    router.push(APP_ROUTES.PRODUCTS);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <h1 className="text-4xl font-bold mb-6">{HOMEPAGE_CONST.EXPLORE_MORE}</h1>
      <button
        onClick={handleClick}
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
       {HOMEPAGE_CONST.START_SHOPPING}
      </button>
    </main>
  );
}
