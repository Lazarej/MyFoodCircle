import DefaultView from '@/components/global/defaultView';
import ModalHeader from '@/components/global/modalHeader';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, View} from 'react-native';
import { MD3Theme, Text, useTheme } from 'react-native-paper';

export default function RestaurantData() {
const theme = useTheme();
    const style = styles(theme);
    const { id } = useLocalSearchParams();

  return (
      <View style={style.modal}>
          <ModalHeader text='Modifier un restaurant' />
          <DefaultView>
              <Text>{id} oui oui </Text>
           </DefaultView>
    </View>
  )
}

const styles = (theme: MD3Theme) => StyleSheet.create({
     
    modal: {
      flex: 1,
      backgroundColor:'white'
    },
 })