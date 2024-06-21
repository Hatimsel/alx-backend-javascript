const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return the sum of rounded numbers', function() {

    let result = calculateNumber(1.4, 3.5);
    assert.strictEqual(result, 5);

    result = calculateNumber(2.7, 5.1);
    assert.strictEqual(result, 8);

    result = calculateNumber(0.1, 0.2);
    assert.strictEqual(result, 0);
  });

  it('should handle negative numbers correctly', function() {

    let result = calculateNumber(-1.4, -3.5);
    assert.strictEqual(result, -4);

    result = calculateNumber(-2.7, 5.1);
    assert.strictEqual(result, 2);
  });

  it('should handle edge cases', function() {

    let result = calculateNumber(0, 0);
    assert.strictEqual(result, 0);

    result = calculateNumber(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    assert.strictEqual(result, 2 * Number.MAX_SAFE_INTEGER);
  });
});
