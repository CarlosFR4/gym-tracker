import ExerciseSchema from '@database/ExerciseSchema'

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
   * @returns {Promise<ExerciseSchema[]>}
   */
  async getAllExercises() {
    return await this.db.select().from(ExerciseSchema)
  }

  /**
   * Retrieve an exercise by its id
   * @param {number} id
   * @returns {Promise<ExerciseSchema>}
   */
  async getExerciseById(id) {
    return await this.db.select().from(ExerciseSchema).where({id}).get()
  }

  /**
   * Save an exercise
   * @param {ExerciseSchema} exercise
   * @returns {Promise<ExerciseSchema>}
   */
  async save(exercise){
    const result = await this.db.insert(ExerciseSchema).values(exercise).returning()
    return result[0]
  }
}

export default ExercisesDao