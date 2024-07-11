'use client';

import ShowsList from "@/components/shared/ShowsList/ShowsList";
import { getShowsDetails } from "@/fetchers/shows";

export default function ShowsListPage() {
  return <ShowsList swrKey='/all-shows' fetcher={() => getShowsDetails()} />;
}
