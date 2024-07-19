'use client';
import { Container } from "@chakra-ui/react";
import ShowReviewSection from "../ShowReviewSection/ShowReviewSection";
import { IShow } from "@/typings/Show.type";
import { useEffect, useState } from "react";
import ShowDetails from "../ShowDetails/ShowDetails";
import { swrKeys } from "@/fetchers/swrKeys";
import useSWR, { SWRResponse } from "swr";
import { authenticatedFetcher } from "@/fetchers/fetcher";
import { INewReview, IReview } from "@/typings/Review.type";
import useSWRMutation from "swr/mutation";
import { mutator } from "@/fetchers/mutators";

interface IReviews {
  reviews: IReview[];
  meta: any;
}

function getReviews(id: string):SWRResponse<IReviews, any> {
  return useSWR(swrKeys.showReviews(Number(id)), authenticatedFetcher<IReviews>);
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
  const remoteReviews = getReviews(showData.id);
  const [reviews, setReviews] = useState<IReview[]>();
  const { trigger } = useSWRMutation(swrKeys.reviews(), mutator, {
    onSuccess: ((data) => {
      const newList: IReview[] = [ data.review, ...(reviews || [])];
      console.log({newList});
      // handle pagination?
      remoteReviews.mutate({reviews: newList, meta: remoteReviews?.data?.meta || {}})
    })
  });

  const averageRating = calculateAverageRating(reviews);

  const onSubmit = (newReview: INewReview) => {
    const data = {
      ...newReview,
      show_id: Number(showData.id)
    };
    trigger(data);
  };

  const onRemove = (removedReview: IReview) => {
    const newReviews = reviews  && reviews.filter((review) => review != removedReview) || [];
    setReviews(newReviews);
  }

  useEffect(() => {
    if(remoteReviews.isLoading || !remoteReviews.data) {
      return;
    }
    setReviews(remoteReviews.data.reviews);
  }, [remoteReviews, setReviews]);

  if(!showData || !reviews) {
    return;
  }

  return (
    <Container>
      <ShowDetails show={showData} averageRating={averageRating} />
      <ShowReviewSection reviews={reviews} onSubmit={onSubmit} onRemove={onRemove} />
    </Container>
  )
}
