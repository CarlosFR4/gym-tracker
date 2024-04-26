import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#000'
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const ErrorView = () => (
  <View style={styles.container}>
    <View style={styles.view}>
      <Text style={styles.text}>Profile</Text>
    </View>
  </View>
)

export default ErrorView