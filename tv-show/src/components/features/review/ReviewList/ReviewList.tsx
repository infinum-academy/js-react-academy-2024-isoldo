import { IReview } from "@/typings/Review.type";
import ReviewItem from "../ReviewItem/ReviewItem";
import { Container, Flex, Heading } from "@chakra-ui/react";

interface IReviewListProps {
  title?: string;
  reviews: IReview[];
  onRemoveClick: (review: IReview) => void;
}

export default function ReviewList({title='Reviews', reviews, onRemoveClick}: IReviewListProps) {
  return (
      <Flex marginBottom={4} gap={4} direction="column">
        {reviews.map((review, index) => {
          return <ReviewItem
            key={index}
            review={review}
            onRemoveClick={onRemoveClick} />
        })}
      </Flex>
  )
}
