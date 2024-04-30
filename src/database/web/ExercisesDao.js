/**
 * Data Access Object for exercises.
 * @class
 *
 * @method getAllExercises - Retrieve all exercises
 * @method getExerciseById - Retrieve an exercise by its id
 * @method save - Save an exercise
 */
class ExercisesDao {
  constructor() {
    this._data = []
  }

  /**
   * Retrieve all exercises
   * @returns {Promise<ExerciseSchema[]>}
   */
  async getAllExercises() {
    return new Promise((resolve) => {
      resolve(this._data)
    })
  }

  /**
   * Retrieve an exercise by its id
   * @param {number} id
   * @returns {Promise<ExerciseSchema>}
   */
  async getExerciseById(id) {
    return new Promise((resolve) => {
      resolve(this._data.find(exercise => exercise.id === id))
    })
  }

  /**
   * Save an exercise
   * @param {ExerciseSchema} exercise
   */
  async save(exercise) {
    new Promise((resolve) => {
      this._data.push(exercise)
      resolve()
    })
  }
}

export default ExercisesDao