const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('SUM operation', function() {
    it('should return the sum of rounded numbers', function() {
      let result = calculateNumber('SUM', 1.4, 3.5);
      assert.strictEqual(result, 5);

      result = calculateNumber('SUM', 2.7, 5.1);
      assert.strictEqual(result, 8);
    });
  });

  describe('SUBTRACT operation', function() {
    it('should return the difference of rounded numbers', function() {
      let result = calculateNumber('SUBTRACT', 5.4, 2.1);
      assert.strictEqual(result, 3);

      result = calculateNumber('SUBTRACT', 8.7, 3.1);
      assert.strictEqual(result, 6);
    });
  });

  describe('DIVIDE operation', function() {
    it('should return the division result if b is not zero', function() {
      let result = calculateNumber('DIVIDE', 10, 2);
      assert.strictEqual(result, 5);

      result = calculateNumber('DIVIDE', 8.5, 2);
      assert.strictEqual(result, 4.5);
    });

    it('should return Error if rounded b is zero', function() {
      let result = calculateNumber('DIVIDE', 6, 0);
      assert.strictEqual(result, 'Error');

      result = calculateNumber('DIVIDE', 10.5, 0);
      assert.strictEqual(result, 'Error');
    });
  });

  describe('Invalid operation type', function() {
    it('should throw an error for invalid type', function() {
      assert.throws(() => {
        calculateNumber('MULTIPLY', 5, 2);
      }, Error);
    });
  });
});
