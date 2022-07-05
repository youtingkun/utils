// 图片压缩
export async function imgCompress(
  imgFile: any,
  quality: number,
  maxSize: number
) {
  // 如果小于maxSize不用压缩
  if (imgFile.size < maxSize * 1024 * 1024) {
    return imgFile;
  }
  console.log("压缩前的大小：", imgFile.size);
  const type = imgFile.type;
  const dataURL = await file2DataURL(imgFile);
  const img = await dataURL2Image(dataURL);
  const compressedDataURL = await canvasCompress(img, quality, type);
  const compressedResult: any = await dataURL2Blob(compressedDataURL, type);
  compressedResult.fileName = imgFile.name;
  console.log("压缩后的大小：", compressedResult.size);
  return compressedResult;
}

function file2DataURL(file: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function () {
      const dataURL = this.result;
      resolve(dataURL);
    };
    reader.readAsDataURL(file);
  });
}

function dataURL2Image(dataURL: any) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve(img);
    };
    img.src = dataURL;
  });
}

function canvasCompress(img: any, quality: number, type: string) {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    const { width, height } = img;
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    if (context) {
      context.drawImage(img, 0, 0, width, height);
      const compressedDataURL = canvas.toDataURL(type, quality);
      resolve(compressedDataURL);
    }
  });
}

function dataURL2Blob(dataURL: any, type: string) {
  return new Promise((resolve, reject) => {
    const text = window.atob(dataURL.split(",")[1]);
    const buffer = new ArrayBuffer(text.length);
    const ubuffer = new Uint8Array(buffer);
    for (let i = 0; i < text.length; i++) {
      ubuffer[i] = text.charCodeAt(i);
    }
    const blob = new window.Blob([buffer], { type });
    resolve(blob);
  });
}

// 生成随机的16进制颜色
export function randomHex() {
  return `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0")}`;
}
