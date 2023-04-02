import { StyleSheet, Text, View } from 'react-native'

import LogInScreen from '../screens/LogInScreen';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const LogInNavigation = () => {
  return (
    <Stack.Navigator 
        initialRouteName='LogIn'
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="LogIn" component={LogInScreen} />
    </Stack.Navigator>
  )
}

export default LogInNavigation
