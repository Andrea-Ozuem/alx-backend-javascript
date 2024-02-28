const sinon = require("sinon");
const Utils = require('./utils');
const expect = require("chai").expect;
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function() {
  beforeEach(function () {
    stubbed = sinon.stub(Utils, 'calculateNumber').returns(10);
  });
  afterEach(function () {
    sinon.restore();
  });

  it("Verify that the stub is being called with right args", function() {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(stubbed, 'SUM', 100, 20);
  });
  it("verify that console.log is logging the correct message", function() {
    log = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(log, 'The total is: 10');
  });
});
