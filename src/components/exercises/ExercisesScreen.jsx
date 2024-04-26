import React from 'react'
import {Text, SafeAreaView, Pressable, FlatList, Image, View} from 'react-native'
import {Stack} from 'expo-router'
import styles from './exercises.style'
import defaultExerciseImage from '@assets/images/exercise-person.png'
import useGetAllExercises from '@hooks/useGetAllExercises'
import Exercise from '@exercises/Exercise'
import LoadingView from '@components/common/LoadingView'
import ErrorView from '@components/common/ErrorView'
import {exerciseForList} from '@exercises/mappers'

/**
 * @typedef Props
 * @property {Object} exercise - The exercise to be displayed.
 * @property {string} exercise.image - The URL of the image for the exercise. If not provided, a default image is used.
 * @property {string} exercise.name - The name of the exercise.
 * @property {string} exercise.bodyPart - The body part that the exercise targets.
 */

/**
 * @function
 * @name ExerciseCard
 * @param {Props} props - The properties for the ExerciseItem component.
 * @returns {Element} A React component representing a single exercise.
 */
const ExerciseCard = ({exercise}) => {
  return <Pressable style={styles.card}>
    <View style={styles.exerciseIconContainer}>
      <Image
        style={styles.exerciseIcon}
        resizeMode="contain"
        source={
          exercise.image ? {uri: exercise.image} : defaultExerciseImage
        }/>
    </View>
    <View style={styles.exerciseData}>
      <Text>{exercise.name}</Text>
      <Text>{exercise.bodyPart}</Text>
    </View>
  </Pressable>
}

/**
 * @function
 * @param {ExerciseTable[]} data
 * @param loading
 * @param error
 * @returns {Element}
 */
const Screen = (data, loading, error) => {
  if (loading && !data && !error) {
    return <LoadingView/>
  } else if (error) {
    return <ErrorView/>
  } else {
    const exercises = data.concat({
      id: 1,
      name: 'Test Exercise',
      image: 'https://via.placeholder.com/150',
      bodyPart: 8,
    }).map(exerciseForList)
    return <FlatList data={exercises} renderItem={({item}) => <ExerciseCard exercise={item}/>}/>
  }
}

export default function ExercisesScreen() {
  const {exercises, loading, error} = useGetAllExercises()

  return <>
    <Stack.Screen
      options={{
        title: 'Exercises'
      }}
    />
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        {Screen(exercises, loading, error)}
      </View>
    </SafeAreaView>
  </>
}