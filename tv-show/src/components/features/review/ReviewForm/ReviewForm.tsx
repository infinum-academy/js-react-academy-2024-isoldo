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
    <Flex bg="darkPurple" direction="column" marginBottom={4} flexGrow={1} id="review-form">

          <Textarea
            borderRadius="26px"
            bg="white"
            _placeholder={{color: "lightPurple", opacity: 1}}
            placeholder='Enter review'
            color="darkPurple"
            onBlur={(e) => setComment(e.target.value)}
          />
          <Flex justifyContent='space-between' flexGrow={1}>
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
    </Flex>
  )
}
