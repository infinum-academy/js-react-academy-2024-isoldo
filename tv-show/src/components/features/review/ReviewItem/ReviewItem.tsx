import { IReview } from "@/typings/Review.type";
import { Box, Card, CardBody, Container, Flex, Image, Stack } from "@chakra-ui/react";

export default function ReviewItem(props: IReview) {
  const {email, avatar, rating, comment} = props;
  const ratingText = rating + ' / 10';

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
          </Stack>
        </CardBody>
      </Card>
    </Container>
  )
}
