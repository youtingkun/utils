/*
与时间相关的方法
 */

export const countDown = function (firstTime, lastTime) {
  const offsetTime = lastTime - firstTime;
  const day = parseInt(offsetTime / (60 * 60 * 24 * 1000));
  const hour = parseInt((offsetTime / (60 * 60 * 1000)) % 24);
  const minute = parseInt((offsetTime / (60 * 1000)) % 60);
  const second = parseInt((offsetTime / 1000) % 60);
  return {
    day,
    hour,
    minute,
    second,
  };
};
