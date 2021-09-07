// 获取url的参数
export function getQueryString(): object {
  let params = {};
  const searchUrl =
    window.location.search.split("?")[1] ||
    window.location.hash.split("?")[1] ||
    "";
  const paramList = searchUrl.split("&");
  for (let i = 0; i < paramList.length; i++) {
    let q = paramList[i].split("=");
    if (q.length === 2) {
      params[decodeURIComponent(q[0])] = decodeURIComponent(q[1]);
    }
  }
  return params;
}
