'use client';
import { Container } from "@chakra-ui/react";
import ShowReviewSection from "../ShowReviewSection/ShowReviewSection";
import { IShow } from "@/typings/Show.type";
import { IReview } from "@/typings/Review.type";
import { useEffect, useState } from "react";
import ShowDetails from "../ShowDetails/ShowDetails";

function getShowData(): IShow {
  const showData: IShow = {
    title: "Better Call Saul",
    description: "The trials and tribulations of criminal lawyer Jimmy McGill in the years leading up to his fateful run-in with Walter White and Jesse Pinkman.",
    imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/08fd3bfadb7d07164a560a41d89765396d7be6c2f8475c35837990c1357f4c5f.jpg",
  };

  return showData;
}

function getReviews(): IReview[] {
  return loadReviewsFromLocalStorage();
}

const LOCAL_STORAGE_KEY = 'reviews';

function loadReviewsFromLocalStorage(): IReview[] {
  const reviewsString = localStorage.getItem(LOCAL_STORAGE_KEY);
  if(!reviewsString) {
    return [];
  }
  return JSON.parse(reviewsString);
}

function storeReviewsToLocalStorage(reviews: IReview[]) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(reviews));
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


export default function ShowContainer() {
  const [showData, setShowData] = useState<IShow>();
  const [reviews, setReviews] = useState<IReview[]>();

  const averageRating = calculateAverageRating(reviews);

  const onSubmit = (newReview: IReview) => {
    const newReviews = reviews ? [...reviews] : [];
    newReviews.push(newReview);
    storeReviewsToLocalStorage(newReviews);
    setReviews(newReviews);
  };

  const onRemove = (removedReview: IReview) => {
    const newReviews = reviews  && reviews.filter((review) => review != removedReview) || [];
    storeReviewsToLocalStorage(newReviews);
    setReviews(newReviews);
  }

  useEffect(() => {
    setShowData(getShowData());
    setReviews(getReviews());
  }, []);

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
