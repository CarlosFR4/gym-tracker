import React from 'react'
import {exercisesDao, i18n} from '@di/app.module'
import {useGetAllExercises as useGetAllExercisesHook} from '@hooks/useGetAllExercises'
import {useSaveExercise as useSaveExerciseHook} from '@hooks/useSaveExercise'
import ExercisesView from '@components/exercises/ExercisesView'
import CreateExerciseView from '@components/exercises/CreateExerciseView'
import LoadingView from '@components/common/LoadingView'
import ErrorView from '@components/common/ErrorView'
import exerciseSchemaToExerciseItemMapper from '@exercises/exerciseSchemaToExerciseItem'

const useGetAllExercises = () => useGetAllExercisesHook(exercisesDao)

const useSaveExercise = () => useSaveExerciseHook(exercisesDao)

const exerciseSchemaToExerciseItem = (data) => exerciseSchemaToExerciseItemMapper(data, i18n)

const ExercisesScreen = () => <ExercisesView
  useGetAllExercises={useGetAllExercises}
  LoadingView={LoadingView}
  ErrorView={ErrorView}
  exerciseSchemaToExerciseItem={exerciseSchemaToExerciseItem}
/>

const CreateExerciseScreen = () => <CreateExerciseView useSaveExercise={useSaveExercise}/>

export {
  CreateExerciseScreen,
  ExercisesScreen
}