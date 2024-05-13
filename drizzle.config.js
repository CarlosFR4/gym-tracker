/** @type { import("drizzle-kit").Config } */
export default {
  schema: [
    './src/database/ExerciseSchema.js',
  ],
  driver: 'expo',
  out: './drizzle'
}