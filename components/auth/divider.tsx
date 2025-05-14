import { StyleSheet, View} from 'react-native';
import { MD3Theme, Text, useTheme } from 'react-native-paper';

export default function AuthDivider() {
const theme = useTheme();
const style = styles(theme);

  return (
          <View style={style.separatorCont}>
            <View style={style.divider}></View>
            <Text>Ou</Text>
            <View style={style.divider}></View>
          </View>
  )
}

const styles = (theme: MD3Theme) => StyleSheet.create({
     
    separatorCont: {
        width: "100%",
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
  
      divider: {
        height: 1,
        width: "43%",
        backgroundColor: theme.colors.outline,
      },
  
 })