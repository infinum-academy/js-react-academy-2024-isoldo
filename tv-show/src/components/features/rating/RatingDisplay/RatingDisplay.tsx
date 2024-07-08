import { Container } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

interface IRatingDisplay {
  value: number;
}

export default function RatingDisplay({ value }: IRatingDisplay) {
  const maxRating = 5;
  return (
    <Container>
      {
        [...Array(maxRating)].map((_currentRating, index) => {
          return (
            <StarIcon
              key={index}
              color={value > index ? 'black' : 'beige'}
            />
          )
        })
      }
    </Container>
  )
}
