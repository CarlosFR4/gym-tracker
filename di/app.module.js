import {drizzle} from 'drizzle-orm/expo-sqlite'
import {openDatabaseSync} from 'expo-sqlite/next'
import i18n from '@locales/i18n'

const expo = openDatabaseSync('gym-tracker.db')

const db = drizzle(expo)

export {
  db,
  i18n,
}