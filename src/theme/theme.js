import Heading from "./Heading";
import colors from "./colors";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Outfit', sans-serif`,
    body: `'Outfit', sans-serif`,
  },
  colors,
  components: { Heading },
});

export default theme;
