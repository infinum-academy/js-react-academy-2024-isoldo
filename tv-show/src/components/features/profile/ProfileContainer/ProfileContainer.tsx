'use client';

import { CenteredSpinner } from "@/components/shared/CenteredSpinner/CenteredSpinner";
import ErrorBox from "@/components/shared/ErrorBox/ErrorBox";
import { useUser } from "@/hooks/useUser";
import { Flex, Text, Image, Button } from "@chakra-ui/react";
import { useState } from "react";
import { Profile } from "../Profile/Profile";
import { PickerContextProvider } from "../../picker/Picker/components/PickerContextProvider";
import { Picker } from "../../picker/Picker/Picker";
import { PickerButton } from "../../picker/PickerButton/PickerButton";

export function ProfileContainer() {
  const user = useUser();

  if(user.error) {
    return <ErrorBox title="User Loading Error"/>
  }

  if(user.isLoading) {
    return <CenteredSpinner />
  }

  if(!user.data) {
    return <ErrorBox title="User not found" />
  }

  return (
    <Flex h="100vh" direction="column" justifyContent='center' className="profile-out">
      <Flex justifyContent="center" className="profile-in">
        <Flex direction="column" gap={8}>
          <Profile user={user.data.user} />
          <PickerContextProvider stepCount={4}>
            <PickerButton />
            <Picker />
          </PickerContextProvider>
        </Flex>
      </Flex>
    </Flex>
  )
}
