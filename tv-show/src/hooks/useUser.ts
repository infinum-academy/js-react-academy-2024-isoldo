import { authenticatedFetcher } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import { IUser } from "@/typings/User.type";
import useSWR from "swr";

interface IUseUser {
  user: IUser
}

export function useUser() {
  const swrHook = useSWR(swrKeys.user(), authenticatedFetcher<IUseUser>, {
    onError: () => swrHook.mutate(undefined, {revalidate: false})
  });

  return swrHook;
}
