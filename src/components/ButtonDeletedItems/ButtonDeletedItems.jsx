import { Pressable, StyleSheet, Text } from "react-native";

import React from "react";
import {styles} from './styles'

const ButtonDeletedItems = (handleDeletedScreen) => {
  return (
    <>
    <Pressable style={[styles.button]} onPress={handleDeletedScreen}>
      <Text style={[styles.text]}>Ver Elementos Eliminados</Text>
    </Pressable>
    </>
  );
};

export default ButtonDeletedItems;
