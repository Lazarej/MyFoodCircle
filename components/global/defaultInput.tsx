import { MD3Theme, Text, useTheme } from "react-native-paper";

import { View, StyleSheet, Platform, Pressable, TextInput, NativeSyntheticEvent, TextInputFocusEventData, KeyboardTypeOptions, TextInputProps, TouchableOpacity } from "react-native";
import React, { ReactNode, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SearchBar } from "react-native-screens";
import AntDesign from "@expo/vector-icons/build/AntDesign";

type Props = {
  label: string;
  value: string;
  onChange: (text: string) => void;
  placeholder?: string;
  editable?: boolean;
  mode:  "input" | "date" | "textarea";
  childrenLeft?: ReactNode;
  childrenRight?: ReactNode;
  secureTextEntry?: boolean;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  errorMessage?: string;
  keyboardType?: KeyboardTypeOptions;                
  autoComplete?: TextInputProps['autoComplete']; 

};

export default function DefaultInput({
  label,
  value,
  onChange,
  placeholder,
  editable,
  mode,
  childrenLeft,
  childrenRight,
  secureTextEntry,
  onBlur,
  errorMessage,
  keyboardType,
  autoComplete,

}: Props) {
  const theme = useTheme();
  const style = styles(theme);

  const [showPicker, setShowPicker] = useState(false);
  const [hide, setHide] = useState(secureTextEntry)

  const modes = {
    input: (
      <View style={style.container}>
        <Text variant="labelMedium">{label}</Text>
        <View style={style.searchCont}>
          <View
            style={
              editable === false
                ? {
                    ...style.search,
                    backgroundColor: theme.colors.background,
                  }
                : style.search
            }
          >
            {childrenLeft ?? null}
            <TextInput
              placeholder={placeholder}
              placeholderTextColor={theme.colors.secondary}
              onChangeText={onChange}
              value={value}
              editable={editable}
              secureTextEntry={hide}
              style={style.input}
              onBlur={onBlur}
              keyboardType={keyboardType}
              autoComplete={autoComplete} 
            />
            {childrenRight ?? null}
          </View>
          {secureTextEntry && <TouchableOpacity hitSlop={20}  style={{ position: 'absolute', right: 10 }} onPress={() => setHide(prev => prev= !prev)}>
            <AntDesign name="eyeo" size={24} color={theme.colors.primary} />
          </TouchableOpacity>}
        </View>
        
        <Text variant="bodySmall" style={{color:theme.colors.error}}>{errorMessage}</Text>
      </View>
    ),
    date: (
      <View style={style.container}>
        <Text variant="labelMedium">{label}</Text>
        <Pressable onPress={() => console.log("ff")}>
          <View style={style.searchCont}>
            <View
              style={{
                ...style.search,
                height: 55,
                justifyContent: "space-between",
                paddingRight:10,
              }}
            >
              {childrenLeft ?? null}
              <DateTimePicker
                maximumDate={new Date()}
                accentColor={theme.colors.primary}
                value={new Date()}
                mode="date"
                onChange={() => {
                  setShowPicker(false);
                  onChange;
                }}
              />
              {childrenRight ?? null}
            </View>
          </View>
        </Pressable>
      </View>
    ),
    textarea: (
      <View style={style.container}>
        <Text variant="labelMedium">{label}</Text>
        <View style={{ ...style.searchCont, height: 250 }}>
          <View style={{ ...style.search, height: 250 }}>
            {childrenLeft ?? null}
            <TextInput
              placeholder={placeholder}
              placeholderTextColor={theme.colors.secondary}
              onChangeText={onChange}
              multiline={true}
              value={value}
              editable={editable}
              style={{
                ...style.input,
                textAlignVertical: "top",
                height: 250,
                padding: 15,
              }}
            />
            {childrenRight ?? null}
          </View>
        </View>
      </View>
    ),
  };

  return <View>{modes[mode] ?? <Text>❓ Mode inconnu</Text>}</View>;
}

const styles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      marginBottom: 10,
    },
    searchCont: {
      position:"relative",
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
      overflow:'hidden'
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
  });
