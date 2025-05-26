import PresentationCont from "@/components/auth/presentation";
import DefaultButton from "@/components/global/defaultButton";
import DefaultInput from "@/components/global/defaultInput";
import DefaultView from "@/components/global/defaultView";
import KeyboardDismissWrapper from "@/components/global/keyboardDismissWrapper";
import { useAuth } from "@/context/authContext";
import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { MD3Theme, Text, useTheme } from "react-native-paper";

export default function SignUp() {
  const theme = useTheme();
  const style = styles(theme);
  const { register } = useAuth();
  const [formError, setFormError] = useState({
    email: "",
    password: "",
    checkPassword: "",
    username: "",
    general: "",
  });
  const [form, setForm] = useState({
    email: "",
    password: "",
    checkPassword: "",
    username: "",
  });

  const onChangeValue = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const validatePassword = () => {
    const regexPassword = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    const resultPassword = regexPassword.test(form.password);

    if (!resultPassword) {
      setFormError((prev) => ({
        ...prev,
        password:
          "doit avoir au moins 1 majuscule, 1 chiffre, et 6 caractères min",
      }));
    } else {
      setFormError((prev) => ({ ...prev, password: "" }));
    }
  };

  
const security = () => {
  let hasError = false;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexPassword = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
  const regexUsername = /^[a-zA-Z0-9_-]{3,10}$/;

  const resultPassword = regexPassword.test(form.password);
  const resultEmail = regexEmail.test(form.email);
  const resultUsername = regexUsername.test(form.username);

  let errors = {
    email: "",
    password: "",
    checkPassword: "",
    username: "",
    general: "",
  };

  if (!resultPassword) {
    hasError = true;
    errors.password = "doit avoir au moins 1 majuscule, 1 chiffre, et 6 caractères min";
  }

  if (!resultEmail) {
    hasError = true;
    errors.email = "Adresse email invalide";
  }

  if (!resultUsername) {
    hasError = true;
    errors.username = "doit avoir entre 3 et 10 caractères";
  }

  if (form.password !== form.checkPassword) {
    hasError = true;
    errors.checkPassword = "Les mots de passe ne correspondent pas";
  }

  setFormError(errors);
  return hasError;
};

  const handleRegister = async () => {
    if (!security()) {
      const errorMessage = await register(
        form.email,
        form.password,
        form.username
      );

      if (errorMessage === "Email or Username are already taken") {
        setFormError((prev) => ({
          ...prev,
          general: "Le pseudo ou l'email existe déja",
        }));
      } else if (errorMessage) {
        setFormError((prev) => ({
          ...prev,
          general: errorMessage,
        }));
      } else {
        setFormError((prev) => ({
          ...prev,
          general: "",
        }));
      }
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "black" }}>
      <DefaultView color={theme.colors.surface}>
        <PresentationCont
          icon={require("../../assets/images/Wave.png")}
          title="S'incrire"
          text="Petit text histoire de mettre un truc, a voir si on l'enlève ou pas
                        parce que pas forcement néccesaire"
        />
        <View style={style.form}>
          <DefaultInput
            label="Pseudo"
            value={form.username}
            onChange={(value) => onChangeValue("username", value)}
            mode="input"
            errorMessage={formError.username}
            autoComplete="username"
          />
          <DefaultInput
            label="Email"
            value={form.email}
            onChange={(value) => onChangeValue("email", value)}
            mode="input"
            errorMessage={formError.email}
            keyboardType="email-address"
            autoComplete="email"
          />
          <DefaultInput
            label="Mot de passe"
            value={form.password}
            onChange={(value) => onChangeValue("password", value)}
            mode="input"
            secureTextEntry={true}
            onBlur={() => validatePassword()}
            errorMessage={formError.password}
            autoComplete="password"
          />
          <DefaultInput
            label="Confirmation mot de passe"
            value={form.checkPassword}
            onChange={(value) => onChangeValue("checkPassword", value)}
            mode="input"
            secureTextEntry={true}
            errorMessage={formError.checkPassword}
            autoComplete="password"
          />
        </View>
        <Text variant="bodySmall" style={{ color: theme.colors.error }}>
          {formError.general}
        </Text>
        <DefaultButton value="Créer son compte" func={() => handleRegister()} />
        <Text variant="bodyMedium">
          Vous avez un compte?
          <Link replace href="../login" style={{ color: theme.colors.primary }}>
            {" "}
            Connectez vous
          </Link>
        </Text>
      </DefaultView>
    </ScrollView>
  );
}

const styles = (theme: MD3Theme) =>
  StyleSheet.create({
    form: {
      marginTop: 20,
    },
  });
