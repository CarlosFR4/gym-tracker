import ExercisesDao from 'src/database/web/ExercisesDao'
import FakeDatabase from '@database/web/FakeDatabase'
import WorkoutsDao from '@database/web/WorkoutsDao'

class WebDatabase {
  constructor() {
    this.db = new FakeDatabase()
  }
  exercisesDao() {
    return new ExercisesDao(this.db)
  }

  workoutDao() {
    return new WorkoutsDao(this.db)
  }
}

export default WebDatabase