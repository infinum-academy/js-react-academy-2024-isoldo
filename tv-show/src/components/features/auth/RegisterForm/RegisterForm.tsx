'use client';

import { fetcher } from "@/fetchers/fetcher";
import { registerMutator } from "@/fetchers/mutators";
import { swrKeys } from "@/fetchers/swrKeys";
import { Button, Flex, FormControl, FormLabel, Heading, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

interface IRegisterFormInputs {
  email: string;
  password: string;
  password_confirmation: string;
}

export default function RegisterForm() {
  const [pwMismatchError, setPwMismatchError] = useState(false);
  const { register, watch, handleSubmit } = useForm<IRegisterFormInputs>();
  const { mutate } = useSWR(swrKeys.user(), fetcher);
  const { trigger } = useSWRMutation(swrKeys.register(), registerMutator, {
    onSuccess: ((data) => {
      mutate(data, {revalidate: false});
    })
  });

  const onRegister = (data: IRegisterFormInputs) => {
    trigger(data);
  };

  const pw = watch("password");
  const pw_confirmation = watch("password_confirmation");

  useEffect(() => {
    setPwMismatchError(pw !== pw_confirmation);
  }, [pw, pw_confirmation, setPwMismatchError, pwMismatchError]);

  return (
    <Flex direction='row' justifyContent="center" alignItems="center" marginTop={10}>
      <Flex direction='column' gap={3} alignItems="center" maxWidth="640px">
        <Heading as="h2">Register</Heading>
        <Text>Log in using your credentials</Text>
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
          <Button isDisabled={pw!==pw_confirmation || !pw_confirmation} type="submit">Register</Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
