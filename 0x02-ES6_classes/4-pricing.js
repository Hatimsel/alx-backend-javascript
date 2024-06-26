import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    this._amount = typeof amount === 'number' ? amount : (() => {
      throw new TypeError('Amount must be a number');
    });
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    this._currency = currency instanceof Currency ? currency : (() => {
      throw new TypeError('Currency must be a string');
    });
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
