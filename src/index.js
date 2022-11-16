import {macOs, platforms} from "./platforms";
import {browsers} from "./browsers";


let BrowserInfo = {
    os: '?',
    name: '?',
    release: '?',
    version: '?',

    detect: function(userAgent) {
        let ua = typeof userAgent === 'string' ? userAgent : window.navigator.userAgent,
            found = false,
            match,
            i;

        for (i = 0; i < browsers.length; i++) {
            match = browsers[i].match(ua);

            if (match !== null) {
                this.name = match.name;
                this.release = match.release;
                this.version = match.version;
                found = true;
                break;
            }
        }

        for (i = 0; i < platforms.length; i++) {
            match = platforms[i].match(ua);

            if (match !== null) {
                this.os = match.name;
                break;
            }
        }

        return found;
    },

    toString: function() {
        return this.name + ' ' + this.version;
    },

    isMac: function() {
      return this.os === macOs.name;
    },

    get versionAsNumber() {
      return parseInt(this.version.replace(/\./g, ''));
    }
};

export default BrowserInfo;
