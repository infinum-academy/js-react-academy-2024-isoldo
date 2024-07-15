'use client';

import { Button, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function SidebarNavigation() {
  const colorScheme = "orange";
  const router = useRouter();

  const onLogoutClick = () => {
    localStorage.setItem("register-response-headers", JSON.stringify({}));
    router.push("/")
  };

  return (
    <VStack h='100vh' justifyContent='space-between' position='sticky' top='0px'>
      <VStack>
        <ButtonLinkWithSelectHighlight text='All shows' href='/all-shows' colorScheme={colorScheme} />
        <ButtonLinkWithSelectHighlight text='Top rated' href='/top-rated' colorScheme={colorScheme} />
        <ButtonLinkWithSelectHighlight text='My Profile' colorScheme={colorScheme} />
      </VStack>
      <Button colorScheme={colorScheme} variant={'solid'} onClick={onLogoutClick}>Log out</Button>

    </VStack>
  );
}

interface IButtonLinkWithSelectHighlight {
  text: string;
  href?: string;
  colorScheme: string;
}
function ButtonLinkWithSelectHighlight({text, href, colorScheme}: IButtonLinkWithSelectHighlight) {
  const path = usePathname();
  const isSelectedVariant = () => {return href === path ? 'solid' : 'outline'};

  if(href) {
    return <Button gap={3} as={Link} href={href} colorScheme={colorScheme} variant={isSelectedVariant()}>{text}</Button>
  }
  return <Button gap={3} colorScheme={colorScheme} variant={isSelectedVariant()}>{text}</Button>

}
