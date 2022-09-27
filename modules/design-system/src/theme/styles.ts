import { makeTheme } from "dripsy";
import { Platform } from "react-native";

const webFont = (font: string) =>
  Platform.select({
    web: `${font}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, Inter-serif`,
    default: font,
  });

export const theme = makeTheme({
  sizes: {
    container: {},
  },
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
  layout: {
    root: {
      maxWidth: 1100,
    },
  },
  text: {
    h1: {
      fontFamily: "Poppins",
      fontSize: 40,
      fontWeight: "400",
    },
    p: {
      fontSize: 16,
    },
  },
});

export type Theme = typeof theme;
