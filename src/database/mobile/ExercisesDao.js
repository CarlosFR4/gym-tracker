import exercises from '@exercises/exercises'

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
   * @returns {Promise<exercises[]>}
   */
  async getAllExercises() {
    return await this.db.select().from(exercises)
  }

  /**
   * Retrieve an exercise by its id
   * @param {number} id
   * @returns {Promise<exercises>}
   */
  async getExerciseById(id) {
    return await this.db.select().from(exercises).where({id}).get()
  }

  /**
   * Save an exercise
   * @param {exercises} exercise
   * @returns {Promise<exercises>}
   */
  async save(exercise){
    await this.db.insert(exercises).values(exercise)
  }
}

export default ExercisesDao