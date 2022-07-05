// 求两个数的最大公约数
//思想是采用辗转相除的方法，用大的数去除以小的那个数，然后再用小的数去除以的得到的 余数，一直这样递归下去，直到余数为 0 时，最后的被除数就是两个数的最大公约数。
export function getMaxCommonDivisor(a: number, b: number): number {
  if (b === 0) return a;
  return getMaxCommonDivisor(b, a % b);
}

// 求两个数的最小公倍数
// 思想是采用将两个数相乘，然后除以它们的最大公约数
export function getMinCommonMultiple(a: number, b: number): number {
  return (a * b) / getMaxCommonDivisor(a, b);
}
