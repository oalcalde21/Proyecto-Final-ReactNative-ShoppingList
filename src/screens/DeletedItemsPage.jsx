import { ButtonDeletedItems, ButtonHome, Footer, ItemList, ItemStatusColor, Modal, NewItemHeader } from "../components";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const DeletedItemsPage = () => {
  
  return (
    <>
      <View>
        {/* <ItemList items={deletedItems} openModal={openModal} />       */}
        {/* <Modal modalVisible={modalVisible} selectedItem={selectedItem} onCancelModal={onCancelModal} onDeleteModal={onDeleteModal}/> */}
        {/* <ButtonHome handleDeletedScreen={handleDeletedScreen}/> */}
        <Text>Deleted Items</Text>  
      </View>
    </>
  );
}

export default DeletedItemsPage