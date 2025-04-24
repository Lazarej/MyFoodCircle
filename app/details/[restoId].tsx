import DefaultInput from "@/components/global/defaultInput";
import DefaultView from "@/components/global/defaultView";
import ModalHeader from "@/components/global/modalHeader";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Chip, List, MD3Theme, Text, useTheme } from "react-native-paper";


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
      <DefaultView color={theme.colors.surface}>
        <DefaultInput
          label="Nom"
          value={'Le triangle'}
          onChange={setEmail}
          editable={false}
          childrenRight={<MaterialIcons name="do-not-disturb" size={24} color={theme.colors.error} />}
        />
         <DefaultInput
          label="Adresse"
          value={'Une adresse quelquonc'}
          onChange={setEmail}
          editable={false}
          childrenRight={<MaterialIcons name="do-not-disturb" size={24} color={theme.colors.error} />}
        />
        <DefaultInput
          label="Date"
          value={null}
          mode="date"
          onChange={setEmail}
          editable={false}
          childrenRight={<Ionicons name="calendar-clear-outline" size={24} color="black" />}
        />

        <List.Accordion rippleColor={'transparent'} style={style.dropDown} title='' left={props => <Chip mode="flat" >Example Chip</Chip>}>
          <List.Item title='dde' />
        </List.Accordion>
      </DefaultView>
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
      borderRadius:15,
      backgroundColor: theme.colors.surface
    }
  });
