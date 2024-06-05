/**
 * Save workouts use case
 * @param workoutsDao {WorkoutsDao}
 * @param workouts {Workout[]}
 * @returns {Promise<void>}
 */
export const saveWorkoutsUseCase = async (workoutsDao, workouts) => {
  workouts.map(({name, lastPerformed, exercises}) => ({
    workout: {name, lastPerformed},
    exercisesIds: exercises.map(exercise => exercise.id)
  }))

}