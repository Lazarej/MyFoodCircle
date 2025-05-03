import DefaultView from "@/components/global/defaultView";
import { HalfModal } from "@/components/global/halfModal";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { Stack } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Modalize } from "react-native-modalize";
import { MD3Theme, Text, useTheme } from "react-native-paper";

export default function Restaurant() {
  const theme = useTheme();
  const style = styles(theme);
  const [headerState, setHeaderState] = useState("Voir tout");
  const mainFilter = ["Voir tout", "Favoris", "2025", "Voir ", "Oui", "205"];
  const modalRef = useRef<Modalize>(null);
  




  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <View>
              <TouchableOpacity style={style.filterBtn} onPress={() => modalRef.current?.open()}>
                <Ionicons
                  name="filter"
                  size={17}
                  color={theme.colors.onSurface}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <View style={{ flex: 1 }}>
        <View>
          <ScrollView
            contentContainerStyle={style.header}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {mainFilter.map((item, index) => (
              <Pressable
                key={index}
                onPress={() => setHeaderState((prev) => (prev = item))}
                style={
                  headerState === item
                    ? { ...style.chip, backgroundColor: theme.colors.primary }
                    : style.chip
                }
              >
                <Text
                  style={
                    headerState === item
                      ? { ...style.chipText, color: theme.colors.onPrimary }
                      : style.chipText
                  }
                  variant="bodyMedium"
                >
                  {item}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
        <DefaultView color={theme.colors.background}>
          <Text>fe</Text>
        </DefaultView>
       
      </View>
       <HalfModal modalRef={modalRef} />
    </>
  );
}

const styles = (theme: MD3Theme) =>
  StyleSheet.create({
    filterBtn: {
      marginTop:-40,
      padding: 7,
      marginRight: 15,
      borderColor: theme.colors.outline,
      borderWidth: 1,
      borderRadius: 6,
    },

    header: {
      height: 60,
      paddingBottom: 10,
      backgroundColor: theme.colors.surface,
      borderBottomColor: theme.colors.outline,
      borderBottomWidth: 1,
      alignItems: "center",
      flexDirection: 'row'
    },

    chip: {
      paddingHorizontal: 25,
      paddingVertical: 10,
      backgroundColor: theme.colors.outline,
      borderRadius: 30,
      marginHorizontal: 6,
    },

    chipText: { color: theme.colors.inverseOnSurface, fontWeight: 700 },
  });
