import { IShow } from "@/typings/Show.type";
import { authGet } from "./fetcher";
import { swrKeys } from "./swrKeys";

export interface IShowsResponse {
  shows: IShow[];
}

export function getShowsDetails() {
  return authGet<IShowsResponse>(swrKeys.all_shows());
}

export function getTopRatedShowsDetails() {
  return authGet<IShowsResponse>(swrKeys.top_rated());
}


export function getShowDetails(id: number) {
  return authGet<{show:IShow}>(swrKeys.show(id));
}
