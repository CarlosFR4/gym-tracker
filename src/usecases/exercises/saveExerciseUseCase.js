export const saveExerciseUseCase = async (exercisesDao, exercise) => {
  return await exercisesDao.save(exercise)
}