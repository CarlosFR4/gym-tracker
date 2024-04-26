/** @type { import("drizzle-kit").Config } */
export default {
  schema: [
    './src/exercisesTable/exercises.js',
  ],
  driver: 'expo',
  out: './drizzle'
}