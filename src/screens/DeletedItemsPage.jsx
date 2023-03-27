import { ButtonDeletedItems, ButtonHome, Footer, ItemList, ItemStatusColor, Modal, NewItemHeader } from "../components";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Logo from "../components/Logo/Logo";

const DeletedItemsPage = () => {
  
const deletedItemsState = useSelector(state => state.deletedItemsPage.deletedItems);
console.log(deletedItemsState)
const dispatch = useDispatch();

  return (
    <>
      <View>
        <Logo/>
        <ItemList items={deletedItemsState}/>      
      </View>
    </>
  );
}

export default DeletedItemsPage