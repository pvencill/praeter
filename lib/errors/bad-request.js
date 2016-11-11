const HttpError = require('./http-error');

class BadRequest extends HttpError {
    constructor(m='Bad Request') {
        super(m);
        this.statusCode = 400;
    }
}
module.exports = BadRequest;
