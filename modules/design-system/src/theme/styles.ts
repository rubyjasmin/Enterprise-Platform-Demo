import { makeTheme } from "dripsy";
import { Platform } from "react-native";

const webFont = (font: string) =>
  Platform.select({
    web: `${font}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, Inter-serif`,
    default: font,
  });

export const theme = makeTheme({
  buttons: {
    primary: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5,
      color: "white",
      fontFamily: "Poppins",
      fontSize: 13,
      fontWeight: "400",
    },
  },
  customFonts: {
    Poppins: {
      bold: webFont("PoppinsBold"),
      bolder: webFont("PoppinsBolder"),
      default: webFont("Poppins"),
      normal: webFont("Poppins"),
      "700": webFont("PoppinsBold"),
      "800": webFont("PoppinsBolder"),
    },
  },
  fonts: {
    root: "Poppins",
  },
  fontSizes: {
    $0: 12,
    $1: 14,
    $2: 16,
    $3: 18,
    $4: 24,
    $5: 32,
    $6: 40,
  },
  fontWeights: {
    black: "800",
    body: "normal",
    bold: "bold",
  },
  layout: {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  },
  text: {
    bold: {
      fontSize: "$3",
      fontWeight: "bold",
    },
    h1: {
      fontSize: "$6",
      fontWeight: "bold",
    },
    h3: {
      fontWeight: "bold",
    },
    p: {
      fontSize: "$2",
      my: "$3",
    },
  },
  sizes: {
    container: {},
  },
  space: {
    $0: 0,
    $1: 4,
    $2: 8,
    $3: 16,
    $4: 32,
    $5: 64,
    $6: 128,
    $7: 256,
  },
});

export type Theme = typeof theme;
