import {Stack} from 'expo-router'
import {SafeAreaView, Text, View} from 'react-native'
import styles from '@components/profile/profile.style'
import React from 'react'

export default function CreateExercise() {
  return <>
    <Stack.Screen
      options={{
        headerShown: false
      }}
    />
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>Create Exercise</Text>
      </View>
    </SafeAreaView>
  </>
}