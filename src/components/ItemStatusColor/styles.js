import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  redContainer:{
    width: 20,
    height: 20,
    backgroundColor: "red",
    padding: 5,
    margin: 5,
  },
  greenContainer:{
    width: 20,
    height: 20,
    backgroundColor: "green",
    padding: 5,
    margin: 5,
  },
  titleContainer: {
    position: "absolute",
    bottom: 0,
    left: 70,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: 10,
    bottom: 0,
  },
  title:{
    fontSize: 15,
    padding: 5,
    fontFamily: "Poppins-Regular",
    justifyContent: "center",
    alignItems: "center",
  },
  text:{
    fontFamily: "Poppins-Regular",
  }
  });