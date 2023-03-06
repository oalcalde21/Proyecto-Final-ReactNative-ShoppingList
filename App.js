import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { ButtonDeletedItems, Footer, ItemList, ItemStatusColor, KeyboardAvoidingView, Modal, NewItemHeader } from "./src/components";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import DeletedItemsPage from './src/screens/DeletedItemsPage';
import Logo from "./src/components/Logo/Logo";
import StartPage from './src/screens/StartPage';
import {styles} from './styles';
import { useFonts } from 'expo-font';

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

  const [deletedScreen, setDeletedScreen] = useState(false);
  const [deletedItems, setDeletedItems] = useState([]);
  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([]);
  
  const handleDeletedscreen = () => {
    if (deletedScreen === false) {
      setDeletedScreen(true);
    } else {
      setDeletedScreen(false);
    }
  };
  
  return (
    <>
      <View style={styles.screen} onLayout={onLayoutRootView}>
        {/* ADDITEM COMPONENT */}
        <Logo/>
        {
        !deletedScreen
          ? <StartPage handleDeletedscreen={handleDeletedscreen} deletedScreen={deletedScreen} items={items} setItems={setItems} itemText={itemText} setItemText={setItemText} />
          : <DeletedItemsPage items={deletedItems} openModal={openModal} deletedItems={deletedItems} setDeletedItems={setDeletedItems} />
        }
        <Footer/>
      </View>
    </>
  );
}
