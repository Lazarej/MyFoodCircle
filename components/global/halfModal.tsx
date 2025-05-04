import React, { Ref, useState } from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import { Modalize } from 'react-native-modalize';
import { MD3Theme, Portal, useTheme } from 'react-native-paper';
import ModalHeader from './modalHeader';
import DefaultView from './defaultView';
import PricePicker from './PricePicker';
import CuisinePicker from './cuisinePicker';
import data from "./../../mock/categories.json";



export function HalfModal({ modalRef }: { modalRef: Ref<Modalize> }) {
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

        <ModalHeader text="Filtres" card={false} />
       <DefaultView color={theme.colors.surface}>
         <CuisinePicker label='Type de cuisines' cuisines={[ 'Tous', ...data.cuisines]}/>
           <PricePicker childrenValue='Tous' label='Gamme de prix'/>
        <Text style={style.paragraph}>
          Swipe vers le bas ou tape à l’extérieur pour la fermer.
        </Text>
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