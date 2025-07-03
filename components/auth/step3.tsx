import { StyleSheet, View} from 'react-native';
import { MD3Theme, Text, useTheme } from 'react-native-paper';
import PresentationCont from './presentation';
import DefaultInput from '../global/defaultInput';
import DefaultButton from '../global/defaultButton';
import { router } from 'expo-router';

export default function Step3({onNext}:{onNext?:Function}) {
const theme = useTheme();
const style = styles(theme);

  return (
      <>
          <PresentationCont icon={require('../../assets/images/lock.png') } title='Changer votre mot de passe' text="Petit text histoire de mettre un truc, a voir si on l'enlève ou pas
              parce que pas forcement néccesaire"/>
          <View style={style.form}>
              <DefaultInput
                        label="Mot de passe"
                        value=""
                        onChange={() => null}
                        mode="input"
                        securetTextEntry={true}
              />
              <DefaultInput
                        label="Réecrire le mot de passe"
                        value=""
                        onChange={() => null}
                        mode="input"
                        securetTextEntry={true}
                      />
          </View>
          <DefaultButton value='Changer de mot de passe' func={() => router.replace('/(auth)/login')} />
      </>
  )
}

const styles = (theme: MD3Theme) => StyleSheet.create({
     
    form: {
        marginTop:30
    }
 })