export { getQueryString } from "./modules/url";
export { arrayToObjectTree } from "./modules/Array";
import test from "./modules/test.js";
import RegExpRule from "./modules/RegExpRule";
import Object from "./modules/Object";

export default {
  test,
  RegExpRule,
  Object,
};

//  Git commit之后，运行npm version patch,就可以添加新版本，并把记录添加到CHANGELOG.md里面。并推送到远程仓库并发布。比如npm version v1.0.0
// 如果不需要发布，和普通操作一样，commit之后直接push就行
