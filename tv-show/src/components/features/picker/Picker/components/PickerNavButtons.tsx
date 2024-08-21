import { Flex, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { PickerContext } from "./PickerContextProvider";

interface IPickerNavButtonsProps {
  onClose: () => void;
}

export function PickerNavButtons({onClose}: IPickerNavButtonsProps) {
  const ctx = useContext(PickerContext);

  const isPrevDisabled = ctx.currentStep === 0;
  const isNextStepFinal = ctx.isFinalStep(ctx.currentStep + 1);
  const nextButtonVariant = isNextStepFinal ? "solid" : "outline"

  const onPrevClick = () => {
    ctx.setCurrentStep(ctx.currentStep-1);
  }

  const onNextClick = () => {
    ctx.setCurrentStep(ctx.currentStep+1);
  }

  return (
    <Flex width="100%" justifyContent="space-between">
      {
        ctx.isFinalStep(ctx.currentStep) &&
        <Button onClick={onClose}>Close</Button> ||
          <>
          <Button variant="outline" isDisabled={isPrevDisabled} onClick={onPrevClick}>Previous</Button>
          <Button variant={nextButtonVariant} onClick={onNextClick}>{isNextStepFinal ? "Generate watchlist" : "Next"}</Button>
          </>
      }
    </Flex>
  )
}
