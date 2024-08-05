import { defineStyleConfig, StyleFunctionProps } from "@chakra-ui/react";

const Input = defineStyleConfig({
  baseStyle: {
    field: {
      borderRadius: "inputRadius",
    }
  },
  variants: {
    outline:{
      field: {
        bg: "purple",
        color: "white",

        _focusVisible: {
          borderColor: "darkPurple",
          border: "solid"
        }
      }
    }
  }
});

export default Input;
