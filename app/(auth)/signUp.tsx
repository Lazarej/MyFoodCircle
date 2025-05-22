import PresentationCont from "@/components/auth/presentation";
import DefaultButton from "@/components/global/defaultButton";
import DefaultInput from "@/components/global/defaultInput";
import DefaultView from "@/components/global/defaultView";
import { useAuth } from "@/context/authContext";
import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { MD3Theme, Text, useTheme } from "react-native-paper";

export default function SignUp() {
  const theme = useTheme();
  const style = styles(theme);
  const { register } = useAuth();
  const [formError, setFormError] = useState({
    email: "",
    password: "",
    checkPassword: "",
  });
  const [form, setForm] = useState({
    email: "",
    password: "",
    checkPassword: "",
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
  }

  const security =  () =>  {
    let hasError = false;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPassword = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    const resultPassword = regexPassword.test(form.password);
    const resultEmail = regexEmail.test(form.email);

    if (!resultPassword) {
      hasError = true
      setFormError((prev) => ({
        ...prev,
        password:
          "doit avoir au moins 1 majuscule, 1 chiffre, et 6 caractères min",
      }));
    } else {
      setFormError((prev) => ({ ...prev, password: "" }));
    }

    if (!resultEmail) {
      hasError = true
      setFormError((prev) => ({
        ...prev,
        email: "Adresse email invalide",
      }));
    } else {
      setFormError((prev) => ({ ...prev, password: "" }));
    }

    if (form.password !== form.checkPassword) {
      hasError = true
      setFormError((prev) => ({
        ...prev,
        checkPassword: "Les mots de passe ne correspondent pas",
      }));
    } else {
      setFormError((prev) => ({ ...prev, password: "" }));
    }

    return hasError
  };

  const handleRegister = () => {
    if (!security()) {
      register(form.email, form.password)
    }
  };

  return (
    <DefaultView color={theme.colors.surface}>
      <PresentationCont
        icon={require("../../assets/images/Wave.png")}
        title="S'incrire"
        text="Petit text histoire de mettre un truc, a voir si on l'enlève ou pas
                        parce que pas forcement néccesaire"
      />
      <View style={style.form}>
        <DefaultInput
          label="Email"
          value={form.email}
          onChange={(value) => onChangeValue("email", value)}
          mode="input"
          errorMessage={formError.email}
        />
        <DefaultInput
          label="Mot de passe"
          value={form.password}
          onChange={(value) => onChangeValue("password", value)}
          mode="input"
          securetTextEntry={true}
          onBlur={() => validatePassword()}
          errorMessage={formError.password}
        />
        <DefaultInput
          label="Confirmation mot de passe"
          value={form.checkPassword}
          onChange={(value) => onChangeValue("checkPassword", value)}
          mode="input"
          securetTextEntry={true}
          errorMessage={formError.checkPassword}
        />
      </View>

      <DefaultButton value="Créer son compte" func={() => handleRegister()} />
      <Text variant="bodyMedium">
        Vous avez un compte?
        <Link replace href="../login" style={{ color: theme.colors.primary }}>
          {" "}
          Connectez vous
        </Link>
      </Text>
    </DefaultView>
  );
}

const styles = (theme: MD3Theme) =>
  StyleSheet.create({
    form: {
      marginVertical: 20,
    },
  });
