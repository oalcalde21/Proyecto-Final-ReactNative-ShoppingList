import { HistoryList, HistoryModal, ItemList, Modal, PurchasedItem } from "../components";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from "react-redux";

import Logo from "../components/Logo/Logo";

const ListHistoryScreen = () => {
  
  const itemsState = useSelector(state => state.deletedItemsPage.list);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);  

  const openModal = (item) => {
    console.log("openModal");
    console.log(item);
    setSelectedItem(item);
    setModalVisible(true);
  };

  const onCancelModal = () => {
    setModalVisible(!modalVisible);
  };

  const onDeleteModal = (id, item) => {
    setModalVisible(!modalVisible);
  };

  
  return (
    <View style={[styles.home]}> 
        <Logo/>
        {/* LIST COMPONENT */}
        <HistoryList items={itemsState} openModal={openModal}/>
        <HistoryModal modalVisible={modalVisible} selectedItem={selectedItem} onCancelModal={onCancelModal} onDeleteModal={onDeleteModal}/>
      </View>
  )
}

export default ListHistoryScreen

const styles = StyleSheet.create({
  home: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
})
