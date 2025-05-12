import { FontAwesome, Foundation } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/build/AntDesign";
import { ReactNode, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { MD3Theme, Text, useTheme } from "react-native-paper";

export default function PricePicker({
  label,
  childrenValue,
}: {
  label: string;
  childrenValue?: string;
}) {
  const theme = useTheme();
  const style = styles(theme);
  const prices = 4;
  const [rating, setRating] = useState(0);

  return (
    <View style={style.container}>
      <Text variant="labelMedium">{label}</Text>
      <View style={style.searchCont}>
        {childrenValue && (
          <Pressable
            onPress={() => setRating(0)}
            style={
              rating === 0
                ? { ...style.chip, backgroundColor: theme.colors.primary }
                : style.chip
            }
          >
            <Text
              style={
                rating === 0
                  ? { fontWeight:500, color: theme.colors.onPrimary }
                  : {  fontWeight:500, color: theme.colors.inverseOnSurface }
              }
              variant="bodyMedium"
            >
              {childrenValue}
            </Text>
          </Pressable>
        )}
        {Array.from({ length: prices }).map((_, index) => (
          <Pressable
            key={index}
            onPress={() => setRating((prev) => (prev = index + 1))}
            style={
              rating === index + 1
                ? { ...style.chip, backgroundColor: theme.colors.primary }
                : style.chip
            }
          >
            {Array.from({ length: index + 1 }).map((_, i) => (
              <Foundation
                key={i}
                name="euro"
                size={24}
                color={
                  rating === index + 1
                    ? theme.colors.onPrimary
                    : theme.colors.inverseOnSurface
                }
              />
            ))}
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
