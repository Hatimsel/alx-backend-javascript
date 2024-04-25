export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (this.evacuationWarningMessage === undefined) {
        throw new Error('Class extending Building must ovverride evacuationWarningMessage');
      }
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    this._sqft = typeof sqft === 'number' ? sqft : (() => {
      throw new TypeError('sqft must be a number');
    });
  }
}
