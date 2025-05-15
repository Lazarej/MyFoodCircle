import { StyleSheet, View} from 'react-native';
import { MD3Theme, Text, useTheme } from 'react-native-paper';
import PresentationCont from './presentation';
import DefaultInput from '../global/defaultInput';
import DefaultButton from '../global/defaultButton';

export default function Step1({onNext}:{onNext:Function}) {
const theme = useTheme();
const style = styles(theme);

  return (
      <View>
          <PresentationCont icon={require('../../assets/images/Wave.png') } title='Mot de passe oublié' text="Petit text histoire de mettre un truc, a voir si on l'enlève ou pas
              parce que pas forcement néccesaire"/>
          <View style={style.form}>
          <DefaultInput label='Email ou Téléphone'value='' mode='input' onChange={() => null } />
          </View>
          <DefaultButton value={'Continue'} func={()=>onNext()}/>
      </View>
  )
}

const styles = (theme: MD3Theme) => StyleSheet.create({
     
    form: {
        marginTop:60
    }

 })