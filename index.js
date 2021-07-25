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

//  Git commit之后，运行npm version patch,就可以添加新版本，并把记录添加到CHANGELOG.md里面。由于推送到github的网络不稳定，取消掉自动发布到npm，改为自己手动发布。
// 发布：npm login, npm publish
