import { IShow } from "@/typings/Show.type";
import { Card, CardBody, Flex, Image, Show, Text } from "@chakra-ui/react";

interface IShowCardUnselectableProps {
  show: IShow;
}

export default function ShowCardUnselectable({show}: IShowCardUnselectableProps) {
  const {image_url, title} = show;

  return (
    <Card boxShadow="none">
      <CardBody background={"white"} minW="100px">
        <Flex flexDir='column'>
          <Show above="sm">
            <Image src={image_url} objectFit='cover' boxSize='200px'/>
          </Show>
          <Text color={"purple"}>{title}</Text>
        </Flex>
      </CardBody>
    </Card>
  );
}
