import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { ButtonDeletedItems, Footer, ItemList, ItemStatusColor, Modal, NewItemHeader } from "../components";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import Logo from "../components/Logo/Logo";
import {styles} from './styles';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

const StartPage = ({
  handleDeletedScreen, 
  deletedScreen, 
  deletedItems, 
  setDeletedItems, 
  items, 
  setItems, 
  itemText, 
  setItemText,
  addItemToState,
  handlePressIn,
  handlePressOut,
  isPressed,
  modalVisible,
  setModalVisible,
  selectedItem,
  setSelectedItem,
  onCancelModal,
  onDeleteModal,
  openModal, 
  onChangeText}) => {
  
  return (
    <>
      <View style={styles.screen}>
        {/* ADDITEM COMPONENT */}
        <NewItemHeader onChangeText={onChangeText} itemText={itemText} addItemToState={addItemToState} onPressIn={handlePressIn} OnPressOut={handlePressOut} isPressed={isPressed}/>
        {/* LIST COMPONENT */}
        <ItemStatusColor/>
        <ItemList items={items} openModal={openModal} />      
        {/* MODAl COMPONENT */}
        <Modal modalVisible={modalVisible} selectedItem={selectedItem} onCancelModal={onCancelModal} onDeleteModal={onDeleteModal}/>
        <ButtonDeletedItems handleDeletedScreen={handleDeletedScreen} deletedScreen={deletedScreen}/>
      </View>
    </>
  );
}

export default StartPage