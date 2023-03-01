import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useMemo, useState } from "react";

import React from "react";
import {styles} from './styles'

const NewItemHeader = ({onChangeText, itemText, addItemToState, inputPlaceHolder, onPressIn, OnPressOut, isPressed}) => {  
  
  const isButtonDisabled = useMemo(() => {
    return itemText.trim().length === 0;
  }, [itemText]);

  const handleAddItem = () => {
    if (itemText.trim() !== '') {
      addItemToState();
    }
  };

  return (
    <>
    <View style={styles.addItemInputContainer}>
      <TextInput placeholder="Ingrese un item" style={styles.input} onChangeText={onChangeText} value={itemText} blurOnSubmit={false} returnKeyType="done" onSubmitEditing={handleAddItem}/>
      <TouchableOpacity style={[styles.button, isPressed && styles.buttonPressed, isButtonDisabled && styles.buttonDisabled]} onPress={addItemToState} onPressIn={onPressIn} onPressOut={OnPressOut} disabled={isButtonDisabled}>
          <Text style={styles.text}>Agregar</Text>
        </TouchableOpacity>
    </View>
    </>
  );
};

export default NewItemHeader;
