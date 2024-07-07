import { IReview } from "@/typings/Review.type";
import ReviewItem from "../ReviewItem/ReviewItem";
import { Container, Flex, Heading } from "@chakra-ui/react";

interface IReviewListProps {
  title?: string;
  reviews: IReview[];
}

export default function ReviewList({title='Reviews', reviews}: IReviewListProps) {
  return (
    <Container>
      <Flex marginBottom={4} gap={4} direction="column">
        {reviews.map((review, index) => {
          return <ReviewItem
            key={index}
            email={review.email}
            avatar={review.avatar}
            rating={review.rating}
            comment={review.comment} />
        })}
      </Flex>
    </Container>
  )
}
