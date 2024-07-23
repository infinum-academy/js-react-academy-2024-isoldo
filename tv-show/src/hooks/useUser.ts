import { authGet } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import { IUser } from "@/typings/User.type";
import useSWR from "swr";

interface IUserResponse {
  user: IUser
}

export function useUser() {
  const swrHook = useSWR(swrKeys.user(), authGet<IUserResponse>, {
    onError: () => swrHook.mutate(undefined, {revalidate: false})
  });

  return swrHook;
}
