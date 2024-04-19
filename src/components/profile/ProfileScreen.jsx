import React from 'react'
import {Text, SafeAreaView, View} from 'react-native'
import {Stack} from 'expo-router'
import styles from 'src/components/profile/profile.style'

export default function ProfileScreen() {
  return <>
    <Stack.Screen
      options={{
        headerShown: false
      }}
    />
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>Profile</Text>
      </View>
    </SafeAreaView>
  </>
}