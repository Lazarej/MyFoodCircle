import Feather from '@expo/vector-icons/build/Feather';
import { Alert, StyleSheet, TouchableOpacity, View} from 'react-native';
import { MD3Theme, Text, useTheme } from 'react-native-paper';
import * as Clipboard from 'expo-clipboard';

export default function CopyID() {
const theme = useTheme();
    const style = styles(theme);
    const id = "de5122"

    const handleCopy = async () => {
        await Clipboard.setStringAsync(id);
        Alert.alert("Copié !", "Le texte a été copié dans le presse-papiers.");
      };

  return (
      <TouchableOpacity onPress={() => handleCopy()} style={style.idCont} >
          <Text style={style.id} variant='bodyMedium'>ID: {id}</Text>  
          <Feather  name="copy" size={18} color={theme.colors.primary} />
    </TouchableOpacity>
  )
}

const styles = (theme: MD3Theme) => StyleSheet.create({

    idCont: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems:'center'
    },
     
    id: {
        textTransform: 'uppercase',
        color: theme.colors.onSurface,
        marginRight:10
    }
 })