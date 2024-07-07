import { IReview } from "@/typings/Review.type";
import { Container, Heading } from "@chakra-ui/react";
import ReviewList from "../../review/ReviewList/ReviewList";
import ReviewForm from "../../review/ReviewForm/ReviewForm";

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

export default function ShowReviewSection() {
  const reviews: IReview[] = getReviews();
  const onSubmitClick = (newReview: IReview) => console.log({newReview});

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
