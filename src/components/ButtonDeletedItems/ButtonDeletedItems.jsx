import { Pressable, StyleSheet, Text } from "react-native";

import React from "react";
import {styles} from './styles'

const ButtonDeletedItems = ({handleDeletedScreen, deletedScreen}) => {
  console.log(deletedScreen);
  return (
    <>
    <Pressable style={[styles.button]} onPress={handleDeletedScreen}>
    {/* <Pressable style={[styles.button]} onPress={() => navigation.navigate('DeletedItems')}> */}
      <Text style={[styles.text]}>Ver Elementos Eliminados</Text>
    </Pressable>
    </>
  );
};

export default ButtonDeletedItems;
