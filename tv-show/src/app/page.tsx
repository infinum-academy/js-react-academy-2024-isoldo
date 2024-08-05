'use client';

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  if(typeof location === 'undefined') {
    return;
  }

  router.push('/all-shows');

  return (
    <main>
    </main>
  );
}
