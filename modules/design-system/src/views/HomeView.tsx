import MuiIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { H1, P, Text, View } from "dripsy";
import { Gradient } from "@dripsy/gradient";
import { Platform } from "react-native";

import { SafeArea } from "~layouts";
import BackgroundImage from "../../assets/background.svg";

export function HomeView() {
  return (
    <SafeArea>
      <BackgroundImage
        style={Platform.select({
          native: { position: "absolute", bottom: 0, transform: [{ rotateX: "180deg" }] },
          default: { height: 143, width: "100%" },
        })}
      />
      <View sx={{ flex: 1, justifyContent: "center", alignItems: "center", p: 16 }}>
        <H1>Hello, I'm Ruby</H1>
        <View sx={{ maxWidth: 600 }}>
          <P sx={{ textAlign: "center" }}>
            I'm a Software Engineer, Architect, and Business Consultant
          </P>
          <P sx={{ textAlign: "center" }}>
            This is a basic starter that shows how a design system can be used for Web and Mobile
            development built with React Native.
          </P>
          <Gradient
            variant="buttons.primary"
            colors={["#00b2ff", "#0075ff"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1.2, y: 0.5 }}
            sx={{ height: 46, width: 155, alignSelf: "center", mt: 20 }}
          >
            <Text sx={{ color: "white", pr: 10 }}>Get In Touch </Text>
            <MuiIcons name="email-open-outline" size={20} color="white" />
          </Gradient>
        </View>
      </View>
    </SafeArea>
  );
}
