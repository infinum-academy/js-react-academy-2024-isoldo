import { authenticatedFetcher } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import useSWR from "swr";

interface IUser {
  user: {
    id: string;
    email: string;
    image_url: string;
  }
}

export function useUser() {
  const swrHook = useSWR(swrKeys.user(), authenticatedFetcher<IUser>, {
    onError: () => swrHook.mutate(undefined, {revalidate: false})
  });

  return swrHook;
}
