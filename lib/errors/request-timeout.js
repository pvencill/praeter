const HttpError = require('./http-error');

class RequestTimeout extends HttpError {
    constructor(m='Request Timeout') {
        super(m);
        this.statusCode = 408;
    }
}

module.exports = RequestTimeout;
