import { IShow } from "@/typings/Show.type";
import { Card, CardBody, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

interface IShowCardProps {
  show: IShow;
}

export default function ShowCard({show}: IShowCardProps) {
  const {id, image_url, title, average_rating} = show;
  return (
    <Card as={Link} href={`/all-shows/${id}`}>
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
