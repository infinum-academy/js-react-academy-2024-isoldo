import { IShow } from "@/typings/Show.type";
import { Flex, SimpleGrid, Spinner } from "@chakra-ui/react";
import ShowCard from "../ShowCard/ShowCard";
import ErrorBox from "../ErrorBox/ErrorBox";
import useSWR from "swr";
import { IShowsResponse } from "@/fetchers/shows";

interface IShowsListProps {
  swrKey: string;
  fetcher: () => Promise<IShowsResponse>;
}

export default function ShowsList({swrKey, fetcher}: IShowsListProps) {
  const { data, error, isLoading } = useSWR(swrKey, fetcher);

  if(error) {
    return (
      <ErrorBox title='Error loading data' description={`${error}`}/>
    );
  }

  // (!data) here to calm the linter down - data will be defined is both error and isLoading are nullish
  if(isLoading || !data) {
    return (
      <Flex justifyContent='center'>
        <Spinner size='xl'/>
      </Flex>
    );
  }
  return (
      <SimpleGrid minChildWidth='240px'>
      {
        (data.shows as IShow[]).map((show) => { return (
            <ShowCard key={show.id} title={show.title} imageUrl={show.image_url} averageRating={show.average_rating} />
        )})
      }
      </SimpleGrid>
  )
}
