import { IReview } from "@/typings/Review.type";
import { Box, Card, CardBody, Container, Heading, Stack } from "@chakra-ui/react";
import ReviewList from "../../review/ReviewList/ReviewList";
import ReviewForm from "../../review/ReviewForm/ReviewForm";

interface IShowReviewSectionProps {
  reviews: IReview[];
  onSubmit: (newReview: IReview) => void;
  onRemove: (removedReview: IReview) => void;
}

export default function ShowReviewSection({reviews, onSubmit, onRemove}: IShowReviewSectionProps) {
  return (
    <Container>
       <Heading size='md' marginBottom={4}>
        Reviews
      </Heading>
      <Card variant='unstyled'>
        <CardBody>
          <Stack>
            <Box>
              <ReviewForm onSubmit={onSubmit}/>
            </Box>
            <Box>
              <ReviewList reviews={reviews} onRemoveClick={onRemove} />
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Container>
  )
}
