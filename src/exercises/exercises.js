import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core'

const exercises = sqliteTable('exercises', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  category: integer('category'),
  bodyPart: integer('body_part'),
})

export default exercises