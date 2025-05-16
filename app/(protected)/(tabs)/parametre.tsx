import DefaultView from "@/components/global/defaultView";
import AvatarSelect from "@/components/parametre/avatarSelect";
import NameChanger from "@/components/parametre/nameChanger";
import { useAuth } from "@/context/authContext";
import { StyleSheet, View } from "react-native";
import { Button, MD3Theme, Text, useTheme } from "react-native-paper";

export default function Parametres() {
  const theme = useTheme();
  const style = styles(theme);
  const { logOut } = useAuth();

  return (
    <View style={{backgroundColor: theme.colors.background, flex:1}}>
      <View style={style.profilCont}>
        <AvatarSelect />
        <NameChanger/>
      </View>
      <Button onPress={() => logOut()}>Deconnexion</Button>
    </View>
  );
}

const styles = (theme: MD3Theme) =>
  StyleSheet.create({
    profilCont: {
      width: "100%",
      backgroundColor: theme.colors.surface,
      alignItems: "center",
    },
  });
