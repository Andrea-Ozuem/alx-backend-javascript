const calculateNumber = require("./2-calcul_chai.js");
const expect = require('chai').expect;

describe('calculateNumber', function (){
  it('calculates the sum of 2 rounded numbers', function(){
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });
  it('subtracts 2 rounded numbers', function(){
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
  it('divides 2 rounded numbers', function() {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
  it('returns error for division of a number by 0', function() {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
