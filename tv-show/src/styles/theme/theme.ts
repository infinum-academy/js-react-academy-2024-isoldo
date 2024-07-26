import { extendTheme } from "@chakra-ui/react";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import Button from "./components/buttons";
import radii from "./foundations/radii";
import Card from "./components/cards";

const colors = {
  white: "#ffffff",
  lightPurple: '#8D5CE5',
  purple: '#371687',
  darkPurple: '#1B004C',
  error: '#FF2498'
}

const fonts = {
  body: "Roboto, sans-serif",
  heading: "Roboto, sans-serif"
}

const theme = extendTheme({
  components: {
    Button,
    Card
  },
  colors,
  fonts,
  radii
})

export default theme;
