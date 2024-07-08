import React, {useState} from 'react'
import {Stack} from 'expo-router/stack'
import {SafeAreaView} from 'react-native-safe-area-context'
import styles from '@components/workout/create.workout.style'
import {Pressable, Text, Image, View, FlatList} from 'react-native'
import {useFocusEffect} from 'expo-router'
import defaultExerciseImage from '@assets/images/exercise-person.png'
import checkIconLight from '@assets/images/light/icons8-check-150.png'
import checkIconDark from '@assets/images/dark/icons8-check-150.png'
import AppThemes from '@theme/AppThemes'
import {FontAwesome5} from '@expo/vector-icons'
import Colors from '@theme/Colors'
import {CreateWorkout} from '@util/routes'
import {router} from 'expo-router'

export default function SelectExerciseView({
                                             i18n,
                                             useExercises,
                                             exerciseSchemaToExerciseItem,
                                             ErrorView,
                                             currentTheme
                                           }) {
  const {getExercises} = useExercises()
  const [exercises, setExercises] = useState([])
  const [error, setError] = useState(null)
  const [selectedExercises, setSelectedExercises] = useState([])

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
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{i18n.t('addExercise')}</Text>
      </View>
      <View style={styles.listWrapper}>
        <ExercisesList data={exercisesToDisplay}
                       error={error}
                       ErrorView={ErrorView}
                       setSelectedExercises={setSelectedExercises}
                       currentTheme={currentTheme}
        />
      </View>
      <Pressable
        style={({pressed}) =>
          [styles.confirmButton(pressed), ...(selectedExercises.length === 0 ? [styles.hidden] : [])]}
        onPress={() => router.navigate({
          pathname: CreateWorkout,
          params: {exercises: JSON.stringify(selectedExercises)}
        })}
      >
        <View style={styles.confirmButtonItem}>
          <FontAwesome5 name="check" size={24} color={Colors.White}/>
        </View>
      </Pressable>
    </SafeAreaView>
  </>
}

/**
 * @typedef ExercisesViewProps
 * @property {Object} exercise - The exercise to be displayed.
 * @property {string} exercise.image - The URL of the image for the exercise. If not provided, a default image is used.
 * @property {string} exercise.name - The name of the exercise.
 * @property {string} exercise.bodyPart - The body part that the exercise targets.
 * @property selectedExercises {Exercise[]} Array of selected exercises
 * @property setSelectedExercises {function} Function to set the selected exercises
 */
/**
 * @component
 * @name ExerciseCard
 * @param {ExercisesViewProps} props - The properties for the ExerciseItem component.
 * @returns {Element} A React component representing a single exercise.
 */
const ExerciseCard = ({exercise, setSelectedExercises, currentTheme}) => {
  const [isSelected, setIsSelected] = useState(false)

  const onPress = () => {
    const isSelectedNextValue = !isSelected
    setIsSelected(isSelectedNextValue)
    setSelectedExercises(prev => isSelectedNextValue ? [...prev, exercise] : prev.filter(e => e.id !== exercise.id))
  }

  const ExerciseIcon = () => {
    if (!isSelected) {
      return <Image
        style={styles.exerciseIcon}
        source={exercise.image ? {uri: exercise.image} : defaultExerciseImage}/>
    } else {
      return <Image
        style={styles.exerciseIcon}
        source={currentTheme === AppThemes.Dark ? checkIconDark : checkIconLight}/>
    }
  }

  return <Pressable
    style={({pressed}) => [styles.card(pressed), ...(isSelected ? [styles.cardSelected] : [])]}
    onPress={onPress}
  >
    <View style={[styles.exerciseIconContainer, styles.exerciseIconContainerSelected]}>
      <ExerciseIcon/>
    </View>
    <View style={styles.exerciseData}>
      <Text style={styles.exerciseName}>{exercise.name}</Text>
      <Text style={styles.exerciseBodyPart}>{exercise.bodyPart}</Text>
    </View>
  </Pressable>
}

/**
 * @typedef ExercisesListProps
 * @property {ExerciseSchema[]} data
 * @property {Error|null} error
 * @property {Element} ErrorView
 * @property {Exercise[]} selectedExercises
 * @property {function} setSelectedExercises
 */
/**
 * @component
 * @param {ExercisesListProps} props
 * @returns {Element}
 */
const ExercisesList = ({
                         data,
                         error,
                         ErrorView,
                         setSelectedExercises,
                         currentTheme
                       }) => {
  return error ? <ErrorView/> : <FlatList data={data}
                                          renderItem={({item}) => <ExerciseCard
                                            exercise={item}
                                            setSelectedExercises={setSelectedExercises}
                                            currentTheme={currentTheme}
                                          />}/>
}