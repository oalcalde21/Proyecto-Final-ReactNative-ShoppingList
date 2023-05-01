import { Button, ButtonDeletedItems, Footer, ImagePick, ItemList, ItemStatusColor, Modal, NewItemHeader, PurchasedItem, PurchasedList } from "../components";
import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { addDeletedItem, addList, deleteDeletedItem, sendList } from "../store/actions/DeleteItemsPage.action";
import { useDispatch, useSelector } from "react-redux";

import Logo from "../components/Logo/Logo";

const DeletedItemsPage = () => {
 
const [pickedUri, setPickedUri] = useState("")
const [hasItems, setHasItems] = useState(false);
const [hasPhoto, setHasPhoto] = useState(false);
const buttonStyle = [styles.button];
const disabledButtonStyle = [styles.button, styles.disabledButton];

useEffect(() => {
  setHasItems(purchasedItemsState.length > 0);
  setHasPhoto(!!pickedUri);
}, [purchasedItemsState, pickedUri]);
  
const purchasedItemsState = useSelector(state => state.deletedItemsPage.deletedItems);
const dispatch = useDispatch();

const onHandleSendList = () => {
  dispatch(addList(purchasedItemsState, pickedUri))
  setPickedUri(null)
  dispatch(deleteDeletedItem())
};


  return (
    <>
      <View style={[styles.home]}>
        <Logo/>
        <View>
          <Text style={styles.text}>You need items in the list and a invoice photo to be able to send and save it</Text>
        </View>
        <PurchasedList style={styles.imgPick} items={purchasedItemsState}/>
        <View style={styles.imgPick}>
          <ImagePick pickedUri={pickedUri} setPickedUri={setPickedUri}/>
        </View>
        <View style={styles.buttonAlign}>
          <Pressable style={hasItems && hasPhoto ? buttonStyle : disabledButtonStyle} onPress={onHandleSendList} disabled={!hasItems || !hasPhoto} disabledStyle={disabledButtonStyle}>
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
    bottom: 0,
  }, 
  disabledButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    padding: 10,
    width: 250,
    backgroundColor: "#878d92",
    bottom: 0,
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
    bottom: 50,
  },
  text:{
    fontFamily: "Poppins-Regular",
    textAlign: "center",
    marginHorizontal: 20,
  }
})