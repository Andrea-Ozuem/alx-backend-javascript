const chai = require("chai");
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('TestAsync', function() {
  it('test an async function', function(done) {
    getPaymentTokenFromAPI(true)
      .then((out) => {
        expect(out).to.deep.equal({data: 'Successful response from the API' });
        done();
    });
  });
});
