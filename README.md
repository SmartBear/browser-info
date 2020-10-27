# Browser Info

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/SmartBear/browser-info/Test?label=lint%20%2B%20test)
[![Current Release](https://img.shields.io/github/release/SmartBear/browser-info.svg)](releases)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE.md)

Tiny developer-friendly JS library that provides information about host browser and OS.
A goal of this library **isn't** creation of the all-knowing and heavy database. Rather focus is to keep is small and light.
Eg if you want to focus on major browsers and platforms.

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

In `dist` directory there is a file with `.embed` sufix. Importing this library into your UI will cause calling
`detect()` method and assigning `BrowserInfo` to `window.navigator.browserInfo` - this way it is accessible globally.

```js
import '@smartbear/browser-info/dist/smartbear-browser-info.embed.min'

console.log(window.navigator.browserInfo);
```

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
