import { StyleSheet } from "react-native";
import expoAppLoading from 'expo-app-loading';

export const styles = StyleSheet.create({
    itemContainer: {
        margin: 5,
        padding: 0,
        borderRadius: 5,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "red",
        width: 250,
        flexDirection: 'row',
      },
      itemContainerGreen: {
        margin: 5,
        padding: 5,
        borderRadius: 5,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "green",
        minWidth: 200,
        flexDirection: 'row',
      },
      item: {
        padding: 10,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
      },
      image:{
        width: 70,
        height: 70,
        borderRadius: 35
      },
  });