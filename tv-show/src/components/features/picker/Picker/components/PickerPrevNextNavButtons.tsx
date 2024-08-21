import { Flex, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { PickerContext } from "./PickerContextProvider";

export function PickerPrevNextNavButtons() {
  const ctx = useContext(PickerContext);

  const isPrevDisabled = ctx.currentStep === 0;
  const isNextStepFinal = ctx.isFinalStep(ctx.currentStep + 1);
  const nextButtonVariant = isNextStepFinal ? "solid" : "outline"
  const nextButtonText = isNextStepFinal ? "Generate watchlist" : "Next"

  const onPrevClick = () => {
    ctx.setCurrentStep(ctx.currentStep-1);
  }

  const onNextClick = () => {
    ctx.setCurrentStep(ctx.currentStep+1);
  }

  return (
    <Flex width="100%" justifyContent="space-between">
      <Button onClick={onPrevClick} variant="outline" isDisabled={isPrevDisabled} >Previous</Button>
      <Button onClick={onNextClick} variant={nextButtonVariant}>{nextButtonText}</Button>
    </Flex>
  )
}
