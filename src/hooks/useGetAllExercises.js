import {useEffect, useState} from 'react'
import {exercisesDao} from '@di/app.module'

const useGetAllExercises = () => {
  const [exercises, setExercises] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const data = await exercisesDao.getAllExercises()
        console.log('useGetAllExercises', data)
        setExercises(data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return {exercises, loading, error}
}

export default useGetAllExercises