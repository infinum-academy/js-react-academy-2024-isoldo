'use client';

import { isNavigationShown } from "@/components/features/auth/AuthRedirectContainer/AuthRedirectContainer";
import { useUser } from "@/hooks/useUser";
import { Button, VStack, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarNavigation() {
  const path = usePathname();
  const user = useUser();

  const onLogoutClick = () => {
    localStorage.setItem("register-response-headers", JSON.stringify({}));
    user.mutate(undefined, {revalidate: false});
  };

  if(!isNavigationShown(path)) {
    return null;
  }

  return (
    <VStack h='100vh' justifyContent='space-between' position='sticky' top='0px' alignItems="start">
      <VStack gap={2} alignItems="start">
        <Heading color="white"  margin={4}>TV Shows App</Heading>
        <ButtonLinkWithSelectHighlight text='All shows' href='/all-shows' />
        <ButtonLinkWithSelectHighlight text='Top rated' href='/top-rated' />
        <ButtonLinkWithSelectHighlight text='My Profile' />
      </VStack>
      <Button variant={'outline'} onClick={onLogoutClick}>Log out</Button>

    </VStack>
  );
}

interface IButtonLinkWithSelectHighlight {
  text: string;
  href?: string;
}
function ButtonLinkWithSelectHighlight({text, href}: IButtonLinkWithSelectHighlight) {
  const path = usePathname();
  const isSelectedVariant = () => {return href === path ? 'ghost' : 'outline'};

  if(href) {
    return <Button gap={3} as={Link} href={href} textAlign="start" variant={isSelectedVariant()}>{text}</Button>
  }
  return <Button gap={8} variant={isSelectedVariant()}>{text}</Button>

}
