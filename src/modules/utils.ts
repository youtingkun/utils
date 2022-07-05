declare const window: any;
// 动态的引入js脚本
export const injectScript = (src: any) => {
  const s = document.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  s.src = src;
  const t = document.getElementsByTagName("script")[0];
  if (t.parentNode) {
    t.parentNode.insertBefore(s, t);
  }
};

// 判断元素是否包含某个class
export const hasClass = (el: any, className: any) => {
  const reg = new RegExp("(^|\\s)" + className + "(\\s|$)");
  return reg.test(el.className);
};

// 给元素添加class
export const addClass = (el: any, className: any) => {
  if (hasClass(el, className)) {
    return;
  }
  const newClass = el.className.split(" ");
  newClass.push(className);
  el.className = newClass.join(" ");
};

// 移除元素的某个class
export const removeClass = (el: any, className: any) => {
  if (!hasClass(el, className)) {
    return;
  }
  const reg = new RegExp("(^|\\s)" + className + "(\\s|$)", "g");
  el.className = el.className.replace(reg, " ");
};

// 判断元素是否在视窗范围内
export const elementIsVisibleInViewport = (
  el: any,
  partiallyVisible = false
) => {
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

// 滚动到某个元素的顶部
const scrollToElementTop = (element: any) => {
  element.scrollIntoView({ behavior: "smooth", block: "start" });
};
// 滚动到某个元素的底部
const scrollToElementBottom = (element: any) => {
  element.scrollIntoView({ behavior: "smooth", block: "end" });
};

// 洗牌算法
export const shuffle = (arr: any) => {
  const result = [];
  let random: any;
  while (arr.length > 0) {
    random = Math.floor(Math.random() * arr.length);
    result.push(arr[random]);
    arr.splice(random, 1);
  }
  return result;
};

// 复制内容到剪贴板
const copyToClipboard = (text: any) => {
  navigator.clipboard?.writeText && navigator.clipboard.writeText(text);
};

/**
 * @description:
 * @param {*} length 生成字符串的长度
 * @param {*} chars
 * @return {*}
 */
export function generateUUID(length: any, chars: any) {
  chars =
    chars || "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  length = length || 8;
  let result = "";
  for (let i = length; i > 0; --i) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}
