import DefaultView from "@/components/global/defaultView";
import RestoCard from "@/components/global/restoCard";
import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import {
  TouchableHighlight,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Pressable,
} from "react-native";
import { MD3Theme, Text, useTheme } from "react-native-paper";
import restaurants from "../../mock/resto.json";

export default function accueil() {
  const theme = useTheme();
  const style = styles(theme);

  return (
    <DefaultView>
      <Pressable
        
        onPress={() => router.push('/modal/modalSearch')}
        style={style.addBtn}
      >
        <View style={style.btnCont}>
          <Ionicons name="add" size={30} color={theme.colors.onPrimary} />
          <Text
            variant="titleLarge"
            style={{ color: theme.colors.onPrimary, ...style.btnText }}
          >
            Ajouter un restaurant
          </Text>
          <Text variant="bodySmall" style={{ color: theme.colors.onPrimary }}>
            recherchez et ajoutez vos retaurants préférés
          </Text>
        </View>
     </Pressable>
      <View style={style.ListTitleCont}>
        <Text variant="titleMedium">Mes restaurants récents</Text>
        <Link href={"/restaurants"} style={style.link}>
          Voir tout
        </Link>
      </View>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id.toString()} // ← id doit être string
        renderItem={({ item }) => <RestoCard props={item} />}
      />
    </DefaultView>
  );
}

const styles = (theme: MD3Theme) =>
  StyleSheet.create({
    addBtn: {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      width: "100%",
      height: 150,
      borderRadius: 20,
      backgroundColor: theme.colors.primary,
    },

    btnCont: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },

    btnText: {
      marginBottom: 10,
      marginTop: 5,
    },

    ListTitleCont: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 20,
      marginTop: 30,
    },

    link: {
      color: theme.colors.primary,
    },
  });
