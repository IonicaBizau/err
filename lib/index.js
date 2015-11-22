// Dependencies
var typpy = require("typpy");

function Err(error, code, data) {

    // Create the error
    if (!typpy(error, Error)) {
        error = new Error(error);
    }

    // Err(message, code, data);
    // Err(message, data);
    if (typpy(data, Object)) {
        data.code = code;
    } else if (typpy(code, Object)) {
        data = code;
        code = undefined;
    } else if (typpy(code, String)) {
        data = { code: code };
    }

    if (data) {
        Object.keys(data).forEach(function (c) {
            error[c] = data[c];
        });
    }

    return error;
}

module.exports = Err;
