import { FlatList, StyleSheet, Text } from "react-native";

import Item from "../Item/Item";
import PurchasedItem from "../PurchasedItem/PurchasedItem";
import React from "react";
import {styles} from './styles'

const PurchasedList = ({ items }) => {
  
  return (
    <>
    <FlatList data={items} style={styles.container} renderItem={(itemData) => {
        return <PurchasedItem itemData={itemData}/>;
      }}
      keyExtractor={(item) => item.id.toString()}
      nestedScrollEnabled={true}
      contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
    />
    </>
  );
};

export default PurchasedList;
