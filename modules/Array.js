// 把一个平面数组根据parentId转为一个树结构的数组

export function arrayToObjectTree(data) {
  // 空数组
  let result = [];
  // 判断不是数组  直接返回
  if (!Array.isArray(data)) {
    return result;
  }
  // 遍历  删除  children 属性  做初始化操作
  data.forEach((item) => {
    delete item.children;
  });
  //  空对象
  let map = {};
  data.forEach((item) => {
    map[item.id] = item;
  });

  /**
   * map对象的 键: 是每个id  值：对应的item
   * 1: {id: 1, parentId: 0, name: "body"}
   * 2: {id: 2, parentId: 1, name: "title"}
   * 3: {id: 3, parentId: 2, name: "div"}
   */
  data.forEach((item) => {
    // item.parentId 为0时 返回underfined
    let parent = map[item.parentId];
    if (parent) {
      (parent.children || (parent.children = [])).push(item);
    } else {
      // 这里push的item是parentId为0的数据
      result.push(item);
    }
  });
  return result;
}

export function listToTree(data) {
  let temp = {};
  let treeData = [];
  for (let i = 0; i < data.length; i++) {
    temp[data[i].id] = data[i];
  }
  for (let i in temp) {
    if (+temp[i].parentId != 0) {
      if (!temp[temp[i].parentId].children) {
        temp[temp[i].parentId].children = [];
      }
      temp[temp[i].parentId].children.push(temp[i]);
    } else {
      treeData.push(temp[i]);
    }
  }
  return treeData;
}
