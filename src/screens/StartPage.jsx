import { ButtonDeletedItems, Footer, ItemList, ItemStatusColor, Modal, NewItemHeader } from "../components";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { addItem, deleteItem } from "../store/actions/StartPage.action";
import { useDispatch, useSelector } from "react-redux";

import Logo from "../components/Logo/Logo";

const StartPage = () => {

    const [deletedScreen, setDeletedScreen] = useState(false);
    const [deletedItems, setDeletedItems] = useState([]);
    const [itemText, setItemText] = useState("");
    const [items, setItems] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    
    const itemsState = useSelector(state => state.startPage.items);
    const dispatch = useDispatch();


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
      console.log("useEffect", "itemText", itemText, "ITEMS", itemsState);
    }, []);
    
    const addItemToState = () => {
      dispatch(addItem(itemText));
    };
    
  
    const addDeletedItemToState = (id, item) => {
        dispatch(deleteItem(id, item));
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
      addDeletedItemToState(id, item);
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
        <ItemList items={itemsState} openModal={openModal} />      
        {/* MODAl COMPONENT */}
        <Modal modalVisible={modalVisible} selectedItem={selectedItem} onCancelModal={onCancelModal} onDeleteModal={onDeleteModal}/>
        {/* <ButtonDeletedItems handleDeletedScreen={handleDeletedScreen} deletedScreen={deletedScreen}/> */}
      </View>
    </>
  );
}

export default StartPage