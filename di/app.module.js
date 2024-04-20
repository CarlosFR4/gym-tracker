import { drizzle } from 'drizzle-orm/expo-sqlite'
import { openDatabaseSync } from 'expo-sqlite/next'

const expo = openDatabaseSync('gym-tracker.db')

const db = drizzle(expo)

export {
  db
}