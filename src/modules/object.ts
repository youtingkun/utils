// 树转为数组
export function treeToList(data: any) {
  const res: Array<any> = [];
  const dfs = (data: any) => {
    data.forEach((item: any) => {
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

//object对象转化为formdata
export function objectToFormData(object: any) {
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
