import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { ButtonDeletedItems, Footer, ItemList, ItemStatusColor, Modal, NewItemHeader } from "../components";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import Logo from "../components/Logo/Logo";
import {styles} from './styles';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

const StartPage = ({handleDeletedscreen, deletedScreen, deletedItems, setDeletedItems, items, setItems, itemText, setItemText}) => {

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
  
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onChangeText = (text) => {
    setItemText(text);
  };

  useEffect(() => {
    console.log("useEffect", "itemText", itemText, "ITEMS", items);
    console.log(deletedScreen);
  }, []);
  
  const addItemToState = () => {
    console.log("addItemToState - start SIN JSON", items, itemText);
    console.log(
      "addItemToState - start CON JSON",
      JSON.stringify({ items, itemText })
    );
    const newArr = [...items, { id: Date.now(), value: itemText }];
    setItems(newArr);
    setItemText("");
    console.log("addItemToState - end", "items", newArr);
  };
  

  const addDeletedItemToState = (item) => {
    console.log("addItemToState - start SIN JSON", items, itemText);
    console.log(
      "addDeleteItemToState - start CON JSON",
      JSON.stringify({ items, itemText })
    );
    const newArr = [...deletedItems, { id: Date.now(), value: item.value }];
    setDeletedItems(newArr);
    console.log("addDeletedItemToState - end", "items", newArr);
  };
  
   const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const onCancelModal = () => {
    setModalVisible(!modalVisible);
  };

  const onDeleteModal = (id, item) => {
    setModalVisible(!modalVisible);
    setItems((oldArry) => oldArry.filter((item) => item.id !== id));
    addDeletedItemToState(item);
    setSelectedItem(null);
  };

  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  // Esta parte es para que no se vea el splash screen hasta que se carguen las fuentes
  // Va siempre al final y antes del return
  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <>
      <View style={styles.screen} onLayout={onLayoutRootView}>
        {/* ADDITEM COMPONENT */}
        <NewItemHeader onChangeText={onChangeText} itemText={itemText} addItemToState={addItemToState} onPressIn={handlePressIn} OnPressOut={handlePressOut} isPressed={isPressed}/>
        {/* LIST COMPONENT */}
        <ItemStatusColor/>
        <ItemList items={items} openModal={openModal} />      
        {/* MODAl COMPONENT */}
        <Modal modalVisible={modalVisible} selectedItem={selectedItem} onCancelModal={onCancelModal} onDeleteModal={onDeleteModal}/>
        <ButtonDeletedItems handleDeletedscreen={handleDeletedscreen}/>
      </View>
    </>
  );
}

export default StartPage