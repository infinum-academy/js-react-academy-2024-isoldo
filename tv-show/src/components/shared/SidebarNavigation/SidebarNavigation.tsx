import { Button, VStack } from "@chakra-ui/react";
import Link from "next/link";

export default function SidebarNavigation() {
  return (
    <VStack h='100vh' justifyContent='space-between'>
      <VStack>
        <Button href='/all-shows' as={Link}>All shows</Button>
        <Button href='/top-rated' as={Link}>Top rated</Button>
        <Button>My Profile</Button>
      </VStack>
      <Button>Log out</Button>
    </VStack>
  );
}
