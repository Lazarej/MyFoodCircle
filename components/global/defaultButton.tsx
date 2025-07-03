import { StyleSheet, TouchableOpacity, View} from 'react-native';
import { MD3Theme, Text, useTheme } from 'react-native-paper';

export default function DefaultButton({ value, func} : { value: string, func: Function}) {
const theme = useTheme();
const style = styles(theme);

  return (
      <TouchableOpacity style={style.button} onPress={() => func() }>
      <Text style={style.text} variant='labelMedium'>{ value}</Text> 
    </TouchableOpacity>
  )
}

const styles = (theme: MD3Theme) => StyleSheet.create({
     
    button: {
        width: '100%',
        height: 60,
        borderRadius: 15,
        marginTop: 20,
        marginBottom:20,
        justifyContent: 'center',
        alignItems:'center',
    backgroundColor:theme.colors.primary
  },

  text: {
    color: theme.colors.onPrimary
  }
 })