export { getQueryString } from "./modules/url";
export { arrayToObjectTree } from "./modules/Array";
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

//  Git commit之后，运行npm version patch,就可以添加新版本，并把记录添加到CHANGELOG.md里面。并推送到远程仓库并发布。比如npm version v1.0.0
// 如果不需要发布，和普通操作一样，commit之后直接push就行
