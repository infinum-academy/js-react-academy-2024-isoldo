import { useContext } from "react";
import { PickerContext } from "./PickerContextProvider";
import { Flex, SimpleGrid, Spinner } from "@chakra-ui/react";
import ShowCardSelectable from "@/components/shared/ShowCardSelectable/ShowCardSelectable";
import { IShow } from "@/typings/Show.type";

export function PickerShowsGrid() {
  const ctx = useContext(PickerContext);

  if(!ctx.shows) {
    return (
      <Flex justifyContent='center'>
        <Spinner size='xl'/>
      </Flex>
    )
  }

  const isFinalStep = ctx.currentStep === (ctx.stepCount-1);

  const shows = isFinalStep ? ctx.selectedShows : ctx.shows;

  return (
    <Flex>
      <SimpleGrid columns={2}>
      {shows.map((show) => {
        const isSelected = !!ctx.selectedShows.find((s) => s === show);
        return (
            <ShowCardSelectable
              key={show.id}
              show={show}
              isSelected={isSelected}
              onClick={(show: IShow) => {
                if(!isSelected) {
                  ctx.setSelectedShows([...ctx.selectedShows, show]);
                } else {
                  ctx.setSelectedShows(ctx.selectedShows.filter((s) => s!==show))
                }
              }} />
          )
        })}
      </SimpleGrid>
    </Flex>
  )
}
