import { darkTheme, fontConfig, lightTheme } from "@/lib/theme";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useColorScheme } from "react-native";
import { configureFonts, PaperProvider } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider } from "@/context/authContext";
import Navigator from "@/components/nav/navigator";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const baseTheme = colorScheme === "light" ? lightTheme : darkTheme;
  const fonts = configureFonts({ config: fontConfig });
  const theme = { ...baseTheme, fonts };

  return (
    <AuthProvider>
      <StatusBar style="auto" />
      <GestureHandlerRootView>
        <PaperProvider theme={theme}>
          <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.surface }}>
            <Navigator/>
          </SafeAreaView>
        </PaperProvider>
      </GestureHandlerRootView>
    </AuthProvider>
  );
}
