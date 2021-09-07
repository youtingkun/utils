// 动态的引入js脚本
export const injectScript = (src) => {
  const s = document.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  s.src = src;
  const t = document.getElementsByTagName("script")[0];
  t.parentNode.insertBefore(s, t);
};

// 判断元素是否包含某个class
export const hasClass = (el, className) => {
  let reg = new RegExp("(^|\\s)" + className + "(\\s|$)");
  return reg.test(el.className);
};

// 给元素添加class
export const addClass = (el, className) => {
  if (hasClass(el, className)) {
    return;
  }
  let newClass = el.className.split(" ");
  newClass.push(className);
  el.className = newClass.join(" ");
};

// 移除元素的某个class
export const removeClass = (el, className) => {
  if (!hasClass(el, className)) {
    return;
  }
  let reg = new RegExp("(^|\\s)" + className + "(\\s|$)", "g");
  el.className = el.className.replace(reg, " ");
};

// 判断元素是否在视窗范围内
export const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

// 获取滚动的坐标
export const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop,
});

// 滚动到顶部
export const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

// 洗牌算法
export const shuffle = (arr) => {
  var result = [],
    random;
  while (arr.length > 0) {
    random = Math.floor(Math.random() * arr.length);
    result.push(arr[random]);
    arr.splice(random, 1);
  }
  return result;
};

// 复制内容到剪贴板
export function copyToBoard(value) {
  const element = document.createElement("textarea");
  document.body.appendChild(element);
  element.value = value;
  element.select();
  if (document.execCommand("copy")) {
    document.execCommand("copy");
    document.body.removeChild(element);
    return true;
  }
  document.body.removeChild(element);
  return false;
}

/**
 * @description:
 * @param {*} length 生成字符串的长度
 * @param {*} chars
 * @return {*}
 */
export function generateUUID(length, chars) {
  chars =
    chars || "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  length = length || 8;
  let result = "";
  for (let i = length; i > 0; --i) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}
