[![err](http://i.imgur.com/yQF0uDO.png)](#)

# err [![Support this project][donate-now]][paypal-donations]

A tiny library to create custom errors in JavaScript.

## Installation

```sh
$ npm i err
```

## Example

```js
// Dependencies
const Err = require("err");

// Basic usage
var e1 = new Err("Some nasty stuff happened");
console.log(e1);
// => [Error: Some nasty stuff happened]

// Provide the error code
var e2 = new Err("Some nasty stuff happened", "NASTY_STUFF_HAPPENED");
console.log(e2);
// => {
//   [Error: Some nasty stuff happened]
//   code: 'NASTY_STUFF_HAPPENED'
// }

// Provide the error code and some data
var e3 = new Err("Some nasty stuff happened", "NASTY_STUFF_HAPPENED", {
    additional: "data"
});
console.log(e3);
// => {
//   [Error: Some nasty stuff happened]
//   additional: 'data'
// , code: 'NASTY_STUFF_HAPPENED'
// }

// Provide the error data (including the code as well)
var e3 = new Err("Some nasty stuff happened", {
    additional: "data"
  , code: "NASTY_STUFF_HAPPENED"
});
console.log(e3);
// => {
//   [Error: Some nasty stuff happened]
//   additional: 'data'
// , code: 'NASTY_STUFF_HAPPENED'
// }

// Wrap an existing error
var existingError = new Error("Some nasty stuff happened");
var e4 = new Err(existingError, {
    additional: "data"
  , code: "NASTY_STUFF_HAPPENED"
  , and: "some more data"
});
console.log(e4);
// => {
//   [Error: Some nasty stuff happened]
//   additional: 'data'
// , code: 'NASTY_STUFF_HAPPENED'
// , and: 'some more data'
// }
```

## Documentation

### `Err(error, code, data)`
Create a custom error object.

#### Params
- **String|Error** `error`: The error message or an existing `Error` instance.
- **String|Object** `code`: The error code or the data object.
- **Object** `data`: The data object (its fields will be appended to the `Error` object).

#### Return
- **Error** The custom `Error` instance.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`argon`](http://github.com/TrevorBurnham/argon) by Trevor Burnham

## License

MIT © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
