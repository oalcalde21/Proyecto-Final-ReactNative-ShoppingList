import { FlatList, StyleSheet, Text } from "react-native";

import HistoryItem from "../HistoryItem/HistoryItem";
import Item from "../Item/Item";
import React from "react";
import {styles} from './styles'

const HistoryList = ({ items }) => {
  
  return (
    <>
    <FlatList data={items} style={styles.container} renderItem={(itemData) => {
        return <HistoryItem itemData={itemData}/>;
      }}
      keyExtractor={(item) => item.id.toString()}
      nestedScrollEnabled={true}
      contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
    />
    </>
  );
};

export default HistoryList;
