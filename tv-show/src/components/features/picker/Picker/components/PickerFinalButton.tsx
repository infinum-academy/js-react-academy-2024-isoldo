import { Flex, Button } from "@chakra-ui/react";

interface IPickerNavButtonsProps {
  onClose: () => void;
}

export function PickerFinalButton({onClose}: IPickerNavButtonsProps) {
  return (
    <Flex width="100%" justifyContent="flex-end">
      <Button onClick={onClose}>Close</Button>
    </Flex>
  )
}
