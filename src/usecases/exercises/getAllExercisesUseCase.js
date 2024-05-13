export const getAllExercisesUseCase = async (exercisesDao) => {
  console.log('getAllExercisesUseCase')
  return  await exercisesDao.getAllExercises()
}