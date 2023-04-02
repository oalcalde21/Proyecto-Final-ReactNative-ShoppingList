import { Button, ButtonDeletedItems, Footer, ItemList, ItemStatusColor, Modal, NewItemHeader } from "../components";
import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { addDeletedItem, deleteDeletedItem, sendList } from "../store/actions/DeleteItemsPage.action";
import { useDispatch, useSelector } from "react-redux";

import Logo from "../components/Logo/Logo";

const DeletedItemsPage = () => {
  
const purchasedItemsState = useSelector(state => state.deletedItemsPage.deletedItems);
console.log(purchasedItemsState)
const dispatch = useDispatch();

const onHandleSendList = ()=>{
  console.log(purchasedItemsState);
  dispatch(sendList(purchasedItemsState)); 
  console.log("List Sended");
}
const onHandleDeleteItem=(itemId)=>{
  console.log("Elimina item");
  dispatch(removeItem(itemId))
}

  return (
    <>
      <View style={[styles.home]}>
        <Logo/>
        <ItemList items={purchasedItemsState}/>
        <View style={styles.buttonAlign}>
          <Pressable style={styles.button} onPress={onHandleSendList}>
            <Text style={styles.text}>Send List</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

export default DeletedItemsPage

const styles = StyleSheet.create({
  home: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    padding: 10,
    width: 250,
    backgroundColor: "#2196F3",
    bottom: -70,
  }, 
  buttonAlign: {
    justifyContent: "center",
    alignItems: "center",

  },
  text: {
    color: "#f0fbff",
    justifyContent: "center",
    alignItems: "center",
  }
})