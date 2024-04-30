import {renderHook, act} from '@testing-library/react-hooks'
import {useGetAllExercises} from '@hooks/useGetAllExercises'

describe('useGetAllExercises', () => {
  it('should return exercises, loading status and error', async () => {
    const mockExercises = [{
      id: 1,
      name: 'Test Exercise 2',
      image: 'image.jpg',
      bodyPart: 1,
    }, {
      id: 2,
      name: 'Test Exercise 2',
      image: 'image.jpg',
      bodyPart: 2,
    }]

    /**
     * @type {ExercisesDao}
     */
    const mockExercisesDao = {
      getAllExercises: jest.fn().mockResolvedValue(mockExercises),
    }

    const {result, waitForNextUpdate} = renderHook(() =>
      useGetAllExercises(mockExercisesDao)
    )

    expect(result.current.loading).toBe(true)

    await act(async () => {
      await waitForNextUpdate()
    })

    expect(result.current.loading).toBe(false)
    expect(result.current.exercises).toEqual(mockExercises)
    expect(result.current.error).toBe(null)
  })

  it('should handle error', async () => {
    const mockError = new Error('An error occurred')
    /**
     * @type {ExercisesDao}
     */
    const mockExercisesDao = {
      getAllExercises: jest.fn().mockRejectedValue(mockError),
    }

    const {result, waitForNextUpdate} = renderHook(() =>
      useGetAllExercises(mockExercisesDao)
    )

    expect(result.current.loading).toBe(true)

    await act(async () => {
      await waitForNextUpdate()
    })

    expect(result.current.loading).toBe(false)
    expect(result.current.exercises).toEqual([])
    expect(result.current.error).toEqual(mockError)
  })
})