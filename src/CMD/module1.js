// 定义没有依赖的模块
define(function(require, exports, module) {
  // 模块内部变量
  const name = "shuliqi";
  // 模块内部函数
  function getName() {
    return name;
  }

  // 向外暴露
  exports.getName = getName;
})