import { IShow } from "@/typings/Show.type";
import { SimpleGrid } from "@chakra-ui/react";
import ShowCard from "../ShowCard/ShowCard";

interface IShowsListProps {
  shows: IShow[];
}

export default function ShowsList({shows}: IShowsListProps) {
  return (
      <SimpleGrid minChildWidth='240px' gap={8}>
      {
        shows.map((show) => { return (
            <ShowCard key={show.id} show={show}/>
        )})
      }
      </SimpleGrid>
  )
}
