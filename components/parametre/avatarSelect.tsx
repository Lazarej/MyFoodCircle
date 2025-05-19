import { useEffect, useState } from "react";
import { Alert, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { MD3Theme, Text, useTheme } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function AvatarSelect() {
  const theme = useTheme();
  const style = styles(theme);

  const [image, setImage] = useState<string | null>(null);


  const pickImage = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission requise",
          "Autorisez l’accès à la galerie pour changer l’avatar."
        );
      }
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: "images",
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      Alert.alert(
        "Erreur",
        "Une erreur est survenue lors de la sélection de l’image."
      );
    }
  };

  return (
      <TouchableOpacity style={style.container} onPress={pickImage}>
      <View style={style.icon}>
      <MaterialIcons  name="add-a-photo" size={18} color={theme.colors.surface } />
          </View>
      <Image
        source={
          image
            ? { uri: image }
            : require("./../../assets/images/avatarDefault.jpg")
        }
              resizeMode='cover'
        style={style.avatar}
      />
    </TouchableOpacity>
  );
}

const styles = (theme: MD3Theme) =>
    StyleSheet.create({
     
        container: {
       position:'relative'
   }   ,  

        icon: {
            position: 'absolute',
            right: -5,
            bottom: 2,
          zIndex: 10,
          width: 35,
          height: 35,
          backgroundColor: theme.colors.primary,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius:30,
          borderWidth: 2,
          borderColor: theme.colors.surface
    },
    avatar: {
      width: 100,
      height: 100,
          borderRadius: 50,
      
      
    },
  });
