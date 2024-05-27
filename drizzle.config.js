/** @type { import("drizzle-kit").Config } */
export default {
  schema: [
    './src/database/ExerciseSchema.js',
    './src/database/WorkoutSchema.js',
    './src/database/ExerciseToWorkoutSchema.js',
  ],
  driver: 'expo',
  out: './drizzle'
}