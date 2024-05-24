import React, {useState} from 'react'
import {Text, Pressable, FlatList, Image, View, TextInput} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {router, Stack, useFocusEffect} from 'expo-router'
import styles from './exercises.style'
import defaultExerciseImage from '@assets/images/exercise-person.png'
import {Theme} from '@di/app.module'
import {FontAwesome, FontAwesome6, EvilIcons} from '@expo/vector-icons'
import {EmptyString} from 'src/util/constants'
import {createExercise} from 'src/util/routes'

/**
 * A React component that displays a list of exercises.
 *
 * @component
 * @param {Object} props - The properties for the ExercisesView component.
 * @param {Object} props.i18n - The internationalization object.
 * @param {function} props.useExercises - The hook for getting exercises.
 * @param {Element} props.ErrorView - A React component to be displayed if there is an error while loading the exercises.
 * @param {function} props.exerciseSchemaToExerciseItem - A function that transforms an exercise schema object into an exercise item.
 * @returns {Element} A React component that displays a list of exercises.
 *
 * @returns {Element} A React component that displays a list of exercises.
 */
export default function ExercisesView({i18n, useExercises, ErrorView, exerciseSchemaToExerciseItem}) {
  const [exercises, setExercises] = useState([])
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState(EmptyString)
  const {getExercises} = useExercises()

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

  const exercisesToDisplay = exercises.map(exerciseSchemaToExerciseItem)

  const filteredExercises = searchTerm === EmptyString ? exercisesToDisplay :
    exercisesToDisplay.filter(exercise =>
      exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exercise.bodyPart.toLowerCase().includes(searchTerm.toLowerCase())
    )

  return <>
    <Stack.Screen options={{headerShown: false}}/>
    <SafeAreaView style={styles.screen}>
      <Header i18n={i18n} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <View style={styles.view}>
        <ExercisesList data={filteredExercises}
                       error={error}
                       ErrorView={ErrorView}/>
      </View>
    </SafeAreaView>
  </>
}

const Header = ({i18n, searchTerm, setSearchTerm}) => <View style={styles.header}>
  <View style={styles.headerButtons}>
    <View style={styles.searchBar}>
      <FontAwesome style={styles.searchIcon} name="search" size={24} color={Theme.onPrimary}/>
      <TextInput style={styles.searchInput}
                 value={searchTerm}
                 placeholderTextColor={Theme.onSecondary}
                 placeholder={i18n.t('exercise')}
                 onChangeText={text => setSearchTerm(text)}/>
      {searchTerm !== EmptyString && (
        <Pressable onPress={() => setSearchTerm(EmptyString)}>
          <EvilIcons style={styles.clearSearchIcon} name="close" size={24} color={Theme.onPrimary}/>
        </Pressable>
      )}
    </View>
    <Pressable style={({pressed}) => styles.headerButton(pressed)}>
      <FontAwesome name="filter" size={24} color={Theme.onPrimary}/>
    </Pressable>
    <Pressable style={({pressed}) => styles.headerButton(pressed)}  onPress={() => router.push(createExercise)}>
      <FontAwesome6 name="add" size={24} color={Theme.onPrimary}/>
    </Pressable>
  </View>
</View>

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
  return <Pressable style={({pressed}) => styles.card(pressed)}>
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

/**
 * @typedef ExercisesListProps
 * @property {ExerciseSchema[]} data
 * @property {Boolean} loading
 * @property {Error|null} error
 * @property {Element} LoadingView
 * @property {Element} ErrorView
 * @property {function} exerciseSchemaToExerciseItem
 */
/**
 * @component
 * @param {ExercisesListProps} props
 * @returns {Element}
 */
const ExercisesList = ({data, error, ErrorView}) => {
  if (error) {
    return <ErrorView/>
  } else {
    return <FlatList data={data} renderItem={({item}) => <ExerciseCard exercise={item}/>}/>
  }
}