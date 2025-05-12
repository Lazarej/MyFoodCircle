import { useAuth } from "@/context/authContext";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";


export default function Navigator() {
  const { user, isLoading } = useAuth();
    const colorScheme = useColorScheme();
    console.log(user)

     if (isLoading) {
    return null; 
  }

  return (
    <Stack  screenOptions={{ headerShown: false }} key={colorScheme}>
      {user !== null ? (
        <>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal/modalSearch" options={{ headerShown: false, presentation: "modal" }} />
          <Stack.Screen name="details/[restoId]" options={{ headerShown: false }} />
        </>
      ) : (
        <Stack.Screen name="auth" options={{ headerShown: false }} />
      )}
    </Stack>
  );
}
