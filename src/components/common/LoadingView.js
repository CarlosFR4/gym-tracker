import React from 'react'
import {ActivityIndicator, View, StyleSheet} from 'react-native'
import {FlexAlign, JustifyContent} from '@util/constants'
import {Theme} from '@di/app.module'

const IndicatorSize = 'large'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: JustifyContent.Center,
    alignItems: FlexAlign.Center,
  },
  spinner: {
    margin: 50,
  },
})

const LoadingView = () => (
  <View style={styles.container}>
    <ActivityIndicator style={styles.spinner} size={IndicatorSize} color={Theme.Primary}/>
  </View>
)

export default LoadingView