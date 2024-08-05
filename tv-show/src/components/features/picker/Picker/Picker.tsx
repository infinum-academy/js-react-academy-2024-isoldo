'use client';

import { Flex, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { PickerNavButtons } from "./components/PickerNavButtons";
import { PickerContext } from "./components/PickerContextProvider";
import { useContext } from "react";
import { PickerShowsGrid } from "./components/PickerShowsGrid";
import { PickerProgress } from "./components/PickerProgress";

export function Picker() {
  const ctx = useContext(PickerContext);

  const onClose = () => {
    ctx.setIsModalOpen(false);
    ctx.setSelectedShows([]);
    ctx.setCurrentStep(0);
  }

  return (
    <Modal isOpen={ctx.isModalOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="purple">
          <ModalHeader>Picker</ModalHeader>
          <ModalBody>
            <PickerShowsGrid/>
          </ModalBody>
          <ModalFooter>
            <Flex direction="column" width="100%" gap={3}>
            <PickerProgress />
            <PickerNavButtons onClose={onClose} />
            </Flex>
          </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
