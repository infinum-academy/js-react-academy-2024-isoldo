'use client';

import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface IAuthRedirectProps {
  to: string;
  condition: 'loggedIn' | 'loggedOut';
}

export default function AuthRedirect({ to, condition }: IAuthRedirectProps) {
  const router = useRouter();
  const { data, isLoading } = useUser();

  const loggedOut = !data && (condition === 'loggedOut');
  const loggedIn = !!data && (condition === 'loggedIn');

  useEffect(() => {
    if(isLoading) {
      return;
    }

    console.log({loggedIn, loggedOut, data});

    if(loggedOut || loggedIn) {
      router.push(to);
    }
  }, [data, isLoading, router, condition, to]);

  return null;

}
