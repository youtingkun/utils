// 邮箱
export function isEmail(s: string): boolean {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(
    s
  );
}

// 手机号码
export function isMobile(s: string): boolean {
  return /^1[0-9]{10}$/.test(s);
}

// 电话号码
export function isPhone(s: string): boolean {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s);
}

// url地址
export function isURL(s: string): boolean {
  return /^http[s]?:\/\/.*/.test(s);
}

// 整数
export function isInteger(s: string): boolean {
  return /^-?[1-9]\d*$/.test(s);
}
// 正整数
export function isPositiveInteger(s: string): boolean {
  return /^[1-9]\d*$/.test(s);
}
// 负整数
export function isNegativeInteger(s: string): boolean {
  return /^-[1-9]\d*$/.test(s);
}
// 浮点数
export function isFloat(s: string): boolean {
  return /^(-?\d+)(\.\d+)?$/.test(s);
}
// 正浮点数
export function isPositive(s: string): boolean {
  return /^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/.test(s);
}
// 负浮点数
export function isNegative(s: string): boolean {
  return /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/.test(
    s
  );
}
//非负数
export function isNotNegative(s: string): boolean {
  return /^\d+(\.\d+)?$/.test(s);
}
// 非正数
export function isNotPositive(s: string): boolean {
  return /^((-\d+(\.\d+)?)|(0+(\.0+)?))$/.test(s);
}
