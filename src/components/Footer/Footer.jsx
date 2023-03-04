import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import React from "react";
import {styles} from './styles'

const Footer = () => {
  return (
    <>
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View >
            <Text style={styles.title}>Presionar para marcar como listo</Text>
          </View>
          <View>
            <Text style={styles.title}>Presionar 2 veces para eliminar</Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
    </>
  );
};

export default Footer;
