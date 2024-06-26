window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  TelegramTest: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c78c7rFyJhIVJeUgNAbkQ6I", "TelegramTest");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TelegramTest = function(_super) {
      __extends(TelegramTest, _super);
      function TelegramTest() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lblTip = null;
        return _this;
      }
      TelegramTest.prototype.start = function() {
        var telegramSdk = window["Telegram"];
        if (telegramSdk) {
          var sdk = telegramSdk.WebApp;
          this.lblTip.string = sdk ? "success" : "fail";
        } else this.lblTip.string = "fail";
      };
      __decorate([ property(cc.Label) ], TelegramTest.prototype, "lblTip", void 0);
      TelegramTest = __decorate([ ccclass ], TelegramTest);
      return TelegramTest;
    }(cc.Component);
    exports.default = TelegramTest;
    cc._RF.pop();
  }, {} ]
}, {}, [ "TelegramTest" ]);
//# sourceMappingURL=index.js.map
