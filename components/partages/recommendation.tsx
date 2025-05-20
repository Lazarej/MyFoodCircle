import { StyleSheet, View} from 'react-native';
import { MD3Theme, Text, useTheme } from 'react-native-paper';

export default function Recommendation() {
const theme = useTheme();
const style = styles(theme);

  return (
      <View style={style.view}>
          <View style={style.filterBar}>
              
              <Text>fezfezfez</Text>
          </View>
    </View>
  )
}

const styles = (theme: MD3Theme) => StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor:theme.colors.surface
    },
    
    filterBar: {
        width: '100%',
        height: 50,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor:theme.colors.outline
    }
 })