import DefaultView from "@/components/global/defaultView";
import AvatarSelect from "@/components/parametre/avatarSelect";
import CopyID from "@/components/parametre/copyID";
import NameChanger from "@/components/parametre/nameChanger";
import { useAuth } from "@/context/authContext";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, Touchable, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button, MD3Theme, Text, useTheme } from "react-native-paper";

export default function Parametres() {
  const theme = useTheme();
  const style = styles(theme);
  const { logOut } = useAuth();

  return (
    <ScrollView style={{ backgroundColor: theme.colors.background, flex: 1 }}>
      <View style={style.profilCont}>
        <AvatarSelect />
        <NameChanger />
        <CopyID />
      </View>
      <View style={style.section}>
        <View style={style.infoCont}>
          <View style={style.rawInfo}>
            <Text
              variant="titleSmall"
              style={{ color: theme.colors.onSurface }}
            >
              Information personelles
            </Text>
          </View>
          <View style={style.rawInfo}>
            <Text variant="labelMedium" style={style.rawInfoLeft}>
              Email
            </Text>
            <Text variant="bodyMedium" style={style.rawInfoRight}>
              Email.exemple@gmail.com
            </Text>
          </View>
          <View style={style.rawInfo}>
            <Text variant="labelMedium" style={style.rawInfoLeft}>
              Téléphone
            </Text>
            <Text variant="bodyMedium" style={style.rawInfoRight}>
              0635874902
            </Text>
          </View>
        </View>
      </View>
      <View style={style.section}>
        <View style={style.infoCont}>
          <View style={style.rawInfo}>
            <Text
              variant="titleSmall"
              style={{ color: theme.colors.onSurface }}
            >
              Sécurité
            </Text>
          </View>
          <View style={style.rawInfo}>
            <View style={style.socle}>
              <MaterialIcons
                name="password"
                size={18}
                color={theme.colors.onSurface}
              />
            </View>
            <Text variant="bodyMedium" style={style.rawInfoRight}>
              Modifier le mot de passe
            </Text>
          </View>
          <TouchableOpacity onPress={() => logOut()} style={style.rawInfo}>
          <View style={style.socle}>
              <Ionicons name="log-out-outline" size={18} color={ theme.colors.error} />
            </View>
            <Text variant="bodyMedium" style={{...style.rawInfoRight, color:theme.colors.error}}>
              Deconnexion
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = (theme: MD3Theme) =>
  StyleSheet.create({
    profilCont: {
      width: "100%",
      backgroundColor: theme.colors.surface,
      alignItems: "center",
      paddingBottom: 30,
      marginBottom: 30,
    },

    section: {
      marginBottom: 30,
    },

    infoCont: {
      backgroundColor: theme.colors.surface,
      width: "100%",
    },

    rawInfo: {
      width: "100%",
      height: 50,
      paddingLeft: 25,
      alignItems: "center",
      borderColor: theme.colors.background,
      borderTopWidth: 1,
      flexDirection: "row",
      position: "relative",
    },

    rawInfoLeft: {
      color: "grey",
    },

    rawInfoRight: {
      color: theme.colors.onSurfaceVariant,
      position: "absolute",
      left: "40%",
    },

    socle: {
      padding: 7,
      borderColor: theme.colors.outline,
      borderWidth: 1,
      borderRadius: 6,
      backgroundColor: theme.colors.background,
    },
  });
