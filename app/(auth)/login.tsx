import DefaultButton from "@/components/global/defaultButton";
import DefaultInput from "@/components/global/defaultInput";
import DefaultView from "@/components/global/defaultView";
import { useAuth } from "@/context/authContext";
import { Button, StyleSheet, View, Image } from "react-native";
import { Divider, MD3Theme, Text, useTheme } from "react-native-paper";

export default function Login() {
  const theme = useTheme();
  const style = styles(theme);
  const { setUser } = useAuth();

  return (
    <DefaultView color={theme.colors.surface}>
      <View style={style.presentationCont}>
        <Image
          source={require("../../assets/images/Wave.png")}
          style={{ width: 90, height: 90 }}
        />
        <Text variant="titleLarge" style={style.title}>
          Se Connecter
        </Text>
        <Text variant="bodySmall" style={style.text}>
          Petit text histoire de mettre un truc, a voir si on l'enlève ou pas
          parce que pas forcement néccesaire
        </Text>
      </View>
      <View style={style.otherConnectionCont}> 

      </View>
      <View style={style.separatorCont}>
        <View style={style.divider}></View>
        <Text>Ou</Text>
        <View style={style.divider}></View>

      </View>
      <View style={style.form}>
        <DefaultInput label='Email' value='' onChange={() => null} mode="input" />
        <DefaultInput label='Mot de passe' value='' onChange={() => null} mode="input" securetTextEntry={true} />
        <View style={style.helpCont}>
          <Text variant="bodySmall" style={{color: theme.colors.primary}}>Mot de passe oublié ?</Text>
        </View>
        <DefaultButton value='Connection' func={() => setUser({ id: 1, name: 'User' })} />
        <Text variant="bodyMedium" >Pas de compte ?<Text variant="bodyMedium" style={{color: theme.colors.primary}}> Créer un compte</Text></Text>
      </View>
    </DefaultView>
  );
}

const styles = (theme: MD3Theme) =>
  StyleSheet.create({
    presentationCont: {
      width: "100%",
      flexDirection: "column",
      paddingTop: 10,
      alignItems: "center",
    },

    title: {
      fontSize: 30,
      marginTop: 40,
    },
    text: {
      textAlign: "center",
      paddingHorizontal: 5,
      marginTop: 10,
    },

    otherConnectionCont: {
      
    },

    separatorCont: {
      width: '100%',
      marginTop:25,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center'
    },

    divider: {
      height: 1, 
      width: '43%',
      backgroundColor:theme.colors.outline
    },

    form: {
      marginVertical:20
    },

    helpCont: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginBottom:20
    },



  });
