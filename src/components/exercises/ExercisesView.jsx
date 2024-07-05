import React, {useState} from 'react'
import {Pressable, View, TextInput} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {router, Stack, useFocusEffect} from 'expo-router'
import styles from './exercises.style'
import {Theme} from '@di/app.module'
import {FontAwesome, EvilIcons} from '@expo/vector-icons'
import {EmptyString} from 'src/util/constants'
import {CreateExercise} from 'src/util/routes'

/**
 * A React component that displays a list of exercises.
 *
 * @component
 * @param {Object} props - The properties for the ExercisesView component.
 * @param {Object} props.i18n - The internationalization object.
 * @param {function} props.useExercises - The hook for getting exercises.
 * @param {Element} props.ExercisesList - A React component that displays a list of exercises.
 * @param {function} props.exerciseSchemaToExerciseItem - A function that transforms an exercise schema object into an exercise item.
 * @returns {Element} A React component that displays a list of exercises.
 *
 * @returns {Element} A React component that displays a list of exercises.
 */
export default function ExercisesView({i18n, useExercises, ExercisesList, exerciseSchemaToExerciseItem}) {
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
                       onItemPress={exercise => console.log(exercise)}/>
      </View>
    </SafeAreaView>
  </>
}

const Header = ({i18n, searchTerm, setSearchTerm}) => <View style={styles.header}>
  <View style={styles.headerContainer}>
    <View style={styles.searchBar}>
      <FontAwesome style={styles.searchIcon} name="search" size={24} color={Theme.OnPrimary}/>
      <TextInput style={styles.searchInput}
                 value={searchTerm}
                 placeholderTextColor={Theme.OnSecondary}
                 placeholder={i18n.t('exercise')}
                 onChangeText={text => setSearchTerm(text)}/>
      {searchTerm !== EmptyString && (
        <Pressable onPress={() => setSearchTerm(EmptyString)}>
          <EvilIcons style={styles.clearSearchIcon} name="close" size={24} color={Theme.OnPrimary}/>
        </Pressable>
      )}
    </View>
    <Pressable style={({pressed}) => styles.headerButton(pressed)}>
      <FontAwesome name="filter" size={24} color={Theme.OnPrimary}/>
    </Pressable>
    <Pressable style={({pressed}) => styles.headerButton(pressed)}  onPress={() => router.push(CreateExercise)}>
      <FontAwesome name="plus" size={24} color={Theme.OnPrimary}/>
    </Pressable>
  </View>
</View>