import { defineStyleConfig } from "@chakra-ui/react";

const Progress = defineStyleConfig({
  baseStyle: {
    filledTrack: {
      bg: "lightPurple",
    },
    track: {
      bg: "darkPurple"
    }
  }
});

export default Progress;
