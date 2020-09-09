# Browser Info

[![Current Release](https://img.shields.io/github/release/SmartBear/browser-info.svg)](releases)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE.md)

Tiny developer-friendly JS library that provides information about host browser and OS.
A goal of this library **isn't** creation of the all-knowing and heavy database. Rather focus is to keep is small and light.
Eg if you want to focus on major browsers and platforms.

## Usage

```js
import BrowserInfo from '@smartbear/browser-info'

BrowserInfo.detect(); // if param not given, then it will use navigator.userAgent

console.log(BrowserInfo.name); // print detected browser's name
console.log(BrowserInfo.release); // print detected browser's major release number
console.log(BrowserInfo.version); // print detected browser's version string
console.log(BrowserInfo.os); // print detected OS name
```

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
