import { IShow } from "@/typings/Show.type";
import { fetcher } from "./fetcher";

interface IShowsResponse {
  shows: IShow[];
}
export function getShowsDetails() {
  return fetcher<IShowsResponse>('/api/shows');
}

interface IShowsJson {
  id: string;
  average_rating: number;
  description: string;
  image_url: string;
  no_of_reviews: number;
  title: string;
}

export function getShowDetails(id: number) {
  return fetcher<IShowsJson>(`/api/shows/${id}`);
}
