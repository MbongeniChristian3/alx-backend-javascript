// currency.js
class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Method to display currency information
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}

module.exports = Currency; // Export the Currency class

