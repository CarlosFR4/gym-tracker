import React, {useState} from 'react'
import {Stack} from 'expo-router/stack'
import {SafeAreaView} from 'react-native-safe-area-context'
import styles from '@components/workout/create.workout.style'
import {Text, View} from 'react-native'
import {router, useFocusEffect} from 'expo-router'
import {CreateWorkout} from '@util/routes'

export default function SelectExerciseView({i18n, useExercises, ExercisesList, exerciseSchemaToExerciseItem}){
  const {getExercises} = useExercises()
  const [exercises, setExercises] = useState([])
  const [error, setError] = useState(null)

  const exercisesToDisplay = exercises.map(exerciseSchemaToExerciseItem)

  useFocusEffect(() => {
    (async () => {
      try {
        const data = await getExercises()
        setExercises(data)
      } catch (error) {
        setError(error)
      }
    })()
  })

  return <>
    <Stack.Screen options={{headerShown: false}}/>
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerText}>{i18n.t('createWorkout')}</Text>
      </View>
      <View style={styles.view}>
        <ExercisesList data={exercisesToDisplay}
                       error={error}
                       onItemPress={exercise => {router.navigate({pathname: CreateWorkout, params: {exerciseId: exercise.id}})
                         console.log(exercise)
                       }}/>
      </View>
    </SafeAreaView>
  </>
}

