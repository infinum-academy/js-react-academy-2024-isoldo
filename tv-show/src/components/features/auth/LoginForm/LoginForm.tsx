'use client';

import { loginPost, universalFetcher } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import { Button, Container, FormControl, FormLabel, Heading, Input, Modal, ModalContent, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

interface ILoginFormInputs {
  email: string;
  password: string;
}

export default function LoginForm() {
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
    <Modal isCentered isOpen={true} onClose={() => null}>
      <ModalContent alignContent="center" justifyContent="center" bg="darkPurple">
        <Container centerContent bg="purple" borderRadius="26px">
        <Heading marginBottom={8} as="h2" color="white">TV Show App</Heading>
        <form onSubmit={handleSubmit(onLogin)}>
          <FormControl isRequired>
            <FormLabel color="white">Email</FormLabel>
            <Input {...register('email')} required type="email" />
          </FormControl>
          <FormControl>
            <FormLabel color="white">Password</FormLabel>
            <Input {...register('password')} required type="password" />
          </FormControl>
          <Button type="submit">Login</Button>
          <Text color="white">Don't have an account? <Link href="/register"><b>Register</b></Link></Text>
        </form>
        </Container>
      </ModalContent>
    </Modal>
  )
}
