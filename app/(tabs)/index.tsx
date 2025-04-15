import DefaultView from "@/components/global/defaultView";
import { Ionicons } from "@expo/vector-icons";
import {  TouchableHighlight, View ,StyleSheet} from "react-native";
import { Text, useTheme } from "react-native-paper";

export default function accueil() {

  const theme = useTheme()
  const style =  styles(theme)

  return (
    <DefaultView>
      <View style={style.container}>
        <TouchableHighlight onPress={() => console.log("ok")} style={style.addBtn }>
          <View style={style.btnCont}>
            <Ionicons name="add" size={30} color={theme.colors.onPrimary} />
            <Text variant="titleLarge" style={{ color: theme.colors.onPrimary , ...style.btnText }}>Ajouter un restaurant</Text>
            <Text variant="bodySmall" style={{ color: theme.colors.onPrimary ,}}>recherchez et ajoutez vos retaurants préférés</Text>
           </View>
        </TouchableHighlight>
      </View>
    </DefaultView>
  );
}


const styles = (theme) => StyleSheet.create({
    container: {
       flex:1,
  },
  
  addBtn: {
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection: 'column', 
    width: '100%',
    height: 150,
    borderRadius: 20,
    backgroundColor: theme.colors.primary
  },

  btnCont: {
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },

  btnText: {
    marginBottom: 10,
    marginTop: 5
  }
});
