import { Tabs } from "expo-router";
import { PaperProvider, useTheme } from "react-native-paper";
import { lightTheme, darkTheme, fontConfig } from "../../constants/theme";
import { useColorScheme } from "react-native";
import AccueilIcon from "@/assets/icons/accueil";
import RestaurantIcon from "@/assets/icons/restaurants";
import PartageIcon from "@/assets/icons/partages";
import ParametreIcon from "@/assets/icons/parametre";
import { configureFonts } from "react-native-paper";

export default function TabsLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.secondary,
        tabBarStyle: {
          paddingBottom: 0,
          paddingTop: 5,
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.background,
          height: 70,
        },
        headerStyle: { backgroundColor: theme.colors.surface, height: 70 },
        headerTitleAlign: "left",
        headerTitleStyle: {
          fontSize: 24,
          marginTop: -50,
          color: theme.colors.onSurface,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Bienvenue User 👋",
          tabBarIcon: ({ color }: { color: string }) => (
            <AccueilIcon color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="restaurants"
        options={{
          headerStyle: {
            shadowColor: "transparent",
            height: 70,
            backgroundColor: theme.colors.surface,
          },
          title: "Restaurants",
          tabBarIcon: ({ color }: { color: string }) => (
            <RestaurantIcon color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="partages"
        options={{
          title: "Partages",
          tabBarIcon: ({ color }: { color: string }) => (
            <PartageIcon color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="parametre"
        options={{
          title: "Paramètres",
          tabBarIcon: ({ color }: { color: string }) => (
            <ParametreIcon color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
