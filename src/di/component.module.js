import React from 'react'
import {i18n, useExercises} from '@di/app.module'
import ExercisesView from '@components/exercises/ExercisesView'
import CreateExerciseView from '@components/exercises/CreateExerciseView'
import ErrorView from '@components/common/ErrorView'
import exerciseSchemaToExerciseItemMapper from '@mappers/exerciseSchemaToExerciseItem'
import SelectModal from '@components/common/SelectModal'
import SnackBar from '@components/common/SnackBar'
import WorkoutMenuView from '@components/workout/WorkoutMenuView'
import CreateWorkoutView from '@components/workout/CreateWorkoutView'
import ExerciseCard from '@components/exercises/ExerciseCard'
import ExercisesList from '@components/exercises/ExerciseList'
import SelectExerciseView from '@components/workout/SelectExerciseView'

const exerciseSchemaToExerciseItem = (data) => exerciseSchemaToExerciseItemMapper(data, i18n)

const ExerciseCardItem = ({exercise, onPress}) => <ExerciseCard exercise={exercise} onPress={onPress}/>

const ExercisesListElement = ({data, error, onItemPress}) =>
  <ExercisesList
    data={data}
    error={error}
    onItemPress={onItemPress}
    ErrorView={ErrorView}
    ExerciseCard={ExerciseCardItem}
  />


const ExercisesScreen = () => <ExercisesView
  i18n={i18n}
  useExercises={useExercises}
  ExercisesList={ExercisesListElement}
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
  ExercisesList={ExercisesListElement}
  exerciseSchemaToExerciseItem={exerciseSchemaToExerciseItem}
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