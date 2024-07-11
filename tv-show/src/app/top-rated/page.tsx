'use client';

import ErrorBox from "@/components/shared/ErrorBox/ErrorBox";
import ShowsList from "@/components/shared/ShowsList/ShowsList"
import { getTopRatedShowsDetails } from "@/fetchers/shows";
import { IShow } from "@/typings/Show.type";
import { Flex, Spinner } from "@chakra-ui/react";
import useSWR from "swr";

export default function ShowsListTopPage() {
  const { data, error, isLoading } = useSWR(`/top-rated`, () => getTopRatedShowsDetails());

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

  // adapt the API interface to the internal interface (camelCase vs snake_case)
  const showData: IShow[] = data.shows.map((show) => { return {
    id: Number(show.id),
    title: show.title,
    description: show.description,
    imageUrl: show.image_url,
    numberOfReviews: show.no_of_reviews,
    averageRating: show.average_rating
  }});

  return <ShowsList showsList={showData} />;
}
