import {drizzle} from 'drizzle-orm/expo-sqlite'
import {openDatabaseSync} from 'expo-sqlite/next'
import i18n from '@locales/i18n'
import migrations from '@drizzle/migrations'
import {Platform} from 'react-native'
import MobileDatabase from '@database/mobile/MobileDatabase'
import WebDatabase from '@database/web/WebDatabase'

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

export {
  exercisesDao,
  i18n,
}