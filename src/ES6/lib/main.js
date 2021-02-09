'use strict';

var _module = require('./module1.js');

var _module2 = require('./module2.js');

var _module3 = _interopRequireDefault(_module2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 引用模块
console.log(_module.name);
(0, _module.getName)();
(0, _module3.default)();