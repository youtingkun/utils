// 是否为字符串
export const isString = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'String'
}

// 是否为数字
export const isNumber = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Number'
}

// 是否为boolean
export const isBoolean = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'
}

// 是否为函数
export const isFunction = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Function'
}

// 是否为空
export const isNull = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
}

// 是否为undefined
export const isUndefined = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
}

// 是否为对象
export const isObj = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
}

// 是否为数组
export const isArray = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
}

// 是否为时间
export const isDate = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Date'
}

// 是否为正则
export const isRegExp = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp'
}

// 是否为错误对象
export const isError = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Error'
}

// 是否为Symbol函数
export const isSymbol = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol'
}

// 是否为Promise对象
export const isPromise = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Promise'
}

// 是否为Set对象
export const isSet = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Set'
}
