import { Entity } from './Entity';

// platform:
// /\([^)]*?([A-Z][a-z][A-Za-z]+)([A-Za-z0-9_ ]* )([0-9._]+)[;) ]/  1 - system, 2 - architektura, 3 - wersja
// /\([^)]*?[A-Z][a-z][A-Za-z]+[A-Za-z0-9_ ]* [0-9._]+[;)]|\([^)]*?[A-Z][a-z][A-Za-z0-9 !_]+/

const platforms = [
  new Entity('Windows', /Windows NT ([0-9.]+)/),
  new Entity('Windows Phone', /Windows Phone ([0-9.]+)/),
  new Entity('MacOS', /OS X ([0-9._]+)/),
  new Entity('iOS', /iPhone OS ([0-9_.]+)/),
  new Entity('iPadOS', /iPad.+?OS ([0-9_,]+)/),
  new Entity('CrOS', /CrOS [^ ]+ ([0-9.]+)/),
  new Entity('Android', /(?:Android|Adr) ([0-9.]+)/),
  new Entity('BlackBerry', /BlackBerry|BB10/),
  new Entity('webOS', /webOS\/([0-9.]+)/),
  new Entity('Linux', /Linux/)
];

export { platforms };
