import { Pressable, StyleSheet, Text } from "react-native";

import React from "react";
import {styles} from './styles'
import { useState } from "react";

const HistoryItem = ({ itemData }) => {
  console.log(itemData.item.id)
  return (
    <>
    <Pressable style={[styles.itemContainerGreen]}>
      <Text style={styles.item}>{itemData.item.id}</Text>
    </Pressable>
    </>
  );
};

export default HistoryItem;
