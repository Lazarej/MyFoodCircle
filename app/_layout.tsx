import { darkTheme, fontConfig, lightTheme } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useColorScheme } from "react-native";
import { configureFonts, PaperProvider } from "react-native-paper";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const unstable_settings = {
  initialRouteName: "(tabs)",
};



export default function RootLayout() {
    const colorScheme = useColorScheme(); // "light" ou "dark"

  const baseTheme = colorScheme === "light" ? lightTheme : darkTheme;
  const fonts = configureFonts({ config: fontConfig });
  const theme = {
    ...baseTheme,
    fonts,
  };


  return (
      <React.Fragment>
        <StatusBar style="auto" />
      <GestureHandlerRootView>
        <PaperProvider theme={theme}>
          <Stack   key={colorScheme}>
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="modal/modalSearch"
            options={{
              presentation: "modal",
                headerShown: false,
            }}
            />
            <Stack.Screen
            name="details/[restoId]"
            options={{
              headerShown: false,
              
            }}
          />
        </Stack>
        </PaperProvider>
        </GestureHandlerRootView>
      </React.Fragment>
  );
}
