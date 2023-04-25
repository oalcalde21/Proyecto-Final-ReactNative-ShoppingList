import { ItemList, Modal, PurchasedItem, PurchasedList } from "../components";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from "react-redux";

import Logo from "../components/Logo/Logo";

const ListHistoryScreen = () => {
  
  const itemsState = useSelector(state => state.deletedItemsPage.list);  

  return (
    <View style={[styles.home]}> 
        <Logo/>
        {/* LIST COMPONENT */}
        <PurchasedList style={{height: '100%'}} items={itemsState}/>    
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
