import { IReview } from "@/typings/Review.type";
import {  Button, Flex, Image, Text } from "@chakra-ui/react";
import RatingDisplay from "../../rating/RatingDisplay/RatingDisplay";
import useSWRMutation from "swr/mutation";
import { swrKeys } from "@/fetchers/swrKeys";
import { authDel, authGet } from "@/fetchers/fetcher";
import { IUser } from "@/typings/User.type";
import useSWR from "swr";

interface IReviewItemProps {
  review: IReview;
  user: IUser;
}

export default function ReviewItem({ review, user }: IReviewItemProps) {
  const {user: commentUser, rating, comment, id, show_id} = review;
  const { mutate } = useSWR(swrKeys.showReviews(show_id), authGet);
  const { trigger } = useSWRMutation(swrKeys.review(id), authDel, {
    throwOnError: false,
    onSuccess: (data) => mutate()
  });

  const isButtonVisible = user.id === commentUser.id;

  return (
    <Flex bg="purple" borderRadius="26px" flexGrow={1} className="review-item">
        <Flex alignItems={'center'} margin={2} className="review-item-avatar">
          <Image borderRadius="full" src={commentUser.image_url} fallbackSrc="https://fakeimg.pl/60x60/353b38/e85115?text=JD" marginRight={4}/>
        </Flex>
        <Flex width="30%" direction="column" marginRight={3} justifyContent="center" className="review-item-user-and-rating">
          <Text overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis"><b>{commentUser.email}</b></Text>
          <Flex gap={2}>
            <Text>{rating}/5</Text>
            <RatingDisplay value={rating} />
          </Flex>
        </Flex>
        <Flex className="review-item-comment" alignItems="center">
          {comment}
        </Flex>
        {
          isButtonVisible &&
          <Flex justifyContent="flex-end" alignItems="center" marginRight={4} flexGrow={1} className="review-item-remove-button">
            <Button size="sm" onClick={() => trigger()}>Remove</Button>
          </Flex>
        }
    </Flex>
  )
}
