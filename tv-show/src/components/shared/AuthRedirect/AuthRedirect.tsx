'use client';

import { fetcher } from "@/fetchers/fetcher";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useSWR from "swr";

interface IAuthRedirectProps {
  to: string;
  condition: 'loggedIn' | 'loggedOut';
}

const API_URL = 'https://tv-shows.infinum.academy';

const swrKeys = {
  user: `${API_URL}/users/me`
}

export default function AuthRedirect({ to, condition }: IAuthRedirectProps) {
  const router = useRouter();
  const { data, isLoading } = useSWR(swrKeys.user, fetcher<{user: {id: string, email: string, image_url: string}}>);

  useEffect(() => {
    if(isLoading) {
      return;
    }

    const loggedOut = !data && (condition === 'loggedOut');
    const loggedIn = !!data && (condition === 'loggedIn');

    console.debug({authRedirectParams: {loggedIn, loggedOut}});

    if(loggedOut || loggedIn) {
      console.debug('Redirecting to', to);
      router.push(to);
    }
  }, [data, isLoading, router, condition, to]);

  return null;

}
