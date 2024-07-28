import { Flex, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { PickerContext } from "./PickerContextProvider";

export function PickerNavButtons() {
  const ctx = useContext(PickerContext);

  const isPrevDisabled = ctx.currentStep === 0;

  return (
    <Flex width="100%" justifyContent="space-between">
      {
        ctx.isFinalStep(ctx.currentStep) &&
        <Button onClick={() => ctx.setIsModalOpen(false)}>Close</Button>||
          <>
          <Button isDisabled={isPrevDisabled} onClick={() => ctx.setCurrentStep(ctx.currentStep-1)}>Previous</Button>
          <Button onClick={() => ctx.setCurrentStep(ctx.currentStep+1)}>Next</Button>
          </>
      }
    </Flex>
  )
}
