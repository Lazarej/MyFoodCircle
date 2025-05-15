import { StyleSheet, View,Image, ImageSourcePropType} from 'react-native';
import { MD3Theme, Text, useTheme } from 'react-native-paper';

export default function PresentationCont({ icon, title, text }: { icon: ImageSourcePropType, title: string, text:string}) {
const theme = useTheme();
const style = styles(theme);

  return (
    <View style={style.presentationCont}>
            <Image
              source={icon}
              style={{ width: 90, height: 90 }}
            />
            <Text variant="titleLarge" style={style.title}>
              {title}
            </Text>
            <Text variant="bodySmall" style={style.text}>
              {text}
            </Text>
          </View>
  )
}

const styles = (theme: MD3Theme) => StyleSheet.create({
    presentationCont: {
        width: "100%",
        flexDirection: "column",
        paddingTop: 10,
        alignItems: "center",
      },
  
      title: {
        fontSize: 30,
        marginTop: 40,
        textAlign: "center",
      },
      text: {
        textAlign: "center",
        paddingHorizontal: 5,
        marginTop: 10,
      },
 })