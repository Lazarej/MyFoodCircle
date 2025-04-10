import { Tabs } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { lightTheme, darkTheme } from "../../constants/theme";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme(); // "light" ou "dark"

  const theme = colorScheme === "dark" ? darkTheme : lightTheme;

  return (
    <PaperProvider theme={theme}>
      <Tabs
        key={colorScheme} // <-- force Tabs à se re-render quand le thème change
        screenOptions={{
          tabBarLabel: () => null,
          tabBarStyle: { height: 60, paddingBottom:0 },
        
          headerTitleAlign: "left",
        }}
        options={{
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.onSecondary,
        }}
      >
        <Tabs.Screen name="restaurants" options={{}} />
        <Tabs.Screen name="partages" options={{}} />
        <Tabs.Screen name="parametre" options={{}} />
      </Tabs>
    </PaperProvider>
  );
}
