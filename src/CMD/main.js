// 定义有依赖的模块
define( function (require, exports, module) {
  // 引入模块（同步）
  const module2 = require('./module2');
  module2.getMsg();

  // 引入模块（异步）
  require.async('./module3', function(module3) {
    console.log('我是异步加载的：', module3.sex)
  })
})