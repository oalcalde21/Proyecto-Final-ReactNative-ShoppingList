import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { ButtonDeletedItems, Footer, ItemList, ItemStatusColor, Modal, NewItemHeader } from "../components";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import Logo from "../components/Logo/Logo";
import {styles} from './styles';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

const DeletedItemsPage = ({handleDeletedscreen, deletedScreen}) => {

  // Fonts
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  // Esta parte es para que no se vea el splash screen hasta que se carguen las fuentes
  // Va siempre al final y antes del return
  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <>
      <View style={styles.screen} onLayout={onLayoutRootView}>
        {/* LIST COMPONENT */}
        <ItemList items={deletedItems} openModal={openModal} />      
        {/* MODAl COMPONENT */}
        <Modal modalVisible={modalVisible} selectedItem={selectedItem} onCancelModal={onCancelModal} onDeleteModal={onDeleteModal}/>
      </View>
    </>
  );
}

export default DeletedItemsPage