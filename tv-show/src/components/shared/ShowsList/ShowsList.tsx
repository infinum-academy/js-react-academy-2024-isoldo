import { IShow } from "@/typings/Show.type";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import ShowCard from "../ShowCard/ShowCard";

interface IShowsListProps {
  showsList: IShow[];
}

export default function ShowsList({showsList}: IShowsListProps) {
  return (
      <SimpleGrid minChildWidth='240px'>
      {
        showsList.map((show) => { return (
            <ShowCard title={show.title} imageUrl={show.imageUrl} averageRating={show.averageRating} />
        )})
      }
      </SimpleGrid>
  )
}
