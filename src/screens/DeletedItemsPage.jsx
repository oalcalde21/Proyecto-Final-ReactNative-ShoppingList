import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { ButtonDeletedItems, ButtonHome, Footer, ItemList, ItemStatusColor, Modal, NewItemHeader } from "../components";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import Logo from "../components/Logo/Logo";
import {styles} from './styles';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

const DeletedItemsPage = ({
  handleDeletedScreen,
  deletedItems, 
  openModal, 
  modalVisible, 
  selectedItem, 
  onCancelModal, 
  onDeleteModal}) => {
  
  return (
    <>
      <View style={styles.screen}>
        {/* LIST COMPONENT */}
        <ItemList items={deletedItems} openModal={openModal} />      
        {/* MODAl COMPONENT */}
        <Modal modalVisible={modalVisible} selectedItem={selectedItem} onCancelModal={onCancelModal} onDeleteModal={onDeleteModal}/>
        <ButtonHome handleDeletedScreen={handleDeletedScreen}/>
      </View>
    </>
  );
}

export default DeletedItemsPage