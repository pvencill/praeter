const HttpError = require('./http-error');

class NotFound extends HttpError {
    constructor(m='Not Found') {
        super(m);
        this.statusCode = 404;
    }
}

module.exports = NotFound;
