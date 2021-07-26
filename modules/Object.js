// 遍历对象
const traverse = function (o) {
  for (let i in o) {
    if (!!o[i] && typeof o[i] === "object") {
      console.log(i, o[i]);
      traverse(o[i]);
    }
  }
};

const treeToList = function (data) {
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
};

export { traverse, treeToList };
