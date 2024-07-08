import React from 'react'
import {CurrentTheme, i18n, useExercises} from '@di/app.module'
import ExercisesView from '@components/exercises/ExercisesView'
import CreateExerciseView from '@components/exercises/CreateExerciseView'
import ErrorView from '@components/common/ErrorView'
import exerciseSchemaToExerciseItemMapper from '@mappers/exerciseSchemaToExerciseItem'
import SelectModal from '@components/common/SelectModal'
import SnackBar from '@components/common/SnackBar'
import WorkoutMenuView from '@components/workout/WorkoutMenuView'
import SelectExerciseView from '@components/workout/SelectExerciseView'
import CreateWorkoutView from '@components/workout/CreateWorkoutView'

const exerciseSchemaToExerciseItem = (data) => exerciseSchemaToExerciseItemMapper(data, i18n)

const ExercisesScreen = () => <ExercisesView
  i18n={i18n}
  useExercises={useExercises}
  ErrorView={ErrorView}
  exerciseSchemaToExerciseItem={exerciseSchemaToExerciseItem}
/>

const CreateExerciseScreen = () => <CreateExerciseView
  i18n={i18n}
  useExercises={useExercises}
/>

const WorkoutMenuScreen = () => <WorkoutMenuView
  i18n={i18n}
/>

const CreateWorkoutScreen = () => <CreateWorkoutView
  i18n={i18n}
/>

const SelectExerciseScreen = () => <SelectExerciseView
  i18n={i18n}
  useExercises={useExercises}
  exerciseSchemaToExerciseItem={exerciseSchemaToExerciseItem}
  errorView={ErrorView}
  currentTheme={CurrentTheme}
/>

export {
  SnackBar,
  SelectModal,
  CreateExerciseScreen,
  ExercisesScreen,
  WorkoutMenuScreen,
  CreateWorkoutScreen,
  SelectExerciseScreen,
}