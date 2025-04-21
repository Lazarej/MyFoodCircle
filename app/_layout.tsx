import { darkTheme, fontConfig, lightTheme } from "@/constants/theme";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useColorScheme } from "react-native";
import { configureFonts, PaperProvider } from "react-native-paper";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};



export default function RootLayout() {
    const colorScheme = useColorScheme(); // "light" ou "dark"

  const baseTheme = colorScheme === "dark" ? lightTheme : darkTheme;
  const fonts = configureFonts({ config: fontConfig });
  const theme = {
    ...baseTheme,
    fonts,
  };


  return (
      <React.Fragment>
        <StatusBar style="auto" />
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
            name="details/[restoId].tsx"
            options={{
    
          
            }}
          />
        </Stack>
        </PaperProvider>
      </React.Fragment>
  );
}
