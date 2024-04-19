import React from 'react'
import {Text, SafeAreaView, View, TextInput} from 'react-native'
import {Stack} from 'expo-router'
import styles from './history.style'

export default function HistoryScreen() {
  return <SafeAreaView style={styles.container}>
    <Stack.Screen
      options={{
        headerShown: false
      }}
    />
    <View style={styles.view}>
      <Text style={styles.text}>Profile</Text>
      <TextInput style={styles.input} placeholder="Name"/>
    </View>
  </SafeAreaView>
}