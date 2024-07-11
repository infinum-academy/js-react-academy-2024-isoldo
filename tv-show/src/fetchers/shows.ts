import { IShow } from "@/typings/Show.type";
import { fetcher } from "./fetcher";

export interface IShowsResponse {
  shows: IShow[];
}

export function getShowsDetails() {
  return fetcher<IShowsResponse>('/api/shows');
}

export function getTopRatedShowsDetails() {
  return fetcher<IShowsResponse>('/api/shows/top-rated');
}


export function getShowDetails(id: number) {
  return fetcher<IShow>(`/api/shows/${id}`);
}
