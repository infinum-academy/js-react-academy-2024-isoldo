import { Flex, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { PickerContext } from "./PickerContextProvider";
import { PickerFinalButton } from "./PickerFinalButton";
import { PickerPrevNextNavButtons } from "./PickerPrevNextNavButtons";

interface IPickerNavButtonsProps {
  onClose: () => void;
}

export function PickerNavButtons({onClose}: IPickerNavButtonsProps) {
  const ctx = useContext(PickerContext);

  return (
        ctx.isFinalStep(ctx.currentStep) && <PickerFinalButton onClose={onClose} /> ||
        <PickerPrevNextNavButtons />

  )
}
