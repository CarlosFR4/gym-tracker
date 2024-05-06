import React, {useState} from 'react'
import {Text, Pressable, FlatList, Image, View, TextInput} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {router, Stack} from 'expo-router'
import styles from './exercises.style'
import defaultExerciseImage from '@assets/images/exercise-person.png'
import {i18n, Theme} from '@di/app.module'
import {FontAwesome, FontAwesome6, EvilIcons} from '@expo/vector-icons'
import {EMPTY_STRING} from 'src/util/constants'
import {createExercise} from 'src/util/routes'

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
 * @returns {Element} A React component that displays a list of exercises.
 */
export default function ExercisesView({useGetAllExercises, LoadingView, ErrorView, exerciseSchemaToExerciseItem}) {
  const {exercises, loading, error} = useGetAllExercises()
  const [searchTerm, setSearchTerm] = useState(EMPTY_STRING)

  const testExercises = [
    {
      id: 1,
      name: 'Bench Press',
      bodyPart: 1,
      image: null,
      category: 1,
    },
    {
      id: 2,
      name: 'Squats',
      bodyPart: 2,
      image: null,
      category: 2,
    },
    {
      id: 3,
      name: 'Deadlift',
      bodyPart: 3,
      image: null,
      category: 3,
    },
    {
      id: 4,
      name: 'Pull Ups',
      bodyPart: 4,
      image: null,
      category: 4,
    },
    {
      id: 5,
      name: 'Shoulder Press',
      bodyPart: 5,
      image: null,
      category: 5,
    },
    {
      id: 1,
      name: 'Bench Press',
      bodyPart: 1,
      image: null,
      category: 1,
    },
    {
      id: 2,
      name: 'Squats',
      bodyPart: 2,
      image: null,
      category: 2,
    },
    {
      id: 3,
      name: 'Deadlift',
      bodyPart: 3,
      image: null,
      category: 3,
    },
    {
      id: 4,
      name: 'Pull Ups',
      bodyPart: 4,
      image: null,
      category: 4,
    },
    {
      id: 5,
      name: 'Shoulder Press',
      bodyPart: 5,
      image: null,
      category: 5,
    },
    {
      id: 1,
      name: 'Bench Press',
      bodyPart: 1,
      image: null,
      category: 1,
    },
    {
      id: 2,
      name: 'Squats',
      bodyPart: 2,
      image: null,
      category: 2,
    },
    {
      id: 3,
      name: 'Deadlift',
      bodyPart: 3,
      image: null,
      category: 3,
    },
    {
      id: 4,
      name: 'Pull Ups',
      bodyPart: 4,
      image: null,
      category: 4,
    },
    {
      id: 5,
      name: 'Shoulder Press',
      bodyPart: 5,
      image: null,
      category: 5,
    },
  ].map(exerciseSchemaToExerciseItem)

  const filteredExercises = searchTerm === EMPTY_STRING ? testExercises :
    testExercises.filter(exercise =>
      exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exercise.bodyPart.toLowerCase().includes(searchTerm.toLowerCase())
    )

  return <>
    <Stack.Screen options={{headerShown: false}}/>
    <SafeAreaView style={styles.container}>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <View style={styles.view}>
        <ExercisesList data={filteredExercises}
                       loading={loading}
                       error={error}
                       LoadingView={LoadingView}
                       ErrorView={ErrorView}/>
      </View>
    </SafeAreaView>
  </>
}

const Header = ({searchTerm, setSearchTerm}) => <View style={styles.header}>
  <View style={styles.headerButtons}>
    <View style={styles.searchBar}>
      <FontAwesome style={styles.searchIcon} name="search" size={24} color={Theme.onPrimary}/>
      <TextInput style={styles.searchInput}
                 value={searchTerm}
                 placeholderTextColor={Theme.onSecondary}
                 placeholder={i18n.t('exercise')}
                 onChangeText={text => setSearchTerm(text)}/>
      {searchTerm !== EMPTY_STRING && (
        <Pressable onPress={() => setSearchTerm(EMPTY_STRING)}>
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
const ExercisesList = ({data, loading, error, LoadingView, ErrorView}) => {
  if (loading && !data && !error) {
    return <LoadingView/>
  } else if (error) {
    return <ErrorView/>
  } else {
    return <FlatList data={data} renderItem={({item}) => <ExerciseCard exercise={item}/>}/>
  }
}