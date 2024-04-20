/** @type { import("drizzle-kit").Config } */
export default {
  schema: [
    './src/exercises/exercises.js',
  ],
  driver: 'expo',
  out: './drizzle'
}