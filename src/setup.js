import defaultExercises from '@defaults/exercises.json'

export const setup = async (
  defaultExercisesVersion,
  setDefaultExercisesVersion,
  saveExerciseUseCase,
) => {
  if (defaultExercisesVersion && defaultExercises.version > defaultExercisesVersion) {
    defaultExercises.data.forEach(exercise => saveExerciseUseCase(exercise))
    await setDefaultExercisesVersion(defaultExercises.version)
  }
}
