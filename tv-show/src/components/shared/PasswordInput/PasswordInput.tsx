'use client';

import { LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { IconButton, Input, InputGroup, InputLeftElement, InputProps, InputRightElement } from "@chakra-ui/react";
import { forwardRef, useState } from "react";

interface IPasswordInputProps extends InputProps {
  showOption?: boolean;
}

export const PasswordInput = forwardRef(({ showOption, ...inputProps }: IPasswordInputProps, ref) => {
  const [show, setShow] = useState(false);

  return (
    <InputGroup>
      <InputLeftElement><LockIcon color="white"/></InputLeftElement>
      <Input ref={ref} type={show ? 'text' : 'password'} {...inputProps}/>
      {
        showOption &&
        <InputRightElement>
          <IconButton size="sm" variant="ghost" aria-label="password" icon={show ? <ViewOffIcon /> : <ViewIcon />} onClick={() => setShow(!show)}>{`${show ? "Hide" : "Show"}`}</IconButton>
        </InputRightElement>
      }
    </InputGroup>
  )
});
