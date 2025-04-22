import { StyleSheet, View } from "react-native";
import { MD3Theme, Text, useTheme } from "react-native-paper";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { router } from "expo-router";

export default function ModalHeader({
  text,
  card,
}: {
  text: string;
  card: boolean;
}) {
  const theme = useTheme();
  const style = styles(theme);
  return (
    <View style={card === true ? { ...style.headerCont, paddingBottom: 20, alignItems: "flex-end",} : style.headerCont}>
      {card === true ? (
        <Ionicons
          style={{ marginRight: 10 }}
          name="arrow-back-outline"
          size={24}
          color="black"
          onPress={() => router.back()}
        />
      ) : null}
      <Text variant="titleMedium">{text}</Text>
    </View>
  );
}

const styles = (theme: MD3Theme) =>
  StyleSheet.create({
    headerCont: {
      paddingLeft: 20,
      width: "100%",
      height: 100,

      flexDirection: "row",
      alignItems: "center",

      borderBottomWidth: 1,
      borderBottomColor: theme.colors.outline,
    },
  });
