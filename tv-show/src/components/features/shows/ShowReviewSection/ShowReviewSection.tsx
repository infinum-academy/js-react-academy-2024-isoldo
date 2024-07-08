import { IReview } from "@/typings/Review.type";
import { Box, Card, CardBody, Container, Heading, Stack } from "@chakra-ui/react";
import ReviewList from "../../review/ReviewList/ReviewList";
import ReviewForm from "../../review/ReviewForm/ReviewForm";
import { useEffect, useState } from "react";

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

function calculateAverageRating(reviews: IReview[]) {
  let averageRating = 0;

  reviews.forEach((review) => averageRating += review.rating);
  if(reviews.length) {
    averageRating /= reviews.length;
  }

  return averageRating ?? undefined;
}

interface IShowReviewSection {
  setAverageRating: (avg: number | undefined) => void;
}

export default function ShowReviewSection({setAverageRating}: IShowReviewSection) {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [updated, setUpdated] = useState(false);
  const onSubmitClick = (newReview: IReview) => {
    setReviews([...reviews, newReview]);
    setUpdated(true);
  };
  const onRemoveClick = (deletedReview: IReview) => {
    const updatedReviews = reviews.filter((review) => review != deletedReview);
    setReviews(updatedReviews);
    setUpdated(true);
  };

  useEffect(() => {
    const localStorageReviews = loadReviewsFromLocalStorage();
    setReviews(localStorageReviews);
  }, []);

  useEffect(() => {
    const averageRating = calculateAverageRating(reviews);
    setAverageRating(averageRating);
    if(updated) {
      setUpdated(false);
      storeReviewsToLocalStorage(reviews);
    }
  }, [reviews]);

  return (
    <Container>
       <Heading size='md' marginBottom={4}>
        Reviews
      </Heading>
      <Card variant='unstyled'>
        <CardBody>
          <Stack>
            <Box>
              <ReviewForm onSubmitClick={onSubmitClick}/>
            </Box>
            <Box>
              <ReviewList reviews={reviews} onRemoveClick={onRemoveClick} />
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Container>
  )
}
