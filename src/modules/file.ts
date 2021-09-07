// 获取文件后缀名
export function getExt(filename) {
  if (typeof filename == "string") {
    return filename.split(".").pop().toLowerCase();
  } else {
    throw new Error("filename must be a string type");
  }
}

// 直接给a标签设置href链接会打开一个新的下载窗口，用户点击保存之后会关闭。
// 根据url下载，这种方式就不会打开一个新的下载窗口，体验好一点。
export function downloadByUrl(url) {
  let fileName = url.substring(url.lastIndexOf("/") + 1, url.length);
  let link = document.createElement("a");
  link.style.display = "none";
  link.download = fileName;
  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// 根据文件数据和文件名下载
export function downloadByData(data, fileName) {
  const blob = new Blob([data], {
    type: data.type,
  });
  const name = `${fileName}`;
  const a = document.createElement("a");
  a.download = name;
  a.style.display = "none";
  a.href = URL.createObjectURL(blob);
  document.body.appendChild(a);
  a.click();
  URL.revokeObjectURL(a.href);
  document.body.removeChild(a);
}
