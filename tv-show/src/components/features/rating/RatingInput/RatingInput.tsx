'use client';

import { Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import RatingIcon from "../RatingIcon/RatingIcon";

interface IRatingProps {
  label: string;
  onChange: (rating: number) => void;
  value: number;
}

export default function RatingInput({label, onChange, value}: IRatingProps) {
  const [hoverRating, setHoverRating] = useState(0);
  const maxRating = 5;

  useEffect(() => setHoverRating(value), [value, setHoverRating]);

  return (
    <Container>
      {
        [...Array(maxRating)].map((currentRating, index) => {
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
