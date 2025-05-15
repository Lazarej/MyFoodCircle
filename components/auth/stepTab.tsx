import { StyleSheet, View} from 'react-native';
import { MD3Theme, Text, useTheme } from 'react-native-paper';

export default function StepTab({step}:{step:number}) {
const theme = useTheme();
const style = styles(theme);

  return (
      <View style={style.stepCont}>
       <View style={step >= 1 ? {...style.tab, opacity: 1 } : style.tab}></View>
       <View style={step >= 2 ? {...style.tab, opacity: 1 } : style.tab}></View> 
       <View style={step >= 3 ? {...style.tab, opacity: 1 } : style.tab}></View>

    </View>
  )
}

const styles = (theme: MD3Theme) => StyleSheet.create({
     
    stepCont: {

        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 50,
        marginTop:20,
        
    },

    tab: {
        height: 3,
        width: 50,
        marginHorizontal: 5,
        borderRadius: 20,
        backgroundColor: theme.colors.primary,
        opacity:0.3
    }
 })