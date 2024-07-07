import { IReview } from "@/typings/Review.type";
import { Button, Card, CardBody, CardHeader, Container, Flex, Heading, NumberInput, NumberInputField, Textarea } from "@chakra-ui/react";
import { useState } from "react";

interface IReviewForm {
  onSubmitClick: (newReview: IReview) => void;
}

export default function ReviewForm({onSubmitClick}: IReviewForm) {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(1);

  return(
    <Container marginBottom={4}>
      <Card>
        <CardHeader>
          <Heading size='md'>Leave a review</Heading>
        </CardHeader>
        <CardBody>
          <Textarea
            placeholder='What did you think of the show?'
            onChange={(e) => setComment(e.target.value)}
          />
          <NumberInput defaultValue={1} min={1} max={10}>
            <NumberInputField
              onChange={(e) => setRating(Number(e.target.value))}
            />
          </NumberInput>
          <Flex flexDir='row-reverse'>
            <Button onClick={() => {
              const newReview: IReview = {
                comment,
                rating,
                email: 'newguy@infinum.com',
                avatar: 'https://fakeimg.pl/60x60/e000a1/2734e6?text=NG&font=noto'
              };
              onSubmitClick(newReview);
            }}>Submit review</Button>
          </Flex>
        </CardBody>
      </Card>
    </Container>
  )
}
