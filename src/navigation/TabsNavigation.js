import { StyleSheet, Text, View } from 'react-native'

import { AntDesign } from '@expo/vector-icons';
import DeletedItemsNavigation from './PurchasedItemsNavigation';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import HomeNavigation from './HomeNavigation';
import { Ionicons } from '@expo/vector-icons';
import ListHistoryNavigation from './ListHistory';
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const BottomTabs = createBottomTabNavigator()

const TabsNavigaton = () => {
  return (
    <BottomTabs.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: styles.tabBar}}>
      <BottomTabs.Screen name="Home-tab" component={HomeNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <AntDesign name="home" size={24} style={{ color: focused ? '#008000' : '#748C94' }} />
              <Text style={{ color: focused ? '#008000' : '#748C94' }}>Home</Text>
            </View>
          )
        }}

      />
      <BottomTabs.Screen name="PurchasedItems-tab" component={DeletedItemsNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <FontAwesome5 name="clipboard-list" size={24} color={focused ? '#008000' : '#748C94'} />
              <Text style={{ color: focused ? '#008000' : '#748C94' }}>Purchased Items</Text>
            </View>
          )
        }}
      />
      <BottomTabs.Screen name="ListHistory-tab" component={ListHistoryNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <FontAwesome5 name="history" size={24} color={focused ? '#008000' : '#748C94'} />
              <Text style={{ color: focused ? '#008000' : '#748C94' }}>List History</Text>
            </View>
          )
        }}
      />
    </BottomTabs.Navigator>    
  )
}

export default TabsNavigaton

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5,
    position: 'absolute',
    width: '100%',
    right: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 70,
  },
  tabBarIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})