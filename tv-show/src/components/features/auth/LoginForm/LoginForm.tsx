'use client';

import { loginPost, universalFetcher } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import { Button, Container, Flex, FormControl, FormLabel, Heading, Input, Text } from "@chakra-ui/react";
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
    <Flex height="100vh" direction='row' justifyContent="center" alignItems="center">
      <Flex direction='column' alignItems="center" justifyContent="center" w={[200,400,600]} bg="purple" color="white" borderRadius="26px">
        <Container margin={8} centerContent>
        <Heading marginBottom={8} as="h2">Login</Heading>
        <Flex as="form" width="80%" display="flex" flexDirection="column" alignItems="center" gap={3} onSubmit={handleSubmit(onLogin)}>
          <FormControl isRequired={true}>
            <FormLabel>Email</FormLabel>
            <Input {...register('email')} required type="email" />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input {...register('password')} required type="password" />
          </FormControl>
          <Button type="submit">Login</Button>
          <Text>Don't have an account? <Link href="/register"><b>Register</b></Link></Text>
        </Flex>
          </Container>
      </Flex>
    </Flex>
  )
}
