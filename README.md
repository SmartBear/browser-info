# Browser Info

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/SmartBear/browser-info/Test?label=lint%20%2B%20test)
[![Current Release](https://img.shields.io/github/release/SmartBear/browser-info.svg)](releases)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)

Tiny (~2KB) vanilla JS developers-friendly library that provides information about host browser and OS.
A goal of this library **isn't** creation of the all-knowing and heavy database. Rather focus is to keep is small and light.
Eg if you want to focus on major browsers and platforms.

Demo: https://smartbear.github.io/browser-info/

## Supported Browsers and OS

### Browsers

- ✔️ Chrome
- ✔️ Firefox
- ✔️ Edge
- ✔️ Opera
- ✔️ SamsungInternet
- ✔️ UCBrowser
- ✔️ Safari
- ✔️ InternetExplorer

### OS

- ✔️ Windows
- ✔️ Windows Phone
- ✔️ MacOS
- ✔️ iOS
- ✔️ iPadOS
- ✔️ ChromeOS
- ✔️ Android
- ✔️ BlackBerry
- ✔️ webOS
- ✔️ Linux

## Usage

```js
import BrowserInfo from '@smartbear/browser-info'

BrowserInfo.detect(); // if param not given, then it will use navigator.userAgent

console.log(BrowserInfo.name); // print detected browser's name
console.log(BrowserInfo.release); // print detected browser's major release number
console.log(BrowserInfo.version); // print detected browser's version string
console.log(BrowserInfo.os); // print detected OS name
```

### Auto Detect and Embed

In `dist` directory there is a file with `.embed` suffix. Importing this library into your UI will cause calling
`detect()` method and assigning `BrowserInfo` to `window.navigator.browserInfo` - this way it is accessible globally.

```js
import '@smartbear/browser-info/embed'

console.log(window.navigator.browserInfo);
```

The package provides ESM imports and CommonJS `require()` entry points.
For browser script tags, use the UMD embed bundle:

```html
<script src="https://unpkg.com/@smartbear/browser-info/dist/smartbear-browser-info.embed.js"></script>
```

## Development

Use Node.js 26.13.0 LTS, pinned in `.nvmrc` and used by CI:

```sh
nvm install
nvm use
npm ci
npm run lint
npm test
npm run build
npm run test:package
npm run coverage
```

Coverage is printed in the terminal, with an LCOV report in `coverage/lcov.info`.
All source files are included in coverage. Packaging and publishing automatically
rebuild and smoke-test the bundles; only `dist`, the README, license, and package
metadata are published.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
