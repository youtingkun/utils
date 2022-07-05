export const ua = navigator.userAgent.toLowerCase();

// 是否为微信浏览器
export const isWeiXin = () => {
  return /microMessenger/i.test(ua);
};

// 是否为移动端
export const isDeviceMobile = () => {
  return /android|webos|iphone|ipod|balckberry/i.test(ua);
};

// 是否为qq浏览器
export const isQQBrowser = () => {
  return !!ua.match(/mqqbrowser|qzone|qqbrowser|qbwebviewtype/i);
};

// 是否为ios系统
export const isIos = () => {
  const u = navigator.userAgent;
  if (u.indexOf("Android") > -1 || u.indexOf("Linux") > -1) {
    //安卓手机
    return false;
  } else if (u.indexOf("iPhone") > -1) {
    //苹果手机
    return true;
  } else if (u.indexOf("iPad") > -1) {
    //iPad
    return false;
  } else if (u.indexOf("Windows Phone") > -1) {
    //winphone手机
    return false;
  } else {
    return false;
  }
};

// 是否为pc端
export const isPC = () => {
  const userAgentInfo = navigator.userAgent;
  const Agents = [
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod",
  ];
  let flag = true;
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
};

// 是否为爬虫
export const isSpider = () => {
  return /adsbot|googlebot|bingbot|msnbot|yandexbot|baidubot|robot|careerbot|seznambot|bot|baiduspider|jikespider|symantecspider|scannerlwebcrawler|crawler|360spider|sosospider|sogou web sprider|sogou orion spider/.test(
    ua
  );
};
