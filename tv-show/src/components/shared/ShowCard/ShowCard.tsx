import { IShow } from "@/typings/Show.type";
import { Card, CardBody, Flex, Image, Text } from "@chakra-ui/react";

interface IShowCardProps {
  show: IShow;
}

export default function ShowCard({show}: IShowCardProps) {
  const {image_url, title, average_rating} = show;
  return (
    <Card>
      <CardBody>
        <Flex flexDir='column'>
          <Image src={image_url} objectFit='cover' boxSize='200px'/>
          <Text>{title}</Text>
          <Text>{average_rating}</Text>
        </Flex>
      </CardBody>
    </Card>
  );
}
