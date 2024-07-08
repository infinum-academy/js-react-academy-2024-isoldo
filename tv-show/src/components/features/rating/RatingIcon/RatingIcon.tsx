import { StarIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

interface IRatingIcon {
  index: number;
  hoverRating: number;
  onMouseEnter: (index: number) => void;
  onMouseLeave: () => void;
  onClick: (index: number) => void;
}

export default function RatingIcon({index, hoverRating, onMouseEnter, onMouseLeave, onClick}: IRatingIcon) {
  return (
    <IconButton
      isRound
      colorScheme='yellow'
      aria-label={'rating-'+index}
      icon={<StarIcon />}
      variant={(hoverRating >= index) ? 'solid' : 'outline'}
      onMouseEnter={() => {onMouseEnter(index)}}
      onMouseLeave={onMouseLeave}
      onClick={() => onClick(index)}
    />
  )
}
