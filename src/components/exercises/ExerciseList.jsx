import React from 'react'
import {FlatList} from 'react-native'

/**
 * @typedef ExercisesListProps
 * @property {ExerciseSchema[]} data
 * @property {Boolean} loading
 * @property {Error|null} error
 * @property {Element} LoadingView
 * @property {Element} ErrorView
 * @property {Element} ExerciseCard
 * @property {function} exerciseSchemaToExerciseItem
 */
/**
 * @component
 * @param {ExercisesListProps} props
 * @returns {Element}
 */
export default function ExercisesList({data, error, onItemPress, ErrorView, ExerciseCard}){
  if (error) {
    return <ErrorView/>
  } else {
    return <FlatList data={data} renderItem={({item}) => <ExerciseCard exercise={item} onPress={onItemPress}/>}/>
  }
}