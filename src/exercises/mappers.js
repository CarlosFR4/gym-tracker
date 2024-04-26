import BodyParts from './BodyParts';
import i18n from '@locales/i18n'
import Exercise from '@exercises/Exercise'

/**
 * Takes an object and converts it to an Exercise.
 * @param {string} name
 * @param {string} image
 * @param {number} bodyPart
 * @returns {Exercise}
 */
const exerciseForList = ({name, image, bodyPart}) => {
  const bodyPartName = Object.entries(BodyParts).find(([, value]) => value === bodyPart)[0]
  return new Exercise(name, image, i18n.t(bodyPartName))
}

export {
  exerciseForList,
}