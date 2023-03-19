import { ButtonDeletedItems, ButtonHome, Footer, ItemList, ItemStatusColor, Modal, NewItemHeader } from "../components";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

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
      <View>
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