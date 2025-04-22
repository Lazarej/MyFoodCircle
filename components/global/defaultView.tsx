
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';

export default function DefaultView({ children, color }: { children: React.ReactNode, color:string }) {
     
  const theme = useTheme()

  return (
      <View style={{...styles.container,backgroundColor:color,}}>
          {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
       padding: 20,
       flex:1,
    }
});