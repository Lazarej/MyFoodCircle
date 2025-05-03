import React, { Ref, useState } from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import { Modalize } from 'react-native-modalize';
import { Portal, useTheme } from 'react-native-paper';



export function HalfModal({ modalRef }: { modalRef: Ref<Modalize> }) {
    const theme = useTheme();
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
       modalStyle={styles.modal}
       overlayStyle={{ backgroundColor: `${theme.colors.inverseSurface}46`}} 
    >
      <View style={styles.content}>
        <Text style={styles.title}>Bonjour 👋</Text>
        <Text style={styles.paragraph}>
          Ceci est une modal dont la hauteur s’adapte au contenu. 
          On ne peut pas la swiper vers le haut.
        </Text>
        <Text style={styles.paragraph}>
          Swipe vers le bas ou tape à l’extérieur pour la fermer.
        </Text>
      </View>
    </Modalize>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modal: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  content: {
    paddingVertical: 20,
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