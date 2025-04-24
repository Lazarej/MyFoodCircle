import Entypo from "@expo/vector-icons/build/Entypo";
import { StyleSheet, View, Platform, Image, Pressable } from "react-native";
import { Chip, MD3Theme, Surface, Text, useTheme } from "react-native-paper";
import Restaurant from "@/constants/type/restaurant";
import { Link, router, usePathname } from "expo-router";

export default function RestoCard({props} : {props: Restaurant}) {
  const theme = useTheme();
  const style = styles(theme);

  const pathname = usePathname();


  return (
    <Pressable onPress={() => router.push({
      pathname: `details/${props.id}`,
      params: { id: props.id, from: pathname, mode: 'add' },
    })}
     style={style.card}>
      <Image
        style={style.imageCard}
        source={{ uri: props.image }}
      />
      <View style={style.infoBtnCont}>
        <View style={style.infoCont}>
                  <Text variant="titleSmall">{props.title}</Text>
          <View style={style.chip}>
            <Text variant="bodySmall">{props.cuisine}</Text>
          </View>
          <View style={style.starCont}>
            <Entypo name="star" size={16} color={theme.colors.tertiary} />
            <Text style={{ color: theme.colors.tertiary, fontSize: 12 }}>
              {props.rating}
            </Text>
          </View>
          <Text
            variant="bodySmall"
            style={{ color: "grey", fontStyle: "italic" }}
          >
            {props.createdAt}
          </Text>
        </View>

        <View></View>
      </View>
    </Pressable>
  );
}

const styles = (theme: MD3Theme) =>
  StyleSheet.create({
    card: {
      backgroundColor: theme.colors.surface,
      borderColor: theme.colors.background,
      borderWidth:1,
      width: "100%",
      height: 110,
          flexDirection: "row",
      marginBottom:20,
      borderRadius: 12,
      ...Platform.select({
        ios: {
          shadowColor: "#OOO",
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.08, //
          shadowRadius: 10,
        },
      }),
    },

    imageCard: {
      height: 110,
      width: 100,
      borderTopLeftRadius: 12,
      borderBottomLeftRadius: 12,
      marginRight: 10,
    },

    infoBtnCont: {
      padding: 5,
      flex: 1,
      borderTopRightRadius: 12,
      borderBottomRightRadius: 12,
    },

      infoCont: {
        height:'100%',
      paddingTop: 5,
      paddingBottom: 5,
      flexDirection: "column",
      justifyContent: "space-between",
    },

    chip: {
      marginTop: 4,
      marginBottom: 4,
      paddingHorizontal: 6,
      paddingVertical: 2,
      borderRadius: 5,
      alignSelf: "flex-start",
      borderColor: theme.colors.inversePrimary, // Outline bleu
      borderWidth: 1,
    },

    starCont: {
      flexDirection: "row",
      alignItems: "flex-end",
    },
  });
