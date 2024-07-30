import { IShow } from "@/typings/Show.type";
import { StarIcon } from "@chakra-ui/icons";
import { Box, Card, CardBody, CardHeader, Flex, Heading, Image, Stack, StackDivider } from "@chakra-ui/react";

function getAverageRatingText(averageRating: number | undefined) {
  return (typeof averageRating !== 'undefined') ?
    (Math.round((averageRating + Number.EPSILON) * 100) / 100) + ' / 5' :
    'no ratings';
}

interface IShowDetailsProps {
  show: IShow;
  averageRating: number | undefined;
}

export default function ShowDetails({show, averageRating}: IShowDetailsProps) {
  const {title, description, image_url} = show;
  const averageRatingText = getAverageRatingText(averageRating);

  return (
    <Flex bg="darkPurple" id="show-details">
      <Card marginBottom={8}>
        <CardHeader padding="0">
          <Image maxHeight="400px" width="100%" fit="cover" src={image_url} fallbackSrc='https://fakeimg.pl/600x400/353b38/e85115?text=TV+Show' pb={4}/>
          <Heading size='md' color="purple">
            {title}
          </Heading>
        </CardHeader>

        <CardBody color="purple">
          <Stack divider={<StackDivider />} spacing={4} marginBottom={2}>
            <Box >
              {description}
            </Box>
            <Box>
              <Flex alignItems="center" gap={2}>
                <StarIcon />
                {averageRatingText}
              </Flex>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Flex>
  )
}
