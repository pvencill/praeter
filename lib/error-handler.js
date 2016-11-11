const logger = require('./logger');
const errors = require('./errors');

function errorHandler({}){ 
  return (err, req, res, next) => {
    const httpError = (err.statusCode) ? err : new errors.InternalServerError();
    logger.error(`${req.method} ${req.url} - ${httpError.statusCode} - ${httpError.message}`);
    
    // TODO: handle content types
    res.status(httpError.statusCode).send(httpError.message);
  };
}

module.exports = errorHandler;