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
    <Container bg="darkPurple" marginBottom={4}>
      <Card>
        <CardBody bg="darkPurple">
          <Textarea
            placeholder='What did you think of the show?'
            onBlur={(e) => setComment(e.target.value)}
          />
          <Flex justifyContent='flex-end'>
          <RatingInput label='Rating' onChange={(n: number) => setRating(n)} value={rating}/>
            <Button onClick={() => {
              const newReview: INewReview = {
                comment,
                rating,
              };
              setRating(0);
              setComment('');
              onSubmit(newReview);
            }}>Post</Button>
          </Flex>
        </CardBody>
      </Card>
    </Container>
  )
}
