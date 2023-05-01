import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import React from "react";
import {styles} from './styles'

const ItemStatusColor = () => {
  return (
    <>
    <View style={styles.container}>
        <View style={styles.redContainer}/>
        <Text style={styles.text}>Pending</Text>
        <View style={styles.greenContainer}/>
        <Text style={styles.text}>Ready</Text>
    </View>
    <View style={styles.container}>
        <Text style={styles.text}>1 clic to mark as ready</Text>
    </View>
    <View style={styles.container}>
        <Text style={styles.text}>2 clics to move it to purchased items</Text>
    </View>
    </>
  );
};

export default ItemStatusColor;
