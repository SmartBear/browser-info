import BrowserInfo from './index';

window.navigator.browserInfo = BrowserInfo;
BrowserInfo.detect();

export default BrowserInfo;
