import { ItemList, Modal } from "../components";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from "react-redux";

import Logo from "../components/Logo/Logo";

const ListHistoryScreen = () => {
  
  const itemsState = useSelector(state => state.deletedItemsPage.list);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  
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

  // Todo esto se sustituye por el dispatch de HistoryLoader con las listas guardadas en Firebase

  return (
    <View style={[styles.home]}> 
        <Logo/>
        {/* LIST COMPONENT */}
        <ItemList items={itemsState} openModal={openModal} />      
        {/* MODAl COMPONENT */}
        <Modal modalVisible={modalVisible} selectedItem={selectedItem} onCancelModal={onCancelModal} onDeleteModal={onDeleteModal}/>
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
