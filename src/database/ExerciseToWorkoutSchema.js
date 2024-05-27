import {integer, sqliteTable} from 'drizzle-orm/sqlite-core'
import WorkoutSchema from './WorkoutSchema'
import ExerciseSchema from './ExerciseSchema'

const ExerciseToWorkoutSchema = sqliteTable('exercises_to_workouts', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  workoutId: integer('workout_id').notNull().references(() => WorkoutSchema.id),
  exerciseId: integer('exercise_id').notNull().references(() => ExerciseSchema.id),
})

export default ExerciseToWorkoutSchema