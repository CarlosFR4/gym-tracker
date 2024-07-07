/**
 * Represents an exercise.
 * @class
 */
export default class Exercise {
  /**
   * Creates an exercise.
   * @constructor
   * @param {number} id - The id
   * @param {string} name - The name of the exercise.
   * @param {string|null} image - The URL of the image for the exercise.
   * @param {string} bodyPart - The body part that the exercise targets.
   * @param {string} category - The category of the exercise.
   */
  constructor(id, name, image, bodyPart, category) {
    this.id = id
    this.name = name
    this.image = image
    this.bodyPart = bodyPart
    this.category = category
  }
}