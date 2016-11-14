const sinon = require('sinon');
const expect = require('chai').expect;
const errorHandler = require('../lib/error-handler');
let logger = require('../lib/logger');

describe('#errorHandler', ()=> {
  const mockLogger = sinon.mock(logger);

  describe('when there is no configuration object passed', ()=> {
    const handler = errorHandler({});
    const err = {statusCode: 500, message: 'Something went foo'};
    const req = {url: '/foo', method: 'GET'};
    const expectedMessage = `${req.method} ${req.url} - ${err.statusCode} - ${err.message}`;
    let res = {status: ()=>{}, send: ()=>{}};
    const resMock = sinon.mock(res);

    afterEach(()=> {
      mockLogger.restore();
      resMock.restore();
    });

    it('should call the logger with the default string output', ()=> {
      mockLogger.expects('error').once().calledWith(expectedMessage);
      resMock.expects('send').once().withExactArgs(err.message);
      resMock.expects('status').once().withExactArgs(err.statusCode).returns({send: res.send});
      handler(err, req, res);

      resMock.verify();
    });
  })
});