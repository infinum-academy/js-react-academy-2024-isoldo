'use client';

import { Flex, Text } from "@chakra-ui/react";
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
    <Flex justifyContent="center" alignItems="baseline" className="rating-input">
      <Flex justifyContent="space-between" className="rating-input-elements">
        <Text>{label}</Text>
        <Flex justifyContent="flex-start">
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
        </Flex>
      </Flex>
    </Flex>
  )
}
