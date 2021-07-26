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
