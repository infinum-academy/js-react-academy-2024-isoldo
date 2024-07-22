import { defineStyleConfig, StyleFunctionProps } from "@chakra-ui/react";

const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: "buttonRadius",
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
        bg: "blue",
        color: "white",
      },
    }
  },
});

export default Button;
