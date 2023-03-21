import { ButtonDeletedItems, ButtonHome, Footer, ItemList, ItemStatusColor, Modal, NewItemHeader } from "../components";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { DELETEDITEMS } from '../data/deletedItems';
import Logo from "../components/Logo/Logo";

const DeletedItemsPage = () => {
  
  return (
    <>
      <View>
        <Logo/>
        <ItemList items={DELETEDITEMS}/>      
      </View>
    </>
  );
}

export default DeletedItemsPage