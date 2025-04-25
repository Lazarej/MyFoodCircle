import DropDownPicker from "@/components/dropDownPicker";
import DefaultInput from "@/components/global/defaultInput";
import DefaultView from "@/components/global/defaultView";
import ModalHeader from "@/components/global/modalHeader";
import RatingPrice from "@/components/global/ratingPrice";
import RatingStars from "@/components/global/ratingStars";

import Ionicons from "@expo/vector-icons/build/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Chip, List, MD3Theme, Text, useTheme } from "react-native-paper";

export default function RestaurantData() {
  const theme = useTheme();
  const style = styles(theme);
  const { id, from, add } = useLocalSearchParams();

  const [email, setEmail] = useState("");

  return (
     <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}

    >
  
        <ModalHeader
          card={from === "/modal/modalSearch" ? false : true}
          text="Modifier un restaurant"
        />

        <ScrollView
           style={{ flex: 1, backgroundColor: theme.colors.surface }}
    contentContainerStyle={{ paddingBottom: 40 }}
    keyboardShouldPersistTaps="handled"
        >
          <DefaultView color={theme.colors.surface}>
            <DefaultInput
              label="Nom"
              value={"Le triangle"}
              onChange={setEmail}
              editable={false}
              childrenRight={
                <MaterialIcons
                  name="do-not-disturb"
                  size={24}
                  color={theme.colors.error}
                />
              }
              mode="input"
            />
            <DefaultInput
              label="Adresse"
              value={"Une adresse quelconque"}
              onChange={setEmail}
              editable={false}
              childrenRight={
                <MaterialIcons
                  name="do-not-disturb"
                  size={24}
                  color={theme.colors.error}
                />
              }
              mode="input"
            />
            <DefaultInput
              label="Date"
              value={null}
              mode="date"
              onChange={setEmail}
              editable={false}
              childrenRight={
                <Ionicons
                  name="calendar-clear-outline"
                  size={24}
                  color={theme.colors.onBackground}
                />
              }
            />
            <DropDownPicker label="Catégories" />
            <RatingStars label="Note" />
            <RatingPrice label="Prix" />
            <DefaultInput
              label="Description"
              value={""}
              onChange={setEmail}
              mode="textarea"
              editable={true}
            />
          </DefaultView>
        </ScrollView>
      
    </KeyboardAvoidingView>
  );
}

const styles = (theme: MD3Theme) =>
  StyleSheet.create({
    modal: {
      flex: 1,
      backgroundColor: theme.colors.surface,
    },
    dropDown: {
      borderColor: theme.colors.outline,
      borderWidth: 1,
      borderRadius: 15,
      backgroundColor: theme.colors.surface,
    },
  });
