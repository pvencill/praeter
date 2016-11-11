const HttpError = require('./http-error');

class GatewayTimeout extends HttpError {
    constructor(m='Gateway Timeout') {
        super(m);
        this.statusCode = 504;
    }
}

module.exports = GatewayTimeout;
