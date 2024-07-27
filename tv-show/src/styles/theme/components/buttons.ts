import { defineStyleConfig, StyleFunctionProps } from "@chakra-ui/react";

const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: "buttonRadius",
    border: "none",
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
      border: "inherit",

      _hover: {
        bg: "lightPurple",
        color: "purple",
      },
    }),

    outline: {
      bg: "darkPurple",
      color: "white",
      border: "inherit",

      _hover: {
        bg: "lightPurple",
        color: "white",
      },
    }
  },
});

export default Button;
