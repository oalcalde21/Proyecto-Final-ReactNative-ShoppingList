import { Button, ButtonDeletedItems, Footer, ImagePick, ItemList, ItemStatusColor, Modal, NewItemHeader, PurchasedItem, PurchasedList } from "../components";
import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { addDeletedItem, addList, deleteDeletedItem, sendList } from "../store/actions/DeleteItemsPage.action";
import { useDispatch, useSelector } from "react-redux";

import Logo from "../components/Logo/Logo";

const DeletedItemsPage = () => {
 
const [imageValue, setImageValue] = React.useState('')
  
const purchasedItemsState = useSelector(state => state.deletedItemsPage.deletedItems);
const dispatch = useDispatch();

const ImgChangeHandler = () =>{
  setImageValue(null)
}

const onHandleSendList = () => {
  dispatch(addList(purchasedItemsState, imageValue))
  ImgChangeHandler()
};


  return (
    <>
      <View style={[styles.home]}>
        <Logo/>
        <PurchasedList style={styles.imgPick} items={purchasedItemsState}/>
        <View style={styles.imgPick}>
          <ImagePick onImage={image=>setImageValue(image)} />
        </View>
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
    bottom: -50,
  }, 
  buttonAlign: {
    justifyContent: "center",
    alignItems: "center",

  },
  text: {
    color: "#f0fbff",
    justifyContent: "center",
    alignItems: "center",
  },
  imgPick: {
    bottom: 10,
  }
})