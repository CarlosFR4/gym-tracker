import WorkoutSchema from '@database/WorkoutSchema'
import ExerciseSchema from '@database/ExerciseSchema'
import ExercisesToWorkoutSchema from '@database/ExercisesToWorkoutSchema'
import {eq} from 'drizzle-orm/sql/expressions/conditions'

/**
 * Data Access Object for exercises.
 * @class
 *
 * @method getAllExercises - Retrieve all exercises
 * @method getExerciseById - Retrieve an exercise by its id
 * @method save - Save an exercise
 */
class ExercisesDao {
  /**
   * @param {import('drizzle-orm/expo-sqlite').SQLiteDatabase} db - SQLite Database object
   */
  constructor(db) {
    this.db = db
  }

  /**
   * Retrieve all exercises
   * @returns {Promise<WorkoutSchema[]>}
   */
  async getAllWorkouts() {
    return await this.db.select().from(WorkoutSchema)
  }

  /**
   * Retrieves all the exercises for a given workout
   * @param workoutId
   * @returns {Promise<ExerciseSchema>}
   */
  async getExercisesByWorkout(workoutId) {
    return await this.db.select()
      .from(ExerciseSchema)
      .innerJoin(ExercisesToWorkoutSchema, eq(ExerciseSchema.id, ExercisesToWorkoutSchema.exerciseId))
      .innerJoin(WorkoutSchema, eq(WorkoutSchema.id, ExercisesToWorkoutSchema.workoutId))
      .where(eq(WorkoutSchema.id, workoutId))
      .all()
  }

  /**
   * Retrieve an exercise by its id
   * @param {number} id
   * @returns {Promise<ExerciseSchema>}
   */
  async getWorkoutById(id) {
    return await this.db.select().from(WorkoutSchema).where({id}).get()
  }

  /**
   * Save an exercise
   * @param {WorkoutSchema} workout
   * @param {number[]|null} exercisesIds
   * @returns {Promise<ExerciseSchema>}
   */
  async save(workout, exercisesIds) {
    const result = await this.db.insert(WorkoutSchema).values(workout).returning()

    exercisesIds && this.db.insert(ExercisesToWorkoutSchema).values(exercisesIds.map(exerciseId => ({
      workoutId: result[0].id,
      exerciseId,
    })))

    return result[0]
  }
}

export default ExercisesDao