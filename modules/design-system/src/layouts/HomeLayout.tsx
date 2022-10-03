import { Container, Image } from "dripsy";
import { Platform } from "react-native";

import { RootDocument } from "./RootDocument";

type Props = {
  children: React.ReactNode;
};

export const HomeLayout: React.FC<Props> = ({ children }) => (
  <RootDocument>
    <Image
      source={require("../../assets/background.png")}
      style={Platform.select({
        default: { height: 143, width: undefined, resizeMode: "repeat" },
        native: { position: "absolute", bottom: 0, transform: [{ rotateX: "180deg" }] },
      })}
    />
    <Container>{children}</Container>
  </RootDocument>
);
