function evaluateExpression(expr, vars, vals) {
  function sqrt(x) {
    if (x < 0) throw 'err';
    return Math.sqrt(x);
  }

  try {
    const fn = new Function(...vars, 'sqrt', `return ${expr}`);
    const res = fn(...vals, sqrt);
    return Math.round(res * 100) / 100;
  } catch {
    return -1;
  }
}

// Test cases
console.log(evaluateExpression("sqrt(a - b) + c", ["a", "b", "c"], [9, 4, 3]));     
console.log(evaluateExpression("sqrt(x * y) - z", ["x", "y", "z"], [2, -3, 1]));   
console.log(evaluateExpression("sqrt(m) + sqrt(n)", ["m", "n"], [16, 9]));        
 


















