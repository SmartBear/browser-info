import Entity from "./entity";

const windows = new Entity('Windows', /Windows NT ([0-9.]+)/);
const windowsPhone = new Entity('Windows Phone', /Windows Phone ([0-9.]+)/);
const macOs = new Entity('MacOS', /OS X ([0-9._]+)/);
const iOS = new Entity('iOS', /iPhone OS ([0-9_.]+)/);
const iPadOS = new Entity('iPadOS', /iPad.+?OS ([0-9_,]+)/);
const chromeOS = new Entity('ChromeOS', /CrOS [^ ]+ ([0-9.]+)/);
const android = new Entity('Android', /(?:Android|Adr) ([0-9.]+)/);
const blackBerry = new Entity('BlackBerry', /BlackBerry|BB10/);
const webOS = new Entity('webOS', /webOS\/([0-9.]+)/);
const linux = new Entity('Linux', /Linux/);

const platforms = [ windows, windowsPhone, macOs, iOS, iPadOS, chromeOS, android, blackBerry, webOS, linux];

export  {windows, windowsPhone, macOs, iOS, iPadOS, chromeOS, android, blackBerry,webOS, linux, platforms};
