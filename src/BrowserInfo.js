import { browsers } from './known-browsers';
import { platforms } from './known-platforms';

const BrowserInfo = {
  os: '?',
  name: '?',
  release: '?',
  version: '?',

  detect (userAgent = null) {
    const ua = typeof userAgent === 'string' ? userAgent : window.navigator.userAgent;

    let found = false;
    for(const browser of browsers) {
      let match = browser.match(ua);

      if (match !== null) {
        this.name = match.name;
        this.release = match.release;
        this.version = match.version;
        found = true;
        break;
      }
    }

    for(const platform of platforms) {
      let match = platform.match(ua);

      if (match !== null) {
        this.os = match.name;
        break;
      }
    }

    return found;
  },

  toString () {
    return `${this.name} ${this.versionString}`;
  },

  get versionAsString () {
    return `${this.release}.${this.version}`;
  },

  get versionAsNumber() {
    return parseInt(this.versionString.replace(/\./g, ''));
  }
};

export { BrowserInfo };
