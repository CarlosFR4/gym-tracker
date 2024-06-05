import AsyncStorage from '@react-native-async-storage/async-storage'

/**
 * Get the default exercises version from the local storage
 * @returns {Promise<string|null>}
 */
const getDefaultExercisesVersion = async () => {
  try {
    return await AsyncStorage.getItem('default_exercises_version')
  } catch (error) {
    console.error(error)
  }
}

/**
 * Set the default exercises version in the local storage
 * @param version {string}
 * @returns {Promise<void>}
 */
const setDefaultExercisesVersion = async (version) => {
  try {
    await AsyncStorage.setItem('default_exercises_version', version)
  } catch (error) {
    console.error(error)
  }
}

export {
  getDefaultExercisesVersion,
  setDefaultExercisesVersion,
}