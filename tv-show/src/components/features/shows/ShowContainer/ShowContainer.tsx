import { Container } from "@chakra-ui/react";
import ShowDetailsContainer from "../ShowDetailsContainer/ShowDetailsContainer";
import ShowReviewSection from "../ShowReviewSection/ShowReviewSection";
import { useState } from "react";

export default function ShowContainer() {
  const [averageRating, setAverageRating] = useState<number | undefined>();
  return (
    <Container>
      <ShowDetailsContainer averageRating={averageRating}/>
      <ShowReviewSection setAverageRating={(avg) => setAverageRating(avg)} />
    </Container>
  )
}
