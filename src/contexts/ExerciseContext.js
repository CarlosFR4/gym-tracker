import React, { createContext, useState, useContext } from 'react'

const ExercisesContext = createContext(undefined, undefined)

export const ExercisesProvider = ({ getAllExercisesUseCase, saveExerciseUseCase, children }) => {
  const [exercises, setExercises] = useState(null)

  const getExercises = async () => {
    if (exercises) {
      return exercises
    } else {
      const data = await getAllExercisesUseCase()
      setExercises(data)
      return data
    }
  }

  const addExercise = async exercise => {
    const newExercise = await saveExerciseUseCase(exercise)

    if(exercises) {
      setExercises(prevExercises => [...prevExercises, newExercise])
    } else {
      setExercises([newExercise])
    }
  }

  return (
    <ExercisesContext.Provider value={{ getExercises, addExercise }}>
      {children}
    </ExercisesContext.Provider>
  )
}

export const useExercises = () => {
  const context = useContext(ExercisesContext)
  if (context === undefined) {
    throw new Error('useExercises must be used within a ExercisesProvider')
  }
  return context
}