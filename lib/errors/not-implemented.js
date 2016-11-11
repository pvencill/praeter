const HttpError = require('./http-error');

class NotImplemented extends HttpError {
    constructor(m='Not Implemented') {
        super(m);
        this.statusCode = 501;
    }
}

module.exports = NotImplemented;
