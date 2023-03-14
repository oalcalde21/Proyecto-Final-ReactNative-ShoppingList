import DeletedItemsPage from '../screens/DeletedItemsPage';
import React from "react";
import StartPage  from "../screens/StartPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

 const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={StartPage}>
        <Stack.Screen name="Home" component={StartPage} />
        <Stack.Screen name="DeletedItems" component={DeletedItemsPage} />
    </Stack.Navigator>
  );
};

export default HomeStack;