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

  const [deletedScreen, setDeletedScreen] = useState(false);
  const [deletedItems, setDeletedItems] = useState([]);
  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  
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
    
   
  
    const onChangeText = (text) => {
      setItemText(text);
    };
  
    useEffect(() => {
      console.log("useEffect", "itemText", itemText, "ITEMS", items);
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
        console.log(deletedScreen)
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
  
  const handleDeletedScreen = () => {
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
        }
        <Footer/>
      </View>
    </>
  );
}
