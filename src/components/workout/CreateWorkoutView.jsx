import React, {useState} from 'react'
import {Stack} from 'expo-router/stack'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Pressable, Text, TextInput, View} from 'react-native'
import styles from './create.workout.style'
import {router, useLocalSearchParams} from 'expo-router'
import {SelectExercise} from '@util/routes'

export default function CreateWorkoutView({i18n}) {
  const params = useLocalSearchParams()

  const [workoutName, setWorkoutName] = useState('')
  return <>
    <Stack.Screen options={{headerShown: false}}/>
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{i18n.t('createWorkout')}</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder={'Workout name'}
        value={workoutName}
        onChangeText={setWorkoutName}
      />
      <Pressable
        style={({pressed}) => styles.addExerciseButton(pressed)}
        onPress={() => router.navigate(SelectExercise)}
      >
        <Text style={styles.addExerciseButtonText}>{i18n.t("addExercise")}</Text>
      </Pressable>
    </SafeAreaView>
  </>
}