'use client';

import { useContext } from "react";
import { PickerContext } from "./PickerContextProvider";
import { Progress } from "@chakra-ui/react";

export function PickerProgress() {
  const {currentStep, stepCount, isFinalStep} = useContext(PickerContext);

  const progress = ((currentStep+1) / (stepCount-1)) * 100;
  const showProgressBar = !isFinalStep(currentStep);

  return (
    showProgressBar ? <Progress value={progress} /> : <></>
  )
}
