import ExercisesDao from 'src/database/web/ExercisesDao'
import FakeDatabase from '@database/web/FakeDatabase'
import WorkoutDao from '@database/web/WorkoutDao'

class WebDatabase {
  constructor() {
    this.db = new FakeDatabase()
  }
  exercisesDao() {
    return new ExercisesDao(this.db)
  }

  workoutDao() {
    return new WorkoutDao(this.db)
  }
}

export default WebDatabase