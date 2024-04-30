import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core'

/**
 * @typedef {Object} ExerciseSchema
 * @property {Number} id - An object representing the 'id' column of the table.
 * @property {string} image - Path to image for exercise, nullable.
 * @property {string} name - An object representing the 'name' column of the table.
 * @property {Number} category - An object representing the 'category' column of the table.
 * @property {Number} bodyPart - An object representing the 'body_part' column of the table.
 */
const ExerciseSchema = sqliteTable('exercises', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  image: text('image'),
  category: integer('category'),
  bodyPart: integer('body_part'),
})

export default ExerciseSchema