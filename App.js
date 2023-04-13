import * as Font from 'expo-font';

import {store, storePersisted} from './src/store'

import { ActivityIndicator } from 'react-native';
import AppNavigator from './src/navigation';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import React from "react";
import { init } from './src/db';
import { useFonts } from 'expo-font';

init().then(
  () => {
    console.log('Initialized database');
  }
).catch(err => {
    console.log('Initializing db failed.');
    console.log(err);
  }
)

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
      {/* <Provider store={store}><AppNavigator/></Provider> */}
      <Provider store={store}>
        <PersistGate loading={null} persistor={storePersisted}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    </>
  );
}

