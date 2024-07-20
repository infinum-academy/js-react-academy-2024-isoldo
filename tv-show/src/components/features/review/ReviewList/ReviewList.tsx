import { IReview } from "@/typings/Review.type";
import ReviewItem from "../ReviewItem/ReviewItem";
import { Flex } from "@chakra-ui/react";
import { IUser } from "@/typings/User.type";

interface IReviewListProps {
  title?: string;
  reviews: IReview[];
  user: IUser;
}

export default function ReviewList({title='Reviews', reviews, user}: IReviewListProps) {
  return (
      <Flex marginBottom={4} gap={4} direction="column">
        {reviews.map((review, index) => {
          return <ReviewItem key={index} review={review} user={user} />
        })}
      </Flex>
  )
}
