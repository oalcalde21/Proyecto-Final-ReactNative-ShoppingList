import * as Font from 'expo-font';

import { ActivityIndicator } from 'react-native';
import AppNavigator from './src/navigation';
import React from "react";
import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';


// SplashScreen.preventAutoHideAsync();

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
      <AppNavigator/>
    </>
  );
}

