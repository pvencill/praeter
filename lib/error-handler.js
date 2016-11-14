const logger = require('./logger');
const errors = require('./errors');

function errorHandler({
  log = logger.error,
  template = (req, httpError) => { return `${req.method} ${req.url} - ${httpError.statusCode} - ${httpError.message}`;}
}) { 
  return (err, req, res, next) => {
    const httpError = (err.statusCode) ? err : new errors.InternalServerError();
    log(template(req, httpError));

    // TODO: handle content types
    res.status(httpError.statusCode).send(httpError.message);
  };
}

module.exports = errorHandler;