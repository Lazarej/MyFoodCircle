import KeyboardDismissWrapper from "@/components/global/keyboardDismissWrapper";
import { useAuth } from "@/context/authContext";
import { Redirect, Stack } from "expo-router";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProtectedLayout() {
  const { auth } = useAuth();
  const theme = useTheme();
  console.log("User loaded:", auth);

  if (!auth) {
    return <Redirect href={"/(auth)/login"} />;
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.surface }}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="modal/modalSearch"
            options={{ headerShown: false, presentation: "modal" }}
          />
          <Stack.Screen
            name="details/[restoId]"
            options={{ headerShown: false }}
          />
        </Stack>
    </SafeAreaView>
  );
}
