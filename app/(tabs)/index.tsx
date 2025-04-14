import DefaultView from "@/components/global/defaultView";
import { Text, TouchableHighlight, View ,StyleSheet} from "react-native";
import { useTheme } from "react-native-paper";

export default function accueil() {

  const theme = useTheme()

  return (
    <DefaultView>
      <View style={styles.container}>
        <TouchableHighlight onPress={() => console.log("ok")} style={{...styles.addBtn, backgroundColor: theme.colors.primary }}>
          <View>
             <Text>Oui</Text>
           </View>
        </TouchableHighlight>
      </View>
    </DefaultView>
  );
}


const styles = StyleSheet.create({
    container: {
       flex:1,
  },
  
  addBtn: {
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection: 'column', 
    width: '100%',
    height: 150,
    borderRadius: 20
  }
});
