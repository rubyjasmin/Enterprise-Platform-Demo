import { Image } from "dripsy";
import { Platform } from "react-native";

import { SafeArea } from "./safe-area";

type Props = {
  children: React.ReactNode;
};

export const RootDocument: React.FC<Props> = ({ children }) => (
  <SafeArea>
    <Image
      source={require("../../assets/background.png")}
      style={Platform.select({
        default: { height: 143, width: undefined, resizeMode: "repeat" },
        native: { position: "absolute", bottom: 0, transform: [{ rotateX: "180deg" }] },
      })}
    />
    {children}
  </SafeArea>
);
