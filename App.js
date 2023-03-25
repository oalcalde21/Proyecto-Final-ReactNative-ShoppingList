import * as Font from 'expo-font';

import { ActivityIndicator } from 'react-native';
import AppNavigator from './src/navigation';
import { Provider } from 'react-redux';
import React from "react";
import store from './src/store';
import { useFonts } from 'expo-font';

export default function App() {
  
    // Fonts
    const [fontsLoaded] = useFonts({
      "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
      "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    });
   
    if (!fontsLoaded) {
      return <ActivityIndicator/>;
    }  
  
  return (
    <>
      <Provider store={store}><AppNavigator/></Provider>
    </>
  );
}

