import DefaultInput from "@/components/global/defaultInput";
import DefaultView from "@/components/global/defaultView";
import ModalHeader from "@/components/global/modalHeader";

import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { MD3Theme, Text, useTheme } from "react-native-paper";

export default function RestaurantData() {
  const theme = useTheme();
  const style = styles(theme);
  const { id, from, add } = useLocalSearchParams();

  const [email, setEmail] = useState("");

  return (
    <View style={style.modal}>
      <ModalHeader
        card={from === "/modal/modalSearch" ? false : true}
        text="Modifier un restaurant"
      />
      <DefaultView color="white">
        <DefaultInput
          label="Nom"
          value={'Le triangle'}
          onChange={setEmail}
          editable={false}
        />
         <DefaultInput
          label="Adresse"
          value={'Une adresse quelquonc'}
          onChange={setEmail}
          editable={false}
        />
        <DefaultInput
          label="Date"
          value={null}
          mode="date"
          onChange={setEmail}
          editable={false}
        />
      </DefaultView>
    </View>
  );
}

const styles = (theme: MD3Theme) =>
  StyleSheet.create({
    modal: {
      flex: 1,
      backgroundColor: "white",
    },
  });
