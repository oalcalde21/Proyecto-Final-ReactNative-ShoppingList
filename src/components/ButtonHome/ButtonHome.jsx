import { Pressable, StyleSheet, Text } from "react-native";

import React from "react";
import {styles} from './styles'

const ButtonHome = ({handleDeletedScreen, deletedScreen}) => {
  return (
    <>
    <Pressable style={[styles.button]} onPress={handleDeletedScreen}>
    {/* <Pressable style={[styles.button]} onPress={() => navigation.navigate('Home')}> */}
      <Text style={[styles.text]}>Home</Text>
    </Pressable>
    </>
  );
};

export default ButtonHome;
