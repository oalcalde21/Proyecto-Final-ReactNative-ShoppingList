import { ButtonDeletedItems, Footer, ItemList, ItemStatusColor, Modal, NewItemHeader } from "../components";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import Logo from "../components/Logo/Logo";

const StartPage = () => {

    const [deletedScreen, setDeletedScreen] = useState(false);
    const [deletedItems, setDeletedItems] = useState([]);
    const [itemText, setItemText] = useState("");
    const [items, setItems] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleDeletedScreen = () => {
      if (deletedScreen === false) {
        setDeletedScreen(true);
      } else {
        setDeletedScreen(false);
      }
    };

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
  
  return (
    <>
      <View>
        <Logo/>
        {/* ADDITEM COMPONENT */}
        <NewItemHeader onChangeText={onChangeText} itemText={itemText} addItemToState={addItemToState} onPressIn={handlePressIn} OnPressOut={handlePressOut} isPressed={isPressed}/>
        {/* LIST COMPONENT */}
        <ItemStatusColor/>
        <ItemList items={items} openModal={openModal} />      
        {/* MODAl COMPONENT */}
        <Modal modalVisible={modalVisible} selectedItem={selectedItem} onCancelModal={onCancelModal} onDeleteModal={onDeleteModal}/>
        {/* <ButtonDeletedItems handleDeletedScreen={handleDeletedScreen} deletedScreen={deletedScreen}/> */}
      </View>
    </>
  );
}

export default StartPage