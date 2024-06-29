/**
 * Represents an exercise.
 * @class
 */
export default class Exercise {
  /**
   * Creates an exercise.
   * @param {string} name - The name of the exercise.
   * @param {string|null} image - The URL of the image for the exercise.
   * @param {string} bodyPart - The body part that the exercise targets.
   * @param {string} category - The category of the exercise.
   */
  constructor(name, image, bodyPart, category) {
    this.name = name
    this.image = image
    this.bodyPart = bodyPart
    this.category = category
  }
}