const calculateNumber = require("./1-calcul.js");
const assert = require("assert");

describe('calculateNumber', function (){
  it('calculates the sum of 2 rounded numbers', function(){
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('subtracts 2 rounded numbers', function(){
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('divides 2 rounded numbers', function() {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('returns error for division of a number by 0', function() {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
