function _mergeNamespaces(e, a) {
  for (var i = 0; i < a.length; i++) {
    const o = a[i];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const c in o)
        if (c !== "default" && !(c in e)) {
          const h = Object.getOwnPropertyDescriptor(o, c);
          h &&
            Object.defineProperty(
              e,
              c,
              h.get ? h : { enumerable: !0, get: () => o[c] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) o(c);
  new MutationObserver((c) => {
    for (const h of c)
      if (h.type === "childList")
        for (const b of h.addedNodes)
          b.tagName === "LINK" && b.rel === "modulepreload" && o(b);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(c) {
    const h = {};
    return (
      c.integrity && (h.integrity = c.integrity),
      c.referrerPolicy && (h.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (h.credentials = "include")
        : c.crossOrigin === "anonymous"
        ? (h.credentials = "omit")
        : (h.credentials = "same-origin"),
      h
    );
  }
  function o(c) {
    if (c.ep) return;
    c.ep = !0;
    const h = i(c);
    fetch(c.href, h);
  }
})();
var commonjsGlobal =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function getDefaultExportFromCjs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var jsxRuntime = { exports: {} },
  reactJsxRuntime_production_min = {},
  react = { exports: {} },
  react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var l$1 = Symbol.for("react.element"),
  n$1 = Symbol.for("react.portal"),
  p$2 = Symbol.for("react.fragment"),
  q$1 = Symbol.for("react.strict_mode"),
  r = Symbol.for("react.profiler"),
  t = Symbol.for("react.provider"),
  u = Symbol.for("react.context"),
  v$1 = Symbol.for("react.forward_ref"),
  w = Symbol.for("react.suspense"),
  x = Symbol.for("react.memo"),
  y = Symbol.for("react.lazy"),
  z$1 = Symbol.iterator;
function A$1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (z$1 && e[z$1]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var B$1 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  C$1 = Object.assign,
  D$1 = {};
function E$1(e, a, i) {
  (this.props = e),
    (this.context = a),
    (this.refs = D$1),
    (this.updater = i || B$1);
}
E$1.prototype.isReactComponent = {};
E$1.prototype.setState = function (e, a) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, a, "setState");
};
E$1.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function F() {}
F.prototype = E$1.prototype;
function G$1(e, a, i) {
  (this.props = e),
    (this.context = a),
    (this.refs = D$1),
    (this.updater = i || B$1);
}
var H$1 = (G$1.prototype = new F());
H$1.constructor = G$1;
C$1(H$1, E$1.prototype);
H$1.isPureReactComponent = !0;
var I$1 = Array.isArray,
  J = Object.prototype.hasOwnProperty,
  K$1 = { current: null },
  L$1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function M$1(e, a, i) {
  var o,
    c = {},
    h = null,
    b = null;
  if (a != null)
    for (o in (a.ref !== void 0 && (b = a.ref),
    a.key !== void 0 && (h = "" + a.key),
    a))
      J.call(a, o) && !L$1.hasOwnProperty(o) && (c[o] = a[o]);
  var en = arguments.length - 2;
  if (en === 1) c.children = i;
  else if (1 < en) {
    for (var tn = Array(en), sn = 0; sn < en; sn++) tn[sn] = arguments[sn + 2];
    c.children = tn;
  }
  if (e && e.defaultProps)
    for (o in ((en = e.defaultProps), en)) c[o] === void 0 && (c[o] = en[o]);
  return {
    $$typeof: l$1,
    type: e,
    key: h,
    ref: b,
    props: c,
    _owner: K$1.current,
  };
}
function N$1(e, a) {
  return {
    $$typeof: l$1,
    type: e.type,
    key: a,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function O$1(e) {
  return typeof e == "object" && e !== null && e.$$typeof === l$1;
}
function escape(e) {
  var a = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (i) {
      return a[i];
    })
  );
}
var P$1 = /\/+/g;
function Q$1(e, a) {
  return typeof e == "object" && e !== null && e.key != null
    ? escape("" + e.key)
    : a.toString(36);
}
function R$1(e, a, i, o, c) {
  var h = typeof e;
  (h === "undefined" || h === "boolean") && (e = null);
  var b = !1;
  if (e === null) b = !0;
  else
    switch (h) {
      case "string":
      case "number":
        b = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case l$1:
          case n$1:
            b = !0;
        }
    }
  if (b)
    return (
      (b = e),
      (c = c(b)),
      (e = o === "" ? "." + Q$1(b, 0) : o),
      I$1(c)
        ? ((i = ""),
          e != null && (i = e.replace(P$1, "$&/") + "/"),
          R$1(c, a, i, "", function (sn) {
            return sn;
          }))
        : c != null &&
          (O$1(c) &&
            (c = N$1(
              c,
              i +
                (!c.key || (b && b.key === c.key)
                  ? ""
                  : ("" + c.key).replace(P$1, "$&/") + "/") +
                e
            )),
          a.push(c)),
      1
    );
  if (((b = 0), (o = o === "" ? "." : o + ":"), I$1(e)))
    for (var en = 0; en < e.length; en++) {
      h = e[en];
      var tn = o + Q$1(h, en);
      b += R$1(h, a, i, tn, c);
    }
  else if (((tn = A$1(e)), typeof tn == "function"))
    for (e = tn.call(e), en = 0; !(h = e.next()).done; )
      (h = h.value), (tn = o + Q$1(h, en++)), (b += R$1(h, a, i, tn, c));
  else if (h === "object")
    throw (
      ((a = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (a === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : a) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return b;
}
function S$1(e, a, i) {
  if (e == null) return e;
  var o = [],
    c = 0;
  return (
    R$1(e, o, "", "", function (h) {
      return a.call(i, h, c++);
    }),
    o
  );
}
function T$1(e) {
  if (e._status === -1) {
    var a = e._result;
    (a = a()),
      a.then(
        function (i) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = i));
        },
        function (i) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = i));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = a));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var U$1 = { current: null },
  V$1 = { transition: null },
  W$1 = {
    ReactCurrentDispatcher: U$1,
    ReactCurrentBatchConfig: V$1,
    ReactCurrentOwner: K$1,
  };
function X$1() {
  throw Error("act(...) is not supported in production builds of React.");
}
react_production_min.Children = {
  map: S$1,
  forEach: function (e, a, i) {
    S$1(
      e,
      function () {
        a.apply(this, arguments);
      },
      i
    );
  },
  count: function (e) {
    var a = 0;
    return (
      S$1(e, function () {
        a++;
      }),
      a
    );
  },
  toArray: function (e) {
    return (
      S$1(e, function (a) {
        return a;
      }) || []
    );
  },
  only: function (e) {
    if (!O$1(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
react_production_min.Component = E$1;
react_production_min.Fragment = p$2;
react_production_min.Profiler = r;
react_production_min.PureComponent = G$1;
react_production_min.StrictMode = q$1;
react_production_min.Suspense = w;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
react_production_min.act = X$1;
react_production_min.cloneElement = function (e, a, i) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var o = C$1({}, e.props),
    c = e.key,
    h = e.ref,
    b = e._owner;
  if (a != null) {
    if (
      (a.ref !== void 0 && ((h = a.ref), (b = K$1.current)),
      a.key !== void 0 && (c = "" + a.key),
      e.type && e.type.defaultProps)
    )
      var en = e.type.defaultProps;
    for (tn in a)
      J.call(a, tn) &&
        !L$1.hasOwnProperty(tn) &&
        (o[tn] = a[tn] === void 0 && en !== void 0 ? en[tn] : a[tn]);
  }
  var tn = arguments.length - 2;
  if (tn === 1) o.children = i;
  else if (1 < tn) {
    en = Array(tn);
    for (var sn = 0; sn < tn; sn++) en[sn] = arguments[sn + 2];
    o.children = en;
  }
  return { $$typeof: l$1, type: e.type, key: c, ref: h, props: o, _owner: b };
};
react_production_min.createContext = function (e) {
  return (
    (e = {
      $$typeof: u,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: t, _context: e }),
    (e.Consumer = e)
  );
};
react_production_min.createElement = M$1;
react_production_min.createFactory = function (e) {
  var a = M$1.bind(null, e);
  return (a.type = e), a;
};
react_production_min.createRef = function () {
  return { current: null };
};
react_production_min.forwardRef = function (e) {
  return { $$typeof: v$1, render: e };
};
react_production_min.isValidElement = O$1;
react_production_min.lazy = function (e) {
  return { $$typeof: y, _payload: { _status: -1, _result: e }, _init: T$1 };
};
react_production_min.memo = function (e, a) {
  return { $$typeof: x, type: e, compare: a === void 0 ? null : a };
};
react_production_min.startTransition = function (e) {
  var a = V$1.transition;
  V$1.transition = {};
  try {
    e();
  } finally {
    V$1.transition = a;
  }
};
react_production_min.unstable_act = X$1;
react_production_min.useCallback = function (e, a) {
  return U$1.current.useCallback(e, a);
};
react_production_min.useContext = function (e) {
  return U$1.current.useContext(e);
};
react_production_min.useDebugValue = function () {};
react_production_min.useDeferredValue = function (e) {
  return U$1.current.useDeferredValue(e);
};
react_production_min.useEffect = function (e, a) {
  return U$1.current.useEffect(e, a);
};
react_production_min.useId = function () {
  return U$1.current.useId();
};
react_production_min.useImperativeHandle = function (e, a, i) {
  return U$1.current.useImperativeHandle(e, a, i);
};
react_production_min.useInsertionEffect = function (e, a) {
  return U$1.current.useInsertionEffect(e, a);
};
react_production_min.useLayoutEffect = function (e, a) {
  return U$1.current.useLayoutEffect(e, a);
};
react_production_min.useMemo = function (e, a) {
  return U$1.current.useMemo(e, a);
};
react_production_min.useReducer = function (e, a, i) {
  return U$1.current.useReducer(e, a, i);
};
react_production_min.useRef = function (e) {
  return U$1.current.useRef(e);
};
react_production_min.useState = function (e) {
  return U$1.current.useState(e);
};
react_production_min.useSyncExternalStore = function (e, a, i) {
  return U$1.current.useSyncExternalStore(e, a, i);
};
react_production_min.useTransition = function () {
  return U$1.current.useTransition();
};
react_production_min.version = "18.3.1";
react.exports = react_production_min;
var reactExports = react.exports;
const index = getDefaultExportFromCjs(reactExports),
  React = _mergeNamespaces({ __proto__: null, default: index }, [reactExports]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var f = reactExports,
  k = Symbol.for("react.element"),
  l = Symbol.for("react.fragment"),
  m$1 = Object.prototype.hasOwnProperty,
  n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  p$1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function q(e, a, i) {
  var o,
    c = {},
    h = null,
    b = null;
  i !== void 0 && (h = "" + i),
    a.key !== void 0 && (h = "" + a.key),
    a.ref !== void 0 && (b = a.ref);
  for (o in a) m$1.call(a, o) && !p$1.hasOwnProperty(o) && (c[o] = a[o]);
  if (e && e.defaultProps)
    for (o in ((a = e.defaultProps), a)) c[o] === void 0 && (c[o] = a[o]);
  return { $$typeof: k, type: e, key: h, ref: b, props: c, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
jsxRuntime.exports = reactJsxRuntime_production_min;
var jsxRuntimeExports = jsxRuntime.exports,
  reactDom = { exports: {} },
  reactDom_production_min = {},
  scheduler = { exports: {} },
  scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function a(Dn, Un) {
    var Hn = Dn.length;
    Dn.push(Un);
    e: for (; 0 < Hn; ) {
      var nt = (Hn - 1) >>> 1,
        lt = Dn[nt];
      if (0 < c(lt, Un)) (Dn[nt] = Un), (Dn[Hn] = lt), (Hn = nt);
      else break e;
    }
  }
  function i(Dn) {
    return Dn.length === 0 ? null : Dn[0];
  }
  function o(Dn) {
    if (Dn.length === 0) return null;
    var Un = Dn[0],
      Hn = Dn.pop();
    if (Hn !== Un) {
      Dn[0] = Hn;
      e: for (var nt = 0, lt = Dn.length, Ut = lt >>> 1; nt < Ut; ) {
        var Ct = 2 * (nt + 1) - 1,
          Dl = Dn[Ct],
          It = Ct + 1,
          Jt = Dn[It];
        if (0 > c(Dl, Hn))
          It < lt && 0 > c(Jt, Dl)
            ? ((Dn[nt] = Jt), (Dn[It] = Hn), (nt = It))
            : ((Dn[nt] = Dl), (Dn[Ct] = Hn), (nt = Ct));
        else if (It < lt && 0 > c(Jt, Hn))
          (Dn[nt] = Jt), (Dn[It] = Hn), (nt = It);
        else break e;
      }
    }
    return Un;
  }
  function c(Dn, Un) {
    var Hn = Dn.sortIndex - Un.sortIndex;
    return Hn !== 0 ? Hn : Dn.id - Un.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var h = performance;
    e.unstable_now = function () {
      return h.now();
    };
  } else {
    var b = Date,
      en = b.now();
    e.unstable_now = function () {
      return b.now() - en;
    };
  }
  var tn = [],
    sn = [],
    mn = 1,
    hn = null,
    gn = 3,
    Sn = !1,
    An = !1,
    xn = !1,
    Cn = typeof setTimeout == "function" ? setTimeout : null,
    an = typeof clearTimeout == "function" ? clearTimeout : null,
    un = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function dn(Dn) {
    for (var Un = i(sn); Un !== null; ) {
      if (Un.callback === null) o(sn);
      else if (Un.startTime <= Dn)
        o(sn), (Un.sortIndex = Un.expirationTime), a(tn, Un);
      else break;
      Un = i(sn);
    }
  }
  function Mn(Dn) {
    if (((xn = !1), dn(Dn), !An))
      if (i(tn) !== null) (An = !0), Cl(jn);
      else {
        var Un = i(sn);
        Un !== null && yt(Mn, Un.startTime - Dn);
      }
  }
  function jn(Dn, Un) {
    (An = !1), xn && ((xn = !1), an(Bn), (Bn = -1)), (Sn = !0);
    var Hn = gn;
    try {
      for (
        dn(Un), hn = i(tn);
        hn !== null && (!(hn.expirationTime > Un) || (Dn && !_t()));

      ) {
        var nt = hn.callback;
        if (typeof nt == "function") {
          (hn.callback = null), (gn = hn.priorityLevel);
          var lt = nt(hn.expirationTime <= Un);
          (Un = e.unstable_now()),
            typeof lt == "function"
              ? (hn.callback = lt)
              : hn === i(tn) && o(tn),
            dn(Un);
        } else o(tn);
        hn = i(tn);
      }
      if (hn !== null) var Ut = !0;
      else {
        var Ct = i(sn);
        Ct !== null && yt(Mn, Ct.startTime - Un), (Ut = !1);
      }
      return Ut;
    } finally {
      (hn = null), (gn = Hn), (Sn = !1);
    }
  }
  var In = !1,
    _ = null,
    Bn = -1,
    Wn = 5,
    Zn = -1;
  function _t() {
    return !(e.unstable_now() - Zn < Wn);
  }
  function Kt() {
    if (_ !== null) {
      var Dn = e.unstable_now();
      Zn = Dn;
      var Un = !0;
      try {
        Un = _(!0, Dn);
      } finally {
        Un ? Gn() : ((In = !1), (_ = null));
      }
    } else In = !1;
  }
  var Gn;
  if (typeof un == "function")
    Gn = function () {
      un(Kt);
    };
  else if (typeof MessageChannel < "u") {
    var Nt = new MessageChannel(),
      tr = Nt.port2;
    (Nt.port1.onmessage = Kt),
      (Gn = function () {
        tr.postMessage(null);
      });
  } else
    Gn = function () {
      Cn(Kt, 0);
    };
  function Cl(Dn) {
    (_ = Dn), In || ((In = !0), Gn());
  }
  function yt(Dn, Un) {
    Bn = Cn(function () {
      Dn(e.unstable_now());
    }, Un);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (Dn) {
      Dn.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      An || Sn || ((An = !0), Cl(jn));
    }),
    (e.unstable_forceFrameRate = function (Dn) {
      0 > Dn || 125 < Dn
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (Wn = 0 < Dn ? Math.floor(1e3 / Dn) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return gn;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return i(tn);
    }),
    (e.unstable_next = function (Dn) {
      switch (gn) {
        case 1:
        case 2:
        case 3:
          var Un = 3;
          break;
        default:
          Un = gn;
      }
      var Hn = gn;
      gn = Un;
      try {
        return Dn();
      } finally {
        gn = Hn;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (Dn, Un) {
      switch (Dn) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Dn = 3;
      }
      var Hn = gn;
      gn = Dn;
      try {
        return Un();
      } finally {
        gn = Hn;
      }
    }),
    (e.unstable_scheduleCallback = function (Dn, Un, Hn) {
      var nt = e.unstable_now();
      switch (
        (typeof Hn == "object" && Hn !== null
          ? ((Hn = Hn.delay),
            (Hn = typeof Hn == "number" && 0 < Hn ? nt + Hn : nt))
          : (Hn = nt),
        Dn)
      ) {
        case 1:
          var lt = -1;
          break;
        case 2:
          lt = 250;
          break;
        case 5:
          lt = 1073741823;
          break;
        case 4:
          lt = 1e4;
          break;
        default:
          lt = 5e3;
      }
      return (
        (lt = Hn + lt),
        (Dn = {
          id: mn++,
          callback: Un,
          priorityLevel: Dn,
          startTime: Hn,
          expirationTime: lt,
          sortIndex: -1,
        }),
        Hn > nt
          ? ((Dn.sortIndex = Hn),
            a(sn, Dn),
            i(tn) === null &&
              Dn === i(sn) &&
              (xn ? (an(Bn), (Bn = -1)) : (xn = !0), yt(Mn, Hn - nt)))
          : ((Dn.sortIndex = lt), a(tn, Dn), An || Sn || ((An = !0), Cl(jn))),
        Dn
      );
    }),
    (e.unstable_shouldYield = _t),
    (e.unstable_wrapCallback = function (Dn) {
      var Un = gn;
      return function () {
        var Hn = gn;
        gn = Un;
        try {
          return Dn.apply(this, arguments);
        } finally {
          gn = Hn;
        }
      };
    });
})(scheduler_production_min);
scheduler.exports = scheduler_production_min;
var schedulerExports = scheduler.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var aa = reactExports,
  ca = schedulerExports;
function p(e) {
  for (
    var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1;
    i < arguments.length;
    i++
  )
    a += "&args[]=" + encodeURIComponent(arguments[i]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    a +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var da = new Set(),
  ea = {};
function fa(e, a) {
  ha(e, a), ha(e + "Capture", a);
}
function ha(e, a) {
  for (ea[e] = a, e = 0; e < a.length; e++) da.add(a[e]);
}
var ia = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ja = Object.prototype.hasOwnProperty,
  ka =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  la = {},
  ma = {};
function oa(e) {
  return ja.call(ma, e)
    ? !0
    : ja.call(la, e)
    ? !1
    : ka.test(e)
    ? (ma[e] = !0)
    : ((la[e] = !0), !1);
}
function pa(e, a, i, o) {
  if (i !== null && i.type === 0) return !1;
  switch (typeof a) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return o
        ? !1
        : i !== null
        ? !i.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function qa(e, a, i, o) {
  if (a === null || typeof a > "u" || pa(e, a, i, o)) return !0;
  if (o) return !1;
  if (i !== null)
    switch (i.type) {
      case 3:
        return !a;
      case 4:
        return a === !1;
      case 5:
        return isNaN(a);
      case 6:
        return isNaN(a) || 1 > a;
    }
  return !1;
}
function v(e, a, i, o, c, h, b) {
  (this.acceptsBooleans = a === 2 || a === 3 || a === 4),
    (this.attributeName = o),
    (this.attributeNamespace = c),
    (this.mustUseProperty = i),
    (this.propertyName = e),
    (this.type = a),
    (this.sanitizeURL = h),
    (this.removeEmptyString = b);
}
var z = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    z[e] = new v(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var a = e[0];
  z[a] = new v(a, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  z[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  z[e] = new v(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    z[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  z[e] = new v(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  z[e] = new v(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  z[e] = new v(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  z[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ra = /[\-:]([a-z])/g;
function sa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var a = e.replace(ra, sa);
    z[a] = new v(a, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var a = e.replace(ra, sa);
    z[a] = new v(a, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var a = e.replace(ra, sa);
  z[a] = new v(a, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  z[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
z.xlinkHref = new v(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  z[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ta(e, a, i, o) {
  var c = z.hasOwnProperty(a) ? z[a] : null;
  (c !== null
    ? c.type !== 0
    : o ||
      !(2 < a.length) ||
      (a[0] !== "o" && a[0] !== "O") ||
      (a[1] !== "n" && a[1] !== "N")) &&
    (qa(a, i, c, o) && (i = null),
    o || c === null
      ? oa(a) && (i === null ? e.removeAttribute(a) : e.setAttribute(a, "" + i))
      : c.mustUseProperty
      ? (e[c.propertyName] = i === null ? (c.type === 3 ? !1 : "") : i)
      : ((a = c.attributeName),
        (o = c.attributeNamespace),
        i === null
          ? e.removeAttribute(a)
          : ((c = c.type),
            (i = c === 3 || (c === 4 && i === !0) ? "" : "" + i),
            o ? e.setAttributeNS(o, a, i) : e.setAttribute(a, i))));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  va = Symbol.for("react.element"),
  wa = Symbol.for("react.portal"),
  ya = Symbol.for("react.fragment"),
  za = Symbol.for("react.strict_mode"),
  Aa = Symbol.for("react.profiler"),
  Ba = Symbol.for("react.provider"),
  Ca = Symbol.for("react.context"),
  Da = Symbol.for("react.forward_ref"),
  Ea = Symbol.for("react.suspense"),
  Fa = Symbol.for("react.suspense_list"),
  Ga = Symbol.for("react.memo"),
  Ha = Symbol.for("react.lazy"),
  Ia = Symbol.for("react.offscreen"),
  Ja = Symbol.iterator;
function Ka(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ja && e[Ja]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var A = Object.assign,
  La;
function Ma(e) {
  if (La === void 0)
    try {
      throw Error();
    } catch (i) {
      var a = i.stack.trim().match(/\n( *(at )?)/);
      La = (a && a[1]) || "";
    }
  return (
    `
` +
    La +
    e
  );
}
var Na = !1;
function Oa(e, a) {
  if (!e || Na) return "";
  Na = !0;
  var i = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (a)
      if (
        ((a = function () {
          throw Error();
        }),
        Object.defineProperty(a.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(a, []);
        } catch (sn) {
          var o = sn;
        }
        Reflect.construct(e, [], a);
      } else {
        try {
          a.call();
        } catch (sn) {
          o = sn;
        }
        e.call(a.prototype);
      }
    else {
      try {
        throw Error();
      } catch (sn) {
        o = sn;
      }
      e();
    }
  } catch (sn) {
    if (sn && o && typeof sn.stack == "string") {
      for (
        var c = sn.stack.split(`
`),
          h = o.stack.split(`
`),
          b = c.length - 1,
          en = h.length - 1;
        1 <= b && 0 <= en && c[b] !== h[en];

      )
        en--;
      for (; 1 <= b && 0 <= en; b--, en--)
        if (c[b] !== h[en]) {
          if (b !== 1 || en !== 1)
            do
              if ((b--, en--, 0 > en || c[b] !== h[en])) {
                var tn =
                  `
` + c[b].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    tn.includes("<anonymous>") &&
                    (tn = tn.replace("<anonymous>", e.displayName)),
                  tn
                );
              }
            while (1 <= b && 0 <= en);
          break;
        }
    }
  } finally {
    (Na = !1), (Error.prepareStackTrace = i);
  }
  return (e = e ? e.displayName || e.name : "") ? Ma(e) : "";
}
function Pa(e) {
  switch (e.tag) {
    case 5:
      return Ma(e.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Oa(e.type, !1)), e;
    case 11:
      return (e = Oa(e.type.render, !1)), e;
    case 1:
      return (e = Oa(e.type, !0)), e;
    default:
      return "";
  }
}
function Qa(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ca:
        return (e.displayName || "Context") + ".Consumer";
      case Ba:
        return (e._context.displayName || "Context") + ".Provider";
      case Da:
        var a = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = a.displayName || a.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ga:
        return (
          (a = e.displayName || null), a !== null ? a : Qa(e.type) || "Memo"
        );
      case Ha:
        (a = e._payload), (e = e._init);
        try {
          return Qa(e(a));
        } catch {}
    }
  return null;
}
function Ra(e) {
  var a = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (a.displayName || "Context") + ".Consumer";
    case 10:
      return (a._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = a.render),
        (e = e.displayName || e.name || ""),
        a.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return a;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(a);
    case 8:
      return a === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof a == "function") return a.displayName || a.name || null;
      if (typeof a == "string") return a;
  }
  return null;
}
function Sa(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ta(e) {
  var a = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (a === "checkbox" || a === "radio")
  );
}
function Ua(e) {
  var a = Ta(e) ? "checked" : "value",
    i = Object.getOwnPropertyDescriptor(e.constructor.prototype, a),
    o = "" + e[a];
  if (
    !e.hasOwnProperty(a) &&
    typeof i < "u" &&
    typeof i.get == "function" &&
    typeof i.set == "function"
  ) {
    var c = i.get,
      h = i.set;
    return (
      Object.defineProperty(e, a, {
        configurable: !0,
        get: function () {
          return c.call(this);
        },
        set: function (b) {
          (o = "" + b), h.call(this, b);
        },
      }),
      Object.defineProperty(e, a, { enumerable: i.enumerable }),
      {
        getValue: function () {
          return o;
        },
        setValue: function (b) {
          o = "" + b;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[a];
        },
      }
    );
  }
}
function Va(e) {
  e._valueTracker || (e._valueTracker = Ua(e));
}
function Wa(e) {
  if (!e) return !1;
  var a = e._valueTracker;
  if (!a) return !0;
  var i = a.getValue(),
    o = "";
  return (
    e && (o = Ta(e) ? (e.checked ? "true" : "false") : e.value),
    (e = o),
    e !== i ? (a.setValue(e), !0) : !1
  );
}
function Xa(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ya(e, a) {
  var i = a.checked;
  return A({}, a, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: i ?? e._wrapperState.initialChecked,
  });
}
function Za(e, a) {
  var i = a.defaultValue == null ? "" : a.defaultValue,
    o = a.checked != null ? a.checked : a.defaultChecked;
  (i = Sa(a.value != null ? a.value : i)),
    (e._wrapperState = {
      initialChecked: o,
      initialValue: i,
      controlled:
        a.type === "checkbox" || a.type === "radio"
          ? a.checked != null
          : a.value != null,
    });
}
function ab(e, a) {
  (a = a.checked), a != null && ta(e, "checked", a, !1);
}
function bb(e, a) {
  ab(e, a);
  var i = Sa(a.value),
    o = a.type;
  if (i != null)
    o === "number"
      ? ((i === 0 && e.value === "") || e.value != i) && (e.value = "" + i)
      : e.value !== "" + i && (e.value = "" + i);
  else if (o === "submit" || o === "reset") {
    e.removeAttribute("value");
    return;
  }
  a.hasOwnProperty("value")
    ? cb(e, a.type, i)
    : a.hasOwnProperty("defaultValue") && cb(e, a.type, Sa(a.defaultValue)),
    a.checked == null &&
      a.defaultChecked != null &&
      (e.defaultChecked = !!a.defaultChecked);
}
function db(e, a, i) {
  if (a.hasOwnProperty("value") || a.hasOwnProperty("defaultValue")) {
    var o = a.type;
    if (
      !(
        (o !== "submit" && o !== "reset") ||
        (a.value !== void 0 && a.value !== null)
      )
    )
      return;
    (a = "" + e._wrapperState.initialValue),
      i || a === e.value || (e.value = a),
      (e.defaultValue = a);
  }
  (i = e.name),
    i !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    i !== "" && (e.name = i);
}
function cb(e, a, i) {
  (a !== "number" || Xa(e.ownerDocument) !== e) &&
    (i == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + i && (e.defaultValue = "" + i));
}
var eb = Array.isArray;
function fb(e, a, i, o) {
  if (((e = e.options), a)) {
    a = {};
    for (var c = 0; c < i.length; c++) a["$" + i[c]] = !0;
    for (i = 0; i < e.length; i++)
      (c = a.hasOwnProperty("$" + e[i].value)),
        e[i].selected !== c && (e[i].selected = c),
        c && o && (e[i].defaultSelected = !0);
  } else {
    for (i = "" + Sa(i), a = null, c = 0; c < e.length; c++) {
      if (e[c].value === i) {
        (e[c].selected = !0), o && (e[c].defaultSelected = !0);
        return;
      }
      a !== null || e[c].disabled || (a = e[c]);
    }
    a !== null && (a.selected = !0);
  }
}
function gb(e, a) {
  if (a.dangerouslySetInnerHTML != null) throw Error(p(91));
  return A({}, a, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function hb(e, a) {
  var i = a.value;
  if (i == null) {
    if (((i = a.children), (a = a.defaultValue), i != null)) {
      if (a != null) throw Error(p(92));
      if (eb(i)) {
        if (1 < i.length) throw Error(p(93));
        i = i[0];
      }
      a = i;
    }
    a == null && (a = ""), (i = a);
  }
  e._wrapperState = { initialValue: Sa(i) };
}
function ib(e, a) {
  var i = Sa(a.value),
    o = Sa(a.defaultValue);
  i != null &&
    ((i = "" + i),
    i !== e.value && (e.value = i),
    a.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)),
    o != null && (e.defaultValue = "" + o);
}
function jb(e) {
  var a = e.textContent;
  a === e._wrapperState.initialValue && a !== "" && a !== null && (e.value = a);
}
function kb(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(e, a) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? kb(a)
    : e === "http://www.w3.org/2000/svg" && a === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var mb,
  nb = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (a, i, o, c) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(a, i, o, c);
          });
        }
      : e;
  })(function (e, a) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = a;
    else {
      for (
        mb = mb || document.createElement("div"),
          mb.innerHTML = "<svg>" + a.valueOf().toString() + "</svg>",
          a = mb.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; a.firstChild; ) e.appendChild(a.firstChild);
    }
  });
function ob(e, a) {
  if (a) {
    var i = e.firstChild;
    if (i && i === e.lastChild && i.nodeType === 3) {
      i.nodeValue = a;
      return;
    }
  }
  e.textContent = a;
}
var pb = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function (e) {
  qb.forEach(function (a) {
    (a = a + e.charAt(0).toUpperCase() + e.substring(1)), (pb[a] = pb[e]);
  });
});
function rb(e, a, i) {
  return a == null || typeof a == "boolean" || a === ""
    ? ""
    : i || typeof a != "number" || a === 0 || (pb.hasOwnProperty(e) && pb[e])
    ? ("" + a).trim()
    : a + "px";
}
function sb(e, a) {
  e = e.style;
  for (var i in a)
    if (a.hasOwnProperty(i)) {
      var o = i.indexOf("--") === 0,
        c = rb(i, a[i], o);
      i === "float" && (i = "cssFloat"), o ? e.setProperty(i, c) : (e[i] = c);
    }
}
var tb = A(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ub(e, a) {
  if (a) {
    if (tb[e] && (a.children != null || a.dangerouslySetInnerHTML != null))
      throw Error(p(137, e));
    if (a.dangerouslySetInnerHTML != null) {
      if (a.children != null) throw Error(p(60));
      if (
        typeof a.dangerouslySetInnerHTML != "object" ||
        !("__html" in a.dangerouslySetInnerHTML)
      )
        throw Error(p(61));
    }
    if (a.style != null && typeof a.style != "object") throw Error(p(62));
  }
}
function vb(e, a) {
  if (e.indexOf("-") === -1) return typeof a.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var wb = null;
function xb(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var yb = null,
  zb = null,
  Ab = null;
function Bb(e) {
  if ((e = Cb(e))) {
    if (typeof yb != "function") throw Error(p(280));
    var a = e.stateNode;
    a && ((a = Db(a)), yb(e.stateNode, e.type, a));
  }
}
function Eb(e) {
  zb ? (Ab ? Ab.push(e) : (Ab = [e])) : (zb = e);
}
function Fb() {
  if (zb) {
    var e = zb,
      a = Ab;
    if (((Ab = zb = null), Bb(e), a)) for (e = 0; e < a.length; e++) Bb(a[e]);
  }
}
function Gb(e, a) {
  return e(a);
}
function Hb() {}
var Ib = !1;
function Jb(e, a, i) {
  if (Ib) return e(a, i);
  Ib = !0;
  try {
    return Gb(e, a, i);
  } finally {
    (Ib = !1), (zb !== null || Ab !== null) && (Hb(), Fb());
  }
}
function Kb(e, a) {
  var i = e.stateNode;
  if (i === null) return null;
  var o = Db(i);
  if (o === null) return null;
  i = o[a];
  e: switch (a) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (o = !o.disabled) ||
        ((e = e.type),
        (o = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !o);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (i && typeof i != "function") throw Error(p(231, a, typeof i));
  return i;
}
var Lb = !1;
if (ia)
  try {
    var Mb = {};
    Object.defineProperty(Mb, "passive", {
      get: function () {
        Lb = !0;
      },
    }),
      window.addEventListener("test", Mb, Mb),
      window.removeEventListener("test", Mb, Mb);
  } catch {
    Lb = !1;
  }
function Nb(e, a, i, o, c, h, b, en, tn) {
  var sn = Array.prototype.slice.call(arguments, 3);
  try {
    a.apply(i, sn);
  } catch (mn) {
    this.onError(mn);
  }
}
var Ob = !1,
  Pb = null,
  Qb = !1,
  Rb = null,
  Sb = {
    onError: function (e) {
      (Ob = !0), (Pb = e);
    },
  };
function Tb(e, a, i, o, c, h, b, en, tn) {
  (Ob = !1), (Pb = null), Nb.apply(Sb, arguments);
}
function Ub(e, a, i, o, c, h, b, en, tn) {
  if ((Tb.apply(this, arguments), Ob)) {
    if (Ob) {
      var sn = Pb;
      (Ob = !1), (Pb = null);
    } else throw Error(p(198));
    Qb || ((Qb = !0), (Rb = sn));
  }
}
function Vb(e) {
  var a = e,
    i = e;
  if (e.alternate) for (; a.return; ) a = a.return;
  else {
    e = a;
    do (a = e), a.flags & 4098 && (i = a.return), (e = a.return);
    while (e);
  }
  return a.tag === 3 ? i : null;
}
function Wb(e) {
  if (e.tag === 13) {
    var a = e.memoizedState;
    if (
      (a === null && ((e = e.alternate), e !== null && (a = e.memoizedState)),
      a !== null)
    )
      return a.dehydrated;
  }
  return null;
}
function Xb(e) {
  if (Vb(e) !== e) throw Error(p(188));
}
function Yb(e) {
  var a = e.alternate;
  if (!a) {
    if (((a = Vb(e)), a === null)) throw Error(p(188));
    return a !== e ? null : e;
  }
  for (var i = e, o = a; ; ) {
    var c = i.return;
    if (c === null) break;
    var h = c.alternate;
    if (h === null) {
      if (((o = c.return), o !== null)) {
        i = o;
        continue;
      }
      break;
    }
    if (c.child === h.child) {
      for (h = c.child; h; ) {
        if (h === i) return Xb(c), e;
        if (h === o) return Xb(c), a;
        h = h.sibling;
      }
      throw Error(p(188));
    }
    if (i.return !== o.return) (i = c), (o = h);
    else {
      for (var b = !1, en = c.child; en; ) {
        if (en === i) {
          (b = !0), (i = c), (o = h);
          break;
        }
        if (en === o) {
          (b = !0), (o = c), (i = h);
          break;
        }
        en = en.sibling;
      }
      if (!b) {
        for (en = h.child; en; ) {
          if (en === i) {
            (b = !0), (i = h), (o = c);
            break;
          }
          if (en === o) {
            (b = !0), (o = h), (i = c);
            break;
          }
          en = en.sibling;
        }
        if (!b) throw Error(p(189));
      }
    }
    if (i.alternate !== o) throw Error(p(190));
  }
  if (i.tag !== 3) throw Error(p(188));
  return i.stateNode.current === i ? e : a;
}
function Zb(e) {
  return (e = Yb(e)), e !== null ? $b(e) : null;
}
function $b(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var a = $b(e);
    if (a !== null) return a;
    e = e.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback,
  bc = ca.unstable_cancelCallback,
  cc = ca.unstable_shouldYield,
  dc = ca.unstable_requestPaint,
  B = ca.unstable_now,
  ec = ca.unstable_getCurrentPriorityLevel,
  fc = ca.unstable_ImmediatePriority,
  gc = ca.unstable_UserBlockingPriority,
  hc = ca.unstable_NormalPriority,
  ic = ca.unstable_LowPriority,
  jc = ca.unstable_IdlePriority,
  kc = null,
  lc = null;
function mc(e) {
  if (lc && typeof lc.onCommitFiberRoot == "function")
    try {
      lc.onCommitFiberRoot(kc, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var oc = Math.clz32 ? Math.clz32 : nc,
  pc = Math.log,
  qc = Math.LN2;
function nc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((pc(e) / qc) | 0)) | 0;
}
var rc = 64,
  sc = 4194304;
function tc(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function uc(e, a) {
  var i = e.pendingLanes;
  if (i === 0) return 0;
  var o = 0,
    c = e.suspendedLanes,
    h = e.pingedLanes,
    b = i & 268435455;
  if (b !== 0) {
    var en = b & ~c;
    en !== 0 ? (o = tc(en)) : ((h &= b), h !== 0 && (o = tc(h)));
  } else (b = i & ~c), b !== 0 ? (o = tc(b)) : h !== 0 && (o = tc(h));
  if (o === 0) return 0;
  if (
    a !== 0 &&
    a !== o &&
    !(a & c) &&
    ((c = o & -o), (h = a & -a), c >= h || (c === 16 && (h & 4194240) !== 0))
  )
    return a;
  if ((o & 4 && (o |= i & 16), (a = e.entangledLanes), a !== 0))
    for (e = e.entanglements, a &= o; 0 < a; )
      (i = 31 - oc(a)), (c = 1 << i), (o |= e[i]), (a &= ~c);
  return o;
}
function vc(e, a) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return a + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(e, a) {
  for (
    var i = e.suspendedLanes,
      o = e.pingedLanes,
      c = e.expirationTimes,
      h = e.pendingLanes;
    0 < h;

  ) {
    var b = 31 - oc(h),
      en = 1 << b,
      tn = c[b];
    tn === -1
      ? (!(en & i) || en & o) && (c[b] = vc(en, a))
      : tn <= a && (e.expiredLanes |= en),
      (h &= ~en);
  }
}
function xc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function yc() {
  var e = rc;
  return (rc <<= 1), !(rc & 4194240) && (rc = 64), e;
}
function zc(e) {
  for (var a = [], i = 0; 31 > i; i++) a.push(e);
  return a;
}
function Ac(e, a, i) {
  (e.pendingLanes |= a),
    a !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (a = 31 - oc(a)),
    (e[a] = i);
}
function Bc(e, a) {
  var i = e.pendingLanes & ~a;
  (e.pendingLanes = a),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= a),
    (e.mutableReadLanes &= a),
    (e.entangledLanes &= a),
    (a = e.entanglements);
  var o = e.eventTimes;
  for (e = e.expirationTimes; 0 < i; ) {
    var c = 31 - oc(i),
      h = 1 << c;
    (a[c] = 0), (o[c] = -1), (e[c] = -1), (i &= ~h);
  }
}
function Cc(e, a) {
  var i = (e.entangledLanes |= a);
  for (e = e.entanglements; i; ) {
    var o = 31 - oc(i),
      c = 1 << o;
    (c & a) | (e[o] & a) && (e[o] |= a), (i &= ~c);
  }
}
var C = 0;
function Dc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ec,
  Fc,
  Gc,
  Hc,
  Ic,
  Jc = !1,
  Kc = [],
  Lc = null,
  Mc = null,
  Nc = null,
  Oc = new Map(),
  Pc = new Map(),
  Qc = [],
  Rc =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Sc(e, a) {
  switch (e) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(a.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(a.pointerId);
  }
}
function Tc(e, a, i, o, c, h) {
  return e === null || e.nativeEvent !== h
    ? ((e = {
        blockedOn: a,
        domEventName: i,
        eventSystemFlags: o,
        nativeEvent: h,
        targetContainers: [c],
      }),
      a !== null && ((a = Cb(a)), a !== null && Fc(a)),
      e)
    : ((e.eventSystemFlags |= o),
      (a = e.targetContainers),
      c !== null && a.indexOf(c) === -1 && a.push(c),
      e);
}
function Uc(e, a, i, o, c) {
  switch (a) {
    case "focusin":
      return (Lc = Tc(Lc, e, a, i, o, c)), !0;
    case "dragenter":
      return (Mc = Tc(Mc, e, a, i, o, c)), !0;
    case "mouseover":
      return (Nc = Tc(Nc, e, a, i, o, c)), !0;
    case "pointerover":
      var h = c.pointerId;
      return Oc.set(h, Tc(Oc.get(h) || null, e, a, i, o, c)), !0;
    case "gotpointercapture":
      return (
        (h = c.pointerId), Pc.set(h, Tc(Pc.get(h) || null, e, a, i, o, c)), !0
      );
  }
  return !1;
}
function Vc(e) {
  var a = Wc(e.target);
  if (a !== null) {
    var i = Vb(a);
    if (i !== null) {
      if (((a = i.tag), a === 13)) {
        if (((a = Wb(i)), a !== null)) {
          (e.blockedOn = a),
            Ic(e.priority, function () {
              Gc(i);
            });
          return;
        }
      } else if (a === 3 && i.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Xc(e) {
  if (e.blockedOn !== null) return !1;
  for (var a = e.targetContainers; 0 < a.length; ) {
    var i = Yc(e.domEventName, e.eventSystemFlags, a[0], e.nativeEvent);
    if (i === null) {
      i = e.nativeEvent;
      var o = new i.constructor(i.type, i);
      (wb = o), i.target.dispatchEvent(o), (wb = null);
    } else return (a = Cb(i)), a !== null && Fc(a), (e.blockedOn = i), !1;
    a.shift();
  }
  return !0;
}
function Zc(e, a, i) {
  Xc(e) && i.delete(a);
}
function $c() {
  (Jc = !1),
    Lc !== null && Xc(Lc) && (Lc = null),
    Mc !== null && Xc(Mc) && (Mc = null),
    Nc !== null && Xc(Nc) && (Nc = null),
    Oc.forEach(Zc),
    Pc.forEach(Zc);
}
function ad(e, a) {
  e.blockedOn === a &&
    ((e.blockedOn = null),
    Jc ||
      ((Jc = !0),
      ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(e) {
  function a(c) {
    return ad(c, e);
  }
  if (0 < Kc.length) {
    ad(Kc[0], e);
    for (var i = 1; i < Kc.length; i++) {
      var o = Kc[i];
      o.blockedOn === e && (o.blockedOn = null);
    }
  }
  for (
    Lc !== null && ad(Lc, e),
      Mc !== null && ad(Mc, e),
      Nc !== null && ad(Nc, e),
      Oc.forEach(a),
      Pc.forEach(a),
      i = 0;
    i < Qc.length;
    i++
  )
    (o = Qc[i]), o.blockedOn === e && (o.blockedOn = null);
  for (; 0 < Qc.length && ((i = Qc[0]), i.blockedOn === null); )
    Vc(i), i.blockedOn === null && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig,
  dd = !0;
function ed(e, a, i, o) {
  var c = C,
    h = cd.transition;
  cd.transition = null;
  try {
    (C = 1), fd(e, a, i, o);
  } finally {
    (C = c), (cd.transition = h);
  }
}
function gd(e, a, i, o) {
  var c = C,
    h = cd.transition;
  cd.transition = null;
  try {
    (C = 4), fd(e, a, i, o);
  } finally {
    (C = c), (cd.transition = h);
  }
}
function fd(e, a, i, o) {
  if (dd) {
    var c = Yc(e, a, i, o);
    if (c === null) hd(e, a, o, id, i), Sc(e, o);
    else if (Uc(c, e, a, i, o)) o.stopPropagation();
    else if ((Sc(e, o), a & 4 && -1 < Rc.indexOf(e))) {
      for (; c !== null; ) {
        var h = Cb(c);
        if (
          (h !== null && Ec(h),
          (h = Yc(e, a, i, o)),
          h === null && hd(e, a, o, id, i),
          h === c)
        )
          break;
        c = h;
      }
      c !== null && o.stopPropagation();
    } else hd(e, a, o, null, i);
  }
}
var id = null;
function Yc(e, a, i, o) {
  if (((id = null), (e = xb(o)), (e = Wc(e)), e !== null))
    if (((a = Vb(e)), a === null)) e = null;
    else if (((i = a.tag), i === 13)) {
      if (((e = Wb(a)), e !== null)) return e;
      e = null;
    } else if (i === 3) {
      if (a.stateNode.current.memoizedState.isDehydrated)
        return a.tag === 3 ? a.stateNode.containerInfo : null;
      e = null;
    } else a !== e && (e = null);
  return (id = e), null;
}
function jd(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null,
  ld = null,
  md = null;
function nd() {
  if (md) return md;
  var e,
    a = ld,
    i = a.length,
    o,
    c = "value" in kd ? kd.value : kd.textContent,
    h = c.length;
  for (e = 0; e < i && a[e] === c[e]; e++);
  var b = i - e;
  for (o = 1; o <= b && a[i - o] === c[h - o]; o++);
  return (md = c.slice(e, 1 < o ? 1 - o : void 0));
}
function od(e) {
  var a = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && a === 13 && (e = 13))
      : (e = a),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function pd() {
  return !0;
}
function qd() {
  return !1;
}
function rd(e) {
  function a(i, o, c, h, b) {
    (this._reactName = i),
      (this._targetInst = c),
      (this.type = o),
      (this.nativeEvent = h),
      (this.target = b),
      (this.currentTarget = null);
    for (var en in e)
      e.hasOwnProperty(en) && ((i = e[en]), (this[en] = i ? i(h) : h[en]));
    return (
      (this.isDefaultPrevented = (
        h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1
      )
        ? pd
        : qd),
      (this.isPropagationStopped = qd),
      this
    );
  }
  return (
    A(a.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var i = this.nativeEvent;
        i &&
          (i.preventDefault
            ? i.preventDefault()
            : typeof i.returnValue != "unknown" && (i.returnValue = !1),
          (this.isDefaultPrevented = pd));
      },
      stopPropagation: function () {
        var i = this.nativeEvent;
        i &&
          (i.stopPropagation
            ? i.stopPropagation()
            : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0),
          (this.isPropagationStopped = pd));
      },
      persist: function () {},
      isPersistent: pd,
    }),
    a
  );
}
var sd = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  td = rd(sd),
  ud = A({}, sd, { view: 0, detail: 0 }),
  vd = rd(ud),
  wd,
  xd,
  yd,
  Ad = A({}, ud, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: zd,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== yd &&
            (yd && e.type === "mousemove"
              ? ((wd = e.screenX - yd.screenX), (xd = e.screenY - yd.screenY))
              : (xd = wd = 0),
            (yd = e)),
          wd);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : xd;
    },
  }),
  Bd = rd(Ad),
  Cd = A({}, Ad, { dataTransfer: 0 }),
  Dd = rd(Cd),
  Ed = A({}, ud, { relatedTarget: 0 }),
  Fd = rd(Ed),
  Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Hd = rd(Gd),
  Id = A({}, sd, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Jd = rd(Id),
  Kd = A({}, sd, { data: 0 }),
  Ld = rd(Kd),
  Md = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Nd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Od = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Pd(e) {
  var a = this.nativeEvent;
  return a.getModifierState ? a.getModifierState(e) : (e = Od[e]) ? !!a[e] : !1;
}
function zd() {
  return Pd;
}
var Qd = A({}, ud, {
    key: function (e) {
      if (e.key) {
        var a = Md[e.key] || e.key;
        if (a !== "Unidentified") return a;
      }
      return e.type === "keypress"
        ? ((e = od(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Nd[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: zd,
    charCode: function (e) {
      return e.type === "keypress" ? od(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? od(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Rd = rd(Qd),
  Sd = A({}, Ad, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Td = rd(Sd),
  Ud = A({}, ud, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zd,
  }),
  Vd = rd(Ud),
  Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Xd = rd(Wd),
  Yd = A({}, Ad, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Zd = rd(Yd),
  $d = [9, 13, 27, 32],
  ae = ia && "CompositionEvent" in window,
  be = null;
ia && "documentMode" in document && (be = document.documentMode);
var ce = ia && "TextEvent" in window && !be,
  de = ia && (!ae || (be && 8 < be && 11 >= be)),
  ee = " ",
  fe = !1;
function ge(e, a) {
  switch (e) {
    case "keyup":
      return $d.indexOf(a.keyCode) !== -1;
    case "keydown":
      return a.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function he(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ie = !1;
function je(e, a) {
  switch (e) {
    case "compositionend":
      return he(a);
    case "keypress":
      return a.which !== 32 ? null : ((fe = !0), ee);
    case "textInput":
      return (e = a.data), e === ee && fe ? null : e;
    default:
      return null;
  }
}
function ke(e, a) {
  if (ie)
    return e === "compositionend" || (!ae && ge(e, a))
      ? ((e = nd()), (md = ld = kd = null), (ie = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(a.ctrlKey || a.altKey || a.metaKey) || (a.ctrlKey && a.altKey)) {
        if (a.char && 1 < a.char.length) return a.char;
        if (a.which) return String.fromCharCode(a.which);
      }
      return null;
    case "compositionend":
      return de && a.locale !== "ko" ? null : a.data;
    default:
      return null;
  }
}
var le = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function me(e) {
  var a = e && e.nodeName && e.nodeName.toLowerCase();
  return a === "input" ? !!le[e.type] : a === "textarea";
}
function ne(e, a, i, o) {
  Eb(o),
    (a = oe(a, "onChange")),
    0 < a.length &&
      ((i = new td("onChange", "change", null, i, o)),
      e.push({ event: i, listeners: a }));
}
var pe = null,
  qe = null;
function re(e) {
  se(e, 0);
}
function te(e) {
  var a = ue(e);
  if (Wa(a)) return e;
}
function ve(e, a) {
  if (e === "change") return a;
}
var we = !1;
if (ia) {
  var xe;
  if (ia) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;"),
        (ye = typeof ze.oninput == "function");
    }
    xe = ye;
  } else xe = !1;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), (qe = pe = null));
}
function Be(e) {
  if (e.propertyName === "value" && te(qe)) {
    var a = [];
    ne(a, qe, e, xb(e)), Jb(re, a);
  }
}
function Ce(e, a, i) {
  e === "focusin"
    ? (Ae(), (pe = a), (qe = i), pe.attachEvent("onpropertychange", Be))
    : e === "focusout" && Ae();
}
function De(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return te(qe);
}
function Ee(e, a) {
  if (e === "click") return te(a);
}
function Fe(e, a) {
  if (e === "input" || e === "change") return te(a);
}
function Ge(e, a) {
  return (e === a && (e !== 0 || 1 / e === 1 / a)) || (e !== e && a !== a);
}
var He = typeof Object.is == "function" ? Object.is : Ge;
function Ie(e, a) {
  if (He(e, a)) return !0;
  if (typeof e != "object" || e === null || typeof a != "object" || a === null)
    return !1;
  var i = Object.keys(e),
    o = Object.keys(a);
  if (i.length !== o.length) return !1;
  for (o = 0; o < i.length; o++) {
    var c = i[o];
    if (!ja.call(a, c) || !He(e[c], a[c])) return !1;
  }
  return !0;
}
function Je(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ke(e, a) {
  var i = Je(e);
  e = 0;
  for (var o; i; ) {
    if (i.nodeType === 3) {
      if (((o = e + i.textContent.length), e <= a && o >= a))
        return { node: i, offset: a - e };
      e = o;
    }
    e: {
      for (; i; ) {
        if (i.nextSibling) {
          i = i.nextSibling;
          break e;
        }
        i = i.parentNode;
      }
      i = void 0;
    }
    i = Je(i);
  }
}
function Le(e, a) {
  return e && a
    ? e === a
      ? !0
      : e && e.nodeType === 3
      ? !1
      : a && a.nodeType === 3
      ? Le(e, a.parentNode)
      : "contains" in e
      ? e.contains(a)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(a) & 16)
      : !1
    : !1;
}
function Me() {
  for (var e = window, a = Xa(); a instanceof e.HTMLIFrameElement; ) {
    try {
      var i = typeof a.contentWindow.location.href == "string";
    } catch {
      i = !1;
    }
    if (i) e = a.contentWindow;
    else break;
    a = Xa(e.document);
  }
  return a;
}
function Ne(e) {
  var a = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    a &&
    ((a === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      a === "textarea" ||
      e.contentEditable === "true")
  );
}
function Oe(e) {
  var a = Me(),
    i = e.focusedElem,
    o = e.selectionRange;
  if (
    a !== i &&
    i &&
    i.ownerDocument &&
    Le(i.ownerDocument.documentElement, i)
  ) {
    if (o !== null && Ne(i)) {
      if (
        ((a = o.start),
        (e = o.end),
        e === void 0 && (e = a),
        "selectionStart" in i)
      )
        (i.selectionStart = a), (i.selectionEnd = Math.min(e, i.value.length));
      else if (
        ((e = ((a = i.ownerDocument || document) && a.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var c = i.textContent.length,
          h = Math.min(o.start, c);
        (o = o.end === void 0 ? h : Math.min(o.end, c)),
          !e.extend && h > o && ((c = o), (o = h), (h = c)),
          (c = Ke(i, h));
        var b = Ke(i, o);
        c &&
          b &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== c.node ||
            e.anchorOffset !== c.offset ||
            e.focusNode !== b.node ||
            e.focusOffset !== b.offset) &&
          ((a = a.createRange()),
          a.setStart(c.node, c.offset),
          e.removeAllRanges(),
          h > o
            ? (e.addRange(a), e.extend(b.node, b.offset))
            : (a.setEnd(b.node, b.offset), e.addRange(a)));
      }
    }
    for (a = [], e = i; (e = e.parentNode); )
      e.nodeType === 1 &&
        a.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof i.focus == "function" && i.focus(), i = 0; i < a.length; i++)
      (e = a[i]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode,
  Qe = null,
  Re = null,
  Se = null,
  Te = !1;
function Ue(e, a, i) {
  var o = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
  Te ||
    Qe == null ||
    Qe !== Xa(o) ||
    ((o = Qe),
    "selectionStart" in o && Ne(o)
      ? (o = { start: o.selectionStart, end: o.selectionEnd })
      : ((o = (
          (o.ownerDocument && o.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (o = {
          anchorNode: o.anchorNode,
          anchorOffset: o.anchorOffset,
          focusNode: o.focusNode,
          focusOffset: o.focusOffset,
        })),
    (Se && Ie(Se, o)) ||
      ((Se = o),
      (o = oe(Re, "onSelect")),
      0 < o.length &&
        ((a = new td("onSelect", "select", null, a, i)),
        e.push({ event: a, listeners: o }),
        (a.target = Qe))));
}
function Ve(e, a) {
  var i = {};
  return (
    (i[e.toLowerCase()] = a.toLowerCase()),
    (i["Webkit" + e] = "webkit" + a),
    (i["Moz" + e] = "moz" + a),
    i
  );
}
var We = {
    animationend: Ve("Animation", "AnimationEnd"),
    animationiteration: Ve("Animation", "AnimationIteration"),
    animationstart: Ve("Animation", "AnimationStart"),
    transitionend: Ve("Transition", "TransitionEnd"),
  },
  Xe = {},
  Ye = {};
ia &&
  ((Ye = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete We.animationend.animation,
    delete We.animationiteration.animation,
    delete We.animationstart.animation),
  "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(e) {
  if (Xe[e]) return Xe[e];
  if (!We[e]) return e;
  var a = We[e],
    i;
  for (i in a) if (a.hasOwnProperty(i) && i in Ye) return (Xe[e] = a[i]);
  return e;
}
var $e = Ze("animationend"),
  af = Ze("animationiteration"),
  bf = Ze("animationstart"),
  cf = Ze("transitionend"),
  df = new Map(),
  ef =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function ff(e, a) {
  df.set(e, a), fa(a, [e]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf],
    jf = hf.toLowerCase(),
    kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
fa(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
fa(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
fa(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var lf =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(e, a, i) {
  var o = e.type || "unknown-event";
  (e.currentTarget = i), Ub(o, a, void 0, e), (e.currentTarget = null);
}
function se(e, a) {
  a = (a & 4) !== 0;
  for (var i = 0; i < e.length; i++) {
    var o = e[i],
      c = o.event;
    o = o.listeners;
    e: {
      var h = void 0;
      if (a)
        for (var b = o.length - 1; 0 <= b; b--) {
          var en = o[b],
            tn = en.instance,
            sn = en.currentTarget;
          if (((en = en.listener), tn !== h && c.isPropagationStopped()))
            break e;
          nf(c, en, sn), (h = tn);
        }
      else
        for (b = 0; b < o.length; b++) {
          if (
            ((en = o[b]),
            (tn = en.instance),
            (sn = en.currentTarget),
            (en = en.listener),
            tn !== h && c.isPropagationStopped())
          )
            break e;
          nf(c, en, sn), (h = tn);
        }
    }
  }
  if (Qb) throw ((e = Rb), (Qb = !1), (Rb = null), e);
}
function D(e, a) {
  var i = a[of];
  i === void 0 && (i = a[of] = new Set());
  var o = e + "__bubble";
  i.has(o) || (pf(a, e, 2, !1), i.add(o));
}
function qf(e, a, i) {
  var o = 0;
  a && (o |= 4), pf(i, e, o, a);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(e) {
  if (!e[rf]) {
    (e[rf] = !0),
      da.forEach(function (i) {
        i !== "selectionchange" && (mf.has(i) || qf(i, !1, e), qf(i, !0, e));
      });
    var a = e.nodeType === 9 ? e : e.ownerDocument;
    a === null || a[rf] || ((a[rf] = !0), qf("selectionchange", !1, a));
  }
}
function pf(e, a, i, o) {
  switch (jd(a)) {
    case 1:
      var c = ed;
      break;
    case 4:
      c = gd;
      break;
    default:
      c = fd;
  }
  (i = c.bind(null, a, i, e)),
    (c = void 0),
    !Lb ||
      (a !== "touchstart" && a !== "touchmove" && a !== "wheel") ||
      (c = !0),
    o
      ? c !== void 0
        ? e.addEventListener(a, i, { capture: !0, passive: c })
        : e.addEventListener(a, i, !0)
      : c !== void 0
      ? e.addEventListener(a, i, { passive: c })
      : e.addEventListener(a, i, !1);
}
function hd(e, a, i, o, c) {
  var h = o;
  if (!(a & 1) && !(a & 2) && o !== null)
    e: for (;;) {
      if (o === null) return;
      var b = o.tag;
      if (b === 3 || b === 4) {
        var en = o.stateNode.containerInfo;
        if (en === c || (en.nodeType === 8 && en.parentNode === c)) break;
        if (b === 4)
          for (b = o.return; b !== null; ) {
            var tn = b.tag;
            if (
              (tn === 3 || tn === 4) &&
              ((tn = b.stateNode.containerInfo),
              tn === c || (tn.nodeType === 8 && tn.parentNode === c))
            )
              return;
            b = b.return;
          }
        for (; en !== null; ) {
          if (((b = Wc(en)), b === null)) return;
          if (((tn = b.tag), tn === 5 || tn === 6)) {
            o = h = b;
            continue e;
          }
          en = en.parentNode;
        }
      }
      o = o.return;
    }
  Jb(function () {
    var sn = h,
      mn = xb(i),
      hn = [];
    e: {
      var gn = df.get(e);
      if (gn !== void 0) {
        var Sn = td,
          An = e;
        switch (e) {
          case "keypress":
            if (od(i) === 0) break e;
          case "keydown":
          case "keyup":
            Sn = Rd;
            break;
          case "focusin":
            (An = "focus"), (Sn = Fd);
            break;
          case "focusout":
            (An = "blur"), (Sn = Fd);
            break;
          case "beforeblur":
          case "afterblur":
            Sn = Fd;
            break;
          case "click":
            if (i.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            Sn = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            Sn = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            Sn = Vd;
            break;
          case $e:
          case af:
          case bf:
            Sn = Hd;
            break;
          case cf:
            Sn = Xd;
            break;
          case "scroll":
            Sn = vd;
            break;
          case "wheel":
            Sn = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            Sn = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            Sn = Td;
        }
        var xn = (a & 4) !== 0,
          Cn = !xn && e === "scroll",
          an = xn ? (gn !== null ? gn + "Capture" : null) : gn;
        xn = [];
        for (var un = sn, dn; un !== null; ) {
          dn = un;
          var Mn = dn.stateNode;
          if (
            (dn.tag === 5 &&
              Mn !== null &&
              ((dn = Mn),
              an !== null &&
                ((Mn = Kb(un, an)), Mn != null && xn.push(tf(un, Mn, dn)))),
            Cn)
          )
            break;
          un = un.return;
        }
        0 < xn.length &&
          ((gn = new Sn(gn, An, null, i, mn)),
          hn.push({ event: gn, listeners: xn }));
      }
    }
    if (!(a & 7)) {
      e: {
        if (
          ((gn = e === "mouseover" || e === "pointerover"),
          (Sn = e === "mouseout" || e === "pointerout"),
          gn &&
            i !== wb &&
            (An = i.relatedTarget || i.fromElement) &&
            (Wc(An) || An[uf]))
        )
          break e;
        if (
          (Sn || gn) &&
          ((gn =
            mn.window === mn
              ? mn
              : (gn = mn.ownerDocument)
              ? gn.defaultView || gn.parentWindow
              : window),
          Sn
            ? ((An = i.relatedTarget || i.toElement),
              (Sn = sn),
              (An = An ? Wc(An) : null),
              An !== null &&
                ((Cn = Vb(An)), An !== Cn || (An.tag !== 5 && An.tag !== 6)) &&
                (An = null))
            : ((Sn = null), (An = sn)),
          Sn !== An)
        ) {
          if (
            ((xn = Bd),
            (Mn = "onMouseLeave"),
            (an = "onMouseEnter"),
            (un = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((xn = Td),
              (Mn = "onPointerLeave"),
              (an = "onPointerEnter"),
              (un = "pointer")),
            (Cn = Sn == null ? gn : ue(Sn)),
            (dn = An == null ? gn : ue(An)),
            (gn = new xn(Mn, un + "leave", Sn, i, mn)),
            (gn.target = Cn),
            (gn.relatedTarget = dn),
            (Mn = null),
            Wc(mn) === sn &&
              ((xn = new xn(an, un + "enter", An, i, mn)),
              (xn.target = dn),
              (xn.relatedTarget = Cn),
              (Mn = xn)),
            (Cn = Mn),
            Sn && An)
          )
            n: {
              for (xn = Sn, an = An, un = 0, dn = xn; dn; dn = vf(dn)) un++;
              for (dn = 0, Mn = an; Mn; Mn = vf(Mn)) dn++;
              for (; 0 < un - dn; ) (xn = vf(xn)), un--;
              for (; 0 < dn - un; ) (an = vf(an)), dn--;
              for (; un--; ) {
                if (xn === an || (an !== null && xn === an.alternate)) break n;
                (xn = vf(xn)), (an = vf(an));
              }
              xn = null;
            }
          else xn = null;
          Sn !== null && wf(hn, gn, Sn, xn, !1),
            An !== null && Cn !== null && wf(hn, Cn, An, xn, !0);
        }
      }
      e: {
        if (
          ((gn = sn ? ue(sn) : window),
          (Sn = gn.nodeName && gn.nodeName.toLowerCase()),
          Sn === "select" || (Sn === "input" && gn.type === "file"))
        )
          var jn = ve;
        else if (me(gn))
          if (we) jn = Fe;
          else {
            jn = De;
            var In = Ce;
          }
        else
          (Sn = gn.nodeName) &&
            Sn.toLowerCase() === "input" &&
            (gn.type === "checkbox" || gn.type === "radio") &&
            (jn = Ee);
        if (jn && (jn = jn(e, sn))) {
          ne(hn, jn, i, mn);
          break e;
        }
        In && In(e, gn, sn),
          e === "focusout" &&
            (In = gn._wrapperState) &&
            In.controlled &&
            gn.type === "number" &&
            cb(gn, "number", gn.value);
      }
      switch (((In = sn ? ue(sn) : window), e)) {
        case "focusin":
          (me(In) || In.contentEditable === "true") &&
            ((Qe = In), (Re = sn), (Se = null));
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Te = !1), Ue(hn, i, mn);
          break;
        case "selectionchange":
          if (Pe) break;
        case "keydown":
        case "keyup":
          Ue(hn, i, mn);
      }
      var _;
      if (ae)
        e: {
          switch (e) {
            case "compositionstart":
              var Bn = "onCompositionStart";
              break e;
            case "compositionend":
              Bn = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Bn = "onCompositionUpdate";
              break e;
          }
          Bn = void 0;
        }
      else
        ie
          ? ge(e, i) && (Bn = "onCompositionEnd")
          : e === "keydown" && i.keyCode === 229 && (Bn = "onCompositionStart");
      Bn &&
        (de &&
          i.locale !== "ko" &&
          (ie || Bn !== "onCompositionStart"
            ? Bn === "onCompositionEnd" && ie && (_ = nd())
            : ((kd = mn),
              (ld = "value" in kd ? kd.value : kd.textContent),
              (ie = !0))),
        (In = oe(sn, Bn)),
        0 < In.length &&
          ((Bn = new Ld(Bn, e, null, i, mn)),
          hn.push({ event: Bn, listeners: In }),
          _ ? (Bn.data = _) : ((_ = he(i)), _ !== null && (Bn.data = _)))),
        (_ = ce ? je(e, i) : ke(e, i)) &&
          ((sn = oe(sn, "onBeforeInput")),
          0 < sn.length &&
            ((mn = new Ld("onBeforeInput", "beforeinput", null, i, mn)),
            hn.push({ event: mn, listeners: sn }),
            (mn.data = _)));
    }
    se(hn, a);
  });
}
function tf(e, a, i) {
  return { instance: e, listener: a, currentTarget: i };
}
function oe(e, a) {
  for (var i = a + "Capture", o = []; e !== null; ) {
    var c = e,
      h = c.stateNode;
    c.tag === 5 &&
      h !== null &&
      ((c = h),
      (h = Kb(e, i)),
      h != null && o.unshift(tf(e, h, c)),
      (h = Kb(e, a)),
      h != null && o.push(tf(e, h, c))),
      (e = e.return);
  }
  return o;
}
function vf(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function wf(e, a, i, o, c) {
  for (var h = a._reactName, b = []; i !== null && i !== o; ) {
    var en = i,
      tn = en.alternate,
      sn = en.stateNode;
    if (tn !== null && tn === o) break;
    en.tag === 5 &&
      sn !== null &&
      ((en = sn),
      c
        ? ((tn = Kb(i, h)), tn != null && b.unshift(tf(i, tn, en)))
        : c || ((tn = Kb(i, h)), tn != null && b.push(tf(i, tn, en)))),
      (i = i.return);
  }
  b.length !== 0 && e.push({ event: a, listeners: b });
}
var xf = /\r\n?/g,
  yf = /\u0000|\uFFFD/g;
function zf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      xf,
      `
`
    )
    .replace(yf, "");
}
function Af(e, a, i) {
  if (((a = zf(a)), zf(e) !== a && i)) throw Error(p(425));
}
function Bf() {}
var Cf = null,
  Df = null;
function Ef(e, a) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof a.children == "string" ||
    typeof a.children == "number" ||
    (typeof a.dangerouslySetInnerHTML == "object" &&
      a.dangerouslySetInnerHTML !== null &&
      a.dangerouslySetInnerHTML.__html != null)
  );
}
var Ff = typeof setTimeout == "function" ? setTimeout : void 0,
  Gf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Hf = typeof Promise == "function" ? Promise : void 0,
  Jf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Hf < "u"
      ? function (e) {
          return Hf.resolve(null).then(e).catch(If);
        }
      : Ff;
function If(e) {
  setTimeout(function () {
    throw e;
  });
}
function Kf(e, a) {
  var i = a,
    o = 0;
  do {
    var c = i.nextSibling;
    if ((e.removeChild(i), c && c.nodeType === 8))
      if (((i = c.data), i === "/$")) {
        if (o === 0) {
          e.removeChild(c), bd(a);
          return;
        }
        o--;
      } else (i !== "$" && i !== "$?" && i !== "$!") || o++;
    i = c;
  } while (i);
  bd(a);
}
function Lf(e) {
  for (; e != null; e = e.nextSibling) {
    var a = e.nodeType;
    if (a === 1 || a === 3) break;
    if (a === 8) {
      if (((a = e.data), a === "$" || a === "$!" || a === "$?")) break;
      if (a === "/$") return null;
    }
  }
  return e;
}
function Mf(e) {
  e = e.previousSibling;
  for (var a = 0; e; ) {
    if (e.nodeType === 8) {
      var i = e.data;
      if (i === "$" || i === "$!" || i === "$?") {
        if (a === 0) return e;
        a--;
      } else i === "/$" && a++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2),
  Of = "__reactFiber$" + Nf,
  Pf = "__reactProps$" + Nf,
  uf = "__reactContainer$" + Nf,
  of = "__reactEvents$" + Nf,
  Qf = "__reactListeners$" + Nf,
  Rf = "__reactHandles$" + Nf;
function Wc(e) {
  var a = e[Of];
  if (a) return a;
  for (var i = e.parentNode; i; ) {
    if ((a = i[uf] || i[Of])) {
      if (
        ((i = a.alternate),
        a.child !== null || (i !== null && i.child !== null))
      )
        for (e = Mf(e); e !== null; ) {
          if ((i = e[Of])) return i;
          e = Mf(e);
        }
      return a;
    }
    (e = i), (i = e.parentNode);
  }
  return null;
}
function Cb(e) {
  return (
    (e = e[Of] || e[uf]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ue(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(p(33));
}
function Db(e) {
  return e[Pf] || null;
}
var Sf = [],
  Tf = -1;
function Uf(e) {
  return { current: e };
}
function E(e) {
  0 > Tf || ((e.current = Sf[Tf]), (Sf[Tf] = null), Tf--);
}
function G(e, a) {
  Tf++, (Sf[Tf] = e.current), (e.current = a);
}
var Vf = {},
  H = Uf(Vf),
  Wf = Uf(!1),
  Xf = Vf;
function Yf(e, a) {
  var i = e.type.contextTypes;
  if (!i) return Vf;
  var o = e.stateNode;
  if (o && o.__reactInternalMemoizedUnmaskedChildContext === a)
    return o.__reactInternalMemoizedMaskedChildContext;
  var c = {},
    h;
  for (h in i) c[h] = a[h];
  return (
    o &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = a),
      (e.__reactInternalMemoizedMaskedChildContext = c)),
    c
  );
}
function Zf(e) {
  return (e = e.childContextTypes), e != null;
}
function $f() {
  E(Wf), E(H);
}
function ag(e, a, i) {
  if (H.current !== Vf) throw Error(p(168));
  G(H, a), G(Wf, i);
}
function bg(e, a, i) {
  var o = e.stateNode;
  if (((a = a.childContextTypes), typeof o.getChildContext != "function"))
    return i;
  o = o.getChildContext();
  for (var c in o) if (!(c in a)) throw Error(p(108, Ra(e) || "Unknown", c));
  return A({}, i, o);
}
function cg(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Vf),
    (Xf = H.current),
    G(H, e),
    G(Wf, Wf.current),
    !0
  );
}
function dg(e, a, i) {
  var o = e.stateNode;
  if (!o) throw Error(p(169));
  i
    ? ((e = bg(e, a, Xf)),
      (o.__reactInternalMemoizedMergedChildContext = e),
      E(Wf),
      E(H),
      G(H, e))
    : E(Wf),
    G(Wf, i);
}
var eg = null,
  fg = !1,
  gg = !1;
function hg(e) {
  eg === null ? (eg = [e]) : eg.push(e);
}
function ig(e) {
  (fg = !0), hg(e);
}
function jg() {
  if (!gg && eg !== null) {
    gg = !0;
    var e = 0,
      a = C;
    try {
      var i = eg;
      for (C = 1; e < i.length; e++) {
        var o = i[e];
        do o = o(!0);
        while (o !== null);
      }
      (eg = null), (fg = !1);
    } catch (c) {
      throw (eg !== null && (eg = eg.slice(e + 1)), ac(fc, jg), c);
    } finally {
      (C = a), (gg = !1);
    }
  }
  return null;
}
var kg = [],
  lg = 0,
  mg = null,
  ng = 0,
  og = [],
  pg = 0,
  qg = null,
  rg = 1,
  sg = "";
function tg(e, a) {
  (kg[lg++] = ng), (kg[lg++] = mg), (mg = e), (ng = a);
}
function ug(e, a, i) {
  (og[pg++] = rg), (og[pg++] = sg), (og[pg++] = qg), (qg = e);
  var o = rg;
  e = sg;
  var c = 32 - oc(o) - 1;
  (o &= ~(1 << c)), (i += 1);
  var h = 32 - oc(a) + c;
  if (30 < h) {
    var b = c - (c % 5);
    (h = (o & ((1 << b) - 1)).toString(32)),
      (o >>= b),
      (c -= b),
      (rg = (1 << (32 - oc(a) + c)) | (i << c) | o),
      (sg = h + e);
  } else (rg = (1 << h) | (i << c) | o), (sg = e);
}
function vg(e) {
  e.return !== null && (tg(e, 1), ug(e, 1, 0));
}
function wg(e) {
  for (; e === mg; )
    (mg = kg[--lg]), (kg[lg] = null), (ng = kg[--lg]), (kg[lg] = null);
  for (; e === qg; )
    (qg = og[--pg]),
      (og[pg] = null),
      (sg = og[--pg]),
      (og[pg] = null),
      (rg = og[--pg]),
      (og[pg] = null);
}
var xg = null,
  yg = null,
  I = !1,
  zg = null;
function Ag(e, a) {
  var i = Bg(5, null, null, 0);
  (i.elementType = "DELETED"),
    (i.stateNode = a),
    (i.return = e),
    (a = e.deletions),
    a === null ? ((e.deletions = [i]), (e.flags |= 16)) : a.push(i);
}
function Cg(e, a) {
  switch (e.tag) {
    case 5:
      var i = e.type;
      return (
        (a =
          a.nodeType !== 1 || i.toLowerCase() !== a.nodeName.toLowerCase()
            ? null
            : a),
        a !== null
          ? ((e.stateNode = a), (xg = e), (yg = Lf(a.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (a = e.pendingProps === "" || a.nodeType !== 3 ? null : a),
        a !== null ? ((e.stateNode = a), (xg = e), (yg = null), !0) : !1
      );
    case 13:
      return (
        (a = a.nodeType !== 8 ? null : a),
        a !== null
          ? ((i = qg !== null ? { id: rg, overflow: sg } : null),
            (e.memoizedState = {
              dehydrated: a,
              treeContext: i,
              retryLane: 1073741824,
            }),
            (i = Bg(18, null, null, 0)),
            (i.stateNode = a),
            (i.return = e),
            (e.child = i),
            (xg = e),
            (yg = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Dg(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Eg(e) {
  if (I) {
    var a = yg;
    if (a) {
      var i = a;
      if (!Cg(e, a)) {
        if (Dg(e)) throw Error(p(418));
        a = Lf(i.nextSibling);
        var o = xg;
        a && Cg(e, a)
          ? Ag(o, i)
          : ((e.flags = (e.flags & -4097) | 2), (I = !1), (xg = e));
      }
    } else {
      if (Dg(e)) throw Error(p(418));
      (e.flags = (e.flags & -4097) | 2), (I = !1), (xg = e);
    }
  }
}
function Fg(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  xg = e;
}
function Gg(e) {
  if (e !== xg) return !1;
  if (!I) return Fg(e), (I = !0), !1;
  var a;
  if (
    ((a = e.tag !== 3) &&
      !(a = e.tag !== 5) &&
      ((a = e.type),
      (a = a !== "head" && a !== "body" && !Ef(e.type, e.memoizedProps))),
    a && (a = yg))
  ) {
    if (Dg(e)) throw (Hg(), Error(p(418)));
    for (; a; ) Ag(e, a), (a = Lf(a.nextSibling));
  }
  if ((Fg(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(p(317));
    e: {
      for (e = e.nextSibling, a = 0; e; ) {
        if (e.nodeType === 8) {
          var i = e.data;
          if (i === "/$") {
            if (a === 0) {
              yg = Lf(e.nextSibling);
              break e;
            }
            a--;
          } else (i !== "$" && i !== "$!" && i !== "$?") || a++;
        }
        e = e.nextSibling;
      }
      yg = null;
    }
  } else yg = xg ? Lf(e.stateNode.nextSibling) : null;
  return !0;
}
function Hg() {
  for (var e = yg; e; ) e = Lf(e.nextSibling);
}
function Ig() {
  (yg = xg = null), (I = !1);
}
function Jg(e) {
  zg === null ? (zg = [e]) : zg.push(e);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(e, a, i) {
  if (
    ((e = i.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (i._owner) {
      if (((i = i._owner), i)) {
        if (i.tag !== 1) throw Error(p(309));
        var o = i.stateNode;
      }
      if (!o) throw Error(p(147, e));
      var c = o,
        h = "" + e;
      return a !== null &&
        a.ref !== null &&
        typeof a.ref == "function" &&
        a.ref._stringRef === h
        ? a.ref
        : ((a = function (b) {
            var en = c.refs;
            b === null ? delete en[h] : (en[h] = b);
          }),
          (a._stringRef = h),
          a);
    }
    if (typeof e != "string") throw Error(p(284));
    if (!i._owner) throw Error(p(290, e));
  }
  return e;
}
function Mg(e, a) {
  throw (
    ((e = Object.prototype.toString.call(a)),
    Error(
      p(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(a).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ng(e) {
  var a = e._init;
  return a(e._payload);
}
function Og(e) {
  function a(an, un) {
    if (e) {
      var dn = an.deletions;
      dn === null ? ((an.deletions = [un]), (an.flags |= 16)) : dn.push(un);
    }
  }
  function i(an, un) {
    if (!e) return null;
    for (; un !== null; ) a(an, un), (un = un.sibling);
    return null;
  }
  function o(an, un) {
    for (an = new Map(); un !== null; )
      un.key !== null ? an.set(un.key, un) : an.set(un.index, un),
        (un = un.sibling);
    return an;
  }
  function c(an, un) {
    return (an = Pg(an, un)), (an.index = 0), (an.sibling = null), an;
  }
  function h(an, un, dn) {
    return (
      (an.index = dn),
      e
        ? ((dn = an.alternate),
          dn !== null
            ? ((dn = dn.index), dn < un ? ((an.flags |= 2), un) : dn)
            : ((an.flags |= 2), un))
        : ((an.flags |= 1048576), un)
    );
  }
  function b(an) {
    return e && an.alternate === null && (an.flags |= 2), an;
  }
  function en(an, un, dn, Mn) {
    return un === null || un.tag !== 6
      ? ((un = Qg(dn, an.mode, Mn)), (un.return = an), un)
      : ((un = c(un, dn)), (un.return = an), un);
  }
  function tn(an, un, dn, Mn) {
    var jn = dn.type;
    return jn === ya
      ? mn(an, un, dn.props.children, Mn, dn.key)
      : un !== null &&
        (un.elementType === jn ||
          (typeof jn == "object" &&
            jn !== null &&
            jn.$$typeof === Ha &&
            Ng(jn) === un.type))
      ? ((Mn = c(un, dn.props)),
        (Mn.ref = Lg(an, un, dn)),
        (Mn.return = an),
        Mn)
      : ((Mn = Rg(dn.type, dn.key, dn.props, null, an.mode, Mn)),
        (Mn.ref = Lg(an, un, dn)),
        (Mn.return = an),
        Mn);
  }
  function sn(an, un, dn, Mn) {
    return un === null ||
      un.tag !== 4 ||
      un.stateNode.containerInfo !== dn.containerInfo ||
      un.stateNode.implementation !== dn.implementation
      ? ((un = Sg(dn, an.mode, Mn)), (un.return = an), un)
      : ((un = c(un, dn.children || [])), (un.return = an), un);
  }
  function mn(an, un, dn, Mn, jn) {
    return un === null || un.tag !== 7
      ? ((un = Tg(dn, an.mode, Mn, jn)), (un.return = an), un)
      : ((un = c(un, dn)), (un.return = an), un);
  }
  function hn(an, un, dn) {
    if ((typeof un == "string" && un !== "") || typeof un == "number")
      return (un = Qg("" + un, an.mode, dn)), (un.return = an), un;
    if (typeof un == "object" && un !== null) {
      switch (un.$$typeof) {
        case va:
          return (
            (dn = Rg(un.type, un.key, un.props, null, an.mode, dn)),
            (dn.ref = Lg(an, null, un)),
            (dn.return = an),
            dn
          );
        case wa:
          return (un = Sg(un, an.mode, dn)), (un.return = an), un;
        case Ha:
          var Mn = un._init;
          return hn(an, Mn(un._payload), dn);
      }
      if (eb(un) || Ka(un))
        return (un = Tg(un, an.mode, dn, null)), (un.return = an), un;
      Mg(an, un);
    }
    return null;
  }
  function gn(an, un, dn, Mn) {
    var jn = un !== null ? un.key : null;
    if ((typeof dn == "string" && dn !== "") || typeof dn == "number")
      return jn !== null ? null : en(an, un, "" + dn, Mn);
    if (typeof dn == "object" && dn !== null) {
      switch (dn.$$typeof) {
        case va:
          return dn.key === jn ? tn(an, un, dn, Mn) : null;
        case wa:
          return dn.key === jn ? sn(an, un, dn, Mn) : null;
        case Ha:
          return (jn = dn._init), gn(an, un, jn(dn._payload), Mn);
      }
      if (eb(dn) || Ka(dn))
        return jn !== null ? null : mn(an, un, dn, Mn, null);
      Mg(an, dn);
    }
    return null;
  }
  function Sn(an, un, dn, Mn, jn) {
    if ((typeof Mn == "string" && Mn !== "") || typeof Mn == "number")
      return (an = an.get(dn) || null), en(un, an, "" + Mn, jn);
    if (typeof Mn == "object" && Mn !== null) {
      switch (Mn.$$typeof) {
        case va:
          return (
            (an = an.get(Mn.key === null ? dn : Mn.key) || null),
            tn(un, an, Mn, jn)
          );
        case wa:
          return (
            (an = an.get(Mn.key === null ? dn : Mn.key) || null),
            sn(un, an, Mn, jn)
          );
        case Ha:
          var In = Mn._init;
          return Sn(an, un, dn, In(Mn._payload), jn);
      }
      if (eb(Mn) || Ka(Mn))
        return (an = an.get(dn) || null), mn(un, an, Mn, jn, null);
      Mg(un, Mn);
    }
    return null;
  }
  function An(an, un, dn, Mn) {
    for (
      var jn = null, In = null, _ = un, Bn = (un = 0), Wn = null;
      _ !== null && Bn < dn.length;
      Bn++
    ) {
      _.index > Bn ? ((Wn = _), (_ = null)) : (Wn = _.sibling);
      var Zn = gn(an, _, dn[Bn], Mn);
      if (Zn === null) {
        _ === null && (_ = Wn);
        break;
      }
      e && _ && Zn.alternate === null && a(an, _),
        (un = h(Zn, un, Bn)),
        In === null ? (jn = Zn) : (In.sibling = Zn),
        (In = Zn),
        (_ = Wn);
    }
    if (Bn === dn.length) return i(an, _), I && tg(an, Bn), jn;
    if (_ === null) {
      for (; Bn < dn.length; Bn++)
        (_ = hn(an, dn[Bn], Mn)),
          _ !== null &&
            ((un = h(_, un, Bn)),
            In === null ? (jn = _) : (In.sibling = _),
            (In = _));
      return I && tg(an, Bn), jn;
    }
    for (_ = o(an, _); Bn < dn.length; Bn++)
      (Wn = Sn(_, an, Bn, dn[Bn], Mn)),
        Wn !== null &&
          (e &&
            Wn.alternate !== null &&
            _.delete(Wn.key === null ? Bn : Wn.key),
          (un = h(Wn, un, Bn)),
          In === null ? (jn = Wn) : (In.sibling = Wn),
          (In = Wn));
    return (
      e &&
        _.forEach(function (_t) {
          return a(an, _t);
        }),
      I && tg(an, Bn),
      jn
    );
  }
  function xn(an, un, dn, Mn) {
    var jn = Ka(dn);
    if (typeof jn != "function") throw Error(p(150));
    if (((dn = jn.call(dn)), dn == null)) throw Error(p(151));
    for (
      var In = (jn = null), _ = un, Bn = (un = 0), Wn = null, Zn = dn.next();
      _ !== null && !Zn.done;
      Bn++, Zn = dn.next()
    ) {
      _.index > Bn ? ((Wn = _), (_ = null)) : (Wn = _.sibling);
      var _t = gn(an, _, Zn.value, Mn);
      if (_t === null) {
        _ === null && (_ = Wn);
        break;
      }
      e && _ && _t.alternate === null && a(an, _),
        (un = h(_t, un, Bn)),
        In === null ? (jn = _t) : (In.sibling = _t),
        (In = _t),
        (_ = Wn);
    }
    if (Zn.done) return i(an, _), I && tg(an, Bn), jn;
    if (_ === null) {
      for (; !Zn.done; Bn++, Zn = dn.next())
        (Zn = hn(an, Zn.value, Mn)),
          Zn !== null &&
            ((un = h(Zn, un, Bn)),
            In === null ? (jn = Zn) : (In.sibling = Zn),
            (In = Zn));
      return I && tg(an, Bn), jn;
    }
    for (_ = o(an, _); !Zn.done; Bn++, Zn = dn.next())
      (Zn = Sn(_, an, Bn, Zn.value, Mn)),
        Zn !== null &&
          (e &&
            Zn.alternate !== null &&
            _.delete(Zn.key === null ? Bn : Zn.key),
          (un = h(Zn, un, Bn)),
          In === null ? (jn = Zn) : (In.sibling = Zn),
          (In = Zn));
    return (
      e &&
        _.forEach(function (Kt) {
          return a(an, Kt);
        }),
      I && tg(an, Bn),
      jn
    );
  }
  function Cn(an, un, dn, Mn) {
    if (
      (typeof dn == "object" &&
        dn !== null &&
        dn.type === ya &&
        dn.key === null &&
        (dn = dn.props.children),
      typeof dn == "object" && dn !== null)
    ) {
      switch (dn.$$typeof) {
        case va:
          e: {
            for (var jn = dn.key, In = un; In !== null; ) {
              if (In.key === jn) {
                if (((jn = dn.type), jn === ya)) {
                  if (In.tag === 7) {
                    i(an, In.sibling),
                      (un = c(In, dn.props.children)),
                      (un.return = an),
                      (an = un);
                    break e;
                  }
                } else if (
                  In.elementType === jn ||
                  (typeof jn == "object" &&
                    jn !== null &&
                    jn.$$typeof === Ha &&
                    Ng(jn) === In.type)
                ) {
                  i(an, In.sibling),
                    (un = c(In, dn.props)),
                    (un.ref = Lg(an, In, dn)),
                    (un.return = an),
                    (an = un);
                  break e;
                }
                i(an, In);
                break;
              } else a(an, In);
              In = In.sibling;
            }
            dn.type === ya
              ? ((un = Tg(dn.props.children, an.mode, Mn, dn.key)),
                (un.return = an),
                (an = un))
              : ((Mn = Rg(dn.type, dn.key, dn.props, null, an.mode, Mn)),
                (Mn.ref = Lg(an, un, dn)),
                (Mn.return = an),
                (an = Mn));
          }
          return b(an);
        case wa:
          e: {
            for (In = dn.key; un !== null; ) {
              if (un.key === In)
                if (
                  un.tag === 4 &&
                  un.stateNode.containerInfo === dn.containerInfo &&
                  un.stateNode.implementation === dn.implementation
                ) {
                  i(an, un.sibling),
                    (un = c(un, dn.children || [])),
                    (un.return = an),
                    (an = un);
                  break e;
                } else {
                  i(an, un);
                  break;
                }
              else a(an, un);
              un = un.sibling;
            }
            (un = Sg(dn, an.mode, Mn)), (un.return = an), (an = un);
          }
          return b(an);
        case Ha:
          return (In = dn._init), Cn(an, un, In(dn._payload), Mn);
      }
      if (eb(dn)) return An(an, un, dn, Mn);
      if (Ka(dn)) return xn(an, un, dn, Mn);
      Mg(an, dn);
    }
    return (typeof dn == "string" && dn !== "") || typeof dn == "number"
      ? ((dn = "" + dn),
        un !== null && un.tag === 6
          ? (i(an, un.sibling), (un = c(un, dn)), (un.return = an), (an = un))
          : (i(an, un),
            (un = Qg(dn, an.mode, Mn)),
            (un.return = an),
            (an = un)),
        b(an))
      : i(an, un);
  }
  return Cn;
}
var Ug = Og(!0),
  Vg = Og(!1),
  Wg = Uf(null),
  Xg = null,
  Yg = null,
  Zg = null;
function $g() {
  Zg = Yg = Xg = null;
}
function ah(e) {
  var a = Wg.current;
  E(Wg), (e._currentValue = a);
}
function bh(e, a, i) {
  for (; e !== null; ) {
    var o = e.alternate;
    if (
      ((e.childLanes & a) !== a
        ? ((e.childLanes |= a), o !== null && (o.childLanes |= a))
        : o !== null && (o.childLanes & a) !== a && (o.childLanes |= a),
      e === i)
    )
      break;
    e = e.return;
  }
}
function ch(e, a) {
  (Xg = e),
    (Zg = Yg = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & a && (dh = !0), (e.firstContext = null));
}
function eh(e) {
  var a = e._currentValue;
  if (Zg !== e)
    if (((e = { context: e, memoizedValue: a, next: null }), Yg === null)) {
      if (Xg === null) throw Error(p(308));
      (Yg = e), (Xg.dependencies = { lanes: 0, firstContext: e });
    } else Yg = Yg.next = e;
  return a;
}
var fh = null;
function gh(e) {
  fh === null ? (fh = [e]) : fh.push(e);
}
function hh(e, a, i, o) {
  var c = a.interleaved;
  return (
    c === null ? ((i.next = i), gh(a)) : ((i.next = c.next), (c.next = i)),
    (a.interleaved = i),
    ih(e, o)
  );
}
function ih(e, a) {
  e.lanes |= a;
  var i = e.alternate;
  for (i !== null && (i.lanes |= a), i = e, e = e.return; e !== null; )
    (e.childLanes |= a),
      (i = e.alternate),
      i !== null && (i.childLanes |= a),
      (i = e),
      (e = e.return);
  return i.tag === 3 ? i.stateNode : null;
}
var jh = !1;
function kh(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function lh(e, a) {
  (e = e.updateQueue),
    a.updateQueue === e &&
      (a.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function mh(e, a) {
  return {
    eventTime: e,
    lane: a,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function nh(e, a, i) {
  var o = e.updateQueue;
  if (o === null) return null;
  if (((o = o.shared), K & 2)) {
    var c = o.pending;
    return (
      c === null ? (a.next = a) : ((a.next = c.next), (c.next = a)),
      (o.pending = a),
      ih(e, i)
    );
  }
  return (
    (c = o.interleaved),
    c === null ? ((a.next = a), gh(o)) : ((a.next = c.next), (c.next = a)),
    (o.interleaved = a),
    ih(e, i)
  );
}
function oh(e, a, i) {
  if (
    ((a = a.updateQueue), a !== null && ((a = a.shared), (i & 4194240) !== 0))
  ) {
    var o = a.lanes;
    (o &= e.pendingLanes), (i |= o), (a.lanes = i), Cc(e, i);
  }
}
function ph(e, a) {
  var i = e.updateQueue,
    o = e.alternate;
  if (o !== null && ((o = o.updateQueue), i === o)) {
    var c = null,
      h = null;
    if (((i = i.firstBaseUpdate), i !== null)) {
      do {
        var b = {
          eventTime: i.eventTime,
          lane: i.lane,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        };
        h === null ? (c = h = b) : (h = h.next = b), (i = i.next);
      } while (i !== null);
      h === null ? (c = h = a) : (h = h.next = a);
    } else c = h = a;
    (i = {
      baseState: o.baseState,
      firstBaseUpdate: c,
      lastBaseUpdate: h,
      shared: o.shared,
      effects: o.effects,
    }),
      (e.updateQueue = i);
    return;
  }
  (e = i.lastBaseUpdate),
    e === null ? (i.firstBaseUpdate = a) : (e.next = a),
    (i.lastBaseUpdate = a);
}
function qh(e, a, i, o) {
  var c = e.updateQueue;
  jh = !1;
  var h = c.firstBaseUpdate,
    b = c.lastBaseUpdate,
    en = c.shared.pending;
  if (en !== null) {
    c.shared.pending = null;
    var tn = en,
      sn = tn.next;
    (tn.next = null), b === null ? (h = sn) : (b.next = sn), (b = tn);
    var mn = e.alternate;
    mn !== null &&
      ((mn = mn.updateQueue),
      (en = mn.lastBaseUpdate),
      en !== b &&
        (en === null ? (mn.firstBaseUpdate = sn) : (en.next = sn),
        (mn.lastBaseUpdate = tn)));
  }
  if (h !== null) {
    var hn = c.baseState;
    (b = 0), (mn = sn = tn = null), (en = h);
    do {
      var gn = en.lane,
        Sn = en.eventTime;
      if ((o & gn) === gn) {
        mn !== null &&
          (mn = mn.next =
            {
              eventTime: Sn,
              lane: 0,
              tag: en.tag,
              payload: en.payload,
              callback: en.callback,
              next: null,
            });
        e: {
          var An = e,
            xn = en;
          switch (((gn = a), (Sn = i), xn.tag)) {
            case 1:
              if (((An = xn.payload), typeof An == "function")) {
                hn = An.call(Sn, hn, gn);
                break e;
              }
              hn = An;
              break e;
            case 3:
              An.flags = (An.flags & -65537) | 128;
            case 0:
              if (
                ((An = xn.payload),
                (gn = typeof An == "function" ? An.call(Sn, hn, gn) : An),
                gn == null)
              )
                break e;
              hn = A({}, hn, gn);
              break e;
            case 2:
              jh = !0;
          }
        }
        en.callback !== null &&
          en.lane !== 0 &&
          ((e.flags |= 64),
          (gn = c.effects),
          gn === null ? (c.effects = [en]) : gn.push(en));
      } else
        (Sn = {
          eventTime: Sn,
          lane: gn,
          tag: en.tag,
          payload: en.payload,
          callback: en.callback,
          next: null,
        }),
          mn === null ? ((sn = mn = Sn), (tn = hn)) : (mn = mn.next = Sn),
          (b |= gn);
      if (((en = en.next), en === null)) {
        if (((en = c.shared.pending), en === null)) break;
        (gn = en),
          (en = gn.next),
          (gn.next = null),
          (c.lastBaseUpdate = gn),
          (c.shared.pending = null);
      }
    } while (!0);
    if (
      (mn === null && (tn = hn),
      (c.baseState = tn),
      (c.firstBaseUpdate = sn),
      (c.lastBaseUpdate = mn),
      (a = c.shared.interleaved),
      a !== null)
    ) {
      c = a;
      do (b |= c.lane), (c = c.next);
      while (c !== a);
    } else h === null && (c.shared.lanes = 0);
    (rh |= b), (e.lanes = b), (e.memoizedState = hn);
  }
}
function sh(e, a, i) {
  if (((e = a.effects), (a.effects = null), e !== null))
    for (a = 0; a < e.length; a++) {
      var o = e[a],
        c = o.callback;
      if (c !== null) {
        if (((o.callback = null), (o = i), typeof c != "function"))
          throw Error(p(191, c));
        c.call(o);
      }
    }
}
var th = {},
  uh = Uf(th),
  vh = Uf(th),
  wh = Uf(th);
function xh(e) {
  if (e === th) throw Error(p(174));
  return e;
}
function yh(e, a) {
  switch ((G(wh, a), G(vh, e), G(uh, th), (e = a.nodeType), e)) {
    case 9:
    case 11:
      a = (a = a.documentElement) ? a.namespaceURI : lb(null, "");
      break;
    default:
      (e = e === 8 ? a.parentNode : a),
        (a = e.namespaceURI || null),
        (e = e.tagName),
        (a = lb(a, e));
  }
  E(uh), G(uh, a);
}
function zh() {
  E(uh), E(vh), E(wh);
}
function Ah(e) {
  xh(wh.current);
  var a = xh(uh.current),
    i = lb(a, e.type);
  a !== i && (G(vh, e), G(uh, i));
}
function Bh(e) {
  vh.current === e && (E(uh), E(vh));
}
var L = Uf(0);
function Ch(e) {
  for (var a = e; a !== null; ) {
    if (a.tag === 13) {
      var i = a.memoizedState;
      if (
        i !== null &&
        ((i = i.dehydrated), i === null || i.data === "$?" || i.data === "$!")
      )
        return a;
    } else if (a.tag === 19 && a.memoizedProps.revealOrder !== void 0) {
      if (a.flags & 128) return a;
    } else if (a.child !== null) {
      (a.child.return = a), (a = a.child);
      continue;
    }
    if (a === e) break;
    for (; a.sibling === null; ) {
      if (a.return === null || a.return === e) return null;
      a = a.return;
    }
    (a.sibling.return = a.return), (a = a.sibling);
  }
  return null;
}
var Dh = [];
function Eh() {
  for (var e = 0; e < Dh.length; e++)
    Dh[e]._workInProgressVersionPrimary = null;
  Dh.length = 0;
}
var Fh = ua.ReactCurrentDispatcher,
  Gh = ua.ReactCurrentBatchConfig,
  Hh = 0,
  M = null,
  N = null,
  O = null,
  Ih = !1,
  Jh = !1,
  Kh = 0,
  Lh = 0;
function P() {
  throw Error(p(321));
}
function Mh(e, a) {
  if (a === null) return !1;
  for (var i = 0; i < a.length && i < e.length; i++)
    if (!He(e[i], a[i])) return !1;
  return !0;
}
function Nh(e, a, i, o, c, h) {
  if (
    ((Hh = h),
    (M = a),
    (a.memoizedState = null),
    (a.updateQueue = null),
    (a.lanes = 0),
    (Fh.current = e === null || e.memoizedState === null ? Oh : Ph),
    (e = i(o, c)),
    Jh)
  ) {
    h = 0;
    do {
      if (((Jh = !1), (Kh = 0), 25 <= h)) throw Error(p(301));
      (h += 1),
        (O = N = null),
        (a.updateQueue = null),
        (Fh.current = Qh),
        (e = i(o, c));
    } while (Jh);
  }
  if (
    ((Fh.current = Rh),
    (a = N !== null && N.next !== null),
    (Hh = 0),
    (O = N = M = null),
    (Ih = !1),
    a)
  )
    throw Error(p(300));
  return e;
}
function Sh() {
  var e = Kh !== 0;
  return (Kh = 0), e;
}
function Th() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return O === null ? (M.memoizedState = O = e) : (O = O.next = e), O;
}
function Uh() {
  if (N === null) {
    var e = M.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = N.next;
  var a = O === null ? M.memoizedState : O.next;
  if (a !== null) (O = a), (N = e);
  else {
    if (e === null) throw Error(p(310));
    (N = e),
      (e = {
        memoizedState: N.memoizedState,
        baseState: N.baseState,
        baseQueue: N.baseQueue,
        queue: N.queue,
        next: null,
      }),
      O === null ? (M.memoizedState = O = e) : (O = O.next = e);
  }
  return O;
}
function Vh(e, a) {
  return typeof a == "function" ? a(e) : a;
}
function Wh(e) {
  var a = Uh(),
    i = a.queue;
  if (i === null) throw Error(p(311));
  i.lastRenderedReducer = e;
  var o = N,
    c = o.baseQueue,
    h = i.pending;
  if (h !== null) {
    if (c !== null) {
      var b = c.next;
      (c.next = h.next), (h.next = b);
    }
    (o.baseQueue = c = h), (i.pending = null);
  }
  if (c !== null) {
    (h = c.next), (o = o.baseState);
    var en = (b = null),
      tn = null,
      sn = h;
    do {
      var mn = sn.lane;
      if ((Hh & mn) === mn)
        tn !== null &&
          (tn = tn.next =
            {
              lane: 0,
              action: sn.action,
              hasEagerState: sn.hasEagerState,
              eagerState: sn.eagerState,
              next: null,
            }),
          (o = sn.hasEagerState ? sn.eagerState : e(o, sn.action));
      else {
        var hn = {
          lane: mn,
          action: sn.action,
          hasEagerState: sn.hasEagerState,
          eagerState: sn.eagerState,
          next: null,
        };
        tn === null ? ((en = tn = hn), (b = o)) : (tn = tn.next = hn),
          (M.lanes |= mn),
          (rh |= mn);
      }
      sn = sn.next;
    } while (sn !== null && sn !== h);
    tn === null ? (b = o) : (tn.next = en),
      He(o, a.memoizedState) || (dh = !0),
      (a.memoizedState = o),
      (a.baseState = b),
      (a.baseQueue = tn),
      (i.lastRenderedState = o);
  }
  if (((e = i.interleaved), e !== null)) {
    c = e;
    do (h = c.lane), (M.lanes |= h), (rh |= h), (c = c.next);
    while (c !== e);
  } else c === null && (i.lanes = 0);
  return [a.memoizedState, i.dispatch];
}
function Xh(e) {
  var a = Uh(),
    i = a.queue;
  if (i === null) throw Error(p(311));
  i.lastRenderedReducer = e;
  var o = i.dispatch,
    c = i.pending,
    h = a.memoizedState;
  if (c !== null) {
    i.pending = null;
    var b = (c = c.next);
    do (h = e(h, b.action)), (b = b.next);
    while (b !== c);
    He(h, a.memoizedState) || (dh = !0),
      (a.memoizedState = h),
      a.baseQueue === null && (a.baseState = h),
      (i.lastRenderedState = h);
  }
  return [h, o];
}
function Yh() {}
function Zh(e, a) {
  var i = M,
    o = Uh(),
    c = a(),
    h = !He(o.memoizedState, c);
  if (
    (h && ((o.memoizedState = c), (dh = !0)),
    (o = o.queue),
    $h(ai.bind(null, i, o, e), [e]),
    o.getSnapshot !== a || h || (O !== null && O.memoizedState.tag & 1))
  ) {
    if (
      ((i.flags |= 2048),
      bi(9, ci.bind(null, i, o, c, a), void 0, null),
      Q === null)
    )
      throw Error(p(349));
    Hh & 30 || di(i, a, c);
  }
  return c;
}
function di(e, a, i) {
  (e.flags |= 16384),
    (e = { getSnapshot: a, value: i }),
    (a = M.updateQueue),
    a === null
      ? ((a = { lastEffect: null, stores: null }),
        (M.updateQueue = a),
        (a.stores = [e]))
      : ((i = a.stores), i === null ? (a.stores = [e]) : i.push(e));
}
function ci(e, a, i, o) {
  (a.value = i), (a.getSnapshot = o), ei(a) && fi(e);
}
function ai(e, a, i) {
  return i(function () {
    ei(a) && fi(e);
  });
}
function ei(e) {
  var a = e.getSnapshot;
  e = e.value;
  try {
    var i = a();
    return !He(e, i);
  } catch {
    return !0;
  }
}
function fi(e) {
  var a = ih(e, 1);
  a !== null && gi(a, e, 1, -1);
}
function hi(e) {
  var a = Th();
  return (
    typeof e == "function" && (e = e()),
    (a.memoizedState = a.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Vh,
      lastRenderedState: e,
    }),
    (a.queue = e),
    (e = e.dispatch = ii.bind(null, M, e)),
    [a.memoizedState, e]
  );
}
function bi(e, a, i, o) {
  return (
    (e = { tag: e, create: a, destroy: i, deps: o, next: null }),
    (a = M.updateQueue),
    a === null
      ? ((a = { lastEffect: null, stores: null }),
        (M.updateQueue = a),
        (a.lastEffect = e.next = e))
      : ((i = a.lastEffect),
        i === null
          ? (a.lastEffect = e.next = e)
          : ((o = i.next), (i.next = e), (e.next = o), (a.lastEffect = e))),
    e
  );
}
function ji() {
  return Uh().memoizedState;
}
function ki(e, a, i, o) {
  var c = Th();
  (M.flags |= e),
    (c.memoizedState = bi(1 | a, i, void 0, o === void 0 ? null : o));
}
function li(e, a, i, o) {
  var c = Uh();
  o = o === void 0 ? null : o;
  var h = void 0;
  if (N !== null) {
    var b = N.memoizedState;
    if (((h = b.destroy), o !== null && Mh(o, b.deps))) {
      c.memoizedState = bi(a, i, h, o);
      return;
    }
  }
  (M.flags |= e), (c.memoizedState = bi(1 | a, i, h, o));
}
function mi(e, a) {
  return ki(8390656, 8, e, a);
}
function $h(e, a) {
  return li(2048, 8, e, a);
}
function ni(e, a) {
  return li(4, 2, e, a);
}
function oi(e, a) {
  return li(4, 4, e, a);
}
function pi(e, a) {
  if (typeof a == "function")
    return (
      (e = e()),
      a(e),
      function () {
        a(null);
      }
    );
  if (a != null)
    return (
      (e = e()),
      (a.current = e),
      function () {
        a.current = null;
      }
    );
}
function qi(e, a, i) {
  return (
    (i = i != null ? i.concat([e]) : null), li(4, 4, pi.bind(null, a, e), i)
  );
}
function ri() {}
function si(e, a) {
  var i = Uh();
  a = a === void 0 ? null : a;
  var o = i.memoizedState;
  return o !== null && a !== null && Mh(a, o[1])
    ? o[0]
    : ((i.memoizedState = [e, a]), e);
}
function ti(e, a) {
  var i = Uh();
  a = a === void 0 ? null : a;
  var o = i.memoizedState;
  return o !== null && a !== null && Mh(a, o[1])
    ? o[0]
    : ((e = e()), (i.memoizedState = [e, a]), e);
}
function ui(e, a, i) {
  return Hh & 21
    ? (He(i, a) || ((i = yc()), (M.lanes |= i), (rh |= i), (e.baseState = !0)),
      a)
    : (e.baseState && ((e.baseState = !1), (dh = !0)), (e.memoizedState = i));
}
function vi(e, a) {
  var i = C;
  (C = i !== 0 && 4 > i ? i : 4), e(!0);
  var o = Gh.transition;
  Gh.transition = {};
  try {
    e(!1), a();
  } finally {
    (C = i), (Gh.transition = o);
  }
}
function wi() {
  return Uh().memoizedState;
}
function xi(e, a, i) {
  var o = yi(e);
  if (
    ((i = {
      lane: o,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    zi(e))
  )
    Ai(a, i);
  else if (((i = hh(e, a, i, o)), i !== null)) {
    var c = R();
    gi(i, e, o, c), Bi(i, a, o);
  }
}
function ii(e, a, i) {
  var o = yi(e),
    c = { lane: o, action: i, hasEagerState: !1, eagerState: null, next: null };
  if (zi(e)) Ai(a, c);
  else {
    var h = e.alternate;
    if (
      e.lanes === 0 &&
      (h === null || h.lanes === 0) &&
      ((h = a.lastRenderedReducer), h !== null)
    )
      try {
        var b = a.lastRenderedState,
          en = h(b, i);
        if (((c.hasEagerState = !0), (c.eagerState = en), He(en, b))) {
          var tn = a.interleaved;
          tn === null
            ? ((c.next = c), gh(a))
            : ((c.next = tn.next), (tn.next = c)),
            (a.interleaved = c);
          return;
        }
      } catch {
      } finally {
      }
    (i = hh(e, a, c, o)),
      i !== null && ((c = R()), gi(i, e, o, c), Bi(i, a, o));
  }
}
function zi(e) {
  var a = e.alternate;
  return e === M || (a !== null && a === M);
}
function Ai(e, a) {
  Jh = Ih = !0;
  var i = e.pending;
  i === null ? (a.next = a) : ((a.next = i.next), (i.next = a)),
    (e.pending = a);
}
function Bi(e, a, i) {
  if (i & 4194240) {
    var o = a.lanes;
    (o &= e.pendingLanes), (i |= o), (a.lanes = i), Cc(e, i);
  }
}
var Rh = {
    readContext: eh,
    useCallback: P,
    useContext: P,
    useEffect: P,
    useImperativeHandle: P,
    useInsertionEffect: P,
    useLayoutEffect: P,
    useMemo: P,
    useReducer: P,
    useRef: P,
    useState: P,
    useDebugValue: P,
    useDeferredValue: P,
    useTransition: P,
    useMutableSource: P,
    useSyncExternalStore: P,
    useId: P,
    unstable_isNewReconciler: !1,
  },
  Oh = {
    readContext: eh,
    useCallback: function (e, a) {
      return (Th().memoizedState = [e, a === void 0 ? null : a]), e;
    },
    useContext: eh,
    useEffect: mi,
    useImperativeHandle: function (e, a, i) {
      return (
        (i = i != null ? i.concat([e]) : null),
        ki(4194308, 4, pi.bind(null, a, e), i)
      );
    },
    useLayoutEffect: function (e, a) {
      return ki(4194308, 4, e, a);
    },
    useInsertionEffect: function (e, a) {
      return ki(4, 2, e, a);
    },
    useMemo: function (e, a) {
      var i = Th();
      return (
        (a = a === void 0 ? null : a), (e = e()), (i.memoizedState = [e, a]), e
      );
    },
    useReducer: function (e, a, i) {
      var o = Th();
      return (
        (a = i !== void 0 ? i(a) : a),
        (o.memoizedState = o.baseState = a),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: a,
        }),
        (o.queue = e),
        (e = e.dispatch = xi.bind(null, M, e)),
        [o.memoizedState, e]
      );
    },
    useRef: function (e) {
      var a = Th();
      return (e = { current: e }), (a.memoizedState = e);
    },
    useState: hi,
    useDebugValue: ri,
    useDeferredValue: function (e) {
      return (Th().memoizedState = e);
    },
    useTransition: function () {
      var e = hi(!1),
        a = e[0];
      return (e = vi.bind(null, e[1])), (Th().memoizedState = e), [a, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, a, i) {
      var o = M,
        c = Th();
      if (I) {
        if (i === void 0) throw Error(p(407));
        i = i();
      } else {
        if (((i = a()), Q === null)) throw Error(p(349));
        Hh & 30 || di(o, a, i);
      }
      c.memoizedState = i;
      var h = { value: i, getSnapshot: a };
      return (
        (c.queue = h),
        mi(ai.bind(null, o, h, e), [e]),
        (o.flags |= 2048),
        bi(9, ci.bind(null, o, h, i, a), void 0, null),
        i
      );
    },
    useId: function () {
      var e = Th(),
        a = Q.identifierPrefix;
      if (I) {
        var i = sg,
          o = rg;
        (i = (o & ~(1 << (32 - oc(o) - 1))).toString(32) + i),
          (a = ":" + a + "R" + i),
          (i = Kh++),
          0 < i && (a += "H" + i.toString(32)),
          (a += ":");
      } else (i = Lh++), (a = ":" + a + "r" + i.toString(32) + ":");
      return (e.memoizedState = a);
    },
    unstable_isNewReconciler: !1,
  },
  Ph = {
    readContext: eh,
    useCallback: si,
    useContext: eh,
    useEffect: $h,
    useImperativeHandle: qi,
    useInsertionEffect: ni,
    useLayoutEffect: oi,
    useMemo: ti,
    useReducer: Wh,
    useRef: ji,
    useState: function () {
      return Wh(Vh);
    },
    useDebugValue: ri,
    useDeferredValue: function (e) {
      var a = Uh();
      return ui(a, N.memoizedState, e);
    },
    useTransition: function () {
      var e = Wh(Vh)[0],
        a = Uh().memoizedState;
      return [e, a];
    },
    useMutableSource: Yh,
    useSyncExternalStore: Zh,
    useId: wi,
    unstable_isNewReconciler: !1,
  },
  Qh = {
    readContext: eh,
    useCallback: si,
    useContext: eh,
    useEffect: $h,
    useImperativeHandle: qi,
    useInsertionEffect: ni,
    useLayoutEffect: oi,
    useMemo: ti,
    useReducer: Xh,
    useRef: ji,
    useState: function () {
      return Xh(Vh);
    },
    useDebugValue: ri,
    useDeferredValue: function (e) {
      var a = Uh();
      return N === null ? (a.memoizedState = e) : ui(a, N.memoizedState, e);
    },
    useTransition: function () {
      var e = Xh(Vh)[0],
        a = Uh().memoizedState;
      return [e, a];
    },
    useMutableSource: Yh,
    useSyncExternalStore: Zh,
    useId: wi,
    unstable_isNewReconciler: !1,
  };
function Ci(e, a) {
  if (e && e.defaultProps) {
    (a = A({}, a)), (e = e.defaultProps);
    for (var i in e) a[i] === void 0 && (a[i] = e[i]);
    return a;
  }
  return a;
}
function Di(e, a, i, o) {
  (a = e.memoizedState),
    (i = i(o, a)),
    (i = i == null ? a : A({}, a, i)),
    (e.memoizedState = i),
    e.lanes === 0 && (e.updateQueue.baseState = i);
}
var Ei = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Vb(e) === e : !1;
  },
  enqueueSetState: function (e, a, i) {
    e = e._reactInternals;
    var o = R(),
      c = yi(e),
      h = mh(o, c);
    (h.payload = a),
      i != null && (h.callback = i),
      (a = nh(e, h, c)),
      a !== null && (gi(a, e, c, o), oh(a, e, c));
  },
  enqueueReplaceState: function (e, a, i) {
    e = e._reactInternals;
    var o = R(),
      c = yi(e),
      h = mh(o, c);
    (h.tag = 1),
      (h.payload = a),
      i != null && (h.callback = i),
      (a = nh(e, h, c)),
      a !== null && (gi(a, e, c, o), oh(a, e, c));
  },
  enqueueForceUpdate: function (e, a) {
    e = e._reactInternals;
    var i = R(),
      o = yi(e),
      c = mh(i, o);
    (c.tag = 2),
      a != null && (c.callback = a),
      (a = nh(e, c, o)),
      a !== null && (gi(a, e, o, i), oh(a, e, o));
  },
};
function Fi(e, a, i, o, c, h, b) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(o, h, b)
      : a.prototype && a.prototype.isPureReactComponent
      ? !Ie(i, o) || !Ie(c, h)
      : !0
  );
}
function Gi(e, a, i) {
  var o = !1,
    c = Vf,
    h = a.contextType;
  return (
    typeof h == "object" && h !== null
      ? (h = eh(h))
      : ((c = Zf(a) ? Xf : H.current),
        (o = a.contextTypes),
        (h = (o = o != null) ? Yf(e, c) : Vf)),
    (a = new a(i, h)),
    (e.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null),
    (a.updater = Ei),
    (e.stateNode = a),
    (a._reactInternals = e),
    o &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = c),
      (e.__reactInternalMemoizedMaskedChildContext = h)),
    a
  );
}
function Hi(e, a, i, o) {
  (e = a.state),
    typeof a.componentWillReceiveProps == "function" &&
      a.componentWillReceiveProps(i, o),
    typeof a.UNSAFE_componentWillReceiveProps == "function" &&
      a.UNSAFE_componentWillReceiveProps(i, o),
    a.state !== e && Ei.enqueueReplaceState(a, a.state, null);
}
function Ii(e, a, i, o) {
  var c = e.stateNode;
  (c.props = i), (c.state = e.memoizedState), (c.refs = {}), kh(e);
  var h = a.contextType;
  typeof h == "object" && h !== null
    ? (c.context = eh(h))
    : ((h = Zf(a) ? Xf : H.current), (c.context = Yf(e, h))),
    (c.state = e.memoizedState),
    (h = a.getDerivedStateFromProps),
    typeof h == "function" && (Di(e, a, h, i), (c.state = e.memoizedState)),
    typeof a.getDerivedStateFromProps == "function" ||
      typeof c.getSnapshotBeforeUpdate == "function" ||
      (typeof c.UNSAFE_componentWillMount != "function" &&
        typeof c.componentWillMount != "function") ||
      ((a = c.state),
      typeof c.componentWillMount == "function" && c.componentWillMount(),
      typeof c.UNSAFE_componentWillMount == "function" &&
        c.UNSAFE_componentWillMount(),
      a !== c.state && Ei.enqueueReplaceState(c, c.state, null),
      qh(e, i, c, o),
      (c.state = e.memoizedState)),
    typeof c.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ji(e, a) {
  try {
    var i = "",
      o = a;
    do (i += Pa(o)), (o = o.return);
    while (o);
    var c = i;
  } catch (h) {
    c =
      `
Error generating stack: ` +
      h.message +
      `
` +
      h.stack;
  }
  return { value: e, source: a, stack: c, digest: null };
}
function Ki(e, a, i) {
  return { value: e, source: null, stack: i ?? null, digest: a ?? null };
}
function Li(e, a) {
  try {
    console.error(a.value);
  } catch (i) {
    setTimeout(function () {
      throw i;
    });
  }
}
var Mi = typeof WeakMap == "function" ? WeakMap : Map;
function Ni(e, a, i) {
  (i = mh(-1, i)), (i.tag = 3), (i.payload = { element: null });
  var o = a.value;
  return (
    (i.callback = function () {
      Oi || ((Oi = !0), (Pi = o)), Li(e, a);
    }),
    i
  );
}
function Qi(e, a, i) {
  (i = mh(-1, i)), (i.tag = 3);
  var o = e.type.getDerivedStateFromError;
  if (typeof o == "function") {
    var c = a.value;
    (i.payload = function () {
      return o(c);
    }),
      (i.callback = function () {
        Li(e, a);
      });
  }
  var h = e.stateNode;
  return (
    h !== null &&
      typeof h.componentDidCatch == "function" &&
      (i.callback = function () {
        Li(e, a),
          typeof o != "function" &&
            (Ri === null ? (Ri = new Set([this])) : Ri.add(this));
        var b = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: b !== null ? b : "",
        });
      }),
    i
  );
}
function Si(e, a, i) {
  var o = e.pingCache;
  if (o === null) {
    o = e.pingCache = new Mi();
    var c = new Set();
    o.set(a, c);
  } else (c = o.get(a)), c === void 0 && ((c = new Set()), o.set(a, c));
  c.has(i) || (c.add(i), (e = Ti.bind(null, e, a, i)), a.then(e, e));
}
function Ui(e) {
  do {
    var a;
    if (
      ((a = e.tag === 13) &&
        ((a = e.memoizedState), (a = a !== null ? a.dehydrated !== null : !0)),
      a)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Vi(e, a, i, o, c) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = c), e)
    : (e === a
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (i.flags |= 131072),
          (i.flags &= -52805),
          i.tag === 1 &&
            (i.alternate === null
              ? (i.tag = 17)
              : ((a = mh(-1, 1)), (a.tag = 2), nh(i, a, 1))),
          (i.lanes |= 1)),
      e);
}
var Wi = ua.ReactCurrentOwner,
  dh = !1;
function Xi(e, a, i, o) {
  a.child = e === null ? Vg(a, null, i, o) : Ug(a, e.child, i, o);
}
function Yi(e, a, i, o, c) {
  i = i.render;
  var h = a.ref;
  return (
    ch(a, c),
    (o = Nh(e, a, i, o, h, c)),
    (i = Sh()),
    e !== null && !dh
      ? ((a.updateQueue = e.updateQueue),
        (a.flags &= -2053),
        (e.lanes &= ~c),
        Zi(e, a, c))
      : (I && i && vg(a), (a.flags |= 1), Xi(e, a, o, c), a.child)
  );
}
function $i(e, a, i, o, c) {
  if (e === null) {
    var h = i.type;
    return typeof h == "function" &&
      !aj(h) &&
      h.defaultProps === void 0 &&
      i.compare === null &&
      i.defaultProps === void 0
      ? ((a.tag = 15), (a.type = h), bj(e, a, h, o, c))
      : ((e = Rg(i.type, null, o, a, a.mode, c)),
        (e.ref = a.ref),
        (e.return = a),
        (a.child = e));
  }
  if (((h = e.child), !(e.lanes & c))) {
    var b = h.memoizedProps;
    if (
      ((i = i.compare), (i = i !== null ? i : Ie), i(b, o) && e.ref === a.ref)
    )
      return Zi(e, a, c);
  }
  return (
    (a.flags |= 1),
    (e = Pg(h, o)),
    (e.ref = a.ref),
    (e.return = a),
    (a.child = e)
  );
}
function bj(e, a, i, o, c) {
  if (e !== null) {
    var h = e.memoizedProps;
    if (Ie(h, o) && e.ref === a.ref)
      if (((dh = !1), (a.pendingProps = o = h), (e.lanes & c) !== 0))
        e.flags & 131072 && (dh = !0);
      else return (a.lanes = e.lanes), Zi(e, a, c);
  }
  return cj(e, a, i, o, c);
}
function dj(e, a, i) {
  var o = a.pendingProps,
    c = o.children,
    h = e !== null ? e.memoizedState : null;
  if (o.mode === "hidden")
    if (!(a.mode & 1))
      (a.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        G(ej, fj),
        (fj |= i);
    else {
      if (!(i & 1073741824))
        return (
          (e = h !== null ? h.baseLanes | i : i),
          (a.lanes = a.childLanes = 1073741824),
          (a.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (a.updateQueue = null),
          G(ej, fj),
          (fj |= e),
          null
        );
      (a.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (o = h !== null ? h.baseLanes : i),
        G(ej, fj),
        (fj |= o);
    }
  else
    h !== null ? ((o = h.baseLanes | i), (a.memoizedState = null)) : (o = i),
      G(ej, fj),
      (fj |= o);
  return Xi(e, a, c, i), a.child;
}
function gj(e, a) {
  var i = a.ref;
  ((e === null && i !== null) || (e !== null && e.ref !== i)) &&
    ((a.flags |= 512), (a.flags |= 2097152));
}
function cj(e, a, i, o, c) {
  var h = Zf(i) ? Xf : H.current;
  return (
    (h = Yf(a, h)),
    ch(a, c),
    (i = Nh(e, a, i, o, h, c)),
    (o = Sh()),
    e !== null && !dh
      ? ((a.updateQueue = e.updateQueue),
        (a.flags &= -2053),
        (e.lanes &= ~c),
        Zi(e, a, c))
      : (I && o && vg(a), (a.flags |= 1), Xi(e, a, i, c), a.child)
  );
}
function hj(e, a, i, o, c) {
  if (Zf(i)) {
    var h = !0;
    cg(a);
  } else h = !1;
  if ((ch(a, c), a.stateNode === null))
    ij(e, a), Gi(a, i, o), Ii(a, i, o, c), (o = !0);
  else if (e === null) {
    var b = a.stateNode,
      en = a.memoizedProps;
    b.props = en;
    var tn = b.context,
      sn = i.contextType;
    typeof sn == "object" && sn !== null
      ? (sn = eh(sn))
      : ((sn = Zf(i) ? Xf : H.current), (sn = Yf(a, sn)));
    var mn = i.getDerivedStateFromProps,
      hn =
        typeof mn == "function" ||
        typeof b.getSnapshotBeforeUpdate == "function";
    hn ||
      (typeof b.UNSAFE_componentWillReceiveProps != "function" &&
        typeof b.componentWillReceiveProps != "function") ||
      ((en !== o || tn !== sn) && Hi(a, b, o, sn)),
      (jh = !1);
    var gn = a.memoizedState;
    (b.state = gn),
      qh(a, o, b, c),
      (tn = a.memoizedState),
      en !== o || gn !== tn || Wf.current || jh
        ? (typeof mn == "function" && (Di(a, i, mn, o), (tn = a.memoizedState)),
          (en = jh || Fi(a, i, en, o, gn, tn, sn))
            ? (hn ||
                (typeof b.UNSAFE_componentWillMount != "function" &&
                  typeof b.componentWillMount != "function") ||
                (typeof b.componentWillMount == "function" &&
                  b.componentWillMount(),
                typeof b.UNSAFE_componentWillMount == "function" &&
                  b.UNSAFE_componentWillMount()),
              typeof b.componentDidMount == "function" && (a.flags |= 4194308))
            : (typeof b.componentDidMount == "function" && (a.flags |= 4194308),
              (a.memoizedProps = o),
              (a.memoizedState = tn)),
          (b.props = o),
          (b.state = tn),
          (b.context = sn),
          (o = en))
        : (typeof b.componentDidMount == "function" && (a.flags |= 4194308),
          (o = !1));
  } else {
    (b = a.stateNode),
      lh(e, a),
      (en = a.memoizedProps),
      (sn = a.type === a.elementType ? en : Ci(a.type, en)),
      (b.props = sn),
      (hn = a.pendingProps),
      (gn = b.context),
      (tn = i.contextType),
      typeof tn == "object" && tn !== null
        ? (tn = eh(tn))
        : ((tn = Zf(i) ? Xf : H.current), (tn = Yf(a, tn)));
    var Sn = i.getDerivedStateFromProps;
    (mn =
      typeof Sn == "function" ||
      typeof b.getSnapshotBeforeUpdate == "function") ||
      (typeof b.UNSAFE_componentWillReceiveProps != "function" &&
        typeof b.componentWillReceiveProps != "function") ||
      ((en !== hn || gn !== tn) && Hi(a, b, o, tn)),
      (jh = !1),
      (gn = a.memoizedState),
      (b.state = gn),
      qh(a, o, b, c);
    var An = a.memoizedState;
    en !== hn || gn !== An || Wf.current || jh
      ? (typeof Sn == "function" && (Di(a, i, Sn, o), (An = a.memoizedState)),
        (sn = jh || Fi(a, i, sn, o, gn, An, tn) || !1)
          ? (mn ||
              (typeof b.UNSAFE_componentWillUpdate != "function" &&
                typeof b.componentWillUpdate != "function") ||
              (typeof b.componentWillUpdate == "function" &&
                b.componentWillUpdate(o, An, tn),
              typeof b.UNSAFE_componentWillUpdate == "function" &&
                b.UNSAFE_componentWillUpdate(o, An, tn)),
            typeof b.componentDidUpdate == "function" && (a.flags |= 4),
            typeof b.getSnapshotBeforeUpdate == "function" && (a.flags |= 1024))
          : (typeof b.componentDidUpdate != "function" ||
              (en === e.memoizedProps && gn === e.memoizedState) ||
              (a.flags |= 4),
            typeof b.getSnapshotBeforeUpdate != "function" ||
              (en === e.memoizedProps && gn === e.memoizedState) ||
              (a.flags |= 1024),
            (a.memoizedProps = o),
            (a.memoizedState = An)),
        (b.props = o),
        (b.state = An),
        (b.context = tn),
        (o = sn))
      : (typeof b.componentDidUpdate != "function" ||
          (en === e.memoizedProps && gn === e.memoizedState) ||
          (a.flags |= 4),
        typeof b.getSnapshotBeforeUpdate != "function" ||
          (en === e.memoizedProps && gn === e.memoizedState) ||
          (a.flags |= 1024),
        (o = !1));
  }
  return jj(e, a, i, o, h, c);
}
function jj(e, a, i, o, c, h) {
  gj(e, a);
  var b = (a.flags & 128) !== 0;
  if (!o && !b) return c && dg(a, i, !1), Zi(e, a, h);
  (o = a.stateNode), (Wi.current = a);
  var en =
    b && typeof i.getDerivedStateFromError != "function" ? null : o.render();
  return (
    (a.flags |= 1),
    e !== null && b
      ? ((a.child = Ug(a, e.child, null, h)), (a.child = Ug(a, null, en, h)))
      : Xi(e, a, en, h),
    (a.memoizedState = o.state),
    c && dg(a, i, !0),
    a.child
  );
}
function kj(e) {
  var a = e.stateNode;
  a.pendingContext
    ? ag(e, a.pendingContext, a.pendingContext !== a.context)
    : a.context && ag(e, a.context, !1),
    yh(e, a.containerInfo);
}
function lj(e, a, i, o, c) {
  return Ig(), Jg(c), (a.flags |= 256), Xi(e, a, i, o), a.child;
}
var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
function nj(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function oj(e, a, i) {
  var o = a.pendingProps,
    c = L.current,
    h = !1,
    b = (a.flags & 128) !== 0,
    en;
  if (
    ((en = b) ||
      (en = e !== null && e.memoizedState === null ? !1 : (c & 2) !== 0),
    en
      ? ((h = !0), (a.flags &= -129))
      : (e === null || e.memoizedState !== null) && (c |= 1),
    G(L, c & 1),
    e === null)
  )
    return (
      Eg(a),
      (e = a.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (a.mode & 1
            ? e.data === "$!"
              ? (a.lanes = 8)
              : (a.lanes = 1073741824)
            : (a.lanes = 1),
          null)
        : ((b = o.children),
          (e = o.fallback),
          h
            ? ((o = a.mode),
              (h = a.child),
              (b = { mode: "hidden", children: b }),
              !(o & 1) && h !== null
                ? ((h.childLanes = 0), (h.pendingProps = b))
                : (h = pj(b, o, 0, null)),
              (e = Tg(e, o, i, null)),
              (h.return = a),
              (e.return = a),
              (h.sibling = e),
              (a.child = h),
              (a.child.memoizedState = nj(i)),
              (a.memoizedState = mj),
              e)
            : qj(a, b))
    );
  if (((c = e.memoizedState), c !== null && ((en = c.dehydrated), en !== null)))
    return rj(e, a, b, o, en, c, i);
  if (h) {
    (h = o.fallback), (b = a.mode), (c = e.child), (en = c.sibling);
    var tn = { mode: "hidden", children: o.children };
    return (
      !(b & 1) && a.child !== c
        ? ((o = a.child),
          (o.childLanes = 0),
          (o.pendingProps = tn),
          (a.deletions = null))
        : ((o = Pg(c, tn)), (o.subtreeFlags = c.subtreeFlags & 14680064)),
      en !== null ? (h = Pg(en, h)) : ((h = Tg(h, b, i, null)), (h.flags |= 2)),
      (h.return = a),
      (o.return = a),
      (o.sibling = h),
      (a.child = o),
      (o = h),
      (h = a.child),
      (b = e.child.memoizedState),
      (b =
        b === null
          ? nj(i)
          : {
              baseLanes: b.baseLanes | i,
              cachePool: null,
              transitions: b.transitions,
            }),
      (h.memoizedState = b),
      (h.childLanes = e.childLanes & ~i),
      (a.memoizedState = mj),
      o
    );
  }
  return (
    (h = e.child),
    (e = h.sibling),
    (o = Pg(h, { mode: "visible", children: o.children })),
    !(a.mode & 1) && (o.lanes = i),
    (o.return = a),
    (o.sibling = null),
    e !== null &&
      ((i = a.deletions),
      i === null ? ((a.deletions = [e]), (a.flags |= 16)) : i.push(e)),
    (a.child = o),
    (a.memoizedState = null),
    o
  );
}
function qj(e, a) {
  return (
    (a = pj({ mode: "visible", children: a }, e.mode, 0, null)),
    (a.return = e),
    (e.child = a)
  );
}
function sj(e, a, i, o) {
  return (
    o !== null && Jg(o),
    Ug(a, e.child, null, i),
    (e = qj(a, a.pendingProps.children)),
    (e.flags |= 2),
    (a.memoizedState = null),
    e
  );
}
function rj(e, a, i, o, c, h, b) {
  if (i)
    return a.flags & 256
      ? ((a.flags &= -257), (o = Ki(Error(p(422)))), sj(e, a, b, o))
      : a.memoizedState !== null
      ? ((a.child = e.child), (a.flags |= 128), null)
      : ((h = o.fallback),
        (c = a.mode),
        (o = pj({ mode: "visible", children: o.children }, c, 0, null)),
        (h = Tg(h, c, b, null)),
        (h.flags |= 2),
        (o.return = a),
        (h.return = a),
        (o.sibling = h),
        (a.child = o),
        a.mode & 1 && Ug(a, e.child, null, b),
        (a.child.memoizedState = nj(b)),
        (a.memoizedState = mj),
        h);
  if (!(a.mode & 1)) return sj(e, a, b, null);
  if (c.data === "$!") {
    if (((o = c.nextSibling && c.nextSibling.dataset), o)) var en = o.dgst;
    return (
      (o = en), (h = Error(p(419))), (o = Ki(h, o, void 0)), sj(e, a, b, o)
    );
  }
  if (((en = (b & e.childLanes) !== 0), dh || en)) {
    if (((o = Q), o !== null)) {
      switch (b & -b) {
        case 4:
          c = 2;
          break;
        case 16:
          c = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          c = 32;
          break;
        case 536870912:
          c = 268435456;
          break;
        default:
          c = 0;
      }
      (c = c & (o.suspendedLanes | b) ? 0 : c),
        c !== 0 &&
          c !== h.retryLane &&
          ((h.retryLane = c), ih(e, c), gi(o, e, c, -1));
    }
    return tj(), (o = Ki(Error(p(421)))), sj(e, a, b, o);
  }
  return c.data === "$?"
    ? ((a.flags |= 128),
      (a.child = e.child),
      (a = uj.bind(null, e)),
      (c._reactRetry = a),
      null)
    : ((e = h.treeContext),
      (yg = Lf(c.nextSibling)),
      (xg = a),
      (I = !0),
      (zg = null),
      e !== null &&
        ((og[pg++] = rg),
        (og[pg++] = sg),
        (og[pg++] = qg),
        (rg = e.id),
        (sg = e.overflow),
        (qg = a)),
      (a = qj(a, o.children)),
      (a.flags |= 4096),
      a);
}
function vj(e, a, i) {
  e.lanes |= a;
  var o = e.alternate;
  o !== null && (o.lanes |= a), bh(e.return, a, i);
}
function wj(e, a, i, o, c) {
  var h = e.memoizedState;
  h === null
    ? (e.memoizedState = {
        isBackwards: a,
        rendering: null,
        renderingStartTime: 0,
        last: o,
        tail: i,
        tailMode: c,
      })
    : ((h.isBackwards = a),
      (h.rendering = null),
      (h.renderingStartTime = 0),
      (h.last = o),
      (h.tail = i),
      (h.tailMode = c));
}
function xj(e, a, i) {
  var o = a.pendingProps,
    c = o.revealOrder,
    h = o.tail;
  if ((Xi(e, a, o.children, i), (o = L.current), o & 2))
    (o = (o & 1) | 2), (a.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = a.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && vj(e, i, a);
        else if (e.tag === 19) vj(e, i, a);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === a) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === a) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    o &= 1;
  }
  if ((G(L, o), !(a.mode & 1))) a.memoizedState = null;
  else
    switch (c) {
      case "forwards":
        for (i = a.child, c = null; i !== null; )
          (e = i.alternate),
            e !== null && Ch(e) === null && (c = i),
            (i = i.sibling);
        (i = c),
          i === null
            ? ((c = a.child), (a.child = null))
            : ((c = i.sibling), (i.sibling = null)),
          wj(a, !1, c, i, h);
        break;
      case "backwards":
        for (i = null, c = a.child, a.child = null; c !== null; ) {
          if (((e = c.alternate), e !== null && Ch(e) === null)) {
            a.child = c;
            break;
          }
          (e = c.sibling), (c.sibling = i), (i = c), (c = e);
        }
        wj(a, !0, i, null, h);
        break;
      case "together":
        wj(a, !1, null, null, void 0);
        break;
      default:
        a.memoizedState = null;
    }
  return a.child;
}
function ij(e, a) {
  !(a.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (a.alternate = null), (a.flags |= 2));
}
function Zi(e, a, i) {
  if (
    (e !== null && (a.dependencies = e.dependencies),
    (rh |= a.lanes),
    !(i & a.childLanes))
  )
    return null;
  if (e !== null && a.child !== e.child) throw Error(p(153));
  if (a.child !== null) {
    for (
      e = a.child, i = Pg(e, e.pendingProps), a.child = i, i.return = a;
      e.sibling !== null;

    )
      (e = e.sibling), (i = i.sibling = Pg(e, e.pendingProps)), (i.return = a);
    i.sibling = null;
  }
  return a.child;
}
function yj(e, a, i) {
  switch (a.tag) {
    case 3:
      kj(a), Ig();
      break;
    case 5:
      Ah(a);
      break;
    case 1:
      Zf(a.type) && cg(a);
      break;
    case 4:
      yh(a, a.stateNode.containerInfo);
      break;
    case 10:
      var o = a.type._context,
        c = a.memoizedProps.value;
      G(Wg, o._currentValue), (o._currentValue = c);
      break;
    case 13:
      if (((o = a.memoizedState), o !== null))
        return o.dehydrated !== null
          ? (G(L, L.current & 1), (a.flags |= 128), null)
          : i & a.child.childLanes
          ? oj(e, a, i)
          : (G(L, L.current & 1),
            (e = Zi(e, a, i)),
            e !== null ? e.sibling : null);
      G(L, L.current & 1);
      break;
    case 19:
      if (((o = (i & a.childLanes) !== 0), e.flags & 128)) {
        if (o) return xj(e, a, i);
        a.flags |= 128;
      }
      if (
        ((c = a.memoizedState),
        c !== null &&
          ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
        G(L, L.current),
        o)
      )
        break;
      return null;
    case 22:
    case 23:
      return (a.lanes = 0), dj(e, a, i);
  }
  return Zi(e, a, i);
}
var zj, Aj, Bj, Cj;
zj = function (e, a) {
  for (var i = a.child; i !== null; ) {
    if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
    else if (i.tag !== 4 && i.child !== null) {
      (i.child.return = i), (i = i.child);
      continue;
    }
    if (i === a) break;
    for (; i.sibling === null; ) {
      if (i.return === null || i.return === a) return;
      i = i.return;
    }
    (i.sibling.return = i.return), (i = i.sibling);
  }
};
Aj = function () {};
Bj = function (e, a, i, o) {
  var c = e.memoizedProps;
  if (c !== o) {
    (e = a.stateNode), xh(uh.current);
    var h = null;
    switch (i) {
      case "input":
        (c = Ya(e, c)), (o = Ya(e, o)), (h = []);
        break;
      case "select":
        (c = A({}, c, { value: void 0 })),
          (o = A({}, o, { value: void 0 })),
          (h = []);
        break;
      case "textarea":
        (c = gb(e, c)), (o = gb(e, o)), (h = []);
        break;
      default:
        typeof c.onClick != "function" &&
          typeof o.onClick == "function" &&
          (e.onclick = Bf);
    }
    ub(i, o);
    var b;
    i = null;
    for (sn in c)
      if (!o.hasOwnProperty(sn) && c.hasOwnProperty(sn) && c[sn] != null)
        if (sn === "style") {
          var en = c[sn];
          for (b in en) en.hasOwnProperty(b) && (i || (i = {}), (i[b] = ""));
        } else
          sn !== "dangerouslySetInnerHTML" &&
            sn !== "children" &&
            sn !== "suppressContentEditableWarning" &&
            sn !== "suppressHydrationWarning" &&
            sn !== "autoFocus" &&
            (ea.hasOwnProperty(sn)
              ? h || (h = [])
              : (h = h || []).push(sn, null));
    for (sn in o) {
      var tn = o[sn];
      if (
        ((en = c != null ? c[sn] : void 0),
        o.hasOwnProperty(sn) && tn !== en && (tn != null || en != null))
      )
        if (sn === "style")
          if (en) {
            for (b in en)
              !en.hasOwnProperty(b) ||
                (tn && tn.hasOwnProperty(b)) ||
                (i || (i = {}), (i[b] = ""));
            for (b in tn)
              tn.hasOwnProperty(b) &&
                en[b] !== tn[b] &&
                (i || (i = {}), (i[b] = tn[b]));
          } else i || (h || (h = []), h.push(sn, i)), (i = tn);
        else
          sn === "dangerouslySetInnerHTML"
            ? ((tn = tn ? tn.__html : void 0),
              (en = en ? en.__html : void 0),
              tn != null && en !== tn && (h = h || []).push(sn, tn))
            : sn === "children"
            ? (typeof tn != "string" && typeof tn != "number") ||
              (h = h || []).push(sn, "" + tn)
            : sn !== "suppressContentEditableWarning" &&
              sn !== "suppressHydrationWarning" &&
              (ea.hasOwnProperty(sn)
                ? (tn != null && sn === "onScroll" && D("scroll", e),
                  h || en === tn || (h = []))
                : (h = h || []).push(sn, tn));
    }
    i && (h = h || []).push("style", i);
    var sn = h;
    (a.updateQueue = sn) && (a.flags |= 4);
  }
};
Cj = function (e, a, i, o) {
  i !== o && (a.flags |= 4);
};
function Dj(e, a) {
  if (!I)
    switch (e.tailMode) {
      case "hidden":
        a = e.tail;
        for (var i = null; a !== null; )
          a.alternate !== null && (i = a), (a = a.sibling);
        i === null ? (e.tail = null) : (i.sibling = null);
        break;
      case "collapsed":
        i = e.tail;
        for (var o = null; i !== null; )
          i.alternate !== null && (o = i), (i = i.sibling);
        o === null
          ? a || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (o.sibling = null);
    }
}
function S(e) {
  var a = e.alternate !== null && e.alternate.child === e.child,
    i = 0,
    o = 0;
  if (a)
    for (var c = e.child; c !== null; )
      (i |= c.lanes | c.childLanes),
        (o |= c.subtreeFlags & 14680064),
        (o |= c.flags & 14680064),
        (c.return = e),
        (c = c.sibling);
  else
    for (c = e.child; c !== null; )
      (i |= c.lanes | c.childLanes),
        (o |= c.subtreeFlags),
        (o |= c.flags),
        (c.return = e),
        (c = c.sibling);
  return (e.subtreeFlags |= o), (e.childLanes = i), a;
}
function Ej(e, a, i) {
  var o = a.pendingProps;
  switch ((wg(a), a.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S(a), null;
    case 1:
      return Zf(a.type) && $f(), S(a), null;
    case 3:
      return (
        (o = a.stateNode),
        zh(),
        E(Wf),
        E(H),
        Eh(),
        o.pendingContext &&
          ((o.context = o.pendingContext), (o.pendingContext = null)),
        (e === null || e.child === null) &&
          (Gg(a)
            ? (a.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(a.flags & 256)) ||
              ((a.flags |= 1024), zg !== null && (Fj(zg), (zg = null)))),
        Aj(e, a),
        S(a),
        null
      );
    case 5:
      Bh(a);
      var c = xh(wh.current);
      if (((i = a.type), e !== null && a.stateNode != null))
        Bj(e, a, i, o, c),
          e.ref !== a.ref && ((a.flags |= 512), (a.flags |= 2097152));
      else {
        if (!o) {
          if (a.stateNode === null) throw Error(p(166));
          return S(a), null;
        }
        if (((e = xh(uh.current)), Gg(a))) {
          (o = a.stateNode), (i = a.type);
          var h = a.memoizedProps;
          switch (((o[Of] = a), (o[Pf] = h), (e = (a.mode & 1) !== 0), i)) {
            case "dialog":
              D("cancel", o), D("close", o);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", o);
              break;
            case "video":
            case "audio":
              for (c = 0; c < lf.length; c++) D(lf[c], o);
              break;
            case "source":
              D("error", o);
              break;
            case "img":
            case "image":
            case "link":
              D("error", o), D("load", o);
              break;
            case "details":
              D("toggle", o);
              break;
            case "input":
              Za(o, h), D("invalid", o);
              break;
            case "select":
              (o._wrapperState = { wasMultiple: !!h.multiple }),
                D("invalid", o);
              break;
            case "textarea":
              hb(o, h), D("invalid", o);
          }
          ub(i, h), (c = null);
          for (var b in h)
            if (h.hasOwnProperty(b)) {
              var en = h[b];
              b === "children"
                ? typeof en == "string"
                  ? o.textContent !== en &&
                    (h.suppressHydrationWarning !== !0 &&
                      Af(o.textContent, en, e),
                    (c = ["children", en]))
                  : typeof en == "number" &&
                    o.textContent !== "" + en &&
                    (h.suppressHydrationWarning !== !0 &&
                      Af(o.textContent, en, e),
                    (c = ["children", "" + en]))
                : ea.hasOwnProperty(b) &&
                  en != null &&
                  b === "onScroll" &&
                  D("scroll", o);
            }
          switch (i) {
            case "input":
              Va(o), db(o, h, !0);
              break;
            case "textarea":
              Va(o), jb(o);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof h.onClick == "function" && (o.onclick = Bf);
          }
          (o = c), (a.updateQueue = o), o !== null && (a.flags |= 4);
        } else {
          (b = c.nodeType === 9 ? c : c.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = kb(i)),
            e === "http://www.w3.org/1999/xhtml"
              ? i === "script"
                ? ((e = b.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof o.is == "string"
                ? (e = b.createElement(i, { is: o.is }))
                : ((e = b.createElement(i)),
                  i === "select" &&
                    ((b = e),
                    o.multiple
                      ? (b.multiple = !0)
                      : o.size && (b.size = o.size)))
              : (e = b.createElementNS(e, i)),
            (e[Of] = a),
            (e[Pf] = o),
            zj(e, a, !1, !1),
            (a.stateNode = e);
          e: {
            switch (((b = vb(i, o)), i)) {
              case "dialog":
                D("cancel", e), D("close", e), (c = o);
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", e), (c = o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < lf.length; c++) D(lf[c], e);
                c = o;
                break;
              case "source":
                D("error", e), (c = o);
                break;
              case "img":
              case "image":
              case "link":
                D("error", e), D("load", e), (c = o);
                break;
              case "details":
                D("toggle", e), (c = o);
                break;
              case "input":
                Za(e, o), (c = Ya(e, o)), D("invalid", e);
                break;
              case "option":
                c = o;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!o.multiple }),
                  (c = A({}, o, { value: void 0 })),
                  D("invalid", e);
                break;
              case "textarea":
                hb(e, o), (c = gb(e, o)), D("invalid", e);
                break;
              default:
                c = o;
            }
            ub(i, c), (en = c);
            for (h in en)
              if (en.hasOwnProperty(h)) {
                var tn = en[h];
                h === "style"
                  ? sb(e, tn)
                  : h === "dangerouslySetInnerHTML"
                  ? ((tn = tn ? tn.__html : void 0), tn != null && nb(e, tn))
                  : h === "children"
                  ? typeof tn == "string"
                    ? (i !== "textarea" || tn !== "") && ob(e, tn)
                    : typeof tn == "number" && ob(e, "" + tn)
                  : h !== "suppressContentEditableWarning" &&
                    h !== "suppressHydrationWarning" &&
                    h !== "autoFocus" &&
                    (ea.hasOwnProperty(h)
                      ? tn != null && h === "onScroll" && D("scroll", e)
                      : tn != null && ta(e, h, tn, b));
              }
            switch (i) {
              case "input":
                Va(e), db(e, o, !1);
                break;
              case "textarea":
                Va(e), jb(e);
                break;
              case "option":
                o.value != null && e.setAttribute("value", "" + Sa(o.value));
                break;
              case "select":
                (e.multiple = !!o.multiple),
                  (h = o.value),
                  h != null
                    ? fb(e, !!o.multiple, h, !1)
                    : o.defaultValue != null &&
                      fb(e, !!o.multiple, o.defaultValue, !0);
                break;
              default:
                typeof c.onClick == "function" && (e.onclick = Bf);
            }
            switch (i) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                o = !!o.autoFocus;
                break e;
              case "img":
                o = !0;
                break e;
              default:
                o = !1;
            }
          }
          o && (a.flags |= 4);
        }
        a.ref !== null && ((a.flags |= 512), (a.flags |= 2097152));
      }
      return S(a), null;
    case 6:
      if (e && a.stateNode != null) Cj(e, a, e.memoizedProps, o);
      else {
        if (typeof o != "string" && a.stateNode === null) throw Error(p(166));
        if (((i = xh(wh.current)), xh(uh.current), Gg(a))) {
          if (
            ((o = a.stateNode),
            (i = a.memoizedProps),
            (o[Of] = a),
            (h = o.nodeValue !== i) && ((e = xg), e !== null))
          )
            switch (e.tag) {
              case 3:
                Af(o.nodeValue, i, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Af(o.nodeValue, i, (e.mode & 1) !== 0);
            }
          h && (a.flags |= 4);
        } else
          (o = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(o)),
            (o[Of] = a),
            (a.stateNode = o);
      }
      return S(a), null;
    case 13:
      if (
        (E(L),
        (o = a.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (I && yg !== null && a.mode & 1 && !(a.flags & 128))
          Hg(), Ig(), (a.flags |= 98560), (h = !1);
        else if (((h = Gg(a)), o !== null && o.dehydrated !== null)) {
          if (e === null) {
            if (!h) throw Error(p(318));
            if (
              ((h = a.memoizedState),
              (h = h !== null ? h.dehydrated : null),
              !h)
            )
              throw Error(p(317));
            h[Of] = a;
          } else
            Ig(), !(a.flags & 128) && (a.memoizedState = null), (a.flags |= 4);
          S(a), (h = !1);
        } else zg !== null && (Fj(zg), (zg = null)), (h = !0);
        if (!h) return a.flags & 65536 ? a : null;
      }
      return a.flags & 128
        ? ((a.lanes = i), a)
        : ((o = o !== null),
          o !== (e !== null && e.memoizedState !== null) &&
            o &&
            ((a.child.flags |= 8192),
            a.mode & 1 &&
              (e === null || L.current & 1 ? T === 0 && (T = 3) : tj())),
          a.updateQueue !== null && (a.flags |= 4),
          S(a),
          null);
    case 4:
      return (
        zh(), Aj(e, a), e === null && sf(a.stateNode.containerInfo), S(a), null
      );
    case 10:
      return ah(a.type._context), S(a), null;
    case 17:
      return Zf(a.type) && $f(), S(a), null;
    case 19:
      if ((E(L), (h = a.memoizedState), h === null)) return S(a), null;
      if (((o = (a.flags & 128) !== 0), (b = h.rendering), b === null))
        if (o) Dj(h, !1);
        else {
          if (T !== 0 || (e !== null && e.flags & 128))
            for (e = a.child; e !== null; ) {
              if (((b = Ch(e)), b !== null)) {
                for (
                  a.flags |= 128,
                    Dj(h, !1),
                    o = b.updateQueue,
                    o !== null && ((a.updateQueue = o), (a.flags |= 4)),
                    a.subtreeFlags = 0,
                    o = i,
                    i = a.child;
                  i !== null;

                )
                  (h = i),
                    (e = o),
                    (h.flags &= 14680066),
                    (b = h.alternate),
                    b === null
                      ? ((h.childLanes = 0),
                        (h.lanes = e),
                        (h.child = null),
                        (h.subtreeFlags = 0),
                        (h.memoizedProps = null),
                        (h.memoizedState = null),
                        (h.updateQueue = null),
                        (h.dependencies = null),
                        (h.stateNode = null))
                      : ((h.childLanes = b.childLanes),
                        (h.lanes = b.lanes),
                        (h.child = b.child),
                        (h.subtreeFlags = 0),
                        (h.deletions = null),
                        (h.memoizedProps = b.memoizedProps),
                        (h.memoizedState = b.memoizedState),
                        (h.updateQueue = b.updateQueue),
                        (h.type = b.type),
                        (e = b.dependencies),
                        (h.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (i = i.sibling);
                return G(L, (L.current & 1) | 2), a.child;
              }
              e = e.sibling;
            }
          h.tail !== null &&
            B() > Gj &&
            ((a.flags |= 128), (o = !0), Dj(h, !1), (a.lanes = 4194304));
        }
      else {
        if (!o)
          if (((e = Ch(b)), e !== null)) {
            if (
              ((a.flags |= 128),
              (o = !0),
              (i = e.updateQueue),
              i !== null && ((a.updateQueue = i), (a.flags |= 4)),
              Dj(h, !0),
              h.tail === null && h.tailMode === "hidden" && !b.alternate && !I)
            )
              return S(a), null;
          } else
            2 * B() - h.renderingStartTime > Gj &&
              i !== 1073741824 &&
              ((a.flags |= 128), (o = !0), Dj(h, !1), (a.lanes = 4194304));
        h.isBackwards
          ? ((b.sibling = a.child), (a.child = b))
          : ((i = h.last),
            i !== null ? (i.sibling = b) : (a.child = b),
            (h.last = b));
      }
      return h.tail !== null
        ? ((a = h.tail),
          (h.rendering = a),
          (h.tail = a.sibling),
          (h.renderingStartTime = B()),
          (a.sibling = null),
          (i = L.current),
          G(L, o ? (i & 1) | 2 : i & 1),
          a)
        : (S(a), null);
    case 22:
    case 23:
      return (
        Hj(),
        (o = a.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== o && (a.flags |= 8192),
        o && a.mode & 1
          ? fj & 1073741824 && (S(a), a.subtreeFlags & 6 && (a.flags |= 8192))
          : S(a),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p(156, a.tag));
}
function Ij(e, a) {
  switch ((wg(a), a.tag)) {
    case 1:
      return (
        Zf(a.type) && $f(),
        (e = a.flags),
        e & 65536 ? ((a.flags = (e & -65537) | 128), a) : null
      );
    case 3:
      return (
        zh(),
        E(Wf),
        E(H),
        Eh(),
        (e = a.flags),
        e & 65536 && !(e & 128) ? ((a.flags = (e & -65537) | 128), a) : null
      );
    case 5:
      return Bh(a), null;
    case 13:
      if ((E(L), (e = a.memoizedState), e !== null && e.dehydrated !== null)) {
        if (a.alternate === null) throw Error(p(340));
        Ig();
      }
      return (
        (e = a.flags), e & 65536 ? ((a.flags = (e & -65537) | 128), a) : null
      );
    case 19:
      return E(L), null;
    case 4:
      return zh(), null;
    case 10:
      return ah(a.type._context), null;
    case 22:
    case 23:
      return Hj(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jj = !1,
  U = !1,
  Kj = typeof WeakSet == "function" ? WeakSet : Set,
  V = null;
function Lj(e, a) {
  var i = e.ref;
  if (i !== null)
    if (typeof i == "function")
      try {
        i(null);
      } catch (o) {
        W(e, a, o);
      }
    else i.current = null;
}
function Mj(e, a, i) {
  try {
    i();
  } catch (o) {
    W(e, a, o);
  }
}
var Nj = !1;
function Oj(e, a) {
  if (((Cf = dd), (e = Me()), Ne(e))) {
    if ("selectionStart" in e)
      var i = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        i = ((i = e.ownerDocument) && i.defaultView) || window;
        var o = i.getSelection && i.getSelection();
        if (o && o.rangeCount !== 0) {
          i = o.anchorNode;
          var c = o.anchorOffset,
            h = o.focusNode;
          o = o.focusOffset;
          try {
            i.nodeType, h.nodeType;
          } catch {
            i = null;
            break e;
          }
          var b = 0,
            en = -1,
            tn = -1,
            sn = 0,
            mn = 0,
            hn = e,
            gn = null;
          n: for (;;) {
            for (
              var Sn;
              hn !== i || (c !== 0 && hn.nodeType !== 3) || (en = b + c),
                hn !== h || (o !== 0 && hn.nodeType !== 3) || (tn = b + o),
                hn.nodeType === 3 && (b += hn.nodeValue.length),
                (Sn = hn.firstChild) !== null;

            )
              (gn = hn), (hn = Sn);
            for (;;) {
              if (hn === e) break n;
              if (
                (gn === i && ++sn === c && (en = b),
                gn === h && ++mn === o && (tn = b),
                (Sn = hn.nextSibling) !== null)
              )
                break;
              (hn = gn), (gn = hn.parentNode);
            }
            hn = Sn;
          }
          i = en === -1 || tn === -1 ? null : { start: en, end: tn };
        } else i = null;
      }
    i = i || { start: 0, end: 0 };
  } else i = null;
  for (Df = { focusedElem: e, selectionRange: i }, dd = !1, V = a; V !== null; )
    if (((a = V), (e = a.child), (a.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = a), (V = e);
    else
      for (; V !== null; ) {
        a = V;
        try {
          var An = a.alternate;
          if (a.flags & 1024)
            switch (a.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (An !== null) {
                  var xn = An.memoizedProps,
                    Cn = An.memoizedState,
                    an = a.stateNode,
                    un = an.getSnapshotBeforeUpdate(
                      a.elementType === a.type ? xn : Ci(a.type, xn),
                      Cn
                    );
                  an.__reactInternalSnapshotBeforeUpdate = un;
                }
                break;
              case 3:
                var dn = a.stateNode.containerInfo;
                dn.nodeType === 1
                  ? (dn.textContent = "")
                  : dn.nodeType === 9 &&
                    dn.documentElement &&
                    dn.removeChild(dn.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p(163));
            }
        } catch (Mn) {
          W(a, a.return, Mn);
        }
        if (((e = a.sibling), e !== null)) {
          (e.return = a.return), (V = e);
          break;
        }
        V = a.return;
      }
  return (An = Nj), (Nj = !1), An;
}
function Pj(e, a, i) {
  var o = a.updateQueue;
  if (((o = o !== null ? o.lastEffect : null), o !== null)) {
    var c = (o = o.next);
    do {
      if ((c.tag & e) === e) {
        var h = c.destroy;
        (c.destroy = void 0), h !== void 0 && Mj(a, i, h);
      }
      c = c.next;
    } while (c !== o);
  }
}
function Qj(e, a) {
  if (
    ((a = a.updateQueue), (a = a !== null ? a.lastEffect : null), a !== null)
  ) {
    var i = (a = a.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.create;
        i.destroy = o();
      }
      i = i.next;
    } while (i !== a);
  }
}
function Rj(e) {
  var a = e.ref;
  if (a !== null) {
    var i = e.stateNode;
    switch (e.tag) {
      case 5:
        e = i;
        break;
      default:
        e = i;
    }
    typeof a == "function" ? a(e) : (a.current = e);
  }
}
function Sj(e) {
  var a = e.alternate;
  a !== null && ((e.alternate = null), Sj(a)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((a = e.stateNode),
      a !== null &&
        (delete a[Of], delete a[Pf], delete a[of], delete a[Qf], delete a[Rf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Tj(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Uj(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Tj(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Vj(e, a, i) {
  var o = e.tag;
  if (o === 5 || o === 6)
    (e = e.stateNode),
      a
        ? i.nodeType === 8
          ? i.parentNode.insertBefore(e, a)
          : i.insertBefore(e, a)
        : (i.nodeType === 8
            ? ((a = i.parentNode), a.insertBefore(e, i))
            : ((a = i), a.appendChild(e)),
          (i = i._reactRootContainer),
          i != null || a.onclick !== null || (a.onclick = Bf));
  else if (o !== 4 && ((e = e.child), e !== null))
    for (Vj(e, a, i), e = e.sibling; e !== null; ) Vj(e, a, i), (e = e.sibling);
}
function Wj(e, a, i) {
  var o = e.tag;
  if (o === 5 || o === 6)
    (e = e.stateNode), a ? i.insertBefore(e, a) : i.appendChild(e);
  else if (o !== 4 && ((e = e.child), e !== null))
    for (Wj(e, a, i), e = e.sibling; e !== null; ) Wj(e, a, i), (e = e.sibling);
}
var X = null,
  Xj = !1;
function Yj(e, a, i) {
  for (i = i.child; i !== null; ) Zj(e, a, i), (i = i.sibling);
}
function Zj(e, a, i) {
  if (lc && typeof lc.onCommitFiberUnmount == "function")
    try {
      lc.onCommitFiberUnmount(kc, i);
    } catch {}
  switch (i.tag) {
    case 5:
      U || Lj(i, a);
    case 6:
      var o = X,
        c = Xj;
      (X = null),
        Yj(e, a, i),
        (X = o),
        (Xj = c),
        X !== null &&
          (Xj
            ? ((e = X),
              (i = i.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i))
            : X.removeChild(i.stateNode));
      break;
    case 18:
      X !== null &&
        (Xj
          ? ((e = X),
            (i = i.stateNode),
            e.nodeType === 8
              ? Kf(e.parentNode, i)
              : e.nodeType === 1 && Kf(e, i),
            bd(e))
          : Kf(X, i.stateNode));
      break;
    case 4:
      (o = X),
        (c = Xj),
        (X = i.stateNode.containerInfo),
        (Xj = !0),
        Yj(e, a, i),
        (X = o),
        (Xj = c);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !U &&
        ((o = i.updateQueue), o !== null && ((o = o.lastEffect), o !== null))
      ) {
        c = o = o.next;
        do {
          var h = c,
            b = h.destroy;
          (h = h.tag),
            b !== void 0 && (h & 2 || h & 4) && Mj(i, a, b),
            (c = c.next);
        } while (c !== o);
      }
      Yj(e, a, i);
      break;
    case 1:
      if (
        !U &&
        (Lj(i, a),
        (o = i.stateNode),
        typeof o.componentWillUnmount == "function")
      )
        try {
          (o.props = i.memoizedProps),
            (o.state = i.memoizedState),
            o.componentWillUnmount();
        } catch (en) {
          W(i, a, en);
        }
      Yj(e, a, i);
      break;
    case 21:
      Yj(e, a, i);
      break;
    case 22:
      i.mode & 1
        ? ((U = (o = U) || i.memoizedState !== null), Yj(e, a, i), (U = o))
        : Yj(e, a, i);
      break;
    default:
      Yj(e, a, i);
  }
}
function ak(e) {
  var a = e.updateQueue;
  if (a !== null) {
    e.updateQueue = null;
    var i = e.stateNode;
    i === null && (i = e.stateNode = new Kj()),
      a.forEach(function (o) {
        var c = bk.bind(null, e, o);
        i.has(o) || (i.add(o), o.then(c, c));
      });
  }
}
function ck(e, a) {
  var i = a.deletions;
  if (i !== null)
    for (var o = 0; o < i.length; o++) {
      var c = i[o];
      try {
        var h = e,
          b = a,
          en = b;
        e: for (; en !== null; ) {
          switch (en.tag) {
            case 5:
              (X = en.stateNode), (Xj = !1);
              break e;
            case 3:
              (X = en.stateNode.containerInfo), (Xj = !0);
              break e;
            case 4:
              (X = en.stateNode.containerInfo), (Xj = !0);
              break e;
          }
          en = en.return;
        }
        if (X === null) throw Error(p(160));
        Zj(h, b, c), (X = null), (Xj = !1);
        var tn = c.alternate;
        tn !== null && (tn.return = null), (c.return = null);
      } catch (sn) {
        W(c, a, sn);
      }
    }
  if (a.subtreeFlags & 12854)
    for (a = a.child; a !== null; ) dk(a, e), (a = a.sibling);
}
function dk(e, a) {
  var i = e.alternate,
    o = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ck(a, e), ek(e), o & 4)) {
        try {
          Pj(3, e, e.return), Qj(3, e);
        } catch (xn) {
          W(e, e.return, xn);
        }
        try {
          Pj(5, e, e.return);
        } catch (xn) {
          W(e, e.return, xn);
        }
      }
      break;
    case 1:
      ck(a, e), ek(e), o & 512 && i !== null && Lj(i, i.return);
      break;
    case 5:
      if (
        (ck(a, e),
        ek(e),
        o & 512 && i !== null && Lj(i, i.return),
        e.flags & 32)
      ) {
        var c = e.stateNode;
        try {
          ob(c, "");
        } catch (xn) {
          W(e, e.return, xn);
        }
      }
      if (o & 4 && ((c = e.stateNode), c != null)) {
        var h = e.memoizedProps,
          b = i !== null ? i.memoizedProps : h,
          en = e.type,
          tn = e.updateQueue;
        if (((e.updateQueue = null), tn !== null))
          try {
            en === "input" && h.type === "radio" && h.name != null && ab(c, h),
              vb(en, b);
            var sn = vb(en, h);
            for (b = 0; b < tn.length; b += 2) {
              var mn = tn[b],
                hn = tn[b + 1];
              mn === "style"
                ? sb(c, hn)
                : mn === "dangerouslySetInnerHTML"
                ? nb(c, hn)
                : mn === "children"
                ? ob(c, hn)
                : ta(c, mn, hn, sn);
            }
            switch (en) {
              case "input":
                bb(c, h);
                break;
              case "textarea":
                ib(c, h);
                break;
              case "select":
                var gn = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!h.multiple;
                var Sn = h.value;
                Sn != null
                  ? fb(c, !!h.multiple, Sn, !1)
                  : gn !== !!h.multiple &&
                    (h.defaultValue != null
                      ? fb(c, !!h.multiple, h.defaultValue, !0)
                      : fb(c, !!h.multiple, h.multiple ? [] : "", !1));
            }
            c[Pf] = h;
          } catch (xn) {
            W(e, e.return, xn);
          }
      }
      break;
    case 6:
      if ((ck(a, e), ek(e), o & 4)) {
        if (e.stateNode === null) throw Error(p(162));
        (c = e.stateNode), (h = e.memoizedProps);
        try {
          c.nodeValue = h;
        } catch (xn) {
          W(e, e.return, xn);
        }
      }
      break;
    case 3:
      if (
        (ck(a, e), ek(e), o & 4 && i !== null && i.memoizedState.isDehydrated)
      )
        try {
          bd(a.containerInfo);
        } catch (xn) {
          W(e, e.return, xn);
        }
      break;
    case 4:
      ck(a, e), ek(e);
      break;
    case 13:
      ck(a, e),
        ek(e),
        (c = e.child),
        c.flags & 8192 &&
          ((h = c.memoizedState !== null),
          (c.stateNode.isHidden = h),
          !h ||
            (c.alternate !== null && c.alternate.memoizedState !== null) ||
            (fk = B())),
        o & 4 && ak(e);
      break;
    case 22:
      if (
        ((mn = i !== null && i.memoizedState !== null),
        e.mode & 1 ? ((U = (sn = U) || mn), ck(a, e), (U = sn)) : ck(a, e),
        ek(e),
        o & 8192)
      ) {
        if (
          ((sn = e.memoizedState !== null),
          (e.stateNode.isHidden = sn) && !mn && e.mode & 1)
        )
          for (V = e, mn = e.child; mn !== null; ) {
            for (hn = V = mn; V !== null; ) {
              switch (((gn = V), (Sn = gn.child), gn.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pj(4, gn, gn.return);
                  break;
                case 1:
                  Lj(gn, gn.return);
                  var An = gn.stateNode;
                  if (typeof An.componentWillUnmount == "function") {
                    (o = gn), (i = gn.return);
                    try {
                      (a = o),
                        (An.props = a.memoizedProps),
                        (An.state = a.memoizedState),
                        An.componentWillUnmount();
                    } catch (xn) {
                      W(o, i, xn);
                    }
                  }
                  break;
                case 5:
                  Lj(gn, gn.return);
                  break;
                case 22:
                  if (gn.memoizedState !== null) {
                    gk(hn);
                    continue;
                  }
              }
              Sn !== null ? ((Sn.return = gn), (V = Sn)) : gk(hn);
            }
            mn = mn.sibling;
          }
        e: for (mn = null, hn = e; ; ) {
          if (hn.tag === 5) {
            if (mn === null) {
              mn = hn;
              try {
                (c = hn.stateNode),
                  sn
                    ? ((h = c.style),
                      typeof h.setProperty == "function"
                        ? h.setProperty("display", "none", "important")
                        : (h.display = "none"))
                    : ((en = hn.stateNode),
                      (tn = hn.memoizedProps.style),
                      (b =
                        tn != null && tn.hasOwnProperty("display")
                          ? tn.display
                          : null),
                      (en.style.display = rb("display", b)));
              } catch (xn) {
                W(e, e.return, xn);
              }
            }
          } else if (hn.tag === 6) {
            if (mn === null)
              try {
                hn.stateNode.nodeValue = sn ? "" : hn.memoizedProps;
              } catch (xn) {
                W(e, e.return, xn);
              }
          } else if (
            ((hn.tag !== 22 && hn.tag !== 23) ||
              hn.memoizedState === null ||
              hn === e) &&
            hn.child !== null
          ) {
            (hn.child.return = hn), (hn = hn.child);
            continue;
          }
          if (hn === e) break e;
          for (; hn.sibling === null; ) {
            if (hn.return === null || hn.return === e) break e;
            mn === hn && (mn = null), (hn = hn.return);
          }
          mn === hn && (mn = null),
            (hn.sibling.return = hn.return),
            (hn = hn.sibling);
        }
      }
      break;
    case 19:
      ck(a, e), ek(e), o & 4 && ak(e);
      break;
    case 21:
      break;
    default:
      ck(a, e), ek(e);
  }
}
function ek(e) {
  var a = e.flags;
  if (a & 2) {
    try {
      e: {
        for (var i = e.return; i !== null; ) {
          if (Tj(i)) {
            var o = i;
            break e;
          }
          i = i.return;
        }
        throw Error(p(160));
      }
      switch (o.tag) {
        case 5:
          var c = o.stateNode;
          o.flags & 32 && (ob(c, ""), (o.flags &= -33));
          var h = Uj(e);
          Wj(e, h, c);
          break;
        case 3:
        case 4:
          var b = o.stateNode.containerInfo,
            en = Uj(e);
          Vj(e, en, b);
          break;
        default:
          throw Error(p(161));
      }
    } catch (tn) {
      W(e, e.return, tn);
    }
    e.flags &= -3;
  }
  a & 4096 && (e.flags &= -4097);
}
function hk(e, a, i) {
  (V = e), ik(e);
}
function ik(e, a, i) {
  for (var o = (e.mode & 1) !== 0; V !== null; ) {
    var c = V,
      h = c.child;
    if (c.tag === 22 && o) {
      var b = c.memoizedState !== null || Jj;
      if (!b) {
        var en = c.alternate,
          tn = (en !== null && en.memoizedState !== null) || U;
        en = Jj;
        var sn = U;
        if (((Jj = b), (U = tn) && !sn))
          for (V = c; V !== null; )
            (b = V),
              (tn = b.child),
              b.tag === 22 && b.memoizedState !== null
                ? jk(c)
                : tn !== null
                ? ((tn.return = b), (V = tn))
                : jk(c);
        for (; h !== null; ) (V = h), ik(h), (h = h.sibling);
        (V = c), (Jj = en), (U = sn);
      }
      kk(e);
    } else
      c.subtreeFlags & 8772 && h !== null ? ((h.return = c), (V = h)) : kk(e);
  }
}
function kk(e) {
  for (; V !== null; ) {
    var a = V;
    if (a.flags & 8772) {
      var i = a.alternate;
      try {
        if (a.flags & 8772)
          switch (a.tag) {
            case 0:
            case 11:
            case 15:
              U || Qj(5, a);
              break;
            case 1:
              var o = a.stateNode;
              if (a.flags & 4 && !U)
                if (i === null) o.componentDidMount();
                else {
                  var c =
                    a.elementType === a.type
                      ? i.memoizedProps
                      : Ci(a.type, i.memoizedProps);
                  o.componentDidUpdate(
                    c,
                    i.memoizedState,
                    o.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var h = a.updateQueue;
              h !== null && sh(a, h, o);
              break;
            case 3:
              var b = a.updateQueue;
              if (b !== null) {
                if (((i = null), a.child !== null))
                  switch (a.child.tag) {
                    case 5:
                      i = a.child.stateNode;
                      break;
                    case 1:
                      i = a.child.stateNode;
                  }
                sh(a, b, i);
              }
              break;
            case 5:
              var en = a.stateNode;
              if (i === null && a.flags & 4) {
                i = en;
                var tn = a.memoizedProps;
                switch (a.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    tn.autoFocus && i.focus();
                    break;
                  case "img":
                    tn.src && (i.src = tn.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (a.memoizedState === null) {
                var sn = a.alternate;
                if (sn !== null) {
                  var mn = sn.memoizedState;
                  if (mn !== null) {
                    var hn = mn.dehydrated;
                    hn !== null && bd(hn);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p(163));
          }
        U || (a.flags & 512 && Rj(a));
      } catch (gn) {
        W(a, a.return, gn);
      }
    }
    if (a === e) {
      V = null;
      break;
    }
    if (((i = a.sibling), i !== null)) {
      (i.return = a.return), (V = i);
      break;
    }
    V = a.return;
  }
}
function gk(e) {
  for (; V !== null; ) {
    var a = V;
    if (a === e) {
      V = null;
      break;
    }
    var i = a.sibling;
    if (i !== null) {
      (i.return = a.return), (V = i);
      break;
    }
    V = a.return;
  }
}
function jk(e) {
  for (; V !== null; ) {
    var a = V;
    try {
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          var i = a.return;
          try {
            Qj(4, a);
          } catch (tn) {
            W(a, i, tn);
          }
          break;
        case 1:
          var o = a.stateNode;
          if (typeof o.componentDidMount == "function") {
            var c = a.return;
            try {
              o.componentDidMount();
            } catch (tn) {
              W(a, c, tn);
            }
          }
          var h = a.return;
          try {
            Rj(a);
          } catch (tn) {
            W(a, h, tn);
          }
          break;
        case 5:
          var b = a.return;
          try {
            Rj(a);
          } catch (tn) {
            W(a, b, tn);
          }
      }
    } catch (tn) {
      W(a, a.return, tn);
    }
    if (a === e) {
      V = null;
      break;
    }
    var en = a.sibling;
    if (en !== null) {
      (en.return = a.return), (V = en);
      break;
    }
    V = a.return;
  }
}
var lk = Math.ceil,
  mk = ua.ReactCurrentDispatcher,
  nk = ua.ReactCurrentOwner,
  ok = ua.ReactCurrentBatchConfig,
  K = 0,
  Q = null,
  Y = null,
  Z = 0,
  fj = 0,
  ej = Uf(0),
  T = 0,
  pk = null,
  rh = 0,
  qk = 0,
  rk = 0,
  sk = null,
  tk = null,
  fk = 0,
  Gj = 1 / 0,
  uk = null,
  Oi = !1,
  Pi = null,
  Ri = null,
  vk = !1,
  wk = null,
  xk = 0,
  yk = 0,
  zk = null,
  Ak = -1,
  Bk = 0;
function R() {
  return K & 6 ? B() : Ak !== -1 ? Ak : (Ak = B());
}
function yi(e) {
  return e.mode & 1
    ? K & 2 && Z !== 0
      ? Z & -Z
      : Kg.transition !== null
      ? (Bk === 0 && (Bk = yc()), Bk)
      : ((e = C),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : jd(e.type))),
        e)
    : 1;
}
function gi(e, a, i, o) {
  if (50 < yk) throw ((yk = 0), (zk = null), Error(p(185)));
  Ac(e, i, o),
    (!(K & 2) || e !== Q) &&
      (e === Q && (!(K & 2) && (qk |= i), T === 4 && Ck(e, Z)),
      Dk(e, o),
      i === 1 && K === 0 && !(a.mode & 1) && ((Gj = B() + 500), fg && jg()));
}
function Dk(e, a) {
  var i = e.callbackNode;
  wc(e, a);
  var o = uc(e, e === Q ? Z : 0);
  if (o === 0)
    i !== null && bc(i), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((a = o & -o), e.callbackPriority !== a)) {
    if ((i != null && bc(i), a === 1))
      e.tag === 0 ? ig(Ek.bind(null, e)) : hg(Ek.bind(null, e)),
        Jf(function () {
          !(K & 6) && jg();
        }),
        (i = null);
    else {
      switch (Dc(o)) {
        case 1:
          i = fc;
          break;
        case 4:
          i = gc;
          break;
        case 16:
          i = hc;
          break;
        case 536870912:
          i = jc;
          break;
        default:
          i = hc;
      }
      i = Fk(i, Gk.bind(null, e));
    }
    (e.callbackPriority = a), (e.callbackNode = i);
  }
}
function Gk(e, a) {
  if (((Ak = -1), (Bk = 0), K & 6)) throw Error(p(327));
  var i = e.callbackNode;
  if (Hk() && e.callbackNode !== i) return null;
  var o = uc(e, e === Q ? Z : 0);
  if (o === 0) return null;
  if (o & 30 || o & e.expiredLanes || a) a = Ik(e, o);
  else {
    a = o;
    var c = K;
    K |= 2;
    var h = Jk();
    (Q !== e || Z !== a) && ((uk = null), (Gj = B() + 500), Kk(e, a));
    do
      try {
        Lk();
        break;
      } catch (en) {
        Mk(e, en);
      }
    while (!0);
    $g(),
      (mk.current = h),
      (K = c),
      Y !== null ? (a = 0) : ((Q = null), (Z = 0), (a = T));
  }
  if (a !== 0) {
    if (
      (a === 2 && ((c = xc(e)), c !== 0 && ((o = c), (a = Nk(e, c)))), a === 1)
    )
      throw ((i = pk), Kk(e, 0), Ck(e, o), Dk(e, B()), i);
    if (a === 6) Ck(e, o);
    else {
      if (
        ((c = e.current.alternate),
        !(o & 30) &&
          !Ok(c) &&
          ((a = Ik(e, o)),
          a === 2 && ((h = xc(e)), h !== 0 && ((o = h), (a = Nk(e, h)))),
          a === 1))
      )
        throw ((i = pk), Kk(e, 0), Ck(e, o), Dk(e, B()), i);
      switch (((e.finishedWork = c), (e.finishedLanes = o), a)) {
        case 0:
        case 1:
          throw Error(p(345));
        case 2:
          Pk(e, tk, uk);
          break;
        case 3:
          if (
            (Ck(e, o), (o & 130023424) === o && ((a = fk + 500 - B()), 10 < a))
          ) {
            if (uc(e, 0) !== 0) break;
            if (((c = e.suspendedLanes), (c & o) !== o)) {
              R(), (e.pingedLanes |= e.suspendedLanes & c);
              break;
            }
            e.timeoutHandle = Ff(Pk.bind(null, e, tk, uk), a);
            break;
          }
          Pk(e, tk, uk);
          break;
        case 4:
          if ((Ck(e, o), (o & 4194240) === o)) break;
          for (a = e.eventTimes, c = -1; 0 < o; ) {
            var b = 31 - oc(o);
            (h = 1 << b), (b = a[b]), b > c && (c = b), (o &= ~h);
          }
          if (
            ((o = c),
            (o = B() - o),
            (o =
              (120 > o
                ? 120
                : 480 > o
                ? 480
                : 1080 > o
                ? 1080
                : 1920 > o
                ? 1920
                : 3e3 > o
                ? 3e3
                : 4320 > o
                ? 4320
                : 1960 * lk(o / 1960)) - o),
            10 < o)
          ) {
            e.timeoutHandle = Ff(Pk.bind(null, e, tk, uk), o);
            break;
          }
          Pk(e, tk, uk);
          break;
        case 5:
          Pk(e, tk, uk);
          break;
        default:
          throw Error(p(329));
      }
    }
  }
  return Dk(e, B()), e.callbackNode === i ? Gk.bind(null, e) : null;
}
function Nk(e, a) {
  var i = sk;
  return (
    e.current.memoizedState.isDehydrated && (Kk(e, a).flags |= 256),
    (e = Ik(e, a)),
    e !== 2 && ((a = tk), (tk = i), a !== null && Fj(a)),
    e
  );
}
function Fj(e) {
  tk === null ? (tk = e) : tk.push.apply(tk, e);
}
function Ok(e) {
  for (var a = e; ; ) {
    if (a.flags & 16384) {
      var i = a.updateQueue;
      if (i !== null && ((i = i.stores), i !== null))
        for (var o = 0; o < i.length; o++) {
          var c = i[o],
            h = c.getSnapshot;
          c = c.value;
          try {
            if (!He(h(), c)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((i = a.child), a.subtreeFlags & 16384 && i !== null))
      (i.return = a), (a = i);
    else {
      if (a === e) break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === e) return !0;
        a = a.return;
      }
      (a.sibling.return = a.return), (a = a.sibling);
    }
  }
  return !0;
}
function Ck(e, a) {
  for (
    a &= ~rk,
      a &= ~qk,
      e.suspendedLanes |= a,
      e.pingedLanes &= ~a,
      e = e.expirationTimes;
    0 < a;

  ) {
    var i = 31 - oc(a),
      o = 1 << i;
    (e[i] = -1), (a &= ~o);
  }
}
function Ek(e) {
  if (K & 6) throw Error(p(327));
  Hk();
  var a = uc(e, 0);
  if (!(a & 1)) return Dk(e, B()), null;
  var i = Ik(e, a);
  if (e.tag !== 0 && i === 2) {
    var o = xc(e);
    o !== 0 && ((a = o), (i = Nk(e, o)));
  }
  if (i === 1) throw ((i = pk), Kk(e, 0), Ck(e, a), Dk(e, B()), i);
  if (i === 6) throw Error(p(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = a),
    Pk(e, tk, uk),
    Dk(e, B()),
    null
  );
}
function Qk(e, a) {
  var i = K;
  K |= 1;
  try {
    return e(a);
  } finally {
    (K = i), K === 0 && ((Gj = B() + 500), fg && jg());
  }
}
function Rk(e) {
  wk !== null && wk.tag === 0 && !(K & 6) && Hk();
  var a = K;
  K |= 1;
  var i = ok.transition,
    o = C;
  try {
    if (((ok.transition = null), (C = 1), e)) return e();
  } finally {
    (C = o), (ok.transition = i), (K = a), !(K & 6) && jg();
  }
}
function Hj() {
  (fj = ej.current), E(ej);
}
function Kk(e, a) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var i = e.timeoutHandle;
  if ((i !== -1 && ((e.timeoutHandle = -1), Gf(i)), Y !== null))
    for (i = Y.return; i !== null; ) {
      var o = i;
      switch ((wg(o), o.tag)) {
        case 1:
          (o = o.type.childContextTypes), o != null && $f();
          break;
        case 3:
          zh(), E(Wf), E(H), Eh();
          break;
        case 5:
          Bh(o);
          break;
        case 4:
          zh();
          break;
        case 13:
          E(L);
          break;
        case 19:
          E(L);
          break;
        case 10:
          ah(o.type._context);
          break;
        case 22:
        case 23:
          Hj();
      }
      i = i.return;
    }
  if (
    ((Q = e),
    (Y = e = Pg(e.current, null)),
    (Z = fj = a),
    (T = 0),
    (pk = null),
    (rk = qk = rh = 0),
    (tk = sk = null),
    fh !== null)
  ) {
    for (a = 0; a < fh.length; a++)
      if (((i = fh[a]), (o = i.interleaved), o !== null)) {
        i.interleaved = null;
        var c = o.next,
          h = i.pending;
        if (h !== null) {
          var b = h.next;
          (h.next = c), (o.next = b);
        }
        i.pending = o;
      }
    fh = null;
  }
  return e;
}
function Mk(e, a) {
  do {
    var i = Y;
    try {
      if (($g(), (Fh.current = Rh), Ih)) {
        for (var o = M.memoizedState; o !== null; ) {
          var c = o.queue;
          c !== null && (c.pending = null), (o = o.next);
        }
        Ih = !1;
      }
      if (
        ((Hh = 0),
        (O = N = M = null),
        (Jh = !1),
        (Kh = 0),
        (nk.current = null),
        i === null || i.return === null)
      ) {
        (T = 1), (pk = a), (Y = null);
        break;
      }
      e: {
        var h = e,
          b = i.return,
          en = i,
          tn = a;
        if (
          ((a = Z),
          (en.flags |= 32768),
          tn !== null && typeof tn == "object" && typeof tn.then == "function")
        ) {
          var sn = tn,
            mn = en,
            hn = mn.tag;
          if (!(mn.mode & 1) && (hn === 0 || hn === 11 || hn === 15)) {
            var gn = mn.alternate;
            gn
              ? ((mn.updateQueue = gn.updateQueue),
                (mn.memoizedState = gn.memoizedState),
                (mn.lanes = gn.lanes))
              : ((mn.updateQueue = null), (mn.memoizedState = null));
          }
          var Sn = Ui(b);
          if (Sn !== null) {
            (Sn.flags &= -257),
              Vi(Sn, b, en, h, a),
              Sn.mode & 1 && Si(h, sn, a),
              (a = Sn),
              (tn = sn);
            var An = a.updateQueue;
            if (An === null) {
              var xn = new Set();
              xn.add(tn), (a.updateQueue = xn);
            } else An.add(tn);
            break e;
          } else {
            if (!(a & 1)) {
              Si(h, sn, a), tj();
              break e;
            }
            tn = Error(p(426));
          }
        } else if (I && en.mode & 1) {
          var Cn = Ui(b);
          if (Cn !== null) {
            !(Cn.flags & 65536) && (Cn.flags |= 256),
              Vi(Cn, b, en, h, a),
              Jg(Ji(tn, en));
            break e;
          }
        }
        (h = tn = Ji(tn, en)),
          T !== 4 && (T = 2),
          sk === null ? (sk = [h]) : sk.push(h),
          (h = b);
        do {
          switch (h.tag) {
            case 3:
              (h.flags |= 65536), (a &= -a), (h.lanes |= a);
              var an = Ni(h, tn, a);
              ph(h, an);
              break e;
            case 1:
              en = tn;
              var un = h.type,
                dn = h.stateNode;
              if (
                !(h.flags & 128) &&
                (typeof un.getDerivedStateFromError == "function" ||
                  (dn !== null &&
                    typeof dn.componentDidCatch == "function" &&
                    (Ri === null || !Ri.has(dn))))
              ) {
                (h.flags |= 65536), (a &= -a), (h.lanes |= a);
                var Mn = Qi(h, en, a);
                ph(h, Mn);
                break e;
              }
          }
          h = h.return;
        } while (h !== null);
      }
      Sk(i);
    } catch (jn) {
      (a = jn), Y === i && i !== null && (Y = i = i.return);
      continue;
    }
    break;
  } while (!0);
}
function Jk() {
  var e = mk.current;
  return (mk.current = Rh), e === null ? Rh : e;
}
function tj() {
  (T === 0 || T === 3 || T === 2) && (T = 4),
    Q === null || (!(rh & 268435455) && !(qk & 268435455)) || Ck(Q, Z);
}
function Ik(e, a) {
  var i = K;
  K |= 2;
  var o = Jk();
  (Q !== e || Z !== a) && ((uk = null), Kk(e, a));
  do
    try {
      Tk();
      break;
    } catch (c) {
      Mk(e, c);
    }
  while (!0);
  if (($g(), (K = i), (mk.current = o), Y !== null)) throw Error(p(261));
  return (Q = null), (Z = 0), T;
}
function Tk() {
  for (; Y !== null; ) Uk(Y);
}
function Lk() {
  for (; Y !== null && !cc(); ) Uk(Y);
}
function Uk(e) {
  var a = Vk(e.alternate, e, fj);
  (e.memoizedProps = e.pendingProps),
    a === null ? Sk(e) : (Y = a),
    (nk.current = null);
}
function Sk(e) {
  var a = e;
  do {
    var i = a.alternate;
    if (((e = a.return), a.flags & 32768)) {
      if (((i = Ij(i, a)), i !== null)) {
        (i.flags &= 32767), (Y = i);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (T = 6), (Y = null);
        return;
      }
    } else if (((i = Ej(i, a, fj)), i !== null)) {
      Y = i;
      return;
    }
    if (((a = a.sibling), a !== null)) {
      Y = a;
      return;
    }
    Y = a = e;
  } while (a !== null);
  T === 0 && (T = 5);
}
function Pk(e, a, i) {
  var o = C,
    c = ok.transition;
  try {
    (ok.transition = null), (C = 1), Wk(e, a, i, o);
  } finally {
    (ok.transition = c), (C = o);
  }
  return null;
}
function Wk(e, a, i, o) {
  do Hk();
  while (wk !== null);
  if (K & 6) throw Error(p(327));
  i = e.finishedWork;
  var c = e.finishedLanes;
  if (i === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), i === e.current))
    throw Error(p(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var h = i.lanes | i.childLanes;
  if (
    (Bc(e, h),
    e === Q && ((Y = Q = null), (Z = 0)),
    (!(i.subtreeFlags & 2064) && !(i.flags & 2064)) ||
      vk ||
      ((vk = !0),
      Fk(hc, function () {
        return Hk(), null;
      })),
    (h = (i.flags & 15990) !== 0),
    i.subtreeFlags & 15990 || h)
  ) {
    (h = ok.transition), (ok.transition = null);
    var b = C;
    C = 1;
    var en = K;
    (K |= 4),
      (nk.current = null),
      Oj(e, i),
      dk(i, e),
      Oe(Df),
      (dd = !!Cf),
      (Df = Cf = null),
      (e.current = i),
      hk(i),
      dc(),
      (K = en),
      (C = b),
      (ok.transition = h);
  } else e.current = i;
  if (
    (vk && ((vk = !1), (wk = e), (xk = c)),
    (h = e.pendingLanes),
    h === 0 && (Ri = null),
    mc(i.stateNode),
    Dk(e, B()),
    a !== null)
  )
    for (o = e.onRecoverableError, i = 0; i < a.length; i++)
      (c = a[i]), o(c.value, { componentStack: c.stack, digest: c.digest });
  if (Oi) throw ((Oi = !1), (e = Pi), (Pi = null), e);
  return (
    xk & 1 && e.tag !== 0 && Hk(),
    (h = e.pendingLanes),
    h & 1 ? (e === zk ? yk++ : ((yk = 0), (zk = e))) : (yk = 0),
    jg(),
    null
  );
}
function Hk() {
  if (wk !== null) {
    var e = Dc(xk),
      a = ok.transition,
      i = C;
    try {
      if (((ok.transition = null), (C = 16 > e ? 16 : e), wk === null))
        var o = !1;
      else {
        if (((e = wk), (wk = null), (xk = 0), K & 6)) throw Error(p(331));
        var c = K;
        for (K |= 4, V = e.current; V !== null; ) {
          var h = V,
            b = h.child;
          if (V.flags & 16) {
            var en = h.deletions;
            if (en !== null) {
              for (var tn = 0; tn < en.length; tn++) {
                var sn = en[tn];
                for (V = sn; V !== null; ) {
                  var mn = V;
                  switch (mn.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(8, mn, h);
                  }
                  var hn = mn.child;
                  if (hn !== null) (hn.return = mn), (V = hn);
                  else
                    for (; V !== null; ) {
                      mn = V;
                      var gn = mn.sibling,
                        Sn = mn.return;
                      if ((Sj(mn), mn === sn)) {
                        V = null;
                        break;
                      }
                      if (gn !== null) {
                        (gn.return = Sn), (V = gn);
                        break;
                      }
                      V = Sn;
                    }
                }
              }
              var An = h.alternate;
              if (An !== null) {
                var xn = An.child;
                if (xn !== null) {
                  An.child = null;
                  do {
                    var Cn = xn.sibling;
                    (xn.sibling = null), (xn = Cn);
                  } while (xn !== null);
                }
              }
              V = h;
            }
          }
          if (h.subtreeFlags & 2064 && b !== null) (b.return = h), (V = b);
          else
            e: for (; V !== null; ) {
              if (((h = V), h.flags & 2048))
                switch (h.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Pj(9, h, h.return);
                }
              var an = h.sibling;
              if (an !== null) {
                (an.return = h.return), (V = an);
                break e;
              }
              V = h.return;
            }
        }
        var un = e.current;
        for (V = un; V !== null; ) {
          b = V;
          var dn = b.child;
          if (b.subtreeFlags & 2064 && dn !== null) (dn.return = b), (V = dn);
          else
            e: for (b = un; V !== null; ) {
              if (((en = V), en.flags & 2048))
                try {
                  switch (en.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(9, en);
                  }
                } catch (jn) {
                  W(en, en.return, jn);
                }
              if (en === b) {
                V = null;
                break e;
              }
              var Mn = en.sibling;
              if (Mn !== null) {
                (Mn.return = en.return), (V = Mn);
                break e;
              }
              V = en.return;
            }
        }
        if (
          ((K = c), jg(), lc && typeof lc.onPostCommitFiberRoot == "function")
        )
          try {
            lc.onPostCommitFiberRoot(kc, e);
          } catch {}
        o = !0;
      }
      return o;
    } finally {
      (C = i), (ok.transition = a);
    }
  }
  return !1;
}
function Xk(e, a, i) {
  (a = Ji(i, a)),
    (a = Ni(e, a, 1)),
    (e = nh(e, a, 1)),
    (a = R()),
    e !== null && (Ac(e, 1, a), Dk(e, a));
}
function W(e, a, i) {
  if (e.tag === 3) Xk(e, e, i);
  else
    for (; a !== null; ) {
      if (a.tag === 3) {
        Xk(a, e, i);
        break;
      } else if (a.tag === 1) {
        var o = a.stateNode;
        if (
          typeof a.type.getDerivedStateFromError == "function" ||
          (typeof o.componentDidCatch == "function" &&
            (Ri === null || !Ri.has(o)))
        ) {
          (e = Ji(i, e)),
            (e = Qi(a, e, 1)),
            (a = nh(a, e, 1)),
            (e = R()),
            a !== null && (Ac(a, 1, e), Dk(a, e));
          break;
        }
      }
      a = a.return;
    }
}
function Ti(e, a, i) {
  var o = e.pingCache;
  o !== null && o.delete(a),
    (a = R()),
    (e.pingedLanes |= e.suspendedLanes & i),
    Q === e &&
      (Z & i) === i &&
      (T === 4 || (T === 3 && (Z & 130023424) === Z && 500 > B() - fk)
        ? Kk(e, 0)
        : (rk |= i)),
    Dk(e, a);
}
function Yk(e, a) {
  a === 0 &&
    (e.mode & 1
      ? ((a = sc), (sc <<= 1), !(sc & 130023424) && (sc = 4194304))
      : (a = 1));
  var i = R();
  (e = ih(e, a)), e !== null && (Ac(e, a, i), Dk(e, i));
}
function uj(e) {
  var a = e.memoizedState,
    i = 0;
  a !== null && (i = a.retryLane), Yk(e, i);
}
function bk(e, a) {
  var i = 0;
  switch (e.tag) {
    case 13:
      var o = e.stateNode,
        c = e.memoizedState;
      c !== null && (i = c.retryLane);
      break;
    case 19:
      o = e.stateNode;
      break;
    default:
      throw Error(p(314));
  }
  o !== null && o.delete(a), Yk(e, i);
}
var Vk;
Vk = function (e, a, i) {
  if (e !== null)
    if (e.memoizedProps !== a.pendingProps || Wf.current) dh = !0;
    else {
      if (!(e.lanes & i) && !(a.flags & 128)) return (dh = !1), yj(e, a, i);
      dh = !!(e.flags & 131072);
    }
  else (dh = !1), I && a.flags & 1048576 && ug(a, ng, a.index);
  switch (((a.lanes = 0), a.tag)) {
    case 2:
      var o = a.type;
      ij(e, a), (e = a.pendingProps);
      var c = Yf(a, H.current);
      ch(a, i), (c = Nh(null, a, o, e, c, i));
      var h = Sh();
      return (
        (a.flags |= 1),
        typeof c == "object" &&
        c !== null &&
        typeof c.render == "function" &&
        c.$$typeof === void 0
          ? ((a.tag = 1),
            (a.memoizedState = null),
            (a.updateQueue = null),
            Zf(o) ? ((h = !0), cg(a)) : (h = !1),
            (a.memoizedState =
              c.state !== null && c.state !== void 0 ? c.state : null),
            kh(a),
            (c.updater = Ei),
            (a.stateNode = c),
            (c._reactInternals = a),
            Ii(a, o, e, i),
            (a = jj(null, a, o, !0, h, i)))
          : ((a.tag = 0), I && h && vg(a), Xi(null, a, c, i), (a = a.child)),
        a
      );
    case 16:
      o = a.elementType;
      e: {
        switch (
          (ij(e, a),
          (e = a.pendingProps),
          (c = o._init),
          (o = c(o._payload)),
          (a.type = o),
          (c = a.tag = Zk(o)),
          (e = Ci(o, e)),
          c)
        ) {
          case 0:
            a = cj(null, a, o, e, i);
            break e;
          case 1:
            a = hj(null, a, o, e, i);
            break e;
          case 11:
            a = Yi(null, a, o, e, i);
            break e;
          case 14:
            a = $i(null, a, o, Ci(o.type, e), i);
            break e;
        }
        throw Error(p(306, o, ""));
      }
      return a;
    case 0:
      return (
        (o = a.type),
        (c = a.pendingProps),
        (c = a.elementType === o ? c : Ci(o, c)),
        cj(e, a, o, c, i)
      );
    case 1:
      return (
        (o = a.type),
        (c = a.pendingProps),
        (c = a.elementType === o ? c : Ci(o, c)),
        hj(e, a, o, c, i)
      );
    case 3:
      e: {
        if ((kj(a), e === null)) throw Error(p(387));
        (o = a.pendingProps),
          (h = a.memoizedState),
          (c = h.element),
          lh(e, a),
          qh(a, o, null, i);
        var b = a.memoizedState;
        if (((o = b.element), h.isDehydrated))
          if (
            ((h = {
              element: o,
              isDehydrated: !1,
              cache: b.cache,
              pendingSuspenseBoundaries: b.pendingSuspenseBoundaries,
              transitions: b.transitions,
            }),
            (a.updateQueue.baseState = h),
            (a.memoizedState = h),
            a.flags & 256)
          ) {
            (c = Ji(Error(p(423)), a)), (a = lj(e, a, o, i, c));
            break e;
          } else if (o !== c) {
            (c = Ji(Error(p(424)), a)), (a = lj(e, a, o, i, c));
            break e;
          } else
            for (
              yg = Lf(a.stateNode.containerInfo.firstChild),
                xg = a,
                I = !0,
                zg = null,
                i = Vg(a, null, o, i),
                a.child = i;
              i;

            )
              (i.flags = (i.flags & -3) | 4096), (i = i.sibling);
        else {
          if ((Ig(), o === c)) {
            a = Zi(e, a, i);
            break e;
          }
          Xi(e, a, o, i);
        }
        a = a.child;
      }
      return a;
    case 5:
      return (
        Ah(a),
        e === null && Eg(a),
        (o = a.type),
        (c = a.pendingProps),
        (h = e !== null ? e.memoizedProps : null),
        (b = c.children),
        Ef(o, c) ? (b = null) : h !== null && Ef(o, h) && (a.flags |= 32),
        gj(e, a),
        Xi(e, a, b, i),
        a.child
      );
    case 6:
      return e === null && Eg(a), null;
    case 13:
      return oj(e, a, i);
    case 4:
      return (
        yh(a, a.stateNode.containerInfo),
        (o = a.pendingProps),
        e === null ? (a.child = Ug(a, null, o, i)) : Xi(e, a, o, i),
        a.child
      );
    case 11:
      return (
        (o = a.type),
        (c = a.pendingProps),
        (c = a.elementType === o ? c : Ci(o, c)),
        Yi(e, a, o, c, i)
      );
    case 7:
      return Xi(e, a, a.pendingProps, i), a.child;
    case 8:
      return Xi(e, a, a.pendingProps.children, i), a.child;
    case 12:
      return Xi(e, a, a.pendingProps.children, i), a.child;
    case 10:
      e: {
        if (
          ((o = a.type._context),
          (c = a.pendingProps),
          (h = a.memoizedProps),
          (b = c.value),
          G(Wg, o._currentValue),
          (o._currentValue = b),
          h !== null)
        )
          if (He(h.value, b)) {
            if (h.children === c.children && !Wf.current) {
              a = Zi(e, a, i);
              break e;
            }
          } else
            for (h = a.child, h !== null && (h.return = a); h !== null; ) {
              var en = h.dependencies;
              if (en !== null) {
                b = h.child;
                for (var tn = en.firstContext; tn !== null; ) {
                  if (tn.context === o) {
                    if (h.tag === 1) {
                      (tn = mh(-1, i & -i)), (tn.tag = 2);
                      var sn = h.updateQueue;
                      if (sn !== null) {
                        sn = sn.shared;
                        var mn = sn.pending;
                        mn === null
                          ? (tn.next = tn)
                          : ((tn.next = mn.next), (mn.next = tn)),
                          (sn.pending = tn);
                      }
                    }
                    (h.lanes |= i),
                      (tn = h.alternate),
                      tn !== null && (tn.lanes |= i),
                      bh(h.return, i, a),
                      (en.lanes |= i);
                    break;
                  }
                  tn = tn.next;
                }
              } else if (h.tag === 10) b = h.type === a.type ? null : h.child;
              else if (h.tag === 18) {
                if (((b = h.return), b === null)) throw Error(p(341));
                (b.lanes |= i),
                  (en = b.alternate),
                  en !== null && (en.lanes |= i),
                  bh(b, i, a),
                  (b = h.sibling);
              } else b = h.child;
              if (b !== null) b.return = h;
              else
                for (b = h; b !== null; ) {
                  if (b === a) {
                    b = null;
                    break;
                  }
                  if (((h = b.sibling), h !== null)) {
                    (h.return = b.return), (b = h);
                    break;
                  }
                  b = b.return;
                }
              h = b;
            }
        Xi(e, a, c.children, i), (a = a.child);
      }
      return a;
    case 9:
      return (
        (c = a.type),
        (o = a.pendingProps.children),
        ch(a, i),
        (c = eh(c)),
        (o = o(c)),
        (a.flags |= 1),
        Xi(e, a, o, i),
        a.child
      );
    case 14:
      return (
        (o = a.type),
        (c = Ci(o, a.pendingProps)),
        (c = Ci(o.type, c)),
        $i(e, a, o, c, i)
      );
    case 15:
      return bj(e, a, a.type, a.pendingProps, i);
    case 17:
      return (
        (o = a.type),
        (c = a.pendingProps),
        (c = a.elementType === o ? c : Ci(o, c)),
        ij(e, a),
        (a.tag = 1),
        Zf(o) ? ((e = !0), cg(a)) : (e = !1),
        ch(a, i),
        Gi(a, o, c),
        Ii(a, o, c, i),
        jj(null, a, o, !0, e, i)
      );
    case 19:
      return xj(e, a, i);
    case 22:
      return dj(e, a, i);
  }
  throw Error(p(156, a.tag));
};
function Fk(e, a) {
  return ac(e, a);
}
function $k(e, a, i, o) {
  (this.tag = e),
    (this.key = i),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = a),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = o),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Bg(e, a, i, o) {
  return new $k(e, a, i, o);
}
function aj(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Zk(e) {
  if (typeof e == "function") return aj(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Da)) return 11;
    if (e === Ga) return 14;
  }
  return 2;
}
function Pg(e, a) {
  var i = e.alternate;
  return (
    i === null
      ? ((i = Bg(e.tag, a, e.key, e.mode)),
        (i.elementType = e.elementType),
        (i.type = e.type),
        (i.stateNode = e.stateNode),
        (i.alternate = e),
        (e.alternate = i))
      : ((i.pendingProps = a),
        (i.type = e.type),
        (i.flags = 0),
        (i.subtreeFlags = 0),
        (i.deletions = null)),
    (i.flags = e.flags & 14680064),
    (i.childLanes = e.childLanes),
    (i.lanes = e.lanes),
    (i.child = e.child),
    (i.memoizedProps = e.memoizedProps),
    (i.memoizedState = e.memoizedState),
    (i.updateQueue = e.updateQueue),
    (a = e.dependencies),
    (i.dependencies =
      a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }),
    (i.sibling = e.sibling),
    (i.index = e.index),
    (i.ref = e.ref),
    i
  );
}
function Rg(e, a, i, o, c, h) {
  var b = 2;
  if (((o = e), typeof e == "function")) aj(e) && (b = 1);
  else if (typeof e == "string") b = 5;
  else
    e: switch (e) {
      case ya:
        return Tg(i.children, c, h, a);
      case za:
        (b = 8), (c |= 8);
        break;
      case Aa:
        return (
          (e = Bg(12, i, a, c | 2)), (e.elementType = Aa), (e.lanes = h), e
        );
      case Ea:
        return (e = Bg(13, i, a, c)), (e.elementType = Ea), (e.lanes = h), e;
      case Fa:
        return (e = Bg(19, i, a, c)), (e.elementType = Fa), (e.lanes = h), e;
      case Ia:
        return pj(i, c, h, a);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ba:
              b = 10;
              break e;
            case Ca:
              b = 9;
              break e;
            case Da:
              b = 11;
              break e;
            case Ga:
              b = 14;
              break e;
            case Ha:
              (b = 16), (o = null);
              break e;
          }
        throw Error(p(130, e == null ? e : typeof e, ""));
    }
  return (
    (a = Bg(b, i, a, c)), (a.elementType = e), (a.type = o), (a.lanes = h), a
  );
}
function Tg(e, a, i, o) {
  return (e = Bg(7, e, o, a)), (e.lanes = i), e;
}
function pj(e, a, i, o) {
  return (
    (e = Bg(22, e, o, a)),
    (e.elementType = Ia),
    (e.lanes = i),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Qg(e, a, i) {
  return (e = Bg(6, e, null, a)), (e.lanes = i), e;
}
function Sg(e, a, i) {
  return (
    (a = Bg(4, e.children !== null ? e.children : [], e.key, a)),
    (a.lanes = i),
    (a.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    a
  );
}
function al(e, a, i, o, c) {
  (this.tag = a),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = zc(0)),
    (this.expirationTimes = zc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = zc(0)),
    (this.identifierPrefix = o),
    (this.onRecoverableError = c),
    (this.mutableSourceEagerHydrationData = null);
}
function bl(e, a, i, o, c, h, b, en, tn) {
  return (
    (e = new al(e, a, i, en, tn)),
    a === 1 ? ((a = 1), h === !0 && (a |= 8)) : (a = 0),
    (h = Bg(3, null, null, a)),
    (e.current = h),
    (h.stateNode = e),
    (h.memoizedState = {
      element: o,
      isDehydrated: i,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    kh(h),
    e
  );
}
function cl(e, a, i) {
  var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: wa,
    key: o == null ? null : "" + o,
    children: e,
    containerInfo: a,
    implementation: i,
  };
}
function dl(e) {
  if (!e) return Vf;
  e = e._reactInternals;
  e: {
    if (Vb(e) !== e || e.tag !== 1) throw Error(p(170));
    var a = e;
    do {
      switch (a.tag) {
        case 3:
          a = a.stateNode.context;
          break e;
        case 1:
          if (Zf(a.type)) {
            a = a.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      a = a.return;
    } while (a !== null);
    throw Error(p(171));
  }
  if (e.tag === 1) {
    var i = e.type;
    if (Zf(i)) return bg(e, i, a);
  }
  return a;
}
function el(e, a, i, o, c, h, b, en, tn) {
  return (
    (e = bl(i, o, !0, e, c, h, b, en, tn)),
    (e.context = dl(null)),
    (i = e.current),
    (o = R()),
    (c = yi(i)),
    (h = mh(o, c)),
    (h.callback = a ?? null),
    nh(i, h, c),
    (e.current.lanes = c),
    Ac(e, c, o),
    Dk(e, o),
    e
  );
}
function fl(e, a, i, o) {
  var c = a.current,
    h = R(),
    b = yi(c);
  return (
    (i = dl(i)),
    a.context === null ? (a.context = i) : (a.pendingContext = i),
    (a = mh(h, b)),
    (a.payload = { element: e }),
    (o = o === void 0 ? null : o),
    o !== null && (a.callback = o),
    (e = nh(c, a, b)),
    e !== null && (gi(e, c, b, h), oh(e, c, b)),
    b
  );
}
function gl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function hl(e, a) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var i = e.retryLane;
    e.retryLane = i !== 0 && i < a ? i : a;
  }
}
function il(e, a) {
  hl(e, a), (e = e.alternate) && hl(e, a);
}
function jl() {
  return null;
}
var kl =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ll(e) {
  this._internalRoot = e;
}
ml.prototype.render = ll.prototype.render = function (e) {
  var a = this._internalRoot;
  if (a === null) throw Error(p(409));
  fl(e, a, null, null);
};
ml.prototype.unmount = ll.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var a = e.containerInfo;
    Rk(function () {
      fl(null, e, null, null);
    }),
      (a[uf] = null);
  }
};
function ml(e) {
  this._internalRoot = e;
}
ml.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var a = Hc();
    e = { blockedOn: null, target: e, priority: a };
    for (var i = 0; i < Qc.length && a !== 0 && a < Qc[i].priority; i++);
    Qc.splice(i, 0, e), i === 0 && Vc(e);
  }
};
function nl(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ol(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function pl() {}
function ql(e, a, i, o, c) {
  if (c) {
    if (typeof o == "function") {
      var h = o;
      o = function () {
        var sn = gl(b);
        h.call(sn);
      };
    }
    var b = el(a, o, e, 0, null, !1, !1, "", pl);
    return (
      (e._reactRootContainer = b),
      (e[uf] = b.current),
      sf(e.nodeType === 8 ? e.parentNode : e),
      Rk(),
      b
    );
  }
  for (; (c = e.lastChild); ) e.removeChild(c);
  if (typeof o == "function") {
    var en = o;
    o = function () {
      var sn = gl(tn);
      en.call(sn);
    };
  }
  var tn = bl(e, 0, !1, null, null, !1, !1, "", pl);
  return (
    (e._reactRootContainer = tn),
    (e[uf] = tn.current),
    sf(e.nodeType === 8 ? e.parentNode : e),
    Rk(function () {
      fl(a, tn, i, o);
    }),
    tn
  );
}
function rl(e, a, i, o, c) {
  var h = i._reactRootContainer;
  if (h) {
    var b = h;
    if (typeof c == "function") {
      var en = c;
      c = function () {
        var tn = gl(b);
        en.call(tn);
      };
    }
    fl(a, b, e, c);
  } else b = ql(i, a, e, c, o);
  return gl(b);
}
Ec = function (e) {
  switch (e.tag) {
    case 3:
      var a = e.stateNode;
      if (a.current.memoizedState.isDehydrated) {
        var i = tc(a.pendingLanes);
        i !== 0 &&
          (Cc(a, i | 1), Dk(a, B()), !(K & 6) && ((Gj = B() + 500), jg()));
      }
      break;
    case 13:
      Rk(function () {
        var o = ih(e, 1);
        if (o !== null) {
          var c = R();
          gi(o, e, 1, c);
        }
      }),
        il(e, 1);
  }
};
Fc = function (e) {
  if (e.tag === 13) {
    var a = ih(e, 134217728);
    if (a !== null) {
      var i = R();
      gi(a, e, 134217728, i);
    }
    il(e, 134217728);
  }
};
Gc = function (e) {
  if (e.tag === 13) {
    var a = yi(e),
      i = ih(e, a);
    if (i !== null) {
      var o = R();
      gi(i, e, a, o);
    }
    il(e, a);
  }
};
Hc = function () {
  return C;
};
Ic = function (e, a) {
  var i = C;
  try {
    return (C = e), a();
  } finally {
    C = i;
  }
};
yb = function (e, a, i) {
  switch (a) {
    case "input":
      if ((bb(e, i), (a = i.name), i.type === "radio" && a != null)) {
        for (i = e; i.parentNode; ) i = i.parentNode;
        for (
          i = i.querySelectorAll(
            "input[name=" + JSON.stringify("" + a) + '][type="radio"]'
          ),
            a = 0;
          a < i.length;
          a++
        ) {
          var o = i[a];
          if (o !== e && o.form === e.form) {
            var c = Db(o);
            if (!c) throw Error(p(90));
            Wa(o), bb(o, c);
          }
        }
      }
      break;
    case "textarea":
      ib(e, i);
      break;
    case "select":
      (a = i.value), a != null && fb(e, !!i.multiple, a, !1);
  }
};
Gb = Qk;
Hb = Rk;
var sl = { usingClientEntryPoint: !1, Events: [Cb, ue, Db, Eb, Fb, Qk] },
  tl = {
    findFiberByHostInstance: Wc,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  ul = {
    bundleType: tl.bundleType,
    version: tl.version,
    rendererPackageName: tl.rendererPackageName,
    rendererConfig: tl.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ua.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Zb(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: tl.findFiberByHostInstance || jl,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vl.isDisabled && vl.supportsFiber)
    try {
      (kc = vl.inject(ul)), (lc = vl);
    } catch {}
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
reactDom_production_min.createPortal = function (e, a) {
  var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!nl(a)) throw Error(p(200));
  return cl(e, a, null, i);
};
reactDom_production_min.createRoot = function (e, a) {
  if (!nl(e)) throw Error(p(299));
  var i = !1,
    o = "",
    c = kl;
  return (
    a != null &&
      (a.unstable_strictMode === !0 && (i = !0),
      a.identifierPrefix !== void 0 && (o = a.identifierPrefix),
      a.onRecoverableError !== void 0 && (c = a.onRecoverableError)),
    (a = bl(e, 1, !1, null, null, i, !1, o, c)),
    (e[uf] = a.current),
    sf(e.nodeType === 8 ? e.parentNode : e),
    new ll(a)
  );
};
reactDom_production_min.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var a = e._reactInternals;
  if (a === void 0)
    throw typeof e.render == "function"
      ? Error(p(188))
      : ((e = Object.keys(e).join(",")), Error(p(268, e)));
  return (e = Zb(a)), (e = e === null ? null : e.stateNode), e;
};
reactDom_production_min.flushSync = function (e) {
  return Rk(e);
};
reactDom_production_min.hydrate = function (e, a, i) {
  if (!ol(a)) throw Error(p(200));
  return rl(null, e, a, !0, i);
};
reactDom_production_min.hydrateRoot = function (e, a, i) {
  if (!nl(e)) throw Error(p(405));
  var o = (i != null && i.hydratedSources) || null,
    c = !1,
    h = "",
    b = kl;
  if (
    (i != null &&
      (i.unstable_strictMode === !0 && (c = !0),
      i.identifierPrefix !== void 0 && (h = i.identifierPrefix),
      i.onRecoverableError !== void 0 && (b = i.onRecoverableError)),
    (a = el(a, null, e, 1, i ?? null, c, !1, h, b)),
    (e[uf] = a.current),
    sf(e),
    o)
  )
    for (e = 0; e < o.length; e++)
      (i = o[e]),
        (c = i._getVersion),
        (c = c(i._source)),
        a.mutableSourceEagerHydrationData == null
          ? (a.mutableSourceEagerHydrationData = [i, c])
          : a.mutableSourceEagerHydrationData.push(i, c);
  return new ml(a);
};
reactDom_production_min.render = function (e, a, i) {
  if (!ol(a)) throw Error(p(200));
  return rl(null, e, a, !1, i);
};
reactDom_production_min.unmountComponentAtNode = function (e) {
  if (!ol(e)) throw Error(p(40));
  return e._reactRootContainer
    ? (Rk(function () {
        rl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[uf] = null);
        });
      }),
      !0)
    : !1;
};
reactDom_production_min.unstable_batchedUpdates = Qk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function (
  e,
  a,
  i,
  o
) {
  if (!ol(i)) throw Error(p(200));
  if (e == null || e._reactInternals === void 0) throw Error(p(38));
  return rl(e, a, i, !1, o);
};
reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
function checkDCE() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (e) {
      console.error(e);
    }
}
checkDCE(), (reactDom.exports = reactDom_production_min);
var reactDomExports = reactDom.exports,
  createRoot,
  m = reactDomExports;
(createRoot = m.createRoot), m.hydrateRoot;
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function _extends$1() {
  return (
    (_extends$1 = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var a = 1; a < arguments.length; a++) {
            var i = arguments[a];
            for (var o in i)
              Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
          }
          return e;
        }),
    _extends$1.apply(this, arguments)
  );
}
var Action;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Action || (Action = {}));
const PopStateEventType = "popstate";
function createBrowserHistory(e) {
  e === void 0 && (e = {});
  function a(o, c) {
    let { pathname: h, search: b, hash: en } = o.location;
    return createLocation(
      "",
      { pathname: h, search: b, hash: en },
      (c.state && c.state.usr) || null,
      (c.state && c.state.key) || "default"
    );
  }
  function i(o, c) {
    return typeof c == "string" ? c : createPath(c);
  }
  return getUrlBasedHistory(a, i, null, e);
}
function invariant(e, a) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(a);
}
function warning(e, a) {
  if (!e) {
    typeof console < "u" && console.warn(a);
    try {
      throw new Error(a);
    } catch {}
  }
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
function getHistoryState(e, a) {
  return { usr: e.state, key: e.key, idx: a };
}
function createLocation(e, a, i, o) {
  return (
    i === void 0 && (i = null),
    _extends$1(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof a == "string" ? parsePath(a) : a,
      { state: i, key: (a && a.key) || o || createKey() }
    )
  );
}
function createPath(e) {
  let { pathname: a = "/", search: i = "", hash: o = "" } = e;
  return (
    i && i !== "?" && (a += i.charAt(0) === "?" ? i : "?" + i),
    o && o !== "#" && (a += o.charAt(0) === "#" ? o : "#" + o),
    a
  );
}
function parsePath(e) {
  let a = {};
  if (e) {
    let i = e.indexOf("#");
    i >= 0 && ((a.hash = e.substr(i)), (e = e.substr(0, i)));
    let o = e.indexOf("?");
    o >= 0 && ((a.search = e.substr(o)), (e = e.substr(0, o))),
      e && (a.pathname = e);
  }
  return a;
}
function getUrlBasedHistory(e, a, i, o) {
  o === void 0 && (o = {});
  let { window: c = document.defaultView, v5Compat: h = !1 } = o,
    b = c.history,
    en = Action.Pop,
    tn = null,
    sn = mn();
  sn == null &&
    ((sn = 0), b.replaceState(_extends$1({}, b.state, { idx: sn }), ""));
  function mn() {
    return (b.state || { idx: null }).idx;
  }
  function hn() {
    en = Action.Pop;
    let Cn = mn(),
      an = Cn == null ? null : Cn - sn;
    (sn = Cn), tn && tn({ action: en, location: xn.location, delta: an });
  }
  function gn(Cn, an) {
    en = Action.Push;
    let un = createLocation(xn.location, Cn, an);
    sn = mn() + 1;
    let dn = getHistoryState(un, sn),
      Mn = xn.createHref(un);
    try {
      b.pushState(dn, "", Mn);
    } catch (jn) {
      if (jn instanceof DOMException && jn.name === "DataCloneError") throw jn;
      c.location.assign(Mn);
    }
    h && tn && tn({ action: en, location: xn.location, delta: 1 });
  }
  function Sn(Cn, an) {
    en = Action.Replace;
    let un = createLocation(xn.location, Cn, an);
    sn = mn();
    let dn = getHistoryState(un, sn),
      Mn = xn.createHref(un);
    b.replaceState(dn, "", Mn),
      h && tn && tn({ action: en, location: xn.location, delta: 0 });
  }
  function An(Cn) {
    let an = c.location.origin !== "null" ? c.location.origin : c.location.href,
      un = typeof Cn == "string" ? Cn : createPath(Cn);
    return (
      (un = un.replace(/ $/, "%20")),
      invariant(
        an,
        "No window.location.(origin|href) available to create URL for href: " +
          un
      ),
      new URL(un, an)
    );
  }
  let xn = {
    get action() {
      return en;
    },
    get location() {
      return e(c, b);
    },
    listen(Cn) {
      if (tn) throw new Error("A history only accepts one active listener");
      return (
        c.addEventListener(PopStateEventType, hn),
        (tn = Cn),
        () => {
          c.removeEventListener(PopStateEventType, hn), (tn = null);
        }
      );
    },
    createHref(Cn) {
      return a(c, Cn);
    },
    createURL: An,
    encodeLocation(Cn) {
      let an = An(Cn);
      return { pathname: an.pathname, search: an.search, hash: an.hash };
    },
    push: gn,
    replace: Sn,
    go(Cn) {
      return b.go(Cn);
    },
  };
  return xn;
}
var ResultType;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ResultType || (ResultType = {}));
function matchRoutes(e, a, i) {
  return i === void 0 && (i = "/"), matchRoutesImpl(e, a, i, !1);
}
function matchRoutesImpl(e, a, i, o) {
  let c = typeof a == "string" ? parsePath(a) : a,
    h = stripBasename(c.pathname || "/", i);
  if (h == null) return null;
  let b = flattenRoutes(e);
  rankRouteBranches(b);
  let en = null;
  for (let tn = 0; en == null && tn < b.length; ++tn) {
    let sn = decodePath(h);
    en = matchRouteBranch(b[tn], sn, o);
  }
  return en;
}
function flattenRoutes(e, a, i, o) {
  a === void 0 && (a = []), i === void 0 && (i = []), o === void 0 && (o = "");
  let c = (h, b, en) => {
    let tn = {
      relativePath: en === void 0 ? h.path || "" : en,
      caseSensitive: h.caseSensitive === !0,
      childrenIndex: b,
      route: h,
    };
    tn.relativePath.startsWith("/") &&
      (invariant(
        tn.relativePath.startsWith(o),
        'Absolute route path "' +
          tn.relativePath +
          '" nested under path ' +
          ('"' + o + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (tn.relativePath = tn.relativePath.slice(o.length)));
    let sn = joinPaths([o, tn.relativePath]),
      mn = i.concat(tn);
    h.children &&
      h.children.length > 0 &&
      (invariant(
        h.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + sn + '".')
      ),
      flattenRoutes(h.children, a, mn, sn)),
      !(h.path == null && !h.index) &&
        a.push({ path: sn, score: computeScore(sn, h.index), routesMeta: mn });
  };
  return (
    e.forEach((h, b) => {
      var en;
      if (h.path === "" || !((en = h.path) != null && en.includes("?")))
        c(h, b);
      else for (let tn of explodeOptionalSegments(h.path)) c(h, b, tn);
    }),
    a
  );
}
function explodeOptionalSegments(e) {
  let a = e.split("/");
  if (a.length === 0) return [];
  let [i, ...o] = a,
    c = i.endsWith("?"),
    h = i.replace(/\?$/, "");
  if (o.length === 0) return c ? [h, ""] : [h];
  let b = explodeOptionalSegments(o.join("/")),
    en = [];
  return (
    en.push(...b.map((tn) => (tn === "" ? h : [h, tn].join("/")))),
    c && en.push(...b),
    en.map((tn) => (e.startsWith("/") && tn === "" ? "/" : tn))
  );
}
function rankRouteBranches(e) {
  e.sort((a, i) =>
    a.score !== i.score
      ? i.score - a.score
      : compareIndexes(
          a.routesMeta.map((o) => o.childrenIndex),
          i.routesMeta.map((o) => o.childrenIndex)
        )
  );
}
const paramRe = /^:[\w-]+$/,
  dynamicSegmentValue = 3,
  indexRouteValue = 2,
  emptySegmentValue = 1,
  staticSegmentValue = 10,
  splatPenalty = -2,
  isSplat = (e) => e === "*";
function computeScore(e, a) {
  let i = e.split("/"),
    o = i.length;
  return (
    i.some(isSplat) && (o += splatPenalty),
    a && (o += indexRouteValue),
    i
      .filter((c) => !isSplat(c))
      .reduce(
        (c, h) =>
          c +
          (paramRe.test(h)
            ? dynamicSegmentValue
            : h === ""
            ? emptySegmentValue
            : staticSegmentValue),
        o
      )
  );
}
function compareIndexes(e, a) {
  return e.length === a.length && e.slice(0, -1).every((o, c) => o === a[c])
    ? e[e.length - 1] - a[a.length - 1]
    : 0;
}
function matchRouteBranch(e, a, i) {
  let { routesMeta: o } = e,
    c = {},
    h = "/",
    b = [];
  for (let en = 0; en < o.length; ++en) {
    let tn = o[en],
      sn = en === o.length - 1,
      mn = h === "/" ? a : a.slice(h.length) || "/",
      hn = matchPath(
        { path: tn.relativePath, caseSensitive: tn.caseSensitive, end: sn },
        mn
      ),
      gn = tn.route;
    if (
      (!hn &&
        sn &&
        i &&
        !o[o.length - 1].route.index &&
        (hn = matchPath(
          { path: tn.relativePath, caseSensitive: tn.caseSensitive, end: !1 },
          mn
        )),
      !hn)
    )
      return null;
    Object.assign(c, hn.params),
      b.push({
        params: c,
        pathname: joinPaths([h, hn.pathname]),
        pathnameBase: normalizePathname(joinPaths([h, hn.pathnameBase])),
        route: gn,
      }),
      hn.pathnameBase !== "/" && (h = joinPaths([h, hn.pathnameBase]));
  }
  return b;
}
function matchPath(e, a) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [i, o] = compilePath(e.path, e.caseSensitive, e.end),
    c = a.match(i);
  if (!c) return null;
  let h = c[0],
    b = h.replace(/(.)\/+$/, "$1"),
    en = c.slice(1);
  return {
    params: o.reduce((sn, mn, hn) => {
      let { paramName: gn, isOptional: Sn } = mn;
      if (gn === "*") {
        let xn = en[hn] || "";
        b = h.slice(0, h.length - xn.length).replace(/(.)\/+$/, "$1");
      }
      const An = en[hn];
      return (
        Sn && !An
          ? (sn[gn] = void 0)
          : (sn[gn] = (An || "").replace(/%2F/g, "/")),
        sn
      );
    }, {}),
    pathname: h,
    pathnameBase: b,
    pattern: e,
  };
}
function compilePath(e, a, i) {
  a === void 0 && (a = !1),
    i === void 0 && (i = !0),
    warning(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let o = [],
    c =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (b, en, tn) => (
            o.push({ paramName: en, isOptional: tn != null }),
            tn ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (o.push({ paramName: "*" }),
        (c += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : i
      ? (c += "\\/*$")
      : e !== "" && e !== "/" && (c += "(?:(?=\\/|$))"),
    [new RegExp(c, a ? void 0 : "i"), o]
  );
}
function decodePath(e) {
  try {
    return e
      .split("/")
      .map((a) => decodeURIComponent(a).replace(/\//g, "%2F"))
      .join("/");
  } catch (a) {
    return (
      warning(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + a + ").")
      ),
      e
    );
  }
}
function stripBasename(e, a) {
  if (a === "/") return e;
  if (!e.toLowerCase().startsWith(a.toLowerCase())) return null;
  let i = a.endsWith("/") ? a.length - 1 : a.length,
    o = e.charAt(i);
  return o && o !== "/" ? null : e.slice(i) || "/";
}
function resolvePath(e, a) {
  a === void 0 && (a = "/");
  let {
    pathname: i,
    search: o = "",
    hash: c = "",
  } = typeof e == "string" ? parsePath(e) : e;
  return {
    pathname: i ? (i.startsWith("/") ? i : resolvePathname(i, a)) : a,
    search: normalizeSearch(o),
    hash: normalizeHash(c),
  };
}
function resolvePathname(e, a) {
  let i = a.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((c) => {
      c === ".." ? i.length > 1 && i.pop() : c !== "." && i.push(c);
    }),
    i.length > 1 ? i.join("/") : "/"
  );
}
function getInvalidPathError(e, a, i, o) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      a +
      "` field [" +
      JSON.stringify(o) +
      "].  Please separate it out to the ") +
    ("`to." + i + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function getPathContributingMatches(e) {
  return e.filter(
    (a, i) => i === 0 || (a.route.path && a.route.path.length > 0)
  );
}
function getResolveToMatches(e, a) {
  let i = getPathContributingMatches(e);
  return a
    ? i.map((o, c) => (c === i.length - 1 ? o.pathname : o.pathnameBase))
    : i.map((o) => o.pathnameBase);
}
function resolveTo(e, a, i, o) {
  o === void 0 && (o = !1);
  let c;
  typeof e == "string"
    ? (c = parsePath(e))
    : ((c = _extends$1({}, e)),
      invariant(
        !c.pathname || !c.pathname.includes("?"),
        getInvalidPathError("?", "pathname", "search", c)
      ),
      invariant(
        !c.pathname || !c.pathname.includes("#"),
        getInvalidPathError("#", "pathname", "hash", c)
      ),
      invariant(
        !c.search || !c.search.includes("#"),
        getInvalidPathError("#", "search", "hash", c)
      ));
  let h = e === "" || c.pathname === "",
    b = h ? "/" : c.pathname,
    en;
  if (b == null) en = i;
  else {
    let hn = a.length - 1;
    if (!o && b.startsWith("..")) {
      let gn = b.split("/");
      for (; gn[0] === ".."; ) gn.shift(), (hn -= 1);
      c.pathname = gn.join("/");
    }
    en = hn >= 0 ? a[hn] : "/";
  }
  let tn = resolvePath(c, en),
    sn = b && b !== "/" && b.endsWith("/"),
    mn = (h || b === ".") && i.endsWith("/");
  return !tn.pathname.endsWith("/") && (sn || mn) && (tn.pathname += "/"), tn;
}
const joinPaths = (e) => e.join("/").replace(/\/\/+/g, "/"),
  normalizePathname = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  normalizeSearch = (e) =>
    !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
  normalizeHash = (e) =>
    !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function isRouteErrorResponse(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const validMutationMethodsArr = ["post", "put", "patch", "delete"];
new Set(validMutationMethodsArr);
const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
new Set(validRequestMethodsArr);
/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function _extends() {
  return (
    (_extends = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var a = 1; a < arguments.length; a++) {
            var i = arguments[a];
            for (var o in i)
              Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
          }
          return e;
        }),
    _extends.apply(this, arguments)
  );
}
const DataRouterContext = reactExports.createContext(null),
  DataRouterStateContext = reactExports.createContext(null),
  NavigationContext = reactExports.createContext(null),
  LocationContext = reactExports.createContext(null),
  RouteContext = reactExports.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1,
  }),
  RouteErrorContext = reactExports.createContext(null);
function useInRouterContext() {
  return reactExports.useContext(LocationContext) != null;
}
function useLocation() {
  return (
    useInRouterContext() || invariant(!1),
    reactExports.useContext(LocationContext).location
  );
}
function useIsomorphicLayoutEffect(e) {
  reactExports.useContext(NavigationContext).static ||
    reactExports.useLayoutEffect(e);
}
function useNavigate() {
  let { isDataRoute: e } = reactExports.useContext(RouteContext);
  return e ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
  useInRouterContext() || invariant(!1);
  let e = reactExports.useContext(DataRouterContext),
    {
      basename: a,
      future: i,
      navigator: o,
    } = reactExports.useContext(NavigationContext),
    { matches: c } = reactExports.useContext(RouteContext),
    { pathname: h } = useLocation(),
    b = JSON.stringify(getResolveToMatches(c, i.v7_relativeSplatPath)),
    en = reactExports.useRef(!1);
  return (
    useIsomorphicLayoutEffect(() => {
      en.current = !0;
    }),
    reactExports.useCallback(
      function (sn, mn) {
        if ((mn === void 0 && (mn = {}), !en.current)) return;
        if (typeof sn == "number") {
          o.go(sn);
          return;
        }
        let hn = resolveTo(sn, JSON.parse(b), h, mn.relative === "path");
        e == null &&
          a !== "/" &&
          (hn.pathname = hn.pathname === "/" ? a : joinPaths([a, hn.pathname])),
          (mn.replace ? o.replace : o.push)(hn, mn.state, mn);
      },
      [a, o, b, h, e]
    )
  );
}
function useParams() {
  let { matches: e } = reactExports.useContext(RouteContext),
    a = e[e.length - 1];
  return a ? a.params : {};
}
function useRoutes(e, a) {
  return useRoutesImpl(e, a);
}
function useRoutesImpl(e, a, i, o) {
  useInRouterContext() || invariant(!1);
  let { navigator: c } = reactExports.useContext(NavigationContext),
    { matches: h } = reactExports.useContext(RouteContext),
    b = h[h.length - 1],
    en = b ? b.params : {};
  b && b.pathname;
  let tn = b ? b.pathnameBase : "/";
  b && b.route;
  let sn = useLocation(),
    mn;
  if (a) {
    var hn;
    let Cn = typeof a == "string" ? parsePath(a) : a;
    tn === "/" ||
      ((hn = Cn.pathname) != null && hn.startsWith(tn)) ||
      invariant(!1),
      (mn = Cn);
  } else mn = sn;
  let gn = mn.pathname || "/",
    Sn = gn;
  if (tn !== "/") {
    let Cn = tn.replace(/^\//, "").split("/");
    Sn = "/" + gn.replace(/^\//, "").split("/").slice(Cn.length).join("/");
  }
  let An = matchRoutes(e, { pathname: Sn }),
    xn = _renderMatches(
      An &&
        An.map((Cn) =>
          Object.assign({}, Cn, {
            params: Object.assign({}, en, Cn.params),
            pathname: joinPaths([
              tn,
              c.encodeLocation
                ? c.encodeLocation(Cn.pathname).pathname
                : Cn.pathname,
            ]),
            pathnameBase:
              Cn.pathnameBase === "/"
                ? tn
                : joinPaths([
                    tn,
                    c.encodeLocation
                      ? c.encodeLocation(Cn.pathnameBase).pathname
                      : Cn.pathnameBase,
                  ]),
          })
        ),
      h,
      i,
      o
    );
  return a && xn
    ? reactExports.createElement(
        LocationContext.Provider,
        {
          value: {
            location: _extends(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              mn
            ),
            navigationType: Action.Pop,
          },
        },
        xn
      )
    : xn;
}
function DefaultErrorComponent() {
  let e = useRouteError(),
    a = isRouteErrorResponse(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    i = e instanceof Error ? e.stack : null,
    c = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    reactExports.createElement("h2", null, "Unexpected Application Error!"),
    reactExports.createElement("h3", { style: { fontStyle: "italic" } }, a),
    i ? reactExports.createElement("pre", { style: c }, i) : null,
    null
  );
}
const defaultErrorElement = reactExports.createElement(
  DefaultErrorComponent,
  null
);
class RenderErrorBoundary extends reactExports.Component {
  constructor(a) {
    super(a),
      (this.state = {
        location: a.location,
        revalidation: a.revalidation,
        error: a.error,
      });
  }
  static getDerivedStateFromError(a) {
    return { error: a };
  }
  static getDerivedStateFromProps(a, i) {
    return i.location !== a.location ||
      (i.revalidation !== "idle" && a.revalidation === "idle")
      ? { error: a.error, location: a.location, revalidation: a.revalidation }
      : {
          error: a.error !== void 0 ? a.error : i.error,
          location: i.location,
          revalidation: a.revalidation || i.revalidation,
        };
  }
  componentDidCatch(a, i) {
    console.error(
      "React Router caught the following error during render",
      a,
      i
    );
  }
  render() {
    return this.state.error !== void 0
      ? reactExports.createElement(
          RouteContext.Provider,
          { value: this.props.routeContext },
          reactExports.createElement(RouteErrorContext.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function RenderedRoute(e) {
  let { routeContext: a, match: i, children: o } = e,
    c = reactExports.useContext(DataRouterContext);
  return (
    c &&
      c.static &&
      c.staticContext &&
      (i.route.errorElement || i.route.ErrorBoundary) &&
      (c.staticContext._deepestRenderedBoundaryId = i.route.id),
    reactExports.createElement(RouteContext.Provider, { value: a }, o)
  );
}
function _renderMatches(e, a, i, o) {
  var c;
  if (
    (a === void 0 && (a = []),
    i === void 0 && (i = null),
    o === void 0 && (o = null),
    e == null)
  ) {
    var h;
    if (!i) return null;
    if (i.errors) e = i.matches;
    else if (
      (h = o) != null &&
      h.v7_partialHydration &&
      a.length === 0 &&
      !i.initialized &&
      i.matches.length > 0
    )
      e = i.matches;
    else return null;
  }
  let b = e,
    en = (c = i) == null ? void 0 : c.errors;
  if (en != null) {
    let mn = b.findIndex(
      (hn) => hn.route.id && (en == null ? void 0 : en[hn.route.id]) !== void 0
    );
    mn >= 0 || invariant(!1), (b = b.slice(0, Math.min(b.length, mn + 1)));
  }
  let tn = !1,
    sn = -1;
  if (i && o && o.v7_partialHydration)
    for (let mn = 0; mn < b.length; mn++) {
      let hn = b[mn];
      if (
        ((hn.route.HydrateFallback || hn.route.hydrateFallbackElement) &&
          (sn = mn),
        hn.route.id)
      ) {
        let { loaderData: gn, errors: Sn } = i,
          An =
            hn.route.loader &&
            gn[hn.route.id] === void 0 &&
            (!Sn || Sn[hn.route.id] === void 0);
        if (hn.route.lazy || An) {
          (tn = !0), sn >= 0 ? (b = b.slice(0, sn + 1)) : (b = [b[0]]);
          break;
        }
      }
    }
  return b.reduceRight((mn, hn, gn) => {
    let Sn,
      An = !1,
      xn = null,
      Cn = null;
    i &&
      ((Sn = en && hn.route.id ? en[hn.route.id] : void 0),
      (xn = hn.route.errorElement || defaultErrorElement),
      tn &&
        (sn < 0 && gn === 0
          ? ((An = !0), (Cn = null))
          : sn === gn &&
            ((An = !0), (Cn = hn.route.hydrateFallbackElement || null))));
    let an = a.concat(b.slice(0, gn + 1)),
      un = () => {
        let dn;
        return (
          Sn
            ? (dn = xn)
            : An
            ? (dn = Cn)
            : hn.route.Component
            ? (dn = reactExports.createElement(hn.route.Component, null))
            : hn.route.element
            ? (dn = hn.route.element)
            : (dn = mn),
          reactExports.createElement(RenderedRoute, {
            match: hn,
            routeContext: { outlet: mn, matches: an, isDataRoute: i != null },
            children: dn,
          })
        );
      };
    return i && (hn.route.ErrorBoundary || hn.route.errorElement || gn === 0)
      ? reactExports.createElement(RenderErrorBoundary, {
          location: i.location,
          revalidation: i.revalidation,
          component: xn,
          error: Sn,
          children: un(),
          routeContext: { outlet: null, matches: an, isDataRoute: !0 },
        })
      : un();
  }, null);
}
var DataRouterHook$1 = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(DataRouterHook$1 || {}),
  DataRouterStateHook$1 = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(DataRouterStateHook$1 || {});
function useDataRouterContext(e) {
  let a = reactExports.useContext(DataRouterContext);
  return a || invariant(!1), a;
}
function useDataRouterState(e) {
  let a = reactExports.useContext(DataRouterStateContext);
  return a || invariant(!1), a;
}
function useRouteContext(e) {
  let a = reactExports.useContext(RouteContext);
  return a || invariant(!1), a;
}
function useCurrentRouteId(e) {
  let a = useRouteContext(),
    i = a.matches[a.matches.length - 1];
  return i.route.id || invariant(!1), i.route.id;
}
function useRouteError() {
  var e;
  let a = reactExports.useContext(RouteErrorContext),
    i = useDataRouterState(DataRouterStateHook$1.UseRouteError),
    o = useCurrentRouteId(DataRouterStateHook$1.UseRouteError);
  return a !== void 0 ? a : (e = i.errors) == null ? void 0 : e[o];
}
function useNavigateStable() {
  let { router: e } = useDataRouterContext(DataRouterHook$1.UseNavigateStable),
    a = useCurrentRouteId(DataRouterStateHook$1.UseNavigateStable),
    i = reactExports.useRef(!1);
  return (
    useIsomorphicLayoutEffect(() => {
      i.current = !0;
    }),
    reactExports.useCallback(
      function (c, h) {
        h === void 0 && (h = {}),
          i.current &&
            (typeof c == "number"
              ? e.navigate(c)
              : e.navigate(c, _extends({ fromRouteId: a }, h)));
      },
      [e, a]
    )
  );
}
const alreadyWarned = {};
function warnOnce(e, a) {
  alreadyWarned[a] || ((alreadyWarned[a] = !0), console.warn(a));
}
const logDeprecation = (e, a, i) =>
  warnOnce(
    e,
    "⚠️ React Router Future Flag Warning: " +
      a +
      ". " +
      ("You can use the `" + e + "` future flag to opt-in early. ") +
      ("For more information, see " + i + ".")
  );
function logV6DeprecationWarnings(e, a) {
  (e != null && e.v7_startTransition) ||
    logDeprecation(
      "v7_startTransition",
      "React Router will begin wrapping state updates in `React.startTransition` in v7",
      "https://reactrouter.com/v6/upgrading/future#v7_starttransition"
    ),
    !(e != null && e.v7_relativeSplatPath) &&
      !a &&
      logDeprecation(
        "v7_relativeSplatPath",
        "Relative route resolution within Splat routes is changing in v7",
        "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"
      );
}
function Route(e) {
  invariant(!1);
}
function Router(e) {
  let {
    basename: a = "/",
    children: i = null,
    location: o,
    navigationType: c = Action.Pop,
    navigator: h,
    static: b = !1,
    future: en,
  } = e;
  useInRouterContext() && invariant(!1);
  let tn = a.replace(/^\/*/, "/"),
    sn = reactExports.useMemo(
      () => ({
        basename: tn,
        navigator: h,
        static: b,
        future: _extends({ v7_relativeSplatPath: !1 }, en),
      }),
      [tn, en, h, b]
    );
  typeof o == "string" && (o = parsePath(o));
  let {
      pathname: mn = "/",
      search: hn = "",
      hash: gn = "",
      state: Sn = null,
      key: An = "default",
    } = o,
    xn = reactExports.useMemo(() => {
      let Cn = stripBasename(mn, tn);
      return Cn == null
        ? null
        : {
            location: {
              pathname: Cn,
              search: hn,
              hash: gn,
              state: Sn,
              key: An,
            },
            navigationType: c,
          };
    }, [tn, mn, hn, gn, Sn, An, c]);
  return xn == null
    ? null
    : reactExports.createElement(
        NavigationContext.Provider,
        { value: sn },
        reactExports.createElement(LocationContext.Provider, {
          children: i,
          value: xn,
        })
      );
}
function Routes(e) {
  let { children: a, location: i } = e;
  return useRoutes(createRoutesFromChildren(a), i);
}
new Promise(() => {});
function createRoutesFromChildren(e, a) {
  a === void 0 && (a = []);
  let i = [];
  return (
    reactExports.Children.forEach(e, (o, c) => {
      if (!reactExports.isValidElement(o)) return;
      let h = [...a, c];
      if (o.type === reactExports.Fragment) {
        i.push.apply(i, createRoutesFromChildren(o.props.children, h));
        return;
      }
      o.type !== Route && invariant(!1),
        !o.props.index || !o.props.children || invariant(!1);
      let b = {
        id: o.props.id || h.join("-"),
        caseSensitive: o.props.caseSensitive,
        element: o.props.element,
        Component: o.props.Component,
        index: o.props.index,
        path: o.props.path,
        loader: o.props.loader,
        action: o.props.action,
        errorElement: o.props.errorElement,
        ErrorBoundary: o.props.ErrorBoundary,
        hasErrorBoundary:
          o.props.ErrorBoundary != null || o.props.errorElement != null,
        shouldRevalidate: o.props.shouldRevalidate,
        handle: o.props.handle,
        lazy: o.props.lazy,
      };
      o.props.children &&
        (b.children = createRoutesFromChildren(o.props.children, h)),
        i.push(b);
    }),
    i
  );
}
/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const REACT_ROUTER_VERSION = "6";
try {
  window.__reactRouterVersion = REACT_ROUTER_VERSION;
} catch {}
const START_TRANSITION = "startTransition",
  startTransitionImpl = React[START_TRANSITION];
function BrowserRouter(e) {
  let { basename: a, children: i, future: o, window: c } = e,
    h = reactExports.useRef();
  h.current == null &&
    (h.current = createBrowserHistory({ window: c, v5Compat: !0 }));
  let b = h.current,
    [en, tn] = reactExports.useState({
      action: b.action,
      location: b.location,
    }),
    { v7_startTransition: sn } = o || {},
    mn = reactExports.useCallback(
      (hn) => {
        sn && startTransitionImpl ? startTransitionImpl(() => tn(hn)) : tn(hn);
      },
      [tn, sn]
    );
  return (
    reactExports.useLayoutEffect(() => b.listen(mn), [b, mn]),
    reactExports.useEffect(() => logV6DeprecationWarnings(o), [o]),
    reactExports.createElement(Router, {
      basename: a,
      children: i,
      location: en.location,
      navigationType: en.action,
      navigator: b,
      future: o,
    })
  );
}
var DataRouterHook;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(DataRouterStateHook || (DataRouterStateHook = {}));
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  createLucideIcon = (e, a) => {
    const i = reactExports.forwardRef(
      (
        {
          color: o = "currentColor",
          size: c = 24,
          strokeWidth: h = 2,
          absoluteStrokeWidth: b,
          className: en = "",
          children: tn,
          ...sn
        },
        mn
      ) =>
        reactExports.createElement(
          "svg",
          {
            ref: mn,
            ...defaultAttributes,
            width: c,
            height: c,
            stroke: o,
            strokeWidth: b ? (Number(h) * 24) / Number(c) : h,
            className: ["lucide", `lucide-${toKebabCase(e)}`, en].join(" "),
            ...sn,
          },
          [
            ...a.map(([hn, gn]) => reactExports.createElement(hn, gn)),
            ...(Array.isArray(tn) ? tn : [tn]),
          ]
        )
    );
    return (i.displayName = `${e}`), i;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ArrowLeft = createLucideIcon("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Camera = createLucideIcon("Camera", [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg",
    },
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Globe = createLucideIcon("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
  ],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Landmark = createLucideIcon("Landmark", [
  ["line", { x1: "3", x2: "21", y1: "22", y2: "22", key: "j8o0r" }],
  ["line", { x1: "6", x2: "6", y1: "18", y2: "11", key: "10tf0k" }],
  ["line", { x1: "10", x2: "10", y1: "18", y2: "11", key: "54lgf6" }],
  ["line", { x1: "14", x2: "14", y1: "18", y2: "11", key: "380y" }],
  ["line", { x1: "18", x2: "18", y1: "18", y2: "11", key: "1kevvc" }],
  ["polygon", { points: "12 2 20 7 4 7", key: "jkujk7" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const MapPin = createLucideIcon("MapPin", [
  [
    "path",
    { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Search = createLucideIcon("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Users = createLucideIcon("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Utensils = createLucideIcon("Utensils", [
    ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }],
    ["path", { d: "M7 2v20", key: "1473qp" }],
    [
      "path",
      { d: "M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "1ogz0v" },
    ],
  ]),
  Header = ({
    searchQuery: e,
    onSearchChange: a,
    selectedRegion: i,
    onRegionChange: o,
  }) => {
    const c = ["All", "Asia", "Europe", "Americas", "Africa", "Oceania"];
    return jsxRuntimeExports.jsx("div", {
      className: "bg-gray-800 shadow-lg",
      children: jsxRuntimeExports.jsx("div", {
        className: "container mx-auto px-4 py-6",
        children: jsxRuntimeExports.jsxs("div", {
          className:
            "flex flex-col md:flex-row items-center justify-between gap-4",
          children: [
            jsxRuntimeExports.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                jsxRuntimeExports.jsx(Globe, {
                  className: "w-8 h-8 text-[#ffc20d]",
                }),
                jsxRuntimeExports.jsx("h1", {
                  className: "text-3xl font-bold text-white",
                  children: "World Explorer",
                }),
              ],
            }),
            jsxRuntimeExports.jsxs("div", {
              className: "flex flex-col md:flex-row gap-4 w-full md:w-auto",
              children: [
                jsxRuntimeExports.jsxs("div", {
                  className: "relative",
                  children: [
                    jsxRuntimeExports.jsx(Search, {
                      className:
                        "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5",
                    }),
                    jsxRuntimeExports.jsx("input", {
                      type: "text",
                      placeholder: "Search countries...",
                      value: e,
                      onChange: (h) => a(h.target.value),
                      className:
                        "pl-10 pr-4 py-2 w-full md:w-64 bg-[#272727] text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none",
                    }),
                  ],
                }),
                jsxRuntimeExports.jsx("select", {
                  value: i,
                  onChange: (h) => o(h.target.value),
                  className:
                    "px-4 py-2 bg-[#272727] text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none",
                  children: c.map((h) =>
                    jsxRuntimeExports.jsx(
                      "option",
                      { value: h, children: h },
                      h
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
      }),
    });
  };
var dist = { exports: {} },
  jquery_min = { exports: {} };
/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */ var hasRequiredJquery_min;
function requireJquery_min() {
  return (
    hasRequiredJquery_min ||
      ((hasRequiredJquery_min = 1),
      (function (e) {
        (function (a, i) {
          e.exports = a.document
            ? i(a, !0)
            : function (o) {
                if (!o.document)
                  throw new Error("jQuery requires a window with a document");
                return i(o);
              };
        })(typeof window < "u" ? window : commonjsGlobal, function (a, i) {
          var o = [],
            c = Object.getPrototypeOf,
            h = o.slice,
            b = o.flat
              ? function (s) {
                  return o.flat.call(s);
                }
              : function (s) {
                  return o.concat.apply([], s);
                },
            en = o.push,
            tn = o.indexOf,
            sn = {},
            mn = sn.toString,
            hn = sn.hasOwnProperty,
            gn = hn.toString,
            Sn = gn.call(Object),
            An = {},
            xn = function (s) {
              return (
                typeof s == "function" &&
                typeof s.nodeType != "number" &&
                typeof s.item != "function"
              );
            },
            Cn = function (s) {
              return s != null && s === s.window;
            },
            an = a.document,
            un = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function dn(s, d, g) {
            var j,
              $,
              _e = (g = g || an).createElement("script");
            if (((_e.text = s), d))
              for (j in un)
                ($ = d[j] || (d.getAttribute && d.getAttribute(j))) &&
                  _e.setAttribute(j, $);
            g.head.appendChild(_e).parentNode.removeChild(_e);
          }
          function Mn(s) {
            return s == null
              ? s + ""
              : typeof s == "object" || typeof s == "function"
              ? sn[mn.call(s)] || "object"
              : typeof s;
          }
          var jn = "3.7.1",
            In = /HTML$/i,
            _ = function (s, d) {
              return new _.fn.init(s, d);
            };
          function Bn(s) {
            var d = !!s && "length" in s && s.length,
              g = Mn(s);
            return (
              !xn(s) &&
              !Cn(s) &&
              (g === "array" ||
                d === 0 ||
                (typeof d == "number" && 0 < d && d - 1 in s))
            );
          }
          function Wn(s, d) {
            return s.nodeName && s.nodeName.toLowerCase() === d.toLowerCase();
          }
          (_.fn = _.prototype =
            {
              jquery: jn,
              constructor: _,
              length: 0,
              toArray: function () {
                return h.call(this);
              },
              get: function (s) {
                return s == null
                  ? h.call(this)
                  : s < 0
                  ? this[s + this.length]
                  : this[s];
              },
              pushStack: function (s) {
                var d = _.merge(this.constructor(), s);
                return (d.prevObject = this), d;
              },
              each: function (s) {
                return _.each(this, s);
              },
              map: function (s) {
                return this.pushStack(
                  _.map(this, function (d, g) {
                    return s.call(d, g, d);
                  })
                );
              },
              slice: function () {
                return this.pushStack(h.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  _.grep(this, function (s, d) {
                    return (d + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  _.grep(this, function (s, d) {
                    return d % 2;
                  })
                );
              },
              eq: function (s) {
                var d = this.length,
                  g = +s + (s < 0 ? d : 0);
                return this.pushStack(0 <= g && g < d ? [this[g]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: en,
              sort: o.sort,
              splice: o.splice,
            }),
            (_.extend = _.fn.extend =
              function () {
                var s,
                  d,
                  g,
                  j,
                  $,
                  _e,
                  nn = arguments[0] || {},
                  on = 1,
                  rn = arguments.length,
                  pn = !1;
                for (
                  typeof nn == "boolean" &&
                    ((pn = nn), (nn = arguments[on] || {}), on++),
                    typeof nn == "object" || xn(nn) || (nn = {}),
                    on === rn && ((nn = this), on--);
                  on < rn;
                  on++
                )
                  if ((s = arguments[on]) != null)
                    for (d in s)
                      (j = s[d]),
                        d !== "__proto__" &&
                          nn !== j &&
                          (pn &&
                          j &&
                          (_.isPlainObject(j) || ($ = Array.isArray(j)))
                            ? ((g = nn[d]),
                              (_e =
                                $ && !Array.isArray(g)
                                  ? []
                                  : $ || _.isPlainObject(g)
                                  ? g
                                  : {}),
                              ($ = !1),
                              (nn[d] = _.extend(pn, _e, j)))
                            : j !== void 0 && (nn[d] = j));
                return nn;
              }),
            _.extend({
              expando: "jQuery" + (jn + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (s) {
                throw new Error(s);
              },
              noop: function () {},
              isPlainObject: function (s) {
                var d, g;
                return (
                  !(!s || mn.call(s) !== "[object Object]") &&
                  (!(d = c(s)) ||
                    (typeof (g = hn.call(d, "constructor") && d.constructor) ==
                      "function" &&
                      gn.call(g) === Sn))
                );
              },
              isEmptyObject: function (s) {
                var d;
                for (d in s) return !1;
                return !0;
              },
              globalEval: function (s, d, g) {
                dn(s, { nonce: d && d.nonce }, g);
              },
              each: function (s, d) {
                var g,
                  j = 0;
                if (Bn(s))
                  for (
                    g = s.length;
                    j < g && d.call(s[j], j, s[j]) !== !1;
                    j++
                  );
                else for (j in s) if (d.call(s[j], j, s[j]) === !1) break;
                return s;
              },
              text: function (s) {
                var d,
                  g = "",
                  j = 0,
                  $ = s.nodeType;
                if (!$) for (; (d = s[j++]); ) g += _.text(d);
                return $ === 1 || $ === 11
                  ? s.textContent
                  : $ === 9
                  ? s.documentElement.textContent
                  : $ === 3 || $ === 4
                  ? s.nodeValue
                  : g;
              },
              makeArray: function (s, d) {
                var g = d || [];
                return (
                  s != null &&
                    (Bn(Object(s))
                      ? _.merge(g, typeof s == "string" ? [s] : s)
                      : en.call(g, s)),
                  g
                );
              },
              inArray: function (s, d, g) {
                return d == null ? -1 : tn.call(d, s, g);
              },
              isXMLDoc: function (s) {
                var d = s && s.namespaceURI,
                  g = s && (s.ownerDocument || s).documentElement;
                return !In.test(d || (g && g.nodeName) || "HTML");
              },
              merge: function (s, d) {
                for (var g = +d.length, j = 0, $ = s.length; j < g; j++)
                  s[$++] = d[j];
                return (s.length = $), s;
              },
              grep: function (s, d, g) {
                for (var j = [], $ = 0, _e = s.length, nn = !g; $ < _e; $++)
                  !d(s[$], $) !== nn && j.push(s[$]);
                return j;
              },
              map: function (s, d, g) {
                var j,
                  $,
                  _e = 0,
                  nn = [];
                if (Bn(s))
                  for (j = s.length; _e < j; _e++)
                    ($ = d(s[_e], _e, g)) != null && nn.push($);
                else for (_e in s) ($ = d(s[_e], _e, g)) != null && nn.push($);
                return b(nn);
              },
              guid: 1,
              support: An,
            }),
            typeof Symbol == "function" &&
              (_.fn[Symbol.iterator] = o[Symbol.iterator]),
            _.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (s, d) {
                sn["[object " + d + "]"] = d.toLowerCase();
              }
            );
          var Zn = o.pop,
            _t = o.sort,
            Kt = o.splice,
            Gn = "[\\x20\\t\\r\\n\\f]",
            Nt = new RegExp(
              "^" + Gn + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Gn + "+$",
              "g"
            );
          _.contains = function (s, d) {
            var g = d && d.parentNode;
            return (
              s === g ||
              !(
                !g ||
                g.nodeType !== 1 ||
                !(s.contains
                  ? s.contains(g)
                  : s.compareDocumentPosition &&
                    16 & s.compareDocumentPosition(g))
              )
            );
          };
          var tr = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
          function Cl(s, d) {
            return d
              ? s === "\0"
                ? "�"
                : s.slice(0, -1) +
                  "\\" +
                  s.charCodeAt(s.length - 1).toString(16) +
                  " "
              : "\\" + s;
          }
          _.escapeSelector = function (s) {
            return (s + "").replace(tr, Cl);
          };
          var yt = an,
            Dn = en;
          (function () {
            var s,
              d,
              g,
              j,
              $,
              _e,
              nn,
              on,
              rn,
              pn,
              _n = Dn,
              kn = _.expando,
              fn = 0,
              En = 0,
              Pn = at(),
              qn = at(),
              Kn = at(),
              rt = at(),
              ut = function (ln, cn) {
                return ln === cn && ($ = !0), 0;
              },
              Dt =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              Tt =
                "(?:\\\\[\\da-fA-F]{1,6}" +
                Gn +
                "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              Qn =
                "\\[" +
                Gn +
                "*(" +
                Tt +
                ")(?:" +
                Gn +
                "*([*^$|!~]?=)" +
                Gn +
                `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` +
                Tt +
                "))|)" +
                Gn +
                "*\\]",
              Qt =
                ":(" +
                Tt +
                `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` +
                Qn +
                ")*)|.*)\\)|)",
              Jn = new RegExp(Gn + "+", "g"),
              tt = new RegExp("^" + Gn + "*," + Gn + "*"),
              Ul = new RegExp("^" + Gn + "*([>+~]|" + Gn + ")" + Gn + "*"),
              _r = new RegExp(Gn + "|>"),
              Rt = new RegExp(Qt),
              Vl = new RegExp("^" + Tt + "$"),
              Ot = {
                ID: new RegExp("^#(" + Tt + ")"),
                CLASS: new RegExp("^\\.(" + Tt + ")"),
                TAG: new RegExp("^(" + Tt + "|[*])"),
                ATTR: new RegExp("^" + Qn),
                PSEUDO: new RegExp("^" + Qt),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    Gn +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    Gn +
                    "*(?:([+-]|)" +
                    Gn +
                    "*(\\d+)|))" +
                    Gn +
                    "*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + Dt + ")$", "i"),
                needsContext: new RegExp(
                  "^" +
                    Gn +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    Gn +
                    "*((?:-\\d)?\\d*)" +
                    Gn +
                    "*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              Vt = /^(?:input|select|textarea|button)$/i,
              Ml = /^h\d$/i,
              kt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ct = /[+~]/,
              ot = new RegExp(
                "\\\\[\\da-fA-F]{1,6}" + Gn + "?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              ht = function (ln, cn) {
                var vn = "0x" + ln.slice(1) - 65536;
                return (
                  cn ||
                  (vn < 0
                    ? String.fromCharCode(vn + 65536)
                    : String.fromCharCode(
                        (vn >> 10) | 55296,
                        (1023 & vn) | 56320
                      ))
                );
              },
              Wt = function () {
                qt();
              },
              ft = $l(
                function (ln) {
                  return ln.disabled === !0 && Wn(ln, "fieldset");
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              _n.apply((o = h.call(yt.childNodes)), yt.childNodes),
                o[yt.childNodes.length].nodeType;
            } catch {
              _n = {
                apply: function (cn, vn) {
                  Dn.apply(cn, h.call(vn));
                },
                call: function (cn) {
                  Dn.apply(cn, h.call(arguments, 1));
                },
              };
            }
            function Nn(ln, cn, vn, yn) {
              var wn,
                Tn,
                Rn,
                Ln,
                bn,
                Xn,
                Fn,
                zn = cn && cn.ownerDocument,
                Yn = cn ? cn.nodeType : 9;
              if (
                ((vn = vn || []),
                typeof ln != "string" ||
                  !ln ||
                  (Yn !== 1 && Yn !== 9 && Yn !== 11))
              )
                return vn;
              if (!yn && (qt(cn), (cn = cn || _e), on)) {
                if (Yn !== 11 && (bn = kt.exec(ln)))
                  if ((wn = bn[1])) {
                    if (Yn === 9) {
                      if (!(Rn = cn.getElementById(wn))) return vn;
                      if (Rn.id === wn) return _n.call(vn, Rn), vn;
                    } else if (
                      zn &&
                      (Rn = zn.getElementById(wn)) &&
                      Nn.contains(cn, Rn) &&
                      Rn.id === wn
                    )
                      return _n.call(vn, Rn), vn;
                  } else {
                    if (bn[2])
                      return _n.apply(vn, cn.getElementsByTagName(ln)), vn;
                    if ((wn = bn[3]) && cn.getElementsByClassName)
                      return _n.apply(vn, cn.getElementsByClassName(wn)), vn;
                  }
                if (!(rt[ln + " "] || (rn && rn.test(ln)))) {
                  if (
                    ((Fn = ln),
                    (zn = cn),
                    Yn === 1 && (_r.test(ln) || Ul.test(ln)))
                  ) {
                    for (
                      ((zn = (ct.test(ln) && yr(cn.parentNode)) || cn) == cn &&
                        An.scope) ||
                        ((Ln = cn.getAttribute("id"))
                          ? (Ln = _.escapeSelector(Ln))
                          : cn.setAttribute("id", (Ln = kn))),
                        Tn = (Xn = Wl(ln)).length;
                      Tn--;

                    )
                      Xn[Tn] = (Ln ? "#" + Ln : ":scope") + " " + Xl(Xn[Tn]);
                    Fn = Xn.join(",");
                  }
                  try {
                    return _n.apply(vn, zn.querySelectorAll(Fn)), vn;
                  } catch {
                    rt(ln, !0);
                  } finally {
                    Ln === kn && cn.removeAttribute("id");
                  }
                }
              }
              return _i(ln.replace(Nt, "$1"), cn, vn, yn);
            }
            function at() {
              var ln = [];
              return function cn(vn, yn) {
                return (
                  ln.push(vn + " ") > d.cacheLength && delete cn[ln.shift()],
                  (cn[vn + " "] = yn)
                );
              };
            }
            function it(ln) {
              return (ln[kn] = !0), ln;
            }
            function $n(ln) {
              var cn = _e.createElement("fieldset");
              try {
                return !!ln(cn);
              } catch {
                return !1;
              } finally {
                cn.parentNode && cn.parentNode.removeChild(cn), (cn = null);
              }
            }
            function Lt(ln) {
              return function (cn) {
                return Wn(cn, "input") && cn.type === ln;
              };
            }
            function Sl(ln) {
              return function (cn) {
                return (Wn(cn, "input") || Wn(cn, "button")) && cn.type === ln;
              };
            }
            function Jl(ln) {
              return function (cn) {
                return "form" in cn
                  ? cn.parentNode && cn.disabled === !1
                    ? "label" in cn
                      ? "label" in cn.parentNode
                        ? cn.parentNode.disabled === ln
                        : cn.disabled === ln
                      : cn.isDisabled === ln ||
                        (cn.isDisabled !== !ln && ft(cn) === ln)
                    : cn.disabled === ln
                  : "label" in cn && cn.disabled === ln;
              };
            }
            function Gt(ln) {
              return it(function (cn) {
                return (
                  (cn = +cn),
                  it(function (vn, yn) {
                    for (
                      var wn, Tn = ln([], vn.length, cn), Rn = Tn.length;
                      Rn--;

                    )
                      vn[(wn = Tn[Rn])] && (vn[wn] = !(yn[wn] = vn[wn]));
                  })
                );
              });
            }
            function yr(ln) {
              return ln && typeof ln.getElementsByTagName < "u" && ln;
            }
            function qt(ln) {
              var cn,
                vn = ln ? ln.ownerDocument || ln : yt;
              return (
                vn != _e &&
                  vn.nodeType === 9 &&
                  vn.documentElement &&
                  ((nn = (_e = vn).documentElement),
                  (on = !_.isXMLDoc(_e)),
                  (pn =
                    nn.matches ||
                    nn.webkitMatchesSelector ||
                    nn.msMatchesSelector),
                  nn.msMatchesSelector &&
                    yt != _e &&
                    (cn = _e.defaultView) &&
                    cn.top !== cn &&
                    cn.addEventListener("unload", Wt),
                  (An.getById = $n(function (yn) {
                    return (
                      (nn.appendChild(yn).id = _.expando),
                      !_e.getElementsByName ||
                        !_e.getElementsByName(_.expando).length
                    );
                  })),
                  (An.disconnectedMatch = $n(function (yn) {
                    return pn.call(yn, "*");
                  })),
                  (An.scope = $n(function () {
                    return _e.querySelectorAll(":scope");
                  })),
                  (An.cssHas = $n(function () {
                    try {
                      return _e.querySelector(":has(*,:jqfake)"), !1;
                    } catch {
                      return !0;
                    }
                  })),
                  An.getById
                    ? ((d.filter.ID = function (yn) {
                        var wn = yn.replace(ot, ht);
                        return function (Tn) {
                          return Tn.getAttribute("id") === wn;
                        };
                      }),
                      (d.find.ID = function (yn, wn) {
                        if (typeof wn.getElementById < "u" && on) {
                          var Tn = wn.getElementById(yn);
                          return Tn ? [Tn] : [];
                        }
                      }))
                    : ((d.filter.ID = function (yn) {
                        var wn = yn.replace(ot, ht);
                        return function (Tn) {
                          var Rn =
                            typeof Tn.getAttributeNode < "u" &&
                            Tn.getAttributeNode("id");
                          return Rn && Rn.value === wn;
                        };
                      }),
                      (d.find.ID = function (yn, wn) {
                        if (typeof wn.getElementById < "u" && on) {
                          var Tn,
                            Rn,
                            Ln,
                            bn = wn.getElementById(yn);
                          if (bn) {
                            if (
                              (Tn = bn.getAttributeNode("id")) &&
                              Tn.value === yn
                            )
                              return [bn];
                            for (
                              Ln = wn.getElementsByName(yn), Rn = 0;
                              (bn = Ln[Rn++]);

                            )
                              if (
                                (Tn = bn.getAttributeNode("id")) &&
                                Tn.value === yn
                              )
                                return [bn];
                          }
                          return [];
                        }
                      })),
                  (d.find.TAG = function (yn, wn) {
                    return typeof wn.getElementsByTagName < "u"
                      ? wn.getElementsByTagName(yn)
                      : wn.querySelectorAll(yn);
                  }),
                  (d.find.CLASS = function (yn, wn) {
                    if (typeof wn.getElementsByClassName < "u" && on)
                      return wn.getElementsByClassName(yn);
                  }),
                  (rn = []),
                  $n(function (yn) {
                    var wn;
                    (nn.appendChild(yn).innerHTML =
                      "<a id='" +
                      kn +
                      "' href='' disabled='disabled'></a><select id='" +
                      kn +
                      "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                      yn.querySelectorAll("[selected]").length ||
                        rn.push("\\[" + Gn + "*(?:value|" + Dt + ")"),
                      yn.querySelectorAll("[id~=" + kn + "-]").length ||
                        rn.push("~="),
                      yn.querySelectorAll("a#" + kn + "+*").length ||
                        rn.push(".#.+[+~]"),
                      yn.querySelectorAll(":checked").length ||
                        rn.push(":checked"),
                      (wn = _e.createElement("input")).setAttribute(
                        "type",
                        "hidden"
                      ),
                      yn.appendChild(wn).setAttribute("name", "D"),
                      (nn.appendChild(yn).disabled = !0),
                      yn.querySelectorAll(":disabled").length !== 2 &&
                        rn.push(":enabled", ":disabled"),
                      (wn = _e.createElement("input")).setAttribute("name", ""),
                      yn.appendChild(wn),
                      yn.querySelectorAll("[name='']").length ||
                        rn.push(
                          "\\[" + Gn + "*name" + Gn + "*=" + Gn + `*(?:''|"")`
                        );
                  }),
                  An.cssHas || rn.push(":has"),
                  (rn = rn.length && new RegExp(rn.join("|"))),
                  (ut = function (yn, wn) {
                    if (yn === wn) return ($ = !0), 0;
                    var Tn =
                      !yn.compareDocumentPosition - !wn.compareDocumentPosition;
                    return (
                      Tn ||
                      (1 &
                        (Tn =
                          (yn.ownerDocument || yn) == (wn.ownerDocument || wn)
                            ? yn.compareDocumentPosition(wn)
                            : 1) ||
                      (!An.sortDetached &&
                        wn.compareDocumentPosition(yn) === Tn)
                        ? yn === _e ||
                          (yn.ownerDocument == yt && Nn.contains(yt, yn))
                          ? -1
                          : wn === _e ||
                            (wn.ownerDocument == yt && Nn.contains(yt, wn))
                          ? 1
                          : j
                          ? tn.call(j, yn) - tn.call(j, wn)
                          : 0
                        : 4 & Tn
                        ? -1
                        : 1)
                    );
                  })),
                _e
              );
            }
            for (s in ((Nn.matches = function (ln, cn) {
              return Nn(ln, null, null, cn);
            }),
            (Nn.matchesSelector = function (ln, cn) {
              if ((qt(ln), on && !rt[cn + " "] && (!rn || !rn.test(cn))))
                try {
                  var vn = pn.call(ln, cn);
                  if (
                    vn ||
                    An.disconnectedMatch ||
                    (ln.document && ln.document.nodeType !== 11)
                  )
                    return vn;
                } catch {
                  rt(cn, !0);
                }
              return 0 < Nn(cn, _e, null, [ln]).length;
            }),
            (Nn.contains = function (ln, cn) {
              return (
                (ln.ownerDocument || ln) != _e && qt(ln), _.contains(ln, cn)
              );
            }),
            (Nn.attr = function (ln, cn) {
              (ln.ownerDocument || ln) != _e && qt(ln);
              var vn = d.attrHandle[cn.toLowerCase()],
                yn =
                  vn && hn.call(d.attrHandle, cn.toLowerCase())
                    ? vn(ln, cn, !on)
                    : void 0;
              return yn !== void 0 ? yn : ln.getAttribute(cn);
            }),
            (Nn.error = function (ln) {
              throw new Error("Syntax error, unrecognized expression: " + ln);
            }),
            (_.uniqueSort = function (ln) {
              var cn,
                vn = [],
                yn = 0,
                wn = 0;
              if (
                (($ = !An.sortStable),
                (j = !An.sortStable && h.call(ln, 0)),
                _t.call(ln, ut),
                $)
              ) {
                for (; (cn = ln[wn++]); ) cn === ln[wn] && (yn = vn.push(wn));
                for (; yn--; ) Kt.call(ln, vn[yn], 1);
              }
              return (j = null), ln;
            }),
            (_.fn.uniqueSort = function () {
              return this.pushStack(_.uniqueSort(h.apply(this)));
            }),
            ((d = _.expr =
              {
                cacheLength: 50,
                createPseudo: it,
                match: Ot,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (ln) {
                    return (
                      (ln[1] = ln[1].replace(ot, ht)),
                      (ln[3] = (ln[3] || ln[4] || ln[5] || "").replace(ot, ht)),
                      ln[2] === "~=" && (ln[3] = " " + ln[3] + " "),
                      ln.slice(0, 4)
                    );
                  },
                  CHILD: function (ln) {
                    return (
                      (ln[1] = ln[1].toLowerCase()),
                      ln[1].slice(0, 3) === "nth"
                        ? (ln[3] || Nn.error(ln[0]),
                          (ln[4] = +(ln[4]
                            ? ln[5] + (ln[6] || 1)
                            : 2 * (ln[3] === "even" || ln[3] === "odd"))),
                          (ln[5] = +(ln[7] + ln[8] || ln[3] === "odd")))
                        : ln[3] && Nn.error(ln[0]),
                      ln
                    );
                  },
                  PSEUDO: function (ln) {
                    var cn,
                      vn = !ln[6] && ln[2];
                    return Ot.CHILD.test(ln[0])
                      ? null
                      : (ln[3]
                          ? (ln[2] = ln[4] || ln[5] || "")
                          : vn &&
                            Rt.test(vn) &&
                            (cn = Wl(vn, !0)) &&
                            (cn =
                              vn.indexOf(")", vn.length - cn) - vn.length) &&
                            ((ln[0] = ln[0].slice(0, cn)),
                            (ln[2] = vn.slice(0, cn))),
                        ln.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (ln) {
                    var cn = ln.replace(ot, ht).toLowerCase();
                    return ln === "*"
                      ? function () {
                          return !0;
                        }
                      : function (vn) {
                          return Wn(vn, cn);
                        };
                  },
                  CLASS: function (ln) {
                    var cn = Pn[ln + " "];
                    return (
                      cn ||
                      ((cn = new RegExp(
                        "(^|" + Gn + ")" + ln + "(" + Gn + "|$)"
                      )) &&
                        Pn(ln, function (vn) {
                          return cn.test(
                            (typeof vn.className == "string" && vn.className) ||
                              (typeof vn.getAttribute < "u" &&
                                vn.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (ln, cn, vn) {
                    return function (yn) {
                      var wn = Nn.attr(yn, ln);
                      return wn == null
                        ? cn === "!="
                        : !cn ||
                            ((wn += ""),
                            cn === "="
                              ? wn === vn
                              : cn === "!="
                              ? wn !== vn
                              : cn === "^="
                              ? vn && wn.indexOf(vn) === 0
                              : cn === "*="
                              ? vn && -1 < wn.indexOf(vn)
                              : cn === "$="
                              ? vn && wn.slice(-vn.length) === vn
                              : cn === "~="
                              ? -1 <
                                (" " + wn.replace(Jn, " ") + " ").indexOf(vn)
                              : cn === "|=" &&
                                (wn === vn ||
                                  wn.slice(0, vn.length + 1) === vn + "-"));
                    };
                  },
                  CHILD: function (ln, cn, vn, yn, wn) {
                    var Tn = ln.slice(0, 3) !== "nth",
                      Rn = ln.slice(-4) !== "last",
                      Ln = cn === "of-type";
                    return yn === 1 && wn === 0
                      ? function (bn) {
                          return !!bn.parentNode;
                        }
                      : function (bn, Xn, Fn) {
                          var zn,
                            Yn,
                            Vn,
                            st,
                            dt,
                            pt = Tn !== Rn ? "nextSibling" : "previousSibling",
                            vt = bn.parentNode,
                            At = Ln && bn.nodeName.toLowerCase(),
                            Mt = !Fn && !Ln,
                            et = !1;
                          if (vt) {
                            if (Tn) {
                              for (; pt; ) {
                                for (Vn = bn; (Vn = Vn[pt]); )
                                  if (Ln ? Wn(Vn, At) : Vn.nodeType === 1)
                                    return !1;
                                dt = pt = ln === "only" && !dt && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((dt = [Rn ? vt.firstChild : vt.lastChild]),
                              Rn && Mt)
                            ) {
                              for (
                                et =
                                  (st =
                                    (zn =
                                      (Yn = vt[kn] || (vt[kn] = {}))[ln] ||
                                      [])[0] === fn && zn[1]) && zn[2],
                                  Vn = st && vt.childNodes[st];
                                (Vn =
                                  (++st && Vn && Vn[pt]) ||
                                  (et = st = 0) ||
                                  dt.pop());

                              )
                                if (Vn.nodeType === 1 && ++et && Vn === bn) {
                                  Yn[ln] = [fn, st, et];
                                  break;
                                }
                            } else if (
                              (Mt &&
                                (et = st =
                                  (zn =
                                    (Yn = bn[kn] || (bn[kn] = {}))[ln] ||
                                    [])[0] === fn && zn[1]),
                              et === !1)
                            )
                              for (
                                ;
                                (Vn =
                                  (++st && Vn && Vn[pt]) ||
                                  (et = st = 0) ||
                                  dt.pop()) &&
                                !(
                                  (Ln ? Wn(Vn, At) : Vn.nodeType === 1) &&
                                  ++et &&
                                  (Mt &&
                                    ((Yn = Vn[kn] || (Vn[kn] = {}))[ln] = [
                                      fn,
                                      et,
                                    ]),
                                  Vn === bn)
                                );

                              );
                            return (
                              (et -= wn) === yn ||
                              (et % yn == 0 && 0 <= et / yn)
                            );
                          }
                        };
                  },
                  PSEUDO: function (ln, cn) {
                    var vn,
                      yn =
                        d.pseudos[ln] ||
                        d.setFilters[ln.toLowerCase()] ||
                        Nn.error("unsupported pseudo: " + ln);
                    return yn[kn]
                      ? yn(cn)
                      : 1 < yn.length
                      ? ((vn = [ln, ln, "", cn]),
                        d.setFilters.hasOwnProperty(ln.toLowerCase())
                          ? it(function (wn, Tn) {
                              for (
                                var Rn, Ln = yn(wn, cn), bn = Ln.length;
                                bn--;

                              )
                                wn[(Rn = tn.call(wn, Ln[bn]))] = !(Tn[Rn] =
                                  Ln[bn]);
                            })
                          : function (wn) {
                              return yn(wn, 0, vn);
                            })
                      : yn;
                  },
                },
                pseudos: {
                  not: it(function (ln) {
                    var cn = [],
                      vn = [],
                      yn = wr(ln.replace(Nt, "$1"));
                    return yn[kn]
                      ? it(function (wn, Tn, Rn, Ln) {
                          for (
                            var bn, Xn = yn(wn, null, Ln, []), Fn = wn.length;
                            Fn--;

                          )
                            (bn = Xn[Fn]) && (wn[Fn] = !(Tn[Fn] = bn));
                        })
                      : function (wn, Tn, Rn) {
                          return (
                            (cn[0] = wn),
                            yn(cn, null, Rn, vn),
                            (cn[0] = null),
                            !vn.pop()
                          );
                        };
                  }),
                  has: it(function (ln) {
                    return function (cn) {
                      return 0 < Nn(ln, cn).length;
                    };
                  }),
                  contains: it(function (ln) {
                    return (
                      (ln = ln.replace(ot, ht)),
                      function (cn) {
                        return -1 < (cn.textContent || _.text(cn)).indexOf(ln);
                      }
                    );
                  }),
                  lang: it(function (ln) {
                    return (
                      Vl.test(ln || "") || Nn.error("unsupported lang: " + ln),
                      (ln = ln.replace(ot, ht).toLowerCase()),
                      function (cn) {
                        var vn;
                        do
                          if (
                            (vn = on
                              ? cn.lang
                              : cn.getAttribute("xml:lang") ||
                                cn.getAttribute("lang"))
                          )
                            return (
                              (vn = vn.toLowerCase()) === ln ||
                              vn.indexOf(ln + "-") === 0
                            );
                        while ((cn = cn.parentNode) && cn.nodeType === 1);
                        return !1;
                      }
                    );
                  }),
                  target: function (ln) {
                    var cn = a.location && a.location.hash;
                    return cn && cn.slice(1) === ln.id;
                  },
                  root: function (ln) {
                    return ln === nn;
                  },
                  focus: function (ln) {
                    return (
                      ln ===
                        (function () {
                          try {
                            return _e.activeElement;
                          } catch {}
                        })() &&
                      _e.hasFocus() &&
                      !!(ln.type || ln.href || ~ln.tabIndex)
                    );
                  },
                  enabled: Jl(!1),
                  disabled: Jl(!0),
                  checked: function (ln) {
                    return (
                      (Wn(ln, "input") && !!ln.checked) ||
                      (Wn(ln, "option") && !!ln.selected)
                    );
                  },
                  selected: function (ln) {
                    return (
                      ln.parentNode && ln.parentNode.selectedIndex,
                      ln.selected === !0
                    );
                  },
                  empty: function (ln) {
                    for (ln = ln.firstChild; ln; ln = ln.nextSibling)
                      if (ln.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (ln) {
                    return !d.pseudos.empty(ln);
                  },
                  header: function (ln) {
                    return Ml.test(ln.nodeName);
                  },
                  input: function (ln) {
                    return Vt.test(ln.nodeName);
                  },
                  button: function (ln) {
                    return (
                      (Wn(ln, "input") && ln.type === "button") ||
                      Wn(ln, "button")
                    );
                  },
                  text: function (ln) {
                    var cn;
                    return (
                      Wn(ln, "input") &&
                      ln.type === "text" &&
                      ((cn = ln.getAttribute("type")) == null ||
                        cn.toLowerCase() === "text")
                    );
                  },
                  first: Gt(function () {
                    return [0];
                  }),
                  last: Gt(function (ln, cn) {
                    return [cn - 1];
                  }),
                  eq: Gt(function (ln, cn, vn) {
                    return [vn < 0 ? vn + cn : vn];
                  }),
                  even: Gt(function (ln, cn) {
                    for (var vn = 0; vn < cn; vn += 2) ln.push(vn);
                    return ln;
                  }),
                  odd: Gt(function (ln, cn) {
                    for (var vn = 1; vn < cn; vn += 2) ln.push(vn);
                    return ln;
                  }),
                  lt: Gt(function (ln, cn, vn) {
                    var yn;
                    for (yn = vn < 0 ? vn + cn : cn < vn ? cn : vn; 0 <= --yn; )
                      ln.push(yn);
                    return ln;
                  }),
                  gt: Gt(function (ln, cn, vn) {
                    for (var yn = vn < 0 ? vn + cn : vn; ++yn < cn; )
                      ln.push(yn);
                    return ln;
                  }),
                },
              }).pseudos.nth = d.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              d.pseudos[s] = Lt(s);
            for (s in { submit: !0, reset: !0 }) d.pseudos[s] = Sl(s);
            function $a() {}
            function Wl(ln, cn) {
              var vn,
                yn,
                wn,
                Tn,
                Rn,
                Ln,
                bn,
                Xn = qn[ln + " "];
              if (Xn) return cn ? 0 : Xn.slice(0);
              for (Rn = ln, Ln = [], bn = d.preFilter; Rn; ) {
                for (Tn in ((vn && !(yn = tt.exec(Rn))) ||
                  (yn && (Rn = Rn.slice(yn[0].length) || Rn),
                  Ln.push((wn = []))),
                (vn = !1),
                (yn = Ul.exec(Rn)) &&
                  ((vn = yn.shift()),
                  wn.push({ value: vn, type: yn[0].replace(Nt, " ") }),
                  (Rn = Rn.slice(vn.length))),
                d.filter))
                  !(yn = Ot[Tn].exec(Rn)) ||
                    (bn[Tn] && !(yn = bn[Tn](yn))) ||
                    ((vn = yn.shift()),
                    wn.push({ value: vn, type: Tn, matches: yn }),
                    (Rn = Rn.slice(vn.length)));
                if (!vn) break;
              }
              return cn ? Rn.length : Rn ? Nn.error(ln) : qn(ln, Ln).slice(0);
            }
            function Xl(ln) {
              for (var cn = 0, vn = ln.length, yn = ""; cn < vn; cn++)
                yn += ln[cn].value;
              return yn;
            }
            function $l(ln, cn, vn) {
              var yn = cn.dir,
                wn = cn.next,
                Tn = wn || yn,
                Rn = vn && Tn === "parentNode",
                Ln = En++;
              return cn.first
                ? function (bn, Xn, Fn) {
                    for (; (bn = bn[yn]); )
                      if (bn.nodeType === 1 || Rn) return ln(bn, Xn, Fn);
                    return !1;
                  }
                : function (bn, Xn, Fn) {
                    var zn,
                      Yn,
                      Vn = [fn, Ln];
                    if (Fn) {
                      for (; (bn = bn[yn]); )
                        if ((bn.nodeType === 1 || Rn) && ln(bn, Xn, Fn))
                          return !0;
                    } else
                      for (; (bn = bn[yn]); )
                        if (bn.nodeType === 1 || Rn)
                          if (
                            ((Yn = bn[kn] || (bn[kn] = {})), wn && Wn(bn, wn))
                          )
                            bn = bn[yn] || bn;
                          else {
                            if ((zn = Yn[Tn]) && zn[0] === fn && zn[1] === Ln)
                              return (Vn[2] = zn[2]);
                            if (((Yn[Tn] = Vn)[2] = ln(bn, Xn, Fn))) return !0;
                          }
                    return !1;
                  };
            }
            function Ar(ln) {
              return 1 < ln.length
                ? function (cn, vn, yn) {
                    for (var wn = ln.length; wn--; )
                      if (!ln[wn](cn, vn, yn)) return !1;
                    return !0;
                  }
                : ln[0];
            }
            function er(ln, cn, vn, yn, wn) {
              for (
                var Tn, Rn = [], Ln = 0, bn = ln.length, Xn = cn != null;
                Ln < bn;
                Ln++
              )
                (Tn = ln[Ln]) &&
                  ((vn && !vn(Tn, yn, wn)) || (Rn.push(Tn), Xn && cn.push(Ln)));
              return Rn;
            }
            function xr(ln, cn, vn, yn, wn, Tn) {
              return (
                yn && !yn[kn] && (yn = xr(yn)),
                wn && !wn[kn] && (wn = xr(wn, Tn)),
                it(function (Rn, Ln, bn, Xn) {
                  var Fn,
                    zn,
                    Yn,
                    Vn,
                    st = [],
                    dt = [],
                    pt = Ln.length,
                    vt =
                      Rn ||
                      (function (Mt, et, Yt) {
                        for (var St = 0, nr = et.length; St < nr; St++)
                          Nn(Mt, et[St], Yt);
                        return Yt;
                      })(cn || "*", bn.nodeType ? [bn] : bn, []),
                    At = !ln || (!Rn && cn) ? vt : er(vt, st, ln, bn, Xn);
                  if (
                    (vn
                      ? vn(
                          At,
                          (Vn = wn || (Rn ? ln : pt || yn) ? [] : Ln),
                          bn,
                          Xn
                        )
                      : (Vn = At),
                    yn)
                  )
                    for (
                      Fn = er(Vn, dt), yn(Fn, [], bn, Xn), zn = Fn.length;
                      zn--;

                    )
                      (Yn = Fn[zn]) && (Vn[dt[zn]] = !(At[dt[zn]] = Yn));
                  if (Rn) {
                    if (wn || ln) {
                      if (wn) {
                        for (Fn = [], zn = Vn.length; zn--; )
                          (Yn = Vn[zn]) && Fn.push((At[zn] = Yn));
                        wn(null, (Vn = []), Fn, Xn);
                      }
                      for (zn = Vn.length; zn--; )
                        (Yn = Vn[zn]) &&
                          -1 < (Fn = wn ? tn.call(Rn, Yn) : st[zn]) &&
                          (Rn[Fn] = !(Ln[Fn] = Yn));
                    }
                  } else (Vn = er(Vn === Ln ? Vn.splice(pt, Vn.length) : Vn)), wn ? wn(null, Ln, Vn, Xn) : _n.apply(Ln, Vn);
                })
              );
            }
            function kr(ln) {
              for (
                var cn,
                  vn,
                  yn,
                  wn = ln.length,
                  Tn = d.relative[ln[0].type],
                  Rn = Tn || d.relative[" "],
                  Ln = Tn ? 1 : 0,
                  bn = $l(
                    function (zn) {
                      return zn === cn;
                    },
                    Rn,
                    !0
                  ),
                  Xn = $l(
                    function (zn) {
                      return -1 < tn.call(cn, zn);
                    },
                    Rn,
                    !0
                  ),
                  Fn = [
                    function (zn, Yn, Vn) {
                      var st =
                        (!Tn && (Vn || Yn != g)) ||
                        ((cn = Yn).nodeType ? bn(zn, Yn, Vn) : Xn(zn, Yn, Vn));
                      return (cn = null), st;
                    },
                  ];
                Ln < wn;
                Ln++
              )
                if ((vn = d.relative[ln[Ln].type])) Fn = [$l(Ar(Fn), vn)];
                else {
                  if (
                    (vn = d.filter[ln[Ln].type].apply(null, ln[Ln].matches))[kn]
                  ) {
                    for (yn = ++Ln; yn < wn && !d.relative[ln[yn].type]; yn++);
                    return xr(
                      1 < Ln && Ar(Fn),
                      1 < Ln &&
                        Xl(
                          ln.slice(0, Ln - 1).concat({
                            value: ln[Ln - 2].type === " " ? "*" : "",
                          })
                        ).replace(Nt, "$1"),
                      vn,
                      Ln < yn && kr(ln.slice(Ln, yn)),
                      yn < wn && kr((ln = ln.slice(yn))),
                      yn < wn && Xl(ln)
                    );
                  }
                  Fn.push(vn);
                }
              return Ar(Fn);
            }
            function wr(ln, cn) {
              var vn,
                yn,
                wn,
                Tn,
                Rn,
                Ln,
                bn = [],
                Xn = [],
                Fn = Kn[ln + " "];
              if (!Fn) {
                for (cn || (cn = Wl(ln)), vn = cn.length; vn--; )
                  (Fn = kr(cn[vn]))[kn] ? bn.push(Fn) : Xn.push(Fn);
                (Fn = Kn(
                  ln,
                  ((yn = Xn),
                  (Tn = 0 < (wn = bn).length),
                  (Rn = 0 < yn.length),
                  (Ln = function (zn, Yn, Vn, st, dt) {
                    var pt,
                      vt,
                      At,
                      Mt = 0,
                      et = "0",
                      Yt = zn && [],
                      St = [],
                      nr = g,
                      eo = zn || (Rn && d.find.TAG("*", dt)),
                      no = (fn += nr == null ? 1 : Math.random() || 0.1),
                      Oo = eo.length;
                    for (
                      dt && (g = Yn == _e || Yn || dt);
                      et !== Oo && (pt = eo[et]) != null;
                      et++
                    ) {
                      if (Rn && pt) {
                        for (
                          vt = 0,
                            Yn ||
                              pt.ownerDocument == _e ||
                              (qt(pt), (Vn = !on));
                          (At = yn[vt++]);

                        )
                          if (At(pt, Yn || _e, Vn)) {
                            _n.call(st, pt);
                            break;
                          }
                        dt && (fn = no);
                      }
                      Tn && ((pt = !At && pt) && Mt--, zn && Yt.push(pt));
                    }
                    if (((Mt += et), Tn && et !== Mt)) {
                      for (vt = 0; (At = wn[vt++]); ) At(Yt, St, Yn, Vn);
                      if (zn) {
                        if (0 < Mt)
                          for (; et--; )
                            Yt[et] || St[et] || (St[et] = Zn.call(st));
                        St = er(St);
                      }
                      _n.apply(st, St),
                        dt &&
                          !zn &&
                          0 < St.length &&
                          1 < Mt + wn.length &&
                          _.uniqueSort(st);
                    }
                    return dt && ((fn = no), (g = nr)), Yt;
                  }),
                  Tn ? it(Ln) : Ln)
                )).selector = ln;
              }
              return Fn;
            }
            function _i(ln, cn, vn, yn) {
              var wn,
                Tn,
                Rn,
                Ln,
                bn,
                Xn = typeof ln == "function" && ln,
                Fn = !yn && Wl((ln = Xn.selector || ln));
              if (((vn = vn || []), Fn.length === 1)) {
                if (
                  2 < (Tn = Fn[0] = Fn[0].slice(0)).length &&
                  (Rn = Tn[0]).type === "ID" &&
                  cn.nodeType === 9 &&
                  on &&
                  d.relative[Tn[1].type]
                ) {
                  if (
                    !(cn = (d.find.ID(Rn.matches[0].replace(ot, ht), cn) ||
                      [])[0])
                  )
                    return vn;
                  Xn && (cn = cn.parentNode),
                    (ln = ln.slice(Tn.shift().value.length));
                }
                for (
                  wn = Ot.needsContext.test(ln) ? 0 : Tn.length;
                  wn-- && ((Rn = Tn[wn]), !d.relative[(Ln = Rn.type)]);

                )
                  if (
                    (bn = d.find[Ln]) &&
                    (yn = bn(
                      Rn.matches[0].replace(ot, ht),
                      (ct.test(Tn[0].type) && yr(cn.parentNode)) || cn
                    ))
                  ) {
                    if ((Tn.splice(wn, 1), !(ln = yn.length && Xl(Tn))))
                      return _n.apply(vn, yn), vn;
                    break;
                  }
              }
              return (
                (Xn || wr(ln, Fn))(
                  yn,
                  cn,
                  !on,
                  vn,
                  !cn || (ct.test(ln) && yr(cn.parentNode)) || cn
                ),
                vn
              );
            }
            ($a.prototype = d.filters = d.pseudos),
              (d.setFilters = new $a()),
              (An.sortStable = kn.split("").sort(ut).join("") === kn),
              qt(),
              (An.sortDetached = $n(function (ln) {
                return (
                  1 & ln.compareDocumentPosition(_e.createElement("fieldset"))
                );
              })),
              (_.find = Nn),
              (_.expr[":"] = _.expr.pseudos),
              (_.unique = _.uniqueSort),
              (Nn.compile = wr),
              (Nn.select = _i),
              (Nn.setDocument = qt),
              (Nn.tokenize = Wl),
              (Nn.escape = _.escapeSelector),
              (Nn.getText = _.text),
              (Nn.isXML = _.isXMLDoc),
              (Nn.selectors = _.expr),
              (Nn.support = _.support),
              (Nn.uniqueSort = _.uniqueSort);
          })();
          var Un = function (s, d, g) {
              for (
                var j = [], $ = g !== void 0;
                (s = s[d]) && s.nodeType !== 9;

              )
                if (s.nodeType === 1) {
                  if ($ && _(s).is(g)) break;
                  j.push(s);
                }
              return j;
            },
            Hn = function (s, d) {
              for (var g = []; s; s = s.nextSibling)
                s.nodeType === 1 && s !== d && g.push(s);
              return g;
            },
            nt = _.expr.match.needsContext,
            lt =
              /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function Ut(s, d, g) {
            return xn(d)
              ? _.grep(s, function (j, $) {
                  return !!d.call(j, $, j) !== g;
                })
              : d.nodeType
              ? _.grep(s, function (j) {
                  return (j === d) !== g;
                })
              : typeof d != "string"
              ? _.grep(s, function (j) {
                  return -1 < tn.call(d, j) !== g;
                })
              : _.filter(d, s, g);
          }
          (_.filter = function (s, d, g) {
            var j = d[0];
            return (
              g && (s = ":not(" + s + ")"),
              d.length === 1 && j.nodeType === 1
                ? _.find.matchesSelector(j, s)
                  ? [j]
                  : []
                : _.find.matches(
                    s,
                    _.grep(d, function ($) {
                      return $.nodeType === 1;
                    })
                  )
            );
          }),
            _.fn.extend({
              find: function (s) {
                var d,
                  g,
                  j = this.length,
                  $ = this;
                if (typeof s != "string")
                  return this.pushStack(
                    _(s).filter(function () {
                      for (d = 0; d < j; d++)
                        if (_.contains($[d], this)) return !0;
                    })
                  );
                for (g = this.pushStack([]), d = 0; d < j; d++)
                  _.find(s, $[d], g);
                return 1 < j ? _.uniqueSort(g) : g;
              },
              filter: function (s) {
                return this.pushStack(Ut(this, s || [], !1));
              },
              not: function (s) {
                return this.pushStack(Ut(this, s || [], !0));
              },
              is: function (s) {
                return !!Ut(
                  this,
                  typeof s == "string" && nt.test(s) ? _(s) : s || [],
                  !1
                ).length;
              },
            });
          var Ct,
            Dl = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((_.fn.init = function (s, d, g) {
            var j, $;
            if (!s) return this;
            if (((g = g || Ct), typeof s == "string")) {
              if (
                !(j =
                  s[0] === "<" && s[s.length - 1] === ">" && 3 <= s.length
                    ? [null, s, null]
                    : Dl.exec(s)) ||
                (!j[1] && d)
              )
                return !d || d.jquery
                  ? (d || g).find(s)
                  : this.constructor(d).find(s);
              if (j[1]) {
                if (
                  ((d = d instanceof _ ? d[0] : d),
                  _.merge(
                    this,
                    _.parseHTML(
                      j[1],
                      d && d.nodeType ? d.ownerDocument || d : an,
                      !0
                    )
                  ),
                  lt.test(j[1]) && _.isPlainObject(d))
                )
                  for (j in d) xn(this[j]) ? this[j](d[j]) : this.attr(j, d[j]);
                return this;
              }
              return (
                ($ = an.getElementById(j[2])) &&
                  ((this[0] = $), (this.length = 1)),
                this
              );
            }
            return s.nodeType
              ? ((this[0] = s), (this.length = 1), this)
              : xn(s)
              ? g.ready !== void 0
                ? g.ready(s)
                : s(_)
              : _.makeArray(s, this);
          }).prototype = _.fn),
            (Ct = _(an));
          var It = /^(?:parents|prev(?:Until|All))/,
            Jt = { children: !0, contents: !0, next: !0, prev: !0 };
          function Er(s, d) {
            for (; (s = s[d]) && s.nodeType !== 1; );
            return s;
          }
          _.fn.extend({
            has: function (s) {
              var d = _(s, this),
                g = d.length;
              return this.filter(function () {
                for (var j = 0; j < g; j++)
                  if (_.contains(this, d[j])) return !0;
              });
            },
            closest: function (s, d) {
              var g,
                j = 0,
                $ = this.length,
                _e = [],
                nn = typeof s != "string" && _(s);
              if (!nt.test(s)) {
                for (; j < $; j++)
                  for (g = this[j]; g && g !== d; g = g.parentNode)
                    if (
                      g.nodeType < 11 &&
                      (nn
                        ? -1 < nn.index(g)
                        : g.nodeType === 1 && _.find.matchesSelector(g, s))
                    ) {
                      _e.push(g);
                      break;
                    }
              }
              return this.pushStack(1 < _e.length ? _.uniqueSort(_e) : _e);
            },
            index: function (s) {
              return s
                ? typeof s == "string"
                  ? tn.call(_(s), this[0])
                  : tn.call(this, s.jquery ? s[0] : s)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (s, d) {
              return this.pushStack(_.uniqueSort(_.merge(this.get(), _(s, d))));
            },
            addBack: function (s) {
              return this.add(
                s == null ? this.prevObject : this.prevObject.filter(s)
              );
            },
          }),
            _.each(
              {
                parent: function (s) {
                  var d = s.parentNode;
                  return d && d.nodeType !== 11 ? d : null;
                },
                parents: function (s) {
                  return Un(s, "parentNode");
                },
                parentsUntil: function (s, d, g) {
                  return Un(s, "parentNode", g);
                },
                next: function (s) {
                  return Er(s, "nextSibling");
                },
                prev: function (s) {
                  return Er(s, "previousSibling");
                },
                nextAll: function (s) {
                  return Un(s, "nextSibling");
                },
                prevAll: function (s) {
                  return Un(s, "previousSibling");
                },
                nextUntil: function (s, d, g) {
                  return Un(s, "nextSibling", g);
                },
                prevUntil: function (s, d, g) {
                  return Un(s, "previousSibling", g);
                },
                siblings: function (s) {
                  return Hn((s.parentNode || {}).firstChild, s);
                },
                children: function (s) {
                  return Hn(s.firstChild);
                },
                contents: function (s) {
                  return s.contentDocument != null && c(s.contentDocument)
                    ? s.contentDocument
                    : (Wn(s, "template") && (s = s.content || s),
                      _.merge([], s.childNodes));
                },
              },
              function (s, d) {
                _.fn[s] = function (g, j) {
                  var $ = _.map(this, d, g);
                  return (
                    s.slice(-5) !== "Until" && (j = g),
                    j && typeof j == "string" && ($ = _.filter(j, $)),
                    1 < this.length &&
                      (Jt[s] || _.uniqueSort($), It.test(s) && $.reverse()),
                    this.pushStack($)
                  );
                };
              }
            );
          var jt = /[^\x20\t\r\n\f]+/g;
          function Xt(s) {
            return s;
          }
          function Kl(s) {
            throw s;
          }
          function Mr(s, d, g, j) {
            var $;
            try {
              s && xn(($ = s.promise))
                ? $.call(s).done(d).fail(g)
                : s && xn(($ = s.then))
                ? $.call(s, d, g)
                : d.apply(void 0, [s].slice(j));
            } catch (_e) {
              g.apply(void 0, [_e]);
            }
          }
          (_.Callbacks = function (s) {
            var d, g;
            s =
              typeof s == "string"
                ? ((d = s),
                  (g = {}),
                  _.each(d.match(jt) || [], function (fn, En) {
                    g[En] = !0;
                  }),
                  g)
                : _.extend({}, s);
            var j,
              $,
              _e,
              nn,
              on = [],
              rn = [],
              pn = -1,
              _n = function () {
                for (nn = nn || s.once, _e = j = !0; rn.length; pn = -1)
                  for ($ = rn.shift(); ++pn < on.length; )
                    on[pn].apply($[0], $[1]) === !1 &&
                      s.stopOnFalse &&
                      ((pn = on.length), ($ = !1));
                s.memory || ($ = !1), (j = !1), nn && (on = $ ? [] : "");
              },
              kn = {
                add: function () {
                  return (
                    on &&
                      ($ && !j && ((pn = on.length - 1), rn.push($)),
                      (function fn(En) {
                        _.each(En, function (Pn, qn) {
                          xn(qn)
                            ? (s.unique && kn.has(qn)) || on.push(qn)
                            : qn && qn.length && Mn(qn) !== "string" && fn(qn);
                        });
                      })(arguments),
                      $ && !j && _n()),
                    this
                  );
                },
                remove: function () {
                  return (
                    _.each(arguments, function (fn, En) {
                      for (var Pn; -1 < (Pn = _.inArray(En, on, Pn)); )
                        on.splice(Pn, 1), Pn <= pn && pn--;
                    }),
                    this
                  );
                },
                has: function (fn) {
                  return fn ? -1 < _.inArray(fn, on) : 0 < on.length;
                },
                empty: function () {
                  return on && (on = []), this;
                },
                disable: function () {
                  return (nn = rn = []), (on = $ = ""), this;
                },
                disabled: function () {
                  return !on;
                },
                lock: function () {
                  return (nn = rn = []), $ || j || (on = $ = ""), this;
                },
                locked: function () {
                  return !!nn;
                },
                fireWith: function (fn, En) {
                  return (
                    nn ||
                      ((En = [fn, (En = En || []).slice ? En.slice() : En]),
                      rn.push(En),
                      j || _n()),
                    this
                  );
                },
                fire: function () {
                  return kn.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!_e;
                },
              };
            return kn;
          }),
            _.extend({
              Deferred: function (s) {
                var d = [
                    [
                      "notify",
                      "progress",
                      _.Callbacks("memory"),
                      _.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      _.Callbacks("once memory"),
                      _.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      _.Callbacks("once memory"),
                      _.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  g = "pending",
                  j = {
                    state: function () {
                      return g;
                    },
                    always: function () {
                      return $.done(arguments).fail(arguments), this;
                    },
                    catch: function (_e) {
                      return j.then(null, _e);
                    },
                    pipe: function () {
                      var _e = arguments;
                      return _.Deferred(function (nn) {
                        _.each(d, function (on, rn) {
                          var pn = xn(_e[rn[4]]) && _e[rn[4]];
                          $[rn[1]](function () {
                            var _n = pn && pn.apply(this, arguments);
                            _n && xn(_n.promise)
                              ? _n
                                  .promise()
                                  .progress(nn.notify)
                                  .done(nn.resolve)
                                  .fail(nn.reject)
                              : nn[rn[0] + "With"](this, pn ? [_n] : arguments);
                          });
                        }),
                          (_e = null);
                      }).promise();
                    },
                    then: function (_e, nn, on) {
                      var rn = 0;
                      function pn(_n, kn, fn, En) {
                        return function () {
                          var Pn = this,
                            qn = arguments,
                            Kn = function () {
                              var ut, Dt;
                              if (!(_n < rn)) {
                                if ((ut = fn.apply(Pn, qn)) === kn.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution"
                                  );
                                (Dt =
                                  ut &&
                                  (typeof ut == "object" ||
                                    typeof ut == "function") &&
                                  ut.then),
                                  xn(Dt)
                                    ? En
                                      ? Dt.call(
                                          ut,
                                          pn(rn, kn, Xt, En),
                                          pn(rn, kn, Kl, En)
                                        )
                                      : (rn++,
                                        Dt.call(
                                          ut,
                                          pn(rn, kn, Xt, En),
                                          pn(rn, kn, Kl, En),
                                          pn(rn, kn, Xt, kn.notifyWith)
                                        ))
                                    : (fn !== Xt &&
                                        ((Pn = void 0), (qn = [ut])),
                                      (En || kn.resolveWith)(Pn, qn));
                              }
                            },
                            rt = En
                              ? Kn
                              : function () {
                                  try {
                                    Kn();
                                  } catch (ut) {
                                    _.Deferred.exceptionHook &&
                                      _.Deferred.exceptionHook(ut, rt.error),
                                      rn <= _n + 1 &&
                                        (fn !== Kl &&
                                          ((Pn = void 0), (qn = [ut])),
                                        kn.rejectWith(Pn, qn));
                                  }
                                };
                          _n
                            ? rt()
                            : (_.Deferred.getErrorHook
                                ? (rt.error = _.Deferred.getErrorHook())
                                : _.Deferred.getStackHook &&
                                  (rt.error = _.Deferred.getStackHook()),
                              a.setTimeout(rt));
                        };
                      }
                      return _.Deferred(function (_n) {
                        d[0][3].add(pn(0, _n, xn(on) ? on : Xt, _n.notifyWith)),
                          d[1][3].add(pn(0, _n, xn(_e) ? _e : Xt)),
                          d[2][3].add(pn(0, _n, xn(nn) ? nn : Kl));
                      }).promise();
                    },
                    promise: function (_e) {
                      return _e != null ? _.extend(_e, j) : j;
                    },
                  },
                  $ = {};
                return (
                  _.each(d, function (_e, nn) {
                    var on = nn[2],
                      rn = nn[5];
                    (j[nn[1]] = on.add),
                      rn &&
                        on.add(
                          function () {
                            g = rn;
                          },
                          d[3 - _e][2].disable,
                          d[3 - _e][3].disable,
                          d[0][2].lock,
                          d[0][3].lock
                        ),
                      on.add(nn[3].fire),
                      ($[nn[0]] = function () {
                        return (
                          $[nn[0] + "With"](
                            this === $ ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      ($[nn[0] + "With"] = on.fireWith);
                  }),
                  j.promise($),
                  s && s.call($, $),
                  $
                );
              },
              when: function (s) {
                var d = arguments.length,
                  g = d,
                  j = Array(g),
                  $ = h.call(arguments),
                  _e = _.Deferred(),
                  nn = function (on) {
                    return function (rn) {
                      (j[on] = this),
                        ($[on] = 1 < arguments.length ? h.call(arguments) : rn),
                        --d || _e.resolveWith(j, $);
                    };
                  };
                if (
                  d <= 1 &&
                  (Mr(s, _e.done(nn(g)).resolve, _e.reject, !d),
                  _e.state() === "pending" || xn($[g] && $[g].then))
                )
                  return _e.then();
                for (; g--; ) Mr($[g], nn(g), _e.reject);
                return _e.promise();
              },
            });
          var to = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (_.Deferred.exceptionHook = function (s, d) {
            a.console &&
              a.console.warn &&
              s &&
              to.test(s.name) &&
              a.console.warn(
                "jQuery.Deferred exception: " + s.message,
                s.stack,
                d
              );
          }),
            (_.readyException = function (s) {
              a.setTimeout(function () {
                throw s;
              });
            });
          var lr = _.Deferred();
          function Fl() {
            an.removeEventListener("DOMContentLoaded", Fl),
              a.removeEventListener("load", Fl),
              _.ready();
          }
          (_.fn.ready = function (s) {
            return (
              lr.then(s).catch(function (d) {
                _.readyException(d);
              }),
              this
            );
          }),
            _.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (s) {
                (s === !0 ? --_.readyWait : _.isReady) ||
                  ((_.isReady = !0) !== s && 0 < --_.readyWait) ||
                  lr.resolveWith(an, [_]);
              },
            }),
            (_.ready.then = lr.then),
            an.readyState === "complete" ||
            (an.readyState !== "loading" && !an.documentElement.doScroll)
              ? a.setTimeout(_.ready)
              : (an.addEventListener("DOMContentLoaded", Fl),
                a.addEventListener("load", Fl));
          var Pt = function (s, d, g, j, $, _e, nn) {
              var on = 0,
                rn = s.length,
                pn = g == null;
              if (Mn(g) === "object")
                for (on in (($ = !0), g)) Pt(s, d, on, g[on], !0, _e, nn);
              else if (
                j !== void 0 &&
                (($ = !0),
                xn(j) || (nn = !0),
                pn &&
                  (nn
                    ? (d.call(s, j), (d = null))
                    : ((pn = d),
                      (d = function (_n, kn, fn) {
                        return pn.call(_(_n), fn);
                      }))),
                d)
              )
                for (; on < rn; on++)
                  d(s[on], g, nn ? j : j.call(s[on], on, d(s[on], g)));
              return $ ? s : pn ? d.call(s) : rn ? d(s[0], g) : _e;
            },
            lo = /^-ms-/,
            ro = /-([a-z])/g;
          function ao(s, d) {
            return d.toUpperCase();
          }
          function bt(s) {
            return s.replace(lo, "ms-").replace(ro, ao);
          }
          var Tl = function (s) {
            return s.nodeType === 1 || s.nodeType === 9 || !+s.nodeType;
          };
          function Rl() {
            this.expando = _.expando + Rl.uid++;
          }
          (Rl.uid = 1),
            (Rl.prototype = {
              cache: function (s) {
                var d = s[this.expando];
                return (
                  d ||
                    ((d = {}),
                    Tl(s) &&
                      (s.nodeType
                        ? (s[this.expando] = d)
                        : Object.defineProperty(s, this.expando, {
                            value: d,
                            configurable: !0,
                          }))),
                  d
                );
              },
              set: function (s, d, g) {
                var j,
                  $ = this.cache(s);
                if (typeof d == "string") $[bt(d)] = g;
                else for (j in d) $[bt(j)] = d[j];
                return $;
              },
              get: function (s, d) {
                return d === void 0
                  ? this.cache(s)
                  : s[this.expando] && s[this.expando][bt(d)];
              },
              access: function (s, d, g) {
                return d === void 0 ||
                  (d && typeof d == "string" && g === void 0)
                  ? this.get(s, d)
                  : (this.set(s, d, g), g !== void 0 ? g : d);
              },
              remove: function (s, d) {
                var g,
                  j = s[this.expando];
                if (j !== void 0) {
                  if (d !== void 0)
                    for (
                      g = (d = Array.isArray(d)
                        ? d.map(bt)
                        : ((d = bt(d)) in j)
                        ? [d]
                        : d.match(jt) || []).length;
                      g--;

                    )
                      delete j[d[g]];
                  (d === void 0 || _.isEmptyObject(j)) &&
                    (s.nodeType
                      ? (s[this.expando] = void 0)
                      : delete s[this.expando]);
                }
              },
              hasData: function (s) {
                var d = s[this.expando];
                return d !== void 0 && !_.isEmptyObject(d);
              },
            });
          var On = new Rl(),
            mt = new Rl(),
            io = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            oo = /[A-Z]/g;
          function Sr(s, d, g) {
            var j, $;
            if (g === void 0 && s.nodeType === 1)
              if (
                ((j = "data-" + d.replace(oo, "-$&").toLowerCase()),
                typeof (g = s.getAttribute(j)) == "string")
              ) {
                try {
                  g =
                    ($ = g) === "true" ||
                    ($ !== "false" &&
                      ($ === "null"
                        ? null
                        : $ === +$ + ""
                        ? +$
                        : io.test($)
                        ? JSON.parse($)
                        : $));
                } catch {}
                mt.set(s, d, g);
              } else g = void 0;
            return g;
          }
          _.extend({
            hasData: function (s) {
              return mt.hasData(s) || On.hasData(s);
            },
            data: function (s, d, g) {
              return mt.access(s, d, g);
            },
            removeData: function (s, d) {
              mt.remove(s, d);
            },
            _data: function (s, d, g) {
              return On.access(s, d, g);
            },
            _removeData: function (s, d) {
              On.remove(s, d);
            },
          }),
            _.fn.extend({
              data: function (s, d) {
                var g,
                  j,
                  $,
                  _e = this[0],
                  nn = _e && _e.attributes;
                if (s === void 0) {
                  if (
                    this.length &&
                    (($ = mt.get(_e)),
                    _e.nodeType === 1 && !On.get(_e, "hasDataAttrs"))
                  ) {
                    for (g = nn.length; g--; )
                      nn[g] &&
                        (j = nn[g].name).indexOf("data-") === 0 &&
                        ((j = bt(j.slice(5))), Sr(_e, j, $[j]));
                    On.set(_e, "hasDataAttrs", !0);
                  }
                  return $;
                }
                return typeof s == "object"
                  ? this.each(function () {
                      mt.set(this, s);
                    })
                  : Pt(
                      this,
                      function (on) {
                        var rn;
                        if (_e && on === void 0)
                          return (rn = mt.get(_e, s)) !== void 0 ||
                            (rn = Sr(_e, s)) !== void 0
                            ? rn
                            : void 0;
                        this.each(function () {
                          mt.set(this, s, on);
                        });
                      },
                      null,
                      d,
                      1 < arguments.length,
                      null,
                      !0
                    );
              },
              removeData: function (s) {
                return this.each(function () {
                  mt.remove(this, s);
                });
              },
            }),
            _.extend({
              queue: function (s, d, g) {
                var j;
                if (s)
                  return (
                    (d = (d || "fx") + "queue"),
                    (j = On.get(s, d)),
                    g &&
                      (!j || Array.isArray(g)
                        ? (j = On.access(s, d, _.makeArray(g)))
                        : j.push(g)),
                    j || []
                  );
              },
              dequeue: function (s, d) {
                d = d || "fx";
                var g = _.queue(s, d),
                  j = g.length,
                  $ = g.shift(),
                  _e = _._queueHooks(s, d);
                $ === "inprogress" && (($ = g.shift()), j--),
                  $ &&
                    (d === "fx" && g.unshift("inprogress"),
                    delete _e.stop,
                    $.call(
                      s,
                      function () {
                        _.dequeue(s, d);
                      },
                      _e
                    )),
                  !j && _e && _e.empty.fire();
              },
              _queueHooks: function (s, d) {
                var g = d + "queueHooks";
                return (
                  On.get(s, g) ||
                  On.access(s, g, {
                    empty: _.Callbacks("once memory").add(function () {
                      On.remove(s, [d + "queue", g]);
                    }),
                  })
                );
              },
            }),
            _.fn.extend({
              queue: function (s, d) {
                var g = 2;
                return (
                  typeof s != "string" && ((d = s), (s = "fx"), g--),
                  arguments.length < g
                    ? _.queue(this[0], s)
                    : d === void 0
                    ? this
                    : this.each(function () {
                        var j = _.queue(this, s, d);
                        _._queueHooks(this, s),
                          s === "fx" &&
                            j[0] !== "inprogress" &&
                            _.dequeue(this, s);
                      })
                );
              },
              dequeue: function (s) {
                return this.each(function () {
                  _.dequeue(this, s);
                });
              },
              clearQueue: function (s) {
                return this.queue(s || "fx", []);
              },
              promise: function (s, d) {
                var g,
                  j = 1,
                  $ = _.Deferred(),
                  _e = this,
                  nn = this.length,
                  on = function () {
                    --j || $.resolveWith(_e, [_e]);
                  };
                for (
                  typeof s != "string" && ((d = s), (s = void 0)),
                    s = s || "fx";
                  nn--;

                )
                  (g = On.get(_e[nn], s + "queueHooks")) &&
                    g.empty &&
                    (j++, g.empty.add(on));
                return on(), $.promise(d);
              },
            });
          var Cr = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Ll = new RegExp("^(?:([+-])=|)(" + Cr + ")([a-z%]*)$", "i"),
            Bt = ["Top", "Right", "Bottom", "Left"],
            Ft = an.documentElement,
            $t = function (s) {
              return _.contains(s.ownerDocument, s);
            },
            so = { composed: !0 };
          Ft.getRootNode &&
            ($t = function (s) {
              return (
                _.contains(s.ownerDocument, s) ||
                s.getRootNode(so) === s.ownerDocument
              );
            });
          var zl = function (s, d) {
            return (
              (s = d || s).style.display === "none" ||
              (s.style.display === "" &&
                $t(s) &&
                _.css(s, "display") === "none")
            );
          };
          function jr(s, d, g, j) {
            var $,
              _e,
              nn = 20,
              on = j
                ? function () {
                    return j.cur();
                  }
                : function () {
                    return _.css(s, d, "");
                  },
              rn = on(),
              pn = (g && g[3]) || (_.cssNumber[d] ? "" : "px"),
              _n =
                s.nodeType &&
                (_.cssNumber[d] || (pn !== "px" && +rn)) &&
                Ll.exec(_.css(s, d));
            if (_n && _n[3] !== pn) {
              for (rn /= 2, pn = pn || _n[3], _n = +rn || 1; nn--; )
                _.style(s, d, _n + pn),
                  (1 - _e) * (1 - (_e = on() / rn || 0.5)) <= 0 && (nn = 0),
                  (_n /= _e);
              (_n *= 2), _.style(s, d, _n + pn), (g = g || []);
            }
            return (
              g &&
                ((_n = +_n || +rn || 0),
                ($ = g[1] ? _n + (g[1] + 1) * g[2] : +g[2]),
                j && ((j.unit = pn), (j.start = _n), (j.end = $))),
              $
            );
          }
          var br = {};
          function _l(s, d) {
            for (
              var g, j, $, _e, nn, on, rn, pn = [], _n = 0, kn = s.length;
              _n < kn;
              _n++
            )
              (j = s[_n]).style &&
                ((g = j.style.display),
                d
                  ? (g === "none" &&
                      ((pn[_n] = On.get(j, "display") || null),
                      pn[_n] || (j.style.display = "")),
                    j.style.display === "" &&
                      zl(j) &&
                      (pn[_n] =
                        ((rn = nn = _e = void 0),
                        (nn = ($ = j).ownerDocument),
                        (on = $.nodeName),
                        (rn = br[on]) ||
                          ((_e = nn.body.appendChild(nn.createElement(on))),
                          (rn = _.css(_e, "display")),
                          _e.parentNode.removeChild(_e),
                          rn === "none" && (rn = "block"),
                          (br[on] = rn)))))
                  : g !== "none" &&
                    ((pn[_n] = "none"), On.set(j, "display", g)));
            for (_n = 0; _n < kn; _n++)
              pn[_n] != null && (s[_n].style.display = pn[_n]);
            return s;
          }
          _.fn.extend({
            show: function () {
              return _l(this, !0);
            },
            hide: function () {
              return _l(this);
            },
            toggle: function (s) {
              return typeof s == "boolean"
                ? s
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    zl(this) ? _(this).show() : _(this).hide();
                  });
            },
          });
          var zt,
            Hl,
            Il = /^(?:checkbox|radio)$/i,
            Dr = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            Tr = /^$|^module$|\/(?:java|ecma)script/i;
          (zt = an
            .createDocumentFragment()
            .appendChild(an.createElement("div"))),
            (Hl = an.createElement("input")).setAttribute("type", "radio"),
            Hl.setAttribute("checked", "checked"),
            Hl.setAttribute("name", "t"),
            zt.appendChild(Hl),
            (An.checkClone = zt.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (zt.innerHTML = "<textarea>x</textarea>"),
            (An.noCloneChecked = !!zt.cloneNode(!0).lastChild.defaultValue),
            (zt.innerHTML = "<option></option>"),
            (An.option = !!zt.lastChild);
          var xt = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function gt(s, d) {
            var g;
            return (
              (g =
                typeof s.getElementsByTagName < "u"
                  ? s.getElementsByTagName(d || "*")
                  : typeof s.querySelectorAll < "u"
                  ? s.querySelectorAll(d || "*")
                  : []),
              d === void 0 || (d && Wn(s, d)) ? _.merge([s], g) : g
            );
          }
          function rr(s, d) {
            for (var g = 0, j = s.length; g < j; g++)
              On.set(s[g], "globalEval", !d || On.get(d[g], "globalEval"));
          }
          (xt.tbody = xt.tfoot = xt.colgroup = xt.caption = xt.thead),
            (xt.th = xt.td),
            An.option ||
              (xt.optgroup = xt.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var uo = /<|&#?\w+;/;
          function Rr(s, d, g, j, $) {
            for (
              var _e,
                nn,
                on,
                rn,
                pn,
                _n,
                kn = d.createDocumentFragment(),
                fn = [],
                En = 0,
                Pn = s.length;
              En < Pn;
              En++
            )
              if ((_e = s[En]) || _e === 0)
                if (Mn(_e) === "object") _.merge(fn, _e.nodeType ? [_e] : _e);
                else if (uo.test(_e)) {
                  for (
                    nn = nn || kn.appendChild(d.createElement("div")),
                      on = (Dr.exec(_e) || ["", ""])[1].toLowerCase(),
                      rn = xt[on] || xt._default,
                      nn.innerHTML = rn[1] + _.htmlPrefilter(_e) + rn[2],
                      _n = rn[0];
                    _n--;

                  )
                    nn = nn.lastChild;
                  _.merge(fn, nn.childNodes),
                    ((nn = kn.firstChild).textContent = "");
                } else fn.push(d.createTextNode(_e));
            for (kn.textContent = "", En = 0; (_e = fn[En++]); )
              if (j && -1 < _.inArray(_e, j)) $ && $.push(_e);
              else if (
                ((pn = $t(_e)),
                (nn = gt(kn.appendChild(_e), "script")),
                pn && rr(nn),
                g)
              )
                for (_n = 0; (_e = nn[_n++]); )
                  Tr.test(_e.type || "") && g.push(_e);
            return kn;
          }
          var Lr = /^([^.]*)(?:\.(.+)|)/;
          function yl() {
            return !0;
          }
          function Al() {
            return !1;
          }
          function ar(s, d, g, j, $, _e) {
            var nn, on;
            if (typeof d == "object") {
              for (on in (typeof g != "string" && ((j = j || g), (g = void 0)),
              d))
                ar(s, on, g, j, d[on], _e);
              return s;
            }
            if (
              (j == null && $ == null
                ? (($ = g), (j = g = void 0))
                : $ == null &&
                  (typeof g == "string"
                    ? (($ = j), (j = void 0))
                    : (($ = j), (j = g), (g = void 0))),
              $ === !1)
            )
              $ = Al;
            else if (!$) return s;
            return (
              _e === 1 &&
                ((nn = $),
                (($ = function (rn) {
                  return _().off(rn), nn.apply(this, arguments);
                }).guid = nn.guid || (nn.guid = _.guid++))),
              s.each(function () {
                _.event.add(this, d, $, j, g);
              })
            );
          }
          function Zl(s, d, g) {
            g
              ? (On.set(s, d, !1),
                _.event.add(s, d, {
                  namespace: !1,
                  handler: function (j) {
                    var $,
                      _e = On.get(this, d);
                    if (1 & j.isTrigger && this[d]) {
                      if (_e)
                        (_.event.special[d] || {}).delegateType &&
                          j.stopPropagation();
                      else if (
                        ((_e = h.call(arguments)),
                        On.set(this, d, _e),
                        this[d](),
                        ($ = On.get(this, d)),
                        On.set(this, d, !1),
                        _e !== $)
                      )
                        return (
                          j.stopImmediatePropagation(), j.preventDefault(), $
                        );
                    } else
                      _e &&
                        (On.set(
                          this,
                          d,
                          _.event.trigger(_e[0], _e.slice(1), this)
                        ),
                        j.stopPropagation(),
                        (j.isImmediatePropagationStopped = yl));
                  },
                }))
              : On.get(s, d) === void 0 && _.event.add(s, d, yl);
          }
          (_.event = {
            global: {},
            add: function (s, d, g, j, $) {
              var _e,
                nn,
                on,
                rn,
                pn,
                _n,
                kn,
                fn,
                En,
                Pn,
                qn,
                Kn = On.get(s);
              if (Tl(s))
                for (
                  g.handler && ((g = (_e = g).handler), ($ = _e.selector)),
                    $ && _.find.matchesSelector(Ft, $),
                    g.guid || (g.guid = _.guid++),
                    (rn = Kn.events) || (rn = Kn.events = Object.create(null)),
                    (nn = Kn.handle) ||
                      (nn = Kn.handle =
                        function (rt) {
                          return typeof _ < "u" && _.event.triggered !== rt.type
                            ? _.event.dispatch.apply(s, arguments)
                            : void 0;
                        }),
                    pn = (d = (d || "").match(jt) || [""]).length;
                  pn--;

                )
                  (En = qn = (on = Lr.exec(d[pn]) || [])[1]),
                    (Pn = (on[2] || "").split(".").sort()),
                    En &&
                      ((kn = _.event.special[En] || {}),
                      (En = ($ ? kn.delegateType : kn.bindType) || En),
                      (kn = _.event.special[En] || {}),
                      (_n = _.extend(
                        {
                          type: En,
                          origType: qn,
                          data: j,
                          handler: g,
                          guid: g.guid,
                          selector: $,
                          needsContext: $ && _.expr.match.needsContext.test($),
                          namespace: Pn.join("."),
                        },
                        _e
                      )),
                      (fn = rn[En]) ||
                        (((fn = rn[En] = []).delegateCount = 0),
                        (kn.setup && kn.setup.call(s, j, Pn, nn) !== !1) ||
                          (s.addEventListener && s.addEventListener(En, nn))),
                      kn.add &&
                        (kn.add.call(s, _n),
                        _n.handler.guid || (_n.handler.guid = g.guid)),
                      $ ? fn.splice(fn.delegateCount++, 0, _n) : fn.push(_n),
                      (_.event.global[En] = !0));
            },
            remove: function (s, d, g, j, $) {
              var _e,
                nn,
                on,
                rn,
                pn,
                _n,
                kn,
                fn,
                En,
                Pn,
                qn,
                Kn = On.hasData(s) && On.get(s);
              if (Kn && (rn = Kn.events)) {
                for (pn = (d = (d || "").match(jt) || [""]).length; pn--; )
                  if (
                    ((En = qn = (on = Lr.exec(d[pn]) || [])[1]),
                    (Pn = (on[2] || "").split(".").sort()),
                    En)
                  ) {
                    for (
                      kn = _.event.special[En] || {},
                        fn =
                          rn[
                            (En = (j ? kn.delegateType : kn.bindType) || En)
                          ] || [],
                        on =
                          on[2] &&
                          new RegExp(
                            "(^|\\.)" + Pn.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        nn = _e = fn.length;
                      _e--;

                    )
                      (_n = fn[_e]),
                        (!$ && qn !== _n.origType) ||
                          (g && g.guid !== _n.guid) ||
                          (on && !on.test(_n.namespace)) ||
                          (j &&
                            j !== _n.selector &&
                            (j !== "**" || !_n.selector)) ||
                          (fn.splice(_e, 1),
                          _n.selector && fn.delegateCount--,
                          kn.remove && kn.remove.call(s, _n));
                    nn &&
                      !fn.length &&
                      ((kn.teardown &&
                        kn.teardown.call(s, Pn, Kn.handle) !== !1) ||
                        _.removeEvent(s, En, Kn.handle),
                      delete rn[En]);
                  } else for (En in rn) _.event.remove(s, En + d[pn], g, j, !0);
                _.isEmptyObject(rn) && On.remove(s, "handle events");
              }
            },
            dispatch: function (s) {
              var d,
                g,
                j,
                $,
                _e,
                nn,
                on = new Array(arguments.length),
                rn = _.event.fix(s),
                pn =
                  (On.get(this, "events") || Object.create(null))[rn.type] ||
                  [],
                _n = _.event.special[rn.type] || {};
              for (on[0] = rn, d = 1; d < arguments.length; d++)
                on[d] = arguments[d];
              if (
                ((rn.delegateTarget = this),
                !_n.preDispatch || _n.preDispatch.call(this, rn) !== !1)
              ) {
                for (
                  nn = _.event.handlers.call(this, rn, pn), d = 0;
                  ($ = nn[d++]) && !rn.isPropagationStopped();

                )
                  for (
                    rn.currentTarget = $.elem, g = 0;
                    (_e = $.handlers[g++]) &&
                    !rn.isImmediatePropagationStopped();

                  )
                    (rn.rnamespace &&
                      _e.namespace !== !1 &&
                      !rn.rnamespace.test(_e.namespace)) ||
                      ((rn.handleObj = _e),
                      (rn.data = _e.data),
                      (j = (
                        (_.event.special[_e.origType] || {}).handle ||
                        _e.handler
                      ).apply($.elem, on)) !== void 0 &&
                        (rn.result = j) === !1 &&
                        (rn.preventDefault(), rn.stopPropagation()));
                return (
                  _n.postDispatch && _n.postDispatch.call(this, rn), rn.result
                );
              }
            },
            handlers: function (s, d) {
              var g,
                j,
                $,
                _e,
                nn,
                on = [],
                rn = d.delegateCount,
                pn = s.target;
              if (rn && pn.nodeType && !(s.type === "click" && 1 <= s.button)) {
                for (; pn !== this; pn = pn.parentNode || this)
                  if (
                    pn.nodeType === 1 &&
                    (s.type !== "click" || pn.disabled !== !0)
                  ) {
                    for (_e = [], nn = {}, g = 0; g < rn; g++)
                      nn[($ = (j = d[g]).selector + " ")] === void 0 &&
                        (nn[$] = j.needsContext
                          ? -1 < _($, this).index(pn)
                          : _.find($, this, null, [pn]).length),
                        nn[$] && _e.push(j);
                    _e.length && on.push({ elem: pn, handlers: _e });
                  }
              }
              return (
                (pn = this),
                rn < d.length && on.push({ elem: pn, handlers: d.slice(rn) }),
                on
              );
            },
            addProp: function (s, d) {
              Object.defineProperty(_.Event.prototype, s, {
                enumerable: !0,
                configurable: !0,
                get: xn(d)
                  ? function () {
                      if (this.originalEvent) return d(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[s];
                    },
                set: function (g) {
                  Object.defineProperty(this, s, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: g,
                  });
                },
              });
            },
            fix: function (s) {
              return s[_.expando] ? s : new _.Event(s);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (s) {
                  var d = this || s;
                  return (
                    Il.test(d.type) &&
                      d.click &&
                      Wn(d, "input") &&
                      Zl(d, "click", !0),
                    !1
                  );
                },
                trigger: function (s) {
                  var d = this || s;
                  return (
                    Il.test(d.type) &&
                      d.click &&
                      Wn(d, "input") &&
                      Zl(d, "click"),
                    !0
                  );
                },
                _default: function (s) {
                  var d = s.target;
                  return (
                    (Il.test(d.type) &&
                      d.click &&
                      Wn(d, "input") &&
                      On.get(d, "click")) ||
                    Wn(d, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (s) {
                  s.result !== void 0 &&
                    s.originalEvent &&
                    (s.originalEvent.returnValue = s.result);
                },
              },
            },
          }),
            (_.removeEvent = function (s, d, g) {
              s.removeEventListener && s.removeEventListener(d, g);
            }),
            (_.Event = function (s, d) {
              if (!(this instanceof _.Event)) return new _.Event(s, d);
              s && s.type
                ? ((this.originalEvent = s),
                  (this.type = s.type),
                  (this.isDefaultPrevented =
                    s.defaultPrevented ||
                    (s.defaultPrevented === void 0 && s.returnValue === !1)
                      ? yl
                      : Al),
                  (this.target =
                    s.target && s.target.nodeType === 3
                      ? s.target.parentNode
                      : s.target),
                  (this.currentTarget = s.currentTarget),
                  (this.relatedTarget = s.relatedTarget))
                : (this.type = s),
                d && _.extend(this, d),
                (this.timeStamp = (s && s.timeStamp) || Date.now()),
                (this[_.expando] = !0);
            }),
            (_.Event.prototype = {
              constructor: _.Event,
              isDefaultPrevented: Al,
              isPropagationStopped: Al,
              isImmediatePropagationStopped: Al,
              isSimulated: !1,
              preventDefault: function () {
                var s = this.originalEvent;
                (this.isDefaultPrevented = yl),
                  s && !this.isSimulated && s.preventDefault();
              },
              stopPropagation: function () {
                var s = this.originalEvent;
                (this.isPropagationStopped = yl),
                  s && !this.isSimulated && s.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var s = this.originalEvent;
                (this.isImmediatePropagationStopped = yl),
                  s && !this.isSimulated && s.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            _.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              _.event.addProp
            ),
            _.each({ focus: "focusin", blur: "focusout" }, function (s, d) {
              function g(j) {
                if (an.documentMode) {
                  var $ = On.get(this, "handle"),
                    _e = _.event.fix(j);
                  (_e.type = j.type === "focusin" ? "focus" : "blur"),
                    (_e.isSimulated = !0),
                    $(j),
                    _e.target === _e.currentTarget && $(_e);
                } else _.event.simulate(d, j.target, _.event.fix(j));
              }
              (_.event.special[s] = {
                setup: function () {
                  var j;
                  if ((Zl(this, s, !0), !an.documentMode)) return !1;
                  (j = On.get(this, d)) || this.addEventListener(d, g),
                    On.set(this, d, (j || 0) + 1);
                },
                trigger: function () {
                  return Zl(this, s), !0;
                },
                teardown: function () {
                  var j;
                  if (!an.documentMode) return !1;
                  (j = On.get(this, d) - 1)
                    ? On.set(this, d, j)
                    : (this.removeEventListener(d, g), On.remove(this, d));
                },
                _default: function (j) {
                  return On.get(j.target, s);
                },
                delegateType: d,
              }),
                (_.event.special[d] = {
                  setup: function () {
                    var j = this.ownerDocument || this.document || this,
                      $ = an.documentMode ? this : j,
                      _e = On.get($, d);
                    _e ||
                      (an.documentMode
                        ? this.addEventListener(d, g)
                        : j.addEventListener(s, g, !0)),
                      On.set($, d, (_e || 0) + 1);
                  },
                  teardown: function () {
                    var j = this.ownerDocument || this.document || this,
                      $ = an.documentMode ? this : j,
                      _e = On.get($, d) - 1;
                    _e
                      ? On.set($, d, _e)
                      : (an.documentMode
                          ? this.removeEventListener(d, g)
                          : j.removeEventListener(s, g, !0),
                        On.remove($, d));
                  },
                });
            }),
            _.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (s, d) {
                _.event.special[s] = {
                  delegateType: d,
                  bindType: d,
                  handle: function (g) {
                    var j,
                      $ = g.relatedTarget,
                      _e = g.handleObj;
                    return (
                      ($ && ($ === this || _.contains(this, $))) ||
                        ((g.type = _e.origType),
                        (j = _e.handler.apply(this, arguments)),
                        (g.type = d)),
                      j
                    );
                  },
                };
              }
            ),
            _.fn.extend({
              on: function (s, d, g, j) {
                return ar(this, s, d, g, j);
              },
              one: function (s, d, g, j) {
                return ar(this, s, d, g, j, 1);
              },
              off: function (s, d, g) {
                var j, $;
                if (s && s.preventDefault && s.handleObj)
                  return (
                    (j = s.handleObj),
                    _(s.delegateTarget).off(
                      j.namespace ? j.origType + "." + j.namespace : j.origType,
                      j.selector,
                      j.handler
                    ),
                    this
                  );
                if (typeof s == "object") {
                  for ($ in s) this.off($, d, s[$]);
                  return this;
                }
                return (
                  (d !== !1 && typeof d != "function") ||
                    ((g = d), (d = void 0)),
                  g === !1 && (g = Al),
                  this.each(function () {
                    _.event.remove(this, s, g, d);
                  })
                );
              },
            });
          var co = /<script|<style|<link/i,
            po = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ho = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
          function Ir(s, d) {
            return (
              (Wn(s, "table") &&
                Wn(d.nodeType !== 11 ? d : d.firstChild, "tr") &&
                _(s).children("tbody")[0]) ||
              s
            );
          }
          function fo(s) {
            return (
              (s.type = (s.getAttribute("type") !== null) + "/" + s.type), s
            );
          }
          function mo(s) {
            return (
              (s.type || "").slice(0, 5) === "true/"
                ? (s.type = s.type.slice(5))
                : s.removeAttribute("type"),
              s
            );
          }
          function Pr(s, d) {
            var g, j, $, _e, nn, on;
            if (d.nodeType === 1) {
              if (On.hasData(s) && (on = On.get(s).events))
                for ($ in (On.remove(d, "handle events"), on))
                  for (g = 0, j = on[$].length; g < j; g++)
                    _.event.add(d, $, on[$][g]);
              mt.hasData(s) &&
                ((_e = mt.access(s)), (nn = _.extend({}, _e)), mt.set(d, nn));
            }
          }
          function xl(s, d, g, j) {
            d = b(d);
            var $,
              _e,
              nn,
              on,
              rn,
              pn,
              _n = 0,
              kn = s.length,
              fn = kn - 1,
              En = d[0],
              Pn = xn(En);
            if (
              Pn ||
              (1 < kn && typeof En == "string" && !An.checkClone && po.test(En))
            )
              return s.each(function (qn) {
                var Kn = s.eq(qn);
                Pn && (d[0] = En.call(this, qn, Kn.html())), xl(Kn, d, g, j);
              });
            if (
              kn &&
              ((_e = ($ = Rr(d, s[0].ownerDocument, !1, s, j)).firstChild),
              $.childNodes.length === 1 && ($ = _e),
              _e || j)
            ) {
              for (on = (nn = _.map(gt($, "script"), fo)).length; _n < kn; _n++)
                (rn = $),
                  _n !== fn &&
                    ((rn = _.clone(rn, !0, !0)),
                    on && _.merge(nn, gt(rn, "script"))),
                  g.call(s[_n], rn, _n);
              if (on)
                for (
                  pn = nn[nn.length - 1].ownerDocument, _.map(nn, mo), _n = 0;
                  _n < on;
                  _n++
                )
                  (rn = nn[_n]),
                    Tr.test(rn.type || "") &&
                      !On.access(rn, "globalEval") &&
                      _.contains(pn, rn) &&
                      (rn.src && (rn.type || "").toLowerCase() !== "module"
                        ? _._evalUrl &&
                          !rn.noModule &&
                          _._evalUrl(
                            rn.src,
                            { nonce: rn.nonce || rn.getAttribute("nonce") },
                            pn
                          )
                        : dn(rn.textContent.replace(ho, ""), rn, pn));
            }
            return s;
          }
          function Br(s, d, g) {
            for (
              var j, $ = d ? _.filter(d, s) : s, _e = 0;
              (j = $[_e]) != null;
              _e++
            )
              g || j.nodeType !== 1 || _.cleanData(gt(j)),
                j.parentNode &&
                  (g && $t(j) && rr(gt(j, "script")),
                  j.parentNode.removeChild(j));
            return s;
          }
          _.extend({
            htmlPrefilter: function (s) {
              return s;
            },
            clone: function (s, d, g) {
              var j,
                $,
                _e,
                nn,
                on,
                rn,
                pn,
                _n = s.cloneNode(!0),
                kn = $t(s);
              if (
                !(
                  An.noCloneChecked ||
                  (s.nodeType !== 1 && s.nodeType !== 11) ||
                  _.isXMLDoc(s)
                )
              )
                for (nn = gt(_n), j = 0, $ = (_e = gt(s)).length; j < $; j++)
                  (on = _e[j]),
                    (rn = nn[j]),
                    (pn = rn.nodeName.toLowerCase()) === "input" &&
                    Il.test(on.type)
                      ? (rn.checked = on.checked)
                      : (pn !== "input" && pn !== "textarea") ||
                        (rn.defaultValue = on.defaultValue);
              if (d)
                if (g)
                  for (
                    _e = _e || gt(s), nn = nn || gt(_n), j = 0, $ = _e.length;
                    j < $;
                    j++
                  )
                    Pr(_e[j], nn[j]);
                else Pr(s, _n);
              return (
                0 < (nn = gt(_n, "script")).length &&
                  rr(nn, !kn && gt(s, "script")),
                _n
              );
            },
            cleanData: function (s) {
              for (
                var d, g, j, $ = _.event.special, _e = 0;
                (g = s[_e]) !== void 0;
                _e++
              )
                if (Tl(g)) {
                  if ((d = g[On.expando])) {
                    if (d.events)
                      for (j in d.events)
                        $[j]
                          ? _.event.remove(g, j)
                          : _.removeEvent(g, j, d.handle);
                    g[On.expando] = void 0;
                  }
                  g[mt.expando] && (g[mt.expando] = void 0);
                }
            },
          }),
            _.fn.extend({
              detach: function (s) {
                return Br(this, s, !0);
              },
              remove: function (s) {
                return Br(this, s);
              },
              text: function (s) {
                return Pt(
                  this,
                  function (d) {
                    return d === void 0
                      ? _.text(this)
                      : this.empty().each(function () {
                          (this.nodeType !== 1 &&
                            this.nodeType !== 11 &&
                            this.nodeType !== 9) ||
                            (this.textContent = d);
                        });
                  },
                  null,
                  s,
                  arguments.length
                );
              },
              append: function () {
                return xl(this, arguments, function (s) {
                  (this.nodeType !== 1 &&
                    this.nodeType !== 11 &&
                    this.nodeType !== 9) ||
                    Ir(this, s).appendChild(s);
                });
              },
              prepend: function () {
                return xl(this, arguments, function (s) {
                  if (
                    this.nodeType === 1 ||
                    this.nodeType === 11 ||
                    this.nodeType === 9
                  ) {
                    var d = Ir(this, s);
                    d.insertBefore(s, d.firstChild);
                  }
                });
              },
              before: function () {
                return xl(this, arguments, function (s) {
                  this.parentNode && this.parentNode.insertBefore(s, this);
                });
              },
              after: function () {
                return xl(this, arguments, function (s) {
                  this.parentNode &&
                    this.parentNode.insertBefore(s, this.nextSibling);
                });
              },
              empty: function () {
                for (var s, d = 0; (s = this[d]) != null; d++)
                  s.nodeType === 1 &&
                    (_.cleanData(gt(s, !1)), (s.textContent = ""));
                return this;
              },
              clone: function (s, d) {
                return (
                  (s = s != null && s),
                  (d = d ?? s),
                  this.map(function () {
                    return _.clone(this, s, d);
                  })
                );
              },
              html: function (s) {
                return Pt(
                  this,
                  function (d) {
                    var g = this[0] || {},
                      j = 0,
                      $ = this.length;
                    if (d === void 0 && g.nodeType === 1) return g.innerHTML;
                    if (
                      typeof d == "string" &&
                      !co.test(d) &&
                      !xt[(Dr.exec(d) || ["", ""])[1].toLowerCase()]
                    ) {
                      d = _.htmlPrefilter(d);
                      try {
                        for (; j < $; j++)
                          (g = this[j] || {}).nodeType === 1 &&
                            (_.cleanData(gt(g, !1)), (g.innerHTML = d));
                        g = 0;
                      } catch {}
                    }
                    g && this.empty().append(d);
                  },
                  null,
                  s,
                  arguments.length
                );
              },
              replaceWith: function () {
                var s = [];
                return xl(
                  this,
                  arguments,
                  function (d) {
                    var g = this.parentNode;
                    _.inArray(this, s) < 0 &&
                      (_.cleanData(gt(this)), g && g.replaceChild(d, this));
                  },
                  s
                );
              },
            }),
            _.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (s, d) {
                _.fn[s] = function (g) {
                  for (
                    var j, $ = [], _e = _(g), nn = _e.length - 1, on = 0;
                    on <= nn;
                    on++
                  )
                    (j = on === nn ? this : this.clone(!0)),
                      _(_e[on])[d](j),
                      en.apply($, j.get());
                  return this.pushStack($);
                };
              }
            );
          var ir = new RegExp("^(" + Cr + ")(?!px)[a-z%]+$", "i"),
            or = /^--/,
            Ql = function (s) {
              var d = s.ownerDocument.defaultView;
              return (d && d.opener) || (d = a), d.getComputedStyle(s);
            },
            Or = function (s, d, g) {
              var j,
                $,
                _e = {};
              for ($ in d) (_e[$] = s.style[$]), (s.style[$] = d[$]);
              for ($ in ((j = g.call(s)), d)) s.style[$] = _e[$];
              return j;
            },
            go = new RegExp(Bt.join("|"), "i");
          function Pl(s, d, g) {
            var j,
              $,
              _e,
              nn,
              on = or.test(d),
              rn = s.style;
            return (
              (g = g || Ql(s)) &&
                ((nn = g.getPropertyValue(d) || g[d]),
                on && nn && (nn = nn.replace(Nt, "$1") || void 0),
                nn !== "" || $t(s) || (nn = _.style(s, d)),
                !An.pixelBoxStyles() &&
                  ir.test(nn) &&
                  go.test(d) &&
                  ((j = rn.width),
                  ($ = rn.minWidth),
                  (_e = rn.maxWidth),
                  (rn.minWidth = rn.maxWidth = rn.width = nn),
                  (nn = g.width),
                  (rn.width = j),
                  (rn.minWidth = $),
                  (rn.maxWidth = _e))),
              nn !== void 0 ? nn + "" : nn
            );
          }
          function Nr(s, d) {
            return {
              get: function () {
                if (!s()) return (this.get = d).apply(this, arguments);
                delete this.get;
              },
            };
          }
          (function () {
            function s() {
              if (pn) {
                (rn.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (pn.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  Ft.appendChild(rn).appendChild(pn);
                var _n = a.getComputedStyle(pn);
                (g = _n.top !== "1%"),
                  (on = d(_n.marginLeft) === 12),
                  (pn.style.right = "60%"),
                  (_e = d(_n.right) === 36),
                  (j = d(_n.width) === 36),
                  (pn.style.position = "absolute"),
                  ($ = d(pn.offsetWidth / 3) === 12),
                  Ft.removeChild(rn),
                  (pn = null);
              }
            }
            function d(_n) {
              return Math.round(parseFloat(_n));
            }
            var g,
              j,
              $,
              _e,
              nn,
              on,
              rn = an.createElement("div"),
              pn = an.createElement("div");
            pn.style &&
              ((pn.style.backgroundClip = "content-box"),
              (pn.cloneNode(!0).style.backgroundClip = ""),
              (An.clearCloneStyle = pn.style.backgroundClip === "content-box"),
              _.extend(An, {
                boxSizingReliable: function () {
                  return s(), j;
                },
                pixelBoxStyles: function () {
                  return s(), _e;
                },
                pixelPosition: function () {
                  return s(), g;
                },
                reliableMarginLeft: function () {
                  return s(), on;
                },
                scrollboxSize: function () {
                  return s(), $;
                },
                reliableTrDimensions: function () {
                  var _n, kn, fn, En;
                  return (
                    nn == null &&
                      ((_n = an.createElement("table")),
                      (kn = an.createElement("tr")),
                      (fn = an.createElement("div")),
                      (_n.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (kn.style.cssText =
                        "box-sizing:content-box;border:1px solid"),
                      (kn.style.height = "1px"),
                      (fn.style.height = "9px"),
                      (fn.style.display = "block"),
                      Ft.appendChild(_n).appendChild(kn).appendChild(fn),
                      (En = a.getComputedStyle(kn)),
                      (nn =
                        parseInt(En.height, 10) +
                          parseInt(En.borderTopWidth, 10) +
                          parseInt(En.borderBottomWidth, 10) ===
                        kn.offsetHeight),
                      Ft.removeChild(_n)),
                    nn
                  );
                },
              }));
          })();
          var Ur = ["Webkit", "Moz", "ms"],
            Vr = an.createElement("div").style,
            Wr = {};
          function sr(s) {
            var d = _.cssProps[s] || Wr[s];
            return (
              d ||
              (s in Vr
                ? s
                : (Wr[s] =
                    (function (g) {
                      for (
                        var j = g[0].toUpperCase() + g.slice(1), $ = Ur.length;
                        $--;

                      )
                        if ((g = Ur[$] + j) in Vr) return g;
                    })(s) || s))
            );
          }
          var vo = /^(none|table(?!-c[ea]).+)/,
            _o = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            qr = { letterSpacing: "0", fontWeight: "400" };
          function Kr(s, d, g) {
            var j = Ll.exec(d);
            return j ? Math.max(0, j[2] - (g || 0)) + (j[3] || "px") : d;
          }
          function ur(s, d, g, j, $, _e) {
            var nn = d === "width" ? 1 : 0,
              on = 0,
              rn = 0,
              pn = 0;
            if (g === (j ? "border" : "content")) return 0;
            for (; nn < 4; nn += 2)
              g === "margin" && (pn += _.css(s, g + Bt[nn], !0, $)),
                j
                  ? (g === "content" &&
                      (rn -= _.css(s, "padding" + Bt[nn], !0, $)),
                    g !== "margin" &&
                      (rn -= _.css(s, "border" + Bt[nn] + "Width", !0, $)))
                  : ((rn += _.css(s, "padding" + Bt[nn], !0, $)),
                    g !== "padding"
                      ? (rn += _.css(s, "border" + Bt[nn] + "Width", !0, $))
                      : (on += _.css(s, "border" + Bt[nn] + "Width", !0, $)));
            return (
              !j &&
                0 <= _e &&
                (rn +=
                  Math.max(
                    0,
                    Math.ceil(
                      s["offset" + d[0].toUpperCase() + d.slice(1)] -
                        _e -
                        rn -
                        on -
                        0.5
                    )
                  ) || 0),
              rn + pn
            );
          }
          function Fr(s, d, g) {
            var j = Ql(s),
              $ =
                (!An.boxSizingReliable() || g) &&
                _.css(s, "boxSizing", !1, j) === "border-box",
              _e = $,
              nn = Pl(s, d, j),
              on = "offset" + d[0].toUpperCase() + d.slice(1);
            if (ir.test(nn)) {
              if (!g) return nn;
              nn = "auto";
            }
            return (
              ((!An.boxSizingReliable() && $) ||
                (!An.reliableTrDimensions() && Wn(s, "tr")) ||
                nn === "auto" ||
                (!parseFloat(nn) && _.css(s, "display", !1, j) === "inline")) &&
                s.getClientRects().length &&
                (($ = _.css(s, "boxSizing", !1, j) === "border-box"),
                (_e = on in s) && (nn = s[on])),
              (nn = parseFloat(nn) || 0) +
                ur(s, d, g || ($ ? "border" : "content"), _e, j, nn) +
                "px"
            );
          }
          function wt(s, d, g, j, $) {
            return new wt.prototype.init(s, d, g, j, $);
          }
          _.extend({
            cssHooks: {
              opacity: {
                get: function (s, d) {
                  if (d) {
                    var g = Pl(s, "opacity");
                    return g === "" ? "1" : g;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              aspectRatio: !0,
              borderImageSlice: !0,
              columnCount: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              scale: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
              fillOpacity: !0,
              floodOpacity: !0,
              stopOpacity: !0,
              strokeMiterlimit: !0,
              strokeOpacity: !0,
            },
            cssProps: {},
            style: function (s, d, g, j) {
              if (s && s.nodeType !== 3 && s.nodeType !== 8 && s.style) {
                var $,
                  _e,
                  nn,
                  on = bt(d),
                  rn = or.test(d),
                  pn = s.style;
                if (
                  (rn || (d = sr(on)),
                  (nn = _.cssHooks[d] || _.cssHooks[on]),
                  g === void 0)
                )
                  return nn && "get" in nn && ($ = nn.get(s, !1, j)) !== void 0
                    ? $
                    : pn[d];
                (_e = typeof g) == "string" &&
                  ($ = Ll.exec(g)) &&
                  $[1] &&
                  ((g = jr(s, d, $)), (_e = "number")),
                  g != null &&
                    g == g &&
                    (_e !== "number" ||
                      rn ||
                      (g += ($ && $[3]) || (_.cssNumber[on] ? "" : "px")),
                    An.clearCloneStyle ||
                      g !== "" ||
                      d.indexOf("background") !== 0 ||
                      (pn[d] = "inherit"),
                    (nn && "set" in nn && (g = nn.set(s, g, j)) === void 0) ||
                      (rn ? pn.setProperty(d, g) : (pn[d] = g)));
              }
            },
            css: function (s, d, g, j) {
              var $,
                _e,
                nn,
                on = bt(d);
              return (
                or.test(d) || (d = sr(on)),
                (nn = _.cssHooks[d] || _.cssHooks[on]) &&
                  "get" in nn &&
                  ($ = nn.get(s, !0, g)),
                $ === void 0 && ($ = Pl(s, d, j)),
                $ === "normal" && d in qr && ($ = qr[d]),
                g === "" || g
                  ? ((_e = parseFloat($)),
                    g === !0 || isFinite(_e) ? _e || 0 : $)
                  : $
              );
            },
          }),
            _.each(["height", "width"], function (s, d) {
              _.cssHooks[d] = {
                get: function (g, j, $) {
                  if (j)
                    return !vo.test(_.css(g, "display")) ||
                      (g.getClientRects().length &&
                        g.getBoundingClientRect().width)
                      ? Fr(g, d, $)
                      : Or(g, _o, function () {
                          return Fr(g, d, $);
                        });
                },
                set: function (g, j, $) {
                  var _e,
                    nn = Ql(g),
                    on = !An.scrollboxSize() && nn.position === "absolute",
                    rn =
                      (on || $) &&
                      _.css(g, "boxSizing", !1, nn) === "border-box",
                    pn = $ ? ur(g, d, $, rn, nn) : 0;
                  return (
                    rn &&
                      on &&
                      (pn -= Math.ceil(
                        g["offset" + d[0].toUpperCase() + d.slice(1)] -
                          parseFloat(nn[d]) -
                          ur(g, d, "border", !1, nn) -
                          0.5
                      )),
                    pn &&
                      (_e = Ll.exec(j)) &&
                      (_e[3] || "px") !== "px" &&
                      ((g.style[d] = j), (j = _.css(g, d))),
                    Kr(0, j, pn)
                  );
                },
              };
            }),
            (_.cssHooks.marginLeft = Nr(An.reliableMarginLeft, function (s, d) {
              if (d)
                return (
                  (parseFloat(Pl(s, "marginLeft")) ||
                    s.getBoundingClientRect().left -
                      Or(s, { marginLeft: 0 }, function () {
                        return s.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            _.each(
              { margin: "", padding: "", border: "Width" },
              function (s, d) {
                (_.cssHooks[s + d] = {
                  expand: function (g) {
                    for (
                      var j = 0,
                        $ = {},
                        _e = typeof g == "string" ? g.split(" ") : [g];
                      j < 4;
                      j++
                    )
                      $[s + Bt[j] + d] = _e[j] || _e[j - 2] || _e[0];
                    return $;
                  },
                }),
                  s !== "margin" && (_.cssHooks[s + d].set = Kr);
              }
            ),
            _.fn.extend({
              css: function (s, d) {
                return Pt(
                  this,
                  function (g, j, $) {
                    var _e,
                      nn,
                      on = {},
                      rn = 0;
                    if (Array.isArray(j)) {
                      for (_e = Ql(g), nn = j.length; rn < nn; rn++)
                        on[j[rn]] = _.css(g, j[rn], !1, _e);
                      return on;
                    }
                    return $ !== void 0 ? _.style(g, j, $) : _.css(g, j);
                  },
                  s,
                  d,
                  1 < arguments.length
                );
              },
            }),
            (((_.Tween = wt).prototype = {
              constructor: wt,
              init: function (s, d, g, j, $, _e) {
                (this.elem = s),
                  (this.prop = g),
                  (this.easing = $ || _.easing._default),
                  (this.options = d),
                  (this.start = this.now = this.cur()),
                  (this.end = j),
                  (this.unit = _e || (_.cssNumber[g] ? "" : "px"));
              },
              cur: function () {
                var s = wt.propHooks[this.prop];
                return s && s.get
                  ? s.get(this)
                  : wt.propHooks._default.get(this);
              },
              run: function (s) {
                var d,
                  g = wt.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = d =
                        _.easing[this.easing](
                          s,
                          this.options.duration * s,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = d = s),
                  (this.now = (this.end - this.start) * d + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  g && g.set ? g.set(this) : wt.propHooks._default.set(this),
                  this
                );
              },
            }).init.prototype = wt.prototype),
            ((wt.propHooks = {
              _default: {
                get: function (s) {
                  var d;
                  return s.elem.nodeType !== 1 ||
                    (s.elem[s.prop] != null && s.elem.style[s.prop] == null)
                    ? s.elem[s.prop]
                    : (d = _.css(s.elem, s.prop, "")) && d !== "auto"
                    ? d
                    : 0;
                },
                set: function (s) {
                  _.fx.step[s.prop]
                    ? _.fx.step[s.prop](s)
                    : s.elem.nodeType !== 1 ||
                      (!_.cssHooks[s.prop] && s.elem.style[sr(s.prop)] == null)
                    ? (s.elem[s.prop] = s.now)
                    : _.style(s.elem, s.prop, s.now + s.unit);
                },
              },
            }).scrollTop = wt.propHooks.scrollLeft =
              {
                set: function (s) {
                  s.elem.nodeType &&
                    s.elem.parentNode &&
                    (s.elem[s.prop] = s.now);
                },
              }),
            (_.easing = {
              linear: function (s) {
                return s;
              },
              swing: function (s) {
                return 0.5 - Math.cos(s * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (_.fx = wt.prototype.init),
            (_.fx.step = {});
          var wl,
            Gl,
            El,
            zr,
            yo = /^(?:toggle|show|hide)$/,
            Ao = /queueHooks$/;
          function cr() {
            Gl &&
              (an.hidden === !1 && a.requestAnimationFrame
                ? a.requestAnimationFrame(cr)
                : a.setTimeout(cr, _.fx.interval),
              _.fx.tick());
          }
          function Hr() {
            return (
              a.setTimeout(function () {
                wl = void 0;
              }),
              (wl = Date.now())
            );
          }
          function Yl(s, d) {
            var g,
              j = 0,
              $ = { height: s };
            for (d = d ? 1 : 0; j < 4; j += 2 - d)
              $["margin" + (g = Bt[j])] = $["padding" + g] = s;
            return d && ($.opacity = $.width = s), $;
          }
          function Zr(s, d, g) {
            for (
              var j,
                $ = (Et.tweeners[d] || []).concat(Et.tweeners["*"]),
                _e = 0,
                nn = $.length;
              _e < nn;
              _e++
            )
              if ((j = $[_e].call(g, d, s))) return j;
          }
          function Et(s, d, g) {
            var j,
              $,
              _e = 0,
              nn = Et.prefilters.length,
              on = _.Deferred().always(function () {
                delete rn.elem;
              }),
              rn = function () {
                if ($) return !1;
                for (
                  var kn = wl || Hr(),
                    fn = Math.max(0, pn.startTime + pn.duration - kn),
                    En = 1 - (fn / pn.duration || 0),
                    Pn = 0,
                    qn = pn.tweens.length;
                  Pn < qn;
                  Pn++
                )
                  pn.tweens[Pn].run(En);
                return (
                  on.notifyWith(s, [pn, En, fn]),
                  En < 1 && qn
                    ? fn
                    : (qn || on.notifyWith(s, [pn, 1, 0]),
                      on.resolveWith(s, [pn]),
                      !1)
                );
              },
              pn = on.promise({
                elem: s,
                props: _.extend({}, d),
                opts: _.extend(
                  !0,
                  { specialEasing: {}, easing: _.easing._default },
                  g
                ),
                originalProperties: d,
                originalOptions: g,
                startTime: wl || Hr(),
                duration: g.duration,
                tweens: [],
                createTween: function (kn, fn) {
                  var En = _.Tween(
                    s,
                    pn.opts,
                    kn,
                    fn,
                    pn.opts.specialEasing[kn] || pn.opts.easing
                  );
                  return pn.tweens.push(En), En;
                },
                stop: function (kn) {
                  var fn = 0,
                    En = kn ? pn.tweens.length : 0;
                  if ($) return this;
                  for ($ = !0; fn < En; fn++) pn.tweens[fn].run(1);
                  return (
                    kn
                      ? (on.notifyWith(s, [pn, 1, 0]),
                        on.resolveWith(s, [pn, kn]))
                      : on.rejectWith(s, [pn, kn]),
                    this
                  );
                },
              }),
              _n = pn.props;
            for (
              !(function (kn, fn) {
                var En, Pn, qn, Kn, rt;
                for (En in kn)
                  if (
                    ((qn = fn[(Pn = bt(En))]),
                    (Kn = kn[En]),
                    Array.isArray(Kn) && ((qn = Kn[1]), (Kn = kn[En] = Kn[0])),
                    En !== Pn && ((kn[Pn] = Kn), delete kn[En]),
                    (rt = _.cssHooks[Pn]) && ("expand" in rt))
                  )
                    for (En in ((Kn = rt.expand(Kn)), delete kn[Pn], Kn))
                      (En in kn) || ((kn[En] = Kn[En]), (fn[En] = qn));
                  else fn[Pn] = qn;
              })(_n, pn.opts.specialEasing);
              _e < nn;
              _e++
            )
              if ((j = Et.prefilters[_e].call(pn, s, _n, pn.opts)))
                return (
                  xn(j.stop) &&
                    (_._queueHooks(pn.elem, pn.opts.queue).stop =
                      j.stop.bind(j)),
                  j
                );
            return (
              _.map(_n, Zr, pn),
              xn(pn.opts.start) && pn.opts.start.call(s, pn),
              pn
                .progress(pn.opts.progress)
                .done(pn.opts.done, pn.opts.complete)
                .fail(pn.opts.fail)
                .always(pn.opts.always),
              _.fx.timer(
                _.extend(rn, { elem: s, anim: pn, queue: pn.opts.queue })
              ),
              pn
            );
          }
          (_.Animation = _.extend(Et, {
            tweeners: {
              "*": [
                function (s, d) {
                  var g = this.createTween(s, d);
                  return jr(g.elem, s, Ll.exec(d), g), g;
                },
              ],
            },
            tweener: function (s, d) {
              xn(s) ? ((d = s), (s = ["*"])) : (s = s.match(jt));
              for (var g, j = 0, $ = s.length; j < $; j++)
                (g = s[j]),
                  (Et.tweeners[g] = Et.tweeners[g] || []),
                  Et.tweeners[g].unshift(d);
            },
            prefilters: [
              function (s, d, g) {
                var j,
                  $,
                  _e,
                  nn,
                  on,
                  rn,
                  pn,
                  _n,
                  kn = "width" in d || "height" in d,
                  fn = this,
                  En = {},
                  Pn = s.style,
                  qn = s.nodeType && zl(s),
                  Kn = On.get(s, "fxshow");
                for (j in (g.queue ||
                  ((nn = _._queueHooks(s, "fx")).unqueued == null &&
                    ((nn.unqueued = 0),
                    (on = nn.empty.fire),
                    (nn.empty.fire = function () {
                      nn.unqueued || on();
                    })),
                  nn.unqueued++,
                  fn.always(function () {
                    fn.always(function () {
                      nn.unqueued--, _.queue(s, "fx").length || nn.empty.fire();
                    });
                  })),
                d))
                  if ((($ = d[j]), yo.test($))) {
                    if (
                      (delete d[j],
                      (_e = _e || $ === "toggle"),
                      $ === (qn ? "hide" : "show"))
                    ) {
                      if ($ !== "show" || !Kn || Kn[j] === void 0) continue;
                      qn = !0;
                    }
                    En[j] = (Kn && Kn[j]) || _.style(s, j);
                  }
                if ((rn = !_.isEmptyObject(d)) || !_.isEmptyObject(En))
                  for (j in (kn &&
                    s.nodeType === 1 &&
                    ((g.overflow = [Pn.overflow, Pn.overflowX, Pn.overflowY]),
                    (pn = Kn && Kn.display) == null &&
                      (pn = On.get(s, "display")),
                    (_n = _.css(s, "display")) === "none" &&
                      (pn
                        ? (_n = pn)
                        : (_l([s], !0),
                          (pn = s.style.display || pn),
                          (_n = _.css(s, "display")),
                          _l([s]))),
                    (_n === "inline" ||
                      (_n === "inline-block" && pn != null)) &&
                      _.css(s, "float") === "none" &&
                      (rn ||
                        (fn.done(function () {
                          Pn.display = pn;
                        }),
                        pn == null &&
                          ((_n = Pn.display), (pn = _n === "none" ? "" : _n))),
                      (Pn.display = "inline-block"))),
                  g.overflow &&
                    ((Pn.overflow = "hidden"),
                    fn.always(function () {
                      (Pn.overflow = g.overflow[0]),
                        (Pn.overflowX = g.overflow[1]),
                        (Pn.overflowY = g.overflow[2]);
                    })),
                  (rn = !1),
                  En))
                    rn ||
                      (Kn
                        ? "hidden" in Kn && (qn = Kn.hidden)
                        : (Kn = On.access(s, "fxshow", { display: pn })),
                      _e && (Kn.hidden = !qn),
                      qn && _l([s], !0),
                      fn.done(function () {
                        for (j in (qn || _l([s]), On.remove(s, "fxshow"), En))
                          _.style(s, j, En[j]);
                      })),
                      (rn = Zr(qn ? Kn[j] : 0, j, fn)),
                      j in Kn ||
                        ((Kn[j] = rn.start),
                        qn && ((rn.end = rn.start), (rn.start = 0)));
              },
            ],
            prefilter: function (s, d) {
              d ? Et.prefilters.unshift(s) : Et.prefilters.push(s);
            },
          })),
            (_.speed = function (s, d, g) {
              var j =
                s && typeof s == "object"
                  ? _.extend({}, s)
                  : {
                      complete: g || (!g && d) || (xn(s) && s),
                      duration: s,
                      easing: (g && d) || (d && !xn(d) && d),
                    };
              return (
                _.fx.off
                  ? (j.duration = 0)
                  : typeof j.duration != "number" &&
                    (j.duration in _.fx.speeds
                      ? (j.duration = _.fx.speeds[j.duration])
                      : (j.duration = _.fx.speeds._default)),
                (j.queue != null && j.queue !== !0) || (j.queue = "fx"),
                (j.old = j.complete),
                (j.complete = function () {
                  xn(j.old) && j.old.call(this),
                    j.queue && _.dequeue(this, j.queue);
                }),
                j
              );
            }),
            _.fn.extend({
              fadeTo: function (s, d, g, j) {
                return this.filter(zl)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: d }, s, g, j);
              },
              animate: function (s, d, g, j) {
                var $ = _.isEmptyObject(s),
                  _e = _.speed(d, g, j),
                  nn = function () {
                    var on = Et(this, _.extend({}, s), _e);
                    ($ || On.get(this, "finish")) && on.stop(!0);
                  };
                return (
                  (nn.finish = nn),
                  $ || _e.queue === !1
                    ? this.each(nn)
                    : this.queue(_e.queue, nn)
                );
              },
              stop: function (s, d, g) {
                var j = function ($) {
                  var _e = $.stop;
                  delete $.stop, _e(g);
                };
                return (
                  typeof s != "string" && ((g = d), (d = s), (s = void 0)),
                  d && this.queue(s || "fx", []),
                  this.each(function () {
                    var $ = !0,
                      _e = s != null && s + "queueHooks",
                      nn = _.timers,
                      on = On.get(this);
                    if (_e) on[_e] && on[_e].stop && j(on[_e]);
                    else
                      for (_e in on)
                        on[_e] && on[_e].stop && Ao.test(_e) && j(on[_e]);
                    for (_e = nn.length; _e--; )
                      nn[_e].elem !== this ||
                        (s != null && nn[_e].queue !== s) ||
                        (nn[_e].anim.stop(g), ($ = !1), nn.splice(_e, 1));
                    (!$ && g) || _.dequeue(this, s);
                  })
                );
              },
              finish: function (s) {
                return (
                  s !== !1 && (s = s || "fx"),
                  this.each(function () {
                    var d,
                      g = On.get(this),
                      j = g[s + "queue"],
                      $ = g[s + "queueHooks"],
                      _e = _.timers,
                      nn = j ? j.length : 0;
                    for (
                      g.finish = !0,
                        _.queue(this, s, []),
                        $ && $.stop && $.stop.call(this, !0),
                        d = _e.length;
                      d--;

                    )
                      _e[d].elem === this &&
                        _e[d].queue === s &&
                        (_e[d].anim.stop(!0), _e.splice(d, 1));
                    for (d = 0; d < nn; d++)
                      j[d] && j[d].finish && j[d].finish.call(this);
                    delete g.finish;
                  })
                );
              },
            }),
            _.each(["toggle", "show", "hide"], function (s, d) {
              var g = _.fn[d];
              _.fn[d] = function (j, $, _e) {
                return j == null || typeof j == "boolean"
                  ? g.apply(this, arguments)
                  : this.animate(Yl(d, !0), j, $, _e);
              };
            }),
            _.each(
              {
                slideDown: Yl("show"),
                slideUp: Yl("hide"),
                slideToggle: Yl("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (s, d) {
                _.fn[s] = function (g, j, $) {
                  return this.animate(d, g, j, $);
                };
              }
            ),
            (_.timers = []),
            (_.fx.tick = function () {
              var s,
                d = 0,
                g = _.timers;
              for (wl = Date.now(); d < g.length; d++)
                (s = g[d])() || g[d] !== s || g.splice(d--, 1);
              g.length || _.fx.stop(), (wl = void 0);
            }),
            (_.fx.timer = function (s) {
              _.timers.push(s), _.fx.start();
            }),
            (_.fx.interval = 13),
            (_.fx.start = function () {
              Gl || ((Gl = !0), cr());
            }),
            (_.fx.stop = function () {
              Gl = null;
            }),
            (_.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (_.fn.delay = function (s, d) {
              return (
                (s = (_.fx && _.fx.speeds[s]) || s),
                (d = d || "fx"),
                this.queue(d, function (g, j) {
                  var $ = a.setTimeout(g, s);
                  j.stop = function () {
                    a.clearTimeout($);
                  };
                })
              );
            }),
            (El = an.createElement("input")),
            (zr = an
              .createElement("select")
              .appendChild(an.createElement("option"))),
            (El.type = "checkbox"),
            (An.checkOn = El.value !== ""),
            (An.optSelected = zr.selected),
            ((El = an.createElement("input")).value = "t"),
            (El.type = "radio"),
            (An.radioValue = El.value === "t");
          var Qr,
            Bl = _.expr.attrHandle;
          _.fn.extend({
            attr: function (s, d) {
              return Pt(this, _.attr, s, d, 1 < arguments.length);
            },
            removeAttr: function (s) {
              return this.each(function () {
                _.removeAttr(this, s);
              });
            },
          }),
            _.extend({
              attr: function (s, d, g) {
                var j,
                  $,
                  _e = s.nodeType;
                if (_e !== 3 && _e !== 8 && _e !== 2)
                  return typeof s.getAttribute > "u"
                    ? _.prop(s, d, g)
                    : ((_e === 1 && _.isXMLDoc(s)) ||
                        ($ =
                          _.attrHooks[d.toLowerCase()] ||
                          (_.expr.match.bool.test(d) ? Qr : void 0)),
                      g !== void 0
                        ? g === null
                          ? void _.removeAttr(s, d)
                          : $ && "set" in $ && (j = $.set(s, g, d)) !== void 0
                          ? j
                          : (s.setAttribute(d, g + ""), g)
                        : $ && "get" in $ && (j = $.get(s, d)) !== null
                        ? j
                        : (j = _.find.attr(s, d)) == null
                        ? void 0
                        : j);
              },
              attrHooks: {
                type: {
                  set: function (s, d) {
                    if (!An.radioValue && d === "radio" && Wn(s, "input")) {
                      var g = s.value;
                      return s.setAttribute("type", d), g && (s.value = g), d;
                    }
                  },
                },
              },
              removeAttr: function (s, d) {
                var g,
                  j = 0,
                  $ = d && d.match(jt);
                if ($ && s.nodeType === 1)
                  for (; (g = $[j++]); ) s.removeAttribute(g);
              },
            }),
            (Qr = {
              set: function (s, d, g) {
                return d === !1 ? _.removeAttr(s, g) : s.setAttribute(g, g), g;
              },
            }),
            _.each(_.expr.match.bool.source.match(/\w+/g), function (s, d) {
              var g = Bl[d] || _.find.attr;
              Bl[d] = function (j, $, _e) {
                var nn,
                  on,
                  rn = $.toLowerCase();
                return (
                  _e ||
                    ((on = Bl[rn]),
                    (Bl[rn] = nn),
                    (nn = g(j, $, _e) != null ? rn : null),
                    (Bl[rn] = on)),
                  nn
                );
              };
            });
          var xo = /^(?:input|select|textarea|button)$/i,
            ko = /^(?:a|area)$/i;
          function Ht(s) {
            return (s.match(jt) || []).join(" ");
          }
          function Zt(s) {
            return (s.getAttribute && s.getAttribute("class")) || "";
          }
          function pr(s) {
            return Array.isArray(s)
              ? s
              : (typeof s == "string" && s.match(jt)) || [];
          }
          _.fn.extend({
            prop: function (s, d) {
              return Pt(this, _.prop, s, d, 1 < arguments.length);
            },
            removeProp: function (s) {
              return this.each(function () {
                delete this[_.propFix[s] || s];
              });
            },
          }),
            _.extend({
              prop: function (s, d, g) {
                var j,
                  $,
                  _e = s.nodeType;
                if (_e !== 3 && _e !== 8 && _e !== 2)
                  return (
                    (_e === 1 && _.isXMLDoc(s)) ||
                      ((d = _.propFix[d] || d), ($ = _.propHooks[d])),
                    g !== void 0
                      ? $ && "set" in $ && (j = $.set(s, g, d)) !== void 0
                        ? j
                        : (s[d] = g)
                      : $ && "get" in $ && (j = $.get(s, d)) !== null
                      ? j
                      : s[d]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (s) {
                    var d = _.find.attr(s, "tabindex");
                    return d
                      ? parseInt(d, 10)
                      : xo.test(s.nodeName) || (ko.test(s.nodeName) && s.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            An.optSelected ||
              (_.propHooks.selected = {
                get: function (s) {
                  var d = s.parentNode;
                  return d && d.parentNode && d.parentNode.selectedIndex, null;
                },
                set: function (s) {
                  var d = s.parentNode;
                  d &&
                    (d.selectedIndex,
                    d.parentNode && d.parentNode.selectedIndex);
                },
              }),
            _.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                _.propFix[this.toLowerCase()] = this;
              }
            ),
            _.fn.extend({
              addClass: function (s) {
                var d, g, j, $, _e, nn;
                return xn(s)
                  ? this.each(function (on) {
                      _(this).addClass(s.call(this, on, Zt(this)));
                    })
                  : (d = pr(s)).length
                  ? this.each(function () {
                      if (
                        ((j = Zt(this)),
                        (g = this.nodeType === 1 && " " + Ht(j) + " "))
                      ) {
                        for (_e = 0; _e < d.length; _e++)
                          ($ = d[_e]),
                            g.indexOf(" " + $ + " ") < 0 && (g += $ + " ");
                        (nn = Ht(g)),
                          j !== nn && this.setAttribute("class", nn);
                      }
                    })
                  : this;
              },
              removeClass: function (s) {
                var d, g, j, $, _e, nn;
                return xn(s)
                  ? this.each(function (on) {
                      _(this).removeClass(s.call(this, on, Zt(this)));
                    })
                  : arguments.length
                  ? (d = pr(s)).length
                    ? this.each(function () {
                        if (
                          ((j = Zt(this)),
                          (g = this.nodeType === 1 && " " + Ht(j) + " "))
                        ) {
                          for (_e = 0; _e < d.length; _e++)
                            for ($ = d[_e]; -1 < g.indexOf(" " + $ + " "); )
                              g = g.replace(" " + $ + " ", " ");
                          (nn = Ht(g)),
                            j !== nn && this.setAttribute("class", nn);
                        }
                      })
                    : this
                  : this.attr("class", "");
              },
              toggleClass: function (s, d) {
                var g,
                  j,
                  $,
                  _e,
                  nn = typeof s,
                  on = nn === "string" || Array.isArray(s);
                return xn(s)
                  ? this.each(function (rn) {
                      _(this).toggleClass(s.call(this, rn, Zt(this), d), d);
                    })
                  : typeof d == "boolean" && on
                  ? d
                    ? this.addClass(s)
                    : this.removeClass(s)
                  : ((g = pr(s)),
                    this.each(function () {
                      if (on)
                        for (_e = _(this), $ = 0; $ < g.length; $++)
                          (j = g[$]),
                            _e.hasClass(j) ? _e.removeClass(j) : _e.addClass(j);
                      else
                        (s !== void 0 && nn !== "boolean") ||
                          ((j = Zt(this)) && On.set(this, "__className__", j),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              j || s === !1
                                ? ""
                                : On.get(this, "__className__") || ""
                            ));
                    }));
              },
              hasClass: function (s) {
                var d,
                  g,
                  j = 0;
                for (d = " " + s + " "; (g = this[j++]); )
                  if (
                    g.nodeType === 1 &&
                    -1 < (" " + Ht(Zt(g)) + " ").indexOf(d)
                  )
                    return !0;
                return !1;
              },
            });
          var wo = /\r/g;
          _.fn.extend({
            val: function (s) {
              var d,
                g,
                j,
                $ = this[0];
              return arguments.length
                ? ((j = xn(s)),
                  this.each(function (_e) {
                    var nn;
                    this.nodeType === 1 &&
                      ((nn = j ? s.call(this, _e, _(this).val()) : s) == null
                        ? (nn = "")
                        : typeof nn == "number"
                        ? (nn += "")
                        : Array.isArray(nn) &&
                          (nn = _.map(nn, function (on) {
                            return on == null ? "" : on + "";
                          })),
                      ((d =
                        _.valHooks[this.type] ||
                        _.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in d &&
                        d.set(this, nn, "value") !== void 0) ||
                        (this.value = nn));
                  }))
                : $
                ? (d =
                    _.valHooks[$.type] ||
                    _.valHooks[$.nodeName.toLowerCase()]) &&
                  "get" in d &&
                  (g = d.get($, "value")) !== void 0
                  ? g
                  : typeof (g = $.value) == "string"
                  ? g.replace(wo, "")
                  : g ?? ""
                : void 0;
            },
          }),
            _.extend({
              valHooks: {
                option: {
                  get: function (s) {
                    var d = _.find.attr(s, "value");
                    return d ?? Ht(_.text(s));
                  },
                },
                select: {
                  get: function (s) {
                    var d,
                      g,
                      j,
                      $ = s.options,
                      _e = s.selectedIndex,
                      nn = s.type === "select-one",
                      on = nn ? null : [],
                      rn = nn ? _e + 1 : $.length;
                    for (j = _e < 0 ? rn : nn ? _e : 0; j < rn; j++)
                      if (
                        ((g = $[j]).selected || j === _e) &&
                        !g.disabled &&
                        (!g.parentNode.disabled ||
                          !Wn(g.parentNode, "optgroup"))
                      ) {
                        if (((d = _(g).val()), nn)) return d;
                        on.push(d);
                      }
                    return on;
                  },
                  set: function (s, d) {
                    for (
                      var g,
                        j,
                        $ = s.options,
                        _e = _.makeArray(d),
                        nn = $.length;
                      nn--;

                    )
                      ((j = $[nn]).selected =
                        -1 < _.inArray(_.valHooks.option.get(j), _e)) &&
                        (g = !0);
                    return g || (s.selectedIndex = -1), _e;
                  },
                },
              },
            }),
            _.each(["radio", "checkbox"], function () {
              (_.valHooks[this] = {
                set: function (s, d) {
                  if (Array.isArray(d))
                    return (s.checked = -1 < _.inArray(_(s).val(), d));
                },
              }),
                An.checkOn ||
                  (_.valHooks[this].get = function (s) {
                    return s.getAttribute("value") === null ? "on" : s.value;
                  });
            });
          var Ol = a.location,
            Gr = { guid: Date.now() },
            dr = /\?/;
          _.parseXML = function (s) {
            var d, g;
            if (!s || typeof s != "string") return null;
            try {
              d = new a.DOMParser().parseFromString(s, "text/xml");
            } catch {}
            return (
              (g = d && d.getElementsByTagName("parsererror")[0]),
              (d && !g) ||
                _.error(
                  "Invalid XML: " +
                    (g
                      ? _.map(g.childNodes, function (j) {
                          return j.textContent;
                        }).join(`
`)
                      : s)
                ),
              d
            );
          };
          var Yr = /^(?:focusinfocus|focusoutblur)$/,
            Jr = function (s) {
              s.stopPropagation();
            };
          _.extend(_.event, {
            trigger: function (s, d, g, j) {
              var $,
                _e,
                nn,
                on,
                rn,
                pn,
                _n,
                kn,
                fn = [g || an],
                En = hn.call(s, "type") ? s.type : s,
                Pn = hn.call(s, "namespace") ? s.namespace.split(".") : [];
              if (
                ((_e = kn = nn = g = g || an),
                g.nodeType !== 3 &&
                  g.nodeType !== 8 &&
                  !Yr.test(En + _.event.triggered) &&
                  (-1 < En.indexOf(".") &&
                    ((En = (Pn = En.split(".")).shift()), Pn.sort()),
                  (rn = En.indexOf(":") < 0 && "on" + En),
                  ((s = s[_.expando]
                    ? s
                    : new _.Event(En, typeof s == "object" && s)).isTrigger = j
                    ? 2
                    : 3),
                  (s.namespace = Pn.join(".")),
                  (s.rnamespace = s.namespace
                    ? new RegExp(
                        "(^|\\.)" + Pn.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (s.result = void 0),
                  s.target || (s.target = g),
                  (d = d == null ? [s] : _.makeArray(d, [s])),
                  (_n = _.event.special[En] || {}),
                  j || !_n.trigger || _n.trigger.apply(g, d) !== !1))
              ) {
                if (!j && !_n.noBubble && !Cn(g)) {
                  for (
                    on = _n.delegateType || En,
                      Yr.test(on + En) || (_e = _e.parentNode);
                    _e;
                    _e = _e.parentNode
                  )
                    fn.push(_e), (nn = _e);
                  nn === (g.ownerDocument || an) &&
                    fn.push(nn.defaultView || nn.parentWindow || a);
                }
                for ($ = 0; (_e = fn[$++]) && !s.isPropagationStopped(); )
                  (kn = _e),
                    (s.type = 1 < $ ? on : _n.bindType || En),
                    (pn =
                      (On.get(_e, "events") || Object.create(null))[s.type] &&
                      On.get(_e, "handle")) && pn.apply(_e, d),
                    (pn = rn && _e[rn]) &&
                      pn.apply &&
                      Tl(_e) &&
                      ((s.result = pn.apply(_e, d)),
                      s.result === !1 && s.preventDefault());
                return (
                  (s.type = En),
                  j ||
                    s.isDefaultPrevented() ||
                    (_n._default && _n._default.apply(fn.pop(), d) !== !1) ||
                    !Tl(g) ||
                    (rn &&
                      xn(g[En]) &&
                      !Cn(g) &&
                      ((nn = g[rn]) && (g[rn] = null),
                      (_.event.triggered = En),
                      s.isPropagationStopped() && kn.addEventListener(En, Jr),
                      g[En](),
                      s.isPropagationStopped() &&
                        kn.removeEventListener(En, Jr),
                      (_.event.triggered = void 0),
                      nn && (g[rn] = nn))),
                  s.result
                );
              }
            },
            simulate: function (s, d, g) {
              var j = _.extend(new _.Event(), g, { type: s, isSimulated: !0 });
              _.event.trigger(j, null, d);
            },
          }),
            _.fn.extend({
              trigger: function (s, d) {
                return this.each(function () {
                  _.event.trigger(s, d, this);
                });
              },
              triggerHandler: function (s, d) {
                var g = this[0];
                if (g) return _.event.trigger(s, d, g, !0);
              },
            });
          var Eo = /\[\]$/,
            Xr = /\r?\n/g,
            Mo = /^(?:submit|button|image|reset|file)$/i,
            So = /^(?:input|select|textarea|keygen)/i;
          function hr(s, d, g, j) {
            var $;
            if (Array.isArray(d))
              _.each(d, function (_e, nn) {
                g || Eo.test(s)
                  ? j(s, nn)
                  : hr(
                      s +
                        "[" +
                        (typeof nn == "object" && nn != null ? _e : "") +
                        "]",
                      nn,
                      g,
                      j
                    );
              });
            else if (g || Mn(d) !== "object") j(s, d);
            else for ($ in d) hr(s + "[" + $ + "]", d[$], g, j);
          }
          (_.param = function (s, d) {
            var g,
              j = [],
              $ = function (_e, nn) {
                var on = xn(nn) ? nn() : nn;
                j[j.length] =
                  encodeURIComponent(_e) + "=" + encodeURIComponent(on ?? "");
              };
            if (s == null) return "";
            if (Array.isArray(s) || (s.jquery && !_.isPlainObject(s)))
              _.each(s, function () {
                $(this.name, this.value);
              });
            else for (g in s) hr(g, s[g], d, $);
            return j.join("&");
          }),
            _.fn.extend({
              serialize: function () {
                return _.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var s = _.prop(this, "elements");
                  return s ? _.makeArray(s) : this;
                })
                  .filter(function () {
                    var s = this.type;
                    return (
                      this.name &&
                      !_(this).is(":disabled") &&
                      So.test(this.nodeName) &&
                      !Mo.test(s) &&
                      (this.checked || !Il.test(s))
                    );
                  })
                  .map(function (s, d) {
                    var g = _(this).val();
                    return g == null
                      ? null
                      : Array.isArray(g)
                      ? _.map(g, function (j) {
                          return {
                            name: d.name,
                            value: j.replace(
                              Xr,
                              `\r
`
                            ),
                          };
                        })
                      : {
                          name: d.name,
                          value: g.replace(
                            Xr,
                            `\r
`
                          ),
                        };
                  })
                  .get();
              },
            });
          var Co = /%20/g,
            jo = /#.*$/,
            bo = /([?&])_=[^&]*/,
            Do = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            To = /^(?:GET|HEAD)$/,
            Ro = /^\/\//,
            $r = {},
            fr = {},
            na = "*/".concat("*"),
            mr = an.createElement("a");
          function ga(s) {
            return function (d, g) {
              typeof d != "string" && ((g = d), (d = "*"));
              var j,
                $ = 0,
                _e = d.toLowerCase().match(jt) || [];
              if (xn(g))
                for (; (j = _e[$++]); )
                  j[0] === "+"
                    ? ((j = j.slice(1) || "*"), (s[j] = s[j] || []).unshift(g))
                    : (s[j] = s[j] || []).push(g);
            };
          }
          function _a(s, d, g, j) {
            var $ = {},
              _e = s === fr;
            function nn(on) {
              var rn;
              return (
                ($[on] = !0),
                _.each(s[on] || [], function (pn, _n) {
                  var kn = _n(d, g, j);
                  return typeof kn != "string" || _e || $[kn]
                    ? _e
                      ? !(rn = kn)
                      : void 0
                    : (d.dataTypes.unshift(kn), nn(kn), !1);
                }),
                rn
              );
            }
            return nn(d.dataTypes[0]) || (!$["*"] && nn("*"));
          }
          function gr(s, d) {
            var g,
              j,
              $ = _.ajaxSettings.flatOptions || {};
            for (g in d)
              d[g] !== void 0 && (($[g] ? s : j || (j = {}))[g] = d[g]);
            return j && _.extend(!0, s, j), s;
          }
          (mr.href = Ol.href),
            _.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: Ol.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    Ol.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": na,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": _.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (s, d) {
                return d ? gr(gr(s, _.ajaxSettings), d) : gr(_.ajaxSettings, s);
              },
              ajaxPrefilter: ga($r),
              ajaxTransport: ga(fr),
              ajax: function (s, d) {
                typeof s == "object" && ((d = s), (s = void 0)), (d = d || {});
                var g,
                  j,
                  $,
                  _e,
                  nn,
                  on,
                  rn,
                  pn,
                  _n,
                  kn,
                  fn = _.ajaxSetup({}, d),
                  En = fn.context || fn,
                  Pn =
                    fn.context && (En.nodeType || En.jquery) ? _(En) : _.event,
                  qn = _.Deferred(),
                  Kn = _.Callbacks("once memory"),
                  rt = fn.statusCode || {},
                  ut = {},
                  Dt = {},
                  Tt = "canceled",
                  Qn = {
                    readyState: 0,
                    getResponseHeader: function (Jn) {
                      var tt;
                      if (rn) {
                        if (!_e)
                          for (_e = {}; (tt = Do.exec($)); )
                            _e[tt[1].toLowerCase() + " "] = (
                              _e[tt[1].toLowerCase() + " "] || []
                            ).concat(tt[2]);
                        tt = _e[Jn.toLowerCase() + " "];
                      }
                      return tt == null ? null : tt.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return rn ? $ : null;
                    },
                    setRequestHeader: function (Jn, tt) {
                      return (
                        rn == null &&
                          ((Jn = Dt[Jn.toLowerCase()] =
                            Dt[Jn.toLowerCase()] || Jn),
                          (ut[Jn] = tt)),
                        this
                      );
                    },
                    overrideMimeType: function (Jn) {
                      return rn == null && (fn.mimeType = Jn), this;
                    },
                    statusCode: function (Jn) {
                      var tt;
                      if (Jn)
                        if (rn) Qn.always(Jn[Qn.status]);
                        else for (tt in Jn) rt[tt] = [rt[tt], Jn[tt]];
                      return this;
                    },
                    abort: function (Jn) {
                      var tt = Jn || Tt;
                      return g && g.abort(tt), Qt(0, tt), this;
                    },
                  };
                if (
                  (qn.promise(Qn),
                  (fn.url = ((s || fn.url || Ol.href) + "").replace(
                    Ro,
                    Ol.protocol + "//"
                  )),
                  (fn.type = d.method || d.type || fn.method || fn.type),
                  (fn.dataTypes = (fn.dataType || "*")
                    .toLowerCase()
                    .match(jt) || [""]),
                  fn.crossDomain == null)
                ) {
                  on = an.createElement("a");
                  try {
                    (on.href = fn.url),
                      (on.href = on.href),
                      (fn.crossDomain =
                        mr.protocol + "//" + mr.host !=
                        on.protocol + "//" + on.host);
                  } catch {
                    fn.crossDomain = !0;
                  }
                }
                if (
                  (fn.data &&
                    fn.processData &&
                    typeof fn.data != "string" &&
                    (fn.data = _.param(fn.data, fn.traditional)),
                  _a($r, fn, d, Qn),
                  rn)
                )
                  return Qn;
                for (_n in ((pn = _.event && fn.global) &&
                  _.active++ == 0 &&
                  _.event.trigger("ajaxStart"),
                (fn.type = fn.type.toUpperCase()),
                (fn.hasContent = !To.test(fn.type)),
                (j = fn.url.replace(jo, "")),
                fn.hasContent
                  ? fn.data &&
                    fn.processData &&
                    (fn.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) === 0 &&
                    (fn.data = fn.data.replace(Co, "+"))
                  : ((kn = fn.url.slice(j.length)),
                    fn.data &&
                      (fn.processData || typeof fn.data == "string") &&
                      ((j += (dr.test(j) ? "&" : "?") + fn.data),
                      delete fn.data),
                    fn.cache === !1 &&
                      ((j = j.replace(bo, "$1")),
                      (kn = (dr.test(j) ? "&" : "?") + "_=" + Gr.guid++ + kn)),
                    (fn.url = j + kn)),
                fn.ifModified &&
                  (_.lastModified[j] &&
                    Qn.setRequestHeader("If-Modified-Since", _.lastModified[j]),
                  _.etag[j] && Qn.setRequestHeader("If-None-Match", _.etag[j])),
                ((fn.data && fn.hasContent && fn.contentType !== !1) ||
                  d.contentType) &&
                  Qn.setRequestHeader("Content-Type", fn.contentType),
                Qn.setRequestHeader(
                  "Accept",
                  fn.dataTypes[0] && fn.accepts[fn.dataTypes[0]]
                    ? fn.accepts[fn.dataTypes[0]] +
                        (fn.dataTypes[0] !== "*" ? ", " + na + "; q=0.01" : "")
                    : fn.accepts["*"]
                ),
                fn.headers))
                  Qn.setRequestHeader(_n, fn.headers[_n]);
                if (
                  fn.beforeSend &&
                  (fn.beforeSend.call(En, Qn, fn) === !1 || rn)
                )
                  return Qn.abort();
                if (
                  ((Tt = "abort"),
                  Kn.add(fn.complete),
                  Qn.done(fn.success),
                  Qn.fail(fn.error),
                  (g = _a(fr, fn, d, Qn)))
                ) {
                  if (
                    ((Qn.readyState = 1),
                    pn && Pn.trigger("ajaxSend", [Qn, fn]),
                    rn)
                  )
                    return Qn;
                  fn.async &&
                    0 < fn.timeout &&
                    (nn = a.setTimeout(function () {
                      Qn.abort("timeout");
                    }, fn.timeout));
                  try {
                    (rn = !1), g.send(ut, Qt);
                  } catch (Jn) {
                    if (rn) throw Jn;
                    Qt(-1, Jn);
                  }
                } else Qt(-1, "No Transport");
                function Qt(Jn, tt, Ul, _r) {
                  var Rt,
                    Vl,
                    Ot,
                    Vt,
                    Ml,
                    kt = tt;
                  rn ||
                    ((rn = !0),
                    nn && a.clearTimeout(nn),
                    (g = void 0),
                    ($ = _r || ""),
                    (Qn.readyState = 0 < Jn ? 4 : 0),
                    (Rt = (200 <= Jn && Jn < 300) || Jn === 304),
                    Ul &&
                      (Vt = (function (ct, ot, ht) {
                        for (
                          var Wt,
                            ft,
                            Nn,
                            at,
                            it = ct.contents,
                            $n = ct.dataTypes;
                          $n[0] === "*";

                        )
                          $n.shift(),
                            Wt === void 0 &&
                              (Wt =
                                ct.mimeType ||
                                ot.getResponseHeader("Content-Type"));
                        if (Wt) {
                          for (ft in it)
                            if (it[ft] && it[ft].test(Wt)) {
                              $n.unshift(ft);
                              break;
                            }
                        }
                        if ($n[0] in ht) Nn = $n[0];
                        else {
                          for (ft in ht) {
                            if (!$n[0] || ct.converters[ft + " " + $n[0]]) {
                              Nn = ft;
                              break;
                            }
                            at || (at = ft);
                          }
                          Nn = Nn || at;
                        }
                        if (Nn) return Nn !== $n[0] && $n.unshift(Nn), ht[Nn];
                      })(fn, Qn, Ul)),
                    !Rt &&
                      -1 < _.inArray("script", fn.dataTypes) &&
                      _.inArray("json", fn.dataTypes) < 0 &&
                      (fn.converters["text script"] = function () {}),
                    (Vt = (function (ct, ot, ht, Wt) {
                      var ft,
                        Nn,
                        at,
                        it,
                        $n,
                        Lt = {},
                        Sl = ct.dataTypes.slice();
                      if (Sl[1])
                        for (at in ct.converters)
                          Lt[at.toLowerCase()] = ct.converters[at];
                      for (Nn = Sl.shift(); Nn; )
                        if (
                          (ct.responseFields[Nn] &&
                            (ht[ct.responseFields[Nn]] = ot),
                          !$n &&
                            Wt &&
                            ct.dataFilter &&
                            (ot = ct.dataFilter(ot, ct.dataType)),
                          ($n = Nn),
                          (Nn = Sl.shift()))
                        ) {
                          if (Nn === "*") Nn = $n;
                          else if ($n !== "*" && $n !== Nn) {
                            if (!(at = Lt[$n + " " + Nn] || Lt["* " + Nn])) {
                              for (ft in Lt)
                                if (
                                  (it = ft.split(" "))[1] === Nn &&
                                  (at =
                                    Lt[$n + " " + it[0]] || Lt["* " + it[0]])
                                ) {
                                  at === !0
                                    ? (at = Lt[ft])
                                    : Lt[ft] !== !0 &&
                                      ((Nn = it[0]), Sl.unshift(it[1]));
                                  break;
                                }
                            }
                            if (at !== !0)
                              if (at && ct.throws) ot = at(ot);
                              else
                                try {
                                  ot = at(ot);
                                } catch (Jl) {
                                  return {
                                    state: "parsererror",
                                    error: at
                                      ? Jl
                                      : "No conversion from " +
                                        $n +
                                        " to " +
                                        Nn,
                                  };
                                }
                          }
                        }
                      return { state: "success", data: ot };
                    })(fn, Vt, Qn, Rt)),
                    Rt
                      ? (fn.ifModified &&
                          ((Ml = Qn.getResponseHeader("Last-Modified")) &&
                            (_.lastModified[j] = Ml),
                          (Ml = Qn.getResponseHeader("etag")) &&
                            (_.etag[j] = Ml)),
                        Jn === 204 || fn.type === "HEAD"
                          ? (kt = "nocontent")
                          : Jn === 304
                          ? (kt = "notmodified")
                          : ((kt = Vt.state),
                            (Vl = Vt.data),
                            (Rt = !(Ot = Vt.error))))
                      : ((Ot = kt),
                        (!Jn && kt) || ((kt = "error"), Jn < 0 && (Jn = 0))),
                    (Qn.status = Jn),
                    (Qn.statusText = (tt || kt) + ""),
                    Rt
                      ? qn.resolveWith(En, [Vl, kt, Qn])
                      : qn.rejectWith(En, [Qn, kt, Ot]),
                    Qn.statusCode(rt),
                    (rt = void 0),
                    pn &&
                      Pn.trigger(Rt ? "ajaxSuccess" : "ajaxError", [
                        Qn,
                        fn,
                        Rt ? Vl : Ot,
                      ]),
                    Kn.fireWith(En, [Qn, kt]),
                    pn &&
                      (Pn.trigger("ajaxComplete", [Qn, fn]),
                      --_.active || _.event.trigger("ajaxStop")));
                }
                return Qn;
              },
              getJSON: function (s, d, g) {
                return _.get(s, d, g, "json");
              },
              getScript: function (s, d) {
                return _.get(s, void 0, d, "script");
              },
            }),
            _.each(["get", "post"], function (s, d) {
              _[d] = function (g, j, $, _e) {
                return (
                  xn(j) && ((_e = _e || $), ($ = j), (j = void 0)),
                  _.ajax(
                    _.extend(
                      { url: g, type: d, dataType: _e, data: j, success: $ },
                      _.isPlainObject(g) && g
                    )
                  )
                );
              };
            }),
            _.ajaxPrefilter(function (s) {
              var d;
              for (d in s.headers)
                d.toLowerCase() === "content-type" &&
                  (s.contentType = s.headers[d] || "");
            }),
            (_._evalUrl = function (s, d, g) {
              return _.ajax({
                url: s,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (j) {
                  _.globalEval(j, d, g);
                },
              });
            }),
            _.fn.extend({
              wrapAll: function (s) {
                var d;
                return (
                  this[0] &&
                    (xn(s) && (s = s.call(this[0])),
                    (d = _(s, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && d.insertBefore(this[0]),
                    d
                      .map(function () {
                        for (var g = this; g.firstElementChild; )
                          g = g.firstElementChild;
                        return g;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (s) {
                return xn(s)
                  ? this.each(function (d) {
                      _(this).wrapInner(s.call(this, d));
                    })
                  : this.each(function () {
                      var d = _(this),
                        g = d.contents();
                      g.length ? g.wrapAll(s) : d.append(s);
                    });
              },
              wrap: function (s) {
                var d = xn(s);
                return this.each(function (g) {
                  _(this).wrapAll(d ? s.call(this, g) : s);
                });
              },
              unwrap: function (s) {
                return (
                  this.parent(s)
                    .not("body")
                    .each(function () {
                      _(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (_.expr.pseudos.hidden = function (s) {
              return !_.expr.pseudos.visible(s);
            }),
            (_.expr.pseudos.visible = function (s) {
              return !!(
                s.offsetWidth ||
                s.offsetHeight ||
                s.getClientRects().length
              );
            }),
            (_.ajaxSettings.xhr = function () {
              try {
                return new a.XMLHttpRequest();
              } catch {}
            });
          var Lo = { 0: 200, 1223: 204 },
            Nl = _.ajaxSettings.xhr();
          (An.cors = !!Nl && "withCredentials" in Nl),
            (An.ajax = Nl = !!Nl),
            _.ajaxTransport(function (s) {
              var d, g;
              if (An.cors || (Nl && !s.crossDomain))
                return {
                  send: function (j, $) {
                    var _e,
                      nn = s.xhr();
                    if (
                      (nn.open(s.type, s.url, s.async, s.username, s.password),
                      s.xhrFields)
                    )
                      for (_e in s.xhrFields) nn[_e] = s.xhrFields[_e];
                    for (_e in (s.mimeType &&
                      nn.overrideMimeType &&
                      nn.overrideMimeType(s.mimeType),
                    s.crossDomain ||
                      j["X-Requested-With"] ||
                      (j["X-Requested-With"] = "XMLHttpRequest"),
                    j))
                      nn.setRequestHeader(_e, j[_e]);
                    (d = function (on) {
                      return function () {
                        d &&
                          ((d =
                            g =
                            nn.onload =
                            nn.onerror =
                            nn.onabort =
                            nn.ontimeout =
                            nn.onreadystatechange =
                              null),
                          on === "abort"
                            ? nn.abort()
                            : on === "error"
                            ? typeof nn.status != "number"
                              ? $(0, "error")
                              : $(nn.status, nn.statusText)
                            : $(
                                Lo[nn.status] || nn.status,
                                nn.statusText,
                                (nn.responseType || "text") !== "text" ||
                                  typeof nn.responseText != "string"
                                  ? { binary: nn.response }
                                  : { text: nn.responseText },
                                nn.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (nn.onload = d()),
                      (g = nn.onerror = nn.ontimeout = d("error")),
                      nn.onabort !== void 0
                        ? (nn.onabort = g)
                        : (nn.onreadystatechange = function () {
                            nn.readyState === 4 &&
                              a.setTimeout(function () {
                                d && g();
                              });
                          }),
                      (d = d("abort"));
                    try {
                      nn.send((s.hasContent && s.data) || null);
                    } catch (on) {
                      if (d) throw on;
                    }
                  },
                  abort: function () {
                    d && d();
                  },
                };
            }),
            _.ajaxPrefilter(function (s) {
              s.crossDomain && (s.contents.script = !1);
            }),
            _.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (s) {
                  return _.globalEval(s), s;
                },
              },
            }),
            _.ajaxPrefilter("script", function (s) {
              s.cache === void 0 && (s.cache = !1),
                s.crossDomain && (s.type = "GET");
            }),
            _.ajaxTransport("script", function (s) {
              var d, g;
              if (s.crossDomain || s.scriptAttrs)
                return {
                  send: function (j, $) {
                    (d = _("<script>")
                      .attr(s.scriptAttrs || {})
                      .prop({ charset: s.scriptCharset, src: s.url })
                      .on(
                        "load error",
                        (g = function (_e) {
                          d.remove(),
                            (g = null),
                            _e && $(_e.type === "error" ? 404 : 200, _e.type);
                        })
                      )),
                      an.head.appendChild(d[0]);
                  },
                  abort: function () {
                    g && g();
                  },
                };
            });
          var xa,
            ba = [],
            vr = /(=)\?(?=&|$)|\?\?/;
          _.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var s = ba.pop() || _.expando + "_" + Gr.guid++;
              return (this[s] = !0), s;
            },
          }),
            _.ajaxPrefilter("json jsonp", function (s, d, g) {
              var j,
                $,
                _e,
                nn =
                  s.jsonp !== !1 &&
                  (vr.test(s.url)
                    ? "url"
                    : typeof s.data == "string" &&
                      (s.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) === 0 &&
                      vr.test(s.data) &&
                      "data");
              if (nn || s.dataTypes[0] === "jsonp")
                return (
                  (j = s.jsonpCallback =
                    xn(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback),
                  nn
                    ? (s[nn] = s[nn].replace(vr, "$1" + j))
                    : s.jsonp !== !1 &&
                      (s.url +=
                        (dr.test(s.url) ? "&" : "?") + s.jsonp + "=" + j),
                  (s.converters["script json"] = function () {
                    return _e || _.error(j + " was not called"), _e[0];
                  }),
                  (s.dataTypes[0] = "json"),
                  ($ = a[j]),
                  (a[j] = function () {
                    _e = arguments;
                  }),
                  g.always(function () {
                    $ === void 0 ? _(a).removeProp(j) : (a[j] = $),
                      s[j] && ((s.jsonpCallback = d.jsonpCallback), ba.push(j)),
                      _e && xn($) && $(_e[0]),
                      (_e = $ = void 0);
                  }),
                  "script"
                );
            }),
            (An.createHTMLDocument =
              (((xa = an.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              xa.childNodes.length === 2)),
            (_.parseHTML = function (s, d, g) {
              return typeof s != "string"
                ? []
                : (typeof d == "boolean" && ((g = d), (d = !1)),
                  d ||
                    (An.createHTMLDocument
                      ? (((j = (d =
                          an.implementation.createHTMLDocument(
                            ""
                          )).createElement("base")).href = an.location.href),
                        d.head.appendChild(j))
                      : (d = an)),
                  (_e = !g && []),
                  ($ = lt.exec(s))
                    ? [d.createElement($[1])]
                    : (($ = Rr([s], d, _e)),
                      _e && _e.length && _(_e).remove(),
                      _.merge([], $.childNodes)));
              var j, $, _e;
            }),
            (_.fn.load = function (s, d, g) {
              var j,
                $,
                _e,
                nn = this,
                on = s.indexOf(" ");
              return (
                -1 < on && ((j = Ht(s.slice(on))), (s = s.slice(0, on))),
                xn(d)
                  ? ((g = d), (d = void 0))
                  : d && typeof d == "object" && ($ = "POST"),
                0 < nn.length &&
                  _.ajax({
                    url: s,
                    type: $ || "GET",
                    dataType: "html",
                    data: d,
                  })
                    .done(function (rn) {
                      (_e = arguments),
                        nn.html(
                          j ? _("<div>").append(_.parseHTML(rn)).find(j) : rn
                        );
                    })
                    .always(
                      g &&
                        function (rn, pn) {
                          nn.each(function () {
                            g.apply(this, _e || [rn.responseText, pn, rn]);
                          });
                        }
                    ),
                this
              );
            }),
            (_.expr.pseudos.animated = function (s) {
              return _.grep(_.timers, function (d) {
                return s === d.elem;
              }).length;
            }),
            (_.offset = {
              setOffset: function (s, d, g) {
                var j,
                  $,
                  _e,
                  nn,
                  on,
                  rn,
                  pn = _.css(s, "position"),
                  _n = _(s),
                  kn = {};
                pn === "static" && (s.style.position = "relative"),
                  (on = _n.offset()),
                  (_e = _.css(s, "top")),
                  (rn = _.css(s, "left")),
                  (pn === "absolute" || pn === "fixed") &&
                  -1 < (_e + rn).indexOf("auto")
                    ? ((nn = (j = _n.position()).top), ($ = j.left))
                    : ((nn = parseFloat(_e) || 0), ($ = parseFloat(rn) || 0)),
                  xn(d) && (d = d.call(s, g, _.extend({}, on))),
                  d.top != null && (kn.top = d.top - on.top + nn),
                  d.left != null && (kn.left = d.left - on.left + $),
                  "using" in d ? d.using.call(s, kn) : _n.css(kn);
              },
            }),
            _.fn.extend({
              offset: function (s) {
                if (arguments.length)
                  return s === void 0
                    ? this
                    : this.each(function ($) {
                        _.offset.setOffset(this, s, $);
                      });
                var d,
                  g,
                  j = this[0];
                return j
                  ? j.getClientRects().length
                    ? ((d = j.getBoundingClientRect()),
                      (g = j.ownerDocument.defaultView),
                      {
                        top: d.top + g.pageYOffset,
                        left: d.left + g.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var s,
                    d,
                    g,
                    j = this[0],
                    $ = { top: 0, left: 0 };
                  if (_.css(j, "position") === "fixed")
                    d = j.getBoundingClientRect();
                  else {
                    for (
                      d = this.offset(),
                        g = j.ownerDocument,
                        s = j.offsetParent || g.documentElement;
                      s &&
                      (s === g.body || s === g.documentElement) &&
                      _.css(s, "position") === "static";

                    )
                      s = s.parentNode;
                    s &&
                      s !== j &&
                      s.nodeType === 1 &&
                      ((($ = _(s).offset()).top += _.css(
                        s,
                        "borderTopWidth",
                        !0
                      )),
                      ($.left += _.css(s, "borderLeftWidth", !0)));
                  }
                  return {
                    top: d.top - $.top - _.css(j, "marginTop", !0),
                    left: d.left - $.left - _.css(j, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var s = this.offsetParent;
                    s && _.css(s, "position") === "static";

                  )
                    s = s.offsetParent;
                  return s || Ft;
                });
              },
            }),
            _.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (s, d) {
                var g = d === "pageYOffset";
                _.fn[s] = function (j) {
                  return Pt(
                    this,
                    function ($, _e, nn) {
                      var on;
                      if (
                        (Cn($)
                          ? (on = $)
                          : $.nodeType === 9 && (on = $.defaultView),
                        nn === void 0)
                      )
                        return on ? on[d] : $[_e];
                      on
                        ? on.scrollTo(
                            g ? on.pageXOffset : nn,
                            g ? nn : on.pageYOffset
                          )
                        : ($[_e] = nn);
                    },
                    s,
                    j,
                    arguments.length
                  );
                };
              }
            ),
            _.each(["top", "left"], function (s, d) {
              _.cssHooks[d] = Nr(An.pixelPosition, function (g, j) {
                if (j)
                  return (
                    (j = Pl(g, d)), ir.test(j) ? _(g).position()[d] + "px" : j
                  );
              });
            }),
            _.each({ Height: "height", Width: "width" }, function (s, d) {
              _.each(
                { padding: "inner" + s, content: d, "": "outer" + s },
                function (g, j) {
                  _.fn[j] = function ($, _e) {
                    var nn = arguments.length && (g || typeof $ != "boolean"),
                      on = g || ($ === !0 || _e === !0 ? "margin" : "border");
                    return Pt(
                      this,
                      function (rn, pn, _n) {
                        var kn;
                        return Cn(rn)
                          ? j.indexOf("outer") === 0
                            ? rn["inner" + s]
                            : rn.document.documentElement["client" + s]
                          : rn.nodeType === 9
                          ? ((kn = rn.documentElement),
                            Math.max(
                              rn.body["scroll" + s],
                              kn["scroll" + s],
                              rn.body["offset" + s],
                              kn["offset" + s],
                              kn["client" + s]
                            ))
                          : _n === void 0
                          ? _.css(rn, pn, on)
                          : _.style(rn, pn, _n, on);
                      },
                      d,
                      nn ? $ : void 0,
                      nn
                    );
                  };
                }
              );
            }),
            _.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (s, d) {
                _.fn[d] = function (g) {
                  return this.on(d, g);
                };
              }
            ),
            _.fn.extend({
              bind: function (s, d, g) {
                return this.on(s, null, d, g);
              },
              unbind: function (s, d) {
                return this.off(s, null, d);
              },
              delegate: function (s, d, g, j) {
                return this.on(d, s, g, j);
              },
              undelegate: function (s, d, g) {
                return arguments.length === 1
                  ? this.off(s, "**")
                  : this.off(d, s || "**", g);
              },
              hover: function (s, d) {
                return this.on("mouseenter", s).on("mouseleave", d || s);
              },
            }),
            _.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (s, d) {
                _.fn[d] = function (g, j) {
                  return 0 < arguments.length
                    ? this.on(d, null, g, j)
                    : this.trigger(d);
                };
              }
            );
          var Io = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
          (_.proxy = function (s, d) {
            var g, j, $;
            if ((typeof d == "string" && ((g = s[d]), (d = s), (s = g)), xn(s)))
              return (
                (j = h.call(arguments, 2)),
                (($ = function () {
                  return s.apply(d || this, j.concat(h.call(arguments)));
                }).guid = s.guid =
                  s.guid || _.guid++),
                $
              );
          }),
            (_.holdReady = function (s) {
              s ? _.readyWait++ : _.ready(!0);
            }),
            (_.isArray = Array.isArray),
            (_.parseJSON = JSON.parse),
            (_.nodeName = Wn),
            (_.isFunction = xn),
            (_.isWindow = Cn),
            (_.camelCase = bt),
            (_.type = Mn),
            (_.now = Date.now),
            (_.isNumeric = function (s) {
              var d = _.type(s);
              return (
                (d === "number" || d === "string") && !isNaN(s - parseFloat(s))
              );
            }),
            (_.trim = function (s) {
              return s == null ? "" : (s + "").replace(Io, "$1");
            });
          var Po = a.jQuery,
            Bo = a.$;
          return (
            (_.noConflict = function (s) {
              return (
                a.$ === _ && (a.$ = Bo),
                s && a.jQuery === _ && (a.jQuery = Po),
                _
              );
            }),
            typeof i > "u" && (a.jQuery = a.$ = _),
            _
          );
        });
      })(jquery_min)),
    jquery_min.exports
  );
}
(function (module, exports) {
  (function (a, i) {
    module.exports = i(requireJquery_min(), reactExports);
  })(
    self,
    function (
      __WEBPACK_EXTERNAL_MODULE_jquery__,
      __WEBPACK_EXTERNAL_MODULE_react__
    ) {
      return (() => {
        var __webpack_modules__ = {
            "./src/components/MapContainer/MapContainer.tsx": (
              __unused_webpack_module,
              __webpack_exports__,
              __webpack_require__
            ) => {
              eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapContainer": () => (/* binding */ MapContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/MapContainer/styles.module.scss");



const MapContainer = ({
  containerRef,
  className,
  style
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  style: style,
  className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].root, className),
  ref: containerRef
});

//# sourceURL=webpack://@react-jvectormap/core/./src/components/MapContainer/MapContainer.tsx?`);
            },
            "./src/components/MapContainer/index.ts": (
              __unused_webpack_module,
              __webpack_exports__,
              __webpack_require__
            ) => {
              eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapContainer": () => (/* reexport safe */ _MapContainer__WEBPACK_IMPORTED_MODULE_0__.MapContainer)
/* harmony export */ });
/* harmony import */ var _MapContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MapContainer */ "./src/components/MapContainer/MapContainer.tsx");


//# sourceURL=webpack://@react-jvectormap/core/./src/components/MapContainer/index.ts?`);
            },
            "./src/components/MultiMap/MultiMap.tsx": (
              __unused_webpack_module,
              __webpack_exports__,
              __webpack_require__
            ) => {
              eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiMap": () => (/* binding */ MultiMap)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MapContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MapContainer */ "./src/components/MapContainer/index.ts");



const MultiMap = ({
  mapRef,
  style,
  className,
  ...props
}) => {
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const mapContainer = containerRef.current;
    const {
      main,
      ...rest
    } = props;
    const {
      map: {
        name,
        content
      },
      ...restMain
    } = main;
    jquery__WEBPACK_IMPORTED_MODULE_1___default().fn.vectorMap("addMap", name, content);

    if (mapContainer) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(mapContainer).multiMap({
        main: { ...restMain,
          map: name
        },
        ...rest
      });
    }
  }, [mapRef, props]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MapContainer__WEBPACK_IMPORTED_MODULE_2__.MapContainer, {
    style: style,
    className: className,
    containerRef: containerRef
  });
};

//# sourceURL=webpack://@react-jvectormap/core/./src/components/MultiMap/MultiMap.tsx?`);
            },
            "./src/components/MultiMap/index.ts": (
              __unused_webpack_module,
              __webpack_exports__,
              __webpack_require__
            ) => {
              eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiMap": () => (/* reexport safe */ _MultiMap__WEBPACK_IMPORTED_MODULE_0__.MultiMap)
/* harmony export */ });
/* harmony import */ var _MultiMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultiMap */ "./src/components/MultiMap/MultiMap.tsx");


//# sourceURL=webpack://@react-jvectormap/core/./src/components/MultiMap/index.ts?`);
            },
            "./src/components/VectorMap/VectorMap.tsx": (
              __unused_webpack_module,
              __webpack_exports__,
              __webpack_require__
            ) => {
              eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMap": () => (/* binding */ VectorMap)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MapContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MapContainer */ "./src/components/MapContainer/index.ts");



const VectorMap = ({
  map,
  mapRef,
  style,
  className,
  series,
  ...props
}) => {
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const mapContainer = containerRef.current;

    if (!map) {
      console.error("[react-jvectormap]: no map was loaded!");
    }

    const {
      name,
      content
    } = map;
    jquery__WEBPACK_IMPORTED_MODULE_1___default().fn.vectorMap("addMap", name, content);

    if (mapContainer) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(mapContainer).vectorMap({
        map: name,
        series,
        ...props
      });

      if (map && (mapRef === null || mapRef === void 0 ? void 0 : mapRef.current) === null) {
        mapRef.current = jquery__WEBPACK_IMPORTED_MODULE_1___default()(mapContainer).vectorMap("get", "mapObject");
      }
    }
  }, [map, mapRef, props, series]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const mapContainer = containerRef.current;

    if (series && mapContainer) {
      const map = jquery__WEBPACK_IMPORTED_MODULE_1___default()(mapContainer).vectorMap("get", "mapObject");
      const {
        markers = [],
        regions = []
      } = series;
      regions.forEach(({
        values
      }, index) => {
        var _map$series;

        if (values && (_map$series = map.series) !== null && _map$series !== void 0 && _map$series.regions) {
          var _map$series2, _map$series2$regions$;

          (_map$series2 = map.series) === null || _map$series2 === void 0 ? void 0 : (_map$series2$regions$ = _map$series2.regions[index]) === null || _map$series2$regions$ === void 0 ? void 0 : _map$series2$regions$.clearAndSet(values);
        }
      });
      markers.forEach(({
        values
      }, index) => {
        var _map$series3;

        if (values && (_map$series3 = map.series) !== null && _map$series3 !== void 0 && _map$series3.markers) {
          var _map$series4, _map$series4$markers$;

          (_map$series4 = map.series) === null || _map$series4 === void 0 ? void 0 : (_map$series4$markers$ = _map$series4.markers[index]) === null || _map$series4$markers$ === void 0 ? void 0 : _map$series4$markers$.clearAndSet(values);
        }
      });
    }
  }, [series]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MapContainer__WEBPACK_IMPORTED_MODULE_2__.MapContainer, {
    className: className,
    style: style,
    containerRef: containerRef
  });
};

//# sourceURL=webpack://@react-jvectormap/core/./src/components/VectorMap/VectorMap.tsx?`);
            },
            "./src/components/VectorMap/index.ts": (
              __unused_webpack_module,
              __webpack_exports__,
              __webpack_require__
            ) => {
              eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMap": () => (/* reexport safe */ _VectorMap__WEBPACK_IMPORTED_MODULE_0__.VectorMap)
/* harmony export */ });
/* harmony import */ var _VectorMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VectorMap */ "./src/components/VectorMap/VectorMap.tsx");


//# sourceURL=webpack://@react-jvectormap/core/./src/components/VectorMap/index.ts?`);
            },
            "./src/components/index.ts": (
              __unused_webpack_module,
              __webpack_exports__,
              __webpack_require__
            ) => {
              eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMap": () => (/* reexport safe */ _VectorMap__WEBPACK_IMPORTED_MODULE_0__.VectorMap),
/* harmony export */   "MultiMap": () => (/* reexport safe */ _MultiMap__WEBPACK_IMPORTED_MODULE_1__.MultiMap)
/* harmony export */ });
/* harmony import */ var _VectorMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VectorMap */ "./src/components/VectorMap/index.ts");
/* harmony import */ var _MultiMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultiMap */ "./src/components/MultiMap/index.ts");



//# sourceURL=webpack://@react-jvectormap/core/./src/components/index.ts?`);
            },
            "./src/index.ts": (
              __unused_webpack_module,
              __webpack_exports__,
              __webpack_require__
            ) => {
              eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiMap": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.MultiMap),
/* harmony export */   "VectorMap": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.VectorMap),
/* harmony export */   "AttributeSeriesBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.AttributeSeriesBuilder),
/* harmony export */   "LabelsBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.LabelsBuilder),
/* harmony export */   "LabelsPropsBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.LabelsPropsBuilder),
/* harmony export */   "MarkerBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.MarkerBuilder),
/* harmony export */   "MultiMapBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.MultiMapBuilder),
/* harmony export */   "SeriesBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.SeriesBuilder),
/* harmony export */   "StyleBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.StyleBuilder),
/* harmony export */   "VectorMapBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.VectorMapBuilder)
/* harmony export */ });
/* harmony import */ var _react_jvectormap_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-jvectormap/lib */ "../jvectormap/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/components/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");




(0,_react_jvectormap_lib__WEBPACK_IMPORTED_MODULE_0__.loadJVectorMap)((jquery__WEBPACK_IMPORTED_MODULE_1___default()));

//# sourceURL=webpack://@react-jvectormap/core/./src/index.ts?`);
            },
            "./src/utils/builders/AttributeSeriesBuilder.ts": (
              __unused_webpack_module,
              __webpack_exports__,
              __webpack_require__
            ) => {
              eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttributeSeriesBuilder": () => (/* binding */ AttributeSeriesBuilder)
/* harmony export */ });
class AttributeSeriesBuilder {
  constructor(attribute) {
    this.attribute = attribute;
  }
  /**
   *
   * @param value
   */


  setAttribute(value) {
    this.attribute = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setScale(value) {
    this.scale = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setValues(value) {
    this.values = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setNormalizeFunction(value) {
    this.normalizeFunction = value;
    return this;
  }

  build() {
    return {
      scale: this.scale,
      values: this.values,
      attribute: this.attribute,
      normalizeFunction: this.normalizeFunction
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/AttributeSeriesBuilder.ts?`);
            },
            "./src/utils/builders/LabelsBuilder.ts": (
              __unused_webpack_module,
              __webpack_exports__,
              __webpack_require__
            ) => {
              eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelsBuilder": () => (/* binding */ LabelsBuilder)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/builders/utils.ts");

class LabelsBuilder {
  /**
   *
   * @param values
   */
  addMarkersLabelProps(...values) {
    if (!this.markers) {
      this.markers = [];
    }

    this.markers.push(...values);
    return this;
  }
  /**
   *
   * @param values
   */


  addRegionsLabelProps(...values) {
    if (!this.regions) {
      this.regions = [];
    }

    this.regions.push(...values);
    return this;
  }

  build() {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripUndefinedValues)({
      markers: this.markers,
      regions: this.regions
    });
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/LabelsBuilder.ts?`);
            },
            "./src/utils/builders/LabelsPropsBuilder.ts": (
              __unused_webpack_module,
              __webpack_exports__,
              __webpack_require__
            ) => {
              eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelsPropsBuilder": () => (/* binding */ LabelsPropsBuilder)
/* harmony export */ });
class LabelsPropsBuilder {
  constructor(render, offsets) {
    this.render = render;
    this.offsets = offsets;
  }
  /**
   *
   * @param render
   */


  setRender(render) {
    this.render = render;
    return this;
  }
  /**
   *
   * @param offsets
   */


  setOffsets(offsets) {
    this.offsets = offsets;
    return this;
  }
  /**
   *
   */


  build() {
    return {
      render: this.render,
      offsets: this.offsets
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/LabelsPropsBuilder.ts?`);
            },
            "./src/utils/builders/MarkerBuilder.ts": (
              __unused_webpack_module,
              __webpack_exports__,
              __webpack_require__
            ) => {
              eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarkerBuilder": () => (/* binding */ MarkerBuilder)
/* harmony export */ });
class MarkerBuilder {
  constructor(value) {
    this.name = value;
  }
  /**
   *
   * @param value
   */


  setName(value) {
    this.name = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setCoords(value) {
    this.latLng = undefined;
    this.coords = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setLatLng(value) {
    this.coords = undefined;
    this.latLng = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setStyle(value) {
    this.style = value;
    return this;
  }
  /**
   *
   */


  build() {
    const commonProps = {
      name: this.name,
      style: this.style
    };

    if (this.coords) {
      return { ...commonProps,
        coords: this.coords
      };
    } else if (this.latLng) {
      return { ...commonProps,
        latLng: this.latLng
      };
    }

    return { ...commonProps,
      latLng: [0, 0]
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/MarkerBuilder.ts?`);
            },
            "./src/utils/builders/MultiMapBuilder.ts": (
              __unused_webpack_module,
              __webpack_exports__,
              __webpack_require__
            ) => {
              eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiMapBuilder": () => (/* binding */ MultiMapBuilder)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/builders/utils.ts");

class MultiMapBuilder {
  constructor(mainMap, maxLevel = 1) {
    this.main = {
      map: mainMap
    };
    this.maxLevel = maxLevel;
  }
  /**
   *
   * @param value
   */


  setMainMap(value) {
    this.main.map = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setMaxLevel(value) {
    this.maxLevel = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setMapNameByCode(value) {
    this.mapNameByCode = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setUrlByCode(value) {
    this.mapUrlByCode = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setGetDrillDownMap(value) {
    this.getDrillDownMap = value;
    return this;
  }

  build() {
    const baseProps = {
      main: this.main,
      maxLevel: this.maxLevel
    };
    return { ...baseProps,
      ...(0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripUndefinedValues)({
        mapNameByCode: this.mapNameByCode,
        mapUrlByCode: this.mapUrlByCode,
        getDrillDownMap: this.getDrillDownMap
      })
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/MultiMapBuilder.ts?`);
            },
            "./src/utils/builders/SeriesBuilder.ts": (
              __unused_webpack_module,
              __webpack_exports__,
              __webpack_require__
            ) => {
              eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeriesBuilder": () => (/* binding */ SeriesBuilder)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/builders/utils.ts");

class SeriesBuilder {
  /**
   *
   * @param values
   */
  addMarkersSeries(...values) {
    if (!this.markers) {
      this.markers = [];
    }

    this.markers.push(...values);
    return this;
  }
  /**
   *
   * @param values
   */


  addRegionsSeries(...values) {
    if (!this.regions) {
      this.regions = [];
    }

    this.regions.push(...values);
    return this;
  }

  build() {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripUndefinedValues)({
      markers: this.markers,
      regions: this.regions
    });
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/SeriesBuilder.ts?`);
            },
            "./src/utils/builders/StyleBuilder.ts": (
              __unused_webpack_module,
              __webpack_exports__,
              __webpack_require__
            ) => {
              eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleBuilder": () => (/* binding */ StyleBuilder)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/builders/utils.ts");

class StyleBuilder {
  /**
   *
   * @param value
   */
  setInitial(value) {
    this.initial = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setSelected(value) {
    this.selected = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setHover(value) {
    this.hover = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setSelectedHover(value) {
    this.selectedHover = value;
    return this;
  }

  build() {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripUndefinedValues)({
      selected: this.selected,
      selectedHover: this.selectedHover,
      hover: this.hover,
      initial: this.initial
    });
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/StyleBuilder.ts?`);
            },
            "./src/utils/builders/VectorMapBuilder.ts": (
              __unused_webpack_module,
              __webpack_exports__,
              __webpack_require__
            ) => {
              eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMapBuilder": () => (/* binding */ VectorMapBuilder)
/* harmony export */ });
class VectorMapBuilder {
  selectedRegions = [];

  constructor(map) {
    this.map = map;
  }
  /**
   *
   * @param value
   */


  setMap(value) {
    this.map = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setBackgroundColor(value) {
    this.backgroundColor = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setZoomMin(value) {
    this.zoomMin = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setZoomMax(value) {
    this.zoomMax = value;
    return this;
  }
  /**
   *
   * @param marker
   */


  addMarker(marker) {
    if (!this.markers) {
      this.markers = [];
    }

    this.markers.push(marker);
    return this;
  }
  /**
   *
   * @param value
   */


  setMarkerStyle(value) {
    this.markerStyle = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setRegionStyle(value) {
    this.regionStyle = value;
    return this;
  }
  /**
   *
   * @param value
   * @private
   */


  setMarkersSelectable(value) {
    this.markersSelectable = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setMarkers(value) {
    this.markers = value;
    return this;
  }
  /**
   *
   * @private
   * @param value
   */


  setRegionsSelectable(value) {
    this.regionsSelectable = value;
    return this;
  }
  /**
   *
   * @private
   * @param value
   */


  setOnRegionTipShow(value) {
    this.onRegionTipShow = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setSeries(value) {
    this.series = value;
    return this;
  }
  /**
   *
   * @param values
   */


  setLabels(values) {
    this.labels = values;
    return this;
  }
  /**
   *
   * @param value
   */


  setSelectedRegions(value) {
    this.selectedRegions = value;
    return this;
  }
  /**
   *
   */


  build() {
    return {
      map: this.map,
      series: this.series,
      backgroundColor: this.backgroundColor,
      zoomMax: this.zoomMax,
      zoomMin: this.zoomMin,
      markerStyle: this.markerStyle,
      regionStyle: this.regionStyle,
      markersSelectable: this.markersSelectable,
      regionsSelectable: this.regionsSelectable,
      markers: this.markers,
      labels: this.labels,
      selectedRegions: this.selectedRegions
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/VectorMapBuilder.ts?`);
            },
            "./src/utils/builders/index.ts": (
              __unused_webpack_module,
              __webpack_exports__,
              __webpack_require__
            ) => {
              eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMapBuilder": () => (/* reexport safe */ _VectorMapBuilder__WEBPACK_IMPORTED_MODULE_0__.VectorMapBuilder),
/* harmony export */   "MarkerBuilder": () => (/* reexport safe */ _MarkerBuilder__WEBPACK_IMPORTED_MODULE_1__.MarkerBuilder),
/* harmony export */   "StyleBuilder": () => (/* reexport safe */ _StyleBuilder__WEBPACK_IMPORTED_MODULE_2__.StyleBuilder),
/* harmony export */   "AttributeSeriesBuilder": () => (/* reexport safe */ _AttributeSeriesBuilder__WEBPACK_IMPORTED_MODULE_3__.AttributeSeriesBuilder),
/* harmony export */   "SeriesBuilder": () => (/* reexport safe */ _SeriesBuilder__WEBPACK_IMPORTED_MODULE_4__.SeriesBuilder),
/* harmony export */   "LabelsBuilder": () => (/* reexport safe */ _LabelsBuilder__WEBPACK_IMPORTED_MODULE_5__.LabelsBuilder),
/* harmony export */   "LabelsPropsBuilder": () => (/* reexport safe */ _LabelsPropsBuilder__WEBPACK_IMPORTED_MODULE_6__.LabelsPropsBuilder),
/* harmony export */   "MultiMapBuilder": () => (/* reexport safe */ _MultiMapBuilder__WEBPACK_IMPORTED_MODULE_7__.MultiMapBuilder)
/* harmony export */ });
/* harmony import */ var _VectorMapBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VectorMapBuilder */ "./src/utils/builders/VectorMapBuilder.ts");
/* harmony import */ var _MarkerBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarkerBuilder */ "./src/utils/builders/MarkerBuilder.ts");
/* harmony import */ var _StyleBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyleBuilder */ "./src/utils/builders/StyleBuilder.ts");
/* harmony import */ var _AttributeSeriesBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AttributeSeriesBuilder */ "./src/utils/builders/AttributeSeriesBuilder.ts");
/* harmony import */ var _SeriesBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SeriesBuilder */ "./src/utils/builders/SeriesBuilder.ts");
/* harmony import */ var _LabelsBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LabelsBuilder */ "./src/utils/builders/LabelsBuilder.ts");
/* harmony import */ var _LabelsPropsBuilder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LabelsPropsBuilder */ "./src/utils/builders/LabelsPropsBuilder.ts");
/* harmony import */ var _MultiMapBuilder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MultiMapBuilder */ "./src/utils/builders/MultiMapBuilder.ts");









//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/index.ts?`);
            },
            "./src/utils/builders/utils.ts": (
              __unused_webpack_module,
              __webpack_exports__,
              __webpack_require__
            ) => {
              eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stripUndefinedValues": () => (/* binding */ stripUndefinedValues)
/* harmony export */ });
/**
 * remove undefined values from object
 * @param object
 */
const stripUndefinedValues = object => Object.fromEntries(Object.entries(object).filter(entry => entry[1] !== undefined));

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/utils.ts?`);
            },
            "./src/utils/index.ts": (
              __unused_webpack_module,
              __webpack_exports__,
              __webpack_require__
            ) => {
              eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttributeSeriesBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.AttributeSeriesBuilder),
/* harmony export */   "LabelsBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.LabelsBuilder),
/* harmony export */   "LabelsPropsBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.LabelsPropsBuilder),
/* harmony export */   "MarkerBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.MarkerBuilder),
/* harmony export */   "MultiMapBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.MultiMapBuilder),
/* harmony export */   "SeriesBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.SeriesBuilder),
/* harmony export */   "StyleBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder),
/* harmony export */   "VectorMapBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.VectorMapBuilder)
/* harmony export */ });
/* harmony import */ var _builders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builders */ "./src/utils/builders/index.ts");


//# sourceURL=webpack://@react-jvectormap/core/./src/utils/index.ts?`);
            },
            "../../node_modules/classnames/index.js": (module, exports) => {
              eval(`var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/classnames/index.js?`);
            },
            "../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/components/MapContainer/styles.module.scss":
              (module, __webpack_exports__, __webpack_require__) => {
                eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "../../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/gif;base64,R0lGODlhIAAgAPMAAP///wAAAMbGxoSEhLa2tpqamjY2NlZWVtjY2OTk5Ly8vB4eHgQEBAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHRLYKhKP1oZmADdEAAAh+QQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY/CZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB+A4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6+Ho7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq+B6QDtuetcaBPnW6+O7wDHpIiK9SaVK5GgV543tzjgGcghAgAh+QQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK++G+w48edZPK+M6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE+G+cD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm+FNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk+aV+oJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0/VNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc+XiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30/iI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE/jiuL04RGEBgwWhShRgQExHBAAh+QQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR+ipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY+Yip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd+MFCN6HAAIKgNggY0KtEBAAh+QQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1+vsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d+jYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg+ygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0+bm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h+Kr0SJ8MFihpNbx+4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX+BP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA== */ "data:image/gif;base64,R0lGODlhIAAgAPMAAP///wAAAMbGxoSEhLa2tpqamjY2NlZWVtjY2OTk5Ly8vB4eHgQEBAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHRLYKhKP1oZmADdEAAAh+QQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY/CZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB+A4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6+Ho7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq+B6QDtuetcaBPnW6+O7wDHpIiK9SaVK5GgV543tzjgGcghAgAh+QQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK++G+w48edZPK+M6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE+G+cD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm+FNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk+aV+oJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0/VNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc+XiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30/iI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE/jiuL04RGEBgwWhShRgQExHBAAh+QQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR+ipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY+Yip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd+MFCN6HAAIKgNggY0KtEBAAh+QQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1+vsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d+jYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg+ygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0+bm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h+Kr0SJ8MFihpNbx+4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX+BP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA=="), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".jvectormap-tip {\\n  position: absolute;\\n  display: none;\\n  border: solid 1px #cdcdcd;\\n  border-radius: 3px;\\n  background: #292929;\\n  color: white;\\n  font-family: sans-serif, Verdana;\\n  font-size: smaller;\\n  padding: 3px;\\n}\\n\\n._u5cITtZnGk9D_6uoElx {\\n  height: 100%;\\n  width: 100%;\\n}\\n._u5cITtZnGk9D_6uoElx svg {\\n  touch-action: none;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-container {\\n  width: 100%;\\n  height: 100%;\\n  position: relative;\\n  overflow: hidden;\\n  touch-action: none;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-zoomin {\\n  position: absolute;\\n  left: 10px;\\n  border-radius: 3px;\\n  background: #292929;\\n  padding: 3px;\\n  color: white;\\n  cursor: pointer;\\n  line-height: 10px;\\n  text-align: center;\\n  box-sizing: content-box;\\n  width: 10px;\\n  height: 10px;\\n  top: 10px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-zoomout {\\n  position: absolute;\\n  left: 10px;\\n  border-radius: 3px;\\n  background: #292929;\\n  padding: 3px;\\n  color: white;\\n  cursor: pointer;\\n  line-height: 10px;\\n  text-align: center;\\n  box-sizing: content-box;\\n  width: 10px;\\n  height: 10px;\\n  top: 30px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-goback {\\n  position: absolute;\\n  left: 10px;\\n  border-radius: 3px;\\n  background: #292929;\\n  color: white;\\n  cursor: pointer;\\n  line-height: 10px;\\n  text-align: center;\\n  box-sizing: content-box;\\n  bottom: 10px;\\n  z-index: 1000;\\n  padding: 6px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-spinner {\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  background: center no-repeat url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-title {\\n  font-weight: bold;\\n  font-size: 14px;\\n  text-align: center;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt {\\n  position: absolute;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h {\\n  bottom: 0;\\n  right: 0;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend {\\n  float: left;\\n  margin: 0 10px 10px 0;\\n  padding: 3px 3px 1px 3px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend .jvectormap-legend-tick {\\n  float: left;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend-tick {\\n  width: 40px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend-tick-sample {\\n  height: 15px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend-tick-text {\\n  text-align: center;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-v {\\n  top: 0;\\n  right: 0;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-v .jvectormap-legend {\\n  margin: 10px 10px 0 0;\\n  padding: 3px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-v .jvectormap-legend-tick-sample {\\n  height: 20px;\\n  width: 20px;\\n  display: inline-block;\\n  vertical-align: middle;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-v .jvectormap-legend-tick-text {\\n  display: inline-block;\\n  vertical-align: middle;\\n  line-height: 20px;\\n  padding-left: 3px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend {\\n  background: black;\\n  color: white;\\n  border-radius: 3px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-tick-text {\\n  font-size: 12px;\\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "_u5cITtZnGk9D_6uoElx"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


//# sourceURL=webpack://@react-jvectormap/core/./src/components/MapContainer/styles.module.scss?../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js`);
              },
            "../../node_modules/css-loader/dist/runtime/api.js": (module) => {
              eval(`

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/css-loader/dist/runtime/api.js?`);
            },
            "../../node_modules/css-loader/dist/runtime/getUrl.js": (
              module
            ) => {
              eval(`

module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {
    return "\\"".concat(url.replace(/"/g, '\\\\"').replace(/\\n/g, "\\\\n"), "\\"");
  }

  return url;
};

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/css-loader/dist/runtime/getUrl.js?`);
            },
            "../../node_modules/css-loader/dist/runtime/noSourceMaps.js": (
              module
            ) => {
              eval(`

module.exports = function (i) {
  return i[1];
};

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/css-loader/dist/runtime/noSourceMaps.js?`);
            },
            "./src/components/MapContainer/styles.module.scss": (
              __unused_webpack_module,
              __webpack_exports__,
              __webpack_require__
            ) => {
              eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./styles.module.scss */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/components/MapContainer/styles.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


//# sourceURL=webpack://@react-jvectormap/core/./src/components/MapContainer/styles.module.scss?`);
            },
            "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
              (module) => {
                eval(`

var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?`);
              },
            "../../node_modules/style-loader/dist/runtime/insertBySelector.js":
              (module) => {
                eval(`

var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/insertBySelector.js?`);
              },
            "../../node_modules/style-loader/dist/runtime/insertStyleElement.js":
              (module) => {
                eval(`

/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/insertStyleElement.js?`);
              },
            "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
              (module, __unused_webpack_exports, __webpack_require__) => {
                eval(`

/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?`);
              },
            "../../node_modules/style-loader/dist/runtime/styleDomAPI.js": (
              module
            ) => {
              eval(`

/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/styleDomAPI.js?`);
            },
            "../../node_modules/style-loader/dist/runtime/styleTagTransform.js":
              (module) => {
                eval(`

/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/styleTagTransform.js?`);
              },
            "../jquery-mousewheel/jquery.mousewheel.js": (
              __unused_webpack_module,
              __webpack_exports__,
              __webpack_require__
            ) => {
              eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadJQueryMouseWheel": () => (/* binding */ loadJQueryMouseWheel)
/* harmony export */ });
/*!
 * jQuery Mousewheel 3.1.13
 * Copyright OpenJS Foundation and other contributors
 */

const loadJQueryMouseWheel = ($) =>
  (function (factory) {
    factory($);
  })(function ($) {
    var toFix = [
        "wheel",
        "mousewheel",
        "DOMMouseScroll",
        "MozMousePixelScroll",
      ],
      toBind =
        "onwheel" in window.document || window.document.documentMode >= 9
          ? ["wheel"]
          : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      slice = Array.prototype.slice,
      nullLowestDeltaTimeout,
      lowestDelta;

    if ($.event.fixHooks) {
      for (var i = toFix.length; i; ) {
        $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
      }
    }

    var special = ($.event.special.mousewheel = {
      version: "3.1.12",

      setup: function () {
        if (this.addEventListener) {
          for (var i = toBind.length; i; ) {
            this.addEventListener(toBind[--i], handler, false);
          }
        } else {
          this.onmousewheel = handler;
        }

        // Store the line height and page height for this particular element
        $.data(this, "mousewheel-line-height", special.getLineHeight(this));
        $.data(this, "mousewheel-page-height", special.getPageHeight(this));
      },

      teardown: function () {
        if (this.removeEventListener) {
          for (var i = toBind.length; i; ) {
            this.removeEventListener(toBind[--i], handler, false);
          }
        } else {
          this.onmousewheel = null;
        }

        // Clean up the data we added to the element
        $.removeData(this, "mousewheel-line-height");
        $.removeData(this, "mousewheel-page-height");
      },

      getLineHeight: function (elem) {
        var $elem = $(elem),
          $parent = $elem["offsetParent" in $.fn ? "offsetParent" : "parent"]();
        if (!$parent.length) {
          $parent = $("body");
        }
        return (
          parseInt($parent.css("fontSize"), 10) ||
          parseInt($elem.css("fontSize"), 10) ||
          16
        );
      },

      getPageHeight: function (elem) {
        return $(elem).height();
      },

      settings: {
        adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
        normalizeOffset: true, // calls getBoundingClientRect for each event
      },
    });

    $.fn.extend({
      mousewheel: function (fn) {
        return fn ? this.on("mousewheel", fn) : this.trigger("mousewheel");
      },

      unmousewheel: function (fn) {
        return this.off("mousewheel", fn);
      },
    });

    function handler(event) {
      var orgEvent = event || window.event,
        args = slice.call(arguments, 1),
        delta = 0,
        deltaX = 0,
        deltaY = 0,
        absDelta = 0;
      event = $.event.fix(orgEvent);
      event.type = "mousewheel";

      // Old school scrollwheel delta
      if ("detail" in orgEvent) {
        deltaY = orgEvent.detail * -1;
      }
      if ("wheelDelta" in orgEvent) {
        deltaY = orgEvent.wheelDelta;
      }
      if ("wheelDeltaY" in orgEvent) {
        deltaY = orgEvent.wheelDeltaY;
      }
      if ("wheelDeltaX" in orgEvent) {
        deltaX = orgEvent.wheelDeltaX * -1;
      }

      // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
      if ("axis" in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
        deltaX = deltaY * -1;
        deltaY = 0;
      }

      // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
      delta = deltaY === 0 ? deltaX : deltaY;

      // New school wheel delta (wheel event)
      if ("deltaY" in orgEvent) {
        deltaY = orgEvent.deltaY * -1;
        delta = deltaY;
      }
      if ("deltaX" in orgEvent) {
        deltaX = orgEvent.deltaX;
        if (deltaY === 0) {
          delta = deltaX * -1;
        }
      }

      // No change actually happened, no reason to go any further
      if (deltaY === 0 && deltaX === 0) {
        return;
      }

      // Need to convert lines and pages to pixels if we aren't already in pixels
      // There are three delta modes:
      //   * deltaMode 0 is by pixels, nothing to do
      //   * deltaMode 1 is by lines
      //   * deltaMode 2 is by pages
      if (orgEvent.deltaMode === 1) {
        var lineHeight = $.data(this, "mousewheel-line-height");
        delta *= lineHeight;
        deltaY *= lineHeight;
        deltaX *= lineHeight;
      } else if (orgEvent.deltaMode === 2) {
        var pageHeight = $.data(this, "mousewheel-page-height");
        delta *= pageHeight;
        deltaY *= pageHeight;
        deltaX *= pageHeight;
      }

      // Store lowest absolute delta to normalize the delta values
      absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));

      if (!lowestDelta || absDelta < lowestDelta) {
        lowestDelta = absDelta;

        // Adjust older deltas if necessary
        if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
          lowestDelta /= 40;
        }
      }

      // Adjust older deltas if necessary
      if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
        // Divide all the things by 40!
        delta /= 40;
        deltaX /= 40;
        deltaY /= 40;
      }

      // Get a whole, normalized value for the deltas
      delta = Math[delta >= 1 ? "floor" : "ceil"](delta / lowestDelta);
      deltaX = Math[deltaX >= 1 ? "floor" : "ceil"](deltaX / lowestDelta);
      deltaY = Math[deltaY >= 1 ? "floor" : "ceil"](deltaY / lowestDelta);

      // Normalise offsetX and offsetY properties
      if (special.settings.normalizeOffset && this.getBoundingClientRect) {
        var boundingRect = this.getBoundingClientRect();
        event.offsetX = event.clientX - boundingRect.left;
        event.offsetY = event.clientY - boundingRect.top;
      }

      // Add information to the event object
      event.deltaX = deltaX;
      event.deltaY = deltaY;
      event.deltaFactor = lowestDelta;

      // Go ahead and set deltaMode to 0 since we converted to pixels
      // Although this is a little odd since we overwrite the deltaX/Y
      // properties with normalized deltas.
      event.deltaMode = 0;

      // Add event and delta to the front of the arguments
      args.unshift(event, delta, deltaX, deltaY);

      // Clearout lowestDelta after sometime to better
      // handle multiple device types that give different
      // a different lowestDelta
      // Ex: trackpad = 3 and mouse wheel = 120
      if (nullLowestDeltaTimeout) {
        window.clearTimeout(nullLowestDeltaTimeout);
      }
      nullLowestDeltaTimeout = window.setTimeout(nullLowestDelta, 200);

      return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
      lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
      // If this is an older event and the delta is divisable by 120,
      // then we are assuming that the browser is treating this as an
      // older mouse wheel event and that we should divide the deltas
      // by 40 to try and get a more usable deltaFactor.
      // Side note, this actually impacts the reported scroll distance
      // in older browsers and can cause scrolling to be slower than native.
      // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
      return (
        special.settings.adjustOldDeltas &&
        orgEvent.type === "mousewheel" &&
        absDelta % 120 === 0
      );
    }
  });


//# sourceURL=webpack://@react-jvectormap/core/../jquery-mousewheel/jquery.mousewheel.js?`);
            },
            "../jvectormap/index.js": (
              __unused_webpack_module,
              __webpack_exports__,
              __webpack_require__
            ) => {
              eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadJVectorMap": () => (/* reexport safe */ _jquery_jvectormap_min__WEBPACK_IMPORTED_MODULE_0__.loadJVectorMap)
/* harmony export */ });
/* harmony import */ var _jquery_jvectormap_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jquery.jvectormap.min */ "../jvectormap/jquery.jvectormap.min.js");



//# sourceURL=webpack://@react-jvectormap/core/../jvectormap/index.js?`);
            },
            "../jvectormap/jquery.jvectormap.min.js": (
              __unused_webpack_module,
              __webpack_exports__,
              __webpack_require__
            ) => {
              eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadJVectorMap": () => (/* binding */ loadJVectorMap)
/* harmony export */ });
/* harmony import */ var _react_jvectormap_jquery_mousewheel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-jvectormap/jquery-mousewheel */ "../jquery-mousewheel/jquery.mousewheel.js");


/**
 * jVectorMap version 2.0.5
 *
 * Copyright 2011-2014, Kirill Lebedev
 *
 * inspired from: https://github.com/alex-pex/jvectormap/blob/master/jvectormap-next/src/jquery-jvectormap.js
 */
const loadJVectorMap = ($) =>
  (function (factory) {
    factory($);
  })(function ($) {
    (0,_react_jvectormap_jquery_mousewheel__WEBPACK_IMPORTED_MODULE_0__.loadJQueryMouseWheel)($);
    jvm.$ = $;
    window.jvm = jvm;

    const apiParams = {
      set: {
        colors: 1,
        values: 1,
        backgroundColor: 1,
        scaleColors: 1,
        normalizeFunction: 1,
        focus: 1,
      },
      get: {
        selectedRegions: 1,
        selectedMarkers: 1,
        mapObject: 1,
        regionName: 1,
      },
    };

    $.fn.multiMap = function (options) {
      options.container = this;
      new jvm.MultiMap(options);
      return this;
    };

    $.fn.vectorMap = function (options) {
      let map, methodName;
      map = this.children(".jvectormap-container").data("mapObject");
      if (options === "remove") {
        this.remove();
      } else if (options === "addMap") {
        jvm.Map.maps[arguments[1]] = arguments[2];
      } else if (
        (options === "set" || options === "get") &&
        apiParams[options][arguments[1]]
      ) {
        methodName =
          arguments[1].charAt(0).toUpperCase() + arguments[1].substr(1);
        return map[options + methodName].apply(
          map,
          Array.prototype.slice.call(arguments, 2),
        );
      } else if (!map) {
        options = options || {};
        options.container = this;
        map = new jvm.Map(options);
      }

      return this;
    };
  });
/**
 * @namespace jvm Holds core methods and classes used by jVectorMap.
 */
var jvm = {
  /**
   * Inherits child's prototype from the parent's one.
   * @param {Function} child
   * @param {Function} parent
   */
  inherits: function (child, parent) {
    function temp() {}
    temp.prototype = parent.prototype;
    child.prototype = new temp();
    child.prototype.constructor = child;
    child.parentClass = parent;
  },

  /**
   * Mixes in methods from the source constructor to the target one.
   * @param {Function} target
   * @param {Function} source
   */
  mixin: function (target, source) {
    var prop;

    for (prop in source.prototype) {
      if (source.prototype.hasOwnProperty(prop)) {
        target.prototype[prop] = source.prototype[prop];
      }
    }
  },

  min: function (values) {
    var min = Number.MAX_VALUE,
      i;

    if (values instanceof Array) {
      for (i = 0; i < values.length; i++) {
        if (values[i] < min) {
          min = values[i];
        }
      }
    } else {
      for (i in values) {
        if (values[i] < min) {
          min = values[i];
        }
      }
    }
    return min;
  },

  max: function (values) {
    var max = Number.MIN_VALUE,
      i;

    if (values instanceof Array) {
      for (i = 0; i < values.length; i++) {
        if (values[i] > max) {
          max = values[i];
        }
      }
    } else {
      for (i in values) {
        if (values[i] > max) {
          max = values[i];
        }
      }
    }
    return max;
  },

  keys: function (object) {
    var keys = [],
      key;

    for (key in object) {
      keys.push(key);
    }
    return keys;
  },

  values: function (object) {
    var values = [],
      key,
      i;

    for (i = 0; i < arguments.length; i++) {
      object = arguments[i];
      for (key in object) {
        values.push(object[key]);
      }
    }
    return values;
  },

  whenImageLoaded: function (url) {
    var deferred = new jvm.$.Deferred(),
      img = jvm.$("<img/>");

    img
      .on("error", function () {
        deferred.reject();
      })
      .on("load", function () {
        deferred.resolve(img);
      });
    img.attr("src", url);

    return deferred;
  },

  isImageUrl: function (s) {
    return /\\.\\w{3,4}$/.test(s);
  },
};

/**
 * indexOf polyfill for IE < 9
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 */
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement, fromIndex) {
    var k;

    // 1. Let O be the result of calling ToObject passing
    //    the this value as the argument.
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get
    //    internal method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If len is 0, return -1.
    if (len === 0) {
      return -1;
    }

    // 5. If argument fromIndex was passed let n be
    //    ToInteger(fromIndex); else let n be 0.
    var n = +fromIndex || 0;

    if (Math.abs(n) === Infinity) {
      n = 0;
    }

    // 6. If n >= len, return -1.
    if (n >= len) {
      return -1;
    }

    // 7. If n >= 0, then Let k be n.
    // 8. Else, n<0, Let k be len - abs(n).
    //    If k is less than 0, then let k be 0.
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    // 9. Repeat, while k < len
    while (k < len) {
      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the
      //    HasProperty internal method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      //    i.  Let elementK be the result of calling the Get
      //        internal method of O with the argument ToString(k).
      //   ii.  Let same be the result of applying the
      //        Strict Equality Comparison Algorithm to
      //        searchElement and elementK.
      //  iii.  If same is true, return k.
      if (k in O && O[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}
/**
 * Basic wrapper for DOM element.
 * @constructor
 * @param {String} name Tag name of the element
 * @param {Object} config Set of parameters to initialize element with
 */
jvm.AbstractElement = function(name, config){
  /**
   * Underlying DOM element
   * @type {DOMElement}
   * @private
   */
  this.node = this.createElement(name);

  /**
   * Name of underlying element
   * @type {String}
   * @private
   */
  this.name = name;

  /**
   * Internal store of attributes
   * @type {Object}
   * @private
   */
  this.properties = {};

  if (config) {
    this.set(config);
  }
};

/**
 * Set attribute of the underlying DOM element.
 * @param {String} name Name of attribute
 * @param {Number|String} config Set of parameters to initialize element with
 */
jvm.AbstractElement.prototype.set = function(property, value){
  var key;

  if (typeof property === 'object') {
    for (key in property) {
      this.properties[key] = property[key];
      this.applyAttr(key, property[key]);
    }
  } else {
    this.properties[property] = value;
    this.applyAttr(property, value);
  }
};

/**
 * Returns value of attribute.
 * @param {String} name Name of attribute
 */
jvm.AbstractElement.prototype.get = function(property){
  return this.properties[property];
};

/**
 * Applies attribute value to the underlying DOM element.
 * @param {String} name Name of attribute
 * @param {Number|String} config Value of attribute to apply
 * @private
 */
jvm.AbstractElement.prototype.applyAttr = function(property, value){
  if (!Number.isNaN(value)) {
    this.node.setAttribute(property, value);
  }
};

jvm.AbstractElement.prototype.remove = function(){
  jvm.$(this.node).remove();
};/**
 * Implements abstract vector canvas.
 * @constructor
 * @param {HTMLElement} container Container to put element to.
 * @param {Number} width Width of canvas.
 * @param {Number} height Height of canvas.
 */
jvm.AbstractCanvasElement = function(container, width, height){
  this.container = container;
  this.setSize(width, height);
  this.rootElement = new jvm[this.classPrefix+'GroupElement']();
  this.node.appendChild( this.rootElement.node );
  this.container.appendChild(this.node);
}

/**
 * Add element to the certain group inside of the canvas.
 * @param {HTMLElement} element Element to add to canvas.
 * @param {HTMLElement} group Group to add element into or into root group if not provided.
 */
jvm.AbstractCanvasElement.prototype.add = function(element, group){
  group = group || this.rootElement;
  group.add(element);
  element.canvas = this;
}

/**
 * Create path and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add path into.
 */
jvm.AbstractCanvasElement.prototype.addPath = function(config, style, group){
  var el = new jvm[this.classPrefix+'PathElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create circle and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addCircle = function(config, style, group){
  var el = new jvm[this.classPrefix+'CircleElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create circle and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addImage = function(config, style, group){
  var el = new jvm[this.classPrefix+'ImageElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create text and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addText = function(config, style, group){
  var el = new jvm[this.classPrefix+'TextElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Add group to the another group inside of the canvas.
 * @param {HTMLElement} group Group to add circle into or root group if not provided.
 */
jvm.AbstractCanvasElement.prototype.addGroup = function(parentGroup){
  var el = new jvm[this.classPrefix+'GroupElement']();

  if (parentGroup) {
    parentGroup.node.appendChild(el.node);
  } else {
    this.node.appendChild(el.node);
  }
  el.canvas = this;
  return el;
};/**
 * Abstract shape element. Shape element represents some visual vector or raster object.
 * @constructor
 * @param {String} name Tag name of the element.
 * @param {Object} config Set of parameters to initialize element with.
 * @param {Object} style Object with styles to set on element initialization.
 */
jvm.AbstractShapeElement = function(name, config, style){
  this.style = style || {};
  this.style.current = this.style.current || {};
  this.isHovered = false;
  this.isSelected = false;
  this.updateStyle();
};

/**
 * Set element's style.
 * @param {Object|String} property Could be string to set only one property or object to set several style properties at once.
 * @param {String} value Value to set in case only one property should be set.
 */
jvm.AbstractShapeElement.prototype.setStyle = function(property, value){
  var styles = {};

  if (typeof property === 'object') {
    styles = property;
  } else {
    styles[property] = value;
  }
  jvm.$.extend(this.style.current, styles);
  this.updateStyle();
};


jvm.AbstractShapeElement.prototype.updateStyle = function(){
  var attrs = {};

  jvm.AbstractShapeElement.mergeStyles(attrs, this.style.initial);
  jvm.AbstractShapeElement.mergeStyles(attrs, this.style.current);
  if (this.isHovered) {
    jvm.AbstractShapeElement.mergeStyles(attrs, this.style.hover);
  }
  if (this.isSelected) {
    jvm.AbstractShapeElement.mergeStyles(attrs, this.style.selected);
    if (this.isHovered) {
      jvm.AbstractShapeElement.mergeStyles(attrs, this.style.selectedHover);
    }
  }
  this.set(attrs);
};

jvm.AbstractShapeElement.mergeStyles = function(styles, newStyles){
  var key;

  newStyles = newStyles || {};
  for (key in newStyles) {
    if (newStyles[key] === null) {
      delete styles[key];
    } else {
      styles[key] = newStyles[key];
    }
  }
}/**
 * Wrapper for SVG element.
 * @constructor
 * @extends jvm.AbstractElement
 * @param {String} name Tag name of the element
 * @param {Object} config Set of parameters to initialize element with
 */

jvm.SVGElement = function(name, config){
  jvm.SVGElement.parentClass.apply(this, arguments);
}

jvm.inherits(jvm.SVGElement, jvm.AbstractElement);

jvm.SVGElement.svgns = "http://www.w3.org/2000/svg";

/**
 * Creates DOM element.
 * @param {String} tagName Name of element
 * @private
 * @returns DOMElement
 */
jvm.SVGElement.prototype.createElement = function( tagName ){
  return document.createElementNS( jvm.SVGElement.svgns, tagName );
};

/**
 * Adds CSS class for underlying DOM element.
 * @param {String} className Name of CSS class name
 */
jvm.SVGElement.prototype.addClass = function( className ){
  this.node.setAttribute('class', className);
};

/**
 * Returns constructor for element by name prefixed with 'VML'.
 * @param {String} ctr Name of basic constructor to return
 * proper implementation for.
 * @returns Function
 * @private
 */
jvm.SVGElement.prototype.getElementCtr = function( ctr ){
  return jvm['SVG'+ctr];
};

jvm.SVGElement.prototype.getBBox = function(){
  return this.node.getBBox();
};jvm.SVGGroupElement = function(){
  jvm.SVGGroupElement.parentClass.call(this, 'g');
}

jvm.inherits(jvm.SVGGroupElement, jvm.SVGElement);

jvm.SVGGroupElement.prototype.add = function(element){
  this.node.appendChild( element.node );
};jvm.SVGCanvasElement = function (container, width, height) {
  this.classPrefix = "SVG";
  jvm.SVGCanvasElement.parentClass.call(this, "svg");

  this.defsElement = new jvm.SVGElement("defs");
  this.node.appendChild(this.defsElement.node);

  jvm.AbstractCanvasElement.apply(this, arguments);
};

jvm.inherits(jvm.SVGCanvasElement, jvm.SVGElement);
jvm.mixin(jvm.SVGCanvasElement, jvm.AbstractCanvasElement);

jvm.SVGCanvasElement.prototype.setSize = function (width, height) {
  this.width = width;
  this.height = height;
  this.node.setAttribute("width", width);
  this.node.setAttribute("height", height);
};

jvm.SVGCanvasElement.prototype.applyTransformParams = function (
  scale,
  transX,
  transY,
) {
  this.scale = scale;
  this.transX = transX;
  this.transY = transY;
  if (!isNaN(transX) && !isNaN(transY) && !isNaN(scale)) {
    this.rootElement.node.setAttribute(
      "transform",
      "scale(" + scale + ") translate(" + transX + ", " + transY + ")",
    );
  }
};
jvm.SVGShapeElement = function(name, config, style){
  jvm.SVGShapeElement.parentClass.call(this, name, config);
  jvm.AbstractShapeElement.apply(this, arguments);
};

jvm.inherits(jvm.SVGShapeElement, jvm.SVGElement);
jvm.mixin(jvm.SVGShapeElement, jvm.AbstractShapeElement);

jvm.SVGShapeElement.prototype.applyAttr = function(attr, value){
  var patternEl,
      imageEl,
      that = this;

  if (attr === 'fill' && jvm.isImageUrl(value)) {
    if (!jvm.SVGShapeElement.images[value]) {
      jvm.whenImageLoaded(value).then(function(img){
        imageEl = new jvm.SVGElement('image');
        imageEl.node.setAttributeNS('http://www.w3.org/1999/xlink', 'href', value);
        imageEl.applyAttr('x', '0');
        imageEl.applyAttr('y', '0');
        imageEl.applyAttr('width', img[0].width);
        imageEl.applyAttr('height', img[0].height);

        patternEl = new jvm.SVGElement('pattern');
        patternEl.applyAttr('id', 'image'+jvm.SVGShapeElement.imageCounter);
        patternEl.applyAttr('x', 0);
        patternEl.applyAttr('y', 0);
        patternEl.applyAttr('width', img[0].width / 2);
        patternEl.applyAttr('height', img[0].height / 2);
        patternEl.applyAttr('viewBox', '0 0 '+img[0].width+' '+img[0].height);
        patternEl.applyAttr('patternUnits', 'userSpaceOnUse');
        patternEl.node.appendChild( imageEl.node );

        that.canvas.defsElement.node.appendChild( patternEl.node );

        jvm.SVGShapeElement.images[value] = jvm.SVGShapeElement.imageCounter++;

        that.applyAttr('fill', 'url(#image'+jvm.SVGShapeElement.images[value]+')');
      });
    } else {
      this.applyAttr('fill', 'url(#image'+jvm.SVGShapeElement.images[value]+')');
    }
  } else {
    jvm.SVGShapeElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};

jvm.SVGShapeElement.imageCounter = 1;
jvm.SVGShapeElement.images = {};jvm.SVGPathElement = function(config, style){
  jvm.SVGPathElement.parentClass.call(this, 'path', config, style);
  this.node.setAttribute('fill-rule', 'evenodd');
}

jvm.inherits(jvm.SVGPathElement, jvm.SVGShapeElement);jvm.SVGCircleElement = function(config, style){
  jvm.SVGCircleElement.parentClass.call(this, 'circle', config, style);
};

jvm.inherits(jvm.SVGCircleElement, jvm.SVGShapeElement);jvm.SVGImageElement = function(config, style){
  jvm.SVGImageElement.parentClass.call(this, 'image', config, style);
};

jvm.inherits(jvm.SVGImageElement, jvm.SVGShapeElement);

jvm.SVGImageElement.prototype.applyAttr = function(attr, value){
  var that = this,
      imageOffset,
      imageUrl;

  if (attr == 'image') {
    if (typeof value == 'object') {
      imageUrl = value.url;
      this.offset = value.offset;
    } else {
      imageUrl = value;
      this.offset = [0, 0];
    }

    jvm.whenImageLoaded(imageUrl).then(function(img){
      that.node.setAttributeNS('http://www.w3.org/1999/xlink', 'href', imageUrl);
      that.width = img[0].width;
      that.height = img[0].height;
      that.applyAttr('width', that.width);
      that.applyAttr('height', that.height);

      that.applyAttr('x', that.cx - that.width / 2 + that.offset[0]);
      that.applyAttr('y', that.cy - that.height / 2 + that.offset[1]);

      jvm.$(that.node).trigger('imageloaded', [img]);
    });
  } else if(attr == 'cx') {
    this.cx = value;
    if (this.width) {
      this.applyAttr('x', value - this.width / 2 + this.offset[0]);
    }
  } else if(attr == 'cy') {
    this.cy = value;
    if (this.height) {
      this.applyAttr('y', value - this.height / 2 + this.offset[1]);
    }
  } else {
    jvm.SVGImageElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};jvm.SVGTextElement = function(config, style){
  jvm.SVGTextElement.parentClass.call(this, 'text', config, style);
}

jvm.inherits(jvm.SVGTextElement, jvm.SVGShapeElement);

jvm.SVGTextElement.prototype.applyAttr = function(attr, value){
  if (attr === 'text') {
    this.node.textContent = value;
  } else {
    jvm.SVGTextElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};/**
 * Wrapper for VML element.
 * @constructor
 * @extends jvm.AbstractElement
 * @param {String} name Tag name of the element
 * @param {Object} config Set of parameters to initialize element with
 */

jvm.VMLElement = function(name, config){
  if (!jvm.VMLElement.VMLInitialized) {
    jvm.VMLElement.initializeVML();
  }

  jvm.VMLElement.parentClass.apply(this, arguments);
};

jvm.inherits(jvm.VMLElement, jvm.AbstractElement);

/**
 * Shows if VML was already initialized for the current document or not.
 * @static
 * @private
 * @type {Boolean}
 */
jvm.VMLElement.VMLInitialized = false;

/**
 * Initializes VML handling before creating the first element
 * (adds CSS class and creates namespace). Adds one of two forms
 * of createElement method depending of support by browser.
 * @static
 * @private
 */

 // The following method of VML handling is borrowed from the
 // Raphael library by Dmitry Baranovsky.

jvm.VMLElement.initializeVML = function(){
  try {
    if (!document.namespaces.rvml) {
      document.namespaces.add("rvml","urn:schemas-microsoft-com:vml");
    }
    /**
     * Creates DOM element.
     * @param {String} tagName Name of element
     * @private
     * @returns DOMElement
     */
    jvm.VMLElement.prototype.createElement = function (tagName) {
      return document.createElement('<rvml:' + tagName + ' class="rvml">');
    };
  } catch (e) {
    /**
     * @private
     */
    jvm.VMLElement.prototype.createElement = function (tagName) {
      return document.createElement('<' + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
    };
  }
  document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
  jvm.VMLElement.VMLInitialized = true;
};

/**
 * Returns constructor for element by name prefixed with 'VML'.
 * @param {String} ctr Name of basic constructor to return
 * proper implementation for.
 * @returns Function
 * @private
 */
jvm.VMLElement.prototype.getElementCtr = function( ctr ){
  return jvm['VML'+ctr];
};

/**
 * Adds CSS class for underlying DOM element.
 * @param {String} className Name of CSS class name
 */
jvm.VMLElement.prototype.addClass = function( className ){
  jvm.$(this.node).addClass(className);
};

/**
 * Applies attribute value to the underlying DOM element.
 * @param {String} name Name of attribute
 * @param {Number|String} config Value of attribute to apply
 * @private
 */
jvm.VMLElement.prototype.applyAttr = function( attr, value ){
  this.node[attr] = value;
};

/**
 * Returns boundary box for the element.
 * @returns {Object} Boundary box with numeric fields: x, y, width, height
 * @override
 */
jvm.VMLElement.prototype.getBBox = function(){
  var node = jvm.$(this.node);

  return {
    x: node.position().left / this.canvas.scale,
    y: node.position().top / this.canvas.scale,
    width: node.width() / this.canvas.scale,
    height: node.height() / this.canvas.scale
  };
};jvm.VMLGroupElement = function(){
  jvm.VMLGroupElement.parentClass.call(this, 'group');

  this.node.style.left = '0px';
  this.node.style.top = '0px';
  this.node.coordorigin = "0 0";
};

jvm.inherits(jvm.VMLGroupElement, jvm.VMLElement);

jvm.VMLGroupElement.prototype.add = function(element){
  this.node.appendChild( element.node );
};jvm.VMLCanvasElement = function(container, width, height){
  this.classPrefix = 'VML';
  jvm.VMLCanvasElement.parentClass.call(this, 'group');
  jvm.AbstractCanvasElement.apply(this, arguments);
  this.node.style.position = 'absolute';
};

jvm.inherits(jvm.VMLCanvasElement, jvm.VMLElement);
jvm.mixin(jvm.VMLCanvasElement, jvm.AbstractCanvasElement);

jvm.VMLCanvasElement.prototype.setSize = function(width, height){
  var paths,
      groups,
      i,
      l;

  this.width = width;
  this.height = height;
  this.node.style.width = width + "px";
  this.node.style.height = height + "px";
  this.node.coordsize = width+' '+height;
  this.node.coordorigin = "0 0";
  if (this.rootElement) {
    paths = this.rootElement.node.getElementsByTagName('shape');
    for(i = 0, l = paths.length; i < l; i++) {
      paths[i].coordsize = width+' '+height;
      paths[i].style.width = width+'px';
      paths[i].style.height = height+'px';
    }
    groups = this.node.getElementsByTagName('group');
    for(i = 0, l = groups.length; i < l; i++) {
      groups[i].coordsize = width+' '+height;
      groups[i].style.width = width+'px';
      groups[i].style.height = height+'px';
    }
  }
};

jvm.VMLCanvasElement.prototype.applyTransformParams = function(scale, transX, transY) {
  this.scale = scale;
  this.transX = transX;
  this.transY = transY;
  this.rootElement.node.coordorigin = (this.width-transX-this.width/100)+','+(this.height-transY-this.height/100);
  this.rootElement.node.coordsize = this.width/scale+','+this.height/scale;
};jvm.VMLShapeElement = function(name, config){
  jvm.VMLShapeElement.parentClass.call(this, name, config);

  this.fillElement = new jvm.VMLElement('fill');
  this.strokeElement = new jvm.VMLElement('stroke');
  this.node.appendChild(this.fillElement.node);
  this.node.appendChild(this.strokeElement.node);
  this.node.stroked = false;

  jvm.AbstractShapeElement.apply(this, arguments);
};

jvm.inherits(jvm.VMLShapeElement, jvm.VMLElement);
jvm.mixin(jvm.VMLShapeElement, jvm.AbstractShapeElement);

jvm.VMLShapeElement.prototype.applyAttr = function(attr, value){
  switch (attr) {
    case 'fill':
      this.node.fillcolor = value;
      break;
    case 'fill-opacity':
      this.fillElement.node.opacity = Math.round(value*100)+'%';
      break;
    case 'stroke':
      if (value === 'none') {
        this.node.stroked = false;
      } else {
        this.node.stroked = true;
      }
      this.node.strokecolor = value;
      break;
    case 'stroke-opacity':
      this.strokeElement.node.opacity = Math.round(value*100)+'%';
      break;
    case 'stroke-width':
      if (parseInt(value, 10) === 0) {
        this.node.stroked = false;
      } else {
        this.node.stroked = true;
      }
      this.node.strokeweight = value;
      break;
    case 'd':
      this.node.path = jvm.VMLPathElement.pathSvgToVml(value);
      break;
    default:
      jvm.VMLShapeElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};jvm.VMLPathElement = function(config, style){
  var scale = new jvm.VMLElement('skew');

  jvm.VMLPathElement.parentClass.call(this, 'shape', config, style);

  this.node.coordorigin = "0 0";

  scale.node.on = true;
  scale.node.matrix = '0.01,0,0,0.01,0,0';
  scale.node.offset = '0,0';

  this.node.appendChild(scale.node);
};

jvm.inherits(jvm.VMLPathElement, jvm.VMLShapeElement);

jvm.VMLPathElement.prototype.applyAttr = function(attr, value){
  if (attr === 'd') {
    this.node.path = jvm.VMLPathElement.pathSvgToVml(value);
  } else {
    jvm.VMLShapeElement.prototype.applyAttr.call(this, attr, value);
  }
};

jvm.VMLPathElement.pathSvgToVml = function(path) {
  var cx = 0, cy = 0, ctrlx, ctrly;

  path = path.replace(/(-?\\d+)e(-?\\d+)/g, '0');
  return path.replace(/([MmLlHhVvCcSs])\\s*((?:-?\\d*(?:\\.\\d+)?\\s*,?\\s*)+)/g, function(segment, letter, coords, index){
    coords = coords.replace(/(\\d)-/g, '$1,-')
            .replace(/^\\s+/g, '')
            .replace(/\\s+$/g, '')
            .replace(/\\s+/g, ',').split(',');
    if (!coords[0]) coords.shift();
    for (var i=0, l=coords.length; i<l; i++) {
      coords[i] = Math.round(100*coords[i]);
    }
    switch (letter) {
      case 'm':
        cx += coords[0];
        cy += coords[1];
        return 't'+coords.join(',');
      case 'M':
        cx = coords[0];
        cy = coords[1];
        return 'm'+coords.join(',');
      case 'l':
        cx += coords[0];
        cy += coords[1];
        return 'r'+coords.join(',');
      case 'L':
        cx = coords[0];
        cy = coords[1];
        return 'l'+coords.join(',');
      case 'h':
        cx += coords[0];
        return 'r'+coords[0]+',0';
      case 'H':
        cx = coords[0];
        return 'l'+cx+','+cy;
      case 'v':
        cy += coords[0];
        return 'r0,'+coords[0];
      case 'V':
        cy = coords[0];
        return 'l'+cx+','+cy;
      case 'c':
        ctrlx = cx + coords[coords.length-4];
        ctrly = cy + coords[coords.length-3];
        cx += coords[coords.length-2];
        cy += coords[coords.length-1];
        return 'v'+coords.join(',');
      case 'C':
        ctrlx = coords[coords.length-4];
        ctrly = coords[coords.length-3];
        cx = coords[coords.length-2];
        cy = coords[coords.length-1];
        return 'c'+coords.join(',');
      case 's':
        coords.unshift(cy-ctrly);
        coords.unshift(cx-ctrlx);
        ctrlx = cx + coords[coords.length-4];
        ctrly = cy + coords[coords.length-3];
        cx += coords[coords.length-2];
        cy += coords[coords.length-1];
        return 'v'+coords.join(',');
      case 'S':
        coords.unshift(cy+cy-ctrly);
        coords.unshift(cx+cx-ctrlx);
        ctrlx = coords[coords.length-4];
        ctrly = coords[coords.length-3];
        cx = coords[coords.length-2];
        cy = coords[coords.length-1];
        return 'c'+coords.join(',');
    }
    return '';
  }).replace(/z/g, 'e');
};jvm.VMLCircleElement = function(config, style){
  jvm.VMLCircleElement.parentClass.call(this, 'oval', config, style);
};

jvm.inherits(jvm.VMLCircleElement, jvm.VMLShapeElement);

jvm.VMLCircleElement.prototype.applyAttr = function(attr, value){
  switch (attr) {
    case 'r':
      this.node.style.width = value*2+'px';
      this.node.style.height = value*2+'px';
      this.applyAttr('cx', this.get('cx') || 0);
      this.applyAttr('cy', this.get('cy') || 0);
      break;
    case 'cx':
      if (!value) return;
      this.node.style.left = value - (this.get('r') || 0) + 'px';
      break;
    case 'cy':
      if (!value) return;
      this.node.style.top = value - (this.get('r') || 0) + 'px';
      break;
    default:
      jvm.VMLCircleElement.parentClass.prototype.applyAttr.call(this, attr, value);
  }
};/**
 * Class for vector images manipulations.
 * @constructor
 * @param {DOMElement} container to place canvas to
 * @param {Number} width
 * @param {Number} height
 */
jvm.VectorCanvas = function(container, width, height) {
  this.mode = window.SVGAngle ? 'svg' : 'vml';

  if (this.mode == 'svg') {
    this.impl = new jvm.SVGCanvasElement(container, width, height);
  } else {
    this.impl = new jvm.VMLCanvasElement(container, width, height);
  }
  this.impl.mode = this.mode;
  return this.impl;
};jvm.SimpleScale = function(scale){
  this.scale = scale;
};

jvm.SimpleScale.prototype.getValue = function(value){
  return value;
};jvm.OrdinalScale = function(scale){
  this.scale = scale;
};

jvm.OrdinalScale.prototype.getValue = function(value){
  return this.scale[value];
};

jvm.OrdinalScale.prototype.getTicks = function(){
  var ticks = [],
      key;

  for (key in this.scale) {
    ticks.push({
      label: key,
      value: this.scale[key]
    });
  }

  return ticks;
};jvm.NumericScale = function(scale, normalizeFunction, minValue, maxValue) {
  this.scale = [];

  normalizeFunction = normalizeFunction || 'linear';

  if (scale) this.setScale(scale);
  if (normalizeFunction) this.setNormalizeFunction(normalizeFunction);
  if (typeof minValue !== 'undefined' ) this.setMin(minValue);
  if (typeof maxValue !== 'undefined' ) this.setMax(maxValue);
};

jvm.NumericScale.prototype = {
  setMin: function(min) {
    this.clearMinValue = min;
    if (typeof this.normalize === 'function') {
      this.minValue = this.normalize(min);
    } else {
      this.minValue = min;
    }
  },

  setMax: function(max) {
    this.clearMaxValue = max;
    if (typeof this.normalize === 'function') {
      this.maxValue = this.normalize(max);
    } else {
      this.maxValue = max;
    }
  },

  setScale: function(scale) {
    var i;

    this.scale = [];
    for (i = 0; i < scale.length; i++) {
      this.scale[i] = [scale[i]];
    }
  },

  setNormalizeFunction: function(f) {
    if (f === 'polynomial') {
      this.normalize = function(value) {
        return Math.pow(value, 0.2);
      }
    } else if (f === 'linear') {
      delete this.normalize;
    } else {
      this.normalize = f;
    }
    this.setMin(this.clearMinValue);
    this.setMax(this.clearMaxValue);
  },

  getValue: function(value) {
    var lengthes = [],
        fullLength = 0,
        l,
        i = 0,
        c;

    if (typeof this.normalize === 'function') {
      value = this.normalize(value);
    }
    for (i = 0; i < this.scale.length-1; i++) {
      l = this.vectorLength(this.vectorSubtract(this.scale[i+1], this.scale[i]));
      lengthes.push(l);
      fullLength += l;
    }

    c = (this.maxValue - this.minValue) / fullLength;
    for (i=0; i<lengthes.length; i++) {
      lengthes[i] *= c;
    }

    i = 0;
    value -= this.minValue;
    while (value - lengthes[i] >= 0) {
      value -= lengthes[i];
      i++;
    }

    if (i == this.scale.length - 1) {
      value = this.vectorToNum(this.scale[i])
    } else {
      value = (
        this.vectorToNum(
          this.vectorAdd(this.scale[i],
            this.vectorMult(
              this.vectorSubtract(this.scale[i+1], this.scale[i]),
              (value) / (lengthes[i])
            )
          )
        )
      );
    }

    return value;
  },

  vectorToNum: function(vector) {
    var num = 0,
        i;

    for (i = 0; i < vector.length; i++) {
      num += Math.round(vector[i])*Math.pow(256, vector.length-i-1);
    }
    return num;
  },

  vectorSubtract: function(vector1, vector2) {
    var vector = [],
        i;

    for (i = 0; i < vector1.length; i++) {
      vector[i] = vector1[i] - vector2[i];
    }
    return vector;
  },

  vectorAdd: function(vector1, vector2) {
    var vector = [],
        i;

    for (i = 0; i < vector1.length; i++) {
      vector[i] = vector1[i] + vector2[i];
    }
    return vector;
  },

  vectorMult: function(vector, num) {
    var result = [],
        i;

    for (i = 0; i < vector.length; i++) {
      result[i] = vector[i] * num;
    }
    return result;
  },

  vectorLength: function(vector) {
    var result = 0,
        i;
    for (i = 0; i < vector.length; i++) {
      result += vector[i] * vector[i];
    }
    return Math.sqrt(result);
  },

  /* Derived from d3 implementation https://github.com/mbostock/d3/blob/master/src/scale/linear.js#L94 */
  getTicks: function(){
    var m = 5,
        extent = [this.clearMinValue, this.clearMaxValue],
        span = extent[1] - extent[0],
        step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)),
        err = m / span * step,
        ticks = [],
        tick,
        v;

    if (err <= .15) step *= 10;
    else if (err <= .35) step *= 5;
    else if (err <= .75) step *= 2;

    extent[0] = Math.floor(extent[0] / step) * step;
    extent[1] = Math.ceil(extent[1] / step) * step;

    tick = extent[0];
    while (tick <= extent[1]) {
      if (tick == extent[0]) {
        v = this.clearMinValue;
      } else if (tick == extent[1]) {
        v = this.clearMaxValue;
      } else {
        v = tick;
      }
      ticks.push({
        label: tick,
        value: this.getValue(v)
      });
      tick += step;
    }

    return ticks;
  }
};
jvm.ColorScale = function(colors, normalizeFunction, minValue, maxValue) {
  jvm.ColorScale.parentClass.apply(this, arguments);
}

jvm.inherits(jvm.ColorScale, jvm.NumericScale);

jvm.ColorScale.prototype.setScale = function(scale) {
  var i;

  for (i = 0; i < scale.length; i++) {
    this.scale[i] = jvm.ColorScale.rgbToArray(scale[i]);
  }
};

jvm.ColorScale.prototype.getValue = function(value) {
  return jvm.ColorScale.numToRgb(jvm.ColorScale.parentClass.prototype.getValue.call(this, value));
};

jvm.ColorScale.arrayToRgb = function(ar) {
  var rgb = '#',
      d,
      i;

  for (i = 0; i < ar.length; i++) {
    d = ar[i].toString(16);
    rgb += d.length == 1 ? '0'+d : d;
  }
  return rgb;
};

jvm.ColorScale.numToRgb = function(num) {
  num = num.toString(16);

  while (num.length < 6) {
    num = '0' + num;
  }

  return '#'+num;
};

jvm.ColorScale.rgbToArray = function(rgb) {
  rgb = rgb.substr(1);
  return [parseInt(rgb.substr(0, 2), 16), parseInt(rgb.substr(2, 2), 16), parseInt(rgb.substr(4, 2), 16)];
};/**
 * Represents map legend.
 * @constructor
 * @param {Object} params Configuration parameters.
 * @param {String} params.cssClass Additional CSS class to apply to legend element.
 * @param {Boolean} params.vertical If <code>true</code> legend will be rendered as vertical.
 * @param {String} params.title Legend title.
 * @param {Function} params.labelRender Method to convert series values to legend labels.
 */
jvm.Legend = function(params) {
  this.params = params || {};
  this.map = this.params.map;
  this.series = this.params.series;
  this.body = jvm.$('<div/>');
  this.body.addClass('jvectormap-legend');
  if (this.params.cssClass) {
    this.body.addClass(this.params.cssClass);
  }

  if (params.vertical) {
    this.map.legendCntVertical.append( this.body );
  } else {
    this.map.legendCntHorizontal.append( this.body );
  }

  this.render();
}

jvm.Legend.prototype.render = function(){
  var ticks = this.series.scale.getTicks(),
      i,
      inner = jvm.$('<div/>').addClass('jvectormap-legend-inner'),
      tick,
      sample,
      label;

  this.body.html('');
  if (this.params.title) {
    this.body.append(
      jvm.$('<div/>').addClass('jvectormap-legend-title').html(this.params.title)
    );
  }
  this.body.append(inner);

  for (i = 0; i < ticks.length; i++) {
    tick = jvm.$('<div/>').addClass('jvectormap-legend-tick');
    sample = jvm.$('<div/>').addClass('jvectormap-legend-tick-sample');

    switch (this.series.params.attribute) {
      case 'fill':
        if (jvm.isImageUrl(ticks[i].value)) {
          sample.css('background', 'url('+ticks[i].value+')');
        } else {
          sample.css('background', ticks[i].value);
        }
        break;
      case 'stroke':
        sample.css('background', ticks[i].value);
        break;
      case 'image':
        sample.css('background', 'url('+(typeof ticks[i].value === 'object' ? ticks[i].value.url : ticks[i].value)+') no-repeat center center');
        break;
      case 'r':
        jvm.$('<div/>').css({
          'border-radius': ticks[i].value,
          border: this.map.params.markerStyle.initial['stroke-width']+'px '+
                  this.map.params.markerStyle.initial['stroke']+' solid',
          width: ticks[i].value * 2 + 'px',
          height: ticks[i].value * 2 + 'px',
          background: this.map.params.markerStyle.initial['fill']
        }).appendTo(sample);
        break;
    }
    tick.append( sample );
    label = ticks[i].label;
    if (this.params.labelRender) {
      label = this.params.labelRender(label);
    }
    tick.append( jvm.$('<div>'+label+' </div>').addClass('jvectormap-legend-tick-text') );
    inner.append(tick);
  }
  inner.append( jvm.$('<div/>').css('clear', 'both') );
}/**
 * Creates data series.
 * @constructor
 * @param {Object} params Parameters to initialize series with.
 * @param {Array} params.values The data set to visualize.
 * @param {String} params.attribute Numeric, color or image attribute to use for data visualization. This could be: <code>fill</code>, <code>stroke</code>, <code>fill-opacity</code>, <code>stroke-opacity</code> for markers and regions and <code>r</code> (radius) or <code>image</code> for markers only.
 * @param {Array} params.scale Values used to map a dimension of data to a visual representation. The first value sets visualization for minimum value from the data set and the last value sets visualization for the maximum value. There also could be intermidiate values. Default value is <code>['#C8EEFF', '#0071A4']</code>.
 * @param {Function|String} params.normalizeFunction The function used to map input values to the provided scale. This parameter could be provided as function or one of the strings: <code>'linear'</code> or <code>'polynomial'</code>, while <code>'linear'</code> is used by default. The function provided takes value from the data set as an input and returns corresponding value from the scale.
 * @param {Number} params.min Minimum value of the data set. Could be calculated automatically if not provided.
 * @param {Number} params.max Maximum value of the data set. Could be calculated automatically if not provided.
 */
jvm.DataSeries = function (params, elements, map) {
  var scaleConstructor;

  params = params || {};
  params.attribute = params.attribute || "fill";

  this.elements = elements;
  this.params = params;
  this.map = map;

  if (params.attributes) {
    this.setAttributes(params.attributes);
  }

  if (jvm.$.isArray(params.scale)) {
    scaleConstructor =
      params.attribute === "fill" || params.attribute === "stroke"
        ? jvm.ColorScale
        : jvm.NumericScale;
    this.scale = new scaleConstructor(
      params.scale,
      params.normalizeFunction,
      params.min,
      params.max,
    );
  } else if (params.scale) {
    this.scale = new jvm.OrdinalScale(params.scale);
  } else {
    this.scale = new jvm.SimpleScale(params.scale);
  }

  this.values = params.values || {};
  this.setValues(this.values);

  if (this.params.legend) {
    this.legend = new jvm.Legend(
      jvm.$.extend(
        {
          map: this.map,
          series: this,
        },
        this.params.legend,
      ),
    );
  }
};

jvm.DataSeries.prototype = {
  setAttributes: function (key, attr) {
    var attrs = key,
      code;

    if (typeof key == "string") {
      if (this.elements[key]) {
        this.elements[key].setStyle(this.params.attribute, attr);
      }
    } else {
      for (code in attrs) {
        if (this.elements[code]) {
          this.elements[code].element.setStyle(
            this.params.attribute,
            attrs[code],
          );
        }
      }
    }
  },

  /**
   * Set values for the data set.
   * @param {Object} values Object which maps codes of regions or markers to values.
   */
  setValues: function (values) {
    var max = -Number.MAX_VALUE,
      min = Number.MAX_VALUE,
      val,
      cc,
      attrs = {};

    if (
      !(this.scale instanceof jvm.OrdinalScale) &&
      !(this.scale instanceof jvm.SimpleScale)
    ) {
      // we have a color scale as an array
      if (
        typeof this.params.min === "undefined" ||
        typeof this.params.max === "undefined"
      ) {
        // min and/or max are not defined, so calculate them
        for (cc in values) {
          val = parseFloat(values[cc]);
          if (val > max) max = val;
          if (val < min) min = val;
        }
      }

      if (typeof this.params.min === "undefined") {
        this.scale.setMin(min);
        this.params.min = min;
      } else {
        this.scale.setMin(this.params.min);
      }

      if (typeof this.params.max === "undefined") {
        this.scale.setMax(max);
        this.params.max = max;
      } else {
        this.scale.setMax(this.params.max);
      }

      for (cc in values) {
        if (cc != "indexOf") {
          val = parseFloat(values[cc]);
          if (!isNaN(val)) {
            attrs[cc] = this.scale.getValue(val);
          } else {
            attrs[cc] =
              this.elements[cc].element.style.initial[this.params.attribute];
          }
        }
      }
    } else {
      for (cc in values) {
        if (values[cc]) {
          attrs[cc] = this.scale.getValue(values[cc]);
        } else {
          attrs[cc] =
            this.elements[cc].element.style.initial[this.params.attribute];
        }
      }
    }

    this.setAttributes(attrs);
    jvm.$.extend(this.values, values);
  },

  clear: function () {
    var key,
      attrs = {};

    for (key in this.values) {
      if (this.elements[key]) {
        attrs[key] =
          this.elements[key].element.shape.style.initial[this.params.attribute];
      }
    }
    this.setAttributes(attrs);
    this.values = {};
  },

  clearAndSet: function (values) {
    this.clear();
    this.setValues(values);
  },

  /**
   * Set scale of the data series.
   * @param {Array} scale Values representing scale.
   */
  setScale: function (scale) {
    this.scale.setScale(scale);
    if (this.values) {
      this.setValues(this.values);
    }
  },

  /**
   * Set normalize function of the data series.
   * @param {Function|String} f Normalize function.
   */
  setNormalizeFunction: function (f) {
    this.scale.setNormalizeFunction(f);
    if (this.values) {
      this.setValues(this.values);
    }
  },
};
/**
 * Contains methods for transforming point on sphere to
 * Cartesian coordinates using various projections.
 * @class
 */
jvm.Proj = {
  degRad: 180 / Math.PI,
  radDeg: Math.PI / 180,
  radius: 6381372,

  sgn: function(n){
    if (n > 0) {
      return 1;
    } else if (n < 0) {
      return -1;
    } else {
      return n;
    }
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Miller projection
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  mill: function(lat, lng, c){
    return {
      x: this.radius * (lng - c) * this.radDeg,
      y: - this.radius * Math.log(Math.tan((45 + 0.4 * lat) * this.radDeg)) / 0.8
    };
  },

  /**
   * Inverse function of mill()
   * Converts Cartesian coordinates to point on sphere using Miller projection
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  mill_inv: function(x, y, c){
    return {
      lat: (2.5 * Math.atan(Math.exp(0.8 * y / this.radius)) - 5 * Math.PI / 8) * this.degRad,
      lng: (c * this.radDeg + x / this.radius) * this.degRad
    };
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Mercator projection
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  merc: function(lat, lng, c){
    return {
      x: this.radius * (lng - c) * this.radDeg,
      y: - this.radius * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360))
    };
  },

  /**
   * Inverse function of merc()
   * Converts Cartesian coordinates to point on sphere using Mercator projection
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  merc_inv: function(x, y, c){
    return {
      lat: (2 * Math.atan(Math.exp(y / this.radius)) - Math.PI / 2) * this.degRad,
      lng: (c * this.radDeg + x / this.radius) * this.degRad
    };
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Albers Equal-Area Conic
   * projection
   * @see <a href="http://mathworld.wolfram.com/AlbersEqual-AreaConicProjection.html">Albers Equal-Area Conic projection</a>
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  aea: function(lat, lng, c){
    var fi0 = 0,
        lambda0 = c * this.radDeg,
        fi1 = 29.5 * this.radDeg,
        fi2 = 45.5 * this.radDeg,
        fi = lat * this.radDeg,
        lambda = lng * this.radDeg,
        n = (Math.sin(fi1)+Math.sin(fi2)) / 2,
        C = Math.cos(fi1)*Math.cos(fi1)+2*n*Math.sin(fi1),
        theta = n*(lambda-lambda0),
        ro = Math.sqrt(C-2*n*Math.sin(fi))/n,
        ro0 = Math.sqrt(C-2*n*Math.sin(fi0))/n;

    return {
      x: ro * Math.sin(theta) * this.radius,
      y: - (ro0 - ro * Math.cos(theta)) * this.radius
    };
  },

  /**
   * Converts Cartesian coordinates to the point on sphere using Albers Equal-Area Conic
   * projection
   * @see <a href="http://mathworld.wolfram.com/AlbersEqual-AreaConicProjection.html">Albers Equal-Area Conic projection</a>
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  aea_inv: function(xCoord, yCoord, c){
    var x = xCoord / this.radius,
        y = yCoord / this.radius,
        fi0 = 0,
        lambda0 = c * this.radDeg,
        fi1 = 29.5 * this.radDeg,
        fi2 = 45.5 * this.radDeg,
        n = (Math.sin(fi1)+Math.sin(fi2)) / 2,
        C = Math.cos(fi1)*Math.cos(fi1)+2*n*Math.sin(fi1),
        ro0 = Math.sqrt(C-2*n*Math.sin(fi0))/n,
        ro = Math.sqrt(x*x+(ro0-y)*(ro0-y)),
        theta = Math.atan( x / (ro0 - y) );

    return {
      lat: (Math.asin((C - ro * ro * n * n) / (2 * n))) * this.degRad,
      lng: (lambda0 + theta / n) * this.degRad
    };
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Lambert conformal
   * conic projection
   * @see <a href="http://mathworld.wolfram.com/LambertConformalConicProjection.html">Lambert Conformal Conic Projection</a>
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  lcc: function(lat, lng, c){
    var fi0 = 0,
        lambda0 = c * this.radDeg,
        lambda = lng * this.radDeg,
        fi1 = 33 * this.radDeg,
        fi2 = 45 * this.radDeg,
        fi = lat * this.radDeg,
        n = Math.log( Math.cos(fi1) * (1 / Math.cos(fi2)) ) / Math.log( Math.tan( Math.PI / 4 + fi2 / 2) * (1 / Math.tan( Math.PI / 4 + fi1 / 2) ) ),
        F = ( Math.cos(fi1) * Math.pow( Math.tan( Math.PI / 4 + fi1 / 2 ), n ) ) / n,
        ro = F * Math.pow( 1 / Math.tan( Math.PI / 4 + fi / 2 ), n ),
        ro0 = F * Math.pow( 1 / Math.tan( Math.PI / 4 + fi0 / 2 ), n );

    return {
      x: ro * Math.sin( n * (lambda - lambda0) ) * this.radius,
      y: - (ro0 - ro * Math.cos( n * (lambda - lambda0) ) ) * this.radius
    };
  },

  /**
   * Converts Cartesian coordinates to the point on sphere using Lambert conformal conic
   * projection
   * @see <a href="http://mathworld.wolfram.com/LambertConformalConicProjection.html">Lambert Conformal Conic Projection</a>
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  lcc_inv: function(xCoord, yCoord, c){
    var x = xCoord / this.radius,
        y = yCoord / this.radius,
        fi0 = 0,
        lambda0 = c * this.radDeg,
        fi1 = 33 * this.radDeg,
        fi2 = 45 * this.radDeg,
        n = Math.log( Math.cos(fi1) * (1 / Math.cos(fi2)) ) / Math.log( Math.tan( Math.PI / 4 + fi2 / 2) * (1 / Math.tan( Math.PI / 4 + fi1 / 2) ) ),
        F = ( Math.cos(fi1) * Math.pow( Math.tan( Math.PI / 4 + fi1 / 2 ), n ) ) / n,
        ro0 = F * Math.pow( 1 / Math.tan( Math.PI / 4 + fi0 / 2 ), n ),
        ro = this.sgn(n) * Math.sqrt(x*x+(ro0-y)*(ro0-y)),
        theta = Math.atan( x / (ro0 - y) );

    return {
      lat: (2 * Math.atan(Math.pow(F/ro, 1/n)) - Math.PI / 2) * this.degRad,
      lng: (lambda0 + theta / n) * this.degRad
    };
  }
};jvm.MapObject = function(config){};

jvm.MapObject.prototype.getLabelText = function(key){
  var text;

  if (this.config.label) {
    if (typeof this.config.label.render === 'function') {
      text = this.config.label.render(key);
    } else {
      text = key;
    }
  } else {
    text = null;
  }
  return text;
}

jvm.MapObject.prototype.getLabelOffsets = function(key){
  var offsets;

  if (this.config.label) {
    if (typeof this.config.label.offsets === 'function') {
      offsets = this.config.label.offsets(key);
    } else if (typeof this.config.label.offsets === 'object') {
      offsets = this.config.label.offsets[key];
    }
  }
  return offsets || [0, 0];
}

/**
 * Set hovered state to the element. Hovered state means mouse cursor is over element. Styles will be updates respectively.
 * @param {Boolean} isHovered <code>true</code> to make element hovered, <code>false</code> otherwise.
 */
jvm.MapObject.prototype.setHovered = function(isHovered){
  if (this.isHovered !== isHovered) {
    this.isHovered = isHovered;
    this.shape.isHovered = isHovered;
    this.shape.updateStyle();
    if (this.label) {
      this.label.isHovered = isHovered;
      this.label.updateStyle();
    }
  }
};

/**
 * Set selected state to the element. Styles will be updates respectively.
 * @param {Boolean} isSelected <code>true</code> to make element selected, <code>false</code> otherwise.
 */
jvm.MapObject.prototype.setSelected = function(isSelected){
  if (this.isSelected !== isSelected) {
    this.isSelected = isSelected;
    this.shape.isSelected = isSelected;
    this.shape.updateStyle();
    if (this.label) {
      this.label.isSelected = isSelected;
      this.label.updateStyle();
    }
    jvm.$(this.shape).trigger('selected', [isSelected]);
  }
};

jvm.MapObject.prototype.setStyle = function(){
	this.shape.setStyle.apply(this.shape, arguments);
};

jvm.MapObject.prototype.remove = function(){
  this.shape.remove();
  if (this.label) {
    this.label.remove();
  }
};jvm.Region = function(config){
  var bbox,
      text,
      offsets,
      labelDx,
      labelDy;

  this.config = config;
  this.map = this.config.map;

  this.shape = config.canvas.addPath({
    d: config.path,
    'data-code': config.code
  }, config.style, config.canvas.rootElement);
  this.shape.addClass('jvectormap-region jvectormap-element');

  bbox = this.shape.getBBox();

  text = this.getLabelText(config.code);
  if (this.config.label && text) {
    offsets = this.getLabelOffsets(config.code);
    this.labelX = bbox.x + bbox.width / 2 + offsets[0];
    this.labelY = bbox.y + bbox.height / 2 + offsets[1];
    this.label = config.canvas.addText({
      text: text,
      'text-anchor': 'middle',
      'alignment-baseline': 'central',
      x: this.labelX,
      y: this.labelY,
      'data-code': config.code
    }, config.labelStyle, config.labelsGroup);
    this.label.addClass('jvectormap-region jvectormap-element');
  }
};

jvm.inherits(jvm.Region, jvm.MapObject);

jvm.Region.prototype.updateLabelPosition = function(){
  if (this.label) {
    this.label.set({
      x: this.labelX * this.map.scale + this.map.transX * this.map.scale,
      y: this.labelY * this.map.scale + this.map.transY * this.map.scale
    });
  }
};jvm.Marker = function(config){
  var text,
      offsets;

  this.config = config;
  this.map = this.config.map;

  this.isImage = !!this.config.style.initial.image;
  this.createShape();

  text = this.getLabelText(config.index);
  if (this.config.label && text) {
    this.offsets = this.getLabelOffsets(config.index);
    this.labelX = config.cx / this.map.scale - this.map.transX;
    this.labelY = config.cy / this.map.scale - this.map.transY;
    this.label = config.canvas.addText({
      text: text,
      'data-index': config.index,
      dy: "0.6ex",
      x: this.labelX,
      y: this.labelY
    }, config.labelStyle, config.labelsGroup);

    this.label.addClass('jvectormap-marker jvectormap-element');
  }
};

jvm.inherits(jvm.Marker, jvm.MapObject);

jvm.Marker.prototype.createShape = function(){
  var that = this;

  if (this.shape) {
    this.shape.remove();
  }
  this.shape = this.config.canvas[this.isImage ? 'addImage' : 'addCircle']({
    "data-index": this.config.index,
    cx: this.config.cx,
    cy: this.config.cy
  }, this.config.style, this.config.group);

  this.shape.addClass('jvectormap-marker jvectormap-element');

  if (this.isImage) {
    jvm.$(this.shape.node).on('imageloaded', function(){
      that.updateLabelPosition();
    });
  }
};

jvm.Marker.prototype.updateLabelPosition = function(){
  if (this.label) {
    this.label.set({
      x: this.labelX * this.map.scale + this.offsets[0] +
         this.map.transX * this.map.scale + 5 + (this.isImage ? (this.shape.width || 0) / 2 : this.shape.properties.r),
      y: this.labelY * this.map.scale + this.map.transY * this.map.scale + this.offsets[1]
    });
  }
};

jvm.Marker.prototype.setStyle = function(property, value){
  var isImage;

  jvm.Marker.parentClass.prototype.setStyle.apply(this, arguments);

  if (property === 'r') {
    this.updateLabelPosition();
  }

  isImage = !!this.shape.get('image');
  if (isImage != this.isImage) {
    this.isImage = isImage;
    this.config.style = jvm.$.extend(true, {}, this.shape.style);
    this.createShape();
  }
};/**
 * Creates map, draws paths, binds events.
 * @constructor
 * @param {Object} params Parameters to initialize map with.
 * @param {String} params.map Name of the map in the format <code>territory_proj_lang</code> where <code>territory</code> is a unique code or name of the territory which the map represents (ISO 3166 standard is used where possible), <code>proj</code> is a name of projection used to generate representation of the map on the plane (projections are named according to the conventions of proj4 utility) and <code>lang</code> is a code of the language, used for the names of regions.
 * @param {String} params.backgroundColor Background color of the map in CSS format.
 * @param {Boolean} params.zoomOnScroll When set to true map could be zoomed using mouse scroll. Default value is <code>true</code>.
 * @param {Number} params.zoomOnScrollSpeed Mouse scroll speed. Number from 1 to 10. Default value is <code>3</code>.
 * @param {Boolean} params.panOnDrag When set to true, the map pans when being dragged. Default value is <code>true</code>.
 * @param {Number} params.zoomMax Indicates the maximum zoom ratio which could be reached zooming the map. Default value is <code>8</code>.
 * @param {Number} params.zoomMin Indicates the minimum zoom ratio which could be reached zooming the map. Default value is <code>1</code>.
 * @param {Number} params.zoomStep Indicates the multiplier used to zoom map with +/- buttons. Default value is <code>1.6</code>.
 * @param {Boolean} params.zoomAnimate Indicates whether or not to animate changing of map zoom with zoom buttons.
 * @param {Boolean} params.regionsSelectable When set to true regions of the map could be selected. Default value is <code>false</code>.
 * @param {Boolean} params.regionsSelectableOne Allow only one region to be selected at the moment. Default value is <code>false</code>.
 * @param {Boolean} params.markersSelectable When set to true markers on the map could be selected. Default value is <code>false</code>.
 * @param {Boolean} params.markersSelectableOne Allow only one marker to be selected at the moment. Default value is <code>false</code>.
 * @param {Object} params.regionStyle Set the styles for the map's regions. Each region or marker has four states: <code>initial</code> (default state), <code>hover</code> (when the mouse cursor is over the region or marker), <code>selected</code> (when region or marker is selected), <code>selectedHover</code> (when the mouse cursor is over the region or marker and it's selected simultaneously). Styles could be set for each of this states. Default value for that parameter is:
<pre>{
  initial: {
    fill: 'white',
    "fill-opacity": 1,
    stroke: 'none',
    "stroke-width": 0,
    "stroke-opacity": 1
  },
  hover: {
    "fill-opacity": 0.8,
    cursor: 'pointer'
  },
  selected: {
    fill: 'yellow'
  },
  selectedHover: {
  }
}</pre>
* @param {Object} params.regionLabelStyle Set the styles for the regions' labels. Each region or marker has four states: <code>initial</code> (default state), <code>hover</code> (when the mouse cursor is over the region or marker), <code>selected</code> (when region or marker is selected), <code>selectedHover</code> (when the mouse cursor is over the region or marker and it's selected simultaneously). Styles could be set for each of this states. Default value for that parameter is:
<pre>{
  initial: {
    'font-family': 'Verdana',
    'font-size': '12',
    'font-weight': 'bold',
    cursor: 'default',
    fill: 'black'
  },
  hover: {
    cursor: 'pointer'
  }
}</pre>
 * @param {Object} params.markerStyle Set the styles for the map's markers. Any parameter suitable for <code>regionStyle</code> could be used as well as numeric parameter <code>r</code> to set the marker's radius. Default value for that parameter is:
<pre>{
  initial: {
    fill: 'grey',
    stroke: '#505050',
    "fill-opacity": 1,
    "stroke-width": 1,
    "stroke-opacity": 1,
    r: 5
  },
  hover: {
    stroke: 'black',
    "stroke-width": 2,
    cursor: 'pointer'
  },
  selected: {
    fill: 'blue'
  },
  selectedHover: {
  }
}</pre>
You can also use <code>image</code> style attribute for markers. By default marker images are centered with the target point on map. To supply a custom offset please use the following format:
<pre>{
  url: 'image/url',
  offset: [-10, 5]
}</pre>
 * @param {Object} params.markerLabelStyle Set the styles for the markers' labels. Default value for that parameter is:
<pre>{
  initial: {
    'font-family': 'Verdana',
    'font-size': '12',
    'font-weight': 'bold',
    cursor: 'default',
    fill: 'black'
  },
  hover: {
    cursor: 'pointer'
  }
}</pre>
 * @param {Object|Array} params.markers Set of markers to add to the map during initialization. In case of array is provided, codes of markers will be set as string representations of array indexes. Each marker is represented by <code>latLng</code> (array of two numeric values), <code>name</code> (string which will be show on marker's tip) and any marker styles.
 * @param {Object} params.series Object with two keys: <code>markers</code> and <code>regions</code>. Each of which is an array of series configs to be applied to the respective map elements. See <a href="jvm.DataSeries.html">DataSeries</a> description for a list of parameters available.
 * @param {Object|String} params.focusOn This parameter sets the initial position and scale of the map viewport. See <code>setFocus</code> docuemntation for possible parameters.
 * @param {Object} params.labels Defines parameters for rendering static labels. Object could contain two keys: <code>regions</code> and <code>markers</code>. Each key value defines configuration object with the following possible options:
<ul>
  <li><code>render {Function}</code> - defines method for converting region code or marker index to actual label value.</li>
  <li><code>offsets {Object|Function}</code> - provides method or object which could be used to define label offset by region code or marker index.</li>
</ul>
<b>Plase note: static labels feature is not supported in Internet Explorer 8 and below.</b>
 * @param {Array|Object|String} params.selectedRegions Set initially selected regions.
 * @param {Array|Object|String} params.selectedMarkers Set initially selected markers.
 * @param {Function} params.onRegionTipShow <code>(Event e, Object tip, String code)</code> Will be called right before the region tip is going to be shown.
 * @param {Function} params.onRegionOver <code>(Event e, String code)</code> Will be called on region mouse over event.
 * @param {Function} params.onRegionOut <code>(Event e, String code)</code> Will be called on region mouse out event.
 * @param {Function} params.onRegionClick <code>(Event e, String code)</code> Will be called on region click event.
 * @param {Function} params.onRegionSelected <code>(Event e, String code, Boolean isSelected, Array selectedRegions)</code> Will be called when region is (de)selected. <code>isSelected</code> parameter of the callback indicates whether region is selected or not. <code>selectedRegions</code> contains codes of all currently selected regions.
 * @param {Function} params.onMarkerTipShow <code>(Event e, Object tip, String code)</code> Will be called right before the marker tip is going to be shown.
 * @param {Function} params.onMarkerOver <code>(Event e, String code)</code> Will be called on marker mouse over event.
 * @param {Function} params.onMarkerOut <code>(Event e, String code)</code> Will be called on marker mouse out event.
 * @param {Function} params.onMarkerClick <code>(Event e, String code)</code> Will be called on marker click event.
 * @param {Function} params.onMarkerSelected <code>(Event e, String code, Boolean isSelected, Array selectedMarkers)</code> Will be called when marker is (de)selected. <code>isSelected</code> parameter of the callback indicates whether marker is selected or not. <code>selectedMarkers</code> contains codes of all currently selected markers.
 * @param {Function} params.onViewportChange <code>(Event e, Number scale)</code> Triggered when the map's viewport is changed (map was panned or zoomed).
 */
jvm.Map = function (params) {
  var map = this,
    e;

  this.params = jvm.$.extend(true, {}, jvm.Map.defaultParams, params);

  if (!jvm.Map.maps[this.params.map]) {
    throw new Error(
      "Attempt to use map which was not loaded: " + this.params.map,
    );
  }

  this.mapData = jvm.Map.maps[this.params.map];
  this.markers = {};
  this.regions = {};
  this.regionsColors = {};
  this.regionsData = {};

  this.container = jvm.$("<div>").addClass("jvectormap-container");
  if (this.params.container) {
    this.params.container.append(this.container);
  }
  this.container.data("mapObject", this);

  this.defaultWidth = this.mapData.width;
  this.defaultHeight = this.mapData.height;

  this.setBackgroundColor(this.params.backgroundColor);

  this.onResize = function () {
    map.updateSize();
  };
  jvm.$(window).resize(this.onResize);

  for (e in jvm.Map.apiEvents) {
    if (this.params[e]) {
      this.container.bind(jvm.Map.apiEvents[e] + ".jvectormap", this.params[e]);
    }
  }

  this.canvas = new jvm.VectorCanvas(
    this.container[0],
    this.width,
    this.height,
  );

  if (this.params.bindTouchEvents) {
    if (
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof DocumentTouch)
    ) {
      this.bindContainerTouchEvents();
    } else if (window.MSGesture) {
      this.bindContainerPointerEvents();
    }
  }
  this.bindContainerEvents();
  this.bindElementEvents();
  this.createTip();
  if (this.params.zoomButtons) {
    this.bindZoomButtons();
  }

  this.createRegions();
  this.createMarkers(this.params.markers || {});

  this.updateSize();

  if (this.params.focusOn) {
    if (typeof this.params.focusOn === "string") {
      this.params.focusOn = { region: this.params.focusOn };
    } else if (jvm.$.isArray(this.params.focusOn)) {
      this.params.focusOn = { regions: this.params.focusOn };
    }
    this.setFocus(this.params.focusOn);
  }

  if (this.params.selectedRegions) {
    this.setSelectedRegions(this.params.selectedRegions);
  }
  if (this.params.selectedMarkers) {
    this.setSelectedMarkers(this.params.selectedMarkers);
  }

  this.legendCntHorizontal = jvm
    .$("<div/>")
    .addClass("jvectormap-legend-cnt jvectormap-legend-cnt-h");
  this.legendCntVertical = jvm
    .$("<div/>")
    .addClass("jvectormap-legend-cnt jvectormap-legend-cnt-v");
  this.container.append(this.legendCntHorizontal);
  this.container.append(this.legendCntVertical);

  if (this.params.series) {
    this.createSeries();
  }
};

jvm.Map.prototype = {
  transX: 0,
  transY: 0,
  scale: 1,
  baseTransX: 0,
  baseTransY: 0,
  baseScale: 1,

  width: 0,
  height: 0,

  /**
   * Set background color of the map.
   * @param {String} backgroundColor Background color in CSS format.
   */
  setBackgroundColor: function (backgroundColor) {
    this.container.css("background-color", backgroundColor);
  },

  resize: function () {
    var curBaseScale = this.baseScale;
    if (this.width / this.height > this.defaultWidth / this.defaultHeight) {
      this.baseScale = this.height / this.defaultHeight;
      this.baseTransX =
        Math.abs(this.width - this.defaultWidth * this.baseScale) /
        (2 * this.baseScale);
    } else {
      this.baseScale = this.width / this.defaultWidth;
      this.baseTransY =
        Math.abs(this.height - this.defaultHeight * this.baseScale) /
        (2 * this.baseScale);
    }
    this.scale *= this.baseScale / curBaseScale;
    this.transX *= this.baseScale / curBaseScale;
    this.transY *= this.baseScale / curBaseScale;
  },

  /**
   * Synchronize the size of the map with the size of the container. Suitable in situations where the size of the container is changed programmatically or container is shown after it became visible.
   */
  updateSize: function () {
    this.width = this.container.width();
    this.height = this.container.height();
    this.resize();
    this.canvas.setSize(this.width, this.height);
    this.applyTransform();
  },

  /**
   * Reset all the series and show the map with the initial zoom.
   */
  reset: function () {
    var key, i;

    for (key in this.series) {
      for (i = 0; i < this.series[key].length; i++) {
        this.series[key][i].clear();
      }
    }
    this.scale = this.baseScale;
    this.transX = this.baseTransX;
    this.transY = this.baseTransY;
    this.applyTransform();
  },

  applyTransform: function () {
    var maxTransX, maxTransY, minTransX, minTransY;

    if (this.defaultWidth * this.scale <= this.width) {
      maxTransX =
        (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
      minTransX =
        (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
    } else {
      maxTransX = 0;
      minTransX = (this.width - this.defaultWidth * this.scale) / this.scale;
    }

    if (this.defaultHeight * this.scale <= this.height) {
      maxTransY =
        (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
      minTransY =
        (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
    } else {
      maxTransY = 0;
      minTransY = (this.height - this.defaultHeight * this.scale) / this.scale;
    }

    if (this.transY > maxTransY) {
      this.transY = maxTransY;
    } else if (this.transY < minTransY) {
      this.transY = minTransY;
    }
    if (this.transX > maxTransX) {
      this.transX = maxTransX;
    } else if (this.transX < minTransX) {
      this.transX = minTransX;
    }

    this.canvas.applyTransformParams(this.scale, this.transX, this.transY);

    if (this.markers) {
      this.repositionMarkers();
    }

    this.repositionLabels();

    this.container.trigger("viewportChange", [
      this.scale / this.baseScale,
      this.transX,
      this.transY,
    ]);
  },

  bindContainerEvents: function () {
    var mouseDown = false,
      oldPageX,
      oldPageY,
      map = this;

    if (this.params.panOnDrag) {
      this.container
        .mousemove(function (e) {
          if (mouseDown) {
            map.transX -= (oldPageX - e.pageX) / map.scale;
            map.transY -= (oldPageY - e.pageY) / map.scale;

            map.applyTransform();

            oldPageX = e.pageX;
            oldPageY = e.pageY;
          }
          return false;
        })
        .mousedown(function (e) {
          mouseDown = true;
          oldPageX = e.pageX;
          oldPageY = e.pageY;
          return false;
        });

      this.onContainerMouseUp = function () {
        mouseDown = false;
      };
      jvm.$("body").mouseup(this.onContainerMouseUp);
    }

    if (this.params.zoomOnScroll) {
      this.container.mousewheel(function (event, delta, deltaX, deltaY) {
        var offset = jvm.$(map.container).offset(),
          centerX = event.pageX - offset.left,
          centerY = event.pageY - offset.top,
          zoomStep = Math.pow(
            1 + map.params.zoomOnScrollSpeed / 1000,
            event.deltaFactor * event.deltaY,
          );

        map.tip.hide();

        map.setScale(map.scale * zoomStep, centerX, centerY);
        event.preventDefault();
      });
    }
  },

  bindContainerTouchEvents: function () {
    var touchStartScale,
      touchStartDistance,
      map = this,
      touchX,
      touchY,
      centerTouchX,
      centerTouchY,
      lastTouchesLength,
      handleTouchEvent = function (e) {
        var touches = e.originalEvent.touches,
          offset,
          scale,
          transXOld,
          transYOld;

        if (e.type == "touchstart") {
          lastTouchesLength = 0;
        }

        if (touches.length == 1) {
          if (lastTouchesLength == 1) {
            transXOld = map.transX;
            transYOld = map.transY;
            map.transX -= (touchX - touches[0].pageX) / map.scale;
            map.transY -= (touchY - touches[0].pageY) / map.scale;
            map.applyTransform();
            map.tip.hide();
            if (transXOld != map.transX || transYOld != map.transY) {
              e.preventDefault();
            }
          }
          touchX = touches[0].pageX;
          touchY = touches[0].pageY;
        } else if (touches.length == 2) {
          if (lastTouchesLength == 2) {
            scale =
              Math.sqrt(
                Math.pow(touches[0].pageX - touches[1].pageX, 2) +
                  Math.pow(touches[0].pageY - touches[1].pageY, 2),
              ) / touchStartDistance;
            map.setScale(touchStartScale * scale, centerTouchX, centerTouchY);
            map.tip.hide();
            e.preventDefault();
          } else {
            offset = jvm.$(map.container).offset();
            if (touches[0].pageX > touches[1].pageX) {
              centerTouchX =
                touches[1].pageX + (touches[0].pageX - touches[1].pageX) / 2;
            } else {
              centerTouchX =
                touches[0].pageX + (touches[1].pageX - touches[0].pageX) / 2;
            }
            if (touches[0].pageY > touches[1].pageY) {
              centerTouchY =
                touches[1].pageY + (touches[0].pageY - touches[1].pageY) / 2;
            } else {
              centerTouchY =
                touches[0].pageY + (touches[1].pageY - touches[0].pageY) / 2;
            }
            centerTouchX -= offset.left;
            centerTouchY -= offset.top;
            touchStartScale = map.scale;
            touchStartDistance = Math.sqrt(
              Math.pow(touches[0].pageX - touches[1].pageX, 2) +
                Math.pow(touches[0].pageY - touches[1].pageY, 2),
            );
          }
        }

        lastTouchesLength = touches.length;
      };

    jvm.$(this.container).bind("touchstart", handleTouchEvent);
    jvm.$(this.container).bind("touchmove", handleTouchEvent);
  },

  bindContainerPointerEvents: function () {
    var map = this,
      gesture = new MSGesture(),
      element = this.container[0],
      handlePointerDownEvent = function (e) {
        gesture.addPointer(e.pointerId);
      },
      handleGestureEvent = function (e) {
        var offset, scale, transXOld, transYOld;

        if (e.translationX != 0 || e.translationY != 0) {
          transXOld = map.transX;
          transYOld = map.transY;
          map.transX += e.translationX / map.scale;
          map.transY += e.translationY / map.scale;
          map.applyTransform();
          map.tip.hide();
          if (transXOld != map.transX || transYOld != map.transY) {
            e.preventDefault();
          }
        }
        if (e.scale != 1) {
          map.setScale(map.scale * e.scale, e.offsetX, e.offsetY);
          map.tip.hide();
          e.preventDefault();
        }
      };

    gesture.target = element;
    element.addEventListener("MSGestureChange", handleGestureEvent, false);
    element.addEventListener("pointerdown", handlePointerDownEvent, false);
  },

  bindElementEvents: function () {
    var map = this,
      pageX,
      pageY,
      mouseMoved;

    this.container.mousemove(function (e) {
      if (Math.abs(pageX - e.pageX) + Math.abs(pageY - e.pageY) > 2) {
        mouseMoved = true;
      }
    });

    /* Can not use common class selectors here because of the bug in jQuery
       SVG handling, use with caution. */
    this.container.delegate(
      "[class~='jvectormap-element']",
      "mouseover mouseout",
      function (e) {
        var baseVal =
            jvm.$(this).attr("class").baseVal || jvm.$(this).attr("class"),
          type =
            baseVal.indexOf("jvectormap-region") === -1 ? "marker" : "region",
          code =
            type == "region"
              ? jvm.$(this).attr("data-code")
              : jvm.$(this).attr("data-index"),
          element =
            type == "region"
              ? map.regions[code].element
              : map.markers[code].element,
          tipText =
            type == "region"
              ? map.mapData.paths[code].name
              : map.markers[code].config.name || "",
          tipShowEvent = jvm.$.Event(type + "TipShow.jvectormap"),
          overEvent = jvm.$.Event(type + "Over.jvectormap");

        if (e.type == "mouseover") {
          map.container.trigger(overEvent, [code]);
          if (!overEvent.isDefaultPrevented()) {
            element.setHovered(true);
          }

          map.tip.text(tipText);
          map.container.trigger(tipShowEvent, [map.tip, code]);
          if (!tipShowEvent.isDefaultPrevented()) {
            map.tip.show();
            map.tipWidth = map.tip.width();
            map.tipHeight = map.tip.height();
          }
        } else {
          element.setHovered(false);
          map.tip.hide();
          map.container.trigger(type + "Out.jvectormap", [code]);
        }
      },
    );

    /* Can not use common class selectors here because of the bug in jQuery
       SVG handling, use with caution. */
    this.container.delegate(
      "[class~='jvectormap-element']",
      "mousedown",
      function (e) {
        pageX = e.pageX;
        pageY = e.pageY;
        mouseMoved = false;
      },
    );

    /* Can not use common class selectors here because of the bug in jQuery
       SVG handling, use with caution. */
    this.container.delegate(
      "[class~='jvectormap-element']",
      "mouseup",
      function () {
        var baseVal = jvm.$(this).attr("class").baseVal
            ? jvm.$(this).attr("class").baseVal
            : jvm.$(this).attr("class"),
          type =
            baseVal.indexOf("jvectormap-region") === -1 ? "marker" : "region",
          code =
            type == "region"
              ? jvm.$(this).attr("data-code")
              : jvm.$(this).attr("data-index"),
          clickEvent = jvm.$.Event(type + "Click.jvectormap"),
          element =
            type == "region"
              ? map.regions[code].element
              : map.markers[code].element;

        if (!mouseMoved) {
          map.container.trigger(clickEvent, [code]);
          if (
            (type === "region" && map.params.regionsSelectable) ||
            (type === "marker" && map.params.markersSelectable)
          ) {
            if (!clickEvent.isDefaultPrevented()) {
              if (map.params[type + "sSelectableOne"]) {
                map.clearSelected(type + "s");
              }
              element.setSelected(!element.isSelected);
            }
          }
        }
      },
    );
  },

  bindZoomButtons: function () {
    var map = this;

    jvm
      .$("<div/>")
      .addClass("jvectormap-zoomin")
      .text("+")
      .appendTo(this.container);
    jvm
      .$("<div/>")
      .addClass("jvectormap-zoomout")
      .html("&#x2212;")
      .appendTo(this.container);

    this.container.find(".jvectormap-zoomin").click(function () {
      map.setScale(
        map.scale * map.params.zoomStep,
        map.width / 2,
        map.height / 2,
        false,
        map.params.zoomAnimate,
      );
    });
    this.container.find(".jvectormap-zoomout").click(function () {
      map.setScale(
        map.scale / map.params.zoomStep,
        map.width / 2,
        map.height / 2,
        false,
        map.params.zoomAnimate,
      );
    });
  },

  createTip: function () {
    var map = this;

    this.tip = jvm
      .$("<div/>")
      .addClass("jvectormap-tip")
      .appendTo(jvm.$("body"));

    this.container.mousemove(function (e) {
      var left = e.pageX - 15 - map.tipWidth,
        top = e.pageY - 15 - map.tipHeight;

      if (left < 5) {
        left = e.pageX + 15;
      }
      if (top < 5) {
        top = e.pageY + 15;
      }

      map.tip.css({
        left: left,
        top: top,
      });
    });
  },

  setScale: function (scale, anchorX, anchorY, isCentered, animate) {
    var viewportChangeEvent = jvm.$.Event("zoom.jvectormap"),
      interval,
      that = this,
      i = 0,
      count = Math.abs(
        Math.round(((scale - this.scale) * 60) / Math.max(scale, this.scale)),
      ),
      scaleStart,
      scaleDiff,
      transXStart,
      transXDiff,
      transYStart,
      transYDiff,
      transX,
      transY,
      deferred = new jvm.$.Deferred();

    if (scale > this.params.zoomMax * this.baseScale) {
      scale = this.params.zoomMax * this.baseScale;
    } else if (scale < this.params.zoomMin * this.baseScale) {
      scale = this.params.zoomMin * this.baseScale;
    }

    if (typeof anchorX != "undefined" && typeof anchorY != "undefined") {
      const zoomStep = scale / this.scale;
      if (isCentered) {
        transX =
          anchorX +
          (this.defaultWidth * (this.width / (this.defaultWidth * scale))) / 2;
        transY =
          anchorY +
          (this.defaultHeight * (this.height / (this.defaultHeight * scale))) /
            2;
      } else {
        transX = this.transX - ((zoomStep - 1) / scale) * anchorX;
        transY = this.transY - ((zoomStep - 1) / scale) * anchorY;
      }
    }

    if (animate && count > 0) {
      scaleStart = this.scale;
      scaleDiff = (scale - scaleStart) / count;
      transXStart = this.transX * this.scale;
      transYStart = this.transY * this.scale;
      transXDiff = (transX * scale - transXStart) / count;
      transYDiff = (transY * scale - transYStart) / count;
      interval = setInterval(function () {
        i += 1;
        that.scale = scaleStart + scaleDiff * i;
        that.transX = (transXStart + transXDiff * i) / that.scale;
        that.transY = (transYStart + transYDiff * i) / that.scale;
        that.applyTransform();
        if (i == count) {
          clearInterval(interval);
          that.container.trigger(viewportChangeEvent, [scale / that.baseScale]);
          deferred.resolve();
        }
      }, 10);
    } else {
      this.transX = transX;
      this.transY = transY;
      this.scale = scale;
      this.applyTransform();
      this.container.trigger(viewportChangeEvent, [scale / this.baseScale]);
      deferred.resolve();
    }

    return deferred;
  },

  /**
   * Set the map's viewport to the specific point and set zoom of the map to the specific level. Point and zoom level could be defined in two ways: using the code of some region to focus on or a central point and zoom level as numbers.
   * @param This method takes a configuration object as the single argument. The options passed to it are the following:
   * @param {Array} params.regions Array of region codes to zoom to.
   * @param {String} params.region Region code to zoom to.
   * @param {Number} params.scale Map scale to set.
   * @param {Number} params.lat Latitude to set viewport to.
   * @param {Number} params.lng Longitude to set viewport to.
   * @param {Number} params.x Number from 0 to 1 specifying the horizontal coordinate of the central point of the viewport.
   * @param {Number} params.y Number from 0 to 1 specifying the vertical coordinate of the central point of the viewport.
   * @param {Boolean} params.animate Indicates whether or not to animate the scale change and transition.
   */
  setFocus: function (config) {
    var bbox, itemBbox, newBbox, codes, i, point;

    config = config || {};

    if (config.region) {
      codes = [config.region];
    } else if (config.regions) {
      codes = config.regions;
    }

    if (codes) {
      for (i = 0; i < codes.length; i++) {
        if (this.regions[codes[i]]) {
          itemBbox = this.regions[codes[i]].element.shape.getBBox();
          if (itemBbox) {
            if (typeof bbox == "undefined") {
              bbox = itemBbox;
            } else {
              newBbox = {
                x: Math.min(bbox.x, itemBbox.x),
                y: Math.min(bbox.y, itemBbox.y),
                width:
                  Math.max(bbox.x + bbox.width, itemBbox.x + itemBbox.width) -
                  Math.min(bbox.x, itemBbox.x),
                height:
                  Math.max(bbox.y + bbox.height, itemBbox.y + itemBbox.height) -
                  Math.min(bbox.y, itemBbox.y),
              };
              bbox = newBbox;
            }
          }
        }
      }
      return this.setScale(
        Math.min(this.width / bbox.width, this.height / bbox.height),
        -(bbox.x + bbox.width / 2),
        -(bbox.y + bbox.height / 2),
        true,
        config.animate,
      );
    } else {
      if (config.lat !== undefined && config.lng !== undefined) {
        point = this.latLngToPoint(config.lat, config.lng);
        config.x = this.transX - point.x / this.scale;
        config.y = this.transY - point.y / this.scale;
      } else if (config.x && config.y) {
        config.x *= -this.defaultWidth;
        config.y *= -this.defaultHeight;
      }
      return this.setScale(
        config.scale * this.baseScale,
        config.x,
        config.y,
        true,
        config.animate,
      );
    }
  },

  getSelected: function (type) {
    var key,
      selected = [];

    for (key in this[type]) {
      if (this[type][key].element.isSelected) {
        selected.push(key);
      }
    }
    return selected;
  },

  /**
   * Return the codes of currently selected regions.
   * @returns {Array}
   */
  getSelectedRegions: function () {
    return this.getSelected("regions");
  },

  /**
   * Return the codes of currently selected markers.
   * @returns {Array}
   */
  getSelectedMarkers: function () {
    return this.getSelected("markers");
  },

  setSelected: function (type, keys) {
    var i;

    if (typeof keys != "object") {
      keys = [keys];
    }

    if (jvm.$.isArray(keys)) {
      for (i = 0; i < keys.length; i++) {
        this[type][keys[i]].element.setSelected(true);
      }
    } else {
      for (i in keys) {
        this[type][i].element.setSelected(!!keys[i]);
      }
    }
  },

  /**
   * Set or remove selected state for the regions.
   * @param {String|Array|Object} keys If <code>String</code> or <code>Array</code> the region(s) with the corresponding code(s) will be selected. If <code>Object</code> was provided its keys are  codes of regions, state of which should be changed. Selected state will be set if value is true, removed otherwise.
   */
  setSelectedRegions: function (keys) {
    this.setSelected("regions", keys);
  },

  /**
   * Set or remove selected state for the markers.
   * @param {String|Array|Object} keys If <code>String</code> or <code>Array</code> the marker(s) with the corresponding code(s) will be selected. If <code>Object</code> was provided its keys are  codes of markers, state of which should be changed. Selected state will be set if value is true, removed otherwise.
   */
  setSelectedMarkers: function (keys) {
    this.setSelected("markers", keys);
  },

  clearSelected: function (type) {
    var select = {},
      selected = this.getSelected(type),
      i;

    for (i = 0; i < selected.length; i++) {
      select[selected[i]] = false;
    }

    this.setSelected(type, select);
  },

  /**
   * Remove the selected state from all the currently selected regions.
   */
  clearSelectedRegions: function () {
    this.clearSelected("regions");
  },

  /**
   * Remove the selected state from all the currently selected markers.
   */
  clearSelectedMarkers: function () {
    this.clearSelected("markers");
  },

  /**
   * Return the instance of Map. Useful when instantiated as a jQuery plug-in.
   * @returns {Map}
   */
  getMapObject: function () {
    return this;
  },

  /**
   * Return the name of the region by region code.
   * @returns {String}
   */
  getRegionName: function (code) {
    return this.mapData.paths[code].name;
  },

  createRegions: function () {
    var key,
      region,
      map = this;

    this.regionLabelsGroup = this.regionLabelsGroup || this.canvas.addGroup();

    for (key in this.mapData.paths) {
      const regionStyle =
        typeof this.params.regionStyle === "function"
          ? {
              ...jvm.Map.defaultParams.regionStyle,
              ...this.params.regionStyle(key),
            }
          : this.params.regionStyle;
      region = new jvm.Region({
        map: this,
        path: this.mapData.paths[key].path,
        code: key,
        style: jvm.$.extend(true, {}, regionStyle),
        labelStyle: jvm.$.extend(true, {}, this.params.regionLabelStyle),
        canvas: this.canvas,
        labelsGroup: this.regionLabelsGroup,
        label:
          this.canvas.mode != "vml"
            ? this.params.labels && this.params.labels.regions
            : null,
      });

      jvm.$(region.shape).bind("selected", function (e, isSelected) {
        map.container.trigger("regionSelected.jvectormap", [
          jvm.$(this.node).attr("data-code"),
          isSelected,
          map.getSelectedRegions(),
        ]);
      });
      this.regions[key] = {
        element: region,
        config: this.mapData.paths[key],
      };
    }
  },

  createMarkers: function (markers) {
    var i,
      marker,
      point,
      markerConfig,
      markersArray,
      map = this;

    this.markersGroup = this.markersGroup || this.canvas.addGroup();
    this.markerLabelsGroup = this.markerLabelsGroup || this.canvas.addGroup();

    if (jvm.$.isArray(markers)) {
      markersArray = markers.slice();
      markers = {};
      for (i = 0; i < markersArray.length; i++) {
        markers[i] = markersArray[i];
      }
    }

    for (i in markers) {
      markerConfig =
        markers[i] instanceof Array ? { latLng: markers[i] } : markers[i];
      point = this.getMarkerPosition(markerConfig);

      if (point !== false) {
        marker = new jvm.Marker({
          map: this,
          style: jvm.$.extend(true, {}, this.params.markerStyle, {
            initial: markerConfig.style || {},
          }),
          labelStyle: jvm.$.extend(true, {}, this.params.markerLabelStyle),
          index: i,
          cx: point.x,
          cy: point.y,
          group: this.markersGroup,
          canvas: this.canvas,
          labelsGroup: this.markerLabelsGroup,
          label:
            this.canvas.mode != "vml"
              ? this.params.labels && this.params.labels.markers
              : null,
        });

        jvm.$(marker.shape).bind("selected", function (e, isSelected) {
          map.container.trigger("markerSelected.jvectormap", [
            jvm.$(this.node).attr("data-index"),
            isSelected,
            map.getSelectedMarkers(),
          ]);
        });
        if (this.markers[i]) {
          this.removeMarkers([i]);
        }
        this.markers[i] = { element: marker, config: markerConfig };
      }
    }
  },

  repositionMarkers: function () {
    var i, point;

    for (i in this.markers) {
      point = this.getMarkerPosition(this.markers[i].config);
      if (point !== false) {
        this.markers[i].element.setStyle({ cx: point.x, cy: point.y });
      }
    }
  },

  repositionLabels: function () {
    var key;

    for (key in this.regions) {
      this.regions[key].element.updateLabelPosition();
    }

    for (key in this.markers) {
      this.markers[key].element.updateLabelPosition();
    }
  },

  getMarkerPosition: function (markerConfig) {
    if (jvm.Map.maps[this.params.map].projection) {
      return this.latLngToPoint.apply(this, markerConfig.latLng || [0, 0]);
    } else {
      return {
        x: markerConfig.coords[0] * this.scale + this.transX * this.scale,
        y: markerConfig.coords[1] * this.scale + this.transY * this.scale,
      };
    }
  },

  /**
   * Add one marker to the map.
   * @param {String} key Marker unique code.
   * @param {Object} marker Marker configuration parameters.
   * @param {Array} seriesData Values to add to the data series.
   */
  addMarker: function (key, marker, seriesData) {
    var markers = {},
      data = [],
      values,
      i,
      seriesData = seriesData || [];

    markers[key] = marker;

    for (i = 0; i < seriesData.length; i++) {
      values = {};
      if (typeof seriesData[i] !== "undefined") {
        values[key] = seriesData[i];
      }
      data.push(values);
    }
    this.addMarkers(markers, data);
  },

  /**
   * Add set of marker to the map.
   * @param {Object|Array} markers Markers to add to the map. In case of array is provided, codes of markers will be set as string representations of array indexes.
   * @param {Array} seriesData Values to add to the data series.
   */
  addMarkers: function (markers, seriesData) {
    var i;

    seriesData = seriesData || [];

    this.createMarkers(markers);
    for (i = 0; i < seriesData.length; i++) {
      this.series.markers[i].setValues(seriesData[i] || {});
    }
  },

  /**
   * Remove some markers from the map.
   * @param {Array} markers Array of marker codes to be removed.
   */
  removeMarkers: function (markers) {
    var i;

    for (i = 0; i < markers.length; i++) {
      this.markers[markers[i]].element.remove();
      delete this.markers[markers[i]];
    }
  },

  /**
   * Remove all markers from the map.
   */
  removeAllMarkers: function () {
    var i,
      markers = [];

    for (i in this.markers) {
      markers.push(i);
    }
    this.removeMarkers(markers);
  },

  /**
   * Converts coordinates expressed as latitude and longitude to the coordinates in pixels on the map.
   * @param {Number} lat Latitide of point in degrees.
   * @param {Number} lng Longitude of point in degrees.
   */
  latLngToPoint: function (lat, lng) {
    var point,
      proj = jvm.Map.maps[this.params.map].projection,
      centralMeridian = proj.centralMeridian,
      inset,
      bbox;

    if (lng < -180 + centralMeridian) {
      lng += 360;
    }

    point = jvm.Proj[proj.type](lat, lng, centralMeridian);

    inset = this.getInsetForPoint(point.x, point.y);
    if (inset) {
      bbox = inset.bbox;

      point.x =
        ((point.x - bbox[0].x) / (bbox[1].x - bbox[0].x)) *
        inset.width *
        this.scale;
      point.y =
        ((point.y - bbox[0].y) / (bbox[1].y - bbox[0].y)) *
        inset.height *
        this.scale;

      return {
        x: point.x + this.transX * this.scale + inset.left * this.scale,
        y: point.y + this.transY * this.scale + inset.top * this.scale,
      };
    } else {
      return false;
    }
  },

  /**
   * Converts cartesian coordinates into coordinates expressed as latitude and longitude.
   * @param {Number} x X-axis of point on map in pixels.
   * @param {Number} y Y-axis of point on map in pixels.
   */
  pointToLatLng: function (x, y) {
    var proj = jvm.Map.maps[this.params.map].projection,
      centralMeridian = proj.centralMeridian,
      insets = jvm.Map.maps[this.params.map].insets,
      i,
      inset,
      bbox,
      nx,
      ny;

    for (i = 0; i < insets.length; i++) {
      inset = insets[i];
      bbox = inset.bbox;

      nx = x - (this.transX * this.scale + inset.left * this.scale);
      ny = y - (this.transY * this.scale + inset.top * this.scale);

      nx =
        (nx / (inset.width * this.scale)) * (bbox[1].x - bbox[0].x) + bbox[0].x;
      ny =
        (ny / (inset.height * this.scale)) * (bbox[1].y - bbox[0].y) +
        bbox[0].y;

      if (
        nx > bbox[0].x &&
        nx < bbox[1].x &&
        ny > bbox[0].y &&
        ny < bbox[1].y
      ) {
        return jvm.Proj[proj.type + "_inv"](nx, -ny, centralMeridian);
      }
    }

    return false;
  },

  getInsetForPoint: function (x, y) {
    var insets = jvm.Map.maps[this.params.map].insets,
      i,
      bbox;

    for (i = 0; i < insets.length; i++) {
      bbox = insets[i].bbox;
      if (x > bbox[0].x && x < bbox[1].x && y > bbox[0].y && y < bbox[1].y) {
        return insets[i];
      }
    }
  },

  createSeries: function () {
    var i, key;

    this.series = {
      markers: [],
      regions: [],
    };

    for (key in this.params.series) {
      for (i = 0; i < this.params.series[key].length; i++) {
        this.series[key][i] = new jvm.DataSeries(
          this.params.series[key][i],
          this[key],
          this,
        );
      }
    }
  },

  /**
   * Gracefully remove the map and and all its accessories, unbind event handlers.
   */
  remove: function () {
    this.tip.remove();
    this.container.remove();
    jvm.$(window).unbind("resize", this.onResize);
    jvm.$("body").unbind("mouseup", this.onContainerMouseUp);
  },
};

jvm.Map.maps = {};
jvm.Map.defaultParams = {
  map: "world_mill_en",
  backgroundColor: "#505050",
  zoomButtons: true,
  zoomOnScroll: true,
  zoomOnScrollSpeed: 3,
  panOnDrag: true,
  zoomMax: 8,
  zoomMin: 1,
  zoomStep: 1.6,
  zoomAnimate: true,
  regionsSelectable: false,
  markersSelectable: false,
  bindTouchEvents: true,
  regionStyle: {
    initial: {
      fill: "white",
      "fill-opacity": 1,
      stroke: "none",
      "stroke-width": 0,
      "stroke-opacity": 1,
    },
    hover: {
      "fill-opacity": 0.8,
      cursor: "pointer",
    },
    selected: {
      fill: "yellow",
    },
    selectedHover: {},
  },
  regionLabelStyle: {
    initial: {
      "font-family": "Verdana",
      "font-size": "12",
      "font-weight": "bold",
      cursor: "default",
      fill: "black",
    },
    hover: {
      cursor: "pointer",
    },
  },
  markerStyle: {
    initial: {
      fill: "grey",
      stroke: "#505050",
      "fill-opacity": 1,
      "stroke-width": 1,
      "stroke-opacity": 1,
      r: 5,
    },
    hover: {
      stroke: "black",
      "stroke-width": 2,
      cursor: "pointer",
    },
    selected: {
      fill: "blue",
    },
    selectedHover: {},
  },
  markerLabelStyle: {
    initial: {
      "font-family": "Verdana",
      "font-size": "12",
      "font-weight": "bold",
      cursor: "default",
      fill: "black",
    },
    hover: {
      cursor: "pointer",
    },
  },
};
jvm.Map.apiEvents = {
  onRegionTipShow: "regionTipShow",
  onRegionOver: "regionOver",
  onRegionOut: "regionOut",
  onRegionClick: "regionClick",
  onRegionSelected: "regionSelected",
  onMarkerTipShow: "markerTipShow",
  onMarkerOver: "markerOver",
  onMarkerOut: "markerOut",
  onMarkerClick: "markerClick",
  onMarkerSelected: "markerSelected",
  onViewportChange: "viewportChange",
};
/**
 * Creates map with drill-down functionality.
 * @constructor
 * @param {Object} params Parameters to initialize map with.
 * @param {Number} params.maxLevel Maximum number of levels user can go through
 * @param {Object} params.main Config of the main map. See <a href="./jvm-map/">jvm.Map</a> for more information.
 * @param {Function} params.mapNameByCode Function to generate map name by region code. Default value is:
<pre>
function(code, multiMap) {
  return code.toLowerCase()+'_'+
         multiMap.defaultProjection+'_en';
}
</pre>
 * @param {Function} params.mapUrlByCode Function to generate map url by region code. Default value is:
<pre>
function(code, multiMap){
  return 'jquery-jvectormap-data-'+
         code.toLowerCase()+'-'+
         multiMap.defaultProjection+'-en.js';
}
</pre>
 */
jvm.MultiMap = function (params) {
  var that = this;

  this.maps = {};
  this.params = jvm.$.extend(true, {}, jvm.MultiMap.defaultParams, params);
  this.params.maxLevel = this.params.maxLevel || Number.MAX_VALUE;
  this.params.main = this.params.main || {};
  this.params.main.multiMapLevel = 0;
  this.history = [this.addMap(this.params.main.map, this.params.main)];
  this.defaultProjection = this.history[0].mapData.projection.type;
  this.mapsLoaded = {};
  this.mapsLoadedData = {};

  this.params.container.css({ position: "relative" });
  this.backButton = jvm
    .$("<div/>")
    .addClass("jvectormap-goback")
    .text("Back")
    .appendTo(this.params.container);
  this.backButton.hide();
  this.backButton.click(function () {
    that.goBack();
  });

  this.spinner = jvm
    .$("<div/>")
    .addClass("jvectormap-spinner")
    .appendTo(this.params.container);
  this.spinner.hide();
};

jvm.MultiMap.prototype = {
  addMap: function (name, config) {
    var cnt = jvm.$("<div/>").css({
      width: "100%",
      height: "100%",
    });

    this.params.container.append(cnt);

    this.maps[name] = new jvm.Map(jvm.$.extend(config, { container: cnt }));
    if (this.params.maxLevel > config.multiMapLevel) {
      this.maps[name].container.on(
        "regionClick.jvectormap",
        { scope: this },
        function (e, code) {
          var multimap = e.data.scope,
            mapName = multimap.params.mapNameByCode(code, multimap);

          if (
            !multimap.drillDownPromise ||
            multimap.drillDownPromise.state() !== "pending"
          ) {
            multimap.drillDown(mapName, code);
          }
        },
      );
    }

    return this.maps[name];
  },

  downloadMap: function (code) {
    var that = this,
      deferred = jvm.$.Deferred();
    const { getDrillDownMap } = this.params;

    const handleMapData = function (data) {
      that.mapsLoaded[code] = true;
      that.mapsLoadedData[code] = data;
      deferred.resolve();
    };

    if (!this.mapsLoaded[code]) {
      if (getDrillDownMap && typeof getDrillDownMap === "function") {
        const result = getDrillDownMap(code);
        if (result && typeof result.then === "function") {
          result
            .then((data) => {
              handleMapData(data);
            })
            .catch(() => {
              deferred.reject();
            });
        } else {
          handleMapData(result);
        }
        return deferred;
      }
      jvm.$.get(this.params.mapUrlByCode(code, this)).then(
        function (data) {
          handleMapData(data);
        },
        function () {
          deferred.reject();
        },
      );
    } else {
      deferred.resolve();
    }
    return deferred;
  },

  drillDown: function (name, code) {
    var currentMap = this.history[this.history.length - 1],
      that = this,
      focusPromise = currentMap.setFocus({ region: code, animate: true }),
      downloadPromise = this.downloadMap(code);

    focusPromise.then(function () {
      if (downloadPromise.state() === "pending") {
        that.spinner.show();
      }
    });
    downloadPromise.always(function () {
      that.spinner.hide();
    });
    this.drillDownPromise = jvm.$.when(downloadPromise, focusPromise);
    this.drillDownPromise.then(function () {
      const { content } = that.mapsLoadedData[code];
      currentMap.params.container.hide();
      if (!that.maps[name]) {
        jvm.$.fn.vectorMap("addMap", name, content);
        that.addMap(name, {
          map: name,
          multiMapLevel: currentMap.params.multiMapLevel + 1,
        });
      } else {
        that.maps[name].params.container.show();
      }
      that.history.push(that.maps[name]);
      that.backButton.show();
    });
  },

  goBack: function () {
    var currentMap = this.history.pop(),
      prevMap = this.history[this.history.length - 1],
      that = this;

    currentMap
      .setFocus({ scale: 1, x: 0.5, y: 0.5, animate: true })
      .then(function () {
        currentMap.params.container.hide();
        prevMap.params.container.show();
        prevMap.updateSize();
        if (that.history.length === 1) {
          that.backButton.hide();
        }
        prevMap.setFocus({ scale: 1, x: 0.5, y: 0.5, animate: true });
      });
  },
};

jvm.MultiMap.defaultParams = {
  mapNameByCode: function (code, multiMap) {
    return code.toLowerCase() + "_" + multiMap.defaultProjection + "_en";
  },
  mapUrlByCode: function (code, multiMap) {
    return (
      "jquery-jvectormap-data-" +
      code.toLowerCase() +
      "-" +
      multiMap.defaultProjection +
      "-en.js"
    );
  },
};


//# sourceURL=webpack://@react-jvectormap/core/../jvectormap/jquery.jvectormap.min.js?`);
            },
            "data:image/gif;base64,R0lGODlhIAAgAPMAAP///wAAAMbGxoSEhLa2tpqamjY2NlZWVtjY2OTk5Ly8vB4eHgQEBAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHRLYKhKP1oZmADdEAAAh+QQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY/CZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB+A4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6+Ho7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq+B6QDtuetcaBPnW6+O7wDHpIiK9SaVK5GgV543tzjgGcghAgAh+QQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK++G+w48edZPK+M6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE+G+cD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm+FNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk+aV+oJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0/VNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc+XiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30/iI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE/jiuL04RGEBgwWhShRgQExHBAAh+QQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR+ipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY+Yip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd+MFCN6HAAIKgNggY0KtEBAAh+QQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1+vsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d+jYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg+ygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0+bm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h+Kr0SJ8MFihpNbx+4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX+BP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA==":
              (module) => {
                eval(`module.exports = "data:image/gif;base64,R0lGODlhIAAgAPMAAP///wAAAMbGxoSEhLa2tpqamjY2NlZWVtjY2OTk5Ly8vB4eHgQEBAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHRLYKhKP1oZmADdEAAAh+QQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY/CZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB+A4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6+Ho7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq+B6QDtuetcaBPnW6+O7wDHpIiK9SaVK5GgV543tzjgGcghAgAh+QQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK++G+w48edZPK+M6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE+G+cD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm+FNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk+aV+oJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0/VNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc+XiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30/iI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE/jiuL04RGEBgwWhShRgQExHBAAh+QQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR+ipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY+Yip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd+MFCN6HAAIKgNggY0KtEBAAh+QQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1+vsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d+jYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg+ygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0+bm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h+Kr0SJ8MFihpNbx+4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX+BP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA==";

//# sourceURL=webpack://@react-jvectormap/core/data:image/gif;base64,R0lGODlhIAAgAPMAAP///wAAAMbGxoSEhLa2tpqamjY2NlZWVtjY2OTk5Ly8vB4eHgQEBAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHRLYKhKP1oZmADdEAAAh+QQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY/CZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB+A4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6+Ho7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq+B6QDtuetcaBPnW6+O7wDHpIiK9SaVK5GgV543tzjgGcghAgAh+QQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK++G+w48edZPK+M6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE+G+cD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm+FNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk+aV+oJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0/VNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc+XiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30/iI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE/jiuL04RGEBgwWhShRgQExHBAAh+QQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR+ipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY+Yip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd+MFCN6HAAIKgNggY0KtEBAAh+QQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1+vsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d+jYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg+ygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0+bm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h+Kr0SJ8MFihpNbx+4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX+BP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA==?`);
              },
            jquery: (e) => {
              e.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;
            },
            react: (e) => {
              e.exports = __WEBPACK_EXTERNAL_MODULE_react__;
            },
          },
          __webpack_module_cache__ = {};
        function __webpack_require__(e) {
          var a = __webpack_module_cache__[e];
          if (a !== void 0) return a.exports;
          var i = (__webpack_module_cache__[e] = { id: e, exports: {} });
          return (
            __webpack_modules__[e](i, i.exports, __webpack_require__), i.exports
          );
        }
        (__webpack_require__.m = __webpack_modules__),
          (__webpack_require__.n = (e) => {
            var a = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(a, { a }), a;
          }),
          (__webpack_require__.d = (e, a) => {
            for (var i in a)
              __webpack_require__.o(a, i) &&
                !__webpack_require__.o(e, i) &&
                Object.defineProperty(e, i, { enumerable: !0, get: a[i] });
          }),
          (__webpack_require__.o = (e, a) =>
            Object.prototype.hasOwnProperty.call(e, a)),
          (__webpack_require__.r = (e) => {
            typeof Symbol < "u" &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          }),
          (__webpack_require__.b = document.baseURI || self.location.href);
        var __webpack_exports__ = __webpack_require__("./src/index.ts");
        return __webpack_exports__;
      })();
    }
  );
})(dist);
var distExports = dist.exports;
const name = "world_mill",
  content = {
    insets: [
      {
        width: 900,
        top: 0,
        height: 440.7063107441331,
        bbox: [
          { y: -12671671123330014e-9, x: -20004297151525836e-9 },
          { y: 6930392025135122e-9, x: 20026572394749384e-9 },
        ],
        left: 0,
      },
    ],
    paths: {
      BD: {
        path: "M651.84,230.21l-0.6,-2.0l-1.36,-1.71l-2.31,-0.11l-0.41,0.48l0.2,0.94l-0.53,0.99l-0.72,-0.36l-0.68,0.35l-1.2,-0.36l-0.37,-2.0l-0.81,-1.86l0.39,-1.46l-0.22,-0.47l-1.14,-0.53l0.29,-0.5l1.48,-0.94l0.03,-0.65l-1.55,-1.22l0.55,-1.14l1.61,0.94l1.04,0.15l0.18,1.54l0.34,0.35l5.64,0.63l-0.84,1.64l-1.22,0.34l-0.77,1.51l0.07,0.47l1.37,1.37l0.67,-0.19l0.42,-1.39l1.21,3.84l-0.03,1.21l-0.33,-0.15l-0.4,0.28Z",
        name: "Bangladesh",
      },
      BE: {
        path: "M429.29,144.05l1.91,0.24l2.1,-0.63l2.63,1.99l-0.21,1.66l-0.69,0.4l-0.18,1.2l-1.66,-1.13l-1.39,0.15l-2.73,-2.7l-1.17,-0.18l-0.16,-0.52l1.54,-0.5Z",
        name: "Belgium",
      },
      BF: {
        path: "M421.42,247.64l-0.11,0.95l0.34,1.16l1.4,1.71l0.07,1.1l0.32,0.37l2.55,0.51l-0.04,1.28l-0.38,0.53l-1.07,0.21l-0.72,1.18l-0.63,0.21l-3.22,-0.25l-0.94,0.39l-5.4,-0.05l-0.39,0.38l0.16,2.73l-1.23,-0.43l-1.17,0.1l-0.89,0.57l-2.27,-1.72l-0.13,-1.11l0.61,-0.96l0.02,-0.93l1.87,-1.98l0.44,-1.81l0.43,-0.39l1.28,0.26l1.05,-0.52l0.47,-0.73l1.84,-1.09l0.55,-0.83l2.2,-1.0l1.15,-0.3l0.72,0.45l1.13,-0.01Z",
        name: "Burkina Faso",
      },
      BG: {
        path: "M491.65,168.18l-0.86,0.88l-0.91,2.17l0.48,1.34l-1.6,-0.24l-2.55,0.95l-0.28,1.51l-1.8,0.22l-2.0,-1.0l-1.92,0.79l-1.42,-0.07l-0.15,-1.63l-1.05,-0.97l0.0,-0.8l1.2,-1.57l0.01,-0.56l-1.14,-1.23l-0.05,-0.94l0.88,0.97l0.88,-0.2l1.91,0.47l3.68,0.16l1.42,-0.81l2.72,-0.66l2.55,1.24Z",
        name: "Bulgaria",
      },
      BA: {
        path: "M463.49,163.65l2.1,0.5l1.72,-0.03l1.52,0.68l-0.36,0.78l0.08,0.45l1.04,1.02l-0.25,0.98l-1.81,1.15l-0.38,1.38l-1.67,-0.87l-0.89,-1.2l-2.11,-1.83l-1.63,-2.22l0.23,-0.57l0.48,0.38l0.55,-0.06l0.43,-0.51l0.94,-0.06Z",
        name: "Bosnia and Herz.",
      },
      BN: {
        path: "M707.48,273.58l0.68,-0.65l1.41,-0.91l-0.15,1.63l-0.81,-0.05l-0.61,0.58l-0.53,-0.6Z",
        name: "Brunei",
      },
      BO: {
        path: "M263.83,340.69l-3.09,-0.23l-0.38,0.23l-0.7,1.52l-1.31,-1.53l-3.28,-0.64l-2.37,2.4l-1.31,0.26l-0.88,-3.26l-1.3,-2.86l0.74,-2.37l-0.13,-0.43l-1.2,-1.01l-0.37,-1.89l-1.08,-1.55l1.45,-2.56l-0.96,-2.33l0.47,-1.06l-0.34,-0.73l0.91,-1.32l0.16,-3.84l0.5,-1.18l-1.81,-3.41l2.46,0.07l0.8,-0.85l3.4,-1.91l2.66,-0.35l-0.19,1.38l0.3,1.07l-0.05,1.97l2.72,2.27l2.88,0.49l0.89,0.86l1.79,0.58l0.98,0.7l1.71,0.05l1.17,0.61l0.6,2.7l-0.7,0.54l0.96,2.99l0.37,0.28l4.3,0.1l-0.25,1.2l0.27,1.02l1.43,0.9l0.5,1.35l-0.41,1.86l-0.65,1.08l0.12,1.35l-2.69,-1.65l-2.4,-0.03l-4.36,0.76l-1.49,2.5l-0.11,1.52l-0.75,2.37Z",
        name: "Bolivia",
      },
      JP: {
        path: "M781.12,166.87l1.81,0.68l1.62,-0.97l0.39,2.42l-3.35,0.75l-2.23,2.88l-3.63,-1.9l-0.56,0.2l-1.26,3.05l-2.16,0.03l-0.29,-2.51l1.08,-2.03l2.45,-0.16l0.37,-0.33l1.25,-5.94l2.47,2.71l2.03,1.12ZM773.56,187.34l-0.91,2.22l0.37,1.52l-1.14,1.75l-3.02,1.26l-4.58,0.27l-3.34,3.01l-1.25,-0.8l-0.09,-1.9l-0.46,-0.38l-4.35,0.62l-3.0,1.32l-2.85,0.05l-0.37,0.27l0.13,0.44l2.32,1.89l-1.54,4.34l-1.26,0.9l-0.79,-0.7l0.56,-2.27l-0.21,-0.45l-1.47,-0.75l-0.74,-1.4l2.12,-0.84l1.26,-1.7l2.45,-1.42l1.83,-1.91l4.78,-0.81l2.6,0.57l0.44,-0.21l2.39,-4.66l1.29,1.06l0.5,0.01l5.1,-4.02l1.69,-3.73l-0.38,-3.4l0.9,-1.61l2.14,-0.44l1.23,3.72l-0.07,2.18l-2.23,2.84l-0.04,3.16ZM757.78,196.26l0.19,0.56l-1.01,1.21l-1.16,-0.68l-1.28,0.65l-0.69,1.45l-1.02,-0.5l0.01,-0.93l1.14,-1.38l1.57,0.14l0.85,-0.98l1.4,0.46Z",
        name: "Japan",
      },
      BI: {
        path: "M495.45,295.49l-1.08,-2.99l1.14,-0.11l0.64,-1.19l0.76,0.09l0.65,1.83l-2.1,2.36Z",
        name: "Burundi",
      },
      BJ: {
        path: "M429.57,255.75l-0.05,0.8l0.5,1.34l-0.42,0.86l0.17,0.79l-1.81,2.12l-0.57,1.76l-0.08,5.42l-1.41,0.2l-0.48,-1.36l0.11,-5.71l-0.52,-0.7l-0.2,-1.35l-1.48,-1.48l0.21,-0.9l0.89,-0.43l0.42,-0.92l1.27,-0.36l1.22,-1.34l0.61,-0.0l1.62,1.24Z",
        name: "Benin",
      },
      BT: {
        path: "M650.32,213.86l0.84,0.71l-0.12,1.1l-3.76,-0.11l-1.57,0.4l-1.93,-0.87l1.48,-1.96l1.13,-0.57l1.63,0.57l1.33,0.08l0.99,0.65Z",
        name: "Bhutan",
      },
      JM: {
        path: "M228.38,239.28l-0.8,0.4l-2.26,-1.06l0.84,-0.23l2.14,0.3l1.17,0.56l-1.08,0.03Z",
        name: "Jamaica",
      },
      BW: {
        path: "M483.92,330.07l2.27,4.01l2.83,2.86l0.96,0.31l0.78,2.43l2.13,0.61l1.02,0.76l-3.0,1.64l-2.32,2.02l-1.54,2.69l-1.52,0.45l-0.64,1.94l-1.34,0.52l-1.85,-0.12l-1.21,-0.74l-1.35,-0.3l-1.22,0.62l-0.75,1.37l-2.31,1.9l-1.4,0.21l-0.35,-0.59l0.16,-1.75l-1.48,-2.54l-0.62,-0.43l-0.0,-7.1l2.08,-0.08l0.39,-0.4l0.07,-8.9l5.19,-0.93l0.8,0.89l0.51,0.07l1.5,-0.95l2.21,-0.49Z",
        name: "Botswana",
      },
      BR: {
        path: "M259.98,275.05l3.24,0.7l0.65,-0.53l4.55,-1.32l1.08,-1.06l-0.02,-0.63l0.55,-0.05l0.28,0.28l-0.26,0.87l0.22,0.48l0.73,0.32l0.4,0.81l-0.62,0.86l-0.4,2.13l0.82,2.56l1.69,1.43l1.43,0.2l3.17,-1.68l3.18,0.3l0.65,-0.75l-0.27,-0.92l1.9,-0.09l2.39,0.99l1.06,-0.61l0.84,0.78l1.2,-0.18l1.18,-1.06l0.84,-1.94l1.36,-2.11l0.37,-0.05l1.89,5.45l1.33,0.59l0.05,1.28l-1.77,1.94l0.02,0.56l1.02,0.87l4.07,0.36l0.08,2.16l0.66,0.29l1.74,-1.5l6.97,2.32l1.02,1.22l-0.35,1.18l0.49,0.5l2.81,-0.74l4.77,1.3l3.75,-0.08l3.57,2.0l3.29,2.86l1.93,0.72l2.12,0.12l0.71,0.62l1.21,4.51l-0.95,3.98l-4.72,5.06l-1.64,2.92l-1.72,2.05l-0.8,0.3l-0.72,2.03l0.18,4.75l-0.94,5.53l-0.81,1.13l-0.43,3.36l-2.55,3.5l-0.4,2.51l-1.86,1.04l-0.67,1.53l-2.54,0.01l-3.94,1.01l-1.83,1.2l-2.87,0.82l-3.03,2.19l-2.2,2.83l-0.36,2.0l0.4,1.58l-0.44,2.6l-0.51,1.2l-1.77,1.54l-2.75,4.78l-3.83,3.42l-1.24,2.74l-1.18,1.15l-0.36,-0.83l0.95,-1.14l0.01,-0.5l-1.52,-1.97l-4.56,-3.32l-1.03,-0.0l-2.38,-2.02l-0.81,-0.0l5.34,-5.45l3.77,-2.58l0.22,-2.46l-1.35,-1.81l-0.91,0.07l0.58,-2.33l0.01,-1.54l-1.11,-0.83l-1.75,0.3l-0.44,-3.11l-0.52,-0.95l-1.88,-0.88l-1.24,0.47l-2.17,-0.41l0.15,-3.21l-0.62,-1.34l0.66,-0.73l-0.22,-1.34l0.66,-1.13l0.44,-2.04l-0.61,-1.83l-1.4,-0.86l-0.2,-0.75l0.34,-1.39l-0.38,-0.5l-4.52,-0.1l-0.72,-2.22l0.59,-0.42l-0.03,-1.1l-0.5,-0.87l-0.32,-1.7l-1.45,-0.76l-1.63,-0.02l-1.05,-0.72l-1.6,-0.48l-1.13,-0.99l-2.69,-0.4l-2.47,-2.06l0.13,-4.35l-0.45,-0.45l-3.46,0.5l-3.44,1.94l-0.6,0.74l-2.9,-0.17l-1.47,0.42l-0.72,-0.18l0.15,-3.52l-0.63,-0.34l-1.94,1.41l-1.87,-0.06l-0.83,-1.18l-1.37,-0.26l0.21,-1.01l-1.35,-1.49l-0.88,-1.91l0.56,-0.6l-0.0,-0.81l1.29,-0.62l0.22,-0.43l-0.22,-1.19l0.61,-0.91l0.15,-0.99l2.65,-1.58l1.99,-0.47l0.42,-0.36l2.06,0.11l0.42,-0.33l1.19,-8.0l-0.41,-1.56l-1.1,-1.0l0.01,-1.33l1.91,-0.42l0.08,-0.96l-0.33,-0.43l-1.14,-0.2l-0.02,-0.83l4.47,0.05l0.82,-0.67l0.82,1.81l0.8,0.07l1.15,1.1l2.26,-0.05l0.71,-0.83l2.78,-0.96l0.48,-1.13l1.6,-0.64l0.24,-0.47l-0.48,-0.82l-1.83,-0.19l-0.36,-3.22Z",
        name: "Brazil",
      },
      BS: {
        path: "M226.4,223.87l-0.48,-1.15l-0.84,-0.75l0.36,-1.11l0.95,1.95l0.01,1.06ZM225.56,216.43l-1.87,0.29l-0.04,-0.22l0.74,-0.14l1.17,0.06Z",
        name: "Bahamas",
      },
      BY: {
        path: "M493.84,128.32l0.29,0.7l0.49,0.23l1.19,-0.38l2.09,0.72l0.19,1.26l-0.45,1.24l1.57,2.26l0.89,0.59l0.17,0.81l1.58,0.56l0.4,0.5l-0.53,0.41l-1.87,-0.11l-0.73,0.38l-0.13,0.52l1.04,2.74l-1.91,0.26l-0.89,0.99l-0.11,1.18l-2.73,-0.04l-0.53,-0.62l-0.52,-0.08l-0.75,0.46l-0.91,-0.42l-1.92,-0.07l-2.75,-0.79l-2.6,-0.28l-2.0,0.07l-1.5,0.92l-0.67,0.07l-0.08,-1.22l-0.59,-1.19l1.36,-0.88l0.01,-1.35l-0.7,-1.41l-0.07,-1.0l2.16,-0.02l2.72,-1.3l0.75,-2.04l1.91,-1.04l0.2,-0.41l-0.19,-1.25l3.8,-1.78l2.3,0.77Z",
        name: "Belarus",
      },
      BZ: {
        path: "M198.03,244.38l0.1,-4.49l0.69,-0.06l0.74,-1.3l0.34,0.28l-0.4,1.3l0.17,0.58l-0.34,2.25l-1.3,1.42Z",
        name: "Belize",
      },
      RU: {
        path: "M491.55,115.25l2.55,-1.85l-0.01,-0.65l-2.2,-1.5l7.32,-6.76l1.03,-2.11l-0.13,-0.49l-3.46,-2.52l0.86,-2.7l-2.11,-2.81l1.56,-3.67l-2.77,-4.52l2.15,-2.99l-0.08,-0.55l-3.65,-2.73l0.3,-2.54l1.81,-0.37l4.26,-1.77l2.42,-1.45l4.06,2.61l6.79,1.04l9.34,4.85l1.78,1.88l0.14,2.46l-2.55,2.02l-3.9,1.06l-11.07,-3.14l-2.06,0.53l-0.13,0.7l3.94,2.94l0.31,5.86l0.26,0.36l5.14,2.24l0.58,-0.29l0.32,-1.94l-1.35,-1.78l1.13,-1.09l6.13,2.42l2.11,-0.98l0.18,-0.56l-1.51,-2.67l5.41,-3.76l2.07,0.22l2.26,1.41l0.57,-0.16l1.46,-2.87l-0.05,-0.44l-1.92,-2.32l1.12,-2.32l-1.32,-2.27l5.87,1.16l1.04,1.75l-2.59,0.43l-0.33,0.4l0.02,2.36l2.46,1.83l3.87,-0.91l0.86,-2.8l13.69,-5.65l0.99,0.11l-1.92,2.06l0.23,0.67l3.11,0.45l2.0,-1.48l4.56,-0.12l3.64,-1.73l2.65,2.44l0.56,-0.01l2.85,-2.88l-0.01,-0.57l-2.35,-2.29l0.9,-1.01l7.14,1.3l3.41,1.36l9.05,4.97l0.51,-0.11l1.67,-2.27l-0.05,-0.53l-2.43,-2.21l-0.06,-0.78l-0.34,-0.36l-2.52,-0.36l0.64,-1.93l-1.32,-3.46l-0.06,-1.21l4.48,-4.06l1.69,-4.29l1.6,-0.81l6.23,1.18l0.44,2.21l-2.29,3.64l0.06,0.5l1.47,1.39l0.76,3.0l-0.56,6.03l2.69,2.82l-0.96,2.57l-4.86,5.95l0.23,0.64l2.86,0.61l0.42,-0.17l0.93,-1.4l2.64,-1.03l0.87,-2.24l2.09,-1.96l0.07,-0.5l-1.36,-2.28l1.09,-2.69l-0.32,-0.55l-2.47,-0.33l-0.5,-2.06l1.94,-4.38l-0.06,-0.42l-2.96,-3.4l4.12,-2.88l0.16,-0.4l-0.51,-2.93l0.54,-0.05l1.13,2.25l-0.96,4.35l0.27,0.47l2.68,0.84l0.5,-0.51l-1.02,-2.99l3.79,-1.66l5.01,-0.24l4.53,2.61l0.48,-0.06l0.07,-0.48l-2.18,-3.82l-0.23,-4.67l3.98,-0.9l5.97,0.21l5.49,-0.64l0.27,-0.65l-1.83,-2.31l2.56,-2.9l2.87,-0.17l4.8,-2.47l6.54,-0.67l1.03,-1.42l6.25,-0.45l2.32,1.11l5.53,-2.7l4.5,0.08l0.39,-0.28l0.66,-2.15l2.26,-2.12l5.69,-2.11l3.21,1.29l-2.46,0.94l-0.25,0.42l0.34,0.35l5.41,0.77l0.61,2.33l0.58,0.25l2.2,-1.22l7.13,0.07l5.51,2.47l1.79,1.72l-0.53,2.24l-9.16,4.15l-1.97,1.52l0.16,0.71l6.77,1.91l2.16,-0.78l1.13,2.74l0.67,0.11l1.01,-1.15l3.81,-0.73l7.7,0.77l0.54,1.99l0.36,0.29l10.47,0.71l0.43,-0.38l0.13,-3.23l4.87,0.78l3.95,-0.02l3.83,2.4l1.03,2.71l-1.35,1.79l0.02,0.5l3.15,3.64l4.07,1.96l0.53,-0.18l2.23,-4.47l3.95,1.93l4.16,-1.21l4.73,1.39l2.05,-1.26l3.94,0.62l0.43,-0.55l-1.68,-4.02l2.89,-1.8l22.31,3.03l2.16,2.75l6.55,3.51l10.29,-0.81l4.82,0.73l1.85,1.66l-0.29,3.08l0.25,0.41l3.08,1.26l3.56,-0.88l4.35,-0.11l4.8,0.87l4.57,-0.47l4.23,3.79l0.43,0.07l3.1,-1.4l0.16,-0.6l-1.88,-2.62l0.85,-1.52l7.71,1.21l5.22,-0.26l7.09,2.09l9.59,5.22l6.35,4.11l-0.2,2.38l1.88,1.41l0.6,-0.42l-0.48,-2.53l6.15,0.57l4.4,3.51l-1.97,1.43l-4.0,0.41l-0.36,0.39l-0.06,3.79l-0.74,0.62l-2.07,-0.11l-1.91,-1.39l-3.14,-1.11l-0.78,-1.85l-2.72,-0.68l-2.63,0.49l-1.04,-1.1l0.46,-1.31l-0.5,-0.51l-3.0,0.98l-0.22,0.58l0.99,1.7l-1.21,1.48l-3.04,1.68l-3.12,-0.28l-0.4,0.23l0.09,0.46l2.2,2.09l1.46,3.2l1.15,1.1l0.24,1.33l-0.42,0.67l-4.63,-0.77l-6.96,2.9l-2.19,0.44l-7.6,5.06l-0.84,1.45l-3.61,-2.37l-6.24,2.82l-0.94,-1.15l-0.53,-0.08l-2.28,1.52l-3.2,-0.49l-0.44,0.27l-0.78,2.37l-3.05,3.78l0.09,1.47l0.29,0.36l2.54,0.72l-0.29,4.53l-1.97,0.11l-0.35,0.26l-1.07,2.94l0.8,1.45l-3.91,1.58l-1.05,3.95l-3.48,0.77l-0.3,0.3l-0.72,3.29l-3.09,2.65l-0.7,-1.74l-2.44,-12.44l1.16,-4.71l2.04,-2.06l0.22,-1.64l3.8,-0.86l4.46,-4.61l4.28,-3.81l4.48,-3.01l2.17,-5.63l-0.42,-0.54l-3.04,0.33l-1.77,3.31l-5.86,3.86l-1.86,-4.25l-0.45,-0.23l-6.46,1.3l-6.47,6.44l-0.01,0.55l1.58,1.74l-8.24,1.17l0.15,-2.2l-0.34,-0.42l-3.89,-0.56l-3.25,1.81l-7.62,-0.62l-8.45,1.19l-17.71,15.41l0.22,0.7l3.74,0.41l1.36,2.17l2.43,0.76l1.88,-1.68l2.4,0.2l3.4,3.54l0.08,2.6l-1.95,3.42l-0.21,3.9l-1.1,5.06l-3.71,4.54l-0.87,2.21l-8.29,8.89l-3.19,1.7l-1.32,0.03l-1.45,-1.36l-0.49,-0.04l-2.27,1.5l0.41,-3.65l-0.59,-2.47l1.75,-0.89l2.91,0.53l0.42,-0.2l1.68,-3.03l0.87,-3.46l0.97,-1.18l1.32,-2.88l-0.45,-0.56l-4.14,0.95l-2.19,1.25l-3.41,-0.0l-1.06,-2.93l-2.97,-2.3l-4.28,-1.06l-1.75,-5.07l-2.66,-5.01l-2.29,-1.29l-3.75,-1.01l-3.44,0.08l-3.18,0.62l-2.24,1.77l0.05,0.66l1.18,0.69l0.02,1.43l-1.33,1.05l-2.26,3.51l-0.04,1.43l-3.16,1.84l-2.82,-1.16l-3.01,0.23l-1.35,-1.07l-1.5,-0.35l-3.9,2.31l-3.22,0.52l-2.27,0.79l-3.05,-0.51l-2.21,0.03l-1.48,-1.6l-2.6,-1.63l-2.63,-0.43l-5.46,1.01l-3.23,-1.25l-0.72,-2.57l-5.2,-1.24l-2.75,-1.36l-0.5,0.12l-2.59,3.45l0.84,2.1l-2.06,1.93l-3.41,-0.77l-2.42,-0.12l-1.83,-1.54l-2.53,-0.05l-2.42,-0.98l-3.86,1.57l-4.72,2.78l-3.3,0.75l-1.55,-1.92l-3.0,0.41l-1.11,-1.33l-1.62,-0.59l-1.31,-1.94l-1.38,-0.6l-3.7,0.79l-3.31,-1.83l-0.51,0.11l-0.99,1.29l-5.29,-8.05l-2.96,-2.48l0.65,-0.77l0.01,-0.51l-0.5,-0.11l-6.2,3.21l-1.84,0.15l0.15,-1.39l-0.26,-0.42l-3.22,-1.17l-2.46,0.7l-0.69,-3.16l-0.32,-0.31l-4.5,-0.75l-2.47,1.47l-6.19,1.27l-1.29,0.86l-9.51,1.3l-1.15,1.17l-0.03,0.53l1.47,1.9l-1.89,0.69l-0.22,0.56l0.31,0.6l-2.11,1.44l0.03,0.68l3.75,2.12l-0.39,0.98l-3.23,-0.13l-0.86,0.86l-3.09,-1.59l-3.97,0.07l-2.66,1.35l-8.32,-3.56l-4.07,0.06l-5.39,3.68l-0.39,2.0l-2.03,-1.5l-0.59,0.13l-2.0,3.59l0.57,0.93l-1.28,2.16l0.06,0.48l2.13,2.17l1.95,0.04l1.37,1.82l-0.23,1.46l0.25,0.43l0.83,0.33l-0.8,1.31l-2.49,0.62l-2.49,3.2l0.0,0.49l2.17,2.78l-0.15,2.18l2.5,3.24l-1.58,1.59l-0.7,-0.13l-1.63,-1.72l-2.29,-0.84l-0.94,-1.31l-2.34,-0.63l-1.48,0.4l-0.43,-0.47l-3.51,-1.48l-5.76,-1.01l-0.45,0.19l-2.89,-2.34l-2.9,-1.2l-1.53,-1.29l1.29,-0.43l2.08,-2.61l-0.05,-0.55l-0.89,-0.79l3.05,-1.06l0.27,-0.42l-0.07,-0.69l-0.49,-0.35l-1.73,0.39l0.04,-0.68l1.04,-0.72l2.66,-0.48l0.4,-1.32l-0.5,-1.6l0.92,-1.54l0.03,-1.17l-0.29,-0.37l-3.69,-1.06l-1.41,0.02l-1.42,-1.41l-2.19,0.38l-2.77,-1.01l-0.03,-0.59l-0.89,-1.43l-2.0,-0.32l-0.11,-0.54l0.49,-0.53l0.01,-0.53l-1.6,-1.9l-3.58,0.02l-0.88,0.73l-0.46,-0.07l-1.0,-2.79l2.22,-0.02l0.97,-0.74l0.07,-0.57l-0.9,-1.04l-1.35,-0.48l-0.11,-0.7l-0.95,-0.58l-1.38,-1.99l0.46,-0.98l-0.51,-1.96l-2.45,-0.84l-1.21,0.3l-0.46,-0.76l-2.46,-0.83l-0.72,-1.87l-0.21,-1.69l-0.99,-0.85l0.85,-1.17l-0.7,-3.21l1.66,-1.97l-0.16,-0.79ZM749.2,170.72l-0.6,0.4l-0.13,0.16l-0.01,-0.51l0.74,-0.05ZM871.88,65.81l2.17,-0.13l3.19,1.16l-2.39,1.09l-5.63,0.48l-0.26,-0.84l2.92,-1.76ZM797.39,48.49l-2.0,1.36l-3.8,-0.42l-4.25,-1.8l0.35,-0.97l9.69,1.83ZM783.67,46.12l-1.63,3.09l-8.98,-0.13l-4.09,1.14l-4.54,-2.97l1.16,-3.01l3.05,-0.89l6.5,0.22l8.54,2.56ZM778.2,134.98l-0.56,-0.9l0.27,-0.12l0.29,1.01ZM778.34,135.48l0.94,3.53l-0.05,3.38l1.05,3.39l2.18,5.0l-2.89,-0.83l-0.49,0.26l-1.54,4.65l2.42,3.5l-0.04,1.13l-1.24,-1.24l-0.61,0.06l-1.09,1.61l-0.28,-1.61l0.27,-3.1l-0.28,-3.4l0.58,-2.47l0.11,-4.39l-1.46,-3.36l0.21,-4.32l2.15,-1.46l0.07,-0.34ZM771.95,56.61l1.76,-1.42l2.89,-0.42l3.28,1.71l0.14,0.6l-3.27,0.03l-4.81,-0.5ZM683.76,31.09l-13.01,1.93l4.03,-6.35l1.82,-0.56l1.73,0.34l5.99,2.98l-0.56,1.66ZM670.85,27.93l-5.08,0.64l-6.86,-1.57l-3.99,-2.05l-2.1,-4.16l-2.6,-0.87l5.72,-3.5l5.2,-1.28l4.69,2.85l5.59,5.4l-0.56,4.53ZM564.15,68.94l-0.64,0.17l-7.85,-0.57l-0.86,-2.04l-4.28,-1.17l-0.28,-1.94l2.27,-0.89l0.25,-0.39l-0.08,-2.38l4.81,-3.97l-0.15,-0.7l-1.47,-0.38l5.3,-3.81l0.15,-0.44l-0.58,-1.94l5.28,-2.51l8.21,-3.27l8.28,-0.96l4.35,-1.94l4.6,-0.64l1.36,1.61l-1.34,1.28l-16.43,4.94l-7.97,4.88l-7.74,9.63l0.66,4.14l4.16,3.27ZM548.81,18.48l-5.5,1.18l-0.58,1.02l-2.59,0.84l-2.13,-1.07l1.12,-1.42l-0.3,-0.65l-2.33,-0.07l1.68,-0.36l3.47,-0.06l0.42,1.29l0.66,0.16l1.38,-1.34l2.15,-0.88l2.94,1.01l-0.39,0.36ZM477.37,133.15l-4.08,0.05l-2.56,-0.32l0.33,-0.87l3.17,-1.03l3.24,0.96l-0.09,1.23Z",
        name: "Russia",
      },
      RW: {
        path: "M497.0,288.25l0.71,1.01l-0.11,1.09l-1.63,0.03l-1.04,1.39l-0.83,-0.11l0.51,-1.2l0.08,-1.34l0.42,-0.41l0.7,0.14l1.19,-0.61Z",
        name: "Rwanda",
      },
      RS: {
        path: "M469.4,163.99l0.42,-0.5l-0.01,-0.52l-1.15,-1.63l1.43,-0.62l1.33,0.12l1.17,1.06l0.46,1.13l1.34,0.64l0.35,1.35l1.46,0.9l0.76,-0.29l0.2,0.69l-0.48,0.78l0.22,1.12l1.05,1.22l-0.77,0.8l-0.37,1.52l-1.21,0.08l0.24,-0.64l-0.39,-0.54l-2.08,-1.64l-0.9,0.05l-0.48,0.94l-2.12,-1.37l0.53,-1.6l-1.11,-1.37l0.51,-1.1l-0.41,-0.57Z",
        name: "Serbia",
      },
      TL: {
        path: "M734.55,307.93l-0.1,-0.97l4.5,-0.86l-2.82,1.28l-1.59,0.55Z",
        name: "Timor-Leste",
      },
      TM: {
        path: "M553.03,173.76l-0.04,0.34l-0.09,-0.22l0.13,-0.12ZM555.87,172.66l0.45,-0.1l1.48,0.74l2.06,2.43l4.07,-0.18l0.38,-0.51l-0.32,-1.19l1.92,-0.94l1.91,-1.59l2.94,1.39l0.43,2.47l1.19,0.67l2.58,-0.13l0.62,0.4l1.32,3.12l4.54,3.44l2.67,1.45l3.06,1.14l-0.04,1.05l-1.33,-0.75l-0.59,0.19l-0.32,0.84l-2.2,0.81l-0.46,2.13l-1.21,0.74l-1.91,0.42l-0.73,1.33l-1.56,0.31l-2.22,-0.94l-0.2,-2.17l-0.38,-0.36l-1.73,-0.09l-2.76,-2.46l-2.14,-0.4l-2.84,-1.48l-1.78,-0.27l-1.24,0.53l-1.57,-0.08l-2.0,1.69l-1.7,0.43l-0.36,-1.58l0.36,-2.98l-0.22,-0.4l-1.65,-0.84l0.54,-1.69l-0.34,-0.52l-1.22,-0.13l0.36,-1.64l2.22,0.59l2.2,-0.95l0.12,-0.65l-1.77,-1.74l-0.66,-1.57Z",
        name: "Turkmenistan",
      },
      TJ: {
        path: "M597.75,178.82l-2.54,-0.44l-0.47,0.34l-0.24,1.7l0.43,0.45l2.64,-0.22l3.18,0.95l4.39,-0.41l0.56,2.37l0.52,0.29l0.67,-0.24l1.11,0.49l0.21,2.13l-3.76,-0.21l-1.8,1.32l-1.76,0.74l-0.61,-0.58l0.21,-2.23l-0.64,-0.49l-0.07,-0.93l-1.36,-0.66l-0.45,0.07l-1.08,1.01l-0.55,1.48l-1.31,-0.05l-0.95,1.16l-0.9,-0.35l-1.86,0.74l1.26,-2.83l-0.54,-2.17l-1.67,-0.82l0.33,-0.66l2.18,-0.04l1.19,-1.63l0.76,-1.79l2.43,-0.5l-0.26,1.0l0.73,1.05Z",
        name: "Tajikistan",
      },
      RO: {
        path: "M487.53,154.23l0.6,0.24l2.87,3.98l-0.17,2.69l0.45,1.42l1.32,0.81l1.35,-0.42l0.76,0.36l0.02,0.31l-0.83,0.45l-0.59,-0.22l-0.54,0.3l-0.62,3.3l-1.0,-0.22l-2.07,-1.13l-2.95,0.71l-1.25,0.76l-3.51,-0.15l-1.89,-0.47l-0.87,0.16l-0.82,-1.3l0.29,-0.26l-0.06,-0.64l-1.09,-0.34l-0.56,0.5l-1.05,-0.64l-0.39,-1.39l-1.36,-0.65l-0.35,-1.0l-0.83,-0.75l1.54,-0.54l2.66,-4.21l2.4,-1.24l2.96,0.34l1.48,0.73l0.79,-0.45l1.78,-0.3l0.75,-0.74l0.79,0.0Z",
        name: "Romania",
      },
      GW: {
        path: "M386.23,253.6l-0.29,0.84l0.15,0.6l-2.21,0.59l-0.86,0.96l-1.04,-0.83l-1.09,-0.23l-0.54,-1.06l-0.66,-0.49l2.41,-0.48l4.13,0.1Z",
        name: "Guinea-Bissau",
      },
      GT: {
        path: "M195.08,249.77l-2.48,-0.37l-1.03,-0.45l-1.14,-0.89l0.3,-0.99l-0.24,-0.68l0.96,-1.66l2.98,-0.01l0.4,-0.37l-0.19,-1.28l-1.67,-1.4l0.51,-0.4l0.0,-1.05l3.85,0.02l-0.21,4.53l0.4,0.43l1.46,0.38l-1.48,0.98l-0.35,0.7l0.12,0.57l-2.2,1.96Z",
        name: "Guatemala",
      },
      GR: {
        path: "M487.07,174.59l-0.59,1.43l-0.37,0.21l-2.84,-0.35l-3.03,0.77l-0.18,0.68l1.28,1.23l-0.61,0.23l-1.14,0.0l-1.2,-1.39l-0.63,0.03l-0.53,1.01l0.56,1.76l1.03,1.19l-0.56,0.38l-0.05,0.62l2.52,2.12l0.02,0.87l-1.78,-0.59l-0.48,0.56l0.5,1.0l-1.07,0.2l-0.3,0.53l0.75,2.01l-0.98,0.02l-1.84,-1.12l-1.37,-4.2l-2.21,-2.95l-0.11,-0.56l1.04,-1.28l0.2,-0.95l0.85,-0.66l0.03,-0.46l1.32,-0.21l1.01,-0.64l1.22,0.05l0.65,-0.56l2.26,-0.0l1.82,-0.75l1.85,1.0l2.28,-0.28l0.35,-0.39l0.01,-0.77l0.34,0.22ZM480.49,192.16l0.58,0.4l-0.68,-0.12l0.11,-0.28ZM482.52,192.82l2.51,0.06l0.24,0.32l-1.99,0.13l-0.77,-0.51Z",
        name: "Greece",
      },
      GQ: {
        path: "M448.79,279.62l0.02,2.22l-4.09,0.0l0.69,-2.27l3.38,0.05Z",
        name: "Eq. Guinea",
      },
      GY: {
        path: "M277.42,270.07l-0.32,1.83l-1.32,0.57l-0.23,0.46l-0.28,2.0l1.11,1.82l0.83,0.19l0.32,1.25l1.13,1.62l-1.21,-0.19l-1.08,0.71l-1.77,0.5l-0.44,0.46l-0.86,-0.09l-1.32,-1.01l-0.77,-2.27l0.36,-1.9l0.68,-1.23l-0.57,-1.17l-0.74,-0.43l0.12,-1.16l-0.9,-0.69l-1.1,0.09l-1.31,-1.48l0.53,-0.72l-0.04,-0.84l1.99,-0.86l0.05,-0.59l-0.71,-0.78l0.14,-0.57l1.66,-1.24l1.36,0.77l1.41,1.49l0.06,1.15l0.37,0.38l0.8,0.05l2.06,1.86Z",
        name: "Guyana",
      },
      GE: {
        path: "M521.71,168.93l5.29,0.89l4.07,2.01l1.41,-0.44l2.07,0.56l0.68,1.1l1.07,0.55l-0.12,0.59l0.98,1.29l-1.01,-0.13l-1.81,-0.83l-0.94,0.47l-3.23,0.43l-2.29,-1.39l-2.33,0.05l0.21,-0.97l-0.76,-2.26l-1.45,-1.12l-1.43,-0.39l-0.41,-0.42Z",
        name: "Georgia",
      },
      GB: {
        path: "M412.61,118.72l-2.19,3.22l-0.0,0.45l5.13,-0.3l-0.53,2.37l-2.2,3.12l0.29,0.63l2.37,0.21l2.33,4.3l1.76,0.69l2.2,5.12l2.94,0.77l-0.23,1.62l-1.15,0.88l-0.1,0.52l0.82,1.42l-1.86,1.43l-3.3,-0.02l-4.12,0.87l-1.04,-0.58l-0.47,0.06l-1.51,1.41l-2.12,-0.34l-1.86,1.18l-0.6,-0.29l3.19,-3.0l2.16,-0.69l0.28,-0.41l-0.34,-0.36l-3.73,-0.53l-0.4,-0.76l2.2,-0.87l0.17,-0.61l-1.26,-1.67l0.36,-1.7l3.38,0.28l0.43,-0.33l0.37,-1.99l-1.79,-2.49l-3.11,-0.72l-0.38,-0.59l0.79,-1.35l-0.04,-0.46l-0.82,-0.97l-0.61,0.01l-0.68,0.84l-0.1,-2.34l-1.23,-1.88l0.85,-3.47l1.77,-2.68l1.85,0.26l2.17,-0.22ZM406.26,132.86l-1.01,1.77l-1.57,-0.59l-1.16,0.01l0.37,-1.54l-0.39,-1.39l1.45,-0.1l2.3,1.84Z",
        name: "United Kingdom",
      },
      GA: {
        path: "M453.24,279.52l-0.08,0.98l0.7,1.29l2.36,0.24l-0.98,2.63l1.18,1.79l0.25,1.78l-0.29,1.52l-0.6,0.93l-1.84,-0.09l-1.23,-1.11l-0.66,0.23l-0.15,0.84l-1.42,0.26l-1.02,0.7l-0.11,0.52l0.77,1.35l-1.34,0.97l-3.94,-4.3l-1.44,-2.45l0.06,-0.6l0.54,-0.81l1.05,-3.46l4.17,-0.07l0.4,-0.4l-0.02,-2.66l2.39,0.21l1.25,-0.27Z",
        name: "Gabon",
      },
      GN: {
        path: "M391.8,254.11l0.47,0.8l1.11,-0.32l0.98,0.7l1.07,0.2l2.26,-1.22l0.64,0.44l1.13,1.56l-0.48,1.4l0.8,0.3l-0.08,0.48l0.46,0.68l-0.35,1.36l1.05,2.61l-1.0,0.69l0.03,1.41l-0.72,-0.06l-1.08,1.0l-0.24,-0.27l0.07,-1.11l-1.05,-1.54l-1.79,0.21l-0.35,-2.01l-1.6,-2.18l-2.0,-0.0l-1.31,0.54l-1.95,2.18l-1.86,-2.19l-1.2,-0.78l-0.3,-1.11l-0.8,-0.85l0.65,-0.72l0.81,-0.03l1.64,-0.8l0.23,-1.87l2.67,0.64l0.89,-0.3l1.21,0.15Z",
        name: "Guinea",
      },
      GM: {
        path: "M379.31,251.39l0.1,-0.35l2.43,-0.07l0.74,-0.61l0.51,-0.03l0.77,0.49l-1.03,-0.3l-1.87,0.9l-1.65,-0.04ZM384.03,250.91l0.91,0.05l0.75,-0.24l-0.59,0.31l-1.08,-0.13Z",
        name: "Gambia",
      },
      GL: {
        path: "M353.02,1.2l14.69,4.67l-3.68,1.89l-22.97,0.86l-0.36,0.27l0.12,0.43l1.55,1.18l8.79,-0.66l7.48,2.07l4.86,-1.77l1.66,1.73l-2.53,3.19l-0.01,0.48l0.46,0.15l6.35,-2.2l12.06,-2.31l7.24,1.13l1.09,1.99l-9.79,4.01l-1.44,1.32l-7.87,0.98l-0.35,0.41l0.38,0.38l5.07,0.24l-2.53,3.58l-2.07,3.81l0.08,6.05l2.57,3.11l-3.22,0.2l-4.12,1.66l-0.05,0.72l4.45,2.65l0.51,3.75l-2.3,0.4l-0.25,0.64l2.79,3.69l-4.82,0.31l-0.36,0.29l0.16,0.44l2.62,1.8l-0.59,1.22l-3.3,0.7l-3.45,0.01l-0.29,0.68l3.03,3.12l0.02,1.34l-4.4,-1.73l-1.72,1.35l0.15,0.66l3.31,1.15l3.13,2.71l0.81,3.16l-3.85,0.75l-4.89,-4.26l-0.47,-0.03l-0.17,0.44l0.79,2.86l-2.71,2.21l-0.13,0.44l0.37,0.27l8.73,0.34l-12.32,6.64l-7.24,1.48l-2.94,0.08l-2.69,1.75l-3.43,4.41l-5.24,2.84l-1.73,0.18l-7.12,2.1l-2.15,2.52l-0.13,2.99l-1.19,2.45l-4.01,3.09l-0.14,0.44l0.97,2.9l-2.28,6.48l-3.1,0.2l-3.83,-3.07l-4.86,-0.02l-2.25,-1.93l-1.7,-3.79l-4.3,-4.84l-1.21,-2.49l-0.44,-3.8l-3.32,-3.63l0.84,-2.86l-1.56,-1.7l2.28,-4.6l3.83,-1.74l1.03,-1.96l0.52,-3.47l-0.59,-0.41l-4.17,2.21l-2.07,0.58l-2.72,-1.28l-0.15,-2.71l0.85,-2.09l2.01,-0.06l5.06,1.2l0.46,-0.23l-0.14,-0.49l-6.54,-4.47l-2.67,0.55l-1.58,-0.86l2.56,-4.01l-0.03,-0.48l-1.5,-1.74l-4.98,-8.5l-3.13,-1.96l0.03,-1.88l-0.24,-0.37l-6.85,-3.02l-5.36,-0.38l-12.7,0.58l-2.78,-1.57l-3.66,-2.77l5.73,-1.45l5.0,-0.28l0.38,-0.38l-0.35,-0.41l-10.67,-1.38l-5.3,-2.06l0.25,-1.54l18.41,-5.26l1.22,-2.27l-0.25,-0.55l-6.14,-1.86l1.68,-1.77l8.55,-4.03l3.59,-0.63l0.3,-0.54l-0.88,-2.27l5.47,-1.47l7.65,-0.95l7.55,-0.05l3.04,1.85l6.48,-3.27l5.81,2.22l3.56,0.5l5.16,1.94l0.5,-0.21l-0.17,-0.52l-5.71,-3.13l0.28,-2.13l8.12,-3.6l8.7,0.28l3.35,-2.34l8.71,-0.6l19.93,0.8Z",
        name: "Greenland",
      },
      GH: {
        path: "M420.53,257.51l-0.01,0.72l0.96,1.2l0.24,3.73l0.59,0.95l-0.51,2.1l0.19,1.41l1.02,2.21l-6.97,2.84l-1.8,-0.57l0.04,-0.89l-1.02,-2.04l0.61,-2.65l1.07,-2.32l-0.96,-6.47l5.01,0.07l0.94,-0.39l0.61,0.11Z",
        name: "Ghana",
      },
      OM: {
        path: "M568.09,230.93l-0.91,1.67l-1.22,0.04l-0.6,0.76l-0.41,1.51l0.27,1.58l-1.16,0.05l-1.56,0.97l-0.76,1.74l-1.62,0.05l-0.98,0.65l-0.17,1.15l-0.89,0.52l-1.49,-0.18l-2.4,0.94l-2.47,-5.4l7.35,-2.71l1.67,-5.23l-1.12,-2.09l0.05,-0.83l0.67,-1.0l0.07,-1.05l0.9,-0.42l-0.05,-2.07l0.7,-0.01l1.0,1.62l1.51,1.08l3.3,0.84l1.73,2.29l0.81,0.37l-1.23,2.35l-0.99,0.79Z",
        name: "Oman",
      },
      TN: {
        path: "M448.1,188.24l-1.0,1.27l-0.02,1.32l0.84,0.88l-0.28,2.09l-1.53,1.32l-0.12,0.42l0.48,1.54l1.42,0.32l0.53,1.11l0.9,0.52l-0.11,1.67l-3.54,2.64l-0.1,2.38l-0.58,0.3l-0.96,-4.45l-1.54,-1.25l-0.16,-0.78l-1.92,-1.56l-0.18,-1.76l1.51,-1.62l0.59,-2.34l-0.38,-2.78l0.42,-1.21l2.45,-1.05l1.29,0.26l-0.06,1.11l0.58,0.38l1.47,-0.73Z",
        name: "Tunisia",
      },
      JO: {
        path: "M518.64,201.38l-5.14,1.56l-0.19,0.65l2.16,2.39l-0.89,1.14l-1.71,0.34l-1.71,1.8l-2.34,-0.37l1.21,-4.32l0.56,-4.07l2.8,0.94l4.46,-2.71l0.79,2.66Z",
        name: "Jordan",
      },
      HR: {
        path: "M455.59,162.84l1.09,0.07l-0.82,0.94l-0.27,-1.01ZM456.96,162.92l0.62,-0.41l1.73,0.45l0.42,-0.4l-0.01,-0.59l0.86,-0.52l0.2,-1.05l1.63,-0.68l2.57,1.68l2.07,0.6l0.87,-0.31l1.05,1.57l-0.52,0.63l-1.05,-0.56l-1.68,0.04l-2.1,-0.5l-1.29,0.06l-0.57,0.49l-0.59,-0.47l-0.62,0.16l-0.46,1.7l1.79,2.42l2.79,2.75l-1.18,-0.87l-2.21,-0.87l-1.67,-1.78l0.13,-0.63l-1.05,-1.19l-0.32,-1.27l-1.42,-0.43Z",
        name: "Croatia",
      },
      HT: {
        path: "M237.05,238.38l-1.16,0.43l-0.91,-0.55l0.05,-0.2l2.02,0.31ZM237.53,238.43l1.06,0.12l-0.05,0.01l-1.01,-0.12ZM239.25,238.45l0.79,-0.51l0.06,-0.62l-1.02,-1.0l0.02,-0.82l-0.3,-0.4l-0.93,-0.32l3.16,0.45l0.02,1.84l-0.48,0.34l-0.08,0.58l0.54,0.72l-1.78,-0.26Z",
        name: "Haiti",
      },
      HU: {
        path: "M462.08,157.89l0.65,-1.59l-0.09,-0.44l0.64,-0.0l0.39,-0.34l0.1,-0.69l1.75,0.87l2.32,-0.37l0.43,-0.66l3.49,-0.78l0.69,-0.78l0.57,-0.14l2.57,0.93l0.67,-0.23l1.03,0.65l0.08,0.37l-1.42,0.71l-2.59,4.14l-1.8,0.53l-1.68,-0.1l-2.74,1.23l-1.85,-0.54l-2.54,-1.66l-0.66,-1.1Z",
        name: "Hungary",
      },
      HN: {
        path: "M199.6,249.52l-1.7,-1.21l0.06,-0.94l3.04,-2.14l2.37,0.28l1.27,-0.09l1.1,-0.52l1.3,0.28l1.14,-0.25l1.38,0.37l2.23,1.37l-2.36,0.93l-1.23,-0.39l-0.88,1.3l-1.28,0.99l-0.98,-0.22l-0.42,0.52l-0.96,0.05l-0.36,0.41l0.04,0.88l-0.52,0.6l-0.3,0.04l-0.3,-0.55l-0.66,-0.31l0.11,-0.67l-0.48,-0.65l-0.87,-0.26l-0.73,0.2Z",
        name: "Honduras",
      },
      PR: {
        path: "M256.17,238.73l-0.26,0.27l-2.83,0.05l-0.07,-0.55l1.95,-0.1l1.22,0.33Z",
        name: "Puerto Rico",
      },
      PS: {
        path: "M509.21,203.07l0.1,-0.06l-0.02,0.03l-0.09,0.03ZM509.36,202.91l-0.02,-0.63l-0.33,-0.16l0.31,-1.09l0.24,0.1l-0.2,1.78Z",
        name: "Palestine",
      },
      PT: {
        path: "M401.84,187.38l-0.64,0.47l-1.13,-0.35l-0.91,0.17l0.28,-1.78l-0.24,-1.78l-1.25,-0.56l-0.45,-0.84l0.17,-1.66l1.01,-1.18l0.69,-2.92l-0.04,-1.39l-0.59,-1.9l1.3,-0.85l0.84,1.35l3.1,-0.3l0.46,0.99l-1.05,0.94l-0.03,2.16l-0.41,0.57l-0.08,1.1l-0.79,0.18l-0.26,0.59l0.91,1.6l-0.63,1.75l0.76,1.09l-1.1,1.52l0.07,1.05Z",
        name: "Portugal",
      },
      PY: {
        path: "M274.9,336.12l0.74,1.52l-0.16,3.45l0.32,0.41l2.64,0.5l1.11,-0.47l1.4,0.59l0.36,0.6l0.53,3.42l1.27,0.4l0.98,-0.38l0.51,0.27l-0.0,1.18l-1.21,5.32l-2.09,1.9l-1.8,0.4l-4.71,-0.98l2.2,-3.63l-0.32,-1.5l-2.78,-1.28l-3.03,-1.94l-2.07,-0.44l-4.34,-4.06l0.91,-2.9l0.08,-1.42l1.07,-2.04l4.13,-0.72l2.18,0.03l2.05,1.17l0.03,0.59Z",
        name: "Paraguay",
      },
      PA: {
        path: "M213.8,263.68l0.26,-1.52l-0.36,-0.26l-0.01,-0.49l0.44,-0.1l0.93,1.4l1.26,0.03l0.77,0.49l1.38,-0.23l2.51,-1.11l0.86,-0.72l3.45,0.85l1.4,1.18l0.41,1.74l-0.21,0.34l-0.53,-0.12l-0.47,0.29l-0.16,0.6l-0.68,-1.28l0.45,-0.49l-0.19,-0.66l-0.47,-0.13l-0.54,-0.84l-1.5,-0.75l-1.1,0.16l-0.75,0.99l-1.62,0.84l-0.18,0.96l0.85,0.97l-0.58,0.45l-0.69,0.08l-0.34,-1.18l-1.27,0.03l-0.71,-1.05l-2.59,-0.46Z",
        name: "Panama",
      },
      PG: {
        path: "M808.58,298.86l2.54,2.56l-0.13,0.26l-0.33,0.12l-0.87,-0.78l-1.22,-2.16ZM801.41,293.04l0.5,0.29l0.26,0.27l-0.49,-0.35l-0.27,-0.21ZM803.17,294.58l0.59,0.5l0.08,1.06l-0.29,-0.91l-0.38,-0.65ZM796.68,298.41l0.52,0.75l1.43,-0.19l2.27,-1.81l-0.01,-1.43l1.12,0.16l-0.04,1.1l-0.7,1.28l-1.12,0.18l-0.62,0.79l-2.46,1.11l-1.17,-0.0l-3.08,-1.25l3.41,0.0l0.45,-0.68ZM789.15,303.55l2.31,1.8l1.59,2.61l1.34,0.13l-0.06,0.66l0.31,0.43l1.06,0.24l0.06,0.65l2.25,1.05l-1.22,0.13l-0.72,-0.63l-4.56,-0.65l-3.22,-2.87l-1.49,-2.34l-3.27,-1.1l-2.38,0.72l-1.59,0.86l-0.2,0.42l0.27,1.55l-1.55,0.68l-1.36,-0.4l-2.21,-0.09l-0.08,-15.41l8.39,2.93l2.95,2.4l0.6,1.64l4.02,1.49l0.31,0.68l-1.76,0.21l-0.33,0.52l0.55,1.68Z",
        name: "Papua New Guinea",
      },
      PE: {
        path: "M244.96,295.21l-1.26,-0.07l-0.57,0.42l-1.93,0.45l-2.98,1.75l-0.36,1.36l-0.58,0.8l0.12,1.37l-1.24,0.59l-0.22,1.22l-0.62,0.84l1.04,2.27l1.28,1.44l-0.41,0.84l0.32,0.57l1.48,0.13l1.16,1.37l2.21,0.07l1.63,-1.08l-0.13,3.02l0.3,0.4l1.14,0.29l1.31,-0.34l1.9,3.59l-0.48,0.85l-0.17,3.85l-0.94,1.59l0.35,0.75l-0.47,1.07l0.98,1.97l-2.1,3.82l-0.98,0.5l-2.17,-1.28l-0.39,-1.16l-4.95,-2.58l-4.46,-2.79l-1.84,-1.51l-0.91,-1.84l0.3,-0.96l-2.11,-3.33l-4.82,-9.68l-1.04,-1.2l-0.87,-1.94l-3.4,-2.48l0.58,-1.18l-1.13,-2.23l0.66,-1.49l1.45,-1.15l-0.6,0.98l0.07,0.92l0.47,0.36l1.74,0.03l0.97,1.17l0.54,0.07l1.42,-1.03l0.6,-1.84l1.42,-2.02l3.04,-1.04l2.73,-2.62l0.86,-1.74l-0.1,-1.87l1.44,1.02l0.9,1.25l1.06,0.59l1.7,2.73l1.86,0.31l1.45,-0.61l0.96,0.39l1.36,-0.19l1.45,0.89l-1.4,2.21l0.31,0.61l0.59,0.05l0.47,0.5Z",
        name: "Peru",
      },
      PK: {
        path: "M615.09,192.34l-1.83,1.81l-2.6,0.39l-3.73,-0.68l-1.58,1.33l-0.09,0.42l1.77,4.39l1.7,1.23l-1.69,1.27l-0.12,2.14l-2.33,2.64l-1.6,2.8l-2.46,2.67l-3.03,-0.07l-2.76,2.83l0.05,0.6l1.5,1.11l0.26,1.9l1.44,1.5l0.37,1.68l-5.01,-0.01l-1.78,1.7l-1.42,-0.52l-0.76,-1.87l-2.27,-2.15l-11.61,0.86l0.71,-2.34l3.43,-1.32l0.25,-0.44l-0.21,-1.24l-1.2,-0.65l-0.28,-2.46l-2.29,-1.14l-1.28,-1.94l2.82,0.94l2.62,-0.38l1.42,0.33l0.76,-0.56l1.71,0.19l3.25,-1.14l0.27,-0.36l0.08,-2.19l1.18,-1.32l1.68,0.0l0.58,-0.82l1.6,-0.3l1.19,0.16l0.98,-0.78l0.02,-1.88l0.93,-1.47l1.48,-0.66l0.19,-0.55l-0.66,-1.25l2.04,-0.11l0.69,-1.01l-0.02,-1.16l1.11,-1.06l-0.17,-1.78l-0.49,-1.03l1.15,-0.98l5.42,-0.91l2.6,-0.82l1.6,1.16l0.97,2.34l3.45,0.97Z",
        name: "Pakistan",
      },
      PH: {
        path: "M737.01,263.84l0.39,2.97l-0.44,1.18l-0.55,-1.53l-0.67,-0.14l-1.17,1.28l0.65,2.09l-0.42,0.69l-2.48,-1.23l-0.57,-1.49l0.65,-1.03l-0.1,-0.54l-1.59,-1.19l-0.56,0.08l-0.65,0.87l-1.23,0.0l-1.58,0.97l0.83,-1.8l2.56,-1.42l0.65,0.84l0.45,0.13l1.9,-0.69l0.56,-1.11l1.5,-0.06l0.38,-0.43l-0.09,-1.19l1.21,0.71l0.36,2.02ZM733.59,256.58l0.05,0.75l0.08,0.26l-0.8,-0.42l-0.18,-0.71l0.85,0.12ZM734.08,256.1l-0.12,-1.12l-1.0,-1.27l1.36,0.03l0.53,0.73l0.51,2.04l-1.27,-0.4ZM733.76,257.68l0.38,0.98l-0.32,0.15l-0.07,-1.13ZM724.65,238.43l1.46,0.7l0.72,-0.31l-0.32,1.17l0.79,1.71l-0.57,1.84l-1.53,1.04l-0.39,2.25l0.56,2.04l1.63,0.57l1.16,-0.27l2.71,1.23l-0.19,1.08l0.76,0.84l-0.08,0.36l-1.4,-0.9l-0.88,-1.27l-0.66,0.0l-0.38,0.55l-1.6,-1.31l-2.15,0.36l-0.87,-0.39l0.07,-0.61l0.66,-0.55l-0.01,-0.62l-0.75,-0.59l-0.72,0.44l-0.74,-0.87l-0.39,-2.49l0.32,0.27l0.66,-0.28l0.26,-3.97l0.7,-2.02l1.14,0.0ZM731.03,258.87l-0.88,0.85l-1.19,1.94l-1.05,-1.19l0.93,-1.1l0.32,-1.47l0.52,-0.06l-0.27,1.15l0.22,0.45l0.49,-0.12l1.0,-1.32l-0.08,0.85ZM726.83,255.78l0.83,0.38l1.17,-0.0l-0.02,0.48l-2.0,1.4l0.03,-2.26ZM724.81,252.09l-0.38,1.27l-1.42,-1.95l1.2,0.05l0.6,0.63ZM716.55,261.82l1.1,-0.95l0.03,-0.03l-0.28,0.36l-0.85,0.61ZM719.22,259.06l0.04,-0.06l0.8,-1.53l0.16,0.75l-1.0,0.84Z",
        name: "Philippines",
      },
      PL: {
        path: "M468.44,149.42l-1.11,-1.54l-1.86,-0.33l-0.48,-1.05l-1.72,-0.37l-0.65,0.69l-0.72,-0.36l0.11,-0.61l-0.33,-0.46l-1.75,-0.27l-1.04,-0.93l-0.94,-1.94l0.16,-1.22l-0.62,-1.8l-0.78,-1.07l0.57,-1.04l-0.48,-1.43l1.41,-0.83l6.91,-2.71l2.14,0.5l0.52,0.91l5.51,0.44l4.55,-0.05l1.07,0.31l0.48,0.84l0.15,1.58l0.65,1.2l-0.01,0.99l-1.27,0.58l-0.19,0.54l0.73,1.48l0.08,1.55l1.2,2.76l-0.17,0.58l-1.23,0.44l-2.27,2.72l0.18,0.95l-1.97,-1.03l-1.98,0.4l-1.36,-0.28l-1.24,0.58l-1.07,-0.97l-1.16,0.24Z",
        name: "Poland",
      },
      ZM: {
        path: "M481.47,313.3l0.39,0.31l2.52,0.14l0.99,1.17l2.01,0.35l1.4,-0.64l0.69,1.17l1.78,0.33l1.84,2.35l2.23,0.18l0.4,-0.43l-0.21,-2.74l-0.62,-0.3l-0.48,0.32l-1.98,-1.17l0.72,-5.29l-0.51,-1.18l0.57,-1.3l3.68,-0.62l0.26,0.63l1.21,0.63l0.9,-0.22l2.16,0.67l1.33,0.71l1.07,1.02l0.56,1.87l-0.88,2.7l0.43,2.09l-0.73,0.87l-0.76,2.37l0.59,0.68l-6.6,1.83l-0.29,0.44l0.19,1.45l-1.68,0.35l-1.43,1.02l-0.38,0.87l-0.87,0.26l-3.48,3.69l-4.16,-0.53l-1.52,-1.0l-1.77,-0.13l-1.83,0.52l-3.04,-3.4l0.11,-7.59l4.82,0.03l0.39,-0.49l-0.18,-0.76l0.33,-0.83l-0.4,-1.36l0.24,-1.05Z",
        name: "Zambia",
      },
      EH: {
        path: "M384.42,230.28l0.25,-0.79l1.06,-1.29l0.8,-3.51l3.38,-2.78l0.7,-1.81l0.06,4.84l-1.98,0.2l-0.94,1.59l0.39,3.56l-3.7,-0.01ZM392.01,218.1l0.7,-1.8l1.77,-0.24l2.09,0.34l0.95,-0.62l1.28,-0.07l-0.0,2.51l-6.79,-0.12Z",
        name: "W. Sahara",
      },
      EE: {
        path: "M485.71,115.04l2.64,0.6l2.56,0.11l-1.6,1.91l0.61,3.54l-0.81,0.87l-1.78,-0.01l-3.22,-1.76l-1.8,0.45l0.21,-1.53l-0.58,-0.41l-0.69,0.34l-1.26,-1.03l-0.17,-1.63l2.83,-0.92l3.05,-0.52Z",
        name: "Estonia",
      },
      EG: {
        path: "M492.06,205.03l1.46,0.42l2.95,-1.64l2.04,-0.21l1.53,0.3l0.59,1.19l0.69,0.04l0.41,-0.64l1.81,0.58l1.95,0.16l1.04,-0.51l1.42,4.08l-2.03,4.54l-1.66,-1.77l-1.76,-3.85l-0.64,-0.12l-0.36,0.67l1.04,2.88l3.44,6.95l1.78,3.04l2.03,2.65l-0.36,0.53l0.23,2.01l2.7,2.19l-28.41,0.0l0.0,-18.96l-0.73,-2.2l0.59,-1.56l-0.32,-1.26l0.68,-0.99l3.06,-0.04l4.82,1.52Z",
        name: "Egypt",
      },
      ZA: {
        path: "M467.14,373.21l-0.13,-1.96l-0.68,-1.56l0.7,-0.68l-0.13,-2.33l-4.56,-8.19l0.77,-0.86l0.6,0.45l0.69,1.31l2.83,0.72l1.5,-0.26l2.24,-1.39l0.19,-9.55l1.35,2.3l-0.21,1.5l0.61,1.2l0.4,0.19l1.79,-0.27l2.6,-2.07l0.69,-1.32l0.96,-0.48l2.19,1.04l2.04,0.13l1.77,-0.65l0.85,-2.12l1.38,-0.33l1.59,-2.76l2.15,-1.89l3.41,-1.87l2.0,0.45l1.02,-0.28l0.99,0.2l1.75,5.29l-0.38,3.25l-0.81,-0.23l-1.0,0.46l-0.87,1.68l-0.05,1.16l1.97,1.84l1.47,-0.29l0.69,-1.18l1.09,0.01l-0.76,3.69l-0.58,1.09l-2.2,1.79l-3.17,4.76l-2.8,2.83l-3.57,2.88l-2.53,1.05l-1.22,0.14l-0.51,0.7l-1.18,-0.32l-1.39,0.5l-2.59,-0.52l-1.61,0.33l-1.18,-0.11l-2.55,1.1l-2.1,0.44l-1.6,1.07l-0.85,0.05l-0.93,-0.89l-0.93,-0.15l-0.97,-1.13l-0.25,0.05ZM491.45,364.19l0.62,-0.93l1.48,-0.59l1.18,-2.19l-0.07,-0.49l-1.99,-1.69l-1.66,0.56l-1.43,1.14l-1.34,1.73l0.02,0.51l1.88,2.11l1.31,-0.16Z",
        name: "South Africa",
      },
      EC: {
        path: "M231.86,285.53l0.29,1.59l-0.69,1.45l-2.61,2.51l-3.13,1.11l-1.53,2.18l-0.49,1.68l-1.0,0.73l-1.02,-1.11l-1.78,-0.16l0.67,-1.15l-0.24,-0.86l1.25,-2.13l-0.54,-1.09l-0.67,-0.08l-0.72,0.87l-0.87,-0.64l0.35,-0.69l-0.36,-1.96l0.81,-0.51l0.45,-1.51l0.92,-1.57l-0.07,-0.97l2.65,-1.33l2.75,1.35l0.77,1.05l2.12,0.35l0.76,-0.32l1.96,1.21Z",
        name: "Ecuador",
      },
      IT: {
        path: "M451.59,158.63l3.48,0.94l-0.21,1.17l0.3,0.83l-1.49,-0.24l-2.04,1.1l-0.21,0.39l0.13,1.45l-0.25,1.12l0.82,1.57l2.39,1.63l1.31,2.54l2.79,2.43l2.05,0.08l0.21,0.23l-0.39,0.33l0.09,0.67l4.05,1.97l2.17,1.76l-0.16,0.36l-1.17,-1.08l-2.18,-0.49l-0.44,0.2l-1.05,1.91l0.14,0.54l1.57,0.95l-0.19,0.98l-1.06,0.33l-1.25,2.34l-0.37,0.08l0.0,-0.33l1.0,-2.45l-1.73,-3.17l-1.12,-0.51l-0.88,-1.33l-1.51,-0.51l-1.27,-1.25l-1.75,-0.18l-4.12,-3.21l-1.62,-1.65l-1.03,-3.19l-3.53,-1.36l-1.3,0.51l-1.69,1.41l0.16,-0.72l-0.28,-0.47l-1.14,-0.33l-0.53,-1.96l0.72,-0.78l0.04,-0.48l-0.65,-1.17l0.8,0.39l1.4,-0.23l1.11,-0.84l0.52,0.35l1.19,-0.1l0.75,-1.2l1.53,0.33l1.36,-0.56l0.35,-1.14l1.08,0.32l0.68,-0.64l1.98,-0.44l0.42,0.82ZM459.19,184.75l-0.65,1.65l0.32,1.05l-0.31,0.89l-1.5,-0.85l-4.5,-1.67l0.19,-0.82l2.67,0.23l3.78,-0.48ZM443.93,176.05l1.18,1.66l-0.3,3.32l-1.06,-0.01l-0.77,0.73l-0.53,-0.44l-0.1,-3.37l-0.39,-1.22l1.04,0.01l0.92,-0.68Z",
        name: "Italy",
      },
      VN: {
        path: "M690.56,230.25l-2.7,1.82l-2.09,2.46l-0.63,1.95l4.31,6.45l2.32,1.65l1.43,1.94l1.11,4.59l-0.32,4.24l-1.93,1.54l-2.84,1.61l-2.11,2.15l-2.73,2.06l-0.59,-1.05l0.63,-1.53l-0.13,-0.47l-1.34,-1.04l1.51,-0.71l2.55,-0.18l0.3,-0.63l-0.82,-1.14l4.0,-2.07l0.31,-3.05l-0.57,-1.77l0.42,-2.66l-0.73,-1.97l-1.86,-1.76l-3.63,-5.29l-2.72,-1.46l0.36,-0.47l1.5,-0.64l0.21,-0.52l-0.97,-2.27l-0.37,-0.24l-2.83,-0.02l-2.24,-3.9l0.83,-0.4l4.39,-0.29l2.06,-1.31l1.15,0.89l1.88,0.4l-0.17,1.51l1.35,1.16l1.67,0.45Z",
        name: "Vietnam",
      },
      SB: {
        path: "M826.69,311.6l-0.61,0.09l-0.2,-0.33l0.37,0.15l0.44,0.09ZM824.18,307.38l-0.26,-0.3l-0.31,-0.91l0.03,0.0l0.54,1.21ZM823.04,309.33l-1.66,-0.22l-0.2,-0.52l1.16,0.28l0.69,0.46ZM819.28,304.68l1.14,0.65l0.02,0.03l-0.81,-0.44l-0.35,-0.23Z",
        name: "Solomon Is.",
      },
      ET: {
        path: "M516.04,247.79l1.1,0.84l1.63,-0.45l0.68,0.47l1.63,0.03l2.01,0.94l1.73,1.66l1.64,2.07l-1.52,2.04l0.16,1.72l0.39,0.38l2.05,0.0l-0.36,1.03l2.86,3.58l8.32,3.08l1.31,0.02l-6.32,6.75l-3.1,0.11l-2.36,1.77l-1.47,0.04l-0.86,0.79l-1.38,-0.0l-1.32,-0.81l-2.29,1.05l-0.76,0.98l-3.29,-0.41l-3.07,-2.07l-1.8,-0.07l-0.62,-0.6l0.0,-1.24l-0.28,-0.38l-1.15,-0.37l-1.4,-2.59l-1.19,-0.68l-0.47,-1.0l-1.27,-1.23l-1.16,-0.22l0.43,-0.72l1.45,-0.28l0.41,-0.95l-0.03,-2.21l0.68,-2.44l1.05,-0.63l1.43,-3.06l1.57,-1.37l1.02,-2.51l0.35,-1.88l2.52,0.46l0.44,-0.24l0.58,-1.43Z",
        name: "Ethiopia",
      },
      SO: {
        path: "M525.13,288.48l-1.13,-1.57l-0.03,-8.86l2.66,-3.38l1.67,-0.13l2.13,-1.69l3.41,-0.23l7.08,-7.55l2.91,-3.69l0.08,-4.82l2.98,-0.67l1.24,-0.86l0.45,-0.0l-0.2,3.0l-1.21,3.62l-2.73,5.97l-2.13,3.65l-5.03,6.16l-8.56,6.4l-2.78,3.08l-0.8,1.56Z",
        name: "Somalia",
      },
      ZW: {
        path: "M498.91,341.09l-1.11,-0.22l-0.92,0.28l-2.09,-0.44l-1.5,-1.11l-1.89,-0.43l-0.62,-1.4l-0.01,-0.84l-0.3,-0.38l-0.97,-0.25l-2.71,-2.74l-1.92,-3.32l3.83,0.45l3.73,-3.82l1.08,-0.44l0.26,-0.77l1.25,-0.9l1.41,-0.26l0.5,0.89l1.99,-0.05l1.72,1.17l1.11,0.17l1.05,0.66l0.01,2.99l-0.59,3.76l0.38,0.86l-0.23,1.23l-0.39,0.35l-0.63,1.81l-2.43,2.75Z",
        name: "Zimbabwe",
      },
      ES: {
        path: "M416.0,169.21l1.07,1.17l4.61,1.38l1.06,-0.57l2.6,1.26l2.71,-0.3l0.09,1.12l-2.14,1.8l-3.11,0.61l-0.31,0.31l-0.2,0.89l-1.54,1.69l-0.97,2.4l0.84,1.74l-1.32,1.27l-0.48,1.68l-1.88,0.65l-1.66,2.07l-5.36,-0.01l-1.79,1.08l-0.89,0.98l-0.88,-0.17l-0.79,-0.82l-0.68,-1.59l-2.37,-0.63l-0.11,-0.5l1.21,-1.82l-0.77,-1.13l0.61,-1.68l-0.76,-1.62l0.87,-0.49l0.09,-1.25l0.42,-0.6l0.03,-2.11l0.99,-0.69l0.13,-0.5l-1.03,-1.73l-1.46,-0.11l-0.61,0.38l-1.06,0.0l-0.52,-1.23l-0.53,-0.21l-1.32,0.67l-0.01,-1.49l-0.75,-0.96l3.03,-1.88l2.99,0.53l3.32,-0.02l2.63,0.51l6.01,-0.06Z",
        name: "Spain",
      },
      ER: {
        path: "M520.38,246.23l3.42,2.43l3.5,3.77l0.84,0.54l-0.95,-0.01l-3.51,-3.89l-2.33,-1.15l-1.73,-0.07l-0.91,-0.51l-1.26,0.51l-1.34,-1.02l-0.61,0.17l-0.66,1.61l-2.35,-0.43l-0.17,-0.67l1.29,-5.29l0.61,-0.61l1.95,-0.53l0.87,-1.01l1.17,2.41l0.68,2.33l1.49,1.43Z",
        name: "Eritrea",
      },
      ME: {
        path: "M468.91,172.53l-1.22,-1.02l0.47,-1.81l0.89,-0.72l2.26,1.51l-0.5,0.57l-0.75,-0.27l-1.14,1.73Z",
        name: "Montenegro",
      },
      MD: {
        path: "M488.41,153.73l1.4,-0.27l1.72,0.93l1.07,0.15l0.85,0.65l-0.14,0.84l0.96,0.85l1.12,2.47l-1.15,-0.07l-0.66,-0.41l-0.52,0.25l-0.09,0.86l-1.08,1.89l-0.27,-0.86l0.25,-1.34l-0.16,-1.6l-3.29,-4.34Z",
        name: "Moldova",
      },
      MG: {
        path: "M545.91,319.14l0.4,3.03l0.62,1.21l-0.21,1.02l-0.57,-0.8l-0.69,-0.01l-0.47,0.76l0.41,2.12l-0.18,0.87l-0.73,0.78l-0.15,2.14l-4.71,15.2l-1.06,2.88l-3.92,1.64l-3.12,-1.49l-0.6,-1.21l-0.19,-2.4l-0.86,-2.05l-0.21,-1.77l0.38,-1.62l1.21,-0.75l0.01,-0.76l1.19,-2.04l0.23,-1.66l-1.06,-2.99l-0.19,-2.21l0.81,-1.33l0.32,-1.46l4.63,-1.22l3.44,-3.0l0.85,-1.4l-0.08,-0.7l0.78,-0.04l1.38,-1.77l0.13,-1.64l0.45,-0.61l1.16,1.69l0.59,1.6Z",
        name: "Madagascar",
      },
      MA: {
        path: "M378.78,230.02l0.06,-0.59l0.92,-0.73l0.82,-1.37l-0.09,-1.04l0.79,-1.7l1.31,-1.58l0.96,-0.59l0.66,-1.55l0.09,-1.47l0.81,-1.48l1.72,-1.07l1.55,-2.69l1.16,-0.96l2.44,-0.39l1.94,-1.82l1.31,-0.78l2.09,-2.28l-0.51,-3.65l1.24,-3.7l1.5,-1.75l4.46,-2.57l2.37,-4.47l1.44,0.01l1.68,1.21l2.32,-0.19l3.47,0.65l0.8,1.54l0.16,1.71l0.86,2.96l0.56,0.59l-0.26,0.61l-3.05,0.44l-1.26,1.05l-1.33,0.22l-0.33,0.37l-0.09,1.78l-2.68,1.0l-1.07,1.42l-4.47,1.13l-4.04,2.01l-0.54,4.64l-1.15,0.06l-0.92,0.61l-1.96,-0.35l-2.42,0.54l-0.74,1.9l-0.86,0.4l-1.14,3.26l-3.53,3.01l-0.8,3.55l-0.96,1.1l-0.29,0.82l-4.95,0.18Z",
        name: "Morocco",
      },
      UZ: {
        path: "M598.64,172.75l-1.63,1.52l0.06,0.64l1.85,1.12l1.97,-0.64l2.21,1.17l-2.52,1.68l-2.59,-0.22l-0.18,-0.41l0.46,-1.23l-0.45,-0.53l-3.35,0.69l-2.1,3.51l-1.87,-0.12l-1.03,1.51l0.22,0.55l1.64,0.62l0.46,1.83l-1.19,2.49l-2.66,-0.53l0.05,-1.36l-0.26,-0.39l-3.3,-1.23l-2.56,-1.4l-4.4,-3.34l-1.34,-3.14l-1.08,-0.6l-2.58,0.13l-0.69,-0.44l-0.47,-2.52l-3.37,-1.6l-0.43,0.05l-2.07,1.72l-2.1,1.01l-0.21,0.47l0.28,1.01l-1.91,0.03l-0.09,-10.5l5.99,-1.7l6.19,3.54l2.71,2.84l7.05,-0.67l2.71,2.01l-0.17,2.81l0.39,0.42l0.9,0.02l0.44,2.14l0.38,0.32l2.94,0.09l0.95,1.42l1.28,-0.24l1.05,-2.04l4.43,-2.5Z",
        name: "Uzbekistan",
      },
      MM: {
        path: "M673.9,230.21l-1.97,1.57l-0.57,0.96l-1.4,0.6l-1.36,1.05l-1.99,0.36l-1.08,2.66l-0.91,0.4l-0.19,0.55l1.21,2.27l2.52,3.43l-0.79,1.91l-0.74,0.41l-0.17,0.52l0.65,1.37l1.61,1.95l0.25,2.58l0.9,2.13l-1.92,3.57l0.68,-2.25l-0.81,-1.74l0.19,-2.65l-1.05,-1.53l-1.24,-6.17l-1.12,-2.26l-0.6,-0.13l-4.34,3.02l-2.39,-0.65l0.77,-2.84l-0.52,-2.61l-1.91,-2.96l0.25,-0.75l-0.29,-0.51l-1.33,-0.3l-1.61,-1.93l-0.1,-1.3l0.82,-0.24l0.04,-1.64l1.02,-0.52l0.21,-0.45l-0.23,-0.95l0.54,-0.96l0.08,-2.22l1.46,0.45l0.47,-0.2l1.12,-2.19l0.16,-1.35l1.33,-2.16l-0.0,-1.52l2.89,-1.66l1.63,0.44l0.5,-0.44l-0.17,-1.4l0.64,-0.36l0.08,-1.04l0.77,-0.11l0.71,1.35l1.06,0.69l-0.03,3.86l-2.38,2.37l-0.3,3.15l0.46,0.43l2.28,-0.38l0.51,2.08l1.47,0.67l-0.6,1.8l0.19,0.48l2.97,1.48l1.64,-0.55l0.02,0.32Z",
        name: "Myanmar",
      },
      ML: {
        path: "M392.61,254.08l-0.19,-2.37l-0.99,-0.87l-0.44,-1.3l-0.09,-1.28l0.81,-0.58l0.35,-1.24l2.37,0.65l1.31,-0.47l0.86,0.15l0.66,-0.56l9.83,-0.04l0.38,-0.28l0.56,-1.8l-0.44,-0.65l-2.35,-21.95l3.27,-0.04l16.7,11.38l0.74,1.31l2.5,1.09l0.02,1.38l0.44,0.39l2.34,-0.21l0.01,5.38l-1.28,1.61l-0.26,1.49l-5.31,0.57l-1.07,0.92l-2.9,0.1l-0.86,-0.48l-1.38,0.36l-2.4,1.08l-0.6,0.87l-1.85,1.09l-0.43,0.7l-0.79,0.39l-1.44,-0.21l-0.81,0.84l-0.34,1.64l-1.91,2.02l-0.06,1.03l-0.67,1.22l0.13,1.16l-0.97,0.39l-0.23,-0.64l-0.52,-0.24l-1.35,0.4l-0.34,0.55l-2.69,-0.28l-0.37,-0.35l-0.02,-0.9l-0.65,-0.35l0.45,-0.64l-0.03,-0.53l-2.12,-2.44l-0.76,-0.01l-2.0,1.16l-0.78,-0.15l-0.8,-0.67l-1.21,0.23Z",
        name: "Mali",
      },
      MN: {
        path: "M676.61,146.48l3.81,1.68l5.67,-1.0l2.37,0.41l2.34,1.5l1.79,1.75l2.29,-0.03l3.12,0.52l2.47,-0.81l3.41,-0.59l3.53,-2.21l1.25,0.29l1.53,1.13l2.27,-0.21l-2.66,5.01l0.64,1.68l0.47,0.21l1.32,-0.38l2.38,0.48l2.02,-1.11l1.76,0.89l2.06,2.02l-0.13,0.53l-1.72,-0.29l-3.77,0.46l-1.88,0.99l-1.76,1.99l-3.71,1.17l-2.45,1.6l-3.83,-0.87l-0.41,0.17l-1.31,1.99l1.04,2.24l-1.52,0.9l-1.74,1.57l-2.79,1.02l-3.78,0.13l-4.05,1.05l-2.77,1.52l-1.16,-0.85l-2.94,0.0l-3.62,-1.79l-2.58,-0.49l-3.4,0.41l-5.12,-0.67l-2.63,0.06l-1.31,-1.6l-1.4,-3.0l-1.48,-0.33l-3.13,-1.94l-6.16,-0.93l-0.71,-1.06l0.86,-3.82l-1.93,-2.71l-3.5,-1.18l-1.95,-1.58l-0.5,-1.72l2.34,-0.52l4.75,-2.8l3.62,-1.47l2.18,0.97l2.46,0.05l1.81,1.53l2.46,0.12l3.95,0.71l2.43,-2.28l0.08,-0.48l-0.9,-1.72l2.24,-2.98l2.62,1.27l4.94,1.17l0.43,2.24Z",
        name: "Mongolia",
      },
      MK: {
        path: "M472.8,173.98l0.49,-0.71l3.57,-0.71l1.0,0.77l0.13,1.45l-0.65,0.53l-1.15,-0.05l-1.12,0.67l-1.39,0.22l-0.79,-0.55l-0.29,-1.03l0.19,-0.6Z",
        name: "Macedonia",
      },
      MW: {
        path: "M505.5,309.31l0.85,1.95l0.15,2.86l-0.69,1.65l0.71,1.8l0.06,1.28l0.49,0.64l0.07,1.06l0.4,0.55l0.8,-0.23l0.55,0.61l0.69,-0.21l0.34,0.6l0.19,2.94l-1.04,0.62l-0.54,1.25l-1.11,-1.08l-0.16,-1.56l0.51,-1.31l-0.32,-1.3l-0.99,-0.65l-0.82,0.12l-2.36,-1.64l0.63,-1.96l0.82,-1.18l-0.46,-2.01l0.9,-2.86l-0.94,-2.51l0.96,0.18l0.29,0.4Z",
        name: "Malawi",
      },
      MR: {
        path: "M407.36,220.66l-2.58,0.03l-0.39,0.44l2.42,22.56l0.36,0.43l-0.39,1.24l-9.75,0.04l-0.56,0.53l-0.91,-0.11l-1.27,0.45l-1.61,-0.66l-0.97,0.03l-0.36,0.29l-0.38,1.35l-0.42,0.23l-2.93,-3.4l-2.96,-1.52l-1.62,-0.03l-1.27,0.54l-1.12,-0.2l-0.65,0.4l-0.08,-0.49l0.68,-1.29l0.31,-2.43l-0.57,-3.91l0.23,-1.21l-0.69,-1.5l-1.15,-1.02l0.25,-0.39l9.58,0.02l0.4,-0.45l-0.46,-3.68l0.47,-1.04l2.12,-0.21l0.36,-0.4l-0.08,-6.4l7.81,0.13l0.41,-0.4l0.01,-3.31l7.76,5.35Z",
        name: "Mauritania",
      },
      UG: {
        path: "M498.55,276.32l0.7,-0.46l1.65,0.5l1.96,-0.57l1.7,0.01l1.45,-0.98l0.91,1.33l1.33,3.95l-2.57,4.03l-1.46,-0.4l-2.54,0.91l-1.37,1.61l-0.01,0.81l-2.42,-0.01l-2.26,1.01l-0.17,-1.59l0.58,-1.04l0.14,-1.94l1.37,-2.28l1.78,-1.58l-0.17,-0.65l-0.72,-0.24l0.13,-2.43Z",
        name: "Uganda",
      },
      MY: {
        path: "M717.47,273.46l-1.39,0.65l-2.12,-0.41l-2.88,-0.0l-0.38,0.28l-0.84,2.75l-0.99,0.96l-1.21,3.29l-1.73,0.45l-2.45,-0.68l-1.39,0.31l-1.33,1.15l-1.59,-0.14l-1.41,0.44l-1.44,-1.19l-0.18,-0.73l1.34,0.53l1.93,-0.47l0.75,-2.22l4.02,-1.03l2.75,-3.21l0.82,0.94l0.64,-0.05l0.4,-0.65l0.96,0.06l0.42,-0.36l0.24,-2.68l1.81,-1.64l1.21,-1.86l0.63,-0.01l1.07,1.05l0.34,1.28l3.44,1.35l-0.06,0.35l-1.37,0.1l-0.35,0.54l0.32,0.88ZM673.68,269.59l0.17,1.09l0.47,0.33l1.65,-0.3l0.87,-0.94l1.61,1.52l0.98,1.56l-0.12,2.81l0.41,2.29l0.95,0.9l0.88,2.44l-1.27,0.12l-5.1,-3.67l-0.34,-1.29l-1.37,-1.59l-0.33,-1.97l-0.88,-1.4l0.25,-1.68l-0.46,-1.05l1.63,0.84Z",
        name: "Malaysia",
      },
      MX: {
        path: "M133.12,200.41l0.2,0.47l9.63,3.33l6.96,-0.02l0.4,-0.4l0.0,-0.74l3.77,0.0l3.55,2.93l1.39,2.83l1.52,1.04l2.08,0.82l0.47,-0.14l1.46,-2.0l1.73,-0.04l1.59,0.98l2.05,3.35l1.47,1.56l1.26,3.14l2.18,1.02l2.26,0.58l-1.18,3.72l-0.42,5.04l1.79,4.89l1.62,1.89l0.61,1.52l1.2,1.42l2.55,0.66l1.37,1.1l7.54,-1.89l1.86,-1.3l1.14,-4.3l4.1,-1.21l3.57,-0.11l0.32,0.3l-0.06,0.94l-1.26,1.45l-0.67,1.71l0.38,0.7l-0.72,2.27l-0.49,-0.3l-1.0,0.08l-1.0,1.39l-0.47,-0.11l-0.53,0.47l-4.26,-0.02l-0.4,0.4l-0.0,1.06l-1.1,0.26l0.1,0.44l1.82,1.44l0.56,0.91l-3.19,0.21l-1.21,2.09l0.24,0.72l-0.2,0.44l-2.24,-2.18l-1.45,-0.93l-2.22,-0.69l-1.52,0.22l-3.07,1.16l-10.55,-3.85l-2.86,-1.96l-3.78,-0.92l-1.08,-1.19l-2.62,-1.43l-1.18,-1.54l-0.38,-0.81l0.66,-0.63l-0.18,-0.53l0.52,-0.76l0.01,-0.91l-2.0,-3.82l-2.21,-2.63l-2.53,-2.09l-1.19,-1.62l-2.2,-1.17l-0.3,-0.43l0.34,-1.48l-0.21,-0.45l-1.23,-0.6l-1.36,-1.2l-0.59,-1.78l-1.54,-0.47l-2.44,-2.55l-0.16,-0.9l-1.33,-2.03l-0.84,-1.99l-0.16,-1.33l-1.81,-1.1l-0.97,0.05l-1.31,-0.7l-0.57,0.22l-0.4,1.12l0.72,3.77l3.51,3.89l0.28,0.78l0.53,0.26l0.41,1.43l1.33,1.73l1.58,1.41l0.8,2.39l1.43,2.41l0.13,1.32l0.37,0.36l1.04,0.08l1.67,2.28l-0.85,0.76l-0.66,-1.51l-1.68,-1.54l-2.91,-1.87l0.06,-1.82l-0.54,-1.68l-2.91,-2.03l-0.55,0.09l-1.95,-1.1l-0.88,-0.94l0.68,-0.08l0.93,-1.01l0.08,-1.78l-1.93,-1.94l-1.46,-0.77l-3.75,-7.56l4.88,-0.42Z",
        name: "Mexico",
      },
      IL: {
        path: "M507.76,203.05l0.4,-0.78l0.18,0.4l-0.33,1.03l0.52,0.44l0.68,-0.22l-0.86,3.6l-1.16,-3.32l0.59,-0.74l-0.03,-0.41ZM508.73,200.34l0.37,-1.02l0.64,0.0l0.52,-0.51l-0.49,1.53l-0.56,-0.24l-0.48,0.23Z",
        name: "Israel",
      },
      FR: {
        path: "M444.48,172.62l-0.64,1.78l-0.58,-0.31l-0.49,-1.72l0.4,-0.89l1.0,-0.72l0.3,1.85ZM429.64,147.1l1.78,1.58l1.46,-0.13l2.1,1.42l1.35,0.27l1.23,0.83l3.04,0.5l-1.03,1.85l-0.3,2.12l-0.41,0.32l-0.95,-0.24l-0.5,0.43l0.06,0.61l-1.81,1.92l-0.04,1.42l0.55,0.38l0.88,-0.36l0.61,0.97l-0.03,1.0l0.57,0.91l-0.75,1.09l0.65,2.39l1.27,0.57l-0.18,0.82l-2.01,1.53l-4.77,-0.8l-3.82,1.0l-0.53,1.85l-2.49,0.34l-2.71,-1.31l-1.16,0.57l-4.31,-1.29l-0.72,-0.86l1.19,-1.78l0.39,-6.45l-2.58,-3.3l-1.9,-1.66l-3.72,-1.23l-0.19,-1.72l2.81,-0.61l4.12,0.81l0.47,-0.48l-0.6,-2.77l1.94,0.95l5.83,-2.54l0.92,-2.74l1.6,-0.49l0.24,0.78l1.36,0.33l1.05,1.19ZM289.01,278.39l-0.81,0.8l-0.78,0.12l-0.5,-0.66l-0.56,-0.1l-0.91,0.6l-0.46,-0.22l1.09,-2.96l-0.96,-1.77l-0.17,-1.49l1.07,-1.77l2.32,0.75l2.51,2.01l0.3,0.74l-2.14,3.96Z",
        name: "France",
      },
      XS: {
        path: "M531.15,258.94l1.51,0.12l5.13,-0.95l5.3,-1.48l-0.01,4.4l-2.67,3.39l-1.85,0.01l-8.04,-2.94l-2.55,-3.17l1.12,-1.71l2.04,2.34Z",
        name: "Somaliland",
      },
      FI: {
        path: "M492.17,76.39l-0.23,3.5l3.52,2.63l-2.08,2.88l-0.02,0.44l2.8,4.56l-1.59,3.31l2.16,3.24l-0.94,2.39l0.14,0.47l3.44,2.51l-0.77,1.62l-7.52,6.95l-4.5,0.31l-4.38,1.37l-3.8,0.74l-1.44,-1.96l-2.17,-1.11l0.5,-3.66l-1.16,-3.33l1.09,-2.08l2.21,-2.42l5.67,-4.32l1.64,-0.83l0.21,-0.42l-0.46,-2.02l-3.38,-1.89l-0.75,-1.43l-0.22,-6.74l-6.79,-4.8l0.8,-0.62l2.54,2.12l3.46,-0.12l3.0,0.96l2.51,-2.11l1.17,-3.08l3.55,-1.38l2.76,1.53l-0.95,2.79Z",
        name: "Finland",
      },
      FJ: {
        path: "M869.95,326.98l-1.21,0.41l-0.08,-0.23l2.97,-1.21l-0.14,0.42l-1.54,0.61ZM867.58,329.25l0.43,0.37l-0.27,0.88l-1.24,0.28l-1.04,-0.24l-0.14,-0.66l0.63,-0.58l0.92,0.26l0.7,-0.31Z",
        name: "Fiji",
      },
      FK: {
        path: "M274.36,425.85l1.44,1.08l-0.47,0.73l-3.0,0.89l-0.96,-1.0l-0.52,-0.05l-1.83,1.29l-0.73,-0.88l2.46,-1.64l1.93,0.76l1.67,-1.19Z",
        name: "Falkland Is.",
      },
      NI: {
        path: "M202.33,252.67l0.81,-0.18l1.03,-1.02l-0.04,-0.88l0.68,-0.0l0.63,-0.54l0.97,0.22l1.53,-1.26l0.58,-0.99l1.17,0.34l2.41,-0.94l0.13,1.32l-0.81,1.94l0.1,2.74l-0.36,0.37l-0.11,1.75l-0.47,0.81l0.18,1.14l-1.73,-0.85l-0.71,0.27l-1.47,-0.6l-0.52,0.16l-4.01,-3.81Z",
        name: "Nicaragua",
      },
      NL: {
        path: "M430.31,143.39l0.6,-0.5l2.13,-4.8l3.2,-1.33l1.74,0.08l0.33,0.8l-0.59,2.92l-0.5,0.99l-1.26,0.0l-0.4,0.45l0.33,2.7l-2.2,-1.78l-2.62,0.58l-0.75,-0.11Z",
        name: "Netherlands",
      },
      NO: {
        path: "M491.44,67.41l6.8,2.89l-2.29,0.86l-0.15,0.65l2.33,2.38l-4.98,1.79l0.84,-2.45l-0.18,-0.48l-3.55,-1.8l-3.89,1.52l-1.42,3.38l-2.12,1.72l-2.64,-1.0l-3.11,0.21l-2.66,-2.22l-0.5,-0.01l-1.41,1.1l-1.44,0.17l-0.35,0.35l-0.32,2.47l-4.32,-0.64l-0.44,0.29l-0.58,2.11l-2.45,0.2l-4.15,7.68l-3.88,5.76l0.78,1.62l-0.64,1.16l-2.24,-0.06l-0.38,0.24l-1.66,3.89l0.15,5.17l1.57,2.04l-0.78,4.16l-2.02,2.48l-0.85,1.63l-1.3,-1.75l-0.58,-0.07l-4.87,4.19l-3.1,0.79l-3.16,-1.7l-0.85,-3.77l-0.77,-8.55l2.14,-2.31l6.55,-3.27l5.02,-4.17l10.63,-13.84l10.98,-8.7l5.35,-1.91l4.34,0.12l3.69,-3.64l4.49,0.19l4.37,-0.89ZM484.55,20.04l4.26,1.75l-3.1,2.55l-7.1,0.65l-7.08,-0.9l-0.37,-1.31l-0.37,-0.29l-3.44,-0.1l-2.08,-2.0l6.87,-1.44l3.9,1.31l2.39,-1.64l6.13,1.4ZM481.69,33.93l-4.45,1.74l-3.54,-0.99l1.12,-0.9l0.05,-0.58l-1.06,-1.22l4.22,-0.89l1.09,1.97l2.57,0.87ZM466.44,24.04l7.43,3.77l-5.41,1.86l-1.58,4.08l-2.26,1.2l-1.12,4.11l-2.61,0.18l-4.79,-2.86l1.84,-1.54l-0.1,-0.68l-3.69,-1.53l-4.77,-4.51l-1.73,-3.89l6.11,-1.82l1.54,1.92l3.57,-0.08l1.2,-1.96l3.32,-0.18l3.05,1.92Z",
        name: "Norway",
      },
      NA: {
        path: "M474.26,330.66l-0.97,0.04l-0.38,0.4l-0.07,8.9l-2.09,0.08l-0.39,0.4l-0.0,17.42l-1.98,1.23l-1.17,0.17l-2.44,-0.66l-0.48,-1.13l-0.99,-0.74l-0.54,0.05l-0.9,1.01l-1.53,-1.68l-0.93,-1.88l-1.99,-8.56l-0.06,-3.12l-0.33,-1.52l-2.3,-3.34l-1.91,-4.83l-1.96,-2.43l-0.12,-1.57l2.33,-0.79l1.43,0.07l1.81,1.13l10.23,-0.25l1.84,1.23l5.87,0.35ZM474.66,330.64l6.51,-1.6l1.9,0.39l-1.69,0.4l-1.31,0.83l-1.12,-0.94l-4.29,0.92Z",
        name: "Namibia",
      },
      VU: {
        path: "M839.04,322.8l0.22,1.14l-0.44,0.03l-0.2,-1.45l0.42,0.27Z",
        name: "Vanuatu",
      },
      NC: {
        path: "M838.78,341.24l-0.33,0.22l-2.9,-1.75l-3.26,-3.37l1.65,0.83l4.85,4.07Z",
        name: "New Caledonia",
      },
      NE: {
        path: "M454.75,226.53l1.33,1.37l0.48,0.07l1.27,-0.7l0.53,3.52l0.94,0.83l0.17,0.92l0.81,0.69l-0.44,0.95l-0.96,5.26l-0.13,3.22l-3.04,2.31l-1.22,3.57l1.02,1.24l-0.0,1.46l0.39,0.4l1.13,0.04l-0.9,1.25l-1.47,-2.42l-0.86,-0.29l-2.09,1.37l-1.74,-0.67l-1.45,-0.17l-0.85,0.35l-1.36,-0.07l-1.64,1.09l-1.06,0.05l-2.94,-1.28l-1.44,0.59l-1.01,-0.03l-0.97,-0.94l-2.7,-0.98l-2.69,0.3l-0.87,0.64l-0.47,1.6l-0.75,1.16l-0.12,1.53l-1.57,-1.1l-1.31,0.24l0.03,-0.81l-0.32,-0.41l-2.59,-0.52l-0.15,-1.16l-1.35,-1.6l-0.29,-1.0l0.13,-0.84l1.29,-0.08l1.08,-0.92l3.31,-0.22l2.22,-0.41l0.32,-0.34l0.2,-1.47l1.39,-1.88l-0.01,-5.66l3.36,-1.12l7.24,-5.12l8.42,-4.92l3.69,1.06Z",
        name: "Niger",
      },
      NG: {
        path: "M456.32,253.89l0.64,0.65l-0.28,1.04l-2.11,2.01l-2.03,5.18l-1.37,1.16l-1.15,3.18l-1.33,0.66l-1.46,-0.97l-1.21,0.16l-1.38,1.36l-0.91,0.24l-1.79,4.06l-2.33,0.81l-1.11,-0.07l-0.86,0.5l-1.71,-0.05l-1.19,-1.39l-0.89,-1.89l-1.77,-1.66l-3.95,-0.08l0.07,-5.21l0.42,-1.43l1.95,-2.3l-0.14,-0.91l0.43,-1.18l-0.53,-1.41l0.25,-2.92l0.72,-1.07l0.32,-1.34l0.46,-0.39l2.47,-0.28l2.34,0.89l1.15,1.02l1.28,0.04l1.22,-0.58l3.03,1.27l1.49,-0.14l1.36,-1.0l1.33,0.07l0.82,-0.35l3.45,0.8l1.82,-1.32l1.84,2.67l0.66,0.16Z",
        name: "Nigeria",
      },
      NZ: {
        path: "M857.8,379.65l1.86,3.12l0.44,0.18l0.3,-0.38l0.03,-1.23l0.38,0.27l0.57,2.31l2.02,0.94l1.81,0.27l1.57,-1.06l0.7,0.18l-1.15,3.59l-1.98,0.11l-0.74,1.2l0.2,1.11l-2.42,3.98l-1.49,0.92l-1.04,-0.85l1.21,-2.05l-0.81,-2.01l-2.63,-1.25l0.04,-0.57l1.82,-1.19l0.43,-2.34l-0.16,-2.03l-0.95,-1.82l-0.06,-0.72l-3.11,-3.64l-0.79,-1.52l1.56,1.45l1.76,0.66l0.65,2.34ZM853.83,393.59l0.57,1.24l0.59,0.16l1.42,-0.97l0.46,0.79l0.0,1.03l-2.47,3.48l-1.26,1.2l-0.06,0.5l0.55,0.87l-1.41,0.07l-2.33,1.38l-2.03,5.02l-3.02,2.16l-2.06,-0.06l-1.71,-1.04l-2.47,-0.2l-0.27,-0.73l1.22,-2.1l3.05,-2.94l1.62,-0.59l4.02,-2.82l1.57,-1.67l1.07,-2.16l0.88,-0.7l0.48,-1.75l1.24,-0.97l0.35,0.79Z",
        name: "New Zealand",
      },
      NP: {
        path: "M641.14,213.62l0.01,3.19l-1.74,0.04l-4.8,-0.86l-1.58,-1.39l-3.37,-0.34l-7.65,-3.7l0.8,-2.09l2.33,-1.7l1.77,0.75l2.49,1.76l1.38,0.41l0.99,1.35l1.9,0.52l1.99,1.17l5.49,0.9Z",
        name: "Nepal",
      },
      XK: {
        path: "M472.77,172.64l-1.08,-1.29l0.96,-0.77l0.29,-0.83l1.98,1.64l-0.36,0.67l-1.79,0.58Z",
        name: "Kosovo",
      },
      CI: {
        path: "M407.4,259.27l0.86,0.42l0.56,0.9l1.13,0.53l1.19,-0.61l0.97,-0.08l1.42,0.54l0.6,3.24l-1.03,2.08l-0.65,2.84l1.06,2.33l-0.06,0.53l-2.54,-0.47l-1.66,0.03l-3.06,0.46l-4.11,1.6l0.32,-3.06l-1.18,-1.31l-1.32,-0.66l0.42,-0.85l-0.2,-1.4l0.5,-0.67l0.01,-1.59l0.84,-0.32l0.26,-0.5l-1.15,-3.01l0.12,-0.5l0.51,-0.25l0.66,0.31l1.93,0.02l0.67,-0.71l0.71,-0.14l0.25,0.69l0.57,0.22l1.4,-0.61Z",
        name: "Côte d'Ivoire",
      },
      CH: {
        path: "M444.62,156.35l-0.29,0.87l0.18,0.53l1.13,0.58l1.0,0.1l-0.1,0.65l-0.79,0.38l-1.72,-0.37l-0.45,0.23l-0.45,1.04l-0.75,0.06l-0.84,-0.4l-1.32,1.0l-0.96,0.12l-0.88,-0.55l-0.81,-1.3l-0.49,-0.16l-0.63,0.26l0.02,-0.65l1.71,-1.66l0.1,-0.56l0.93,0.08l0.58,-0.46l1.99,0.02l0.66,-0.61l2.19,0.79Z",
        name: "Switzerland",
      },
      CO: {
        path: "M242.07,254.93l-1.7,0.59l-0.59,1.18l-1.7,1.69l-0.38,1.93l-0.67,1.43l0.31,0.57l1.03,0.13l0.25,0.9l0.57,0.64l-0.04,2.34l1.64,1.42l3.16,-0.24l1.26,0.28l1.67,2.06l0.41,0.13l4.09,-0.39l0.45,0.22l-0.92,1.95l-0.2,1.8l0.52,1.83l0.75,1.05l-1.12,1.1l0.07,0.63l0.84,0.51l0.74,1.29l-0.39,-0.45l-0.59,-0.01l-0.71,0.74l-4.71,-0.05l-0.4,0.41l0.03,1.57l0.33,0.39l1.11,0.2l-1.68,0.4l-0.29,0.38l-0.01,1.82l1.16,1.14l0.34,1.25l-1.05,7.05l-1.04,-0.87l1.26,-1.99l-0.13,-0.56l-2.18,-1.23l-1.38,0.2l-1.14,-0.38l-1.27,0.61l-1.55,-0.26l-1.38,-2.46l-1.23,-0.75l-0.85,-1.2l-1.67,-1.19l-0.86,0.13l-2.11,-1.32l-1.01,0.31l-1.8,-0.29l-0.52,-0.91l-3.09,-1.68l0.77,-0.52l-0.1,-1.12l0.41,-0.64l1.34,-0.32l2.0,-2.88l-0.11,-0.57l-0.66,-0.43l0.39,-1.38l-0.52,-2.1l0.49,-0.83l-0.4,-2.13l-0.97,-1.35l0.17,-0.66l0.86,-0.08l0.47,-0.75l-0.46,-1.63l1.41,-0.07l1.8,-1.69l0.93,-0.24l0.3,-0.38l0.45,-2.76l1.22,-1.0l1.44,-0.04l0.45,-0.5l1.91,0.12l2.93,-1.84l1.15,-1.14l0.91,0.46l-0.25,0.45Z",
        name: "Colombia",
      },
      CN: {
        path: "M740.23,148.97l4.57,1.3l2.8,2.17l0.98,2.9l0.38,0.27l3.8,0.0l2.32,-1.28l3.29,-0.75l-0.96,2.09l-1.02,1.28l-0.85,3.4l-1.52,2.73l-2.76,-0.5l-2.4,1.13l-0.21,0.45l0.64,2.57l-0.32,3.2l-0.94,0.06l-0.37,0.89l-0.91,-1.01l-0.64,0.07l-0.92,1.57l-3.73,1.25l-0.26,0.48l0.26,1.06l-1.5,-0.08l-1.09,-0.86l-0.56,0.06l-1.67,2.06l-2.7,1.56l-2.03,1.88l-3.4,0.83l-1.93,1.4l-1.15,0.34l0.33,-0.7l-0.41,-0.89l1.79,-1.79l0.02,-0.54l-1.32,-1.56l-0.48,-0.1l-2.24,1.09l-2.83,2.06l-1.51,1.83l-2.28,0.13l-1.55,1.49l-0.04,0.5l1.32,1.97l2.0,0.58l0.31,1.35l1.98,0.84l3.0,-1.96l2.0,1.02l1.49,0.11l0.22,0.83l-3.37,0.86l-1.12,1.48l-2.5,1.52l-1.29,1.99l0.14,0.56l2.57,1.48l0.97,2.7l3.17,4.63l-0.03,1.66l-1.35,0.65l-0.2,0.51l0.6,1.47l1.4,0.91l-0.89,3.82l-1.43,0.38l-3.85,6.44l-2.27,3.11l-6.78,4.57l-2.73,0.29l-1.45,1.04l-0.62,-0.61l-0.55,-0.01l-1.36,1.25l-3.39,1.27l-2.61,0.4l-1.1,2.79l-0.81,0.09l-0.49,-1.42l0.5,-0.85l-0.25,-0.59l-3.36,-0.84l-1.3,0.4l-2.31,-0.62l-0.94,-0.84l0.33,-1.28l-0.3,-0.49l-2.19,-0.46l-1.13,-0.93l-0.47,-0.02l-2.06,1.36l-4.29,0.28l-2.76,1.05l-0.28,0.43l0.32,2.53l-0.59,-0.03l-0.19,-1.34l-0.55,-0.34l-1.68,0.7l-2.46,-1.23l0.62,-1.87l-0.26,-0.51l-1.37,-0.44l-0.54,-2.22l-0.45,-0.3l-2.13,0.35l0.24,-2.48l2.39,-2.4l0.03,-4.31l-1.19,-0.92l-0.78,-1.49l-0.41,-0.21l-1.41,0.19l-1.98,-0.3l0.46,-1.07l-1.17,-1.7l-0.55,-0.11l-1.63,1.05l-2.25,-0.57l-2.89,1.73l-2.25,1.98l-1.75,0.29l-1.17,-0.71l-3.31,-0.65l-1.48,0.79l-1.04,1.27l-0.12,-1.17l-0.54,-0.34l-1.44,0.54l-5.55,-0.86l-1.98,-1.16l-1.89,-0.54l-0.99,-1.35l-1.34,-0.37l-2.55,-1.79l-2.01,-0.84l-1.21,0.56l-5.57,-3.45l-0.53,-2.31l1.19,0.25l0.48,-0.37l0.08,-1.42l-0.98,-1.56l0.15,-2.44l-2.69,-3.32l-4.12,-1.23l-0.67,-2.0l-1.92,-1.48l-0.38,-0.7l-0.51,-3.01l-1.52,-0.66l-0.7,0.13l-0.48,-2.05l0.55,-0.51l-0.09,-0.82l2.03,-1.19l1.6,-0.54l2.56,0.38l0.42,-0.22l0.85,-1.7l3.0,-0.33l1.1,-1.26l4.05,-1.77l0.39,-0.91l-0.17,-1.44l1.45,-0.67l0.2,-0.52l-2.07,-4.9l4.51,-1.12l1.37,-0.73l1.89,-5.51l4.98,0.86l1.51,-1.7l0.11,-2.87l1.99,-0.38l1.83,-2.06l0.49,-0.13l0.68,2.08l2.23,1.77l3.44,1.16l1.55,2.29l-0.92,3.49l0.96,1.67l6.54,1.13l2.95,1.87l1.47,0.35l1.06,2.62l1.53,1.91l3.05,0.08l5.14,0.67l3.37,-0.41l2.36,0.43l3.65,1.8l3.06,0.04l1.45,0.88l2.87,-1.59l3.95,-1.02l3.83,-0.14l3.06,-1.14l1.77,-1.6l1.72,-1.01l0.17,-0.49l-1.1,-2.05l1.02,-1.54l4.02,0.8l2.45,-1.61l3.76,-1.19l1.96,-2.13l1.63,-0.83l3.51,-0.4l1.92,0.34l0.46,-0.3l0.17,-1.5l-2.27,-2.22l-2.11,-1.09l-2.18,1.11l-2.32,-0.47l-1.29,0.32l-0.4,-0.82l2.73,-5.16l3.02,1.06l3.53,-2.06l0.18,-1.68l2.16,-3.35l1.49,-1.35l-0.03,-1.85l-1.07,-0.85l1.54,-1.26l2.98,-0.59l3.23,-0.09l3.64,0.99l2.04,1.16l3.29,6.71l0.92,3.19ZM696.92,237.31l-1.87,1.08l-1.63,-0.64l-0.06,-1.79l1.03,-0.98l2.58,-0.69l1.16,0.05l0.3,0.54l-0.98,1.06l-0.53,1.37Z",
        name: "China",
      },
      CM: {
        path: "M457.92,257.49l1.05,1.91l-1.4,0.16l-1.05,-0.23l-0.45,0.22l-0.54,1.19l0.08,0.45l1.48,1.47l1.05,0.45l1.01,2.46l-1.52,2.99l-0.68,0.68l-0.13,3.69l2.38,3.84l1.09,0.8l0.24,2.48l-3.67,-1.14l-11.27,-0.13l0.23,-1.79l-0.98,-1.66l-1.19,-0.54l-0.44,-0.97l-0.6,-0.42l1.71,-4.27l0.75,-0.13l1.38,-1.36l0.65,-0.03l1.71,0.99l1.93,-1.12l1.14,-3.18l1.38,-1.17l2.0,-5.14l2.17,-2.13l0.3,-1.64l-0.86,-0.88l0.03,-0.33l0.94,1.28l0.07,3.22Z",
        name: "Cameroon",
      },
      CL: {
        path: "M246.5,429.18l-3.14,1.83l-0.57,3.16l-0.64,0.05l-2.68,-1.06l-2.82,-2.33l-3.04,-1.89l-0.69,-1.85l0.63,-2.14l-1.21,-2.11l-0.31,-5.37l1.01,-2.91l2.57,-2.38l-0.18,-0.68l-3.16,-0.77l2.05,-2.47l0.77,-4.65l2.32,0.9l0.54,-0.29l1.31,-6.31l-0.22,-0.44l-1.68,-0.8l-0.56,0.28l-0.7,3.36l-0.81,-0.22l1.56,-9.41l1.15,-2.24l-0.71,-2.82l-0.18,-2.84l1.01,-0.33l3.26,-9.14l1.07,-4.22l-0.56,-4.21l0.74,-2.34l-0.29,-3.27l1.46,-3.34l2.04,-16.59l-0.66,-7.76l1.03,-0.53l0.54,-0.9l0.79,1.14l0.32,1.78l1.25,1.16l-0.69,2.55l1.33,2.9l0.97,3.59l0.46,0.29l1.5,-0.3l0.11,0.23l-0.76,2.44l-2.57,1.23l-0.23,0.37l0.08,4.33l-0.46,0.77l0.56,1.21l-1.58,1.51l-1.68,2.62l-0.89,2.47l0.2,2.7l-1.48,2.73l1.12,5.09l0.64,0.61l-0.01,2.29l-1.38,2.68l0.01,2.4l-1.89,2.04l0.02,2.75l0.69,2.57l-1.43,1.13l-1.26,5.68l0.39,3.51l-0.97,0.89l0.58,3.5l1.02,1.14l-0.65,1.02l0.15,0.57l1.0,0.53l0.16,0.69l-1.03,0.85l0.26,1.75l-0.89,4.03l-1.31,2.66l0.24,1.75l-0.71,1.83l-1.99,1.7l0.3,3.67l0.88,1.19l1.58,0.01l0.01,2.21l1.04,1.95l5.98,0.63ZM248.69,430.79l0.0,7.33l0.4,0.4l3.52,0.05l-0.44,0.75l-1.94,0.98l-2.49,-0.37l-1.88,-1.06l-2.55,-0.49l-5.59,-3.71l-2.38,-2.63l4.1,2.48l3.32,1.23l0.45,-0.12l1.29,-1.57l0.83,-2.32l2.05,-1.24l1.31,0.29Z",
        name: "Chile",
      },
      XC: {
        path: "M504.91,192.87l0.34,0.01l0.27,-0.07l-0.29,0.26l-0.31,-0.2Z",
        name: "N. Cyprus",
      },
      CA: {
        path: "M280.06,145.6l-1.67,2.88l0.07,0.49l0.5,0.04l1.46,-0.98l1.0,0.42l-0.56,0.72l0.17,0.62l2.22,0.89l1.35,-0.71l1.95,0.78l-0.66,2.01l0.5,0.51l1.32,-0.42l0.98,3.17l-0.91,2.41l-0.8,0.08l-1.23,-0.45l0.47,-2.25l-0.89,-0.83l-0.48,0.06l-2.78,2.63l-0.34,-0.02l1.02,-0.85l-0.14,-0.69l-2.4,-0.77l-7.4,0.08l-0.17,-0.41l1.3,-0.94l0.02,-0.64l-0.73,-0.58l1.85,-1.74l2.57,-5.16l1.47,-1.79l1.99,-1.05l0.46,0.06l-1.53,2.45ZM68.32,74.16l4.13,0.95l4.02,2.14l2.61,0.4l2.47,-1.89l2.88,-1.31l3.85,0.48l3.71,-1.94l3.82,-1.04l1.56,1.68l0.49,0.08l1.87,-1.04l0.65,-1.98l1.24,0.35l4.16,3.94l0.54,0.01l2.75,-2.49l0.26,2.59l0.49,0.35l3.08,-0.73l1.04,-1.27l2.73,0.23l3.83,1.86l5.86,1.61l3.47,0.75l2.44,-0.26l2.73,1.78l-2.98,1.81l-0.19,0.41l0.31,0.32l4.53,0.92l6.87,-0.5l2.0,-0.69l2.49,2.39l0.53,0.02l2.72,-2.16l-0.02,-0.64l-2.16,-1.54l1.15,-1.06l4.83,-0.61l1.84,0.95l2.48,2.31l3.01,-0.23l4.55,1.92l3.85,-0.67l3.61,0.1l0.41,-0.44l-0.25,-2.36l1.79,-0.61l3.49,1.32l-0.01,3.77l0.31,0.39l0.45,-0.22l1.48,-3.16l1.74,0.1l0.41,-0.3l1.13,-4.37l-2.78,-3.11l-2.8,-1.74l0.19,-4.64l2.71,-3.07l2.98,0.67l2.41,1.95l3.19,4.8l-1.99,1.97l0.21,0.68l4.33,0.84l-0.01,4.15l0.25,0.37l0.44,-0.09l3.07,-3.15l2.54,2.39l-0.61,3.33l2.42,2.88l0.61,0.0l2.61,-3.08l1.88,-3.82l0.17,-4.58l6.72,0.94l3.13,2.04l0.13,1.82l-1.76,2.19l-0.01,0.49l1.66,2.16l-0.26,1.71l-4.68,2.8l-3.28,0.61l-2.47,-1.2l-0.55,0.23l-0.73,2.04l-2.38,3.43l-0.74,1.77l-2.74,2.57l-3.44,0.25l-2.21,1.78l-0.28,2.53l-2.82,0.55l-3.12,3.22l-2.72,4.31l-1.03,3.17l-0.14,4.31l0.33,0.41l3.44,0.57l2.24,5.95l0.45,0.23l3.4,-0.69l4.52,1.51l2.43,1.31l1.91,1.73l3.1,0.96l2.62,1.46l6.6,0.54l-0.35,2.74l0.81,3.53l1.81,3.78l3.83,3.3l0.45,0.04l2.1,-1.28l1.37,-3.69l-1.31,-5.38l-1.45,-1.58l3.57,-1.47l2.84,-2.46l1.52,-2.8l-0.25,-2.55l-1.7,-3.07l-2.85,-2.61l2.8,-3.95l-1.08,-3.37l-0.79,-5.67l1.36,-0.7l6.76,1.41l2.12,-0.96l5.12,3.36l1.05,1.61l4.08,0.26l-0.06,2.87l0.83,4.7l0.3,0.32l2.16,0.54l1.73,2.06l0.5,0.09l3.63,-2.03l2.52,-4.19l1.26,-1.32l7.6,11.72l-0.92,2.04l0.16,0.51l3.3,1.97l2.22,1.98l4.1,0.98l1.43,0.99l0.95,2.79l2.1,0.68l0.84,1.08l0.17,3.45l-3.37,2.26l-4.22,1.24l-3.06,2.63l-4.06,0.51l-5.35,-0.69l-6.39,0.2l-2.3,2.41l-3.26,1.51l-6.47,7.15l-0.06,0.48l0.44,0.19l2.13,-0.52l4.17,-4.24l5.12,-2.62l3.52,-0.3l1.69,1.21l-2.12,2.21l0.81,3.47l1.02,2.61l3.47,1.6l4.14,-0.45l2.15,-2.8l0.26,1.48l1.14,0.8l-2.56,1.69l-5.5,1.82l-2.54,1.27l-2.74,2.15l-1.4,-0.16l-0.07,-2.01l4.14,-2.44l0.18,-0.45l-0.39,-0.29l-6.63,0.45l-1.39,-1.49l-0.14,-4.43l-1.11,-0.91l-1.82,0.39l-0.66,-0.66l-0.6,0.03l-1.91,2.39l-0.82,2.52l-0.8,1.27l-1.67,0.56l-0.46,0.76l-8.31,0.07l-1.21,0.62l-2.35,1.97l-0.71,-0.14l-1.37,0.96l-1.12,-0.48l-4.74,1.26l-0.9,1.17l0.21,0.62l1.73,0.3l-1.81,0.31l-1.85,0.81l-2.11,-0.13l-2.95,1.78l-0.69,-0.09l1.39,-2.1l1.73,-1.21l0.1,-2.29l1.16,-1.99l0.49,0.53l2.03,0.42l1.2,-1.16l0.02,-0.47l-2.66,-3.51l-2.28,-0.61l-5.64,-0.71l-0.4,-0.57l-0.79,0.13l0.2,-0.41l-0.22,-0.55l-0.68,-0.26l0.19,-1.26l-0.78,-0.73l0.31,-0.64l-0.29,-0.57l-2.6,-0.44l-0.75,-1.63l-0.94,-0.66l-4.31,-0.65l-1.13,1.19l-1.48,0.59l-0.85,1.06l-2.83,-0.76l-2.09,0.39l-2.39,-0.97l-4.24,-0.7l-0.57,-0.4l-0.41,-1.63l-0.4,-0.3l-0.85,0.02l-0.39,0.4l-0.01,0.85l-69.13,-0.01l-6.51,-4.52l-4.5,-1.38l-1.26,-2.66l0.33,-1.93l-0.23,-0.43l-3.01,-1.35l-0.55,-2.77l-2.89,-2.38l-0.04,-1.45l1.39,-1.83l-0.28,-2.55l-4.16,-2.2l-4.07,-6.6l-4.02,-3.22l-1.3,-1.88l-0.5,-0.13l-2.51,1.21l-2.23,1.87l-3.85,-3.88l-2.44,-1.04l-2.22,-0.13l0.03,-37.49ZM260.37,148.65l3.04,0.76l2.26,1.2l-3.78,-0.95l-1.53,-1.01ZM249.4,3.81l6.68,0.49l5.32,0.79l4.26,1.57l-0.07,1.1l-5.85,2.53l-6.02,1.21l-2.39,1.39l-0.18,0.45l0.39,0.29l4.01,-0.02l-4.65,2.82l-4.2,1.74l-4.19,4.59l-5.03,0.92l-1.67,1.15l-7.47,0.59l-0.37,0.37l0.32,0.42l2.41,0.49l-0.81,0.47l-0.12,0.59l1.83,2.41l-2.02,1.59l-3.81,1.51l-1.32,2.16l-3.38,1.53l-0.22,0.48l0.35,1.19l0.4,0.29l3.88,-0.18l0.03,0.61l-6.33,2.95l-6.41,-1.4l-7.43,0.79l-3.72,-0.62l-4.4,-0.25l-0.23,-1.83l4.29,-1.11l0.28,-0.51l-1.1,-3.45l1.0,-0.25l6.58,2.28l0.47,-0.16l-0.05,-0.49l-3.41,-3.45l-3.58,-0.98l1.48,-1.55l4.34,-1.29l0.97,-2.19l-0.16,-0.48l-3.42,-2.13l-0.81,-2.26l6.2,0.22l2.24,0.58l3.91,-2.1l0.2,-0.43l-0.35,-0.32l-5.64,-0.67l-8.73,0.36l-4.26,-1.9l-2.12,-2.4l-2.78,-1.66l-0.41,-1.52l3.31,-1.03l2.93,-0.2l4.91,-0.99l3.7,-2.27l2.87,0.3l2.62,1.67l0.56,-0.14l1.82,-3.2l3.13,-0.94l4.44,-0.69l7.53,-0.26l1.48,0.67l7.19,-1.06l10.8,0.79ZM203.85,57.54l0.01,0.42l1.97,2.97l0.68,-0.02l2.24,-3.72l5.95,-1.86l4.01,4.64l-0.35,2.91l0.5,0.43l4.95,-1.36l2.32,-1.8l5.31,2.28l3.27,2.11l0.3,1.84l0.48,0.33l4.42,-0.99l2.64,2.87l5.97,1.77l2.06,1.72l2.11,3.71l-4.19,1.86l-0.01,0.73l5.9,2.83l3.94,0.94l3.78,3.95l3.46,0.25l-0.63,2.37l-4.11,4.47l-2.76,-1.56l-3.9,-3.94l-3.59,0.41l-0.33,0.34l-0.19,2.72l2.63,2.38l3.42,1.89l0.94,0.97l1.55,3.75l-0.7,2.29l-2.74,-0.92l-6.25,-3.15l-0.51,0.13l0.05,0.52l6.07,5.69l0.18,0.59l-6.09,-1.39l-5.31,-2.24l-2.63,-1.66l0.6,-0.77l-0.12,-0.6l-7.39,-4.01l-0.59,0.37l0.03,0.79l-6.73,0.6l-1.69,-1.1l1.36,-2.46l4.51,-0.07l5.15,-0.52l0.31,-0.6l-0.74,-1.3l0.78,-1.84l3.21,-4.05l-0.67,-2.35l-1.11,-1.6l-3.84,-2.1l-4.35,-1.28l0.91,-0.63l0.06,-0.61l-2.65,-2.75l-2.34,-0.36l-1.89,-1.46l-0.53,0.03l-1.24,1.23l-4.36,0.55l-9.04,-0.99l-9.26,-1.98l-1.6,-1.22l2.22,-1.77l0.13,-0.44l-0.38,-0.27l-3.22,-0.02l-0.72,-4.25l1.83,-4.04l2.42,-1.85l5.5,-1.1l-1.39,2.35ZM261.19,159.33l2.07,0.61l1.44,-0.04l-1.15,0.63l-2.94,-1.23l-0.4,-0.68l0.36,-0.37l0.61,1.07ZM230.83,84.39l-2.37,0.18l-0.49,-1.63l0.93,-2.09l1.94,-0.51l1.62,0.99l0.02,1.52l-1.66,1.54ZM229.43,58.25l0.11,0.65l-4.87,-0.21l-2.72,0.62l-3.1,-2.57l0.08,-1.26l0.86,-0.23l5.57,0.51l4.08,2.5ZM222.0,105.02l-0.72,1.49l-0.63,-0.19l-0.48,-0.84l0.81,-0.99l0.65,0.05l0.37,0.46ZM183.74,38.32l2.9,1.7l4.79,-0.01l1.84,1.46l-0.49,1.68l0.23,0.48l2.82,1.14l1.76,1.26l7.01,0.65l4.1,-1.1l5.03,-0.43l3.93,0.35l2.48,1.77l0.46,1.7l-1.3,1.1l-3.56,1.01l-3.23,-0.59l-7.17,0.76l-5.09,0.09l-3.99,-0.6l-6.42,-1.54l-0.79,-2.51l-0.3,-2.49l-2.64,-2.5l-5.32,-0.72l-2.52,-1.4l0.68,-1.57l4.78,0.31ZM207.38,91.35l0.4,1.56l0.56,0.26l1.06,-0.52l1.32,0.96l5.42,2.57l0.2,1.68l0.46,0.35l1.68,-0.28l1.15,0.85l-1.55,0.87l-3.61,-0.88l-1.32,-1.69l-0.57,-0.06l-2.45,2.1l-3.12,1.79l-0.7,-1.87l-0.42,-0.26l-2.16,0.24l1.39,-1.39l0.32,-3.14l0.76,-3.35l1.18,0.22ZM215.49,102.6l-2.67,1.95l-1.4,-0.07l-0.3,-0.58l1.53,-1.48l2.84,0.18ZM202.7,24.12l2.53,1.59l-2.87,1.4l-4.53,4.05l-4.25,0.38l-5.03,-0.68l-2.45,-2.04l0.03,-1.62l1.82,-1.37l0.14,-0.45l-0.38,-0.27l-4.45,0.04l-2.59,-1.76l-1.41,-2.29l1.57,-2.32l1.62,-1.66l2.44,-0.39l0.25,-0.65l-0.6,-0.74l4.86,-0.25l3.24,3.11l8.16,2.3l1.9,3.61ZM187.47,59.2l-2.76,3.49l-2.38,-0.15l-1.44,-3.84l0.04,-2.2l1.19,-1.88l2.3,-1.23l5.07,0.17l4.11,1.02l-3.24,3.72l-2.88,0.89ZM186.07,48.79l-1.08,1.53l-3.34,-0.34l-2.56,-1.1l1.03,-1.75l3.25,-1.23l1.95,1.58l0.75,1.3ZM185.71,35.32l-5.3,-0.2l-0.32,-0.71l4.31,0.07l1.3,0.84ZM180.68,32.48l-3.34,1.0l-1.79,-1.1l-0.98,-1.87l-0.15,-1.73l4.1,0.53l2.67,1.7l-0.51,1.47ZM180.9,76.31l-1.1,1.08l-3.13,-1.23l-2.12,0.43l-2.71,-1.57l1.72,-1.09l1.55,-1.72l3.81,1.9l1.98,2.2ZM169.74,54.87l2.96,0.97l4.17,-0.57l0.41,0.88l-2.14,2.11l0.09,0.64l3.55,1.92l-0.4,3.72l-3.79,1.65l-2.17,-0.35l-1.72,-1.74l-6.02,-3.5l0.03,-0.85l4.68,0.54l0.4,-0.21l-0.05,-0.45l-2.48,-2.81l2.46,-1.95ZM174.45,40.74l1.37,1.73l0.07,2.44l-1.05,3.45l-3.79,0.47l-2.32,-0.69l0.05,-2.64l-0.44,-0.41l-3.68,0.35l-0.12,-3.1l2.45,0.1l3.67,-1.73l3.41,0.29l0.37,-0.26ZM170.05,31.55l0.67,1.56l-3.33,-0.49l-4.22,-1.77l-4.35,-0.16l1.4,-0.94l-0.06,-0.7l-2.81,-1.23l-0.12,-1.39l4.39,0.68l6.62,1.98l1.81,2.47ZM134.5,58.13l-1.02,1.82l0.45,0.58l5.4,-1.39l3.33,2.29l0.49,-0.03l2.6,-2.23l1.94,1.32l2.0,4.5l0.7,0.06l1.3,-2.29l-1.63,-4.46l1.69,-0.54l2.31,0.71l2.65,1.81l2.49,7.92l8.48,4.27l-0.19,1.35l-3.79,0.33l-0.26,0.67l1.4,1.49l-0.58,1.1l-4.23,-0.64l-4.43,-1.19l-3.0,0.28l-4.66,1.47l-10.52,1.04l-1.43,-2.02l-3.42,-1.2l-2.21,0.43l-2.51,-2.86l4.84,-1.05l3.6,0.19l3.27,-0.78l0.31,-0.39l-0.31,-0.39l-4.84,-1.06l-8.79,0.27l-0.85,-1.07l5.26,-1.66l0.27,-0.45l-0.4,-0.34l-3.8,0.06l-3.81,-1.06l1.81,-3.01l1.66,-1.79l6.48,-2.81l1.97,0.71ZM158.7,56.61l-1.7,2.44l-3.2,-2.75l0.37,-0.3l3.11,-0.18l1.42,0.79ZM149.61,42.73l1.01,1.89l0.5,0.18l2.14,-0.82l2.23,0.19l0.36,2.04l-1.33,2.09l-8.28,0.76l-6.35,2.15l-3.41,0.1l-0.19,-0.96l4.9,-2.08l0.23,-0.46l-0.41,-0.31l-11.25,0.59l-2.89,-0.74l3.04,-4.44l2.14,-1.32l6.81,1.69l4.58,3.06l4.37,0.39l0.36,-0.63l-3.36,-4.6l1.85,-1.53l2.18,0.51l0.77,2.26ZM144.76,34.41l-4.36,1.44l-3.0,-1.4l1.46,-1.24l3.47,-0.52l2.96,0.71l-0.52,1.01ZM145.13,29.83l-1.9,0.66l-3.67,-0.0l2.27,-1.61l3.3,0.95ZM118.92,65.79l-6.03,2.02l-1.33,-1.9l-5.38,-2.28l2.59,-5.05l2.16,-3.14l-0.02,-0.48l-1.97,-2.41l7.64,-0.7l3.6,1.02l6.3,0.27l4.42,2.95l-2.53,0.98l-6.24,3.43l-3.1,3.28l-0.11,2.01ZM129.54,35.53l-0.28,3.37l-1.72,1.62l-2.33,0.28l-4.61,2.19l-3.86,0.76l-2.64,-0.87l3.72,-3.4l5.01,-3.34l3.72,0.07l3.0,-0.67ZM111.09,152.69l-0.67,0.24l-3.85,-1.37l-0.83,-1.17l-2.12,-1.07l-0.66,-1.02l-2.4,-0.55l-0.74,-1.71l6.02,1.45l2.0,2.55l2.52,1.39l0.73,1.27ZM87.8,134.64l0.89,0.29l1.86,-0.21l-0.65,3.34l1.69,2.33l-1.31,-1.33l-0.99,-1.62l-1.17,-0.98l-0.33,-1.82Z",
        name: "Canada",
      },
      CG: {
        path: "M466.72,276.48l-0.1,1.03l-1.25,2.97l-0.19,3.62l-0.46,1.78l-0.23,0.63l-1.61,1.19l-1.21,1.39l-1.09,2.43l0.04,2.09l-3.25,3.24l-0.5,-0.24l-0.5,-0.83l-1.36,-0.02l-0.98,0.89l-1.68,-0.99l-1.54,1.24l-1.52,-1.96l1.57,-1.14l0.11,-0.52l-0.77,-1.35l2.1,-0.66l0.39,-0.73l1.05,0.82l2.21,0.11l1.12,-1.37l0.37,-1.81l-0.27,-2.09l-1.13,-1.5l1.0,-2.69l-0.13,-0.45l-0.92,-0.58l-1.6,0.17l-0.51,-0.94l0.1,-0.61l2.75,0.09l3.97,1.24l0.51,-0.33l0.17,-1.28l1.24,-2.21l1.28,-1.14l2.76,0.49Z",
        name: "Congo",
      },
      CF: {
        path: "M461.16,278.2l-0.26,-1.19l-1.09,-0.77l-0.84,-1.17l-0.29,-1.0l-1.04,-1.15l0.08,-3.43l0.58,-0.49l1.16,-2.35l1.85,-0.17l0.61,-0.62l0.97,0.58l3.15,-0.96l2.48,-1.92l0.02,-0.96l2.81,0.02l2.36,-1.17l1.93,-2.85l1.16,-0.93l1.11,-0.3l0.27,0.86l1.34,1.47l-0.39,2.01l0.3,1.01l4.01,2.75l0.17,0.93l2.63,2.31l0.6,1.44l2.08,1.4l-3.84,-0.21l-1.94,0.88l-1.23,-0.49l-2.67,1.2l-1.29,-0.18l-0.51,0.36l-0.6,1.22l-3.35,-0.65l-1.57,-0.91l-2.42,-0.83l-1.45,0.91l-0.97,1.27l-0.26,1.56l-3.22,-0.43l-1.49,1.33l-0.94,1.62Z",
        name: "Central African Rep.",
      },
      CD: {
        path: "M487.01,272.38l2.34,-0.14l1.35,1.84l1.34,0.45l0.86,-0.39l1.21,0.12l1.07,-0.41l0.54,0.89l2.04,1.54l-0.14,2.72l0.7,0.54l-1.38,1.13l-1.53,2.54l-0.17,2.05l-0.59,1.08l-0.02,1.72l-0.72,0.84l-0.66,3.01l0.63,1.32l-0.44,4.26l0.64,1.47l-0.37,1.22l0.86,1.8l1.53,1.41l0.3,1.26l0.44,0.5l-4.08,0.75l-0.92,1.81l0.51,1.34l-0.74,5.43l0.17,0.38l2.45,1.46l0.54,-0.1l0.12,1.62l-1.28,-0.01l-1.85,-2.35l-1.94,-0.45l-0.48,-1.13l-0.55,-0.2l-1.41,0.74l-1.71,-0.3l-1.01,-1.18l-2.49,-0.19l-0.44,-0.77l-1.98,-0.21l-2.88,0.36l0.11,-2.41l-0.85,-1.13l-0.16,-1.36l0.32,-1.73l-0.46,-0.89l-0.04,-1.49l-0.4,-0.39l-2.53,0.02l0.1,-0.41l-0.39,-0.49l-1.28,0.01l-0.43,0.45l-1.62,0.32l-0.83,1.79l-1.09,-0.28l-2.4,0.52l-1.37,-1.91l-1.3,-3.3l-0.38,-0.27l-7.39,-0.03l-2.46,0.42l0.5,-0.45l0.37,-1.47l0.66,-0.38l0.92,0.08l0.73,-0.82l0.87,0.02l0.31,0.68l1.4,0.36l3.59,-3.63l0.01,-2.23l1.02,-2.29l2.69,-2.39l0.43,-0.99l0.49,-1.96l0.17,-3.51l1.25,-2.95l0.36,-3.14l0.86,-1.13l1.1,-0.66l3.57,1.73l3.65,0.73l0.46,-0.21l0.8,-1.46l1.24,0.19l2.61,-1.17l0.81,0.44l1.04,-0.03l0.59,-0.66l0.7,-0.16l1.81,0.25Z",
        name: "Dem. Rep. Congo",
      },
      CZ: {
        path: "M458.46,144.88l1.22,1.01l1.47,0.23l0.13,0.93l1.36,0.68l0.54,-0.2l0.24,-0.55l1.15,0.25l0.53,1.09l1.68,0.18l0.6,0.84l-1.04,0.73l-0.96,1.28l-1.6,0.17l-0.55,0.56l-1.04,-0.46l-1.05,0.15l-2.12,-0.96l-1.05,0.34l-1.2,1.12l-1.56,-0.87l-2.57,-2.1l-0.53,-1.88l4.7,-2.52l0.71,0.26l0.9,-0.28Z",
        name: "Czech Rep.",
      },
      CY: {
        path: "M504.36,193.47l0.43,0.28l-1.28,0.57l-0.92,-0.28l-0.24,-0.46l2.01,-0.13Z",
        name: "Cyprus",
      },
      CR: {
        path: "M211.34,258.05l0.48,0.99l1.6,1.6l-0.54,0.45l0.29,1.42l-0.25,1.19l-1.09,-0.59l-0.05,-1.25l-2.46,-1.42l-0.28,-0.77l-0.66,-0.45l-0.45,-0.0l-0.11,1.04l-1.32,-0.95l0.31,-1.3l-0.36,-0.6l0.31,-0.27l1.42,0.58l1.29,-0.14l0.56,0.56l0.74,0.17l0.55,-0.27Z",
        name: "Costa Rica",
      },
      CU: {
        path: "M221.21,227.25l1.27,1.02l2.19,-0.28l4.43,3.33l2.08,0.43l-0.1,0.38l0.36,0.5l1.75,0.1l1.48,0.84l-3.11,0.51l-4.15,-0.03l0.77,-0.67l-0.04,-0.64l-1.2,-0.74l-1.49,-0.16l-0.7,-0.61l-0.56,-1.4l-0.4,-0.25l-1.34,0.1l-2.2,-0.66l-0.88,-0.58l-3.18,-0.4l-0.27,-0.16l0.58,-0.74l-0.36,-0.29l-2.72,-0.05l-1.7,1.29l-0.91,0.03l-0.61,0.69l-1.01,0.22l1.11,-1.29l1.01,-0.52l3.69,-1.01l3.98,0.21l2.21,0.84Z",
        name: "Cuba",
      },
      SZ: {
        path: "M500.35,351.36l0.5,2.04l-0.38,0.89l-1.05,0.21l-1.23,-1.2l-0.02,-0.64l0.83,-1.57l1.34,0.27Z",
        name: "Swaziland",
      },
      SY: {
        path: "M511.0,199.79l0.05,-1.33l0.54,-1.36l1.28,-0.99l0.13,-0.45l-0.41,-1.11l-1.14,-0.36l-0.19,-1.74l0.52,-1.0l1.29,-1.21l0.2,-1.18l0.59,0.23l2.62,-0.76l1.36,0.52l2.06,-0.01l2.95,-1.08l3.25,-0.26l-0.67,0.94l-1.28,0.66l-0.21,0.4l0.23,2.01l-0.88,3.19l-10.15,5.73l-2.15,-0.85Z",
        name: "Syria",
      },
      KG: {
        path: "M621.35,172.32l-3.87,1.69l-0.96,1.18l-3.04,0.34l-1.13,1.86l-2.36,-0.35l-1.99,0.63l-2.39,1.4l0.06,0.95l-0.4,0.37l-4.52,0.43l-3.02,-0.93l-2.37,0.17l0.11,-0.79l2.32,0.42l1.13,-0.88l1.99,0.2l3.21,-2.14l-0.03,-0.69l-2.97,-1.57l-1.94,0.65l-1.22,-0.74l1.71,-1.58l-0.12,-0.67l-0.36,-0.15l0.32,-0.77l1.36,-0.35l4.02,1.02l0.49,-0.3l0.35,-1.59l1.09,-0.48l3.42,1.22l1.11,-0.31l7.64,0.39l1.16,1.0l1.23,0.39Z",
        name: "Kyrgyzstan",
      },
      KE: {
        path: "M506.26,284.69l1.87,-2.56l0.93,-2.15l-1.38,-4.08l-1.06,-1.6l2.82,-2.75l0.79,0.26l0.12,1.41l0.86,0.83l1.9,0.11l3.28,2.13l3.57,0.44l1.05,-1.12l1.96,-0.9l0.82,0.68l1.16,0.09l-1.78,2.45l0.03,9.12l1.3,1.94l-1.37,0.78l-0.67,1.03l-1.08,0.46l-0.34,1.67l-0.81,1.07l-0.45,1.55l-0.68,0.56l-3.2,-2.23l-0.35,-1.58l-8.86,-4.98l0.14,-1.6l-0.57,-1.04Z",
        name: "Kenya",
      },
      SS: {
        path: "M481.71,263.34l1.07,-0.72l1.2,-3.18l1.36,-0.26l1.61,1.99l0.87,0.34l1.1,-0.41l1.5,0.07l0.57,0.53l2.49,0.0l0.44,-0.63l1.07,-0.4l0.45,-0.84l0.59,-0.33l1.9,1.33l1.6,-0.2l2.83,-3.33l-0.32,-2.21l1.59,-0.52l-0.24,1.6l0.3,1.83l1.35,1.18l0.2,1.87l0.35,0.41l0.02,1.53l-0.23,0.47l-1.42,0.25l-0.85,1.44l0.3,0.6l1.4,0.16l1.11,1.08l0.59,1.13l1.03,0.53l1.28,2.36l-4.41,3.98l-1.74,0.01l-1.89,0.55l-1.47,-0.52l-1.15,0.57l-2.96,-2.62l-1.3,0.49l-1.06,-0.15l-0.79,0.39l-0.82,-0.22l-1.8,-2.7l-1.91,-1.1l-0.66,-1.5l-2.62,-2.32l-0.18,-0.94l-2.37,-1.6Z",
        name: "S. Sudan",
      },
      SR: {
        path: "M283.12,270.19l2.1,0.53l-1.08,1.95l0.2,1.72l0.93,1.49l-0.59,2.03l-0.43,0.71l-1.12,-0.42l-1.32,0.22l-0.93,-0.2l-0.46,0.26l-0.25,0.73l0.33,0.7l-0.89,-0.13l-1.39,-1.97l-0.31,-1.34l-0.97,-0.31l-0.89,-1.47l0.35,-1.61l1.45,-0.82l0.33,-1.87l2.61,0.44l0.57,-0.47l1.75,-0.16Z",
        name: "Suriname",
      },
      KH: {
        path: "M689.52,249.39l0.49,1.45l-0.28,2.74l-4.0,1.86l-0.16,0.6l0.68,0.95l-2.06,0.17l-2.05,0.97l-1.82,-0.32l-2.12,-3.7l-0.55,-2.85l1.4,-1.85l3.02,-0.45l2.23,0.35l2.01,0.98l0.51,-0.14l0.95,-1.48l1.74,0.74Z",
        name: "Cambodia",
      },
      SV: {
        path: "M195.8,250.13l1.4,-1.19l2.24,1.45l0.98,-0.27l0.44,0.2l-0.27,1.05l-1.14,-0.03l-3.64,-1.21Z",
        name: "El Salvador",
      },
      SK: {
        path: "M476.82,151.17l-1.14,1.9l-2.73,-0.92l-0.82,0.2l-0.74,0.8l-3.46,0.73l-0.47,0.69l-1.76,0.33l-1.88,-1.0l-0.18,-0.81l0.38,-0.75l1.87,-0.32l1.74,-1.89l0.83,0.16l0.79,-0.34l1.51,1.04l1.34,-0.63l1.25,0.3l1.65,-0.42l1.81,0.95Z",
        name: "Slovakia",
      },
      KR: {
        path: "M737.51,185.84l0.98,-0.1l0.87,-1.17l2.69,-0.32l0.33,-0.29l1.76,2.79l0.58,1.76l0.02,3.12l-0.8,1.32l-2.21,0.55l-1.93,1.13l-1.8,0.19l-0.2,-1.1l0.43,-2.28l-0.95,-2.56l1.43,-0.37l0.23,-0.62l-1.43,-2.06Z",
        name: "Korea",
      },
      SI: {
        path: "M456.18,162.07l-0.51,-1.32l0.18,-1.05l1.69,0.2l1.42,-0.71l2.09,-0.07l0.62,-0.51l0.21,0.47l-1.61,0.67l-0.44,1.34l-0.66,0.24l-0.26,0.82l-1.22,-0.49l-0.84,0.46l-0.69,-0.04Z",
        name: "Slovenia",
      },
      KP: {
        path: "M736.77,185.16l-0.92,-0.42l-0.88,0.62l-1.21,-0.88l0.96,-1.15l0.59,-2.59l-0.46,-0.74l-2.09,-0.77l1.64,-1.52l2.72,-1.58l1.58,-1.91l1.11,0.78l2.17,0.11l0.41,-0.5l-0.3,-1.22l3.52,-1.18l0.94,-1.4l0.98,1.08l-2.19,2.18l0.01,2.14l-1.06,0.54l-1.41,1.4l-1.7,0.52l-1.25,1.09l-0.14,1.98l0.94,0.45l1.15,1.04l-0.13,0.26l-2.6,0.29l-1.13,1.29l-1.22,0.08Z",
        name: "Dem. Rep. Korea",
      },
      KW: {
        path: "M540.81,207.91l0.37,0.86l-0.17,0.76l0.6,1.53l-0.95,0.04l-0.82,-1.28l-1.57,-0.18l1.31,-1.88l1.22,0.17Z",
        name: "Kuwait",
      },
      SN: {
        path: "M390.09,248.21l0.12,1.55l0.49,1.46l0.96,0.82l0.05,1.28l-1.26,-0.19l-0.75,0.33l-1.84,-0.61l-5.84,-0.13l-2.54,0.51l-0.22,-1.03l1.77,0.04l2.01,-0.91l1.03,0.48l1.09,0.04l1.29,-0.62l0.14,-0.58l-0.51,-0.74l-1.81,0.25l-1.13,-0.63l-0.79,0.04l-0.72,0.61l-2.31,0.06l-0.92,-1.77l-0.81,-0.64l0.64,-0.35l2.46,-3.74l1.04,0.19l1.38,-0.56l1.19,-0.02l2.72,1.37l3.03,3.48Z",
        name: "Senegal",
      },
      SL: {
        path: "M394.46,264.11l-1.73,1.98l-0.58,1.33l-2.07,-1.06l-1.22,-1.26l-0.65,-2.39l1.16,-0.96l0.67,-1.17l1.21,-0.52l1.66,0.0l1.03,1.64l0.52,2.41Z",
        name: "Sierra Leone",
      },
      KZ: {
        path: "M552.8,172.89l0.46,-1.27l-0.48,-1.05l-2.96,-1.19l-1.06,-2.58l-1.37,-0.87l-0.03,-0.3l1.95,0.23l0.45,-0.38l0.08,-1.96l1.75,-0.41l2.1,0.45l0.48,-0.33l0.45,-3.04l-0.45,-2.09l-0.41,-0.31l-2.42,0.15l-2.36,-0.73l-2.87,1.37l-2.17,0.61l-0.85,-0.34l0.13,-1.61l-1.6,-2.12l-2.02,-0.08l-1.78,-1.82l1.29,-2.18l-0.57,-0.95l1.62,-2.91l2.21,1.63l0.63,-0.27l0.29,-2.22l4.92,-3.43l3.71,-0.08l8.4,3.6l2.92,-1.36l3.77,-0.06l3.11,1.66l0.51,-0.11l0.6,-0.81l3.31,0.13l0.39,-0.25l0.63,-1.57l-0.17,-0.5l-3.5,-1.98l1.87,-1.27l-0.13,-1.03l1.98,-0.72l0.18,-0.62l-1.59,-2.06l0.81,-0.82l9.23,-1.18l1.33,-0.88l6.18,-1.26l2.26,-1.42l4.08,0.68l0.73,3.33l0.51,0.3l2.48,-0.8l2.79,1.02l-0.17,1.56l0.43,0.44l2.55,-0.24l4.89,-2.53l0.03,0.32l3.15,2.61l5.56,8.47l0.65,0.02l1.12,-1.46l3.15,1.74l3.76,-0.78l1.15,0.49l1.14,1.8l1.84,0.76l0.99,1.29l3.35,-0.25l1.02,1.52l-1.6,1.81l-1.93,0.28l-0.34,0.38l-0.11,3.05l-1.13,1.16l-4.75,-1.0l-0.46,0.27l-1.76,5.47l-1.1,0.59l-4.91,1.23l-0.27,0.54l2.1,4.97l-1.37,0.63l-0.23,0.41l0.13,1.13l-0.88,-0.25l-1.42,-1.13l-7.89,-0.4l-0.92,0.31l-3.73,-1.22l-1.42,0.63l-0.53,1.66l-3.72,-0.94l-1.85,0.43l-0.76,1.4l-4.65,2.62l-1.13,2.08l-0.44,0.01l-0.92,-1.4l-2.87,-0.09l-0.45,-2.14l-0.38,-0.32l-0.8,-0.01l0.0,-2.96l-3.0,-2.22l-7.31,0.58l-2.35,-2.68l-6.71,-3.69l-6.45,1.83l-0.29,0.39l0.1,10.85l-0.7,0.08l-1.62,-2.17l-1.83,-0.96l-3.11,0.59l-0.64,0.51Z",
        name: "Kazakhstan",
      },
      SA: {
        path: "M537.53,210.34l2.0,0.24l0.9,1.32l1.49,-0.06l0.87,2.08l1.29,0.76l0.51,0.99l1.56,1.03l-0.1,1.9l0.32,0.9l1.58,2.47l0.76,0.53l0.7,-0.04l1.68,4.23l7.53,1.33l0.51,-0.29l0.77,1.25l-1.55,4.87l-7.29,2.52l-7.3,1.03l-2.34,1.17l-1.88,2.74l-0.76,0.28l-0.82,-0.78l-0.91,0.12l-2.88,-0.51l-3.51,0.25l-0.86,-0.56l-0.57,0.15l-0.66,1.27l0.16,1.11l-0.43,0.32l-0.93,-1.4l-0.33,-1.16l-1.23,-0.88l-1.27,-2.06l-0.78,-2.22l-1.73,-1.79l-1.14,-0.48l-1.54,-2.31l-0.21,-3.41l-1.44,-2.93l-1.27,-1.16l-1.33,-0.57l-1.31,-3.37l-0.77,-0.67l-0.97,-1.97l-2.8,-4.03l-1.06,-0.17l0.37,-1.96l0.2,-0.72l2.74,0.3l1.08,-0.84l0.6,-0.94l1.74,-0.35l0.65,-1.03l0.71,-0.4l0.1,-0.62l-2.06,-2.28l4.39,-1.22l0.48,-0.37l2.77,0.69l3.66,1.9l7.03,5.5l4.87,0.3Z",
        name: "Saudi Arabia",
      },
      SE: {
        path: "M480.22,89.3l-4.03,1.17l-2.43,2.86l0.26,2.57l-8.77,6.64l-1.78,5.79l1.78,2.68l2.22,1.96l-2.07,3.77l-2.72,1.13l-0.95,6.04l-1.29,3.01l-2.74,-0.31l-0.4,0.22l-1.31,2.59l-2.34,0.13l-0.75,-3.09l-2.08,-4.03l-1.83,-4.96l1.0,-1.93l2.14,-2.7l0.83,-4.45l-1.6,-2.17l-0.15,-4.94l1.48,-3.39l2.58,-0.15l0.87,-1.59l-0.78,-1.57l3.76,-5.59l4.04,-7.48l2.17,0.01l0.39,-0.29l0.57,-2.07l4.37,0.64l0.46,-0.34l0.33,-2.56l1.1,-0.13l6.94,4.87l0.06,6.32l0.66,1.36Z",
        name: "Sweden",
      },
      SD: {
        path: "M505.98,259.4l-0.34,-0.77l-1.17,-0.9l-0.26,-1.61l0.29,-1.81l-0.34,-0.46l-1.16,-0.17l-0.54,0.59l-1.23,0.11l-0.28,0.65l0.53,0.65l0.17,1.22l-2.44,3.0l-0.96,0.19l-2.39,-1.4l-0.95,0.52l-0.38,0.78l-1.11,0.41l-0.29,0.5l-1.94,0.0l-0.54,-0.52l-1.81,-0.09l-0.95,0.4l-2.45,-2.35l-2.07,0.54l-0.73,1.26l-0.6,2.1l-1.25,0.58l-0.75,-0.62l0.27,-2.65l-1.48,-1.78l-0.22,-1.48l-0.92,-0.96l-0.02,-1.29l-0.57,-1.16l-0.68,-0.16l0.69,-1.29l-0.18,-1.14l0.65,-0.62l0.03,-0.55l-0.36,-0.41l1.55,-2.97l1.91,0.16l0.43,-0.4l-0.1,-10.94l2.49,-0.01l0.4,-0.4l-0.0,-4.82l29.02,0.0l0.64,2.04l-0.49,0.66l0.36,2.69l0.93,3.16l2.12,1.55l-0.89,1.04l-1.72,0.39l-0.98,0.9l-1.43,5.65l0.24,1.15l-0.38,2.06l-0.96,2.38l-1.53,1.31l-1.32,2.91l-1.22,0.86l-0.37,1.34Z",
        name: "Sudan",
      },
      DO: {
        path: "M241.8,239.2l0.05,-0.65l-0.46,-0.73l0.42,-0.44l0.19,-1.0l-0.09,-1.53l1.66,0.01l1.99,0.63l0.33,0.67l1.28,0.19l0.33,0.76l1.0,0.08l0.8,0.62l-0.45,0.51l-1.13,-0.47l-1.88,-0.01l-1.27,0.59l-0.75,-0.55l-1.01,0.54l-0.79,1.4l-0.23,-0.61Z",
        name: "Dominican Rep.",
      },
      DJ: {
        path: "M528.43,256.18l-0.45,0.66l-0.58,-0.25l-1.51,0.13l-0.18,-1.01l1.45,-1.95l0.83,0.17l0.77,-0.44l0.2,1.0l-1.2,0.51l-0.06,0.7l0.73,0.47Z",
        name: "Djibouti",
      },
      DK: {
        path: "M452.28,129.07l-1.19,2.24l-2.13,-1.6l-0.23,-0.95l2.98,-0.95l0.57,1.26ZM447.74,126.31l-0.26,0.57l-0.88,-0.07l-1.8,2.53l0.48,1.69l-1.09,0.36l-1.61,-0.39l-0.89,-1.69l-0.07,-3.43l0.96,-1.73l2.02,-0.2l1.09,-1.07l1.33,-0.67l-0.05,1.06l-0.73,1.41l0.3,1.0l1.2,0.64Z",
        name: "Denmark",
      },
      DE: {
        path: "M453.14,155.55l-0.55,-0.36l-1.2,-0.1l-1.87,0.57l-2.13,-0.13l-0.56,0.63l-0.86,-0.6l-0.96,0.09l-2.57,-0.93l-0.85,0.67l-1.47,-0.02l0.24,-1.75l1.23,-2.14l-0.28,-0.59l-3.52,-0.58l-0.92,-0.66l0.12,-1.2l-0.48,-0.88l0.27,-2.17l-0.37,-3.03l1.41,-0.22l0.63,-1.26l0.66,-3.19l-0.41,-1.18l0.26,-0.39l1.66,-0.15l0.33,0.54l0.62,0.07l1.7,-1.69l-0.54,-3.02l1.37,0.33l1.31,-0.37l0.31,1.18l2.25,0.71l-0.02,0.92l0.5,0.4l2.55,-0.65l1.34,-0.87l2.57,1.24l1.06,0.98l0.48,1.44l-0.57,0.74l-0.0,0.48l0.87,1.15l0.57,1.64l-0.14,1.29l0.82,1.7l-1.5,-0.07l-0.56,0.57l-4.47,2.15l-0.22,0.54l0.68,2.26l2.58,2.16l-0.66,1.11l-0.79,0.36l-0.23,0.43l0.32,1.87Z",
        name: "Germany",
      },
      YE: {
        path: "M528.27,246.72l0.26,-0.42l-0.22,-1.01l0.19,-1.5l0.92,-0.69l-0.07,-1.35l0.39,-0.75l1.01,0.47l3.34,-0.27l3.76,0.41l0.95,0.81l1.36,-0.58l1.74,-2.62l2.18,-1.09l6.86,-0.94l2.48,5.41l-1.64,0.76l-0.56,1.9l-6.23,2.16l-2.29,1.8l-1.93,0.05l-1.41,1.02l-4.24,0.74l-1.72,1.49l-3.28,0.19l-0.52,-1.18l0.02,-1.51l-1.34,-3.29Z",
        name: "Yemen",
      },
      DZ: {
        path: "M441.46,188.44l-0.32,1.07l0.39,2.64l-0.54,2.16l-1.58,1.82l0.37,2.39l1.91,1.55l0.18,0.8l1.42,1.03l1.84,7.23l0.12,1.16l-0.57,5.0l0.2,1.51l-0.87,0.99l-0.02,0.51l1.41,1.86l0.14,1.2l0.89,1.48l0.5,0.16l0.98,-0.41l1.73,1.08l0.82,1.23l-8.22,4.81l-7.23,5.11l-3.43,1.13l-2.3,0.21l-0.28,-1.59l-2.56,-1.09l-0.67,-1.25l-26.12,-17.86l0.01,-3.47l3.77,-1.88l2.44,-0.41l2.12,-0.75l1.08,-1.42l2.81,-1.05l0.35,-2.08l1.33,-0.29l1.04,-0.94l3.47,-0.69l0.46,-1.08l-0.1,-0.45l-0.58,-0.52l-0.82,-2.81l-0.19,-1.83l-0.78,-1.49l2.03,-1.31l2.63,-0.48l1.7,-1.22l2.31,-0.84l8.24,-0.73l1.49,0.38l2.28,-1.1l2.46,-0.02l0.92,0.6l1.35,-0.05Z",
        name: "Algeria",
      },
      US: {
        path: "M892.72,99.2l1.31,0.53l1.41,-0.37l1.89,0.98l1.89,0.42l-1.32,0.58l-2.9,-1.53l-2.08,0.22l-0.26,-0.15l0.07,-0.67ZM183.22,150.47l0.37,1.47l1.12,0.85l4.23,0.7l2.39,0.98l2.17,-0.38l1.85,0.5l-1.55,0.65l-3.49,2.61l-0.16,0.77l0.5,0.39l2.33,-0.61l1.77,1.02l5.15,-2.4l-0.31,0.65l0.25,0.56l1.36,0.38l1.71,1.16l4.7,-0.88l0.67,0.85l1.31,0.21l0.58,0.58l-1.34,0.17l-2.18,-0.32l-3.6,0.89l-2.71,3.25l0.35,0.9l0.59,-0.0l0.55,-0.6l-1.36,4.65l0.29,3.09l0.67,1.58l0.61,0.45l1.77,-0.44l1.6,-1.96l0.14,-2.21l-0.82,-1.96l0.11,-1.13l1.19,-2.37l0.44,-0.33l0.48,0.75l0.4,-0.29l0.4,-1.37l0.6,-0.47l0.24,-0.8l1.69,0.49l1.65,1.08l-0.03,2.37l-1.27,1.13l-0.0,1.13l0.87,0.36l1.66,-1.29l0.5,0.17l0.5,2.6l-2.49,3.75l0.17,0.61l1.54,0.62l1.48,0.17l1.92,-0.44l4.72,-2.15l2.16,-1.8l-0.05,-1.24l0.75,-0.22l3.92,0.36l2.12,-1.05l0.21,-0.4l-0.28,-1.48l3.27,-2.4l8.32,-0.02l0.56,-0.82l1.9,-0.77l0.93,-1.51l0.74,-2.37l1.58,-1.98l0.92,0.62l1.47,-0.47l0.8,0.66l-0.0,4.09l1.96,2.6l-2.34,1.31l-5.37,2.09l-1.83,2.72l0.02,1.79l0.83,1.59l0.54,0.23l-6.19,0.94l-2.2,0.89l-0.23,0.48l0.45,0.29l2.99,-0.46l-2.19,0.56l-1.13,0.0l-0.15,-0.32l-0.48,0.08l-0.76,0.82l0.22,0.67l0.32,0.06l-0.41,1.62l-1.27,1.58l-1.48,-1.07l-0.49,-0.04l-0.16,0.46l0.52,1.58l0.61,0.59l0.03,0.79l-0.95,1.38l-1.21,-1.22l-0.27,-2.27l-0.35,-0.35l-0.42,0.25l-0.48,1.27l0.33,1.41l-0.97,-0.27l-0.48,0.24l0.18,0.5l1.52,0.83l0.1,2.52l0.79,0.51l0.52,3.42l-1.42,1.88l-2.47,0.8l-1.71,1.66l-1.31,0.25l-1.27,1.03l-0.43,0.99l-2.69,1.78l-2.64,3.03l-0.45,2.12l0.45,2.08l0.85,2.38l1.09,1.9l0.04,1.2l1.16,3.06l-0.18,2.69l-0.55,1.43l-0.47,0.21l-0.89,-0.23l-0.49,-1.18l-0.87,-0.56l-2.75,-5.16l0.48,-1.68l-0.72,-1.78l-2.01,-2.38l-1.12,-0.53l-2.72,1.18l-1.47,-1.35l-1.57,-0.68l-2.99,0.31l-2.17,-0.3l-2.0,0.19l-1.15,0.46l-0.19,0.58l0.39,0.63l0.14,1.34l-0.84,-0.2l-0.84,0.46l-1.58,-0.07l-2.08,-1.44l-2.09,0.33l-1.91,-0.62l-3.73,0.84l-2.39,2.07l-2.54,1.22l-1.45,1.41l-0.61,1.38l0.34,3.71l-0.29,0.02l-3.5,-1.33l-1.25,-3.11l-1.44,-1.5l-2.24,-3.56l-1.76,-1.09l-2.27,-0.01l-1.71,2.07l-1.76,-0.69l-1.16,-0.74l-1.52,-2.98l-3.93,-3.16l-4.34,-0.0l-0.4,0.4l-0.0,0.74l-6.5,0.02l-9.02,-3.14l-0.34,-0.71l-5.7,0.49l-0.43,-1.29l-1.62,-1.61l-1.14,-0.38l-0.55,-0.88l-1.28,-0.13l-1.01,-0.77l-2.22,-0.27l-0.43,-0.3l-0.36,-1.58l-2.4,-2.83l-2.01,-3.85l-0.06,-0.9l-2.92,-3.26l-0.33,-2.29l-1.3,-1.66l0.52,-2.37l-0.09,-2.57l-0.78,-2.3l0.95,-2.82l0.61,-5.68l-0.47,-4.27l-1.46,-4.08l3.19,0.79l1.26,2.83l0.69,0.08l0.69,-1.14l-1.1,-4.79l68.76,-0.0l0.4,-0.4l0.14,-0.86ZM32.44,67.52l1.73,1.97l0.55,0.05l0.99,-0.79l3.65,0.24l-0.09,0.62l0.32,0.45l3.83,0.77l2.61,-0.43l5.19,1.4l4.84,0.43l1.89,0.57l3.42,-0.7l6.14,1.87l-0.03,38.06l0.38,0.4l2.39,0.11l2.31,0.98l3.9,3.99l0.55,0.04l2.4,-2.03l2.16,-1.04l1.2,1.71l3.95,3.14l4.09,6.63l4.2,2.29l0.06,1.83l-1.02,1.23l-1.16,-1.08l-2.04,-1.03l-0.67,-2.89l-3.28,-3.03l-1.65,-3.57l-6.35,-0.32l-2.82,-1.01l-5.26,-3.85l-6.77,-2.04l-3.53,0.3l-4.81,-1.69l-3.25,-1.63l-2.78,0.8l-0.28,0.46l0.44,2.21l-3.91,0.96l-2.26,1.27l-2.3,0.65l-0.27,-1.65l1.05,-3.42l2.49,-1.09l0.16,-0.6l-0.69,-0.96l-0.55,-0.1l-3.19,2.12l-1.78,2.56l-3.55,2.61l-0.04,0.61l1.56,1.52l-2.07,2.29l-5.11,2.57l-0.77,1.66l-3.76,1.77l-0.92,1.73l-2.69,1.38l-1.81,-0.22l-6.95,3.32l-3.97,0.91l4.85,-2.5l2.59,-1.86l3.26,-0.52l1.19,-1.4l3.42,-2.1l2.59,-2.27l0.42,-2.68l1.23,-2.1l-0.04,-0.46l-0.45,-0.11l-2.68,1.03l-0.63,-0.49l-0.53,0.03l-1.05,1.04l-1.36,-1.54l-0.66,0.08l-0.32,0.62l-0.58,-1.14l-0.56,-0.16l-2.41,1.42l-1.07,-0.0l-0.17,-1.75l0.3,-1.71l-1.61,-1.33l-3.41,0.59l-1.96,-1.63l-1.57,-0.84l-0.15,-2.21l-1.7,-1.43l0.82,-1.88l1.99,-2.12l0.88,-1.92l1.71,-0.24l2.04,0.51l1.87,-1.77l1.91,0.25l1.91,-1.23l0.17,-0.43l-0.47,-1.82l-1.07,-0.7l1.39,-1.17l0.12,-0.45l-0.39,-0.26l-1.65,0.07l-2.66,0.88l-0.75,0.78l-1.92,-0.8l-3.46,0.44l-3.44,-0.91l-1.06,-1.61l-2.65,-1.99l2.91,-1.43l5.5,-2.0l1.52,0.0l-0.26,1.62l0.41,0.46l5.29,-0.16l0.3,-0.65l-2.03,-2.59l-3.14,-1.68l-1.79,-2.12l-2.4,-1.83l-3.09,-1.24l1.04,-1.69l4.23,-0.14l3.36,-2.07l0.73,-2.27l2.39,-1.99l2.42,-0.52l4.65,-1.97l2.46,0.23l3.71,-2.35l3.5,0.89ZM37.6,123.41l-2.25,1.23l-0.95,-0.69l-0.29,-1.24l3.21,-1.63l1.42,0.21l0.67,0.7l-1.8,1.42ZM31.06,234.03l0.98,0.47l0.74,0.87l-1.77,1.07l-0.44,-1.53l0.49,-0.89ZM29.34,232.07l0.18,0.05l0.08,0.05l-0.16,0.03l-0.11,-0.14ZM25.16,230.17l0.05,-0.03l0.18,0.22l-0.13,-0.01l-0.1,-0.18ZM5.89,113.26l-1.08,0.41l-2.21,-1.12l1.53,-0.4l1.62,0.28l0.14,0.83Z",
        name: "United States",
      },
      UY: {
        path: "M286.85,372.74l-0.92,1.5l-2.59,1.44l-1.69,-0.52l-1.42,0.26l-2.39,-1.19l-1.52,0.08l-1.27,-1.3l0.16,-1.5l0.56,-0.79l-0.02,-2.73l1.21,-4.74l1.19,-0.21l2.37,2.0l1.08,0.03l4.36,3.17l1.22,1.6l-0.96,1.5l0.61,1.4Z",
        name: "Uruguay",
      },
      LB: {
        path: "M510.37,198.01l-0.88,0.51l1.82,-3.54l0.62,0.08l0.22,0.61l-1.13,0.88l-0.65,1.47Z",
        name: "Lebanon",
      },
      LA: {
        path: "M689.54,248.53l-1.76,-0.74l-0.49,0.15l-0.94,1.46l-1.32,-0.64l0.62,-0.98l0.11,-2.17l-2.04,-2.42l-0.25,-2.65l-1.9,-2.1l-2.15,-0.31l-0.78,0.91l-1.12,0.06l-1.05,-0.4l-2.06,1.2l-0.04,-1.59l0.61,-2.68l-0.36,-0.49l-1.35,-0.1l-0.11,-1.23l-0.96,-0.88l1.96,-1.89l0.39,0.36l1.33,0.07l0.42,-0.45l-0.34,-2.66l0.7,-0.21l1.28,1.81l1.11,2.35l0.36,0.23l2.82,0.02l0.71,1.67l-1.39,0.65l-0.72,0.93l0.13,0.6l2.91,1.51l3.6,5.25l1.88,1.78l0.56,1.62l-0.35,1.96Z",
        name: "Lao PDR",
      },
      TW: {
        path: "M724.01,226.68l-0.74,1.48l-0.9,-1.52l-0.25,-1.74l1.38,-2.44l1.73,-1.74l0.64,0.44l-1.85,5.52Z",
        name: "Taiwan",
      },
      TT: {
        path: "M266.64,259.32l0.28,-1.16l1.13,-0.22l-0.06,1.2l-1.35,0.18Z",
        name: "Trinidad and Tobago",
      },
      TR: {
        path: "M513.21,175.47l3.64,1.17l3.05,-0.44l2.1,0.26l3.11,-1.56l2.46,-0.13l2.19,1.33l0.33,0.82l-0.22,1.33l0.25,0.44l2.28,1.13l-1.17,0.57l-0.21,0.45l0.75,3.2l-0.41,1.16l1.13,1.92l-0.55,0.22l-0.9,-0.67l-2.91,-0.37l-1.24,0.46l-4.23,0.41l-2.81,1.05l-1.91,0.01l-1.52,-0.53l-2.58,0.75l-0.66,-0.45l-0.62,0.3l-0.12,1.45l-0.89,0.84l-0.47,-0.67l0.79,-1.3l-0.41,-0.2l-1.43,0.23l-2.0,-0.63l-2.02,1.65l-3.51,0.3l-2.13,-1.53l-2.7,-0.1l-0.86,1.24l-1.38,0.27l-2.29,-1.44l-2.71,-0.01l-1.37,-2.65l-1.68,-1.52l1.07,-1.99l-0.09,-0.49l-1.27,-1.12l2.37,-2.41l3.7,-0.11l1.28,-2.24l4.49,0.37l3.21,-1.97l2.81,-0.82l3.99,-0.06l4.29,2.07ZM488.79,176.72l-1.72,1.31l-0.5,-0.88l1.37,-2.57l-0.7,-0.85l1.7,-0.63l1.8,0.34l0.46,1.17l1.76,0.78l-2.87,0.32l-1.3,1.01Z",
        name: "Turkey",
      },
      LK: {
        path: "M624.16,268.99l-1.82,0.48l-0.99,-1.67l-0.42,-3.46l0.95,-3.43l1.21,0.98l2.26,4.19l-0.34,2.33l-0.85,0.58Z",
        name: "Sri Lanka",
      },
      LV: {
        path: "M489.16,122.85l0.96,0.66l0.22,1.65l0.68,1.76l-3.65,1.7l-2.23,-1.58l-1.29,-0.26l-0.68,-0.77l-2.42,0.34l-4.16,-0.23l-2.47,0.9l0.06,-1.98l1.13,-2.06l1.95,-1.02l2.12,2.58l2.01,-0.07l0.38,-0.33l0.44,-2.52l1.76,-0.53l3.06,1.7l2.15,0.07Z",
        name: "Latvia",
      },
      LT: {
        path: "M486.93,129.3l0.17,1.12l-1.81,0.98l-0.72,2.02l-2.47,1.18l-2.1,-0.02l-0.73,-1.05l-1.06,-0.3l-0.09,-1.87l-3.56,-1.13l-0.43,-2.36l2.48,-0.94l4.12,0.22l2.25,-0.31l0.52,0.69l1.24,0.21l2.19,1.56Z",
        name: "Lithuania",
      },
      LU: {
        path: "M436.08,149.45l-0.48,-0.07l0.3,-1.28l0.27,0.4l-0.09,0.96Z",
        name: "Luxembourg",
      },
      LR: {
        path: "M399.36,265.97l0.18,1.54l-0.48,0.99l0.08,0.47l2.47,1.8l-0.33,2.8l-2.65,-1.13l-5.78,-4.61l0.58,-1.32l2.1,-2.33l0.86,-0.22l0.77,1.14l-0.14,0.85l0.59,0.87l1.0,0.14l0.76,-0.99Z",
        name: "Liberia",
      },
      LS: {
        path: "M491.06,363.48l-0.49,0.15l-1.49,-1.67l1.1,-1.43l2.19,-1.44l1.51,1.27l-0.98,1.82l-1.23,0.38l-0.62,0.93Z",
        name: "Lesotho",
      },
      TH: {
        path: "M670.27,255.86l-1.41,3.87l0.15,2.0l0.38,0.36l1.38,0.07l0.9,2.04l0.55,2.34l1.4,1.44l1.61,0.38l0.96,0.97l-0.5,0.64l-1.1,0.2l-0.34,-1.18l-2.04,-1.1l-0.63,0.23l-0.63,-0.62l-0.48,-1.3l-2.56,-2.63l-0.73,0.41l0.95,-3.89l2.16,-4.22ZM670.67,254.77l-0.92,-2.18l-0.26,-2.61l-2.14,-3.06l0.71,-0.49l0.89,-2.59l-3.61,-5.45l0.87,-0.51l1.05,-2.58l1.74,-0.18l2.6,-1.59l0.76,0.56l0.13,1.39l0.37,0.36l1.23,0.09l-0.51,2.28l0.05,2.42l0.6,0.34l2.43,-1.42l0.77,0.39l1.47,-0.07l0.71,-0.88l1.48,0.14l1.71,1.88l0.25,2.65l1.92,2.11l-0.1,1.89l-0.61,0.86l-2.22,-0.33l-3.5,0.64l-1.6,2.12l0.36,2.58l-1.51,-0.79l-1.84,-0.01l0.28,-1.52l-0.4,-0.47l-2.21,0.01l-0.4,0.37l-0.19,2.74l-0.34,0.93Z",
        name: "Thailand",
      },
      TF: {
        path: "M596.68,420.38l-3.2,0.18l-0.05,-1.26l0.39,-1.41l1.3,0.78l2.08,0.35l-0.52,1.36Z",
        name: "Fr. S. Antarctic Lands",
      },
      TG: {
        path: "M422.7,257.63l-0.09,1.23l1.53,1.52l0.08,1.09l0.5,0.65l-0.11,5.62l0.49,1.47l-1.31,0.35l-1.02,-2.13l-0.18,-1.12l0.53,-2.19l-0.63,-1.16l-0.22,-3.68l-1.01,-1.4l0.07,-0.28l1.37,0.03Z",
        name: "Togo",
      },
      TD: {
        path: "M480.25,235.49l0.12,9.57l-2.1,0.05l-1.14,1.89l-0.69,1.63l0.34,0.73l-0.66,0.91l0.24,0.89l-0.86,1.95l0.45,0.5l0.6,-0.1l0.34,0.64l0.03,1.38l0.9,1.04l-1.45,0.43l-1.27,1.03l-1.83,2.76l-2.16,1.07l-2.31,-0.15l-0.86,0.25l-0.26,0.49l0.17,0.61l-2.11,1.68l-2.85,0.87l-1.09,-0.57l-0.73,0.66l-1.12,0.1l-1.1,-3.12l-1.25,-0.64l-1.22,-1.22l0.29,-0.64l3.01,0.04l0.35,-0.6l-1.3,-2.2l-0.08,-3.31l-0.97,-1.66l0.22,-1.04l-0.38,-0.48l-1.22,-0.04l0.0,-1.25l-0.98,-1.07l0.96,-3.01l3.25,-2.65l0.13,-3.33l0.95,-5.18l0.52,-1.07l-0.1,-0.48l-0.91,-0.78l-0.2,-0.96l-0.8,-0.58l-0.55,-3.65l2.1,-1.2l19.57,9.83Z",
        name: "Chad",
      },
      LY: {
        path: "M483.48,203.15l-0.75,1.1l0.29,1.39l-0.6,1.83l0.73,2.14l0.0,24.12l-2.48,0.01l-0.41,0.85l-19.41,-9.76l-4.41,2.28l-1.37,-1.33l-3.82,-1.1l-1.14,-1.65l-1.98,-1.23l-1.22,0.32l-0.66,-1.11l-0.17,-1.26l-1.28,-1.69l0.87,-1.19l-0.07,-4.34l0.43,-2.27l-0.86,-3.45l1.13,-0.76l0.22,-1.16l-0.2,-1.03l3.48,-2.61l0.29,-1.94l2.45,0.8l1.18,-0.21l1.98,0.44l3.15,1.18l1.37,2.54l5.72,1.67l2.64,1.35l1.61,-0.72l1.29,-1.34l-0.44,-2.34l0.66,-1.13l1.67,-1.21l1.57,-0.35l3.14,0.53l1.08,1.28l3.99,0.78l0.36,0.54Z",
        name: "Libya",
      },
      AE: {
        path: "M550.76,223.97l1.88,-0.4l3.84,0.02l4.78,-4.75l0.19,0.36l0.26,1.58l-0.81,0.01l-0.39,0.35l-0.08,2.04l-0.81,0.63l-0.01,0.96l-0.66,0.99l-0.39,1.41l-7.08,-1.25l-0.7,-1.96Z",
        name: "United Arab Emirates",
      },
      VE: {
        path: "M240.68,256.69l0.53,0.75l-0.02,1.06l-1.07,1.78l0.95,2.0l0.42,0.22l1.4,-0.44l0.56,-1.83l-0.77,-1.17l-0.1,-1.47l2.82,-0.93l0.26,-0.49l-0.28,-0.96l0.3,-0.28l0.66,1.31l1.96,0.26l1.4,1.22l0.08,0.68l0.39,0.35l4.81,-0.22l1.49,1.11l1.92,0.31l1.67,-0.84l0.22,-0.6l3.44,-0.14l-0.17,0.55l0.86,1.19l2.19,0.35l1.67,1.1l0.37,1.86l0.41,0.32l1.55,0.17l-1.66,1.35l-0.22,0.92l0.65,0.97l-1.67,0.54l-0.3,0.4l0.04,0.99l-0.56,0.57l-0.01,0.55l1.85,2.27l-0.66,0.69l-4.47,1.29l-0.72,0.54l-3.69,-0.9l-0.71,0.27l-0.02,0.7l0.91,0.53l-0.08,1.54l0.35,1.58l0.35,0.31l1.66,0.17l-1.3,0.52l-0.48,1.13l-2.68,0.91l-0.6,0.77l-1.57,0.13l-1.17,-1.13l-0.8,-2.52l-1.25,-1.26l1.02,-1.23l-1.29,-2.95l0.18,-1.62l1.0,-2.21l-0.2,-0.49l-1.14,-0.46l-4.02,0.36l-1.82,-2.1l-1.57,-0.33l-2.99,0.22l-1.06,-0.97l0.25,-1.23l-0.2,-1.01l-0.59,-0.69l-0.29,-1.06l-1.08,-0.39l0.78,-2.79l1.9,-2.11Z",
        name: "Venezuela",
      },
      AF: {
        path: "M600.7,188.88l-1.57,1.3l-0.1,0.48l0.8,2.31l-1.09,1.04l-0.03,1.27l-0.48,0.71l-2.16,-0.08l-0.37,0.59l0.78,1.48l-1.38,0.69l-1.06,1.69l0.06,1.7l-0.65,0.52l-0.91,-0.21l-1.91,0.36l-0.48,0.77l-1.88,0.13l-1.4,1.56l-0.18,2.32l-2.91,1.02l-1.65,-0.23l-0.71,0.55l-1.41,-0.3l-2.41,0.39l-3.52,-1.17l1.96,-2.35l-0.21,-1.78l-0.3,-0.34l-1.63,-0.4l-0.19,-1.58l-0.75,-2.03l0.95,-1.36l-0.19,-0.6l-0.73,-0.28l1.47,-4.8l2.14,0.9l2.12,-0.36l0.74,-1.34l1.77,-0.39l1.54,-0.92l0.63,-2.31l1.87,-0.5l0.49,-0.81l0.94,0.56l2.13,0.11l2.55,0.92l1.95,-0.83l0.65,0.43l0.56,-0.13l0.69,-1.12l1.57,-0.08l0.72,-1.66l0.79,-0.74l0.8,0.39l-0.17,0.56l0.71,0.58l-0.08,2.39l1.11,0.95ZM601.37,188.71l1.73,-0.71l1.43,-1.18l4.03,0.35l-2.23,0.74l-4.95,0.8Z",
        name: "Afghanistan",
      },
      IQ: {
        path: "M530.82,187.47l0.79,0.66l1.26,-0.28l1.46,3.08l1.63,0.94l0.14,1.23l-1.22,1.05l-0.53,2.52l1.73,2.67l3.12,1.62l1.15,1.88l-0.38,1.85l0.39,0.48l0.41,-0.0l0.02,1.07l0.76,0.94l-2.47,-0.1l-1.71,2.44l-4.31,-0.2l-7.02,-5.48l-3.73,-1.94l-2.88,-0.73l-0.85,-2.87l5.45,-3.02l0.95,-3.43l-0.19,-1.96l1.27,-0.7l1.22,-1.7l0.87,-0.36l2.69,0.34Z",
        name: "Iraq",
      },
      IS: {
        path: "M384.14,88.06l-0.37,2.61l2.54,2.51l-2.9,2.75l-9.19,3.4l-9.25,-1.66l1.7,-1.22l-0.1,-0.7l-4.05,-1.47l2.96,-0.53l0.33,-0.43l-0.11,-1.2l-0.33,-0.36l-4.67,-0.85l1.28,-2.04l3.45,-0.56l3.77,2.72l0.44,0.02l3.64,-2.16l3.3,1.08l3.98,-2.16l3.58,0.26Z",
        name: "Iceland",
      },
      IR: {
        path: "M533.43,187.16l-1.27,-2.15l0.42,-0.98l-0.71,-3.04l1.03,-0.5l0.33,0.83l1.26,1.35l2.05,0.51l1.11,-0.16l2.89,-2.11l0.62,-0.14l0.39,0.46l-0.72,1.2l0.06,0.49l1.56,1.53l0.65,0.04l0.67,1.81l2.56,0.83l1.87,1.48l3.69,0.49l3.91,-0.76l0.47,-0.73l2.17,-0.6l1.66,-1.54l1.51,0.08l1.18,-0.53l1.59,0.24l2.83,1.48l1.88,0.3l2.77,2.47l1.77,0.18l0.18,1.99l-1.68,5.49l0.24,0.5l0.61,0.23l-0.82,1.48l0.8,2.18l0.19,1.71l0.3,0.34l1.63,0.4l0.15,1.32l-2.15,2.35l-0.01,0.53l2.21,3.03l2.34,1.24l0.06,2.14l1.24,0.72l0.11,0.69l-3.31,1.27l-1.08,3.03l-9.68,-1.68l-0.99,-3.05l-1.43,-0.73l-2.17,0.46l-2.47,1.26l-2.83,-0.82l-2.46,-2.02l-2.41,-0.8l-3.42,-6.06l-0.48,-0.2l-1.18,0.39l-1.44,-0.82l-0.5,0.08l-0.65,0.74l-0.97,-1.01l-0.02,-1.31l-0.71,-0.39l0.26,-1.81l-1.29,-2.11l-3.13,-1.63l-1.58,-2.43l0.5,-1.9l1.31,-1.26l-0.19,-1.66l-1.74,-1.1l-1.57,-3.3Z",
        name: "Iran",
      },
      AM: {
        path: "M536.99,182.33l-0.28,0.03l-1.23,-2.13l-0.93,0.01l-0.62,-0.66l-0.69,-0.07l-0.96,-0.81l-1.56,-0.62l0.19,-1.12l-0.26,-0.79l2.72,-0.36l1.09,1.01l-0.17,0.92l1.02,0.78l-0.47,0.62l0.08,0.56l2.04,1.23l0.04,1.4Z",
        name: "Armenia",
      },
      AL: {
        path: "M470.32,171.8l0.74,0.03l0.92,0.89l-0.17,1.95l0.36,1.28l1.01,0.82l-1.82,2.83l-0.19,-0.61l-1.25,-0.89l-0.18,-1.2l0.53,-2.82l-0.54,-1.47l0.6,-0.83Z",
        name: "Albania",
      },
      AO: {
        path: "M461.55,300.03l1.26,3.15l1.94,2.36l2.47,-0.53l1.25,0.32l0.44,-0.18l0.93,-1.92l1.31,-0.08l0.41,-0.44l0.47,-0.0l-0.1,0.41l0.39,0.49l2.65,-0.02l0.03,1.19l0.48,1.01l-0.34,1.52l0.18,1.55l0.83,1.04l-0.13,2.85l0.54,0.39l3.96,-0.41l-0.1,1.79l0.39,1.05l-0.24,1.43l-4.7,-0.03l-0.4,0.39l-0.12,8.13l2.92,3.49l-3.83,0.88l-5.89,-0.36l-1.88,-1.24l-10.47,0.22l-1.3,-1.01l-1.85,-0.16l-2.4,0.77l-0.15,-1.06l0.33,-2.16l1.0,-3.45l1.35,-3.2l2.24,-2.8l0.33,-2.06l-0.13,-1.53l-0.8,-1.08l-1.21,-2.87l0.87,-1.62l-1.27,-4.12l-1.17,-1.53l2.47,-0.63l7.03,0.03ZM451.71,298.87l-0.47,-1.25l1.25,-1.11l0.32,0.3l-0.99,1.03l-0.12,1.03Z",
        name: "Angola",
      },
      AR: {
        path: "M249.29,428.93l-2.33,-0.52l-5.83,-0.43l-0.89,-1.66l0.05,-2.37l-0.45,-0.4l-1.43,0.18l-0.67,-0.91l-0.2,-3.13l1.88,-1.47l0.79,-2.04l-0.25,-1.7l1.3,-2.68l0.91,-4.15l-0.22,-1.69l0.85,-0.45l0.2,-0.44l-0.27,-1.16l-0.98,-0.68l0.59,-0.92l-0.05,-0.5l-1.04,-1.07l-0.52,-3.1l0.97,-0.86l-0.42,-3.58l1.2,-5.43l1.38,-0.98l0.16,-0.43l-0.75,-2.79l-0.01,-2.43l1.78,-1.75l0.06,-2.57l1.43,-2.85l0.01,-2.58l-0.69,-0.74l-1.09,-4.52l1.47,-2.7l-0.18,-2.79l0.85,-2.35l1.59,-2.46l1.73,-1.64l0.05,-0.52l-0.6,-0.84l0.44,-0.85l-0.07,-4.19l2.7,-1.44l0.86,-2.75l-0.21,-0.71l1.76,-2.01l2.9,0.57l1.38,1.78l0.68,-0.08l0.87,-1.87l2.39,0.09l4.95,4.77l2.17,0.49l3.0,1.92l2.47,1.0l0.25,0.82l-2.37,3.93l0.23,0.59l5.39,1.16l2.12,-0.44l2.45,-2.16l0.5,-2.38l0.76,-0.31l0.98,1.2l-0.04,1.8l-3.67,2.51l-2.85,2.66l-3.43,3.88l-1.3,5.07l0.01,2.72l-0.54,0.73l-0.36,3.28l3.14,2.64l-0.16,2.11l1.4,1.11l-0.1,1.09l-2.29,3.52l-3.55,1.49l-4.92,0.6l-2.71,-0.29l-0.43,0.51l0.5,1.65l-0.49,2.1l0.38,1.42l-1.19,0.83l-2.36,0.38l-2.3,-1.04l-1.38,0.83l0.41,3.64l1.69,0.91l1.4,-0.71l0.36,0.76l-2.04,0.86l-2.01,1.89l-0.97,4.63l-2.34,0.1l-2.09,1.78l-0.61,2.75l2.46,2.31l2.17,0.63l-0.7,2.32l-2.83,1.73l-1.73,3.86l-2.17,1.22l-1.16,1.67l0.75,3.76l1.04,1.28ZM256.71,438.88l-2.0,0.15l-1.4,-1.22l-3.82,-0.1l-0.0,-5.83l1.6,3.05l3.26,2.07l3.08,0.78l-0.71,1.1Z",
        name: "Argentina",
      },
      AU: {
        path: "M705.8,353.26l0.26,0.04l0.17,-0.47l-0.48,-1.42l0.92,1.11l0.45,0.15l0.27,-0.39l-0.1,-1.56l-1.98,-3.63l1.09,-3.31l-0.24,-1.57l0.34,-0.62l0.38,1.06l0.43,-0.19l0.99,-1.7l1.91,-0.83l1.29,-1.15l1.81,-0.91l0.96,-0.17l0.92,0.26l1.92,-0.95l1.47,-0.28l1.03,-0.8l1.43,0.04l2.78,-0.84l1.36,-1.15l0.71,-1.45l1.41,-1.26l0.3,-2.58l1.27,-1.59l0.78,1.65l0.54,0.19l1.07,-0.51l0.15,-0.6l-0.73,-1.0l0.45,-0.71l0.78,0.39l0.58,-0.3l0.28,-1.82l1.87,-2.14l1.12,-0.39l0.28,-0.58l0.62,0.17l0.53,-0.73l1.87,-0.57l1.65,1.05l1.35,1.48l3.39,0.38l0.43,-0.54l-0.46,-1.23l1.05,-1.79l1.04,-0.61l0.14,-0.55l-0.25,-0.41l0.88,-1.17l1.31,-0.77l1.3,0.27l2.1,-0.48l0.31,-0.4l-0.05,-1.3l-0.92,-0.77l1.48,0.56l1.41,1.07l2.11,0.65l0.81,-0.2l1.4,0.7l1.69,-0.66l0.8,0.19l0.64,-0.33l0.71,0.77l-1.33,1.94l-0.71,0.07l-0.35,0.51l0.24,0.86l-1.52,2.35l0.12,1.05l2.15,1.65l1.97,0.85l3.04,2.36l1.97,0.65l0.55,0.88l2.72,0.85l1.84,-1.1l2.07,-5.97l-0.42,-3.59l0.3,-1.73l0.47,-0.87l-0.31,-0.68l1.09,-3.28l0.46,-0.47l0.4,0.71l0.16,1.51l0.65,0.52l0.16,1.04l0.85,1.21l0.12,2.38l0.9,2.0l0.57,0.18l1.3,-0.78l1.69,1.7l-0.2,1.08l0.53,2.2l0.39,1.3l0.68,0.48l0.6,1.95l-0.19,1.48l0.81,1.76l6.01,3.69l-0.11,0.76l1.38,1.58l0.95,2.77l0.58,0.22l0.72,-0.41l0.8,0.9l0.61,0.01l0.46,2.41l4.81,4.71l0.66,2.02l-0.07,3.31l1.14,2.2l-0.13,2.24l-1.1,3.68l0.03,1.64l-0.47,1.89l-1.05,2.4l-1.9,1.47l-1.72,3.51l-2.38,6.09l-0.24,2.82l-1.14,0.8l-2.85,0.15l-2.31,1.19l-2.51,2.25l-3.09,-1.57l0.3,-1.15l-0.54,-0.47l-1.5,0.63l-2.01,1.94l-7.12,-2.18l-1.48,-1.63l-1.14,-3.74l-1.45,-1.26l-1.81,-0.26l0.56,-1.18l-0.61,-2.1l-0.72,-0.1l-1.14,1.82l-0.9,0.21l0.63,-0.82l0.36,-1.55l0.92,-1.31l-0.13,-2.34l-0.7,-0.22l-2.0,2.34l-1.51,0.93l-0.94,2.01l-1.35,-0.81l-0.02,-1.52l-1.57,-2.04l-1.09,-0.88l0.24,-0.33l-0.14,-0.59l-3.21,-1.69l-1.83,-0.12l-2.54,-1.35l-4.58,0.28l-6.02,1.9l-2.53,-0.13l-2.62,1.41l-2.13,0.63l-1.49,2.6l-3.49,0.31l-2.29,-0.5l-3.48,0.43l-1.6,1.47l-0.81,-0.04l-2.37,1.63l-3.26,-0.1l-3.72,-2.21l0.04,-1.05l1.19,-0.46l0.49,-0.89l0.21,-2.97l-0.28,-1.64l-1.34,-2.86l-0.38,-1.47l0.05,-1.72l-0.95,-1.7l-0.18,-0.97l-1.01,-0.99l-0.29,-1.98l-1.13,-1.75ZM784.92,393.44l2.65,1.02l3.23,-0.96l1.09,0.14l0.15,3.06l-0.85,1.13l-0.17,1.63l-0.87,-0.24l-1.57,1.91l-1.68,-0.18l-1.4,-2.36l-0.37,-2.04l-1.39,-2.51l0.04,-0.8l1.15,0.18Z",
        name: "Australia",
      },
      AT: {
        path: "M462.89,152.8l0.04,2.25l-1.07,0.0l-0.33,0.63l0.36,0.51l-1.04,2.13l-2.02,0.07l-1.33,0.7l-5.29,-0.99l-0.47,-0.93l-0.44,-0.21l-2.47,0.55l-0.42,0.51l-3.18,-0.81l0.43,-0.91l1.12,0.78l0.6,-0.17l0.25,-0.58l1.93,0.12l1.86,-0.56l1.0,0.08l0.68,0.57l0.62,-0.15l0.26,-0.77l-0.3,-1.78l0.8,-0.44l0.68,-1.15l1.52,0.85l0.47,-0.06l1.34,-1.25l0.64,-0.17l1.81,0.92l1.28,-0.11l0.7,0.37Z",
        name: "Austria",
      },
      IN: {
        path: "M623.34,207.03l-1.24,1.04l-0.97,2.55l0.22,0.51l8.04,3.87l3.42,0.37l1.57,1.38l4.92,0.88l2.18,-0.04l0.38,-0.3l0.29,-1.24l-0.32,-1.64l0.14,-0.87l0.82,-0.31l0.45,2.48l2.28,1.02l1.77,-0.38l4.14,0.1l0.38,-0.36l0.18,-1.66l-0.5,-0.65l1.37,-0.29l2.25,-1.99l2.7,-1.62l1.93,0.62l1.8,-0.98l0.79,1.14l-0.68,0.91l0.26,0.63l2.42,0.36l0.09,0.47l-0.83,0.75l0.13,1.07l-1.52,-0.29l-3.24,1.86l-0.13,1.78l-1.32,2.14l-0.18,1.39l-0.93,1.82l-1.64,-0.5l-0.52,0.37l-0.09,2.63l-0.56,1.11l0.19,0.81l-0.53,0.27l-1.18,-3.73l-1.08,-0.27l-0.38,0.31l-0.24,1.0l-0.66,-0.66l0.54,-1.06l1.22,-0.34l1.15,-2.25l-0.24,-0.56l-1.57,-0.47l-4.34,-0.28l-0.18,-1.56l-0.35,-0.35l-1.11,-0.12l-1.91,-1.12l-0.56,0.17l-0.88,1.82l0.11,0.49l1.36,1.07l-1.09,0.69l-0.69,1.11l0.18,0.56l1.24,0.57l-0.32,1.54l0.85,1.94l0.36,2.01l-0.22,0.59l-4.58,0.52l-0.33,0.42l0.13,1.8l-1.17,1.36l-3.65,1.81l-2.79,3.03l-4.32,3.28l-0.18,1.27l-4.65,1.79l-0.77,2.16l0.64,5.3l-1.06,2.49l-0.01,3.94l-1.24,0.28l-1.14,1.93l0.39,0.84l-1.68,0.53l-1.04,1.83l-0.65,0.47l-2.06,-2.05l-2.1,-6.02l-2.2,-3.64l-1.05,-4.75l-2.29,-3.57l-1.76,-8.2l0.01,-3.11l-0.49,-2.53l-0.55,-0.29l-3.53,1.52l-1.53,-0.27l-2.86,-2.77l0.85,-0.67l0.08,-0.55l-0.74,-1.03l-2.67,-2.06l1.24,-1.32l5.34,0.01l0.39,-0.49l-0.5,-2.29l-1.42,-1.46l-0.27,-1.93l-1.43,-1.2l2.31,-2.37l3.05,0.06l2.62,-2.85l1.6,-2.81l2.4,-2.73l0.07,-2.04l1.97,-1.48l-0.02,-0.65l-1.93,-1.31l-0.82,-1.78l-0.8,-2.21l0.9,-0.89l3.59,0.65l2.92,-0.42l2.33,-2.19l2.31,2.85l-0.24,2.13l0.99,1.59l-0.05,0.82l-1.34,-0.28l-0.47,0.48l0.7,3.06l2.62,1.99l2.99,1.65Z",
        name: "India",
      },
      TZ: {
        path: "M495.56,296.42l2.8,-3.12l-0.02,-0.81l-0.64,-1.3l0.68,-0.52l0.14,-1.47l-0.76,-1.25l0.31,-0.11l2.26,0.03l-0.51,2.76l0.76,1.3l0.5,0.12l1.05,-0.53l1.19,-0.12l0.61,0.24l1.43,-0.62l0.1,-0.67l-0.71,-0.62l1.57,-1.7l8.65,4.86l0.32,1.53l3.34,2.33l-1.05,2.8l0.13,1.61l1.63,1.12l-0.6,1.76l-0.01,2.33l1.89,4.03l0.57,0.43l-1.46,1.08l-2.61,0.94l-1.43,-0.04l-1.06,0.77l-2.29,0.36l-2.87,-0.68l-0.83,0.07l-0.63,-0.75l-0.31,-2.78l-1.32,-1.35l-3.25,-0.77l-3.96,-1.58l-1.18,-2.41l-0.32,-1.75l-1.76,-1.49l0.42,-1.05l-0.44,-0.89l0.08,-0.96l-0.46,-0.58l0.06,-0.56Z",
        name: "Tanzania",
      },
      AZ: {
        path: "M539.29,175.73l1.33,0.32l1.94,-1.8l2.3,3.34l1.43,0.43l-1.26,0.15l-0.35,0.32l-0.8,3.14l-0.99,0.96l0.05,1.11l-1.26,-1.13l0.7,-1.18l-0.04,-0.47l-0.74,-0.86l-1.48,0.15l-2.34,1.71l-0.03,-1.27l-2.03,-1.35l0.47,-0.62l-0.08,-0.56l-1.03,-0.79l0.29,-0.43l-0.14,-0.58l-1.13,-0.86l1.89,0.68l1.69,0.06l0.37,-0.87l-0.81,-1.37l0.42,0.06l1.63,1.72ZM533.78,180.57l0.61,0.46l0.69,-0.0l0.59,1.15l-0.68,-0.15l-1.21,-1.45Z",
        name: "Azerbaijan",
      },
      IE: {
        path: "M405.08,135.42l0.35,2.06l-1.75,2.78l-4.22,1.88l-2.84,-0.4l1.73,-3.0l-1.18,-3.53l4.6,-3.74l0.32,1.15l-0.49,1.74l0.4,0.51l1.47,-0.04l1.6,0.6Z",
        name: "Ireland",
      },
      ID: {
        path: "M756.47,287.89l0.69,4.01l2.79,1.78l0.51,-0.1l2.04,-2.59l2.71,-1.43l2.05,-0.0l3.9,1.73l2.46,0.45l0.08,15.12l-1.75,-1.54l-2.54,-0.51l-0.88,0.71l-2.32,0.06l0.69,-1.33l1.45,-0.64l0.23,-0.46l-0.65,-2.74l-1.24,-2.21l-5.04,-2.29l-2.09,-0.23l-3.68,-2.27l-0.55,0.13l-0.65,1.07l-0.52,0.12l-0.55,-1.89l-1.21,-0.78l1.84,-0.62l1.72,0.05l0.39,-0.52l-0.21,-0.66l-0.38,-0.28l-3.45,-0.0l-1.13,-1.48l-2.1,-0.43l-0.52,-0.6l2.69,-0.48l1.28,-0.78l3.66,0.94l0.3,0.71ZM757.91,300.34l-0.62,0.82l-0.1,-0.8l0.59,-1.12l0.13,1.1ZM747.38,292.98l0.34,0.72l-1.22,-0.57l-4.68,-0.1l0.27,-0.62l2.78,-0.09l2.52,0.67ZM741.05,285.25l-0.67,-2.88l0.64,-2.01l0.41,0.86l1.21,0.18l0.16,0.7l-0.1,1.68l-0.84,-0.16l-0.46,0.3l-0.34,1.34ZM739.05,293.5l-0.5,0.44l-1.34,-0.36l-0.17,-0.37l1.73,-0.08l0.27,0.36ZM721.45,284.51l-0.19,1.97l2.24,2.23l0.54,0.02l1.27,-1.07l2.75,-0.5l-0.9,1.21l-2.11,0.93l-0.16,0.6l2.22,3.01l-0.3,1.07l1.36,1.74l-2.26,0.85l-0.28,-0.31l0.12,-1.19l-1.64,-1.34l0.17,-2.23l-0.56,-0.39l-1.67,0.76l-0.23,0.39l0.3,6.17l-1.1,0.25l-0.69,-0.47l0.64,-2.21l-0.39,-2.42l-0.39,-0.34l-0.8,-0.01l-0.58,-1.29l0.98,-1.6l0.35,-1.96l1.32,-3.87ZM728.59,296.27l0.38,0.49l-0.02,1.28l-0.88,0.49l-0.53,-0.47l1.04,-1.79ZM729.04,286.98l0.27,-0.05l-0.02,0.13l-0.24,-0.08ZM721.68,284.05l0.16,-0.32l1.89,-1.65l1.83,0.68l3.16,0.35l2.94,-0.1l2.39,-1.66l-1.73,2.13l-1.66,0.43l-2.41,-0.48l-4.17,0.13l-2.39,0.51ZM730.55,310.47l1.11,-1.93l2.03,-0.82l0.08,0.62l-1.45,1.67l-1.77,0.46ZM728.12,305.88l-0.1,0.38l-3.46,0.66l-2.91,-0.27l-0.0,-0.25l1.54,-0.41l1.66,0.73l1.67,-0.19l1.61,-0.65ZM722.9,310.24l-0.64,0.03l-2.26,-1.2l1.11,-0.24l1.78,1.41ZM716.26,305.77l0.88,0.51l1.28,-0.17l0.2,0.35l-4.65,0.73l0.39,-0.67l1.15,-0.02l0.75,-0.73ZM711.66,293.84l-0.38,-0.16l-2.54,1.01l-1.12,-1.44l-1.69,-0.13l-1.16,-0.75l-3.04,0.77l-1.1,-1.15l-3.31,-0.11l-0.35,-3.05l-1.35,-0.95l-1.11,-1.98l-0.33,-2.06l0.27,-2.14l0.9,-1.01l0.37,1.15l2.09,1.49l1.53,-0.48l1.82,0.08l1.38,-1.19l1.0,-0.18l2.28,0.67l2.26,-0.53l1.52,-3.64l1.01,-0.99l0.78,-2.57l4.1,0.3l-1.11,1.77l0.02,0.46l1.7,2.2l-0.23,1.39l2.07,1.71l-2.33,0.42l-0.88,1.9l0.1,2.05l-2.4,1.9l-0.06,2.45l-0.7,2.79ZM692.58,302.03l0.35,0.26l4.8,0.25l0.78,-0.97l4.17,1.09l1.13,1.68l3.69,0.45l2.13,1.04l-1.8,0.6l-2.77,-0.99l-4.8,-0.12l-5.24,-1.41l-1.84,-0.25l-1.11,0.3l-4.26,-0.97l-0.7,-1.14l-1.59,-0.13l1.18,-1.65l2.74,0.13l2.87,1.13l0.26,0.68ZM685.53,299.17l-2.22,0.04l-2.06,-2.03l-3.15,-2.01l-2.93,-3.51l-3.11,-5.33l-2.2,-2.12l-1.64,-4.06l-2.32,-1.69l-1.27,-2.07l-1.96,-1.5l-2.51,-2.65l-0.11,-0.66l4.81,0.53l2.15,2.38l3.31,2.74l2.35,2.66l2.7,0.17l1.95,1.59l1.54,2.17l1.59,0.95l-0.84,1.71l0.15,0.52l1.44,0.87l0.79,0.1l0.4,1.58l0.87,1.4l1.96,0.39l1.0,1.31l-0.6,3.01l-0.09,3.5Z",
        name: "Indonesia",
      },
      UA: {
        path: "M492.5,162.44l1.28,-2.49l1.82,0.19l0.66,-0.23l0.09,-0.71l-0.25,-0.75l-0.79,-0.72l-0.33,-1.21l-0.86,-0.62l-0.02,-1.19l-1.13,-0.86l-1.15,-0.19l-2.04,-1.0l-1.66,0.32l-0.66,0.47l-0.92,-0.0l-0.84,0.78l-2.48,0.7l-1.18,-0.71l-3.07,-0.36l-0.89,0.43l-0.24,-0.55l-1.11,-0.7l0.35,-0.93l1.26,-1.02l-0.54,-1.23l2.04,-2.43l1.4,-0.62l0.25,-1.19l-1.04,-2.39l0.83,-0.13l1.28,-0.84l1.8,-0.07l2.47,0.26l2.86,0.81l1.88,0.06l0.86,0.44l1.04,-0.41l0.77,0.66l2.18,-0.15l0.92,0.3l0.52,-0.34l0.15,-1.53l0.56,-0.54l2.85,-0.05l0.84,-0.72l3.04,-0.18l1.23,1.46l-0.48,0.77l0.21,1.03l0.36,0.32l1.8,0.14l0.93,2.08l3.18,1.15l1.94,-0.45l1.67,1.49l1.4,-0.03l3.35,0.96l0.02,0.54l-0.96,1.59l0.47,1.97l-0.26,0.7l-2.36,0.28l-1.29,0.89l-0.23,1.38l-1.83,0.27l-1.58,0.97l-2.41,0.21l-2.16,1.17l-0.21,0.38l0.34,2.26l1.23,0.75l2.13,-0.08l-0.14,0.31l-2.65,0.53l-3.23,1.69l-0.87,-0.39l0.42,-1.1l-0.25,-0.52l-2.21,-0.73l2.35,-1.06l0.12,-0.65l-0.93,-0.82l-3.62,-0.74l-0.13,-0.89l-0.46,-0.34l-2.61,0.59l-0.91,1.69l-1.71,2.04l-0.86,-0.4l-1.62,0.27Z",
        name: "Ukraine",
      },
      QA: {
        path: "M549.33,221.64l-0.76,-0.23l-0.14,-1.64l0.84,-1.29l0.47,0.52l0.04,1.34l-0.45,1.3Z",
        name: "Qatar",
      },
      MZ: {
        path: "M508.58,318.75l-0.34,-2.57l0.51,-2.05l3.55,0.63l2.5,-0.38l1.02,-0.76l1.49,0.01l2.74,-0.98l1.66,-1.2l0.5,9.24l0.41,1.23l-0.68,1.67l-0.93,1.71l-1.5,1.5l-5.16,2.28l-2.78,2.73l-1.02,0.53l-1.71,1.8l-0.98,0.57l-0.35,2.41l1.16,1.94l0.49,2.17l0.43,0.31l-0.06,2.06l-0.39,1.17l0.5,0.72l-0.25,0.73l-0.92,0.83l-5.12,2.39l-1.22,1.36l0.21,1.13l0.58,0.39l-0.11,0.72l-1.22,-0.01l-0.73,-2.97l0.42,-3.09l-1.78,-5.37l2.49,-2.81l0.69,-1.89l0.44,-0.43l0.28,-1.53l-0.39,-0.93l0.59,-3.65l-0.01,-3.26l-1.49,-1.16l-1.2,-0.22l-1.74,-1.17l-1.92,0.01l-0.29,-2.08l7.06,-1.96l1.28,1.09l0.89,-0.1l0.67,0.44l0.1,0.73l-0.51,1.29l0.19,1.81l1.75,1.83l0.65,-0.13l0.71,-1.65l1.17,-0.86l-0.26,-3.47l-1.05,-1.85l-1.04,-0.94Z",
        name: "Mozambique",
      },
    },
    height: 440.7063107441331,
    projection: { type: "mill", centralMeridian: 11.5 },
    width: 900,
  },
  worldMill = { name, content },
  countryData = {
    US: {
      name: "United States",
      cuisine: ["Hamburgers", "BBQ", "Apple Pie", "Hot Dogs"],
      culture: ["Hollywood", "Jazz", "Baseball", "American Football"],
      landmarks: ["Statue of Liberty", "Grand Canyon", "Mount Rushmore"],
      description:
        "A diverse nation known for its cultural influence, technological innovation, and natural wonders.",
      imageUrl:
        "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=1200",
    },
    JP: {
      name: "Japan",
      cuisine: ["Sushi", "Ramen", "Tempura", "Miso Soup"],
      culture: ["Anime", "Tea Ceremony", "Kabuki", "Zen Buddhism"],
      landmarks: ["Mount Fuji", "Fushimi Inari Shrine", "Tokyo Tower"],
      description:
        "An island nation blending ancient traditions with modern technology and pop culture.",
      imageUrl:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1200",
    },
    FR: {
      name: "France",
      cuisine: ["Croissants", "Coq au Vin", "Baguettes", "French Wine"],
      culture: ["Fashion", "Art", "Literature", "Cinema"],
      landmarks: ["Eiffel Tower", "Louvre Museum", "Palace of Versailles"],
      description:
        "A country renowned for its art, cuisine, fashion, and architectural marvels.",
      imageUrl:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1200",
    },
    IT: {
      name: "Italy",
      cuisine: ["Pizza", "Pasta", "Gelato", "Espresso"],
      culture: ["Opera", "Renaissance Art", "Fashion", "Football"],
      landmarks: ["Colosseum", "Venice Canals", "Leaning Tower of Pisa"],
      description:
        "The birthplace of the Renaissance, known for its rich history, art, and culinary traditions.",
      imageUrl:
        "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=1200",
    },
    CN: {
      name: "China",
      cuisine: ["Dim Sum", "Peking Duck", "Hot Pot", "Dumplings"],
      culture: [
        "Kung Fu",
        "Traditional Medicine",
        "Calligraphy",
        "Dragon Dance",
      ],
      landmarks: ["Great Wall", "Forbidden City", "Terracotta Army"],
      description:
        "An ancient civilization with rich traditions, impressive architecture, and diverse cultural heritage.",
      imageUrl:
        "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&q=80&w=1200",
    },
    IN: {
      name: "India",
      cuisine: ["Curry", "Biryani", "Tandoori", "Masala Dosa"],
      culture: ["Yoga", "Bollywood", "Classical Dance", "Cricket"],
      landmarks: ["Taj Mahal", "Golden Temple", "Hawa Mahal"],
      description:
        "A vibrant country known for its diverse cultures, spiritual traditions, and colorful festivals.",
      imageUrl:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1200",
    },
    BR: {
      name: "Brazil",
      cuisine: ["Feijoada", "Pao de Queijo", "Acai", "Churrasco"],
      culture: ["Samba", "Carnival", "Football", "Capoeira"],
      landmarks: [
        "Christ the Redeemer",
        "Sugarloaf Mountain",
        "Amazon Rainforest",
      ],
      description:
        "Home to the Amazon rainforest and vibrant culture, known for its festivals and football.",
      imageUrl:
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&q=80&w=1200",
    },
    AU: {
      name: "Australia",
      cuisine: ["Meat Pies", "Vegemite", "Lamingtons", "Barbecue"],
      culture: ["Surfing", "Aboriginal Art", "Cricket", "Rugby"],
      landmarks: ["Sydney Opera House", "Great Barrier Reef", "Uluru"],
      description:
        "A continent of unique wildlife, stunning landscapes, and laid-back lifestyle.",
      imageUrl:
        "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=1200",
    },
    DE: {
      name: "Germany",
      cuisine: ["Bratwurst", "Schnitzel", "Pretzels", "Beer"],
      culture: ["Oktoberfest", "Classical Music", "Football", "Philosophy"],
      landmarks: ["Brandenburg Gate", "Neuschwanstein Castle", "Berlin Wall"],
      description:
        "A country of innovation, rich history, and cultural significance in Europe.",
      imageUrl:
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=1200",
    },
    RU: {
      name: "Russia",
      cuisine: ["Borscht", "Beef Stroganoff", "Caviar", "Blini"],
      culture: ["Ballet", "Literature", "Chess", "Ice Hockey"],
      landmarks: ["Red Square", "Saint Basil Cathedral", "Winter Palace"],
      description:
        "The worlds largest country, spanning two continents with a rich cultural heritage.",
      imageUrl:
        "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&q=80&w=1200",
    },
    ES: {
      name: "Spain",
      cuisine: ["Paella", "Tapas", "Gazpacho", "Jamon"],
      culture: ["Flamenco", "Bullfighting", "Siesta", "Football"],
      landmarks: ["Sagrada Familia", "Alhambra", "Plaza Mayor"],
      description:
        "Known for its passionate culture, vibrant festivals, and Mediterranean lifestyle.",
      imageUrl:
        "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&q=80&w=1200",
    },
    MX: {
      name: "Mexico",
      cuisine: ["Tacos", "Guacamole", "Enchiladas", "Mole"],
      culture: ["Mariachi", "Day of the Dead", "Lucha Libre", "Folk Art"],
      landmarks: ["Chichen Itza", "Teotihuacan", "Frida Kahlo Museum"],
      description:
        "Rich in ancient civilizations, colorful traditions, and diverse landscapes.",
      imageUrl:
        "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&q=80&w=1200",
    },
    CA: {
      name: "Canada",
      cuisine: ["Poutine", "Maple Syrup", "Butter Tarts", "Bannock"],
      culture: [
        "Hockey",
        "Multiculturalism",
        "Indigenous Art",
        "Winter Sports",
      ],
      landmarks: ["CN Tower", "Banff National Park", "Niagara Falls"],
      description:
        "A vast country known for its natural beauty, diversity, and friendly people.",
      imageUrl:
        "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=1200",
    },
    GB: {
      name: "United Kingdom",
      cuisine: [
        "Fish and Chips",
        "Sunday Roast",
        "Full English Breakfast",
        "Tea",
      ],
      culture: ["Royal Family", "Football", "Literature", "Music"],
      landmarks: ["Big Ben", "Tower Bridge", "Stonehenge"],
      description:
        "An island nation with rich history, cultural influence, and modern innovation.",
      imageUrl:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1200",
    },
    KR: {
      name: "South Korea",
      cuisine: ["Kimchi", "Bibimbap", "Korean BBQ", "Tteokbokki"],
      culture: ["K-pop", "K-drama", "Temple Stay", "Taekwondo"],
      landmarks: ["Gyeongbokgung Palace", "Namsan Tower", "Jeju Island"],
      description:
        "A dynamic country blending traditional values with modern pop culture.",
      imageUrl:
        "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&q=80&w=1200",
    },
    TH: {
      name: "Thailand",
      cuisine: ["Pad Thai", "Green Curry", "Tom Yum", "Mango Sticky Rice"],
      culture: ["Buddhism", "Muay Thai", "Traditional Dance", "Festivals"],
      landmarks: ["Grand Palace", "Wat Arun", "Phi Phi Islands"],
      description:
        "Known as the Land of Smiles, famous for its hospitality and rich traditions.",
      imageUrl:
        "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=1200",
    },
    EG: {
      name: "Egypt",
      cuisine: ["Koshari", "Ful Medames", "Molokhia", "Shawarma"],
      culture: ["Ancient History", "Islamic Art", "Music", "Literature"],
      landmarks: ["Pyramids of Giza", "Valley of the Kings", "Abu Simbel"],
      description:
        "Home to one of the worlds oldest civilizations and magnificent ancient monuments.",
      imageUrl:
        "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&q=80&w=1200",
    },
    GR: {
      name: "Greece",
      cuisine: ["Moussaka", "Souvlaki", "Greek Salad", "Baklava"],
      culture: ["Philosophy", "Olympics", "Theater", "Mythology"],
      landmarks: ["Acropolis", "Santorini", "Parthenon"],
      description:
        "The cradle of Western civilization, rich in history, philosophy, and Mediterranean culture.",
      imageUrl:
        "https://images.unsplash.com/photo-1503152394-c571994fd383?auto=format&fit=crop&q=80&w=1200",
    },
    PT: {
      name: "Portugal",
      cuisine: ["Bacalhau", "Pasteis de Nata", "Francesinha", "Port Wine"],
      culture: ["Fado Music", "Football", "Maritime History", "Festivals"],
      landmarks: ["Tower of Belem", "Jeronimos Monastery", "Porto Old Town"],
      description:
        "A coastal nation known for its rich maritime history and vibrant culture.",
      imageUrl:
        "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&q=80&w=1200",
    },
    SE: {
      name: "Sweden",
      cuisine: ["Meatballs", "Gravlax", "Kanelbullar", "Smorgasbord"],
      culture: ["Design", "Music", "Midsummer", "Innovation"],
      landmarks: ["Vasa Museum", "Ice Hotel", "Stockholm Palace"],
      description:
        "A Scandinavian country known for its design, social innovation, and natural beauty.",
      imageUrl:
        "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&q=80&w=1200",
    },
    AR: {
      name: "Argentina",
      cuisine: ["Asado", "Empanadas", "Dulce de Leche", "Mate"],
      culture: ["Tango", "Football", "Gaucho Tradition", "Literature"],
      landmarks: ["Iguazu Falls", "Perito Moreno Glacier", "Teatro Colon"],
      description:
        "A country of passionate people, diverse landscapes, and rich cultural traditions.",
      imageUrl:
        "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&q=80&w=1200",
    },
    ZA: {
      name: "South Africa",
      cuisine: ["Braai", "Bobotie", "Biltong", "Malva Pudding"],
      culture: ["Safari", "Rugby", "Traditional Dance", "Art"],
      landmarks: ["Table Mountain", "Kruger National Park", "Robben Island"],
      description:
        "A rainbow nation with diverse wildlife, cultures, and stunning landscapes.",
      imageUrl:
        "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?auto=format&fit=crop&q=80&w=1200",
    },
    NZ: {
      name: "New Zealand",
      cuisine: ["Hangi", "Lamb", "Pavlova", "Seafood"],
      culture: ["Maori Heritage", "Rugby", "Lord of the Rings", "Outdoor Life"],
      landmarks: ["Milford Sound", "Hobbiton", "Sky Tower"],
      description:
        "A country of breathtaking landscapes, Maori culture, and adventure sports.",
      imageUrl:
        "https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&q=80&w=1200",
    },
    TR: {
      name: "Turkey",
      cuisine: ["Kebab", "Baklava", "Turkish Coffee", "Meze"],
      culture: [
        "Whirling Dervishes",
        "Hammam",
        "Carpet Weaving",
        "Tea Culture",
      ],
      landmarks: ["Hagia Sophia", "Cappadocia", "Pamukkale"],
      description:
        "A bridge between East and West, rich in history, culture, and cuisine.",
      imageUrl:
        "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&q=80&w=1200",
    },
    MA: {
      name: "Morocco",
      cuisine: ["Tagine", "Couscous", "Pastilla", "Mint Tea"],
      culture: ["Souks", "Berber Traditions", "Music", "Handicrafts"],
      landmarks: ["Hassan II Mosque", "Medina of Fez", "Sahara Desert"],
      description:
        "A North African kingdom known for its ancient medinas, desert landscapes, and rich traditions.",
      imageUrl:
        "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&q=80&w=1200",
    },
    VN: {
      name: "Vietnam",
      cuisine: ["Pho", "Banh Mi", "Spring Rolls", "Coffee"],
      culture: ["Water Puppetry", "Ao Dai", "Traditional Music", "Buddhism"],
      landmarks: ["Ha Long Bay", "Hoi An", "Cu Chi Tunnels"],
      description:
        "A country of rich history, stunning landscapes, and incredible street food culture.",
      imageUrl:
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=1200",
    },
    PE: {
      name: "Peru",
      cuisine: ["Ceviche", "Lomo Saltado", "Pisco Sour", "Quinoa"],
      culture: ["Inca Heritage", "Textiles", "Pan Flute Music", "Festivals"],
      landmarks: ["Machu Picchu", "Nazca Lines", "Lake Titicaca"],
      description:
        "Home to ancient Incan civilization, diverse ecosystems, and world-renowned cuisine.",
      imageUrl:
        "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=1200",
    },
    UA: {
      name: "Ukraine",
      cuisine: ["Borscht", "Varenyky", "Holubtsi", "Chicken Kiev"],
      culture: ["Folk Dance", "Easter Eggs", "Traditional Clothing", "Music"],
      landmarks: [
        "Saint Sophia Cathedral",
        "Chernobyl",
        "Carpathian Mountains",
      ],
      description:
        "A country with rich agricultural heritage, vibrant traditions, and resilient spirit.",
      imageUrl:
        "https://images.unsplash.com/photo-1561542320-9a18cd340469?auto=format&fit=crop&q=80&w=1200",
    },
    SG: {
      name: "Singapore",
      cuisine: ["Chili Crab", "Hainanese Chicken Rice", "Laksa", "Satay"],
      culture: ["Multiculturalism", "Garden City", "Night Life", "Shopping"],
      landmarks: ["Marina Bay Sands", "Gardens by the Bay", "Sentosa Island"],
      description:
        "A modern city-state known for its cultural diversity, innovation, and amazing food scene.",
      imageUrl:
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=1200",
    },
  },
  WorldMap = ({ searchQuery: e, selectedRegion: a }) => {
    const i = useNavigate(),
      o = (h, b) => {
        countryData[b] && i(`/country/${b}`);
      },
      c = () =>
        Object.keys(countryData).reduce(
          (h, b) => ({
            ...h,
            [b]: e
              ? countryData[b].name.toLowerCase().includes(e.toLowerCase())
                ? 1
                : 0.3
              : 1,
          }),
          {}
        );
    return jsxRuntimeExports.jsx("div", {
      className:
        "h-[600px] w-full rounded-lg overflow-hidden shadow-lg bg-gray-800",
      children: jsxRuntimeExports.jsx(distExports.VectorMap, {
        map: worldMill,
        onRegionClick: o,
        backgroundColor: "#1f2937",
        containerClassName: "w-full h-full",
        regionStyle: {
          initial: { fill: "#4b5563", stroke: "#374151", strokeWidth: 0.5 },
          hover: { fill: "#60a5fa", cursor: "pointer" },
          selected: { fill: "#3b82f6" },
        },
        series: {
          regions: [
            { scale: ["#4b5563", "#3b82f6"], values: c(), attribute: "fill" },
          ],
        },
        onRegionTipShow: (h, b, en) =>
          countryData[en] ? `${countryData[en].name}` : b,
        zoomOnScroll: !1,
        zoomButtons: !0,
      }),
    });
  },
  CountryDetail = () => {
    const { code: e } = useParams(),
      a = useNavigate(),
      i = e ? countryData[e] : null;
    return i
      ? jsxRuntimeExports.jsxs("div", {
          className: "min-h-screen bg-[#272727] text-white",
          children: [
            jsxRuntimeExports.jsxs("div", {
              className: "relative h-[50vh] overflow-hidden",
              children: [
                jsxRuntimeExports.jsx("img", {
                  src: i.imageUrl,
                  alt: i.name,
                  className: "w-full h-full object-cover",
                }),
                jsxRuntimeExports.jsx("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900",
                }),
                jsxRuntimeExports.jsxs("button", {
                  onClick: () => a("/"),
                  className:
                    "absolute top-6 left-6 flex items-center bg-[#272727] bg-opacity-50 hover:bg-opacity-70 text-white px-4 py-2 rounded-lg transition-colors",
                  children: [
                    jsxRuntimeExports.jsx(ArrowLeft, {
                      className: "w-4 h-4 mr-2",
                    }),
                    "Back to Map",
                  ],
                }),
              ],
            }),
            jsxRuntimeExports.jsx("div", {
              className: "max-w-6xl mx-auto px-4 -mt-32 relative z-10",
              children: jsxRuntimeExports.jsxs("div", {
                className: "bg-gray-800 rounded-xl p-8 shadow-xl",
                children: [
                  jsxRuntimeExports.jsx("h1", {
                    className: "text-4xl font-bold mb-4",
                    children: i.name,
                  }),
                  jsxRuntimeExports.jsx("p", {
                    className: "text-xl text-gray-300 mb-8",
                    children: i.description,
                  }),
                  jsxRuntimeExports.jsxs("div", {
                    className:
                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                    children: [
                      jsxRuntimeExports.jsxs("div", {
                        className: "bg-[#272727] p-6 rounded-lg",
                        children: [
                          jsxRuntimeExports.jsxs("div", {
                            className: "flex items-center mb-4",
                            children: [
                              jsxRuntimeExports.jsx(Utensils, {
                                className: "w-6 h-6 mr-3 text-[#ffc20d]",
                              }),
                              jsxRuntimeExports.jsx("h2", {
                                className: "text-xl font-semibold",
                                children: "Cuisine",
                              }),
                            ],
                          }),
                          jsxRuntimeExports.jsx("ul", {
                            className: "space-y-2",
                            children: i.cuisine.map((o) =>
                              jsxRuntimeExports.jsxs(
                                "li",
                                {
                                  className: "text-gray-300 flex items-center",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "w-2 h-2 bg-blue-400 rounded-full mr-2",
                                    }),
                                    o,
                                  ],
                                },
                                o
                              )
                            ),
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsxs("div", {
                        className: "bg-[#272727] p-6 rounded-lg",
                        children: [
                          jsxRuntimeExports.jsxs("div", {
                            className: "flex items-center mb-4",
                            children: [
                              jsxRuntimeExports.jsx(Users, {
                                className: "w-6 h-6 mr-3 text-[#ffc20d]",
                              }),
                              jsxRuntimeExports.jsx("h2", {
                                className: "text-xl font-semibold",
                                children: "Culture",
                              }),
                            ],
                          }),
                          jsxRuntimeExports.jsx("ul", {
                            className: "space-y-2",
                            children: i.culture.map((o) =>
                              jsxRuntimeExports.jsxs(
                                "li",
                                {
                                  className: "text-gray-300 flex items-center",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "w-2 h-2 bg-blue-400 rounded-full mr-2",
                                    }),
                                    o,
                                  ],
                                },
                                o
                              )
                            ),
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsxs("div", {
                        className: "bg-[#272727] p-6 rounded-lg",
                        children: [
                          jsxRuntimeExports.jsxs("div", {
                            className: "flex items-center mb-4",
                            children: [
                              jsxRuntimeExports.jsx(Landmark, {
                                className: "w-6 h-6 mr-3 text-[#ffc20d]",
                              }),
                              jsxRuntimeExports.jsx("h2", {
                                className: "text-xl font-semibold",
                                children: "Landmarks",
                              }),
                            ],
                          }),
                          jsxRuntimeExports.jsx("ul", {
                            className: "space-y-2",
                            children: i.landmarks.map((o) =>
                              jsxRuntimeExports.jsxs(
                                "li",
                                {
                                  className: "text-gray-300 flex items-center",
                                  children: [
                                    jsxRuntimeExports.jsx("span", {
                                      className:
                                        "w-2 h-2 bg-blue-400 rounded-full mr-2",
                                    }),
                                    o,
                                  ],
                                },
                                o
                              )
                            ),
                          }),
                        ],
                      }),
                      jsxRuntimeExports.jsxs("div", {
                        className: "bg-[#272727] p-6 rounded-lg",
                        children: [
                          jsxRuntimeExports.jsxs("div", {
                            className: "flex items-center mb-4",
                            children: [
                              jsxRuntimeExports.jsx(Camera, {
                                className: "w-6 h-6 mr-3 text-[#ffc20d]",
                              }),
                              jsxRuntimeExports.jsx("h2", {
                                className: "text-xl font-semibold",
                                children: "Gallery",
                              }),
                            ],
                          }),
                          jsxRuntimeExports.jsxs("div", {
                            className: "grid grid-cols-2 gap-2",
                            children: [
                              jsxRuntimeExports.jsx("div", {
                                className:
                                  "aspect-square rounded-lg overflow-hidden",
                                children: jsxRuntimeExports.jsx("img", {
                                  src: i.imageUrl,
                                  alt: i.name,
                                  className: "w-full h-full object-cover",
                                }),
                              }),
                              jsxRuntimeExports.jsx("div", {
                                className:
                                  "aspect-square rounded-lg overflow-hidden",
                                children: jsxRuntimeExports.jsx("img", {
                                  src: i.imageUrl,
                                  alt: i.name,
                                  className: "w-full h-full object-cover",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        })
      : jsxRuntimeExports.jsx("div", {
          className: "min-h-screen bg-[#272727] text-white p-8",
          children: jsxRuntimeExports.jsxs("div", {
            className: "max-w-4xl mx-auto",
            children: [
              jsxRuntimeExports.jsx("h1", {
                className: "text-2xl font-bold mb-4",
                children: "Country not found",
              }),
              jsxRuntimeExports.jsxs("button", {
                onClick: () => a("/"),
                className:
                  "flex items-center text-[#ffc20d] hover:text-blue-300",
                children: [
                  jsxRuntimeExports.jsx(ArrowLeft, {
                    className: "w-4 h-4 mr-2",
                  }),
                  "Back to Map",
                ],
              }),
            ],
          }),
        });
  },
  CountryCard = ({ country: e, code: a }) => {
    const i = useNavigate();
    return jsxRuntimeExports.jsxs("div", {
      className:
        "bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 cursor-pointer",
      onClick: () => i(`/country/${a}`),
      children: [
        jsxRuntimeExports.jsxs("div", {
          className: "relative h-48",
          children: [
            jsxRuntimeExports.jsx("img", {
              src: e.imageUrl,
              alt: e.name,
              className: "w-full h-full object-cover",
            }),
            jsxRuntimeExports.jsx("div", {
              className:
                "absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent",
            }),
            jsxRuntimeExports.jsx("h3", {
              className:
                "absolute bottom-4 left-4 text-2xl font-bold text-white",
              children: e.name,
            }),
          ],
        }),
        jsxRuntimeExports.jsxs("div", {
          className: "p-4 space-y-4",
          children: [
            jsxRuntimeExports.jsxs("div", {
              className: "flex items-center gap-2 text-gray-300",
              children: [
                jsxRuntimeExports.jsx(MapPin, {
                  className: "w-4 h-4 text-[#ffc20d]",
                }),
                jsxRuntimeExports.jsx("span", { children: e.landmarks[0] }),
              ],
            }),
            jsxRuntimeExports.jsxs("div", {
              className: "flex items-center gap-2 text-gray-300",
              children: [
                jsxRuntimeExports.jsx(Utensils, {
                  className: "w-4 h-4 text-[#ffc20d]",
                }),
                jsxRuntimeExports.jsx("span", { children: e.cuisine[0] }),
              ],
            }),
            jsxRuntimeExports.jsxs("div", {
              className: "flex items-center gap-2 text-gray-300",
              children: [
                jsxRuntimeExports.jsx(Users, {
                  className: "w-4 h-4 text-[#ffc20d]",
                }),
                jsxRuntimeExports.jsx("span", { children: e.culture[0] }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  CountryGrid = ({ searchQuery: e, selectedRegion: a }) => {
    const i = (c) =>
        ({
          AS: "Asia",
          EU: "Europe",
          NA: "Americas",
          SA: "Americas",
          AF: "Africa",
          OC: "Oceania",
        }[c.substring(0, 2)] || "Other"),
      o = Object.entries(countryData).filter(([c, h]) => {
        const b = h.name.toLowerCase().includes(e.toLowerCase()),
          en = a === "All" || i(c) === a;
        return b && en;
      });
    return jsxRuntimeExports.jsx("div", {
      className: "container mx-auto px-4 py-8",
      children:
        o.length === 0
          ? jsxRuntimeExports.jsx("div", {
              className: "text-center text-gray-400 py-12",
              children: jsxRuntimeExports.jsx("p", {
                className: "text-xl",
                children: "No countries found matching your criteria",
              }),
            })
          : jsxRuntimeExports.jsx("div", {
              className:
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
              children: o.map(([c, h]) =>
                jsxRuntimeExports.jsx(CountryCard, { code: c, country: h }, c)
              ),
            }),
    });
  };
function App() {
  const [e, a] = reactExports.useState(""),
    [i, o] = reactExports.useState("All"),
    [c, h] = reactExports.useState("map");
  return jsxRuntimeExports.jsx(BrowserRouter, {
    children: jsxRuntimeExports.jsx("div", {
      className: "min-h-screen bg-[#272727]",
      children: jsxRuntimeExports.jsxs(Routes, {
        children: [
          jsxRuntimeExports.jsx(Route, {
            path: "/",
            element: jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
              children: [
                jsxRuntimeExports.jsx(Header, {
                  searchQuery: e,
                  onSearchChange: a,
                  selectedRegion: i,
                  onRegionChange: o,
                }),
                jsxRuntimeExports.jsxs("div", {
                  className: "container mx-auto px-4 py-8",
                  children: [
                    jsxRuntimeExports.jsx("div", {
                      className: "flex justify-end mb-6",
                      children: jsxRuntimeExports.jsxs("div", {
                        className: "inline-flex rounded-lg overflow-hidden",
                        children: [
                          jsxRuntimeExports.jsx("button", {
                            onClick: () => h("map"),
                            className: `px-4 py-2 ${
                              c === "map"
                                ? "bg-blue-500 text-white"
                                : "bg-[#272727] text-gray-300"
                            }`,
                            children: "Map View",
                          }),
                          jsxRuntimeExports.jsx("button", {
                            onClick: () => h("grid"),
                            className: `px-4 py-2 ${
                              c === "grid"
                                ? "bg-blue-500 text-white"
                                : "bg-[#272727] text-gray-300"
                            }`,
                            children: "Grid View",
                          }),
                        ],
                      }),
                    }),
                    c === "map"
                      ? jsxRuntimeExports.jsx(WorldMap, {
                          searchQuery: e,
                          selectedRegion: i,
                        })
                      : jsxRuntimeExports.jsx(CountryGrid, {
                          searchQuery: e,
                          selectedRegion: i,
                        }),
                  ],
                }),
              ],
            }),
          }),
          jsxRuntimeExports.jsx(Route, {
            path: "/country/:code",
            element: jsxRuntimeExports.jsx(CountryDetail, {}),
          }),
        ],
      }),
    }),
  });
}
createRoot(document.getElementById("root")).render(
  jsxRuntimeExports.jsx(reactExports.StrictMode, {
    children: jsxRuntimeExports.jsx(App, {}),
  })
);
