const HttpError = require('./http-error');

class Unauthorized extends HttpError {
    constructor(m='Unauthorized') {
        super(m);
        this.statusCode = 400;
    }
}

module.exports = Unauthorized;
