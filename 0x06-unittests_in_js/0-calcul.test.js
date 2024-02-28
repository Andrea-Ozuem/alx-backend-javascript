const calculateNumber = require("./0-calcul");
const assert = require('assert');

describe('calculateNumber', function (){
  it('return the sum of 2 int arguments', function(){
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('returns the sum of int and a rounded float', function(){
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('returns the sum of 1 float with decimal < 5', function() {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('returns the sum of 2 float with decimale >= 5)', function() {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  it('returns the sum of 2 float with one rounded', function() {
    assert.equal(calculateNumber(1.5, 3.05), 5);
  });
});
