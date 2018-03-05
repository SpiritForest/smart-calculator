class SmartCalculator {
  constructor(initialValue) {
    this.initialValue = initialValue;
  }

  add(number) {
    this.initialValue += number;
    return this;
  }
  
  subtract(number) {
    this.initialValue -= number;
    return this;
  }

  multiply(number) {
    this.initialValue *= number;
    return this;
  }

  devide(number) {
    this.initialValue /= number;
    return this;
  }

  pow(number) {
    this.initialValue = Math.pow(this.initialValue, number);
    return this;
  }

  toString () { 
  return this.initialValue; 
}

}

module.exports = SmartCalculator;
