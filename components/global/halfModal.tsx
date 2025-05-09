import React, { ReactNode, Ref, } from 'react';
import { View, Text, Button, StyleSheet, } from 'react-native';

import { Modalize } from 'react-native-modalize';
import { MD3Theme, Portal, useTheme } from 'react-native-paper';
import ModalHeader from './modalHeader';
import DefaultView from './defaultView';




export function HalfModal({ modalRef, children,titre }: { modalRef: Ref<Modalize>, children:ReactNode,titre:string }) {
  const theme = useTheme();
    const style = styles(theme);
 return (
   <Portal>
     <Modalize
      ref={modalRef}
      adjustToContentHeight 
      withHandle            
      handlePosition="inside"
      panGestureEnabled     
      disableScrollIfPossible
      closeOnOverlayTap     
       modalStyle={style.modal}
       overlayStyle={{ backgroundColor: `${theme.colors.inverseSurface}46`}} 
    >

       <ModalHeader text={titre } card={false} />
       <DefaultView color={theme.colors.surface}>
        {children}
        </DefaultView>
 
    </Modalize>
    </Portal>
  );
};

const styles = (theme: MD3Theme) =>
  StyleSheet.create({
  modal: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
      backgroundColor: theme.colors.surface,
     overflow: 'hidden'
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
  },
});