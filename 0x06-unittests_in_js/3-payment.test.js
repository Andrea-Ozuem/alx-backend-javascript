const sinon = require("sinon");
const Utils = require('./utils');
const expect = require("chai").expect;
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  const sandbox = sinon.createSandbox();
  beforeEach(function () {
    sandbox.spy(Utils, 'calculateNumber');
  });
  afterEach(function () {
    sandbox.restore();
  });
  it("validate the usage of the Utils function", function() {
    sendPaymentRequestToApi(100, 20);
    expect(Utils.calculateNumber.calledOnce).to.be.true;
  });
  it("ensure math algorithm is same", function() {
    sendPaymentRequestToApi(100, 20);
    expect(Utils.calculateNumber.getCall(0).args[0]).to.equal('SUM');
  });
});
