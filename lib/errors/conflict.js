const HttpError = require('./http-error');

class Conflict extends HttpError {
    constructor(m='Conflict') {
        super(m);
        this.statusCode = 409;
    }
}

module.exports = Conflict;
