"use strict";

const typpy = require("typpy")
    , iterateObject = require("iterate-object")
    ;

/**
 * Err
 * Create a custom error object.
 *
 * @name Err
 * @function
 * @param {String|Error} error The error message or an existing `Error` instance.
 * @param {String|Object} code The error code or the data object.
 * @param {Object} data The data object (its fields will be appended to the `Error` object).
 * @return {Error} The custom `Error` instance.
 */
module.exports = class Err extends Error {
    constructor (error, code, data) {

        // Err({ message: "...", code: "...", ... });
        if (typpy(error, Object)) {
            data = error;
            error = data.message;
            delete data.message;
            code = data.code;
        }

        // Err(message, code, data);
        // Err(message, data);
        if (typpy(data, Object)) {
            data.code = code;
        } else if (typpy(code, Object)) {
            data = code;
            code = undefined;
        } else if (!typpy(code, undefined)) {
            data = { code: code };
        }

        // Create the error
        super(error);

        if (data) {
            iterateObject(data, (v, n) => {
                this[n] = v;
            });
        }
    }
};
