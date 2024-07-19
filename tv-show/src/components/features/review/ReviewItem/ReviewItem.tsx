import { IReview } from "@/typings/Review.type";
import { Box, Button, Card, CardBody, Container, Flex, Image, Stack } from "@chakra-ui/react";
import RatingDisplay from "../../rating/RatingDisplay/RatingDisplay";

interface IReviewItemProps {
  review: IReview;
  onRemoveClick: (review: IReview) => void;
}

export default function ReviewItem(props: IReviewItemProps) {
  const {user, rating, comment} = props.review;

  return (
    <Container>
      <Card>
        <CardBody>
          <Stack spacing={4}>
            <Flex alignItems={'center'} margin={2}>
              <Image src={user.image_url} fallbackSrc="https://fakeimg.pl/60x60/353b38/e85115?text=JD" marginRight={4}/>
              <Box>{user.email}</Box>
            </Flex>
            <Flex><RatingDisplay value={rating} /></Flex>
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
