const chai = require("chai");
const expect = chai.expect;
const request = require('request');

const port = 7865;

describe('Index page', function() {
  it('test index page', function(done) {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
  it('Test Cart page', function(done) {
    request(`http://localhost:${port}/cart/65`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 65');
      done();
    });
  });
  it('displays 404 err when the id is not a number', function (done) {
    request(`http://localhost:${port}/cart/five`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
