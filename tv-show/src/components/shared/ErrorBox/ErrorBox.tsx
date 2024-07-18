import { Alert, AlertDescription, AlertIcon, AlertTitle, Card, CardBody, Flex } from "@chakra-ui/react";

interface IErrorBoxProps {
  title: string;
  description?: string;
}

export default function ErrorBox({title, description}: IErrorBoxProps) {
  return (
    <Flex justifyContent='center'>
      <Card>
        <CardBody>
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>{title}</AlertTitle>
          {description && <AlertDescription>{description}</AlertDescription>}
        </Alert>
        </CardBody>
      </Card>
    </Flex>
  )
}
