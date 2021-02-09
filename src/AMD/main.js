require(['./module1', './mosule2'], function(module1, mosule2) {
  console.log(module1.name);
  mosule2.getMsg();
})