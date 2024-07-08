import { IShow } from "@/typings/Show.type";
import { Box, Card, CardBody, CardHeader, Container, Heading, Image, Stack, StackDivider } from "@chakra-ui/react";

function getAverageRatingText(averageRating: number | undefined) {
  return (typeof averageRating !== 'undefined') ?
    (Math.round((averageRating + Number.EPSILON) * 100) / 100) + ' / 10' :
    'no ratings';
}

export default function ShowDetails(props: IShow) {
  const {title, description, averageRating, imageUrl} = props;
  const averageRatingText = getAverageRatingText(averageRating);

  return (
    <Container>
      <Card marginBottom={8}>
        <CardHeader>
          <Image src={imageUrl} fallbackSrc='https://fakeimg.pl/600x400/353b38/e85115?text=TV+Show' pb={4}/>
          <Heading size='md'>
            {title}
          </Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing={4} marginBottom={2}>
            <Box>
              {description}
            </Box>
            <Box>
              {averageRatingText}
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Container>
  )
}