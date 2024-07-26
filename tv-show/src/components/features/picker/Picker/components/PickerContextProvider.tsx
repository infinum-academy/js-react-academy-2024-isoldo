'use client';

import { authGet } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import { IShow } from "@/typings/Show.type";
import { createContext, ReactNode, useState } from "react";
import useSWR from "swr";

interface IPickerContext {
  stepCount: number;
  currentStep: number;
  setCurrentStep: (newStep: number) => void;
  selectedShows: IShow[];
  setSelectedShows: (newShows: IShow[]) => void;
  shows?: IShow[];
}

export const PickerContext = createContext<IPickerContext>({} as IPickerContext);

interface IPickerContextProviderProps {
  stepCount: number;
  children: ReactNode;
}

export function PickerContextProvider({ stepCount, children }: IPickerContextProviderProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedShows, setSelectedShows] = useState<IShow[]>([]);
  const { data } = useSWR<{shows:IShow[]}>(swrKeys.all_shows(currentStep+1, 4), authGet);

  return (
    <PickerContext.Provider
      value={{stepCount, currentStep, setCurrentStep, selectedShows, setSelectedShows, shows: data?.shows}}
    >
      {children}
    </PickerContext.Provider>
  )
}
