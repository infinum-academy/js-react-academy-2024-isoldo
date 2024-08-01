import { INewReview, IReview } from "@/typings/Review.type";
import { Flex, Heading } from "@chakra-ui/react";
import ReviewList from "../../review/ReviewList/ReviewList";
import ReviewForm from "../../review/ReviewForm/ReviewForm";
import { IUser } from "@/typings/User.type";

interface IShowReviewSectionProps {
  reviews: IReview[];
  onSubmit: (newReview: INewReview) => void;
  user: IUser;
}

export default function ShowReviewSection({reviews, onSubmit, user}: IShowReviewSectionProps) {
  return (
    <Flex id="review-section">
      <Flex justifyContent="space-between" flexGrow={1} id="review-section-inner" flexWrap="wrap">
        <Heading size='md' marginRight={10}>Reviews</Heading>
          <Flex flexGrow={1} id="review-section-reviews">
            <Flex direction="column" flexGrow={1} id="review-section-reviews-inner">
              <ReviewForm onSubmit={onSubmit} user={user}/>
              <ReviewList reviews={reviews} user={user}/>
            </Flex>
          </Flex>
      </Flex>
    </Flex>
  )
}
