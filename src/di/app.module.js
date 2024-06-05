import {drizzle} from 'drizzle-orm/expo-sqlite'
import {openDatabaseSync} from 'expo-sqlite/next'
import i18n from '@locales/i18n'
import migrations from '@drizzle/migrations'
import {Platform} from 'react-native'
import MobileDatabase from '@database/mobile/MobileDatabase'
import WebDatabase from '@database/web/WebDatabase'
import {Appearance} from 'react-native'
import DarkTheme from '@theme/DarkTheme'
import LightTheme from '@theme/LightTheme'
import {getAllExercisesUseCase as getAllExercises} from '@usecases/exercises/getAllExercisesUseCase'
import {saveExerciseUseCase as saveExercise} from '@usecases/exercises/saveExerciseUseCase'
import {ExercisesProvider as ExercisesProviderComponent, useExercises} from '@contexts/ExerciseContext'
import {getDefaultExercisesVersion, setDefaultExercisesVersion} from 'src/AppConfig'

const db = (() => {
  if (Platform.OS === 'ios' || Platform.OS === 'android') {
    const expo = openDatabaseSync('gym-tracker.db')
    const drizzleDb = drizzle(expo)
    return new MobileDatabase(drizzleDb, migrations)
  } else {
    return new WebDatabase()
  }
})()

const exercisesDao = db.exercisesDao()

const getAllExercisesUseCase = () => getAllExercises(exercisesDao)

const saveExerciseUseCase = exercise => saveExercise(exercisesDao, exercise)

const ExercisesProvider = ({children}) => ExercisesProviderComponent({getAllExercisesUseCase, saveExerciseUseCase, children})

const colorScheme = Appearance.getColorScheme()
const Theme = colorScheme === 'dark' ? DarkTheme : LightTheme

let defaultExercisesVersion = null
getDefaultExercisesVersion().then(version => defaultExercisesVersion = version)

export {
  ExercisesProvider,
  useExercises,
  exercisesDao,
  i18n,
  Theme,
  defaultExercisesVersion,
  setDefaultExercisesVersion,
}