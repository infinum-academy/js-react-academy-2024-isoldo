'use client';

import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { PickerNavButtons } from "./components/PickerNavButtons";
import { PickerContext } from "./components/PickerContextProvider";
import { useContext } from "react";
import { PickerShowsGrid } from "./components/PickerShowsGrid";

export function Picker() {
  const ctx = useContext(PickerContext);

  const isFinalStep = ctx.currentStep === (ctx.stepCount-1);

  return (
    <Modal isOpen={true} onClose={() => null}>
      <ModalOverlay />
      <ModalContent>
          <ModalHeader>Picker</ModalHeader>
          <ModalBody>
            <PickerShowsGrid/>
          </ModalBody>
          <ModalFooter>
            <PickerNavButtons />
          </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
