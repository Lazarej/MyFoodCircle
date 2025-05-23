import { useAuth } from "@/context/authContext";
import { Stack } from "expo-router";
import { useColorScheme, View } from "react-native";
import { Text } from "react-native-paper";


export default function Navigator() {
  const { auth, isLoading } = useAuth();
    const colorScheme = useColorScheme();
 

     if (isLoading) {
       return <View>
      <Text variant="titleLarge">OUAAAAAAIIIIIIIIIIIIIII</Text>
    </View>; 
  }

  return (
    <Stack  screenOptions={{ headerShown: false }} key={colorScheme}>
     
        <>
          <Stack.Screen name="(protected)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
        </>

    </Stack>
  );
}
