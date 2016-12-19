const HttpError = require('./http-error');

class Unauthorized extends HttpError {
    constructor(m='Unauthorized') {
        super(m);
        this.statusCode = 401;
    }
}

module.exports = Unauthorized;
