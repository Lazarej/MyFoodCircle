import AuthDivider from "@/components/auth/divider";
import PresentationCont from "@/components/auth/presentation";
import DefaultButton from "@/components/global/defaultButton";
import DefaultInput from "@/components/global/defaultInput";
import DefaultView from "@/components/global/defaultView";
import { useAuth } from "@/context/authContext";
import { Link } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, View, Image } from "react-native";
import { Divider, MD3Theme, Text, useTheme } from "react-native-paper";

export default function Login() {
  const theme = useTheme();
  const style = styles(theme);
  const { setUser } = useAuth();

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  return (
    <DefaultView color={theme.colors.surface}>
      <PresentationCont
        icon={require("../../assets/images/Wave.png")}
        title="Se connecter"
        text="Petit text histoire de mettre un truc, a voir si on l'enlève ou pas
              parce que pas forcement néccesaire"
      />
      <View style={style.otherConnectionCont}></View>
      <AuthDivider />
      <View style={style.form}>
        <DefaultInput
          label="Email"
          value=""
          onChange={() => null}
          mode="input"
        />
        <DefaultInput
          label="Mot de passe"
          value=""
          onChange={() => null}
          mode="input"
          securetTextEntry={true}
        />
        <View style={style.helpCont}>
          <Link href="../resetPassword">
          <Text variant="bodySmall" style={{ color: theme.colors.primary }}>
            Mot de passe oublié ?
          </Text>
          </Link>
        </View>
      </View>
      <DefaultButton
        value="Connection"
        func={() => setUser({ id: 1, name: "User" })}
      />
      <Text variant="bodyMedium">
        Pas de compte ?
        <Link replace href="../signUp" style={{ color: theme.colors.primary }}>
          {" "}
          Créer un compte
        </Link>
      </Text>
    </DefaultView>
  );
}

const styles = (theme: MD3Theme) =>
  StyleSheet.create({
    otherConnectionCont: {},

    separatorCont: {
      width: "100%",
      marginTop: 25,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    divider: {
      height: 1,
      width: "43%",
      backgroundColor: theme.colors.outline,
    },

    form: {
      marginVertical: 20,
    },

    helpCont: {
      flexDirection: "row",
      justifyContent: "flex-end",
      marginBottom: 20,
    },
  });
