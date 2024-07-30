import { defineStyleConfig, StyleFunctionProps } from "@chakra-ui/react";

const Card = defineStyleConfig({
  baseStyle: {
    borderRadius: "cardRadius",
    border: "0px",
    body: {
      color: "white"
    }
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
