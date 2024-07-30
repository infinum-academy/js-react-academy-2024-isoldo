'use client';
import ShowReviewSection from "../ShowReviewSection/ShowReviewSection";
import { IShow } from "@/typings/Show.type";
import ShowDetails from "../ShowDetails/ShowDetails";
import { swrKeys } from "@/fetchers/swrKeys";
import useSWR, { SWRResponse } from "swr";
import { INewReview, IReview } from "@/typings/Review.type";
import useSWRMutation from "swr/mutation";
import { authGet, authPost } from "@/fetchers/fetcher";
import { useUser } from "@/hooks/useUser";
import ErrorBox from "@/components/shared/ErrorBox/ErrorBox";
import { Flex } from "@chakra-ui/react";

interface IReviews {
  reviews: IReview[];
  meta: any;
}

function useReviews(id: string):SWRResponse<IReviews, any> {
  return useSWR(swrKeys.showReviews(Number(id)), authGet<IReviews>);
}

interface IShowContainerProps {
  showData: IShow;
}

export default function ShowContainer({showData}: IShowContainerProps) {
  const user = useUser();
  const remoteReviews = useReviews(showData.id);
  const { trigger } = useSWRMutation(swrKeys.reviews(), authPost<IReview>, {
    onSuccess: ((data) => {
      remoteReviews.mutate();
    })
  });

  const onSubmit = (newReview: INewReview) => {
    // TODO remove magic numbers
    if (!newReview.comment || newReview.rating < 1 || newReview.rating > 5) {
      return;
    }
    const data = {
      ...newReview,
      show_id: Number(showData.id)
    };
    trigger(data);
  };

  if(user.isLoading) {
    return;
  }

  if(!user.data) {
    return <ErrorBox title="Error loading user details" />
  }

  if(!showData || !remoteReviews.data?.reviews) {
    return;
  }

  return (
    <Flex justifyContent="center">
      <Flex bg="darkPurple" direction="column" justifyContent="center" id="details-and-review">
        <ShowDetails show={showData} averageRating={showData.average_rating} />
        <ShowReviewSection reviews={remoteReviews.data.reviews} onSubmit={onSubmit} user={user.data.user} />
      </Flex>
    </Flex>
  )
}
