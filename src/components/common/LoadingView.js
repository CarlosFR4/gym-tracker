import React from 'react'
import {ActivityIndicator, View, StyleSheet} from 'react-native'

const INDICATOR_SIZE = 'large'
const INDICATOR_COLOR = '#0077b6'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    margin: 50,
  },
})

const LoadingView = () => (
  <View style={styles.container}>
    <ActivityIndicator style={styles.spinner} size={INDICATOR_SIZE} color={INDICATOR_COLOR}/>
  </View>
)

export default LoadingView