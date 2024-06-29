import React, {useState} from 'react'
import {Stack} from 'expo-router/stack'
import {ExercisesProvider, setup} from '@di/app.module'
import ErrorView from '@components/common/ErrorView'

export default function RootLayout() {
  const [error, setError] = useState(false)
  setup()
    .then(() => console.log('App setup complete'))
    .catch(err => {
      setError(true)
      console.error(err)
    })

  if (error) {
    return ErrorView
  }

  return (
    <ExercisesProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
      </Stack>
    </ExercisesProvider>
  )
}