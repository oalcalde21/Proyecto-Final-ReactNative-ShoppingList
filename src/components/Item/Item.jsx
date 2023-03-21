import { Pressable, StyleSheet, Text } from "react-native";

import React from "react";
import {styles} from './styles'
import { useState } from "react";

const Item = ({ itemData, openModal }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    if (isPressed) {
      openModal(itemData.item);
    }
  };
  
  return (
    <>
    <Pressable style={[styles.itemContainer, isPressed && styles.itemContainerGreen]} onPress={handlePress}>
      <Text style={styles.item}>{itemData.item.name}</Text>
    </Pressable>
    </>
  );
};

export default Item;
