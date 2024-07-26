import { Flex, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { PickerContext } from "./PickerContextProvider";

export function PickerNavButtons() {
  const ctx = useContext(PickerContext);

  const isPrevDisabled = ctx.currentStep === 0;
  const isFinalStep = ctx.currentStep === (ctx.stepCount-1);

  return (
    <Flex width="100%" justifyContent="space-between">
      {
        isFinalStep &&
        <Button onClick={() => console.log(ctx.selectedShows)}>Close</Button>||
          <>
          <Button isDisabled={isPrevDisabled} onClick={() => ctx.setCurrentStep(ctx.currentStep-1)}>Previous</Button>
          <Button onClick={() => ctx.setCurrentStep(ctx.currentStep+1)}>Next</Button>
          </>
      }
    </Flex>
  )
}
