import DeletedItemsPage from '../screens/PurchasedItemsPage';
import ListHistoryScreen from '../screens/ListHistoryScreen';
import React from "react";
import StartPage  from "../screens/StartPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

 const ListHistoryNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={ListHistoryScreen} 
      screenOptions={{
        headerStyle: { backgroundColor: '#21B568' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        }
      }
    >
        <Stack.Screen name="List History" component={ListHistoryScreen} />
    </Stack.Navigator>
  );
};

export default ListHistoryNavigation;