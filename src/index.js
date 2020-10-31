var MAJOR_VERSION = /^\d+/;

function Entity(name, pattern) {
    this.name = name;
    this.pattern = pattern;
}

Entity.prototype.match = function match(str) {
    var m = str.match(this.pattern);
    if (m === null) {
      return null;
    }

    var info = {
      name: this.name,
      version: null,
      release: null
    };

    if (typeof m[1] !== 'undefined') {
      info.version = m[1].replace('_', '.');
      info.release = parseInt(info.version.match(MAJOR_VERSION)[0], 10);
    }

    return info;
};

var browsers = [
    new Entity('Firefox', /Firefox\/([0-9.]+)/),
    new Entity('Edge', /Edg[AeiOS]{0,3}\/([0-9.]+)/),
    new Entity('Opera', /OPR\/([0-9.]+)/),
    new Entity('SamsungInternet', /SamsungBrowser\/([0-9.]+)/),
    new Entity('UCBrowser', /UCBrowser\/([0-9.]+)/),
    new Entity('Chrome', /Chrome\/([0-9.]+)/),
    new Entity('Safari', /Version\/([0-9.]+)(?: .*)? Safari\//),
    new Entity('InternetExplorer', /(?:MSIE |IEMobile\/|Trident\/.*rv:)([0-9.]+)/)
];

var platforms = [
    new Entity('Windows', /Windows NT ([0-9.]+)/),
    new Entity('Windows Phone', /Windows Phone ([0-9.]+)/),
    new Entity('MacOS', /OS X ([0-9._]+)/),
    new Entity('iOS', /iPhone OS ([0-9_.]+)/),
    new Entity('iPadOS', /iPad.+?OS ([0-9_,]+)/),
    new Entity('ChromeOS', /CrOS [^ ]+ ([0-9.]+)/),
    new Entity('Android', /(?:Android|Adr) ([0-9.]+)/),
    new Entity('BlackBerry', /BlackBerry|BB10/),
    new Entity('webOS', /webOS\/([0-9.]+)/),
    new Entity('Linux', /Linux/)
];

var BrowserInfo = {
    os: '?',
    name: '?',
    release: '?',
    version: '?',

    detect: function(userAgent) {
        var ua = typeof userAgent === 'string' ? userAgent : window.navigator.userAgent,
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
    }
};

Object.defineProperty(BrowserInfo, 'versionAsNumber', {
    get: function() {
        return parseInt(this.version.replace(/\./g, ''));
    }
});

export default BrowserInfo;
