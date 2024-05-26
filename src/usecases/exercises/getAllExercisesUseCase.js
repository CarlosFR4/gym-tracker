export const getAllExercisesUseCase = async (exercisesDao) => {
  return await exercisesDao.getAllExercises()
}