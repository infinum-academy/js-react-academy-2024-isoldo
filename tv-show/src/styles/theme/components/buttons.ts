import { defineStyleConfig, StyleFunctionProps } from "@chakra-ui/react";

const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: "buttonRadius",
    border: "0px",
  },
  sizes: {
    md: {
      px: 8,
      py: 4,
      h: "auto",
    }
  },

  variants: {
    solid: (props: StyleFunctionProps) => ({
      bg: "white",
      color: "purple",

      _hover: {
        bg: "lightPurple",
        color: "purple",
      },
    }),

    outline: {
      bg: "darkPurple",
      color: "white",

      _hover: {
        bg: "lightPurple",
        color: "white",
      },
    }
  },
});

export default Button;
