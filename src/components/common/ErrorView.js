import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {FlexAlign, JustifyContent} from '@util/constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: FlexAlign.Center,
    justifyContent: JustifyContent.Center,
  },
  text: {
    fontSize: 20,
    color: '#000'
  },
  view: {
    flex: 1,
    alignItems: FlexAlign.Center,
    justifyContent: JustifyContent.Center,
  },
})

const ErrorView = () =>
  <View style={styles.container}>
    <View style={styles.view}>
      <Text style={styles.text}>Profile</Text>
    </View>
  </View>


export default ErrorView