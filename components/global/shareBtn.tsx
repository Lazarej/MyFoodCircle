import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MD3Theme, Text, useTheme } from "react-native-paper";
import Entypo from "@expo/vector-icons/build/Entypo";
import { HalfModal } from "./halfModal";
import { Modalize } from "react-native-modalize";
import { useRef } from "react";
import Restaurant from "@/constants/type/restaurant";
import StarPicker from "./starsPicker";
import DefaultInput from "./defaultInput";
import DropDownPicker from "./dropDownPicker";
import friends from './../../mock/friends.json'



export default function ShareBtn({ props }: { props: Restaurant }) {
  const theme = useTheme();
  const style = styles(theme);
  const modalRef = useRef<Modalize>(null);
   

  return (
    <View>
      <TouchableOpacity style={style.shareBtn}  hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} onPress={() =>  modalRef.current?.open()}>
        <Entypo name="share" size={17} color={theme.colors.onSurface} />
      </TouchableOpacity>
      <HalfModal modalRef={modalRef} titre={`Partager ${props.title} `}>
        <DropDownPicker label="A qui souhaitez vous partager" data={friends}/>
          <DefaultInput
                      label="Description"
                      value={""}
                      onChange={() => null }
                      mode="textarea"
                      editable={true}
                    />
      </HalfModal>
    </View>
  );
}

const styles = (theme: MD3Theme) =>
  StyleSheet.create({
    shareBtn: {
      padding: 5,
      borderColor: theme.colors.outline,
      borderWidth: 1,
      borderRadius: 6,
      backgroundColor: theme.colors.background,
    },
  });
