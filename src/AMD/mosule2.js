// 加载有依赖的模块
// 依赖module1.js
define(['./module1.js'], function(module1) {
  let age = 12;
  function getMsg() {
    console.log('name:',module1.getName(), 'age:',  age);
  }
  // 暴露模块
  return { getMsg };
});