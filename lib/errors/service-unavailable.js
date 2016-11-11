const HttpError = require('./http-error');

class ServiceUnavailable extends HttpError {
    constructor(m='Service Unavailable') {
        super(m);
        this.statusCode = 503;
    }
}

module.exports = ServiceUnavailable;
