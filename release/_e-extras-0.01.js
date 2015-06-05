var jeesExtras_prototype = function() {
  'use strict';;
  (function(_myTrait_) {
    if (_myTrait_.__traitInit && !_myTrait_.hasOwnProperty("__traitInit"))
      _myTrait_.__traitInit = _myTrait_.__traitInit.slice();
    if (!_myTrait_.__traitInit) _myTrait_.__traitInit = []
    _myTrait_.__traitInit.push(function(t) {

    });
  }(this));
}
var jeesExtras = function(a, b, c, d, e, f, g, h) {
  if (this instanceof jeesExtras) {
    var args = [a, b, c, d, e, f, g, h];
    if (this.__factoryClass) {
      var m = this;
      var res;
      this.__factoryClass.forEach(function(initF) {
        res = initF.apply(m, args);
      });
      if (Object.prototype.toString.call(res) == '[object Function]') {
        if (res._classInfo.name != jeesExtras._classInfo.name) return new res(a, b, c, d, e, f, g, h);
      } else {
        if (res) return res;
      }
    }
    if (this.__traitInit) {
      var m = this;
      this.__traitInit.forEach(function(initF) {
        initF.apply(m, args);
      })
    } else {
      if (typeof this.init == 'function')
        this.init.apply(this, args);
    }
  } else return new jeesExtras(a, b, c, d, e, f, g, h);
};
jeesExtras._classInfo = {
  name: 'jeesExtras'
};
jeesExtras.prototype = new jeesExtras_prototype();
if (typeof(window) != 'undefined') window['jeesExtras'] = jeesExtras;
if (typeof(window) != 'undefined') window['jeesExtras_prototype'] = jeesExtras_prototype;