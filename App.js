import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { ButtonDeletedItems, Footer, ItemList, ItemStatusColor, KeyboardAvoidingView, Modal, NewItemHeader } from "./src/components";
import { Poppins_Bold, Poppins_Regular, useFonts } from 'expo-font';
import React, { useCallback, useEffect, useState } from "react";

import AppNavigator from './src/navigation';
import DeletedItemsPage from './src/screens/DeletedItemsPage';
import Logo from "./src/components/Logo/Logo";
import StartPage from './src/screens/StartPage';

SplashScreen.preventAutoHideAsync();

export default function App() {
  
    // Fonts
    const [fontsLoaded] = useFonts({
      'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
      'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
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
        {/* {
        !deletedScreen
          ? <StartPage 
            handleDeletedScreen={handleDeletedScreen}
            deletedScreen={deletedScreen} 
            deletedItems={deletedItems} 
            setDeletedItems={setDeletedItems} 
            items={items} 
            setItems={setItems}
            itemText={itemText} 
            setItemText={setItemText}
            addItemToState={addItemToState}
            handlePressIn={handlePressIn}
            handlePressOut={handlePressOut}
            isPressed={isPressed}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            onCancelModal={onCancelModal}
            onDeleteModal={onDeleteModal}
            openModal={openModal}
            onChangeText={onChangeText} />
          : <DeletedItemsPage 
            handleDeletedScreen={handleDeletedScreen}
            deletedItems={deletedItems}
            openModal={openModal} 
            modalVisible={modalVisible} 
            selectedItem={selectedItem}
            onCancelModal={onCancelModal}
            onDeleteModal={onDeleteModal} />
        } */}
        <AppNavigator/>
    </>
  );
}
