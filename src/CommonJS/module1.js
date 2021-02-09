// 暴露（定义）模块：可以直接在写 module.exports 对象上
module.exports = {
  name: "模块1",
  getName: function() {
    console.log(this.name)
  }
}