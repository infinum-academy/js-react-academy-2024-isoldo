'use client';

import ShowContainer from "@/components/features/shows/ShowContainer/ShowContainer";
import ErrorBox from "@/components/shared/ErrorBox/ErrorBox";
import { getShowDetails } from "@/fetchers/shows";
import { IShow } from "@/typings/Show.type";
import { Flex, Spinner } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import useSWR from "swr";

export default function ShowDetailsPage() {
  const { id } = useParams();

  const { data, error, isLoading } = useSWR(`/all-shows/`, () => getShowDetails(Number(id)));

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
  const showData: IShow = {
    id: Number(data.id),
    title: data.title,
    description: data.description,
    imageUrl: data.image_url,
    numberOfReviews: data.no_of_reviews
  };

  return <ShowContainer showData={showData} />
}
