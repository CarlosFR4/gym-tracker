export default class Workout {
  /**
   * @param id {Number}
   * @param name {String}
   * @param exercises {Array<Exercise>}
   * @param lastPerformed {Date}
   */
  constructor(id, name, exercises, lastPerformed) {
    this.id = id
    this.name = name
    this.exercises = exercises
    this.lastPerformed = lastPerformed
  }
}