import { IShow } from "@/typings/Show.type";
import { fetcher } from "./fetcher";

interface IShowsResponse {
  shows: IShow[];
}
export function getShowsDetails() {
  return fetcher<IShowsResponse>('/api/shows');
}

export function getShowDetails(id: number) {
  return fetcher<IShow>(`/api/shows/${id}`);
}
