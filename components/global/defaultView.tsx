
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';

export default function DefaultView({ children }: { children: React.ReactNode }) {
     
  const theme = useTheme()

  return (
      <View style={{...styles.container,backgroundColor: theme.colors.background,}}>
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