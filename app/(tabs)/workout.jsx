import React from 'react'
import {Text, SafeAreaView, View} from 'react-native'
import {Stack} from 'expo-router'

export default function Workout() {
  return <SafeAreaView>
    <Stack.Screen
      options={{
        headerShown: false
      }}
    />
    <View>
      <Text>Workout</Text>
    </View>
  </SafeAreaView>
}
