import React from 'react'
import {exercisesDao, i18n} from '@di/app.module'
import {useGetAllExercises as useGetAllExercisesHook} from '@hooks/useGetAllExercises'
import ExercisesView from '@components/exercises/ExercisesView'
import LoadingView from '@components/common/LoadingView'
import ErrorView from '@components/common/ErrorView'
import exerciseSchemaToExerciseItemMapper from '@exercises/exerciseSchemaToExerciseItem'

const useGetAllExercises = () => useGetAllExercisesHook(exercisesDao)

const exerciseSchemaToExerciseItem = (data) => exerciseSchemaToExerciseItemMapper(data, i18n)

const ExercisesScreen = () => <ExercisesView
  useGetAllExercises={useGetAllExercises}
  LoadingView={LoadingView}
  ErrorView={ErrorView}
  exerciseSchemaToExerciseItem={exerciseSchemaToExerciseItem}
/>

export {
  ExercisesScreen,
  i18n,
}