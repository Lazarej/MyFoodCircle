
import {  useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { MD3Theme, Text, useTheme } from "react-native-paper";

export default function CuisinePicker({
  label,
  cuisines,
}: {
  label: string;
  cuisines:Array<string>
}) {
  const theme = useTheme();
  const style = styles(theme);
  const [picker, setPicker] = useState('Tous');

  return (
    <View style={style.container}>
      <Text variant="labelMedium">{label}</Text>
      <View style={style.searchCont}>
        {cuisines.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => setPicker((prev) => (prev = item))}
            style={
              picker === item
                ? { ...style.chip, backgroundColor: theme.colors.primary }
                : style.chip
            }
          >
             <Text
              style={
                picker === item
                  ? { fontWeight:500, color: theme.colors.onPrimary }
                  : {  fontWeight:500, color: theme.colors.inverseOnSurface }
              }
              variant="bodyMedium"
            >
              {item}
            </Text>
          </Pressable>
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
        flexWrap: 'wrap'  ,
      flexDirection: "row",
      marginTop: 10,
    },

    chip: {
      paddingHorizontal: 12,
      borderRadius: 30,
      flexDirection: "row",
      paddingVertical: 7,
      marginRight: 10,
      marginBottom: 10,
      backgroundColor: theme.colors.outline,
    },
  });
