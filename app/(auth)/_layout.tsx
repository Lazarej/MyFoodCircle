import KeyboardDismissWrapper from "@/components/global/keyboardDismissWrapper";
import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthLayout() {
  const theme = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.surface }}>
      <KeyboardDismissWrapper>
        <Stack>
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="signUp" options={{ headerShown: false }} />
          <Stack.Screen
            name="resetPassword"
            options={{
              headerTitle: "",
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: theme.colors.surface,
              },
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => router.back()}
                  style={{ paddingHorizontal: 16 }}
                >
                  <Ionicons
                    name="arrow-back"
                    size={24}
                    color={theme.colors.onSurface}
                  />
                </TouchableOpacity>
              ),
            }}
          />
        </Stack>
      </KeyboardDismissWrapper>
    </SafeAreaView>
  );
}
