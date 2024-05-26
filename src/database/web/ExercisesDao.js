const TABLE = 'exercises'

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
   * @param db {FakeDatabase}
   */
  constructor(db) {
    this.db = db
  }

  /**
   * Retrieve all exercises
   * @returns {Promise<ExerciseSchema[]>}
   */
  async getAllExercises() {
    return new Promise((resolve) => {
      resolve(this.db.select(TABLE))
    })
  }

  /**
   * Retrieve an exercise by its id
   * @param {number} id
   * @returns {Promise<ExerciseSchema>}
   */
  async getExerciseById(id) {
    return new Promise((resolve) => {
      resolve(this.db.select(TABLE).find(exercise => exercise.id === id))
    })
  }

  /**
   * Save an exercise
   * @param {ExerciseSchema} exercise
   */
  async save(exercise) {
    new Promise((resolve) => {
      this.db.insert(TABLE, exercise)
      resolve()
    })
  }
}

export default ExercisesDao