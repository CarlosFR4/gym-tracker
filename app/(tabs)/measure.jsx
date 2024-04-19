import React from 'react'
import {Text, SafeAreaView, View} from 'react-native'
import {Stack} from 'expo-router'

export default function Measure() {
  return <SafeAreaView>
    <Stack.Screen
      options={{
        headerShown: false
      }}
    />
    <View>
      <Text>Measure</Text>
    </View>
  </SafeAreaView>
}