class FakeDatabase {
  constructor() {
    this._data = {}
  }

  select(table) {
    this._data[table] = this._data[table] || []
    return this._data[table]
  }

  insert(table, data) {
    this._data[table] = this._data[table] || []
    this._data[table].push(data)
  }
}

export default FakeDatabase