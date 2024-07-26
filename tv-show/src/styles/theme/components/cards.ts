import { defineStyleConfig, StyleFunctionProps } from "@chakra-ui/react";

const Card = defineStyleConfig({
  baseStyle: {
    borderRadius: "cardRadius",
    border: "0px",
  },
  sizes: {
    lg: {
      px: 8,
      py: 4,
      h: "auto",
    }
  }
});

export default Card;
