const chai = require('chai');
const expect = chai.expect;
const BrowserInfo = require('../dist/smartbear-browser-info');

describe('Test known combinations', () => {

    const data = require('./data.json');
    for (const entity of data) {

        it(`${entity.expected.name} @ ${entity.expected.os}`, () => {
            BrowserInfo.detect(entity.userAgent);
            expect(BrowserInfo.os).to.be.eq(entity.expected.os);
            expect(BrowserInfo.name).to.be.eq(entity.expected.name);
            expect(BrowserInfo.release).to.be.eq(entity.expected.release);
            expect(BrowserInfo.version).to.be.eq(entity.expected.version);
            expect(BrowserInfo.versionAsNumber).to.be.eq(entity.expected.versionAsNumber);
        });

    }

});
