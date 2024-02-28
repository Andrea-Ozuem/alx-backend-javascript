const chai = require("chai");
const expect = chai.expect;
const request = require('request');

describe('Index page', function() {
  it('test index page', function(done) {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('Test body response', done => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
