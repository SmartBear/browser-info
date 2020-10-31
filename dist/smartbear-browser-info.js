/* @smartbear/browser-info v1.4.0 | Copyright 2020 (c) SmartBear Software and contributors | https://github.com/SmartBear/browser-info/blob/master/LICENSE */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self)["@smartbear/browser-info"]=n()}(this,(function(){"use strict";var e=/^\d+/;function n(e,n){this.name=e,this.pattern=n}n.prototype.match=function(n){var r=n.match(this.pattern);if(null===r)return null;var i={name:this.name,version:null,release:null};return void 0!==r[1]&&(i.version=r[1].replace("_","."),i.release=parseInt(i.version.match(e)[0],10)),i};var r=[new n("Firefox",/Firefox\/([0-9.]+)/),new n("Edge",/Edg[AeiOS]{0,3}\/([0-9.]+)/),new n("Opera",/OPR\/([0-9.]+)/),new n("SamsungInternet",/SamsungBrowser\/([0-9.]+)/),new n("UCBrowser",/UCBrowser\/([0-9.]+)/),new n("Chrome",/Chrome\/([0-9.]+)/),new n("Safari",/Version\/([0-9.]+)(?: .*)? Safari\//),new n("InternetExplorer",/(?:MSIE |IEMobile\/)([0-9.]+)/)],i=[new n("Windows",/Windows NT ([0-9.]+)/),new n("Windows Phone",/Windows Phone ([0-9.]+)/),new n("MacOS",/OS X ([0-9._]+)/),new n("iOS",/iPhone OS ([0-9_.]+)/),new n("iPadOS",/iPad.+?OS ([0-9_,]+)/),new n("ChromeOS",/CrOS [^ ]+ ([0-9.]+)/),new n("Android",/(?:Android|Adr) ([0-9.]+)/),new n("BlackBerry",/BlackBerry|BB10/),new n("webOS",/webOS\/([0-9.]+)/),new n("Linux",/Linux/)],t={os:"?",name:"?",release:"?",version:"?",detect:function(e=null){var n,t,o="string"==typeof e?e:window.navigator.userAgent,s=!1;for(t=0;t<r.length;t++)if(null!==(n=r[t].match(o))){this.name=n.name,this.release=n.release,this.version=n.version,s=!0;break}for(t=0;t<i.length;t++)if(null!==(n=i[t].match(o))){this.os=n.name;break}return s},toString:function(){return this.name+" "+this.version}};return Object.defineProperty(t,"versionAsNumber",{get:function(){return parseInt(this.version.replace(/\./g,""))}}),t}));
//# sourceMappingURL=smartbear-browser-info.js.map
