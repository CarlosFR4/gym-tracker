import {useCallback} from 'react'

export const useSaveExercise = (exercisesDao) => {
  return useCallback(async (exercise) => {
    await exercisesDao.save(exercise)
  }, [exercisesDao])
}