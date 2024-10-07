import Entity from "./entity.js";

const firefox = new Entity('Firefox', /Firefox\/([0-9.]+)/);
const edge = new Entity('Edge', /Edg[AeiOS]{0,3}\/([0-9.]+)/);
const opera = new Entity('Opera', /OPR\/([0-9.]+)/);
const samsungInternet = new Entity('SamsungInternet', /SamsungBrowser\/([0-9.]+)/);
const ucBrowser = new Entity('UCBrowser', /UCBrowser\/([0-9.]+)/);
const chrome = new Entity('Chrome', /Chrome\/([0-9.]+)/);
const safari = new Entity('Safari', /Version\/([0-9.]+)(?: .*)? Safari\//);
const internetExplorer = new Entity('InternetExplorer', /(?:MSIE |IEMobile\/|Trident\/.*rv:)([0-9.]+)/);

const browsers = [ firefox, edge, opera, samsungInternet, ucBrowser,samsungInternet, ucBrowser, chrome, safari, internetExplorer];

export {firefox, edge, opera, samsungInternet, ucBrowser, chrome, safari, internetExplorer, browsers};
