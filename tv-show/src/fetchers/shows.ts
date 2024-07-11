import { fetcher } from "./fetcher";

interface IShowsJson {
  id: string;
  average_rating: number;
  description: string;
  image_url: string;
  no_of_reviews: number;
  title: string;
}

interface IShowsResponse {
  shows: IShowsJson[];
}

export function getShowsDetails() {
  return fetcher<IShowsResponse>('/api/shows');
}

export function getTopRatedShowsDetails() {
  return fetcher<IShowsResponse>('/api/shows/top-rated');
}


export function getShowDetails(id: number) {
  return fetcher<IShowsJson>(`/api/shows/${id}`);
}
