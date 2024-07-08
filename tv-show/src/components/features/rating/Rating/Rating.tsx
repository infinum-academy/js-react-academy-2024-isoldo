import { Container } from "@chakra-ui/react";
import { useState } from "react";
import RatingIcon from "../RatingIcon/RatingIcon";

interface IRating {
  label: string;
  onChange: (rating: number) => void;
  value: number;
}

export default function Rating({label, onChange, value}: IRating) {
  const [hoverRating, setHoverRating] = useState(0);
  const maxRating = 5;
  return (
    <Container>
      {
        [...Array(maxRating)].map((_currentRating, index) => {
          return (
            <RatingIcon
              key={index}
              index={index+1}
              hoverRating={hoverRating}
              onMouseEnter={(index: number) => setHoverRating(index)}
              onMouseLeave={() => setHoverRating(value)}
              onClick={(index: number) => onChange(index)}
            />
          )
        })
      }
    </Container>
  )
}
