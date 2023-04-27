import { Pressable, StyleSheet, Text } from "react-native";

import React from "react";
import {styles} from './styles'
import { useState } from "react";

const HistoryItem = ({ itemData, openModal }) => {

  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    if (isPressed) {
      openModal(itemData);
    }
  };
  
  return (
    <>
    <Pressable style={[styles.itemContainerGreen]} onPress={handlePress}>
      <Text style={styles.item}>{itemData.item.id}</Text>
    </Pressable>
    </>
  );
};

export default HistoryItem;
