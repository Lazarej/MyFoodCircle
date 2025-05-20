import { StyleSheet, View} from 'react-native';
import { MD3Theme, Text, useTheme } from 'react-native-paper';

export default function Amies() {
const theme = useTheme();
const style = styles(theme);

  return (
      <View style={style.view}>
          
    </View>
  )
}

const styles = (theme: MD3Theme) => StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor:theme.colors.surface
      }
 })