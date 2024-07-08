import { IReview } from "@/typings/Review.type";
import { getEmailAndAvatar } from "@/utils/randomUserGenerator";
import { Button, Card, CardBody, Container, Flex, NumberInput, NumberInputField, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import Rating from "../../rating/Rating/Rating";

interface IReviewForm {
  onSubmitClick: (newReview: IReview) => void;
}

export default function ReviewForm({onSubmitClick}: IReviewForm) {
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
          <Rating label='rating-label' onChange={(n: number) => setRating(n)} value={rating}/>
          <Flex flexDir='row-reverse'>
            <Button onClick={() => {
              const newReview: IReview = {
                comment,
                rating,
                email,
                avatar
              };
              onSubmitClick(newReview);
            }}>Submit review</Button>
          </Flex>
        </CardBody>
      </Card>
    </Container>
  )
}
