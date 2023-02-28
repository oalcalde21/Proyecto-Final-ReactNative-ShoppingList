import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import React from "react";
import {styles} from './styles'

const ItemStatusColor = () => {
  return (
    <>
    <View style={styles.container}>
        <View style={styles.redContainer}/>
        <Text style={styles.text}>Pendiente</Text>
        <View style={styles.greenContainer}/>
        <Text style={styles.text}>Listo</Text>
    </View>
    <View style={styles.titleContainer}>
      <View >
        <Text style={styles.title}>Presionar para marcar como listo</Text>
      </View>
      <View>
        <Text style={styles.title}>Presionar 2 veces para eliminar</Text>
      </View>
    </View>
    </>
  );
};

export default ItemStatusColor;
