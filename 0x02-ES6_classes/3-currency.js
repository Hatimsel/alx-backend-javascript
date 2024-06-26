export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    this._code = typeof code === 'string' ? code : (() => {
      throw new TypeError('Code must be a string');
    });
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = typeof name === 'string' ? name : (() => {
      throw new TypeError('Name must be a string');
    });
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
