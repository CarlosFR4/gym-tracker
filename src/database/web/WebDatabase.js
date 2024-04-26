import ExercisesDao from 'src/database/web/ExercisesDao'

class WebDatabase {
  exercisesDao() {
    return new ExercisesDao()
  }
}

export default WebDatabase