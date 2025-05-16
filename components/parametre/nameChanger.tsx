import AntDesign from "@expo/vector-icons/build/AntDesign";
import { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View, TextInput, } from "react-native";
import {
  Button,
  MD3Theme,
  Text,
 
  useTheme,
} from "react-native-paper";

export default function NameChanger() {
  const theme = useTheme();
  const style = styles(theme);
  const [name, setName] = useState("Leon Jullius");
    const [onChange, setOnChange] = useState(false);


  return (
    <>
      {onChange ? (
        <View style={style.editCont}>
                  <TextInput
                      style={style.input}
            value={name}
            onChangeText={(value) => setName(value)}
          />{" "}
                  <View style={style.btnCont}>
            <Button>annuler</Button>
            <Button>confirmer</Button>
          </View>
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => setOnChange((prev) => prev = !prev)}
          style={style.nameCont}
        >
          <Text
            style={{ color: theme.colors.onSurface, marginRight: 7 }}
            variant="titleMedium"
          >
            {name}
          </Text>
          <AntDesign name="edit" size={20} color={theme.colors.primary} />
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = (theme: MD3Theme) =>
  StyleSheet.create({
    nameCont: {
      flexDirection: "row",
          marginVertical: 20,
      
      
      },

      editCont: {
        marginVertical: 20,
        justifyContent: 'center',
          alignItems: 'center',
        width:120
      },

      input: {
          width:'100%', height:30,borderColor:theme.colors.outline, borderWidth:1, borderRadius:10, paddingHorizontal:8, color: theme.colors.primary
      },
      
      btnCont: {
          flexDirection:'row',
      }
  });
