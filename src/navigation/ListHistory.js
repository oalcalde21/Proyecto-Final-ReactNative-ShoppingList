import DeletedItemsPage from '../screens/PurchasedItemsPage';
import ListHistory from '../screens/ListHistory';
import React from "react";
import StartPage  from "../screens/StartPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

 const ListHistoryNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={ListHistory}>
        <Stack.Screen name="List History" component={ListHistory} />
    </Stack.Navigator>
  );
};

export default ListHistoryNavigation;