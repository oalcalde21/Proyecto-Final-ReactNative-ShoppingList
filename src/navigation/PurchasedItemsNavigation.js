import DeletedItemsPage from '../screens/PurchasedItemsPage';
import React from "react";
import StartPage  from "../screens/StartPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

 const DeletedItemsNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={StartPage}
    screenOptions={{
      headerStyle: { backgroundColor: '#21B568' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
      }
    }
    >
        <Stack.Screen name="Deleted Items" component={DeletedItemsPage} />
    </Stack.Navigator>
  );
};

export default DeletedItemsNavigation;