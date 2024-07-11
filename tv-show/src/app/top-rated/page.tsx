'use client';

import ShowsList from "@/components/shared/ShowsList/ShowsList";
import { getTopRatedShowsDetails } from "@/fetchers/shows";

export default function ShowsListTopPage() {
  return <ShowsList swrKey='/top-rated' fetcher={() => getTopRatedShowsDetails()} />;
}
