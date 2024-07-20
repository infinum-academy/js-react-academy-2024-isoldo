import { IReview } from "@/typings/Review.type";
import ReviewItem from "../ReviewItem/ReviewItem";
import { Flex } from "@chakra-ui/react";

interface IReviewListProps {
  title?: string;
  reviews: IReview[];
}

export default function ReviewList({title='Reviews', reviews}: IReviewListProps) {
  return (
      <Flex marginBottom={4} gap={4} direction="column">
        {reviews.map((review, index) => {
          return <ReviewItem
            key={index}
            review={review} />
        })}
      </Flex>
  )
}
