import PresentationCont from '@/components/auth/presentation';
import DefaultButton from '@/components/global/defaultButton';
import DefaultInput from '@/components/global/defaultInput';
import DefaultView from '@/components/global/defaultView';
import { Link } from 'expo-router';
import { StyleSheet, View} from 'react-native';
import { MD3Theme, Text, useTheme } from 'react-native-paper';

export default function SignUp() {
const theme = useTheme();
const style = styles(theme);

  return (
      <DefaultView color={theme.colors.surface}>
          <PresentationCont icon={require('../../assets/images/Wave.png')} title="S'incrire" text="Petit text histoire de mettre un truc, a voir si on l'enlève ou pas
                        parce que pas forcement néccesaire"/>
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
              <DefaultInput
                    label="Confirmation mot de passe"
                    value=""
                    onChange={() => null}
                    mode="input"
                    securetTextEntry={true}
                  />
          </View>
          
          <DefaultButton value='Créer son compte' func={() => null} />
            <Text variant="bodyMedium">
                  Vous avez un compte?
                  <Link replace  href="../login" style={{ color: theme.colors.primary }}> Connectez vous</Link>
                </Text>
    </DefaultView>
  )
}

const styles = (theme: MD3Theme) => StyleSheet.create({
     
    form: {
        marginVertical: 20,
      },
 })