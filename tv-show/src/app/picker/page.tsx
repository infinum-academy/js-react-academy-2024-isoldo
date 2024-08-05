'useClient';

import { PickerContextProvider } from "@/components/features/picker/Picker/components/PickerContextProvider";
import { Picker } from "@/components/features/picker/Picker/Picker";

export default function PickerPage() {
  return (
    <PickerContextProvider stepCount={5}>
      <Picker />
    </PickerContextProvider>
  );
}
