import DeletedItemsPage from '../screens/DeletedItemsPage';
import React from "react";
import StartPage  from "../screens/StartPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

 const DeletedItemsNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={StartPage}>
        <Stack.Screen name="DeletedItems" component={DeletedItemsPage} />
    </Stack.Navigator>
  );
};

export default DeletedItemsNavigation;