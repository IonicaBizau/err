## Documentation

You can see below the API reference of this module.

### `Err(error, code, data)`
Create a custom error object.

#### Params
- **String|Error|Object** `error`: The error message or an existing `Error` instance or the `data` object where the `message` is the error message.
- **String|Object** `code`: The error code or the data object.
- **Object** `data`: The data object (its fields will be appended to the `Error` object).

#### Return
- **Error** The custom `Error` instance.

