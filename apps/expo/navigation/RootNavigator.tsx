import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeView, BlogView } from "@org/design-system";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator<{
  home: undefined;
  blog: {
    id: string;
  };
}>();

export function RootNavigator() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="home"
          component={HomeView}
          options={{
            title: "Home",
          }}
        />
        <Stack.Screen
          name="blog"
          component={BlogView}
          options={{
            title: "Blog",
          }}
        />
      </Stack.Navigator>
    </>
  );
}
