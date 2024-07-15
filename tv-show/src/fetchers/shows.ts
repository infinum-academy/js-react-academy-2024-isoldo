import { IShow } from "@/typings/Show.type";
import { authenticatedFetcher } from "./fetcher";
import { swrKeys } from "./swrKeys";

export interface IShowsResponse {
  shows: IShow[];
}

export function getShowsDetails() {
  return authenticatedFetcher<IShowsResponse>(swrKeys.all_shows());
}

export function getTopRatedShowsDetails() {
  return authenticatedFetcher<IShowsResponse>(swrKeys.top_rated());
}


export function getShowDetails(id: number) {
  return authenticatedFetcher<{show:IShow}>(swrKeys.show(id));
}
