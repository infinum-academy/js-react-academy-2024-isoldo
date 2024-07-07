import { IReview } from "@/typings/Review.type";
import { Button, Card, CardBody, CardHeader, Container, Flex, Heading, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Textarea } from "@chakra-ui/react";

interface IReviewForm {
  onSubmitClick: (newReview: IReview) => void;
}

export default function ReviewForm({onSubmitClick}: IReviewForm) {
  const newReview: IReview = {
    email: 'new@infinum.com',
    avatar: 'https://fakeimg.pl/60x60/e000a1/2734e6?text=NG&font=noto',
    rating: 6,
    comment: 'I am new here'
  }
  return(
    <Container marginBottom={4}>
      <Card>
        <CardHeader>
          <Heading size='md'>Leave a review</Heading>
        </CardHeader>
        <CardBody>
          <Textarea placeholder='What did you think of the show?'></Textarea>
          <NumberInput defaultValue={10} min={1} max={10}>
            <NumberInputField />
          </NumberInput>
          <Flex flexDir='row-reverse'>
            <Button onClick={() => onSubmitClick(newReview)}>Submit review</Button>
          </Flex>
        </CardBody>
      </Card>
    </Container>
  )
}
