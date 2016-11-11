const HttpError = require('./http-error');

class MethodNotAllowed extends HttpError {
    constructor(m='Method Not Allowed') {
        super(m);
        this.statusCode = 405;
    }
}

module.exports = MethodNotAllowed;
