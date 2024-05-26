import ExercisesDao from 'src/database/mobile/ExercisesDao'
import {migrate} from 'drizzle-orm/expo-sqlite/migrator'
import WorkoutDao from '@database/mobile/WorkoutDao'

/**
 * MobileDatabase class
 * @param {import('drizzle-orm/expo-sqlite').ExpoSQLiteDatabase} db - SQLite Database object
 * @param {import('drizzle-orm/expo-sqlite').Migration[]} migrations - Database migrations
 */
class MobileDatabase {
  constructor(db, migrations) {
    this.db = db
    this.migrations = migrations

    this.init()
  }

  init() {
    try {
      migrate(this.db, this.migrations).then(() => {
        console.log('Database initialized')
      }).catch(err => {
        console.error(err)
      })
    } catch (err) {
      console.error(err)
    }
  }

  exercisesDao() {
    return new ExercisesDao(this.db)
  }

  workoutDao() {
    return new WorkoutDao(this.db)
  }
}

export default MobileDatabase