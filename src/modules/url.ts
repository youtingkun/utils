// 获取url的参数
export function getQueryString(): object {
  const params: any = {};
  const searchUrl =
    window.location.search.split("?")[1] ||
    window.location.hash.split("?")[1] ||
    "";
  const paramList = searchUrl.split("&");
  for (let i = 0; i < paramList.length; i++) {
    const q = paramList[i].split("=");
    if (q.length === 2) {
      params[decodeURIComponent(q[0])] = decodeURIComponent(q[1]);
    }
  }
  return params;
}

export function parseParam(url: string) {
  const paramsStr = url.split("?")[1]; // 将 ? 后面的字符串取出来
  const paramsArr = paramsStr.split("&"); // 将字符串以 & 分割后存到数组中
  const paramsObj: any = {};
  // 将 params 存到对象中
  paramsArr.forEach((param) => {
    if (/=/.test(param)) {
      // 处理有 value 的参数
      const key = param.split("=")[0]; // 取出 key
      const val = decodeURIComponent(param.split("=")[1]); // 取出 value
      if (Object.prototype.hasOwnProperty.call(paramsObj, key)) {
        // 如果对象有 key，则添加一个值
        paramsObj[key] = ([] as string[]).concat(paramsObj[key], val);
      } else {
        // 如果对象没有这个 key，创建 key 并设置值
        paramsObj[key] = val;
      }
    } else {
      // 处理没有 value 的参数
      paramsObj[param] = true;
    }
  });

  return paramsObj;
}
