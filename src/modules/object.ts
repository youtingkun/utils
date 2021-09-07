// 遍历对象
export function traverseObj(o) {
  for (let i in o) {
    if (!!o[i] && typeof o[i] === "object") {
      console.log(i, o[i]);
      traverseObj(o[i]);
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

/**
 * @description: object对象转化为formdata
 * @param {*} object
 * @return {*}
 */
export function objectToFormData(object) {
  const formData = new FormData();
  Object.keys(object).forEach((key) => {
    const value = object[key];
    if (Array.isArray(value)) {
      value.forEach((subValue, i) => formData.append(key + `[${i}]`, subValue));
    } else {
      formData.append(key, object[key]);
    }
  });
  return formData;
}
