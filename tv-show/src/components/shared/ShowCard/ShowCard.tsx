import { IShow } from "@/typings/Show.type";
import { Card, CardBody, CardFooter, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

interface IShowCardProps {
  show: IShow;
}

export default function ShowCard({show}: IShowCardProps) {
  const {id, image_url, title, average_rating} = show;
  return (
    <Card as={Link} href={`/all-shows/${id}`}>
      <CardBody bg="darkPurple" padding="0">
          <Image borderTopRadius="26px" src={image_url} height="100%" objectFit="cover"/>
      </CardBody>
      <CardFooter>
        <Flex flexDir='column'>
          <Text>{title}</Text>
          <Text>{average_rating || "N/A"}</Text>
        </Flex>
      </CardFooter>
    </Card>
  );
}
