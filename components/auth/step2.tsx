import { Keyboard, StyleSheet, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { MD3Theme, Text, useTheme } from "react-native-paper";
import PresentationCont from "./presentation";
import { useRef, useState } from "react";
import { OtpInput } from "react-native-otp-entry";
import DefaultButton from "../global/defaultButton";

export default function Step2({ onNext }: { onNext: Function }) {
  const theme = useTheme();
  const style = styles(theme);
  const [otp, setOtp] = useState('');

  return (
    <TouchableWithoutFeedback
    onPress={Keyboard.dismiss}
    accessible={false}
  >
          <View>
          <PresentationCont
        icon={require("../../assets/images/Wave.png")}
        title="Entrez le code"
        text="Petit text histoire de mettre un truc, a voir si on l'enlève ou pas
              parce que pas forcement néccesaire"
      />
      <View style={style.container}>
      <OtpInput
        numberOfDigits={4}
        code={otp}
 
        onTextChange={setOtp}
        onFilled={() => onNext()}
        theme={{
          pinCodeContainerStyle: style.input,               // style global des cases :contentReference[oaicite:3]{index=3}
          focusedPinCodeContainerStyle: style.activeInput,  // case active :contentReference[oaicite:4]{index=4}
          pinCodeTextStyle: style.pinText,                  // style du texte (opaque) :contentReference[oaicite:5]{index=5}
          focusStickStyle: style.focusStick,  
        }}
      />
              </View>
              <DefaultButton value="Changer le mot de passe" func={() => onNext()} />
              <Text variant="bodyMedium">
              Pas de code ?
                      <Text style={{ color: theme.colors.primary }}> Renvoyer le code
                      </Text>
                    </Text>
     </View>
    </TouchableWithoutFeedback>
  );
}

const styles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
          justifyContent: "center",
      marginTop:50,
      marginBottom: 30,
      },

    input: {
        width: 65,
        height: 80,
        borderWidth: 1,
        borderColor: `${theme.colors.primary}40`,    // bord semi‑transparent :contentReference[oaicite:7]{index=7}
        backgroundColor: `${theme.colors.primary}30`,  // fond semi‑transparent :contentReference[oaicite:8]{index=8}
        borderRadius: 15,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      activeInput: {
        borderColor: theme.colors.primary,         
      },
      pinText: {
        fontSize: 28,
        fontWeight: '700',
        color: theme.colors.onSurface,             
      },
      focusStick: {
        height: 2,
        backgroundColor: theme.colors.primary,    
        marginTop: 4,
      },
  });
