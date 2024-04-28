import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// Create a dark theme configuration object
const config: ThemeConfig = {
  initialColorMode: "dark",

};

const theme = extendTheme({ config }); // Extend the theme with the config object

export default theme; // Export the theme object