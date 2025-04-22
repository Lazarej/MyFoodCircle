import { MD3Theme, TextInput, Text, useTheme } from "react-native-paper";

import { View, StyleSheet, Platform, Pressable } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

type Props = {
  label: string;
  value: string | number;
  onChange: (text: string) => void;
  placeholder?: string;
  editable?: boolean;
  mode?: string;
};

export default function DefaultInput({
  label,
  value,
  onChange,
  placeholder,
  editable,
  mode,
}: Props) {
  const theme = useTheme();
  const style = styles(theme);

  const [showPicker, setShowPicker] = useState(false);

  return (
    <View>
      {mode !== "date" ? (
        <View style={style.container}>
          <Text variant="labelMedium">{label}</Text>
          <TextInput
            style={style.input}
            value={value}
                      onChangeText={onChange}
                      mode="outlined" 
            placeholder={placeholder}
            placeholderTextColor="#aaa"
            editable={editable}
          />
        </View>
      ) : (
        <View style={style.container}>
          <Text variant="labelMedium">{label}</Text>
          <Pressable onPress={() => console.log("ff")}>
            <TextInput
              style={style.input}
              value={value}
              editable={editable}
              right={<TextInput.Icon icon="calendar" />}
            />
          </Pressable>

          <DateTimePicker
            style={{ backgroundColor: theme.colors.onSurface }}
            textColor="red"
            accentColor={theme.colors.primary}
            value={new Date()}
            mode="date"
            onChange={() => {
              setShowPicker(false);
              onChange;
            }}
          />
        </View>
      )}
    </View>
  );
}

const styles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      marginVertical: 15,
    },
    input: {
      height: 44,
      borderWidth: 1,
      marginTop: 10,
      borderColor: "#ccc",
      borderRadius: 8,
      backgroundColor: "white",
      paddingHorizontal: 12,
      fontSize: 16,
      color: "#000",
    },
  });
