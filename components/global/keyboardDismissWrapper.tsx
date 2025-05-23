import { ReactNode } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


export default function KeyboardDismissWrapper({ children}:{children: ReactNode}) {
  return (

        <KeyboardAwareScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          enableOnAndroid
          extraScrollHeight={20}
        >
          {children}
        </KeyboardAwareScrollView>
  );
}