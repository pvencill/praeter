const HttpError = require('./http-error');

class Forbidden extends HttpError {
    constructor(m='Forbidden') {
        super(m);
        this.statusCode = 403;
    }
}

module.exports = Forbidden;
