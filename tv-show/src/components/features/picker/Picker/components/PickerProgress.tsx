'use client';

import { useContext } from "react";
import { PickerContext } from "./PickerContextProvider";
import { Progress } from "@chakra-ui/react";

export function PickerProgress() {
  const {currentStep, stepCount} = useContext(PickerContext);

  const progress = (currentStep / (stepCount-1)) * 100;

  return <Progress value={progress} />
}
