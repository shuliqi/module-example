// 定义有依赖的模块
define( function(require, exports, module ) {
  // 模块内部变量
  const age = 18;
  // 引入模块（同步）
  const module1 = require('./module1');
  function getMsg() {
    console.log('name:', module1.getName(), 'age: ', age)
  }
  // 向外暴露模块
  module.exports = {  getMsg };

})