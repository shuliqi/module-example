 // 引用模块： 通过模块表示 require 来引用；
 // 模块标识 可以省略后缀名， 可以使相对地址，
const module1 = require('./module1');
console.log(module1.name);
module1.getName();

const module2 = require('./module2.js')
module2.getName();
