import { INewReview, IReview } from "@/typings/Review.type";
import { Box, Card, CardBody, Container, Flex, Heading, Stack } from "@chakra-ui/react";
import ReviewList from "../../review/ReviewList/ReviewList";
import ReviewForm from "../../review/ReviewForm/ReviewForm";
import { IUser } from "@/typings/User.type";

interface IShowReviewSectionProps {
  reviews: IReview[];
  onSubmit: (newReview: INewReview) => void;
  user: IUser;
}

export default function ShowReviewSection({reviews, onSubmit, user}: IShowReviewSectionProps) {
  return (
    <Container>
      <Flex gap={3} justifyContent="space-between">
        <Heading size='md' marginBottom={4} color="white">Reviews</Heading>
        <Card variant='unstyled'>
        <CardBody>
          <Stack>
            <Box>
              <ReviewForm onSubmit={onSubmit} user={user}/>
            </Box>
            <Box>
              <ReviewList reviews={reviews} user={user}/>
            </Box>
          </Stack>
        </CardBody>
      </Card>
      </Flex>
    </Container>
  )
}
