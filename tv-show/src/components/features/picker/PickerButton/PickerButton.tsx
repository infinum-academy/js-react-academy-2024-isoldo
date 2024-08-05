import { useContext } from "react";
import { PickerContext } from "../Picker/components/PickerContextProvider";
import { Button } from "@chakra-ui/react";

export function PickerButton() {
  const ctx = useContext(PickerContext);

  const onClick = () =>  {
    ctx.setIsModalOpen(true);
  }

  return (
    <Button variant="solid" onClick={onClick}>GENERATE WATCHLIST</Button>
  )
}
