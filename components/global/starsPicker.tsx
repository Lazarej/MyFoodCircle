import { FontAwesome } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/build/AntDesign";
import { ReactNode, useState } from "react";
import { StyleSheet, View } from "react-native";
import { MD3Theme, Text, useTheme } from "react-native-paper";

export default function StarPicker({ label }: { label: string }) {
  const theme = useTheme();
  const style = styles(theme);
  const stars = 5;
  const [rating, setRating] = useState(0);

  return (
    <View style={style.container}>
      <Text variant="labelMedium">{label}</Text>
      <View style={style.searchCont}>

        {Array.from({ length: stars }).map((_, index) => (
          <FontAwesome
            key={index}
            onPress={() => setRating((prev) => (prev = index + 1))}
            style={{ marginHorizontal: 5, marginTop: 10 }}
            name={index < rating ? "star" : "star-o"}
            size={40}
            color={index < rating ? theme.colors.tertiary : theme.colors.outline  }
          />
        ))}
      </View>
    </View>
  );
}

const styles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      marginVertical: 15,
    },
    searchCont: {
      width: "100%",

      flexDirection: "row",
      marginTop: 10,
    },
  });
