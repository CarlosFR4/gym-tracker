import React from 'react'
import {Stack} from 'expo-router/stack'
import {ExercisesProvider} from '@di/app.module'

export default function RootLayout() {
  return (
    <ExercisesProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
      </Stack>
    </ExercisesProvider>
  )
}