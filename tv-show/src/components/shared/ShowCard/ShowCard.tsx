import { Container, Flex, Image } from "@chakra-ui/react";

interface IShowCardProps {
  title: string;
  imageUrl?: string;
  averageRating?: number;
}

export default function ShowCard({title, imageUrl, averageRating}: IShowCardProps) {
  return (
    <Container>
      <Image src={imageUrl} objectFit='cover' boxSize='200px'/>
      <Flex>
        {title}
      </Flex>
      <Flex>{averageRating}</Flex>
    </Container>
  );
}
