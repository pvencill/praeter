const HttpError = require('./http-error');

class BadGateway extends HttpError {
    constructor(m='Bad Gateway') {
        super(m);
        this.statusCode = 502;
    }
}

module.exports = BadGateway;
