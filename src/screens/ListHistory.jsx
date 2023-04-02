import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

const ListHistory = () => {
  return (
    <View style={[styles.home]}>
      <Text>ListHistory</Text>
    </View>
  )
}

export default ListHistory

const styles = StyleSheet.create({
  home: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
})
