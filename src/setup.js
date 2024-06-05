import {defaultExercisesVersion, setDefaultExercisesVersion} from '@di/app.module'
import defaultExercises from '@defaults/exercises.json'

const setup = async () => {
  if (defaultExercisesVersion || defaultExercises.version > defaultExercisesVersion) {
    // fill the database with the default exercises
    await setDefaultExercisesVersion(defaultExercises.version)
  }
}
