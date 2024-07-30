'use client';
import { Container } from "@chakra-ui/react";
import ShowReviewSection from "../ShowReviewSection/ShowReviewSection";
import { IShow } from "@/typings/Show.type";
import { useEffect } from "react";
import ShowDetails from "../ShowDetails/ShowDetails";
import { swrKeys } from "@/fetchers/swrKeys";
import useSWR, { SWRResponse } from "swr";
import { INewReview, IReview } from "@/typings/Review.type";
import useSWRMutation from "swr/mutation";
import { authGet, authPost } from "@/fetchers/fetcher";
import { useUser } from "@/hooks/useUser";
import ErrorBox from "@/components/shared/ErrorBox/ErrorBox";

interface IReviews {
  reviews: IReview[];
  meta: any;
}

function useReviews(id: string):SWRResponse<IReviews, any> {
  return useSWR(swrKeys.showReviews(Number(id)), authGet<IReviews>);
}

function calculateAverageRating(reviews: IReview[] | undefined): number | undefined {
  if(!reviews?.length) {
    return undefined;
  }

  let averageRating = 0;
  reviews.forEach(review => averageRating += review.rating);
  averageRating /= reviews.length;

  return averageRating;
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

  if(user.isLoading) {
    return;
  }

  if(!user.data) {
    return <ErrorBox title="Error loading user details" />
  }

  const onSubmit = (newReview: INewReview) => {
    const data = {
      ...newReview,
      show_id: Number(showData.id)
    };
    trigger(data);
  };

  useEffect(() => {
    if(remoteReviews.isLoading || !remoteReviews.data) {
      return;
    }
  }, [remoteReviews]);

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
