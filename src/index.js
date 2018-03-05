class SmartCalculator {
  constructor(initValue) {
    this.init = initValue;
    this.operations = [];
  }
  get result() {
    let rpn = [this.init]; // reverse polish notation
    let ops = [];

    this.operations.forEach(op => { // сортировочная станция
      while (ops.length && (ops[ops.length - 1]).priority < op.priority) {
        rpn.push(ops.pop().op);
      }
      ops.push(op);
      rpn.push(op.val);
    });
    while (ops.length) {
      rpn.push(ops.pop().op)
    }
    let res = [];
    rpn.forEach(token => {
      if (typeof token === 'function') {
        res.push(token(res.pop(), res.pop()));
      } else {
        res.push(token);
      }
    });
    return res.pop();
  }
  add(val) {
    this.operations.push({
      op: (a, b) => a + b,
      priority: 2,
      val: val
    });
    return this;
  }
  substract(val) {
    this.operations.push({
      op: (a, b) => b - a,
      priority: 2,
      val: val
    })
    return this;
  }
  multiply(val) {
    this.operations.push({
      op: (a, b) => a * b,
      priority: 1,
      val: val
    })
    return this;
  }
  divide(val) {
    this.operations.push({
      op: (a, b) => b / a,
      priority: 1,
      val: val
    })
    return this;
  }
  valueOf() {
    return this.result;
  }
}

module.exports = SmartCalculator;
