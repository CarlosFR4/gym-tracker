import { exercisesDao, i18n } from '@di/app.module'
import {useGetAllExercises as useGetAllExercisesHook} from '@hooks/useGetAllExercises'
import {exerciseForList} from '@exercises/mappers'

const useGetAllExercises = () => useGetAllExercisesHook(exercisesDao)

export {
  exerciseForList,
  useGetAllExercises,
  i18n,
}