'use client';
import { Container } from "@chakra-ui/react";
import ShowReviewSection from "../ShowReviewSection/ShowReviewSection";
import { IShow } from "@/typings/Show.type";
import { IReview } from "@/typings/Review.type";
import { useEffect, useState } from "react";
import ShowDetails from "../ShowDetails/ShowDetails";

interface IReviews {
  showId: number;
  reviews: IReview[];
}

function getReviews(id: number): IReview[] {
  const allReviews = loadReviewsFromLocalStorage();

  const reviewById = allReviews.find(review => review.showId === id);

  return reviewById?.reviews || [];
}

const LOCAL_STORAGE_KEY = 'reviews';

function loadReviewsFromLocalStorage(): IReviews[] {
  const reviewsString = localStorage.getItem(LOCAL_STORAGE_KEY);
  if(!reviewsString) {
    return [];
  }
  return JSON.parse(reviewsString);
}

function storeReviewsToLocalStorage(showId: number, reviews: IReview[]) {
  const reviewsString = localStorage.getItem(LOCAL_STORAGE_KEY);
  const reviewsObj: IReviews[] = JSON.parse(reviewsString || '[]');

  const newReviews = reviewsObj.filter((reviews) => reviews.showId != showId);
  newReviews.push({showId, reviews});

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newReviews));
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
  const [reviews, setReviews] = useState<IReview[]>();

  const averageRating = calculateAverageRating(reviews);

  const onSubmit = (newReview: IReview) => {
    const newReviews = reviews ? [...reviews] : [];
    newReviews.push(newReview);
    storeReviewsToLocalStorage(showData.id, newReviews);
    setReviews(newReviews);
  };

  const onRemove = (removedReview: IReview) => {
    const newReviews = reviews  && reviews.filter((review) => review != removedReview) || [];
    storeReviewsToLocalStorage(showData.id, newReviews);
    setReviews(newReviews);
  }

  useEffect(() => {
    setReviews(getReviews(showData.id));
  }, [setReviews]);

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
