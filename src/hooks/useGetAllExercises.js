import {useEffect, useState} from 'react'

/**
 * Hook to retrieve all exercises.
 * @param {ExercisesDao} exercisesDao
 * @returns {{exercises: *[], loading: boolean, error: unknown}}
 */
export const useGetAllExercises = (exercisesDao) => {
  const [exercises, setExercises] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const data = await exercisesDao.getAllExercises()
        setExercises(data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [exercisesDao])

  return {exercises, loading, error}
}