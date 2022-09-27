import * as Linking from "expo-linking";
import { useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";

export function NavigationProvider({ children }: React.ComponentProps<typeof NavigationContainer>) {
  return (
    <NavigationContainer
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL("/")],
          config: {
            initialRouteName: "home",
            screens: {
              home: "",
              blog: "blog/:id",
            },
          },
        }),
        [],
      )}
    >
      {children}
    </NavigationContainer>
  );
}
