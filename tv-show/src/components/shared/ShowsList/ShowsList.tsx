import { IShow } from "@/typings/Show.type";
import { SimpleGrid } from "@chakra-ui/react";
import ShowCard from "../ShowCard/ShowCard";

interface IShowsListProps {
  showsList: IShow[];
}

export default function ShowsList({showsList}: IShowsListProps) {
  return (
      <SimpleGrid minChildWidth='240px'>
      {
        showsList.map((show, index) => { return (
            <ShowCard key={index} title={show.title} imageUrl={show.image_url} averageRating={show.average_rating} />
        )})
      }
      </SimpleGrid>
  )
}
