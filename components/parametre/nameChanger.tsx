import AntDesign from "@expo/vector-icons/build/AntDesign";
import { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View, TextInput } from "react-native";
import { Button, MD3Theme, Text, useTheme } from "react-native-paper";

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
            <TouchableOpacity
              onPress={() => setOnChange( prev => !prev)}
              style={{
                ...style.btn,
                backgroundColor: theme.colors.background,
                borderWidth: 1,
                borderColor: theme.colors.outline,
              }}
            >
              {" "}
              <Text
                variant="bodySmall"
                style={{ color: theme.colors.onSurface }}
              >
                {" "}
                annuler
              </Text>{" "}
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setOnChange( prev => !prev)}
              style={{ ...style.btn, backgroundColor: theme.colors.primary }}
            >
              {" "}
              <Text
                variant="bodySmall"
                style={{ color: theme.colors.onPrimary }}
              >
                {" "}
                confirmer
              </Text>{" "}
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => setOnChange((prev) => (prev = !prev))}
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
      marginTop: 20,
      marginBottom:10,
    },

    editCont: {
      marginTop: 20,
      marginBottom:10,
      justifyContent: "center",
      alignItems: "center",
      width: 120,
    },

    input: {
      width: "100%",
      height: 30,
      borderColor: theme.colors.outline,
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 8,
      color: theme.colors.onSurface,
    },

    btnCont: {
      flexDirection: "row",
    },

    btn: {
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 7,
      marginHorizontal: 5,
      marginTop: 7,
    },
  });
