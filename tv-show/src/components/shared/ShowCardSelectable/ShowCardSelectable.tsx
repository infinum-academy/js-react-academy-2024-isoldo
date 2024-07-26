import { IShow } from "@/typings/Show.type";
import { Button, Card, CardBody, Flex, Image, Text } from "@chakra-ui/react";

interface IShowCardSelectableProps {
  show: IShow;
  onClick: (show: IShow) => void;
  isSelected?: boolean;
}

export default function ShowCardSelectable({show, onClick, isSelected=false}: IShowCardSelectableProps) {
  const {image_url, title, average_rating} = show;
  return (
    <Card>
      <CardBody as={Button} onClick={() => onClick(show)} background={isSelected ? "green" : "white"}>
        <Flex flexDir='column'>
          <Image src={image_url} objectFit='cover' boxSize='200px'/>
          <Text>{title}</Text>
          <Text>{average_rating}</Text>
        </Flex>
      </CardBody>
    </Card>
  );
}
