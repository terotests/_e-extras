var jeesExtras_prototype = function() {
  'use strict';
  var clipBoard_prototype = function() {;
    (function(_myTrait_) {
      var _hasSupport;
      _myTrait_.del = function(name) {

        if (this.localStoreSupport()) {
          localStorage.removeItem(name);
        } else {
          this.set(name, "", -1);
        }

      }
      _myTrait_.fromClipboard = function(opts) {

        var str = this.get(this._name);
        var o = JSON.parse(str);

        return o;
      }
      _myTrait_.get = function(name) {
        if (this.localStoreSupport()) {
          return localStorage.getItem(name);
        } else {
          var nameEQ = name + "=";
          var ca = document.cookie.split(';');
          for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
          }
          return null;
        }
      }
      if (_myTrait_.__traitInit && !_myTrait_.hasOwnProperty("__traitInit"))
        _myTrait_.__traitInit = _myTrait_.__traitInit.slice();
      if (!_myTrait_.__traitInit) _myTrait_.__traitInit = []
      _myTrait_.__traitInit.push(function(name) {

        this._name = name;
      });
      _myTrait_.localStoreSupport = function(t) {
        if (_hasSupport) return _hasSupport;

        try {
          _hasSupport = 'localStorage' in window && window['localStorage'] !== null;
          return _hasSupport;
        } catch (e) {
          return false;
        }
      }
      _myTrait_.set = function(name, value, days) {

        if (days) {
          var date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          var expires = "; expires=" + date.toGMTString();
        } else {
          var expires = "";
        }
        if (this.localStoreSupport()) {
          localStorage.setItem(name, value);
        } else {
          document.cookie = name + "=" + value + expires + "; path=/";
        }
      }
      _myTrait_.toClipboard = function(items) {
        this.set(this._name, JSON.stringify(items));

        return this;

      }
    }(this));
  }
  var clipBoard = function(a, b, c, d, e, f, g, h) {
    if (this instanceof clipBoard) {
      var args = [a, b, c, d, e, f, g, h];
      if (this.__factoryClass) {
        var m = this;
        var res;
        this.__factoryClass.forEach(function(initF) {
          res = initF.apply(m, args);
        });
        if (Object.prototype.toString.call(res) == '[object Function]') {
          if (res._classInfo.name != clipBoard._classInfo.name) return new res(a, b, c, d, e, f, g, h);
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
    } else return new clipBoard(a, b, c, d, e, f, g, h);
  };
  clipBoard._classInfo = {
    name: 'clipBoard'
  };
  clipBoard.prototype = new clipBoard_prototype();;
  (function(_myTrait_) {
    if (_myTrait_.__traitInit && !_myTrait_.hasOwnProperty("__traitInit"))
      _myTrait_.__traitInit = _myTrait_.__traitInit.slice();
    if (!_myTrait_.__traitInit) _myTrait_.__traitInit = []
    _myTrait_.__traitInit.push(function(t) {


      _e().extendAll({
        getClipboard: function(name) {
          return clipBoard(name);
        }
      })
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