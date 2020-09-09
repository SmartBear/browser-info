/* @smartbear/browser-info v1.0.1 | Copyright 2020 (c) SmartBear Software and contributors | https://github.com/SmartBear/browser-info/blob/master/LICENSE */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global['@smartbear/browser-info'] = factory());
}(this, (function () { 'use strict';

  const MAJOR_VERSION = /^\d+/;

  class Entity {
    constructor(name, pattern) {
      this.name = name;
      this.pattern = pattern;
    }

    match(str) {
      const m = str.match(this.pattern);

      if (m === null) {
        return null;
      }

      const info = {
        name: this.name,
        version: null,
        release: null
      };

      if (typeof m[1] !== 'undefined') {
        info.version = m[1].replace('_', '.');
        info.release = parseInt(info.version.match(MAJOR_VERSION)[0], 10);
      }

      return info;
    }

  }

  const browsers = [new Entity('Firefox', /Firefox\/([0-9.]+)/), new Entity('Opera', /OPR\/([0-9.]+)/), new Entity('Edge', /Edge\/([0-9.]+)/), new Entity('Maxthon', /Maxthon\/([0-9.]+)/), new Entity('Chrome', /Chrome\/([0-9.]+)/), new Entity('Safari', /Version\/([0-9.]+) Safari\//), new Entity('InternetExplorer', /MSIE ([0-9.]+)/)];

  const platforms = [new Entity('Windows', /Windows NT ([0-9.]+)/), new Entity('Windows Phone', /Windows Phone ([0-9.]+)/), new Entity('MacOS', /OS X ([0-9._]+)/), new Entity('iOS', /iPhone OS ([0-9_.]+)/), new Entity('iPadOS', /iPad.+?OS ([0-9_,]+)/), new Entity('ChromeOS', /CrOS [^ ]+ ([0-9.]+)/), new Entity('Android', /(?:Android|Adr) ([0-9.]+)/), new Entity('BlackBerry', /BlackBerry|BB10/), new Entity('webOS', /webOS\/([0-9.]+)/), new Entity('Linux', /Linux/)];

  const BrowserInfo = {
    os: '?',
    name: '?',
    release: '?',
    version: '?',

    detect(userAgent = null) {
      const ua = typeof userAgent === 'string' ? userAgent : window.navigator.userAgent;
      let found = false;

      for (const browser of browsers) {
        let match = browser.match(ua);

        if (match !== null) {
          this.name = match.name;
          this.release = match.release;
          this.version = match.version;
          found = true;
          break;
        }
      }

      for (const platform of platforms) {
        let match = platform.match(ua);

        if (match !== null) {
          this.os = match.name;
          break;
        }
      }

      return found;
    },

    toString() {
      return `${this.name} ${this.versionString}`;
    },

    get versionAsString() {
      return `${this.release}.${this.version}`;
    },

    get versionAsNumber() {
      return parseInt(this.versionString.replace(/\./g, ''));
    }

  };

  return BrowserInfo;

})));
//# sourceMappingURL=smartbear-browser-info.js.map
