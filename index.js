export { getQueryString } from "./modules/url";
export { listToTree } from "./modules/Array";
export { traverseObj, treeToList } from "./modules/Object";
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
} from "./modules/typeRule";

//  Git commit之后，运行npm version v1.0.0,就可以添加新版本，并把记录添加到CHANGELOG.md里面,并推送到github，并自动发布到npm。
// 如果推送到github时网络超时，重新运行 npm run postversion
