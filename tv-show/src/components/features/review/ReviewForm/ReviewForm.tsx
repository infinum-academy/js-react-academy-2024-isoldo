'use client';

import { Button, Card, CardBody, Container, Flex, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import RatingInput from "../../rating/RatingInput/RatingInput";
import { INewReview } from "@/typings/Review.type";
import { IUser } from "@/typings/User.type";

interface IReviewFormProps {
  onSubmit: (newReview: INewReview) => void;
  user: IUser;
}

export default function ReviewForm({onSubmit}: IReviewFormProps) {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  return(
    <Container marginBottom={4}>
      <Card>
        <CardBody>
          <Textarea
            placeholder='What did you think of the show?'
            onBlur={(e) => setComment(e.target.value)}
          />
          <RatingInput label='rating-label' onChange={(n: number) => setRating(n)} value={rating}/>
          <Flex justifyContent='flex-end'>
            <Button onClick={() => {
              const newReview: INewReview = {
                comment,
                rating,
              };
              setRating(0);
              setComment('');
              onSubmit(newReview);
            }}>Submit review</Button>
          </Flex>
        </CardBody>
      </Card>
    </Container>
  )
}
