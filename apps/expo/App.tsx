import "expo-dev-client";
import * as Sentry from "sentry-expo";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";
import { ThemeProvider } from "@org/design-system";

import { NODE_ENV, SENTRY_DSN } from "@env";
import { NavigationProvider, RootNavigator } from "./navigation";

Sentry.init({
  dsn: SENTRY_DSN,
  enableInExpoDevelopment: true,
  debug: NODE_ENV !== "production",
});

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins: Poppins_400Regular,
    PoppinsBold: Poppins_700Bold,
    PoppinsBolder: Poppins_800ExtraBold,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <NavigationProvider onReady={onLayoutRootView}>
        <RootNavigator />
      </NavigationProvider>
    </ThemeProvider>
  );
}
