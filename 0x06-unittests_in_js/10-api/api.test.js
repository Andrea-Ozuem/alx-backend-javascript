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

  it('displays Welcome message on login', function (done) {
    const options = {
      url: `http://localhost:${port}/login`,
      method: 'POST',
      json: true,
      body: { userName: 'Betty' }
    };
    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.equal(`Welcome Betty`);
      done();
    });
  });

  it('displays payment_methods object on /available_payments endpoint', function (done) {
    responseObject = {
      payment_methods: {
        credit_cards: true,
        paypal: false,
      },
    };
    request(`http://localhost:${port}/available_payments`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(response.body).to.deep.equal(JSON.stringify(responseObject));
      done();
    });
  });
});
