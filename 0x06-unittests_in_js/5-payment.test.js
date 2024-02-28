const sinon = require("sinon");
const Utils = require('./utils');
const expect = require("chai").expect;
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function() {
  beforeEach(function () {
    logSpy = sinon.spy(console, 'log');
  });
  afterEach(function () {
    sinon.restore();
  });

  it("Verify that the stub is being called with right args", function() {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnceWithExactly(logSpy, 'The total is: 120');
  });
  it("verify that console.log is logging the correct message", function() {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledOnceWithExactly(logSpy, 'The total is: 20');
  });
});
