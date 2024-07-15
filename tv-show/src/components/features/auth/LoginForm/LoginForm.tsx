import { fetcher } from "@/fetchers/fetcher";
import { mutator } from "@/fetchers/mutators";
import { swrKeys } from "@/fetchers/swrKeys";
import { Button, Flex, FormControl, FormLabel, Heading, Input, Text } from "@chakra-ui/react";
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
  const { mutate } = useSWR(swrKeys.user(), fetcher);
  const { trigger } = useSWRMutation(swrKeys.login(), mutator, {
    onSuccess: ((data) => {
      mutate(data, {revalidate: false});
    })
  });

  const onLogin = (data: ILoginFormInputs) => {
    trigger(data);
  };

  return (
    <Flex direction='row' justifyContent="center" alignItems="center" marginTop={10}>
      <Flex direction='column' gap={3} alignItems="center" maxWidth="640px">
        <Heading as="h2">Login</Heading>
        <Text>Log in using your credentials</Text>
        <Flex as="form" width="100%" display="flex" flexDirection="column" alignItems="center" gap={3} onSubmit={handleSubmit(onLogin)}>
          <FormControl isRequired={true}>
            <FormLabel>Email</FormLabel>
            <Input {...register('email')} required type="email" />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input {...register('password')} required type="password" />
          </FormControl>
          <Button type="submit">Login</Button>
          <Text>Not a user? <Link href="/register">Register here</Link></Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
