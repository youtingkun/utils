// 把一个平面数组根据parentId转为一个树结构的数组
export function listToTree(data) {
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
  /**
   * map对象的 键: 是每个id  值：对应的item
   * 1: {id: 1, parentId: 0, name: "body"}
   * 2: {id: 2, parentId: 1, name: "title"}
   * 3: {id: 3, parentId: 2, name: "div"}
   */
  let map = {};
  data.forEach((item) => {
    map[item.id] = item;
  });

  data.forEach((item) => {
    // item.parentId 为0时 返回underfined
    let parent = map[item.parentId]; // 这里的赋值由于是地址的引用，所以对parent值进行操作，也会改变map的值
    if (parent) {
      (parent.children || (parent.children = [])).push(item);
    } else {
      // 这里push的item是parentId为0的数据
      result.push(item);
    }
  });
  return result;
}

/**
 * @description: 数组去重
 * @param {*} arr
 * @return {*}
 */
export function uniqueArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("The first parameter must be an array");
  }
  if (arr.length == 1) {
    return arr;
  }
  let set = new Set(arr);
  return Array.from(set);
}
