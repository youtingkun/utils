export { getQueryString } from "./modules/url";
export { listToTree } from "./modules/array";
export { traverseObj, treeToList, deepCopy } from "./modules/object";
export {
  isString,
  isNumber,
  isBoolean,
  isFunction,
  isNull,
  isUndefined,
  isObject,
  isArray,
  isDate,
  isRegExp,
  isError,
  isSymbol,
  isPromise,
  isSet,
} from "./modules/type-rule";
export { scrollToTop } from "./modules/windows";
export {
  countDown,
  getRecentWeekDays,
  getRecentDayHours,
  getRecentMonthDays,
  getRecentYearMonths,
} from "./modules/time";
export { injectScript } from "./modules/utils";
export {
  isEmail,
  isMobile,
  isPhone,
  isURL,
  isCardID,
  isInteger,
  isPositiveInteger,
  isNegativeInteger,
  isPositive,
} from "./modules/regexp-rule";

//  npm run build 先在本地build好打包之后的文件
//  Git commit之后，运行npm version v1.0.0,就可以添加新版本，并把记录添加到CHANGELOG.md里面,并推送到github，并自动发布到npm。
// 如果推送到github时网络超时，重新运行 npm run postversion
