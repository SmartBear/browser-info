import { expect } from 'chai';
import BrowserInfo from '../src/index.js';

// import data from './data.json' with { type: "json" };
// - returns "ExperimentalWarning: Importing JSON modules"
// so we use createRequire to import the json file as a workaround
import { createRequire } from "module";
const data = createRequire(import.meta.url)("./data.json");

describe('Test known combinations', () => {

  for (const entity of data) {

    it(`${entity.expected.name} ${entity.expected.version} @ ${entity.expected.os}`, () => {
      BrowserInfo.detect(entity.userAgent);
      expect(BrowserInfo.os).to.be.eq(entity.expected.os);
      expect(BrowserInfo.name).to.be.eq(entity.expected.name);
      expect(BrowserInfo.release).to.be.eq(entity.expected.release);
      expect(BrowserInfo.version).to.be.eq(entity.expected.version);
      expect(BrowserInfo.versionAsNumber).to.be.eq(entity.expected.versionAsNumber);
    });
  }
});
