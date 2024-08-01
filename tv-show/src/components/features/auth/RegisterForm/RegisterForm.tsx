'use client';

import { authPost, universalFetcher } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import { Button, Container, Flex, FormControl, FormLabel, Heading, Input, Link, Modal, ModalContent, Show, Text } from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

export default function RegisterForm() {
  return(
    <>
    <Show above="md">
      <DesktopWrapper>
        <RegisterFormInner />
      </DesktopWrapper>
    </Show>
    <Show below="md">
      <MobileWrapper>
        <RegisterFormInner />
      </MobileWrapper>
    </Show>
  </>
  )
}

interface IRegisterFormInputs {
  email: string;
  password: string;
  password_confirmation: string;
}

function RegisterFormInner() {
  const [pwMismatchError, setPwMismatchError] = useState(false);
  const { register, watch, handleSubmit } = useForm<IRegisterFormInputs>();
  const { mutate } = useSWR(swrKeys.user(), universalFetcher);
  const { trigger } = useSWRMutation(swrKeys.register(), authPost, {
    onSuccess: ((data) => {
      mutate(data, {revalidate: false});
    })
  });

  const onRegister = (data: IRegisterFormInputs) => {
    trigger(data);
  };

  const password = watch("password");
  const passwordConfirmation = watch("password_confirmation");
  const isRegisterButtonDisabled = password !== passwordConfirmation || !passwordConfirmation;

  useEffect(() => {
    setPwMismatchError(password !== passwordConfirmation);
  }, [password, passwordConfirmation, setPwMismatchError, pwMismatchError]);

  return (
    <Flex direction="column" justifyContent="center" h="100%">
      <Heading as="h2" textAlign="center" marginBottom={8}>TV Shows App</Heading>
      <Flex as="form" width="100%" display="flex" flexDirection="column" alignItems="center" gap={3} onSubmit={handleSubmit(onRegister)}>
        <FormControl isRequired={true}>
          <FormLabel>Email</FormLabel>
          <Input {...register('email')} required type="email" />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input {...register('password')} required type="password" />
        </FormControl>
        <FormControl>
          <FormLabel>Confirm password</FormLabel>
          <Input {...register('password_confirmation')} required type="password" />
        </FormControl>
        {pwMismatchError && <Text color="red">Passwords do not match</Text>}
        <Button isDisabled={isRegisterButtonDisabled} type="submit">Register</Button>
        <Text color="white">Already have an account? <Link href="/login"><b>Login</b></Link></Text>
      </Flex>
    </Flex>
  )
}

function DesktopWrapper({children}: {children: ReactNode}) {
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

function MobileWrapper({children}: {children: ReactNode}) {
  return (
    <Flex bg="purple" h="100vh" justifyContent="center">
      {children}
    </Flex>
  )
}
