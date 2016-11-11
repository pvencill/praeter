const HttpError = require('./http-error');

class InternalServerError extends HttpError {
    constructor(m='Internal Server Error') {
        super(m);
        this.statusCode = 500;
    }
}

module.exports = InternalServerError;
