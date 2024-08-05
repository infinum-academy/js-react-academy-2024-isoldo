import { CenteredSpinner } from "@/components/shared/CenteredSpinner/CenteredSpinner";
import ErrorBox from "@/components/shared/ErrorBox/ErrorBox";
import ShowsList from "@/components/shared/ShowsList/ShowsList";
import { getShowsDetails, getTopRatedShowsDetails, IShowsResponse } from "@/fetchers/shows";
import useSWR from "swr";

type ShowsType = 'all' | 'top';

interface IShowsContainerProps {
  type: ShowsType;
}

export default function ShowsContainer({type}: IShowsContainerProps) {
  const { swrKey, fetcher } = getKeyAndFetcherByType(type);

  const { data, isLoading, error } = useSWR(swrKey, fetcher);

  if(error) {
    return (
      <ErrorBox title='Error loading data' description={`${error}`}/>
    );
  }

  if(isLoading) {
    return (
      <CenteredSpinner />
    );
  }

  if(!data) {
    return (
      <ErrorBox title='No data to show' />
    )
  }

  return (
    <ShowsList shows={data.shows} />
  )
}

interface IKeyAndFetcher {
  swrKey: string;
  fetcher: () => Promise<IShowsResponse>;
}

function getKeyAndFetcherByType(type: ShowsType): IKeyAndFetcher {
  switch(type) {
    case 'all':
      return {
        swrKey: '/all-shows',
        fetcher: getShowsDetails
      };
      break;
    case 'top':
      return {
        swrKey: '/top-rated',
        fetcher: getTopRatedShowsDetails
      }
  }
}
