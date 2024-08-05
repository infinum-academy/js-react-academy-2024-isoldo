'use client';

import { loginPost, universalFetcher } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import { Button, Container, Flex, FormControl, FormLabel, Heading, Input, Modal, ModalContent, Show, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

interface ILoginFormInputs {
  email: string;
  password: string;
}

export default function LoginForm() {
  return (
    <>
    <Show above="md">
      <DesktopLoginWrapper>
        <LoginFormInner />
      </DesktopLoginWrapper>
    </Show>
    <Show below="md">
      <MobileLoginWrapper>
        <LoginFormInner />
      </MobileLoginWrapper>
    </Show>
  </>
  )
}

function LoginFormInner() {
  const { register, handleSubmit } = useForm<ILoginFormInputs>();
  const { mutate } = useSWR(swrKeys.user(), universalFetcher);
  const { trigger } = useSWRMutation(swrKeys.login(), loginPost, {
    onSuccess: ((data) => {
      console.log({data})
      mutate(data, {revalidate: false});
    })
  });

  const onLogin = (data: ILoginFormInputs) => {
    trigger(data);
  };

  return (
      <Flex direction="column" justifyContent="center" h="100%">
        <Heading marginBottom={8} as="h2" textAlign="center">TV Show App</Heading>
        <Flex as="form" direction="column" gap={3} onSubmit={handleSubmit(onLogin)}>
          <FormControl isRequired>
            <FormLabel color="white">Email</FormLabel>
            <Input {...register('email')} required type="email" />
          </FormControl>
          <FormControl>
            <FormLabel color="white">Password</FormLabel>
            <Input {...register('password')} required type="password" />
          </FormControl>
          <Container centerContent>
            <Button width="fit-content" type="submit">Login</Button>
          </Container>
          <Text color="white">Don't have an account? <Link href="/register"><b>Register</b></Link></Text>
        </Flex>
      </Flex>
  )
}

function DesktopLoginWrapper({children}: {children: ReactNode}) {
  return (
    <Modal isCentered isOpen={true} onClose={() => null}>
      <ModalContent bg="darkPurple">
        <Container centerContent w="500px" h="500px">
          {children}
        </Container>
      </ModalContent>
    </Modal>
  )
}

function MobileLoginWrapper({children}: {children: ReactNode}) {
  return (
    <Flex bg="purple" h="100vh" justifyContent="center">
      {children}
    </Flex>
  )
}
