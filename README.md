
[![err](http://i.imgur.com/yQF0uDO.png)](#)

# err

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/err.svg)](https://www.npmjs.com/package/err) [![Downloads](https://img.shields.io/npm/dt/err.svg)](https://www.npmjs.com/package/err)

> A tiny library to create custom errors in JavaScript.

## :cloud: Installation

```sh
$ npm i --save err
```


## :clipboard: Example



```js
const Err = require("err");

// Basic usage
let e1 = new Err("Some nasty stuff happened");
console.log(e1);
// => [Error: Some nasty stuff happened]

// Provide the error code
let e2 = new Err("Some nasty stuff happened", "NASTY_STUFF_HAPPENED");
console.log(e2);
// => {
//   [Error: Some nasty stuff happened]
//   code: 'NASTY_STUFF_HAPPENED'
// }

// Provide the error code and some data
let e3 = new Err("Some nasty stuff happened", "NASTY_STUFF_HAPPENED", {
    additional: "data"
});
console.log(e3);
// => {
//   [Error: Some nasty stuff happened]
//   additional: 'data'
// , code: 'NASTY_STUFF_HAPPENED'
// }

// Provide the error data (including the code as well)
let e4 = new Err("Some nasty stuff happened", {
    additional: "data"
  , code: "NASTY_STUFF_HAPPENED"
});
console.log(e4);
// => {
//   [Error: Some nasty stuff happened]
//   additional: 'data'
// , code: 'NASTY_STUFF_HAPPENED'
// }

// Wrap an existing error
let existingError = new Error("Some nasty stuff happened");
let e5 = new Err(existingError, {
    additional: "data"
  , code: "NASTY_STUFF_HAPPENED"
  , and: "some more data"
});
console.log(e5);
// => {
//   [Error: Some nasty stuff happened]
//   additional: 'data'
// , code: 'NASTY_STUFF_HAPPENED'
// , and: 'some more data'
// }

let e6 = new Err({
    message: "Something went really wrong!!!"
  , additional: "data"
  , code: "NASTY_STUFF_HAPPENED"
  , and: "some more data"
});
console.log(e6);
// => {
//   [Error: Something went really wrong!!!]
//   additional: 'data'
// , code: 'NASTY_STUFF_HAPPENED'
// , and: 'some more data'
// }

let e7 = new Err("Invalid option '<option>'.", {
    option: "test"
});
console.log(e7);
// { [Error: Invalid option 'test'.] option: 'test' }
```

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


## :memo: Documentation


### `Err(error, code, data)`
Create a custom error object.

#### Params
- **String|Error|Object** `error`: The error message or an existing `Error` instance or the `data` object where the `message` is the error message.
- **String|Object** `code`: The error code or the data object.
- **Object** `data`: The data object (its fields will be appended to the `Error` object).

#### Return
- **Error** The custom `Error` instance.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`check-params`](https://github.com/jamrizzi/query-params) (by Jam Risser)—Validates url, body, and query parameters for Express and sailsJS
 - [`emoji-logger`](https://github.com/IonicaBizau/emoji-logger#readme)—Logging library based on flat colors and Emoji.
 - [`engine-comp-crud-errors`](https://github.com/jillix/engine-comp-errors#readme) (by jillix)—Errors for the CRUD modules.
 - [`engine-composition-adapter`](https://github.com/jillix/engine-composition-adapter#readme) (by jillix)—The base composition adapter class.
 - [`find-file-in-dirs`](https://github.com/IonicaBizau/find-file-in-dirs#readme)—Find a file in different directories.
 - [`fs-repo-url`](https://github.com/IonicaBizau/fs-repo-url#readme)—Get the repository url from a path to a repo.
 - [`gh-fork-source`](https://github.com/IonicaBizau/gh-fork-source#readme)—Get the source repository of a GitHub fork.
 - [`git-package-json`](https://github.com/IonicaBizau/git-package-json#readme)—Get the package.json contents from git repositories.
 - [`image-parser`](https://github.com/IonicaBizau/image-parser#readme)—An image parser that works.
 - [`love-you`](https://github.com/IonicaBizau/love-you#readme)—"I love you" in different languages.
 - [`lwip2`](https://github.com/IonicaBizau/lwip2#readme)—A friendlier wrapper around the lwip library.
 - [`scrape-it`](https://github.com/IonicaBizau/scrape-it#readme)—A Node.js scraper for humans.
 - [`showalicense.com`](https://github.com/IonicaBizau/showalicense.com#readme)—A site to provide an easy way to show licenses and their human-readable explanations.
 - [`tilda`](https://github.com/IonicaBizau/tilda)—Tiny module for building command line tools.
 - [`validify`](https://github.com/IonicaBizau/validify#readme)—Validation made easy.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
