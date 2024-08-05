import { useContext } from "react";
import { PickerContext } from "./PickerContextProvider";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import ShowCardSelectable from "@/components/shared/ShowCardSelectable/ShowCardSelectable";
import { IShow } from "@/typings/Show.type";
import { CenteredSpinner } from "@/components/shared/CenteredSpinner/CenteredSpinner";
import ShowCardUnselectable from "@/components/shared/ShowCardUnselectable/ShowCardUnselectable";

export function PickerShowsGrid() {
  const ctx = useContext(PickerContext);

  if(!ctx.shows) {
    return (
      <CenteredSpinner />
    )
  }

  const shows = ctx.isFinalStep(ctx.currentStep) ? ctx.selectedShows : ctx.shows;

  const onClick = (show: IShow, isSelected: boolean) => {
    if(!isSelected) {
      ctx.setSelectedShows([...ctx.selectedShows, show]);
    } else {
      ctx.setSelectedShows(ctx.selectedShows.filter((s) => s!==show))
    }
  }

  const isFinalStep = ctx.isFinalStep(ctx.currentStep);

  return (
    <Flex>
      <SimpleGrid columns={2} gap={3}>
      {shows.map((show) => {
        const isSelected = !!(ctx.selectedShows.find((s) => s.id === show.id));
        console.log({id: show.id, isSelected, show, ss: ctx.selectedShows})
        return (
          <>
            {!isFinalStep &&
              <ShowCardSelectable
                key={show.id}
                show={show}
                isSelected={isSelected}
                onClick={(show: IShow) => onClick(show, isSelected)} /> ||
              <ShowCardUnselectable key={show.id} show={show} />
            }
          </>
          )
        })}
      </SimpleGrid>
    </Flex>
  )
}
