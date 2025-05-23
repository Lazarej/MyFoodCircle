import { useAuth } from "@/context/authContext";
import { Redirect, Stack } from "expo-router";

export default function ProtectedLayout() {
    const { auth } = useAuth();
    console.log('User loaded:', auth);
    
    if(!auth){return <Redirect href={'/(auth)/login'}/> }
    return (
        
      <Stack  screenOptions={{ headerShown: false }} >

            
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="modal/modalSearch" options={{ headerShown: false, presentation: "modal" }} />
              <Stack.Screen name="details/[restoId]" options={{ headerShown: false }} />


        </Stack>
  
      );
  }
  