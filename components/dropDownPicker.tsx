import Entypo from "@expo/vector-icons/build/Entypo";
import { ReactNode, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { MD3Theme, Text, useTheme } from "react-native-paper";

import { ScrollView } from "react-native-gesture-handler";

export default function DropDownPicker({ label, data }: { label: string, data: string[] }) {
  const theme = useTheme();
  const style = styles(theme);

  const [value, setValue] = useState(data[0]);
  const [open, setOpen] = useState(false);
  
  const GetValue = (item: string) => {
    console.log(item)
    setValue(prev => prev = item)
    setOpen(prev => !prev)
  } 


  return (
    <View style={style.container}>
      <Text variant="labelMedium">{label}</Text>
      <View style={style.searchCont}>
        <View style={style.search}>
          {value ? (
            <View style={style.chip}>
              <Text variant="bodyMedium">{value}</Text>
            </View>
          ) : null}

          <Entypo
            name="chevron-down"
            onPress={() => setOpen((prev) => !prev)}
            size={24}
            style={open ? {...style.chevron, transform: [{ rotate: `180deg` }]} :style.chevron }
            color={theme.colors.onBackground}
          />
        </View>
      </View>
      <ScrollView
        style={open ? style.dropDown : { ...style.dropDown, height: 0, paddingTop: 0,
      paddingLeft: 0, }}
      >
        {data.map((item, index) => (

          <Text key={ index} onPress={ () => GetValue(item)} style={style.dropDownItem}  variant="bodyMedium">{item}</Text>

            ))}
      </ScrollView>
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
      justifyContent: "center",
      marginTop: 10,
      height: 50,
    },

    search: {
      flexDirection: "row",
      borderWidth: 1,
      borderColor: theme.colors.outline,
      borderRadius: 12,
      height: 50,
      alignItems: "center",
      paddingHorizontal: 0,
      backgroundColor: theme.colors.surface,
      paddingRight: 5,
    },

    input: {
      fontSize: 16,
      height: "100%",
      color: theme.colors.secondary,
      flex: 1,
      lineHeight: -20,
      paddingLeft: 10,
      outline: "none",
    },

    chip: {
      paddingHorizontal: 6,
      paddingVertical: 2,
      borderRadius: 5,
      height: 30,
      marginLeft: 10,
      justifyContent: "center",
      borderColor: theme.colors.inversePrimary, // Outline bleu
      borderWidth: 1,
    },

    chevron: {
       position: "absolute", right: 5,
    },

    dropDown: {
      height: 150,
      paddingTop: 10,
      paddingLeft: 10,
      backgroundColor: theme.colors.background,
      borderBottomEndRadius: 10,
      borderBottomStartRadius:10
 
    },
    dropDownItem: {
      marginVertical: 5
      
    }
  });
