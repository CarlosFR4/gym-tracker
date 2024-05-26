/**
 * Represents an exercise.
 * @class
 */
class Exercise {
  /**
   * Creates an exercise.
   * @param {string} name - The name of the exercise.
   * @param {string|null} image - The URL of the image for the exercise.
   * @param {string} bodyPart - The body part that the exercise targets.
   */
  constructor(name, image, bodyPart) {
    this.name = name
    this.image = image
    this.bodyPart = bodyPart
  }
}

export default Exercise