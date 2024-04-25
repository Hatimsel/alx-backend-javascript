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
    // this._name = typeof name === 'string' ? name : (() => { throw new TypeError(); });
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(length) {
    // this._length = typeof length === 'number' ? length : (() => { throw new TypeError(); });
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (students instanceof Array) {
      if (students.every((student) => typeof student === 'string')) {
        this._students = students;
      }
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
