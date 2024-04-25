export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (this.evacuationWarningMessage === undefined) {
        throw Error('Class extending Building must ovverride evacuationWarningMessage');
      }
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
