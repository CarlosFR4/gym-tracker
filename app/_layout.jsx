import React from 'react'
import {Stack} from 'expo-router/stack'
import {migrate} from 'drizzle-orm/expo-sqlite/migrator'
import migrations from '@drizzle/migrations'
import {db} from '@di/app.module'

/**
 * @param {import('expo-sqlite/next').SQLiteDatabase} db
 *
 * Initialize the database with the tables and data.
 */
const initDb = (db) => {
  migrate(db, migrations).then(() => {
    console.log('Database initialized')
  }).catch(err => {
    console.error(err)
  })
}

export default function RootLayout() {
  initDb(db)
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
    </Stack>
  )
}