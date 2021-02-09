"use strict";

(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;if (!f && c) return c(i, !0);if (u) return u(i, !0);var a = new Error("Cannot find module '" + i + "'");throw a.code = "MODULE_NOT_FOUND", a;
        }var p = n[i] = { exports: {} };e[i][0].call(p.exports, function (r) {
          var n = e[i][1][r];return o(n || r);
        }, p, p.exports, r, e, n, t);
      }return n[i].exports;
    }for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
      o(t[i]);
    }return o;
  }return r;
})()({ 1: [function (require, module, exports) {
    'use strict';

    var _module = require('./module1.js');

    var _module2 = require('./module2.js');

    var _module3 = _interopRequireDefault(_module2);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }

    console.log(_module.name);
    (0, _module.getName)();
    (0, _module3.default)();
  }, { "./module1.js": 2, "./module2.js": 3 }], 2: [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    // 使用 export 暴露模块
    var name = "shuliqi";
    function getName() {
      console.log(18);
    }
    exports.name = name;
    exports.getName = getName;
  }, {}], 3: [function (require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    exports.default = function () {
      console.log(sex);
    };

    // 使用 export default 为模块指定默认输出
    var sex = '女';
  }, {}] }, {}, [1]);