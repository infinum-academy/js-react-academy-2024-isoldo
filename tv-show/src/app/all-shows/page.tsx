'use client';

import ErrorBox from "@/components/shared/ErrorBox/ErrorBox";
import ShowsList from "@/components/shared/ShowsList/ShowsList"
import { getShowsDetails } from "@/fetchers/shows";
import { Flex, Spinner } from "@chakra-ui/react";
import useSWR from "swr";

export default function ShowsListPage() {
  const { data, error, isLoading } = useSWR(`/all-shows/`, () => getShowsDetails());

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

  return <ShowsList showsList={data.shows} />;
}
