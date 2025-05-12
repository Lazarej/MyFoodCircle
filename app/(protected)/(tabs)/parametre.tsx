
import DefaultView from '@/components/global/defaultView';
import { useAuth } from '@/context/authContext';
import { StyleSheet, View} from 'react-native';
import { Button, MD3Theme, Text, useTheme } from 'react-native-paper';

export default function Parametres() {
const theme = useTheme();
const style = styles(theme);
  const { logOut } = useAuth();
  
  return (
    <DefaultView color={theme.colors.background}>
            <Button onPress={() => logOut() }>Deconnexion</Button>
    </DefaultView>
  )
}

 const styles = (theme: MD3Theme) => StyleSheet.create({})
