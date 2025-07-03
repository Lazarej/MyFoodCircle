import DefaultView from "@/components/global/defaultView";
import { HalfModal } from "@/components/global/halfModal";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { Stack } from "expo-router";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Pressable,
  ScrollView,
  SectionList,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Modalize } from "react-native-modalize";
import { MD3Theme, Text, useTheme } from "react-native-paper";
import resto from "./../../../lib/mock/resto.json";
import Restaurant from "@/lib/mock/type/restaurant";
import RestoCard from "@/components/global/restoCard";
import ShareBtn from "@/components/global/shareBtn";
import PricePicker from "@/components/global/PricePicker";
import CuisinePicker from "@/components/global/cuisinePicker";
import data from "./../../../lib/mock/categories.json";


export default function RestaurantView() {
  const theme = useTheme();
  const style = styles(theme);
  const [headerState, setHeaderState] = useState("Voir tout");
  const mainFilter = ["Voir tout", "Favoris", "2025", "Voir ", "Oui", "205"];
  const modalRef = useRef<Modalize>(null);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    setRestaurants((prev) => (prev = resto));
  }, []);

  const groupByYear = (data: Restaurant[]) => {
    const grouped = data.reduce(
      (acc: Record<string, Restaurant[]>, item: Restaurant) => {
        const year = new Date(item.createdAt).getFullYear();
        acc[year] = acc[year] ? [...acc[year], item] : [item];
        return acc;
      },
      {}
    );
    return Object.entries(grouped)
      .sort(([a], [b]) => Number(b) - Number(a))
      .map(([year, items]) => ({ title: year, data: items }));
  };
  const sections = useMemo(() => groupByYear(restaurants), [restaurants]);

  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <View>
              <TouchableOpacity
                style={style.filterBtn}
                onPress={() => modalRef.current?.open()}
              >
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
          <SectionList
            sections={sections}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <RestoCard
                props={item}
                childrenBtnUp={
                <ShareBtn props={item}/>
                }
              />
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={{ marginBottom: 20 }} variant="titleMedium">
                {title}
              </Text>
            )}
            stickySectionHeadersEnabled={true}
          />
        </DefaultView>
      </View>
      <HalfModal titre="Filtre" modalRef={modalRef}>
        <View>
          <CuisinePicker label='Type de cuisines' cuisines={[ 'Tous', ...data.cuisines]}/>
           <PricePicker childrenValue='Tous' label='Gamme de prix'/>
         </View>
      </HalfModal>
    </>
  );
}

const styles = (theme: MD3Theme) =>
  StyleSheet.create({
    filterBtn: {
      marginTop: -40,
      padding: 7,
      marginRight: 15,
      borderColor: theme.colors.outline,
      borderWidth: 1,
      borderRadius: 6,
      backgroundColor: theme.colors.background,
    },

    header: {
      height: 60,
      paddingBottom: 10,
      backgroundColor: theme.colors.surface,
      borderBottomColor: theme.colors.outline,
      borderBottomWidth: 1,
      alignItems: "center",
      flexDirection: "row",
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
