'use client';

import ShowContainer from "@/components/features/shows/ShowContainer/ShowContainer";
import { getShowDetails } from "@/fetchers/shows";
import { IShow } from "@/typings/Show.type";
import { Container } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import useSWR from "swr";

export default function ShowDetailsPage() {
  const { id } = useParams();

  const { data, error, isLoading } = useSWR(`/all-shows/`, () => getShowDetails(Number(id)));

  if(error) return <Container>ERROR</Container>;

  if(isLoading || !data) return <Container>Loading...</Container>;

  if(!data) return <Container>404</Container>;

  return <ShowContainer showData={data} />
}
