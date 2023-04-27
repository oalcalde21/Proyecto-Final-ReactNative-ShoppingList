import { Image, Pressable, StyleSheet, Text } from "react-native";

import React from "react";
import {styles} from './styles'
import { useState } from "react";

const HistoryItem = ({ itemData, openModal }) => {
  console.log(itemData.item.image);
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    console.log("handlePress");
    console.log(itemData);
    setIsPressed(true);
    if (isPressed) {
      openModal(itemData);
    }
  };
  
  return (
    <>
    <Pressable style={[styles.itemContainerGreen]} onPress={handlePress}>
      <Image style={styles.image} source={{uri: itemData.item.image}} />
      <Text style={styles.item}>{itemData.item.id}</Text>
    </Pressable>
    </>
  );
};

export default HistoryItem;
