import { useAuth } from "@/context/authContext";
import { Button, StyleSheet, View } from "react-native";
import { MD3Theme, Text, useTheme } from "react-native-paper";

export default function SignIn() {
  const theme = useTheme();
  const style = styles(theme);
  const { setUser } = useAuth();

  return (
    <View>
      <Text>Bienvenue, veuillez vous connecter</Text>
      <Button
        title="Se dz connecter"
        onPress={() => setUser({ id: 1, name: "Test" })}
      />
    </View>
  );
}

const styles = (theme: MD3Theme) => StyleSheet.create({});
