import { Flex, Spinner } from "@chakra-ui/react";

export function CenteredSpinner() {
  return (
    <Flex h="100vh" direction="column" justifyContent='center' className="spinner-out">
      <Flex justifyContent="center" className="spinner-in">
        <Spinner size='xl'/>
      </Flex>
  </Flex>
  )
}
