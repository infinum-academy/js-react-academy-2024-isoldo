'use client';

import { useUser } from "@/hooks/useUser";
import { Button, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function SidebarNavigation() {
  const colorScheme = "orange";
  const user = useUser();

  const onLogoutClick = () => {
    localStorage.setItem("register-response-headers", JSON.stringify({}));
    user.mutate(undefined, {revalidate: false});
  };

  return (
    <VStack h='100vh' justifyContent='space-between' position='sticky' top='0px' bg="purple">
      <VStack>
        <ButtonLinkWithSelectHighlight text='All shows' href='/all-shows' />
        <ButtonLinkWithSelectHighlight text='Top rated' href='/top-rated' />
        <ButtonLinkWithSelectHighlight text='My Profile' />
      </VStack>
      <Button colorScheme={colorScheme} variant={'solid'} onClick={onLogoutClick}>Log out</Button>

    </VStack>
  );
}

interface IButtonLinkWithSelectHighlight {
  text: string;
  href?: string;
}
function ButtonLinkWithSelectHighlight({text, href}: IButtonLinkWithSelectHighlight) {
  const path = usePathname();
  const isSelectedVariant = () => {return href === path ? 'solid' : 'outline'};

  if(href) {
    return <Button gap={3} as={Link} href={href} variant={isSelectedVariant()}>{text}</Button>
  }
  return <Button gap={3} variant={isSelectedVariant()}>{text}</Button>

}
