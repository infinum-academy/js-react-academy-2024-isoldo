import { IReview } from "@/typings/Review.type";
import { Container, Heading } from "@chakra-ui/react";
import ReviewList from "../../review/ReviewList/ReviewList";
import ReviewForm from "../../review/ReviewForm/ReviewForm";
import { useEffect, useState } from "react";

function getReviews(): IReview[] {
  const reviews: IReview[] = [
    {
      email: 'dummy@infinum.com',
      avatar: 'https://fakeimg.pl/60x60/353b38/eb9e9e?text=JD&font=noto',
      rating: 8,
      comment: 'Almost as good as Breaking Bad'
    },
    {
      email: 'silly@infinum.com',
      avatar: 'https://fakeimg.pl/60x60/349161/0010eb?text=SY&font=noto',
      rating: 4,
      comment: 'We need a Kim spin-off'
    },
    {
      email: 'putty@infinum.com',
      avatar: 'https://fakeimg.pl/60x60/301f60/a5d400?text=PT&font=noto',
      rating: 10,
      comment: 'Best. Show. Ever.'
    }
  ];

  return reviews;
}

interface IShowReviewSection {
  setAverageRating: (avg: number | undefined) => void;
}

export default function ShowReviewSection({setAverageRating}: IShowReviewSection) {
  const [reviews, setReviews] = useState<IReview[]>(getReviews());
  const onSubmitClick = (newReview: IReview) => {
    setReviews([...reviews, newReview]);
  };

 useEffect(() => {
  let averageRating = 0;
  if(reviews.length) {
    reviews.forEach((review => averageRating += review.rating));
    averageRating /= reviews.length;
    setAverageRating(averageRating);
  }
 }, [reviews]);

  return (
    <Container>
       <Heading size='md'>
        Reviews
      </Heading>
      <ReviewForm onSubmitClick={onSubmitClick}/>
      <ReviewList reviews={reviews} />
    </Container>
  )
}