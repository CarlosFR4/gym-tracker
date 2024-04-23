import React from 'react'
import {Text, SafeAreaView, View, TextInput} from 'react-native'
import {Stack} from 'expo-router'
import styles from './exercises.style'
import {i18n} from '@di/app.module'

export default function ExercisesScreen() {
  console.log(i18n.defaultLocale)
  return <SafeAreaView style={styles.container}>
    <Stack.Screen
      options={{
        headerShown: false
      }}
    />
    <View style={styles.view}>
      <Text style={styles.text}>{i18n.t('exercises')}</Text>
      <TextInput style={styles.input} placeholder={i18n.translate("name")}/>
    </View>
  </SafeAreaView>
}