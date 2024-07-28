'use client';

import { LockIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputLeftElement, InputProps } from "@chakra-ui/react";
import { forwardRef, useState } from "react";

interface IPasswordInputProps extends InputProps {
  showOption?: boolean;
}

export const PasswordInput = forwardRef(({ showOption, ...inputProps }: IPasswordInputProps, ref) => {
  const [show, setShow] = useState(false);

  return (
    <InputGroup>
      <InputLeftElement><LockIcon /></InputLeftElement>
      <Input ref={ref} type={show ? 'text' : 'password'} {...inputProps}/>
      {
        showOption && <Button onClick={() => setShow(!show)}>{`${show ? "Hide" : "Show"}`}</Button>
      }
    </InputGroup>
  )
});
