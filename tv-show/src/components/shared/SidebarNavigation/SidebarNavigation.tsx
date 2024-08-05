'use client';

import { useUser } from "@/hooks/useUser";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Button, VStack, Heading, Show, Flex, Drawer, useDisclosure, DrawerOverlay, DrawerContent, IconButton, Text, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function isNavigationShown(path: string) {
  const noSidebarPaths = [
    "/login",
    "/register"
  ]
  return !noSidebarPaths.includes(path);
}

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
    <>
      <Show above="md">
        <DekstopSidebarNav title="TV Shows App" onLogoutClick={onLogoutClick} />
      </Show>
      <Show below="md">
        <MobileSidebarNav title="TV Shows App" onLogoutClick={onLogoutClick} />
      </Show>
    </>
  )
}

interface ISidenavProps {
  title: string;
  onLogoutClick: () => void;
}

function DekstopSidebarNav({title, onLogoutClick}: ISidenavProps) {
  const [clicked, setClicked] = useState(false);
  return (
    <VStack h='100vh' maxWidth={"md"} justifyContent='space-between' position='sticky' top='0px' alignItems="start" className="desktop-sidebarnav">
      <VStack gap={2} alignItems="start">
        <Heading margin={4}>{title}</Heading>
        <ButtonLinkWithSelectHighlight text='All shows' href='/all-shows' />
        <ButtonLinkWithSelectHighlight text='Top rated' href='/top-rated' />
        <ButtonLinkWithSelectHighlight text='My Profile' href='/profile' />
      </VStack>
      <Button isLoading={clicked} variant='outline' onClick={() => { onLogoutClick(); setClicked(true);}}>Log out</Button>

    </VStack>
  );
}

function MobileSidebarNav({title, onLogoutClick}: ISidenavProps) {
  const {isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex padding={3} justifyContent="space-between">
      <Heading>{title}</Heading>
      <IconButton variant="outline" icon={<HamburgerIcon />} onClick={onOpen} aria-label="open-menu-button" />
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="purple">
          <Flex padding={3} direction="column" justifyContent="space-between" flexGrow={1}>
            <Stack>
              <Flex justifyContent="flex-end">
                <IconButton variant="ghost" icon={<CloseIcon />} onClick={onClose} aria-label="close-menu-button" />
              </Flex>
              <Link onClick={onClose} href="/all-shows">All shows</Link>
              <Link onClick={onClose} href="/top-rated">Top rated</Link>
              <Link onClick={onClose} href="/profile">My profile</Link>
            </Stack>
            <Button isDisabled={true} variant="outline" onClick={onLogoutClick}>Log out</Button>
          </Flex>
        </DrawerContent>
      </Drawer>
    </Flex>
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
