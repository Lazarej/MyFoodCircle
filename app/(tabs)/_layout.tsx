import { Tabs } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { lightTheme, darkTheme } from "../../constants/theme";
import { useColorScheme } from "react-native";
import AccueilIcon from "@/assets/icons/accueil";
import RestaurantIcon from "@/assets/icons/restaurants";
import PartageIcon from "@/assets/icons/partages";
import ParametreIcon from "@/assets/icons/parametre";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const colorScheme = useColorScheme(); // "light" ou "dark"

  const theme = colorScheme === "light" ? darkTheme : lightTheme;
  console.log(colorScheme)
  return (
    <PaperProvider theme={theme}>
      
      <Tabs
        key={colorScheme}
        screenOptions={{
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.secondary,
          tabBarStyle: { height: 50, paddingBottom: 0, borderBottom:0 },
          headerStyle: { height: 70,},
          headerTitleAlign: 'left',
           headerTitleStyle: {
            fontSize: 25, 
             fontWeight: 'bold', 
             position: "absolute",

             top:-25
          },

        }}

      >
  <Tabs.Screen
    name="index"
    options={{
      title: "Bienvenue User", 
      tabBarIcon: ({ color } : {color:string}) => <AccueilIcon color={color} />,
    }}
  />
  <Tabs.Screen
    name="restaurants"
    options={{
      title: "Restaurants",
      tabBarIcon: ({ color } : {color:string}) => <RestaurantIcon color={color} />,
    }}
  />
  <Tabs.Screen
    name="partages"
    options={{
      title: "Partages",
      tabBarIcon: ({ color } : {color:string}) => <PartageIcon color={color} />,
    }}
  />
  <Tabs.Screen
    name="parametre"
    options={{
      title: "Paramètres",
      tabBarIcon: ({ color } : {color:string}) => <ParametreIcon color={color} />,
    }}
  />
      </Tabs>
    </PaperProvider>
  );
}
