'use client';

import { PasswordInput } from "@/components/shared/PasswordInput/PasswordInput";
import { loginPost, universalFetcher } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import { Button, Container, Flex, FormControl, FormLabel, Heading, Input, Link, Modal, ModalContent, Show, Text } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
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
  const [errors, setErrors] = useState<string[]>([]);
  const [unprocessable, setUnprocessable] = useState(false);
  const { register, watch, handleSubmit } = useForm<IRegisterFormInputs>();
  const { mutate } = useSWR(swrKeys.user(), universalFetcher);
  const { trigger, isMutating } = useSWRMutation(swrKeys.register(), loginPost, {
    throwOnError: false,
    onSuccess: ((data) => {
      console.log({data})
      mutate(data, {revalidate: false});
    }),
    onError: (async (data) => {
      if(422 === data.cause?.status) {
        setUnprocessable(true);
        try {
          const msg = await data.cause.json();
          setErrors(msg.errors);
        } catch (e) {

        }
      }
    })
  });

  const onRegister = (data: IRegisterFormInputs) => {
    trigger(data);
  };

  const clearErrors = () => {
    setUnprocessable(false);
    setErrors([]);
  }

  const password = watch("password");
  const passwordConfirmation = watch("password_confirmation");
  const isRegisterButtonDisabled = password !== passwordConfirmation || !passwordConfirmation;
  const passwordMismatch = password && passwordConfirmation && (password !== passwordConfirmation);

  return (
    <Flex direction="column" justifyContent="center" h="100%">
      <Heading as="h2" textAlign="center" marginBottom={8}>TV Shows App</Heading>
      <Flex as="form" width="100%" display="flex" flexDirection="column" alignItems="center" gap={3} onSubmit={handleSubmit(onRegister)}>
        <FormControl isRequired={true} isDisabled={isMutating}>
          <FormLabel>Email</FormLabel>
          <Input {...register('email')} required type="email" />
        </FormControl>
        <FormControl isRequired isDisabled={isMutating}>
          <FormLabel>Password</FormLabel>
          <PasswordInput {...register('password')} onFocus={clearErrors} isInvalid={unprocessable} showOption={true}/>
        </FormControl>
        <FormControl isRequired isDisabled={isMutating}>
          <FormLabel>Confirm password</FormLabel>
          <PasswordInput {...register('password_confirmation')} onFocus={clearErrors} isInvalid={!!passwordMismatch || unprocessable} showOption={true}/>
        </FormControl>
        <Button isDisabled={isRegisterButtonDisabled} isLoading={isMutating} type="submit">SIGN UP</Button>
        {errors.length && <Text color="error">{errors[0]}</Text>}
        {passwordMismatch && <Text color="error">Passwords do not match</Text>}
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
