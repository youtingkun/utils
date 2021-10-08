/*
与时间相关的方法
 */
// 时间差
export const countDown = function (firstTime, lastTime) {
  const offsetTime = lastTime - firstTime;
  const day = Number(offsetTime / (60 * 60 * 24 * 1000));
  const hour = Number((offsetTime / (60 * 60 * 1000)) % 24);
  const minute = Number((offsetTime / (60 * 1000)) % 60);
  const second = Number((offsetTime / 1000) % 60);
  return {
    day,
    hour,
    minute,
    second,
  };
};

// 获取最近一周的7天
export function getRecentWeekDays() {
  let days = [];
  const now = new Date();
  const weekObject = {
    0: "星期天", // 注意星期天是0
    1: "星期一",
    2: "星期二",
    3: "星期三",
    4: "星期四",
    5: "星期五",
    6: "星期六",
  };
  for (let i = 0; i < 7; i++) {
    let dateItem = new Date(now.getTime() - i * 24 * 60 * 60 * 1000); //使用当天时间戳减去以前的时间毫秒（天*小时*分*秒*毫秒）
    let d = dateItem.getDay(); //获取日期
    let valueItem = weekObject[d]; //组合
    days.unshift(valueItem); //添加至数组
  }
  console.log("最近七天日期：", days);
  return days;
}

// 获取最近一天的24小时
export function getRecentDayHours() {
  let hours = [];
  const now = new Date();
  const addDate0 = (time) => {
    if (time.toString().length == 1) {
      time = "0" + time.toString();
    }
    return time;
  };
  for (let i = 0; i < 24; i++) {
    let dateItem = new Date(now.getTime() - i * 60 * 60 * 1000);
    let h = dateItem.getHours(); //获取小时
    h = addDate0(h);
    let valueItem = `${h}:00`;
    hours.unshift(valueItem);
  }
  console.log("最近24小时：", hours);
  return hours;
}

// 获取最近一个月的30天
export function getRecentMonthDays() {
  let days = [];
  const now = new Date();
  const addDate0 = (time) => {
    if (time.toString().length == 1) {
      time = "0" + time.toString();
    }
    return time;
  };
  // 从1开始，不包括今天
  for (let i = 1; i <= 30; i++) {
    let dateItem = new Date(now.getTime() - i * 24 * 60 * 60 * 1000); //使用当天时间戳减去以前的时间毫秒（天*小时*分*秒*毫秒）
    let y = dateItem.getFullYear(); //获取年份
    let m = dateItem.getMonth() + 1; //获取月份js月份从0开始，需要+1
    let d = dateItem.getDate(); //获取日期
    m = addDate0(m); //给为单数的月份补零
    d = addDate0(d); //给为单数的日期补零
    let valueItem = `${y}-${m}-${d}`; //组合
    days.unshift(valueItem); //添加至数组
  }
  console.log("最近30天日期：", days);
  return days;
}

// 获取最近一年的12个月
export function getRecentYearMonths() {
  let months = [];
  const now = new Date();
  for (let i = 0; i < 12; i++) {
    now.setMonth(now.getMonth() - 1, 1); //每循环一次月份减一
    let y = now.getFullYear(); //获取年份
    let m = now.getMonth() + 1;
    let valueItem = `${y}-${m}`; //组合
    months.unshift(valueItem);
  }
  console.log("最近12个月：", months);
  return months;
}

// 计算指定日期是一年中的第几天
export function dayOfYear(date: Date) {
  Math.floor(
    (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) /
      1000 /
      60 /
      60 /
      24
  );
}
