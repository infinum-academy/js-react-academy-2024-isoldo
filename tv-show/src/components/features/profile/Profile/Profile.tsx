'use client';

import { useUser } from "@/hooks/useUser";
import { IUser } from "@/typings/User.type";
import { Flex, Text, Image, Button } from "@chakra-ui/react";
import { useState } from "react";

interface IProfileProps {
  user: IUser;
}

export function Profile({user}: IProfileProps) {
  const [error, setError] = useState("");

  const onUploadClick = () => {
    setError("Currently unsupported");
  }

  return (
    <Flex direction="column" justifyContent="center" textAlign="center" gap={8}>
      <Flex direction="inherit" gap={2}>
        <Text fontSize="sm">EMAIL</Text>
        <Text fontSize="md">{user.email}</Text>
      </Flex>
      <Image borderRadius="full" src={user.image_url} fallbackSrc={"https://fakeimg.pl/200x200/353b38/e85115?text=JD"} />
      <Button isDisabled={true}>UPLOAD IMAGE</Button>
    </Flex>
  )
}
