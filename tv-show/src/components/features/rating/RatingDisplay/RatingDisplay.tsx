import { Container } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

interface IRatingDisplayProps {
  value: number;
}

export default function RatingDisplay({ value }: IRatingDisplayProps) {
  const maxRating = 5;
  return (
    <Container>
      {
        [...Array(maxRating)].map((currentRating, index) => {
          return (
            <StarIcon
              key={index}
              color={value > index ? 'white' : 'purple'}
            />
          )
        })
      }
    </Container>
  )
}
