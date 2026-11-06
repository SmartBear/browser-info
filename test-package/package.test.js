import { expect } from 'chai';
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import BrowserInfo from '@smartbear/browser-info';
import data from '../test/data.json' with { type: 'json' };

const require = createRequire(import.meta.url);

describe('Built package', () => {
  for (const [format, library] of [
    ['ESM', BrowserInfo],
    ['CommonJS', require('@smartbear/browser-info')]
  ]) {
    it(`detects all fixtures through the ${format} entry point`, () => {
      for (const entity of data) {
        expect(library.detect(entity.userAgent)).to.equal(true);
        for (const [key, value] of Object.entries(entity.expected)) {
          expect(library[key]).to.equal(value);
        }
      }
    });
  }

  for (const suffix of ['', '.embed']) {
    it(`loads the ${suffix || 'regular'} UMD bundle as a browser script`, () => {
      const context = { window: { navigator: { userAgent: data[0].userAgent } } };
      const source = readFileSync(new URL(`../dist/smartbear-browser-info${suffix}.js`, import.meta.url), 'utf8');
      runInNewContext(source, context);
      const library = context['@smartbear/browser-info'];
      if (suffix) {
        expect(context.window.navigator.browserInfo).to.equal(library);
      } else {
        library.detect(data[0].userAgent);
      }
      expect(library.name).to.equal('Chrome');
      expect(library.version).to.equal('42.0');
    });
  }

  for (const format of ['ESM', 'CommonJS']) {
    it(`auto-detects through the ${format} embed entry point`, async () => {
      const originalWindow = Object.getOwnPropertyDescriptor(globalThis, 'window');
      globalThis.window = { navigator: { userAgent: data[0].userAgent } };
      try {
        const library = format === 'ESM'
          ? (await import('@smartbear/browser-info/embed')).default
          : require('@smartbear/browser-info/embed');
        expect(window.navigator.browserInfo).to.equal(library);
        expect(library.name).to.equal('Chrome');
        expect(library.version).to.equal('42.0');
      } finally {
        if (originalWindow) {
          Object.defineProperty(globalThis, 'window', originalWindow);
        } else {
          delete globalThis.window;
        }
      }
    });
  }
});
