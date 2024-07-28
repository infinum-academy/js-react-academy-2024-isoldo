'use client';

import { Flex, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { PickerNavButtons } from "./components/PickerNavButtons";
import { PickerContext } from "./components/PickerContextProvider";
import { useContext, useState } from "react";
import { PickerShowsGrid } from "./components/PickerShowsGrid";
import { PickerProgress } from "./components/PickerProgress";

export function Picker() {
  const ctx = useContext(PickerContext);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal isOpen={ctx.isModalOpen} onClose={() => ctx.setIsModalOpen(false)}>
      <ModalOverlay />
      <ModalContent>
          <ModalHeader>Picker</ModalHeader>
          <ModalBody>
            <PickerShowsGrid/>
          </ModalBody>
          <ModalFooter>
            <Flex direction="column" width="100%">
            <PickerProgress />
            <PickerNavButtons />
            </Flex>
          </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
