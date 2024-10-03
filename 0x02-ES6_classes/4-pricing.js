import { Currency } from './3-currency.js';  // Import Currency from 3-currency.js

class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new Error('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new Error('Currency must be an instance of the Currency class');
    }

    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new Error('Amount must be a number');
    }
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new Error('Currency must be an instance of the Currency class');
    }
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.currencyName} (${this._currency.currencyCode})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new Error('Amount and conversion rate must both be numbers');
    }
    return amount * conversionRate;
  }
}

// Example usage:
const usdCurrency = new Currency('USD', 'US Dollar'); // Create an instance of Currency
const price = new Pricing(100, usdCurrency);

console.log(price.displayFullPrice()); // Output: 100 US Dollar (USD)

