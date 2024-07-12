'use client';

import { IReview } from "@/typings/Review.type";
import { getEmailAndAvatar } from "@/utils/randomUserGenerator";
import { Button, Card, CardBody, Container, Flex, NumberInput, NumberInputField, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import RatingInput from "../../rating/RatingInput/RatingInput";

interface IReviewFormProps {
  onSubmit: (newReview: IReview) => void;
}

export default function ReviewForm({onSubmit}: IReviewFormProps) {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const { email, avatar } = getEmailAndAvatar();

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
              const newReview: IReview = {
                comment,
                rating,
                email,
                avatar
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
