import React from 'react'
import {Text, Pressable, FlatList, Image, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Stack} from 'expo-router'
import styles from './exercises.style'
import defaultExerciseImage from '@assets/images/exercise-person.png'

/**
 * A React component that displays a list of exercises.
 *
 * @component
 * @param {Object} props - The properties for the ExercisesView component.
 * @param {function} props.useGetAllExercises - A hook function that retrieves all exercises.
 * @param {Element} props.LoadingView - A React component to be displayed while the exercises are loading.
 * @param {Element} props.ErrorView - A React component to be displayed if there is an error while loading the exercises.
 * @param {function} props.exerciseSchemaToExerciseItem - A function that transforms an exercise schema object into an exercise item.
 * @returns {Element} A React component that displays a list of exercises.
 */
export default function ExercisesView({useGetAllExercises, LoadingView, ErrorView, exerciseSchemaToExerciseItem}) {
  const {exercises, loading, error} = useGetAllExercises()

  return <>
    <Stack.Screen
      options={{
        title: 'Exercises'
      }}
    />
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Screen data={exercises} loading={loading} error={error} LoadingView={LoadingView} ErrorView={ErrorView}
                exerciseSchemaToExerciseItem={exerciseSchemaToExerciseItem}/>
      </View>
    </SafeAreaView>
  </>
}

/**
 * @typedef ExercisesViewProps
 * @property {Object} exercise - The exercise to be displayed.
 * @property {string} exercise.image - The URL of the image for the exercise. If not provided, a default image is used.
 * @property {string} exercise.name - The name of the exercise.
 * @property {string} exercise.bodyPart - The body part that the exercise targets.
 */

/**
 * @component
 * @name ExerciseCard
 * @param {ExercisesViewProps} props - The properties for the ExerciseItem component.
 * @returns {Element} A React component representing a single exercise.
 */
const ExerciseCard = ({exercise}) => {
  console.log(exercise)
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
 * @typedef ScreenProps
 * @property {ExerciseSchema[]} data
 * @property {Boolean} loading
 * @property {Error|null} error
 * @property {Element} LoadingView
 * @property {Element} ErrorView
 * @property {function} exerciseSchemaToExerciseItem
 */
/**
 * @component
 * @param {ScreenProps} props
 * @returns {Element}
 */
const Screen = ({data, loading, error, LoadingView, ErrorView, exerciseSchemaToExerciseItem}) => {
  if (loading && !data && !error) {
    return <LoadingView/>
  } else if (error) {
    return <ErrorView/>
  } else {
    return <FlatList data={data.map(exerciseSchemaToExerciseItem)}
                     renderItem={({item}) => <ExerciseCard exercise={item}/>}/>
  }
}