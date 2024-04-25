export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = typeof name === 'string' ? name : (() => { throw new TypeError(); });
  }

  get length() {
    return this._length;
  }

  set length(length) {
    this._length = typeof length === 'number' ? length : (() => { throw new TypeError(); });
  }

  get students() {
    return this._students;
  }

  set students(students) {
    this._students = students instanceof Array && typeof students[0] === 'string' ? students : (() => { throw new TypeError(); });
  }
}
