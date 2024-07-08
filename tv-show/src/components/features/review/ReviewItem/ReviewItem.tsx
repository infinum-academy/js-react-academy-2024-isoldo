import { IReview } from "@/typings/Review.type";
import { Box, Button, Card, CardBody, Container, Flex, Image, Stack } from "@chakra-ui/react";

interface IReviewItem {
  review: IReview;
  onRemoveClick: (review: IReview) => void;
}

export default function ReviewItem(props: IReviewItem) {
  const {email, avatar, rating, comment} = props.review;
  const ratingText = rating + ' / 5';

  return (
    <Container>
      <Card>
        <CardBody>
          <Stack spacing={4}>
            <Flex alignItems={'center'} margin={2}>
              <Image src={avatar} marginRight={4}/>
              <Box>{email}</Box>
            </Flex>
            <Flex>{ratingText}</Flex>
            <Flex>{comment}</Flex>
            <Flex flexDir='row-reverse'>
              <Button onClick={() => props.onRemoveClick(props.review)}>Remove</Button>
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </Container>
  )
}
