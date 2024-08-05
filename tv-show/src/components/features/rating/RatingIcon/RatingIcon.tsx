import { StarIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

interface IRatingIconProps {
  index: number;
  hoverRating: number;
  onMouseEnter: (index: number) => void;
  onMouseLeave: () => void;
  onClick: (index: number) => void;
}

export default function RatingIcon({index, hoverRating, onMouseEnter, onMouseLeave, onClick}: IRatingIconProps) {
  return (
    <IconButton
      size="sm"
      aria-label={'rating-'+index}
      icon={<StarIcon />}
      variant={(hoverRating >= index) ? 'ratingSelected' : 'rating'}
      onMouseEnter={() => {onMouseEnter(index)}}
      onMouseLeave={onMouseLeave}
      onClick={() => onClick(index)}
    />
  )
}
