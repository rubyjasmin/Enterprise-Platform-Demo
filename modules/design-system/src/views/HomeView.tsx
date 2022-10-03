import MuiIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useSx, H1, P, Row, Text, View } from "dripsy";
import { Gradient } from "@dripsy/gradient";
import { MotiLink } from "solito/moti";
import { TextLink } from "solito/link";

import { HomeLayout } from "~layouts";

export function HomeView() {
  const sx = useSx();

  return (
    <HomeLayout>
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
      <View sx={{ height: 32 }} />
      <Row>
        <TextLink
          href="/authors"
          textProps={{
            style: sx({ fontSize: 16, fontWeight: "bold", color: "blue" }),
          }}
        >
          Strapi Content
        </TextLink>
      </Row>
    </HomeLayout>
  );
}
