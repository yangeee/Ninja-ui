// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/svg.js":[function(require,module,exports) {
!function (i) {
  var t,
      c = '<svg><symbol id="i-thumbs-up" viewBox="0 0 1025 1024"><path d="M968.028 573.999c24-27.33 36-64.33 36-111.007 0-13.332-1.5-25.832-4.51-37.502-3.01-11.667-7.18-22.165-12.51-31.485-3.33-5.335-7.5-10.337-12.51-15.01-5.015-4.67-10.18-8.5-15.49-11.487-5.31-2.985-11.145-5.322-17.5-7.007-6.36-1.685-12.86-2.518-19.49-2.495l-134.01 0c72.66-132.667 90.66-231.662 54.01-296.982-11.325-20.672-26.825-36.01-46.49-46.015C775.858 5.002 756.688 0 738.023 0c-3.325 0-6.495 0.5-9.505 1.505-3.01 1.002-5.67 2.505-8 4.51-2.325 2.005-4.16 4.342-5.5 7.007-1.35 2.667-2.35 5.665-3.01 8.992-1.345 13.332-4.68 27.337-10.015 42.015-5.335 14.677-12.175 29.515-20.515 44.51-8.34 14.997-18 29.995-28.99 44.99-10.985 14.997-23.315 29.995-36.99 44.992-13.67 14.997-28.51 29.832-44.51 44.51-79.997 71.997-170.33 124.997-270.999 159.002-5.995-12.67-15.327-23.167-27.997-31.487-12.672-8.317-26.335-12.49-40.992-12.51L76.99 358.036c-21.332 0-39.497 7.497-54.495 22.495S0 413.694 0 435.026l0 460.976c0 21.335 7.497 39.495 22.495 54.495 14.997 14.995 33.162 22.49 54.495 22.49l154.01 0c10.005 0 19.84-2.16 29.505-6.49 9.662-4.33 17.992-10.17 24.99-17.505 6.997-7.34 12.5-15.67 16.512-24.995 31.337 4.015 59.005 9.175 83.005 15.49 23.997 6.315 41.16 11.82 51.485 16.51 10.325 4.695 23.83 11.36 40.512 20 20.01 11.33 36.51 19.5 49.5 24.51 12.99 5.015 35.33 10.18 67.01 15.49 31.68 5.31 69.51 7.98 113.5 8 18.665 0 36.33-2.335 52.99-7.01 16.66-4.67 31.655-11.335 44.99-20 26-17.34 42-40.34 48-68.99 20.67-8.66 38-27.325 51.995-55.995 14.675-29.995 22.015-59.995 22.015-90.015l0-8c0-2-0.33-4.01-0.99-6.015 4.67-3.325 9-7.155 12.99-11.485 3.99-4.33 7.82-9.165 11.49-14.5 3.67-5.33 6.835-11.335 9.5-18.01 15.34-29.335 23.01-60.33 23.01-92.99 0-21.995-4-40-12-54.015-1.345-1.345-2.02-2.345-2.02-3.01l-0.99 0L968.028 573.999zM230.072 921.988 77.085 921.988c-3.327 0-6.665-0.835-10.015-2.5-3.35-1.66-6.187-3.5-8.512-5.5-2.325-2.01-4.16-4.675-5.502-8-1.345-3.33-2.017-6.67-2.017-10.02L51.039 434.994c0-6.677 2.497-12.512 7.487-17.505 4.992-4.99 11.157-7.487 18.497-7.487l152.987 0c7.337 0 13.502 2.497 18.495 7.487 4.99 4.992 7.487 10.827 7.487 17.505l0 460.974c0 13.335-6.337 21.665-19.007 24.99-2.667 0-5.002 0.335-7.007 0.995L230.072 921.988zM939.038 525.999c-7.335 13.995-13.67 20.99-19.005 20.99-7.335 0-13.505 2.5-18.495 7.49s-7.49 10.995-7.49 18.015c0 7.015 2.5 13.025 7.49 18.015s11.16 7.49 18.495 7.49c2.665 0 4.675 1.33 6.015 4 3.33 6.675 4.99 16.34 4.99 28.99 0 24.66-5.33 48.33-16 71.005-9.34 18.665-17.67 27.995-24.99 27.995-4.67 0-9 1.005-12.99 3.01-3.99 2.01-7.16 5.005-9.5 8.99-2.35 3.99-3.51 8.32-3.49 12.995 0 3.325 0.5 6.325 1.5 8.99 1.005 2.665 2.34 5.005 4 7.01 1.67 2.005 3.83 4.01 6.5 6.015 0.66 9.34-1.175 23.01-5.505 40.99-4.33 17.985-11.165 33.65-20.515 47.01-8 11.325-14.99 16.99-20.99 16.99-4.67 0-9 1-12.99 3.01-3.99 2-7.16 5-9.5 8.99-2.35 3.99-3.51 8.32-3.49 12.99 0 21.33-9.505 37.66-28.51 48.99-19.01 11.33-41.505 16.99-67.49 16.99-40 0-74-2.165-102.01-6.495-28.01-4.33-47.84-8.83-59.49-13.505-11.645-4.67-26.48-12.01-44.507-22.01-18.005-9.35-32.842-16.685-44.51-22.02-11.67-5.33-30.837-11.5-57.502-18.495-26.667-6.995-57.332-12.83-91.997-17.505L307.062 453.936c111.335-36.67 210.667-94.332 298.007-172.987 83.325-75.325 134.32-150.66 152.985-226.007 18.005 5.332 31.34 15.667 40 31.007 4.675 9.342 7.84 20.51 9.505 33.502 1.66 12.992 1.16 30.655-1.505 52.99s-11.165 50.505-25.505 84.51c-14.335 34.002-34.16 72.007-59.485 114.012-2.005 4.01-3.005 8.34-3.005 12.99 0 4.652 1 8.982 3.005 12.992 4.675 8.662 12.01 12.992 22.015 12.992l187 0 2.02 2.015c1.34 0 2.505 0.33 3.49 0.992 0.98 0.66 1.98 1.492 3.005 2.495s1.855 2.005 2.495 3.007c0.64 1.003 1.64 2.165 3.01 3.49 2.665 4.67 4.83 10.505 6.495 17.502 1.665 6.997 2.495 14.825 2.495 23.487 0 23.337-4.67 44.34-14.015 63.005L939.038 525.999z"  ></path></symbol><symbol id="i-down" viewBox="0 0 1024 1024"><path d="M512 750.8c-7.2 0-14.4-2.7-19.9-8.2L70.7 321.1c-11-11-11-28.8 0-39.7 11-11 28.8-11 39.7 0L512 683l401.6-401.6c11-11 28.8-11 39.7 0 11 11 11 28.8 0 39.7L531.9 742.6c-5.5 5.5-12.7 8.2-19.9 8.2z"  ></path></symbol><symbol id="i-settings" viewBox="0 0 1024 1024"><path d="M935.79946667 399.86062222l-89.08041482-10.07312592c-3.51952592-9.58767408-7.40314075-18.93262222-11.65084444-28.15620741l55.94832592-70.14779259c15.04900741-18.93262222 14.44219259-45.26838518-1.45635555-61.16693333l-95.87674075-95.87674075c-15.89854815-15.89854815-42.23431111-16.62672592-61.16693333-1.45635555l-70.14779259 55.82696296c-9.10222222-4.2477037-18.56853333-8.13131852-28.03484444-11.65084445l-10.07312592-89.08041481c-2.66998518-24.02986667-21.72397037-42.23431111-44.2974815-42.23431112H444.1581037c-22.57351111 0-41.6274963 18.20444445-44.29748148 42.23431112l-10.07312592 89.08041481c-9.46631111 3.51952592-18.93262222 7.40314075-28.03484445 11.65084445l-70.1477926-55.82696296c-18.93262222-15.17037037-45.26838518-14.44219259-61.16693333 1.45635555l-95.87674074 95.87674075c-15.89854815 15.89854815-16.50536297 42.23431111-1.45635555 61.16693333l55.94832592 70.14779259c-4.2477037 9.22358518-8.13131852 18.56853333-11.65084444 28.15620741l-89.08041481 10.07312592c-24.02986667 2.66998518-42.23431111 21.72397037-42.23431112 44.29748148v135.56242963c0 22.57351111 18.20444445 41.6274963 42.23431112 44.29748149l89.08041481 10.07312593c3.51952592 9.58767408 7.40314075 18.93262222 11.65084444 28.1562074l-55.94832592 70.1477926c-15.04900741 18.93262222-14.44219259 45.26838518 1.45635555 61.16693333l95.87674074 95.87674074c15.89854815 15.89854815 42.23431111 16.62672592 61.16693333 1.45635555l70.1477926-55.82696296c9.10222222 4.2477037 18.56853333 8.13131852 28.03484445 11.65084444l10.07312592 89.08041482c2.66998518 24.02986667 21.72397037 42.23431111 44.29748148 42.23431111h135.56242963c22.57351111 0 41.6274963-18.20444445 44.29748149-42.23431111l10.07312593-89.08041482c9.58767408-3.51952592 18.93262222-7.40314075 28.03484443-11.65084444l70.1477926 55.82696296c18.93262222 15.17037037 45.26838518 14.44219259 61.16693333-1.45635555l95.87674074-95.87674074c15.89854815-15.89854815 16.50536297-42.23431111 1.45635556-61.16693333L834.82548148 662.24734815c4.2477037-9.10222222 8.13131852-18.56853333 11.65084444-28.1562074l89.08041483-10.07312593c24.02986667-2.66998518 42.23431111-21.72397037 42.2343111-44.29748149V444.1581037c0.24272592-22.45214815-17.96171852-41.50613333-41.99158518-44.29748148z m-19.17534815 164.56817778l-84.83271111 9.58767408c-18.6898963 2.06317037-34.46708148 14.80628148-40.41386666 32.4039111-4.2477037 12.50038518-9.22358518 24.63668148-15.04900742 36.4088889-8.25268148 16.50536297-5.94678518 36.65161482 5.5826963 51.33653333l53.27834074 66.87099259-74.15277037 74.15277037-66.87099259-53.27834074c-14.56355555-11.65084445-34.70980741-13.83537778-51.33653333-5.70405926-11.65084445 5.82542222-23.9085037 10.8013037-36.28752593 15.04900741-17.59762963 5.94678518-30.34074075 21.84533333-32.40391112 40.41386667l-9.58767406 84.8327111h-104.97896297l-9.58767408-84.8327111c-2.06317037-18.6898963-14.80628148-34.58844445-32.4039111-40.41386667-12.50038518-4.2477037-24.63668148-9.22358518-36.4088889-15.04900741-16.50536297-8.25268148-36.65161482-5.94678518-51.33653333 5.5826963l-66.87099259 53.27834074-74.15277037-74.15277038 53.27834074-66.87099258c11.65084445-14.56355555 13.83537778-34.70980741 5.5826963-51.33653334-5.82542222-11.65084445-10.8013037-23.9085037-15.04900742-36.40888889-5.94678518-17.59762963-21.84533333-30.34074075-40.41386666-32.40391111l-84.83271111-9.58767408v-104.8576l84.83271111-9.58767406c18.56853333-2.06317037 34.46708148-14.80628148 40.41386666-32.40391112 4.2477037-12.37902222 9.22358518-24.63668148 15.04900742-36.40888888 8.25268148-16.50536297 5.94678518-36.65161482-5.5826963-51.33653334l-53.27834074-66.8709926 74.15277037-74.15277036 66.87099259 53.27834074c14.56355555 11.65084445 34.70980741 13.83537778 51.33653333 5.58269629 11.65084445-5.82542222 23.9085037-10.8013037 36.28752593-15.0490074 17.59762963-5.94678518 30.34074075-21.84533333 32.40391112-40.41386667l9.58767406-84.83271111h104.97896297l9.58767408 84.83271111c2.06317037 18.6898963 14.80628148 34.46708148 32.4039111 40.41386667 12.50038518 4.2477037 24.63668148 9.22358518 36.4088889 15.0490074 16.50536297 8.25268148 36.65161482 5.94678518 51.33653333-5.58269629l66.87099259-53.27834074 74.15277037 74.15277036-53.27834074 66.8709926c-11.65084445 14.56355555-13.83537778 34.70980741-5.5826963 51.33653334 5.82542222 11.65084445 10.8013037 23.9085037 15.04900742 36.28752592 5.94678518 17.59762963 21.84533333 30.34074075 40.41386666 32.40391111l84.83271111 9.58767408v105.10032592z"  ></path><path d="M512 318.30471111c-106.79940741 0-193.69528889 86.89588148-193.69528889 193.69528889S405.20059259 705.69528889 512 705.69528889 705.69528889 618.79940741 705.69528889 512 618.79940741 318.30471111 512 318.30471111z m0 325.98091852c-72.93914075 0-132.28562963-59.34648889-132.28562963-132.28562963s59.34648889-132.28562963 132.28562963-132.28562963 132.28562963 59.34648889 132.28562963 132.28562963-59.34648889 132.28562963-132.28562963 132.28562963z"  ></path></symbol><symbol id="i-download" viewBox="0 0 1024 1024"><path d="M988.595745 624.340426a34.042553 34.042553 0 0 0-34.042554 34.042553V953.191489H69.446809V658.382979a34.042553 34.042553 0 0 0-68.085107 0v331.574468a34.042553 34.042553 0 0 0 34.042553 34.042553h953.19149a34.042553 34.042553 0 0 0 34.042553-34.042553V658.382979a34.042553 34.042553 0 0 0-34.042553-34.042553z"  ></path><path d="M488.170213 792.510638a34.042553 34.042553 0 0 0 48.340425 0l151.829788-151.829787a34.042553 34.042553 0 1 0-48.340426-48.340425L546.042553 686.297872V34.042553a34.042553 34.042553 0 0 0-68.085106 0v652.255319L384 593.021277a34.042553 34.042553 0 0 0-48.340426 48.340425z"  ></path></symbol><symbol id="i-left" viewBox="0 0 1024 1024"><path d="M696.40000001 73.2l-435.80000001 436.2 435.8 439 45.4-45.1-390.9-393.8 390.79999999-391.1z"  ></path></symbol><symbol id="i-loading" viewBox="0 0 1024 1024"><path d="M827.211075 221.676536m-54.351151 0a54.351151 54.351151 0 1 0 108.702302 0 54.351151 54.351151 0 1 0-108.702302 0Z"  ></path><path d="M940.905298 515.399947m-67.086951 0a67.086952 67.086952 0 1 0 134.173903 0 67.086952 67.086952 0 1 0-134.173903 0Z"  ></path><path d="M829.755035 810.595334m-78.974766 0a78.974766 78.974766 0 1 0 157.949532 0 78.974766 78.974766 0 1 0-157.949532 0Z"  ></path><path d="M534.831643 928.64149m-91.48657 0a91.486571 91.486571 0 1 0 182.973141 0 91.486571 91.486571 0 1 0-182.973141 0Z"  ></path><path d="M243.780191 805.955407m-101.902408 0a101.902408 101.902408 0 1 0 203.804816 0 101.902408 101.902408 0 1 0-203.804816 0Z"  ></path><path d="M536.623615 107.870315m-107.854315 0a107.854315 107.854315 0 1 0 215.70863 0 107.854315 107.854315 0 1 0-215.70863 0Z"  ></path><path d="M243.780191 224.220497m-107.854315 0a107.854315 107.854315 0 1 0 215.70863 0 107.854315 107.854315 0 1 0-215.70863 0Z"  ></path><path d="M129.429978 512.008m-102.766395 0a102.766394 102.766394 0 1 0 205.532789 0 102.766394 102.766394 0 1 0-205.532789 0Z"  ></path></symbol><symbol id="i-right" viewBox="0 0 1024 1024"><path d="M327.59999999 950.8l435.80000001-436.2-435.8-439-45.4 45.1 390.9 393.8-390.79999999 391.1z"  ></path></symbol></svg>',
      e = (t = document.getElementsByTagName("script"))[t.length - 1].getAttribute("data-injectcss");

  if (e && !i.__iconfont__svg__cssinject__) {
    i.__iconfont__svg__cssinject__ = !0;

    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (t) {
      console && console.log(t);
    }
  }

  !function (t) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) setTimeout(t, 0);else {
        var e = function e() {
          document.removeEventListener("DOMContentLoaded", e, !1), t();
        };

        document.addEventListener("DOMContentLoaded", e, !1);
      }
    } else document.attachEvent && (c = t, l = i.document, a = !1, o = function o() {
      a || (a = !0, c());
    }, (_n = function n() {
      try {
        l.documentElement.doScroll("left");
      } catch (t) {
        return void setTimeout(_n, 50);
      }

      o();
    })(), l.onreadystatechange = function () {
      "complete" == l.readyState && (l.onreadystatechange = null, o());
    });

    var c, l, a, o, _n;
  }(function () {
    var t, e;
    (t = document.createElement("div")).innerHTML = c, c = null, (e = t.getElementsByTagName("svg")[0]) && (e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.width = 0, e.style.height = 0, e.style.overflow = "hidden", function (t, e) {
      e.firstChild ? function (t, e) {
        e.parentNode.insertBefore(t, e);
      }(t, e.firstChild) : e.appendChild(t);
    }(e, document.body));
  });
}(window);
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "33691" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/svg.js"], null)
//# sourceMappingURL=/svg.8fe7ff3c.js.map