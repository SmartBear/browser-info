import BrowserInfo from './index.js';

window.navigator.browserInfo = BrowserInfo;
BrowserInfo.detect();

export default BrowserInfo;
