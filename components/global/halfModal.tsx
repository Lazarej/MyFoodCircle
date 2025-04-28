import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import Modal from 'react-native-modal';



export function HalfModal  ({visible, fnc} : {visible: boolean , fnc: Function}) {




  if (!visible) return null; // <-- Important : ne rien afficher si pas visible !

  return (
   <Modal
    isVisible={visible}
     
  onBackdropPress={() => fnc()}
  style={styles.modal}
  swipeDirection="down"
  onSwipeComplete={() => fnc()}
  propagateSwipe={true}
  animationIn="slideInUp"
  animationOut="slideOutDown"
  useNativeDriver={false} // << pour autoriser swipe
  hideModalContentWhileAnimating={true}
  backdropTransitionOutTiming={0}


    >
      <View style={styles.modalContent}>
        <Text style={styles.text}>Ceci est une modal demi-écran !</Text>
        <Button title="Fermer" onPress={() => fnc()} />
      </View>
    </Modal>
  );
}

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({

  modal: {
    justifyContent: 'flex-end',
    margin: 0, // Important pour que la modal prenne tout l'écran et parte du bas
  },
  modalContent: {
    height: height / 2, // Moitié de l'écran
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
});