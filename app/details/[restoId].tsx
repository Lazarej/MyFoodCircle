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
import { KeyboardAvoidingView, Button, Platform, StyleSheet, View, TouchableOpacity, Modal } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { MD3Theme,useTheme, Text } from "react-native-paper";

export default function RestaurantData() {
  const theme = useTheme();
  const style = styles(theme);
  const { id, from, add } = useLocalSearchParams();

  const [email, setEmail] = useState("");

  return (
    <View style={{ flex: 1 }}>
        <ModalHeader
        card={from === "/modal/modalSearch" ? false : true}
        text="Modifier un restaurant"
      />
      <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
    

      <ScrollView
        style={{ flex: 1, backgroundColor: theme.colors.surface }}
        contentContainerStyle={{ paddingBottom: 100 }}
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
         <View style={style.footer}>
        <TouchableOpacity style={style.button}>
          <Text style={{color:theme.colors.onPrimary}} variant="titleMedium">Valider</Text>
        </TouchableOpacity>
    
      </View>

    </View>
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
     footer: {
       position: 'absolute',
       height: 90,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.colors.surface, // pour cacher ce qui scrolle dessous
    padding: 15,
       borderTopWidth: 1,
       justifyContent: "center",
    alignItems:'center',
    borderColor: theme.colors.outline,
     
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 25,

    borderRadius: 8,
  },

  });
