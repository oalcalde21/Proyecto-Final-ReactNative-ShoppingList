import { Pressable, StyleSheet, Text } from "react-native";

import React from "react";
import {styles} from './styles'
import { useState } from "react";

const PurchasedItem = ({ itemData }) => {
  
  return (
    <>
    <Pressable style={[styles.itemContainerGreen]}>
      <Text style={styles.item}>{itemData.item.name}</Text>
    </Pressable>
    </>
  );
};

export default PurchasedItem;
