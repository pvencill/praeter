const ExtendableError = require('extendable-error-class');

class HttpError extends ExtendableError {
    constructor(m='Http Error') {
        super(m);
        this.statusCode = 500;
    }
}

module.exports = HttpError;