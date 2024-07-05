import React from 'react'
import {FlexAlign, FlexDirection, Percentage100, ResizeMode} from '@util/constants'
import {GapSizes} from '@theme/Sizes'
import {Theme} from '@di/app.module'
import {Pressable, View, Image, Text, StyleSheet} from 'react-native'
import defaultExerciseImage from '@assets/images/exercise-person.png'
import FontWeight from '@theme/FontWeight'

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
export default function ExerciseCard({exercise, onPress}) {
  return <Pressable
    style={({pressed}) => styles.card(pressed)}
    onPress={() => onPress(exercise)}
  >
    <View style={styles.exerciseIconContainer}>
      <Image
        style={styles.exerciseIcon}
        source={
          exercise.image ? {uri: exercise.image} : defaultExerciseImage
        }/>
    </View>
    <View style={styles.exerciseData}>
      <Text style={styles.exerciseName}>{exercise.name}</Text>
      <Text style={styles.exerciseBodyPart}>{exercise.bodyPart}</Text>
    </View>
  </Pressable>
}

const styles = StyleSheet.create({
  card: (pressed) => ({
    flexDirection: FlexDirection.Row,
    alignSelf: FlexAlign.FlexStart,
    width: Percentage100,
    padding: GapSizes.Medium,
    backgroundColor: pressed ? Theme.Surface : Theme.Background,
  }),
  exerciseIconContainer: {
    width: 70,
    height: 70,
    padding: GapSizes.Medium,
  },
  exerciseIcon: {
    width: Percentage100,
    height: Percentage100,
    resizeMode: ResizeMode.Contain,
    borderRadius: GapSizes.Medium,
  },
  exerciseData: {
    padding: GapSizes.Large,
  },
  exerciseName: {
    fontSize: GapSizes.Huge,
    color: Theme.OnPrimary,
    fontWeight: FontWeight.w500,
    paddingBottom: GapSizes.Small,
  },
  exerciseBodyPart: {
    fontSize: GapSizes.ExtraLarge,
    fontWeight: FontWeight.w400,
    color: Theme.OnSecondary,
  },
})