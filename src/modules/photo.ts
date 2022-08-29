/**
 * 压缩图片
 * @param imgFile 被压缩的img文件
 * @param quality 图片压缩质量
 * @param maxSize 如果小于maxSize不用压缩,单位M
 */
export async function imgCompress(imgFile: any, quality = 0.7, maxSize = 0.1) {
  // 如果小于maxSize不用压缩
  if (imgFile.size < maxSize * 1024 * 1024) {
    return imgFile;
  }
  const type = imgFile.type;
  const name = imgFile.name;
  console.log("压缩前的大小：", imgFile.size);
  const imgObj = await readImg(imgFile);
  const res: any = await compressImg(imgObj, quality, type);
  res.name = name;
  console.log("压缩后的大小：", res.size);
  return res;
}
function readImg(file: any) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();
    reader.onload = function (e: any) {
      img.src = e.target.result;
    };
    reader.onerror = function (e) {
      reject(e);
    };
    reader.readAsDataURL(file);
    img.onload = function () {
      resolve(img);
    };
    img.onerror = function (e) {
      reject(e);
    };
  });
}
function compressImg(img: any, quality: number, type: string) {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const { width, height } = img;
    canvas.width = width;
    canvas.height = height;
    context?.clearRect(0, 0, width, width);
    // 图片绘制
    context?.drawImage(img, 0, 0, width, width);
    canvas.toBlob(
      function (blob) {
        resolve(blob);
      },
      type,
      quality
    );
  });
}

// 生成随机的16进制颜色
export function randomHex() {
  return `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0")}`;
}
