import { IShow } from "@/typings/Show.type";
import { fetcher } from "./fetcher";

interface IShowsResponse {
  shows: IShow[];
}
export function getShowsDetails() {
  return fetcher<IShowsResponse>('/api/shows');
}

interface IShowResponse {
  show: IShow;
}
export function getShowDetails(id: string) {
  return fetcher<IShowResponse>(`/api/shows/${id}`);
}
