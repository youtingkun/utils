/*
 * @Date: 2021-09-01 20:21:21
 */
export async function imgCompress(imgFile, quality, maxSize) {
  return new Promise(async (resolve, reject) => {
    if (imgFile.size < maxSize * 1024 * 1024) {
      resolve(imgFile);
      return;
    }
    console.log("压缩前的大小：", imgFile.size);
    const type = imgFile.type;
    const dataURL = await file2DataURL(imgFile);
    const img = await dataURL2Image(dataURL);
    const compressedDataURL = await canvasCompress(img, quality, type);
    const compressedResult: any = await dataURL2Blob(compressedDataURL, type);
    compressedResult.fileName = imgFile.name;
    console.log("压缩后的大小：", compressedResult.size);
    resolve(compressedResult);
  });
}

function file2DataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function () {
      const dataURL = this.result;
      resolve(dataURL);
    };
    reader.readAsDataURL(file);
  });
}

function dataURL2Image(dataURL) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve(img);
    };
    img.src = dataURL;
  });
}

function canvasCompress(img, quality, type) {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    const { width, height } = img;
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    context.drawImage(img, 0, 0, width, height);
    const compressedDataURL = canvas.toDataURL(type, quality);
    resolve(compressedDataURL);
  });
}

function dataURL2Blob(dataURL, type) {
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
