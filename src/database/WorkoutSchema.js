import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core'

/**
 * @typedef {Object}  WorkoutSchema
 * @property {Number} id - An object representing the 'id' column of the table.
 * @property {string} name - An object representing the 'name' column of the table.
 * @property {string} lastPerformed - An object representing the 'last_performed' column of the table.
 */
const WorkoutSchema = sqliteTable('workout', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  lastPerformed: text('last_performed'),
})

export default WorkoutSchema