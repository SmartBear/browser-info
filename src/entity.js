class Entity {
  constructor(name, pattern) {
    this.name = name;
    this.pattern = pattern;
  }

  match(str) {
    const majorVersion = /^\d+/;

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
      info.release = parseInt(info.version.match(majorVersion)[0], 10);
    }
    return info;
  }
}

export default Entity;
