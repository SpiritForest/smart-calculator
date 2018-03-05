class SmartCalculator {
    constructor(initialValue) {
        this.value = initialValue.toString();
        this.expression = "";
        this.valueUsed = false;
    }

    add(operand) {
        this.expression += `${this.useExpOrValue(operand)} + ${operand}`;
        return this;
    }

    subtract(operand){
        this.expression += `${this.useExpOrValue(operand)} - ${operand}`;
        return this;
    }

    multiply(operand) {
        this.expression += `${this.useExpOrValue(operand)} * ${operand}`;
        return this;
    }

    devide(operand){
        this.expression += `${this.useExpOrValue(operand)} / ${operand}`;
        return this;
    }

    pow(operand){
        this.expression += `${this.useExpOrValue(operand)} ** ${operand}`;
        return this;
    }

    useExpOrValue(operand) {
        let res = !this.valueUsed ? this.value : "";
        this.valueUsed = true;
        return res;
    }

    toString() {
        return eval(this.expression);
    }
}


module.exports = SmartCalculator;
