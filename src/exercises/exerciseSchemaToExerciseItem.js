import BodyParts from '@exercises/BodyParts'
import Exercise from '@exercises/Exercise'

/**
 * @typedef ExerciseItem
 * @property {string} name
 * @property {string} image
 * @property {string} bodyPart
 */

/**
 * Takes an object and converts it to an Exercise.
 * @param {string} name
 * @param {string} image
 * @param {number} bodyPart
 * @param {import(i18n-js).I18n} i18n
 * @returns {ExerciseItem}
 */
export default function exerciseSchemaToExerciseItem({name, image, bodyPart}, i18n) {
  const bodyPartName = Object.entries(BodyParts).find(([, value]) => value === bodyPart)[0]
  return new Exercise(name, image, i18n.t(bodyPartName))
}