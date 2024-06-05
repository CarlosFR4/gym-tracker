import workoutSchema from '@database/WorkoutSchema'

const TABLE_WORKOUTS = 'workouts'
const TABLE_EXERCISES = 'exercises'
const TABLE_EXERCISES_WORKOUTS = 'exercises_to_workouts'

/**
 * Data Access Object for exercises.
 * @class
 *
 * @method getAllExercises - Retrieve all exercises
 * @method getExerciseById - Retrieve an exercise by its id
 * @method save - Save an exercise
 */
class WorkoutsDao {
  constructor(db) {
    this.db = db
  }

  /**
   * Retrieve all exercises
   * @returns {Promise<WorkoutSchema[]>}
   */
  async getAllWorkouts() {
    return await this.db.select(TABLE_WORKOUTS)
  }

  /**
   * Retrieves all the exercises for a given workout
   * @param workoutId
   * @returns {Promise}
   */
  async getExercisesByWorkout(workoutId) {
    const workouts = await this.db.select(TABLE_WORKOUTS).find(workout => workout.id === workoutId)
    const allExercises = await this.db.select(TABLE_EXERCISES)
    return workouts.exercises.map(exercise => allExercises.includes(exercise.id))
  }

  /**
   * Retrieve an exercise by its id
   * @param {number} id
   * @returns {Promise<ExerciseSchema>}
   */
  async getWorkoutById(id) {
    return await this.db.select(TABLE_WORKOUTS).find(workout => workout.id === id)
  }

  /**
   * Save an exercise
   * @param workout
   * @param {number[]|null} exercisesIds
   * @returns {Promise}
   */
  async save(workout, exercisesIds) {
    const workoutId = await this.db.insert(TABLE_WORKOUTS, workout).returning({insertedId: workoutSchema.id})
    const exercises = exercisesIds && exercisesIds.map(exerciseId => ({workoutId, exerciseId}))
    exercises && await this.db.insert(TABLE_EXERCISES_WORKOUTS, exercises)
  }
}

export default WorkoutsDao