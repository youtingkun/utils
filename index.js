import test from './modules/test.js';
import RegExpRule from './modules/RegExpRule';
import Object from './modules/Object'

function npmDemo(argument) {
  var name = 'finit'
  var f1 = function f(arg) {
    console.log(arg, '新的方法')
  }
  return {
    name: name,
    f1: f1
  }
}


export default {
    test,
    RegExpRule,
    Object
}
