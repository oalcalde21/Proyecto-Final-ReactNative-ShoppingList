import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { ButtonDeletedItems, Footer, ItemList, ItemStatusColor, KeyboardAvoidingView, Modal, NewItemHeader } from "./src/components";
import { Poppins_Bold, Poppins_Regular, useFonts } from 'expo-font';
import React, { useCallback, useEffect, useState } from "react";

import AppNavigator from './src/navigation';
import DeletedItemsPage from './src/screens/DeletedItemsPage';
import Logo from "./src/components/Logo/Logo";
import StartPage from './src/screens/StartPage';

SplashScreen.preventAutoHideAsync();

export default function App() {
  
    // Fonts
    const [fontsLoaded] = useFonts({
      'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
      'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    });
  
    const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }, [fontsLoaded]);
    
     
    // Esta parte es para que no se vea el splash screen hasta que se carguen las fuentes
    // Va siempre al final y antes del return
    if (!fontsLoaded) {
      return null;
    }  
  
  return (
    <>
      <AppNavigator/>
    </>
  );
}
