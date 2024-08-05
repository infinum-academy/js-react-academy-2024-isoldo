import { IShow } from "@/typings/Show.type";
import { Button, Card, CardBody, Flex, Image, Show, Text } from "@chakra-ui/react";

interface IShowCardSelectableProps {
  show: IShow;
  onClick: (show: IShow) => void;
  isSelected?: boolean;
}

export default function ShowCardSelectable({show, onClick, isSelected=false}: IShowCardSelectableProps) {
  const {image_url, title} = show;

  const onShowClick = () => {
    onClick(show);
  }

  const background = isSelected ? "lightPurple" : "white";
  const textColor = isSelected ? "white" : "purple"

  return (
    <Card boxShadow="none">
      <CardBody onClick={onShowClick} background={background} minW="100px">
        <Flex flexDir='column'>
          <Show above="sm">
            <Image src={image_url} objectFit='cover' boxSize='200px'/>
          </Show>
          <Text color={textColor}>{title}</Text>
        </Flex>
      </CardBody>
    </Card>
  );
}
