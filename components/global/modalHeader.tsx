import { StyleSheet, View } from "react-native";
import { MD3Theme, Text, useTheme } from "react-native-paper";

export default function ModalHeader({text}: {text:string}) {
  const theme = useTheme();
  const style = styles(theme);
  return (
    <View style={style.headerCont}>
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
      justifyContent: "center",
      alignItems: "flex-start",

      borderBottomWidth: 1,
      borderBottomColor: theme.colors.outline,
    },
  });
