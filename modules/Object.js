// 遍历对象
export function traverseObj(o) {
  for (let i in o) {
    if (!!o[i] && typeof o[i] === "object") {
      console.log(i, o[i]);
      traverse(o[i]);
    }
  }
}
// 树转为数组
export function treeToList(data) {
  let res = [];
  const dfs = (tree) => {
    tree.forEach((item) => {
      if (item.children) {
        dfs(item.children);
        delete item.children;
      }
      res.push(item);
    });
  };
  dfs(data);
  return res;
}

// 深度克隆

export function deepCopy(object) {
  if (!object || typeof object !== "object") return;
  let newObject = Array.isArray(object) ? [] : {};
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      newObject[key] =
        typeof object[key] === "object" ? deepCopy(object[key]) : object[key];
    }
  }
  return newObject;
}
