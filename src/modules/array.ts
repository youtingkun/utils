interface item {
  id: number;
  parentId: number;
  name: string;
  children?: Array<item>;
}
interface mapObject {
  [key: number]: item;
}

// 把一个平面数组根据parentId转为一个树结构的数组
export function listToTree(data: Array<item>): Array<item> {
  // 空数组
  const result: Array<item> = [];
  /**
   * map对象的 键: 是每个id  值：对应的item
   * 1: {id: 1, parentId: 0, name: "body"}
   * 2: {id: 2, parentId: 1, name: "title"}
   * 3: {id: 3, parentId: 2, name: "div"}
   */
  const map: mapObject = {};
  data.forEach((item) => {
    map[item.id] = item;
  });

  data.forEach((item) => {
    // item.parentId 为0时 返回underfined
    const parent = map[item.parentId]; // 这里的赋值由于是地址的引用，所以对parent值进行操作，也会改变map的值
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
export function uniqueArray(arr: Array<any>): Array<any> {
  if (!Array.isArray(arr)) {
    throw new Error("The parameter must be an array");
  }
  if (arr.length == 1) {
    return arr;
  }
  const set = new Set(arr);
  return Array.from(set);
}
