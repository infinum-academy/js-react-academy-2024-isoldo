'use client';

import { authenticatedFetcher } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useSWR from "swr";

interface IAuthRedirectProps {
  to: string;
  condition: 'loggedIn' | 'loggedOut';
}

export default function AuthRedirect({ to, condition }: IAuthRedirectProps) {
  const router = useRouter();
  const { data, isLoading } = useSWR(swrKeys.user(), () => {
    return authenticatedFetcher<{user: {id: string, email: string, image_url: string}}>(swrKeys.user());
  });

  useEffect(() => {
    if(isLoading) {
      return;
    }

    const loggedOut = !data && (condition === 'loggedOut');
    const loggedIn = !!data && (condition === 'loggedIn');

    if(loggedOut || loggedIn) {
      router.push(to);
    }
  }, [data, isLoading, router, condition, to]);

  return null;

}
