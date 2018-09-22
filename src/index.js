class SmartCalculator {
    constructor(initialValue) {
        this.expression = "" + initialValue;
    }

    add(operand) {
        this.expression += '+' + operand;
        return this;
    }

    subtract(operand){
        this.expression += '-' + operand;
        return this;
    }

    multiply(operand) {
        this.expression += '*' + operand;
        return this;
    }

    devide(operand){
        this.expression += '/' + operand;
        return this;
    }

    pow(operand){
        this.expression += '**' + operand;
        return this;
    }

    toString() {
        return eval(this.expression);
    }
}


module.exports = SmartCalculator;
