import { expect } from 'chai';
import BrowserInfo from '../src/index.js';
import data from './data.json' with { type: 'json' };

describe('BrowserInfo helpers', () => {
  it('formats the detected browser and version', () => {
    BrowserInfo.detect(data[0].userAgent);
    expect(BrowserInfo.toString()).to.equal('Chrome 42.0');
  });

  it('identifies MacOS but not other platforms', () => {
    BrowserInfo.detect(data.find(entity => entity.expected.os === 'MacOS').userAgent);
    expect(BrowserInfo.isMac()).to.equal(true);
    BrowserInfo.detect(data[0].userAgent);
    expect(BrowserInfo.isMac()).to.equal(false);
  });

  it('returns false when no browser matches', () => {
    expect(BrowserInfo.detect('Unknown')).to.equal(false);
  });
});

describe('Embed entry point', () => {
  let originalWindow;

  before(() => {
    originalWindow = Object.getOwnPropertyDescriptor(globalThis, 'window');
    globalThis.window = { navigator: { userAgent: data[0].userAgent } };
  });

  after(() => {
    if (originalWindow) {
      Object.defineProperty(globalThis, 'window', originalWindow);
    } else {
      delete globalThis.window;
    }
  });

  it('auto-detects and exposes the same BrowserInfo instance', async () => {
    const { default: embedded } = await import('../src/embed.js');
    expect(embedded).to.equal(BrowserInfo);
    expect(window.navigator.browserInfo).to.equal(embedded);
    expect(embedded.name).to.equal('Chrome');
    expect(embedded.version).to.equal('42.0');
    expect(embedded.os).to.equal('Linux');
  });
});
