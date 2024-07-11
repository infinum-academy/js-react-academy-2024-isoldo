import { Button, VStack } from "@chakra-ui/react";

export default function SidebarNavigation() {
  return (
    <VStack h='100vh' justifyContent='space-between'>
      <VStack>
        <Button>All shows</Button>
        <Button>Top rated</Button>
        <Button>My Profile</Button>
      </VStack>
      <Button>Log out</Button>
    </VStack>
  );
}
