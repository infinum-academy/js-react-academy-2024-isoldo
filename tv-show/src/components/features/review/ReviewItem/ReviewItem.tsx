import { IReview } from "@/typings/Review.type";
import { Box, Button, Card, CardBody, Container, Flex, Image, Stack } from "@chakra-ui/react";
import RatingDisplay from "../../rating/RatingDisplay/RatingDisplay";
import useSWRMutation from "swr/mutation";
import { swrKeys } from "@/fetchers/swrKeys";
import { authDel } from "@/fetchers/fetcher";
import { IUser } from "@/typings/User.type";

interface IReviewItemProps {
  review: IReview;
  user: IUser;
}

export default function ReviewItem(props: IReviewItemProps) {
  const {user, rating, comment, id} = props.review;
  const { trigger } = useSWRMutation(swrKeys.review(id), authDel, {
    throwOnError: false,
  });

  const isButtonVisible = props.user.id === user.id;

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
            {
              isButtonVisible &&
              <Flex flexDir='row-reverse'>
                <Button onClick={() => trigger()}>Remove</Button>
              </Flex>
            }
          </Stack>
        </CardBody>
      </Card>
    </Container>
  )
}
