function vy(n, r) {
  for (var o = 0; o < r.length; o++) {
    const l = r[o];
    if (typeof l != "string" && !Array.isArray(l)) {
      for (const s in l)
        if (s !== "default" && !(s in n)) {
          const f = Object.getOwnPropertyDescriptor(l, s);
          f &&
            Object.defineProperty(
              n,
              s,
              f.get ? f : { enumerable: !0, get: () => l[s] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(n, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) l(s);
  new MutationObserver((s) => {
    for (const f of s)
      if (f.type === "childList")
        for (const d of f.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && l(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(s) {
    const f = {};
    return (
      s.integrity && (f.integrity = s.integrity),
      s.referrerPolicy && (f.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (f.credentials = "omit")
        : (f.credentials = "same-origin"),
      f
    );
  }
  function l(s) {
    if (s.ep) return;
    s.ep = !0;
    const f = o(s);
    fetch(s.href, f);
  }
})();
function Ei(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var If = { exports: {} },
  Jo = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Op;
function T2() {
  if (Op) return Jo;
  Op = 1;
  var n = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.fragment");
  function o(l, s, f) {
    var d = null;
    if (
      (f !== void 0 && (d = "" + f),
      s.key !== void 0 && (d = "" + s.key),
      "key" in s)
    ) {
      f = {};
      for (var v in s) v !== "key" && (f[v] = s[v]);
    } else f = s;
    return (
      (s = f.ref),
      { $$typeof: n, type: l, key: d, ref: s !== void 0 ? s : null, props: f }
    );
  }
  return (Jo.Fragment = r), (Jo.jsx = o), (Jo.jsxs = o), Jo;
}
var wp;
function _2() {
  return wp || ((wp = 1), (If.exports = T2())), If.exports;
}
var S = _2(),
  Qf = { exports: {} },
  ze = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jp;
function O2() {
  if (jp) return ze;
  jp = 1;
  var n = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    l = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    f = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    v = Symbol.for("react.forward_ref"),
    h = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    p = Symbol.for("react.lazy"),
    y = Symbol.iterator;
  function b(A) {
    return A === null || typeof A != "object"
      ? null
      : ((A = (y && A[y]) || A["@@iterator"]),
        typeof A == "function" ? A : null);
  }
  var T = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    w = Object.assign,
    O = {};
  function E(A, Z, le) {
    (this.props = A),
      (this.context = Z),
      (this.refs = O),
      (this.updater = le || T);
  }
  (E.prototype.isReactComponent = {}),
    (E.prototype.setState = function (A, Z) {
      if (typeof A != "object" && typeof A != "function" && A != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, A, Z, "setState");
    }),
    (E.prototype.forceUpdate = function (A) {
      this.updater.enqueueForceUpdate(this, A, "forceUpdate");
    });
  function H() {}
  H.prototype = E.prototype;
  function j(A, Z, le) {
    (this.props = A),
      (this.context = Z),
      (this.refs = O),
      (this.updater = le || T);
  }
  var D = (j.prototype = new H());
  (D.constructor = j), w(D, E.prototype), (D.isPureReactComponent = !0);
  var U = Array.isArray,
    R = { H: null, A: null, T: null, S: null, V: null },
    F = Object.prototype.hasOwnProperty;
  function _(A, Z, le, ie, ue, ce) {
    return (
      (le = ce.ref),
      {
        $$typeof: n,
        type: A,
        key: Z,
        ref: le !== void 0 ? le : null,
        props: ce,
      }
    );
  }
  function q(A, Z) {
    return _(A.type, Z, void 0, void 0, void 0, A.props);
  }
  function K(A) {
    return typeof A == "object" && A !== null && A.$$typeof === n;
  }
  function B(A) {
    var Z = { "=": "=0", ":": "=2" };
    return (
      "$" +
      A.replace(/[=:]/g, function (le) {
        return Z[le];
      })
    );
  }
  var $ = /\/+/g;
  function k(A, Z) {
    return typeof A == "object" && A !== null && A.key != null
      ? B("" + A.key)
      : Z.toString(36);
  }
  function ee() {}
  function te(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (
          (typeof A.status == "string"
            ? A.then(ee, ee)
            : ((A.status = "pending"),
              A.then(
                function (Z) {
                  A.status === "pending" &&
                    ((A.status = "fulfilled"), (A.value = Z));
                },
                function (Z) {
                  A.status === "pending" &&
                    ((A.status = "rejected"), (A.reason = Z));
                }
              )),
          A.status)
        ) {
          case "fulfilled":
            return A.value;
          case "rejected":
            throw A.reason;
        }
    }
    throw A;
  }
  function se(A, Z, le, ie, ue) {
    var ce = typeof A;
    (ce === "undefined" || ce === "boolean") && (A = null);
    var me = !1;
    if (A === null) me = !0;
    else
      switch (ce) {
        case "bigint":
        case "string":
        case "number":
          me = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case n:
            case r:
              me = !0;
              break;
            case p:
              return (me = A._init), se(me(A._payload), Z, le, ie, ue);
          }
      }
    if (me)
      return (
        (ue = ue(A)),
        (me = ie === "" ? "." + k(A, 0) : ie),
        U(ue)
          ? ((le = ""),
            me != null && (le = me.replace($, "$&/") + "/"),
            se(ue, Z, le, "", function (ut) {
              return ut;
            }))
          : ue != null &&
            (K(ue) &&
              (ue = q(
                ue,
                le +
                  (ue.key == null || (A && A.key === ue.key)
                    ? ""
                    : ("" + ue.key).replace($, "$&/") + "/") +
                  me
              )),
            Z.push(ue)),
        1
      );
    me = 0;
    var Le = ie === "" ? "." : ie + ":";
    if (U(A))
      for (var De = 0; De < A.length; De++)
        (ie = A[De]), (ce = Le + k(ie, De)), (me += se(ie, Z, le, ce, ue));
    else if (((De = b(A)), typeof De == "function"))
      for (A = De.call(A), De = 0; !(ie = A.next()).done; )
        (ie = ie.value), (ce = Le + k(ie, De++)), (me += se(ie, Z, le, ce, ue));
    else if (ce === "object") {
      if (typeof A.then == "function") return se(te(A), Z, le, ie, ue);
      throw (
        ((Z = String(A)),
        Error(
          "Objects are not valid as a React child (found: " +
            (Z === "[object Object]"
              ? "object with keys {" + Object.keys(A).join(", ") + "}"
              : Z) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return me;
  }
  function z(A, Z, le) {
    if (A == null) return A;
    var ie = [],
      ue = 0;
    return (
      se(A, ie, "", "", function (ce) {
        return Z.call(le, ce, ue++);
      }),
      ie
    );
  }
  function W(A) {
    if (A._status === -1) {
      var Z = A._result;
      (Z = Z()),
        Z.then(
          function (le) {
            (A._status === 0 || A._status === -1) &&
              ((A._status = 1), (A._result = le));
          },
          function (le) {
            (A._status === 0 || A._status === -1) &&
              ((A._status = 2), (A._result = le));
          }
        ),
        A._status === -1 && ((A._status = 0), (A._result = Z));
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var J =
    typeof reportError == "function"
      ? reportError
      : function (A) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var Z = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof A == "object" &&
                A !== null &&
                typeof A.message == "string"
                  ? String(A.message)
                  : String(A),
              error: A,
            });
            if (!window.dispatchEvent(Z)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", A);
            return;
          }
          console.error(A);
        };
  function ve() {}
  return (
    (ze.Children = {
      map: z,
      forEach: function (A, Z, le) {
        z(
          A,
          function () {
            Z.apply(this, arguments);
          },
          le
        );
      },
      count: function (A) {
        var Z = 0;
        return (
          z(A, function () {
            Z++;
          }),
          Z
        );
      },
      toArray: function (A) {
        return (
          z(A, function (Z) {
            return Z;
          }) || []
        );
      },
      only: function (A) {
        if (!K(A))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return A;
      },
    }),
    (ze.Component = E),
    (ze.Fragment = o),
    (ze.Profiler = s),
    (ze.PureComponent = j),
    (ze.StrictMode = l),
    (ze.Suspense = h),
    (ze.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = R),
    (ze.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (A) {
        return R.H.useMemoCache(A);
      },
    }),
    (ze.cache = function (A) {
      return function () {
        return A.apply(null, arguments);
      };
    }),
    (ze.cloneElement = function (A, Z, le) {
      if (A == null)
        throw Error(
          "The argument must be a React element, but you passed " + A + "."
        );
      var ie = w({}, A.props),
        ue = A.key,
        ce = void 0;
      if (Z != null)
        for (me in (Z.ref !== void 0 && (ce = void 0),
        Z.key !== void 0 && (ue = "" + Z.key),
        Z))
          !F.call(Z, me) ||
            me === "key" ||
            me === "__self" ||
            me === "__source" ||
            (me === "ref" && Z.ref === void 0) ||
            (ie[me] = Z[me]);
      var me = arguments.length - 2;
      if (me === 1) ie.children = le;
      else if (1 < me) {
        for (var Le = Array(me), De = 0; De < me; De++)
          Le[De] = arguments[De + 2];
        ie.children = Le;
      }
      return _(A.type, ue, void 0, void 0, ce, ie);
    }),
    (ze.createContext = function (A) {
      return (
        (A = {
          $$typeof: d,
          _currentValue: A,
          _currentValue2: A,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (A.Provider = A),
        (A.Consumer = { $$typeof: f, _context: A }),
        A
      );
    }),
    (ze.createElement = function (A, Z, le) {
      var ie,
        ue = {},
        ce = null;
      if (Z != null)
        for (ie in (Z.key !== void 0 && (ce = "" + Z.key), Z))
          F.call(Z, ie) &&
            ie !== "key" &&
            ie !== "__self" &&
            ie !== "__source" &&
            (ue[ie] = Z[ie]);
      var me = arguments.length - 2;
      if (me === 1) ue.children = le;
      else if (1 < me) {
        for (var Le = Array(me), De = 0; De < me; De++)
          Le[De] = arguments[De + 2];
        ue.children = Le;
      }
      if (A && A.defaultProps)
        for (ie in ((me = A.defaultProps), me))
          ue[ie] === void 0 && (ue[ie] = me[ie]);
      return _(A, ce, void 0, void 0, null, ue);
    }),
    (ze.createRef = function () {
      return { current: null };
    }),
    (ze.forwardRef = function (A) {
      return { $$typeof: v, render: A };
    }),
    (ze.isValidElement = K),
    (ze.lazy = function (A) {
      return { $$typeof: p, _payload: { _status: -1, _result: A }, _init: W };
    }),
    (ze.memo = function (A, Z) {
      return { $$typeof: m, type: A, compare: Z === void 0 ? null : Z };
    }),
    (ze.startTransition = function (A) {
      var Z = R.T,
        le = {};
      R.T = le;
      try {
        var ie = A(),
          ue = R.S;
        ue !== null && ue(le, ie),
          typeof ie == "object" &&
            ie !== null &&
            typeof ie.then == "function" &&
            ie.then(ve, J);
      } catch (ce) {
        J(ce);
      } finally {
        R.T = Z;
      }
    }),
    (ze.unstable_useCacheRefresh = function () {
      return R.H.useCacheRefresh();
    }),
    (ze.use = function (A) {
      return R.H.use(A);
    }),
    (ze.useActionState = function (A, Z, le) {
      return R.H.useActionState(A, Z, le);
    }),
    (ze.useCallback = function (A, Z) {
      return R.H.useCallback(A, Z);
    }),
    (ze.useContext = function (A) {
      return R.H.useContext(A);
    }),
    (ze.useDebugValue = function () {}),
    (ze.useDeferredValue = function (A, Z) {
      return R.H.useDeferredValue(A, Z);
    }),
    (ze.useEffect = function (A, Z, le) {
      var ie = R.H;
      if (typeof le == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return ie.useEffect(A, Z);
    }),
    (ze.useId = function () {
      return R.H.useId();
    }),
    (ze.useImperativeHandle = function (A, Z, le) {
      return R.H.useImperativeHandle(A, Z, le);
    }),
    (ze.useInsertionEffect = function (A, Z) {
      return R.H.useInsertionEffect(A, Z);
    }),
    (ze.useLayoutEffect = function (A, Z) {
      return R.H.useLayoutEffect(A, Z);
    }),
    (ze.useMemo = function (A, Z) {
      return R.H.useMemo(A, Z);
    }),
    (ze.useOptimistic = function (A, Z) {
      return R.H.useOptimistic(A, Z);
    }),
    (ze.useReducer = function (A, Z, le) {
      return R.H.useReducer(A, Z, le);
    }),
    (ze.useRef = function (A) {
      return R.H.useRef(A);
    }),
    (ze.useState = function (A) {
      return R.H.useState(A);
    }),
    (ze.useSyncExternalStore = function (A, Z, le) {
      return R.H.useSyncExternalStore(A, Z, le);
    }),
    (ze.useTransition = function () {
      return R.H.useTransition();
    }),
    (ze.version = "19.1.0"),
    ze
  );
}
var Rp;
function Eh() {
  return Rp || ((Rp = 1), (Qf.exports = O2())), Qf.exports;
}
var x = Eh();
const fe = Ei(x),
  Sc = vy({ __proto__: null, default: fe }, [x]);
var Zf = { exports: {} },
  Wo = {},
  Kf = { exports: {} },
  Jf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ap;
function w2() {
  return (
    Ap ||
      ((Ap = 1),
      (function (n) {
        function r(z, W) {
          var J = z.length;
          z.push(W);
          e: for (; 0 < J; ) {
            var ve = (J - 1) >>> 1,
              A = z[ve];
            if (0 < s(A, W)) (z[ve] = W), (z[J] = A), (J = ve);
            else break e;
          }
        }
        function o(z) {
          return z.length === 0 ? null : z[0];
        }
        function l(z) {
          if (z.length === 0) return null;
          var W = z[0],
            J = z.pop();
          if (J !== W) {
            z[0] = J;
            e: for (var ve = 0, A = z.length, Z = A >>> 1; ve < Z; ) {
              var le = 2 * (ve + 1) - 1,
                ie = z[le],
                ue = le + 1,
                ce = z[ue];
              if (0 > s(ie, J))
                ue < A && 0 > s(ce, ie)
                  ? ((z[ve] = ce), (z[ue] = J), (ve = ue))
                  : ((z[ve] = ie), (z[le] = J), (ve = le));
              else if (ue < A && 0 > s(ce, J))
                (z[ve] = ce), (z[ue] = J), (ve = ue);
              else break e;
            }
          }
          return W;
        }
        function s(z, W) {
          var J = z.sortIndex - W.sortIndex;
          return J !== 0 ? J : z.id - W.id;
        }
        if (
          ((n.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var f = performance;
          n.unstable_now = function () {
            return f.now();
          };
        } else {
          var d = Date,
            v = d.now();
          n.unstable_now = function () {
            return d.now() - v;
          };
        }
        var h = [],
          m = [],
          p = 1,
          y = null,
          b = 3,
          T = !1,
          w = !1,
          O = !1,
          E = !1,
          H = typeof setTimeout == "function" ? setTimeout : null,
          j = typeof clearTimeout == "function" ? clearTimeout : null,
          D = typeof setImmediate < "u" ? setImmediate : null;
        function U(z) {
          for (var W = o(m); W !== null; ) {
            if (W.callback === null) l(m);
            else if (W.startTime <= z)
              l(m), (W.sortIndex = W.expirationTime), r(h, W);
            else break;
            W = o(m);
          }
        }
        function R(z) {
          if (((O = !1), U(z), !w))
            if (o(h) !== null) (w = !0), F || ((F = !0), k());
            else {
              var W = o(m);
              W !== null && se(R, W.startTime - z);
            }
        }
        var F = !1,
          _ = -1,
          q = 5,
          K = -1;
        function B() {
          return E ? !0 : !(n.unstable_now() - K < q);
        }
        function $() {
          if (((E = !1), F)) {
            var z = n.unstable_now();
            K = z;
            var W = !0;
            try {
              e: {
                (w = !1), O && ((O = !1), j(_), (_ = -1)), (T = !0);
                var J = b;
                try {
                  t: {
                    for (
                      U(z), y = o(h);
                      y !== null && !(y.expirationTime > z && B());

                    ) {
                      var ve = y.callback;
                      if (typeof ve == "function") {
                        (y.callback = null), (b = y.priorityLevel);
                        var A = ve(y.expirationTime <= z);
                        if (((z = n.unstable_now()), typeof A == "function")) {
                          (y.callback = A), U(z), (W = !0);
                          break t;
                        }
                        y === o(h) && l(h), U(z);
                      } else l(h);
                      y = o(h);
                    }
                    if (y !== null) W = !0;
                    else {
                      var Z = o(m);
                      Z !== null && se(R, Z.startTime - z), (W = !1);
                    }
                  }
                  break e;
                } finally {
                  (y = null), (b = J), (T = !1);
                }
                W = void 0;
              }
            } finally {
              W ? k() : (F = !1);
            }
          }
        }
        var k;
        if (typeof D == "function")
          k = function () {
            D($);
          };
        else if (typeof MessageChannel < "u") {
          var ee = new MessageChannel(),
            te = ee.port2;
          (ee.port1.onmessage = $),
            (k = function () {
              te.postMessage(null);
            });
        } else
          k = function () {
            H($, 0);
          };
        function se(z, W) {
          _ = H(function () {
            z(n.unstable_now());
          }, W);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (z) {
            z.callback = null;
          }),
          (n.unstable_forceFrameRate = function (z) {
            0 > z || 125 < z
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (q = 0 < z ? Math.floor(1e3 / z) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return b;
          }),
          (n.unstable_next = function (z) {
            switch (b) {
              case 1:
              case 2:
              case 3:
                var W = 3;
                break;
              default:
                W = b;
            }
            var J = b;
            b = W;
            try {
              return z();
            } finally {
              b = J;
            }
          }),
          (n.unstable_requestPaint = function () {
            E = !0;
          }),
          (n.unstable_runWithPriority = function (z, W) {
            switch (z) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                z = 3;
            }
            var J = b;
            b = z;
            try {
              return W();
            } finally {
              b = J;
            }
          }),
          (n.unstable_scheduleCallback = function (z, W, J) {
            var ve = n.unstable_now();
            switch (
              (typeof J == "object" && J !== null
                ? ((J = J.delay),
                  (J = typeof J == "number" && 0 < J ? ve + J : ve))
                : (J = ve),
              z)
            ) {
              case 1:
                var A = -1;
                break;
              case 2:
                A = 250;
                break;
              case 5:
                A = 1073741823;
                break;
              case 4:
                A = 1e4;
                break;
              default:
                A = 5e3;
            }
            return (
              (A = J + A),
              (z = {
                id: p++,
                callback: W,
                priorityLevel: z,
                startTime: J,
                expirationTime: A,
                sortIndex: -1,
              }),
              J > ve
                ? ((z.sortIndex = J),
                  r(m, z),
                  o(h) === null &&
                    z === o(m) &&
                    (O ? (j(_), (_ = -1)) : (O = !0), se(R, J - ve)))
                : ((z.sortIndex = A),
                  r(h, z),
                  w || T || ((w = !0), F || ((F = !0), k()))),
              z
            );
          }),
          (n.unstable_shouldYield = B),
          (n.unstable_wrapCallback = function (z) {
            var W = b;
            return function () {
              var J = b;
              b = W;
              try {
                return z.apply(this, arguments);
              } finally {
                b = J;
              }
            };
          });
      })(Jf)),
    Jf
  );
}
var Np;
function j2() {
  return Np || ((Np = 1), (Kf.exports = w2())), Kf.exports;
}
var Wf = { exports: {} },
  tn = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mp;
function R2() {
  if (Mp) return tn;
  Mp = 1;
  var n = Eh();
  function r(h) {
    var m = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var p = 2; p < arguments.length; p++)
        m += "&args[]=" + encodeURIComponent(arguments[p]);
    }
    return (
      "Minified React error #" +
      h +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o() {}
  var l = {
      d: {
        f: o,
        r: function () {
          throw Error(r(522));
        },
        D: o,
        C: o,
        L: o,
        m: o,
        X: o,
        S: o,
        M: o,
      },
      p: 0,
      findDOMNode: null,
    },
    s = Symbol.for("react.portal");
  function f(h, m, p) {
    var y =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: y == null ? null : "" + y,
      children: h,
      containerInfo: m,
      implementation: p,
    };
  }
  var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function v(h, m) {
    if (h === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l),
    (tn.createPortal = function (h, m) {
      var p =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(r(299));
      return f(h, m, null, p);
    }),
    (tn.flushSync = function (h) {
      var m = d.T,
        p = l.p;
      try {
        if (((d.T = null), (l.p = 2), h)) return h();
      } finally {
        (d.T = m), (l.p = p), l.d.f();
      }
    }),
    (tn.preconnect = function (h, m) {
      typeof h == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        l.d.C(h, m));
    }),
    (tn.prefetchDNS = function (h) {
      typeof h == "string" && l.d.D(h);
    }),
    (tn.preinit = function (h, m) {
      if (typeof h == "string" && m && typeof m.as == "string") {
        var p = m.as,
          y = v(p, m.crossOrigin),
          b = typeof m.integrity == "string" ? m.integrity : void 0,
          T = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        p === "style"
          ? l.d.S(h, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: y,
              integrity: b,
              fetchPriority: T,
            })
          : p === "script" &&
            l.d.X(h, {
              crossOrigin: y,
              integrity: b,
              fetchPriority: T,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (tn.preinitModule = function (h, m) {
      if (typeof h == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var p = v(m.as, m.crossOrigin);
            l.d.M(h, {
              crossOrigin: p,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && l.d.M(h);
    }),
    (tn.preload = function (h, m) {
      if (
        typeof h == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var p = m.as,
          y = v(p, m.crossOrigin);
        l.d.L(h, p, {
          crossOrigin: y,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (tn.preloadModule = function (h, m) {
      if (typeof h == "string")
        if (m) {
          var p = v(m.as, m.crossOrigin);
          l.d.m(h, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: p,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else l.d.m(h);
    }),
    (tn.requestFormReset = function (h) {
      l.d.r(h);
    }),
    (tn.unstable_batchedUpdates = function (h, m) {
      return h(m);
    }),
    (tn.useFormState = function (h, m, p) {
      return d.H.useFormState(h, m, p);
    }),
    (tn.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (tn.version = "19.1.0"),
    tn
  );
}
var Dp;
function py() {
  if (Dp) return Wf.exports;
  Dp = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), (Wf.exports = R2()), Wf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zp;
function A2() {
  if (zp) return Wo;
  zp = 1;
  var n = j2(),
    r = Eh(),
    o = py();
  function l(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function f(e) {
    var t = e,
      a = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (a = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? a : null;
  }
  function d(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function v(e) {
    if (f(e) !== e) throw Error(l(188));
  }
  function h(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = f(e)), t === null)) throw Error(l(188));
      return t !== e ? null : e;
    }
    for (var a = e, i = t; ; ) {
      var c = a.return;
      if (c === null) break;
      var u = c.alternate;
      if (u === null) {
        if (((i = c.return), i !== null)) {
          a = i;
          continue;
        }
        break;
      }
      if (c.child === u.child) {
        for (u = c.child; u; ) {
          if (u === a) return v(c), e;
          if (u === i) return v(c), t;
          u = u.sibling;
        }
        throw Error(l(188));
      }
      if (a.return !== i.return) (a = c), (i = u);
      else {
        for (var g = !1, C = c.child; C; ) {
          if (C === a) {
            (g = !0), (a = c), (i = u);
            break;
          }
          if (C === i) {
            (g = !0), (i = c), (a = u);
            break;
          }
          C = C.sibling;
        }
        if (!g) {
          for (C = u.child; C; ) {
            if (C === a) {
              (g = !0), (a = u), (i = c);
              break;
            }
            if (C === i) {
              (g = !0), (i = u), (a = c);
              break;
            }
            C = C.sibling;
          }
          if (!g) throw Error(l(189));
        }
      }
      if (a.alternate !== i) throw Error(l(190));
    }
    if (a.tag !== 3) throw Error(l(188));
    return a.stateNode.current === a ? e : t;
  }
  function m(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = m(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var p = Object.assign,
    y = Symbol.for("react.element"),
    b = Symbol.for("react.transitional.element"),
    T = Symbol.for("react.portal"),
    w = Symbol.for("react.fragment"),
    O = Symbol.for("react.strict_mode"),
    E = Symbol.for("react.profiler"),
    H = Symbol.for("react.provider"),
    j = Symbol.for("react.consumer"),
    D = Symbol.for("react.context"),
    U = Symbol.for("react.forward_ref"),
    R = Symbol.for("react.suspense"),
    F = Symbol.for("react.suspense_list"),
    _ = Symbol.for("react.memo"),
    q = Symbol.for("react.lazy"),
    K = Symbol.for("react.activity"),
    B = Symbol.for("react.memo_cache_sentinel"),
    $ = Symbol.iterator;
  function k(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = ($ && e[$]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var ee = Symbol.for("react.client.reference");
  function te(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ee ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case w:
        return "Fragment";
      case E:
        return "Profiler";
      case O:
        return "StrictMode";
      case R:
        return "Suspense";
      case F:
        return "SuspenseList";
      case K:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case T:
          return "Portal";
        case D:
          return (e.displayName || "Context") + ".Provider";
        case j:
          return (e._context.displayName || "Context") + ".Consumer";
        case U:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case _:
          return (
            (t = e.displayName || null), t !== null ? t : te(e.type) || "Memo"
          );
        case q:
          (t = e._payload), (e = e._init);
          try {
            return te(e(t));
          } catch {}
      }
    return null;
  }
  var se = Array.isArray,
    z = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    W = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    J = { pending: !1, data: null, method: null, action: null },
    ve = [],
    A = -1;
  function Z(e) {
    return { current: e };
  }
  function le(e) {
    0 > A || ((e.current = ve[A]), (ve[A] = null), A--);
  }
  function ie(e, t) {
    A++, (ve[A] = e.current), (e.current = t);
  }
  var ue = Z(null),
    ce = Z(null),
    me = Z(null),
    Le = Z(null);
  function De(e, t) {
    switch ((ie(me, t), ie(ce, e), ie(ue, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? ep(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          (t = ep(t)), (e = tp(t, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    le(ue), ie(ue, e);
  }
  function ut() {
    le(ue), le(ce), le(me);
  }
  function st(e) {
    e.memoizedState !== null && ie(Le, e);
    var t = ue.current,
      a = tp(t, e.type);
    t !== a && (ie(ce, e), ie(ue, a));
  }
  function Ft(e) {
    ce.current === e && (le(ue), le(ce)),
      Le.current === e && (le(Le), (Fo._currentValue = J));
  }
  var He = Object.prototype.hasOwnProperty,
    Ie = n.unstable_scheduleCallback,
    Mt = n.unstable_cancelCallback,
    un = n.unstable_shouldYield,
    ft = n.unstable_requestPaint,
    dt = n.unstable_now,
    nn = n.unstable_getCurrentPriorityLevel,
    It = n.unstable_ImmediatePriority,
    qt = n.unstable_UserBlockingPriority,
    Ke = n.unstable_NormalPriority,
    ht = n.unstable_LowPriority,
    Tt = n.unstable_IdlePriority,
    xt = n.log,
    pt = n.unstable_setDisableYieldValue,
    an = null,
    jt = null;
  function St(e) {
    if (
      (typeof xt == "function" && pt(e),
      jt && typeof jt.setStrictMode == "function")
    )
      try {
        jt.setStrictMode(an, e);
      } catch {}
  }
  var rt = Math.clz32 ? Math.clz32 : Xa,
    pa = Math.log,
    Fn = Math.LN2;
  function Xa(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((pa(e) / Fn) | 0)) | 0;
  }
  var Vt = 256,
    Rn = 4194304;
  function Wt(e) {
    var t = e & 42;
    if (t !== 0) return t;
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
        return 64;
      case 128:
        return 128;
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
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function mt(e, t, a) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var c = 0,
      u = e.suspendedLanes,
      g = e.pingedLanes;
    e = e.warmLanes;
    var C = i & 134217727;
    return (
      C !== 0
        ? ((i = C & ~u),
          i !== 0
            ? (c = Wt(i))
            : ((g &= C),
              g !== 0
                ? (c = Wt(g))
                : a || ((a = C & ~e), a !== 0 && (c = Wt(a)))))
        : ((C = i & ~u),
          C !== 0
            ? (c = Wt(C))
            : g !== 0
            ? (c = Wt(g))
            : a || ((a = i & ~e), a !== 0 && (c = Wt(a)))),
      c === 0
        ? 0
        : t !== 0 &&
          t !== c &&
          (t & u) === 0 &&
          ((u = c & -c),
          (a = t & -t),
          u >= a || (u === 32 && (a & 4194048) !== 0))
        ? t
        : c
    );
  }
  function Bt(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function la(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ga() {
    var e = Vt;
    return (Vt <<= 1), (Vt & 4194048) === 0 && (Vt = 256), e;
  }
  function Tr() {
    var e = Rn;
    return (Rn <<= 1), (Rn & 62914560) === 0 && (Rn = 4194304), e;
  }
  function ya(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function In(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function ao(e, t, a, i, c, u) {
    var g = e.pendingLanes;
    (e.pendingLanes = a),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= a),
      (e.entangledLanes &= a),
      (e.errorRecoveryDisabledLanes &= a),
      (e.shellSuspendCounter = 0);
    var C = e.entanglements,
      N = e.expirationTimes,
      Y = e.hiddenUpdates;
    for (a = g & ~a; 0 < a; ) {
      var ne = 31 - rt(a),
        re = 1 << ne;
      (C[ne] = 0), (N[ne] = -1);
      var I = Y[ne];
      if (I !== null)
        for (Y[ne] = null, ne = 0; ne < I.length; ne++) {
          var Q = I[ne];
          Q !== null && (Q.lane &= -536870913);
        }
      a &= ~re;
    }
    i !== 0 && Ya(e, i, 0),
      u !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(g & ~t));
  }
  function Ya(e, t, a) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var i = 31 - rt(t);
    (e.entangledLanes |= t),
      (e.entanglements[i] = e.entanglements[i] | 1073741824 | (a & 4194090));
  }
  function ba(e, t) {
    var a = (e.entangledLanes |= t);
    for (e = e.entanglements; a; ) {
      var i = 31 - rt(a),
        c = 1 << i;
      (c & t) | (e[i] & t) && (e[i] |= t), (a &= ~c);
    }
  }
  function Qn(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function An(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Zn() {
    var e = W.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : xp(e.type));
  }
  function oa(e, t) {
    var a = W.p;
    try {
      return (W.p = e), t();
    } finally {
      W.p = a;
    }
  }
  var Qt = Math.random().toString(36).slice(2),
    M = "__reactFiber$" + Qt,
    P = "__reactProps$" + Qt,
    G = "__reactContainer$" + Qt,
    oe = "__reactEvents$" + Qt,
    de = "__reactListeners$" + Qt,
    pe = "__reactHandles$" + Qt,
    xe = "__reactResources$" + Qt,
    he = "__reactMarker$" + Qt;
  function ye(e) {
    delete e[M], delete e[P], delete e[oe], delete e[de], delete e[pe];
  }
  function ge(e) {
    var t = e[M];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if ((t = a[G] || a[M])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (e = lp(e); e !== null; ) {
            if ((a = e[M])) return a;
            e = lp(e);
          }
        return t;
      }
      (e = a), (a = e.parentNode);
    }
    return null;
  }
  function Se(e) {
    if ((e = e[M] || e[G])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function we(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(l(33));
  }
  function Ne(e) {
    var t = e[xe];
    return (
      t ||
        (t = e[xe] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Be(e) {
    e[he] = !0;
  }
  var Qe = new Set(),
    Ve = {};
  function Ye(e, t) {
    Ct(e, t), Ct(e + "Capture", t);
  }
  function Ct(e, t) {
    for (Ve[e] = t, e = 0; e < t.length; e++) Qe.add(t[e]);
  }
  var _r = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Nn = {},
    bn = {};
  function ro(e) {
    return He.call(bn, e)
      ? !0
      : He.call(Nn, e)
      ? !1
      : _r.test(e)
      ? (bn[e] = !0)
      : ((Nn[e] = !0), !1);
  }
  function ia(e, t, a) {
    if (ro(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var i = t.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + a);
      }
  }
  function Mn(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + a);
    }
  }
  function fn(e, t, a, i) {
    if (i === null) e.removeAttribute(a);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + i);
    }
  }
  var Fa, ke;
  function et(e) {
    if (Fa === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        (Fa = (t && t[1]) || ""),
          (ke =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Fa +
      e +
      ke
    );
  }
  var sa = !1;
  function xa(e, t) {
    if (!e || sa) return "";
    sa = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var re = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(re.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(re, []);
                } catch (Q) {
                  var I = Q;
                }
                Reflect.construct(e, [], re);
              } else {
                try {
                  re.call();
                } catch (Q) {
                  I = Q;
                }
                e.call(re.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Q) {
                I = Q;
              }
              (re = e()) &&
                typeof re.catch == "function" &&
                re.catch(function () {});
            }
          } catch (Q) {
            if (Q && I && typeof Q.stack == "string") return [Q.stack, I.stack];
          }
          return [null, null];
        },
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name"
      );
      c &&
        c.configurable &&
        Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = i.DetermineComponentFrameRoot(),
        g = u[0],
        C = u[1];
      if (g && C) {
        var N = g.split(`
`),
          Y = C.split(`
`);
        for (
          c = i = 0;
          i < N.length && !N[i].includes("DetermineComponentFrameRoot");

        )
          i++;
        for (; c < Y.length && !Y[c].includes("DetermineComponentFrameRoot"); )
          c++;
        if (i === N.length || c === Y.length)
          for (
            i = N.length - 1, c = Y.length - 1;
            1 <= i && 0 <= c && N[i] !== Y[c];

          )
            c--;
        for (; 1 <= i && 0 <= c; i--, c--)
          if (N[i] !== Y[c]) {
            if (i !== 1 || c !== 1)
              do
                if ((i--, c--, 0 > c || N[i] !== Y[c])) {
                  var ne =
                    `
` + N[i].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      ne.includes("<anonymous>") &&
                      (ne = ne.replace("<anonymous>", e.displayName)),
                    ne
                  );
                }
              while (1 <= i && 0 <= c);
            break;
          }
      }
    } finally {
      (sa = !1), (Error.prepareStackTrace = a);
    }
    return (a = e ? e.displayName || e.name : "") ? et(a) : "";
  }
  function _t(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return et(e.type);
      case 16:
        return et("Lazy");
      case 13:
        return et("Suspense");
      case 19:
        return et("SuspenseList");
      case 0:
      case 15:
        return xa(e.type, !1);
      case 11:
        return xa(e.type.render, !1);
      case 1:
        return xa(e.type, !0);
      case 31:
        return et("Activity");
      default:
        return "";
    }
  }
  function Sa(e) {
    try {
      var t = "";
      do (t += _t(e)), (e = e.return);
      while (e);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function rn(e) {
    switch (typeof e) {
      case "bigint":
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
  function Di(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function bb(e) {
    var t = Di(e) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      i = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var c = a.get,
        u = a.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return c.call(this);
          },
          set: function (g) {
            (i = "" + g), u.call(this, g);
          },
        }),
        Object.defineProperty(e, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return i;
          },
          setValue: function (g) {
            i = "" + g;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function zi(e) {
    e._valueTracker || (e._valueTracker = bb(e));
  }
  function Zh(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      i = "";
    return (
      e && (i = Di(e) ? (e.checked ? "true" : "false") : e.value),
      (e = i),
      e !== a ? (t.setValue(e), !0) : !1
    );
  }
  function Li(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var xb = /[\n"\\]/g;
  function Dn(e) {
    return e.replace(xb, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Gc(e, t, a, i, c, u, g, C) {
    (e.name = ""),
      g != null &&
      typeof g != "function" &&
      typeof g != "symbol" &&
      typeof g != "boolean"
        ? (e.type = g)
        : e.removeAttribute("type"),
      t != null
        ? g === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + rn(t))
          : e.value !== "" + rn(t) && (e.value = "" + rn(t))
        : (g !== "submit" && g !== "reset") || e.removeAttribute("value"),
      t != null
        ? Xc(e, g, rn(t))
        : a != null
        ? Xc(e, g, rn(a))
        : i != null && e.removeAttribute("value"),
      c == null && u != null && (e.defaultChecked = !!u),
      c != null &&
        (e.checked = c && typeof c != "function" && typeof c != "symbol"),
      C != null &&
      typeof C != "function" &&
      typeof C != "symbol" &&
      typeof C != "boolean"
        ? (e.name = "" + rn(C))
        : e.removeAttribute("name");
  }
  function Kh(e, t, a, i, c, u, g, C) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (e.type = u),
      t != null || a != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || t != null)) return;
      (a = a != null ? "" + rn(a) : ""),
        (t = t != null ? "" + rn(t) : a),
        C || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (i = i ?? c),
      (i = typeof i != "function" && typeof i != "symbol" && !!i),
      (e.checked = C ? e.checked : !!i),
      (e.defaultChecked = !!i),
      g != null &&
        typeof g != "function" &&
        typeof g != "symbol" &&
        typeof g != "boolean" &&
        (e.name = g);
  }
  function Xc(e, t, a) {
    (t === "number" && Li(e.ownerDocument) === e) ||
      e.defaultValue === "" + a ||
      (e.defaultValue = "" + a);
  }
  function ll(e, t, a, i) {
    if (((e = e.options), t)) {
      t = {};
      for (var c = 0; c < a.length; c++) t["$" + a[c]] = !0;
      for (a = 0; a < e.length; a++)
        (c = t.hasOwnProperty("$" + e[a].value)),
          e[a].selected !== c && (e[a].selected = c),
          c && i && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + rn(a), t = null, c = 0; c < e.length; c++) {
        if (e[c].value === a) {
          (e[c].selected = !0), i && (e[c].defaultSelected = !0);
          return;
        }
        t !== null || e[c].disabled || (t = e[c]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Jh(e, t, a) {
    if (
      t != null &&
      ((t = "" + rn(t)), t !== e.value && (e.value = t), a == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + rn(a) : "";
  }
  function Wh(e, t, a, i) {
    if (t == null) {
      if (i != null) {
        if (a != null) throw Error(l(92));
        if (se(i)) {
          if (1 < i.length) throw Error(l(93));
          i = i[0];
        }
        a = i;
      }
      a == null && (a = ""), (t = a);
    }
    (a = rn(t)),
      (e.defaultValue = a),
      (i = e.textContent),
      i === a && i !== "" && i !== null && (e.value = i);
  }
  function ol(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Sb = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function em(e, t, a) {
    var i = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? i
        ? e.setProperty(t, "")
        : t === "float"
        ? (e.cssFloat = "")
        : (e[t] = "")
      : i
      ? e.setProperty(t, a)
      : typeof a != "number" || a === 0 || Sb.has(t)
      ? t === "float"
        ? (e.cssFloat = a)
        : (e[t] = ("" + a).trim())
      : (e[t] = a + "px");
  }
  function tm(e, t, a) {
    if (t != null && typeof t != "object") throw Error(l(62));
    if (((e = e.style), a != null)) {
      for (var i in a)
        !a.hasOwnProperty(i) ||
          (t != null && t.hasOwnProperty(i)) ||
          (i.indexOf("--") === 0
            ? e.setProperty(i, "")
            : i === "float"
            ? (e.cssFloat = "")
            : (e[i] = ""));
      for (var c in t)
        (i = t[c]), t.hasOwnProperty(c) && a[c] !== i && em(e, c, i);
    } else for (var u in t) t.hasOwnProperty(u) && em(e, u, t[u]);
  }
  function Yc(e) {
    if (e.indexOf("-") === -1) return !1;
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
  var Cb = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Eb =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Hi(e) {
    return Eb.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var Fc = null;
  function Ic(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var il = null,
    sl = null;
  function nm(e) {
    var t = Se(e);
    if (t && (e = t.stateNode)) {
      var a = e[P] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Gc(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + Dn("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var i = a[t];
              if (i !== e && i.form === e.form) {
                var c = i[P] || null;
                if (!c) throw Error(l(90));
                Gc(
                  i,
                  c.value,
                  c.defaultValue,
                  c.defaultValue,
                  c.checked,
                  c.defaultChecked,
                  c.type,
                  c.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              (i = a[t]), i.form === e.form && Zh(i);
          }
          break e;
        case "textarea":
          Jh(e, a.value, a.defaultValue);
          break e;
        case "select":
          (t = a.value), t != null && ll(e, !!a.multiple, t, !1);
      }
    }
  }
  var Qc = !1;
  function am(e, t, a) {
    if (Qc) return e(t, a);
    Qc = !0;
    try {
      var i = e(t);
      return i;
    } finally {
      if (
        ((Qc = !1),
        (il !== null || sl !== null) &&
          (Ss(), il && ((t = il), (e = sl), (sl = il = null), nm(t), e)))
      )
        for (t = 0; t < e.length; t++) nm(e[t]);
    }
  }
  function lo(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var i = a[P] || null;
    if (i === null) return null;
    a = i[t];
    e: switch (t) {
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
        (i = !i.disabled) ||
          ((e = e.type),
          (i = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !i);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function") throw Error(l(231, t, typeof a));
    return a;
  }
  var Ca = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Zc = !1;
  if (Ca)
    try {
      var oo = {};
      Object.defineProperty(oo, "passive", {
        get: function () {
          Zc = !0;
        },
      }),
        window.addEventListener("test", oo, oo),
        window.removeEventListener("test", oo, oo);
    } catch {
      Zc = !1;
    }
  var Ia = null,
    Kc = null,
    Bi = null;
  function rm() {
    if (Bi) return Bi;
    var e,
      t = Kc,
      a = t.length,
      i,
      c = "value" in Ia ? Ia.value : Ia.textContent,
      u = c.length;
    for (e = 0; e < a && t[e] === c[e]; e++);
    var g = a - e;
    for (i = 1; i <= g && t[a - i] === c[u - i]; i++);
    return (Bi = c.slice(e, 1 < i ? 1 - i : void 0));
  }
  function Ui(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function $i() {
    return !0;
  }
  function lm() {
    return !1;
  }
  function dn(e) {
    function t(a, i, c, u, g) {
      (this._reactName = a),
        (this._targetInst = c),
        (this.type = i),
        (this.nativeEvent = u),
        (this.target = g),
        (this.currentTarget = null);
      for (var C in e)
        e.hasOwnProperty(C) && ((a = e[C]), (this[C] = a ? a(u) : u[C]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? $i
          : lm),
        (this.isPropagationStopped = lm),
        this
      );
    }
    return (
      p(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = $i));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = $i));
        },
        persist: function () {},
        isPersistent: $i,
      }),
      t
    );
  }
  var Or = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Pi = dn(Or),
    io = p({}, Or, { view: 0, detail: 0 }),
    Tb = dn(io),
    Jc,
    Wc,
    so,
    qi = p({}, io, {
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
      getModifierState: tu,
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
          : (e !== so &&
              (so && e.type === "mousemove"
                ? ((Jc = e.screenX - so.screenX), (Wc = e.screenY - so.screenY))
                : (Wc = Jc = 0),
              (so = e)),
            Jc);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Wc;
      },
    }),
    om = dn(qi),
    _b = p({}, qi, { dataTransfer: 0 }),
    Ob = dn(_b),
    wb = p({}, io, { relatedTarget: 0 }),
    eu = dn(wb),
    jb = p({}, Or, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Rb = dn(jb),
    Ab = p({}, Or, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Nb = dn(Ab),
    Mb = p({}, Or, { data: 0 }),
    im = dn(Mb),
    Db = {
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
    zb = {
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
    Lb = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Hb(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Lb[e])
      ? !!t[e]
      : !1;
  }
  function tu() {
    return Hb;
  }
  var Bb = p({}, io, {
      key: function (e) {
        if (e.key) {
          var t = Db[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ui(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? zb[e.keyCode] || "Unidentified"
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
      getModifierState: tu,
      charCode: function (e) {
        return e.type === "keypress" ? Ui(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ui(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    Ub = dn(Bb),
    $b = p({}, qi, {
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
    sm = dn($b),
    Pb = p({}, io, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: tu,
    }),
    qb = dn(Pb),
    Vb = p({}, Or, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    kb = dn(Vb),
    Gb = p({}, qi, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
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
    Xb = dn(Gb),
    Yb = p({}, Or, { newState: 0, oldState: 0 }),
    Fb = dn(Yb),
    Ib = [9, 13, 27, 32],
    nu = Ca && "CompositionEvent" in window,
    co = null;
  Ca && "documentMode" in document && (co = document.documentMode);
  var Qb = Ca && "TextEvent" in window && !co,
    cm = Ca && (!nu || (co && 8 < co && 11 >= co)),
    um = " ",
    fm = !1;
  function dm(e, t) {
    switch (e) {
      case "keyup":
        return Ib.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function hm(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var cl = !1;
  function Zb(e, t) {
    switch (e) {
      case "compositionend":
        return hm(t);
      case "keypress":
        return t.which !== 32 ? null : ((fm = !0), um);
      case "textInput":
        return (e = t.data), e === um && fm ? null : e;
      default:
        return null;
    }
  }
  function Kb(e, t) {
    if (cl)
      return e === "compositionend" || (!nu && dm(e, t))
        ? ((e = rm()), (Bi = Kc = Ia = null), (cl = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return cm && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Jb = {
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
  function mm(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Jb[e.type] : t === "textarea";
  }
  function vm(e, t, a, i) {
    il ? (sl ? sl.push(i) : (sl = [i])) : (il = i),
      (t = ws(t, "onChange")),
      0 < t.length &&
        ((a = new Pi("onChange", "change", null, a, i)),
        e.push({ event: a, listeners: t }));
  }
  var uo = null,
    fo = null;
  function Wb(e) {
    Qv(e, 0);
  }
  function Vi(e) {
    var t = we(e);
    if (Zh(t)) return e;
  }
  function pm(e, t) {
    if (e === "change") return t;
  }
  var gm = !1;
  if (Ca) {
    var au;
    if (Ca) {
      var ru = "oninput" in document;
      if (!ru) {
        var ym = document.createElement("div");
        ym.setAttribute("oninput", "return;"),
          (ru = typeof ym.oninput == "function");
      }
      au = ru;
    } else au = !1;
    gm = au && (!document.documentMode || 9 < document.documentMode);
  }
  function bm() {
    uo && (uo.detachEvent("onpropertychange", xm), (fo = uo = null));
  }
  function xm(e) {
    if (e.propertyName === "value" && Vi(fo)) {
      var t = [];
      vm(t, fo, e, Ic(e)), am(Wb, t);
    }
  }
  function ex(e, t, a) {
    e === "focusin"
      ? (bm(), (uo = t), (fo = a), uo.attachEvent("onpropertychange", xm))
      : e === "focusout" && bm();
  }
  function tx(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Vi(fo);
  }
  function nx(e, t) {
    if (e === "click") return Vi(t);
  }
  function ax(e, t) {
    if (e === "input" || e === "change") return Vi(t);
  }
  function rx(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var xn = typeof Object.is == "function" ? Object.is : rx;
  function ho(e, t) {
    if (xn(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(e),
      i = Object.keys(t);
    if (a.length !== i.length) return !1;
    for (i = 0; i < a.length; i++) {
      var c = a[i];
      if (!He.call(t, c) || !xn(e[c], t[c])) return !1;
    }
    return !0;
  }
  function Sm(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Cm(e, t) {
    var a = Sm(e);
    e = 0;
    for (var i; a; ) {
      if (a.nodeType === 3) {
        if (((i = e + a.textContent.length), e <= t && i >= t))
          return { node: a, offset: t - e };
        e = i;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Sm(a);
    }
  }
  function Em(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Em(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Tm(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Li(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Li(e.document);
    }
    return t;
  }
  function lu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var lx = Ca && "documentMode" in document && 11 >= document.documentMode,
    ul = null,
    ou = null,
    mo = null,
    iu = !1;
  function _m(e, t, a) {
    var i =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    iu ||
      ul == null ||
      ul !== Li(i) ||
      ((i = ul),
      "selectionStart" in i && lu(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = (
            (i.ownerDocument && i.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (mo && ho(mo, i)) ||
        ((mo = i),
        (i = ws(ou, "onSelect")),
        0 < i.length &&
          ((t = new Pi("onSelect", "select", null, t, a)),
          e.push({ event: t, listeners: i }),
          (t.target = ul))));
  }
  function wr(e, t) {
    var a = {};
    return (
      (a[e.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + e] = "webkit" + t),
      (a["Moz" + e] = "moz" + t),
      a
    );
  }
  var fl = {
      animationend: wr("Animation", "AnimationEnd"),
      animationiteration: wr("Animation", "AnimationIteration"),
      animationstart: wr("Animation", "AnimationStart"),
      transitionrun: wr("Transition", "TransitionRun"),
      transitionstart: wr("Transition", "TransitionStart"),
      transitioncancel: wr("Transition", "TransitionCancel"),
      transitionend: wr("Transition", "TransitionEnd"),
    },
    su = {},
    Om = {};
  Ca &&
    ((Om = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete fl.animationend.animation,
      delete fl.animationiteration.animation,
      delete fl.animationstart.animation),
    "TransitionEvent" in window || delete fl.transitionend.transition);
  function jr(e) {
    if (su[e]) return su[e];
    if (!fl[e]) return e;
    var t = fl[e],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in Om) return (su[e] = t[a]);
    return e;
  }
  var wm = jr("animationend"),
    jm = jr("animationiteration"),
    Rm = jr("animationstart"),
    ox = jr("transitionrun"),
    ix = jr("transitionstart"),
    sx = jr("transitioncancel"),
    Am = jr("transitionend"),
    Nm = new Map(),
    cu =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  cu.push("scrollEnd");
  function Kn(e, t) {
    Nm.set(e, t), Ye(t, [e]);
  }
  var Mm = new WeakMap();
  function zn(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = Mm.get(e);
      return a !== void 0
        ? a
        : ((t = { value: e, source: t, stack: Sa(t) }), Mm.set(e, t), t);
    }
    return { value: e, source: t, stack: Sa(t) };
  }
  var Ln = [],
    dl = 0,
    uu = 0;
  function ki() {
    for (var e = dl, t = (uu = dl = 0); t < e; ) {
      var a = Ln[t];
      Ln[t++] = null;
      var i = Ln[t];
      Ln[t++] = null;
      var c = Ln[t];
      Ln[t++] = null;
      var u = Ln[t];
      if (((Ln[t++] = null), i !== null && c !== null)) {
        var g = i.pending;
        g === null ? (c.next = c) : ((c.next = g.next), (g.next = c)),
          (i.pending = c);
      }
      u !== 0 && Dm(a, c, u);
    }
  }
  function Gi(e, t, a, i) {
    (Ln[dl++] = e),
      (Ln[dl++] = t),
      (Ln[dl++] = a),
      (Ln[dl++] = i),
      (uu |= i),
      (e.lanes |= i),
      (e = e.alternate),
      e !== null && (e.lanes |= i);
  }
  function fu(e, t, a, i) {
    return Gi(e, t, a, i), Xi(e);
  }
  function hl(e, t) {
    return Gi(e, null, null, t), Xi(e);
  }
  function Dm(e, t, a) {
    e.lanes |= a;
    var i = e.alternate;
    i !== null && (i.lanes |= a);
    for (var c = !1, u = e.return; u !== null; )
      (u.childLanes |= a),
        (i = u.alternate),
        i !== null && (i.childLanes |= a),
        u.tag === 22 &&
          ((e = u.stateNode), e === null || e._visibility & 1 || (c = !0)),
        (e = u),
        (u = u.return);
    return e.tag === 3
      ? ((u = e.stateNode),
        c &&
          t !== null &&
          ((c = 31 - rt(a)),
          (e = u.hiddenUpdates),
          (i = e[c]),
          i === null ? (e[c] = [t]) : i.push(t),
          (t.lane = a | 536870912)),
        u)
      : null;
  }
  function Xi(e) {
    if (50 < $o) throw (($o = 0), (yf = null), Error(l(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var ml = {};
  function cx(e, t, a, i) {
    (this.tag = e),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Sn(e, t, a, i) {
    return new cx(e, t, a, i);
  }
  function du(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Ea(e, t) {
    var a = e.alternate;
    return (
      a === null
        ? ((a = Sn(e.tag, t, e.key, e.mode)),
          (a.elementType = e.elementType),
          (a.type = e.type),
          (a.stateNode = e.stateNode),
          (a.alternate = e),
          (e.alternate = a))
        : ((a.pendingProps = t),
          (a.type = e.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = e.flags & 65011712),
      (a.childLanes = e.childLanes),
      (a.lanes = e.lanes),
      (a.child = e.child),
      (a.memoizedProps = e.memoizedProps),
      (a.memoizedState = e.memoizedState),
      (a.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = e.sibling),
      (a.index = e.index),
      (a.ref = e.ref),
      (a.refCleanup = e.refCleanup),
      a
    );
  }
  function zm(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return (
      a === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = a.childLanes),
          (e.lanes = a.lanes),
          (e.child = a.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = a.memoizedProps),
          (e.memoizedState = a.memoizedState),
          (e.updateQueue = a.updateQueue),
          (e.type = a.type),
          (t = a.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Yi(e, t, a, i, c, u) {
    var g = 0;
    if (((i = e), typeof e == "function")) du(e) && (g = 1);
    else if (typeof e == "string")
      g = f2(e, a, ue.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
        ? 27
        : 5;
    else
      e: switch (e) {
        case K:
          return (e = Sn(31, a, t, c)), (e.elementType = K), (e.lanes = u), e;
        case w:
          return Rr(a.children, c, u, t);
        case O:
          (g = 8), (c |= 24);
          break;
        case E:
          return (
            (e = Sn(12, a, t, c | 2)), (e.elementType = E), (e.lanes = u), e
          );
        case R:
          return (e = Sn(13, a, t, c)), (e.elementType = R), (e.lanes = u), e;
        case F:
          return (e = Sn(19, a, t, c)), (e.elementType = F), (e.lanes = u), e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case H:
              case D:
                g = 10;
                break e;
              case j:
                g = 9;
                break e;
              case U:
                g = 11;
                break e;
              case _:
                g = 14;
                break e;
              case q:
                (g = 16), (i = null);
                break e;
            }
          (g = 29),
            (a = Error(l(130, e === null ? "null" : typeof e, ""))),
            (i = null);
      }
    return (
      (t = Sn(g, a, t, c)), (t.elementType = e), (t.type = i), (t.lanes = u), t
    );
  }
  function Rr(e, t, a, i) {
    return (e = Sn(7, e, i, t)), (e.lanes = a), e;
  }
  function hu(e, t, a) {
    return (e = Sn(6, e, null, t)), (e.lanes = a), e;
  }
  function mu(e, t, a) {
    return (
      (t = Sn(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var vl = [],
    pl = 0,
    Fi = null,
    Ii = 0,
    Hn = [],
    Bn = 0,
    Ar = null,
    Ta = 1,
    _a = "";
  function Nr(e, t) {
    (vl[pl++] = Ii), (vl[pl++] = Fi), (Fi = e), (Ii = t);
  }
  function Lm(e, t, a) {
    (Hn[Bn++] = Ta), (Hn[Bn++] = _a), (Hn[Bn++] = Ar), (Ar = e);
    var i = Ta;
    e = _a;
    var c = 32 - rt(i) - 1;
    (i &= ~(1 << c)), (a += 1);
    var u = 32 - rt(t) + c;
    if (30 < u) {
      var g = c - (c % 5);
      (u = (i & ((1 << g) - 1)).toString(32)),
        (i >>= g),
        (c -= g),
        (Ta = (1 << (32 - rt(t) + c)) | (a << c) | i),
        (_a = u + e);
    } else (Ta = (1 << u) | (a << c) | i), (_a = e);
  }
  function vu(e) {
    e.return !== null && (Nr(e, 1), Lm(e, 1, 0));
  }
  function pu(e) {
    for (; e === Fi; )
      (Fi = vl[--pl]), (vl[pl] = null), (Ii = vl[--pl]), (vl[pl] = null);
    for (; e === Ar; )
      (Ar = Hn[--Bn]),
        (Hn[Bn] = null),
        (_a = Hn[--Bn]),
        (Hn[Bn] = null),
        (Ta = Hn[--Bn]),
        (Hn[Bn] = null);
  }
  var ln = null,
    Ot = null,
    Ze = !1,
    Mr = null,
    ca = !1,
    gu = Error(l(519));
  function Dr(e) {
    var t = Error(l(418, ""));
    throw (go(zn(t, e)), gu);
  }
  function Hm(e) {
    var t = e.stateNode,
      a = e.type,
      i = e.memoizedProps;
    switch (((t[M] = e), (t[P] = i), a)) {
      case "dialog":
        qe("cancel", t), qe("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        qe("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < qo.length; a++) qe(qo[a], t);
        break;
      case "source":
        qe("error", t);
        break;
      case "img":
      case "image":
      case "link":
        qe("error", t), qe("load", t);
        break;
      case "details":
        qe("toggle", t);
        break;
      case "input":
        qe("invalid", t),
          Kh(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          ),
          zi(t);
        break;
      case "select":
        qe("invalid", t);
        break;
      case "textarea":
        qe("invalid", t), Wh(t, i.value, i.defaultValue, i.children), zi(t);
    }
    (a = i.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      i.suppressHydrationWarning === !0 ||
      Wv(t.textContent, a)
        ? (i.popover != null && (qe("beforetoggle", t), qe("toggle", t)),
          i.onScroll != null && qe("scroll", t),
          i.onScrollEnd != null && qe("scrollend", t),
          i.onClick != null && (t.onclick = js),
          (t = !0))
        : (t = !1),
      t || Dr(e);
  }
  function Bm(e) {
    for (ln = e.return; ln; )
      switch (ln.tag) {
        case 5:
        case 13:
          ca = !1;
          return;
        case 27:
        case 3:
          ca = !0;
          return;
        default:
          ln = ln.return;
      }
  }
  function vo(e) {
    if (e !== ln) return !1;
    if (!Ze) return Bm(e), (Ze = !0), !1;
    var t = e.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = e.type),
          (a =
            !(a !== "form" && a !== "button") || zf(e.type, e.memoizedProps))),
        (a = !a)),
      a && Ot && Dr(e),
      Bm(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(l(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((a = e.data), a === "/$")) {
              if (t === 0) {
                Ot = Wn(e.nextSibling);
                break e;
              }
              t--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || t++;
          e = e.nextSibling;
        }
        Ot = null;
      }
    } else
      t === 27
        ? ((t = Ot), ur(e.type) ? ((e = Uf), (Uf = null), (Ot = e)) : (Ot = t))
        : (Ot = ln ? Wn(e.stateNode.nextSibling) : null);
    return !0;
  }
  function po() {
    (Ot = ln = null), (Ze = !1);
  }
  function Um() {
    var e = Mr;
    return (
      e !== null &&
        (vn === null ? (vn = e) : vn.push.apply(vn, e), (Mr = null)),
      e
    );
  }
  function go(e) {
    Mr === null ? (Mr = [e]) : Mr.push(e);
  }
  var yu = Z(null),
    zr = null,
    Oa = null;
  function Qa(e, t, a) {
    ie(yu, t._currentValue), (t._currentValue = a);
  }
  function wa(e) {
    (e._currentValue = yu.current), le(yu);
  }
  function bu(e, t, a) {
    for (; e !== null; ) {
      var i = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), i !== null && (i.childLanes |= t))
          : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
        e === a)
      )
        break;
      e = e.return;
    }
  }
  function xu(e, t, a, i) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var u = c.dependencies;
      if (u !== null) {
        var g = c.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var C = u;
          u = c;
          for (var N = 0; N < t.length; N++)
            if (C.context === t[N]) {
              (u.lanes |= a),
                (C = u.alternate),
                C !== null && (C.lanes |= a),
                bu(u.return, a, e),
                i || (g = null);
              break e;
            }
          u = C.next;
        }
      } else if (c.tag === 18) {
        if (((g = c.return), g === null)) throw Error(l(341));
        (g.lanes |= a),
          (u = g.alternate),
          u !== null && (u.lanes |= a),
          bu(g, a, e),
          (g = null);
      } else g = c.child;
      if (g !== null) g.return = c;
      else
        for (g = c; g !== null; ) {
          if (g === e) {
            g = null;
            break;
          }
          if (((c = g.sibling), c !== null)) {
            (c.return = g.return), (g = c);
            break;
          }
          g = g.return;
        }
      c = g;
    }
  }
  function yo(e, t, a, i) {
    e = null;
    for (var c = t, u = !1; c !== null; ) {
      if (!u) {
        if ((c.flags & 524288) !== 0) u = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var g = c.alternate;
        if (g === null) throw Error(l(387));
        if (((g = g.memoizedProps), g !== null)) {
          var C = c.type;
          xn(c.pendingProps.value, g.value) ||
            (e !== null ? e.push(C) : (e = [C]));
        }
      } else if (c === Le.current) {
        if (((g = c.alternate), g === null)) throw Error(l(387));
        g.memoizedState.memoizedState !== c.memoizedState.memoizedState &&
          (e !== null ? e.push(Fo) : (e = [Fo]));
      }
      c = c.return;
    }
    e !== null && xu(t, e, a, i), (t.flags |= 262144);
  }
  function Qi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!xn(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Lr(e) {
    (zr = e),
      (Oa = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function en(e) {
    return $m(zr, e);
  }
  function Zi(e, t) {
    return zr === null && Lr(e), $m(e, t);
  }
  function $m(e, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), Oa === null)) {
      if (e === null) throw Error(l(308));
      (Oa = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else Oa = Oa.next = t;
    return a;
  }
  var ux =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, i) {
                  e.push(i);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (a) {
                  return a();
                });
            };
          },
    fx = n.unstable_scheduleCallback,
    dx = n.unstable_NormalPriority,
    Ut = {
      $$typeof: D,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Su() {
    return { controller: new ux(), data: new Map(), refCount: 0 };
  }
  function bo(e) {
    e.refCount--,
      e.refCount === 0 &&
        fx(dx, function () {
          e.controller.abort();
        });
  }
  var xo = null,
    Cu = 0,
    gl = 0,
    yl = null;
  function hx(e, t) {
    if (xo === null) {
      var a = (xo = []);
      (Cu = 0),
        (gl = _f()),
        (yl = {
          status: "pending",
          value: void 0,
          then: function (i) {
            a.push(i);
          },
        });
    }
    return Cu++, t.then(Pm, Pm), t;
  }
  function Pm() {
    if (--Cu === 0 && xo !== null) {
      yl !== null && (yl.status = "fulfilled");
      var e = xo;
      (xo = null), (gl = 0), (yl = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function mx(e, t) {
    var a = [],
      i = {
        status: "pending",
        value: null,
        reason: null,
        then: function (c) {
          a.push(c);
        },
      };
    return (
      e.then(
        function () {
          (i.status = "fulfilled"), (i.value = t);
          for (var c = 0; c < a.length; c++) (0, a[c])(t);
        },
        function (c) {
          for (i.status = "rejected", i.reason = c, c = 0; c < a.length; c++)
            (0, a[c])(void 0);
        }
      ),
      i
    );
  }
  var qm = z.S;
  z.S = function (e, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      hx(e, t),
      qm !== null && qm(e, t);
  };
  var Hr = Z(null);
  function Eu() {
    var e = Hr.current;
    return e !== null ? e : vt.pooledCache;
  }
  function Ki(e, t) {
    t === null ? ie(Hr, Hr.current) : ie(Hr, t.pool);
  }
  function Vm() {
    var e = Eu();
    return e === null ? null : { parent: Ut._currentValue, pool: e };
  }
  var So = Error(l(460)),
    km = Error(l(474)),
    Ji = Error(l(542)),
    Tu = { then: function () {} };
  function Gm(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function Wi() {}
  function Xm(e, t, a) {
    switch (
      ((a = e[a]),
      a === void 0 ? e.push(t) : a !== t && (t.then(Wi, Wi), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), Fm(e), e);
      default:
        if (typeof t.status == "string") t.then(Wi, Wi);
        else {
          if (((e = vt), e !== null && 100 < e.shellSuspendCounter))
            throw Error(l(482));
          (e = t),
            (e.status = "pending"),
            e.then(
              function (i) {
                if (t.status === "pending") {
                  var c = t;
                  (c.status = "fulfilled"), (c.value = i);
                }
              },
              function (i) {
                if (t.status === "pending") {
                  var c = t;
                  (c.status = "rejected"), (c.reason = i);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), Fm(e), e);
        }
        throw ((Co = t), So);
    }
  }
  var Co = null;
  function Ym() {
    if (Co === null) throw Error(l(459));
    var e = Co;
    return (Co = null), e;
  }
  function Fm(e) {
    if (e === So || e === Ji) throw Error(l(483));
  }
  var Za = !1;
  function _u(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Ou(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function Ka(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Ja(e, t, a) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), (tt & 2) !== 0)) {
      var c = i.pending;
      return (
        c === null ? (t.next = t) : ((t.next = c.next), (c.next = t)),
        (i.pending = t),
        (t = Xi(e)),
        Dm(e, null, a),
        t
      );
    }
    return Gi(e, i, t, a), Xi(e);
  }
  function Eo(e, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var i = t.lanes;
      (i &= e.pendingLanes), (a |= i), (t.lanes = a), ba(e, a);
    }
  }
  function wu(e, t) {
    var a = e.updateQueue,
      i = e.alternate;
    if (i !== null && ((i = i.updateQueue), a === i)) {
      var c = null,
        u = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var g = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          u === null ? (c = u = g) : (u = u.next = g), (a = a.next);
        } while (a !== null);
        u === null ? (c = u = t) : (u = u.next = t);
      } else c = u = t;
      (a = {
        baseState: i.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: u,
        shared: i.shared,
        callbacks: i.callbacks,
      }),
        (e.updateQueue = a);
      return;
    }
    (e = a.lastBaseUpdate),
      e === null ? (a.firstBaseUpdate = t) : (e.next = t),
      (a.lastBaseUpdate = t);
  }
  var ju = !1;
  function To() {
    if (ju) {
      var e = yl;
      if (e !== null) throw e;
    }
  }
  function _o(e, t, a, i) {
    ju = !1;
    var c = e.updateQueue;
    Za = !1;
    var u = c.firstBaseUpdate,
      g = c.lastBaseUpdate,
      C = c.shared.pending;
    if (C !== null) {
      c.shared.pending = null;
      var N = C,
        Y = N.next;
      (N.next = null), g === null ? (u = Y) : (g.next = Y), (g = N);
      var ne = e.alternate;
      ne !== null &&
        ((ne = ne.updateQueue),
        (C = ne.lastBaseUpdate),
        C !== g &&
          (C === null ? (ne.firstBaseUpdate = Y) : (C.next = Y),
          (ne.lastBaseUpdate = N)));
    }
    if (u !== null) {
      var re = c.baseState;
      (g = 0), (ne = Y = N = null), (C = u);
      do {
        var I = C.lane & -536870913,
          Q = I !== C.lane;
        if (Q ? (Ge & I) === I : (i & I) === I) {
          I !== 0 && I === gl && (ju = !0),
            ne !== null &&
              (ne = ne.next =
                {
                  lane: 0,
                  tag: C.tag,
                  payload: C.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var Ae = e,
              _e = C;
            I = t;
            var it = a;
            switch (_e.tag) {
              case 1:
                if (((Ae = _e.payload), typeof Ae == "function")) {
                  re = Ae.call(it, re, I);
                  break e;
                }
                re = Ae;
                break e;
              case 3:
                Ae.flags = (Ae.flags & -65537) | 128;
              case 0:
                if (
                  ((Ae = _e.payload),
                  (I = typeof Ae == "function" ? Ae.call(it, re, I) : Ae),
                  I == null)
                )
                  break e;
                re = p({}, re, I);
                break e;
              case 2:
                Za = !0;
            }
          }
          (I = C.callback),
            I !== null &&
              ((e.flags |= 64),
              Q && (e.flags |= 8192),
              (Q = c.callbacks),
              Q === null ? (c.callbacks = [I]) : Q.push(I));
        } else
          (Q = {
            lane: I,
            tag: C.tag,
            payload: C.payload,
            callback: C.callback,
            next: null,
          }),
            ne === null ? ((Y = ne = Q), (N = re)) : (ne = ne.next = Q),
            (g |= I);
        if (((C = C.next), C === null)) {
          if (((C = c.shared.pending), C === null)) break;
          (Q = C),
            (C = Q.next),
            (Q.next = null),
            (c.lastBaseUpdate = Q),
            (c.shared.pending = null);
        }
      } while (!0);
      ne === null && (N = re),
        (c.baseState = N),
        (c.firstBaseUpdate = Y),
        (c.lastBaseUpdate = ne),
        u === null && (c.shared.lanes = 0),
        (or |= g),
        (e.lanes = g),
        (e.memoizedState = re);
    }
  }
  function Im(e, t) {
    if (typeof e != "function") throw Error(l(191, e));
    e.call(t);
  }
  function Qm(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++) Im(a[e], t);
  }
  var bl = Z(null),
    es = Z(0);
  function Zm(e, t) {
    (e = za), ie(es, e), ie(bl, t), (za = e | t.baseLanes);
  }
  function Ru() {
    ie(es, za), ie(bl, bl.current);
  }
  function Au() {
    (za = es.current), le(bl), le(es);
  }
  var Wa = 0,
    Ue = null,
    lt = null,
    Dt = null,
    ts = !1,
    xl = !1,
    Br = !1,
    ns = 0,
    Oo = 0,
    Sl = null,
    vx = 0;
  function Rt() {
    throw Error(l(321));
  }
  function Nu(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!xn(e[a], t[a])) return !1;
    return !0;
  }
  function Mu(e, t, a, i, c, u) {
    return (
      (Wa = u),
      (Ue = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (z.H = e === null || e.memoizedState === null ? D0 : z0),
      (Br = !1),
      (u = a(i, c)),
      (Br = !1),
      xl && (u = Jm(t, a, i, c)),
      Km(e),
      u
    );
  }
  function Km(e) {
    z.H = ss;
    var t = lt !== null && lt.next !== null;
    if (((Wa = 0), (Dt = lt = Ue = null), (ts = !1), (Oo = 0), (Sl = null), t))
      throw Error(l(300));
    e === null ||
      kt ||
      ((e = e.dependencies), e !== null && Qi(e) && (kt = !0));
  }
  function Jm(e, t, a, i) {
    Ue = e;
    var c = 0;
    do {
      if ((xl && (Sl = null), (Oo = 0), (xl = !1), 25 <= c))
        throw Error(l(301));
      if (((c += 1), (Dt = lt = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        (u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0);
      }
      (z.H = Cx), (u = t(a, i));
    } while (xl);
    return u;
  }
  function px() {
    var e = z.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? wo(t) : t),
      (e = e.useState()[0]),
      (lt !== null ? lt.memoizedState : null) !== e && (Ue.flags |= 1024),
      t
    );
  }
  function Du() {
    var e = ns !== 0;
    return (ns = 0), e;
  }
  function zu(e, t, a) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a);
  }
  function Lu(e) {
    if (ts) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      ts = !1;
    }
    (Wa = 0), (Dt = lt = Ue = null), (xl = !1), (Oo = ns = 0), (Sl = null);
  }
  function hn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Dt === null ? (Ue.memoizedState = Dt = e) : (Dt = Dt.next = e), Dt;
  }
  function zt() {
    if (lt === null) {
      var e = Ue.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = lt.next;
    var t = Dt === null ? Ue.memoizedState : Dt.next;
    if (t !== null) (Dt = t), (lt = e);
    else {
      if (e === null)
        throw Ue.alternate === null ? Error(l(467)) : Error(l(310));
      (lt = e),
        (e = {
          memoizedState: lt.memoizedState,
          baseState: lt.baseState,
          baseQueue: lt.baseQueue,
          queue: lt.queue,
          next: null,
        }),
        Dt === null ? (Ue.memoizedState = Dt = e) : (Dt = Dt.next = e);
    }
    return Dt;
  }
  function Hu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function wo(e) {
    var t = Oo;
    return (
      (Oo += 1),
      Sl === null && (Sl = []),
      (e = Xm(Sl, e, t)),
      (t = Ue),
      (Dt === null ? t.memoizedState : Dt.next) === null &&
        ((t = t.alternate),
        (z.H = t === null || t.memoizedState === null ? D0 : z0)),
      e
    );
  }
  function as(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return wo(e);
      if (e.$$typeof === D) return en(e);
    }
    throw Error(l(438, String(e)));
  }
  function Bu(e) {
    var t = null,
      a = Ue.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var i = Ue.alternate;
      i !== null &&
        ((i = i.updateQueue),
        i !== null &&
          ((i = i.memoCache),
          i != null &&
            (t = {
              data: i.data.map(function (c) {
                return c.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = Hu()), (Ue.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(e), i = 0; i < e; i++) a[i] = B;
    return t.index++, a;
  }
  function ja(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function rs(e) {
    var t = zt();
    return Uu(t, lt, e);
  }
  function Uu(e, t, a) {
    var i = e.queue;
    if (i === null) throw Error(l(311));
    i.lastRenderedReducer = a;
    var c = e.baseQueue,
      u = i.pending;
    if (u !== null) {
      if (c !== null) {
        var g = c.next;
        (c.next = u.next), (u.next = g);
      }
      (t.baseQueue = c = u), (i.pending = null);
    }
    if (((u = e.baseState), c === null)) e.memoizedState = u;
    else {
      t = c.next;
      var C = (g = null),
        N = null,
        Y = t,
        ne = !1;
      do {
        var re = Y.lane & -536870913;
        if (re !== Y.lane ? (Ge & re) === re : (Wa & re) === re) {
          var I = Y.revertLane;
          if (I === 0)
            N !== null &&
              (N = N.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: Y.action,
                  hasEagerState: Y.hasEagerState,
                  eagerState: Y.eagerState,
                  next: null,
                }),
              re === gl && (ne = !0);
          else if ((Wa & I) === I) {
            (Y = Y.next), I === gl && (ne = !0);
            continue;
          } else
            (re = {
              lane: 0,
              revertLane: Y.revertLane,
              action: Y.action,
              hasEagerState: Y.hasEagerState,
              eagerState: Y.eagerState,
              next: null,
            }),
              N === null ? ((C = N = re), (g = u)) : (N = N.next = re),
              (Ue.lanes |= I),
              (or |= I);
          (re = Y.action),
            Br && a(u, re),
            (u = Y.hasEagerState ? Y.eagerState : a(u, re));
        } else
          (I = {
            lane: re,
            revertLane: Y.revertLane,
            action: Y.action,
            hasEagerState: Y.hasEagerState,
            eagerState: Y.eagerState,
            next: null,
          }),
            N === null ? ((C = N = I), (g = u)) : (N = N.next = I),
            (Ue.lanes |= re),
            (or |= re);
        Y = Y.next;
      } while (Y !== null && Y !== t);
      if (
        (N === null ? (g = u) : (N.next = C),
        !xn(u, e.memoizedState) && ((kt = !0), ne && ((a = yl), a !== null)))
      )
        throw a;
      (e.memoizedState = u),
        (e.baseState = g),
        (e.baseQueue = N),
        (i.lastRenderedState = u);
    }
    return c === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
  }
  function $u(e) {
    var t = zt(),
      a = t.queue;
    if (a === null) throw Error(l(311));
    a.lastRenderedReducer = e;
    var i = a.dispatch,
      c = a.pending,
      u = t.memoizedState;
    if (c !== null) {
      a.pending = null;
      var g = (c = c.next);
      do (u = e(u, g.action)), (g = g.next);
      while (g !== c);
      xn(u, t.memoizedState) || (kt = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (a.lastRenderedState = u);
    }
    return [u, i];
  }
  function Wm(e, t, a) {
    var i = Ue,
      c = zt(),
      u = Ze;
    if (u) {
      if (a === void 0) throw Error(l(407));
      a = a();
    } else a = t();
    var g = !xn((lt || c).memoizedState, a);
    g && ((c.memoizedState = a), (kt = !0)), (c = c.queue);
    var C = n0.bind(null, i, c, e);
    if (
      (jo(2048, 8, C, [e]),
      c.getSnapshot !== t || g || (Dt !== null && Dt.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        Cl(9, ls(), t0.bind(null, i, c, a, t), null),
        vt === null)
      )
        throw Error(l(349));
      u || (Wa & 124) !== 0 || e0(i, t, a);
    }
    return a;
  }
  function e0(e, t, a) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: a }),
      (t = Ue.updateQueue),
      t === null
        ? ((t = Hu()), (Ue.updateQueue = t), (t.stores = [e]))
        : ((a = t.stores), a === null ? (t.stores = [e]) : a.push(e));
  }
  function t0(e, t, a, i) {
    (t.value = a), (t.getSnapshot = i), a0(t) && r0(e);
  }
  function n0(e, t, a) {
    return a(function () {
      a0(t) && r0(e);
    });
  }
  function a0(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !xn(e, a);
    } catch {
      return !0;
    }
  }
  function r0(e) {
    var t = hl(e, 2);
    t !== null && On(t, e, 2);
  }
  function Pu(e) {
    var t = hn();
    if (typeof e == "function") {
      var a = e;
      if (((e = a()), Br)) {
        St(!0);
        try {
          a();
        } finally {
          St(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ja,
        lastRenderedState: e,
      }),
      t
    );
  }
  function l0(e, t, a, i) {
    return (e.baseState = a), Uu(e, lt, typeof i == "function" ? i : ja);
  }
  function gx(e, t, a, i, c) {
    if (is(e)) throw Error(l(485));
    if (((e = t.action), e !== null)) {
      var u = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (g) {
          u.listeners.push(g);
        },
      };
      z.T !== null ? a(!0) : (u.isTransition = !1),
        i(u),
        (a = t.pending),
        a === null
          ? ((u.next = t.pending = u), o0(t, u))
          : ((u.next = a.next), (t.pending = a.next = u));
    }
  }
  function o0(e, t) {
    var a = t.action,
      i = t.payload,
      c = e.state;
    if (t.isTransition) {
      var u = z.T,
        g = {};
      z.T = g;
      try {
        var C = a(c, i),
          N = z.S;
        N !== null && N(g, C), i0(e, t, C);
      } catch (Y) {
        qu(e, t, Y);
      } finally {
        z.T = u;
      }
    } else
      try {
        (u = a(c, i)), i0(e, t, u);
      } catch (Y) {
        qu(e, t, Y);
      }
  }
  function i0(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (i) {
            s0(e, t, i);
          },
          function (i) {
            return qu(e, t, i);
          }
        )
      : s0(e, t, a);
  }
  function s0(e, t, a) {
    (t.status = "fulfilled"),
      (t.value = a),
      c0(t),
      (e.state = a),
      (t = e.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (e.pending = null) : ((a = a.next), (t.next = a), o0(e, a)));
  }
  function qu(e, t, a) {
    var i = e.pending;
    if (((e.pending = null), i !== null)) {
      i = i.next;
      do (t.status = "rejected"), (t.reason = a), c0(t), (t = t.next);
      while (t !== i);
    }
    e.action = null;
  }
  function c0(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function u0(e, t) {
    return t;
  }
  function f0(e, t) {
    if (Ze) {
      var a = vt.formState;
      if (a !== null) {
        e: {
          var i = Ue;
          if (Ze) {
            if (Ot) {
              t: {
                for (var c = Ot, u = ca; c.nodeType !== 8; ) {
                  if (!u) {
                    c = null;
                    break t;
                  }
                  if (((c = Wn(c.nextSibling)), c === null)) {
                    c = null;
                    break t;
                  }
                }
                (u = c.data), (c = u === "F!" || u === "F" ? c : null);
              }
              if (c) {
                (Ot = Wn(c.nextSibling)), (i = c.data === "F!");
                break e;
              }
            }
            Dr(i);
          }
          i = !1;
        }
        i && (t = a[0]);
      }
    }
    return (
      (a = hn()),
      (a.memoizedState = a.baseState = t),
      (i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: u0,
        lastRenderedState: t,
      }),
      (a.queue = i),
      (a = A0.bind(null, Ue, i)),
      (i.dispatch = a),
      (i = Pu(!1)),
      (u = Yu.bind(null, Ue, !1, i.queue)),
      (i = hn()),
      (c = { state: t, dispatch: null, action: e, pending: null }),
      (i.queue = c),
      (a = gx.bind(null, Ue, c, u, a)),
      (c.dispatch = a),
      (i.memoizedState = e),
      [t, a, !1]
    );
  }
  function d0(e) {
    var t = zt();
    return h0(t, lt, e);
  }
  function h0(e, t, a) {
    if (
      ((t = Uu(e, t, u0)[0]),
      (e = rs(ja)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var i = wo(t);
      } catch (g) {
        throw g === So ? Ji : g;
      }
    else i = t;
    t = zt();
    var c = t.queue,
      u = c.dispatch;
    return (
      a !== t.memoizedState &&
        ((Ue.flags |= 2048), Cl(9, ls(), yx.bind(null, c, a), null)),
      [i, u, e]
    );
  }
  function yx(e, t) {
    e.action = t;
  }
  function m0(e) {
    var t = zt(),
      a = lt;
    if (a !== null) return h0(t, a, e);
    zt(), (t = t.memoizedState), (a = zt());
    var i = a.queue.dispatch;
    return (a.memoizedState = e), [t, i, !1];
  }
  function Cl(e, t, a, i) {
    return (
      (e = { tag: e, create: a, deps: i, inst: t, next: null }),
      (t = Ue.updateQueue),
      t === null && ((t = Hu()), (Ue.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = e.next = e)
        : ((i = a.next), (a.next = e), (e.next = i), (t.lastEffect = e)),
      e
    );
  }
  function ls() {
    return { destroy: void 0, resource: void 0 };
  }
  function v0() {
    return zt().memoizedState;
  }
  function os(e, t, a, i) {
    var c = hn();
    (i = i === void 0 ? null : i),
      (Ue.flags |= e),
      (c.memoizedState = Cl(1 | t, ls(), a, i));
  }
  function jo(e, t, a, i) {
    var c = zt();
    i = i === void 0 ? null : i;
    var u = c.memoizedState.inst;
    lt !== null && i !== null && Nu(i, lt.memoizedState.deps)
      ? (c.memoizedState = Cl(t, u, a, i))
      : ((Ue.flags |= e), (c.memoizedState = Cl(1 | t, u, a, i)));
  }
  function p0(e, t) {
    os(8390656, 8, e, t);
  }
  function g0(e, t) {
    jo(2048, 8, e, t);
  }
  function y0(e, t) {
    return jo(4, 2, e, t);
  }
  function b0(e, t) {
    return jo(4, 4, e, t);
  }
  function x0(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function S0(e, t, a) {
    (a = a != null ? a.concat([e]) : null), jo(4, 4, x0.bind(null, t, e), a);
  }
  function Vu() {}
  function C0(e, t) {
    var a = zt();
    t = t === void 0 ? null : t;
    var i = a.memoizedState;
    return t !== null && Nu(t, i[1]) ? i[0] : ((a.memoizedState = [e, t]), e);
  }
  function E0(e, t) {
    var a = zt();
    t = t === void 0 ? null : t;
    var i = a.memoizedState;
    if (t !== null && Nu(t, i[1])) return i[0];
    if (((i = e()), Br)) {
      St(!0);
      try {
        e();
      } finally {
        St(!1);
      }
    }
    return (a.memoizedState = [i, t]), i;
  }
  function ku(e, t, a) {
    return a === void 0 || (Wa & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = a), (e = Ov()), (Ue.lanes |= e), (or |= e), a);
  }
  function T0(e, t, a, i) {
    return xn(a, t)
      ? a
      : bl.current !== null
      ? ((e = ku(e, a, i)), xn(e, t) || (kt = !0), e)
      : (Wa & 42) === 0
      ? ((kt = !0), (e.memoizedState = a))
      : ((e = Ov()), (Ue.lanes |= e), (or |= e), t);
  }
  function _0(e, t, a, i, c) {
    var u = W.p;
    W.p = u !== 0 && 8 > u ? u : 8;
    var g = z.T,
      C = {};
    (z.T = C), Yu(e, !1, t, a);
    try {
      var N = c(),
        Y = z.S;
      if (
        (Y !== null && Y(C, N),
        N !== null && typeof N == "object" && typeof N.then == "function")
      ) {
        var ne = mx(N, i);
        Ro(e, t, ne, _n(e));
      } else Ro(e, t, i, _n(e));
    } catch (re) {
      Ro(e, t, { then: function () {}, status: "rejected", reason: re }, _n());
    } finally {
      (W.p = u), (z.T = g);
    }
  }
  function bx() {}
  function Gu(e, t, a, i) {
    if (e.tag !== 5) throw Error(l(476));
    var c = O0(e).queue;
    _0(
      e,
      c,
      t,
      J,
      a === null
        ? bx
        : function () {
            return w0(e), a(i);
          }
    );
  }
  function O0(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: J,
      baseState: J,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ja,
        lastRenderedState: J,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ja,
          lastRenderedState: a,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function w0(e) {
    var t = O0(e).next.queue;
    Ro(e, t, {}, _n());
  }
  function Xu() {
    return en(Fo);
  }
  function j0() {
    return zt().memoizedState;
  }
  function R0() {
    return zt().memoizedState;
  }
  function xx(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = _n();
          e = Ka(a);
          var i = Ja(t, e, a);
          i !== null && (On(i, t, a), Eo(i, t, a)),
            (t = { cache: Su() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function Sx(e, t, a) {
    var i = _n();
    (a = {
      lane: i,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      is(e)
        ? N0(t, a)
        : ((a = fu(e, t, a, i)), a !== null && (On(a, e, i), M0(a, t, i)));
  }
  function A0(e, t, a) {
    var i = _n();
    Ro(e, t, a, i);
  }
  function Ro(e, t, a, i) {
    var c = {
      lane: i,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (is(e)) N0(t, c);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var g = t.lastRenderedState,
            C = u(g, a);
          if (((c.hasEagerState = !0), (c.eagerState = C), xn(C, g)))
            return Gi(e, t, c, 0), vt === null && ki(), !1;
        } catch {
        } finally {
        }
      if (((a = fu(e, t, c, i)), a !== null))
        return On(a, e, i), M0(a, t, i), !0;
    }
    return !1;
  }
  function Yu(e, t, a, i) {
    if (
      ((i = {
        lane: 2,
        revertLane: _f(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      is(e))
    ) {
      if (t) throw Error(l(479));
    } else (t = fu(e, a, i, 2)), t !== null && On(t, e, 2);
  }
  function is(e) {
    var t = e.alternate;
    return e === Ue || (t !== null && t === Ue);
  }
  function N0(e, t) {
    xl = ts = !0;
    var a = e.pending;
    a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (e.pending = t);
  }
  function M0(e, t, a) {
    if ((a & 4194048) !== 0) {
      var i = t.lanes;
      (i &= e.pendingLanes), (a |= i), (t.lanes = a), ba(e, a);
    }
  }
  var ss = {
      readContext: en,
      use: as,
      useCallback: Rt,
      useContext: Rt,
      useEffect: Rt,
      useImperativeHandle: Rt,
      useLayoutEffect: Rt,
      useInsertionEffect: Rt,
      useMemo: Rt,
      useReducer: Rt,
      useRef: Rt,
      useState: Rt,
      useDebugValue: Rt,
      useDeferredValue: Rt,
      useTransition: Rt,
      useSyncExternalStore: Rt,
      useId: Rt,
      useHostTransitionStatus: Rt,
      useFormState: Rt,
      useActionState: Rt,
      useOptimistic: Rt,
      useMemoCache: Rt,
      useCacheRefresh: Rt,
    },
    D0 = {
      readContext: en,
      use: as,
      useCallback: function (e, t) {
        return (hn().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: en,
      useEffect: p0,
      useImperativeHandle: function (e, t, a) {
        (a = a != null ? a.concat([e]) : null),
          os(4194308, 4, x0.bind(null, t, e), a);
      },
      useLayoutEffect: function (e, t) {
        return os(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        os(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var a = hn();
        t = t === void 0 ? null : t;
        var i = e();
        if (Br) {
          St(!0);
          try {
            e();
          } finally {
            St(!1);
          }
        }
        return (a.memoizedState = [i, t]), i;
      },
      useReducer: function (e, t, a) {
        var i = hn();
        if (a !== void 0) {
          var c = a(t);
          if (Br) {
            St(!0);
            try {
              a(t);
            } finally {
              St(!1);
            }
          }
        } else c = t;
        return (
          (i.memoizedState = i.baseState = c),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: c,
          }),
          (i.queue = e),
          (e = e.dispatch = Sx.bind(null, Ue, e)),
          [i.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = hn();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: function (e) {
        e = Pu(e);
        var t = e.queue,
          a = A0.bind(null, Ue, t);
        return (t.dispatch = a), [e.memoizedState, a];
      },
      useDebugValue: Vu,
      useDeferredValue: function (e, t) {
        var a = hn();
        return ku(a, e, t);
      },
      useTransition: function () {
        var e = Pu(!1);
        return (
          (e = _0.bind(null, Ue, e.queue, !0, !1)),
          (hn().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, a) {
        var i = Ue,
          c = hn();
        if (Ze) {
          if (a === void 0) throw Error(l(407));
          a = a();
        } else {
          if (((a = t()), vt === null)) throw Error(l(349));
          (Ge & 124) !== 0 || e0(i, t, a);
        }
        c.memoizedState = a;
        var u = { value: a, getSnapshot: t };
        return (
          (c.queue = u),
          p0(n0.bind(null, i, u, e), [e]),
          (i.flags |= 2048),
          Cl(9, ls(), t0.bind(null, i, u, a, t), null),
          a
        );
      },
      useId: function () {
        var e = hn(),
          t = vt.identifierPrefix;
        if (Ze) {
          var a = _a,
            i = Ta;
          (a = (i & ~(1 << (32 - rt(i) - 1))).toString(32) + a),
            (t = "«" + t + "R" + a),
            (a = ns++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "»");
        } else (a = vx++), (t = "«" + t + "r" + a.toString(32) + "»");
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Xu,
      useFormState: f0,
      useActionState: f0,
      useOptimistic: function (e) {
        var t = hn();
        t.memoizedState = t.baseState = e;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a),
          (t = Yu.bind(null, Ue, !0, a)),
          (a.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: Bu,
      useCacheRefresh: function () {
        return (hn().memoizedState = xx.bind(null, Ue));
      },
    },
    z0 = {
      readContext: en,
      use: as,
      useCallback: C0,
      useContext: en,
      useEffect: g0,
      useImperativeHandle: S0,
      useInsertionEffect: y0,
      useLayoutEffect: b0,
      useMemo: E0,
      useReducer: rs,
      useRef: v0,
      useState: function () {
        return rs(ja);
      },
      useDebugValue: Vu,
      useDeferredValue: function (e, t) {
        var a = zt();
        return T0(a, lt.memoizedState, e, t);
      },
      useTransition: function () {
        var e = rs(ja)[0],
          t = zt().memoizedState;
        return [typeof e == "boolean" ? e : wo(e), t];
      },
      useSyncExternalStore: Wm,
      useId: j0,
      useHostTransitionStatus: Xu,
      useFormState: d0,
      useActionState: d0,
      useOptimistic: function (e, t) {
        var a = zt();
        return l0(a, lt, e, t);
      },
      useMemoCache: Bu,
      useCacheRefresh: R0,
    },
    Cx = {
      readContext: en,
      use: as,
      useCallback: C0,
      useContext: en,
      useEffect: g0,
      useImperativeHandle: S0,
      useInsertionEffect: y0,
      useLayoutEffect: b0,
      useMemo: E0,
      useReducer: $u,
      useRef: v0,
      useState: function () {
        return $u(ja);
      },
      useDebugValue: Vu,
      useDeferredValue: function (e, t) {
        var a = zt();
        return lt === null ? ku(a, e, t) : T0(a, lt.memoizedState, e, t);
      },
      useTransition: function () {
        var e = $u(ja)[0],
          t = zt().memoizedState;
        return [typeof e == "boolean" ? e : wo(e), t];
      },
      useSyncExternalStore: Wm,
      useId: j0,
      useHostTransitionStatus: Xu,
      useFormState: m0,
      useActionState: m0,
      useOptimistic: function (e, t) {
        var a = zt();
        return lt !== null
          ? l0(a, lt, e, t)
          : ((a.baseState = e), [e, a.queue.dispatch]);
      },
      useMemoCache: Bu,
      useCacheRefresh: R0,
    },
    El = null,
    Ao = 0;
  function cs(e) {
    var t = Ao;
    return (Ao += 1), El === null && (El = []), Xm(El, e, t);
  }
  function No(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function us(e, t) {
    throw t.$$typeof === y
      ? Error(l(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          l(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e
          )
        ));
  }
  function L0(e) {
    var t = e._init;
    return t(e._payload);
  }
  function H0(e) {
    function t(V, L) {
      if (e) {
        var X = V.deletions;
        X === null ? ((V.deletions = [L]), (V.flags |= 16)) : X.push(L);
      }
    }
    function a(V, L) {
      if (!e) return null;
      for (; L !== null; ) t(V, L), (L = L.sibling);
      return null;
    }
    function i(V) {
      for (var L = new Map(); V !== null; )
        V.key !== null ? L.set(V.key, V) : L.set(V.index, V), (V = V.sibling);
      return L;
    }
    function c(V, L) {
      return (V = Ea(V, L)), (V.index = 0), (V.sibling = null), V;
    }
    function u(V, L, X) {
      return (
        (V.index = X),
        e
          ? ((X = V.alternate),
            X !== null
              ? ((X = X.index), X < L ? ((V.flags |= 67108866), L) : X)
              : ((V.flags |= 67108866), L))
          : ((V.flags |= 1048576), L)
      );
    }
    function g(V) {
      return e && V.alternate === null && (V.flags |= 67108866), V;
    }
    function C(V, L, X, ae) {
      return L === null || L.tag !== 6
        ? ((L = hu(X, V.mode, ae)), (L.return = V), L)
        : ((L = c(L, X)), (L.return = V), L);
    }
    function N(V, L, X, ae) {
      var Ce = X.type;
      return Ce === w
        ? ne(V, L, X.props.children, ae, X.key)
        : L !== null &&
          (L.elementType === Ce ||
            (typeof Ce == "object" &&
              Ce !== null &&
              Ce.$$typeof === q &&
              L0(Ce) === L.type))
        ? ((L = c(L, X.props)), No(L, X), (L.return = V), L)
        : ((L = Yi(X.type, X.key, X.props, null, V.mode, ae)),
          No(L, X),
          (L.return = V),
          L);
    }
    function Y(V, L, X, ae) {
      return L === null ||
        L.tag !== 4 ||
        L.stateNode.containerInfo !== X.containerInfo ||
        L.stateNode.implementation !== X.implementation
        ? ((L = mu(X, V.mode, ae)), (L.return = V), L)
        : ((L = c(L, X.children || [])), (L.return = V), L);
    }
    function ne(V, L, X, ae, Ce) {
      return L === null || L.tag !== 7
        ? ((L = Rr(X, V.mode, ae, Ce)), (L.return = V), L)
        : ((L = c(L, X)), (L.return = V), L);
    }
    function re(V, L, X) {
      if (
        (typeof L == "string" && L !== "") ||
        typeof L == "number" ||
        typeof L == "bigint"
      )
        return (L = hu("" + L, V.mode, X)), (L.return = V), L;
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case b:
            return (
              (X = Yi(L.type, L.key, L.props, null, V.mode, X)),
              No(X, L),
              (X.return = V),
              X
            );
          case T:
            return (L = mu(L, V.mode, X)), (L.return = V), L;
          case q:
            var ae = L._init;
            return (L = ae(L._payload)), re(V, L, X);
        }
        if (se(L) || k(L))
          return (L = Rr(L, V.mode, X, null)), (L.return = V), L;
        if (typeof L.then == "function") return re(V, cs(L), X);
        if (L.$$typeof === D) return re(V, Zi(V, L), X);
        us(V, L);
      }
      return null;
    }
    function I(V, L, X, ae) {
      var Ce = L !== null ? L.key : null;
      if (
        (typeof X == "string" && X !== "") ||
        typeof X == "number" ||
        typeof X == "bigint"
      )
        return Ce !== null ? null : C(V, L, "" + X, ae);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case b:
            return X.key === Ce ? N(V, L, X, ae) : null;
          case T:
            return X.key === Ce ? Y(V, L, X, ae) : null;
          case q:
            return (Ce = X._init), (X = Ce(X._payload)), I(V, L, X, ae);
        }
        if (se(X) || k(X)) return Ce !== null ? null : ne(V, L, X, ae, null);
        if (typeof X.then == "function") return I(V, L, cs(X), ae);
        if (X.$$typeof === D) return I(V, L, Zi(V, X), ae);
        us(V, X);
      }
      return null;
    }
    function Q(V, L, X, ae, Ce) {
      if (
        (typeof ae == "string" && ae !== "") ||
        typeof ae == "number" ||
        typeof ae == "bigint"
      )
        return (V = V.get(X) || null), C(L, V, "" + ae, Ce);
      if (typeof ae == "object" && ae !== null) {
        switch (ae.$$typeof) {
          case b:
            return (
              (V = V.get(ae.key === null ? X : ae.key) || null), N(L, V, ae, Ce)
            );
          case T:
            return (
              (V = V.get(ae.key === null ? X : ae.key) || null), Y(L, V, ae, Ce)
            );
          case q:
            var $e = ae._init;
            return (ae = $e(ae._payload)), Q(V, L, X, ae, Ce);
        }
        if (se(ae) || k(ae))
          return (V = V.get(X) || null), ne(L, V, ae, Ce, null);
        if (typeof ae.then == "function") return Q(V, L, X, cs(ae), Ce);
        if (ae.$$typeof === D) return Q(V, L, X, Zi(L, ae), Ce);
        us(L, ae);
      }
      return null;
    }
    function Ae(V, L, X, ae) {
      for (
        var Ce = null, $e = null, Te = L, je = (L = 0), Xt = null;
        Te !== null && je < X.length;
        je++
      ) {
        Te.index > je ? ((Xt = Te), (Te = null)) : (Xt = Te.sibling);
        var Fe = I(V, Te, X[je], ae);
        if (Fe === null) {
          Te === null && (Te = Xt);
          break;
        }
        e && Te && Fe.alternate === null && t(V, Te),
          (L = u(Fe, L, je)),
          $e === null ? (Ce = Fe) : ($e.sibling = Fe),
          ($e = Fe),
          (Te = Xt);
      }
      if (je === X.length) return a(V, Te), Ze && Nr(V, je), Ce;
      if (Te === null) {
        for (; je < X.length; je++)
          (Te = re(V, X[je], ae)),
            Te !== null &&
              ((L = u(Te, L, je)),
              $e === null ? (Ce = Te) : ($e.sibling = Te),
              ($e = Te));
        return Ze && Nr(V, je), Ce;
      }
      for (Te = i(Te); je < X.length; je++)
        (Xt = Q(Te, V, je, X[je], ae)),
          Xt !== null &&
            (e &&
              Xt.alternate !== null &&
              Te.delete(Xt.key === null ? je : Xt.key),
            (L = u(Xt, L, je)),
            $e === null ? (Ce = Xt) : ($e.sibling = Xt),
            ($e = Xt));
      return (
        e &&
          Te.forEach(function (vr) {
            return t(V, vr);
          }),
        Ze && Nr(V, je),
        Ce
      );
    }
    function _e(V, L, X, ae) {
      if (X == null) throw Error(l(151));
      for (
        var Ce = null,
          $e = null,
          Te = L,
          je = (L = 0),
          Xt = null,
          Fe = X.next();
        Te !== null && !Fe.done;
        je++, Fe = X.next()
      ) {
        Te.index > je ? ((Xt = Te), (Te = null)) : (Xt = Te.sibling);
        var vr = I(V, Te, Fe.value, ae);
        if (vr === null) {
          Te === null && (Te = Xt);
          break;
        }
        e && Te && vr.alternate === null && t(V, Te),
          (L = u(vr, L, je)),
          $e === null ? (Ce = vr) : ($e.sibling = vr),
          ($e = vr),
          (Te = Xt);
      }
      if (Fe.done) return a(V, Te), Ze && Nr(V, je), Ce;
      if (Te === null) {
        for (; !Fe.done; je++, Fe = X.next())
          (Fe = re(V, Fe.value, ae)),
            Fe !== null &&
              ((L = u(Fe, L, je)),
              $e === null ? (Ce = Fe) : ($e.sibling = Fe),
              ($e = Fe));
        return Ze && Nr(V, je), Ce;
      }
      for (Te = i(Te); !Fe.done; je++, Fe = X.next())
        (Fe = Q(Te, V, je, Fe.value, ae)),
          Fe !== null &&
            (e &&
              Fe.alternate !== null &&
              Te.delete(Fe.key === null ? je : Fe.key),
            (L = u(Fe, L, je)),
            $e === null ? (Ce = Fe) : ($e.sibling = Fe),
            ($e = Fe));
      return (
        e &&
          Te.forEach(function (E2) {
            return t(V, E2);
          }),
        Ze && Nr(V, je),
        Ce
      );
    }
    function it(V, L, X, ae) {
      if (
        (typeof X == "object" &&
          X !== null &&
          X.type === w &&
          X.key === null &&
          (X = X.props.children),
        typeof X == "object" && X !== null)
      ) {
        switch (X.$$typeof) {
          case b:
            e: {
              for (var Ce = X.key; L !== null; ) {
                if (L.key === Ce) {
                  if (((Ce = X.type), Ce === w)) {
                    if (L.tag === 7) {
                      a(V, L.sibling),
                        (ae = c(L, X.props.children)),
                        (ae.return = V),
                        (V = ae);
                      break e;
                    }
                  } else if (
                    L.elementType === Ce ||
                    (typeof Ce == "object" &&
                      Ce !== null &&
                      Ce.$$typeof === q &&
                      L0(Ce) === L.type)
                  ) {
                    a(V, L.sibling),
                      (ae = c(L, X.props)),
                      No(ae, X),
                      (ae.return = V),
                      (V = ae);
                    break e;
                  }
                  a(V, L);
                  break;
                } else t(V, L);
                L = L.sibling;
              }
              X.type === w
                ? ((ae = Rr(X.props.children, V.mode, ae, X.key)),
                  (ae.return = V),
                  (V = ae))
                : ((ae = Yi(X.type, X.key, X.props, null, V.mode, ae)),
                  No(ae, X),
                  (ae.return = V),
                  (V = ae));
            }
            return g(V);
          case T:
            e: {
              for (Ce = X.key; L !== null; ) {
                if (L.key === Ce)
                  if (
                    L.tag === 4 &&
                    L.stateNode.containerInfo === X.containerInfo &&
                    L.stateNode.implementation === X.implementation
                  ) {
                    a(V, L.sibling),
                      (ae = c(L, X.children || [])),
                      (ae.return = V),
                      (V = ae);
                    break e;
                  } else {
                    a(V, L);
                    break;
                  }
                else t(V, L);
                L = L.sibling;
              }
              (ae = mu(X, V.mode, ae)), (ae.return = V), (V = ae);
            }
            return g(V);
          case q:
            return (Ce = X._init), (X = Ce(X._payload)), it(V, L, X, ae);
        }
        if (se(X)) return Ae(V, L, X, ae);
        if (k(X)) {
          if (((Ce = k(X)), typeof Ce != "function")) throw Error(l(150));
          return (X = Ce.call(X)), _e(V, L, X, ae);
        }
        if (typeof X.then == "function") return it(V, L, cs(X), ae);
        if (X.$$typeof === D) return it(V, L, Zi(V, X), ae);
        us(V, X);
      }
      return (typeof X == "string" && X !== "") ||
        typeof X == "number" ||
        typeof X == "bigint"
        ? ((X = "" + X),
          L !== null && L.tag === 6
            ? (a(V, L.sibling), (ae = c(L, X)), (ae.return = V), (V = ae))
            : (a(V, L), (ae = hu(X, V.mode, ae)), (ae.return = V), (V = ae)),
          g(V))
        : a(V, L);
    }
    return function (V, L, X, ae) {
      try {
        Ao = 0;
        var Ce = it(V, L, X, ae);
        return (El = null), Ce;
      } catch (Te) {
        if (Te === So || Te === Ji) throw Te;
        var $e = Sn(29, Te, null, V.mode);
        return ($e.lanes = ae), ($e.return = V), $e;
      } finally {
      }
    };
  }
  var Tl = H0(!0),
    B0 = H0(!1),
    Un = Z(null),
    ua = null;
  function er(e) {
    var t = e.alternate;
    ie($t, $t.current & 1),
      ie(Un, e),
      ua === null &&
        (t === null || bl.current !== null || t.memoizedState !== null) &&
        (ua = e);
  }
  function U0(e) {
    if (e.tag === 22) {
      if ((ie($t, $t.current), ie(Un, e), ua === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (ua = e);
      }
    } else tr();
  }
  function tr() {
    ie($t, $t.current), ie(Un, Un.current);
  }
  function Ra(e) {
    le(Un), ua === e && (ua = null), le($t);
  }
  var $t = Z(0);
  function fs(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || Bf(a))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  function Fu(e, t, a, i) {
    (t = e.memoizedState),
      (a = a(i, t)),
      (a = a == null ? t : p({}, t, a)),
      (e.memoizedState = a),
      e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Iu = {
    enqueueSetState: function (e, t, a) {
      e = e._reactInternals;
      var i = _n(),
        c = Ka(i);
      (c.payload = t),
        a != null && (c.callback = a),
        (t = Ja(e, c, i)),
        t !== null && (On(t, e, i), Eo(t, e, i));
    },
    enqueueReplaceState: function (e, t, a) {
      e = e._reactInternals;
      var i = _n(),
        c = Ka(i);
      (c.tag = 1),
        (c.payload = t),
        a != null && (c.callback = a),
        (t = Ja(e, c, i)),
        t !== null && (On(t, e, i), Eo(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var a = _n(),
        i = Ka(a);
      (i.tag = 2),
        t != null && (i.callback = t),
        (t = Ja(e, i, a)),
        t !== null && (On(t, e, a), Eo(t, e, a));
    },
  };
  function $0(e, t, a, i, c, u, g) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(i, u, g)
        : t.prototype && t.prototype.isPureReactComponent
        ? !ho(a, i) || !ho(c, u)
        : !0
    );
  }
  function P0(e, t, a, i) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, i),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, i),
      t.state !== e && Iu.enqueueReplaceState(t, t.state, null);
  }
  function Ur(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var i in t) i !== "ref" && (a[i] = t[i]);
    }
    if ((e = e.defaultProps)) {
      a === t && (a = p({}, a));
      for (var c in e) a[c] === void 0 && (a[c] = e[c]);
    }
    return a;
  }
  var ds =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function q0(e) {
    ds(e);
  }
  function V0(e) {
    console.error(e);
  }
  function k0(e) {
    ds(e);
  }
  function hs(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function G0(e, t, a) {
    try {
      var i = e.onCaughtError;
      i(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  function Qu(e, t, a) {
    return (
      (a = Ka(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        hs(e, t);
      }),
      a
    );
  }
  function X0(e) {
    return (e = Ka(e)), (e.tag = 3), e;
  }
  function Y0(e, t, a, i) {
    var c = a.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var u = i.value;
      (e.payload = function () {
        return c(u);
      }),
        (e.callback = function () {
          G0(t, a, i);
        });
    }
    var g = a.stateNode;
    g !== null &&
      typeof g.componentDidCatch == "function" &&
      (e.callback = function () {
        G0(t, a, i),
          typeof c != "function" &&
            (ir === null ? (ir = new Set([this])) : ir.add(this));
        var C = i.stack;
        this.componentDidCatch(i.value, {
          componentStack: C !== null ? C : "",
        });
      });
  }
  function Ex(e, t, a, i, c) {
    if (
      ((a.flags |= 32768),
      i !== null && typeof i == "object" && typeof i.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && yo(t, a, c, !0),
        (a = Un.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 13:
            return (
              ua === null ? xf() : a.alternate === null && wt === 0 && (wt = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = c),
              i === Tu
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([i])) : t.add(i),
                  Cf(e, i, c)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              i === Tu
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([i]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([i])) : a.add(i)),
                  Cf(e, i, c)),
              !1
            );
        }
        throw Error(l(435, a.tag));
      }
      return Cf(e, i, c), xf(), !1;
    }
    if (Ze)
      return (
        (t = Un.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = c),
            i !== gu && ((e = Error(l(422), { cause: i })), go(zn(e, a))))
          : (i !== gu && ((t = Error(l(423), { cause: i })), go(zn(t, a))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (c &= -c),
            (e.lanes |= c),
            (i = zn(i, a)),
            (c = Qu(e.stateNode, i, c)),
            wu(e, c),
            wt !== 4 && (wt = 2)),
        !1
      );
    var u = Error(l(520), { cause: i });
    if (
      ((u = zn(u, a)),
      Uo === null ? (Uo = [u]) : Uo.push(u),
      wt !== 4 && (wt = 2),
      t === null)
    )
      return !0;
    (i = zn(i, a)), (a = t);
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (e = c & -c),
            (a.lanes |= e),
            (e = Qu(a.stateNode, i, e)),
            wu(a, e),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (u = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (ir === null || !ir.has(u)))))
          )
            return (
              (a.flags |= 65536),
              (c &= -c),
              (a.lanes |= c),
              (c = X0(c)),
              Y0(c, e, a, i),
              wu(a, c),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var F0 = Error(l(461)),
    kt = !1;
  function Zt(e, t, a, i) {
    t.child = e === null ? B0(t, null, a, i) : Tl(t, e.child, a, i);
  }
  function I0(e, t, a, i, c) {
    a = a.render;
    var u = t.ref;
    if ("ref" in i) {
      var g = {};
      for (var C in i) C !== "ref" && (g[C] = i[C]);
    } else g = i;
    return (
      Lr(t),
      (i = Mu(e, t, a, g, u, c)),
      (C = Du()),
      e !== null && !kt
        ? (zu(e, t, c), Aa(e, t, c))
        : (Ze && C && vu(t), (t.flags |= 1), Zt(e, t, i, c), t.child)
    );
  }
  function Q0(e, t, a, i, c) {
    if (e === null) {
      var u = a.type;
      return typeof u == "function" &&
        !du(u) &&
        u.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = u), Z0(e, t, u, i, c))
        : ((e = Yi(a.type, null, i, t, t.mode, c)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((u = e.child), !af(e, c))) {
      var g = u.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : ho), a(g, i) && e.ref === t.ref)
      )
        return Aa(e, t, c);
    }
    return (
      (t.flags |= 1),
      (e = Ea(u, i)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Z0(e, t, a, i, c) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (ho(u, i) && e.ref === t.ref)
        if (((kt = !1), (t.pendingProps = i = u), af(e, c)))
          (e.flags & 131072) !== 0 && (kt = !0);
        else return (t.lanes = e.lanes), Aa(e, t, c);
    }
    return Zu(e, t, a, i, c);
  }
  function K0(e, t, a) {
    var i = t.pendingProps,
      c = i.children,
      u = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (((i = u !== null ? u.baseLanes | a : a), e !== null)) {
          for (c = t.child = e.child, u = 0; c !== null; )
            (u = u | c.lanes | c.childLanes), (c = c.sibling);
          t.childLanes = u & ~i;
        } else (t.childLanes = 0), (t.child = null);
        return J0(e, t, i, a);
      }
      if ((a & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Ki(t, u !== null ? u.cachePool : null),
          u !== null ? Zm(t, u) : Ru(),
          U0(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          J0(e, t, u !== null ? u.baseLanes | a : a, a)
        );
    } else
      u !== null
        ? (Ki(t, u.cachePool), Zm(t, u), tr(), (t.memoizedState = null))
        : (e !== null && Ki(t, null), Ru(), tr());
    return Zt(e, t, c, a), t.child;
  }
  function J0(e, t, a, i) {
    var c = Eu();
    return (
      (c = c === null ? null : { parent: Ut._currentValue, pool: c }),
      (t.memoizedState = { baseLanes: a, cachePool: c }),
      e !== null && Ki(t, null),
      Ru(),
      U0(t),
      e !== null && yo(e, t, i, !0),
      null
    );
  }
  function ms(e, t) {
    var a = t.ref;
    if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(l(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Zu(e, t, a, i, c) {
    return (
      Lr(t),
      (a = Mu(e, t, a, i, void 0, c)),
      (i = Du()),
      e !== null && !kt
        ? (zu(e, t, c), Aa(e, t, c))
        : (Ze && i && vu(t), (t.flags |= 1), Zt(e, t, a, c), t.child)
    );
  }
  function W0(e, t, a, i, c, u) {
    return (
      Lr(t),
      (t.updateQueue = null),
      (a = Jm(t, i, a, c)),
      Km(e),
      (i = Du()),
      e !== null && !kt
        ? (zu(e, t, u), Aa(e, t, u))
        : (Ze && i && vu(t), (t.flags |= 1), Zt(e, t, a, u), t.child)
    );
  }
  function ev(e, t, a, i, c) {
    if ((Lr(t), t.stateNode === null)) {
      var u = ml,
        g = a.contextType;
      typeof g == "object" && g !== null && (u = en(g)),
        (u = new a(i, u)),
        (t.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Iu),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = i),
        (u.state = t.memoizedState),
        (u.refs = {}),
        _u(t),
        (g = a.contextType),
        (u.context = typeof g == "object" && g !== null ? en(g) : ml),
        (u.state = t.memoizedState),
        (g = a.getDerivedStateFromProps),
        typeof g == "function" && (Fu(t, a, g, i), (u.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((g = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          g !== u.state && Iu.enqueueReplaceState(u, u.state, null),
          _o(t, i, u, c),
          To(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == "function" && (t.flags |= 4194308),
        (i = !0);
    } else if (e === null) {
      u = t.stateNode;
      var C = t.memoizedProps,
        N = Ur(a, C);
      u.props = N;
      var Y = u.context,
        ne = a.contextType;
      (g = ml), typeof ne == "object" && ne !== null && (g = en(ne));
      var re = a.getDerivedStateFromProps;
      (ne =
        typeof re == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (C = t.pendingProps !== C),
        ne ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((C || Y !== g) && P0(t, u, i, g)),
        (Za = !1);
      var I = t.memoizedState;
      (u.state = I),
        _o(t, i, u, c),
        To(),
        (Y = t.memoizedState),
        C || I !== Y || Za
          ? (typeof re == "function" &&
              (Fu(t, a, re, i), (Y = t.memoizedState)),
            (N = Za || $0(t, a, N, i, I, Y, g))
              ? (ne ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = i),
                (t.memoizedState = Y)),
            (u.props = i),
            (u.state = Y),
            (u.context = g),
            (i = N))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (i = !1));
    } else {
      (u = t.stateNode),
        Ou(e, t),
        (g = t.memoizedProps),
        (ne = Ur(a, g)),
        (u.props = ne),
        (re = t.pendingProps),
        (I = u.context),
        (Y = a.contextType),
        (N = ml),
        typeof Y == "object" && Y !== null && (N = en(Y)),
        (C = a.getDerivedStateFromProps),
        (Y =
          typeof C == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((g !== re || I !== N) && P0(t, u, i, N)),
        (Za = !1),
        (I = t.memoizedState),
        (u.state = I),
        _o(t, i, u, c),
        To();
      var Q = t.memoizedState;
      g !== re ||
      I !== Q ||
      Za ||
      (e !== null && e.dependencies !== null && Qi(e.dependencies))
        ? (typeof C == "function" && (Fu(t, a, C, i), (Q = t.memoizedState)),
          (ne =
            Za ||
            $0(t, a, ne, i, I, Q, N) ||
            (e !== null && e.dependencies !== null && Qi(e.dependencies)))
            ? (Y ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(i, Q, N),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(i, Q, N)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (g === e.memoizedProps && I === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (g === e.memoizedProps && I === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = i),
              (t.memoizedState = Q)),
          (u.props = i),
          (u.state = Q),
          (u.context = N),
          (i = ne))
        : (typeof u.componentDidUpdate != "function" ||
            (g === e.memoizedProps && I === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (g === e.memoizedProps && I === e.memoizedState) ||
            (t.flags |= 1024),
          (i = !1));
    }
    return (
      (u = i),
      ms(e, t),
      (i = (t.flags & 128) !== 0),
      u || i
        ? ((u = t.stateNode),
          (a =
            i && typeof a.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (t.flags |= 1),
          e !== null && i
            ? ((t.child = Tl(t, e.child, null, c)),
              (t.child = Tl(t, null, a, c)))
            : Zt(e, t, a, c),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = Aa(e, t, c)),
      e
    );
  }
  function tv(e, t, a, i) {
    return po(), (t.flags |= 256), Zt(e, t, a, i), t.child;
  }
  var Ku = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Ju(e) {
    return { baseLanes: e, cachePool: Vm() };
  }
  function Wu(e, t, a) {
    return (e = e !== null ? e.childLanes & ~a : 0), t && (e |= $n), e;
  }
  function nv(e, t, a) {
    var i = t.pendingProps,
      c = !1,
      u = (t.flags & 128) !== 0,
      g;
    if (
      ((g = u) ||
        (g =
          e !== null && e.memoizedState === null ? !1 : ($t.current & 2) !== 0),
      g && ((c = !0), (t.flags &= -129)),
      (g = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Ze) {
        if ((c ? er(t) : tr(), Ze)) {
          var C = Ot,
            N;
          if ((N = C)) {
            e: {
              for (N = C, C = ca; N.nodeType !== 8; ) {
                if (!C) {
                  C = null;
                  break e;
                }
                if (((N = Wn(N.nextSibling)), N === null)) {
                  C = null;
                  break e;
                }
              }
              C = N;
            }
            C !== null
              ? ((t.memoizedState = {
                  dehydrated: C,
                  treeContext: Ar !== null ? { id: Ta, overflow: _a } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (N = Sn(18, null, null, 0)),
                (N.stateNode = C),
                (N.return = t),
                (t.child = N),
                (ln = t),
                (Ot = null),
                (N = !0))
              : (N = !1);
          }
          N || Dr(t);
        }
        if (
          ((C = t.memoizedState),
          C !== null && ((C = C.dehydrated), C !== null))
        )
          return Bf(C) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        Ra(t);
      }
      return (
        (C = i.children),
        (i = i.fallback),
        c
          ? (tr(),
            (c = t.mode),
            (C = vs({ mode: "hidden", children: C }, c)),
            (i = Rr(i, c, a, null)),
            (C.return = t),
            (i.return = t),
            (C.sibling = i),
            (t.child = C),
            (c = t.child),
            (c.memoizedState = Ju(a)),
            (c.childLanes = Wu(e, g, a)),
            (t.memoizedState = Ku),
            i)
          : (er(t), ef(t, C))
      );
    }
    if (
      ((N = e.memoizedState), N !== null && ((C = N.dehydrated), C !== null))
    ) {
      if (u)
        t.flags & 256
          ? (er(t), (t.flags &= -257), (t = tf(e, t, a)))
          : t.memoizedState !== null
          ? (tr(), (t.child = e.child), (t.flags |= 128), (t = null))
          : (tr(),
            (c = i.fallback),
            (C = t.mode),
            (i = vs({ mode: "visible", children: i.children }, C)),
            (c = Rr(c, C, a, null)),
            (c.flags |= 2),
            (i.return = t),
            (c.return = t),
            (i.sibling = c),
            (t.child = i),
            Tl(t, e.child, null, a),
            (i = t.child),
            (i.memoizedState = Ju(a)),
            (i.childLanes = Wu(e, g, a)),
            (t.memoizedState = Ku),
            (t = c));
      else if ((er(t), Bf(C))) {
        if (((g = C.nextSibling && C.nextSibling.dataset), g)) var Y = g.dgst;
        (g = Y),
          (i = Error(l(419))),
          (i.stack = ""),
          (i.digest = g),
          go({ value: i, source: null, stack: null }),
          (t = tf(e, t, a));
      } else if (
        (kt || yo(e, t, a, !1), (g = (a & e.childLanes) !== 0), kt || g)
      ) {
        if (
          ((g = vt),
          g !== null &&
            ((i = a & -a),
            (i = (i & 42) !== 0 ? 1 : Qn(i)),
            (i = (i & (g.suspendedLanes | a)) !== 0 ? 0 : i),
            i !== 0 && i !== N.retryLane))
        )
          throw ((N.retryLane = i), hl(e, i), On(g, e, i), F0);
        C.data === "$?" || xf(), (t = tf(e, t, a));
      } else
        C.data === "$?"
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = N.treeContext),
            (Ot = Wn(C.nextSibling)),
            (ln = t),
            (Ze = !0),
            (Mr = null),
            (ca = !1),
            e !== null &&
              ((Hn[Bn++] = Ta),
              (Hn[Bn++] = _a),
              (Hn[Bn++] = Ar),
              (Ta = e.id),
              (_a = e.overflow),
              (Ar = t)),
            (t = ef(t, i.children)),
            (t.flags |= 4096));
      return t;
    }
    return c
      ? (tr(),
        (c = i.fallback),
        (C = t.mode),
        (N = e.child),
        (Y = N.sibling),
        (i = Ea(N, { mode: "hidden", children: i.children })),
        (i.subtreeFlags = N.subtreeFlags & 65011712),
        Y !== null ? (c = Ea(Y, c)) : ((c = Rr(c, C, a, null)), (c.flags |= 2)),
        (c.return = t),
        (i.return = t),
        (i.sibling = c),
        (t.child = i),
        (i = c),
        (c = t.child),
        (C = e.child.memoizedState),
        C === null
          ? (C = Ju(a))
          : ((N = C.cachePool),
            N !== null
              ? ((Y = Ut._currentValue),
                (N = N.parent !== Y ? { parent: Y, pool: Y } : N))
              : (N = Vm()),
            (C = { baseLanes: C.baseLanes | a, cachePool: N })),
        (c.memoizedState = C),
        (c.childLanes = Wu(e, g, a)),
        (t.memoizedState = Ku),
        i)
      : (er(t),
        (a = e.child),
        (e = a.sibling),
        (a = Ea(a, { mode: "visible", children: i.children })),
        (a.return = t),
        (a.sibling = null),
        e !== null &&
          ((g = t.deletions),
          g === null ? ((t.deletions = [e]), (t.flags |= 16)) : g.push(e)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function ef(e, t) {
    return (
      (t = vs({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function vs(e, t) {
    return (
      (e = Sn(22, e, null, t)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function tf(e, t, a) {
    return (
      Tl(t, e.child, null, a),
      (e = ef(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function av(e, t, a) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), bu(e.return, t, a);
  }
  function nf(e, t, a, i, c) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: a,
          tailMode: c,
        })
      : ((u.isBackwards = t),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = i),
        (u.tail = a),
        (u.tailMode = c));
  }
  function rv(e, t, a) {
    var i = t.pendingProps,
      c = i.revealOrder,
      u = i.tail;
    if ((Zt(e, t, i.children, a), (i = $t.current), (i & 2) !== 0))
      (i = (i & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && av(e, a, t);
          else if (e.tag === 19) av(e, a, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      i &= 1;
    }
    switch ((ie($t, i), c)) {
      case "forwards":
        for (a = t.child, c = null; a !== null; )
          (e = a.alternate),
            e !== null && fs(e) === null && (c = a),
            (a = a.sibling);
        (a = c),
          a === null
            ? ((c = t.child), (t.child = null))
            : ((c = a.sibling), (a.sibling = null)),
          nf(t, !1, c, a, u);
        break;
      case "backwards":
        for (a = null, c = t.child, t.child = null; c !== null; ) {
          if (((e = c.alternate), e !== null && fs(e) === null)) {
            t.child = c;
            break;
          }
          (e = c.sibling), (c.sibling = a), (a = c), (c = e);
        }
        nf(t, !0, a, null, u);
        break;
      case "together":
        nf(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Aa(e, t, a) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (or |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((yo(e, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(l(153));
    if (t.child !== null) {
      for (
        e = t.child, a = Ea(e, e.pendingProps), t.child = a, a.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (a = a.sibling = Ea(e, e.pendingProps)),
          (a.return = t);
      a.sibling = null;
    }
    return t.child;
  }
  function af(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Qi(e)));
  }
  function Tx(e, t, a) {
    switch (t.tag) {
      case 3:
        De(t, t.stateNode.containerInfo),
          Qa(t, Ut, e.memoizedState.cache),
          po();
        break;
      case 27:
      case 5:
        st(t);
        break;
      case 4:
        De(t, t.stateNode.containerInfo);
        break;
      case 10:
        Qa(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var i = t.memoizedState;
        if (i !== null)
          return i.dehydrated !== null
            ? (er(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
            ? nv(e, t, a)
            : (er(t), (e = Aa(e, t, a)), e !== null ? e.sibling : null);
        er(t);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (
          ((i = (a & t.childLanes) !== 0),
          i || (yo(e, t, a, !1), (i = (a & t.childLanes) !== 0)),
          c)
        ) {
          if (i) return rv(e, t, a);
          t.flags |= 128;
        }
        if (
          ((c = t.memoizedState),
          c !== null &&
            ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
          ie($t, $t.current),
          i)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), K0(e, t, a);
      case 24:
        Qa(t, Ut, e.memoizedState.cache);
    }
    return Aa(e, t, a);
  }
  function lv(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) kt = !0;
      else {
        if (!af(e, a) && (t.flags & 128) === 0) return (kt = !1), Tx(e, t, a);
        kt = (e.flags & 131072) !== 0;
      }
    else (kt = !1), Ze && (t.flags & 1048576) !== 0 && Lm(t, Ii, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var i = t.elementType,
            c = i._init;
          if (((i = c(i._payload)), (t.type = i), typeof i == "function"))
            du(i)
              ? ((e = Ur(i, e)), (t.tag = 1), (t = ev(null, t, i, e, a)))
              : ((t.tag = 0), (t = Zu(null, t, i, e, a)));
          else {
            if (i != null) {
              if (((c = i.$$typeof), c === U)) {
                (t.tag = 11), (t = I0(null, t, i, e, a));
                break e;
              } else if (c === _) {
                (t.tag = 14), (t = Q0(null, t, i, e, a));
                break e;
              }
            }
            throw ((t = te(i) || i), Error(l(306, t, "")));
          }
        }
        return t;
      case 0:
        return Zu(e, t, t.type, t.pendingProps, a);
      case 1:
        return (i = t.type), (c = Ur(i, t.pendingProps)), ev(e, t, i, c, a);
      case 3:
        e: {
          if ((De(t, t.stateNode.containerInfo), e === null))
            throw Error(l(387));
          i = t.pendingProps;
          var u = t.memoizedState;
          (c = u.element), Ou(e, t), _o(t, i, null, a);
          var g = t.memoizedState;
          if (
            ((i = g.cache),
            Qa(t, Ut, i),
            i !== u.cache && xu(t, [Ut], a, !0),
            To(),
            (i = g.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: i, isDehydrated: !1, cache: g.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = tv(e, t, i, a);
              break e;
            } else if (i !== c) {
              (c = zn(Error(l(424)), t)), go(c), (t = tv(e, t, i, a));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                Ot = Wn(e.firstChild),
                  ln = t,
                  Ze = !0,
                  Mr = null,
                  ca = !0,
                  a = B0(t, null, i, a),
                  t.child = a;
                a;

              )
                (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
            }
          else {
            if ((po(), i === c)) {
              t = Aa(e, t, a);
              break e;
            }
            Zt(e, t, i, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          ms(e, t),
          e === null
            ? (a = cp(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : Ze ||
                ((a = t.type),
                (e = t.pendingProps),
                (i = Rs(me.current).createElement(a)),
                (i[M] = t),
                (i[P] = e),
                Jt(i, a, e),
                Be(i),
                (t.stateNode = i))
            : (t.memoizedState = cp(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          st(t),
          e === null &&
            Ze &&
            ((i = t.stateNode = op(t.type, t.pendingProps, me.current)),
            (ln = t),
            (ca = !0),
            (c = Ot),
            ur(t.type) ? ((Uf = c), (Ot = Wn(i.firstChild))) : (Ot = c)),
          Zt(e, t, t.pendingProps.children, a),
          ms(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Ze &&
            ((c = i = Ot) &&
              ((i = Jx(i, t.type, t.pendingProps, ca)),
              i !== null
                ? ((t.stateNode = i),
                  (ln = t),
                  (Ot = Wn(i.firstChild)),
                  (ca = !1),
                  (c = !0))
                : (c = !1)),
            c || Dr(t)),
          st(t),
          (c = t.type),
          (u = t.pendingProps),
          (g = e !== null ? e.memoizedProps : null),
          (i = u.children),
          zf(c, u) ? (i = null) : g !== null && zf(c, g) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((c = Mu(e, t, px, null, null, a)), (Fo._currentValue = c)),
          ms(e, t),
          Zt(e, t, i, a),
          t.child
        );
      case 6:
        return (
          e === null &&
            Ze &&
            ((e = a = Ot) &&
              ((a = Wx(a, t.pendingProps, ca)),
              a !== null
                ? ((t.stateNode = a), (ln = t), (Ot = null), (e = !0))
                : (e = !1)),
            e || Dr(t)),
          null
        );
      case 13:
        return nv(e, t, a);
      case 4:
        return (
          De(t, t.stateNode.containerInfo),
          (i = t.pendingProps),
          e === null ? (t.child = Tl(t, null, i, a)) : Zt(e, t, i, a),
          t.child
        );
      case 11:
        return I0(e, t, t.type, t.pendingProps, a);
      case 7:
        return Zt(e, t, t.pendingProps, a), t.child;
      case 8:
        return Zt(e, t, t.pendingProps.children, a), t.child;
      case 12:
        return Zt(e, t, t.pendingProps.children, a), t.child;
      case 10:
        return (
          (i = t.pendingProps),
          Qa(t, t.type, i.value),
          Zt(e, t, i.children, a),
          t.child
        );
      case 9:
        return (
          (c = t.type._context),
          (i = t.pendingProps.children),
          Lr(t),
          (c = en(c)),
          (i = i(c)),
          (t.flags |= 1),
          Zt(e, t, i, a),
          t.child
        );
      case 14:
        return Q0(e, t, t.type, t.pendingProps, a);
      case 15:
        return Z0(e, t, t.type, t.pendingProps, a);
      case 19:
        return rv(e, t, a);
      case 31:
        return (
          (i = t.pendingProps),
          (a = t.mode),
          (i = { mode: i.mode, children: i.children }),
          e === null
            ? ((a = vs(i, a)),
              (a.ref = t.ref),
              (t.child = a),
              (a.return = t),
              (t = a))
            : ((a = Ea(e.child, i)),
              (a.ref = t.ref),
              (t.child = a),
              (a.return = t),
              (t = a)),
          t
        );
      case 22:
        return K0(e, t, a);
      case 24:
        return (
          Lr(t),
          (i = en(Ut)),
          e === null
            ? ((c = Eu()),
              c === null &&
                ((c = vt),
                (u = Su()),
                (c.pooledCache = u),
                u.refCount++,
                u !== null && (c.pooledCacheLanes |= a),
                (c = u)),
              (t.memoizedState = { parent: i, cache: c }),
              _u(t),
              Qa(t, Ut, c))
            : ((e.lanes & a) !== 0 && (Ou(e, t), _o(t, null, null, a), To()),
              (c = e.memoizedState),
              (u = t.memoizedState),
              c.parent !== i
                ? ((c = { parent: i, cache: i }),
                  (t.memoizedState = c),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = c),
                  Qa(t, Ut, i))
                : ((i = u.cache),
                  Qa(t, Ut, i),
                  i !== c.cache && xu(t, [Ut], a, !0))),
          Zt(e, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(l(156, t.tag));
  }
  function Na(e) {
    e.flags |= 4;
  }
  function ov(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !mp(t))) {
      if (
        ((t = Un.current),
        t !== null &&
          ((Ge & 4194048) === Ge
            ? ua !== null
            : ((Ge & 62914560) !== Ge && (Ge & 536870912) === 0) || t !== ua))
      )
        throw ((Co = Tu), km);
      e.flags |= 8192;
    }
  }
  function ps(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? Tr() : 536870912), (e.lanes |= t), (jl |= t));
  }
  function Mo(e, t) {
    if (!Ze)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), (t = t.sibling);
          a === null ? (e.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = e.tail;
          for (var i = null; a !== null; )
            a.alternate !== null && (i = a), (a = a.sibling);
          i === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (i.sibling = null);
      }
  }
  function Et(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      a = 0,
      i = 0;
    if (t)
      for (var c = e.child; c !== null; )
        (a |= c.lanes | c.childLanes),
          (i |= c.subtreeFlags & 65011712),
          (i |= c.flags & 65011712),
          (c.return = e),
          (c = c.sibling);
    else
      for (c = e.child; c !== null; )
        (a |= c.lanes | c.childLanes),
          (i |= c.subtreeFlags),
          (i |= c.flags),
          (c.return = e),
          (c = c.sibling);
    return (e.subtreeFlags |= i), (e.childLanes = a), t;
  }
  function _x(e, t, a) {
    var i = t.pendingProps;
    switch ((pu(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Et(t), null;
      case 1:
        return Et(t), null;
      case 3:
        return (
          (a = t.stateNode),
          (i = null),
          e !== null && (i = e.memoizedState.cache),
          t.memoizedState.cache !== i && (t.flags |= 2048),
          wa(Ut),
          ut(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (vo(t)
              ? Na(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Um())),
          Et(t),
          null
        );
      case 26:
        return (
          (a = t.memoizedState),
          e === null
            ? (Na(t),
              a !== null ? (Et(t), ov(t, a)) : (Et(t), (t.flags &= -16777217)))
            : a
            ? a !== e.memoizedState
              ? (Na(t), Et(t), ov(t, a))
              : (Et(t), (t.flags &= -16777217))
            : (e.memoizedProps !== i && Na(t), Et(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        Ft(t), (a = me.current);
        var c = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== i && Na(t);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(l(166));
            return Et(t), null;
          }
          (e = ue.current),
            vo(t) ? Hm(t) : ((e = op(c, i, a)), (t.stateNode = e), Na(t));
        }
        return Et(t), null;
      case 5:
        if ((Ft(t), (a = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== i && Na(t);
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(l(166));
            return Et(t), null;
          }
          if (((e = ue.current), vo(t))) Hm(t);
          else {
            switch (((c = Rs(me.current)), e)) {
              case 1:
                e = c.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                e = c.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    e = c.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    e = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    (e = c.createElement("div")),
                      (e.innerHTML = "<script></script>"),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e =
                      typeof i.is == "string"
                        ? c.createElement("select", { is: i.is })
                        : c.createElement("select")),
                      i.multiple
                        ? (e.multiple = !0)
                        : i.size && (e.size = i.size);
                    break;
                  default:
                    e =
                      typeof i.is == "string"
                        ? c.createElement(a, { is: i.is })
                        : c.createElement(a);
                }
            }
            (e[M] = t), (e[P] = i);
            e: for (c = t.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6) e.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                (c.child.return = c), (c = c.child);
                continue;
              }
              if (c === t) break e;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === t) break e;
                c = c.return;
              }
              (c.sibling.return = c.return), (c = c.sibling);
            }
            t.stateNode = e;
            e: switch ((Jt(e, a, i), a)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!i.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && Na(t);
          }
        }
        return Et(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== i && Na(t);
        else {
          if (typeof i != "string" && t.stateNode === null) throw Error(l(166));
          if (((e = me.current), vo(t))) {
            if (
              ((e = t.stateNode),
              (a = t.memoizedProps),
              (i = null),
              (c = ln),
              c !== null)
            )
              switch (c.tag) {
                case 27:
                case 5:
                  i = c.memoizedProps;
              }
            (e[M] = t),
              (e = !!(
                e.nodeValue === a ||
                (i !== null && i.suppressHydrationWarning === !0) ||
                Wv(e.nodeValue, a)
              )),
              e || Dr(t);
          } else (e = Rs(e).createTextNode(i)), (e[M] = t), (t.stateNode = e);
        }
        return Et(t), null;
      case 13:
        if (
          ((i = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((c = vo(t)), i !== null && i.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(l(318));
              if (
                ((c = t.memoizedState),
                (c = c !== null ? c.dehydrated : null),
                !c)
              )
                throw Error(l(317));
              c[M] = t;
            } else
              po(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            Et(t), (c = !1);
          } else
            (c = Um()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = c),
              (c = !0);
          if (!c) return t.flags & 256 ? (Ra(t), t) : (Ra(t), null);
        }
        if ((Ra(t), (t.flags & 128) !== 0)) return (t.lanes = a), t;
        if (
          ((a = i !== null), (e = e !== null && e.memoizedState !== null), a)
        ) {
          (i = t.child),
            (c = null),
            i.alternate !== null &&
              i.alternate.memoizedState !== null &&
              i.alternate.memoizedState.cachePool !== null &&
              (c = i.alternate.memoizedState.cachePool.pool);
          var u = null;
          i.memoizedState !== null &&
            i.memoizedState.cachePool !== null &&
            (u = i.memoizedState.cachePool.pool),
            u !== c && (i.flags |= 2048);
        }
        return (
          a !== e && a && (t.child.flags |= 8192),
          ps(t, t.updateQueue),
          Et(t),
          null
        );
      case 4:
        return ut(), e === null && Rf(t.stateNode.containerInfo), Et(t), null;
      case 10:
        return wa(t.type), Et(t), null;
      case 19:
        if ((le($t), (c = t.memoizedState), c === null)) return Et(t), null;
        if (((i = (t.flags & 128) !== 0), (u = c.rendering), u === null))
          if (i) Mo(c, !1);
          else {
            if (wt !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = fs(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      Mo(c, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      ps(t, e),
                      t.subtreeFlags = 0,
                      e = a,
                      a = t.child;
                    a !== null;

                  )
                    zm(a, e), (a = a.sibling);
                  return ie($t, ($t.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            c.tail !== null &&
              dt() > bs &&
              ((t.flags |= 128), (i = !0), Mo(c, !1), (t.lanes = 4194304));
          }
        else {
          if (!i)
            if (((e = fs(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (i = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                ps(t, e),
                Mo(c, !0),
                c.tail === null &&
                  c.tailMode === "hidden" &&
                  !u.alternate &&
                  !Ze)
              )
                return Et(t), null;
            } else
              2 * dt() - c.renderingStartTime > bs &&
                a !== 536870912 &&
                ((t.flags |= 128), (i = !0), Mo(c, !1), (t.lanes = 4194304));
          c.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((e = c.last),
              e !== null ? (e.sibling = u) : (t.child = u),
              (c.last = u));
        }
        return c.tail !== null
          ? ((t = c.tail),
            (c.rendering = t),
            (c.tail = t.sibling),
            (c.renderingStartTime = dt()),
            (t.sibling = null),
            (e = $t.current),
            ie($t, i ? (e & 1) | 2 : e & 1),
            t)
          : (Et(t), null);
      case 22:
      case 23:
        return (
          Ra(t),
          Au(),
          (i = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== i && (t.flags |= 8192)
            : i && (t.flags |= 8192),
          i
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Et(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Et(t),
          (a = t.updateQueue),
          a !== null && ps(t, a.retryQueue),
          (a = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          (i = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (i = t.memoizedState.cachePool.pool),
          i !== a && (t.flags |= 2048),
          e !== null && le(Hr),
          null
        );
      case 24:
        return (
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          wa(Ut),
          Et(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function Ox(e, t) {
    switch ((pu(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          wa(Ut),
          ut(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Ft(t), null;
      case 13:
        if (
          (Ra(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(l(340));
          po();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return le($t), null;
      case 4:
        return ut(), null;
      case 10:
        return wa(t.type), null;
      case 22:
      case 23:
        return (
          Ra(t),
          Au(),
          e !== null && le(Hr),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return wa(Ut), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function iv(e, t) {
    switch ((pu(t), t.tag)) {
      case 3:
        wa(Ut), ut();
        break;
      case 26:
      case 27:
      case 5:
        Ft(t);
        break;
      case 4:
        ut();
        break;
      case 13:
        Ra(t);
        break;
      case 19:
        le($t);
        break;
      case 10:
        wa(t.type);
        break;
      case 22:
      case 23:
        Ra(t), Au(), e !== null && le(Hr);
        break;
      case 24:
        wa(Ut);
    }
  }
  function Do(e, t) {
    try {
      var a = t.updateQueue,
        i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var c = i.next;
        a = c;
        do {
          if ((a.tag & e) === e) {
            i = void 0;
            var u = a.create,
              g = a.inst;
            (i = u()), (g.destroy = i);
          }
          a = a.next;
        } while (a !== c);
      }
    } catch (C) {
      ct(t, t.return, C);
    }
  }
  function nr(e, t, a) {
    try {
      var i = t.updateQueue,
        c = i !== null ? i.lastEffect : null;
      if (c !== null) {
        var u = c.next;
        i = u;
        do {
          if ((i.tag & e) === e) {
            var g = i.inst,
              C = g.destroy;
            if (C !== void 0) {
              (g.destroy = void 0), (c = t);
              var N = a,
                Y = C;
              try {
                Y();
              } catch (ne) {
                ct(c, N, ne);
              }
            }
          }
          i = i.next;
        } while (i !== u);
      }
    } catch (ne) {
      ct(t, t.return, ne);
    }
  }
  function sv(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        Qm(t, a);
      } catch (i) {
        ct(e, e.return, i);
      }
    }
  }
  function cv(e, t, a) {
    (a.props = Ur(e.type, e.memoizedProps)), (a.state = e.memoizedState);
    try {
      a.componentWillUnmount();
    } catch (i) {
      ct(e, t, i);
    }
  }
  function zo(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var i = e.stateNode;
            break;
          case 30:
            i = e.stateNode;
            break;
          default:
            i = e.stateNode;
        }
        typeof a == "function" ? (e.refCleanup = a(i)) : (a.current = i);
      }
    } catch (c) {
      ct(e, t, c);
    }
  }
  function fa(e, t) {
    var a = e.ref,
      i = e.refCleanup;
    if (a !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (c) {
          ct(e, t, c);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (c) {
          ct(e, t, c);
        }
      else a.current = null;
  }
  function uv(e) {
    var t = e.type,
      a = e.memoizedProps,
      i = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && i.focus();
          break e;
        case "img":
          a.src ? (i.src = a.src) : a.srcSet && (i.srcset = a.srcSet);
      }
    } catch (c) {
      ct(e, e.return, c);
    }
  }
  function rf(e, t, a) {
    try {
      var i = e.stateNode;
      Fx(i, e.type, a, t), (i[P] = t);
    } catch (c) {
      ct(e, e.return, c);
    }
  }
  function fv(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && ur(e.type)) ||
      e.tag === 4
    );
  }
  function lf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || fv(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && ur(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function of(e, t, a) {
    var i = e.tag;
    if (i === 5 || i === 6)
      (e = e.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
              ? a.ownerDocument.body
              : a
            ).insertBefore(e, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a),
            t.appendChild(e),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = js));
    else if (
      i !== 4 &&
      (i === 27 && ur(e.type) && ((a = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (of(e, t, a), e = e.sibling; e !== null; )
        of(e, t, a), (e = e.sibling);
  }
  function gs(e, t, a) {
    var i = e.tag;
    if (i === 5 || i === 6)
      (e = e.stateNode), t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (
      i !== 4 &&
      (i === 27 && ur(e.type) && (a = e.stateNode), (e = e.child), e !== null)
    )
      for (gs(e, t, a), e = e.sibling; e !== null; )
        gs(e, t, a), (e = e.sibling);
  }
  function dv(e) {
    var t = e.stateNode,
      a = e.memoizedProps;
    try {
      for (var i = e.type, c = t.attributes; c.length; )
        t.removeAttributeNode(c[0]);
      Jt(t, i, a), (t[M] = e), (t[P] = a);
    } catch (u) {
      ct(e, e.return, u);
    }
  }
  var Ma = !1,
    At = !1,
    sf = !1,
    hv = typeof WeakSet == "function" ? WeakSet : Set,
    Gt = null;
  function wx(e, t) {
    if (((e = e.containerInfo), (Mf = Ls), (e = Tm(e)), lu(e))) {
      if ("selectionStart" in e)
        var a = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          a = ((a = e.ownerDocument) && a.defaultView) || window;
          var i = a.getSelection && a.getSelection();
          if (i && i.rangeCount !== 0) {
            a = i.anchorNode;
            var c = i.anchorOffset,
              u = i.focusNode;
            i = i.focusOffset;
            try {
              a.nodeType, u.nodeType;
            } catch {
              a = null;
              break e;
            }
            var g = 0,
              C = -1,
              N = -1,
              Y = 0,
              ne = 0,
              re = e,
              I = null;
            t: for (;;) {
              for (
                var Q;
                re !== a || (c !== 0 && re.nodeType !== 3) || (C = g + c),
                  re !== u || (i !== 0 && re.nodeType !== 3) || (N = g + i),
                  re.nodeType === 3 && (g += re.nodeValue.length),
                  (Q = re.firstChild) !== null;

              )
                (I = re), (re = Q);
              for (;;) {
                if (re === e) break t;
                if (
                  (I === a && ++Y === c && (C = g),
                  I === u && ++ne === i && (N = g),
                  (Q = re.nextSibling) !== null)
                )
                  break;
                (re = I), (I = re.parentNode);
              }
              re = Q;
            }
            a = C === -1 || N === -1 ? null : { start: C, end: N };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Df = { focusedElem: e, selectionRange: a }, Ls = !1, Gt = t;
      Gt !== null;

    )
      if (
        ((t = Gt), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null)
      )
        (e.return = t), (Gt = e);
      else
        for (; Gt !== null; ) {
          switch (((t = Gt), (u = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                (e = void 0),
                  (a = t),
                  (c = u.memoizedProps),
                  (u = u.memoizedState),
                  (i = a.stateNode);
                try {
                  var Ae = Ur(a.type, c, a.elementType === a.type);
                  (e = i.getSnapshotBeforeUpdate(Ae, u)),
                    (i.__reactInternalSnapshotBeforeUpdate = e);
                } catch (_e) {
                  ct(a, a.return, _e);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (a = e.nodeType), a === 9)
                )
                  Hf(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Hf(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(l(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (Gt = e);
            break;
          }
          Gt = t.return;
        }
  }
  function mv(e, t, a) {
    var i = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        ar(e, a), i & 4 && Do(5, a);
        break;
      case 1:
        if ((ar(e, a), i & 4))
          if (((e = a.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (g) {
              ct(a, a.return, g);
            }
          else {
            var c = Ur(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(c, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (g) {
              ct(a, a.return, g);
            }
          }
        i & 64 && sv(a), i & 512 && zo(a, a.return);
        break;
      case 3:
        if ((ar(e, a), i & 64 && ((e = a.updateQueue), e !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            Qm(e, t);
          } catch (g) {
            ct(a, a.return, g);
          }
        }
        break;
      case 27:
        t === null && i & 4 && dv(a);
      case 26:
      case 5:
        ar(e, a), t === null && i & 4 && uv(a), i & 512 && zo(a, a.return);
        break;
      case 12:
        ar(e, a);
        break;
      case 13:
        ar(e, a),
          i & 4 && gv(e, a),
          i & 64 &&
            ((e = a.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((a = Hx.bind(null, a)), e2(e, a))));
        break;
      case 22:
        if (((i = a.memoizedState !== null || Ma), !i)) {
          (t = (t !== null && t.memoizedState !== null) || At), (c = Ma);
          var u = At;
          (Ma = i),
            (At = t) && !u ? rr(e, a, (a.subtreeFlags & 8772) !== 0) : ar(e, a),
            (Ma = c),
            (At = u);
        }
        break;
      case 30:
        break;
      default:
        ar(e, a);
    }
  }
  function vv(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), vv(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && ye(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var yt = null,
    mn = !1;
  function Da(e, t, a) {
    for (a = a.child; a !== null; ) pv(e, t, a), (a = a.sibling);
  }
  function pv(e, t, a) {
    if (jt && typeof jt.onCommitFiberUnmount == "function")
      try {
        jt.onCommitFiberUnmount(an, a);
      } catch {}
    switch (a.tag) {
      case 26:
        At || fa(a, t),
          Da(e, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a));
        break;
      case 27:
        At || fa(a, t);
        var i = yt,
          c = mn;
        ur(a.type) && ((yt = a.stateNode), (mn = !1)),
          Da(e, t, a),
          ko(a.stateNode),
          (yt = i),
          (mn = c);
        break;
      case 5:
        At || fa(a, t);
      case 6:
        if (
          ((i = yt),
          (c = mn),
          (yt = null),
          Da(e, t, a),
          (yt = i),
          (mn = c),
          yt !== null)
        )
          if (mn)
            try {
              (yt.nodeType === 9
                ? yt.body
                : yt.nodeName === "HTML"
                ? yt.ownerDocument.body
                : yt
              ).removeChild(a.stateNode);
            } catch (u) {
              ct(a, t, u);
            }
          else
            try {
              yt.removeChild(a.stateNode);
            } catch (u) {
              ct(a, t, u);
            }
        break;
      case 18:
        yt !== null &&
          (mn
            ? ((e = yt),
              rp(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e,
                a.stateNode
              ),
              Ko(e))
            : rp(yt, a.stateNode));
        break;
      case 4:
        (i = yt),
          (c = mn),
          (yt = a.stateNode.containerInfo),
          (mn = !0),
          Da(e, t, a),
          (yt = i),
          (mn = c);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        At || nr(2, a, t), At || nr(4, a, t), Da(e, t, a);
        break;
      case 1:
        At ||
          (fa(a, t),
          (i = a.stateNode),
          typeof i.componentWillUnmount == "function" && cv(a, t, i)),
          Da(e, t, a);
        break;
      case 21:
        Da(e, t, a);
        break;
      case 22:
        (At = (i = At) || a.memoizedState !== null), Da(e, t, a), (At = i);
        break;
      default:
        Da(e, t, a);
    }
  }
  function gv(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Ko(e);
      } catch (a) {
        ct(t, t.return, a);
      }
  }
  function jx(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new hv()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new hv()),
          t
        );
      default:
        throw Error(l(435, e.tag));
    }
  }
  function cf(e, t) {
    var a = jx(e);
    t.forEach(function (i) {
      var c = Bx.bind(null, e, i);
      a.has(i) || (a.add(i), i.then(c, c));
    });
  }
  function Cn(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var i = 0; i < a.length; i++) {
        var c = a[i],
          u = e,
          g = t,
          C = g;
        e: for (; C !== null; ) {
          switch (C.tag) {
            case 27:
              if (ur(C.type)) {
                (yt = C.stateNode), (mn = !1);
                break e;
              }
              break;
            case 5:
              (yt = C.stateNode), (mn = !1);
              break e;
            case 3:
            case 4:
              (yt = C.stateNode.containerInfo), (mn = !0);
              break e;
          }
          C = C.return;
        }
        if (yt === null) throw Error(l(160));
        pv(u, g, c),
          (yt = null),
          (mn = !1),
          (u = c.alternate),
          u !== null && (u.return = null),
          (c.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) yv(t, e), (t = t.sibling);
  }
  var Jn = null;
  function yv(e, t) {
    var a = e.alternate,
      i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Cn(t, e),
          En(e),
          i & 4 && (nr(3, e, e.return), Do(3, e), nr(5, e, e.return));
        break;
      case 1:
        Cn(t, e),
          En(e),
          i & 512 && (At || a === null || fa(a, a.return)),
          i & 64 &&
            Ma &&
            ((e = e.updateQueue),
            e !== null &&
              ((i = e.callbacks),
              i !== null &&
                ((a = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = a === null ? i : a.concat(i)))));
        break;
      case 26:
        var c = Jn;
        if (
          (Cn(t, e),
          En(e),
          i & 512 && (At || a === null || fa(a, a.return)),
          i & 4)
        ) {
          var u = a !== null ? a.memoizedState : null;
          if (((i = e.memoizedState), a === null))
            if (i === null)
              if (e.stateNode === null) {
                e: {
                  (i = e.type),
                    (a = e.memoizedProps),
                    (c = c.ownerDocument || c);
                  t: switch (i) {
                    case "title":
                      (u = c.getElementsByTagName("title")[0]),
                        (!u ||
                          u[he] ||
                          u[M] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = c.createElement(i)),
                          c.head.insertBefore(
                            u,
                            c.querySelector("head > title")
                          )),
                        Jt(u, i, a),
                        (u[M] = e),
                        Be(u),
                        (i = u);
                      break e;
                    case "link":
                      var g = dp("link", "href", c).get(i + (a.href || ""));
                      if (g) {
                        for (var C = 0; C < g.length; C++)
                          if (
                            ((u = g[C]),
                            u.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              u.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              u.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              u.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            g.splice(C, 1);
                            break t;
                          }
                      }
                      (u = c.createElement(i)),
                        Jt(u, i, a),
                        c.head.appendChild(u);
                      break;
                    case "meta":
                      if (
                        (g = dp("meta", "content", c).get(
                          i + (a.content || "")
                        ))
                      ) {
                        for (C = 0; C < g.length; C++)
                          if (
                            ((u = g[C]),
                            u.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              u.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              u.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              u.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            g.splice(C, 1);
                            break t;
                          }
                      }
                      (u = c.createElement(i)),
                        Jt(u, i, a),
                        c.head.appendChild(u);
                      break;
                    default:
                      throw Error(l(468, i));
                  }
                  (u[M] = e), Be(u), (i = u);
                }
                e.stateNode = i;
              } else hp(c, e.type, e.stateNode);
            else e.stateNode = fp(c, i, e.memoizedProps);
          else
            u !== i
              ? (u === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : u.count--,
                i === null
                  ? hp(c, e.type, e.stateNode)
                  : fp(c, i, e.memoizedProps))
              : i === null &&
                e.stateNode !== null &&
                rf(e, e.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        Cn(t, e),
          En(e),
          i & 512 && (At || a === null || fa(a, a.return)),
          a !== null && i & 4 && rf(e, e.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if (
          (Cn(t, e),
          En(e),
          i & 512 && (At || a === null || fa(a, a.return)),
          e.flags & 32)
        ) {
          c = e.stateNode;
          try {
            ol(c, "");
          } catch (Q) {
            ct(e, e.return, Q);
          }
        }
        i & 4 &&
          e.stateNode != null &&
          ((c = e.memoizedProps), rf(e, c, a !== null ? a.memoizedProps : c)),
          i & 1024 && (sf = !0);
        break;
      case 6:
        if ((Cn(t, e), En(e), i & 4)) {
          if (e.stateNode === null) throw Error(l(162));
          (i = e.memoizedProps), (a = e.stateNode);
          try {
            a.nodeValue = i;
          } catch (Q) {
            ct(e, e.return, Q);
          }
        }
        break;
      case 3:
        if (
          ((Ms = null),
          (c = Jn),
          (Jn = As(t.containerInfo)),
          Cn(t, e),
          (Jn = c),
          En(e),
          i & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            Ko(t.containerInfo);
          } catch (Q) {
            ct(e, e.return, Q);
          }
        sf && ((sf = !1), bv(e));
        break;
      case 4:
        (i = Jn),
          (Jn = As(e.stateNode.containerInfo)),
          Cn(t, e),
          En(e),
          (Jn = i);
        break;
      case 12:
        Cn(t, e), En(e);
        break;
      case 13:
        Cn(t, e),
          En(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (vf = dt()),
          i & 4 &&
            ((i = e.updateQueue),
            i !== null && ((e.updateQueue = null), cf(e, i)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var N = a !== null && a.memoizedState !== null,
          Y = Ma,
          ne = At;
        if (
          ((Ma = Y || c),
          (At = ne || N),
          Cn(t, e),
          (At = ne),
          (Ma = Y),
          En(e),
          i & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = c ? t._visibility & -2 : t._visibility | 1,
              c && (a === null || N || Ma || At || $r(e)),
              a = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                N = a = t;
                try {
                  if (((u = N.stateNode), c))
                    (g = u.style),
                      typeof g.setProperty == "function"
                        ? g.setProperty("display", "none", "important")
                        : (g.display = "none");
                  else {
                    C = N.stateNode;
                    var re = N.memoizedProps.style,
                      I =
                        re != null && re.hasOwnProperty("display")
                          ? re.display
                          : null;
                    C.style.display =
                      I == null || typeof I == "boolean" ? "" : ("" + I).trim();
                  }
                } catch (Q) {
                  ct(N, N.return, Q);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                N = t;
                try {
                  N.stateNode.nodeValue = c ? "" : N.memoizedProps;
                } catch (Q) {
                  ct(N, N.return, Q);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              a === t && (a = null), (t = t.return);
            }
            a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        i & 4 &&
          ((i = e.updateQueue),
          i !== null &&
            ((a = i.retryQueue),
            a !== null && ((i.retryQueue = null), cf(e, a))));
        break;
      case 19:
        Cn(t, e),
          En(e),
          i & 4 &&
            ((i = e.updateQueue),
            i !== null && ((e.updateQueue = null), cf(e, i)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Cn(t, e), En(e);
    }
  }
  function En(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, i = e.return; i !== null; ) {
          if (fv(i)) {
            a = i;
            break;
          }
          i = i.return;
        }
        if (a == null) throw Error(l(160));
        switch (a.tag) {
          case 27:
            var c = a.stateNode,
              u = lf(e);
            gs(e, u, c);
            break;
          case 5:
            var g = a.stateNode;
            a.flags & 32 && (ol(g, ""), (a.flags &= -33));
            var C = lf(e);
            gs(e, C, g);
            break;
          case 3:
          case 4:
            var N = a.stateNode.containerInfo,
              Y = lf(e);
            of(e, Y, N);
            break;
          default:
            throw Error(l(161));
        }
      } catch (ne) {
        ct(e, e.return, ne);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function bv(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        bv(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function ar(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) mv(e, t.alternate, t), (t = t.sibling);
  }
  function $r(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          nr(4, t, t.return), $r(t);
          break;
        case 1:
          fa(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && cv(t, t.return, a),
            $r(t);
          break;
        case 27:
          ko(t.stateNode);
        case 26:
        case 5:
          fa(t, t.return), $r(t);
          break;
        case 22:
          t.memoizedState === null && $r(t);
          break;
        case 30:
          $r(t);
          break;
        default:
          $r(t);
      }
      e = e.sibling;
    }
  }
  function rr(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var i = t.alternate,
        c = e,
        u = t,
        g = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          rr(c, u, a), Do(4, u);
          break;
        case 1:
          if (
            (rr(c, u, a),
            (i = u),
            (c = i.stateNode),
            typeof c.componentDidMount == "function")
          )
            try {
              c.componentDidMount();
            } catch (Y) {
              ct(i, i.return, Y);
            }
          if (((i = u), (c = i.updateQueue), c !== null)) {
            var C = i.stateNode;
            try {
              var N = c.shared.hiddenCallbacks;
              if (N !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < N.length; c++)
                  Im(N[c], C);
            } catch (Y) {
              ct(i, i.return, Y);
            }
          }
          a && g & 64 && sv(u), zo(u, u.return);
          break;
        case 27:
          dv(u);
        case 26:
        case 5:
          rr(c, u, a), a && i === null && g & 4 && uv(u), zo(u, u.return);
          break;
        case 12:
          rr(c, u, a);
          break;
        case 13:
          rr(c, u, a), a && g & 4 && gv(c, u);
          break;
        case 22:
          u.memoizedState === null && rr(c, u, a), zo(u, u.return);
          break;
        case 30:
          break;
        default:
          rr(c, u, a);
      }
      t = t.sibling;
    }
  }
  function uf(e, t) {
    var a = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (a = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== a && (e != null && e.refCount++, a != null && bo(a));
  }
  function ff(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && bo(e));
  }
  function da(e, t, a, i) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) xv(e, t, a, i), (t = t.sibling);
  }
  function xv(e, t, a, i) {
    var c = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        da(e, t, a, i), c & 2048 && Do(9, t);
        break;
      case 1:
        da(e, t, a, i);
        break;
      case 3:
        da(e, t, a, i),
          c & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && bo(e)));
        break;
      case 12:
        if (c & 2048) {
          da(e, t, a, i), (e = t.stateNode);
          try {
            var u = t.memoizedProps,
              g = u.id,
              C = u.onPostCommit;
            typeof C == "function" &&
              C(
                g,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (N) {
            ct(t, t.return, N);
          }
        } else da(e, t, a, i);
        break;
      case 13:
        da(e, t, a, i);
        break;
      case 23:
        break;
      case 22:
        (u = t.stateNode),
          (g = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? da(e, t, a, i)
              : Lo(e, t)
            : u._visibility & 2
            ? da(e, t, a, i)
            : ((u._visibility |= 2),
              _l(e, t, a, i, (t.subtreeFlags & 10256) !== 0)),
          c & 2048 && uf(g, t);
        break;
      case 24:
        da(e, t, a, i), c & 2048 && ff(t.alternate, t);
        break;
      default:
        da(e, t, a, i);
    }
  }
  function _l(e, t, a, i, c) {
    for (c = c && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var u = e,
        g = t,
        C = a,
        N = i,
        Y = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          _l(u, g, C, N, c), Do(8, g);
          break;
        case 23:
          break;
        case 22:
          var ne = g.stateNode;
          g.memoizedState !== null
            ? ne._visibility & 2
              ? _l(u, g, C, N, c)
              : Lo(u, g)
            : ((ne._visibility |= 2), _l(u, g, C, N, c)),
            c && Y & 2048 && uf(g.alternate, g);
          break;
        case 24:
          _l(u, g, C, N, c), c && Y & 2048 && ff(g.alternate, g);
          break;
        default:
          _l(u, g, C, N, c);
      }
      t = t.sibling;
    }
  }
  function Lo(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e,
          i = t,
          c = i.flags;
        switch (i.tag) {
          case 22:
            Lo(a, i), c & 2048 && uf(i.alternate, i);
            break;
          case 24:
            Lo(a, i), c & 2048 && ff(i.alternate, i);
            break;
          default:
            Lo(a, i);
        }
        t = t.sibling;
      }
  }
  var Ho = 8192;
  function Ol(e) {
    if (e.subtreeFlags & Ho)
      for (e = e.child; e !== null; ) Sv(e), (e = e.sibling);
  }
  function Sv(e) {
    switch (e.tag) {
      case 26:
        Ol(e),
          e.flags & Ho &&
            e.memoizedState !== null &&
            h2(Jn, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Ol(e);
        break;
      case 3:
      case 4:
        var t = Jn;
        (Jn = As(e.stateNode.containerInfo)), Ol(e), (Jn = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = Ho), (Ho = 16777216), Ol(e), (Ho = t))
            : Ol(e));
        break;
      default:
        Ol(e);
    }
  }
  function Cv(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function Bo(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var i = t[a];
          (Gt = i), Tv(i, e);
        }
      Cv(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Ev(e), (e = e.sibling);
  }
  function Ev(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Bo(e), e.flags & 2048 && nr(9, e, e.return);
        break;
      case 3:
        Bo(e);
        break;
      case 12:
        Bo(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), ys(e))
          : Bo(e);
        break;
      default:
        Bo(e);
    }
  }
  function ys(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var i = t[a];
          (Gt = i), Tv(i, e);
        }
      Cv(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          nr(8, t, t.return), ys(t);
          break;
        case 22:
          (a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), ys(t));
          break;
        default:
          ys(t);
      }
      e = e.sibling;
    }
  }
  function Tv(e, t) {
    for (; Gt !== null; ) {
      var a = Gt;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          nr(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var i = a.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          bo(a.memoizedState.cache);
      }
      if (((i = a.child), i !== null)) (i.return = a), (Gt = i);
      else
        e: for (a = e; Gt !== null; ) {
          i = Gt;
          var c = i.sibling,
            u = i.return;
          if ((vv(i), i === a)) {
            Gt = null;
            break e;
          }
          if (c !== null) {
            (c.return = u), (Gt = c);
            break e;
          }
          Gt = u;
        }
    }
  }
  var Rx = {
      getCacheForType: function (e) {
        var t = en(Ut),
          a = t.data.get(e);
        return a === void 0 && ((a = e()), t.data.set(e, a)), a;
      },
    },
    Ax = typeof WeakMap == "function" ? WeakMap : Map,
    tt = 0,
    vt = null,
    Pe = null,
    Ge = 0,
    nt = 0,
    Tn = null,
    lr = !1,
    wl = !1,
    df = !1,
    za = 0,
    wt = 0,
    or = 0,
    Pr = 0,
    hf = 0,
    $n = 0,
    jl = 0,
    Uo = null,
    vn = null,
    mf = !1,
    vf = 0,
    bs = 1 / 0,
    xs = null,
    ir = null,
    Kt = 0,
    sr = null,
    Rl = null,
    Al = 0,
    pf = 0,
    gf = null,
    _v = null,
    $o = 0,
    yf = null;
  function _n() {
    if ((tt & 2) !== 0 && Ge !== 0) return Ge & -Ge;
    if (z.T !== null) {
      var e = gl;
      return e !== 0 ? e : _f();
    }
    return Zn();
  }
  function Ov() {
    $n === 0 && ($n = (Ge & 536870912) === 0 || Ze ? ga() : 536870912);
    var e = Un.current;
    return e !== null && (e.flags |= 32), $n;
  }
  function On(e, t, a) {
    ((e === vt && (nt === 2 || nt === 9)) || e.cancelPendingCommit !== null) &&
      (Nl(e, 0), cr(e, Ge, $n, !1)),
      In(e, a),
      ((tt & 2) === 0 || e !== vt) &&
        (e === vt &&
          ((tt & 2) === 0 && (Pr |= a), wt === 4 && cr(e, Ge, $n, !1)),
        ha(e));
  }
  function wv(e, t, a) {
    if ((tt & 6) !== 0) throw Error(l(327));
    var i = (!a && (t & 124) === 0 && (t & e.expiredLanes) === 0) || Bt(e, t),
      c = i ? Dx(e, t) : Sf(e, t, !0),
      u = i;
    do {
      if (c === 0) {
        wl && !i && cr(e, t, 0, !1);
        break;
      } else {
        if (((a = e.current.alternate), u && !Nx(a))) {
          (c = Sf(e, t, !1)), (u = !1);
          continue;
        }
        if (c === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var g = 0;
          else
            (g = e.pendingLanes & -536870913),
              (g = g !== 0 ? g : g & 536870912 ? 536870912 : 0);
          if (g !== 0) {
            t = g;
            e: {
              var C = e;
              c = Uo;
              var N = C.current.memoizedState.isDehydrated;
              if ((N && (Nl(C, g).flags |= 256), (g = Sf(C, g, !1)), g !== 2)) {
                if (df && !N) {
                  (C.errorRecoveryDisabledLanes |= u), (Pr |= u), (c = 4);
                  break e;
                }
                (u = vn),
                  (vn = c),
                  u !== null && (vn === null ? (vn = u) : vn.push.apply(vn, u));
              }
              c = g;
            }
            if (((u = !1), c !== 2)) continue;
          }
        }
        if (c === 1) {
          Nl(e, 0), cr(e, t, 0, !0);
          break;
        }
        e: {
          switch (((i = e), (u = c), u)) {
            case 0:
            case 1:
              throw Error(l(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              cr(i, t, $n, !lr);
              break e;
            case 2:
              vn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(l(329));
          }
          if ((t & 62914560) === t && ((c = vf + 300 - dt()), 10 < c)) {
            if ((cr(i, t, $n, !lr), mt(i, 0, !0) !== 0)) break e;
            i.timeoutHandle = np(
              jv.bind(null, i, a, vn, xs, mf, t, $n, Pr, jl, lr, u, 2, -0, 0),
              c
            );
            break e;
          }
          jv(i, a, vn, xs, mf, t, $n, Pr, jl, lr, u, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    ha(e);
  }
  function jv(e, t, a, i, c, u, g, C, N, Y, ne, re, I, Q) {
    if (
      ((e.timeoutHandle = -1),
      (re = t.subtreeFlags),
      (re & 8192 || (re & 16785408) === 16785408) &&
        ((Yo = { stylesheets: null, count: 0, unsuspend: d2 }),
        Sv(t),
        (re = m2()),
        re !== null))
    ) {
      (e.cancelPendingCommit = re(
        Lv.bind(null, e, t, u, a, i, c, g, C, N, ne, 1, I, Q)
      )),
        cr(e, u, g, !Y);
      return;
    }
    Lv(e, t, u, a, i, c, g, C, N);
  }
  function Nx(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var i = 0; i < a.length; i++) {
          var c = a[i],
            u = c.getSnapshot;
          c = c.value;
          try {
            if (!xn(u(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        (a.return = t), (t = a);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function cr(e, t, a, i) {
    (t &= ~hf),
      (t &= ~Pr),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      i && (e.warmLanes |= t),
      (i = e.expirationTimes);
    for (var c = t; 0 < c; ) {
      var u = 31 - rt(c),
        g = 1 << u;
      (i[u] = -1), (c &= ~g);
    }
    a !== 0 && Ya(e, a, t);
  }
  function Ss() {
    return (tt & 6) === 0 ? (Po(0), !1) : !0;
  }
  function bf() {
    if (Pe !== null) {
      if (nt === 0) var e = Pe.return;
      else (e = Pe), (Oa = zr = null), Lu(e), (El = null), (Ao = 0), (e = Pe);
      for (; e !== null; ) iv(e.alternate, e), (e = e.return);
      Pe = null;
    }
  }
  function Nl(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && ((e.timeoutHandle = -1), Qx(a)),
      (a = e.cancelPendingCommit),
      a !== null && ((e.cancelPendingCommit = null), a()),
      bf(),
      (vt = e),
      (Pe = a = Ea(e.current, null)),
      (Ge = t),
      (nt = 0),
      (Tn = null),
      (lr = !1),
      (wl = Bt(e, t)),
      (df = !1),
      (jl = $n = hf = Pr = or = wt = 0),
      (vn = Uo = null),
      (mf = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var i = e.entangledLanes;
    if (i !== 0)
      for (e = e.entanglements, i &= t; 0 < i; ) {
        var c = 31 - rt(i),
          u = 1 << c;
        (t |= e[c]), (i &= ~u);
      }
    return (za = t), ki(), a;
  }
  function Rv(e, t) {
    (Ue = null),
      (z.H = ss),
      t === So || t === Ji
        ? ((t = Ym()), (nt = 3))
        : t === km
        ? ((t = Ym()), (nt = 4))
        : (nt =
            t === F0
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (Tn = t),
      Pe === null && ((wt = 1), hs(e, zn(t, e.current)));
  }
  function Av() {
    var e = z.H;
    return (z.H = ss), e === null ? ss : e;
  }
  function Nv() {
    var e = z.A;
    return (z.A = Rx), e;
  }
  function xf() {
    (wt = 4),
      lr || ((Ge & 4194048) !== Ge && Un.current !== null) || (wl = !0),
      ((or & 134217727) === 0 && (Pr & 134217727) === 0) ||
        vt === null ||
        cr(vt, Ge, $n, !1);
  }
  function Sf(e, t, a) {
    var i = tt;
    tt |= 2;
    var c = Av(),
      u = Nv();
    (vt !== e || Ge !== t) && ((xs = null), Nl(e, t)), (t = !1);
    var g = wt;
    e: do
      try {
        if (nt !== 0 && Pe !== null) {
          var C = Pe,
            N = Tn;
          switch (nt) {
            case 8:
              bf(), (g = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Un.current === null && (t = !0);
              var Y = nt;
              if (((nt = 0), (Tn = null), Ml(e, C, N, Y), a && wl)) {
                g = 0;
                break e;
              }
              break;
            default:
              (Y = nt), (nt = 0), (Tn = null), Ml(e, C, N, Y);
          }
        }
        Mx(), (g = wt);
        break;
      } catch (ne) {
        Rv(e, ne);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Oa = zr = null),
      (tt = i),
      (z.H = c),
      (z.A = u),
      Pe === null && ((vt = null), (Ge = 0), ki()),
      g
    );
  }
  function Mx() {
    for (; Pe !== null; ) Mv(Pe);
  }
  function Dx(e, t) {
    var a = tt;
    tt |= 2;
    var i = Av(),
      c = Nv();
    vt !== e || Ge !== t
      ? ((xs = null), (bs = dt() + 500), Nl(e, t))
      : (wl = Bt(e, t));
    e: do
      try {
        if (nt !== 0 && Pe !== null) {
          t = Pe;
          var u = Tn;
          t: switch (nt) {
            case 1:
              (nt = 0), (Tn = null), Ml(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (Gm(u)) {
                (nt = 0), (Tn = null), Dv(t);
                break;
              }
              (t = function () {
                (nt !== 2 && nt !== 9) || vt !== e || (nt = 7), ha(e);
              }),
                u.then(t, t);
              break e;
            case 3:
              nt = 7;
              break e;
            case 4:
              nt = 5;
              break e;
            case 7:
              Gm(u)
                ? ((nt = 0), (Tn = null), Dv(t))
                : ((nt = 0), (Tn = null), Ml(e, t, u, 7));
              break;
            case 5:
              var g = null;
              switch (Pe.tag) {
                case 26:
                  g = Pe.memoizedState;
                case 5:
                case 27:
                  var C = Pe;
                  if (!g || mp(g)) {
                    (nt = 0), (Tn = null);
                    var N = C.sibling;
                    if (N !== null) Pe = N;
                    else {
                      var Y = C.return;
                      Y !== null ? ((Pe = Y), Cs(Y)) : (Pe = null);
                    }
                    break t;
                  }
              }
              (nt = 0), (Tn = null), Ml(e, t, u, 5);
              break;
            case 6:
              (nt = 0), (Tn = null), Ml(e, t, u, 6);
              break;
            case 8:
              bf(), (wt = 6);
              break e;
            default:
              throw Error(l(462));
          }
        }
        zx();
        break;
      } catch (ne) {
        Rv(e, ne);
      }
    while (!0);
    return (
      (Oa = zr = null),
      (z.H = i),
      (z.A = c),
      (tt = a),
      Pe !== null ? 0 : ((vt = null), (Ge = 0), ki(), wt)
    );
  }
  function zx() {
    for (; Pe !== null && !un(); ) Mv(Pe);
  }
  function Mv(e) {
    var t = lv(e.alternate, e, za);
    (e.memoizedProps = e.pendingProps), t === null ? Cs(e) : (Pe = t);
  }
  function Dv(e) {
    var t = e,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = W0(a, t, t.pendingProps, t.type, void 0, Ge);
        break;
      case 11:
        t = W0(a, t, t.pendingProps, t.type.render, t.ref, Ge);
        break;
      case 5:
        Lu(t);
      default:
        iv(a, t), (t = Pe = zm(t, za)), (t = lv(a, t, za));
    }
    (e.memoizedProps = e.pendingProps), t === null ? Cs(e) : (Pe = t);
  }
  function Ml(e, t, a, i) {
    (Oa = zr = null), Lu(t), (El = null), (Ao = 0);
    var c = t.return;
    try {
      if (Ex(e, c, t, a, Ge)) {
        (wt = 1), hs(e, zn(a, e.current)), (Pe = null);
        return;
      }
    } catch (u) {
      if (c !== null) throw ((Pe = c), u);
      (wt = 1), hs(e, zn(a, e.current)), (Pe = null);
      return;
    }
    t.flags & 32768
      ? (Ze || i === 1
          ? (e = !0)
          : wl || (Ge & 536870912) !== 0
          ? (e = !1)
          : ((lr = e = !0),
            (i === 2 || i === 9 || i === 3 || i === 6) &&
              ((i = Un.current),
              i !== null && i.tag === 13 && (i.flags |= 16384))),
        zv(t, e))
      : Cs(t);
  }
  function Cs(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        zv(t, lr);
        return;
      }
      e = t.return;
      var a = _x(t.alternate, t, za);
      if (a !== null) {
        Pe = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Pe = t;
        return;
      }
      Pe = t = e;
    } while (t !== null);
    wt === 0 && (wt = 5);
  }
  function zv(e, t) {
    do {
      var a = Ox(e.alternate, e);
      if (a !== null) {
        (a.flags &= 32767), (Pe = a);
        return;
      }
      if (
        ((a = e.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Pe = e;
        return;
      }
      Pe = e = a;
    } while (e !== null);
    (wt = 6), (Pe = null);
  }
  function Lv(e, t, a, i, c, u, g, C, N) {
    e.cancelPendingCommit = null;
    do Es();
    while (Kt !== 0);
    if ((tt & 6) !== 0) throw Error(l(327));
    if (t !== null) {
      if (t === e.current) throw Error(l(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= uu),
        ao(e, a, u, g, C, N),
        e === vt && ((Pe = vt = null), (Ge = 0)),
        (Rl = t),
        (sr = e),
        (Al = a),
        (pf = u),
        (gf = c),
        (_v = i),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            Ux(Ke, function () {
              return Pv(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (i = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || i)
      ) {
        (i = z.T), (z.T = null), (c = W.p), (W.p = 2), (g = tt), (tt |= 4);
        try {
          wx(e, t, a);
        } finally {
          (tt = g), (W.p = c), (z.T = i);
        }
      }
      (Kt = 1), Hv(), Bv(), Uv();
    }
  }
  function Hv() {
    if (Kt === 1) {
      Kt = 0;
      var e = sr,
        t = Rl,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        (a = z.T), (z.T = null);
        var i = W.p;
        W.p = 2;
        var c = tt;
        tt |= 4;
        try {
          yv(t, e);
          var u = Df,
            g = Tm(e.containerInfo),
            C = u.focusedElem,
            N = u.selectionRange;
          if (
            g !== C &&
            C &&
            C.ownerDocument &&
            Em(C.ownerDocument.documentElement, C)
          ) {
            if (N !== null && lu(C)) {
              var Y = N.start,
                ne = N.end;
              if ((ne === void 0 && (ne = Y), "selectionStart" in C))
                (C.selectionStart = Y),
                  (C.selectionEnd = Math.min(ne, C.value.length));
              else {
                var re = C.ownerDocument || document,
                  I = (re && re.defaultView) || window;
                if (I.getSelection) {
                  var Q = I.getSelection(),
                    Ae = C.textContent.length,
                    _e = Math.min(N.start, Ae),
                    it = N.end === void 0 ? _e : Math.min(N.end, Ae);
                  !Q.extend && _e > it && ((g = it), (it = _e), (_e = g));
                  var V = Cm(C, _e),
                    L = Cm(C, it);
                  if (
                    V &&
                    L &&
                    (Q.rangeCount !== 1 ||
                      Q.anchorNode !== V.node ||
                      Q.anchorOffset !== V.offset ||
                      Q.focusNode !== L.node ||
                      Q.focusOffset !== L.offset)
                  ) {
                    var X = re.createRange();
                    X.setStart(V.node, V.offset),
                      Q.removeAllRanges(),
                      _e > it
                        ? (Q.addRange(X), Q.extend(L.node, L.offset))
                        : (X.setEnd(L.node, L.offset), Q.addRange(X));
                  }
                }
              }
            }
            for (re = [], Q = C; (Q = Q.parentNode); )
              Q.nodeType === 1 &&
                re.push({ element: Q, left: Q.scrollLeft, top: Q.scrollTop });
            for (
              typeof C.focus == "function" && C.focus(), C = 0;
              C < re.length;
              C++
            ) {
              var ae = re[C];
              (ae.element.scrollLeft = ae.left),
                (ae.element.scrollTop = ae.top);
            }
          }
          (Ls = !!Mf), (Df = Mf = null);
        } finally {
          (tt = c), (W.p = i), (z.T = a);
        }
      }
      (e.current = t), (Kt = 2);
    }
  }
  function Bv() {
    if (Kt === 2) {
      Kt = 0;
      var e = sr,
        t = Rl,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        (a = z.T), (z.T = null);
        var i = W.p;
        W.p = 2;
        var c = tt;
        tt |= 4;
        try {
          mv(e, t.alternate, t);
        } finally {
          (tt = c), (W.p = i), (z.T = a);
        }
      }
      Kt = 3;
    }
  }
  function Uv() {
    if (Kt === 4 || Kt === 3) {
      (Kt = 0), ft();
      var e = sr,
        t = Rl,
        a = Al,
        i = _v;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Kt = 5)
        : ((Kt = 0), (Rl = sr = null), $v(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (
        (c === 0 && (ir = null),
        An(a),
        (t = t.stateNode),
        jt && typeof jt.onCommitFiberRoot == "function")
      )
        try {
          jt.onCommitFiberRoot(an, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (i !== null) {
        (t = z.T), (c = W.p), (W.p = 2), (z.T = null);
        try {
          for (var u = e.onRecoverableError, g = 0; g < i.length; g++) {
            var C = i[g];
            u(C.value, { componentStack: C.stack });
          }
        } finally {
          (z.T = t), (W.p = c);
        }
      }
      (Al & 3) !== 0 && Es(),
        ha(e),
        (c = e.pendingLanes),
        (a & 4194090) !== 0 && (c & 42) !== 0
          ? e === yf
            ? $o++
            : (($o = 0), (yf = e))
          : ($o = 0),
        Po(0);
    }
  }
  function $v(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), bo(t)));
  }
  function Es(e) {
    return Hv(), Bv(), Uv(), Pv();
  }
  function Pv() {
    if (Kt !== 5) return !1;
    var e = sr,
      t = pf;
    pf = 0;
    var a = An(Al),
      i = z.T,
      c = W.p;
    try {
      (W.p = 32 > a ? 32 : a), (z.T = null), (a = gf), (gf = null);
      var u = sr,
        g = Al;
      if (((Kt = 0), (Rl = sr = null), (Al = 0), (tt & 6) !== 0))
        throw Error(l(331));
      var C = tt;
      if (
        ((tt |= 4),
        Ev(u.current),
        xv(u, u.current, g, a),
        (tt = C),
        Po(0, !1),
        jt && typeof jt.onPostCommitFiberRoot == "function")
      )
        try {
          jt.onPostCommitFiberRoot(an, u);
        } catch {}
      return !0;
    } finally {
      (W.p = c), (z.T = i), $v(e, t);
    }
  }
  function qv(e, t, a) {
    (t = zn(a, t)),
      (t = Qu(e.stateNode, t, 2)),
      (e = Ja(e, t, 2)),
      e !== null && (In(e, 2), ha(e));
  }
  function ct(e, t, a) {
    if (e.tag === 3) qv(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          qv(t, e, a);
          break;
        } else if (t.tag === 1) {
          var i = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" &&
              (ir === null || !ir.has(i)))
          ) {
            (e = zn(a, e)),
              (a = X0(2)),
              (i = Ja(t, a, 2)),
              i !== null && (Y0(a, i, t, e), In(i, 2), ha(i));
            break;
          }
        }
        t = t.return;
      }
  }
  function Cf(e, t, a) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new Ax();
      var c = new Set();
      i.set(t, c);
    } else (c = i.get(t)), c === void 0 && ((c = new Set()), i.set(t, c));
    c.has(a) ||
      ((df = !0), c.add(a), (e = Lx.bind(null, e, t, a)), t.then(e, e));
  }
  function Lx(e, t, a) {
    var i = e.pingCache;
    i !== null && i.delete(t),
      (e.pingedLanes |= e.suspendedLanes & a),
      (e.warmLanes &= ~a),
      vt === e &&
        (Ge & a) === a &&
        (wt === 4 || (wt === 3 && (Ge & 62914560) === Ge && 300 > dt() - vf)
          ? (tt & 2) === 0 && Nl(e, 0)
          : (hf |= a),
        jl === Ge && (jl = 0)),
      ha(e);
  }
  function Vv(e, t) {
    t === 0 && (t = Tr()), (e = hl(e, t)), e !== null && (In(e, t), ha(e));
  }
  function Hx(e) {
    var t = e.memoizedState,
      a = 0;
    t !== null && (a = t.retryLane), Vv(e, a);
  }
  function Bx(e, t) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var i = e.stateNode,
          c = e.memoizedState;
        c !== null && (a = c.retryLane);
        break;
      case 19:
        i = e.stateNode;
        break;
      case 22:
        i = e.stateNode._retryCache;
        break;
      default:
        throw Error(l(314));
    }
    i !== null && i.delete(t), Vv(e, a);
  }
  function Ux(e, t) {
    return Ie(e, t);
  }
  var Ts = null,
    Dl = null,
    Ef = !1,
    _s = !1,
    Tf = !1,
    qr = 0;
  function ha(e) {
    e !== Dl &&
      e.next === null &&
      (Dl === null ? (Ts = Dl = e) : (Dl = Dl.next = e)),
      (_s = !0),
      Ef || ((Ef = !0), Px());
  }
  function Po(e, t) {
    if (!Tf && _s) {
      Tf = !0;
      do
        for (var a = !1, i = Ts; i !== null; ) {
          if (e !== 0) {
            var c = i.pendingLanes;
            if (c === 0) var u = 0;
            else {
              var g = i.suspendedLanes,
                C = i.pingedLanes;
              (u = (1 << (31 - rt(42 | e) + 1)) - 1),
                (u &= c & ~(g & ~C)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0);
            }
            u !== 0 && ((a = !0), Yv(i, u));
          } else
            (u = Ge),
              (u = mt(
                i,
                i === vt ? u : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== -1
              )),
              (u & 3) === 0 || Bt(i, u) || ((a = !0), Yv(i, u));
          i = i.next;
        }
      while (a);
      Tf = !1;
    }
  }
  function $x() {
    kv();
  }
  function kv() {
    _s = Ef = !1;
    var e = 0;
    qr !== 0 && (Ix() && (e = qr), (qr = 0));
    for (var t = dt(), a = null, i = Ts; i !== null; ) {
      var c = i.next,
        u = Gv(i, t);
      u === 0
        ? ((i.next = null),
          a === null ? (Ts = c) : (a.next = c),
          c === null && (Dl = a))
        : ((a = i), (e !== 0 || (u & 3) !== 0) && (_s = !0)),
        (i = c);
    }
    Po(e);
  }
  function Gv(e, t) {
    for (
      var a = e.suspendedLanes,
        i = e.pingedLanes,
        c = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;

    ) {
      var g = 31 - rt(u),
        C = 1 << g,
        N = c[g];
      N === -1
        ? ((C & a) === 0 || (C & i) !== 0) && (c[g] = la(C, t))
        : N <= t && (e.expiredLanes |= C),
        (u &= ~C);
    }
    if (
      ((t = vt),
      (a = Ge),
      (a = mt(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (i = e.callbackNode),
      a === 0 ||
        (e === t && (nt === 2 || nt === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        i !== null && i !== null && Mt(i),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((a & 3) === 0 || Bt(e, a)) {
      if (((t = a & -a), t === e.callbackPriority)) return t;
      switch ((i !== null && Mt(i), An(a))) {
        case 2:
        case 8:
          a = qt;
          break;
        case 32:
          a = Ke;
          break;
        case 268435456:
          a = Tt;
          break;
        default:
          a = Ke;
      }
      return (
        (i = Xv.bind(null, e)),
        (a = Ie(a, i)),
        (e.callbackPriority = t),
        (e.callbackNode = a),
        t
      );
    }
    return (
      i !== null && i !== null && Mt(i),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Xv(e, t) {
    if (Kt !== 0 && Kt !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var a = e.callbackNode;
    if (Es() && e.callbackNode !== a) return null;
    var i = Ge;
    return (
      (i = mt(
        e,
        e === vt ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      i === 0
        ? null
        : (wv(e, i, t),
          Gv(e, dt()),
          e.callbackNode != null && e.callbackNode === a
            ? Xv.bind(null, e)
            : null)
    );
  }
  function Yv(e, t) {
    if (Es()) return null;
    wv(e, t, !0);
  }
  function Px() {
    Zx(function () {
      (tt & 6) !== 0 ? Ie(It, $x) : kv();
    });
  }
  function _f() {
    return qr === 0 && (qr = ga()), qr;
  }
  function Fv(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
      ? e
      : Hi("" + e);
  }
  function Iv(e, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      e.id && a.setAttribute("form", e.id),
      t.parentNode.insertBefore(a, t),
      (e = new FormData(e)),
      a.parentNode.removeChild(a),
      e
    );
  }
  function qx(e, t, a, i, c) {
    if (t === "submit" && a && a.stateNode === c) {
      var u = Fv((c[P] || null).action),
        g = i.submitter;
      g &&
        ((t = (t = g[P] || null)
          ? Fv(t.formAction)
          : g.getAttribute("formAction")),
        t !== null && ((u = t), (g = null)));
      var C = new Pi("action", "action", null, i, c);
      e.push({
        event: C,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (i.defaultPrevented) {
                if (qr !== 0) {
                  var N = g ? Iv(c, g) : new FormData(c);
                  Gu(
                    a,
                    { pending: !0, data: N, method: c.method, action: u },
                    null,
                    N
                  );
                }
              } else
                typeof u == "function" &&
                  (C.preventDefault(),
                  (N = g ? Iv(c, g) : new FormData(c)),
                  Gu(
                    a,
                    { pending: !0, data: N, method: c.method, action: u },
                    u,
                    N
                  ));
            },
            currentTarget: c,
          },
        ],
      });
    }
  }
  for (var Of = 0; Of < cu.length; Of++) {
    var wf = cu[Of],
      Vx = wf.toLowerCase(),
      kx = wf[0].toUpperCase() + wf.slice(1);
    Kn(Vx, "on" + kx);
  }
  Kn(wm, "onAnimationEnd"),
    Kn(jm, "onAnimationIteration"),
    Kn(Rm, "onAnimationStart"),
    Kn("dblclick", "onDoubleClick"),
    Kn("focusin", "onFocus"),
    Kn("focusout", "onBlur"),
    Kn(ox, "onTransitionRun"),
    Kn(ix, "onTransitionStart"),
    Kn(sx, "onTransitionCancel"),
    Kn(Am, "onTransitionEnd"),
    Ct("onMouseEnter", ["mouseout", "mouseover"]),
    Ct("onMouseLeave", ["mouseout", "mouseover"]),
    Ct("onPointerEnter", ["pointerout", "pointerover"]),
    Ct("onPointerLeave", ["pointerout", "pointerover"]),
    Ye(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Ye(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Ye("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ye(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ye(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ye(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var qo =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Gx = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(qo)
    );
  function Qv(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var i = e[a],
        c = i.event;
      i = i.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var g = i.length - 1; 0 <= g; g--) {
            var C = i[g],
              N = C.instance,
              Y = C.currentTarget;
            if (((C = C.listener), N !== u && c.isPropagationStopped()))
              break e;
            (u = C), (c.currentTarget = Y);
            try {
              u(c);
            } catch (ne) {
              ds(ne);
            }
            (c.currentTarget = null), (u = N);
          }
        else
          for (g = 0; g < i.length; g++) {
            if (
              ((C = i[g]),
              (N = C.instance),
              (Y = C.currentTarget),
              (C = C.listener),
              N !== u && c.isPropagationStopped())
            )
              break e;
            (u = C), (c.currentTarget = Y);
            try {
              u(c);
            } catch (ne) {
              ds(ne);
            }
            (c.currentTarget = null), (u = N);
          }
      }
    }
  }
  function qe(e, t) {
    var a = t[oe];
    a === void 0 && (a = t[oe] = new Set());
    var i = e + "__bubble";
    a.has(i) || (Zv(t, e, 2, !1), a.add(i));
  }
  function jf(e, t, a) {
    var i = 0;
    t && (i |= 4), Zv(a, e, i, t);
  }
  var Os = "_reactListening" + Math.random().toString(36).slice(2);
  function Rf(e) {
    if (!e[Os]) {
      (e[Os] = !0),
        Qe.forEach(function (a) {
          a !== "selectionchange" && (Gx.has(a) || jf(a, !1, e), jf(a, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Os] || ((t[Os] = !0), jf("selectionchange", !1, t));
    }
  }
  function Zv(e, t, a, i) {
    switch (xp(t)) {
      case 2:
        var c = g2;
        break;
      case 8:
        c = y2;
        break;
      default:
        c = kf;
    }
    (a = c.bind(null, t, a, e)),
      (c = void 0),
      !Zc ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (c = !0),
      i
        ? c !== void 0
          ? e.addEventListener(t, a, { capture: !0, passive: c })
          : e.addEventListener(t, a, !0)
        : c !== void 0
        ? e.addEventListener(t, a, { passive: c })
        : e.addEventListener(t, a, !1);
  }
  function Af(e, t, a, i, c) {
    var u = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
      e: for (;;) {
        if (i === null) return;
        var g = i.tag;
        if (g === 3 || g === 4) {
          var C = i.stateNode.containerInfo;
          if (C === c) break;
          if (g === 4)
            for (g = i.return; g !== null; ) {
              var N = g.tag;
              if ((N === 3 || N === 4) && g.stateNode.containerInfo === c)
                return;
              g = g.return;
            }
          for (; C !== null; ) {
            if (((g = ge(C)), g === null)) return;
            if (((N = g.tag), N === 5 || N === 6 || N === 26 || N === 27)) {
              i = u = g;
              continue e;
            }
            C = C.parentNode;
          }
        }
        i = i.return;
      }
    am(function () {
      var Y = u,
        ne = Ic(a),
        re = [];
      e: {
        var I = Nm.get(e);
        if (I !== void 0) {
          var Q = Pi,
            Ae = e;
          switch (e) {
            case "keypress":
              if (Ui(a) === 0) break e;
            case "keydown":
            case "keyup":
              Q = Ub;
              break;
            case "focusin":
              (Ae = "focus"), (Q = eu);
              break;
            case "focusout":
              (Ae = "blur"), (Q = eu);
              break;
            case "beforeblur":
            case "afterblur":
              Q = eu;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Q = om;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Q = Ob;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Q = qb;
              break;
            case wm:
            case jm:
            case Rm:
              Q = Rb;
              break;
            case Am:
              Q = kb;
              break;
            case "scroll":
            case "scrollend":
              Q = Tb;
              break;
            case "wheel":
              Q = Xb;
              break;
            case "copy":
            case "cut":
            case "paste":
              Q = Nb;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Q = sm;
              break;
            case "toggle":
            case "beforetoggle":
              Q = Fb;
          }
          var _e = (t & 4) !== 0,
            it = !_e && (e === "scroll" || e === "scrollend"),
            V = _e ? (I !== null ? I + "Capture" : null) : I;
          _e = [];
          for (var L = Y, X; L !== null; ) {
            var ae = L;
            if (
              ((X = ae.stateNode),
              (ae = ae.tag),
              (ae !== 5 && ae !== 26 && ae !== 27) ||
                X === null ||
                V === null ||
                ((ae = lo(L, V)), ae != null && _e.push(Vo(L, ae, X))),
              it)
            )
              break;
            L = L.return;
          }
          0 < _e.length &&
            ((I = new Q(I, Ae, null, a, ne)),
            re.push({ event: I, listeners: _e }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((I = e === "mouseover" || e === "pointerover"),
            (Q = e === "mouseout" || e === "pointerout"),
            I &&
              a !== Fc &&
              (Ae = a.relatedTarget || a.fromElement) &&
              (ge(Ae) || Ae[G]))
          )
            break e;
          if (
            (Q || I) &&
            ((I =
              ne.window === ne
                ? ne
                : (I = ne.ownerDocument)
                ? I.defaultView || I.parentWindow
                : window),
            Q
              ? ((Ae = a.relatedTarget || a.toElement),
                (Q = Y),
                (Ae = Ae ? ge(Ae) : null),
                Ae !== null &&
                  ((it = f(Ae)),
                  (_e = Ae.tag),
                  Ae !== it || (_e !== 5 && _e !== 27 && _e !== 6)) &&
                  (Ae = null))
              : ((Q = null), (Ae = Y)),
            Q !== Ae)
          ) {
            if (
              ((_e = om),
              (ae = "onMouseLeave"),
              (V = "onMouseEnter"),
              (L = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((_e = sm),
                (ae = "onPointerLeave"),
                (V = "onPointerEnter"),
                (L = "pointer")),
              (it = Q == null ? I : we(Q)),
              (X = Ae == null ? I : we(Ae)),
              (I = new _e(ae, L + "leave", Q, a, ne)),
              (I.target = it),
              (I.relatedTarget = X),
              (ae = null),
              ge(ne) === Y &&
                ((_e = new _e(V, L + "enter", Ae, a, ne)),
                (_e.target = X),
                (_e.relatedTarget = it),
                (ae = _e)),
              (it = ae),
              Q && Ae)
            )
              t: {
                for (_e = Q, V = Ae, L = 0, X = _e; X; X = zl(X)) L++;
                for (X = 0, ae = V; ae; ae = zl(ae)) X++;
                for (; 0 < L - X; ) (_e = zl(_e)), L--;
                for (; 0 < X - L; ) (V = zl(V)), X--;
                for (; L--; ) {
                  if (_e === V || (V !== null && _e === V.alternate)) break t;
                  (_e = zl(_e)), (V = zl(V));
                }
                _e = null;
              }
            else _e = null;
            Q !== null && Kv(re, I, Q, _e, !1),
              Ae !== null && it !== null && Kv(re, it, Ae, _e, !0);
          }
        }
        e: {
          if (
            ((I = Y ? we(Y) : window),
            (Q = I.nodeName && I.nodeName.toLowerCase()),
            Q === "select" || (Q === "input" && I.type === "file"))
          )
            var Ce = pm;
          else if (mm(I))
            if (gm) Ce = ax;
            else {
              Ce = tx;
              var $e = ex;
            }
          else
            (Q = I.nodeName),
              !Q ||
              Q.toLowerCase() !== "input" ||
              (I.type !== "checkbox" && I.type !== "radio")
                ? Y && Yc(Y.elementType) && (Ce = pm)
                : (Ce = nx);
          if (Ce && (Ce = Ce(e, Y))) {
            vm(re, Ce, a, ne);
            break e;
          }
          $e && $e(e, I, Y),
            e === "focusout" &&
              Y &&
              I.type === "number" &&
              Y.memoizedProps.value != null &&
              Xc(I, "number", I.value);
        }
        switch ((($e = Y ? we(Y) : window), e)) {
          case "focusin":
            (mm($e) || $e.contentEditable === "true") &&
              ((ul = $e), (ou = Y), (mo = null));
            break;
          case "focusout":
            mo = ou = ul = null;
            break;
          case "mousedown":
            iu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (iu = !1), _m(re, a, ne);
            break;
          case "selectionchange":
            if (lx) break;
          case "keydown":
          case "keyup":
            _m(re, a, ne);
        }
        var Te;
        if (nu)
          e: {
            switch (e) {
              case "compositionstart":
                var je = "onCompositionStart";
                break e;
              case "compositionend":
                je = "onCompositionEnd";
                break e;
              case "compositionupdate":
                je = "onCompositionUpdate";
                break e;
            }
            je = void 0;
          }
        else
          cl
            ? dm(e, a) && (je = "onCompositionEnd")
            : e === "keydown" &&
              a.keyCode === 229 &&
              (je = "onCompositionStart");
        je &&
          (cm &&
            a.locale !== "ko" &&
            (cl || je !== "onCompositionStart"
              ? je === "onCompositionEnd" && cl && (Te = rm())
              : ((Ia = ne),
                (Kc = "value" in Ia ? Ia.value : Ia.textContent),
                (cl = !0))),
          ($e = ws(Y, je)),
          0 < $e.length &&
            ((je = new im(je, e, null, a, ne)),
            re.push({ event: je, listeners: $e }),
            Te
              ? (je.data = Te)
              : ((Te = hm(a)), Te !== null && (je.data = Te)))),
          (Te = Qb ? Zb(e, a) : Kb(e, a)) &&
            ((je = ws(Y, "onBeforeInput")),
            0 < je.length &&
              (($e = new im("onBeforeInput", "beforeinput", null, a, ne)),
              re.push({ event: $e, listeners: je }),
              ($e.data = Te))),
          qx(re, e, Y, a, ne);
      }
      Qv(re, t);
    });
  }
  function Vo(e, t, a) {
    return { instance: e, listener: t, currentTarget: a };
  }
  function ws(e, t) {
    for (var a = t + "Capture", i = []; e !== null; ) {
      var c = e,
        u = c.stateNode;
      if (
        ((c = c.tag),
        (c !== 5 && c !== 26 && c !== 27) ||
          u === null ||
          ((c = lo(e, a)),
          c != null && i.unshift(Vo(e, c, u)),
          (c = lo(e, t)),
          c != null && i.push(Vo(e, c, u))),
        e.tag === 3)
      )
        return i;
      e = e.return;
    }
    return [];
  }
  function zl(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Kv(e, t, a, i, c) {
    for (var u = t._reactName, g = []; a !== null && a !== i; ) {
      var C = a,
        N = C.alternate,
        Y = C.stateNode;
      if (((C = C.tag), N !== null && N === i)) break;
      (C !== 5 && C !== 26 && C !== 27) ||
        Y === null ||
        ((N = Y),
        c
          ? ((Y = lo(a, u)), Y != null && g.unshift(Vo(a, Y, N)))
          : c || ((Y = lo(a, u)), Y != null && g.push(Vo(a, Y, N)))),
        (a = a.return);
    }
    g.length !== 0 && e.push({ event: t, listeners: g });
  }
  var Xx = /\r\n?/g,
    Yx = /\u0000|\uFFFD/g;
  function Jv(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Xx,
        `
`
      )
      .replace(Yx, "");
  }
  function Wv(e, t) {
    return (t = Jv(t)), Jv(e) === t;
  }
  function js() {}
  function ot(e, t, a, i, c, u) {
    switch (a) {
      case "children":
        typeof i == "string"
          ? t === "body" || (t === "textarea" && i === "") || ol(e, i)
          : (typeof i == "number" || typeof i == "bigint") &&
            t !== "body" &&
            ol(e, "" + i);
        break;
      case "className":
        Mn(e, "class", i);
        break;
      case "tabIndex":
        Mn(e, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Mn(e, a, i);
        break;
      case "style":
        tm(e, i, u);
        break;
      case "data":
        if (t !== "object") {
          Mn(e, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "symbol" ||
          typeof i == "boolean"
        ) {
          e.removeAttribute(a);
          break;
        }
        (i = Hi("" + i)), e.setAttribute(a, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" &&
            (a === "formAction"
              ? (t !== "input" && ot(e, t, "name", c.name, c, null),
                ot(e, t, "formEncType", c.formEncType, c, null),
                ot(e, t, "formMethod", c.formMethod, c, null),
                ot(e, t, "formTarget", c.formTarget, c, null))
              : (ot(e, t, "encType", c.encType, c, null),
                ot(e, t, "method", c.method, c, null),
                ot(e, t, "target", c.target, c, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          e.removeAttribute(a);
          break;
        }
        (i = Hi("" + i)), e.setAttribute(a, i);
        break;
      case "onClick":
        i != null && (e.onclick = js);
        break;
      case "onScroll":
        i != null && qe("scroll", e);
        break;
      case "onScrollEnd":
        i != null && qe("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(l(61));
          if (((a = i.__html), a != null)) {
            if (c.children != null) throw Error(l(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        e.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "boolean" ||
          typeof i == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (a = Hi("" + i)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol"
          ? e.setAttribute(a, "" + i)
          : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol"
          ? e.setAttribute(a, "")
          : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        i === !0
          ? e.setAttribute(a, "")
          : i !== !1 &&
            i != null &&
            typeof i != "function" &&
            typeof i != "symbol"
          ? e.setAttribute(a, i)
          : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        !isNaN(i) &&
        1 <= i
          ? e.setAttribute(a, i)
          : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i)
          ? e.removeAttribute(a)
          : e.setAttribute(a, i);
        break;
      case "popover":
        qe("beforetoggle", e), qe("toggle", e), ia(e, "popover", i);
        break;
      case "xlinkActuate":
        fn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
        break;
      case "xlinkArcrole":
        fn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
        break;
      case "xlinkRole":
        fn(e, "http://www.w3.org/1999/xlink", "xlink:role", i);
        break;
      case "xlinkShow":
        fn(e, "http://www.w3.org/1999/xlink", "xlink:show", i);
        break;
      case "xlinkTitle":
        fn(e, "http://www.w3.org/1999/xlink", "xlink:title", i);
        break;
      case "xlinkType":
        fn(e, "http://www.w3.org/1999/xlink", "xlink:type", i);
        break;
      case "xmlBase":
        fn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
        break;
      case "xmlLang":
        fn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
        break;
      case "xmlSpace":
        fn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
        break;
      case "is":
        ia(e, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = Cb.get(a) || a), ia(e, a, i));
    }
  }
  function Nf(e, t, a, i, c, u) {
    switch (a) {
      case "style":
        tm(e, i, u);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(l(61));
          if (((a = i.__html), a != null)) {
            if (c.children != null) throw Error(l(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof i == "string"
          ? ol(e, i)
          : (typeof i == "number" || typeof i == "bigint") && ol(e, "" + i);
        break;
      case "onScroll":
        i != null && qe("scroll", e);
        break;
      case "onScrollEnd":
        i != null && qe("scrollend", e);
        break;
      case "onClick":
        i != null && (e.onclick = js);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Ve.hasOwnProperty(a))
          e: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((c = a.endsWith("Capture")),
              (t = a.slice(2, c ? a.length - 7 : void 0)),
              (u = e[P] || null),
              (u = u != null ? u[a] : null),
              typeof u == "function" && e.removeEventListener(t, u, c),
              typeof i == "function")
            ) {
              typeof u != "function" &&
                u !== null &&
                (a in e
                  ? (e[a] = null)
                  : e.hasAttribute(a) && e.removeAttribute(a)),
                e.addEventListener(t, i, c);
              break e;
            }
            a in e
              ? (e[a] = i)
              : i === !0
              ? e.setAttribute(a, "")
              : ia(e, a, i);
          }
    }
  }
  function Jt(e, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        qe("error", e), qe("load", e);
        var i = !1,
          c = !1,
          u;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var g = a[u];
            if (g != null)
              switch (u) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  c = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(l(137, t));
                default:
                  ot(e, t, u, g, a, null);
              }
          }
        c && ot(e, t, "srcSet", a.srcSet, a, null),
          i && ot(e, t, "src", a.src, a, null);
        return;
      case "input":
        qe("invalid", e);
        var C = (u = g = c = null),
          N = null,
          Y = null;
        for (i in a)
          if (a.hasOwnProperty(i)) {
            var ne = a[i];
            if (ne != null)
              switch (i) {
                case "name":
                  c = ne;
                  break;
                case "type":
                  g = ne;
                  break;
                case "checked":
                  N = ne;
                  break;
                case "defaultChecked":
                  Y = ne;
                  break;
                case "value":
                  u = ne;
                  break;
                case "defaultValue":
                  C = ne;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (ne != null) throw Error(l(137, t));
                  break;
                default:
                  ot(e, t, i, ne, a, null);
              }
          }
        Kh(e, u, C, N, Y, g, c, !1), zi(e);
        return;
      case "select":
        qe("invalid", e), (i = g = u = null);
        for (c in a)
          if (a.hasOwnProperty(c) && ((C = a[c]), C != null))
            switch (c) {
              case "value":
                u = C;
                break;
              case "defaultValue":
                g = C;
                break;
              case "multiple":
                i = C;
              default:
                ot(e, t, c, C, a, null);
            }
        (t = u),
          (a = g),
          (e.multiple = !!i),
          t != null ? ll(e, !!i, t, !1) : a != null && ll(e, !!i, a, !0);
        return;
      case "textarea":
        qe("invalid", e), (u = c = i = null);
        for (g in a)
          if (a.hasOwnProperty(g) && ((C = a[g]), C != null))
            switch (g) {
              case "value":
                i = C;
                break;
              case "defaultValue":
                c = C;
                break;
              case "children":
                u = C;
                break;
              case "dangerouslySetInnerHTML":
                if (C != null) throw Error(l(91));
                break;
              default:
                ot(e, t, g, C, a, null);
            }
        Wh(e, i, c, u), zi(e);
        return;
      case "option":
        for (N in a)
          if (a.hasOwnProperty(N) && ((i = a[N]), i != null))
            switch (N) {
              case "selected":
                e.selected =
                  i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                ot(e, t, N, i, a, null);
            }
        return;
      case "dialog":
        qe("beforetoggle", e), qe("toggle", e), qe("cancel", e), qe("close", e);
        break;
      case "iframe":
      case "object":
        qe("load", e);
        break;
      case "video":
      case "audio":
        for (i = 0; i < qo.length; i++) qe(qo[i], e);
        break;
      case "image":
        qe("error", e), qe("load", e);
        break;
      case "details":
        qe("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        qe("error", e), qe("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (Y in a)
          if (a.hasOwnProperty(Y) && ((i = a[Y]), i != null))
            switch (Y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(l(137, t));
              default:
                ot(e, t, Y, i, a, null);
            }
        return;
      default:
        if (Yc(t)) {
          for (ne in a)
            a.hasOwnProperty(ne) &&
              ((i = a[ne]), i !== void 0 && Nf(e, t, ne, i, a, void 0));
          return;
        }
    }
    for (C in a)
      a.hasOwnProperty(C) && ((i = a[C]), i != null && ot(e, t, C, i, a, null));
  }
  function Fx(e, t, a, i) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var c = null,
          u = null,
          g = null,
          C = null,
          N = null,
          Y = null,
          ne = null;
        for (Q in a) {
          var re = a[Q];
          if (a.hasOwnProperty(Q) && re != null)
            switch (Q) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                N = re;
              default:
                i.hasOwnProperty(Q) || ot(e, t, Q, null, i, re);
            }
        }
        for (var I in i) {
          var Q = i[I];
          if (((re = a[I]), i.hasOwnProperty(I) && (Q != null || re != null)))
            switch (I) {
              case "type":
                u = Q;
                break;
              case "name":
                c = Q;
                break;
              case "checked":
                Y = Q;
                break;
              case "defaultChecked":
                ne = Q;
                break;
              case "value":
                g = Q;
                break;
              case "defaultValue":
                C = Q;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Q != null) throw Error(l(137, t));
                break;
              default:
                Q !== re && ot(e, t, I, Q, i, re);
            }
        }
        Gc(e, g, C, N, Y, ne, u, c);
        return;
      case "select":
        Q = g = C = I = null;
        for (u in a)
          if (((N = a[u]), a.hasOwnProperty(u) && N != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                Q = N;
              default:
                i.hasOwnProperty(u) || ot(e, t, u, null, i, N);
            }
        for (c in i)
          if (
            ((u = i[c]),
            (N = a[c]),
            i.hasOwnProperty(c) && (u != null || N != null))
          )
            switch (c) {
              case "value":
                I = u;
                break;
              case "defaultValue":
                C = u;
                break;
              case "multiple":
                g = u;
              default:
                u !== N && ot(e, t, c, u, i, N);
            }
        (t = C),
          (a = g),
          (i = Q),
          I != null
            ? ll(e, !!a, I, !1)
            : !!i != !!a &&
              (t != null ? ll(e, !!a, t, !0) : ll(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        Q = I = null;
        for (C in a)
          if (
            ((c = a[C]),
            a.hasOwnProperty(C) && c != null && !i.hasOwnProperty(C))
          )
            switch (C) {
              case "value":
                break;
              case "children":
                break;
              default:
                ot(e, t, C, null, i, c);
            }
        for (g in i)
          if (
            ((c = i[g]),
            (u = a[g]),
            i.hasOwnProperty(g) && (c != null || u != null))
          )
            switch (g) {
              case "value":
                I = c;
                break;
              case "defaultValue":
                Q = c;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(l(91));
                break;
              default:
                c !== u && ot(e, t, g, c, i, u);
            }
        Jh(e, I, Q);
        return;
      case "option":
        for (var Ae in a)
          if (
            ((I = a[Ae]),
            a.hasOwnProperty(Ae) && I != null && !i.hasOwnProperty(Ae))
          )
            switch (Ae) {
              case "selected":
                e.selected = !1;
                break;
              default:
                ot(e, t, Ae, null, i, I);
            }
        for (N in i)
          if (
            ((I = i[N]),
            (Q = a[N]),
            i.hasOwnProperty(N) && I !== Q && (I != null || Q != null))
          )
            switch (N) {
              case "selected":
                e.selected =
                  I && typeof I != "function" && typeof I != "symbol";
                break;
              default:
                ot(e, t, N, I, i, Q);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var _e in a)
          (I = a[_e]),
            a.hasOwnProperty(_e) &&
              I != null &&
              !i.hasOwnProperty(_e) &&
              ot(e, t, _e, null, i, I);
        for (Y in i)
          if (
            ((I = i[Y]),
            (Q = a[Y]),
            i.hasOwnProperty(Y) && I !== Q && (I != null || Q != null))
          )
            switch (Y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (I != null) throw Error(l(137, t));
                break;
              default:
                ot(e, t, Y, I, i, Q);
            }
        return;
      default:
        if (Yc(t)) {
          for (var it in a)
            (I = a[it]),
              a.hasOwnProperty(it) &&
                I !== void 0 &&
                !i.hasOwnProperty(it) &&
                Nf(e, t, it, void 0, i, I);
          for (ne in i)
            (I = i[ne]),
              (Q = a[ne]),
              !i.hasOwnProperty(ne) ||
                I === Q ||
                (I === void 0 && Q === void 0) ||
                Nf(e, t, ne, I, i, Q);
          return;
        }
    }
    for (var V in a)
      (I = a[V]),
        a.hasOwnProperty(V) &&
          I != null &&
          !i.hasOwnProperty(V) &&
          ot(e, t, V, null, i, I);
    for (re in i)
      (I = i[re]),
        (Q = a[re]),
        !i.hasOwnProperty(re) ||
          I === Q ||
          (I == null && Q == null) ||
          ot(e, t, re, I, i, Q);
  }
  var Mf = null,
    Df = null;
  function Rs(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function ep(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function tp(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function zf(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Lf = null;
  function Ix() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === Lf
        ? !1
        : ((Lf = e), !0)
      : ((Lf = null), !1);
  }
  var np = typeof setTimeout == "function" ? setTimeout : void 0,
    Qx = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ap = typeof Promise == "function" ? Promise : void 0,
    Zx =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof ap < "u"
        ? function (e) {
            return ap.resolve(null).then(e).catch(Kx);
          }
        : np;
  function Kx(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ur(e) {
    return e === "head";
  }
  function rp(e, t) {
    var a = t,
      i = 0,
      c = 0;
    do {
      var u = a.nextSibling;
      if ((e.removeChild(a), u && u.nodeType === 8))
        if (((a = u.data), a === "/$")) {
          if (0 < i && 8 > i) {
            a = i;
            var g = e.ownerDocument;
            if ((a & 1 && ko(g.documentElement), a & 2 && ko(g.body), a & 4))
              for (a = g.head, ko(a), g = a.firstChild; g; ) {
                var C = g.nextSibling,
                  N = g.nodeName;
                g[he] ||
                  N === "SCRIPT" ||
                  N === "STYLE" ||
                  (N === "LINK" && g.rel.toLowerCase() === "stylesheet") ||
                  a.removeChild(g),
                  (g = C);
              }
          }
          if (c === 0) {
            e.removeChild(u), Ko(t);
            return;
          }
          c--;
        } else
          a === "$" || a === "$?" || a === "$!"
            ? c++
            : (i = a.charCodeAt(0) - 48);
      else i = 0;
      a = u;
    } while (a);
    Ko(t);
  }
  function Hf(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Hf(a), ye(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function Jx(e, t, a, i) {
    for (; e.nodeType === 1; ) {
      var c = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (i) {
        if (!e[he])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((u = e.getAttribute("rel")),
                u === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== c.rel ||
                e.getAttribute("href") !==
                  (c.href == null || c.href === "" ? null : c.href) ||
                e.getAttribute("crossorigin") !==
                  (c.crossOrigin == null ? null : c.crossOrigin) ||
                e.getAttribute("title") !== (c.title == null ? null : c.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((u = e.getAttribute("src")),
                (u !== (c.src == null ? null : c.src) ||
                  e.getAttribute("type") !== (c.type == null ? null : c.type) ||
                  e.getAttribute("crossorigin") !==
                    (c.crossOrigin == null ? null : c.crossOrigin)) &&
                  u &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && e.getAttribute("name") === u) return e;
      } else return e;
      if (((e = Wn(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Wx(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !a) ||
        ((e = Wn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Bf(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState === "complete")
    );
  }
  function e2(e, t) {
    var a = e.ownerDocument;
    if (e.data !== "$?" || a.readyState === "complete") t();
    else {
      var i = function () {
        t(), a.removeEventListener("DOMContentLoaded", i);
      };
      a.addEventListener("DOMContentLoaded", i), (e._reactRetry = i);
    }
  }
  function Wn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  var Uf = null;
  function lp(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (t === 0) return e;
          t--;
        } else a === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function op(e, t, a) {
    switch (((t = Rs(a)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(l(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(l(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(l(454));
        return e;
      default:
        throw Error(l(451));
    }
  }
  function ko(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    ye(e);
  }
  var Pn = new Map(),
    ip = new Set();
  function As(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
      ? e
      : e.ownerDocument;
  }
  var La = W.d;
  W.d = { f: t2, r: n2, D: a2, C: r2, L: l2, m: o2, X: s2, S: i2, M: c2 };
  function t2() {
    var e = La.f(),
      t = Ss();
    return e || t;
  }
  function n2(e) {
    var t = Se(e);
    t !== null && t.tag === 5 && t.type === "form" ? w0(t) : La.r(e);
  }
  var Ll = typeof document > "u" ? null : document;
  function sp(e, t, a) {
    var i = Ll;
    if (i && typeof t == "string" && t) {
      var c = Dn(t);
      (c = 'link[rel="' + e + '"][href="' + c + '"]'),
        typeof a == "string" && (c += '[crossorigin="' + a + '"]'),
        ip.has(c) ||
          (ip.add(c),
          (e = { rel: e, crossOrigin: a, href: t }),
          i.querySelector(c) === null &&
            ((t = i.createElement("link")),
            Jt(t, "link", e),
            Be(t),
            i.head.appendChild(t)));
    }
  }
  function a2(e) {
    La.D(e), sp("dns-prefetch", e, null);
  }
  function r2(e, t) {
    La.C(e, t), sp("preconnect", e, t);
  }
  function l2(e, t, a) {
    La.L(e, t, a);
    var i = Ll;
    if (i && e && t) {
      var c = 'link[rel="preload"][as="' + Dn(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((c += '[imagesrcset="' + Dn(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (c += '[imagesizes="' + Dn(a.imageSizes) + '"]'))
        : (c += '[href="' + Dn(e) + '"]');
      var u = c;
      switch (t) {
        case "style":
          u = Hl(e);
          break;
        case "script":
          u = Bl(e);
      }
      Pn.has(u) ||
        ((e = p(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : e,
            as: t,
          },
          a
        )),
        Pn.set(u, e),
        i.querySelector(c) !== null ||
          (t === "style" && i.querySelector(Go(u))) ||
          (t === "script" && i.querySelector(Xo(u))) ||
          ((t = i.createElement("link")),
          Jt(t, "link", e),
          Be(t),
          i.head.appendChild(t)));
    }
  }
  function o2(e, t) {
    La.m(e, t);
    var a = Ll;
    if (a && e) {
      var i = t && typeof t.as == "string" ? t.as : "script",
        c =
          'link[rel="modulepreload"][as="' + Dn(i) + '"][href="' + Dn(e) + '"]',
        u = c;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Bl(e);
      }
      if (
        !Pn.has(u) &&
        ((e = p({ rel: "modulepreload", href: e }, t)),
        Pn.set(u, e),
        a.querySelector(c) === null)
      ) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Xo(u))) return;
        }
        (i = a.createElement("link")),
          Jt(i, "link", e),
          Be(i),
          a.head.appendChild(i);
      }
    }
  }
  function i2(e, t, a) {
    La.S(e, t, a);
    var i = Ll;
    if (i && e) {
      var c = Ne(i).hoistableStyles,
        u = Hl(e);
      t = t || "default";
      var g = c.get(u);
      if (!g) {
        var C = { loading: 0, preload: null };
        if ((g = i.querySelector(Go(u)))) C.loading = 5;
        else {
          (e = p({ rel: "stylesheet", href: e, "data-precedence": t }, a)),
            (a = Pn.get(u)) && $f(e, a);
          var N = (g = i.createElement("link"));
          Be(N),
            Jt(N, "link", e),
            (N._p = new Promise(function (Y, ne) {
              (N.onload = Y), (N.onerror = ne);
            })),
            N.addEventListener("load", function () {
              C.loading |= 1;
            }),
            N.addEventListener("error", function () {
              C.loading |= 2;
            }),
            (C.loading |= 4),
            Ns(g, t, i);
        }
        (g = { type: "stylesheet", instance: g, count: 1, state: C }),
          c.set(u, g);
      }
    }
  }
  function s2(e, t) {
    La.X(e, t);
    var a = Ll;
    if (a && e) {
      var i = Ne(a).hoistableScripts,
        c = Bl(e),
        u = i.get(c);
      u ||
        ((u = a.querySelector(Xo(c))),
        u ||
          ((e = p({ src: e, async: !0 }, t)),
          (t = Pn.get(c)) && Pf(e, t),
          (u = a.createElement("script")),
          Be(u),
          Jt(u, "link", e),
          a.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        i.set(c, u));
    }
  }
  function c2(e, t) {
    La.M(e, t);
    var a = Ll;
    if (a && e) {
      var i = Ne(a).hoistableScripts,
        c = Bl(e),
        u = i.get(c);
      u ||
        ((u = a.querySelector(Xo(c))),
        u ||
          ((e = p({ src: e, async: !0, type: "module" }, t)),
          (t = Pn.get(c)) && Pf(e, t),
          (u = a.createElement("script")),
          Be(u),
          Jt(u, "link", e),
          a.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        i.set(c, u));
    }
  }
  function cp(e, t, a, i) {
    var c = (c = me.current) ? As(c) : null;
    if (!c) throw Error(l(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = Hl(a.href)),
            (a = Ne(c).hoistableStyles),
            (i = a.get(t)),
            i ||
              ((i = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, i)),
            i)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          e = Hl(a.href);
          var u = Ne(c).hoistableStyles,
            g = u.get(e);
          if (
            (g ||
              ((c = c.ownerDocument || c),
              (g = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(e, g),
              (u = c.querySelector(Go(e))) &&
                !u._p &&
                ((g.instance = u), (g.state.loading = 5)),
              Pn.has(e) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                Pn.set(e, a),
                u || u2(c, e, a, g.state))),
            t && i === null)
          )
            throw Error(l(528, ""));
          return g;
        }
        if (t && i !== null) throw Error(l(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Bl(a)),
              (a = Ne(c).hoistableScripts),
              (i = a.get(t)),
              i ||
                ((i = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, i)),
              i)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(l(444, e));
    }
  }
  function Hl(e) {
    return 'href="' + Dn(e) + '"';
  }
  function Go(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function up(e) {
    return p({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function u2(e, t, a, i) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (i.loading = 1)
      : ((t = e.createElement("link")),
        (i.preload = t),
        t.addEventListener("load", function () {
          return (i.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (i.loading |= 2);
        }),
        Jt(t, "link", a),
        Be(t),
        e.head.appendChild(t));
  }
  function Bl(e) {
    return '[src="' + Dn(e) + '"]';
  }
  function Xo(e) {
    return "script[async]" + e;
  }
  function fp(e, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var i = e.querySelector('style[data-href~="' + Dn(a.href) + '"]');
          if (i) return (t.instance = i), Be(i), i;
          var c = p({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (i = (e.ownerDocument || e).createElement("style")),
            Be(i),
            Jt(i, "style", c),
            Ns(i, a.precedence, e),
            (t.instance = i)
          );
        case "stylesheet":
          c = Hl(a.href);
          var u = e.querySelector(Go(c));
          if (u) return (t.state.loading |= 4), (t.instance = u), Be(u), u;
          (i = up(a)),
            (c = Pn.get(c)) && $f(i, c),
            (u = (e.ownerDocument || e).createElement("link")),
            Be(u);
          var g = u;
          return (
            (g._p = new Promise(function (C, N) {
              (g.onload = C), (g.onerror = N);
            })),
            Jt(u, "link", i),
            (t.state.loading |= 4),
            Ns(u, a.precedence, e),
            (t.instance = u)
          );
        case "script":
          return (
            (u = Bl(a.src)),
            (c = e.querySelector(Xo(u)))
              ? ((t.instance = c), Be(c), c)
              : ((i = a),
                (c = Pn.get(u)) && ((i = p({}, a)), Pf(i, c)),
                (e = e.ownerDocument || e),
                (c = e.createElement("script")),
                Be(c),
                Jt(c, "link", i),
                e.head.appendChild(c),
                (t.instance = c))
          );
        case "void":
          return null;
        default:
          throw Error(l(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((i = t.instance), (t.state.loading |= 4), Ns(i, a.precedence, e));
    return t.instance;
  }
  function Ns(e, t, a) {
    for (
      var i = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        c = i.length ? i[i.length - 1] : null,
        u = c,
        g = 0;
      g < i.length;
      g++
    ) {
      var C = i[g];
      if (C.dataset.precedence === t) u = C;
      else if (u !== c) break;
    }
    u
      ? u.parentNode.insertBefore(e, u.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(e, t.firstChild));
  }
  function $f(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function Pf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var Ms = null;
  function dp(e, t, a) {
    if (Ms === null) {
      var i = new Map(),
        c = (Ms = new Map());
      c.set(a, i);
    } else (c = Ms), (i = c.get(a)), i || ((i = new Map()), c.set(a, i));
    if (i.has(e)) return i;
    for (
      i.set(e, null), a = a.getElementsByTagName(e), c = 0;
      c < a.length;
      c++
    ) {
      var u = a[c];
      if (
        !(
          u[he] ||
          u[M] ||
          (e === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var g = u.getAttribute(t) || "";
        g = e + g;
        var C = i.get(g);
        C ? C.push(u) : i.set(g, [u]);
      }
    }
    return i;
  }
  function hp(e, t, a) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
  }
  function f2(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled), typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function mp(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Yo = null;
  function d2() {}
  function h2(e, t, a) {
    if (Yo === null) throw Error(l(475));
    var i = Yo;
    if (
      t.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var c = Hl(a.href),
          u = e.querySelector(Go(c));
        if (u) {
          (e = u._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (i.count++, (i = Ds.bind(i)), e.then(i, i)),
            (t.state.loading |= 4),
            (t.instance = u),
            Be(u);
          return;
        }
        (u = e.ownerDocument || e),
          (a = up(a)),
          (c = Pn.get(c)) && $f(a, c),
          (u = u.createElement("link")),
          Be(u);
        var g = u;
        (g._p = new Promise(function (C, N) {
          (g.onload = C), (g.onerror = N);
        })),
          Jt(u, "link", a),
          (t.instance = u);
      }
      i.stylesheets === null && (i.stylesheets = new Map()),
        i.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (i.count++,
          (t = Ds.bind(i)),
          e.addEventListener("load", t),
          e.addEventListener("error", t));
    }
  }
  function m2() {
    if (Yo === null) throw Error(l(475));
    var e = Yo;
    return (
      e.stylesheets && e.count === 0 && qf(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var a = setTimeout(function () {
              if ((e.stylesheets && qf(e, e.stylesheets), e.unsuspend)) {
                var i = e.unsuspend;
                (e.unsuspend = null), i();
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(a);
              }
            );
          }
        : null
    );
  }
  function Ds() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) qf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var zs = null;
  function qf(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (zs = new Map()),
        t.forEach(v2, e),
        (zs = null),
        Ds.call(e));
  }
  function v2(e, t) {
    if (!(t.state.loading & 4)) {
      var a = zs.get(e);
      if (a) var i = a.get(null);
      else {
        (a = new Map()), zs.set(e, a);
        for (
          var c = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            u = 0;
          u < c.length;
          u++
        ) {
          var g = c[u];
          (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") &&
            (a.set(g.dataset.precedence, g), (i = g));
        }
        i && a.set(null, i);
      }
      (c = t.instance),
        (g = c.getAttribute("data-precedence")),
        (u = a.get(g) || i),
        u === i && a.set(null, c),
        a.set(g, c),
        this.count++,
        (i = Ds.bind(this)),
        c.addEventListener("load", i),
        c.addEventListener("error", i),
        u
          ? u.parentNode.insertBefore(c, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(c, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var Fo = {
    $$typeof: D,
    Provider: null,
    Consumer: null,
    _currentValue: J,
    _currentValue2: J,
    _threadCount: 0,
  };
  function p2(e, t, a, i, c, u, g, C) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = ya(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ya(0)),
      (this.hiddenUpdates = ya(null)),
      (this.identifierPrefix = i),
      (this.onUncaughtError = c),
      (this.onCaughtError = u),
      (this.onRecoverableError = g),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = C),
      (this.incompleteTransitions = new Map());
  }
  function vp(e, t, a, i, c, u, g, C, N, Y, ne, re) {
    return (
      (e = new p2(e, t, a, g, C, N, Y, re)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = Sn(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = Su()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: i, isDehydrated: a, cache: t }),
      _u(u),
      e
    );
  }
  function pp(e) {
    return e ? ((e = ml), e) : ml;
  }
  function gp(e, t, a, i, c, u) {
    (c = pp(c)),
      i.context === null ? (i.context = c) : (i.pendingContext = c),
      (i = Ka(t)),
      (i.payload = { element: a }),
      (u = u === void 0 ? null : u),
      u !== null && (i.callback = u),
      (a = Ja(e, i, t)),
      a !== null && (On(a, e, t), Eo(a, e, t));
  }
  function yp(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Vf(e, t) {
    yp(e, t), (e = e.alternate) && yp(e, t);
  }
  function bp(e) {
    if (e.tag === 13) {
      var t = hl(e, 67108864);
      t !== null && On(t, e, 67108864), Vf(e, 67108864);
    }
  }
  var Ls = !0;
  function g2(e, t, a, i) {
    var c = z.T;
    z.T = null;
    var u = W.p;
    try {
      (W.p = 2), kf(e, t, a, i);
    } finally {
      (W.p = u), (z.T = c);
    }
  }
  function y2(e, t, a, i) {
    var c = z.T;
    z.T = null;
    var u = W.p;
    try {
      (W.p = 8), kf(e, t, a, i);
    } finally {
      (W.p = u), (z.T = c);
    }
  }
  function kf(e, t, a, i) {
    if (Ls) {
      var c = Gf(i);
      if (c === null) Af(e, t, i, Hs, a), Sp(e, i);
      else if (x2(c, e, t, a, i)) i.stopPropagation();
      else if ((Sp(e, i), t & 4 && -1 < b2.indexOf(e))) {
        for (; c !== null; ) {
          var u = Se(c);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var g = Wt(u.pendingLanes);
                  if (g !== 0) {
                    var C = u;
                    for (C.pendingLanes |= 2, C.entangledLanes |= 2; g; ) {
                      var N = 1 << (31 - rt(g));
                      (C.entanglements[1] |= N), (g &= ~N);
                    }
                    ha(u), (tt & 6) === 0 && ((bs = dt() + 500), Po(0));
                  }
                }
                break;
              case 13:
                (C = hl(u, 2)), C !== null && On(C, u, 2), Ss(), Vf(u, 2);
            }
          if (((u = Gf(i)), u === null && Af(e, t, i, Hs, a), u === c)) break;
          c = u;
        }
        c !== null && i.stopPropagation();
      } else Af(e, t, i, null, a);
    }
  }
  function Gf(e) {
    return (e = Ic(e)), Xf(e);
  }
  var Hs = null;
  function Xf(e) {
    if (((Hs = null), (e = ge(e)), e !== null)) {
      var t = f(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((e = d(t)), e !== null)) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (Hs = e), null;
  }
  function xp(e) {
    switch (e) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (nn()) {
          case It:
            return 2;
          case qt:
            return 8;
          case Ke:
          case ht:
            return 32;
          case Tt:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Yf = !1,
    fr = null,
    dr = null,
    hr = null,
    Io = new Map(),
    Qo = new Map(),
    mr = [],
    b2 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Sp(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        fr = null;
        break;
      case "dragenter":
      case "dragleave":
        dr = null;
        break;
      case "mouseover":
      case "mouseout":
        hr = null;
        break;
      case "pointerover":
      case "pointerout":
        Io.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Qo.delete(t.pointerId);
    }
  }
  function Zo(e, t, a, i, c, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: i,
          nativeEvent: u,
          targetContainers: [c],
        }),
        t !== null && ((t = Se(t)), t !== null && bp(t)),
        e)
      : ((e.eventSystemFlags |= i),
        (t = e.targetContainers),
        c !== null && t.indexOf(c) === -1 && t.push(c),
        e);
  }
  function x2(e, t, a, i, c) {
    switch (t) {
      case "focusin":
        return (fr = Zo(fr, e, t, a, i, c)), !0;
      case "dragenter":
        return (dr = Zo(dr, e, t, a, i, c)), !0;
      case "mouseover":
        return (hr = Zo(hr, e, t, a, i, c)), !0;
      case "pointerover":
        var u = c.pointerId;
        return Io.set(u, Zo(Io.get(u) || null, e, t, a, i, c)), !0;
      case "gotpointercapture":
        return (
          (u = c.pointerId), Qo.set(u, Zo(Qo.get(u) || null, e, t, a, i, c)), !0
        );
    }
    return !1;
  }
  function Cp(e) {
    var t = ge(e.target);
    if (t !== null) {
      var a = f(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = d(a)), t !== null)) {
            (e.blockedOn = t),
              oa(e.priority, function () {
                if (a.tag === 13) {
                  var i = _n();
                  i = Qn(i);
                  var c = hl(a, i);
                  c !== null && On(c, a, i), Vf(a, i);
                }
              });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Bs(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Gf(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var i = new a.constructor(a.type, a);
        (Fc = i), a.target.dispatchEvent(i), (Fc = null);
      } else return (t = Se(a)), t !== null && bp(t), (e.blockedOn = a), !1;
      t.shift();
    }
    return !0;
  }
  function Ep(e, t, a) {
    Bs(e) && a.delete(t);
  }
  function S2() {
    (Yf = !1),
      fr !== null && Bs(fr) && (fr = null),
      dr !== null && Bs(dr) && (dr = null),
      hr !== null && Bs(hr) && (hr = null),
      Io.forEach(Ep),
      Qo.forEach(Ep);
  }
  function Us(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Yf ||
        ((Yf = !0),
        n.unstable_scheduleCallback(n.unstable_NormalPriority, S2)));
  }
  var $s = null;
  function Tp(e) {
    $s !== e &&
      (($s = e),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        $s === e && ($s = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t],
            i = e[t + 1],
            c = e[t + 2];
          if (typeof i != "function") {
            if (Xf(i || a) === null) continue;
            break;
          }
          var u = Se(a);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Gu(u, { pending: !0, data: c, method: a.method, action: i }, i, c));
        }
      }));
  }
  function Ko(e) {
    function t(N) {
      return Us(N, e);
    }
    fr !== null && Us(fr, e),
      dr !== null && Us(dr, e),
      hr !== null && Us(hr, e),
      Io.forEach(t),
      Qo.forEach(t);
    for (var a = 0; a < mr.length; a++) {
      var i = mr[a];
      i.blockedOn === e && (i.blockedOn = null);
    }
    for (; 0 < mr.length && ((a = mr[0]), a.blockedOn === null); )
      Cp(a), a.blockedOn === null && mr.shift();
    if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
      for (i = 0; i < a.length; i += 3) {
        var c = a[i],
          u = a[i + 1],
          g = c[P] || null;
        if (typeof u == "function") g || Tp(a);
        else if (g) {
          var C = null;
          if (u && u.hasAttribute("formAction")) {
            if (((c = u), (g = u[P] || null))) C = g.formAction;
            else if (Xf(c) !== null) continue;
          } else C = g.action;
          typeof C == "function" ? (a[i + 1] = C) : (a.splice(i, 3), (i -= 3)),
            Tp(a);
        }
      }
  }
  function Ff(e) {
    this._internalRoot = e;
  }
  (Ps.prototype.render = Ff.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(l(409));
      var a = t.current,
        i = _n();
      gp(a, i, e, t, null, null);
    }),
    (Ps.prototype.unmount = Ff.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          gp(e.current, 2, null, e, null, null), Ss(), (t[G] = null);
        }
      });
  function Ps(e) {
    this._internalRoot = e;
  }
  Ps.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Zn();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < mr.length && t !== 0 && t < mr[a].priority; a++);
      mr.splice(a, 0, e), a === 0 && Cp(e);
    }
  };
  var _p = r.version;
  if (_p !== "19.1.0") throw Error(l(527, _p, "19.1.0"));
  W.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(l(188))
        : ((e = Object.keys(e).join(",")), Error(l(268, e)));
    return (
      (e = h(t)),
      (e = e !== null ? m(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var C2 = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var qs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!qs.isDisabled && qs.supportsFiber)
      try {
        (an = qs.inject(C2)), (jt = qs);
      } catch {}
  }
  return (
    (Wo.createRoot = function (e, t) {
      if (!s(e)) throw Error(l(299));
      var a = !1,
        i = "",
        c = q0,
        u = V0,
        g = k0,
        C = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (c = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (g = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (C = t.unstable_transitionCallbacks)),
        (t = vp(e, 1, !1, null, null, a, i, c, u, g, C, null)),
        (e[G] = t.current),
        Rf(e),
        new Ff(t)
      );
    }),
    (Wo.hydrateRoot = function (e, t, a) {
      if (!s(e)) throw Error(l(299));
      var i = !1,
        c = "",
        u = q0,
        g = V0,
        C = k0,
        N = null,
        Y = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (i = !0),
          a.identifierPrefix !== void 0 && (c = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (u = a.onUncaughtError),
          a.onCaughtError !== void 0 && (g = a.onCaughtError),
          a.onRecoverableError !== void 0 && (C = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (N = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (Y = a.formState)),
        (t = vp(e, 1, !0, t, a ?? null, i, c, u, g, C, N, Y)),
        (t.context = pp(null)),
        (a = t.current),
        (i = _n()),
        (i = Qn(i)),
        (c = Ka(i)),
        (c.callback = null),
        Ja(a, c, i),
        (a = i),
        (t.current.lanes = a),
        In(t, a),
        ha(t),
        (e[G] = t.current),
        Rf(e),
        new Ps(t)
      );
    }),
    (Wo.version = "19.1.0"),
    Wo
  );
}
var Lp;
function N2() {
  if (Lp) return Zf.exports;
  Lp = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), (Zf.exports = A2()), Zf.exports;
}
var M2 = N2();
function gy(n) {
  var r,
    o,
    l = "";
  if (typeof n == "string" || typeof n == "number") l += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var s = n.length;
      for (r = 0; r < s; r++)
        n[r] && (o = gy(n[r])) && (l && (l += " "), (l += o));
    } else for (o in n) n[o] && (l && (l += " "), (l += o));
  return l;
}
function Ir() {
  for (var n, r, o = 0, l = "", s = arguments.length; o < s; o++)
    (n = arguments[o]) && (r = gy(n)) && (l && (l += " "), (l += r));
  return l;
}
function D2(n) {
  if (typeof document > "u") return;
  let r = document.head || document.getElementsByTagName("head")[0],
    o = document.createElement("style");
  (o.type = "text/css"),
    r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o),
    o.styleSheet
      ? (o.styleSheet.cssText = n)
      : o.appendChild(document.createTextNode(n));
}
D2(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);
var Ti = (n) => typeof n == "number" && !isNaN(n),
  Jr = (n) => typeof n == "string",
  Ba = (n) => typeof n == "function",
  z2 = (n) => Jr(n) || Ti(n),
  Rd = (n) => (Jr(n) || Ba(n) ? n : null),
  L2 = (n, r) => (n === !1 || (Ti(n) && n > 0) ? n : r),
  Ad = (n) => x.isValidElement(n) || Jr(n) || Ba(n) || Ti(n);
function H2(n, r, o = 300) {
  let { scrollHeight: l, style: s } = n;
  requestAnimationFrame(() => {
    (s.minHeight = "initial"),
      (s.height = l + "px"),
      (s.transition = `all ${o}ms`),
      requestAnimationFrame(() => {
        (s.height = "0"), (s.padding = "0"), (s.margin = "0"), setTimeout(r, o);
      });
  });
}
function B2({
  enter: n,
  exit: r,
  appendPosition: o = !1,
  collapse: l = !0,
  collapseDuration: s = 300,
}) {
  return function ({
    children: f,
    position: d,
    preventExitTransition: v,
    done: h,
    nodeRef: m,
    isIn: p,
    playToast: y,
  }) {
    let b = o ? `${n}--${d}` : n,
      T = o ? `${r}--${d}` : r,
      w = x.useRef(0);
    return (
      x.useLayoutEffect(() => {
        let O = m.current,
          E = b.split(" "),
          H = (j) => {
            j.target === m.current &&
              (y(),
              O.removeEventListener("animationend", H),
              O.removeEventListener("animationcancel", H),
              w.current === 0 &&
                j.type !== "animationcancel" &&
                O.classList.remove(...E));
          };
        O.classList.add(...E),
          O.addEventListener("animationend", H),
          O.addEventListener("animationcancel", H);
      }, []),
      x.useEffect(() => {
        let O = m.current,
          E = () => {
            O.removeEventListener("animationend", E), l ? H2(O, h, s) : h();
          };
        p ||
          (v
            ? E()
            : ((w.current = 1),
              (O.className += ` ${T}`),
              O.addEventListener("animationend", E)));
      }, [p]),
      fe.createElement(fe.Fragment, null, f)
    );
  };
}
function Hp(n, r) {
  return {
    content: yy(n.content, n.props),
    containerId: n.props.containerId,
    id: n.props.toastId,
    theme: n.props.theme,
    type: n.props.type,
    data: n.props.data || {},
    isLoading: n.props.isLoading,
    icon: n.props.icon,
    reason: n.removalReason,
    status: r,
  };
}
function yy(n, r, o = !1) {
  return x.isValidElement(n) && !Jr(n.type)
    ? x.cloneElement(n, {
        closeToast: r.closeToast,
        toastProps: r,
        data: r.data,
        isPaused: o,
      })
    : Ba(n)
    ? n({ closeToast: r.closeToast, toastProps: r, data: r.data, isPaused: o })
    : n;
}
function U2({ closeToast: n, theme: r, ariaLabel: o = "close" }) {
  return fe.createElement(
    "button",
    {
      className: `Toastify__close-button Toastify__close-button--${r}`,
      type: "button",
      onClick: (l) => {
        l.stopPropagation(), n(!0);
      },
      "aria-label": o,
    },
    fe.createElement(
      "svg",
      { "aria-hidden": "true", viewBox: "0 0 14 16" },
      fe.createElement("path", {
        fillRule: "evenodd",
        d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
      })
    )
  );
}
function $2({
  delay: n,
  isRunning: r,
  closeToast: o,
  type: l = "default",
  hide: s,
  className: f,
  controlledProgress: d,
  progress: v,
  rtl: h,
  isIn: m,
  theme: p,
}) {
  let y = s || (d && v === 0),
    b = {
      animationDuration: `${n}ms`,
      animationPlayState: r ? "running" : "paused",
    };
  d && (b.transform = `scaleX(${v})`);
  let T = Ir(
      "Toastify__progress-bar",
      d
        ? "Toastify__progress-bar--controlled"
        : "Toastify__progress-bar--animated",
      `Toastify__progress-bar-theme--${p}`,
      `Toastify__progress-bar--${l}`,
      { "Toastify__progress-bar--rtl": h }
    ),
    w = Ba(f) ? f({ rtl: h, type: l, defaultClassName: T }) : Ir(T, f),
    O = {
      [d && v >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
        d && v < 1
          ? null
          : () => {
              m && o();
            },
    };
  return fe.createElement(
    "div",
    { className: "Toastify__progress-bar--wrp", "data-hidden": y },
    fe.createElement("div", {
      className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${p} Toastify__progress-bar--${l}`,
    }),
    fe.createElement("div", {
      role: "progressbar",
      "aria-hidden": y ? "true" : "false",
      "aria-label": "notification timer",
      className: w,
      style: b,
      ...O,
    })
  );
}
var P2 = 1,
  by = () => `${P2++}`;
function q2(n, r, o) {
  let l = 1,
    s = 0,
    f = [],
    d = [],
    v = r,
    h = new Map(),
    m = new Set(),
    p = (j) => (m.add(j), () => m.delete(j)),
    y = () => {
      (d = Array.from(h.values())), m.forEach((j) => j());
    },
    b = ({ containerId: j, toastId: D, updateId: U }) => {
      let R = j ? j !== n : n !== 1,
        F = h.has(D) && U == null;
      return R || F;
    },
    T = (j, D) => {
      h.forEach((U) => {
        var R;
        (D == null || D === U.props.toastId) &&
          ((R = U.toggle) == null || R.call(U, j));
      });
    },
    w = (j) => {
      var D, U;
      (U = (D = j.props) == null ? void 0 : D.onClose) == null ||
        U.call(D, j.removalReason),
        (j.isActive = !1);
    },
    O = (j) => {
      if (j == null) h.forEach(w);
      else {
        let D = h.get(j);
        D && w(D);
      }
      y();
    },
    E = () => {
      (s -= f.length), (f = []);
    },
    H = (j) => {
      var D, U;
      let { toastId: R, updateId: F } = j.props,
        _ = F == null;
      j.staleId && h.delete(j.staleId),
        (j.isActive = !0),
        h.set(R, j),
        y(),
        o(Hp(j, _ ? "added" : "updated")),
        _ && ((U = (D = j.props).onOpen) == null || U.call(D));
    };
  return {
    id: n,
    props: v,
    observe: p,
    toggle: T,
    removeToast: O,
    toasts: h,
    clearQueue: E,
    buildToast: (j, D) => {
      if (b(D)) return;
      let { toastId: U, updateId: R, data: F, staleId: _, delay: q } = D,
        K = R == null;
      K && s++;
      let B = {
        ...v,
        style: v.toastStyle,
        key: l++,
        ...Object.fromEntries(
          Object.entries(D).filter(([k, ee]) => ee != null)
        ),
        toastId: U,
        updateId: R,
        data: F,
        isIn: !1,
        className: Rd(D.className || v.toastClassName),
        progressClassName: Rd(D.progressClassName || v.progressClassName),
        autoClose: D.isLoading ? !1 : L2(D.autoClose, v.autoClose),
        closeToast(k) {
          (h.get(U).removalReason = k), O(U);
        },
        deleteToast() {
          let k = h.get(U);
          if (k != null) {
            if (
              (o(Hp(k, "removed")),
              h.delete(U),
              s--,
              s < 0 && (s = 0),
              f.length > 0)
            ) {
              H(f.shift());
              return;
            }
            y();
          }
        },
      };
      (B.closeButton = v.closeButton),
        D.closeButton === !1 || Ad(D.closeButton)
          ? (B.closeButton = D.closeButton)
          : D.closeButton === !0 &&
            (B.closeButton = Ad(v.closeButton) ? v.closeButton : !0);
      let $ = { content: j, props: B, staleId: _ };
      v.limit && v.limit > 0 && s > v.limit && K
        ? f.push($)
        : Ti(q)
        ? setTimeout(() => {
            H($);
          }, q)
        : H($);
    },
    setProps(j) {
      v = j;
    },
    setToggle: (j, D) => {
      let U = h.get(j);
      U && (U.toggle = D);
    },
    isToastActive: (j) => {
      var D;
      return (D = h.get(j)) == null ? void 0 : D.isActive;
    },
    getSnapshot: () => d,
  };
}
var on = new Map(),
  di = [],
  Nd = new Set(),
  V2 = (n) => Nd.forEach((r) => r(n)),
  xy = () => on.size > 0;
function k2() {
  di.forEach((n) => Cy(n.content, n.options)), (di = []);
}
var G2 = (n, { containerId: r }) => {
  var o;
  return (o = on.get(r || 1)) == null ? void 0 : o.toasts.get(n);
};
function Sy(n, r) {
  var o;
  if (r) return !!((o = on.get(r)) != null && o.isToastActive(n));
  let l = !1;
  return (
    on.forEach((s) => {
      s.isToastActive(n) && (l = !0);
    }),
    l
  );
}
function X2(n) {
  if (!xy()) {
    di = di.filter((r) => n != null && r.options.toastId !== n);
    return;
  }
  if (n == null || z2(n))
    on.forEach((r) => {
      r.removeToast(n);
    });
  else if (n && ("containerId" in n || "id" in n)) {
    let r = on.get(n.containerId);
    r
      ? r.removeToast(n.id)
      : on.forEach((o) => {
          o.removeToast(n.id);
        });
  }
}
var Y2 = (n = {}) => {
  on.forEach((r) => {
    r.props.limit &&
      (!n.containerId || r.id === n.containerId) &&
      r.clearQueue();
  });
};
function Cy(n, r) {
  Ad(n) &&
    (xy() || di.push({ content: n, options: r }),
    on.forEach((o) => {
      o.buildToast(n, r);
    }));
}
function F2(n) {
  var r;
  (r = on.get(n.containerId || 1)) == null || r.setToggle(n.id, n.fn);
}
function Ey(n, r) {
  on.forEach((o) => {
    (r == null ||
      !(r != null && r.containerId) ||
      (r == null ? void 0 : r.containerId) === o.id) &&
      o.toggle(n, r == null ? void 0 : r.id);
  });
}
function I2(n) {
  let r = n.containerId || 1;
  return {
    subscribe(o) {
      let l = q2(r, n, V2);
      on.set(r, l);
      let s = l.observe(o);
      return (
        k2(),
        () => {
          s(), on.delete(r);
        }
      );
    },
    setProps(o) {
      var l;
      (l = on.get(r)) == null || l.setProps(o);
    },
    getSnapshot() {
      var o;
      return (o = on.get(r)) == null ? void 0 : o.getSnapshot();
    },
  };
}
function Q2(n) {
  return (
    Nd.add(n),
    () => {
      Nd.delete(n);
    }
  );
}
function Z2(n) {
  return n && (Jr(n.toastId) || Ti(n.toastId)) ? n.toastId : by();
}
function _i(n, r) {
  return Cy(n, r), r.toastId;
}
function Cc(n, r) {
  return { ...r, type: (r && r.type) || n, toastId: Z2(r) };
}
function Ec(n) {
  return (r, o) => _i(r, Cc(n, o));
}
function Oe(n, r) {
  return _i(n, Cc("default", r));
}
Oe.loading = (n, r) =>
  _i(
    n,
    Cc("default", {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...r,
    })
  );
function K2(n, { pending: r, error: o, success: l }, s) {
  let f;
  r && (f = Jr(r) ? Oe.loading(r, s) : Oe.loading(r.render, { ...s, ...r }));
  let d = {
      isLoading: null,
      autoClose: null,
      closeOnClick: null,
      closeButton: null,
      draggable: null,
    },
    v = (m, p, y) => {
      if (p == null) {
        Oe.dismiss(f);
        return;
      }
      let b = { type: m, ...d, ...s, data: y },
        T = Jr(p) ? { render: p } : p;
      return f ? Oe.update(f, { ...b, ...T }) : Oe(T.render, { ...b, ...T }), y;
    },
    h = Ba(n) ? n() : n;
  return h.then((m) => v("success", l, m)).catch((m) => v("error", o, m)), h;
}
Oe.promise = K2;
Oe.success = Ec("success");
Oe.info = Ec("info");
Oe.error = Ec("error");
Oe.warning = Ec("warning");
Oe.warn = Oe.warning;
Oe.dark = (n, r) => _i(n, Cc("default", { theme: "dark", ...r }));
function J2(n) {
  X2(n);
}
Oe.dismiss = J2;
Oe.clearWaitingQueue = Y2;
Oe.isActive = Sy;
Oe.update = (n, r = {}) => {
  let o = G2(n, r);
  if (o) {
    let { props: l, content: s } = o,
      f = { delay: 100, ...l, ...r, toastId: r.toastId || n, updateId: by() };
    f.toastId !== n && (f.staleId = n);
    let d = f.render || s;
    delete f.render, _i(d, f);
  }
};
Oe.done = (n) => {
  Oe.update(n, { progress: 1 });
};
Oe.onChange = Q2;
Oe.play = (n) => Ey(!0, n);
Oe.pause = (n) => Ey(!1, n);
function W2(n) {
  var r;
  let { subscribe: o, getSnapshot: l, setProps: s } = x.useRef(I2(n)).current;
  s(n);
  let f = (r = x.useSyncExternalStore(o, l, l)) == null ? void 0 : r.slice();
  function d(v) {
    if (!f) return [];
    let h = new Map();
    return (
      n.newestOnTop && f.reverse(),
      f.forEach((m) => {
        let { position: p } = m.props;
        h.has(p) || h.set(p, []), h.get(p).push(m);
      }),
      Array.from(h, (m) => v(m[0], m[1]))
    );
  }
  return {
    getToastToRender: d,
    isToastActive: Sy,
    count: f == null ? void 0 : f.length,
  };
}
function eS(n) {
  let [r, o] = x.useState(!1),
    [l, s] = x.useState(!1),
    f = x.useRef(null),
    d = x.useRef({
      start: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      didMove: !1,
    }).current,
    {
      autoClose: v,
      pauseOnHover: h,
      closeToast: m,
      onClick: p,
      closeOnClick: y,
    } = n;
  F2({ id: n.toastId, containerId: n.containerId, fn: o }),
    x.useEffect(() => {
      if (n.pauseOnFocusLoss)
        return (
          b(),
          () => {
            T();
          }
        );
    }, [n.pauseOnFocusLoss]);
  function b() {
    document.hasFocus() || H(),
      window.addEventListener("focus", E),
      window.addEventListener("blur", H);
  }
  function T() {
    window.removeEventListener("focus", E),
      window.removeEventListener("blur", H);
  }
  function w(_) {
    if (n.draggable === !0 || n.draggable === _.pointerType) {
      j();
      let q = f.current;
      (d.canCloseOnClick = !0),
        (d.canDrag = !0),
        (q.style.transition = "none"),
        n.draggableDirection === "x"
          ? ((d.start = _.clientX),
            (d.removalDistance = q.offsetWidth * (n.draggablePercent / 100)))
          : ((d.start = _.clientY),
            (d.removalDistance =
              (q.offsetHeight *
                (n.draggablePercent === 80
                  ? n.draggablePercent * 1.5
                  : n.draggablePercent)) /
              100));
    }
  }
  function O(_) {
    let {
      top: q,
      bottom: K,
      left: B,
      right: $,
    } = f.current.getBoundingClientRect();
    _.nativeEvent.type !== "touchend" &&
    n.pauseOnHover &&
    _.clientX >= B &&
    _.clientX <= $ &&
    _.clientY >= q &&
    _.clientY <= K
      ? H()
      : E();
  }
  function E() {
    o(!0);
  }
  function H() {
    o(!1);
  }
  function j() {
    (d.didMove = !1),
      document.addEventListener("pointermove", U),
      document.addEventListener("pointerup", R);
  }
  function D() {
    document.removeEventListener("pointermove", U),
      document.removeEventListener("pointerup", R);
  }
  function U(_) {
    let q = f.current;
    if (d.canDrag && q) {
      (d.didMove = !0),
        r && H(),
        n.draggableDirection === "x"
          ? (d.delta = _.clientX - d.start)
          : (d.delta = _.clientY - d.start),
        d.start !== _.clientX && (d.canCloseOnClick = !1);
      let K =
        n.draggableDirection === "x"
          ? `${d.delta}px, var(--y)`
          : `0, calc(${d.delta}px + var(--y))`;
      (q.style.transform = `translate3d(${K},0)`),
        (q.style.opacity = `${1 - Math.abs(d.delta / d.removalDistance)}`);
    }
  }
  function R() {
    D();
    let _ = f.current;
    if (d.canDrag && d.didMove && _) {
      if (((d.canDrag = !1), Math.abs(d.delta) > d.removalDistance)) {
        s(!0), n.closeToast(!0), n.collapseAll();
        return;
      }
      (_.style.transition = "transform 0.2s, opacity 0.2s"),
        _.style.removeProperty("transform"),
        _.style.removeProperty("opacity");
    }
  }
  let F = { onPointerDown: w, onPointerUp: O };
  return (
    v && h && ((F.onMouseEnter = H), n.stacked || (F.onMouseLeave = E)),
    y &&
      (F.onClick = (_) => {
        p && p(_), d.canCloseOnClick && m(!0);
      }),
    {
      playToast: E,
      pauseToast: H,
      isRunning: r,
      preventExitTransition: l,
      toastRef: f,
      eventHandlers: F,
    }
  );
}
var tS = typeof window < "u" ? x.useLayoutEffect : x.useEffect,
  Tc = ({ theme: n, type: r, isLoading: o, ...l }) =>
    fe.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "100%",
      height: "100%",
      fill:
        n === "colored" ? "currentColor" : `var(--toastify-icon-color-${r})`,
      ...l,
    });
function nS(n) {
  return fe.createElement(
    Tc,
    { ...n },
    fe.createElement("path", {
      d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
    })
  );
}
function aS(n) {
  return fe.createElement(
    Tc,
    { ...n },
    fe.createElement("path", {
      d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
    })
  );
}
function rS(n) {
  return fe.createElement(
    Tc,
    { ...n },
    fe.createElement("path", {
      d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
    })
  );
}
function lS(n) {
  return fe.createElement(
    Tc,
    { ...n },
    fe.createElement("path", {
      d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
    })
  );
}
function oS() {
  return fe.createElement("div", { className: "Toastify__spinner" });
}
var Md = { info: aS, warning: nS, success: rS, error: lS, spinner: oS },
  iS = (n) => n in Md;
function sS({ theme: n, type: r, isLoading: o, icon: l }) {
  let s = null,
    f = { theme: n, type: r };
  return (
    l === !1 ||
      (Ba(l)
        ? (s = l({ ...f, isLoading: o }))
        : x.isValidElement(l)
        ? (s = x.cloneElement(l, f))
        : o
        ? (s = Md.spinner())
        : iS(r) && (s = Md[r](f))),
    s
  );
}
var cS = (n) => {
    let {
        isRunning: r,
        preventExitTransition: o,
        toastRef: l,
        eventHandlers: s,
        playToast: f,
      } = eS(n),
      {
        closeButton: d,
        children: v,
        autoClose: h,
        onClick: m,
        type: p,
        hideProgressBar: y,
        closeToast: b,
        transition: T,
        position: w,
        className: O,
        style: E,
        progressClassName: H,
        updateId: j,
        role: D,
        progress: U,
        rtl: R,
        toastId: F,
        deleteToast: _,
        isIn: q,
        isLoading: K,
        closeOnClick: B,
        theme: $,
        ariaLabel: k,
      } = n,
      ee = Ir(
        "Toastify__toast",
        `Toastify__toast-theme--${$}`,
        `Toastify__toast--${p}`,
        { "Toastify__toast--rtl": R },
        { "Toastify__toast--close-on-click": B }
      ),
      te = Ba(O)
        ? O({ rtl: R, position: w, type: p, defaultClassName: ee })
        : Ir(ee, O),
      se = sS(n),
      z = !!U || !h,
      W = { closeToast: b, type: p, theme: $ },
      J = null;
    return (
      d === !1 ||
        (Ba(d)
          ? (J = d(W))
          : x.isValidElement(d)
          ? (J = x.cloneElement(d, W))
          : (J = U2(W))),
      fe.createElement(
        T,
        {
          isIn: q,
          done: _,
          position: w,
          preventExitTransition: o,
          nodeRef: l,
          playToast: f,
        },
        fe.createElement(
          "div",
          {
            id: F,
            tabIndex: 0,
            onClick: m,
            "data-in": q,
            className: te,
            ...s,
            style: E,
            ref: l,
            ...(q && { role: D, "aria-label": k }),
          },
          se != null &&
            fe.createElement(
              "div",
              {
                className: Ir("Toastify__toast-icon", {
                  "Toastify--animate-icon Toastify__zoom-enter": !K,
                }),
              },
              se
            ),
          yy(v, n, !r),
          J,
          !n.customProgressBar &&
            fe.createElement($2, {
              ...(j && !z ? { key: `p-${j}` } : {}),
              rtl: R,
              theme: $,
              delay: h,
              isRunning: r,
              isIn: q,
              closeToast: b,
              hide: y,
              type: p,
              className: H,
              controlledProgress: z,
              progress: U || 0,
            })
        )
      )
    );
  },
  uS = (n, r = !1) => ({
    enter: `Toastify--animate Toastify__${n}-enter`,
    exit: `Toastify--animate Toastify__${n}-exit`,
    appendPosition: r,
  }),
  fS = B2(uS("bounce", !0)),
  dS = {
    position: "top-right",
    transition: fS,
    autoClose: 5e3,
    closeButton: !0,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    draggable: "touch",
    draggablePercent: 80,
    draggableDirection: "x",
    role: "alert",
    theme: "light",
    "aria-label": "Notifications Alt+T",
    hotKeys: (n) => n.altKey && n.code === "KeyT",
  };
function Th(n) {
  let r = { ...dS, ...n },
    o = n.stacked,
    [l, s] = x.useState(!0),
    f = x.useRef(null),
    { getToastToRender: d, isToastActive: v, count: h } = W2(r),
    { className: m, style: p, rtl: y, containerId: b, hotKeys: T } = r;
  function w(E) {
    let H = Ir("Toastify__toast-container", `Toastify__toast-container--${E}`, {
      "Toastify__toast-container--rtl": y,
    });
    return Ba(m)
      ? m({ position: E, rtl: y, defaultClassName: H })
      : Ir(H, Rd(m));
  }
  function O() {
    o && (s(!0), Oe.play());
  }
  return (
    tS(() => {
      var E;
      if (o) {
        let H = f.current.querySelectorAll('[data-in="true"]'),
          j = 12,
          D = (E = r.position) == null ? void 0 : E.includes("top"),
          U = 0,
          R = 0;
        Array.from(H)
          .reverse()
          .forEach((F, _) => {
            let q = F;
            q.classList.add("Toastify__toast--stacked"),
              _ > 0 && (q.dataset.collapsed = `${l}`),
              q.dataset.pos || (q.dataset.pos = D ? "top" : "bot");
            let K = U * (l ? 0.2 : 1) + (l ? 0 : j * _);
            q.style.setProperty("--y", `${D ? K : K * -1}px`),
              q.style.setProperty("--g", `${j}`),
              q.style.setProperty("--s", `${1 - (l ? R : 0)}`),
              (U += q.offsetHeight),
              (R += 0.025);
          });
      }
    }, [l, h, o]),
    x.useEffect(() => {
      function E(H) {
        var j;
        let D = f.current;
        T(H) &&
          ((j = D.querySelector('[tabIndex="0"]')) == null || j.focus(),
          s(!1),
          Oe.pause()),
          H.key === "Escape" &&
            (document.activeElement === D ||
              (D != null && D.contains(document.activeElement))) &&
            (s(!0), Oe.play());
      }
      return (
        document.addEventListener("keydown", E),
        () => {
          document.removeEventListener("keydown", E);
        }
      );
    }, [T]),
    fe.createElement(
      "section",
      {
        ref: f,
        className: "Toastify",
        id: b,
        onMouseEnter: () => {
          o && (s(!1), Oe.pause());
        },
        onMouseLeave: O,
        "aria-live": "polite",
        "aria-atomic": "false",
        "aria-relevant": "additions text",
        "aria-label": r["aria-label"],
      },
      d((E, H) => {
        let j = H.length ? { ...p } : { ...p, pointerEvents: "none" };
        return fe.createElement(
          "div",
          {
            tabIndex: -1,
            className: w(E),
            "data-stacked": o,
            style: j,
            key: `c-${E}`,
          },
          H.map(({ content: D, props: U }) =>
            fe.createElement(
              cS,
              {
                ...U,
                stacked: o,
                collapseAll: O,
                isIn: v(U.toastId, U.containerId),
                key: `t-${U.key}`,
              },
              D
            )
          )
        );
      })
    )
  );
}
var _h = py();
const Dd = Ei(_h),
  Ty = vy({ __proto__: null, default: Dd }, [_h]);
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function bt() {
  return (
    (bt = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            for (var l in o)
              Object.prototype.hasOwnProperty.call(o, l) && (n[l] = o[l]);
          }
          return n;
        }),
    bt.apply(this, arguments)
  );
}
var Lt;
(function (n) {
  (n.Pop = "POP"), (n.Push = "PUSH"), (n.Replace = "REPLACE");
})(Lt || (Lt = {}));
const Bp = "popstate";
function hS(n) {
  n === void 0 && (n = {});
  function r(l, s) {
    let { pathname: f, search: d, hash: v } = l.location;
    return hi(
      "",
      { pathname: f, search: d, hash: v },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default"
    );
  }
  function o(l, s) {
    return typeof s == "string" ? s : Wr(s);
  }
  return vS(r, o, null, n);
}
function Me(n, r) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(r);
}
function Xl(n, r) {
  if (!n) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {}
  }
}
function mS() {
  return Math.random().toString(36).substr(2, 8);
}
function Up(n, r) {
  return { usr: n.state, key: n.key, idx: r };
}
function hi(n, r, o, l) {
  return (
    o === void 0 && (o = null),
    bt(
      { pathname: typeof n == "string" ? n : n.pathname, search: "", hash: "" },
      typeof r == "string" ? Cr(r) : r,
      { state: o, key: (r && r.key) || l || mS() }
    )
  );
}
function Wr(n) {
  let { pathname: r = "/", search: o = "", hash: l = "" } = n;
  return (
    o && o !== "?" && (r += o.charAt(0) === "?" ? o : "?" + o),
    l && l !== "#" && (r += l.charAt(0) === "#" ? l : "#" + l),
    r
  );
}
function Cr(n) {
  let r = {};
  if (n) {
    let o = n.indexOf("#");
    o >= 0 && ((r.hash = n.substr(o)), (n = n.substr(0, o)));
    let l = n.indexOf("?");
    l >= 0 && ((r.search = n.substr(l)), (n = n.substr(0, l))),
      n && (r.pathname = n);
  }
  return r;
}
function vS(n, r, o, l) {
  l === void 0 && (l = {});
  let { window: s = document.defaultView, v5Compat: f = !1 } = l,
    d = s.history,
    v = Lt.Pop,
    h = null,
    m = p();
  m == null && ((m = 0), d.replaceState(bt({}, d.state, { idx: m }), ""));
  function p() {
    return (d.state || { idx: null }).idx;
  }
  function y() {
    v = Lt.Pop;
    let E = p(),
      H = E == null ? null : E - m;
    (m = E), h && h({ action: v, location: O.location, delta: H });
  }
  function b(E, H) {
    v = Lt.Push;
    let j = hi(O.location, E, H);
    m = p() + 1;
    let D = Up(j, m),
      U = O.createHref(j);
    try {
      d.pushState(D, "", U);
    } catch (R) {
      if (R instanceof DOMException && R.name === "DataCloneError") throw R;
      s.location.assign(U);
    }
    f && h && h({ action: v, location: O.location, delta: 1 });
  }
  function T(E, H) {
    v = Lt.Replace;
    let j = hi(O.location, E, H);
    m = p();
    let D = Up(j, m),
      U = O.createHref(j);
    d.replaceState(D, "", U),
      f && h && h({ action: v, location: O.location, delta: 0 });
  }
  function w(E) {
    let H = s.location.origin !== "null" ? s.location.origin : s.location.href,
      j = typeof E == "string" ? E : Wr(E);
    return (
      (j = j.replace(/ $/, "%20")),
      Me(
        H,
        "No window.location.(origin|href) available to create URL for href: " +
          j
      ),
      new URL(j, H)
    );
  }
  let O = {
    get action() {
      return v;
    },
    get location() {
      return n(s, d);
    },
    listen(E) {
      if (h) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(Bp, y),
        (h = E),
        () => {
          s.removeEventListener(Bp, y), (h = null);
        }
      );
    },
    createHref(E) {
      return r(s, E);
    },
    createURL: w,
    encodeLocation(E) {
      let H = w(E);
      return { pathname: H.pathname, search: H.search, hash: H.hash };
    },
    push: b,
    replace: T,
    go(E) {
      return d.go(E);
    },
  };
  return O;
}
var at;
(function (n) {
  (n.data = "data"),
    (n.deferred = "deferred"),
    (n.redirect = "redirect"),
    (n.error = "error");
})(at || (at = {}));
const pS = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function gS(n) {
  return n.index === !0;
}
function ic(n, r, o, l) {
  return (
    o === void 0 && (o = []),
    l === void 0 && (l = {}),
    n.map((s, f) => {
      let d = [...o, String(f)],
        v = typeof s.id == "string" ? s.id : d.join("-");
      if (
        (Me(
          s.index !== !0 || !s.children,
          "Cannot specify children on an index route"
        ),
        Me(
          !l[v],
          'Found a route id collision on id "' +
            v +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        gS(s))
      ) {
        let h = bt({}, s, r(s), { id: v });
        return (l[v] = h), h;
      } else {
        let h = bt({}, s, r(s), { id: v, children: void 0 });
        return (
          (l[v] = h), s.children && (h.children = ic(s.children, r, d, l)), h
        );
      }
    })
  );
}
function kr(n, r, o) {
  return o === void 0 && (o = "/"), Js(n, r, o, !1);
}
function Js(n, r, o, l) {
  let s = typeof r == "string" ? Cr(r) : r,
    f = Ua(s.pathname || "/", o);
  if (f == null) return null;
  let d = _y(n);
  bS(d);
  let v = null;
  for (let h = 0; v == null && h < d.length; ++h) {
    let m = AS(f);
    v = jS(d[h], m, l);
  }
  return v;
}
function yS(n, r) {
  let { route: o, pathname: l, params: s } = n;
  return { id: o.id, pathname: l, params: s, data: r[o.id], handle: o.handle };
}
function _y(n, r, o, l) {
  r === void 0 && (r = []), o === void 0 && (o = []), l === void 0 && (l = "");
  let s = (f, d, v) => {
    let h = {
      relativePath: v === void 0 ? f.path || "" : v,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: d,
      route: f,
    };
    h.relativePath.startsWith("/") &&
      (Me(
        h.relativePath.startsWith(l),
        'Absolute route path "' +
          h.relativePath +
          '" nested under path ' +
          ('"' + l + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (h.relativePath = h.relativePath.slice(l.length)));
    let m = Ha([l, h.relativePath]),
      p = o.concat(h);
    f.children &&
      f.children.length > 0 &&
      (Me(
        f.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + m + '".')
      ),
      _y(f.children, r, p, m)),
      !(f.path == null && !f.index) &&
        r.push({ path: m, score: OS(m, f.index), routesMeta: p });
  };
  return (
    n.forEach((f, d) => {
      var v;
      if (f.path === "" || !((v = f.path) != null && v.includes("?"))) s(f, d);
      else for (let h of Oy(f.path)) s(f, d, h);
    }),
    r
  );
}
function Oy(n) {
  let r = n.split("/");
  if (r.length === 0) return [];
  let [o, ...l] = r,
    s = o.endsWith("?"),
    f = o.replace(/\?$/, "");
  if (l.length === 0) return s ? [f, ""] : [f];
  let d = Oy(l.join("/")),
    v = [];
  return (
    v.push(...d.map((h) => (h === "" ? f : [f, h].join("/")))),
    s && v.push(...d),
    v.map((h) => (n.startsWith("/") && h === "" ? "/" : h))
  );
}
function bS(n) {
  n.sort((r, o) =>
    r.score !== o.score
      ? o.score - r.score
      : wS(
          r.routesMeta.map((l) => l.childrenIndex),
          o.routesMeta.map((l) => l.childrenIndex)
        )
  );
}
const xS = /^:[\w-]+$/,
  SS = 3,
  CS = 2,
  ES = 1,
  TS = 10,
  _S = -2,
  $p = (n) => n === "*";
function OS(n, r) {
  let o = n.split("/"),
    l = o.length;
  return (
    o.some($p) && (l += _S),
    r && (l += CS),
    o
      .filter((s) => !$p(s))
      .reduce((s, f) => s + (xS.test(f) ? SS : f === "" ? ES : TS), l)
  );
}
function wS(n, r) {
  return n.length === r.length && n.slice(0, -1).every((l, s) => l === r[s])
    ? n[n.length - 1] - r[r.length - 1]
    : 0;
}
function jS(n, r, o) {
  o === void 0 && (o = !1);
  let { routesMeta: l } = n,
    s = {},
    f = "/",
    d = [];
  for (let v = 0; v < l.length; ++v) {
    let h = l[v],
      m = v === l.length - 1,
      p = f === "/" ? r : r.slice(f.length) || "/",
      y = sc(
        { path: h.relativePath, caseSensitive: h.caseSensitive, end: m },
        p
      ),
      b = h.route;
    if (
      (!y &&
        m &&
        o &&
        !l[l.length - 1].route.index &&
        (y = sc(
          { path: h.relativePath, caseSensitive: h.caseSensitive, end: !1 },
          p
        )),
      !y)
    )
      return null;
    Object.assign(s, y.params),
      d.push({
        params: s,
        pathname: Ha([f, y.pathname]),
        pathnameBase: DS(Ha([f, y.pathnameBase])),
        route: b,
      }),
      y.pathnameBase !== "/" && (f = Ha([f, y.pathnameBase]));
  }
  return d;
}
function sc(n, r) {
  typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 });
  let [o, l] = RS(n.path, n.caseSensitive, n.end),
    s = r.match(o);
  if (!s) return null;
  let f = s[0],
    d = f.replace(/(.)\/+$/, "$1"),
    v = s.slice(1);
  return {
    params: l.reduce((m, p, y) => {
      let { paramName: b, isOptional: T } = p;
      if (b === "*") {
        let O = v[y] || "";
        d = f.slice(0, f.length - O.length).replace(/(.)\/+$/, "$1");
      }
      const w = v[y];
      return (
        T && !w ? (m[b] = void 0) : (m[b] = (w || "").replace(/%2F/g, "/")), m
      );
    }, {}),
    pathname: f,
    pathnameBase: d,
    pattern: n,
  };
}
function RS(n, r, o) {
  r === void 0 && (r = !1),
    o === void 0 && (o = !0),
    Xl(
      n === "*" || !n.endsWith("*") || n.endsWith("/*"),
      'Route path "' +
        n +
        '" will be treated as if it were ' +
        ('"' + n.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + n.replace(/\*$/, "/*") + '".')
    );
  let l = [],
    s =
      "^" +
      n
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (d, v, h) => (
            l.push({ paramName: v, isOptional: h != null }),
            h ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    n.endsWith("*")
      ? (l.push({ paramName: "*" }),
        (s += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : o
      ? (s += "\\/*$")
      : n !== "" && n !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, r ? void 0 : "i"), l]
  );
}
function AS(n) {
  try {
    return n
      .split("/")
      .map((r) => decodeURIComponent(r).replace(/\//g, "%2F"))
      .join("/");
  } catch (r) {
    return (
      Xl(
        !1,
        'The URL path "' +
          n +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + r + ").")
      ),
      n
    );
  }
}
function Ua(n, r) {
  if (r === "/") return n;
  if (!n.toLowerCase().startsWith(r.toLowerCase())) return null;
  let o = r.endsWith("/") ? r.length - 1 : r.length,
    l = n.charAt(o);
  return l && l !== "/" ? null : n.slice(o) || "/";
}
function NS(n, r) {
  r === void 0 && (r = "/");
  let {
    pathname: o,
    search: l = "",
    hash: s = "",
  } = typeof n == "string" ? Cr(n) : n;
  return {
    pathname: o ? (o.startsWith("/") ? o : MS(o, r)) : r,
    search: zS(l),
    hash: LS(s),
  };
}
function MS(n, r) {
  let o = r.replace(/\/+$/, "").split("/");
  return (
    n.split("/").forEach((s) => {
      s === ".." ? o.length > 1 && o.pop() : s !== "." && o.push(s);
    }),
    o.length > 1 ? o.join("/") : "/"
  );
}
function ed(n, r, o, l) {
  return (
    "Cannot include a '" +
    n +
    "' character in a manually specified " +
    ("`to." +
      r +
      "` field [" +
      JSON.stringify(l) +
      "].  Please separate it out to the ") +
    ("`to." + o + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function wy(n) {
  return n.filter(
    (r, o) => o === 0 || (r.route.path && r.route.path.length > 0)
  );
}
function _c(n, r) {
  let o = wy(n);
  return r
    ? o.map((l, s) => (s === o.length - 1 ? l.pathname : l.pathnameBase))
    : o.map((l) => l.pathnameBase);
}
function Oc(n, r, o, l) {
  l === void 0 && (l = !1);
  let s;
  typeof n == "string"
    ? (s = Cr(n))
    : ((s = bt({}, n)),
      Me(
        !s.pathname || !s.pathname.includes("?"),
        ed("?", "pathname", "search", s)
      ),
      Me(
        !s.pathname || !s.pathname.includes("#"),
        ed("#", "pathname", "hash", s)
      ),
      Me(!s.search || !s.search.includes("#"), ed("#", "search", "hash", s)));
  let f = n === "" || s.pathname === "",
    d = f ? "/" : s.pathname,
    v;
  if (d == null) v = o;
  else {
    let y = r.length - 1;
    if (!l && d.startsWith("..")) {
      let b = d.split("/");
      for (; b[0] === ".."; ) b.shift(), (y -= 1);
      s.pathname = b.join("/");
    }
    v = y >= 0 ? r[y] : "/";
  }
  let h = NS(s, v),
    m = d && d !== "/" && d.endsWith("/"),
    p = (f || d === ".") && o.endsWith("/");
  return !h.pathname.endsWith("/") && (m || p) && (h.pathname += "/"), h;
}
const Ha = (n) => n.join("/").replace(/\/\/+/g, "/"),
  DS = (n) => n.replace(/\/+$/, "").replace(/^\/*/, "/"),
  zS = (n) => (!n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n),
  LS = (n) => (!n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n);
class cc {
  constructor(r, o, l, s) {
    s === void 0 && (s = !1),
      (this.status = r),
      (this.statusText = o || ""),
      (this.internal = s),
      l instanceof Error
        ? ((this.data = l.toString()), (this.error = l))
        : (this.data = l);
  }
}
function mi(n) {
  return (
    n != null &&
    typeof n.status == "number" &&
    typeof n.statusText == "string" &&
    typeof n.internal == "boolean" &&
    "data" in n
  );
}
const jy = ["post", "put", "patch", "delete"],
  HS = new Set(jy),
  BS = ["get", ...jy],
  US = new Set(BS),
  $S = new Set([301, 302, 303, 307, 308]),
  PS = new Set([307, 308]),
  td = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  qS = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  ei = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Oh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  VS = (n) => ({ hasErrorBoundary: !!n.hasErrorBoundary }),
  Ry = "remix-router-transitions";
function kS(n) {
  const r = n.window ? n.window : typeof window < "u" ? window : void 0,
    o =
      typeof r < "u" &&
      typeof r.document < "u" &&
      typeof r.document.createElement < "u",
    l = !o;
  Me(
    n.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let s;
  if (n.mapRouteProperties) s = n.mapRouteProperties;
  else if (n.detectErrorBoundary) {
    let M = n.detectErrorBoundary;
    s = (P) => ({ hasErrorBoundary: M(P) });
  } else s = VS;
  let f = {},
    d = ic(n.routes, s, void 0, f),
    v,
    h = n.basename || "/",
    m = n.dataStrategy || FS,
    p = n.patchRoutesOnNavigation,
    y = bt(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      },
      n.future
    ),
    b = null,
    T = new Set(),
    w = null,
    O = null,
    E = null,
    H = n.hydrationData != null,
    j = kr(d, n.history.location, h),
    D = !1,
    U = null;
  if (j == null && !p) {
    let M = gn(404, { pathname: n.history.location.pathname }),
      { matches: P, route: G } = Zp(d);
    (j = P), (U = { [G.id]: M });
  }
  j &&
    !n.hydrationData &&
    An(j, d, n.history.location.pathname).active &&
    (j = null);
  let R;
  if (j)
    if (j.some((M) => M.route.lazy)) R = !1;
    else if (!j.some((M) => M.route.loader)) R = !0;
    else if (y.v7_partialHydration) {
      let M = n.hydrationData ? n.hydrationData.loaderData : null,
        P = n.hydrationData ? n.hydrationData.errors : null;
      if (P) {
        let G = j.findIndex((oe) => P[oe.route.id] !== void 0);
        R = j.slice(0, G + 1).every((oe) => !Ld(oe.route, M, P));
      } else R = j.every((G) => !Ld(G.route, M, P));
    } else R = n.hydrationData != null;
  else if (((R = !1), (j = []), y.v7_partialHydration)) {
    let M = An(null, d, n.history.location.pathname);
    M.active && M.matches && ((D = !0), (j = M.matches));
  }
  let F,
    _ = {
      historyAction: n.history.action,
      location: n.history.location,
      matches: j,
      initialized: R,
      navigation: td,
      restoreScrollPosition: n.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (n.hydrationData && n.hydrationData.loaderData) || {},
      actionData: (n.hydrationData && n.hydrationData.actionData) || null,
      errors: (n.hydrationData && n.hydrationData.errors) || U,
      fetchers: new Map(),
      blockers: new Map(),
    },
    q = Lt.Pop,
    K = !1,
    B,
    $ = !1,
    k = new Map(),
    ee = null,
    te = !1,
    se = !1,
    z = [],
    W = new Set(),
    J = new Map(),
    ve = 0,
    A = -1,
    Z = new Map(),
    le = new Set(),
    ie = new Map(),
    ue = new Map(),
    ce = new Set(),
    me = new Map(),
    Le = new Map(),
    De;
  function ut() {
    if (
      ((b = n.history.listen((M) => {
        let { action: P, location: G, delta: oe } = M;
        if (De) {
          De(), (De = void 0);
          return;
        }
        Xl(
          Le.size === 0 || oe != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let de = Tr({
          currentLocation: _.location,
          nextLocation: G,
          historyAction: P,
        });
        if (de && oe != null) {
          let pe = new Promise((xe) => {
            De = xe;
          });
          n.history.go(oe * -1),
            ga(de, {
              state: "blocked",
              location: G,
              proceed() {
                ga(de, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: G,
                }),
                  pe.then(() => n.history.go(oe));
              },
              reset() {
                let xe = new Map(_.blockers);
                xe.set(de, ei), He({ blockers: xe });
              },
            });
          return;
        }
        return ft(P, G);
      })),
      o)
    ) {
      iC(r, k);
      let M = () => sC(r, k);
      r.addEventListener("pagehide", M),
        (ee = () => r.removeEventListener("pagehide", M));
    }
    return _.initialized || ft(Lt.Pop, _.location, { initialHydration: !0 }), F;
  }
  function st() {
    b && b(),
      ee && ee(),
      T.clear(),
      B && B.abort(),
      _.fetchers.forEach((M, P) => Fn(P)),
      _.blockers.forEach((M, P) => la(P));
  }
  function Ft(M) {
    return T.add(M), () => T.delete(M);
  }
  function He(M, P) {
    P === void 0 && (P = {}), (_ = bt({}, _, M));
    let G = [],
      oe = [];
    y.v7_fetcherPersist &&
      _.fetchers.forEach((de, pe) => {
        de.state === "idle" && (ce.has(pe) ? oe.push(pe) : G.push(pe));
      }),
      ce.forEach((de) => {
        !_.fetchers.has(de) && !J.has(de) && oe.push(de);
      }),
      [...T].forEach((de) =>
        de(_, {
          deletedFetchers: oe,
          viewTransitionOpts: P.viewTransitionOpts,
          flushSync: P.flushSync === !0,
        })
      ),
      y.v7_fetcherPersist
        ? (G.forEach((de) => _.fetchers.delete(de)), oe.forEach((de) => Fn(de)))
        : oe.forEach((de) => ce.delete(de));
  }
  function Ie(M, P, G) {
    var oe, de;
    let { flushSync: pe } = G === void 0 ? {} : G,
      xe =
        _.actionData != null &&
        _.navigation.formMethod != null &&
        ta(_.navigation.formMethod) &&
        _.navigation.state === "loading" &&
        ((oe = M.state) == null ? void 0 : oe._isRedirect) !== !0,
      he;
    P.actionData
      ? Object.keys(P.actionData).length > 0
        ? (he = P.actionData)
        : (he = null)
      : xe
      ? (he = _.actionData)
      : (he = null);
    let ye = P.loaderData
        ? Ip(_.loaderData, P.loaderData, P.matches || [], P.errors)
        : _.loaderData,
      ge = _.blockers;
    ge.size > 0 && ((ge = new Map(ge)), ge.forEach((Ne, Be) => ge.set(Be, ei)));
    let Se =
      K === !0 ||
      (_.navigation.formMethod != null &&
        ta(_.navigation.formMethod) &&
        ((de = M.state) == null ? void 0 : de._isRedirect) !== !0);
    v && ((d = v), (v = void 0)),
      te ||
        q === Lt.Pop ||
        (q === Lt.Push
          ? n.history.push(M, M.state)
          : q === Lt.Replace && n.history.replace(M, M.state));
    let we;
    if (q === Lt.Pop) {
      let Ne = k.get(_.location.pathname);
      Ne && Ne.has(M.pathname)
        ? (we = { currentLocation: _.location, nextLocation: M })
        : k.has(M.pathname) &&
          (we = { currentLocation: M, nextLocation: _.location });
    } else if ($) {
      let Ne = k.get(_.location.pathname);
      Ne
        ? Ne.add(M.pathname)
        : ((Ne = new Set([M.pathname])), k.set(_.location.pathname, Ne)),
        (we = { currentLocation: _.location, nextLocation: M });
    }
    He(
      bt({}, P, {
        actionData: he,
        loaderData: ye,
        historyAction: q,
        location: M,
        initialized: !0,
        navigation: td,
        revalidation: "idle",
        restoreScrollPosition: Qn(M, P.matches || _.matches),
        preventScrollReset: Se,
        blockers: ge,
      }),
      { viewTransitionOpts: we, flushSync: pe === !0 }
    ),
      (q = Lt.Pop),
      (K = !1),
      ($ = !1),
      (te = !1),
      (se = !1),
      (z = []);
  }
  async function Mt(M, P) {
    if (typeof M == "number") {
      n.history.go(M);
      return;
    }
    let G = zd(
        _.location,
        _.matches,
        h,
        y.v7_prependBasename,
        M,
        y.v7_relativeSplatPath,
        P == null ? void 0 : P.fromRouteId,
        P == null ? void 0 : P.relative
      ),
      {
        path: oe,
        submission: de,
        error: pe,
      } = Pp(y.v7_normalizeFormMethod, !1, G, P),
      xe = _.location,
      he = hi(_.location, oe, P && P.state);
    he = bt({}, he, n.history.encodeLocation(he));
    let ye = P && P.replace != null ? P.replace : void 0,
      ge = Lt.Push;
    ye === !0
      ? (ge = Lt.Replace)
      : ye === !1 ||
        (de != null &&
          ta(de.formMethod) &&
          de.formAction === _.location.pathname + _.location.search &&
          (ge = Lt.Replace));
    let Se =
        P && "preventScrollReset" in P ? P.preventScrollReset === !0 : void 0,
      we = (P && P.flushSync) === !0,
      Ne = Tr({ currentLocation: xe, nextLocation: he, historyAction: ge });
    if (Ne) {
      ga(Ne, {
        state: "blocked",
        location: he,
        proceed() {
          ga(Ne, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: he,
          }),
            Mt(M, P);
        },
        reset() {
          let Be = new Map(_.blockers);
          Be.set(Ne, ei), He({ blockers: Be });
        },
      });
      return;
    }
    return await ft(ge, he, {
      submission: de,
      pendingError: pe,
      preventScrollReset: Se,
      replace: P && P.replace,
      enableViewTransition: P && P.viewTransition,
      flushSync: we,
    });
  }
  function un() {
    if (
      (jt(),
      He({ revalidation: "loading" }),
      _.navigation.state !== "submitting")
    ) {
      if (_.navigation.state === "idle") {
        ft(_.historyAction, _.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      ft(q || _.historyAction, _.navigation.location, {
        overrideNavigation: _.navigation,
        enableViewTransition: $ === !0,
      });
    }
  }
  async function ft(M, P, G) {
    B && B.abort(),
      (B = null),
      (q = M),
      (te = (G && G.startUninterruptedRevalidation) === !0),
      ba(_.location, _.matches),
      (K = (G && G.preventScrollReset) === !0),
      ($ = (G && G.enableViewTransition) === !0);
    let oe = v || d,
      de = G && G.overrideNavigation,
      pe =
        G != null &&
        G.initialHydration &&
        _.matches &&
        _.matches.length > 0 &&
        !D
          ? _.matches
          : kr(oe, P, h),
      xe = (G && G.flushSync) === !0;
    if (
      pe &&
      _.initialized &&
      !se &&
      WS(_.location, P) &&
      !(G && G.submission && ta(G.submission.formMethod))
    ) {
      Ie(P, { matches: pe }, { flushSync: xe });
      return;
    }
    let he = An(pe, oe, P.pathname);
    if ((he.active && he.matches && (pe = he.matches), !pe)) {
      let { error: Qe, notFoundMatches: Ve, route: Ye } = ya(P.pathname);
      Ie(
        P,
        { matches: Ve, loaderData: {}, errors: { [Ye.id]: Qe } },
        { flushSync: xe }
      );
      return;
    }
    B = new AbortController();
    let ye = Ul(n.history, P, B.signal, G && G.submission),
      ge;
    if (G && G.pendingError)
      ge = [Gr(pe).route.id, { type: at.error, error: G.pendingError }];
    else if (G && G.submission && ta(G.submission.formMethod)) {
      let Qe = await dt(ye, P, G.submission, pe, he.active, {
        replace: G.replace,
        flushSync: xe,
      });
      if (Qe.shortCircuited) return;
      if (Qe.pendingActionResult) {
        let [Ve, Ye] = Qe.pendingActionResult;
        if (jn(Ye) && mi(Ye.error) && Ye.error.status === 404) {
          (B = null),
            Ie(P, {
              matches: Qe.matches,
              loaderData: {},
              errors: { [Ve]: Ye.error },
            });
          return;
        }
      }
      (pe = Qe.matches || pe),
        (ge = Qe.pendingActionResult),
        (de = nd(P, G.submission)),
        (xe = !1),
        (he.active = !1),
        (ye = Ul(n.history, ye.url, ye.signal));
    }
    let {
      shortCircuited: Se,
      matches: we,
      loaderData: Ne,
      errors: Be,
    } = await nn(
      ye,
      P,
      pe,
      he.active,
      de,
      G && G.submission,
      G && G.fetcherSubmission,
      G && G.replace,
      G && G.initialHydration === !0,
      xe,
      ge
    );
    Se ||
      ((B = null),
      Ie(P, bt({ matches: we || pe }, Qp(ge), { loaderData: Ne, errors: Be })));
  }
  async function dt(M, P, G, oe, de, pe) {
    pe === void 0 && (pe = {}), jt();
    let xe = lC(P, G);
    if ((He({ navigation: xe }, { flushSync: pe.flushSync === !0 }), de)) {
      let ge = await Zn(oe, P.pathname, M.signal);
      if (ge.type === "aborted") return { shortCircuited: !0 };
      if (ge.type === "error") {
        let Se = Gr(ge.partialMatches).route.id;
        return {
          matches: ge.partialMatches,
          pendingActionResult: [Se, { type: at.error, error: ge.error }],
        };
      } else if (ge.matches) oe = ge.matches;
      else {
        let { notFoundMatches: Se, error: we, route: Ne } = ya(P.pathname);
        return {
          matches: Se,
          pendingActionResult: [Ne.id, { type: at.error, error: we }],
        };
      }
    }
    let he,
      ye = ii(oe, P);
    if (!ye.route.action && !ye.route.lazy)
      he = {
        type: at.error,
        error: gn(405, {
          method: M.method,
          pathname: P.pathname,
          routeId: ye.route.id,
        }),
      };
    else if (
      ((he = (await pt("action", _, M, [ye], oe, null))[ye.route.id]),
      M.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (Yr(he)) {
      let ge;
      return (
        pe && pe.replace != null
          ? (ge = pe.replace)
          : (ge =
              Xp(he.response.headers.get("Location"), new URL(M.url), h) ===
              _.location.pathname + _.location.search),
        await xt(M, he, !0, { submission: G, replace: ge }),
        { shortCircuited: !0 }
      );
    }
    if (br(he)) throw gn(400, { type: "defer-action" });
    if (jn(he)) {
      let ge = Gr(oe, ye.route.id);
      return (
        (pe && pe.replace) !== !0 && (q = Lt.Push),
        { matches: oe, pendingActionResult: [ge.route.id, he] }
      );
    }
    return { matches: oe, pendingActionResult: [ye.route.id, he] };
  }
  async function nn(M, P, G, oe, de, pe, xe, he, ye, ge, Se) {
    let we = de || nd(P, pe),
      Ne = pe || xe || Jp(we),
      Be = !te && (!y.v7_partialHydration || !ye);
    if (oe) {
      if (Be) {
        let et = It(Se);
        He(bt({ navigation: we }, et !== void 0 ? { actionData: et } : {}), {
          flushSync: ge,
        });
      }
      let ke = await Zn(G, P.pathname, M.signal);
      if (ke.type === "aborted") return { shortCircuited: !0 };
      if (ke.type === "error") {
        let et = Gr(ke.partialMatches).route.id;
        return {
          matches: ke.partialMatches,
          loaderData: {},
          errors: { [et]: ke.error },
        };
      } else if (ke.matches) G = ke.matches;
      else {
        let { error: et, notFoundMatches: sa, route: xa } = ya(P.pathname);
        return { matches: sa, loaderData: {}, errors: { [xa.id]: et } };
      }
    }
    let Qe = v || d,
      [Ve, Ye] = Vp(
        n.history,
        _,
        G,
        Ne,
        P,
        y.v7_partialHydration && ye === !0,
        y.v7_skipActionErrorRevalidation,
        se,
        z,
        W,
        ce,
        ie,
        le,
        Qe,
        h,
        Se
      );
    if (
      (In(
        (ke) =>
          !(G && G.some((et) => et.route.id === ke)) ||
          (Ve && Ve.some((et) => et.route.id === ke))
      ),
      (A = ++ve),
      Ve.length === 0 && Ye.length === 0)
    ) {
      let ke = Wt();
      return (
        Ie(
          P,
          bt(
            {
              matches: G,
              loaderData: {},
              errors: Se && jn(Se[1]) ? { [Se[0]]: Se[1].error } : null,
            },
            Qp(Se),
            ke ? { fetchers: new Map(_.fetchers) } : {}
          ),
          { flushSync: ge }
        ),
        { shortCircuited: !0 }
      );
    }
    if (Be) {
      let ke = {};
      if (!oe) {
        ke.navigation = we;
        let et = It(Se);
        et !== void 0 && (ke.actionData = et);
      }
      Ye.length > 0 && (ke.fetchers = qt(Ye)), He(ke, { flushSync: ge });
    }
    Ye.forEach((ke) => {
      Vt(ke.key), ke.controller && J.set(ke.key, ke.controller);
    });
    let Ct = () => Ye.forEach((ke) => Vt(ke.key));
    B && B.signal.addEventListener("abort", Ct);
    let { loaderResults: _r, fetcherResults: Nn } = await an(_, G, Ve, Ye, M);
    if (M.signal.aborted) return { shortCircuited: !0 };
    B && B.signal.removeEventListener("abort", Ct),
      Ye.forEach((ke) => J.delete(ke.key));
    let bn = Vs(_r);
    if (bn)
      return (
        await xt(M, bn.result, !0, { replace: he }), { shortCircuited: !0 }
      );
    if (((bn = Vs(Nn)), bn))
      return (
        le.add(bn.key),
        await xt(M, bn.result, !0, { replace: he }),
        { shortCircuited: !0 }
      );
    let { loaderData: ro, errors: ia } = Fp(_, G, _r, Se, Ye, Nn, me);
    me.forEach((ke, et) => {
      ke.subscribe((sa) => {
        (sa || ke.done) && me.delete(et);
      });
    }),
      y.v7_partialHydration && ye && _.errors && (ia = bt({}, _.errors, ia));
    let Mn = Wt(),
      fn = mt(A),
      Fa = Mn || fn || Ye.length > 0;
    return bt(
      { matches: G, loaderData: ro, errors: ia },
      Fa ? { fetchers: new Map(_.fetchers) } : {}
    );
  }
  function It(M) {
    if (M && !jn(M[1])) return { [M[0]]: M[1].data };
    if (_.actionData)
      return Object.keys(_.actionData).length === 0 ? null : _.actionData;
  }
  function qt(M) {
    return (
      M.forEach((P) => {
        let G = _.fetchers.get(P.key),
          oe = ti(void 0, G ? G.data : void 0);
        _.fetchers.set(P.key, oe);
      }),
      new Map(_.fetchers)
    );
  }
  function Ke(M, P, G, oe) {
    if (l)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    Vt(M);
    let de = (oe && oe.flushSync) === !0,
      pe = v || d,
      xe = zd(
        _.location,
        _.matches,
        h,
        y.v7_prependBasename,
        G,
        y.v7_relativeSplatPath,
        P,
        oe == null ? void 0 : oe.relative
      ),
      he = kr(pe, xe, h),
      ye = An(he, pe, xe);
    if ((ye.active && ye.matches && (he = ye.matches), !he)) {
      rt(M, P, gn(404, { pathname: xe }), { flushSync: de });
      return;
    }
    let {
      path: ge,
      submission: Se,
      error: we,
    } = Pp(y.v7_normalizeFormMethod, !0, xe, oe);
    if (we) {
      rt(M, P, we, { flushSync: de });
      return;
    }
    let Ne = ii(he, ge),
      Be = (oe && oe.preventScrollReset) === !0;
    if (Se && ta(Se.formMethod)) {
      ht(M, P, ge, Ne, he, ye.active, de, Be, Se);
      return;
    }
    ie.set(M, { routeId: P, path: ge }),
      Tt(M, P, ge, Ne, he, ye.active, de, Be, Se);
  }
  async function ht(M, P, G, oe, de, pe, xe, he, ye) {
    jt(), ie.delete(M);
    function ge(_t) {
      if (!_t.route.action && !_t.route.lazy) {
        let Sa = gn(405, { method: ye.formMethod, pathname: G, routeId: P });
        return rt(M, P, Sa, { flushSync: xe }), !0;
      }
      return !1;
    }
    if (!pe && ge(oe)) return;
    let Se = _.fetchers.get(M);
    St(M, oC(ye, Se), { flushSync: xe });
    let we = new AbortController(),
      Ne = Ul(n.history, G, we.signal, ye);
    if (pe) {
      let _t = await Zn(de, new URL(Ne.url).pathname, Ne.signal, M);
      if (_t.type === "aborted") return;
      if (_t.type === "error") {
        rt(M, P, _t.error, { flushSync: xe });
        return;
      } else if (_t.matches) {
        if (((de = _t.matches), (oe = ii(de, G)), ge(oe))) return;
      } else {
        rt(M, P, gn(404, { pathname: G }), { flushSync: xe });
        return;
      }
    }
    J.set(M, we);
    let Be = ve,
      Ve = (await pt("action", _, Ne, [oe], de, M))[oe.route.id];
    if (Ne.signal.aborted) {
      J.get(M) === we && J.delete(M);
      return;
    }
    if (y.v7_fetcherPersist && ce.has(M)) {
      if (Yr(Ve) || jn(Ve)) {
        St(M, gr(void 0));
        return;
      }
    } else {
      if (Yr(Ve))
        if ((J.delete(M), A > Be)) {
          St(M, gr(void 0));
          return;
        } else
          return (
            le.add(M),
            St(M, ti(ye)),
            xt(Ne, Ve, !1, { fetcherSubmission: ye, preventScrollReset: he })
          );
      if (jn(Ve)) {
        rt(M, P, Ve.error);
        return;
      }
    }
    if (br(Ve)) throw gn(400, { type: "defer-action" });
    let Ye = _.navigation.location || _.location,
      Ct = Ul(n.history, Ye, we.signal),
      _r = v || d,
      Nn =
        _.navigation.state !== "idle"
          ? kr(_r, _.navigation.location, h)
          : _.matches;
    Me(Nn, "Didn't find any matches after fetcher action");
    let bn = ++ve;
    Z.set(M, bn);
    let ro = ti(ye, Ve.data);
    _.fetchers.set(M, ro);
    let [ia, Mn] = Vp(
      n.history,
      _,
      Nn,
      ye,
      Ye,
      !1,
      y.v7_skipActionErrorRevalidation,
      se,
      z,
      W,
      ce,
      ie,
      le,
      _r,
      h,
      [oe.route.id, Ve]
    );
    Mn.filter((_t) => _t.key !== M).forEach((_t) => {
      let Sa = _t.key,
        rn = _.fetchers.get(Sa),
        Di = ti(void 0, rn ? rn.data : void 0);
      _.fetchers.set(Sa, Di), Vt(Sa), _t.controller && J.set(Sa, _t.controller);
    }),
      He({ fetchers: new Map(_.fetchers) });
    let fn = () => Mn.forEach((_t) => Vt(_t.key));
    we.signal.addEventListener("abort", fn);
    let { loaderResults: Fa, fetcherResults: ke } = await an(_, Nn, ia, Mn, Ct);
    if (we.signal.aborted) return;
    we.signal.removeEventListener("abort", fn),
      Z.delete(M),
      J.delete(M),
      Mn.forEach((_t) => J.delete(_t.key));
    let et = Vs(Fa);
    if (et) return xt(Ct, et.result, !1, { preventScrollReset: he });
    if (((et = Vs(ke)), et))
      return le.add(et.key), xt(Ct, et.result, !1, { preventScrollReset: he });
    let { loaderData: sa, errors: xa } = Fp(_, Nn, Fa, void 0, Mn, ke, me);
    if (_.fetchers.has(M)) {
      let _t = gr(Ve.data);
      _.fetchers.set(M, _t);
    }
    mt(bn),
      _.navigation.state === "loading" && bn > A
        ? (Me(q, "Expected pending action"),
          B && B.abort(),
          Ie(_.navigation.location, {
            matches: Nn,
            loaderData: sa,
            errors: xa,
            fetchers: new Map(_.fetchers),
          }))
        : (He({
            errors: xa,
            loaderData: Ip(_.loaderData, sa, Nn, xa),
            fetchers: new Map(_.fetchers),
          }),
          (se = !1));
  }
  async function Tt(M, P, G, oe, de, pe, xe, he, ye) {
    let ge = _.fetchers.get(M);
    St(M, ti(ye, ge ? ge.data : void 0), { flushSync: xe });
    let Se = new AbortController(),
      we = Ul(n.history, G, Se.signal);
    if (pe) {
      let Ve = await Zn(de, new URL(we.url).pathname, we.signal, M);
      if (Ve.type === "aborted") return;
      if (Ve.type === "error") {
        rt(M, P, Ve.error, { flushSync: xe });
        return;
      } else if (Ve.matches) (de = Ve.matches), (oe = ii(de, G));
      else {
        rt(M, P, gn(404, { pathname: G }), { flushSync: xe });
        return;
      }
    }
    J.set(M, Se);
    let Ne = ve,
      Qe = (await pt("loader", _, we, [oe], de, M))[oe.route.id];
    if (
      (br(Qe) && (Qe = (await wh(Qe, we.signal, !0)) || Qe),
      J.get(M) === Se && J.delete(M),
      !we.signal.aborted)
    ) {
      if (ce.has(M)) {
        St(M, gr(void 0));
        return;
      }
      if (Yr(Qe))
        if (A > Ne) {
          St(M, gr(void 0));
          return;
        } else {
          le.add(M), await xt(we, Qe, !1, { preventScrollReset: he });
          return;
        }
      if (jn(Qe)) {
        rt(M, P, Qe.error);
        return;
      }
      Me(!br(Qe), "Unhandled fetcher deferred data"), St(M, gr(Qe.data));
    }
  }
  async function xt(M, P, G, oe) {
    let {
      submission: de,
      fetcherSubmission: pe,
      preventScrollReset: xe,
      replace: he,
    } = oe === void 0 ? {} : oe;
    P.response.headers.has("X-Remix-Revalidate") && (se = !0);
    let ye = P.response.headers.get("Location");
    Me(ye, "Expected a Location header on the redirect Response"),
      (ye = Xp(ye, new URL(M.url), h));
    let ge = hi(_.location, ye, { _isRedirect: !0 });
    if (o) {
      let Ve = !1;
      if (P.response.headers.has("X-Remix-Reload-Document")) Ve = !0;
      else if (Oh.test(ye)) {
        const Ye = n.history.createURL(ye);
        Ve = Ye.origin !== r.location.origin || Ua(Ye.pathname, h) == null;
      }
      if (Ve) {
        he ? r.location.replace(ye) : r.location.assign(ye);
        return;
      }
    }
    B = null;
    let Se =
        he === !0 || P.response.headers.has("X-Remix-Replace")
          ? Lt.Replace
          : Lt.Push,
      { formMethod: we, formAction: Ne, formEncType: Be } = _.navigation;
    !de && !pe && we && Ne && Be && (de = Jp(_.navigation));
    let Qe = de || pe;
    if (PS.has(P.response.status) && Qe && ta(Qe.formMethod))
      await ft(Se, ge, {
        submission: bt({}, Qe, { formAction: ye }),
        preventScrollReset: xe || K,
        enableViewTransition: G ? $ : void 0,
      });
    else {
      let Ve = nd(ge, de);
      await ft(Se, ge, {
        overrideNavigation: Ve,
        fetcherSubmission: pe,
        preventScrollReset: xe || K,
        enableViewTransition: G ? $ : void 0,
      });
    }
  }
  async function pt(M, P, G, oe, de, pe) {
    let xe,
      he = {};
    try {
      xe = await IS(m, M, P, G, oe, de, pe, f, s);
    } catch (ye) {
      return (
        oe.forEach((ge) => {
          he[ge.route.id] = { type: at.error, error: ye };
        }),
        he
      );
    }
    for (let [ye, ge] of Object.entries(xe))
      if (eC(ge)) {
        let Se = ge.result;
        he[ye] = {
          type: at.redirect,
          response: KS(Se, G, ye, de, h, y.v7_relativeSplatPath),
        };
      } else he[ye] = await ZS(ge);
    return he;
  }
  async function an(M, P, G, oe, de) {
    let pe = M.matches,
      xe = pt("loader", M, de, G, P, null),
      he = Promise.all(
        oe.map(async (Se) => {
          if (Se.matches && Se.match && Se.controller) {
            let Ne = (
              await pt(
                "loader",
                M,
                Ul(n.history, Se.path, Se.controller.signal),
                [Se.match],
                Se.matches,
                Se.key
              )
            )[Se.match.route.id];
            return { [Se.key]: Ne };
          } else
            return Promise.resolve({
              [Se.key]: {
                type: at.error,
                error: gn(404, { pathname: Se.path }),
              },
            });
        })
      ),
      ye = await xe,
      ge = (await he).reduce((Se, we) => Object.assign(Se, we), {});
    return (
      await Promise.all([
        aC(P, ye, de.signal, pe, M.loaderData),
        rC(P, ge, oe),
      ]),
      { loaderResults: ye, fetcherResults: ge }
    );
  }
  function jt() {
    (se = !0),
      z.push(...In()),
      ie.forEach((M, P) => {
        J.has(P) && W.add(P), Vt(P);
      });
  }
  function St(M, P, G) {
    G === void 0 && (G = {}),
      _.fetchers.set(M, P),
      He(
        { fetchers: new Map(_.fetchers) },
        { flushSync: (G && G.flushSync) === !0 }
      );
  }
  function rt(M, P, G, oe) {
    oe === void 0 && (oe = {});
    let de = Gr(_.matches, P);
    Fn(M),
      He(
        { errors: { [de.route.id]: G }, fetchers: new Map(_.fetchers) },
        { flushSync: (oe && oe.flushSync) === !0 }
      );
  }
  function pa(M) {
    return (
      ue.set(M, (ue.get(M) || 0) + 1),
      ce.has(M) && ce.delete(M),
      _.fetchers.get(M) || qS
    );
  }
  function Fn(M) {
    let P = _.fetchers.get(M);
    J.has(M) && !(P && P.state === "loading" && Z.has(M)) && Vt(M),
      ie.delete(M),
      Z.delete(M),
      le.delete(M),
      y.v7_fetcherPersist && ce.delete(M),
      W.delete(M),
      _.fetchers.delete(M);
  }
  function Xa(M) {
    let P = (ue.get(M) || 0) - 1;
    P <= 0
      ? (ue.delete(M), ce.add(M), y.v7_fetcherPersist || Fn(M))
      : ue.set(M, P),
      He({ fetchers: new Map(_.fetchers) });
  }
  function Vt(M) {
    let P = J.get(M);
    P && (P.abort(), J.delete(M));
  }
  function Rn(M) {
    for (let P of M) {
      let G = pa(P),
        oe = gr(G.data);
      _.fetchers.set(P, oe);
    }
  }
  function Wt() {
    let M = [],
      P = !1;
    for (let G of le) {
      let oe = _.fetchers.get(G);
      Me(oe, "Expected fetcher: " + G),
        oe.state === "loading" && (le.delete(G), M.push(G), (P = !0));
    }
    return Rn(M), P;
  }
  function mt(M) {
    let P = [];
    for (let [G, oe] of Z)
      if (oe < M) {
        let de = _.fetchers.get(G);
        Me(de, "Expected fetcher: " + G),
          de.state === "loading" && (Vt(G), Z.delete(G), P.push(G));
      }
    return Rn(P), P.length > 0;
  }
  function Bt(M, P) {
    let G = _.blockers.get(M) || ei;
    return Le.get(M) !== P && Le.set(M, P), G;
  }
  function la(M) {
    _.blockers.delete(M), Le.delete(M);
  }
  function ga(M, P) {
    let G = _.blockers.get(M) || ei;
    Me(
      (G.state === "unblocked" && P.state === "blocked") ||
        (G.state === "blocked" && P.state === "blocked") ||
        (G.state === "blocked" && P.state === "proceeding") ||
        (G.state === "blocked" && P.state === "unblocked") ||
        (G.state === "proceeding" && P.state === "unblocked"),
      "Invalid blocker state transition: " + G.state + " -> " + P.state
    );
    let oe = new Map(_.blockers);
    oe.set(M, P), He({ blockers: oe });
  }
  function Tr(M) {
    let { currentLocation: P, nextLocation: G, historyAction: oe } = M;
    if (Le.size === 0) return;
    Le.size > 1 && Xl(!1, "A router only supports one blocker at a time");
    let de = Array.from(Le.entries()),
      [pe, xe] = de[de.length - 1],
      he = _.blockers.get(pe);
    if (
      !(he && he.state === "proceeding") &&
      xe({ currentLocation: P, nextLocation: G, historyAction: oe })
    )
      return pe;
  }
  function ya(M) {
    let P = gn(404, { pathname: M }),
      G = v || d,
      { matches: oe, route: de } = Zp(G);
    return In(), { notFoundMatches: oe, route: de, error: P };
  }
  function In(M) {
    let P = [];
    return (
      me.forEach((G, oe) => {
        (!M || M(oe)) && (G.cancel(), P.push(oe), me.delete(oe));
      }),
      P
    );
  }
  function ao(M, P, G) {
    if (((w = M), (E = P), (O = G || null), !H && _.navigation === td)) {
      H = !0;
      let oe = Qn(_.location, _.matches);
      oe != null && He({ restoreScrollPosition: oe });
    }
    return () => {
      (w = null), (E = null), (O = null);
    };
  }
  function Ya(M, P) {
    return (
      (O &&
        O(
          M,
          P.map((oe) => yS(oe, _.loaderData))
        )) ||
      M.key
    );
  }
  function ba(M, P) {
    if (w && E) {
      let G = Ya(M, P);
      w[G] = E();
    }
  }
  function Qn(M, P) {
    if (w) {
      let G = Ya(M, P),
        oe = w[G];
      if (typeof oe == "number") return oe;
    }
    return null;
  }
  function An(M, P, G) {
    if (p)
      if (M) {
        if (Object.keys(M[0].params).length > 0)
          return { active: !0, matches: Js(P, G, h, !0) };
      } else return { active: !0, matches: Js(P, G, h, !0) || [] };
    return { active: !1, matches: null };
  }
  async function Zn(M, P, G, oe) {
    if (!p) return { type: "success", matches: M };
    let de = M;
    for (;;) {
      let pe = v == null,
        xe = v || d,
        he = f;
      try {
        await p({
          signal: G,
          path: P,
          matches: de,
          fetcherKey: oe,
          patch: (Se, we) => {
            G.aborted || Gp(Se, we, xe, he, s);
          },
        });
      } catch (Se) {
        return { type: "error", error: Se, partialMatches: de };
      } finally {
        pe && !G.aborted && (d = [...d]);
      }
      if (G.aborted) return { type: "aborted" };
      let ye = kr(xe, P, h);
      if (ye) return { type: "success", matches: ye };
      let ge = Js(xe, P, h, !0);
      if (
        !ge ||
        (de.length === ge.length &&
          de.every((Se, we) => Se.route.id === ge[we].route.id))
      )
        return { type: "success", matches: null };
      de = ge;
    }
  }
  function oa(M) {
    (f = {}), (v = ic(M, s, void 0, f));
  }
  function Qt(M, P) {
    let G = v == null;
    Gp(M, P, v || d, f, s), G && ((d = [...d]), He({}));
  }
  return (
    (F = {
      get basename() {
        return h;
      },
      get future() {
        return y;
      },
      get state() {
        return _;
      },
      get routes() {
        return d;
      },
      get window() {
        return r;
      },
      initialize: ut,
      subscribe: Ft,
      enableScrollRestoration: ao,
      navigate: Mt,
      fetch: Ke,
      revalidate: un,
      createHref: (M) => n.history.createHref(M),
      encodeLocation: (M) => n.history.encodeLocation(M),
      getFetcher: pa,
      deleteFetcher: Xa,
      dispose: st,
      getBlocker: Bt,
      deleteBlocker: la,
      patchRoutes: Qt,
      _internalFetchControllers: J,
      _internalActiveDeferreds: me,
      _internalSetRoutes: oa,
    }),
    F
  );
}
function GS(n) {
  return (
    n != null &&
    (("formData" in n && n.formData != null) ||
      ("body" in n && n.body !== void 0))
  );
}
function zd(n, r, o, l, s, f, d, v) {
  let h, m;
  if (d) {
    h = [];
    for (let y of r)
      if ((h.push(y), y.route.id === d)) {
        m = y;
        break;
      }
  } else (h = r), (m = r[r.length - 1]);
  let p = Oc(s || ".", _c(h, f), Ua(n.pathname, o) || n.pathname, v === "path");
  if (
    (s == null && ((p.search = n.search), (p.hash = n.hash)),
    (s == null || s === "" || s === ".") && m)
  ) {
    let y = jh(p.search);
    if (m.route.index && !y)
      p.search = p.search ? p.search.replace(/^\?/, "?index&") : "?index";
    else if (!m.route.index && y) {
      let b = new URLSearchParams(p.search),
        T = b.getAll("index");
      b.delete("index"),
        T.filter((O) => O).forEach((O) => b.append("index", O));
      let w = b.toString();
      p.search = w ? "?" + w : "";
    }
  }
  return (
    l &&
      o !== "/" &&
      (p.pathname = p.pathname === "/" ? o : Ha([o, p.pathname])),
    Wr(p)
  );
}
function Pp(n, r, o, l) {
  if (!l || !GS(l)) return { path: o };
  if (l.formMethod && !nC(l.formMethod))
    return { path: o, error: gn(405, { method: l.formMethod }) };
  let s = () => ({ path: o, error: gn(400, { type: "invalid-body" }) }),
    f = l.formMethod || "get",
    d = n ? f.toUpperCase() : f.toLowerCase(),
    v = My(o);
  if (l.body !== void 0) {
    if (l.formEncType === "text/plain") {
      if (!ta(d)) return s();
      let b =
        typeof l.body == "string"
          ? l.body
          : l.body instanceof FormData || l.body instanceof URLSearchParams
          ? Array.from(l.body.entries()).reduce((T, w) => {
              let [O, E] = w;
              return (
                "" +
                T +
                O +
                "=" +
                E +
                `
`
              );
            }, "")
          : String(l.body);
      return {
        path: o,
        submission: {
          formMethod: d,
          formAction: v,
          formEncType: l.formEncType,
          formData: void 0,
          json: void 0,
          text: b,
        },
      };
    } else if (l.formEncType === "application/json") {
      if (!ta(d)) return s();
      try {
        let b = typeof l.body == "string" ? JSON.parse(l.body) : l.body;
        return {
          path: o,
          submission: {
            formMethod: d,
            formAction: v,
            formEncType: l.formEncType,
            formData: void 0,
            json: b,
            text: void 0,
          },
        };
      } catch {
        return s();
      }
    }
  }
  Me(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let h, m;
  if (l.formData) (h = Hd(l.formData)), (m = l.formData);
  else if (l.body instanceof FormData) (h = Hd(l.body)), (m = l.body);
  else if (l.body instanceof URLSearchParams) (h = l.body), (m = Yp(h));
  else if (l.body == null) (h = new URLSearchParams()), (m = new FormData());
  else
    try {
      (h = new URLSearchParams(l.body)), (m = Yp(h));
    } catch {
      return s();
    }
  let p = {
    formMethod: d,
    formAction: v,
    formEncType: (l && l.formEncType) || "application/x-www-form-urlencoded",
    formData: m,
    json: void 0,
    text: void 0,
  };
  if (ta(p.formMethod)) return { path: o, submission: p };
  let y = Cr(o);
  return (
    r && y.search && jh(y.search) && h.append("index", ""),
    (y.search = "?" + h),
    { path: Wr(y), submission: p }
  );
}
function qp(n, r, o) {
  o === void 0 && (o = !1);
  let l = n.findIndex((s) => s.route.id === r);
  return l >= 0 ? n.slice(0, o ? l + 1 : l) : n;
}
function Vp(n, r, o, l, s, f, d, v, h, m, p, y, b, T, w, O) {
  let E = O ? (jn(O[1]) ? O[1].error : O[1].data) : void 0,
    H = n.createURL(r.location),
    j = n.createURL(s),
    D = o;
  f && r.errors
    ? (D = qp(o, Object.keys(r.errors)[0], !0))
    : O && jn(O[1]) && (D = qp(o, O[0]));
  let U = O ? O[1].statusCode : void 0,
    R = d && U && U >= 400,
    F = D.filter((q, K) => {
      let { route: B } = q;
      if (B.lazy) return !0;
      if (B.loader == null) return !1;
      if (f) return Ld(B, r.loaderData, r.errors);
      if (
        XS(r.loaderData, r.matches[K], q) ||
        h.some((ee) => ee === q.route.id)
      )
        return !0;
      let $ = r.matches[K],
        k = q;
      return kp(
        q,
        bt(
          {
            currentUrl: H,
            currentParams: $.params,
            nextUrl: j,
            nextParams: k.params,
          },
          l,
          {
            actionResult: E,
            actionStatus: U,
            defaultShouldRevalidate: R
              ? !1
              : v ||
                H.pathname + H.search === j.pathname + j.search ||
                H.search !== j.search ||
                Ay($, k),
          }
        )
      );
    }),
    _ = [];
  return (
    y.forEach((q, K) => {
      if (f || !o.some((te) => te.route.id === q.routeId) || p.has(K)) return;
      let B = kr(T, q.path, w);
      if (!B) {
        _.push({
          key: K,
          routeId: q.routeId,
          path: q.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let $ = r.fetchers.get(K),
        k = ii(B, q.path),
        ee = !1;
      b.has(K)
        ? (ee = !1)
        : m.has(K)
        ? (m.delete(K), (ee = !0))
        : $ && $.state !== "idle" && $.data === void 0
        ? (ee = v)
        : (ee = kp(
            k,
            bt(
              {
                currentUrl: H,
                currentParams: r.matches[r.matches.length - 1].params,
                nextUrl: j,
                nextParams: o[o.length - 1].params,
              },
              l,
              {
                actionResult: E,
                actionStatus: U,
                defaultShouldRevalidate: R ? !1 : v,
              }
            )
          )),
        ee &&
          _.push({
            key: K,
            routeId: q.routeId,
            path: q.path,
            matches: B,
            match: k,
            controller: new AbortController(),
          });
    }),
    [F, _]
  );
}
function Ld(n, r, o) {
  if (n.lazy) return !0;
  if (!n.loader) return !1;
  let l = r != null && r[n.id] !== void 0,
    s = o != null && o[n.id] !== void 0;
  return !l && s
    ? !1
    : typeof n.loader == "function" && n.loader.hydrate === !0
    ? !0
    : !l && !s;
}
function XS(n, r, o) {
  let l = !r || o.route.id !== r.route.id,
    s = n[o.route.id] === void 0;
  return l || s;
}
function Ay(n, r) {
  let o = n.route.path;
  return (
    n.pathname !== r.pathname ||
    (o != null && o.endsWith("*") && n.params["*"] !== r.params["*"])
  );
}
function kp(n, r) {
  if (n.route.shouldRevalidate) {
    let o = n.route.shouldRevalidate(r);
    if (typeof o == "boolean") return o;
  }
  return r.defaultShouldRevalidate;
}
function Gp(n, r, o, l, s) {
  var f;
  let d;
  if (n) {
    let m = l[n];
    Me(m, "No route found to patch children into: routeId = " + n),
      m.children || (m.children = []),
      (d = m.children);
  } else d = o;
  let v = r.filter((m) => !d.some((p) => Ny(m, p))),
    h = ic(
      v,
      s,
      [n || "_", "patch", String(((f = d) == null ? void 0 : f.length) || "0")],
      l
    );
  d.push(...h);
}
function Ny(n, r) {
  return "id" in n && "id" in r && n.id === r.id
    ? !0
    : n.index === r.index &&
      n.path === r.path &&
      n.caseSensitive === r.caseSensitive
    ? (!n.children || n.children.length === 0) &&
      (!r.children || r.children.length === 0)
      ? !0
      : n.children.every((o, l) => {
          var s;
          return (s = r.children) == null ? void 0 : s.some((f) => Ny(o, f));
        })
    : !1;
}
async function YS(n, r, o) {
  if (!n.lazy) return;
  let l = await n.lazy();
  if (!n.lazy) return;
  let s = o[n.id];
  Me(s, "No route found in manifest");
  let f = {};
  for (let d in l) {
    let h = s[d] !== void 0 && d !== "hasErrorBoundary";
    Xl(
      !h,
      'Route "' +
        s.id +
        '" has a static property "' +
        d +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + d + '" will be ignored.')
    ),
      !h && !pS.has(d) && (f[d] = l[d]);
  }
  Object.assign(s, f), Object.assign(s, bt({}, r(s), { lazy: void 0 }));
}
async function FS(n) {
  let { matches: r } = n,
    o = r.filter((s) => s.shouldLoad);
  return (await Promise.all(o.map((s) => s.resolve()))).reduce(
    (s, f, d) => Object.assign(s, { [o[d].route.id]: f }),
    {}
  );
}
async function IS(n, r, o, l, s, f, d, v, h, m) {
  let p = f.map((T) => (T.route.lazy ? YS(T.route, h, v) : void 0)),
    y = f.map((T, w) => {
      let O = p[w],
        E = s.some((j) => j.route.id === T.route.id);
      return bt({}, T, {
        shouldLoad: E,
        resolve: async (j) => (
          j &&
            l.method === "GET" &&
            (T.route.lazy || T.route.loader) &&
            (E = !0),
          E
            ? QS(r, l, T, O, j, m)
            : Promise.resolve({ type: at.data, result: void 0 })
        ),
      });
    }),
    b = await n({
      matches: y,
      request: l,
      params: f[0].params,
      fetcherKey: d,
      context: m,
    });
  try {
    await Promise.all(p);
  } catch {}
  return b;
}
async function QS(n, r, o, l, s, f) {
  let d,
    v,
    h = (m) => {
      let p,
        y = new Promise((w, O) => (p = O));
      (v = () => p()), r.signal.addEventListener("abort", v);
      let b = (w) =>
          typeof m != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + n + '" [routeId: ' + o.route.id + "]")
                )
              )
            : m(
                { request: r, params: o.params, context: f },
                ...(w !== void 0 ? [w] : [])
              ),
        T = (async () => {
          try {
            return { type: "data", result: await (s ? s((O) => b(O)) : b()) };
          } catch (w) {
            return { type: "error", result: w };
          }
        })();
      return Promise.race([T, y]);
    };
  try {
    let m = o.route[n];
    if (l)
      if (m) {
        let p,
          [y] = await Promise.all([
            h(m).catch((b) => {
              p = b;
            }),
            l,
          ]);
        if (p !== void 0) throw p;
        d = y;
      } else if ((await l, (m = o.route[n]), m)) d = await h(m);
      else if (n === "action") {
        let p = new URL(r.url),
          y = p.pathname + p.search;
        throw gn(405, { method: r.method, pathname: y, routeId: o.route.id });
      } else return { type: at.data, result: void 0 };
    else if (m) d = await h(m);
    else {
      let p = new URL(r.url),
        y = p.pathname + p.search;
      throw gn(404, { pathname: y });
    }
    Me(
      d.result !== void 0,
      "You defined " +
        (n === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          o.route.id +
          "\" but didn't return anything from your `" +
          n +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (m) {
    return { type: at.error, result: m };
  } finally {
    v && r.signal.removeEventListener("abort", v);
  }
  return d;
}
async function ZS(n) {
  let { result: r, type: o } = n;
  if (Dy(r)) {
    let y;
    try {
      let b = r.headers.get("Content-Type");
      b && /\bapplication\/json\b/.test(b)
        ? r.body == null
          ? (y = null)
          : (y = await r.json())
        : (y = await r.text());
    } catch (b) {
      return { type: at.error, error: b };
    }
    return o === at.error
      ? {
          type: at.error,
          error: new cc(r.status, r.statusText, y),
          statusCode: r.status,
          headers: r.headers,
        }
      : { type: at.data, data: y, statusCode: r.status, headers: r.headers };
  }
  if (o === at.error) {
    if (Kp(r)) {
      var l, s;
      if (r.data instanceof Error) {
        var f, d;
        return {
          type: at.error,
          error: r.data,
          statusCode: (f = r.init) == null ? void 0 : f.status,
          headers:
            (d = r.init) != null && d.headers
              ? new Headers(r.init.headers)
              : void 0,
        };
      }
      return {
        type: at.error,
        error: new cc(
          ((l = r.init) == null ? void 0 : l.status) || 500,
          void 0,
          r.data
        ),
        statusCode: mi(r) ? r.status : void 0,
        headers:
          (s = r.init) != null && s.headers
            ? new Headers(r.init.headers)
            : void 0,
      };
    }
    return { type: at.error, error: r, statusCode: mi(r) ? r.status : void 0 };
  }
  if (tC(r)) {
    var v, h;
    return {
      type: at.deferred,
      deferredData: r,
      statusCode: (v = r.init) == null ? void 0 : v.status,
      headers:
        ((h = r.init) == null ? void 0 : h.headers) &&
        new Headers(r.init.headers),
    };
  }
  if (Kp(r)) {
    var m, p;
    return {
      type: at.data,
      data: r.data,
      statusCode: (m = r.init) == null ? void 0 : m.status,
      headers:
        (p = r.init) != null && p.headers
          ? new Headers(r.init.headers)
          : void 0,
    };
  }
  return { type: at.data, data: r };
}
function KS(n, r, o, l, s, f) {
  let d = n.headers.get("Location");
  if (
    (Me(
      d,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !Oh.test(d))
  ) {
    let v = l.slice(0, l.findIndex((h) => h.route.id === o) + 1);
    (d = zd(new URL(r.url), v, s, !0, d, f)), n.headers.set("Location", d);
  }
  return n;
}
function Xp(n, r, o) {
  if (Oh.test(n)) {
    let l = n,
      s = l.startsWith("//") ? new URL(r.protocol + l) : new URL(l),
      f = Ua(s.pathname, o) != null;
    if (s.origin === r.origin && f) return s.pathname + s.search + s.hash;
  }
  return n;
}
function Ul(n, r, o, l) {
  let s = n.createURL(My(r)).toString(),
    f = { signal: o };
  if (l && ta(l.formMethod)) {
    let { formMethod: d, formEncType: v } = l;
    (f.method = d.toUpperCase()),
      v === "application/json"
        ? ((f.headers = new Headers({ "Content-Type": v })),
          (f.body = JSON.stringify(l.json)))
        : v === "text/plain"
        ? (f.body = l.text)
        : v === "application/x-www-form-urlencoded" && l.formData
        ? (f.body = Hd(l.formData))
        : (f.body = l.formData);
  }
  return new Request(s, f);
}
function Hd(n) {
  let r = new URLSearchParams();
  for (let [o, l] of n.entries())
    r.append(o, typeof l == "string" ? l : l.name);
  return r;
}
function Yp(n) {
  let r = new FormData();
  for (let [o, l] of n.entries()) r.append(o, l);
  return r;
}
function JS(n, r, o, l, s) {
  let f = {},
    d = null,
    v,
    h = !1,
    m = {},
    p = o && jn(o[1]) ? o[1].error : void 0;
  return (
    n.forEach((y) => {
      if (!(y.route.id in r)) return;
      let b = y.route.id,
        T = r[b];
      if (
        (Me(!Yr(T), "Cannot handle redirect results in processLoaderData"),
        jn(T))
      ) {
        let w = T.error;
        p !== void 0 && ((w = p), (p = void 0)), (d = d || {});
        {
          let O = Gr(n, b);
          d[O.route.id] == null && (d[O.route.id] = w);
        }
        (f[b] = void 0),
          h || ((h = !0), (v = mi(T.error) ? T.error.status : 500)),
          T.headers && (m[b] = T.headers);
      } else
        br(T)
          ? (l.set(b, T.deferredData),
            (f[b] = T.deferredData.data),
            T.statusCode != null &&
              T.statusCode !== 200 &&
              !h &&
              (v = T.statusCode),
            T.headers && (m[b] = T.headers))
          : ((f[b] = T.data),
            T.statusCode && T.statusCode !== 200 && !h && (v = T.statusCode),
            T.headers && (m[b] = T.headers));
    }),
    p !== void 0 && o && ((d = { [o[0]]: p }), (f[o[0]] = void 0)),
    { loaderData: f, errors: d, statusCode: v || 200, loaderHeaders: m }
  );
}
function Fp(n, r, o, l, s, f, d) {
  let { loaderData: v, errors: h } = JS(r, o, l, d);
  return (
    s.forEach((m) => {
      let { key: p, match: y, controller: b } = m,
        T = f[p];
      if (
        (Me(T, "Did not find corresponding fetcher result"),
        !(b && b.signal.aborted))
      )
        if (jn(T)) {
          let w = Gr(n.matches, y == null ? void 0 : y.route.id);
          (h && h[w.route.id]) || (h = bt({}, h, { [w.route.id]: T.error })),
            n.fetchers.delete(p);
        } else if (Yr(T)) Me(!1, "Unhandled fetcher revalidation redirect");
        else if (br(T)) Me(!1, "Unhandled fetcher deferred data");
        else {
          let w = gr(T.data);
          n.fetchers.set(p, w);
        }
    }),
    { loaderData: v, errors: h }
  );
}
function Ip(n, r, o, l) {
  let s = bt({}, r);
  for (let f of o) {
    let d = f.route.id;
    if (
      (r.hasOwnProperty(d)
        ? r[d] !== void 0 && (s[d] = r[d])
        : n[d] !== void 0 && f.route.loader && (s[d] = n[d]),
      l && l.hasOwnProperty(d))
    )
      break;
  }
  return s;
}
function Qp(n) {
  return n
    ? jn(n[1])
      ? { actionData: {} }
      : { actionData: { [n[0]]: n[1].data } }
    : {};
}
function Gr(n, r) {
  return (
    (r ? n.slice(0, n.findIndex((l) => l.route.id === r) + 1) : [...n])
      .reverse()
      .find((l) => l.route.hasErrorBoundary === !0) || n[0]
  );
}
function Zp(n) {
  let r =
    n.length === 1
      ? n[0]
      : n.find((o) => o.index || !o.path || o.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: r }],
    route: r,
  };
}
function gn(n, r) {
  let {
      pathname: o,
      routeId: l,
      method: s,
      type: f,
      message: d,
    } = r === void 0 ? {} : r,
    v = "Unknown Server Error",
    h = "Unknown @remix-run/router error";
  return (
    n === 400
      ? ((v = "Bad Request"),
        s && o && l
          ? (h =
              "You made a " +
              s +
              ' request to "' +
              o +
              '" but ' +
              ('did not provide a `loader` for route "' + l + '", ') +
              "so there is no way to handle the request.")
          : f === "defer-action"
          ? (h = "defer() is not supported in actions")
          : f === "invalid-body" && (h = "Unable to encode submission body"))
      : n === 403
      ? ((v = "Forbidden"),
        (h = 'Route "' + l + '" does not match URL "' + o + '"'))
      : n === 404
      ? ((v = "Not Found"), (h = 'No route matches URL "' + o + '"'))
      : n === 405 &&
        ((v = "Method Not Allowed"),
        s && o && l
          ? (h =
              "You made a " +
              s.toUpperCase() +
              ' request to "' +
              o +
              '" but ' +
              ('did not provide an `action` for route "' + l + '", ') +
              "so there is no way to handle the request.")
          : s && (h = 'Invalid request method "' + s.toUpperCase() + '"')),
    new cc(n || 500, v, new Error(h), !0)
  );
}
function Vs(n) {
  let r = Object.entries(n);
  for (let o = r.length - 1; o >= 0; o--) {
    let [l, s] = r[o];
    if (Yr(s)) return { key: l, result: s };
  }
}
function My(n) {
  let r = typeof n == "string" ? Cr(n) : n;
  return Wr(bt({}, r, { hash: "" }));
}
function WS(n, r) {
  return n.pathname !== r.pathname || n.search !== r.search
    ? !1
    : n.hash === ""
    ? r.hash !== ""
    : n.hash === r.hash
    ? !0
    : r.hash !== "";
}
function eC(n) {
  return Dy(n.result) && $S.has(n.result.status);
}
function br(n) {
  return n.type === at.deferred;
}
function jn(n) {
  return n.type === at.error;
}
function Yr(n) {
  return (n && n.type) === at.redirect;
}
function Kp(n) {
  return (
    typeof n == "object" &&
    n != null &&
    "type" in n &&
    "data" in n &&
    "init" in n &&
    n.type === "DataWithResponseInit"
  );
}
function tC(n) {
  let r = n;
  return (
    r &&
    typeof r == "object" &&
    typeof r.data == "object" &&
    typeof r.subscribe == "function" &&
    typeof r.cancel == "function" &&
    typeof r.resolveData == "function"
  );
}
function Dy(n) {
  return (
    n != null &&
    typeof n.status == "number" &&
    typeof n.statusText == "string" &&
    typeof n.headers == "object" &&
    typeof n.body < "u"
  );
}
function nC(n) {
  return US.has(n.toLowerCase());
}
function ta(n) {
  return HS.has(n.toLowerCase());
}
async function aC(n, r, o, l, s) {
  let f = Object.entries(r);
  for (let d = 0; d < f.length; d++) {
    let [v, h] = f[d],
      m = n.find((b) => (b == null ? void 0 : b.route.id) === v);
    if (!m) continue;
    let p = l.find((b) => b.route.id === m.route.id),
      y = p != null && !Ay(p, m) && (s && s[m.route.id]) !== void 0;
    br(h) &&
      y &&
      (await wh(h, o, !1).then((b) => {
        b && (r[v] = b);
      }));
  }
}
async function rC(n, r, o) {
  for (let l = 0; l < o.length; l++) {
    let { key: s, routeId: f, controller: d } = o[l],
      v = r[s];
    n.find((m) => (m == null ? void 0 : m.route.id) === f) &&
      br(v) &&
      (Me(
        d,
        "Expected an AbortController for revalidating fetcher deferred result"
      ),
      await wh(v, d.signal, !0).then((m) => {
        m && (r[s] = m);
      }));
  }
}
async function wh(n, r, o) {
  if ((o === void 0 && (o = !1), !(await n.deferredData.resolveData(r)))) {
    if (o)
      try {
        return { type: at.data, data: n.deferredData.unwrappedData };
      } catch (s) {
        return { type: at.error, error: s };
      }
    return { type: at.data, data: n.deferredData.data };
  }
}
function jh(n) {
  return new URLSearchParams(n).getAll("index").some((r) => r === "");
}
function ii(n, r) {
  let o = typeof r == "string" ? Cr(r).search : r.search;
  if (n[n.length - 1].route.index && jh(o || "")) return n[n.length - 1];
  let l = wy(n);
  return l[l.length - 1];
}
function Jp(n) {
  let {
    formMethod: r,
    formAction: o,
    formEncType: l,
    text: s,
    formData: f,
    json: d,
  } = n;
  if (!(!r || !o || !l)) {
    if (s != null)
      return {
        formMethod: r,
        formAction: o,
        formEncType: l,
        formData: void 0,
        json: void 0,
        text: s,
      };
    if (f != null)
      return {
        formMethod: r,
        formAction: o,
        formEncType: l,
        formData: f,
        json: void 0,
        text: void 0,
      };
    if (d !== void 0)
      return {
        formMethod: r,
        formAction: o,
        formEncType: l,
        formData: void 0,
        json: d,
        text: void 0,
      };
  }
}
function nd(n, r) {
  return r
    ? {
        state: "loading",
        location: n,
        formMethod: r.formMethod,
        formAction: r.formAction,
        formEncType: r.formEncType,
        formData: r.formData,
        json: r.json,
        text: r.text,
      }
    : {
        state: "loading",
        location: n,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function lC(n, r) {
  return {
    state: "submitting",
    location: n,
    formMethod: r.formMethod,
    formAction: r.formAction,
    formEncType: r.formEncType,
    formData: r.formData,
    json: r.json,
    text: r.text,
  };
}
function ti(n, r) {
  return n
    ? {
        state: "loading",
        formMethod: n.formMethod,
        formAction: n.formAction,
        formEncType: n.formEncType,
        formData: n.formData,
        json: n.json,
        text: n.text,
        data: r,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: r,
      };
}
function oC(n, r) {
  return {
    state: "submitting",
    formMethod: n.formMethod,
    formAction: n.formAction,
    formEncType: n.formEncType,
    formData: n.formData,
    json: n.json,
    text: n.text,
    data: r ? r.data : void 0,
  };
}
function gr(n) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: n,
  };
}
function iC(n, r) {
  try {
    let o = n.sessionStorage.getItem(Ry);
    if (o) {
      let l = JSON.parse(o);
      for (let [s, f] of Object.entries(l || {}))
        f && Array.isArray(f) && r.set(s, new Set(f || []));
    }
  } catch {}
}
function sC(n, r) {
  if (r.size > 0) {
    let o = {};
    for (let [l, s] of r) o[l] = [...s];
    try {
      n.sessionStorage.setItem(Ry, JSON.stringify(o));
    } catch (l) {
      Xl(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + l + ")."
      );
    }
  }
}
/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function uc() {
  return (
    (uc = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            for (var l in o)
              Object.prototype.hasOwnProperty.call(o, l) && (n[l] = o[l]);
          }
          return n;
        }),
    uc.apply(this, arguments)
  );
}
const Oi = x.createContext(null),
  Rh = x.createContext(null),
  Pa = x.createContext(null),
  Ah = x.createContext(null),
  qa = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  zy = x.createContext(null);
function cC(n, r) {
  let { relative: o } = r === void 0 ? {} : r;
  Wl() || Me(!1);
  let { basename: l, navigator: s } = x.useContext(Pa),
    { hash: f, pathname: d, search: v } = wc(n, { relative: o }),
    h = d;
  return (
    l !== "/" && (h = d === "/" ? l : Ha([l, d])),
    s.createHref({ pathname: h, search: v, hash: f })
  );
}
function Wl() {
  return x.useContext(Ah) != null;
}
function Va() {
  return Wl() || Me(!1), x.useContext(Ah).location;
}
function Ly(n) {
  x.useContext(Pa).static || x.useLayoutEffect(n);
}
function Er() {
  let { isDataRoute: n } = x.useContext(qa);
  return n ? EC() : uC();
}
function uC() {
  Wl() || Me(!1);
  let n = x.useContext(Oi),
    { basename: r, future: o, navigator: l } = x.useContext(Pa),
    { matches: s } = x.useContext(qa),
    { pathname: f } = Va(),
    d = JSON.stringify(_c(s, o.v7_relativeSplatPath)),
    v = x.useRef(!1);
  return (
    Ly(() => {
      v.current = !0;
    }),
    x.useCallback(
      function (m, p) {
        if ((p === void 0 && (p = {}), !v.current)) return;
        if (typeof m == "number") {
          l.go(m);
          return;
        }
        let y = Oc(m, JSON.parse(d), f, p.relative === "path");
        n == null &&
          r !== "/" &&
          (y.pathname = y.pathname === "/" ? r : Ha([r, y.pathname])),
          (p.replace ? l.replace : l.push)(y, p.state, p);
      },
      [r, l, d, f, n]
    )
  );
}
const fC = x.createContext(null);
function dC(n) {
  let r = x.useContext(qa).outlet;
  return r && x.createElement(fC.Provider, { value: n }, r);
}
function wc(n, r) {
  let { relative: o } = r === void 0 ? {} : r,
    { future: l } = x.useContext(Pa),
    { matches: s } = x.useContext(qa),
    { pathname: f } = Va(),
    d = JSON.stringify(_c(s, l.v7_relativeSplatPath));
  return x.useMemo(() => Oc(n, JSON.parse(d), f, o === "path"), [n, d, f, o]);
}
function hC(n, r, o, l) {
  Wl() || Me(!1);
  let { navigator: s, static: f } = x.useContext(Pa),
    { matches: d } = x.useContext(qa),
    v = d[d.length - 1],
    h = v ? v.params : {};
  v && v.pathname;
  let m = v ? v.pathnameBase : "/";
  v && v.route;
  let p = Va(),
    y;
  y = p;
  let b = y.pathname || "/",
    T = b;
  if (m !== "/") {
    let E = m.replace(/^\//, "").split("/");
    T = "/" + b.replace(/^\//, "").split("/").slice(E.length).join("/");
  }
  let w =
    !f && o && o.matches && o.matches.length > 0
      ? o.matches
      : kr(n, { pathname: T });
  return yC(
    w &&
      w.map((E) =>
        Object.assign({}, E, {
          params: Object.assign({}, h, E.params),
          pathname: Ha([
            m,
            s.encodeLocation
              ? s.encodeLocation(E.pathname).pathname
              : E.pathname,
          ]),
          pathnameBase:
            E.pathnameBase === "/"
              ? m
              : Ha([
                  m,
                  s.encodeLocation
                    ? s.encodeLocation(E.pathnameBase).pathname
                    : E.pathnameBase,
                ]),
        })
      ),
    d,
    o,
    l
  );
}
function mC() {
  let n = CC(),
    r = mi(n)
      ? n.status + " " + n.statusText
      : n instanceof Error
      ? n.message
      : JSON.stringify(n),
    o = n instanceof Error ? n.stack : null,
    s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unexpected Application Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, r),
    o ? x.createElement("pre", { style: s }, o) : null,
    null
  );
}
const vC = x.createElement(mC, null);
class pC extends x.Component {
  constructor(r) {
    super(r),
      (this.state = {
        location: r.location,
        revalidation: r.revalidation,
        error: r.error,
      });
  }
  static getDerivedStateFromError(r) {
    return { error: r };
  }
  static getDerivedStateFromProps(r, o) {
    return o.location !== r.location ||
      (o.revalidation !== "idle" && r.revalidation === "idle")
      ? { error: r.error, location: r.location, revalidation: r.revalidation }
      : {
          error: r.error !== void 0 ? r.error : o.error,
          location: o.location,
          revalidation: r.revalidation || o.revalidation,
        };
  }
  componentDidCatch(r, o) {
    console.error(
      "React Router caught the following error during render",
      r,
      o
    );
  }
  render() {
    return this.state.error !== void 0
      ? x.createElement(
          qa.Provider,
          { value: this.props.routeContext },
          x.createElement(zy.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function gC(n) {
  let { routeContext: r, match: o, children: l } = n,
    s = x.useContext(Oi);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (o.route.errorElement || o.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = o.route.id),
    x.createElement(qa.Provider, { value: r }, l)
  );
}
function yC(n, r, o, l) {
  var s;
  if (
    (r === void 0 && (r = []),
    o === void 0 && (o = null),
    l === void 0 && (l = null),
    n == null)
  ) {
    var f;
    if (!o) return null;
    if (o.errors) n = o.matches;
    else if (
      (f = l) != null &&
      f.v7_partialHydration &&
      r.length === 0 &&
      !o.initialized &&
      o.matches.length > 0
    )
      n = o.matches;
    else return null;
  }
  let d = n,
    v = (s = o) == null ? void 0 : s.errors;
  if (v != null) {
    let p = d.findIndex(
      (y) => y.route.id && (v == null ? void 0 : v[y.route.id]) !== void 0
    );
    p >= 0 || Me(!1), (d = d.slice(0, Math.min(d.length, p + 1)));
  }
  let h = !1,
    m = -1;
  if (o && l && l.v7_partialHydration)
    for (let p = 0; p < d.length; p++) {
      let y = d[p];
      if (
        ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (m = p),
        y.route.id)
      ) {
        let { loaderData: b, errors: T } = o,
          w =
            y.route.loader &&
            b[y.route.id] === void 0 &&
            (!T || T[y.route.id] === void 0);
        if (y.route.lazy || w) {
          (h = !0), m >= 0 ? (d = d.slice(0, m + 1)) : (d = [d[0]]);
          break;
        }
      }
    }
  return d.reduceRight((p, y, b) => {
    let T,
      w = !1,
      O = null,
      E = null;
    o &&
      ((T = v && y.route.id ? v[y.route.id] : void 0),
      (O = y.route.errorElement || vC),
      h &&
        (m < 0 && b === 0
          ? (TC("route-fallback"), (w = !0), (E = null))
          : m === b &&
            ((w = !0), (E = y.route.hydrateFallbackElement || null))));
    let H = r.concat(d.slice(0, b + 1)),
      j = () => {
        let D;
        return (
          T
            ? (D = O)
            : w
            ? (D = E)
            : y.route.Component
            ? (D = x.createElement(y.route.Component, null))
            : y.route.element
            ? (D = y.route.element)
            : (D = p),
          x.createElement(gC, {
            match: y,
            routeContext: { outlet: p, matches: H, isDataRoute: o != null },
            children: D,
          })
        );
      };
    return o && (y.route.ErrorBoundary || y.route.errorElement || b === 0)
      ? x.createElement(pC, {
          location: o.location,
          revalidation: o.revalidation,
          component: O,
          error: T,
          children: j(),
          routeContext: { outlet: null, matches: H, isDataRoute: !0 },
        })
      : j();
  }, null);
}
var Hy = (function (n) {
    return (
      (n.UseBlocker = "useBlocker"),
      (n.UseRevalidator = "useRevalidator"),
      (n.UseNavigateStable = "useNavigate"),
      n
    );
  })(Hy || {}),
  By = (function (n) {
    return (
      (n.UseBlocker = "useBlocker"),
      (n.UseLoaderData = "useLoaderData"),
      (n.UseActionData = "useActionData"),
      (n.UseRouteError = "useRouteError"),
      (n.UseNavigation = "useNavigation"),
      (n.UseRouteLoaderData = "useRouteLoaderData"),
      (n.UseMatches = "useMatches"),
      (n.UseRevalidator = "useRevalidator"),
      (n.UseNavigateStable = "useNavigate"),
      (n.UseRouteId = "useRouteId"),
      n
    );
  })(By || {});
function bC(n) {
  let r = x.useContext(Oi);
  return r || Me(!1), r;
}
function xC(n) {
  let r = x.useContext(Rh);
  return r || Me(!1), r;
}
function SC(n) {
  let r = x.useContext(qa);
  return r || Me(!1), r;
}
function Uy(n) {
  let r = SC(),
    o = r.matches[r.matches.length - 1];
  return o.route.id || Me(!1), o.route.id;
}
function CC() {
  var n;
  let r = x.useContext(zy),
    o = xC(),
    l = Uy();
  return r !== void 0 ? r : (n = o.errors) == null ? void 0 : n[l];
}
function EC() {
  let { router: n } = bC(Hy.UseNavigateStable),
    r = Uy(By.UseNavigateStable),
    o = x.useRef(!1);
  return (
    Ly(() => {
      o.current = !0;
    }),
    x.useCallback(
      function (s, f) {
        f === void 0 && (f = {}),
          o.current &&
            (typeof s == "number"
              ? n.navigate(s)
              : n.navigate(s, uc({ fromRouteId: r }, f)));
      },
      [n, r]
    )
  );
}
const Wp = {};
function TC(n, r, o) {
  Wp[n] || (Wp[n] = !0);
}
function _C(n, r) {
  n == null || n.v7_startTransition,
    (n == null ? void 0 : n.v7_relativeSplatPath) === void 0 &&
      (!r || r.v7_relativeSplatPath),
    r &&
      (r.v7_fetcherPersist,
      r.v7_normalizeFormMethod,
      r.v7_partialHydration,
      r.v7_skipActionErrorRevalidation);
}
function $y(n) {
  let { to: r, replace: o, state: l, relative: s } = n;
  Wl() || Me(!1);
  let { future: f, static: d } = x.useContext(Pa),
    { matches: v } = x.useContext(qa),
    { pathname: h } = Va(),
    m = Er(),
    p = Oc(r, _c(v, f.v7_relativeSplatPath), h, s === "path"),
    y = JSON.stringify(p);
  return (
    x.useEffect(
      () => m(JSON.parse(y), { replace: o, state: l, relative: s }),
      [m, y, s, o, l]
    ),
    null
  );
}
function OC(n) {
  return dC(n.context);
}
function Pt(n) {
  Me(!1);
}
function wC(n) {
  let {
    basename: r = "/",
    children: o = null,
    location: l,
    navigationType: s = Lt.Pop,
    navigator: f,
    static: d = !1,
    future: v,
  } = n;
  Wl() && Me(!1);
  let h = r.replace(/^\/*/, "/"),
    m = x.useMemo(
      () => ({
        basename: h,
        navigator: f,
        static: d,
        future: uc({ v7_relativeSplatPath: !1 }, v),
      }),
      [h, v, f, d]
    );
  typeof l == "string" && (l = Cr(l));
  let {
      pathname: p = "/",
      search: y = "",
      hash: b = "",
      state: T = null,
      key: w = "default",
    } = l,
    O = x.useMemo(() => {
      let E = Ua(p, h);
      return E == null
        ? null
        : {
            location: { pathname: E, search: y, hash: b, state: T, key: w },
            navigationType: s,
          };
    }, [h, p, y, b, T, w, s]);
  return O == null
    ? null
    : x.createElement(
        Pa.Provider,
        { value: m },
        x.createElement(Ah.Provider, { children: o, value: O })
      );
}
new Promise(() => {});
function Bd(n, r) {
  r === void 0 && (r = []);
  let o = [];
  return (
    x.Children.forEach(n, (l, s) => {
      if (!x.isValidElement(l)) return;
      let f = [...r, s];
      if (l.type === x.Fragment) {
        o.push.apply(o, Bd(l.props.children, f));
        return;
      }
      l.type !== Pt && Me(!1), !l.props.index || !l.props.children || Me(!1);
      let d = {
        id: l.props.id || f.join("-"),
        caseSensitive: l.props.caseSensitive,
        element: l.props.element,
        Component: l.props.Component,
        index: l.props.index,
        path: l.props.path,
        loader: l.props.loader,
        action: l.props.action,
        errorElement: l.props.errorElement,
        ErrorBoundary: l.props.ErrorBoundary,
        hasErrorBoundary:
          l.props.ErrorBoundary != null || l.props.errorElement != null,
        shouldRevalidate: l.props.shouldRevalidate,
        handle: l.props.handle,
        lazy: l.props.lazy,
      };
      l.props.children && (d.children = Bd(l.props.children, f)), o.push(d);
    }),
    o
  );
}
function jC(n) {
  let r = {
    hasErrorBoundary: n.ErrorBoundary != null || n.errorElement != null,
  };
  return (
    n.Component &&
      Object.assign(r, {
        element: x.createElement(n.Component),
        Component: void 0,
      }),
    n.HydrateFallback &&
      Object.assign(r, {
        hydrateFallbackElement: x.createElement(n.HydrateFallback),
        HydrateFallback: void 0,
      }),
    n.ErrorBoundary &&
      Object.assign(r, {
        errorElement: x.createElement(n.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    r
  );
}
/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Yl() {
  return (
    (Yl = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            for (var l in o)
              Object.prototype.hasOwnProperty.call(o, l) && (n[l] = o[l]);
          }
          return n;
        }),
    Yl.apply(this, arguments)
  );
}
function Py(n, r) {
  if (n == null) return {};
  var o = {},
    l = Object.keys(n),
    s,
    f;
  for (f = 0; f < l.length; f++)
    (s = l[f]), !(r.indexOf(s) >= 0) && (o[s] = n[s]);
  return o;
}
function RC(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function AC(n, r) {
  return n.button === 0 && (!r || r === "_self") && !RC(n);
}
const NC = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  MC = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "viewTransition",
    "children",
  ],
  DC = "6";
try {
  window.__reactRouterVersion = DC;
} catch {}
function zC(n, r) {
  return kS({
    basename: void 0,
    future: Yl({}, void 0, { v7_prependBasename: !0 }),
    history: hS({ window: void 0 }),
    hydrationData: LC(),
    routes: n,
    mapRouteProperties: jC,
    dataStrategy: void 0,
    patchRoutesOnNavigation: void 0,
    window: void 0,
  }).initialize();
}
function LC() {
  var n;
  let r = (n = window) == null ? void 0 : n.__staticRouterHydrationData;
  return r && r.errors && (r = Yl({}, r, { errors: HC(r.errors) })), r;
}
function HC(n) {
  if (!n) return null;
  let r = Object.entries(n),
    o = {};
  for (let [l, s] of r)
    if (s && s.__type === "RouteErrorResponse")
      o[l] = new cc(s.status, s.statusText, s.data, s.internal === !0);
    else if (s && s.__type === "Error") {
      if (s.__subType) {
        let f = window[s.__subType];
        if (typeof f == "function")
          try {
            let d = new f(s.message);
            (d.stack = ""), (o[l] = d);
          } catch {}
      }
      if (o[l] == null) {
        let f = new Error(s.message);
        (f.stack = ""), (o[l] = f);
      }
    } else o[l] = s;
  return o;
}
const qy = x.createContext({ isTransitioning: !1 }),
  BC = x.createContext(new Map()),
  UC = "startTransition",
  eg = Sc[UC],
  $C = "flushSync",
  tg = Ty[$C];
function PC(n) {
  eg ? eg(n) : n();
}
function ni(n) {
  tg ? tg(n) : n();
}
class qC {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((r, o) => {
        (this.resolve = (l) => {
          this.status === "pending" && ((this.status = "resolved"), r(l));
        }),
          (this.reject = (l) => {
            this.status === "pending" && ((this.status = "rejected"), o(l));
          });
      }));
  }
}
function VC(n) {
  let { fallbackElement: r, router: o, future: l } = n,
    [s, f] = x.useState(o.state),
    [d, v] = x.useState(),
    [h, m] = x.useState({ isTransitioning: !1 }),
    [p, y] = x.useState(),
    [b, T] = x.useState(),
    [w, O] = x.useState(),
    E = x.useRef(new Map()),
    { v7_startTransition: H } = l || {},
    j = x.useCallback(
      (q) => {
        H ? PC(q) : q();
      },
      [H]
    ),
    D = x.useCallback(
      (q, K) => {
        let { deletedFetchers: B, flushSync: $, viewTransitionOpts: k } = K;
        q.fetchers.forEach((te, se) => {
          te.data !== void 0 && E.current.set(se, te.data);
        }),
          B.forEach((te) => E.current.delete(te));
        let ee =
          o.window == null ||
          o.window.document == null ||
          typeof o.window.document.startViewTransition != "function";
        if (!k || ee) {
          $ ? ni(() => f(q)) : j(() => f(q));
          return;
        }
        if ($) {
          ni(() => {
            b && (p && p.resolve(), b.skipTransition()),
              m({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: k.currentLocation,
                nextLocation: k.nextLocation,
              });
          });
          let te = o.window.document.startViewTransition(() => {
            ni(() => f(q));
          });
          te.finished.finally(() => {
            ni(() => {
              y(void 0), T(void 0), v(void 0), m({ isTransitioning: !1 });
            });
          }),
            ni(() => T(te));
          return;
        }
        b
          ? (p && p.resolve(),
            b.skipTransition(),
            O({
              state: q,
              currentLocation: k.currentLocation,
              nextLocation: k.nextLocation,
            }))
          : (v(q),
            m({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: k.currentLocation,
              nextLocation: k.nextLocation,
            }));
      },
      [o.window, b, p, E, j]
    );
  x.useLayoutEffect(() => o.subscribe(D), [o, D]),
    x.useEffect(() => {
      h.isTransitioning && !h.flushSync && y(new qC());
    }, [h]),
    x.useEffect(() => {
      if (p && d && o.window) {
        let q = d,
          K = p.promise,
          B = o.window.document.startViewTransition(async () => {
            j(() => f(q)), await K;
          });
        B.finished.finally(() => {
          y(void 0), T(void 0), v(void 0), m({ isTransitioning: !1 });
        }),
          T(B);
      }
    }, [j, d, p, o.window]),
    x.useEffect(() => {
      p && d && s.location.key === d.location.key && p.resolve();
    }, [p, b, s.location, d]),
    x.useEffect(() => {
      !h.isTransitioning &&
        w &&
        (v(w.state),
        m({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: w.currentLocation,
          nextLocation: w.nextLocation,
        }),
        O(void 0));
    }, [h.isTransitioning, w]),
    x.useEffect(() => {}, []);
  let U = x.useMemo(
      () => ({
        createHref: o.createHref,
        encodeLocation: o.encodeLocation,
        go: (q) => o.navigate(q),
        push: (q, K, B) =>
          o.navigate(q, {
            state: K,
            preventScrollReset: B == null ? void 0 : B.preventScrollReset,
          }),
        replace: (q, K, B) =>
          o.navigate(q, {
            replace: !0,
            state: K,
            preventScrollReset: B == null ? void 0 : B.preventScrollReset,
          }),
      }),
      [o]
    ),
    R = o.basename || "/",
    F = x.useMemo(
      () => ({ router: o, navigator: U, static: !1, basename: R }),
      [o, U, R]
    ),
    _ = x.useMemo(
      () => ({ v7_relativeSplatPath: o.future.v7_relativeSplatPath }),
      [o.future.v7_relativeSplatPath]
    );
  return (
    x.useEffect(() => _C(l, o.future), [l, o.future]),
    x.createElement(
      x.Fragment,
      null,
      x.createElement(
        Oi.Provider,
        { value: F },
        x.createElement(
          Rh.Provider,
          { value: s },
          x.createElement(
            BC.Provider,
            { value: E.current },
            x.createElement(
              qy.Provider,
              { value: h },
              x.createElement(
                wC,
                {
                  basename: R,
                  location: s.location,
                  navigationType: s.historyAction,
                  navigator: U,
                  future: _,
                },
                s.initialized || o.future.v7_partialHydration
                  ? x.createElement(kC, {
                      routes: o.routes,
                      future: o.future,
                      state: s,
                    })
                  : r
              )
            )
          )
        )
      ),
      null
    )
  );
}
const kC = x.memo(GC);
function GC(n) {
  let { routes: r, future: o, state: l } = n;
  return hC(r, void 0, l, o);
}
const XC =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  YC = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Fl = x.forwardRef(function (r, o) {
    let {
        onClick: l,
        relative: s,
        reloadDocument: f,
        replace: d,
        state: v,
        target: h,
        to: m,
        preventScrollReset: p,
        viewTransition: y,
      } = r,
      b = Py(r, NC),
      { basename: T } = x.useContext(Pa),
      w,
      O = !1;
    if (typeof m == "string" && YC.test(m) && ((w = m), XC))
      try {
        let D = new URL(window.location.href),
          U = m.startsWith("//") ? new URL(D.protocol + m) : new URL(m),
          R = Ua(U.pathname, T);
        U.origin === D.origin && R != null
          ? (m = R + U.search + U.hash)
          : (O = !0);
      } catch {}
    let E = cC(m, { relative: s }),
      H = IC(m, {
        replace: d,
        state: v,
        target: h,
        preventScrollReset: p,
        relative: s,
        viewTransition: y,
      });
    function j(D) {
      l && l(D), D.defaultPrevented || H(D);
    }
    return x.createElement(
      "a",
      Yl({}, b, { href: w || E, onClick: O || f ? l : j, ref: o, target: h })
    );
  }),
  ad = x.forwardRef(function (r, o) {
    let {
        "aria-current": l = "page",
        caseSensitive: s = !1,
        className: f = "",
        end: d = !1,
        style: v,
        to: h,
        viewTransition: m,
        children: p,
      } = r,
      y = Py(r, MC),
      b = wc(h, { relative: y.relative }),
      T = Va(),
      w = x.useContext(Rh),
      { navigator: O, basename: E } = x.useContext(Pa),
      H = w != null && QC(b) && m === !0,
      j = O.encodeLocation ? O.encodeLocation(b).pathname : b.pathname,
      D = T.pathname,
      U =
        w && w.navigation && w.navigation.location
          ? w.navigation.location.pathname
          : null;
    s ||
      ((D = D.toLowerCase()),
      (U = U ? U.toLowerCase() : null),
      (j = j.toLowerCase())),
      U && E && (U = Ua(U, E) || U);
    const R = j !== "/" && j.endsWith("/") ? j.length - 1 : j.length;
    let F = D === j || (!d && D.startsWith(j) && D.charAt(R) === "/"),
      _ =
        U != null &&
        (U === j || (!d && U.startsWith(j) && U.charAt(j.length) === "/")),
      q = { isActive: F, isPending: _, isTransitioning: H },
      K = F ? l : void 0,
      B;
    typeof f == "function"
      ? (B = f(q))
      : (B = [
          f,
          F ? "active" : null,
          _ ? "pending" : null,
          H ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let $ = typeof v == "function" ? v(q) : v;
    return x.createElement(
      Fl,
      Yl({}, y, {
        "aria-current": K,
        className: B,
        ref: o,
        style: $,
        to: h,
        viewTransition: m,
      }),
      typeof p == "function" ? p(q) : p
    );
  });
var Ud;
(function (n) {
  (n.UseScrollRestoration = "useScrollRestoration"),
    (n.UseSubmit = "useSubmit"),
    (n.UseSubmitFetcher = "useSubmitFetcher"),
    (n.UseFetcher = "useFetcher"),
    (n.useViewTransitionState = "useViewTransitionState");
})(Ud || (Ud = {}));
var ng;
(function (n) {
  (n.UseFetcher = "useFetcher"),
    (n.UseFetchers = "useFetchers"),
    (n.UseScrollRestoration = "useScrollRestoration");
})(ng || (ng = {}));
function FC(n) {
  let r = x.useContext(Oi);
  return r || Me(!1), r;
}
function IC(n, r) {
  let {
      target: o,
      replace: l,
      state: s,
      preventScrollReset: f,
      relative: d,
      viewTransition: v,
    } = r === void 0 ? {} : r,
    h = Er(),
    m = Va(),
    p = wc(n, { relative: d });
  return x.useCallback(
    (y) => {
      if (AC(y, o)) {
        y.preventDefault();
        let b = l !== void 0 ? l : Wr(m) === Wr(p);
        h(n, {
          replace: b,
          state: s,
          preventScrollReset: f,
          relative: d,
          viewTransition: v,
        });
      }
    },
    [m, h, p, l, s, o, n, f, d, v]
  );
}
function QC(n, r) {
  r === void 0 && (r = {});
  let o = x.useContext(qy);
  o == null && Me(!1);
  let { basename: l } = FC(Ud.useViewTransitionState),
    s = wc(n, { relative: r.relative });
  if (!o.isTransitioning) return !1;
  let f = Ua(o.currentLocation.pathname, l) || o.currentLocation.pathname,
    d = Ua(o.nextLocation.pathname, l) || o.nextLocation.pathname;
  return sc(s.pathname, d) != null || sc(s.pathname, f) != null;
}
const ZC = () =>
  S.jsxs("nav", {
    className:
      "mt-[48px] mb-5 navbar px-[50px] flex justify-between items-center",
    children: [
      S.jsxs("div", {
        className: "flex items-center relative",
        children: [
          S.jsx("input", {
            type: "text",
            placeholder: "Search",
            className:
              "w-[372px] h-[50px] py-3 px-[40px] bg-[#F4F5F9] border border-[#DBDCDE] rounded-[8px] focus:outline-none focus:ring-0 placeholder:text-[#919191] placeholder:text-sm cursor-pointer text-[#919191]",
          }),
          S.jsx("div", {
            className:
              "absolute left-[12px] top-1/2 -translate-y-1/2 pointer-events-none",
            children: S.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "17",
              height: "17",
              viewBox: "0 0 17 17",
              fill: "none",
              children: S.jsxs("g", {
                opacity: "0.8",
                children: [
                  S.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9.74991 12.7796C12.6606 11.5427 14.0174 8.1805 12.7804 5.26997C11.5434 2.35945 8.18098 1.00274 5.27028 2.23968C2.35958 3.47663 1.0028 6.83882 2.23982 9.74934C3.47683 12.6599 6.83921 14.0166 9.74991 12.7796Z",
                    stroke: "#919191",
                    strokeWidth: "1.2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                  S.jsx("path", {
                    d: "M11.5586 11.5581L15.9999 15.9998",
                    stroke: "#919191",
                    strokeWidth: "1.2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
      S.jsx(Fl, {
        to: "/login",
        className: "flex-shrink-0",
        children: S.jsxs("p", {
          className: "text-[#000] text-base not-italic font-normal leading-6",
          children: [
            "Already have an account?",
            " ",
            S.jsx("span", {
              className:
                "text-[var(--primary)] text-base not-italic font-medium leading-6",
              children: "Log In",
            }),
          ],
        }),
      }),
    ],
  });
var Vy = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  ag = fe.createContext && fe.createContext(Vy),
  KC = ["attr", "size", "title"];
function JC(n, r) {
  if (n == null) return {};
  var o = WC(n, r),
    l,
    s;
  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(n);
    for (s = 0; s < f.length; s++)
      (l = f[s]),
        !(r.indexOf(l) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(n, l) &&
          (o[l] = n[l]);
  }
  return o;
}
function WC(n, r) {
  if (n == null) return {};
  var o = {};
  for (var l in n)
    if (Object.prototype.hasOwnProperty.call(n, l)) {
      if (r.indexOf(l) >= 0) continue;
      o[l] = n[l];
    }
  return o;
}
function fc() {
  return (
    (fc = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            for (var l in o)
              Object.prototype.hasOwnProperty.call(o, l) && (n[l] = o[l]);
          }
          return n;
        }),
    fc.apply(this, arguments)
  );
}
function rg(n, r) {
  var o = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(n);
    r &&
      (l = l.filter(function (s) {
        return Object.getOwnPropertyDescriptor(n, s).enumerable;
      })),
      o.push.apply(o, l);
  }
  return o;
}
function dc(n) {
  for (var r = 1; r < arguments.length; r++) {
    var o = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? rg(Object(o), !0).forEach(function (l) {
          eE(n, l, o[l]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
      : rg(Object(o)).forEach(function (l) {
          Object.defineProperty(n, l, Object.getOwnPropertyDescriptor(o, l));
        });
  }
  return n;
}
function eE(n, r, o) {
  return (
    (r = tE(r)),
    r in n
      ? Object.defineProperty(n, r, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (n[r] = o),
    n
  );
}
function tE(n) {
  var r = nE(n, "string");
  return typeof r == "symbol" ? r : r + "";
}
function nE(n, r) {
  if (typeof n != "object" || !n) return n;
  var o = n[Symbol.toPrimitive];
  if (o !== void 0) {
    var l = o.call(n, r);
    if (typeof l != "object") return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(n);
}
function ky(n) {
  return (
    n &&
    n.map((r, o) =>
      fe.createElement(r.tag, dc({ key: o }, r.attr), ky(r.child))
    )
  );
}
function jc(n) {
  return (r) =>
    fe.createElement(aE, fc({ attr: dc({}, n.attr) }, r), ky(n.child));
}
function aE(n) {
  var r = (o) => {
    var { attr: l, size: s, title: f } = n,
      d = JC(n, KC),
      v = s || o.size || "1em",
      h;
    return (
      o.className && (h = o.className),
      n.className && (h = (h ? h + " " : "") + n.className),
      fe.createElement(
        "svg",
        fc(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          o.attr,
          l,
          d,
          {
            className: h,
            style: dc(dc({ color: n.color || o.color }, o.style), n.style),
            height: v,
            width: v,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        f && fe.createElement("title", null, f),
        n.children
      )
    );
  };
  return ag !== void 0
    ? fe.createElement(ag.Consumer, null, (o) => r(o))
    : r(Vy);
}
function Gy(n) {
  return jc({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z",
        },
        child: [],
      },
    ],
  })(n);
}
function rE(n) {
  return jc({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",
        },
        child: [],
      },
    ],
  })(n);
}
function lE(n) {
  return jc({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M12 0a1.44 1.44 0 0 0-.947.399L.547 10.762a1.26 1.26 0 0 0-.342.808v11.138c0 .768.53 1.292 1.311 1.292h20.968c.78 0 1.311-.522 1.311-1.292V11.57a1.25 1.25 0 0 0-.34-.804L15.68 3.097h-.001L12.947.4A1.454 1.454 0 0 0 12 0Zm0 6.727 6.552 6.456v5.65H5.446v-5.65z",
        },
        child: [],
      },
    ],
  })(n);
}
const lg =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAApFSURBVHgBrZl5kBT1Fcc/091zz87OnqwbkNMFBJErgBgNGCJqhGCMB2qOKkuTsiplxdJS//Ei/qFVHpEoJqailJqUURRCRROLCFje4OIFLHvCsrjr7s7s7NzTM92d1z1g/EN2Z7byq/rV1nZ1/977veP7vu+N65LNPatUl7abSpdlYal+XGYOXC55oMqzIv/P5bJYrWhocr6r4m15w4S7XsasaqAQ7SX72SuEi0MgJ7pUFdNWfgLnfnPby9ZPNHVVeDcLNRBA+XIfhUNvs3jhAvR6H+17n6DKbTFl2gxiwdmMNKygYHlEmMVElvgIhQksy1tNQ88ODncfZeGKC3h155t0tbexZMWFHDnWD74I04MZtN33YfpDYgEmvDQxIKarshO8I23see5eFI+fna+8wJq16/novb1oriLx2ADx6BDHujoIfudsJrc9SefUG3ApKpUuS9zrWNDWr5JdLGRYufpyBvq/tE9h9xvbWHPJ5YQidcycfz6HD3xAX/8w82Y20y4WrTJjzoeVyrHD76SClQWvb9Zy/vXKn1m8ZAW9nZ+gFrO89of7OHFoP80z5tJ58GOSsWG2vbqdS9euIvr6gxCqq1iOVtLRzuLyQ9FSPeQ/3oaleekfOEFNw5kM9fVQEwpxpHUfmf5B3np+C5l0nuO6m7uf2spVG35ET+9bpBu+KwlZPhRZmukoSSUh6PW56fvPI8w49wLWhqJcsf46WqZORtfzWBJnoRktAocSPYEQi9xuzpk7nQdf3MVoz178Vy7HyFN20thRq5VULB8Gcrk0wdopxLoOctdzD5M1FYoeDx6vT+QqFJJZSR4Ns6CjCJjPnDWVwSOfc+6y82grFiuGHOWUi8vZgsA06928+e9/suWm9URH4qKUWQJV05DjTNmGVBdDFMzLowJ6NMqzv7uFxzdvwTf0admyToWdYhuw/MwSG2WGWbj6CgJuD/UhH8NpnZGMTiAUkOpnUhAraeEgmYJBUe7vDfvxCxz97OZfY6SjAjdK2fJwXAxfl5VxlyTGQEergPLn9ESnsP7n97Bm6TwB7D4GdI1jr2/GJSd65/yYtauX88PvLeON977gnmvW0NZ2hDNmSfmTJCsF4vjLsqvcT58ZWqVorrLIgh09k/xptmycTs8T93O0t5vtgwXW/WA55y1dQCaew8xlCDXV0nqwmwPtA1w0+wxmL1yIf85SbvjjFySUBgmL8uJQwVqtOLW4TFySD8gmM1TX1OD2+Qheeh1bd7zDnVv28O4LL6EMDhH219D99kesvPq3/GPXx/hmC7QUdRZ+/2oUxYMqSVIJWagoBtPBKq7feSNZT4R8psiZJzq5cvW5rF0+h0kCxLh8aJEGQqqP265dy1nNNUzVdPkwR89IjscSfyWmBCuPwXKByVLdeAb6JE99uOVq+nCMJ3+xEbWxkVx0GKO23jl58rKVPDJzBlYojNUvFEyzGIkPE/DaiaOVLa+EghXQLV8+R3bFeha0Pk1/OsskQyczPIJPN0hJVdGiI45rLFVwUBfIycvOpunJ5Hh8hp+u5qVUxfWyk9KOVM3WsFw24yvm2XzBo7zgG+WroR5Smm1JU5IyQl9fB7n97xLyh5l35wMUU6MQG8LU3HiHjnPtrTdwfXQ1dapUnHI95vAZKoAZAeqwVJI7zn+WE9sf5bWqfZhNjcT0OPWLlhC+fAPhmWdjxGMU4oOSEG58bpOL3zaYftVGGrSkQLlSPj2U0FAX/OSuaS7F9cuyA9dmM3qBuvkX4jJEsXgHgeZpJA4f5Pi2bbg6OvH6/U5cuvIZdgy4iS37FX65GBVSLimVW0tJUgFZOLWUTIaXp91ES9fdEmcJfPNnU7vqfHyhGgypHC6pw8dSKf5UdROTsimsCcj4Hx90zF7hllrZWEixadZDDI0ksHSdoBYhFGhEkyTp7T3BLdxMk2VbTpmQjJNZrE24ZbBbmqZCkifmbOK2V9cQq91PpHEyjVUe7my6nymulJMQEz3fpluiZrHk4glsu7301AcJu5PkhHbh8eGvayI0aw5+MwNCGqR8TPh8e1XMqE8tdyRAdNfzdG7/PZ7CDFoXz+Ky+ib8DU1055tY1dfNng+eIbBkA8Y5F0MmS8VL2JFWwpnyP1Brg2Q/2Uvbww9w6LNWfFVhZjdP4XDNJXT0NhJOyDjgooW8vuN2qDbI7N1KfdsulBUbyU9djJpKl0/hta8tWAa7EBLqrvXRt2mdA5+RcA3r1l0nVF/HFDg52nGEDdcs5aF770A1b5RqkmDOzEWobo2sVBIO/J1g60skrpAGKpUvuX48e2DHoDa+brblvKJc9+0r8VWfIYlwhiMgJ32IL+AnXFvNhWsuk4qS4LGnn+KdPbtoWTDP0cHeQSGt1Q2TpJ+vJ/Lib6TD85TttLLaTq0uyLF7L8bT0EKxWBCL5AVOInzZ34tXmLVNQo1CP/6AVyyaYaD3MFXhMKpXpVAo4Pd58XhcVIuiWtN0wi/dLjOd8Wc3tu1O0q2xXzQ/3S3NkVB6US6XiAvVSmN3IIl4FE0UlGKOocdwe0tU1Ou17KqIz+tFUV1OCOVyBkMDg6KsiiWjEX/Hh+PKxZksjEMI1YiXYy9vEqF+cZeLVDruVAW7awuH60ilpL6KVgXd7jekZ85lOXNaHUbREOsV5Z0Qpryg60WOdvdQyOXwiKWtD/8mdMzDeITQcbFis+XTbHd+lEwiIUJMfD4PSSlfllkUl+o0TfoOhw4ecN7L5WLyjkpnRxdntUyxORzJ0aRjCVtRQ5opO7mSiaS8b48ShRlKco0l27FgyYDWaTYkD+zFHW5wPtA0mftJjS2Iq4u2UEN4YHJUMlUslx4VK1l88P67NNTWiqUMwpEgeclyPVdwYjcYqiKdTGIIIqihCK7OfSeN9e3y0YqnkuTb+1LVrxLdv1NKjirulQZdhLlURRDHECG6KFigpWU+XR0HyUjiJMXdo9Fu0gWT+IgobhNX29ViLVOeaTJpSNvxKy2pfZ7V8b4E7On7ck5Nt063NL9CouczOwdQFduNGQL+oNPbWlYJfjSPxGhPu8RoiHaZIExt9pCRMKiNVKFLBpuFEp7Z8rzSaOVzeeeitmBDSK/iPT3gfGN49O0v2BMCPZsh6BcFxXLReJKATFadFsGOI/lrGkVmn72I40c7ySkpFs2d7MSeV+LV48xhtFKTKZeS0l2aPYi7XfZ4RL5VZJuu02s4Jg6aiRGHRduWsv9Pi2VUTXGy2J4i2NtOHrdUi68G+5jSaImigo1+L3mpFpmcTraYwzLkezvVXVIqNY8Tg3Zmu2zl0ynGbDvH6os1v4eYjNacjJOrZAWEzaLYwDJOuljmMIY9hykwV6w4IAQhWB0hl82TFQadz2cxcpK9xdJF7K0p9mCpSEEasGS/uNijjg3UjLEKhSAX/aUVZdo8hiXIg3X1DLa3ko32i+CUEwLOTw8CO7lUgmkyvDRkaIRYzcbJvCROTpTMS2eXHY2ROtaOkDCOxkfpl/44cuuzYp3AWCrwX5IoaYg9j6uMAAAAAElFTkSuQmCC",
  og = "/assets/logo-Dvh-_EL-.png",
  oE = () => {
    let [n, r] = x.useState(!1);
    const [o, l] = x.useState("");
    let [s, f] = x.useState(!1),
      [d, v] = x.useState({});
    const h = Va();
    let [m, p] = x.useState(!1);
    return (
      console.log(h.pathname),
      localStorage.setItem("isCompanyRestored", !0),
      x.useEffect(() => {
        let y = localStorage.getItem("logintoken");
        f(!!y), console.log("aaaaa", s);
        const b = JSON.parse(localStorage.getItem("user_data"));
        v(b);
      }, []),
      S.jsxs("div", {
        className: "h-full pt-[48px] sidebar",
        children: [
          S.jsx("div", {
            className: "heading w-full flex justify-center items-center",
            children: S.jsx(ad, {
              to: "/",
              children: S.jsx("img", {
                className: "cursor-pointer",
                src: og,
                alt: og,
              }),
            }),
          }),
          S.jsxs("div", {
            className: "mt-[111px] w-72 h-full flex flex-col justify-between",
            children: [
              S.jsxs("ul", {
                className: "flex flex-col gap-y-[18px]",
                children: [
                  S.jsx("li", {
                    children: S.jsxs(ad, {
                      className: `text-zinc-950/[0.7] text-base not-italic font-medium leading-6 flex items-center gap-2 py-2 pl-[18px] ${
                        n ? "active" : ""
                      }`,
                      to: "/",
                      children: [
                        S.jsx(lE, {}),
                        S.jsx("p", {
                          className: "py-1",
                          children: "Dashboard",
                        }),
                      ],
                    }),
                  }),
                  S.jsx("li", {
                    children: S.jsxs(ad, {
                      className:
                        "text-zinc-950/[0.7] text-base not-italic font-medium leading-6 flex items-center gap-2 py-2 pl-[18px]",
                      to: "/inviteuser",
                      children: [
                        S.jsx(rE, {}),
                        S.jsx("p", {
                          className: "py-1",
                          children: "Invite a User",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              S.jsx("div", {
                className: "mb-[237px] w-full flex justify-center items-center",
                children:
                  s &&
                  S.jsxs("div", {
                    className:
                      "flex w-56 h-[72px] py-3  px-[10px]  items-center gap-3 bg-[var(--primary2)] rounded-[8px] justify-between",
                    children: [
                      S.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          S.jsx("img", {
                            className: "rounded-full",
                            src: lg,
                            alt: lg,
                          }),
                          S.jsxs("div", {
                            className: "flex flex-col gap-[2px]",
                            children: [
                              S.jsx("h3", {
                                className:
                                  "text-[#FFF] text-base not-italic font-medium leading-5 capitalize",
                                children: d == null ? void 0 : d.username,
                              }),
                              S.jsx("p", {
                                className:
                                  "text-[#ABABAB] text-xs not-italic font-medium leading-5 capitalize",
                                children: d == null ? void 0 : d.roles[0],
                              }),
                            ],
                          }),
                        ],
                      }),
                      S.jsxs("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "31",
                        height: "30",
                        viewBox: "0 0 31 30",
                        fill: "none",
                        children: [
                          S.jsx("g", {
                            clipPath: "url(#clip0_419_1955)",
                            children: S.jsx("path", {
                              d: "M26.1066 4.39339C23.2735 1.56029 19.5066 0 15.5 0C11.4932 0 7.72649 1.56029 4.89339 4.39339C2.06029 7.22649 0.5 10.9934 0.5 15C0.5 19.0068 2.06029 22.7735 4.89339 25.6066C7.72649 28.4397 11.4932 30 15.5 30C19.5068 30 23.2735 28.4397 26.1066 25.6066C28.9397 22.7735 30.5 19.0068 30.5 15C30.5 10.9934 28.9397 7.22649 26.1066 4.39339ZM14.6211 5.58609C14.6211 5.10063 15.0145 4.70718 15.5 4.70718C15.9855 4.70718 16.3789 5.10063 16.3789 5.58609V12.1758C16.3789 12.6613 15.9855 13.0547 15.5 13.0547C15.0145 13.0547 14.6211 12.6613 14.6211 12.1758V5.58609ZM21.114 21.5554C19.5661 23.1033 17.5329 23.8772 15.4998 23.8772C13.4668 23.8772 11.4337 23.1033 9.88576 21.5554C6.79036 18.46 6.79036 13.423 9.88576 10.3274C10.2291 9.98428 10.7855 9.98428 11.1288 10.3274C11.4721 10.6705 11.4721 11.2271 11.1288 11.5704C8.71869 13.9806 8.71869 17.9022 11.1288 20.3126C12.3339 21.5174 13.9171 22.1201 15.4998 22.1201C17.0829 22.1203 18.6657 21.5179 19.871 20.3126C22.2811 17.9022 22.2813 13.9806 19.871 11.5704C19.5279 11.2271 19.5279 10.6707 19.8712 10.3274C20.2143 9.98405 20.7707 9.98405 21.114 10.3274C24.2096 13.423 24.2096 18.46 21.114 21.5554Z",
                              fill: "white",
                            }),
                          }),
                          S.jsx("defs", {
                            children: S.jsx("clipPath", {
                              id: "clip0_419_1955",
                              children: S.jsx("rect", {
                                width: "30",
                                height: "30",
                                fill: "white",
                                transform: "translate(0.5)",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
              }),
            ],
          }),
        ],
      })
    );
  },
  iE = () =>
    S.jsx("div", {
      className: "h-full overflow-hidden",
      children: S.jsxs("div", {
        className: "flex items-start h-full",
        children: [
          S.jsx(oE, {}),
          S.jsxs("div", {
            className: "h-full w-full",
            children: [
              S.jsx(ZC, {}),
              S.jsx("div", {
                className: "overflow-scroll h-[90%]",
                children: S.jsx("div", {
                  className: "px-[50px] pt-[35px]",
                  children: S.jsx(OC, {}),
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  ks = {
    position: "bottom-left",
    autoClose: 3e3,
    theme: "colored",
    style: { background: "var(--primary2)", color: "#fff" },
  },
  sE = () => {
    const [n, r] = x.useState([]),
      [o, l] = x.useState(!0),
      s = async () => {
        const f = localStorage.getItem("auth_token");
        if (!f) {
          Oe.error("Authentication token missing.", ks), l(!1);
          return;
        }
        try {
          const v = await (
            await fetch(
              "https://4amitest-bli6.wp1.sh/wp-json/custom/v1/company-data",
              { headers: { Authorization: `Bearer ${f}` } }
            )
          ).json();
          v.status === "success"
            ? (r(v.data), Oe.success("Company data loaded successfully.", ks))
            : Oe.error(v.message || "Failed to load company data.", ks);
        } catch (d) {
          console.error("Fetch error:", d),
            Oe.error("Something went wrong while fetching data.", ks);
        } finally {
          l(!1);
        }
      };
    return (
      x.useEffect(() => {
        s();
      }, []),
      S.jsxs("div", {
        className: "max-w-5xl mx-auto p-6 bg-white rounded shadow",
        children: [
          S.jsx(Th, {}),
          S.jsx("h2", {
            className: "text-2xl font-bold text-[var(--primary2)] mb-4",
            children: "Registered Companies",
          }),
          o
            ? S.jsx("p", { className: "text-gray-600", children: "Loading..." })
            : n.length === 0
            ? S.jsx("p", {
                className: "text-gray-500",
                children: "No company data found.",
              })
            : S.jsx("ol", {
                className: "list-decimal pl-6",
                children: n.map((f, d) =>
                  S.jsxs(
                    "li",
                    {
                      className: "mb-4",
                      children: [
                        S.jsxs("div", {
                          children: [
                            S.jsx("strong", { children: "Company Name:" }),
                            " ",
                            f.companyName || "-",
                          ],
                        }),
                        S.jsxs("div", {
                          children: [
                            S.jsx("strong", { children: "Email:" }),
                            " ",
                            f.businessEmail || "-",
                          ],
                        }),
                        S.jsxs("div", {
                          children: [
                            S.jsx("strong", { children: "Phone:" }),
                            " ",
                            f.phone || "-",
                          ],
                        }),
                        S.jsxs("div", {
                          children: [
                            S.jsx("strong", { children: "Size:" }),
                            " ",
                            f.companySize || "-",
                          ],
                        }),
                        S.jsxs("div", {
                          children: [
                            S.jsx("strong", { children: "Industry:" }),
                            " ",
                            f.industry || "-",
                          ],
                        }),
                        S.jsxs("div", {
                          children: [
                            S.jsx("strong", { children: "Website:" }),
                            " ",
                            f.website
                              ? S.jsx("a", {
                                  href: f.website,
                                  className: "text-blue-600 underline",
                                  target: "_blank",
                                  rel: "noreferrer",
                                  children: f.website,
                                })
                              : "-",
                          ],
                        }),
                      ],
                    },
                    d
                  )
                ),
              }),
        ],
      })
    );
  },
  ig =
    "data:image/svg+xml,%3csvg%20width='16'%20height='10'%20viewBox='0%200%2016%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.0599%209.06001C8.77865%209.34091%208.3974%209.49869%207.9999%209.49869C7.6024%209.49869%207.22115%209.34091%206.9399%209.06001L1.2819%203.40401C1.00064%203.12262%200.84268%202.74102%200.842773%202.34316C0.842867%201.9453%201.00101%201.56377%201.2824%201.28251C1.56379%201.00125%201.9454%200.84329%202.34325%200.843384C2.74111%200.843478%203.12264%201.00162%203.4039%201.28301L7.9999%205.87901L12.5959%201.28301C12.8787%201.00964%2013.2575%200.858265%2013.6508%200.861496C14.0441%200.864727%2014.4204%201.0223%2014.6986%201.30028C14.9769%201.57827%2015.1348%201.95441%2015.1384%202.34771C15.142%202.741%2014.991%203.11998%2014.7179%203.40301L9.0609%209.06101L9.0599%209.06001Z'%20fill='%23919191'/%3e%3c/svg%3e",
  Xy = {
    position: "bottom-left",
    autoClose: 2e3,
    hideProgressBar: !1,
    closeOnClick: !1,
    pauseOnHover: !0,
    draggable: !0,
    progress: void 0,
    theme: "colored",
    style: { background: "var(--primary2)", color: "#fff" },
  },
  Gs = (n) => Oe.error(n, Xy),
  $l = ({
    label: n,
    value: r,
    onChange: o,
    name: l,
    type: s = "text",
    placeholder: f,
    wrapperClass: d = "flex flex-col gap-y-2",
  }) =>
    S.jsxs("div", {
      className: d,
      children: [
        S.jsx("label", {
          className: "text-[var(--primary2)] text-base font-medium",
          children: n,
        }),
        S.jsx("input", {
          type: s,
          name: l,
          value: r,
          placeholder: f,
          onChange: o,
          className:
            "w-full h-[50px] py-3 px-4 bg-[#F4F5F9] border border-[#DBDCDE] rounded-[8px] focus:outline-none focus:ring-0 placeholder:text-[#919191] placeholder:text-sm cursor-pointer",
        }),
      ],
    }),
  cE = () => {
    var y;
    const r = (y = Va().state) == null ? void 0 : y.useremail;
    console.log("userEmail:", r);
    const [o, l] = x.useState({
        companyName: "",
        businessEmail: r,
        phone: "",
        extension: "",
        address: "",
        companySize: "",
        industry: "",
        website: "",
      }),
      [s, f] = x.useState(!1),
      d = Er(),
      v = (b) => {
        const { name: T, value: w } = b.target;
        l((O) => ({ ...O, [T]: w }));
      },
      h = () => {
        const {
          companyName: b,
          businessEmail: T,
          phone: w,
          address: O,
          companySize: E,
          industry: H,
        } = o;
        return b
          ? T.trim()
            ? w.trim()
              ? O.trim()
                ? E.trim()
                  ? H.trim()
                    ? null
                    : "Industry is required"
                  : "Company Size is required"
                : "Company Address is required"
              : "Phone is required"
            : "Business Email is required"
          : "Company Name is required";
      },
      m = async (b) => {
        b.preventDefault();
        const T = h();
        if (T) return Gs(T);
        const w = localStorage.getItem("auth_token");
        if (!w) return Gs("Authentication token missing. Please log in.");
        try {
          f(!0);
          const E = await (
            await fetch(
              "https://4amitest-bli6.wp1.sh/wp-json/custom/v1/register-company",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${w}`,
                },
                body: JSON.stringify(o),
              }
            )
          ).json();
          f(!1),
            E.status === "success"
              ? (d("/dashboard"),
                Oe.success(E.message || "Company registered successfully!", Xy),
                localStorage.setItem("com_auth_token", "akash"),
                p())
              : Gs(E.message || "Something went wrong");
        } catch (O) {
          f(!1),
            Gs("Failed to register. Please try again."),
            console.error("Error submitting form:", O);
        }
      },
      p = () => {
        l({
          companyName: "",
          businessEmail: r,
          phone: "",
          extension: "",
          address: "",
          companySize: "",
          industry: "",
          website: "",
        }),
          f(!1);
      };
    return (
      x.useEffect(() => {
        !s &&
          o.companyName === "" &&
          l({
            companyName: "",
            businessEmail: r,
            phone: "",
            extension: "",
            address: "",
            companySize: "",
            industry: "",
            website: "",
          });
      }, [s, r]),
      S.jsxs("div", {
        children: [
          S.jsx("h2", {
            className:
              "text-[var(--primary2)] text-[28px] leading-8 not-italic font-semibold",
            children: "Register Your Company",
          }),
          S.jsx("p", {
            className:
              "text-[#919191] text-base not-italic font-normal leading-6 mt-3 mb-6",
            children:
              "Add your company details to start using your dashboard and invite team members",
          }),
          S.jsx("div", {
            className:
              "max-w-[793px] py-[43px] px-[50px] bg-[#FFF] rounded-[5px] companyregform",
            children: S.jsxs("form", {
              className: "flex flex-col gap-y-6",
              onSubmit: m,
              children: [
                S.jsx($l, {
                  label: "Company Name",
                  name: "companyName",
                  value: o.companyName,
                  onChange: v,
                }),
                S.jsx($l, {
                  label: "Business Email",
                  name: "businessEmail",
                  type: "email",
                  value: o.businessEmail,
                  readOnly: !0,
                }),
                S.jsxs("div", {
                  className: "flex gap-x-[41px]",
                  children: [
                    S.jsx($l, {
                      label: "Phone",
                      name: "phone",
                      value: o.phone,
                      onChange: v,
                      wrapperClass: "w-1/2",
                    }),
                    S.jsx($l, {
                      label: "Extension",
                      name: "extension",
                      value: o.extension,
                      onChange: v,
                      wrapperClass: "w-1/2",
                    }),
                  ],
                }),
                S.jsx($l, {
                  label: "Company Address",
                  name: "address",
                  value: o.address,
                  onChange: v,
                }),
                S.jsxs("div", {
                  className: "flex gap-x-[42px]",
                  children: [
                    S.jsxs("div", {
                      className: "w-full",
                      children: [
                        S.jsx("label", {
                          className:
                            "text-[var(--primary2)] text-base font-medium",
                          children: "Company Size",
                        }),
                        S.jsxs("div", {
                          className: "relative cursor-pointer",
                          children: [
                            S.jsxs("select", {
                              name: "companySize",
                              value: o.companySize,
                              onChange: v,
                              className:
                                "w-full h-[50px] py-3 px-4 border bg-[#F4F5F9] border-[#DBDCDE] rounded-[8px] appearance-none cursor-pointer",
                              children: [
                                S.jsx("option", {
                                  value: "",
                                  children: "Select One",
                                }),
                                S.jsx("option", {
                                  value: "1-10",
                                  children: "1-10",
                                }),
                                S.jsx("option", {
                                  value: "11-50",
                                  children: "11-50",
                                }),
                                S.jsx("option", {
                                  value: "51+",
                                  children: "51+",
                                }),
                              ],
                            }),
                            S.jsx("img", {
                              className:
                                "absolute top-1/2 -translate-y-1/2 right-[16px]",
                              src: ig,
                              alt: "down-arrow",
                            }),
                          ],
                        }),
                      ],
                    }),
                    S.jsxs("div", {
                      className: "w-full",
                      children: [
                        S.jsx("label", {
                          className:
                            "text-[var(--primary2)] text-base font-medium",
                          children: "Industry",
                        }),
                        S.jsxs("div", {
                          className: "relative cursor-pointer",
                          children: [
                            S.jsxs("select", {
                              name: "industry",
                              value: o.industry,
                              onChange: v,
                              className:
                                "w-full h-[50px] py-3 px-4 border bg-[#F4F5F9] border-[#DBDCDE] rounded-[8px] appearance-none cursor-pointer",
                              children: [
                                S.jsx("option", {
                                  value: "",
                                  children: "Select One",
                                }),
                                S.jsx("option", {
                                  value: "Tech",
                                  children: "Tech",
                                }),
                                S.jsx("option", {
                                  value: "Healthcare",
                                  children: "Healthcare",
                                }),
                                S.jsx("option", {
                                  value: "Finance",
                                  children: "Finance",
                                }),
                              ],
                            }),
                            S.jsx("img", {
                              className:
                                "absolute top-1/2 -translate-y-1/2 right-[16px]",
                              src: ig,
                              alt: "down-arrow",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                S.jsx($l, {
                  label: "Website (Optional)",
                  name: "website",
                  value: o.website,
                  onChange: v,
                }),
                S.jsxs("div", {
                  className: "flex gap-[42px] items-center",
                  children: [
                    S.jsx("button", {
                      type: "submit",
                      disabled: s,
                      className:
                        "py-[18px] px-[60px] bg-[var(--primary)] border border-[var(--primary)] rounded-[5px] text-white text-base font-bold cursor-pointer",
                      children: s
                        ? S.jsx("div", {
                            className: "spinner-border",
                            role: "status",
                            children: S.jsx("span", {
                              className: "visually-hidden",
                              children: "Loading...",
                            }),
                          })
                        : "Register Company",
                    }),
                    S.jsx("button", {
                      type: "button",
                      onClick: p,
                      className:
                        "py-[18px] px-[60px] bg-[#FFF] text-[var(--primary2)] border border-[#919191] rounded-[5px] cursor-pointer overflow-hidden text-zinc-950/[0.5] text-center text-ellipsis text-base not-italic font-semibold leading-[1.31rem]",
                      children: "Clear Form",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      })
    );
  },
  uE = () =>
    S.jsx(S.Fragment, {
      children: S.jsxs("div", {
        className: "p-[60px] bg-[#E9E9E9] max-w-[800px]",
        children: [
          S.jsx("div", {
            className:
              "w-[75px] h-[75px] bg-[var(--primary)] mx-auto mb-10 rounded-full flex justify-center items-center",
            children: S.jsx(Gy, {
              className:
                "text-[#FFF] text-[32px] not-italic font-semibold leading-10",
            }),
          }),
          S.jsx("h2", {
            className:
              "text-[#000] text-[32px] not-italic font-bold leading-10 text-center",
            children: "Company Registration Successful!",
          }),
          S.jsx("p", {
            className:
              "pt-6 pb-10 text-[#000] text-center text-[16px] not-italic font-normal leading-6 max-w-[680px]",
            children: "Your company has been registered successfully.",
          }),
          S.jsx("div", {
            className: "w-full flex justify-center",
            children: S.jsx(Fl, {
              to: "/dashboard",
              className:
                "bg-[var(--primary)] py-[18px] px-[60px] text-[#fff] text-[16px] not-italic text-center rounded-[5px]  font-semibold leading-7",
              children: "Continue",
            }),
          }),
        ],
      }),
    }),
  ai = {
    position: "bottom-left",
    autoClose: 3e3,
    theme: "colored",
    style: { background: "var(--primary2)", color: "#fff" },
  },
  fE = () => {
    var m, p;
    const n = Va(),
      r = Er(),
      o =
        ((m = n.state) == null ? void 0 : m.user) ||
        JSON.parse(localStorage.getItem("user_data")),
      [l, s] = x.useState(null),
      [f, d] = x.useState(!0),
      v = async () => {
        const y = localStorage.getItem("auth_token");
        if (!y) {
          Oe.error("Authentication token missing.", ai), d(!1);
          return;
        }
        try {
          const T = await (
            await fetch(
              "https://4amitest-bli6.wp1.sh/wp-json/custom/v1/company-data",
              { headers: { Authorization: `Bearer ${y}` } }
            )
          ).json();
          if (T.status === "success") {
            const w = T.data.find(
              (O) => O.businessEmail === (o == null ? void 0 : o.email)
            );
            w ? s(w) : Oe.error("No company data found for this user.", ai);
          } else Oe.error(T.message || "Failed to load company data.", ai);
        } catch (b) {
          console.error("Fetch error:", b),
            Oe.error("Something went wrong while fetching data.", ai);
        } finally {
          d(!1);
        }
      };
    x.useEffect(() => {
      v();
    }, [o]);
    const h = () => {
      localStorage.removeItem("auth_token"),
        localStorage.removeItem("logintoken"),
        localStorage.removeItem("com_auth_token"),
        r("/login"),
        Oe.success("Logged out successfully", ai);
    };
    return S.jsxs("div", {
      className:
        "dashboard-container max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg",
      children: [
        S.jsx(Th, {}),
        S.jsxs("h1", {
          className: "text-3xl font-semibold text-center mb-6",
          children: ["Welcome, ", o == null ? void 0 : o.username, "!"],
        }),
        S.jsx("div", {
          className: "profile-header flex items-center justify-center mb-8",
          children: S.jsx("div", {
            className:
              "avatar-container w-32 h-32 rounded-full overflow-hidden shadow-xl",
            children: S.jsx("img", {
              src:
                (o == null ? void 0 : o.avatar_url) ||
                "https://via.placeholder.com/150",
              alt: "User Avatar",
              className: "w-full h-full object-cover",
            }),
          }),
        }),
        S.jsxs("div", {
          className: "user-details space-y-4",
          children: [
            S.jsx("div", {
              className: "detail-item",
              children: S.jsxs("p", {
                className: "font-medium text-lg",
                children: [
                  S.jsx("strong", { children: "Email:" }),
                  " ",
                  o == null ? void 0 : o.email,
                ],
              }),
            }),
            S.jsx("div", {
              className: "detail-item",
              children: S.jsxs("p", {
                className: "font-medium text-lg",
                children: [
                  S.jsx("strong", { children: "Username:" }),
                  " ",
                  o == null ? void 0 : o.username,
                ],
              }),
            }),
            S.jsx("div", {
              className: "detail-item",
              children: S.jsxs("p", {
                className: "font-medium text-lg",
                children: [
                  S.jsx("strong", { children: "First Name:" }),
                  " ",
                  o == null ? void 0 : o.first_name,
                ],
              }),
            }),
            S.jsx("div", {
              className: "detail-item",
              children: S.jsxs("p", {
                className: "font-medium text-lg",
                children: [
                  S.jsx("strong", { children: "Last Name:" }),
                  " ",
                  o == null ? void 0 : o.last_name,
                ],
              }),
            }),
            S.jsx("div", {
              className: "detail-item",
              children: S.jsxs("p", {
                className: "font-medium text-lg",
                children: [
                  S.jsx("strong", { children: "Roles:" }),
                  " ",
                  ((p = o == null ? void 0 : o.roles) == null
                    ? void 0
                    : p.join(", ")) || "No roles assigned",
                ],
              }),
            }),
          ],
        }),
        f
          ? S.jsx("p", {
              className: "text-gray-600",
              children: "Loading company data...",
            })
          : l
          ? S.jsxs("div", {
              className: "company-info mt-8",
              children: [
                S.jsx("h2", {
                  className:
                    "text-xl font-semibold text-[var(--primary2)] mb-4",
                  children: "Company Information",
                }),
                S.jsxs("div", {
                  className: "company-details space-y-4",
                  children: [
                    S.jsx("div", {
                      className: "detail-item",
                      children: S.jsxs("p", {
                        className: "font-medium text-lg",
                        children: [
                          S.jsx("strong", { children: "Company Name:" }),
                          " ",
                          l.companyName || "-",
                        ],
                      }),
                    }),
                    S.jsx("div", {
                      className: "detail-item",
                      children: S.jsxs("p", {
                        className: "font-medium text-lg",
                        children: [
                          S.jsx("strong", { children: "Email:" }),
                          " ",
                          l.businessEmail || "-",
                        ],
                      }),
                    }),
                    S.jsx("div", {
                      className: "detail-item",
                      children: S.jsxs("p", {
                        className: "font-medium text-lg",
                        children: [
                          S.jsx("strong", { children: "Phone:" }),
                          " ",
                          l.phone || "-",
                        ],
                      }),
                    }),
                    S.jsx("div", {
                      className: "detail-item",
                      children: S.jsxs("p", {
                        className: "font-medium text-lg",
                        children: [
                          S.jsx("strong", { children: "Size:" }),
                          " ",
                          l.companySize || "-",
                        ],
                      }),
                    }),
                    S.jsx("div", {
                      className: "detail-item",
                      children: S.jsxs("p", {
                        className: "font-medium text-lg",
                        children: [
                          S.jsx("strong", { children: "Industry:" }),
                          " ",
                          l.industry || "-",
                        ],
                      }),
                    }),
                    S.jsx("div", {
                      className: "detail-item",
                      children: S.jsxs("p", {
                        className: "font-medium text-lg",
                        children: [
                          S.jsx("strong", { children: "Website:" }),
                          " ",
                          l.website
                            ? S.jsx("a", {
                                href: l.website,
                                className: "text-blue-600 underline",
                                target: "_blank",
                                rel: "noreferrer",
                                children: l.website,
                              })
                            : "-",
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            })
          : S.jsx("p", {
              className: "text-gray-500",
              children: "No company data available.",
            }),
        S.jsx("div", {
          className: "mt-8 text-center",
          children: S.jsx("button", {
            onClick: h,
            className:
              "py-[10px] px-[30px] bg-[var(--primary)] rounded-[5px] text-white text-lg font-bold cursor-pointer",
            children: "Log Out",
          }),
        }),
      ],
    });
  },
  dE = () => {
    const [n, r] = x.useState([]),
      [o, l] = x.useState(""),
      [s, f] = x.useState({
        username: "akash1",
        email: "arakash.developer1@gmail.com",
        password: "akash556600",
        role: "administrator",
        first_name: "Akash",
        last_name: "Developer",
      }),
      d = async () => {
        try {
          const m = await (
            await fetch("https://4amitest-bli6.wp1.sh/wp-json/wp/v2/posts")
          ).json();
          r(m);
        } catch (h) {
          console.error("Failed to fetch posts", h);
        }
      };
    x.useEffect(() => {
      d();
    }, []);
    const v = async (h) => {
      h.preventDefault(), l("Submitting...");
      try {
        const m = await fetch(
            "https://akashtest.wp1.sh/wp-json/custom/v1/register",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(s),
            }
          ),
          p = await m.json();
        m.ok
          ? l("✅ Registered: " + p.message)
          : l(
              "❌ Error: " +
                ((p == null ? void 0 : p.error) ||
                  (p == null ? void 0 : p.message) ||
                  "Unknown")
            );
      } catch (m) {
        l("❌ Network error: " + m.message);
      }
    };
    return S.jsx("div", {
      children: S.jsxs("form", {
        onSubmit: v,
        className:
          "mt-10 max-w-md mx-auto p-6 bg-white rounded-2xl shadow space-y-4",
        children: [
          S.jsx("h2", {
            className: "text-2xl font-bold text-center capitalize",
            children: "Headless Wp Register",
          }),
          S.jsxs("div", {
            children: [
              S.jsx("label", {
                htmlFor: "username",
                className: "block text-sm font-medium",
                children: "Username",
              }),
              S.jsx("input", {
                type: "text",
                id: "username",
                value: s.username,
                onChange: (h) => f({ ...s, username: h.target.value }),
                required: !0,
                className:
                  "mt-1 block w-full rounded-md border border-gray-300 p-2",
              }),
            ],
          }),
          S.jsxs("div", {
            children: [
              S.jsx("label", {
                htmlFor: "email",
                className: "block text-sm font-medium",
                children: "Email",
              }),
              S.jsx("input", {
                type: "email",
                id: "email",
                value: s.email,
                onChange: (h) => f({ ...s, email: h.target.value }),
                required: !0,
                className:
                  "mt-1 block w-full rounded-md border border-gray-300 p-2",
              }),
            ],
          }),
          S.jsxs("div", {
            children: [
              S.jsx("label", {
                htmlFor: "password",
                className: "block text-sm font-medium",
                children: "Password",
              }),
              S.jsx("input", {
                type: "password",
                id: "password",
                value: s.password,
                onChange: (h) => f({ ...s, password: h.target.value }),
                required: !0,
                className:
                  "mt-1 block w-full rounded-md border border-gray-300 p-2",
              }),
            ],
          }),
          S.jsxs("div", {
            children: [
              S.jsx("label", {
                className: "block text-sm font-medium text-gray-700 mb-2",
                children: "Select Role",
              }),
              S.jsx("div", {
                className: "flex flex-wrap gap-3",
                children: [
                  "administrator",
                  "editor",
                  "author",
                  "subscriber",
                ].map((h) =>
                  S.jsxs(
                    "label",
                    {
                      className: `flex items-center px-3 py-1.5 text-xs border rounded-md cursor-pointer transition
            ${
              s.role === h
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`,
                      children: [
                        S.jsx("input", {
                          type: "checkbox",
                          checked: s.role === h,
                          onChange: () => f({ ...s, role: h }),
                          className: "hidden",
                        }),
                        S.jsx("span", { className: "capitalize", children: h }),
                      ],
                    },
                    h
                  )
                ),
              }),
            ],
          }),
          S.jsx("button", {
            type: "submit",
            className:
              "w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition cursor-pointer",
            children: "Register",
          }),
          o && S.jsx("p", { className: "text-center mt-4", children: o }),
        ],
      }),
    });
  },
  hE = () => {
    const [n, r] = x.useState({
        username: "",
        password: "",
        email: "",
        firstName: "",
        lastName: "",
        title: "",
        company: "",
        phone: "",
        extension: "",
        code: "",
      }),
      [o, l] = x.useState(""),
      [s, f] = x.useState(!1),
      d = (h) => {
        const { name: m, value: p } = h.target;
        r((y) => ({ ...y, [m]: p }));
      },
      v = async (h) => {
        h.preventDefault(), l(""), f(!0);
        try {
          const m = await fetch(
              "https://4amitest-bli6.wp1.sh/wp-json/custom/v1/register",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(n),
              }
            ),
            p = await m.json();
          m.ok
            ? (l("✅ Registration successful!"),
              r({
                username: "",
                password: "",
                email: "",
                firstName: "",
                lastName: "",
                title: "",
                company: "",
                phone: "",
                extension: "",
                code: "",
              }))
            : l(`❌ ${p.error || "Registration failed"}`);
        } catch {
          l("❌ Error while registering. Please try again.");
        } finally {
          f(!1);
        }
      };
    return S.jsxs("form", {
      onSubmit: v,
      className: "max-w-lg mx-auto p-6 space-y-4",
      children: [
        [
          { label: "Username", name: "username" },
          { label: "Password", name: "password", type: "password" },
          { label: "Email", name: "email", type: "email" },
          { label: "First Name", name: "firstName" },
          { label: "Last Name", name: "lastName" },
          { label: "Title", name: "title" },
          { label: "Company", name: "company" },
          { label: "Phone", name: "phone" },
          { label: "Extension", name: "extension" },
          { label: "Code", name: "code" },
        ].map(({ label: h, name: m, type: p = "text" }) =>
          S.jsxs(
            "div",
            {
              children: [
                S.jsx("label", {
                  className: "block text-sm font-medium mb-1",
                  children: h,
                }),
                S.jsx("input", {
                  name: m,
                  type: p,
                  value: n[m],
                  onChange: d,
                  className: "w-full border px-3 py-2 rounded",
                  required: ["username", "password", "email"].includes(m),
                }),
              ],
            },
            m
          )
        ),
        S.jsx("button", {
          type: "submit",
          className:
            "bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50",
          disabled: s,
          children: s ? "Registering..." : "Register",
        }),
        o && S.jsx("p", { className: "mt-4 text-sm", children: o }),
      ],
    });
  };
function mE(n) {
  return jc({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "circle", attr: { cx: "11", cy: "11", r: "8" }, child: [] },
      {
        tag: "line",
        attr: { x1: "21", y1: "21", x2: "16.65", y2: "16.65" },
        child: [],
      },
    ],
  })(n);
}
const vE = () => {
    const [n, r] = x.useState(""),
      [o, l] = x.useState([]),
      [s, f] = x.useState([]),
      [d, v] = x.useState(!1);
    return (
      x.useEffect(() => {
        (async () => {
          v(!0);
          try {
            const p = await (
              await fetch("https://dummyjson.com/products")
            ).json();
            l(p.products);
          } catch (m) {
            console.error("Error fetching products:", m);
          } finally {
            v(!1);
          }
        })();
      }, []),
      x.useEffect(() => {
        if (n.trim() === "") f([]);
        else {
          const h = o.filter((m) =>
            m.title.toLowerCase().includes(n.toLowerCase())
          );
          f(h);
        }
      }, [n, o]),
      S.jsxs("div", {
        className: "w-full max-w-3xl mx-auto mt-10 px-4",
        children: [
          S.jsxs("div", {
            className: "relative",
            children: [
              S.jsx(mE, {
                className:
                  "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl",
              }),
              S.jsx("input", {
                type: "text",
                placeholder: "Search products by name...",
                value: n,
                onChange: (h) => r(h.target.value),
                className:
                  "w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all",
              }),
            ],
          }),
          d &&
            S.jsx("p", {
              className: "mt-4 text-gray-500",
              children: "Loading products...",
            }),
          n &&
            !d &&
            S.jsx("div", {
              className:
                "mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",
              children:
                s.length > 0
                  ? s.map((h) =>
                      S.jsxs(
                        "div",
                        {
                          className:
                            "bg-white rounded-xl shadow hover:shadow-md transition p-4",
                          children: [
                            S.jsx("img", {
                              src: h.thumbnail,
                              alt: h.title,
                              className:
                                "w-full h-40 object-cover rounded-lg mb-3",
                            }),
                            S.jsx("h3", {
                              className: "text-lg font-semibold text-gray-800",
                              children: h.title,
                            }),
                            S.jsxs("p", {
                              className: "text-blue-600 font-bold",
                              children: ["$", h.price],
                            }),
                          ],
                        },
                        h.id
                      )
                    )
                  : S.jsx("p", {
                      className: "col-span-full text-gray-500",
                      children: "No products found.",
                    }),
            }),
        ],
      })
    );
  },
  pE =
    "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.83331%2011.6667C5.37498%2011.6667%204.98276%2011.5036%204.65665%2011.1775C4.33053%2010.8514%204.1672%2010.4589%204.16665%2010C4.16609%209.54111%204.32942%209.14889%204.65665%208.82333C4.98387%208.49778%205.37609%208.33444%205.83331%208.33333C6.29053%208.33222%206.68303%208.49556%207.01081%208.82333C7.33859%209.15111%207.50165%209.54333%207.49998%2010C7.49831%2010.4567%207.33526%2010.8492%207.01081%2011.1775C6.68637%2011.5058%206.29387%2011.6689%205.83331%2011.6667ZM5.83331%2015C4.44442%2015%203.26387%2014.5139%202.29165%2013.5417C1.31942%2012.5694%200.833313%2011.3889%200.833313%2010C0.833313%208.61111%201.31942%207.43056%202.29165%206.45833C3.26387%205.48611%204.44442%205%205.83331%205C6.76387%205%207.60776%205.22917%208.36498%205.6875C9.1222%206.14583%209.72276%206.75%2010.1666%207.5H17.1458C17.2569%207.5%2017.3647%207.52083%2017.4691%207.5625C17.5736%207.60417%2017.6672%207.66667%2017.75%207.75L19.4166%209.41667C19.5%209.5%2019.5589%209.59028%2019.5933%209.6875C19.6278%209.78472%2019.6453%209.88889%2019.6458%2010C19.6464%2010.1111%2019.6289%2010.2153%2019.5933%2010.3125C19.5578%2010.4097%2019.4989%2010.5%2019.4166%2010.5833L16.7708%2013.2292C16.7014%2013.2986%2016.618%2013.3542%2016.5208%2013.3958C16.4236%2013.4375%2016.3264%2013.4653%2016.2291%2013.4792C16.1319%2013.4931%2016.0347%2013.4861%2015.9375%2013.4583C15.8403%2013.4306%2015.75%2013.3819%2015.6666%2013.3125L14.5833%2012.5L13.3958%2013.3958C13.3264%2013.4514%2013.25%2013.4931%2013.1666%2013.5208C13.0833%2013.5486%2013%2013.5625%2012.9166%2013.5625C12.8333%2013.5625%2012.7464%2013.5486%2012.6558%2013.5208C12.5653%2013.4931%2012.4855%2013.4514%2012.4166%2013.3958L11.1458%2012.5H10.1666C9.7222%2013.25%209.12137%2013.8542%208.36415%2014.3125C7.60692%2014.7708%206.76331%2015%205.83331%2015ZM5.83331%2013.3333C6.61109%2013.3333%207.29526%2013.0972%207.88581%2012.625C8.47637%2012.1528%208.86859%2011.5556%209.06248%2010.8333H11.6666L12.875%2011.6875L14.5833%2010.4167L16.0625%2011.5625L17.625%2010L16.7916%209.16667H9.06248C8.86803%208.44444%208.47581%207.84722%207.88581%207.375C7.29581%206.90278%206.61165%206.66667%205.83331%206.66667C4.91665%206.66667%204.13192%206.99306%203.47915%207.64583C2.82637%208.29861%202.49998%209.08333%202.49998%2010C2.49998%2010.9167%202.82637%2011.7014%203.47915%2012.3542C4.13192%2013.0069%204.91665%2013.3333%205.83331%2013.3333Z'%20fill='black'/%3e%3c/svg%3e",
  gE = () => {
    const n = Er(),
      [r, o] = x.useState(""),
      [l, s] = x.useState({
        code: "",
        email: "",
        firstName: "",
        lastName: "",
        title: "",
        company: "",
        phone: "",
        extension: "",
        source: "",
        category: "",
      }),
      f = {
        position: "bottom-left",
        autoClose: 2e3,
        hideProgressBar: !1,
        closeOnClick: !1,
        pauseOnHover: !0,
        draggable: !0,
        progress: void 0,
        theme: "colored",
        style: { background: "#FFC107", color: "#fff" },
      },
      d = (h) => {
        o(h), Oe.error(h, f);
      },
      v = (h) => {
        h.preventDefault();
        const {
            email: m,
            firstName: p,
            lastName: y,
            title: b,
            company: T,
            phone: w,
            extension: O,
            source: E,
            category: H,
          } = l,
          j = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          D = /^[0-9]{7,15}$/,
          U = /^[0-9]{1,5}$/;
        if (!p) return d("First Name is required");
        if (!y) return d("Last Name is required");
        if (!b) return d("Title is required");
        if (!T) return d("Company is required");
        if (!w) return d("Phone number is required");
        if (!D.test(w)) return d("Enter a valid phone number");
        if (!O) return d("Extension is required");
        if (!U.test(O)) return d("Enter a valid extension");
        if (!m) return d("Email is required");
        if (!j.test(m)) return d("Enter a valid email");
        if (!E) return d("Please select a Source");
        if (!H) return d("Please select a Category");
        Oe.success("Next Step!", {
          ...f,
          style: { background: "var(--primary)", color: "#fff" },
        }),
          n("/register2");
      };
    return S.jsxs("div", {
      children: [
        S.jsxs("div", {
          className: "mt-5",
          children: [
            S.jsx("h2", {
              className:
                "text-[var(--primary2)] text-[28px] leading-8 font-semibold",
              children: "Send an Invitation",
            }),
            S.jsx("p", {
              className:
                "max-w-[813px] text-[#919191] text-base font-normal leading-6 mb-[30px]",
              children:
                "Use this form to invite a business colleague or client to register and use the AMI website. Upon completion, a unique Invitation Code will be sent to your invitee. After they register, you will receive a notification email",
            }),
          ],
        }),
        S.jsx("div", {
          className:
            "max-w-[855px] p-[60px] bg-[#fff] rounded-[5px] formboxshadow",
          children: S.jsxs("form", {
            className: "flex flex-col gap-y-6 pt-[50px]",
            onSubmit: v,
            children: [
              S.jsxs("div", {
                className: "flex gap-x-[41px]",
                children: [
                  S.jsx(Vr, {
                    label: "First Name",
                    value: l.firstName,
                    onChange: (h) => s({ ...l, firstName: h }),
                    wrapperClass: "w-1/2",
                  }),
                  S.jsx(Vr, {
                    label: "Last Name",
                    value: l.lastName,
                    onChange: (h) => s({ ...l, lastName: h }),
                    wrapperClass: "w-1/2",
                  }),
                ],
              }),
              S.jsxs("div", {
                className: "flex gap-x-[41px]",
                children: [
                  S.jsx(Vr, {
                    label: "Title",
                    value: l.title,
                    onChange: (h) => s({ ...l, title: h }),
                    wrapperClass: "w-1/2",
                  }),
                  S.jsx(Vr, {
                    label: "Company",
                    value: l.company,
                    onChange: (h) => s({ ...l, company: h }),
                    wrapperClass: "w-1/2",
                  }),
                ],
              }),
              S.jsxs("div", {
                className: "flex gap-x-[41px]",
                children: [
                  S.jsx(Vr, {
                    label: "Phone",
                    type: "text",
                    placeholder: "(123) 4567890",
                    value: l.phone,
                    onChange: (h) => s({ ...l, phone: h }),
                    wrapperClass: "w-1/2",
                  }),
                  S.jsx(Vr, {
                    label: "Extension",
                    placeholder: "123",
                    value: l.extension,
                    onChange: (h) => s({ ...l, extension: h }),
                    wrapperClass: "w-1/2",
                  }),
                ],
              }),
              S.jsx(Vr, {
                label: "Email",
                type: "email",
                required: !0,
                value: l.email,
                onChange: (h) => s({ ...l, email: h }),
              }),
              S.jsxs("div", {
                children: [
                  S.jsx("label", {
                    className: "text-[var(--primary2)] text-base font-medium",
                    children: "Source",
                  }),
                  S.jsxs("select", {
                    value: l.source,
                    onChange: (h) => s({ ...l, source: h.target.value }),
                    className:
                      "w-full h-[50px] py-3 px-4 border border-[#DBDCDE] rounded-[8px]",
                    children: [
                      S.jsx("option", { value: "", children: "Select One" }),
                      S.jsx("option", {
                        value: "Referral",
                        children: "Referral",
                      }),
                      S.jsx("option", { value: "Event", children: "Event" }),
                      S.jsx("option", { value: "Social", children: "Social" }),
                    ],
                  }),
                ],
              }),
              S.jsxs("div", {
                children: [
                  S.jsx("label", {
                    className: "text-[var(--primary2)] text-base font-medium",
                    children: "Category",
                  }),
                  S.jsxs("select", {
                    value: l.category,
                    onChange: (h) => s({ ...l, category: h.target.value }),
                    className:
                      "w-full h-[50px] py-3 px-4 border border-[#DBDCDE] rounded-[8px]",
                    children: [
                      S.jsx("option", { value: "", children: "Select One" }),
                      S.jsx("option", { value: "Client", children: "Client" }),
                      S.jsx("option", {
                        value: "Partner",
                        children: "Partner",
                      }),
                      S.jsx("option", { value: "Other", children: "Other" }),
                    ],
                  }),
                ],
              }),
              S.jsx("p", {
                className: "pb-2 text-[var(--primary2)] text-base font-medium",
                children: "Unique Invitation Code",
              }),
              S.jsxs("div", {
                className:
                  "rounded-[5px] py-5 px-4 flex gap-x-[9px] items-center border border-[#DBDCDE] cursor-pointer max-w-[167px]",
                children: [
                  S.jsx("p", {
                    className:
                      "overflow-hidden text-[var(--primary2)] text-sm font-semibold",
                    children: "Generate Code",
                  }),
                  S.jsx("img", { src: pE, alt: "key icon" }),
                ],
              }),
              S.jsxs("div", {
                className: "flex gap-x-[42px] items-center",
                children: [
                  S.jsx("button", {
                    type: "submit",
                    className:
                      "py-[18px] px-[60px] bg-[var(--primary)] rounded-[5px] text-white text-base font-bold max-w-[275px] cursor-pointer",
                    children: "Send Invitation",
                  }),
                  S.jsx("button", {
                    type: "button",
                    onClick: () => {
                      s({
                        code: "",
                        email: "",
                        firstName: "",
                        lastName: "",
                        title: "",
                        company: "",
                        phone: "",
                        extension: "",
                        source: "",
                        category: "",
                      }),
                        o("");
                    },
                    className:
                      "py-[18px] px-[60px] border border-[#919191] rounded-[5px] text-[var(--primary2)80] text-base font-bold max-w-[275px] cursor-pointer",
                    children: "Clear Form",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  Vr = ({
    label: n,
    value: r,
    onChange: o,
    type: l = "text",
    placeholder: s,
    wrapperClass: f = "flex flex-col gap-y-2",
  }) =>
    S.jsxs("div", {
      className: f,
      children: [
        S.jsx("label", {
          className: "text-[var(--primary2)] text-base font-medium",
          children: n,
        }),
        S.jsx("input", {
          type: l,
          value: r,
          placeholder: s,
          onChange: (d) => o(d.target.value),
          className:
            "w-full h-[50px] py-3 px-4 border border-[#DBDCDE] rounded-[8px] focus:outline-none",
        }),
      ],
    }),
  yE = "/assets/logIn-CqvGKC39.png";
let wi = x.createContext(),
  bE = ({ children: n }) => {
    let [r, o] = x.useState({}),
      [l, s] = x.useState(!1);
    return S.jsx(wi.Provider, {
      value: { invitation: r, setInvitation: o, islogin: l, setIsLogin: s },
      children: n,
    });
  };
const xE = () => {
    const [n, r] = x.useState(""),
      [o, l] = x.useState(""),
      [s, f] = x.useState("");
    let d = Er(),
      { setIsLogin: v, islogin: h } = x.useContext(wi);
    const m = async (p) => {
      p.preventDefault();
      const y = { username: n, password: o };
      try {
        const b = await fetch(
          "https://4amitest-bli6.wp1.sh/wp-json/custom/v1/login",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(y),
          }
        );
        if (!b.ok) {
          const H = {
            position: "bottom-left",
            autoClose: 2e3,
            hideProgressBar: !1,
            closeOnClick: !1,
            pauseOnHover: !0,
            draggable: !0,
            progress: void 0,
            theme: "colored",
            style: { background: "var(--primary2)", color: "#fff" },
          };
          throw (
            (Oe.error("Invalid credentials", H),
            new Error("Invalid credentials"))
          );
        }
        const T = await b.json();
        localStorage.setItem("auth_token", T.token),
          localStorage.setItem("user_data", JSON.stringify(T.user));
        const O = await (
          await fetch(
            "https://4amitest-bli6.wp1.sh/wp-json/custom/v1/company-data",
            { headers: { Authorization: `Bearer ${T.token}` } }
          )
        ).json();
        O.status === "success"
          ? O.data.map((j) => j.businessEmail).includes(n)
            ? (localStorage.setItem("logintoken", "akash@123"),
              localStorage.setItem("com_auth_token", "akash"),
              v(!0),
              d("/dashboard", { state: { user: T.user } }))
            : (v(!0),
              localStorage.setItem("logintoken", "akash@123"),
              d("/companyregistration", { state: { useremail: n } }))
          : Oe.error(O.message || "Failed to load company data.", E);
        const E = {
          position: "bottom-left",
          autoClose: 2e3,
          hideProgressBar: !1,
          closeOnClick: !1,
          pauseOnHover: !0,
          draggable: !0,
          progress: void 0,
          theme: "colored",
          style: { background: "var(--primary)", color: "#fff" },
        };
        Oe.success("Login Successful!", E);
      } catch (b) {
        f(b.message);
      }
    };
    return S.jsx("div", {
      className: "h-full",
      children: S.jsxs("div", {
        className:
          "loginBox bg-[#fff] max-w-[1036px] mr-[64px] mb-[171px] rounded-[5px] px-[125px] py-5 grid grid-cols-2 gap-[80px] h-full items-center",
        children: [
          S.jsxs("div", {
            className: "max-w-[380px]",
            children: [
              S.jsx("h3", {
                className:
                  "text-[var(--primary2)] text-4xl not-italic font-bold leading-10",
                children: "Log In",
              }),
              S.jsx("p", {
                className:
                  "text-[#919191] text-base not-italic font-normal leading-6 mt-[8px] mb-[28px]",
                children:
                  "Good to see you again! Enter your details to continue using the dashboard",
              }),
              S.jsxs("form", {
                onSubmit: m,
                children: [
                  S.jsxs("div", {
                    className: "flex flex-col gap-y-[20px]",
                    children: [
                      S.jsxs("div", {
                        className: "flex flex-col gap-y-2",
                        children: [
                          S.jsx("label", {
                            htmlFor: "email",
                            className:
                              "text-[var(--primary2)] text-base not-italic font-medium leading-[normal]",
                            children: "Email",
                          }),
                          S.jsx("input", {
                            id: "email",
                            type: "email",
                            value: n,
                            onChange: (p) => r(p.target.value),
                            className:
                              "w-full h-[50px] py-3 px-4 border-[1.4px] border-[#DBDCDE] rounded-[8px] focus:outline-none focus:ring-0 placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal]",
                            required: !0,
                          }),
                        ],
                      }),
                      S.jsxs("div", {
                        className: "flex flex-col gap-y-2",
                        children: [
                          S.jsx("label", {
                            htmlFor: "password",
                            className:
                              "text-[var(--primary2)] text-base not-italic font-medium leading-[normal]",
                            children: "Password",
                          }),
                          S.jsx("input", {
                            id: "password",
                            type: "password",
                            value: o,
                            onChange: (p) => l(p.target.value),
                            className:
                              "w-full h-[50px] py-3 px-4 border-[1.4px] border-[#DBDCDE] rounded-[8px] focus:outline-none focus:ring-0 placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal]",
                            required: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                  S.jsxs("div", {
                    className:
                      "mt-2 mb-6 flex items-center gap-3 cursor-pointer",
                    children: [
                      S.jsx("input", { type: "checkbox" }),
                      S.jsx("p", {
                        className: "text-[#919191] text-sm font-normal",
                        children: "Remember Password",
                      }),
                    ],
                  }),
                  S.jsx("button", {
                    type: "submit",
                    className:
                      "py-[18px] px-[60px] bg-[var(--primary)] rounded-[5px] text-white text-base font-bold max-w-[192px] cursor-pointer",
                    children: "Sign In",
                  }),
                ],
              }),
            ],
          }),
          S.jsx("div", {
            className: "",
            children: S.jsx("img", {
              className: "bg-cover rounded-[5px]",
              src: yE,
              alt: "Login Banner",
            }),
          }),
        ],
      }),
    });
  },
  SE = () => {
    const [n, r] = x.useState(""),
      [o, l] = x.useState(0),
      s = (d) => {
        let v = 0;
        return (
          d.length >= 8 && v++,
          /[A-Z]/.test(d) && v++,
          /[a-z]/.test(d) && v++,
          /\d/.test(d) && v++,
          /[\W_]/.test(d) && v++,
          v
        );
      },
      f = (d) => {
        const v = d.target.value;
        r(v), l(s(v));
      };
    return S.jsxs("div", {
      className: "w-full max-w-sm",
      children: [
        S.jsx("input", {
          type: "password",
          value: n,
          onChange: f,
          placeholder: "Enter password",
          className: "w-full border rounded px-3 py-2",
        }),
        S.jsx("div", {
          className: "h-2 mt-2 w-full bg-gray-200 rounded overflow-hidden",
          children: S.jsx("div", {
            className: "h-full bg-blue-600 transition-all duration-300",
            style: { width: `${(o / 5) * 100}%` },
          }),
        }),
      ],
    });
  },
  sg = () => {
    const n = Er(),
      [r, o] = x.useState("Error"),
      [l, s] = x.useState(!1);
    let { invitation: f, setInvitation: d } = x.useContext(wi);
    const [v, h] = x.useState({
        code: "",
        email: "",
        firstName: "",
        lastName: "",
        title: "",
        company: "",
        phone: "",
        extension: "",
      }),
      m = {
        position: "bottom-left",
        autoClose: 2e3,
        hideProgressBar: !1,
        closeOnClick: !1,
        pauseOnHover: !0,
        draggable: !0,
        progress: void 0,
        theme: "colored",
        style: { background: "var(--primary2)", color: "#fff" },
      },
      p = (b) => {
        b.preventDefault();
        const {
          email: T,
          firstName: w,
          lastName: O,
          title: E,
          company: H,
          phone: j,
          extension: D,
        } = v;
        if (!T) return y("Email is required");
        if (!w) return y("First Name is required");
        if (!O) return y("Last Name is required");
        if (!E) return y("Title is required");
        if (!H) return y("Company is required");
        if (!j) return y("Phone number is required");
        if (!D) return y("Extension is required");
        if (!l) return y("Please agree to the Terms and Privacy Policy");
        Oe.success("Next Step!", {
          ...m,
          style: { background: "var(--primary)", color: "#fff" },
        }),
          d(v),
          n("/register2");
      },
      y = (b) => {
        o(b), Oe.error(b, m);
      };
    return S.jsxs(S.Fragment, {
      children: [
        S.jsx("h2", {
          className:
            "text-[var(--primary2)] pb-5 text-[32px] not-italic font-semibold leading-[normal]",
          children: "Create your Account",
        }),
        S.jsxs("div", {
          className:
            "max-w-[855px] px-[65px] py-[37px] bg-[#fff] rounded-[5px] formboxshadow",
          children: [
            S.jsxs("div", {
              className:
                "max-w-[280px] mx-auto flex justify-between items-center relative",
              children: [
                S.jsx("div", {
                  className:
                    "bg-[var(--primary)] w-[22px] h-[22px] rounded-full border-[1px] border-[var(--primary)] relative z-[2] flex justify-center items-center text-[12px]",
                }),
                S.jsx("div", {
                  className:
                    "w-full border-[1px] border-[var(--primary)] absolute z-[1]",
                }),
                S.jsx("div", {
                  className:
                    "bg-[var(--primary)] w-[32px] h-[32px] rounded-full border-[1px] border-[var(--primary)] relative z-[2]",
                }),
              ],
            }),
            S.jsxs("div", {
              className:
                "pt-[25px] max-w-[346px] mx-auto flex justify-between items-center ",
              children: [
                S.jsx("p", {
                  className:
                    "text-[var(--primary2)] text-base not-italic font-semibold leading-[normal]",
                  children: "User Info",
                }),
                S.jsx("p", {
                  className:
                    "text-[#919191] text-base not-italic font-medium leading-[normal]",
                  children: "Create Account",
                }),
              ],
            }),
            S.jsxs("form", {
              className: "flex flex-col gap-y-6 pt-[58px]",
              onSubmit: p,
              children: [
                S.jsx(pr, {
                  label: "Invitation Code (Optional)",
                  value: v.code || f.code,
                  onChange: (b) => h({ ...v, code: b }),
                }),
                S.jsx(pr, {
                  label: "Email",
                  type: "email",
                  required: !0,
                  value: v.email || f.email,
                  onChange: (b) => h({ ...v, email: b }),
                }),
                S.jsxs("div", {
                  className: "flex gap-x-[41px]",
                  children: [
                    S.jsx(pr, {
                      label: "First Name",
                      value: v.firstName || f.firstName,
                      onChange: (b) => h({ ...v, firstName: b }),
                      wrapperClass: "w-1/2",
                    }),
                    S.jsx(pr, {
                      label: "Last Name",
                      value: v.lastName || f.lastName,
                      onChange: (b) => h({ ...v, lastName: b }),
                      wrapperClass: "w-1/2",
                    }),
                  ],
                }),
                S.jsxs("div", {
                  className: "flex gap-x-[41px]",
                  children: [
                    S.jsx(pr, {
                      label: "Title",
                      value: v.title || f.title,
                      onChange: (b) => h({ ...v, title: b }),
                      wrapperClass: "w-1/2",
                    }),
                    S.jsx(pr, {
                      label: "Company",
                      value: v.company || f.company,
                      onChange: (b) => h({ ...v, company: b }),
                      wrapperClass: "w-1/2",
                    }),
                  ],
                }),
                S.jsxs("div", {
                  className: "flex gap-x-[41px]",
                  children: [
                    S.jsx(pr, {
                      label: "Phone",
                      placeholder: "(123) 4567890",
                      type: "number",
                      value: v.phone || f.phone,
                      onChange: (b) => h({ ...v, phone: b }),
                      wrapperClass: "w-1/2",
                    }),
                    S.jsx(pr, {
                      label: "Extension",
                      placeholder: "123",
                      value: v.extension || f.extension,
                      onChange: (b) => h({ ...v, extension: b }),
                      wrapperClass: "w-1/2",
                    }),
                  ],
                }),
                S.jsxs("div", {
                  className: "flex items-center gap-3 cursor-pointer",
                  children: [
                    S.jsx("input", {
                      type: "checkbox",
                      className: "w-5 h-5 rounded",
                      checked: l,
                      onChange: (b) => s(b.target.checked),
                    }),
                    S.jsx("p", {
                      className: "text-[#919191] text-sm font-normal",
                      children:
                        "I acknowledge that I have read and agree to the Terms of Use and Privacy Policy.",
                    }),
                  ],
                }),
                S.jsx("button", {
                  type: "submit",
                  className:
                    "py-[18px] px-[60px] bg-[var(--primary)] rounded-[5px] text-white text-base font-bold max-w-[192px] cursor-pointer",
                  children: "Continue",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  pr = ({
    label: n,
    value: r,
    onChange: o,
    type: l = "text",
    placeholder: s,
    wrapperClass: f = "flex flex-col gap-y-2",
  }) =>
    S.jsxs("div", {
      className: f,
      children: [
        S.jsx("label", {
          className: "text-[var(--primary2)] text-base font-medium",
          children: n,
        }),
        S.jsx("input", {
          type: l,
          value: r,
          placeholder: s,
          onChange: (d) => o(d.target.value),
          className:
            "w-full h-[50px] py-3 px-4 border border-[#DBDCDE] rounded-[8px] focus:outline-none focus:ring-0 placeholder:text-[#919191] placeholder:text-sm cursor-pointer",
        }),
      ],
    });
var rd = { exports: {} },
  ld,
  cg;
function CE() {
  if (cg) return ld;
  cg = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return (ld = n), ld;
}
var od, ug;
function EE() {
  if (ug) return od;
  ug = 1;
  var n = CE();
  function r() {}
  function o() {}
  return (
    (o.resetWarningCache = r),
    (od = function () {
      function l(d, v, h, m, p, y) {
        if (y !== n) {
          var b = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw ((b.name = "Invariant Violation"), b);
        }
      }
      l.isRequired = l;
      function s() {
        return l;
      }
      var f = {
        array: l,
        bigint: l,
        bool: l,
        func: l,
        number: l,
        object: l,
        string: l,
        symbol: l,
        any: l,
        arrayOf: s,
        element: l,
        elementType: l,
        instanceOf: s,
        node: l,
        objectOf: s,
        oneOf: s,
        oneOfType: s,
        shape: s,
        exact: s,
        checkPropTypes: o,
        resetWarningCache: r,
      };
      return (f.PropTypes = f), f;
    }),
    od
  );
}
var fg;
function TE() {
  return fg || ((fg = 1), (rd.exports = EE()())), rd.exports;
}
var _E = TE();
const pn = Ei(_E);
var OE = [
  "sitekey",
  "onChange",
  "theme",
  "type",
  "tabindex",
  "onExpired",
  "onErrored",
  "size",
  "stoken",
  "grecaptcha",
  "badge",
  "hl",
  "isolated",
];
function $d() {
  return (
    ($d = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            for (var l in o)
              Object.prototype.hasOwnProperty.call(o, l) && (n[l] = o[l]);
          }
          return n;
        }),
    $d.apply(this, arguments)
  );
}
function wE(n, r) {
  if (n == null) return {};
  var o = {},
    l = Object.keys(n),
    s,
    f;
  for (f = 0; f < l.length; f++)
    (s = l[f]), !(r.indexOf(s) >= 0) && (o[s] = n[s]);
  return o;
}
function Xs(n) {
  if (n === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return n;
}
function jE(n, r) {
  (n.prototype = Object.create(r.prototype)),
    (n.prototype.constructor = n),
    Pd(n, r);
}
function Pd(n, r) {
  return (
    (Pd = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (l, s) {
          return (l.__proto__ = s), l;
        }),
    Pd(n, r)
  );
}
var Rc = (function (n) {
  jE(r, n);
  function r() {
    var l;
    return (
      (l = n.call(this) || this),
      (l.handleExpired = l.handleExpired.bind(Xs(l))),
      (l.handleErrored = l.handleErrored.bind(Xs(l))),
      (l.handleChange = l.handleChange.bind(Xs(l))),
      (l.handleRecaptchaRef = l.handleRecaptchaRef.bind(Xs(l))),
      l
    );
  }
  var o = r.prototype;
  return (
    (o.getCaptchaFunction = function (s) {
      return this.props.grecaptcha
        ? this.props.grecaptcha.enterprise
          ? this.props.grecaptcha.enterprise[s]
          : this.props.grecaptcha[s]
        : null;
    }),
    (o.getValue = function () {
      var s = this.getCaptchaFunction("getResponse");
      return s && this._widgetId !== void 0 ? s(this._widgetId) : null;
    }),
    (o.getWidgetId = function () {
      return this.props.grecaptcha && this._widgetId !== void 0
        ? this._widgetId
        : null;
    }),
    (o.execute = function () {
      var s = this.getCaptchaFunction("execute");
      if (s && this._widgetId !== void 0) return s(this._widgetId);
      this._executeRequested = !0;
    }),
    (o.executeAsync = function () {
      var s = this;
      return new Promise(function (f, d) {
        (s.executionResolve = f), (s.executionReject = d), s.execute();
      });
    }),
    (o.reset = function () {
      var s = this.getCaptchaFunction("reset");
      s && this._widgetId !== void 0 && s(this._widgetId);
    }),
    (o.forceReset = function () {
      var s = this.getCaptchaFunction("reset");
      s && s();
    }),
    (o.handleExpired = function () {
      this.props.onExpired ? this.props.onExpired() : this.handleChange(null);
    }),
    (o.handleErrored = function () {
      this.props.onErrored && this.props.onErrored(),
        this.executionReject &&
          (this.executionReject(),
          delete this.executionResolve,
          delete this.executionReject);
    }),
    (o.handleChange = function (s) {
      this.props.onChange && this.props.onChange(s),
        this.executionResolve &&
          (this.executionResolve(s),
          delete this.executionReject,
          delete this.executionResolve);
    }),
    (o.explicitRender = function () {
      var s = this.getCaptchaFunction("render");
      if (s && this._widgetId === void 0) {
        var f = document.createElement("div");
        (this._widgetId = s(f, {
          sitekey: this.props.sitekey,
          callback: this.handleChange,
          theme: this.props.theme,
          type: this.props.type,
          tabindex: this.props.tabindex,
          "expired-callback": this.handleExpired,
          "error-callback": this.handleErrored,
          size: this.props.size,
          stoken: this.props.stoken,
          hl: this.props.hl,
          badge: this.props.badge,
          isolated: this.props.isolated,
        })),
          this.captcha.appendChild(f);
      }
      this._executeRequested &&
        this.props.grecaptcha &&
        this._widgetId !== void 0 &&
        ((this._executeRequested = !1), this.execute());
    }),
    (o.componentDidMount = function () {
      this.explicitRender();
    }),
    (o.componentDidUpdate = function () {
      this.explicitRender();
    }),
    (o.handleRecaptchaRef = function (s) {
      this.captcha = s;
    }),
    (o.render = function () {
      var s = this.props;
      s.sitekey,
        s.onChange,
        s.theme,
        s.type,
        s.tabindex,
        s.onExpired,
        s.onErrored,
        s.size,
        s.stoken,
        s.grecaptcha,
        s.badge,
        s.hl,
        s.isolated;
      var f = wE(s, OE);
      return x.createElement(
        "div",
        $d({}, f, { ref: this.handleRecaptchaRef })
      );
    }),
    r
  );
})(x.Component);
Rc.displayName = "ReCAPTCHA";
Rc.propTypes = {
  sitekey: pn.string.isRequired,
  onChange: pn.func,
  grecaptcha: pn.object,
  theme: pn.oneOf(["dark", "light"]),
  type: pn.oneOf(["image", "audio"]),
  tabindex: pn.number,
  onExpired: pn.func,
  onErrored: pn.func,
  size: pn.oneOf(["compact", "normal", "invisible"]),
  stoken: pn.string,
  hl: pn.string,
  badge: pn.oneOf(["bottomright", "bottomleft", "inline"]),
  isolated: pn.bool,
};
Rc.defaultProps = {
  onChange: function () {},
  theme: "light",
  type: "image",
  tabindex: 0,
  size: "normal",
  badge: "bottomright",
};
var id = { exports: {} },
  Je = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dg;
function RE() {
  if (dg) return Je;
  dg = 1;
  var n = typeof Symbol == "function" && Symbol.for,
    r = n ? Symbol.for("react.element") : 60103,
    o = n ? Symbol.for("react.portal") : 60106,
    l = n ? Symbol.for("react.fragment") : 60107,
    s = n ? Symbol.for("react.strict_mode") : 60108,
    f = n ? Symbol.for("react.profiler") : 60114,
    d = n ? Symbol.for("react.provider") : 60109,
    v = n ? Symbol.for("react.context") : 60110,
    h = n ? Symbol.for("react.async_mode") : 60111,
    m = n ? Symbol.for("react.concurrent_mode") : 60111,
    p = n ? Symbol.for("react.forward_ref") : 60112,
    y = n ? Symbol.for("react.suspense") : 60113,
    b = n ? Symbol.for("react.suspense_list") : 60120,
    T = n ? Symbol.for("react.memo") : 60115,
    w = n ? Symbol.for("react.lazy") : 60116,
    O = n ? Symbol.for("react.block") : 60121,
    E = n ? Symbol.for("react.fundamental") : 60117,
    H = n ? Symbol.for("react.responder") : 60118,
    j = n ? Symbol.for("react.scope") : 60119;
  function D(R) {
    if (typeof R == "object" && R !== null) {
      var F = R.$$typeof;
      switch (F) {
        case r:
          switch (((R = R.type), R)) {
            case h:
            case m:
            case l:
            case f:
            case s:
            case y:
              return R;
            default:
              switch (((R = R && R.$$typeof), R)) {
                case v:
                case p:
                case w:
                case T:
                case d:
                  return R;
                default:
                  return F;
              }
          }
        case o:
          return F;
      }
    }
  }
  function U(R) {
    return D(R) === m;
  }
  return (
    (Je.AsyncMode = h),
    (Je.ConcurrentMode = m),
    (Je.ContextConsumer = v),
    (Je.ContextProvider = d),
    (Je.Element = r),
    (Je.ForwardRef = p),
    (Je.Fragment = l),
    (Je.Lazy = w),
    (Je.Memo = T),
    (Je.Portal = o),
    (Je.Profiler = f),
    (Je.StrictMode = s),
    (Je.Suspense = y),
    (Je.isAsyncMode = function (R) {
      return U(R) || D(R) === h;
    }),
    (Je.isConcurrentMode = U),
    (Je.isContextConsumer = function (R) {
      return D(R) === v;
    }),
    (Je.isContextProvider = function (R) {
      return D(R) === d;
    }),
    (Je.isElement = function (R) {
      return typeof R == "object" && R !== null && R.$$typeof === r;
    }),
    (Je.isForwardRef = function (R) {
      return D(R) === p;
    }),
    (Je.isFragment = function (R) {
      return D(R) === l;
    }),
    (Je.isLazy = function (R) {
      return D(R) === w;
    }),
    (Je.isMemo = function (R) {
      return D(R) === T;
    }),
    (Je.isPortal = function (R) {
      return D(R) === o;
    }),
    (Je.isProfiler = function (R) {
      return D(R) === f;
    }),
    (Je.isStrictMode = function (R) {
      return D(R) === s;
    }),
    (Je.isSuspense = function (R) {
      return D(R) === y;
    }),
    (Je.isValidElementType = function (R) {
      return (
        typeof R == "string" ||
        typeof R == "function" ||
        R === l ||
        R === m ||
        R === f ||
        R === s ||
        R === y ||
        R === b ||
        (typeof R == "object" &&
          R !== null &&
          (R.$$typeof === w ||
            R.$$typeof === T ||
            R.$$typeof === d ||
            R.$$typeof === v ||
            R.$$typeof === p ||
            R.$$typeof === E ||
            R.$$typeof === H ||
            R.$$typeof === j ||
            R.$$typeof === O))
      );
    }),
    (Je.typeOf = D),
    Je
  );
}
var hg;
function AE() {
  return hg || ((hg = 1), (id.exports = RE())), id.exports;
}
var sd, mg;
function NE() {
  if (mg) return sd;
  mg = 1;
  var n = AE(),
    r = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    o = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    l = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    s = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    f = {};
  (f[n.ForwardRef] = l), (f[n.Memo] = s);
  function d(w) {
    return n.isMemo(w) ? s : f[w.$$typeof] || r;
  }
  var v = Object.defineProperty,
    h = Object.getOwnPropertyNames,
    m = Object.getOwnPropertySymbols,
    p = Object.getOwnPropertyDescriptor,
    y = Object.getPrototypeOf,
    b = Object.prototype;
  function T(w, O, E) {
    if (typeof O != "string") {
      if (b) {
        var H = y(O);
        H && H !== b && T(w, H, E);
      }
      var j = h(O);
      m && (j = j.concat(m(O)));
      for (var D = d(w), U = d(O), R = 0; R < j.length; ++R) {
        var F = j[R];
        if (!o[F] && !(E && E[F]) && !(U && U[F]) && !(D && D[F])) {
          var _ = p(O, F);
          try {
            v(w, F, _);
          } catch {}
        }
      }
    }
    return w;
  }
  return (sd = T), sd;
}
var ME = NE();
const DE = Ei(ME);
function qd() {
  return (
    (qd =
      Object.assign ||
      function (n) {
        for (var r = 1; r < arguments.length; r++) {
          var o = arguments[r];
          for (var l in o)
            Object.prototype.hasOwnProperty.call(o, l) && (n[l] = o[l]);
        }
        return n;
      }),
    qd.apply(this, arguments)
  );
}
function zE(n, r) {
  if (n == null) return {};
  var o = {},
    l = Object.keys(n),
    s,
    f;
  for (f = 0; f < l.length; f++)
    (s = l[f]), !(r.indexOf(s) >= 0) && (o[s] = n[s]);
  return o;
}
function LE(n, r) {
  (n.prototype = Object.create(r.prototype)),
    (n.prototype.constructor = n),
    (n.__proto__ = r);
}
var ea = {},
  HE = 0;
function BE(n, r) {
  return (
    (r = r || {}),
    function (l) {
      var s = l.displayName || l.name || "Component",
        f = (function (v) {
          LE(h, v);
          function h(p, y) {
            var b;
            return (
              (b = v.call(this, p, y) || this),
              (b.state = {}),
              (b.__scriptURL = ""),
              b
            );
          }
          var m = h.prototype;
          return (
            (m.asyncScriptLoaderGetScriptLoaderID = function () {
              return (
                this.__scriptLoaderID ||
                  (this.__scriptLoaderID = "async-script-loader-" + HE++),
                this.__scriptLoaderID
              );
            }),
            (m.setupScriptURL = function () {
              return (
                (this.__scriptURL = typeof n == "function" ? n() : n),
                this.__scriptURL
              );
            }),
            (m.asyncScriptLoaderHandleLoad = function (y) {
              var b = this;
              this.setState(y, function () {
                return (
                  b.props.asyncScriptOnLoad &&
                  b.props.asyncScriptOnLoad(b.state)
                );
              });
            }),
            (m.asyncScriptLoaderTriggerOnScriptLoaded = function () {
              var y = ea[this.__scriptURL];
              if (!y || !y.loaded) throw new Error("Script is not loaded.");
              for (var b in y.observers) y.observers[b](y);
              delete window[r.callbackName];
            }),
            (m.componentDidMount = function () {
              var y = this,
                b = this.setupScriptURL(),
                T = this.asyncScriptLoaderGetScriptLoaderID(),
                w = r,
                O = w.globalName,
                E = w.callbackName,
                H = w.scriptId;
              if (
                (O &&
                  typeof window[O] < "u" &&
                  (ea[b] = { loaded: !0, observers: {} }),
                ea[b])
              ) {
                var j = ea[b];
                if (j && (j.loaded || j.errored)) {
                  this.asyncScriptLoaderHandleLoad(j);
                  return;
                }
                j.observers[T] = function (_) {
                  return y.asyncScriptLoaderHandleLoad(_);
                };
                return;
              }
              var D = {};
              (D[T] = function (_) {
                return y.asyncScriptLoaderHandleLoad(_);
              }),
                (ea[b] = { loaded: !1, observers: D });
              var U = document.createElement("script");
              (U.src = b), (U.async = !0);
              for (var R in r.attributes) U.setAttribute(R, r.attributes[R]);
              H && (U.id = H);
              var F = function (q) {
                if (ea[b]) {
                  var K = ea[b],
                    B = K.observers;
                  for (var $ in B) q(B[$]) && delete B[$];
                }
              };
              E &&
                typeof window < "u" &&
                (window[E] = function () {
                  return y.asyncScriptLoaderTriggerOnScriptLoaded();
                }),
                (U.onload = function () {
                  var _ = ea[b];
                  _ &&
                    ((_.loaded = !0),
                    F(function (q) {
                      return E ? !1 : (q(_), !0);
                    }));
                }),
                (U.onerror = function () {
                  var _ = ea[b];
                  _ &&
                    ((_.errored = !0),
                    F(function (q) {
                      return q(_), !0;
                    }));
                }),
                document.body.appendChild(U);
            }),
            (m.componentWillUnmount = function () {
              var y = this.__scriptURL;
              if (r.removeOnUnmount === !0)
                for (
                  var b = document.getElementsByTagName("script"), T = 0;
                  T < b.length;
                  T += 1
                )
                  b[T].src.indexOf(y) > -1 &&
                    b[T].parentNode &&
                    b[T].parentNode.removeChild(b[T]);
              var w = ea[y];
              w &&
                (delete w.observers[this.asyncScriptLoaderGetScriptLoaderID()],
                r.removeOnUnmount === !0 && delete ea[y]);
            }),
            (m.render = function () {
              var y = r.globalName,
                b = this.props;
              b.asyncScriptOnLoad;
              var T = b.forwardedRef,
                w = zE(b, ["asyncScriptOnLoad", "forwardedRef"]);
              return (
                y &&
                  typeof window < "u" &&
                  (w[y] = typeof window[y] < "u" ? window[y] : void 0),
                (w.ref = T),
                x.createElement(l, w)
              );
            }),
            h
          );
        })(x.Component),
        d = x.forwardRef(function (v, h) {
          return x.createElement(f, qd({}, v, { forwardedRef: h }));
        });
      return (
        (d.displayName = "AsyncScriptLoader(" + s + ")"),
        (d.propTypes = { asyncScriptOnLoad: pn.func }),
        DE(d, l)
      );
    }
  );
}
var Vd = "onloadcallback",
  UE = "grecaptcha";
function kd() {
  return (typeof window < "u" && window.recaptchaOptions) || {};
}
function $E() {
  var n = kd(),
    r = n.useRecaptchaNet ? "recaptcha.net" : "www.google.com";
  return n.enterprise
    ? "https://" +
        r +
        "/recaptcha/enterprise.js?onload=" +
        Vd +
        "&render=explicit"
    : "https://" + r + "/recaptcha/api.js?onload=" + Vd + "&render=explicit";
}
BE($E, {
  callbackName: Vd,
  globalName: UE,
  attributes: kd().nonce ? { nonce: kd().nonce } : {},
})(Rc);
const PE = async (n) => {
    try {
      const r = await fetch(
          "https://4amitest-bli6.wp1.sh/wp-json/custom/v1/register",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(n),
          }
        ),
        o = await r.json();
      return r.ok
        ? { message: "Registration successful!", login: !0 }
        : r.status === 400
        ? `Error: ${o.error || "Registration failed"}`
        : `Error: ${o.error || "An unexpected error occurred"}`;
    } catch (r) {
      return new Error(r.meessage);
    } finally {
    }
  },
  qE = () => {
    const [n, r] = x.useState(null);
    let [o, l] = x.useState("");
    const [s, f] = x.useState(""),
      [d, v] = x.useState(0),
      [h, m] = x.useState("");
    let { invitation: p, setInvitation: y } = x.useContext(wi);
    const [b, T] = x.useState(""),
      [w, O] = x.useState(!1);
    let E = Er();
    const H = (F) => {
        let _ = 0;
        return (
          F.length >= 8 && _++,
          /[A-Z]/.test(F) && _++,
          /[a-z]/.test(F) && _++,
          /\d/.test(F) && _++,
          /[\W_]/.test(F) && _++,
          _
        );
      },
      j = {
        position: "bottom-left",
        autoClose: 2e3,
        hideProgressBar: !1,
        closeOnClick: !1,
        pauseOnHover: !0,
        draggable: !0,
        progress: void 0,
        theme: "colored",
        style: { background: "var(--primary2)", color: "#fff" },
      },
      D = (F) => {
        console.log(d);
        const _ = F.target.value;
        f(_), v(H(_));
      };
    let U = { userName: o, password: s },
      R = async (F) => {
        if ((F.preventDefault(), !o))
          return Oe.error("Username is required", j);
        if (!s) return Oe.error("Password is required", j);
        if (!h) return Oe.error("Confirm Password is required", j);
        if (s !== h) Oe.error("Password does not match", j);
        else {
          y({ ...p, ...U });
          let _ = {
              username: o,
              password: s,
              email: p.email,
              firstName: p.firstName,
              lastName: p.lastName,
              title: p.title,
              company: p.company,
              phone: p.phone,
              extension: p.extension,
              code: p.code,
            },
            q = await PE(_);
          q != null &&
            q.login &&
            (E("/regsuccess"),
            Oe.success(q.message, {
              ...j,
              style: { background: "var(--primary)", color: "#fff" },
            })),
            Oe.error(q, j);
        }
      };
    return S.jsxs(S.Fragment, {
      children: [
        b,
        S.jsx("h2", {
          className:
            "text-[var(--primary2)] pb-5 text-[32px] not-italic font-semibold leading-[normal]",
          children: "Create your Account",
        }),
        S.jsx("div", {
          className:
            "max-w-[855px] px-[65px] py-[37px] bg-[#fff] rounded-[5px] formboxshadow",
          children: S.jsxs("div", {
            className: "",
            children: [
              S.jsxs("div", {
                className:
                  "max-w-[280px] mx-auto flex justify-between items-center relative",
                children: [
                  S.jsx("div", {
                    className:
                      "bg-[var(--primary)] w-[22px] h-[22px] rounded-full border-[1px] border-[var(--primary)] relative z-[2] flex justify-center items-center text-[12px]",
                  }),
                  S.jsx("div", {
                    className:
                      "w-full border-[1px] border-[var(--primary)] absolute z-[1]",
                  }),
                  S.jsx("div", {
                    className:
                      "bg-[var(--primary)] w-[32px] h-[32px] rounded-full border-[1px] border-[var(--primary)] relative z-[2]",
                  }),
                ],
              }),
              S.jsxs("div", {
                className:
                  "pb-[60px] pt-[25px] max-w-[346px] mx-auto flex justify-between items-center ",
                children: [
                  S.jsx("p", {
                    className:
                      "text-[var(--primary2)] text-base not-italic font-semibold leading-[normal]",
                    children: "User Info",
                  }),
                  S.jsx("p", {
                    className:
                      "text-[#919191] text-base not-italic font-medium leading-[normal]",
                    children: "Create Account",
                  }),
                ],
              }),
              S.jsxs("form", {
                action: "",
                className: "flex flex-col gap-y-6",
                children: [
                  S.jsxs("div", {
                    className: "flex flex-col gap-y-2",
                    children: [
                      S.jsx("label", {
                        htmlFor: "",
                        className:
                          "text-[var(--primary2)] text-base not-italic font-medium leading-[normal]",
                        children: "Username",
                      }),
                      S.jsx("input", {
                        type: "text",
                        onChange: (F) => l(F.target.value),
                        className:
                          "w-full h-[50px] py-3 px-4 border-[1.4px] border-[#DBDCDE] rounded-[8px] focus:outline-none focus:ring-0 placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal]",
                      }),
                    ],
                  }),
                  S.jsxs("div", {
                    className: "flex flex-col gap-y-2",
                    children: [
                      S.jsx("label", {
                        htmlFor: "",
                        className:
                          "text-[var(--primary2)] text-base not-italic font-medium leading-[normal]",
                        children: "Password",
                      }),
                      S.jsx("input", {
                        type: "text",
                        onChange: D,
                        className:
                          "w-full h-[50px] py-3 px-4 border-[1.4px] border-[#DBDCDE] rounded-[8px] focus:outline-none focus:ring-0 placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal]",
                      }),
                      S.jsxs("div", {
                        className: "",
                        children: [
                          S.jsx("p", {
                            className:
                              "text-[var(--primary2)] text-base not-italic font-normal leading-6",
                            children: "Password strength",
                          }),
                          S.jsx("div", {
                            className:
                              "h-[6px] rounded-[4px] bg-[var(--primary2)] w-full my-[10px] transition-all duration-300",
                            style: { width: `${(d / 5) * 100}%` },
                          }),
                          S.jsx("p", {
                            className:
                              "text-[#919191] text-sm not-italic font-normal leading-[1.31rem]",
                            children: "Minimum 6 characters",
                          }),
                        ],
                      }),
                    ],
                  }),
                  S.jsxs("div", {
                    className: "flex flex-col gap-y-2",
                    children: [
                      S.jsx("label", {
                        htmlFor: "",
                        className:
                          "text-[var(--primary2)] text-base not-italic font-medium leading-[normal]",
                        children: "Confirm Password",
                      }),
                      S.jsx("input", {
                        type: "text",
                        onChange: (F) => m(F.target.value),
                        className:
                          "w-full h-[50px] py-3 px-4 border-[1.4px] border-[#DBDCDE] rounded-[8px] focus:outline-none focus:ring-0 placeholder:text-[#919191] placeholder:text-sm placeholder:not-italic placeholder:font-normal placeholder:leading-[normal]",
                      }),
                    ],
                  }),
                  S.jsxs("div", {
                    className: "flex items-start gap-2",
                    children: [
                      S.jsx(Fl, {
                        to: "/",
                        className:
                          "py-[18px] px-[60px] rounded-[5px] text-[var(--primary2)] border border-[var(--primary2)] text-base not-italic font-bold leading-[normal] max-w-[192px] continue-button cursor-pointer",
                        children: "Back",
                      }),
                      S.jsx(Fl, {
                        to: "/",
                        className:
                          "py-[18px] px-[60px] bg-[var(--primary)] rounded-[5px] text-[#FFF] text-base not-italic font-bold leading-[normal] max-w-[192px] continue-button cursor-pointer",
                        onClick: R,
                        children: "Sign Up",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  VE = () =>
    S.jsx(S.Fragment, {
      children: S.jsxs("div", {
        className: "p-[60px] bg-[#E9E9E9] max-w-[800px]",
        children: [
          S.jsx("div", {
            className:
              "w-[75px] h-[75px] bg-[var(--primary)] mx-auto mb-10 rounded-full flex justify-center items-center",
            children: S.jsx(Gy, {
              className:
                "text-[#FFF] text-[32px] not-italic font-semibold leading-10",
            }),
          }),
          S.jsx("h2", {
            className:
              "text-[#000] text-[32px] not-italic font-bold leading-10 text-center",
            children: "Registration Successful!",
          }),
          S.jsx("p", {
            className:
              "pt-6 pb-10 text-[#000] text-center text-[16px] not-italic font-normal leading-6 max-w-[680px]",
            children:
              "Your account has been successfully created. You can now log in to access your dashboard and get started!",
          }),
          S.jsx("div", {
            className: "w-full flex justify-center",
            children: S.jsx(Fl, {
              to: "/login",
              className:
                "bg-[var(--primary)] py-[18px] px-[60px] text-[#fff] text-[16px] not-italic text-center rounded-[5px]  font-semibold leading-7",
              children: "Go to Log In",
            }),
          }),
        ],
      }),
    }),
  kE = ({ children: n }) =>
    localStorage.getItem("logintoken", "akash@123")
      ? n
      : S.jsx($y, { to: "/login", replace: !0 }),
  GE = ({ children: n }) =>
    localStorage.getItem("com_auth_token", "akash")
      ? n
      : S.jsx($y, { to: "/companyregistration", replace: !0 }),
  XE = () => {
    let { islogin: n } = x.useContext(wi);
    return (
      x.useEffect(() => {
        console.log("islogin", n);
      }),
      S.jsx("div", { children: "Demo4" })
    );
  };
var cd = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ var vg;
function YE() {
  return (
    vg ||
      ((vg = 1),
      (function (n) {
        (function () {
          var r = {}.hasOwnProperty;
          function o() {
            for (var f = "", d = 0; d < arguments.length; d++) {
              var v = arguments[d];
              v && (f = s(f, l(v)));
            }
            return f;
          }
          function l(f) {
            if (typeof f == "string" || typeof f == "number") return f;
            if (typeof f != "object") return "";
            if (Array.isArray(f)) return o.apply(null, f);
            if (
              f.toString !== Object.prototype.toString &&
              !f.toString.toString().includes("[native code]")
            )
              return f.toString();
            var d = "";
            for (var v in f) r.call(f, v) && f[v] && (d = s(d, v));
            return d;
          }
          function s(f, d) {
            return d ? (f ? f + " " + d : f + d) : f;
          }
          n.exports
            ? ((o.default = o), (n.exports = o))
            : (window.classNames = o);
        })();
      })(cd)),
    cd.exports
  );
}
var FE = YE();
const Nt = Ei(FE);
function cn() {
  return (
    (cn = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            for (var l in o) ({}).hasOwnProperty.call(o, l) && (n[l] = o[l]);
          }
          return n;
        }),
    cn.apply(null, arguments)
  );
}
function Xe(n) {
  "@babel/helpers - typeof";
  return (
    (Xe =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (r) {
            return typeof r;
          }
        : function (r) {
            return r &&
              typeof Symbol == "function" &&
              r.constructor === Symbol &&
              r !== Symbol.prototype
              ? "symbol"
              : typeof r;
          }),
    Xe(n)
  );
}
var IE = Symbol.for("react.element"),
  QE = Symbol.for("react.transitional.element"),
  ZE = Symbol.for("react.fragment");
function KE(n) {
  return (
    n &&
    Xe(n) === "object" &&
    (n.$$typeof === IE || n.$$typeof === QE) &&
    n.type === ZE
  );
}
var Gd = {},
  JE = function (r) {};
function WE(n, r) {}
function e3(n, r) {}
function t3() {
  Gd = {};
}
function Yy(n, r, o) {
  !r && !Gd[o] && (n(!1, o), (Gd[o] = !0));
}
function ji(n, r) {
  Yy(WE, n, r);
}
function n3(n, r) {
  Yy(e3, n, r);
}
ji.preMessage = JE;
ji.resetWarned = t3;
ji.noteOnce = n3;
function a3(n, r) {
  if (Xe(n) != "object" || !n) return n;
  var o = n[Symbol.toPrimitive];
  if (o !== void 0) {
    var l = o.call(n, r);
    if (Xe(l) != "object") return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(n);
}
function Fy(n) {
  var r = a3(n, "string");
  return Xe(r) == "symbol" ? r : r + "";
}
function Ee(n, r, o) {
  return (
    (r = Fy(r)) in n
      ? Object.defineProperty(n, r, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (n[r] = o),
    n
  );
}
function pg(n, r) {
  var o = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(n);
    r &&
      (l = l.filter(function (s) {
        return Object.getOwnPropertyDescriptor(n, s).enumerable;
      })),
      o.push.apply(o, l);
  }
  return o;
}
function be(n) {
  for (var r = 1; r < arguments.length; r++) {
    var o = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? pg(Object(o), !0).forEach(function (l) {
          Ee(n, l, o[l]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
      : pg(Object(o)).forEach(function (l) {
          Object.defineProperty(n, l, Object.getOwnPropertyDescriptor(o, l));
        });
  }
  return n;
}
function gg(n) {
  return n instanceof HTMLElement || n instanceof SVGElement;
}
function r3(n) {
  return n && Xe(n) === "object" && gg(n.nativeElement)
    ? n.nativeElement
    : gg(n)
    ? n
    : null;
}
function l3(n) {
  var r = r3(n);
  if (r) return r;
  if (n instanceof fe.Component) {
    var o;
    return (o = Dd.findDOMNode) === null || o === void 0
      ? void 0
      : o.call(Dd, n);
  }
  return null;
}
var ud = { exports: {} },
  We = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yg;
function o3() {
  if (yg) return We;
  yg = 1;
  var n = Symbol.for("react.element"),
    r = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    l = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    f = Symbol.for("react.provider"),
    d = Symbol.for("react.context"),
    v = Symbol.for("react.server_context"),
    h = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    p = Symbol.for("react.suspense_list"),
    y = Symbol.for("react.memo"),
    b = Symbol.for("react.lazy"),
    T = Symbol.for("react.offscreen"),
    w;
  w = Symbol.for("react.module.reference");
  function O(E) {
    if (typeof E == "object" && E !== null) {
      var H = E.$$typeof;
      switch (H) {
        case n:
          switch (((E = E.type), E)) {
            case o:
            case s:
            case l:
            case m:
            case p:
              return E;
            default:
              switch (((E = E && E.$$typeof), E)) {
                case v:
                case d:
                case h:
                case b:
                case y:
                case f:
                  return E;
                default:
                  return H;
              }
          }
        case r:
          return H;
      }
    }
  }
  return (
    (We.ContextConsumer = d),
    (We.ContextProvider = f),
    (We.Element = n),
    (We.ForwardRef = h),
    (We.Fragment = o),
    (We.Lazy = b),
    (We.Memo = y),
    (We.Portal = r),
    (We.Profiler = s),
    (We.StrictMode = l),
    (We.Suspense = m),
    (We.SuspenseList = p),
    (We.isAsyncMode = function () {
      return !1;
    }),
    (We.isConcurrentMode = function () {
      return !1;
    }),
    (We.isContextConsumer = function (E) {
      return O(E) === d;
    }),
    (We.isContextProvider = function (E) {
      return O(E) === f;
    }),
    (We.isElement = function (E) {
      return typeof E == "object" && E !== null && E.$$typeof === n;
    }),
    (We.isForwardRef = function (E) {
      return O(E) === h;
    }),
    (We.isFragment = function (E) {
      return O(E) === o;
    }),
    (We.isLazy = function (E) {
      return O(E) === b;
    }),
    (We.isMemo = function (E) {
      return O(E) === y;
    }),
    (We.isPortal = function (E) {
      return O(E) === r;
    }),
    (We.isProfiler = function (E) {
      return O(E) === s;
    }),
    (We.isStrictMode = function (E) {
      return O(E) === l;
    }),
    (We.isSuspense = function (E) {
      return O(E) === m;
    }),
    (We.isSuspenseList = function (E) {
      return O(E) === p;
    }),
    (We.isValidElementType = function (E) {
      return (
        typeof E == "string" ||
        typeof E == "function" ||
        E === o ||
        E === s ||
        E === l ||
        E === m ||
        E === p ||
        E === T ||
        (typeof E == "object" &&
          E !== null &&
          (E.$$typeof === b ||
            E.$$typeof === y ||
            E.$$typeof === f ||
            E.$$typeof === d ||
            E.$$typeof === h ||
            E.$$typeof === w ||
            E.getModuleId !== void 0))
      );
    }),
    (We.typeOf = O),
    We
  );
}
var bg;
function i3() {
  return bg || ((bg = 1), (ud.exports = o3())), ud.exports;
}
var fd = i3();
function Nh(n, r, o) {
  var l = x.useRef({});
  return (
    (!("value" in l.current) || o(l.current.condition, r)) &&
      ((l.current.value = n()), (l.current.condition = r)),
    l.current.value
  );
}
var s3 = Number(x.version.split(".")[0]),
  Iy = function (r, o) {
    typeof r == "function"
      ? r(o)
      : Xe(r) === "object" && r && "current" in r && (r.current = o);
  },
  Mh = function () {
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    var s = o.filter(Boolean);
    return s.length <= 1
      ? s[0]
      : function (f) {
          o.forEach(function (d) {
            Iy(d, f);
          });
        };
  },
  c3 = function () {
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return Nh(
      function () {
        return Mh.apply(void 0, o);
      },
      o,
      function (s, f) {
        return (
          s.length !== f.length ||
          s.every(function (d, v) {
            return d !== f[v];
          })
        );
      }
    );
  },
  Qy = function (r) {
    var o, l;
    if (!r) return !1;
    if (Zy(r) && s3 >= 19) return !0;
    var s = fd.isMemo(r) ? r.type.type : r.type;
    return !(
      (typeof s == "function" &&
        !((o = s.prototype) !== null && o !== void 0 && o.render) &&
        s.$$typeof !== fd.ForwardRef) ||
      (typeof r == "function" &&
        !((l = r.prototype) !== null && l !== void 0 && l.render) &&
        r.$$typeof !== fd.ForwardRef)
    );
  };
function Zy(n) {
  return x.isValidElement(n) && !KE(n);
}
var Ky = function (r) {
  if (r && Zy(r)) {
    var o = r;
    return o.props.propertyIsEnumerable("ref") ? o.props.ref : o.ref;
  }
  return null;
};
function Xn(n, r) {
  if (!(n instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function xg(n, r) {
  for (var o = 0; o < r.length; o++) {
    var l = r[o];
    (l.enumerable = l.enumerable || !1),
      (l.configurable = !0),
      "value" in l && (l.writable = !0),
      Object.defineProperty(n, Fy(l.key), l);
  }
}
function Yn(n, r, o) {
  return (
    r && xg(n.prototype, r),
    o && xg(n, o),
    Object.defineProperty(n, "prototype", { writable: !1 }),
    n
  );
}
function Xd(n, r) {
  return (
    (Xd = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (o, l) {
          return (o.__proto__ = l), o;
        }),
    Xd(n, r)
  );
}
function Ri(n, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Super expression must either be null or a function");
  (n.prototype = Object.create(r && r.prototype, {
    constructor: { value: n, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(n, "prototype", { writable: !1 }),
    r && Xd(n, r);
}
function hc(n) {
  return (
    (hc = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    hc(n)
  );
}
function Jy() {
  try {
    var n = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (Jy = function () {
    return !!n;
  })();
}
function Qr(n) {
  if (n === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return n;
}
function u3(n, r) {
  if (r && (Xe(r) == "object" || typeof r == "function")) return r;
  if (r !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Qr(n);
}
function Ai(n) {
  var r = Jy();
  return function () {
    var o,
      l = hc(n);
    if (r) {
      var s = hc(this).constructor;
      o = Reflect.construct(l, arguments, s);
    } else o = l.apply(this, arguments);
    return u3(this, o);
  };
}
function Yd(n, r) {
  (r == null || r > n.length) && (r = n.length);
  for (var o = 0, l = Array(r); o < r; o++) l[o] = n[o];
  return l;
}
function f3(n) {
  if (Array.isArray(n)) return Yd(n);
}
function Wy(n) {
  if (
    (typeof Symbol < "u" && n[Symbol.iterator] != null) ||
    n["@@iterator"] != null
  )
    return Array.from(n);
}
function Dh(n, r) {
  if (n) {
    if (typeof n == "string") return Yd(n, r);
    var o = {}.toString.call(n).slice(8, -1);
    return (
      o === "Object" && n.constructor && (o = n.constructor.name),
      o === "Map" || o === "Set"
        ? Array.from(n)
        : o === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
        ? Yd(n, r)
        : void 0
    );
  }
}
function d3() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sn(n) {
  return f3(n) || Wy(n) || Dh(n) || d3();
}
var e1 = function (r) {
    return +setTimeout(r, 16);
  },
  t1 = function (r) {
    return clearTimeout(r);
  };
typeof window < "u" &&
  "requestAnimationFrame" in window &&
  ((e1 = function (r) {
    return window.requestAnimationFrame(r);
  }),
  (t1 = function (r) {
    return window.cancelAnimationFrame(r);
  }));
var Sg = 0,
  zh = new Map();
function n1(n) {
  zh.delete(n);
}
var el = function (r) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Sg += 1;
  var l = Sg;
  function s(f) {
    if (f === 0) n1(l), r();
    else {
      var d = e1(function () {
        s(f - 1);
      });
      zh.set(l, d);
    }
  }
  return s(o), l;
};
el.cancel = function (n) {
  var r = zh.get(n);
  return n1(n), t1(r);
};
function a1(n) {
  if (Array.isArray(n)) return n;
}
function h3(n, r) {
  var o =
    n == null
      ? null
      : (typeof Symbol < "u" && n[Symbol.iterator]) || n["@@iterator"];
  if (o != null) {
    var l,
      s,
      f,
      d,
      v = [],
      h = !0,
      m = !1;
    try {
      if (((f = (o = o.call(n)).next), r === 0)) {
        if (Object(o) !== o) return;
        h = !1;
      } else
        for (
          ;
          !(h = (l = f.call(o)).done) && (v.push(l.value), v.length !== r);
          h = !0
        );
    } catch (p) {
      (m = !0), (s = p);
    } finally {
      try {
        if (!h && o.return != null && ((d = o.return()), Object(d) !== d))
          return;
      } finally {
        if (m) throw s;
      }
    }
    return v;
  }
}
function r1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Re(n, r) {
  return a1(n) || h3(n, r) || Dh(n, r) || r1();
}
function vi(n) {
  for (var r = 0, o, l = 0, s = n.length; s >= 4; ++l, s -= 4)
    (o =
      (n.charCodeAt(l) & 255) |
      ((n.charCodeAt(++l) & 255) << 8) |
      ((n.charCodeAt(++l) & 255) << 16) |
      ((n.charCodeAt(++l) & 255) << 24)),
      (o = (o & 65535) * 1540483477 + (((o >>> 16) * 59797) << 16)),
      (o ^= o >>> 24),
      (r =
        ((o & 65535) * 1540483477 + (((o >>> 16) * 59797) << 16)) ^
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)));
  switch (s) {
    case 3:
      r ^= (n.charCodeAt(l + 2) & 255) << 16;
    case 2:
      r ^= (n.charCodeAt(l + 1) & 255) << 8;
    case 1:
      (r ^= n.charCodeAt(l) & 255),
        (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16));
  }
  return (
    (r ^= r >>> 13),
    (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
    ((r ^ (r >>> 15)) >>> 0).toString(36)
  );
}
function ka() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
function m3(n, r) {
  if (!n) return !1;
  if (n.contains) return n.contains(r);
  for (var o = r; o; ) {
    if (o === n) return !0;
    o = o.parentNode;
  }
  return !1;
}
var Cg = "data-rc-order",
  Eg = "data-rc-priority",
  v3 = "rc-util-key",
  Fd = new Map();
function l1() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    r = n.mark;
  return r ? (r.startsWith("data-") ? r : "data-".concat(r)) : v3;
}
function Ac(n) {
  if (n.attachTo) return n.attachTo;
  var r = document.querySelector("head");
  return r || document.body;
}
function p3(n) {
  return n === "queue" ? "prependQueue" : n ? "prepend" : "append";
}
function Lh(n) {
  return Array.from((Fd.get(n) || n).children).filter(function (r) {
    return r.tagName === "STYLE";
  });
}
function o1(n) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!ka()) return null;
  var o = r.csp,
    l = r.prepend,
    s = r.priority,
    f = s === void 0 ? 0 : s,
    d = p3(l),
    v = d === "prependQueue",
    h = document.createElement("style");
  h.setAttribute(Cg, d),
    v && f && h.setAttribute(Eg, "".concat(f)),
    o != null && o.nonce && (h.nonce = o == null ? void 0 : o.nonce),
    (h.innerHTML = n);
  var m = Ac(r),
    p = m.firstChild;
  if (l) {
    if (v) {
      var y = (r.styles || Lh(m)).filter(function (b) {
        if (!["prepend", "prependQueue"].includes(b.getAttribute(Cg)))
          return !1;
        var T = Number(b.getAttribute(Eg) || 0);
        return f >= T;
      });
      if (y.length) return m.insertBefore(h, y[y.length - 1].nextSibling), h;
    }
    m.insertBefore(h, p);
  } else m.appendChild(h);
  return h;
}
function i1(n) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    o = Ac(r);
  return (r.styles || Lh(o)).find(function (l) {
    return l.getAttribute(l1(r)) === n;
  });
}
function s1(n) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    o = i1(n, r);
  if (o) {
    var l = Ac(r);
    l.removeChild(o);
  }
}
function g3(n, r) {
  var o = Fd.get(n);
  if (!o || !m3(document, o)) {
    var l = o1("", r),
      s = l.parentNode;
    Fd.set(n, s), n.removeChild(l);
  }
}
function Zr(n, r) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    l = Ac(o),
    s = Lh(l),
    f = be(be({}, o), {}, { styles: s });
  g3(l, f);
  var d = i1(r, f);
  if (d) {
    var v, h;
    if (
      (v = f.csp) !== null &&
      v !== void 0 &&
      v.nonce &&
      d.nonce !== ((h = f.csp) === null || h === void 0 ? void 0 : h.nonce)
    ) {
      var m;
      d.nonce = (m = f.csp) === null || m === void 0 ? void 0 : m.nonce;
    }
    return d.innerHTML !== n && (d.innerHTML = n), d;
  }
  var p = o1(n, f);
  return p.setAttribute(l1(f), r), p;
}
function y3(n, r) {
  if (n == null) return {};
  var o = {};
  for (var l in n)
    if ({}.hasOwnProperty.call(n, l)) {
      if (r.indexOf(l) !== -1) continue;
      o[l] = n[l];
    }
  return o;
}
function $a(n, r) {
  if (n == null) return {};
  var o,
    l,
    s = y3(n, r);
  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(n);
    for (l = 0; l < f.length; l++)
      (o = f[l]),
        r.indexOf(o) === -1 &&
          {}.propertyIsEnumerable.call(n, o) &&
          (s[o] = n[o]);
  }
  return s;
}
function b3(n, r) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
    l = new Set();
  function s(f, d) {
    var v = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      h = l.has(f);
    if ((ji(!h, "Warning: There may be circular references"), h)) return !1;
    if (f === d) return !0;
    if (o && v > 1) return !1;
    l.add(f);
    var m = v + 1;
    if (Array.isArray(f)) {
      if (!Array.isArray(d) || f.length !== d.length) return !1;
      for (var p = 0; p < f.length; p++) if (!s(f[p], d[p], m)) return !1;
      return !0;
    }
    if (f && d && Xe(f) === "object" && Xe(d) === "object") {
      var y = Object.keys(f);
      return y.length !== Object.keys(d).length
        ? !1
        : y.every(function (b) {
            return s(f[b], d[b], m);
          });
    }
    return !1;
  }
  return s(n, r);
}
var x3 = "%";
function Id(n) {
  return n.join(x3);
}
var S3 = (function () {
    function n(r) {
      Xn(this, n),
        Ee(this, "instanceId", void 0),
        Ee(this, "cache", new Map()),
        (this.instanceId = r);
    }
    return (
      Yn(n, [
        {
          key: "get",
          value: function (o) {
            return this.opGet(Id(o));
          },
        },
        {
          key: "opGet",
          value: function (o) {
            return this.cache.get(o) || null;
          },
        },
        {
          key: "update",
          value: function (o, l) {
            return this.opUpdate(Id(o), l);
          },
        },
        {
          key: "opUpdate",
          value: function (o, l) {
            var s = this.cache.get(o),
              f = l(s);
            f === null ? this.cache.delete(o) : this.cache.set(o, f);
          },
        },
      ]),
      n
    );
  })(),
  Il = "data-token-hash",
  aa = "data-css-hash",
  xr = "__cssinjs_instance__";
function C3() {
  var n = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var r = document.body.querySelectorAll("style[".concat(aa, "]")) || [],
      o = document.head.firstChild;
    Array.from(r).forEach(function (s) {
      (s[xr] = s[xr] || n), s[xr] === n && document.head.insertBefore(s, o);
    });
    var l = {};
    Array.from(document.querySelectorAll("style[".concat(aa, "]"))).forEach(
      function (s) {
        var f = s.getAttribute(aa);
        if (l[f]) {
          if (s[xr] === n) {
            var d;
            (d = s.parentNode) === null || d === void 0 || d.removeChild(s);
          }
        } else l[f] = !0;
      }
    );
  }
  return new S3(n);
}
var Ni = x.createContext({
  hashPriority: "low",
  cache: C3(),
  defaultCache: !0,
});
function E3(n, r) {
  if (n.length !== r.length) return !1;
  for (var o = 0; o < n.length; o++) if (n[o] !== r[o]) return !1;
  return !0;
}
var Hh = (function () {
  function n() {
    Xn(this, n),
      Ee(this, "cache", void 0),
      Ee(this, "keys", void 0),
      Ee(this, "cacheCallTimes", void 0),
      (this.cache = new Map()),
      (this.keys = []),
      (this.cacheCallTimes = 0);
  }
  return (
    Yn(n, [
      {
        key: "size",
        value: function () {
          return this.keys.length;
        },
      },
      {
        key: "internalGet",
        value: function (o) {
          var l,
            s,
            f =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !1,
            d = { map: this.cache };
          return (
            o.forEach(function (v) {
              if (!d) d = void 0;
              else {
                var h;
                d =
                  (h = d) === null ||
                  h === void 0 ||
                  (h = h.map) === null ||
                  h === void 0
                    ? void 0
                    : h.get(v);
              }
            }),
            (l = d) !== null &&
              l !== void 0 &&
              l.value &&
              f &&
              (d.value[1] = this.cacheCallTimes++),
            (s = d) === null || s === void 0 ? void 0 : s.value
          );
        },
      },
      {
        key: "get",
        value: function (o) {
          var l;
          return (l = this.internalGet(o, !0)) === null || l === void 0
            ? void 0
            : l[0];
        },
      },
      {
        key: "has",
        value: function (o) {
          return !!this.internalGet(o);
        },
      },
      {
        key: "set",
        value: function (o, l) {
          var s = this;
          if (!this.has(o)) {
            if (this.size() + 1 > n.MAX_CACHE_SIZE + n.MAX_CACHE_OFFSET) {
              var f = this.keys.reduce(
                  function (m, p) {
                    var y = Re(m, 2),
                      b = y[1];
                    return s.internalGet(p)[1] < b
                      ? [p, s.internalGet(p)[1]]
                      : m;
                  },
                  [this.keys[0], this.cacheCallTimes]
                ),
                d = Re(f, 1),
                v = d[0];
              this.delete(v);
            }
            this.keys.push(o);
          }
          var h = this.cache;
          o.forEach(function (m, p) {
            if (p === o.length - 1)
              h.set(m, { value: [l, s.cacheCallTimes++] });
            else {
              var y = h.get(m);
              y ? y.map || (y.map = new Map()) : h.set(m, { map: new Map() }),
                (h = h.get(m).map);
            }
          });
        },
      },
      {
        key: "deleteByPath",
        value: function (o, l) {
          var s = o.get(l[0]);
          if (l.length === 1) {
            var f;
            return (
              s.map ? o.set(l[0], { map: s.map }) : o.delete(l[0]),
              (f = s.value) === null || f === void 0 ? void 0 : f[0]
            );
          }
          var d = this.deleteByPath(s.map, l.slice(1));
          return (!s.map || s.map.size === 0) && !s.value && o.delete(l[0]), d;
        },
      },
      {
        key: "delete",
        value: function (o) {
          if (this.has(o))
            return (
              (this.keys = this.keys.filter(function (l) {
                return !E3(l, o);
              })),
              this.deleteByPath(this.cache, o)
            );
        },
      },
    ]),
    n
  );
})();
Ee(Hh, "MAX_CACHE_SIZE", 20);
Ee(Hh, "MAX_CACHE_OFFSET", 5);
var Tg = 0,
  c1 = (function () {
    function n(r) {
      Xn(this, n),
        Ee(this, "derivatives", void 0),
        Ee(this, "id", void 0),
        (this.derivatives = Array.isArray(r) ? r : [r]),
        (this.id = Tg),
        r.length === 0 && (r.length > 0, void 0),
        (Tg += 1);
    }
    return (
      Yn(n, [
        {
          key: "getDerivativeToken",
          value: function (o) {
            return this.derivatives.reduce(function (l, s) {
              return s(o, l);
            }, void 0);
          },
        },
      ]),
      n
    );
  })(),
  dd = new Hh();
function mc(n) {
  var r = Array.isArray(n) ? n : [n];
  return dd.has(r) || dd.set(r, new c1(r)), dd.get(r);
}
var T3 = new WeakMap(),
  hd = {};
function _3(n, r) {
  for (var o = T3, l = 0; l < r.length; l += 1) {
    var s = r[l];
    o.has(s) || o.set(s, new WeakMap()), (o = o.get(s));
  }
  return o.has(hd) || o.set(hd, n()), o.get(hd);
}
var _g = new WeakMap();
function ci(n) {
  var r = _g.get(n) || "";
  return (
    r ||
      (Object.keys(n).forEach(function (o) {
        var l = n[o];
        (r += o),
          l instanceof c1
            ? (r += l.id)
            : l && Xe(l) === "object"
            ? (r += ci(l))
            : (r += l);
      }),
      (r = vi(r)),
      _g.set(n, r)),
    r
  );
}
function Og(n, r) {
  return vi("".concat(r, "_").concat(ci(n)));
}
var Qd = ka();
function tl(n) {
  return typeof n == "number" ? "".concat(n, "px") : n;
}
function vc(n, r, o) {
  var l,
    s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
    f = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (f) return n;
  var d = be(be({}, s), {}, ((l = {}), Ee(l, Il, r), Ee(l, aa, o), l)),
    v = Object.keys(d)
      .map(function (h) {
        var m = d[h];
        return m ? "".concat(h, '="').concat(m, '"') : null;
      })
      .filter(function (h) {
        return h;
      })
      .join(" ");
  return "<style ".concat(v, ">").concat(n, "</style>");
}
var Ws = function (r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return "--"
      .concat(o ? "".concat(o, "-") : "")
      .concat(r)
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2")
      .replace(/([a-z])([A-Z0-9])/g, "$1-$2")
      .toLowerCase();
  },
  O3 = function (r, o, l) {
    return Object.keys(r).length
      ? "."
          .concat(o)
          .concat(l != null && l.scope ? ".".concat(l.scope) : "", "{")
          .concat(
            Object.entries(r)
              .map(function (s) {
                var f = Re(s, 2),
                  d = f[0],
                  v = f[1];
                return "".concat(d, ":").concat(v, ";");
              })
              .join(""),
            "}"
          )
      : "";
  },
  u1 = function (r, o, l) {
    var s = {},
      f = {};
    return (
      Object.entries(r).forEach(function (d) {
        var v,
          h,
          m = Re(d, 2),
          p = m[0],
          y = m[1];
        if (l != null && (v = l.preserve) !== null && v !== void 0 && v[p])
          f[p] = y;
        else if (
          (typeof y == "string" || typeof y == "number") &&
          !(l != null && (h = l.ignore) !== null && h !== void 0 && h[p])
        ) {
          var b,
            T = Ws(p, l == null ? void 0 : l.prefix);
          (s[T] =
            typeof y == "number" &&
            !(l != null && (b = l.unitless) !== null && b !== void 0 && b[p])
              ? "".concat(y, "px")
              : String(y)),
            (f[p] = "var(".concat(T, ")"));
        }
      }),
      [f, O3(s, o, { scope: l == null ? void 0 : l.scope })]
    );
  },
  wg = ka() ? x.useLayoutEffect : x.useEffect,
  w3 = function (r, o) {
    var l = x.useRef(!0);
    wg(function () {
      return r(l.current);
    }, o),
      wg(function () {
        return (
          (l.current = !1),
          function () {
            l.current = !0;
          }
        );
      }, []);
  },
  j3 = be({}, Sc),
  jg = j3.useInsertionEffect,
  R3 = function (r, o, l) {
    x.useMemo(r, l),
      w3(function () {
        return o(!0);
      }, l);
  },
  A3 = jg
    ? function (n, r, o) {
        return jg(function () {
          return n(), r();
        }, o);
      }
    : R3,
  N3 = be({}, Sc),
  M3 = N3.useInsertionEffect,
  D3 = function (r) {
    var o = [],
      l = !1;
    function s(f) {
      l || o.push(f);
    }
    return (
      x.useEffect(function () {
        return (
          (l = !1),
          function () {
            (l = !0),
              o.length &&
                o.forEach(function (f) {
                  return f();
                });
          }
        );
      }, r),
      s
    );
  },
  z3 = function () {
    return function (r) {
      r();
    };
  },
  L3 = typeof M3 < "u" ? D3 : z3;
function Bh(n, r, o, l, s) {
  var f = x.useContext(Ni),
    d = f.cache,
    v = [n].concat(sn(r)),
    h = Id(v),
    m = L3([h]),
    p = function (w) {
      d.opUpdate(h, function (O) {
        var E = O || [void 0, void 0],
          H = Re(E, 2),
          j = H[0],
          D = j === void 0 ? 0 : j,
          U = H[1],
          R = U,
          F = R || o(),
          _ = [D, F];
        return w ? w(_) : _;
      });
    };
  x.useMemo(
    function () {
      p();
    },
    [h]
  );
  var y = d.opGet(h),
    b = y[1];
  return (
    A3(
      function () {
        s == null || s(b);
      },
      function (T) {
        return (
          p(function (w) {
            var O = Re(w, 2),
              E = O[0],
              H = O[1];
            return T && E === 0 && (s == null || s(b)), [E + 1, H];
          }),
          function () {
            d.opUpdate(h, function (w) {
              var O = w || [],
                E = Re(O, 2),
                H = E[0],
                j = H === void 0 ? 0 : H,
                D = E[1],
                U = j - 1;
              return U === 0
                ? (m(function () {
                    (T || !d.opGet(h)) && (l == null || l(D, !1));
                  }),
                  null)
                : [j - 1, D];
            });
          }
        );
      },
      [h]
    ),
    b
  );
}
var H3 = {},
  B3 = "css",
  Xr = new Map();
function U3(n) {
  Xr.set(n, (Xr.get(n) || 0) + 1);
}
function $3(n, r) {
  if (typeof document < "u") {
    var o = document.querySelectorAll(
      "style[".concat(Il, '="').concat(n, '"]')
    );
    o.forEach(function (l) {
      if (l[xr] === r) {
        var s;
        (s = l.parentNode) === null || s === void 0 || s.removeChild(l);
      }
    });
  }
}
var P3 = 0;
function q3(n, r) {
  Xr.set(n, (Xr.get(n) || 0) - 1);
  var o = Array.from(Xr.keys()),
    l = o.filter(function (s) {
      var f = Xr.get(s) || 0;
      return f <= 0;
    });
  o.length - l.length > P3 &&
    l.forEach(function (s) {
      $3(s, r), Xr.delete(s);
    });
}
var f1 = function (r, o, l, s) {
    var f = l.getDerivativeToken(r),
      d = be(be({}, f), o);
    return s && (d = s(d)), d;
  },
  d1 = "token";
function V3(n, r) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    l = x.useContext(Ni),
    s = l.cache.instanceId,
    f = l.container,
    d = o.salt,
    v = d === void 0 ? "" : d,
    h = o.override,
    m = h === void 0 ? H3 : h,
    p = o.formatToken,
    y = o.getComputedToken,
    b = o.cssVar,
    T = _3(function () {
      return Object.assign.apply(Object, [{}].concat(sn(r)));
    }, r),
    w = ci(T),
    O = ci(m),
    E = b ? ci(b) : "",
    H = Bh(
      d1,
      [v, n.id, w, O, E],
      function () {
        var j,
          D = y ? y(T, m, n) : f1(T, m, n, p),
          U = be({}, D),
          R = "";
        if (b) {
          var F = u1(D, b.key, {
              prefix: b.prefix,
              ignore: b.ignore,
              unitless: b.unitless,
              preserve: b.preserve,
            }),
            _ = Re(F, 2);
          (D = _[0]), (R = _[1]);
        }
        var q = Og(D, v);
        (D._tokenKey = q), (U._tokenKey = Og(U, v));
        var K =
          (j = b == null ? void 0 : b.key) !== null && j !== void 0 ? j : q;
        (D._themeKey = K), U3(K);
        var B = "".concat(B3, "-").concat(vi(q));
        return (
          (D._hashId = B), [D, B, U, R, (b == null ? void 0 : b.key) || ""]
        );
      },
      function (j) {
        q3(j[0]._themeKey, s);
      },
      function (j) {
        var D = Re(j, 4),
          U = D[0],
          R = D[3];
        if (b && R) {
          var F = Zr(R, vi("css-variables-".concat(U._themeKey)), {
            mark: aa,
            prepend: "queue",
            attachTo: f,
            priority: -999,
          });
          (F[xr] = s), F.setAttribute(Il, U._themeKey);
        }
      }
    );
  return H;
}
var k3 = function (r, o, l) {
    var s = Re(r, 5),
      f = s[2],
      d = s[3],
      v = s[4],
      h = l || {},
      m = h.plain;
    if (!d) return null;
    var p = f._tokenKey,
      y = -999,
      b = { "data-rc-order": "prependQueue", "data-rc-priority": "".concat(y) },
      T = vc(d, v, p, b, m);
    return [y, p, T];
  },
  G3 = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  h1 = "comm",
  m1 = "rule",
  v1 = "decl",
  X3 = "@import",
  Y3 = "@namespace",
  F3 = "@keyframes",
  I3 = "@layer",
  p1 = Math.abs,
  Uh = String.fromCharCode;
function g1(n) {
  return n.trim();
}
function ec(n, r, o) {
  return n.replace(r, o);
}
function Q3(n, r, o) {
  return n.indexOf(r, o);
}
function Gl(n, r) {
  return n.charCodeAt(r) | 0;
}
function Ql(n, r, o) {
  return n.slice(r, o);
}
function ma(n) {
  return n.length;
}
function Z3(n) {
  return n.length;
}
function Ys(n, r) {
  return r.push(n), n;
}
var Nc = 1,
  Zl = 1,
  y1 = 0,
  Gn = 0,
  Ht = 0,
  eo = "";
function $h(n, r, o, l, s, f, d, v) {
  return {
    value: n,
    root: r,
    parent: o,
    type: l,
    props: s,
    children: f,
    line: Nc,
    column: Zl,
    length: d,
    return: "",
    siblings: v,
  };
}
function K3() {
  return Ht;
}
function J3() {
  return (
    (Ht = Gn > 0 ? Gl(eo, --Gn) : 0), Zl--, Ht === 10 && ((Zl = 1), Nc--), Ht
  );
}
function ra() {
  return (
    (Ht = Gn < y1 ? Gl(eo, Gn++) : 0), Zl++, Ht === 10 && ((Zl = 1), Nc++), Ht
  );
}
function Sr() {
  return Gl(eo, Gn);
}
function tc() {
  return Gn;
}
function Mc(n, r) {
  return Ql(eo, n, r);
}
function pi(n) {
  switch (n) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function W3(n) {
  return (Nc = Zl = 1), (y1 = ma((eo = n))), (Gn = 0), [];
}
function e4(n) {
  return (eo = ""), n;
}
function md(n) {
  return g1(Mc(Gn - 1, Zd(n === 91 ? n + 2 : n === 40 ? n + 1 : n)));
}
function t4(n) {
  for (; (Ht = Sr()) && Ht < 33; ) ra();
  return pi(n) > 2 || pi(Ht) > 3 ? "" : " ";
}
function n4(n, r) {
  for (
    ;
    --r &&
    ra() &&
    !(Ht < 48 || Ht > 102 || (Ht > 57 && Ht < 65) || (Ht > 70 && Ht < 97));

  );
  return Mc(n, tc() + (r < 6 && Sr() == 32 && ra() == 32));
}
function Zd(n) {
  for (; ra(); )
    switch (Ht) {
      case n:
        return Gn;
      case 34:
      case 39:
        n !== 34 && n !== 39 && Zd(Ht);
        break;
      case 40:
        n === 41 && Zd(n);
        break;
      case 92:
        ra();
        break;
    }
  return Gn;
}
function a4(n, r) {
  for (; ra() && n + Ht !== 57; ) if (n + Ht === 84 && Sr() === 47) break;
  return "/*" + Mc(r, Gn - 1) + "*" + Uh(n === 47 ? n : ra());
}
function r4(n) {
  for (; !pi(Sr()); ) ra();
  return Mc(n, Gn);
}
function l4(n) {
  return e4(nc("", null, null, null, [""], (n = W3(n)), 0, [0], n));
}
function nc(n, r, o, l, s, f, d, v, h) {
  for (
    var m = 0,
      p = 0,
      y = d,
      b = 0,
      T = 0,
      w = 0,
      O = 1,
      E = 1,
      H = 1,
      j = 0,
      D = "",
      U = s,
      R = f,
      F = l,
      _ = D;
    E;

  )
    switch (((w = j), (j = ra()))) {
      case 40:
        if (w != 108 && Gl(_, y - 1) == 58) {
          Q3((_ += ec(md(j), "&", "&\f")), "&\f", p1(m ? v[m - 1] : 0)) != -1 &&
            (H = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        _ += md(j);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        _ += t4(w);
        break;
      case 92:
        _ += n4(tc() - 1, 7);
        continue;
      case 47:
        switch (Sr()) {
          case 42:
          case 47:
            Ys(o4(a4(ra(), tc()), r, o, h), h),
              (pi(w || 1) == 5 || pi(Sr() || 1) == 5) &&
                ma(_) &&
                Ql(_, -1, void 0) !== " " &&
                (_ += " ");
            break;
          default:
            _ += "/";
        }
        break;
      case 123 * O:
        v[m++] = ma(_) * H;
      case 125 * O:
      case 59:
      case 0:
        switch (j) {
          case 0:
          case 125:
            E = 0;
          case 59 + p:
            H == -1 && (_ = ec(_, /\f/g, "")),
              T > 0 &&
                (ma(_) - y || (O === 0 && w === 47)) &&
                Ys(
                  T > 32
                    ? Ag(_ + ";", l, o, y - 1, h)
                    : Ag(ec(_, " ", "") + ";", l, o, y - 2, h),
                  h
                );
            break;
          case 59:
            _ += ";";
          default:
            if (
              (Ys(
                (F = Rg(_, r, o, m, p, s, v, D, (U = []), (R = []), y, f)),
                f
              ),
              j === 123)
            )
              if (p === 0) nc(_, r, F, F, U, f, y, v, R);
              else {
                switch (b) {
                  case 99:
                    if (Gl(_, 3) === 110) break;
                  case 108:
                    if (Gl(_, 2) === 97) break;
                  default:
                    p = 0;
                  case 100:
                  case 109:
                  case 115:
                }
                p
                  ? nc(
                      n,
                      F,
                      F,
                      l && Ys(Rg(n, F, F, 0, 0, s, v, D, s, (U = []), y, R), R),
                      s,
                      R,
                      y,
                      v,
                      l ? U : R
                    )
                  : nc(_, F, F, F, [""], R, 0, v, R);
              }
        }
        (m = p = T = 0), (O = H = 1), (D = _ = ""), (y = d);
        break;
      case 58:
        (y = 1 + ma(_)), (T = w);
      default:
        if (O < 1) {
          if (j == 123) --O;
          else if (j == 125 && O++ == 0 && J3() == 125) continue;
        }
        switch (((_ += Uh(j)), j * O)) {
          case 38:
            H = p > 0 ? 1 : ((_ += "\f"), -1);
            break;
          case 44:
            (v[m++] = (ma(_) - 1) * H), (H = 1);
            break;
          case 64:
            Sr() === 45 && (_ += md(ra())),
              (b = Sr()),
              (p = y = ma((D = _ += r4(tc())))),
              j++;
            break;
          case 45:
            w === 45 && ma(_) == 2 && (O = 0);
        }
    }
  return f;
}
function Rg(n, r, o, l, s, f, d, v, h, m, p, y) {
  for (
    var b = s - 1, T = s === 0 ? f : [""], w = Z3(T), O = 0, E = 0, H = 0;
    O < l;
    ++O
  )
    for (var j = 0, D = Ql(n, b + 1, (b = p1((E = d[O])))), U = n; j < w; ++j)
      (U = g1(E > 0 ? T[j] + " " + D : ec(D, /&\f/g, T[j]))) && (h[H++] = U);
  return $h(n, r, o, s === 0 ? m1 : v, h, m, p, y);
}
function o4(n, r, o, l) {
  return $h(n, r, o, h1, Uh(K3()), Ql(n, 2, -2), 0, l);
}
function Ag(n, r, o, l, s) {
  return $h(n, r, o, v1, Ql(n, 0, l), Ql(n, l + 1, -1), l, s);
}
function Kd(n, r) {
  for (var o = "", l = 0; l < n.length; l++) o += r(n[l], l, n, r) || "";
  return o;
}
function i4(n, r, o, l) {
  switch (n.type) {
    case I3:
      if (n.children.length) break;
    case X3:
    case Y3:
    case v1:
      return (n.return = n.return || n.value);
    case h1:
      return "";
    case F3:
      return (n.return = n.value + "{" + Kd(n.children, l) + "}");
    case m1:
      if (!ma((n.value = n.props.join(",")))) return "";
  }
  return ma((o = Kd(n.children, l)))
    ? (n.return = n.value + "{" + o + "}")
    : "";
}
var Ng = "data-ant-cssinjs-cache-path",
  b1 = "_FILE_STYLE__",
  Kr,
  x1 = !0;
function s4() {
  if (!Kr && ((Kr = {}), ka())) {
    var n = document.createElement("div");
    (n.className = Ng),
      (n.style.position = "fixed"),
      (n.style.visibility = "hidden"),
      (n.style.top = "-9999px"),
      document.body.appendChild(n);
    var r = getComputedStyle(n).content || "";
    (r = r.replace(/^"/, "").replace(/"$/, "")),
      r.split(";").forEach(function (s) {
        var f = s.split(":"),
          d = Re(f, 2),
          v = d[0],
          h = d[1];
        Kr[v] = h;
      });
    var o = document.querySelector("style[".concat(Ng, "]"));
    if (o) {
      var l;
      (x1 = !1),
        (l = o.parentNode) === null || l === void 0 || l.removeChild(o);
    }
    document.body.removeChild(n);
  }
}
function c4(n) {
  return s4(), !!Kr[n];
}
function u4(n) {
  var r = Kr[n],
    o = null;
  if (r && ka())
    if (x1) o = b1;
    else {
      var l = document.querySelector(
        "style[".concat(aa, '="').concat(Kr[n], '"]')
      );
      l ? (o = l.innerHTML) : delete Kr[n];
    }
  return [o, r];
}
var f4 = "_skip_check_",
  S1 = "_multi_value_";
function ac(n) {
  var r = Kd(l4(n), i4);
  return r.replace(/\{%%%\:[^;];}/g, ";");
}
function d4(n) {
  return Xe(n) === "object" && n && (f4 in n || S1 in n);
}
function Mg(n, r, o) {
  if (!r) return n;
  var l = ".".concat(r),
    s = o === "low" ? ":where(".concat(l, ")") : l,
    f = n.split(",").map(function (d) {
      var v,
        h = d.trim().split(/\s+/),
        m = h[0] || "",
        p =
          ((v = m.match(/^\w+/)) === null || v === void 0 ? void 0 : v[0]) ||
          "";
      return (
        (m = "".concat(p).concat(s).concat(m.slice(p.length))),
        [m].concat(sn(h.slice(1))).join(" ")
      );
    });
  return f.join(",");
}
var h4 = function n(r) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    l =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : { root: !0, parentSelectors: [] },
    s = l.root,
    f = l.injectHash,
    d = l.parentSelectors,
    v = o.hashId,
    h = o.layer;
  o.path;
  var m = o.hashPriority,
    p = o.transformers,
    y = p === void 0 ? [] : p;
  o.linters;
  var b = "",
    T = {};
  function w(H) {
    var j = H.getName(v);
    if (!T[j]) {
      var D = n(H.style, o, { root: !1, parentSelectors: d }),
        U = Re(D, 1),
        R = U[0];
      T[j] = "@keyframes ".concat(H.getName(v)).concat(R);
    }
  }
  function O(H) {
    var j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return (
      H.forEach(function (D) {
        Array.isArray(D) ? O(D, j) : D && j.push(D);
      }),
      j
    );
  }
  var E = O(Array.isArray(r) ? r : [r]);
  return (
    E.forEach(function (H) {
      var j = typeof H == "string" && !s ? {} : H;
      if (typeof j == "string")
        b += "".concat(
          j,
          `
`
        );
      else if (j._keyframe) w(j);
      else {
        var D = y.reduce(function (U, R) {
          var F;
          return (
            (R == null || (F = R.visit) === null || F === void 0
              ? void 0
              : F.call(R, U)) || U
          );
        }, j);
        Object.keys(D).forEach(function (U) {
          var R = D[U];
          if (
            Xe(R) === "object" &&
            R &&
            (U !== "animationName" || !R._keyframe) &&
            !d4(R)
          ) {
            var F = !1,
              _ = U.trim(),
              q = !1;
            (s || f) && v
              ? _.startsWith("@")
                ? (F = !0)
                : _ === "&"
                ? (_ = Mg("", v, m))
                : (_ = Mg(U, v, m))
              : s && !v && (_ === "&" || _ === "") && ((_ = ""), (q = !0));
            var K = n(R, o, {
                root: q,
                injectHash: F,
                parentSelectors: [].concat(sn(d), [_]),
              }),
              B = Re(K, 2),
              $ = B[0],
              k = B[1];
            (T = be(be({}, T), k)), (b += "".concat(_).concat($));
          } else {
            let se = function (z, W) {
              var J = z.replace(/[A-Z]/g, function (A) {
                  return "-".concat(A.toLowerCase());
                }),
                ve = W;
              !G3[z] &&
                typeof ve == "number" &&
                ve !== 0 &&
                (ve = "".concat(ve, "px")),
                z === "animationName" &&
                  W !== null &&
                  W !== void 0 &&
                  W._keyframe &&
                  (w(W), (ve = W.getName(v))),
                (b += "".concat(J, ":").concat(ve, ";"));
            };
            var ee,
              te =
                (ee = R == null ? void 0 : R.value) !== null && ee !== void 0
                  ? ee
                  : R;
            Xe(R) === "object" &&
            R !== null &&
            R !== void 0 &&
            R[S1] &&
            Array.isArray(te)
              ? te.forEach(function (z) {
                  se(U, z);
                })
              : se(U, te);
          }
        });
      }
    }),
    s
      ? h &&
        (b && (b = "@layer ".concat(h.name, " {").concat(b, "}")),
        h.dependencies &&
          (T["@layer ".concat(h.name)] = h.dependencies.map(function (H) {
            return "@layer ".concat(H, ", ").concat(h.name, ";");
          }).join(`
`)))
      : (b = "{".concat(b, "}")),
    [b, T]
  );
};
function C1(n, r) {
  return vi("".concat(n.join("%")).concat(r));
}
function m4() {
  return null;
}
var E1 = "style";
function Jd(n, r) {
  var o = n.token,
    l = n.path,
    s = n.hashId,
    f = n.layer,
    d = n.nonce,
    v = n.clientOnly,
    h = n.order,
    m = h === void 0 ? 0 : h,
    p = x.useContext(Ni),
    y = p.autoClear;
  p.mock;
  var b = p.defaultCache,
    T = p.hashPriority,
    w = p.container,
    O = p.ssrInline,
    E = p.transformers,
    H = p.linters,
    j = p.cache,
    D = p.layer,
    U = o._tokenKey,
    R = [U];
  D && R.push("layer"), R.push.apply(R, sn(l));
  var F = Qd,
    _ = Bh(
      E1,
      R,
      function () {
        var k = R.join("|");
        if (c4(k)) {
          var ee = u4(k),
            te = Re(ee, 2),
            se = te[0],
            z = te[1];
          if (se) return [se, U, z, {}, v, m];
        }
        var W = r(),
          J = h4(W, {
            hashId: s,
            hashPriority: T,
            layer: D ? f : void 0,
            path: l.join("-"),
            transformers: E,
            linters: H,
          }),
          ve = Re(J, 2),
          A = ve[0],
          Z = ve[1],
          le = ac(A),
          ie = C1(R, le);
        return [le, U, ie, Z, v, m];
      },
      function (k, ee) {
        var te = Re(k, 3),
          se = te[2];
        (ee || y) && Qd && s1(se, { mark: aa });
      },
      function (k) {
        var ee = Re(k, 4),
          te = ee[0];
        ee[1];
        var se = ee[2],
          z = ee[3];
        if (F && te !== b1) {
          var W = {
              mark: aa,
              prepend: D ? !1 : "queue",
              attachTo: w,
              priority: m,
            },
            J = typeof d == "function" ? d() : d;
          J && (W.csp = { nonce: J });
          var ve = [],
            A = [];
          Object.keys(z).forEach(function (le) {
            le.startsWith("@layer") ? ve.push(le) : A.push(le);
          }),
            ve.forEach(function (le) {
              Zr(
                ac(z[le]),
                "_layer-".concat(le),
                be(be({}, W), {}, { prepend: !0 })
              );
            });
          var Z = Zr(te, se, W);
          (Z[xr] = j.instanceId),
            Z.setAttribute(Il, U),
            A.forEach(function (le) {
              Zr(ac(z[le]), "_effect-".concat(le), W);
            });
        }
      }
    ),
    q = Re(_, 3),
    K = q[0],
    B = q[1],
    $ = q[2];
  return function (k) {
    var ee;
    if (!O || F || !b) ee = x.createElement(m4, null);
    else {
      var te;
      ee = x.createElement(
        "style",
        cn({}, ((te = {}), Ee(te, Il, B), Ee(te, aa, $), te), {
          dangerouslySetInnerHTML: { __html: K },
        })
      );
    }
    return x.createElement(x.Fragment, null, ee, k);
  };
}
var v4 = function (r, o, l) {
    var s = Re(r, 6),
      f = s[0],
      d = s[1],
      v = s[2],
      h = s[3],
      m = s[4],
      p = s[5],
      y = l || {},
      b = y.plain;
    if (m) return null;
    var T = f,
      w = { "data-rc-order": "prependQueue", "data-rc-priority": "".concat(p) };
    return (
      (T = vc(f, d, v, w, b)),
      h &&
        Object.keys(h).forEach(function (O) {
          if (!o[O]) {
            o[O] = !0;
            var E = ac(h[O]),
              H = vc(E, d, "_effect-".concat(O), w, b);
            O.startsWith("@layer") ? (T = H + T) : (T += H);
          }
        }),
      [p, v, T]
    );
  },
  T1 = "cssVar",
  p4 = function (r, o) {
    var l = r.key,
      s = r.prefix,
      f = r.unitless,
      d = r.ignore,
      v = r.token,
      h = r.scope,
      m = h === void 0 ? "" : h,
      p = x.useContext(Ni),
      y = p.cache.instanceId,
      b = p.container,
      T = v._tokenKey,
      w = [].concat(sn(r.path), [l, m, T]),
      O = Bh(
        T1,
        w,
        function () {
          var E = o(),
            H = u1(E, l, { prefix: s, unitless: f, ignore: d, scope: m }),
            j = Re(H, 2),
            D = j[0],
            U = j[1],
            R = C1(w, U);
          return [D, U, R, l];
        },
        function (E) {
          var H = Re(E, 3),
            j = H[2];
          Qd && s1(j, { mark: aa });
        },
        function (E) {
          var H = Re(E, 3),
            j = H[1],
            D = H[2];
          if (j) {
            var U = Zr(j, D, {
              mark: aa,
              prepend: "queue",
              attachTo: b,
              priority: -999,
            });
            (U[xr] = y), U.setAttribute(Il, l);
          }
        }
      );
    return O;
  },
  g4 = function (r, o, l) {
    var s = Re(r, 4),
      f = s[1],
      d = s[2],
      v = s[3],
      h = l || {},
      m = h.plain;
    if (!f) return null;
    var p = -999,
      y = { "data-rc-order": "prependQueue", "data-rc-priority": "".concat(p) },
      b = vc(f, v, d, y, m);
    return [p, d, b];
  },
  ri;
(ri = {}), Ee(ri, E1, v4), Ee(ri, d1, k3), Ee(ri, T1, g4);
var Dg = (function () {
  function n(r, o) {
    Xn(this, n),
      Ee(this, "name", void 0),
      Ee(this, "style", void 0),
      Ee(this, "_keyframe", !0),
      (this.name = r),
      (this.style = o);
  }
  return (
    Yn(n, [
      {
        key: "getName",
        value: function () {
          var o =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
          return o ? "".concat(o, "-").concat(this.name) : this.name;
        },
      },
    ]),
    n
  );
})();
function Pl(n) {
  return (n.notSplit = !0), n;
}
Pl(["borderTop", "borderBottom"]),
  Pl(["borderTop"]),
  Pl(["borderBottom"]),
  Pl(["borderLeft", "borderRight"]),
  Pl(["borderLeft"]),
  Pl(["borderRight"]);
var Ph = x.createContext({});
function y4(n) {
  return a1(n) || Wy(n) || Dh(n) || r1();
}
function Wd(n, r) {
  for (var o = n, l = 0; l < r.length; l += 1) {
    if (o == null) return;
    o = o[r[l]];
  }
  return o;
}
function _1(n, r, o, l) {
  if (!r.length) return o;
  var s = y4(r),
    f = s[0],
    d = s.slice(1),
    v;
  return (
    !n && typeof f == "number"
      ? (v = [])
      : Array.isArray(n)
      ? (v = sn(n))
      : (v = be({}, n)),
    l && o === void 0 && d.length === 1
      ? delete v[f][d[0]]
      : (v[f] = _1(v[f], d, o, l)),
    v
  );
}
function vd(n, r, o) {
  var l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return r.length && l && o === void 0 && !Wd(n, r.slice(0, -1))
    ? n
    : _1(n, r, o, l);
}
function b4(n) {
  return (
    Xe(n) === "object" &&
    n !== null &&
    Object.getPrototypeOf(n) === Object.prototype
  );
}
function zg(n) {
  return Array.isArray(n) ? [] : {};
}
var x4 = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function S4() {
  for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
    r[o] = arguments[o];
  var l = zg(r[0]);
  return (
    r.forEach(function (s) {
      function f(d, v) {
        var h = new Set(v),
          m = Wd(s, d),
          p = Array.isArray(m);
        if (p || b4(m)) {
          if (!h.has(m)) {
            h.add(m);
            var y = Wd(l, d);
            p
              ? (l = vd(l, d, []))
              : (!y || Xe(y) !== "object") && (l = vd(l, d, zg(m))),
              x4(m).forEach(function (b) {
                f([].concat(sn(d), [b]), h);
              });
          }
        } else l = vd(l, d, m);
      }
      f([]);
    }),
    l
  );
}
const C4 = x.createContext({}),
  E4 = x.createContext(void 0),
  wn = "${label} is not a valid ${type}",
  Dc = {
    Modal: { okText: "OK", cancelText: "Cancel", justOkText: "OK" },
    Form: {
      optional: "(optional)",
      defaultValidateMessages: {
        default: "Field validation error for ${label}",
        required: "Please enter ${label}",
        enum: "${label} must be one of [${enum}]",
        whitespace: "${label} cannot be a blank character",
        date: {
          format: "${label} date format is invalid",
          parse: "${label} cannot be converted to a date",
          invalid: "${label} is an invalid date",
        },
        types: {
          string: wn,
          method: wn,
          array: wn,
          object: wn,
          number: wn,
          date: wn,
          boolean: wn,
          integer: wn,
          float: wn,
          regexp: wn,
          email: wn,
          url: wn,
          hex: wn,
        },
        string: {
          len: "${label} must be ${len} characters",
          min: "${label} must be at least ${min} characters",
          max: "${label} must be up to ${max} characters",
          range: "${label} must be between ${min}-${max} characters",
        },
        number: {
          len: "${label} must be equal to ${len}",
          min: "${label} must be minimum ${min}",
          max: "${label} must be maximum ${max}",
          range: "${label} must be between ${min}-${max}",
        },
        array: {
          len: "Must be ${len} ${label}",
          min: "At least ${min} ${label}",
          max: "At most ${max} ${label}",
          range: "The amount of ${label} must be between ${min}-${max}",
        },
        pattern: { mismatch: "${label} does not match the pattern ${pattern}" },
      },
    },
  };
Object.assign({}, Dc.Modal);
let rc = [];
const Lg = () =>
  rc.reduce((n, r) => Object.assign(Object.assign({}, n), r), Dc.Modal);
function T4(n) {
  if (n) {
    const r = Object.assign({}, n);
    return (
      rc.push(r),
      Lg(),
      () => {
        (rc = rc.filter((o) => o !== r)), Lg();
      }
    );
  }
  Object.assign({}, Dc.Modal);
}
const O1 = x.createContext(void 0),
  _4 = "internalMark",
  O4 = (n) => {
    const { locale: r = {}, children: o, _ANT_MARK__: l } = n;
    x.useEffect(() => T4(r == null ? void 0 : r.Modal), [r]);
    const s = x.useMemo(
      () => Object.assign(Object.assign({}, r), { exist: !0 }),
      [r]
    );
    return x.createElement(O1.Provider, { value: s }, o);
  },
  qh = {
    blue: "#1677FF",
    purple: "#722ED1",
    cyan: "#13C2C2",
    green: "#52C41A",
    magenta: "#EB2F96",
    pink: "#EB2F96",
    red: "#F5222D",
    orange: "#FA8C16",
    yellow: "#FADB14",
    volcano: "#FA541C",
    geekblue: "#2F54EB",
    gold: "#FAAD14",
    lime: "#A0D911",
  },
  Kl = Object.assign(Object.assign({}, qh), {
    colorPrimary: "#1677ff",
    colorSuccess: "#52c41a",
    colorWarning: "#faad14",
    colorError: "#ff4d4f",
    colorInfo: "#1677ff",
    colorLink: "",
    colorTextBase: "",
    colorBgBase: "",
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
    fontFamilyCode:
      "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    fontSize: 14,
    lineWidth: 1,
    lineType: "solid",
    motionUnit: 0.1,
    motionBase: 0,
    motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
    motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
    motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
    motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
    motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
    motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
    borderRadius: 6,
    sizeUnit: 4,
    sizeStep: 4,
    sizePopupArrow: 16,
    controlHeight: 32,
    zIndexBase: 0,
    zIndexPopupBase: 1e3,
    opacityImage: 1,
    wireframe: !1,
    motion: !0,
  }),
  Yt = Math.round;
function pd(n, r) {
  const o =
      n
        .replace(/^[^(]*\((.*)/, "$1")
        .replace(/\).*/, "")
        .match(/\d*\.?\d+%?/g) || [],
    l = o.map((s) => parseFloat(s));
  for (let s = 0; s < 3; s += 1) l[s] = r(l[s] || 0, o[s] || "", s);
  return o[3] ? (l[3] = o[3].includes("%") ? l[3] / 100 : l[3]) : (l[3] = 1), l;
}
const Hg = (n, r, o) => (o === 0 ? n : n / 100);
function li(n, r) {
  const o = r || 255;
  return n > o ? o : n < 0 ? 0 : n;
}
class gt {
  constructor(r) {
    Ee(this, "isValid", !0),
      Ee(this, "r", 0),
      Ee(this, "g", 0),
      Ee(this, "b", 0),
      Ee(this, "a", 1),
      Ee(this, "_h", void 0),
      Ee(this, "_s", void 0),
      Ee(this, "_l", void 0),
      Ee(this, "_v", void 0),
      Ee(this, "_max", void 0),
      Ee(this, "_min", void 0),
      Ee(this, "_brightness", void 0);
    function o(s) {
      return s[0] in r && s[1] in r && s[2] in r;
    }
    if (r)
      if (typeof r == "string") {
        let f = function (d) {
          return s.startsWith(d);
        };
        var l = f;
        const s = r.trim();
        /^#?[A-F\d]{3,8}$/i.test(s)
          ? this.fromHexString(s)
          : f("rgb")
          ? this.fromRgbString(s)
          : f("hsl")
          ? this.fromHslString(s)
          : (f("hsv") || f("hsb")) && this.fromHsvString(s);
      } else if (r instanceof gt)
        (this.r = r.r),
          (this.g = r.g),
          (this.b = r.b),
          (this.a = r.a),
          (this._h = r._h),
          (this._s = r._s),
          (this._l = r._l),
          (this._v = r._v);
      else if (o("rgb"))
        (this.r = li(r.r)),
          (this.g = li(r.g)),
          (this.b = li(r.b)),
          (this.a = typeof r.a == "number" ? li(r.a, 1) : 1);
      else if (o("hsl")) this.fromHsl(r);
      else if (o("hsv")) this.fromHsv(r);
      else
        throw new Error(
          "@ant-design/fast-color: unsupported input " + JSON.stringify(r)
        );
  }
  setR(r) {
    return this._sc("r", r);
  }
  setG(r) {
    return this._sc("g", r);
  }
  setB(r) {
    return this._sc("b", r);
  }
  setA(r) {
    return this._sc("a", r, 1);
  }
  setHue(r) {
    const o = this.toHsv();
    return (o.h = r), this._c(o);
  }
  getLuminance() {
    function r(f) {
      const d = f / 255;
      return d <= 0.03928 ? d / 12.92 : Math.pow((d + 0.055) / 1.055, 2.4);
    }
    const o = r(this.r),
      l = r(this.g),
      s = r(this.b);
    return 0.2126 * o + 0.7152 * l + 0.0722 * s;
  }
  getHue() {
    if (typeof this._h > "u") {
      const r = this.getMax() - this.getMin();
      r === 0
        ? (this._h = 0)
        : (this._h = Yt(
            60 *
              (this.r === this.getMax()
                ? (this.g - this.b) / r + (this.g < this.b ? 6 : 0)
                : this.g === this.getMax()
                ? (this.b - this.r) / r + 2
                : (this.r - this.g) / r + 4)
          ));
    }
    return this._h;
  }
  getSaturation() {
    if (typeof this._s > "u") {
      const r = this.getMax() - this.getMin();
      r === 0 ? (this._s = 0) : (this._s = r / this.getMax());
    }
    return this._s;
  }
  getLightness() {
    return (
      typeof this._l > "u" && (this._l = (this.getMax() + this.getMin()) / 510),
      this._l
    );
  }
  getValue() {
    return typeof this._v > "u" && (this._v = this.getMax() / 255), this._v;
  }
  getBrightness() {
    return (
      typeof this._brightness > "u" &&
        (this._brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1e3),
      this._brightness
    );
  }
  darken(r = 10) {
    const o = this.getHue(),
      l = this.getSaturation();
    let s = this.getLightness() - r / 100;
    return s < 0 && (s = 0), this._c({ h: o, s: l, l: s, a: this.a });
  }
  lighten(r = 10) {
    const o = this.getHue(),
      l = this.getSaturation();
    let s = this.getLightness() + r / 100;
    return s > 1 && (s = 1), this._c({ h: o, s: l, l: s, a: this.a });
  }
  mix(r, o = 50) {
    const l = this._c(r),
      s = o / 100,
      f = (v) => (l[v] - this[v]) * s + this[v],
      d = {
        r: Yt(f("r")),
        g: Yt(f("g")),
        b: Yt(f("b")),
        a: Yt(f("a") * 100) / 100,
      };
    return this._c(d);
  }
  tint(r = 10) {
    return this.mix({ r: 255, g: 255, b: 255, a: 1 }, r);
  }
  shade(r = 10) {
    return this.mix({ r: 0, g: 0, b: 0, a: 1 }, r);
  }
  onBackground(r) {
    const o = this._c(r),
      l = this.a + o.a * (1 - this.a),
      s = (f) => Yt((this[f] * this.a + o[f] * o.a * (1 - this.a)) / l);
    return this._c({ r: s("r"), g: s("g"), b: s("b"), a: l });
  }
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return this.getBrightness() >= 128;
  }
  equals(r) {
    return this.r === r.r && this.g === r.g && this.b === r.b && this.a === r.a;
  }
  clone() {
    return this._c(this);
  }
  toHexString() {
    let r = "#";
    const o = (this.r || 0).toString(16);
    r += o.length === 2 ? o : "0" + o;
    const l = (this.g || 0).toString(16);
    r += l.length === 2 ? l : "0" + l;
    const s = (this.b || 0).toString(16);
    if (
      ((r += s.length === 2 ? s : "0" + s),
      typeof this.a == "number" && this.a >= 0 && this.a < 1)
    ) {
      const f = Yt(this.a * 255).toString(16);
      r += f.length === 2 ? f : "0" + f;
    }
    return r;
  }
  toHsl() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      l: this.getLightness(),
      a: this.a,
    };
  }
  toHslString() {
    const r = this.getHue(),
      o = Yt(this.getSaturation() * 100),
      l = Yt(this.getLightness() * 100);
    return this.a !== 1
      ? `hsla(${r},${o}%,${l}%,${this.a})`
      : `hsl(${r},${o}%,${l}%)`;
  }
  toHsv() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      v: this.getValue(),
      a: this.a,
    };
  }
  toRgb() {
    return { r: this.r, g: this.g, b: this.b, a: this.a };
  }
  toRgbString() {
    return this.a !== 1
      ? `rgba(${this.r},${this.g},${this.b},${this.a})`
      : `rgb(${this.r},${this.g},${this.b})`;
  }
  toString() {
    return this.toRgbString();
  }
  _sc(r, o, l) {
    const s = this.clone();
    return (s[r] = li(o, l)), s;
  }
  _c(r) {
    return new this.constructor(r);
  }
  getMax() {
    return (
      typeof this._max > "u" && (this._max = Math.max(this.r, this.g, this.b)),
      this._max
    );
  }
  getMin() {
    return (
      typeof this._min > "u" && (this._min = Math.min(this.r, this.g, this.b)),
      this._min
    );
  }
  fromHexString(r) {
    const o = r.replace("#", "");
    function l(s, f) {
      return parseInt(o[s] + o[f || s], 16);
    }
    o.length < 6
      ? ((this.r = l(0)),
        (this.g = l(1)),
        (this.b = l(2)),
        (this.a = o[3] ? l(3) / 255 : 1))
      : ((this.r = l(0, 1)),
        (this.g = l(2, 3)),
        (this.b = l(4, 5)),
        (this.a = o[6] ? l(6, 7) / 255 : 1));
  }
  fromHsl({ h: r, s: o, l, a: s }) {
    if (
      ((this._h = r % 360),
      (this._s = o),
      (this._l = l),
      (this.a = typeof s == "number" ? s : 1),
      o <= 0)
    ) {
      const b = Yt(l * 255);
      (this.r = b), (this.g = b), (this.b = b);
    }
    let f = 0,
      d = 0,
      v = 0;
    const h = r / 60,
      m = (1 - Math.abs(2 * l - 1)) * o,
      p = m * (1 - Math.abs((h % 2) - 1));
    h >= 0 && h < 1
      ? ((f = m), (d = p))
      : h >= 1 && h < 2
      ? ((f = p), (d = m))
      : h >= 2 && h < 3
      ? ((d = m), (v = p))
      : h >= 3 && h < 4
      ? ((d = p), (v = m))
      : h >= 4 && h < 5
      ? ((f = p), (v = m))
      : h >= 5 && h < 6 && ((f = m), (v = p));
    const y = l - m / 2;
    (this.r = Yt((f + y) * 255)),
      (this.g = Yt((d + y) * 255)),
      (this.b = Yt((v + y) * 255));
  }
  fromHsv({ h: r, s: o, v: l, a: s }) {
    (this._h = r % 360),
      (this._s = o),
      (this._v = l),
      (this.a = typeof s == "number" ? s : 1);
    const f = Yt(l * 255);
    if (((this.r = f), (this.g = f), (this.b = f), o <= 0)) return;
    const d = r / 60,
      v = Math.floor(d),
      h = d - v,
      m = Yt(l * (1 - o) * 255),
      p = Yt(l * (1 - o * h) * 255),
      y = Yt(l * (1 - o * (1 - h)) * 255);
    switch (v) {
      case 0:
        (this.g = y), (this.b = m);
        break;
      case 1:
        (this.r = p), (this.b = m);
        break;
      case 2:
        (this.r = m), (this.b = y);
        break;
      case 3:
        (this.r = m), (this.g = p);
        break;
      case 4:
        (this.r = y), (this.g = m);
        break;
      case 5:
      default:
        (this.g = m), (this.b = p);
        break;
    }
  }
  fromHsvString(r) {
    const o = pd(r, Hg);
    this.fromHsv({ h: o[0], s: o[1], v: o[2], a: o[3] });
  }
  fromHslString(r) {
    const o = pd(r, Hg);
    this.fromHsl({ h: o[0], s: o[1], l: o[2], a: o[3] });
  }
  fromRgbString(r) {
    const o = pd(r, (l, s) => (s.includes("%") ? Yt((l / 100) * 255) : l));
    (this.r = o[0]), (this.g = o[1]), (this.b = o[2]), (this.a = o[3]);
  }
}
var Fs = 2,
  Bg = 0.16,
  w4 = 0.05,
  j4 = 0.05,
  R4 = 0.15,
  w1 = 5,
  j1 = 4,
  A4 = [
    { index: 7, amount: 15 },
    { index: 6, amount: 25 },
    { index: 5, amount: 30 },
    { index: 5, amount: 45 },
    { index: 5, amount: 65 },
    { index: 5, amount: 85 },
    { index: 4, amount: 90 },
    { index: 3, amount: 95 },
    { index: 2, amount: 97 },
    { index: 1, amount: 98 },
  ];
function Ug(n, r, o) {
  var l;
  return (
    Math.round(n.h) >= 60 && Math.round(n.h) <= 240
      ? (l = o ? Math.round(n.h) - Fs * r : Math.round(n.h) + Fs * r)
      : (l = o ? Math.round(n.h) + Fs * r : Math.round(n.h) - Fs * r),
    l < 0 ? (l += 360) : l >= 360 && (l -= 360),
    l
  );
}
function $g(n, r, o) {
  if (n.h === 0 && n.s === 0) return n.s;
  var l;
  return (
    o ? (l = n.s - Bg * r) : r === j1 ? (l = n.s + Bg) : (l = n.s + w4 * r),
    l > 1 && (l = 1),
    o && r === w1 && l > 0.1 && (l = 0.1),
    l < 0.06 && (l = 0.06),
    Math.round(l * 100) / 100
  );
}
function Pg(n, r, o) {
  var l;
  return (
    o ? (l = n.v + j4 * r) : (l = n.v - R4 * r),
    (l = Math.max(0, Math.min(1, l))),
    Math.round(l * 100) / 100
  );
}
function nl(n) {
  for (
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      o = [],
      l = new gt(n),
      s = l.toHsv(),
      f = w1;
    f > 0;
    f -= 1
  ) {
    var d = new gt({ h: Ug(s, f, !0), s: $g(s, f, !0), v: Pg(s, f, !0) });
    o.push(d);
  }
  o.push(l);
  for (var v = 1; v <= j1; v += 1) {
    var h = new gt({ h: Ug(s, v), s: $g(s, v), v: Pg(s, v) });
    o.push(h);
  }
  return r.theme === "dark"
    ? A4.map(function (m) {
        var p = m.index,
          y = m.amount;
        return new gt(r.backgroundColor || "#141414")
          .mix(o[p], y)
          .toHexString();
      })
    : o.map(function (m) {
        return m.toHexString();
      });
}
var gd = {
    red: "#F5222D",
    volcano: "#FA541C",
    orange: "#FA8C16",
    gold: "#FAAD14",
    yellow: "#FADB14",
    lime: "#A0D911",
    green: "#52C41A",
    cyan: "#13C2C2",
    blue: "#1677FF",
    geekblue: "#2F54EB",
    purple: "#722ED1",
    magenta: "#EB2F96",
    grey: "#666666",
  },
  eh = [
    "#fff1f0",
    "#ffccc7",
    "#ffa39e",
    "#ff7875",
    "#ff4d4f",
    "#f5222d",
    "#cf1322",
    "#a8071a",
    "#820014",
    "#5c0011",
  ];
eh.primary = eh[5];
var th = [
  "#fff2e8",
  "#ffd8bf",
  "#ffbb96",
  "#ff9c6e",
  "#ff7a45",
  "#fa541c",
  "#d4380d",
  "#ad2102",
  "#871400",
  "#610b00",
];
th.primary = th[5];
var nh = [
  "#fff7e6",
  "#ffe7ba",
  "#ffd591",
  "#ffc069",
  "#ffa940",
  "#fa8c16",
  "#d46b08",
  "#ad4e00",
  "#873800",
  "#612500",
];
nh.primary = nh[5];
var ah = [
  "#fffbe6",
  "#fff1b8",
  "#ffe58f",
  "#ffd666",
  "#ffc53d",
  "#faad14",
  "#d48806",
  "#ad6800",
  "#874d00",
  "#613400",
];
ah.primary = ah[5];
var rh = [
  "#feffe6",
  "#ffffb8",
  "#fffb8f",
  "#fff566",
  "#ffec3d",
  "#fadb14",
  "#d4b106",
  "#ad8b00",
  "#876800",
  "#614700",
];
rh.primary = rh[5];
var lh = [
  "#fcffe6",
  "#f4ffb8",
  "#eaff8f",
  "#d3f261",
  "#bae637",
  "#a0d911",
  "#7cb305",
  "#5b8c00",
  "#3f6600",
  "#254000",
];
lh.primary = lh[5];
var oh = [
  "#f6ffed",
  "#d9f7be",
  "#b7eb8f",
  "#95de64",
  "#73d13d",
  "#52c41a",
  "#389e0d",
  "#237804",
  "#135200",
  "#092b00",
];
oh.primary = oh[5];
var ih = [
  "#e6fffb",
  "#b5f5ec",
  "#87e8de",
  "#5cdbd3",
  "#36cfc9",
  "#13c2c2",
  "#08979c",
  "#006d75",
  "#00474f",
  "#002329",
];
ih.primary = ih[5];
var pc = [
  "#e6f4ff",
  "#bae0ff",
  "#91caff",
  "#69b1ff",
  "#4096ff",
  "#1677ff",
  "#0958d9",
  "#003eb3",
  "#002c8c",
  "#001d66",
];
pc.primary = pc[5];
var sh = [
  "#f0f5ff",
  "#d6e4ff",
  "#adc6ff",
  "#85a5ff",
  "#597ef7",
  "#2f54eb",
  "#1d39c4",
  "#10239e",
  "#061178",
  "#030852",
];
sh.primary = sh[5];
var ch = [
  "#f9f0ff",
  "#efdbff",
  "#d3adf7",
  "#b37feb",
  "#9254de",
  "#722ed1",
  "#531dab",
  "#391085",
  "#22075e",
  "#120338",
];
ch.primary = ch[5];
var uh = [
  "#fff0f6",
  "#ffd6e7",
  "#ffadd2",
  "#ff85c0",
  "#f759ab",
  "#eb2f96",
  "#c41d7f",
  "#9e1068",
  "#780650",
  "#520339",
];
uh.primary = uh[5];
var fh = [
  "#a6a6a6",
  "#999999",
  "#8c8c8c",
  "#808080",
  "#737373",
  "#666666",
  "#404040",
  "#1a1a1a",
  "#000000",
  "#000000",
];
fh.primary = fh[5];
var yd = {
  red: eh,
  volcano: th,
  orange: nh,
  gold: ah,
  yellow: rh,
  lime: lh,
  green: oh,
  cyan: ih,
  blue: pc,
  geekblue: sh,
  purple: ch,
  magenta: uh,
  grey: fh,
};
function R1(n, r) {
  let { generateColorPalettes: o, generateNeutralColorPalettes: l } = r;
  const {
      colorSuccess: s,
      colorWarning: f,
      colorError: d,
      colorInfo: v,
      colorPrimary: h,
      colorBgBase: m,
      colorTextBase: p,
    } = n,
    y = o(h),
    b = o(s),
    T = o(f),
    w = o(d),
    O = o(v),
    E = l(m, p),
    H = n.colorLink || n.colorInfo,
    j = o(H),
    D = new gt(w[1]).mix(new gt(w[3]), 50).toHexString();
  return Object.assign(Object.assign({}, E), {
    colorPrimaryBg: y[1],
    colorPrimaryBgHover: y[2],
    colorPrimaryBorder: y[3],
    colorPrimaryBorderHover: y[4],
    colorPrimaryHover: y[5],
    colorPrimary: y[6],
    colorPrimaryActive: y[7],
    colorPrimaryTextHover: y[8],
    colorPrimaryText: y[9],
    colorPrimaryTextActive: y[10],
    colorSuccessBg: b[1],
    colorSuccessBgHover: b[2],
    colorSuccessBorder: b[3],
    colorSuccessBorderHover: b[4],
    colorSuccessHover: b[4],
    colorSuccess: b[6],
    colorSuccessActive: b[7],
    colorSuccessTextHover: b[8],
    colorSuccessText: b[9],
    colorSuccessTextActive: b[10],
    colorErrorBg: w[1],
    colorErrorBgHover: w[2],
    colorErrorBgFilledHover: D,
    colorErrorBgActive: w[3],
    colorErrorBorder: w[3],
    colorErrorBorderHover: w[4],
    colorErrorHover: w[5],
    colorError: w[6],
    colorErrorActive: w[7],
    colorErrorTextHover: w[8],
    colorErrorText: w[9],
    colorErrorTextActive: w[10],
    colorWarningBg: T[1],
    colorWarningBgHover: T[2],
    colorWarningBorder: T[3],
    colorWarningBorderHover: T[4],
    colorWarningHover: T[4],
    colorWarning: T[6],
    colorWarningActive: T[7],
    colorWarningTextHover: T[8],
    colorWarningText: T[9],
    colorWarningTextActive: T[10],
    colorInfoBg: O[1],
    colorInfoBgHover: O[2],
    colorInfoBorder: O[3],
    colorInfoBorderHover: O[4],
    colorInfoHover: O[4],
    colorInfo: O[6],
    colorInfoActive: O[7],
    colorInfoTextHover: O[8],
    colorInfoText: O[9],
    colorInfoTextActive: O[10],
    colorLinkHover: j[4],
    colorLink: j[6],
    colorLinkActive: j[7],
    colorBgMask: new gt("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff",
  });
}
const N4 = (n) => {
  let r = n,
    o = n,
    l = n,
    s = n;
  return (
    n < 6 && n >= 5
      ? (r = n + 1)
      : n < 16 && n >= 6
      ? (r = n + 2)
      : n >= 16 && (r = 16),
    n < 7 && n >= 5
      ? (o = 4)
      : n < 8 && n >= 7
      ? (o = 5)
      : n < 14 && n >= 8
      ? (o = 6)
      : n < 16 && n >= 14
      ? (o = 7)
      : n >= 16 && (o = 8),
    n < 6 && n >= 2 ? (l = 1) : n >= 6 && (l = 2),
    n > 4 && n < 8 ? (s = 4) : n >= 8 && (s = 6),
    {
      borderRadius: n,
      borderRadiusXS: l,
      borderRadiusSM: o,
      borderRadiusLG: r,
      borderRadiusOuter: s,
    }
  );
};
function M4(n) {
  const { motionUnit: r, motionBase: o, borderRadius: l, lineWidth: s } = n;
  return Object.assign(
    {
      motionDurationFast: `${(o + r).toFixed(1)}s`,
      motionDurationMid: `${(o + r * 2).toFixed(1)}s`,
      motionDurationSlow: `${(o + r * 3).toFixed(1)}s`,
      lineWidthBold: s + 1,
    },
    N4(l)
  );
}
const A1 = (n) => {
  const { controlHeight: r } = n;
  return {
    controlHeightSM: r * 0.75,
    controlHeightXS: r * 0.5,
    controlHeightLG: r * 1.25,
  };
};
function lc(n) {
  return (n + 8) / n;
}
function D4(n) {
  const r = Array.from({ length: 10 }).map((o, l) => {
    const s = l - 1,
      f = n * Math.pow(Math.E, s / 5),
      d = l > 1 ? Math.floor(f) : Math.ceil(f);
    return Math.floor(d / 2) * 2;
  });
  return (r[1] = n), r.map((o) => ({ size: o, lineHeight: lc(o) }));
}
const N1 = (n) => {
  const r = D4(n),
    o = r.map((p) => p.size),
    l = r.map((p) => p.lineHeight),
    s = o[1],
    f = o[0],
    d = o[2],
    v = l[1],
    h = l[0],
    m = l[2];
  return {
    fontSizeSM: f,
    fontSize: s,
    fontSizeLG: d,
    fontSizeXL: o[3],
    fontSizeHeading1: o[6],
    fontSizeHeading2: o[5],
    fontSizeHeading3: o[4],
    fontSizeHeading4: o[3],
    fontSizeHeading5: o[2],
    lineHeight: v,
    lineHeightLG: m,
    lineHeightSM: h,
    fontHeight: Math.round(v * s),
    fontHeightLG: Math.round(m * d),
    fontHeightSM: Math.round(h * f),
    lineHeightHeading1: l[6],
    lineHeightHeading2: l[5],
    lineHeightHeading3: l[4],
    lineHeightHeading4: l[3],
    lineHeightHeading5: l[2],
  };
};
function z4(n) {
  const { sizeUnit: r, sizeStep: o } = n;
  return {
    sizeXXL: r * (o + 8),
    sizeXL: r * (o + 4),
    sizeLG: r * (o + 2),
    sizeMD: r * (o + 1),
    sizeMS: r * o,
    size: r * o,
    sizeSM: r * (o - 1),
    sizeXS: r * (o - 2),
    sizeXXS: r * (o - 3),
  };
}
const qn = (n, r) => new gt(n).setA(r).toRgbString(),
  oi = (n, r) => new gt(n).darken(r).toHexString(),
  L4 = (n) => {
    const r = nl(n);
    return {
      1: r[0],
      2: r[1],
      3: r[2],
      4: r[3],
      5: r[4],
      6: r[5],
      7: r[6],
      8: r[4],
      9: r[5],
      10: r[6],
    };
  },
  H4 = (n, r) => {
    const o = n || "#fff",
      l = r || "#000";
    return {
      colorBgBase: o,
      colorTextBase: l,
      colorText: qn(l, 0.88),
      colorTextSecondary: qn(l, 0.65),
      colorTextTertiary: qn(l, 0.45),
      colorTextQuaternary: qn(l, 0.25),
      colorFill: qn(l, 0.15),
      colorFillSecondary: qn(l, 0.06),
      colorFillTertiary: qn(l, 0.04),
      colorFillQuaternary: qn(l, 0.02),
      colorBgSolid: qn(l, 1),
      colorBgSolidHover: qn(l, 0.75),
      colorBgSolidActive: qn(l, 0.95),
      colorBgLayout: oi(o, 4),
      colorBgContainer: oi(o, 0),
      colorBgElevated: oi(o, 0),
      colorBgSpotlight: qn(l, 0.85),
      colorBgBlur: "transparent",
      colorBorder: oi(o, 15),
      colorBorderSecondary: oi(o, 6),
    };
  };
function zc(n) {
  (gd.pink = gd.magenta), (yd.pink = yd.magenta);
  const r = Object.keys(qh)
    .map((o) => {
      const l = n[o] === gd[o] ? yd[o] : nl(n[o]);
      return Array.from({ length: 10 }, () => 1).reduce(
        (s, f, d) => (
          (s[`${o}-${d + 1}`] = l[d]), (s[`${o}${d + 1}`] = l[d]), s
        ),
        {}
      );
    })
    .reduce((o, l) => ((o = Object.assign(Object.assign({}, o), l)), o), {});
  return Object.assign(
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, n), r),
            R1(n, {
              generateColorPalettes: L4,
              generateNeutralColorPalettes: H4,
            })
          ),
          N1(n.fontSize)
        ),
        z4(n)
      ),
      A1(n)
    ),
    M4(n)
  );
}
const Vh = mc(zc),
  gi = { token: Kl, override: { override: Kl }, hashed: !0 },
  kh = fe.createContext(gi),
  gc = "ant",
  Lc = "anticon",
  B4 = (n, r) => r || (n ? `${gc}-${n}` : gc),
  yn = x.createContext({ getPrefixCls: B4, iconPrefixCls: Lc }),
  { Consumer: B_ } = yn,
  qg = {};
function U4(n) {
  const r = x.useContext(yn),
    { getPrefixCls: o, direction: l, getPopupContainer: s } = r,
    f = r[n];
  return Object.assign(Object.assign({ classNames: qg, styles: qg }, f), {
    getPrefixCls: o,
    direction: l,
    getPopupContainer: s,
  });
}
const $4 = `-ant-${Date.now()}-${Math.random()}`;
function P4(n, r) {
  const o = {},
    l = (d, v) => {
      let h = d.clone();
      return (h = (v == null ? void 0 : v(h)) || h), h.toRgbString();
    },
    s = (d, v) => {
      const h = new gt(d),
        m = nl(h.toRgbString());
      (o[`${v}-color`] = l(h)),
        (o[`${v}-color-disabled`] = m[1]),
        (o[`${v}-color-hover`] = m[4]),
        (o[`${v}-color-active`] = m[6]),
        (o[`${v}-color-outline`] = h.clone().setA(0.2).toRgbString()),
        (o[`${v}-color-deprecated-bg`] = m[0]),
        (o[`${v}-color-deprecated-border`] = m[2]);
    };
  if (r.primaryColor) {
    s(r.primaryColor, "primary");
    const d = new gt(r.primaryColor),
      v = nl(d.toRgbString());
    v.forEach((m, p) => {
      o[`primary-${p + 1}`] = m;
    }),
      (o["primary-color-deprecated-l-35"] = l(d, (m) => m.lighten(35))),
      (o["primary-color-deprecated-l-20"] = l(d, (m) => m.lighten(20))),
      (o["primary-color-deprecated-t-20"] = l(d, (m) => m.tint(20))),
      (o["primary-color-deprecated-t-50"] = l(d, (m) => m.tint(50))),
      (o["primary-color-deprecated-f-12"] = l(d, (m) => m.setA(m.a * 0.12)));
    const h = new gt(v[0]);
    (o["primary-color-active-deprecated-f-30"] = l(h, (m) =>
      m.setA(m.a * 0.3)
    )),
      (o["primary-color-active-deprecated-d-02"] = l(h, (m) => m.darken(2)));
  }
  return (
    r.successColor && s(r.successColor, "success"),
    r.warningColor && s(r.warningColor, "warning"),
    r.errorColor && s(r.errorColor, "error"),
    r.infoColor && s(r.infoColor, "info"),
    `
  :root {
    ${Object.keys(o).map((d) => `--${n}-${d}: ${o[d]};`).join(`
`)}
  }
  `.trim()
  );
}
function q4(n, r) {
  const o = P4(n, r);
  ka() && Zr(o, `${$4}-dynamic-theme`);
}
const yc = x.createContext(!1),
  V4 = (n) => {
    let { children: r, disabled: o } = n;
    const l = x.useContext(yc);
    return x.createElement(yc.Provider, { value: o ?? l }, r);
  },
  Jl = x.createContext(void 0),
  k4 = (n) => {
    let { children: r, size: o } = n;
    const l = x.useContext(Jl);
    return x.createElement(Jl.Provider, { value: o || l }, r);
  };
function G4() {
  const n = x.useContext(yc),
    r = x.useContext(Jl);
  return { componentDisabled: n, componentSize: r };
}
var M1 = Yn(function n() {
    Xn(this, n);
  }),
  D1 = "CALC_UNIT",
  X4 = new RegExp(D1, "g");
function bd(n) {
  return typeof n == "number" ? "".concat(n).concat(D1) : n;
}
var Y4 = (function (n) {
    Ri(o, n);
    var r = Ai(o);
    function o(l, s) {
      var f;
      Xn(this, o),
        (f = r.call(this)),
        Ee(Qr(f), "result", ""),
        Ee(Qr(f), "unitlessCssVar", void 0),
        Ee(Qr(f), "lowPriority", void 0);
      var d = Xe(l);
      return (
        (f.unitlessCssVar = s),
        l instanceof o
          ? (f.result = "(".concat(l.result, ")"))
          : d === "number"
          ? (f.result = bd(l))
          : d === "string" && (f.result = l),
        f
      );
    }
    return (
      Yn(o, [
        {
          key: "add",
          value: function (s) {
            return (
              s instanceof o
                ? (this.result = ""
                    .concat(this.result, " + ")
                    .concat(s.getResult()))
                : (typeof s == "number" || typeof s == "string") &&
                  (this.result = "".concat(this.result, " + ").concat(bd(s))),
              (this.lowPriority = !0),
              this
            );
          },
        },
        {
          key: "sub",
          value: function (s) {
            return (
              s instanceof o
                ? (this.result = ""
                    .concat(this.result, " - ")
                    .concat(s.getResult()))
                : (typeof s == "number" || typeof s == "string") &&
                  (this.result = "".concat(this.result, " - ").concat(bd(s))),
              (this.lowPriority = !0),
              this
            );
          },
        },
        {
          key: "mul",
          value: function (s) {
            return (
              this.lowPriority && (this.result = "(".concat(this.result, ")")),
              s instanceof o
                ? (this.result = ""
                    .concat(this.result, " * ")
                    .concat(s.getResult(!0)))
                : (typeof s == "number" || typeof s == "string") &&
                  (this.result = "".concat(this.result, " * ").concat(s)),
              (this.lowPriority = !1),
              this
            );
          },
        },
        {
          key: "div",
          value: function (s) {
            return (
              this.lowPriority && (this.result = "(".concat(this.result, ")")),
              s instanceof o
                ? (this.result = ""
                    .concat(this.result, " / ")
                    .concat(s.getResult(!0)))
                : (typeof s == "number" || typeof s == "string") &&
                  (this.result = "".concat(this.result, " / ").concat(s)),
              (this.lowPriority = !1),
              this
            );
          },
        },
        {
          key: "getResult",
          value: function (s) {
            return this.lowPriority || s
              ? "(".concat(this.result, ")")
              : this.result;
          },
        },
        {
          key: "equal",
          value: function (s) {
            var f = this,
              d = s || {},
              v = d.unit,
              h = !0;
            return (
              typeof v == "boolean"
                ? (h = v)
                : Array.from(this.unitlessCssVar).some(function (m) {
                    return f.result.includes(m);
                  }) && (h = !1),
              (this.result = this.result.replace(X4, h ? "px" : "")),
              typeof this.lowPriority < "u"
                ? "calc(".concat(this.result, ")")
                : this.result
            );
          },
        },
      ]),
      o
    );
  })(M1),
  F4 = (function (n) {
    Ri(o, n);
    var r = Ai(o);
    function o(l) {
      var s;
      return (
        Xn(this, o),
        (s = r.call(this)),
        Ee(Qr(s), "result", 0),
        l instanceof o
          ? (s.result = l.result)
          : typeof l == "number" && (s.result = l),
        s
      );
    }
    return (
      Yn(o, [
        {
          key: "add",
          value: function (s) {
            return (
              s instanceof o
                ? (this.result += s.result)
                : typeof s == "number" && (this.result += s),
              this
            );
          },
        },
        {
          key: "sub",
          value: function (s) {
            return (
              s instanceof o
                ? (this.result -= s.result)
                : typeof s == "number" && (this.result -= s),
              this
            );
          },
        },
        {
          key: "mul",
          value: function (s) {
            return (
              s instanceof o
                ? (this.result *= s.result)
                : typeof s == "number" && (this.result *= s),
              this
            );
          },
        },
        {
          key: "div",
          value: function (s) {
            return (
              s instanceof o
                ? (this.result /= s.result)
                : typeof s == "number" && (this.result /= s),
              this
            );
          },
        },
        {
          key: "equal",
          value: function () {
            return this.result;
          },
        },
      ]),
      o
    );
  })(M1),
  I4 = function (r, o) {
    var l = r === "css" ? Y4 : F4;
    return function (s) {
      return new l(s, o);
    };
  },
  Vg = function (r, o) {
    return "".concat(
      [
        o,
        r
          .replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2")
          .replace(/([a-z])([A-Z])/g, "$1-$2"),
      ]
        .filter(Boolean)
        .join("-")
    );
  };
function yi(n) {
  var r = x.useRef();
  r.current = n;
  var o = x.useCallback(function () {
    for (var l, s = arguments.length, f = new Array(s), d = 0; d < s; d++)
      f[d] = arguments[d];
    return (l = r.current) === null || l === void 0
      ? void 0
      : l.call.apply(l, [r].concat(f));
  }, []);
  return o;
}
function dh(n) {
  var r = x.useRef(!1),
    o = x.useState(n),
    l = Re(o, 2),
    s = l[0],
    f = l[1];
  x.useEffect(function () {
    return (
      (r.current = !1),
      function () {
        r.current = !0;
      }
    );
  }, []);
  function d(v, h) {
    (h && r.current) || f(v);
  }
  return [s, d];
}
function kg(n, r, o, l) {
  var s = be({}, r[n]);
  if (l != null && l.deprecatedTokens) {
    var f = l.deprecatedTokens;
    f.forEach(function (v) {
      var h = Re(v, 2),
        m = h[0],
        p = h[1];
      if ((s != null && s[m]) || (s != null && s[p])) {
        var y;
        ((y = s[p]) !== null && y !== void 0) ||
          (s[p] = s == null ? void 0 : s[m]);
      }
    });
  }
  var d = be(be({}, o), s);
  return (
    Object.keys(d).forEach(function (v) {
      d[v] === r[v] && delete d[v];
    }),
    d
  );
}
var z1 = typeof CSSINJS_STATISTIC < "u",
  hh = !0;
function al() {
  for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
    r[o] = arguments[o];
  if (!z1) return Object.assign.apply(Object, [{}].concat(r));
  hh = !1;
  var l = {};
  return (
    r.forEach(function (s) {
      if (Xe(s) === "object") {
        var f = Object.keys(s);
        f.forEach(function (d) {
          Object.defineProperty(l, d, {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return s[d];
            },
          });
        });
      }
    }),
    (hh = !0),
    l
  );
}
var Gg = {};
function Q4() {}
var Z4 = function (r) {
  var o,
    l = r,
    s = Q4;
  return (
    z1 &&
      typeof Proxy < "u" &&
      ((o = new Set()),
      (l = new Proxy(r, {
        get: function (d, v) {
          if (hh) {
            var h;
            (h = o) === null || h === void 0 || h.add(v);
          }
          return d[v];
        },
      })),
      (s = function (d, v) {
        var h;
        Gg[d] = {
          global: Array.from(o),
          component: be(
            be({}, (h = Gg[d]) === null || h === void 0 ? void 0 : h.component),
            v
          ),
        };
      })),
    { token: l, keys: o, flush: s }
  );
};
function Xg(n, r, o) {
  if (typeof o == "function") {
    var l;
    return o(al(r, (l = r[n]) !== null && l !== void 0 ? l : {}));
  }
  return o ?? {};
}
function K4(n) {
  return n === "js"
    ? { max: Math.max, min: Math.min }
    : {
        max: function () {
          for (var o = arguments.length, l = new Array(o), s = 0; s < o; s++)
            l[s] = arguments[s];
          return "max(".concat(
            l
              .map(function (f) {
                return tl(f);
              })
              .join(","),
            ")"
          );
        },
        min: function () {
          for (var o = arguments.length, l = new Array(o), s = 0; s < o; s++)
            l[s] = arguments[s];
          return "min(".concat(
            l
              .map(function (f) {
                return tl(f);
              })
              .join(","),
            ")"
          );
        },
      };
}
var J4 = 1e3 * 60 * 10,
  W4 = (function () {
    function n() {
      Xn(this, n),
        Ee(this, "map", new Map()),
        Ee(this, "objectIDMap", new WeakMap()),
        Ee(this, "nextID", 0),
        Ee(this, "lastAccessBeat", new Map()),
        Ee(this, "accessBeat", 0);
    }
    return (
      Yn(n, [
        {
          key: "set",
          value: function (o, l) {
            this.clear();
            var s = this.getCompositeKey(o);
            this.map.set(s, l), this.lastAccessBeat.set(s, Date.now());
          },
        },
        {
          key: "get",
          value: function (o) {
            var l = this.getCompositeKey(o),
              s = this.map.get(l);
            return (
              this.lastAccessBeat.set(l, Date.now()), (this.accessBeat += 1), s
            );
          },
        },
        {
          key: "getCompositeKey",
          value: function (o) {
            var l = this,
              s = o.map(function (f) {
                return f && Xe(f) === "object"
                  ? "obj_".concat(l.getObjectID(f))
                  : "".concat(Xe(f), "_").concat(f);
              });
            return s.join("|");
          },
        },
        {
          key: "getObjectID",
          value: function (o) {
            if (this.objectIDMap.has(o)) return this.objectIDMap.get(o);
            var l = this.nextID;
            return this.objectIDMap.set(o, l), (this.nextID += 1), l;
          },
        },
        {
          key: "clear",
          value: function () {
            var o = this;
            if (this.accessBeat > 1e4) {
              var l = Date.now();
              this.lastAccessBeat.forEach(function (s, f) {
                l - s > J4 && (o.map.delete(f), o.lastAccessBeat.delete(f));
              }),
                (this.accessBeat = 0);
            }
          },
        },
      ]),
      n
    );
  })(),
  Yg = new W4();
function e6(n, r) {
  return fe.useMemo(function () {
    var o = Yg.get(r);
    if (o) return o;
    var l = n();
    return Yg.set(r, l), l;
  }, r);
}
var t6 = function () {
  return {};
};
function n6(n) {
  var r = n.useCSP,
    o = r === void 0 ? t6 : r,
    l = n.useToken,
    s = n.usePrefix,
    f = n.getResetStyles,
    d = n.getCommonStyle,
    v = n.getCompUnitless;
  function h(b, T, w, O) {
    var E = Array.isArray(b) ? b[0] : b;
    function H(q) {
      return ""
        .concat(String(E))
        .concat(q.slice(0, 1).toUpperCase())
        .concat(q.slice(1));
    }
    var j = (O == null ? void 0 : O.unitless) || {},
      D = typeof v == "function" ? v(b) : {},
      U = be(be({}, D), {}, Ee({}, H("zIndexPopup"), !0));
    Object.keys(j).forEach(function (q) {
      U[H(q)] = j[q];
    });
    var R = be(be({}, O), {}, { unitless: U, prefixToken: H }),
      F = p(b, T, w, R),
      _ = m(E, w, R);
    return function (q) {
      var K =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : q,
        B = F(q, K),
        $ = Re(B, 2),
        k = $[1],
        ee = _(K),
        te = Re(ee, 2),
        se = te[0],
        z = te[1];
      return [se, k, z];
    };
  }
  function m(b, T, w) {
    var O = w.unitless,
      E = w.injectStyle,
      H = E === void 0 ? !0 : E,
      j = w.prefixToken,
      D = w.ignore,
      U = function (_) {
        var q = _.rootCls,
          K = _.cssVar,
          B = K === void 0 ? {} : K,
          $ = l(),
          k = $.realToken;
        return (
          p4(
            {
              path: [b],
              prefix: B.prefix,
              key: B.key,
              unitless: O,
              ignore: D,
              token: k,
              scope: q,
            },
            function () {
              var ee = Xg(b, k, T),
                te = kg(b, k, ee, {
                  deprecatedTokens: w == null ? void 0 : w.deprecatedTokens,
                });
              return (
                Object.keys(ee).forEach(function (se) {
                  (te[j(se)] = te[se]), delete te[se];
                }),
                te
              );
            }
          ),
          null
        );
      },
      R = function (_) {
        var q = l(),
          K = q.cssVar;
        return [
          function (B) {
            return H && K
              ? fe.createElement(
                  fe.Fragment,
                  null,
                  fe.createElement(U, { rootCls: _, cssVar: K, component: b }),
                  B
                )
              : B;
          },
          K == null ? void 0 : K.key,
        ];
      };
    return R;
  }
  function p(b, T, w) {
    var O = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
      E = Array.isArray(b) ? b : [b, b],
      H = Re(E, 1),
      j = H[0],
      D = E.join("-"),
      U = n.layer || { name: "antd" };
    return function (R) {
      var F =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : R,
        _ = l(),
        q = _.theme,
        K = _.realToken,
        B = _.hashId,
        $ = _.token,
        k = _.cssVar,
        ee = s(),
        te = ee.rootPrefixCls,
        se = ee.iconPrefixCls,
        z = o(),
        W = k ? "css" : "js",
        J = e6(
          function () {
            var ue = new Set();
            return (
              k &&
                Object.keys(O.unitless || {}).forEach(function (ce) {
                  ue.add(Ws(ce, k.prefix)), ue.add(Ws(ce, Vg(j, k.prefix)));
                }),
              I4(W, ue)
            );
          },
          [W, j, k == null ? void 0 : k.prefix]
        ),
        ve = K4(W),
        A = ve.max,
        Z = ve.min,
        le = {
          theme: q,
          token: $,
          hashId: B,
          nonce: function () {
            return z.nonce;
          },
          clientOnly: O.clientOnly,
          layer: U,
          order: O.order || -999,
        };
      typeof f == "function" &&
        Jd(
          be(be({}, le), {}, { clientOnly: !1, path: ["Shared", te] }),
          function () {
            return f($, {
              prefix: { rootPrefixCls: te, iconPrefixCls: se },
              csp: z,
            });
          }
        );
      var ie = Jd(be(be({}, le), {}, { path: [D, R, se] }), function () {
        if (O.injectStyle === !1) return [];
        var ue = Z4($),
          ce = ue.token,
          me = ue.flush,
          Le = Xg(j, K, w),
          De = ".".concat(R),
          ut = kg(j, K, Le, { deprecatedTokens: O.deprecatedTokens });
        k &&
          Le &&
          Xe(Le) === "object" &&
          Object.keys(Le).forEach(function (Ie) {
            Le[Ie] = "var(".concat(Ws(Ie, Vg(j, k.prefix)), ")");
          });
        var st = al(
            ce,
            {
              componentCls: De,
              prefixCls: R,
              iconCls: ".".concat(se),
              antCls: ".".concat(te),
              calc: J,
              max: A,
              min: Z,
            },
            k ? Le : ut
          ),
          Ft = T(st, {
            hashId: B,
            prefixCls: R,
            rootPrefixCls: te,
            iconPrefixCls: se,
          });
        me(j, ut);
        var He = typeof d == "function" ? d(st, R, F, O.resetFont) : null;
        return [O.resetStyle === !1 ? null : He, Ft];
      });
      return [ie, B];
    };
  }
  function y(b, T, w) {
    var O = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
      E = p(b, T, w, be({ resetStyle: !1, order: -998 }, O)),
      H = function (D) {
        var U = D.prefixCls,
          R = D.rootCls,
          F = R === void 0 ? U : R;
        return E(U, F), null;
      };
    return H;
  }
  return {
    genStyleHooks: h,
    genSubStyleComponent: y,
    genComponentStyleHook: p,
  };
}
const Gh = [
    "blue",
    "purple",
    "cyan",
    "green",
    "magenta",
    "pink",
    "red",
    "orange",
    "yellow",
    "volcano",
    "geekblue",
    "lime",
    "gold",
  ],
  a6 = "5.25.1";
function xd(n) {
  return n >= 0 && n <= 255;
}
function si(n, r) {
  const { r: o, g: l, b: s, a: f } = new gt(n).toRgb();
  if (f < 1) return n;
  const { r: d, g: v, b: h } = new gt(r).toRgb();
  for (let m = 0.01; m <= 1; m += 0.01) {
    const p = Math.round((o - d * (1 - m)) / m),
      y = Math.round((l - v * (1 - m)) / m),
      b = Math.round((s - h * (1 - m)) / m);
    if (xd(p) && xd(y) && xd(b))
      return new gt({
        r: p,
        g: y,
        b,
        a: Math.round(m * 100) / 100,
      }).toRgbString();
  }
  return new gt({ r: o, g: l, b: s, a: 1 }).toRgbString();
}
var r6 = function (n, r) {
  var o = {};
  for (var l in n)
    Object.prototype.hasOwnProperty.call(n, l) &&
      r.indexOf(l) < 0 &&
      (o[l] = n[l]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, l = Object.getOwnPropertySymbols(n); s < l.length; s++)
      r.indexOf(l[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(n, l[s]) &&
        (o[l[s]] = n[l[s]]);
  return o;
};
function Xh(n) {
  const { override: r } = n,
    o = r6(n, ["override"]),
    l = Object.assign({}, r);
  Object.keys(Kl).forEach((b) => {
    delete l[b];
  });
  const s = Object.assign(Object.assign({}, o), l),
    f = 480,
    d = 576,
    v = 768,
    h = 992,
    m = 1200,
    p = 1600;
  if (s.motion === !1) {
    const b = "0s";
    (s.motionDurationFast = b),
      (s.motionDurationMid = b),
      (s.motionDurationSlow = b);
  }
  return Object.assign(
    Object.assign(Object.assign({}, s), {
      colorFillContent: s.colorFillSecondary,
      colorFillContentHover: s.colorFill,
      colorFillAlter: s.colorFillQuaternary,
      colorBgContainerDisabled: s.colorFillTertiary,
      colorBorderBg: s.colorBgContainer,
      colorSplit: si(s.colorBorderSecondary, s.colorBgContainer),
      colorTextPlaceholder: s.colorTextQuaternary,
      colorTextDisabled: s.colorTextQuaternary,
      colorTextHeading: s.colorText,
      colorTextLabel: s.colorTextSecondary,
      colorTextDescription: s.colorTextTertiary,
      colorTextLightSolid: s.colorWhite,
      colorHighlight: s.colorError,
      colorBgTextHover: s.colorFillSecondary,
      colorBgTextActive: s.colorFill,
      colorIcon: s.colorTextTertiary,
      colorIconHover: s.colorText,
      colorErrorOutline: si(s.colorErrorBg, s.colorBgContainer),
      colorWarningOutline: si(s.colorWarningBg, s.colorBgContainer),
      fontSizeIcon: s.fontSizeSM,
      lineWidthFocus: s.lineWidth * 3,
      lineWidth: s.lineWidth,
      controlOutlineWidth: s.lineWidth * 2,
      controlInteractiveSize: s.controlHeight / 2,
      controlItemBgHover: s.colorFillTertiary,
      controlItemBgActive: s.colorPrimaryBg,
      controlItemBgActiveHover: s.colorPrimaryBgHover,
      controlItemBgActiveDisabled: s.colorFill,
      controlTmpOutline: s.colorFillQuaternary,
      controlOutline: si(s.colorPrimaryBg, s.colorBgContainer),
      lineType: s.lineType,
      borderRadius: s.borderRadius,
      borderRadiusXS: s.borderRadiusXS,
      borderRadiusSM: s.borderRadiusSM,
      borderRadiusLG: s.borderRadiusLG,
      fontWeightStrong: 600,
      opacityLoading: 0.65,
      linkDecoration: "none",
      linkHoverDecoration: "none",
      linkFocusDecoration: "none",
      controlPaddingHorizontal: 12,
      controlPaddingHorizontalSM: 8,
      paddingXXS: s.sizeXXS,
      paddingXS: s.sizeXS,
      paddingSM: s.sizeSM,
      padding: s.size,
      paddingMD: s.sizeMD,
      paddingLG: s.sizeLG,
      paddingXL: s.sizeXL,
      paddingContentHorizontalLG: s.sizeLG,
      paddingContentVerticalLG: s.sizeMS,
      paddingContentHorizontal: s.sizeMS,
      paddingContentVertical: s.sizeSM,
      paddingContentHorizontalSM: s.size,
      paddingContentVerticalSM: s.sizeXS,
      marginXXS: s.sizeXXS,
      marginXS: s.sizeXS,
      marginSM: s.sizeSM,
      margin: s.size,
      marginMD: s.sizeMD,
      marginLG: s.sizeLG,
      marginXL: s.sizeXL,
      marginXXL: s.sizeXXL,
      boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
      screenXS: f,
      screenXSMin: f,
      screenXSMax: d - 1,
      screenSM: d,
      screenSMMin: d,
      screenSMMax: v - 1,
      screenMD: v,
      screenMDMin: v,
      screenMDMax: h - 1,
      screenLG: h,
      screenLGMin: h,
      screenLGMax: m - 1,
      screenXL: m,
      screenXLMin: m,
      screenXLMax: p - 1,
      screenXXL: p,
      screenXXLMin: p,
      boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
      boxShadowCard: `
      0 1px 2px -2px ${new gt("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new gt("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new gt("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
      boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)",
    }),
    l
  );
}
var Fg = function (n, r) {
  var o = {};
  for (var l in n)
    Object.prototype.hasOwnProperty.call(n, l) &&
      r.indexOf(l) < 0 &&
      (o[l] = n[l]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, l = Object.getOwnPropertySymbols(n); s < l.length; s++)
      r.indexOf(l[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(n, l[s]) &&
        (o[l[s]] = n[l[s]]);
  return o;
};
const L1 = {
    lineHeight: !0,
    lineHeightSM: !0,
    lineHeightLG: !0,
    lineHeightHeading1: !0,
    lineHeightHeading2: !0,
    lineHeightHeading3: !0,
    lineHeightHeading4: !0,
    lineHeightHeading5: !0,
    opacityLoading: !0,
    fontWeightStrong: !0,
    zIndexPopupBase: !0,
    zIndexBase: !0,
    opacityImage: !0,
  },
  l6 = {
    size: !0,
    sizeSM: !0,
    sizeLG: !0,
    sizeMD: !0,
    sizeXS: !0,
    sizeXXS: !0,
    sizeMS: !0,
    sizeXL: !0,
    sizeXXL: !0,
    sizeUnit: !0,
    sizeStep: !0,
    motionBase: !0,
    motionUnit: !0,
  },
  o6 = {
    screenXS: !0,
    screenXSMin: !0,
    screenXSMax: !0,
    screenSM: !0,
    screenSMMin: !0,
    screenSMMax: !0,
    screenMD: !0,
    screenMDMin: !0,
    screenMDMax: !0,
    screenLG: !0,
    screenLGMin: !0,
    screenLGMax: !0,
    screenXL: !0,
    screenXLMin: !0,
    screenXLMax: !0,
    screenXXL: !0,
    screenXXLMin: !0,
  },
  H1 = (n, r, o) => {
    const l = o.getDerivativeToken(n),
      { override: s } = r,
      f = Fg(r, ["override"]);
    let d = Object.assign(Object.assign({}, l), { override: s });
    return (
      (d = Xh(d)),
      f &&
        Object.entries(f).forEach((v) => {
          let [h, m] = v;
          const { theme: p } = m,
            y = Fg(m, ["theme"]);
          let b = y;
          p &&
            (b = H1(
              Object.assign(Object.assign({}, d), y),
              { override: y },
              p
            )),
            (d[h] = b);
        }),
      d
    );
  };
function rl() {
  const {
      token: n,
      hashed: r,
      theme: o,
      override: l,
      cssVar: s,
    } = fe.useContext(kh),
    f = `${a6}-${r || ""}`,
    d = o || Vh,
    [v, h, m] = V3(d, [Kl, n], {
      salt: f,
      override: l,
      getComputedToken: H1,
      formatToken: Xh,
      cssVar: s && {
        prefix: s.prefix,
        key: s.key,
        unitless: L1,
        ignore: l6,
        preserve: o6,
      },
    });
  return [d, m, r ? h : "", v, s];
}
const i6 = function (n) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
      color: n.colorText,
      fontSize: n.fontSize,
      lineHeight: n.lineHeight,
      listStyle: "none",
      fontFamily: r ? "inherit" : n.fontFamily,
    };
  },
  B1 = () => ({
    display: "inline-flex",
    alignItems: "center",
    color: "inherit",
    fontStyle: "normal",
    lineHeight: 0,
    textAlign: "center",
    textTransform: "none",
    verticalAlign: "-0.125em",
    textRendering: "optimizeLegibility",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    "> *": { lineHeight: 1 },
    svg: { display: "inline-block" },
  }),
  s6 = (n) => ({
    a: {
      color: n.colorLink,
      textDecoration: n.linkDecoration,
      backgroundColor: "transparent",
      outline: "none",
      cursor: "pointer",
      transition: `color ${n.motionDurationSlow}`,
      "-webkit-text-decoration-skip": "objects",
      "&:hover": { color: n.colorLinkHover },
      "&:active": { color: n.colorLinkActive },
      "&:active, &:hover": {
        textDecoration: n.linkHoverDecoration,
        outline: 0,
      },
      "&:focus": { textDecoration: n.linkFocusDecoration, outline: 0 },
      "&[disabled]": { color: n.colorTextDisabled, cursor: "not-allowed" },
    },
  }),
  c6 = (n, r, o, l) => {
    const s = `[class^="${r}"], [class*=" ${r}"]`,
      f = o ? `.${o}` : s,
      d = {
        boxSizing: "border-box",
        "&::before, &::after": { boxSizing: "border-box" },
      };
    let v = {};
    return (
      l !== !1 && (v = { fontFamily: n.fontFamily, fontSize: n.fontSize }),
      { [f]: Object.assign(Object.assign(Object.assign({}, v), d), { [s]: d }) }
    );
  },
  u6 = (n, r) => ({
    outline: `${tl(n.lineWidthFocus)} solid ${n.colorPrimaryBorder}`,
    outlineOffset: r ?? 1,
    transition: "outline-offset 0s, outline 0s",
  }),
  f6 = (n, r) => ({ "&:focus-visible": Object.assign({}, u6(n, r)) }),
  U1 = (n) => ({
    [`.${n}`]: Object.assign(Object.assign({}, B1()), {
      [`.${n} .${n}-icon`]: { display: "block" },
    }),
  }),
  {
    genStyleHooks: $1,
    genComponentStyleHook: d6,
    genSubStyleComponent: h6,
  } = n6({
    usePrefix: () => {
      const { getPrefixCls: n, iconPrefixCls: r } = x.useContext(yn);
      return { rootPrefixCls: n(), iconPrefixCls: r };
    },
    useToken: () => {
      const [n, r, o, l, s] = rl();
      return { theme: n, realToken: r, hashId: o, token: l, cssVar: s };
    },
    useCSP: () => {
      const { csp: n } = x.useContext(yn);
      return n ?? {};
    },
    getResetStyles: (n, r) => {
      var o;
      const l = s6(n);
      return [
        l,
        { "&": l },
        U1(
          (o = r == null ? void 0 : r.prefix.iconPrefixCls) !== null &&
            o !== void 0
            ? o
            : Lc
        ),
      ];
    },
    getCommonStyle: c6,
    getCompUnitless: () => L1,
  }),
  m6 = (n, r) => {
    const [o, l] = rl();
    return Jd(
      {
        token: l,
        hashId: "",
        path: ["ant-design-icons", n],
        nonce: () => (r == null ? void 0 : r.nonce),
        layer: { name: "antd" },
      },
      () => [U1(n)]
    );
  },
  v6 = Object.assign({}, Sc),
  { useId: Ig } = v6,
  p6 = () => "",
  g6 = typeof Ig > "u" ? p6 : Ig;
function y6(n, r, o) {
  var l;
  const s = n || {},
    f =
      s.inherit === !1 || !r
        ? Object.assign(Object.assign({}, gi), {
            hashed:
              (l = r == null ? void 0 : r.hashed) !== null && l !== void 0
                ? l
                : gi.hashed,
            cssVar: r == null ? void 0 : r.cssVar,
          })
        : r,
    d = g6();
  return Nh(
    () => {
      var v, h;
      if (!n) return r;
      const m = Object.assign({}, f.components);
      Object.keys(n.components || {}).forEach((b) => {
        m[b] = Object.assign(Object.assign({}, m[b]), n.components[b]);
      });
      const p = `css-var-${d.replace(/:/g, "")}`,
        y =
          ((v = s.cssVar) !== null && v !== void 0 ? v : f.cssVar) &&
          Object.assign(
            Object.assign(
              Object.assign(
                { prefix: o == null ? void 0 : o.prefixCls },
                typeof f.cssVar == "object" ? f.cssVar : {}
              ),
              typeof s.cssVar == "object" ? s.cssVar : {}
            ),
            {
              key:
                (typeof s.cssVar == "object" &&
                  ((h = s.cssVar) === null || h === void 0 ? void 0 : h.key)) ||
                p,
            }
          );
      return Object.assign(Object.assign(Object.assign({}, f), s), {
        token: Object.assign(Object.assign({}, f.token), s.token),
        components: m,
        cssVar: y,
      });
    },
    [s, f],
    (v, h) =>
      v.some((m, p) => {
        const y = h[p];
        return !b3(m, y, !0);
      })
  );
}
var b6 = ["children"],
  P1 = x.createContext({});
function x6(n) {
  var r = n.children,
    o = $a(n, b6);
  return x.createElement(P1.Provider, { value: o }, r);
}
var S6 = (function (n) {
  Ri(o, n);
  var r = Ai(o);
  function o() {
    return Xn(this, o), r.apply(this, arguments);
  }
  return (
    Yn(o, [
      {
        key: "render",
        value: function () {
          return this.props.children;
        },
      },
    ]),
    o
  );
})(x.Component);
function C6(n) {
  var r = x.useReducer(function (v) {
      return v + 1;
    }, 0),
    o = Re(r, 2),
    l = o[1],
    s = x.useRef(n),
    f = yi(function () {
      return s.current;
    }),
    d = yi(function (v) {
      (s.current = typeof v == "function" ? v(s.current) : v), l();
    });
  return [f, d];
}
var yr = "none",
  Is = "appear",
  Qs = "enter",
  Zs = "leave",
  Qg = "none",
  na = "prepare",
  Vl = "start",
  kl = "active",
  Yh = "end",
  q1 = "prepared";
function Zg(n, r) {
  var o = {};
  return (
    (o[n.toLowerCase()] = r.toLowerCase()),
    (o["Webkit".concat(n)] = "webkit".concat(r)),
    (o["Moz".concat(n)] = "moz".concat(r)),
    (o["ms".concat(n)] = "MS".concat(r)),
    (o["O".concat(n)] = "o".concat(r.toLowerCase())),
    o
  );
}
function E6(n, r) {
  var o = {
    animationend: Zg("Animation", "AnimationEnd"),
    transitionend: Zg("Transition", "TransitionEnd"),
  };
  return (
    n &&
      ("AnimationEvent" in r || delete o.animationend.animation,
      "TransitionEvent" in r || delete o.transitionend.transition),
    o
  );
}
var T6 = E6(ka(), typeof window < "u" ? window : {}),
  V1 = {};
if (ka()) {
  var _6 = document.createElement("div");
  V1 = _6.style;
}
var Ks = {};
function k1(n) {
  if (Ks[n]) return Ks[n];
  var r = T6[n];
  if (r)
    for (var o = Object.keys(r), l = o.length, s = 0; s < l; s += 1) {
      var f = o[s];
      if (Object.prototype.hasOwnProperty.call(r, f) && f in V1)
        return (Ks[n] = r[f]), Ks[n];
    }
  return "";
}
var G1 = k1("animationend"),
  X1 = k1("transitionend"),
  Y1 = !!(G1 && X1),
  Kg = G1 || "animationend",
  Jg = X1 || "transitionend";
function Wg(n, r) {
  if (!n) return null;
  if (Xe(n) === "object") {
    var o = r.replace(/-\w/g, function (l) {
      return l[1].toUpperCase();
    });
    return n[o];
  }
  return "".concat(n, "-").concat(r);
}
const O6 = function (n) {
  var r = x.useRef();
  function o(s) {
    s && (s.removeEventListener(Jg, n), s.removeEventListener(Kg, n));
  }
  function l(s) {
    r.current && r.current !== s && o(r.current),
      s &&
        s !== r.current &&
        (s.addEventListener(Jg, n), s.addEventListener(Kg, n), (r.current = s));
  }
  return (
    x.useEffect(function () {
      return function () {
        o(r.current);
      };
    }, []),
    [l, o]
  );
};
var F1 = ka() ? x.useLayoutEffect : x.useEffect;
const w6 = function () {
  var n = x.useRef(null);
  function r() {
    el.cancel(n.current);
  }
  function o(l) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    r();
    var f = el(function () {
      s <= 1
        ? l({
            isCanceled: function () {
              return f !== n.current;
            },
          })
        : o(l, s - 1);
    });
    n.current = f;
  }
  return (
    x.useEffect(function () {
      return function () {
        r();
      };
    }, []),
    [o, r]
  );
};
var j6 = [na, Vl, kl, Yh],
  R6 = [na, q1],
  I1 = !1,
  A6 = !0;
function Q1(n) {
  return n === kl || n === Yh;
}
const N6 = function (n, r, o) {
  var l = dh(Qg),
    s = Re(l, 2),
    f = s[0],
    d = s[1],
    v = w6(),
    h = Re(v, 2),
    m = h[0],
    p = h[1];
  function y() {
    d(na, !0);
  }
  var b = r ? R6 : j6;
  return (
    F1(
      function () {
        if (f !== Qg && f !== Yh) {
          var T = b.indexOf(f),
            w = b[T + 1],
            O = o(f);
          O === I1
            ? d(w, !0)
            : w &&
              m(function (E) {
                function H() {
                  E.isCanceled() || d(w, !0);
                }
                O === !0 ? H() : Promise.resolve(O).then(H);
              });
        }
      },
      [n, f]
    ),
    x.useEffect(function () {
      return function () {
        p();
      };
    }, []),
    [y, f]
  );
};
function M6(n, r, o, l) {
  var s = l.motionEnter,
    f = s === void 0 ? !0 : s,
    d = l.motionAppear,
    v = d === void 0 ? !0 : d,
    h = l.motionLeave,
    m = h === void 0 ? !0 : h,
    p = l.motionDeadline,
    y = l.motionLeaveImmediately,
    b = l.onAppearPrepare,
    T = l.onEnterPrepare,
    w = l.onLeavePrepare,
    O = l.onAppearStart,
    E = l.onEnterStart,
    H = l.onLeaveStart,
    j = l.onAppearActive,
    D = l.onEnterActive,
    U = l.onLeaveActive,
    R = l.onAppearEnd,
    F = l.onEnterEnd,
    _ = l.onLeaveEnd,
    q = l.onVisibleChanged,
    K = dh(),
    B = Re(K, 2),
    $ = B[0],
    k = B[1],
    ee = C6(yr),
    te = Re(ee, 2),
    se = te[0],
    z = te[1],
    W = dh(null),
    J = Re(W, 2),
    ve = J[0],
    A = J[1],
    Z = se(),
    le = x.useRef(!1),
    ie = x.useRef(null);
  function ue() {
    return o();
  }
  var ce = x.useRef(!1);
  function me() {
    z(yr), A(null, !0);
  }
  var Le = yi(function (Ke) {
      var ht = se();
      if (ht !== yr) {
        var Tt = ue();
        if (!(Ke && !Ke.deadline && Ke.target !== Tt)) {
          var xt = ce.current,
            pt;
          ht === Is && xt
            ? (pt = R == null ? void 0 : R(Tt, Ke))
            : ht === Qs && xt
            ? (pt = F == null ? void 0 : F(Tt, Ke))
            : ht === Zs && xt && (pt = _ == null ? void 0 : _(Tt, Ke)),
            xt && pt !== !1 && me();
        }
      }
    }),
    De = O6(Le),
    ut = Re(De, 1),
    st = ut[0],
    Ft = function (ht) {
      switch (ht) {
        case Is:
          return Ee(Ee(Ee({}, na, b), Vl, O), kl, j);
        case Qs:
          return Ee(Ee(Ee({}, na, T), Vl, E), kl, D);
        case Zs:
          return Ee(Ee(Ee({}, na, w), Vl, H), kl, U);
        default:
          return {};
      }
    },
    He = x.useMemo(
      function () {
        return Ft(Z);
      },
      [Z]
    ),
    Ie = N6(Z, !n, function (Ke) {
      if (Ke === na) {
        var ht = He[na];
        return ht ? ht(ue()) : I1;
      }
      if (ft in He) {
        var Tt;
        A(
          ((Tt = He[ft]) === null || Tt === void 0
            ? void 0
            : Tt.call(He, ue(), null)) || null
        );
      }
      return (
        ft === kl &&
          Z !== yr &&
          (st(ue()),
          p > 0 &&
            (clearTimeout(ie.current),
            (ie.current = setTimeout(function () {
              Le({ deadline: !0 });
            }, p)))),
        ft === q1 && me(),
        A6
      );
    }),
    Mt = Re(Ie, 2),
    un = Mt[0],
    ft = Mt[1],
    dt = Q1(ft);
  ce.current = dt;
  var nn = x.useRef(null);
  F1(
    function () {
      if (!(le.current && nn.current === r)) {
        k(r);
        var Ke = le.current;
        le.current = !0;
        var ht;
        !Ke && r && v && (ht = Is),
          Ke && r && f && (ht = Qs),
          ((Ke && !r && m) || (!Ke && y && !r && m)) && (ht = Zs);
        var Tt = Ft(ht);
        ht && (n || Tt[na]) ? (z(ht), un()) : z(yr), (nn.current = r);
      }
    },
    [r]
  ),
    x.useEffect(
      function () {
        ((Z === Is && !v) || (Z === Qs && !f) || (Z === Zs && !m)) && z(yr);
      },
      [v, f, m]
    ),
    x.useEffect(function () {
      return function () {
        (le.current = !1), clearTimeout(ie.current);
      };
    }, []);
  var It = x.useRef(!1);
  x.useEffect(
    function () {
      $ && (It.current = !0),
        $ !== void 0 &&
          Z === yr &&
          ((It.current || $) && (q == null || q($)), (It.current = !0));
    },
    [$, Z]
  );
  var qt = ve;
  return (
    He[na] && ft === Vl && (qt = be({ transition: "none" }, qt)),
    [Z, ft, qt, $ ?? r]
  );
}
function D6(n) {
  var r = n;
  Xe(n) === "object" && (r = n.transitionSupport);
  function o(s, f) {
    return !!(s.motionName && r && f !== !1);
  }
  var l = x.forwardRef(function (s, f) {
    var d = s.visible,
      v = d === void 0 ? !0 : d,
      h = s.removeOnLeave,
      m = h === void 0 ? !0 : h,
      p = s.forceRender,
      y = s.children,
      b = s.motionName,
      T = s.leavedClassName,
      w = s.eventProps,
      O = x.useContext(P1),
      E = O.motion,
      H = o(s, E),
      j = x.useRef(),
      D = x.useRef();
    function U() {
      try {
        return j.current instanceof HTMLElement ? j.current : l3(D.current);
      } catch {
        return null;
      }
    }
    var R = M6(H, v, U, s),
      F = Re(R, 4),
      _ = F[0],
      q = F[1],
      K = F[2],
      B = F[3],
      $ = x.useRef(B);
    B && ($.current = !0);
    var k = x.useCallback(
        function (J) {
          (j.current = J), Iy(f, J);
        },
        [f]
      ),
      ee,
      te = be(be({}, w), {}, { visible: v });
    if (!y) ee = null;
    else if (_ === yr)
      B
        ? (ee = y(be({}, te), k))
        : !m && $.current && T
        ? (ee = y(be(be({}, te), {}, { className: T }), k))
        : p || (!m && !T)
        ? (ee = y(be(be({}, te), {}, { style: { display: "none" } }), k))
        : (ee = null);
    else {
      var se;
      q === na
        ? (se = "prepare")
        : Q1(q)
        ? (se = "active")
        : q === Vl && (se = "start");
      var z = Wg(b, "".concat(_, "-").concat(se));
      ee = y(
        be(
          be({}, te),
          {},
          {
            className: Nt(
              Wg(b, _),
              Ee(Ee({}, z, z && se), b, typeof b == "string")
            ),
            style: K,
          }
        ),
        k
      );
    }
    if (x.isValidElement(ee) && Qy(ee)) {
      var W = Ky(ee);
      W || (ee = x.cloneElement(ee, { ref: k }));
    }
    return x.createElement(S6, { ref: D }, ee);
  });
  return (l.displayName = "CSSMotion"), l;
}
const Fh = D6(Y1);
var mh = "add",
  vh = "keep",
  ph = "remove",
  Sd = "removed";
function z6(n) {
  var r;
  return (
    n && Xe(n) === "object" && "key" in n ? (r = n) : (r = { key: n }),
    be(be({}, r), {}, { key: String(r.key) })
  );
}
function gh() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return n.map(z6);
}
function L6() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
    o = [],
    l = 0,
    s = r.length,
    f = gh(n),
    d = gh(r);
  f.forEach(function (m) {
    for (var p = !1, y = l; y < s; y += 1) {
      var b = d[y];
      if (b.key === m.key) {
        l < y &&
          ((o = o.concat(
            d.slice(l, y).map(function (T) {
              return be(be({}, T), {}, { status: mh });
            })
          )),
          (l = y)),
          o.push(be(be({}, b), {}, { status: vh })),
          (l += 1),
          (p = !0);
        break;
      }
    }
    p || o.push(be(be({}, m), {}, { status: ph }));
  }),
    l < s &&
      (o = o.concat(
        d.slice(l).map(function (m) {
          return be(be({}, m), {}, { status: mh });
        })
      ));
  var v = {};
  o.forEach(function (m) {
    var p = m.key;
    v[p] = (v[p] || 0) + 1;
  });
  var h = Object.keys(v).filter(function (m) {
    return v[m] > 1;
  });
  return (
    h.forEach(function (m) {
      (o = o.filter(function (p) {
        var y = p.key,
          b = p.status;
        return y !== m || b !== ph;
      })),
        o.forEach(function (p) {
          p.key === m && (p.status = vh);
        });
    }),
    o
  );
}
var H6 = ["component", "children", "onVisibleChanged", "onAllRemoved"],
  B6 = ["status"],
  U6 = [
    "eventProps",
    "visible",
    "children",
    "motionName",
    "motionAppear",
    "motionEnter",
    "motionLeave",
    "motionLeaveImmediately",
    "motionDeadline",
    "removeOnLeave",
    "leavedClassName",
    "onAppearPrepare",
    "onAppearStart",
    "onAppearActive",
    "onAppearEnd",
    "onEnterStart",
    "onEnterActive",
    "onEnterEnd",
    "onLeaveStart",
    "onLeaveActive",
    "onLeaveEnd",
  ];
function $6(n) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fh,
    o = (function (l) {
      Ri(f, l);
      var s = Ai(f);
      function f() {
        var d;
        Xn(this, f);
        for (var v = arguments.length, h = new Array(v), m = 0; m < v; m++)
          h[m] = arguments[m];
        return (
          (d = s.call.apply(s, [this].concat(h))),
          Ee(Qr(d), "state", { keyEntities: [] }),
          Ee(Qr(d), "removeKey", function (p) {
            d.setState(
              function (y) {
                var b = y.keyEntities.map(function (T) {
                  return T.key !== p ? T : be(be({}, T), {}, { status: Sd });
                });
                return { keyEntities: b };
              },
              function () {
                var y = d.state.keyEntities,
                  b = y.filter(function (T) {
                    var w = T.status;
                    return w !== Sd;
                  }).length;
                b === 0 && d.props.onAllRemoved && d.props.onAllRemoved();
              }
            );
          }),
          d
        );
      }
      return (
        Yn(
          f,
          [
            {
              key: "render",
              value: function () {
                var v = this,
                  h = this.state.keyEntities,
                  m = this.props,
                  p = m.component,
                  y = m.children,
                  b = m.onVisibleChanged;
                m.onAllRemoved;
                var T = $a(m, H6),
                  w = p || x.Fragment,
                  O = {};
                return (
                  U6.forEach(function (E) {
                    (O[E] = T[E]), delete T[E];
                  }),
                  delete T.keys,
                  x.createElement(
                    w,
                    T,
                    h.map(function (E, H) {
                      var j = E.status,
                        D = $a(E, B6),
                        U = j === mh || j === vh;
                      return x.createElement(
                        r,
                        cn({}, O, {
                          key: D.key,
                          visible: U,
                          eventProps: D,
                          onVisibleChanged: function (F) {
                            b == null || b(F, { key: D.key }),
                              F || v.removeKey(D.key);
                          },
                        }),
                        function (R, F) {
                          return y(be(be({}, R), {}, { index: H }), F);
                        }
                      );
                    })
                  )
                );
              },
            },
          ],
          [
            {
              key: "getDerivedStateFromProps",
              value: function (v, h) {
                var m = v.keys,
                  p = h.keyEntities,
                  y = gh(m),
                  b = L6(p, y);
                return {
                  keyEntities: b.filter(function (T) {
                    var w = p.find(function (O) {
                      var E = O.key;
                      return T.key === E;
                    });
                    return !(w && w.status === Sd && T.status === ph);
                  }),
                };
              },
            },
          ]
        ),
        f
      );
    })(x.Component);
  return Ee(o, "defaultProps", { component: "div" }), o;
}
const P6 = $6(Y1);
function q6(n) {
  const { children: r } = n,
    [, o] = rl(),
    { motion: l } = o,
    s = x.useRef(!1);
  return (
    (s.current = s.current || l === !1),
    s.current ? x.createElement(x6, { motion: l }, r) : r
  );
}
const V6 = () => null;
var k6 = function (n, r) {
  var o = {};
  for (var l in n)
    Object.prototype.hasOwnProperty.call(n, l) &&
      r.indexOf(l) < 0 &&
      (o[l] = n[l]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, l = Object.getOwnPropertySymbols(n); s < l.length; s++)
      r.indexOf(l[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(n, l[s]) &&
        (o[l[s]] = n[l[s]]);
  return o;
};
const G6 = [
  "getTargetContainer",
  "getPopupContainer",
  "renderEmpty",
  "input",
  "pagination",
  "form",
  "select",
  "button",
];
let bc, Z1, K1, J1;
function oc() {
  return bc || gc;
}
function X6() {
  return Z1 || Lc;
}
function Y6(n) {
  return Object.keys(n).some((r) => r.endsWith("Color"));
}
const F6 = (n) => {
    const { prefixCls: r, iconPrefixCls: o, theme: l, holderRender: s } = n;
    r !== void 0 && (bc = r),
      o !== void 0 && (Z1 = o),
      "holderRender" in n && (J1 = s),
      l && (Y6(l) ? q4(oc(), l) : (K1 = l));
  },
  I6 = () => ({
    getPrefixCls: (n, r) => r || (n ? `${oc()}-${n}` : oc()),
    getIconPrefixCls: X6,
    getRootPrefixCls: () => bc || oc(),
    getTheme: () => K1,
    holderRender: J1,
  }),
  Q6 = (n) => {
    const {
        children: r,
        csp: o,
        autoInsertSpaceInButton: l,
        alert: s,
        anchor: f,
        form: d,
        locale: v,
        componentSize: h,
        direction: m,
        space: p,
        splitter: y,
        virtual: b,
        dropdownMatchSelectWidth: T,
        popupMatchSelectWidth: w,
        popupOverflow: O,
        legacyLocale: E,
        parentContext: H,
        iconPrefixCls: j,
        theme: D,
        componentDisabled: U,
        segmented: R,
        statistic: F,
        spin: _,
        calendar: q,
        carousel: K,
        cascader: B,
        collapse: $,
        typography: k,
        checkbox: ee,
        descriptions: te,
        divider: se,
        drawer: z,
        skeleton: W,
        steps: J,
        image: ve,
        layout: A,
        list: Z,
        mentions: le,
        modal: ie,
        progress: ue,
        result: ce,
        slider: me,
        breadcrumb: Le,
        menu: De,
        pagination: ut,
        input: st,
        textArea: Ft,
        empty: He,
        badge: Ie,
        radio: Mt,
        rate: un,
        switch: ft,
        transfer: dt,
        avatar: nn,
        message: It,
        tag: qt,
        table: Ke,
        card: ht,
        tabs: Tt,
        timeline: xt,
        timePicker: pt,
        upload: an,
        notification: jt,
        tree: St,
        colorPicker: rt,
        datePicker: pa,
        rangePicker: Fn,
        flex: Xa,
        wave: Vt,
        dropdown: Rn,
        warning: Wt,
        tour: mt,
        tooltip: Bt,
        popover: la,
        popconfirm: ga,
        floatButtonGroup: Tr,
        variant: ya,
        inputNumber: In,
        treeSelect: ao,
      } = n,
      Ya = x.useCallback(
        (pe, xe) => {
          const { prefixCls: he } = n;
          if (xe) return xe;
          const ye = he || H.getPrefixCls("");
          return pe ? `${ye}-${pe}` : ye;
        },
        [H.getPrefixCls, n.prefixCls]
      ),
      ba = j || H.iconPrefixCls || Lc,
      Qn = o || H.csp;
    m6(ba, Qn);
    const An = y6(D, H.theme, { prefixCls: Ya("") }),
      Zn = {
        csp: Qn,
        autoInsertSpaceInButton: l,
        alert: s,
        anchor: f,
        locale: v || E,
        direction: m,
        space: p,
        splitter: y,
        virtual: b,
        popupMatchSelectWidth: w ?? T,
        popupOverflow: O,
        getPrefixCls: Ya,
        iconPrefixCls: ba,
        theme: An,
        segmented: R,
        statistic: F,
        spin: _,
        calendar: q,
        carousel: K,
        cascader: B,
        collapse: $,
        typography: k,
        checkbox: ee,
        descriptions: te,
        divider: se,
        drawer: z,
        skeleton: W,
        steps: J,
        image: ve,
        input: st,
        textArea: Ft,
        layout: A,
        list: Z,
        mentions: le,
        modal: ie,
        progress: ue,
        result: ce,
        slider: me,
        breadcrumb: Le,
        menu: De,
        pagination: ut,
        empty: He,
        badge: Ie,
        radio: Mt,
        rate: un,
        switch: ft,
        transfer: dt,
        avatar: nn,
        message: It,
        tag: qt,
        table: Ke,
        card: ht,
        tabs: Tt,
        timeline: xt,
        timePicker: pt,
        upload: an,
        notification: jt,
        tree: St,
        colorPicker: rt,
        datePicker: pa,
        rangePicker: Fn,
        flex: Xa,
        wave: Vt,
        dropdown: Rn,
        warning: Wt,
        tour: mt,
        tooltip: Bt,
        popover: la,
        popconfirm: ga,
        floatButtonGroup: Tr,
        variant: ya,
        inputNumber: In,
        treeSelect: ao,
      },
      oa = Object.assign({}, H);
    Object.keys(Zn).forEach((pe) => {
      Zn[pe] !== void 0 && (oa[pe] = Zn[pe]);
    }),
      G6.forEach((pe) => {
        const xe = n[pe];
        xe && (oa[pe] = xe);
      }),
      typeof l < "u" &&
        (oa.button = Object.assign({ autoInsertSpace: l }, oa.button));
    const Qt = Nh(
        () => oa,
        oa,
        (pe, xe) => {
          const he = Object.keys(pe),
            ye = Object.keys(xe);
          return he.length !== ye.length || he.some((ge) => pe[ge] !== xe[ge]);
        }
      ),
      { layer: M } = x.useContext(Ni),
      P = x.useMemo(
        () => ({ prefixCls: ba, csp: Qn, layer: M ? "antd" : void 0 }),
        [ba, Qn, M]
      );
    let G = x.createElement(
      x.Fragment,
      null,
      x.createElement(V6, { dropdownMatchSelectWidth: T }),
      r
    );
    const oe = x.useMemo(() => {
      var pe, xe, he, ye;
      return S4(
        ((pe = Dc.Form) === null || pe === void 0
          ? void 0
          : pe.defaultValidateMessages) || {},
        ((he =
          (xe = Qt.locale) === null || xe === void 0 ? void 0 : xe.Form) ===
          null || he === void 0
          ? void 0
          : he.defaultValidateMessages) || {},
        ((ye = Qt.form) === null || ye === void 0
          ? void 0
          : ye.validateMessages) || {},
        (d == null ? void 0 : d.validateMessages) || {}
      );
    }, [Qt, d == null ? void 0 : d.validateMessages]);
    Object.keys(oe).length > 0 &&
      (G = x.createElement(E4.Provider, { value: oe }, G)),
      v && (G = x.createElement(O4, { locale: v, _ANT_MARK__: _4 }, G)),
      (G = x.createElement(Ph.Provider, { value: P }, G)),
      h && (G = x.createElement(k4, { size: h }, G)),
      (G = x.createElement(q6, null, G));
    const de = x.useMemo(() => {
      const pe = An || {},
        { algorithm: xe, token: he, components: ye, cssVar: ge } = pe,
        Se = k6(pe, ["algorithm", "token", "components", "cssVar"]),
        we = xe && (!Array.isArray(xe) || xe.length > 0) ? mc(xe) : Vh,
        Ne = {};
      Object.entries(ye || {}).forEach((Qe) => {
        let [Ve, Ye] = Qe;
        const Ct = Object.assign({}, Ye);
        "algorithm" in Ct &&
          (Ct.algorithm === !0
            ? (Ct.theme = we)
            : (Array.isArray(Ct.algorithm) ||
                typeof Ct.algorithm == "function") &&
              (Ct.theme = mc(Ct.algorithm)),
          delete Ct.algorithm),
          (Ne[Ve] = Ct);
      });
      const Be = Object.assign(Object.assign({}, Kl), he);
      return Object.assign(Object.assign({}, Se), {
        theme: we,
        token: Be,
        components: Ne,
        override: Object.assign({ override: Be }, Ne),
        cssVar: ge,
      });
    }, [An]);
    return (
      D && (G = x.createElement(kh.Provider, { value: de }, G)),
      Qt.warning &&
        (G = x.createElement(C4.Provider, { value: Qt.warning }, G)),
      U !== void 0 && (G = x.createElement(V4, { disabled: U }, G)),
      x.createElement(yn.Provider, { value: Qt }, G)
    );
  },
  to = (n) => {
    const r = x.useContext(yn),
      o = x.useContext(O1);
    return x.createElement(
      Q6,
      Object.assign({ parentContext: r, legacyLocale: o }, n)
    );
  };
to.ConfigContext = yn;
to.SizeContext = Jl;
to.config = F6;
to.useConfig = G4;
Object.defineProperty(to, "SizeContext", { get: () => Jl });
var Z6 = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z",
        },
      },
    ],
  },
  name: "check-circle",
  theme: "filled",
};
function W1(n) {
  var r;
  return n == null || (r = n.getRootNode) === null || r === void 0
    ? void 0
    : r.call(n);
}
function K6(n) {
  return W1(n) instanceof ShadowRoot;
}
function J6(n) {
  return K6(n) ? W1(n) : null;
}
function W6(n) {
  return n.replace(/-(.)/g, function (r, o) {
    return o.toUpperCase();
  });
}
function eT(n, r) {
  ji(n, "[@ant-design/icons] ".concat(r));
}
function ey(n) {
  return (
    Xe(n) === "object" &&
    typeof n.name == "string" &&
    typeof n.theme == "string" &&
    (Xe(n.icon) === "object" || typeof n.icon == "function")
  );
}
function ty() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(n).reduce(function (r, o) {
    var l = n[o];
    switch (o) {
      case "class":
        (r.className = l), delete r.class;
        break;
      default:
        delete r[o], (r[W6(o)] = l);
    }
    return r;
  }, {});
}
function yh(n, r, o) {
  return o
    ? fe.createElement(
        n.tag,
        be(be({ key: r }, ty(n.attrs)), o),
        (n.children || []).map(function (l, s) {
          return yh(l, "".concat(r, "-").concat(n.tag, "-").concat(s));
        })
      )
    : fe.createElement(
        n.tag,
        be({ key: r }, ty(n.attrs)),
        (n.children || []).map(function (l, s) {
          return yh(l, "".concat(r, "-").concat(n.tag, "-").concat(s));
        })
      );
}
function eb(n) {
  return nl(n)[0];
}
function tb(n) {
  return n ? (Array.isArray(n) ? n : [n]) : [];
}
var tT = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,
  nT = function (r) {
    var o = x.useContext(Ph),
      l = o.csp,
      s = o.prefixCls,
      f = o.layer,
      d = tT;
    s && (d = d.replace(/anticon/g, s)),
      f &&
        (d = "@layer "
          .concat(
            f,
            ` {
`
          )
          .concat(
            d,
            `
}`
          )),
      x.useEffect(function () {
        var v = r.current,
          h = J6(v);
        Zr(d, "@ant-design-icons", { prepend: !f, csp: l, attachTo: h });
      }, []);
  },
  aT = [
    "icon",
    "className",
    "onClick",
    "style",
    "primaryColor",
    "secondaryColor",
  ],
  ui = { primaryColor: "#333", secondaryColor: "#E6E6E6", calculated: !1 };
function rT(n) {
  var r = n.primaryColor,
    o = n.secondaryColor;
  (ui.primaryColor = r),
    (ui.secondaryColor = o || eb(r)),
    (ui.calculated = !!o);
}
function lT() {
  return be({}, ui);
}
var no = function (r) {
  var o = r.icon,
    l = r.className,
    s = r.onClick,
    f = r.style,
    d = r.primaryColor,
    v = r.secondaryColor,
    h = $a(r, aT),
    m = x.useRef(),
    p = ui;
  if (
    (d && (p = { primaryColor: d, secondaryColor: v || eb(d) }),
    nT(m),
    eT(ey(o), "icon should be icon definiton, but got ".concat(o)),
    !ey(o))
  )
    return null;
  var y = o;
  return (
    y &&
      typeof y.icon == "function" &&
      (y = be(
        be({}, y),
        {},
        { icon: y.icon(p.primaryColor, p.secondaryColor) }
      )),
    yh(
      y.icon,
      "svg-".concat(y.name),
      be(
        be(
          {
            className: l,
            onClick: s,
            style: f,
            "data-icon": y.name,
            width: "1em",
            height: "1em",
            fill: "currentColor",
            "aria-hidden": "true",
          },
          h
        ),
        {},
        { ref: m }
      )
    )
  );
};
no.displayName = "IconReact";
no.getTwoToneColors = lT;
no.setTwoToneColors = rT;
function nb(n) {
  var r = tb(n),
    o = Re(r, 2),
    l = o[0],
    s = o[1];
  return no.setTwoToneColors({ primaryColor: l, secondaryColor: s });
}
function oT() {
  var n = no.getTwoToneColors();
  return n.calculated ? [n.primaryColor, n.secondaryColor] : n.primaryColor;
}
var iT = [
  "className",
  "icon",
  "spin",
  "rotate",
  "tabIndex",
  "onClick",
  "twoToneColor",
];
nb(pc.primary);
var Ga = x.forwardRef(function (n, r) {
  var o = n.className,
    l = n.icon,
    s = n.spin,
    f = n.rotate,
    d = n.tabIndex,
    v = n.onClick,
    h = n.twoToneColor,
    m = $a(n, iT),
    p = x.useContext(Ph),
    y = p.prefixCls,
    b = y === void 0 ? "anticon" : y,
    T = p.rootClassName,
    w = Nt(
      T,
      b,
      Ee(
        Ee({}, "".concat(b, "-").concat(l.name), !!l.name),
        "".concat(b, "-spin"),
        !!s || l.name === "loading"
      ),
      o
    ),
    O = d;
  O === void 0 && v && (O = -1);
  var E = f
      ? {
          msTransform: "rotate(".concat(f, "deg)"),
          transform: "rotate(".concat(f, "deg)"),
        }
      : void 0,
    H = tb(h),
    j = Re(H, 2),
    D = j[0],
    U = j[1];
  return x.createElement(
    "span",
    cn({ role: "img", "aria-label": l.name }, m, {
      ref: r,
      tabIndex: O,
      onClick: v,
      className: w,
    }),
    x.createElement(no, {
      icon: l,
      primaryColor: D,
      secondaryColor: U,
      style: E,
    })
  );
});
Ga.displayName = "AntdIcon";
Ga.getTwoToneColor = oT;
Ga.setTwoToneColor = nb;
var sT = function (r, o) {
    return x.createElement(Ga, cn({}, r, { ref: o, icon: Z6 }));
  },
  cT = x.forwardRef(sT),
  uT = {
    icon: {
      tag: "svg",
      attrs: {
        "fill-rule": "evenodd",
        viewBox: "64 64 896 896",
        focusable: "false",
      },
      children: [
        {
          tag: "path",
          attrs: {
            d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z",
          },
        },
      ],
    },
    name: "close-circle",
    theme: "filled",
  },
  fT = function (r, o) {
    return x.createElement(Ga, cn({}, r, { ref: o, icon: uT }));
  },
  dT = x.forwardRef(fT),
  hT = {
    icon: {
      tag: "svg",
      attrs: {
        "fill-rule": "evenodd",
        viewBox: "64 64 896 896",
        focusable: "false",
      },
      children: [
        {
          tag: "path",
          attrs: {
            d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z",
          },
        },
      ],
    },
    name: "close",
    theme: "outlined",
  },
  mT = function (r, o) {
    return x.createElement(Ga, cn({}, r, { ref: o, icon: hT }));
  },
  vT = x.forwardRef(mT),
  pT = {
    icon: {
      tag: "svg",
      attrs: { viewBox: "64 64 896 896", focusable: "false" },
      children: [
        {
          tag: "path",
          attrs: {
            d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z",
          },
        },
      ],
    },
    name: "exclamation-circle",
    theme: "filled",
  },
  gT = function (r, o) {
    return x.createElement(Ga, cn({}, r, { ref: o, icon: pT }));
  },
  yT = x.forwardRef(gT),
  bT = {
    icon: {
      tag: "svg",
      attrs: { viewBox: "64 64 896 896", focusable: "false" },
      children: [
        {
          tag: "path",
          attrs: {
            d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z",
          },
        },
      ],
    },
    name: "info-circle",
    theme: "filled",
  },
  xT = function (r, o) {
    return x.createElement(Ga, cn({}, r, { ref: o, icon: bT }));
  },
  ST = x.forwardRef(xT),
  CT = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,
  ET = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,
  TT = ""
    .concat(CT, " ")
    .concat(ET)
    .split(/[\s\n]+/),
  _T = "aria-",
  OT = "data-";
function ny(n, r) {
  return n.indexOf(r) === 0;
}
function wT(n) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    o;
  r === !1
    ? (o = { aria: !0, data: !0, attr: !0 })
    : r === !0
    ? (o = { aria: !0 })
    : (o = be({}, r));
  var l = {};
  return (
    Object.keys(n).forEach(function (s) {
      ((o.aria && (s === "role" || ny(s, _T))) ||
        (o.data && ny(s, OT)) ||
        (o.attr && TT.includes(s))) &&
        (l[s] = n[s]);
    }),
    l
  );
}
function jT(n) {
  return n && fe.isValidElement(n) && n.type === fe.Fragment;
}
const RT = (n, r, o) =>
  fe.isValidElement(n)
    ? fe.cloneElement(n, typeof o == "function" ? o(n.props || {}) : o)
    : r;
function ab(n, r) {
  return RT(n, n, r);
}
const rb = (n) => {
  const [, , , , r] = rl();
  return r ? `${n}-css-var` : "";
};
var AT = { ENTER: 13 },
  lb = x.forwardRef(function (n, r) {
    var o = n.prefixCls,
      l = n.style,
      s = n.className,
      f = n.duration,
      d = f === void 0 ? 4.5 : f,
      v = n.showProgress,
      h = n.pauseOnHover,
      m = h === void 0 ? !0 : h,
      p = n.eventKey,
      y = n.content,
      b = n.closable,
      T = n.closeIcon,
      w = T === void 0 ? "x" : T,
      O = n.props,
      E = n.onClick,
      H = n.onNoticeClose,
      j = n.times,
      D = n.hovering,
      U = x.useState(!1),
      R = Re(U, 2),
      F = R[0],
      _ = R[1],
      q = x.useState(0),
      K = Re(q, 2),
      B = K[0],
      $ = K[1],
      k = x.useState(0),
      ee = Re(k, 2),
      te = ee[0],
      se = ee[1],
      z = D || F,
      W = d > 0 && v,
      J = function () {
        H(p);
      },
      ve = function (ce) {
        (ce.key === "Enter" ||
          ce.code === "Enter" ||
          ce.keyCode === AT.ENTER) &&
          J();
      };
    x.useEffect(
      function () {
        if (!z && d > 0) {
          var ue = Date.now() - te,
            ce = setTimeout(function () {
              J();
            }, d * 1e3 - te);
          return function () {
            m && clearTimeout(ce), se(Date.now() - ue);
          };
        }
      },
      [d, z, j]
    ),
      x.useEffect(
        function () {
          if (!z && W && (m || te === 0)) {
            var ue = performance.now(),
              ce,
              me = function Le() {
                cancelAnimationFrame(ce),
                  (ce = requestAnimationFrame(function (De) {
                    var ut = De + te - ue,
                      st = Math.min(ut / (d * 1e3), 1);
                    $(st * 100), st < 1 && Le();
                  }));
              };
            return (
              me(),
              function () {
                m && cancelAnimationFrame(ce);
              }
            );
          }
        },
        [d, te, z, W, j]
      );
    var A = x.useMemo(
        function () {
          return Xe(b) === "object" && b !== null
            ? b
            : b
            ? { closeIcon: w }
            : {};
        },
        [b, w]
      ),
      Z = wT(A, !0),
      le = 100 - (!B || B < 0 ? 0 : B > 100 ? 100 : B),
      ie = "".concat(o, "-notice");
    return x.createElement(
      "div",
      cn({}, O, {
        ref: r,
        className: Nt(ie, s, Ee({}, "".concat(ie, "-closable"), b)),
        style: l,
        onMouseEnter: function (ce) {
          var me;
          _(!0),
            O == null ||
              (me = O.onMouseEnter) === null ||
              me === void 0 ||
              me.call(O, ce);
        },
        onMouseLeave: function (ce) {
          var me;
          _(!1),
            O == null ||
              (me = O.onMouseLeave) === null ||
              me === void 0 ||
              me.call(O, ce);
        },
        onClick: E,
      }),
      x.createElement("div", { className: "".concat(ie, "-content") }, y),
      b &&
        x.createElement(
          "a",
          cn(
            {
              tabIndex: 0,
              className: "".concat(ie, "-close"),
              onKeyDown: ve,
              "aria-label": "Close",
            },
            Z,
            {
              onClick: function (ce) {
                ce.preventDefault(), ce.stopPropagation(), J();
              },
            }
          ),
          A.closeIcon
        ),
      W &&
        x.createElement(
          "progress",
          { className: "".concat(ie, "-progress"), max: "100", value: le },
          le + "%"
        )
    );
  }),
  ob = fe.createContext({}),
  NT = function (r) {
    var o = r.children,
      l = r.classNames;
    return fe.createElement(ob.Provider, { value: { classNames: l } }, o);
  },
  ay = 8,
  ry = 3,
  ly = 16,
  MT = function (r) {
    var o = { offset: ay, threshold: ry, gap: ly };
    if (r && Xe(r) === "object") {
      var l, s, f;
      (o.offset = (l = r.offset) !== null && l !== void 0 ? l : ay),
        (o.threshold = (s = r.threshold) !== null && s !== void 0 ? s : ry),
        (o.gap = (f = r.gap) !== null && f !== void 0 ? f : ly);
    }
    return [!!r, o];
  },
  DT = ["className", "style", "classNames", "styles"],
  zT = function (r) {
    var o = r.configList,
      l = r.placement,
      s = r.prefixCls,
      f = r.className,
      d = r.style,
      v = r.motion,
      h = r.onAllNoticeRemoved,
      m = r.onNoticeClose,
      p = r.stack,
      y = x.useContext(ob),
      b = y.classNames,
      T = x.useRef({}),
      w = x.useState(null),
      O = Re(w, 2),
      E = O[0],
      H = O[1],
      j = x.useState([]),
      D = Re(j, 2),
      U = D[0],
      R = D[1],
      F = o.map(function (z) {
        return { config: z, key: String(z.key) };
      }),
      _ = MT(p),
      q = Re(_, 2),
      K = q[0],
      B = q[1],
      $ = B.offset,
      k = B.threshold,
      ee = B.gap,
      te = K && (U.length > 0 || F.length <= k),
      se = typeof v == "function" ? v(l) : v;
    return (
      x.useEffect(
        function () {
          K &&
            U.length > 1 &&
            R(function (z) {
              return z.filter(function (W) {
                return F.some(function (J) {
                  var ve = J.key;
                  return W === ve;
                });
              });
            });
        },
        [U, F, K]
      ),
      x.useEffect(
        function () {
          var z;
          if (
            K &&
            T.current[
              (z = F[F.length - 1]) === null || z === void 0 ? void 0 : z.key
            ]
          ) {
            var W;
            H(
              T.current[
                (W = F[F.length - 1]) === null || W === void 0 ? void 0 : W.key
              ]
            );
          }
        },
        [F, K]
      ),
      fe.createElement(
        P6,
        cn(
          {
            key: l,
            className: Nt(
              s,
              "".concat(s, "-").concat(l),
              b == null ? void 0 : b.list,
              f,
              Ee(
                Ee({}, "".concat(s, "-stack"), !!K),
                "".concat(s, "-stack-expanded"),
                te
              )
            ),
            style: d,
            keys: F,
            motionAppear: !0,
          },
          se,
          {
            onAllRemoved: function () {
              h(l);
            },
          }
        ),
        function (z, W) {
          var J = z.config,
            ve = z.className,
            A = z.style,
            Z = z.index,
            le = J,
            ie = le.key,
            ue = le.times,
            ce = String(ie),
            me = J,
            Le = me.className,
            De = me.style,
            ut = me.classNames,
            st = me.styles,
            Ft = $a(me, DT),
            He = F.findIndex(function (xt) {
              return xt.key === ce;
            }),
            Ie = {};
          if (K) {
            var Mt = F.length - 1 - (He > -1 ? He : Z - 1),
              un = l === "top" || l === "bottom" ? "-50%" : "0";
            if (Mt > 0) {
              var ft, dt, nn;
              Ie.height = te
                ? (ft = T.current[ce]) === null || ft === void 0
                  ? void 0
                  : ft.offsetHeight
                : E == null
                ? void 0
                : E.offsetHeight;
              for (var It = 0, qt = 0; qt < Mt; qt++) {
                var Ke;
                It +=
                  ((Ke = T.current[F[F.length - 1 - qt].key]) === null ||
                  Ke === void 0
                    ? void 0
                    : Ke.offsetHeight) + ee;
              }
              var ht = (te ? It : Mt * $) * (l.startsWith("top") ? 1 : -1),
                Tt =
                  !te &&
                  E !== null &&
                  E !== void 0 &&
                  E.offsetWidth &&
                  (dt = T.current[ce]) !== null &&
                  dt !== void 0 &&
                  dt.offsetWidth
                    ? ((E == null ? void 0 : E.offsetWidth) -
                        $ * 2 * (Mt < 3 ? Mt : 3)) /
                      ((nn = T.current[ce]) === null || nn === void 0
                        ? void 0
                        : nn.offsetWidth)
                    : 1;
              Ie.transform = "translate3d("
                .concat(un, ", ")
                .concat(ht, "px, 0) scaleX(")
                .concat(Tt, ")");
            } else Ie.transform = "translate3d(".concat(un, ", 0, 0)");
          }
          return fe.createElement(
            "div",
            {
              ref: W,
              className: Nt(
                "".concat(s, "-notice-wrapper"),
                ve,
                ut == null ? void 0 : ut.wrapper
              ),
              style: be(be(be({}, A), Ie), st == null ? void 0 : st.wrapper),
              onMouseEnter: function () {
                return R(function (pt) {
                  return pt.includes(ce) ? pt : [].concat(sn(pt), [ce]);
                });
              },
              onMouseLeave: function () {
                return R(function (pt) {
                  return pt.filter(function (an) {
                    return an !== ce;
                  });
                });
              },
            },
            fe.createElement(
              lb,
              cn({}, Ft, {
                ref: function (pt) {
                  He > -1 ? (T.current[ce] = pt) : delete T.current[ce];
                },
                prefixCls: s,
                classNames: ut,
                styles: st,
                className: Nt(Le, b == null ? void 0 : b.notice),
                style: De,
                times: ue,
                key: ie,
                eventKey: ie,
                onNoticeClose: m,
                hovering: K && U.length > 0,
              })
            )
          );
        }
      )
    );
  },
  LT = x.forwardRef(function (n, r) {
    var o = n.prefixCls,
      l = o === void 0 ? "rc-notification" : o,
      s = n.container,
      f = n.motion,
      d = n.maxCount,
      v = n.className,
      h = n.style,
      m = n.onAllRemoved,
      p = n.stack,
      y = n.renderNotifications,
      b = x.useState([]),
      T = Re(b, 2),
      w = T[0],
      O = T[1],
      E = function (K) {
        var B,
          $ = w.find(function (k) {
            return k.key === K;
          });
        $ == null || (B = $.onClose) === null || B === void 0 || B.call($),
          O(function (k) {
            return k.filter(function (ee) {
              return ee.key !== K;
            });
          });
      };
    x.useImperativeHandle(r, function () {
      return {
        open: function (K) {
          O(function (B) {
            var $ = sn(B),
              k = $.findIndex(function (se) {
                return se.key === K.key;
              }),
              ee = be({}, K);
            if (k >= 0) {
              var te;
              (ee.times =
                (((te = B[k]) === null || te === void 0 ? void 0 : te.times) ||
                  0) + 1),
                ($[k] = ee);
            } else (ee.times = 0), $.push(ee);
            return d > 0 && $.length > d && ($ = $.slice(-d)), $;
          });
        },
        close: function (K) {
          E(K);
        },
        destroy: function () {
          O([]);
        },
      };
    });
    var H = x.useState({}),
      j = Re(H, 2),
      D = j[0],
      U = j[1];
    x.useEffect(
      function () {
        var q = {};
        w.forEach(function (K) {
          var B = K.placement,
            $ = B === void 0 ? "topRight" : B;
          $ && ((q[$] = q[$] || []), q[$].push(K));
        }),
          Object.keys(D).forEach(function (K) {
            q[K] = q[K] || [];
          }),
          U(q);
      },
      [w]
    );
    var R = function (K) {
        U(function (B) {
          var $ = be({}, B),
            k = $[K] || [];
          return k.length || delete $[K], $;
        });
      },
      F = x.useRef(!1);
    if (
      (x.useEffect(
        function () {
          Object.keys(D).length > 0
            ? (F.current = !0)
            : F.current && (m == null || m(), (F.current = !1));
        },
        [D]
      ),
      !s)
    )
      return null;
    var _ = Object.keys(D);
    return _h.createPortal(
      x.createElement(
        x.Fragment,
        null,
        _.map(function (q) {
          var K = D[q],
            B = x.createElement(zT, {
              key: q,
              configList: K,
              placement: q,
              prefixCls: l,
              className: v == null ? void 0 : v(q),
              style: h == null ? void 0 : h(q),
              motion: f,
              onNoticeClose: E,
              onAllNoticeRemoved: R,
              stack: p,
            });
          return y ? y(B, { prefixCls: l, key: q }) : B;
        })
      ),
      s
    );
  }),
  HT = [
    "getContainer",
    "motion",
    "prefixCls",
    "maxCount",
    "className",
    "style",
    "onAllRemoved",
    "stack",
    "renderNotifications",
  ],
  BT = function () {
    return document.body;
  },
  oy = 0;
function UT() {
  for (var n = {}, r = arguments.length, o = new Array(r), l = 0; l < r; l++)
    o[l] = arguments[l];
  return (
    o.forEach(function (s) {
      s &&
        Object.keys(s).forEach(function (f) {
          var d = s[f];
          d !== void 0 && (n[f] = d);
        });
    }),
    n
  );
}
function $T() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    r = n.getContainer,
    o = r === void 0 ? BT : r,
    l = n.motion,
    s = n.prefixCls,
    f = n.maxCount,
    d = n.className,
    v = n.style,
    h = n.onAllRemoved,
    m = n.stack,
    p = n.renderNotifications,
    y = $a(n, HT),
    b = x.useState(),
    T = Re(b, 2),
    w = T[0],
    O = T[1],
    E = x.useRef(),
    H = x.createElement(LT, {
      container: w,
      ref: E,
      prefixCls: s,
      motion: l,
      maxCount: f,
      className: d,
      style: v,
      onAllRemoved: h,
      stack: m,
      renderNotifications: p,
    }),
    j = x.useState([]),
    D = Re(j, 2),
    U = D[0],
    R = D[1],
    F = yi(function (q) {
      var K = UT(y, q);
      (K.key === null || K.key === void 0) &&
        ((K.key = "rc-notification-".concat(oy)), (oy += 1)),
        R(function (B) {
          return [].concat(sn(B), [{ type: "open", config: K }]);
        });
    }),
    _ = x.useMemo(function () {
      return {
        open: F,
        close: function (K) {
          R(function (B) {
            return [].concat(sn(B), [{ type: "close", key: K }]);
          });
        },
        destroy: function () {
          R(function (K) {
            return [].concat(sn(K), [{ type: "destroy" }]);
          });
        },
      };
    }, []);
  return (
    x.useEffect(function () {
      O(o());
    }),
    x.useEffect(
      function () {
        if (E.current && U.length) {
          U.forEach(function (B) {
            switch (B.type) {
              case "open":
                E.current.open(B.config);
                break;
              case "close":
                E.current.close(B.key);
                break;
              case "destroy":
                E.current.destroy();
                break;
            }
          });
          var q, K;
          R(function (B) {
            return (
              (q !== B || !K) &&
                ((q = B),
                (K = B.filter(function ($) {
                  return !U.includes($);
                }))),
              K
            );
          });
        }
      },
      [U]
    ),
    [_, H]
  );
}
var PT = {
    icon: {
      tag: "svg",
      attrs: { viewBox: "0 0 1024 1024", focusable: "false" },
      children: [
        {
          tag: "path",
          attrs: {
            d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z",
          },
        },
      ],
    },
    name: "loading",
    theme: "outlined",
  },
  qT = function (r, o) {
    return x.createElement(Ga, cn({}, r, { ref: o, icon: PT }));
  },
  ib = x.forwardRef(qT);
const VT = 100,
  kT = 10,
  GT = VT * kT,
  XT = (n) => {
    const {
        componentCls: r,
        iconCls: o,
        boxShadow: l,
        colorText: s,
        colorSuccess: f,
        colorError: d,
        colorWarning: v,
        colorInfo: h,
        fontSizeLG: m,
        motionEaseInOutCirc: p,
        motionDurationSlow: y,
        marginXS: b,
        paddingXS: T,
        borderRadiusLG: w,
        zIndexPopup: O,
        contentPadding: E,
        contentBg: H,
      } = n,
      j = `${r}-notice`,
      D = new Dg("MessageMoveIn", {
        "0%": { padding: 0, transform: "translateY(-100%)", opacity: 0 },
        "100%": { padding: T, transform: "translateY(0)", opacity: 1 },
      }),
      U = new Dg("MessageMoveOut", {
        "0%": { maxHeight: n.height, padding: T, opacity: 1 },
        "100%": { maxHeight: 0, padding: 0, opacity: 0 },
      }),
      R = {
        padding: T,
        textAlign: "center",
        [`${r}-custom-content`]: { display: "flex", alignItems: "center" },
        [`${r}-custom-content > ${o}`]: { marginInlineEnd: b, fontSize: m },
        [`${j}-content`]: {
          display: "inline-block",
          padding: E,
          background: H,
          borderRadius: w,
          boxShadow: l,
          pointerEvents: "all",
        },
        [`${r}-success > ${o}`]: { color: f },
        [`${r}-error > ${o}`]: { color: d },
        [`${r}-warning > ${o}`]: { color: v },
        [`${r}-info > ${o},
      ${r}-loading > ${o}`]: { color: h },
      };
    return [
      {
        [r]: Object.assign(Object.assign({}, i6(n)), {
          color: s,
          position: "fixed",
          top: b,
          width: "100%",
          pointerEvents: "none",
          zIndex: O,
          [`${r}-move-up`]: { animationFillMode: "forwards" },
          [`
        ${r}-move-up-appear,
        ${r}-move-up-enter
      `]: {
            animationName: D,
            animationDuration: y,
            animationPlayState: "paused",
            animationTimingFunction: p,
          },
          [`
        ${r}-move-up-appear${r}-move-up-appear-active,
        ${r}-move-up-enter${r}-move-up-enter-active
      `]: { animationPlayState: "running" },
          [`${r}-move-up-leave`]: {
            animationName: U,
            animationDuration: y,
            animationPlayState: "paused",
            animationTimingFunction: p,
          },
          [`${r}-move-up-leave${r}-move-up-leave-active`]: {
            animationPlayState: "running",
          },
          "&-rtl": { direction: "rtl", span: { direction: "rtl" } },
        }),
      },
      { [r]: { [`${j}-wrapper`]: Object.assign({}, R) } },
      {
        [`${r}-notice-pure-panel`]: Object.assign(Object.assign({}, R), {
          padding: 0,
          textAlign: "start",
        }),
      },
    ];
  },
  YT = (n) => ({
    zIndexPopup: n.zIndexPopupBase + GT + 10,
    contentBg: n.colorBgElevated,
    contentPadding: `${(n.controlHeightLG - n.fontSize * n.lineHeight) / 2}px ${
      n.paddingSM
    }px`,
  }),
  sb = $1(
    "Message",
    (n) => {
      const r = al(n, { height: 150 });
      return [XT(r)];
    },
    YT
  );
var FT = function (n, r) {
  var o = {};
  for (var l in n)
    Object.prototype.hasOwnProperty.call(n, l) &&
      r.indexOf(l) < 0 &&
      (o[l] = n[l]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, l = Object.getOwnPropertySymbols(n); s < l.length; s++)
      r.indexOf(l[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(n, l[s]) &&
        (o[l[s]] = n[l[s]]);
  return o;
};
const IT = {
    info: x.createElement(ST, null),
    success: x.createElement(cT, null),
    error: x.createElement(dT, null),
    warning: x.createElement(yT, null),
    loading: x.createElement(ib, null),
  },
  cb = (n) => {
    let { prefixCls: r, type: o, icon: l, children: s } = n;
    return x.createElement(
      "div",
      { className: Nt(`${r}-custom-content`, `${r}-${o}`) },
      l || IT[o],
      x.createElement("span", null, s)
    );
  },
  QT = (n) => {
    const { prefixCls: r, className: o, type: l, icon: s, content: f } = n,
      d = FT(n, ["prefixCls", "className", "type", "icon", "content"]),
      { getPrefixCls: v } = x.useContext(yn),
      h = r || v("message"),
      m = rb(h),
      [p, y, b] = sb(h, m);
    return p(
      x.createElement(
        lb,
        Object.assign({}, d, {
          prefixCls: h,
          className: Nt(o, y, `${h}-notice-pure-panel`, b, m),
          eventKey: "pure",
          duration: null,
          content: x.createElement(cb, { prefixCls: h, type: l, icon: s }, f),
        })
      )
    );
  };
function ZT(n, r) {
  return { motionName: r ?? `${n}-move-up` };
}
function Ih(n) {
  let r;
  const o = new Promise((s) => {
      r = n(() => {
        s(!0);
      });
    }),
    l = () => {
      r == null || r();
    };
  return (l.then = (s, f) => o.then(s, f)), (l.promise = o), l;
}
var KT = function (n, r) {
  var o = {};
  for (var l in n)
    Object.prototype.hasOwnProperty.call(n, l) &&
      r.indexOf(l) < 0 &&
      (o[l] = n[l]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, l = Object.getOwnPropertySymbols(n); s < l.length; s++)
      r.indexOf(l[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(n, l[s]) &&
        (o[l[s]] = n[l[s]]);
  return o;
};
const JT = 8,
  WT = 3,
  e5 = (n) => {
    let { children: r, prefixCls: o } = n;
    const l = rb(o),
      [s, f, d] = sb(o, l);
    return s(x.createElement(NT, { classNames: { list: Nt(f, d, l) } }, r));
  },
  t5 = (n, r) => {
    let { prefixCls: o, key: l } = r;
    return x.createElement(e5, { prefixCls: o, key: l }, n);
  },
  n5 = x.forwardRef((n, r) => {
    const {
        top: o,
        prefixCls: l,
        getContainer: s,
        maxCount: f,
        duration: d = WT,
        rtl: v,
        transitionName: h,
        onAllRemoved: m,
      } = n,
      {
        getPrefixCls: p,
        getPopupContainer: y,
        message: b,
        direction: T,
      } = x.useContext(yn),
      w = l || p("message"),
      O = () => ({ left: "50%", transform: "translateX(-50%)", top: o ?? JT }),
      E = () => Nt({ [`${w}-rtl`]: v ?? T === "rtl" }),
      H = () => ZT(w, h),
      j = x.createElement(
        "span",
        { className: `${w}-close-x` },
        x.createElement(vT, { className: `${w}-close-icon` })
      ),
      [D, U] = $T({
        prefixCls: w,
        style: O,
        className: E,
        motion: H,
        closable: !1,
        closeIcon: j,
        duration: d,
        getContainer: () =>
          (s == null ? void 0 : s()) ||
          (y == null ? void 0 : y()) ||
          document.body,
        maxCount: f,
        onAllRemoved: m,
        renderNotifications: t5,
      });
    return (
      x.useImperativeHandle(r, () =>
        Object.assign(Object.assign({}, D), { prefixCls: w, message: b })
      ),
      U
    );
  });
let iy = 0;
function ub(n) {
  const r = x.useRef(null);
  return [
    x.useMemo(() => {
      const l = (h) => {
          var m;
          (m = r.current) === null || m === void 0 || m.close(h);
        },
        s = (h) => {
          if (!r.current) {
            const F = () => {};
            return (F.then = () => {}), F;
          }
          const { open: m, prefixCls: p, message: y } = r.current,
            b = `${p}-notice`,
            {
              content: T,
              icon: w,
              type: O,
              key: E,
              className: H,
              style: j,
              onClose: D,
            } = h,
            U = KT(h, [
              "content",
              "icon",
              "type",
              "key",
              "className",
              "style",
              "onClose",
            ]);
          let R = E;
          return (
            R == null && ((iy += 1), (R = `antd-message-${iy}`)),
            Ih(
              (F) => (
                m(
                  Object.assign(Object.assign({}, U), {
                    key: R,
                    content: x.createElement(
                      cb,
                      { prefixCls: p, type: O, icon: w },
                      T
                    ),
                    placement: "top",
                    className: Nt(
                      O && `${b}-${O}`,
                      H,
                      y == null ? void 0 : y.className
                    ),
                    style: Object.assign(
                      Object.assign({}, y == null ? void 0 : y.style),
                      j
                    ),
                    onClose: () => {
                      D == null || D(), F();
                    },
                  })
                ),
                () => {
                  l(R);
                }
              )
            )
          );
        },
        d = {
          open: s,
          destroy: (h) => {
            var m;
            h !== void 0
              ? l(h)
              : (m = r.current) === null || m === void 0 || m.destroy();
          },
        };
      return (
        ["info", "success", "warning", "error", "loading"].forEach((h) => {
          const m = (p, y, b) => {
            let T;
            p && typeof p == "object" && "content" in p
              ? (T = p)
              : (T = { content: p });
            let w, O;
            typeof y == "function" ? (O = y) : ((w = y), (O = b));
            const E = Object.assign(
              Object.assign({ onClose: O, duration: w }, T),
              { type: h }
            );
            return s(E);
          };
          d[h] = m;
        }),
        d
      );
    }, []),
    x.createElement(
      n5,
      Object.assign({ key: "message-holder" }, n, { ref: r })
    ),
  ];
}
function a5(n) {
  return ub(n);
}
function bi() {
  bi = function () {
    return r;
  };
  var n,
    r = {},
    o = Object.prototype,
    l = o.hasOwnProperty,
    s = typeof Symbol == "function" ? Symbol : {},
    f = s.iterator || "@@iterator",
    d = s.asyncIterator || "@@asyncIterator",
    v = s.toStringTag || "@@toStringTag";
  function h(B, $, k, ee) {
    return Object.defineProperty(B, $, {
      value: k,
      enumerable: !ee,
      configurable: !ee,
      writable: !ee,
    });
  }
  try {
    h({}, "");
  } catch {
    h = function (k, ee, te) {
      return (k[ee] = te);
    };
  }
  function m(B, $, k, ee) {
    var te = $ && $.prototype instanceof b ? $ : b,
      se = Object.create(te.prototype);
    return (
      h(
        se,
        "_invoke",
        (function (z, W, J) {
          var ve = 1;
          return function (A, Z) {
            if (ve === 3) throw Error("Generator is already running");
            if (ve === 4) {
              if (A === "throw") throw Z;
              return { value: n, done: !0 };
            }
            for (J.method = A, J.arg = Z; ; ) {
              var le = J.delegate;
              if (le) {
                var ie = R(le, J);
                if (ie) {
                  if (ie === y) continue;
                  return ie;
                }
              }
              if (J.method === "next") J.sent = J._sent = J.arg;
              else if (J.method === "throw") {
                if (ve === 1) throw ((ve = 4), J.arg);
                J.dispatchException(J.arg);
              } else J.method === "return" && J.abrupt("return", J.arg);
              ve = 3;
              var ue = p(z, W, J);
              if (ue.type === "normal") {
                if (((ve = J.done ? 4 : 2), ue.arg === y)) continue;
                return { value: ue.arg, done: J.done };
              }
              ue.type === "throw" &&
                ((ve = 4), (J.method = "throw"), (J.arg = ue.arg));
            }
          };
        })(B, k, new q(ee || [])),
        !0
      ),
      se
    );
  }
  function p(B, $, k) {
    try {
      return { type: "normal", arg: B.call($, k) };
    } catch (ee) {
      return { type: "throw", arg: ee };
    }
  }
  r.wrap = m;
  var y = {};
  function b() {}
  function T() {}
  function w() {}
  var O = {};
  h(O, f, function () {
    return this;
  });
  var E = Object.getPrototypeOf,
    H = E && E(E(K([])));
  H && H !== o && l.call(H, f) && (O = H);
  var j = (w.prototype = b.prototype = Object.create(O));
  function D(B) {
    ["next", "throw", "return"].forEach(function ($) {
      h(B, $, function (k) {
        return this._invoke($, k);
      });
    });
  }
  function U(B, $) {
    function k(te, se, z, W) {
      var J = p(B[te], B, se);
      if (J.type !== "throw") {
        var ve = J.arg,
          A = ve.value;
        return A && Xe(A) == "object" && l.call(A, "__await")
          ? $.resolve(A.__await).then(
              function (Z) {
                k("next", Z, z, W);
              },
              function (Z) {
                k("throw", Z, z, W);
              }
            )
          : $.resolve(A).then(
              function (Z) {
                (ve.value = Z), z(ve);
              },
              function (Z) {
                return k("throw", Z, z, W);
              }
            );
      }
      W(J.arg);
    }
    var ee;
    h(
      this,
      "_invoke",
      function (te, se) {
        function z() {
          return new $(function (W, J) {
            k(te, se, W, J);
          });
        }
        return (ee = ee ? ee.then(z, z) : z());
      },
      !0
    );
  }
  function R(B, $) {
    var k = $.method,
      ee = B.i[k];
    if (ee === n)
      return (
        ($.delegate = null),
        (k === "throw" &&
          B.i.return &&
          (($.method = "return"),
          ($.arg = n),
          R(B, $),
          $.method === "throw")) ||
          (k !== "return" &&
            (($.method = "throw"),
            ($.arg = new TypeError(
              "The iterator does not provide a '" + k + "' method"
            )))),
        y
      );
    var te = p(ee, B.i, $.arg);
    if (te.type === "throw")
      return ($.method = "throw"), ($.arg = te.arg), ($.delegate = null), y;
    var se = te.arg;
    return se
      ? se.done
        ? (($[B.r] = se.value),
          ($.next = B.n),
          $.method !== "return" && (($.method = "next"), ($.arg = n)),
          ($.delegate = null),
          y)
        : se
      : (($.method = "throw"),
        ($.arg = new TypeError("iterator result is not an object")),
        ($.delegate = null),
        y);
  }
  function F(B) {
    this.tryEntries.push(B);
  }
  function _(B) {
    var $ = B[4] || {};
    ($.type = "normal"), ($.arg = n), (B[4] = $);
  }
  function q(B) {
    (this.tryEntries = [[-1]]), B.forEach(F, this), this.reset(!0);
  }
  function K(B) {
    if (B != null) {
      var $ = B[f];
      if ($) return $.call(B);
      if (typeof B.next == "function") return B;
      if (!isNaN(B.length)) {
        var k = -1,
          ee = function te() {
            for (; ++k < B.length; )
              if (l.call(B, k)) return (te.value = B[k]), (te.done = !1), te;
            return (te.value = n), (te.done = !0), te;
          };
        return (ee.next = ee);
      }
    }
    throw new TypeError(Xe(B) + " is not iterable");
  }
  return (
    (T.prototype = w),
    h(j, "constructor", w),
    h(w, "constructor", T),
    (T.displayName = h(w, v, "GeneratorFunction")),
    (r.isGeneratorFunction = function (B) {
      var $ = typeof B == "function" && B.constructor;
      return (
        !!$ && ($ === T || ($.displayName || $.name) === "GeneratorFunction")
      );
    }),
    (r.mark = function (B) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(B, w)
          : ((B.__proto__ = w), h(B, v, "GeneratorFunction")),
        (B.prototype = Object.create(j)),
        B
      );
    }),
    (r.awrap = function (B) {
      return { __await: B };
    }),
    D(U.prototype),
    h(U.prototype, d, function () {
      return this;
    }),
    (r.AsyncIterator = U),
    (r.async = function (B, $, k, ee, te) {
      te === void 0 && (te = Promise);
      var se = new U(m(B, $, k, ee), te);
      return r.isGeneratorFunction($)
        ? se
        : se.next().then(function (z) {
            return z.done ? z.value : se.next();
          });
    }),
    D(j),
    h(j, v, "Generator"),
    h(j, f, function () {
      return this;
    }),
    h(j, "toString", function () {
      return "[object Generator]";
    }),
    (r.keys = function (B) {
      var $ = Object(B),
        k = [];
      for (var ee in $) k.unshift(ee);
      return function te() {
        for (; k.length; )
          if ((ee = k.pop()) in $) return (te.value = ee), (te.done = !1), te;
        return (te.done = !0), te;
      };
    }),
    (r.values = K),
    (q.prototype = {
      constructor: q,
      reset: function ($) {
        if (
          ((this.prev = this.next = 0),
          (this.sent = this._sent = n),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = n),
          this.tryEntries.forEach(_),
          !$)
        )
          for (var k in this)
            k.charAt(0) === "t" &&
              l.call(this, k) &&
              !isNaN(+k.slice(1)) &&
              (this[k] = n);
      },
      stop: function () {
        this.done = !0;
        var $ = this.tryEntries[0][4];
        if ($.type === "throw") throw $.arg;
        return this.rval;
      },
      dispatchException: function ($) {
        if (this.done) throw $;
        var k = this;
        function ee(A) {
          (z.type = "throw"), (z.arg = $), (k.next = A);
        }
        for (var te = k.tryEntries.length - 1; te >= 0; --te) {
          var se = this.tryEntries[te],
            z = se[4],
            W = this.prev,
            J = se[1],
            ve = se[2];
          if (se[0] === -1) return ee("end"), !1;
          if (!J && !ve) throw Error("try statement without catch or finally");
          if (se[0] != null && se[0] <= W) {
            if (W < J) return (this.method = "next"), (this.arg = n), ee(J), !0;
            if (W < ve) return ee(ve), !1;
          }
        }
      },
      abrupt: function ($, k) {
        for (var ee = this.tryEntries.length - 1; ee >= 0; --ee) {
          var te = this.tryEntries[ee];
          if (te[0] > -1 && te[0] <= this.prev && this.prev < te[2]) {
            var se = te;
            break;
          }
        }
        se &&
          ($ === "break" || $ === "continue") &&
          se[0] <= k &&
          k <= se[2] &&
          (se = null);
        var z = se ? se[4] : {};
        return (
          (z.type = $),
          (z.arg = k),
          se
            ? ((this.method = "next"), (this.next = se[2]), y)
            : this.complete(z)
        );
      },
      complete: function ($, k) {
        if ($.type === "throw") throw $.arg;
        return (
          $.type === "break" || $.type === "continue"
            ? (this.next = $.arg)
            : $.type === "return"
            ? ((this.rval = this.arg = $.arg),
              (this.method = "return"),
              (this.next = "end"))
            : $.type === "normal" && k && (this.next = k),
          y
        );
      },
      finish: function ($) {
        for (var k = this.tryEntries.length - 1; k >= 0; --k) {
          var ee = this.tryEntries[k];
          if (ee[2] === $) return this.complete(ee[4], ee[3]), _(ee), y;
        }
      },
      catch: function ($) {
        for (var k = this.tryEntries.length - 1; k >= 0; --k) {
          var ee = this.tryEntries[k];
          if (ee[0] === $) {
            var te = ee[4];
            if (te.type === "throw") {
              var se = te.arg;
              _(ee);
            }
            return se;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function ($, k, ee) {
        return (
          (this.delegate = { i: K($), r: k, n: ee }),
          this.method === "next" && (this.arg = n),
          y
        );
      },
    }),
    r
  );
}
function sy(n, r, o, l, s, f, d) {
  try {
    var v = n[f](d),
      h = v.value;
  } catch (m) {
    return void o(m);
  }
  v.done ? r(h) : Promise.resolve(h).then(l, s);
}
function fb(n) {
  return function () {
    var r = this,
      o = arguments;
    return new Promise(function (l, s) {
      var f = n.apply(r, o);
      function d(h) {
        sy(f, l, s, d, v, "next", h);
      }
      function v(h) {
        sy(f, l, s, d, v, "throw", h);
      }
      d(void 0);
    });
  };
}
var Mi = be({}, Ty),
  r5 = Mi.version,
  Cd = Mi.render,
  l5 = Mi.unmountComponentAtNode,
  Hc;
try {
  var o5 = Number((r5 || "").split(".")[0]);
  o5 >= 18 && (Hc = Mi.createRoot);
} catch {}
function cy(n) {
  var r = Mi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  r && Xe(r) === "object" && (r.usingClientEntryPoint = n);
}
var xc = "__rc_react_root__";
function i5(n, r) {
  cy(!0);
  var o = r[xc] || Hc(r);
  cy(!1), o.render(n), (r[xc] = o);
}
function s5(n, r) {
  Cd == null || Cd(n, r);
}
function c5(n, r) {
  if (Hc) {
    i5(n, r);
    return;
  }
  s5(n, r);
}
function u5(n) {
  return bh.apply(this, arguments);
}
function bh() {
  return (
    (bh = fb(
      bi().mark(function n(r) {
        return bi().wrap(function (l) {
          for (;;)
            switch ((l.prev = l.next)) {
              case 0:
                return l.abrupt(
                  "return",
                  Promise.resolve().then(function () {
                    var s;
                    (s = r[xc]) === null || s === void 0 || s.unmount(),
                      delete r[xc];
                  })
                );
              case 1:
              case "end":
                return l.stop();
            }
        }, n);
      })
    )),
    bh.apply(this, arguments)
  );
}
function f5(n) {
  l5(n);
}
function d5(n) {
  return xh.apply(this, arguments);
}
function xh() {
  return (
    (xh = fb(
      bi().mark(function n(r) {
        return bi().wrap(function (l) {
          for (;;)
            switch ((l.prev = l.next)) {
              case 0:
                if (Hc === void 0) {
                  l.next = 2;
                  break;
                }
                return l.abrupt("return", u5(r));
              case 2:
                f5(r);
              case 3:
              case "end":
                return l.stop();
            }
        }, n);
      })
    )),
    xh.apply(this, arguments)
  );
}
const h5 = (n, r) => (c5(n, r), () => d5(r));
let m5 = h5;
function db(n) {
  return m5;
}
function v5(n, r) {
  var o = Object.assign({}, n);
  return (
    Array.isArray(r) &&
      r.forEach(function (l) {
        delete o[l];
      }),
    o
  );
}
const p5 = function (n) {
    if (!n) return !1;
    if (n instanceof Element) {
      if (n.offsetParent) return !0;
      if (n.getBBox) {
        var r = n.getBBox(),
          o = r.width,
          l = r.height;
        if (o || l) return !0;
      }
      if (n.getBoundingClientRect) {
        var s = n.getBoundingClientRect(),
          f = s.width,
          d = s.height;
        if (f || d) return !0;
      }
    }
    return !1;
  },
  g5 = (n) => {
    const { componentCls: r, colorPrimary: o } = n;
    return {
      [r]: {
        position: "absolute",
        background: "transparent",
        pointerEvents: "none",
        boxSizing: "border-box",
        color: `var(--wave-color, ${o})`,
        boxShadow: "0 0 0 0 currentcolor",
        opacity: 0.2,
        "&.wave-motion-appear": {
          transition: [
            `box-shadow 0.4s ${n.motionEaseOutCirc}`,
            `opacity 2s ${n.motionEaseOutCirc}`,
          ].join(","),
          "&-active": { boxShadow: "0 0 0 6px currentcolor", opacity: 0 },
          "&.wave-quick": {
            transition: [
              `box-shadow ${n.motionDurationSlow} ${n.motionEaseInOut}`,
              `opacity ${n.motionDurationSlow} ${n.motionEaseInOut}`,
            ].join(","),
          },
        },
      },
    };
  },
  y5 = d6("Wave", (n) => [g5(n)]),
  hb = `${gc}-wave-target`;
function Ed(n) {
  return (
    n &&
    n !== "#fff" &&
    n !== "#ffffff" &&
    n !== "rgb(255, 255, 255)" &&
    n !== "rgba(255, 255, 255, 1)" &&
    !/rgba\((?:\d*, ){3}0\)/.test(n) &&
    n !== "transparent"
  );
}
function b5(n) {
  const {
    borderTopColor: r,
    borderColor: o,
    backgroundColor: l,
  } = getComputedStyle(n);
  return Ed(r) ? r : Ed(o) ? o : Ed(l) ? l : null;
}
function Td(n) {
  return Number.isNaN(n) ? 0 : n;
}
const x5 = (n) => {
    const { className: r, target: o, component: l, registerUnmount: s } = n,
      f = x.useRef(null),
      d = x.useRef(null);
    x.useEffect(() => {
      d.current = s();
    }, []);
    const [v, h] = x.useState(null),
      [m, p] = x.useState([]),
      [y, b] = x.useState(0),
      [T, w] = x.useState(0),
      [O, E] = x.useState(0),
      [H, j] = x.useState(0),
      [D, U] = x.useState(!1),
      R = {
        left: y,
        top: T,
        width: O,
        height: H,
        borderRadius: m.map((q) => `${q}px`).join(" "),
      };
    v && (R["--wave-color"] = v);
    function F() {
      const q = getComputedStyle(o);
      h(b5(o));
      const K = q.position === "static",
        { borderLeftWidth: B, borderTopWidth: $ } = q;
      b(K ? o.offsetLeft : Td(-parseFloat(B))),
        w(K ? o.offsetTop : Td(-parseFloat($))),
        E(o.offsetWidth),
        j(o.offsetHeight);
      const {
        borderTopLeftRadius: k,
        borderTopRightRadius: ee,
        borderBottomLeftRadius: te,
        borderBottomRightRadius: se,
      } = q;
      p([k, ee, se, te].map((z) => Td(parseFloat(z))));
    }
    if (
      (x.useEffect(() => {
        if (o) {
          const q = el(() => {
            F(), U(!0);
          });
          let K;
          return (
            typeof ResizeObserver < "u" &&
              ((K = new ResizeObserver(F)), K.observe(o)),
            () => {
              el.cancel(q), K == null || K.disconnect();
            }
          );
        }
      }, []),
      !D)
    )
      return null;
    const _ =
      (l === "Checkbox" || l === "Radio") &&
      (o == null ? void 0 : o.classList.contains(hb));
    return x.createElement(
      Fh,
      {
        visible: !0,
        motionAppear: !0,
        motionName: "wave-motion",
        motionDeadline: 5e3,
        onAppearEnd: (q, K) => {
          var B, $;
          if (K.deadline || K.propertyName === "opacity") {
            const k =
              (B = f.current) === null || B === void 0
                ? void 0
                : B.parentElement;
            ($ = d.current) === null ||
              $ === void 0 ||
              $.call(d).then(() => {
                k == null || k.remove();
              });
          }
          return !1;
        },
      },
      (q, K) => {
        let { className: B } = q;
        return x.createElement("div", {
          ref: Mh(f, K),
          className: Nt(r, B, { "wave-quick": _ }),
          style: R,
        });
      }
    );
  },
  S5 = (n, r) => {
    var o;
    const { component: l } = r;
    if (
      l === "Checkbox" &&
      !(!((o = n.querySelector("input")) === null || o === void 0) && o.checked)
    )
      return;
    const s = document.createElement("div");
    (s.style.position = "absolute"),
      (s.style.left = "0px"),
      (s.style.top = "0px"),
      n == null || n.insertBefore(s, n == null ? void 0 : n.firstChild);
    const f = db();
    let d = null;
    function v() {
      return d;
    }
    d = f(
      x.createElement(
        x5,
        Object.assign({}, r, { target: n, registerUnmount: v })
      ),
      s
    );
  },
  C5 = (n, r, o) => {
    const { wave: l } = x.useContext(yn),
      [, s, f] = rl(),
      d = yi((m) => {
        const p = n.current;
        if ((l != null && l.disabled) || !p) return;
        const y = p.querySelector(`.${hb}`) || p,
          { showEffect: b } = l || {};
        (b || S5)(y, {
          className: r,
          token: s,
          component: o,
          event: m,
          hashId: f,
        });
      }),
      v = x.useRef(null);
    return (m) => {
      el.cancel(v.current),
        (v.current = el(() => {
          d(m);
        }));
    };
  },
  E5 = (n) => {
    const { children: r, disabled: o, component: l } = n,
      { getPrefixCls: s } = x.useContext(yn),
      f = x.useRef(null),
      d = s("wave"),
      [, v] = y5(d),
      h = C5(f, Nt(d, v), l);
    if (
      (fe.useEffect(() => {
        const p = f.current;
        if (!p || p.nodeType !== 1 || o) return;
        const y = (b) => {
          !p5(b.target) ||
            !p.getAttribute ||
            p.getAttribute("disabled") ||
            p.disabled ||
            p.className.includes("disabled") ||
            p.className.includes("-leave") ||
            h(b);
        };
        return (
          p.addEventListener("click", y, !0),
          () => {
            p.removeEventListener("click", y, !0);
          }
        );
      }, [o]),
      !fe.isValidElement(r))
    )
      return r ?? null;
    const m = Qy(r) ? Mh(Ky(r), f) : f;
    return ab(r, { ref: m });
  },
  T5 = (n) => {
    const r = fe.useContext(Jl);
    return fe.useMemo(
      () =>
        n
          ? typeof n == "string"
            ? n ?? r
            : typeof n == "function"
            ? n(r)
            : r
          : r,
      [n, r]
    );
  },
  _5 = x.createContext(null),
  O5 = (n, r) => {
    const o = x.useContext(_5),
      l = x.useMemo(() => {
        if (!o) return "";
        const { compactDirection: s, isFirstItem: f, isLastItem: d } = o,
          v = s === "vertical" ? "-vertical-" : "-";
        return Nt(`${n}-compact${v}item`, {
          [`${n}-compact${v}first-item`]: f,
          [`${n}-compact${v}last-item`]: d,
          [`${n}-compact${v}item-rtl`]: r === "rtl",
        });
      }, [n, r, o]);
    return {
      compactSize: o == null ? void 0 : o.compactSize,
      compactDirection: o == null ? void 0 : o.compactDirection,
      compactItemClassnames: l,
    };
  };
var w5 = function (n, r) {
  var o = {};
  for (var l in n)
    Object.prototype.hasOwnProperty.call(n, l) &&
      r.indexOf(l) < 0 &&
      (o[l] = n[l]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, l = Object.getOwnPropertySymbols(n); s < l.length; s++)
      r.indexOf(l[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(n, l[s]) &&
        (o[l[s]] = n[l[s]]);
  return o;
};
const mb = x.createContext(void 0),
  j5 = (n) => {
    const { getPrefixCls: r, direction: o } = x.useContext(yn),
      { prefixCls: l, size: s, className: f } = n,
      d = w5(n, ["prefixCls", "size", "className"]),
      v = r("btn-group", l),
      [, , h] = rl(),
      m = x.useMemo(() => {
        switch (s) {
          case "large":
            return "lg";
          case "small":
            return "sm";
          default:
            return "";
        }
      }, [s]),
      p = Nt(v, { [`${v}-${m}`]: m, [`${v}-rtl`]: o === "rtl" }, f, h);
    return x.createElement(
      mb.Provider,
      { value: s },
      x.createElement("div", Object.assign({}, d, { className: p }))
    );
  },
  uy = /^[\u4E00-\u9FA5]{2}$/,
  Sh = uy.test.bind(uy);
function fy(n) {
  return typeof n == "string";
}
function _d(n) {
  return n === "text" || n === "link";
}
function R5(n, r) {
  if (n == null) return;
  const o = r ? " " : "";
  return typeof n != "string" &&
    typeof n != "number" &&
    fy(n.type) &&
    Sh(n.props.children)
    ? ab(n, { children: n.props.children.split("").join(o) })
    : fy(n)
    ? Sh(n)
      ? fe.createElement("span", null, n.split("").join(o))
      : fe.createElement("span", null, n)
    : jT(n)
    ? fe.createElement("span", null, n)
    : n;
}
function A5(n, r) {
  let o = !1;
  const l = [];
  return (
    fe.Children.forEach(n, (s) => {
      const f = typeof s,
        d = f === "string" || f === "number";
      if (o && d) {
        const v = l.length - 1,
          h = l[v];
        l[v] = `${h}${s}`;
      } else l.push(s);
      o = d;
    }),
    fe.Children.map(l, (s) => R5(s, r))
  );
}
["default", "primary", "danger"].concat(sn(Gh));
const Ch = x.forwardRef((n, r) => {
    const { className: o, style: l, children: s, prefixCls: f } = n,
      d = Nt(`${f}-icon`, o);
    return fe.createElement("span", { ref: r, className: d, style: l }, s);
  }),
  dy = x.forwardRef((n, r) => {
    const { prefixCls: o, className: l, style: s, iconClassName: f } = n,
      d = Nt(`${o}-loading-icon`, l);
    return fe.createElement(
      Ch,
      { prefixCls: o, className: d, style: s, ref: r },
      fe.createElement(ib, { className: f })
    );
  }),
  Od = () => ({ width: 0, opacity: 0, transform: "scale(0)" }),
  wd = (n) => ({ width: n.scrollWidth, opacity: 1, transform: "scale(1)" }),
  N5 = (n) => {
    const {
        prefixCls: r,
        loading: o,
        existIcon: l,
        className: s,
        style: f,
        mount: d,
      } = n,
      v = !!o;
    return l
      ? fe.createElement(dy, { prefixCls: r, className: s, style: f })
      : fe.createElement(
          Fh,
          {
            visible: v,
            motionName: `${r}-loading-icon-motion`,
            motionAppear: !d,
            motionEnter: !d,
            motionLeave: !d,
            removeOnLeave: !0,
            onAppearStart: Od,
            onAppearActive: wd,
            onEnterStart: Od,
            onEnterActive: wd,
            onLeaveStart: wd,
            onLeaveActive: Od,
          },
          (h, m) => {
            let { className: p, style: y } = h;
            const b = Object.assign(Object.assign({}, f), y);
            return fe.createElement(dy, {
              prefixCls: r,
              className: Nt(s, p),
              style: b,
              ref: m,
            });
          }
        );
  },
  hy = (n, r) => ({
    [`> span, > ${n}`]: {
      "&:not(:last-child)": {
        [`&, & > ${n}`]: { "&:not(:disabled)": { borderInlineEndColor: r } },
      },
      "&:not(:first-child)": {
        [`&, & > ${n}`]: { "&:not(:disabled)": { borderInlineStartColor: r } },
      },
    },
  }),
  M5 = (n) => {
    const {
      componentCls: r,
      fontSize: o,
      lineWidth: l,
      groupBorderColor: s,
      colorErrorHover: f,
    } = n;
    return {
      [`${r}-group`]: [
        {
          position: "relative",
          display: "inline-flex",
          [`> span, > ${r}`]: {
            "&:not(:last-child)": {
              [`&, & > ${r}`]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0,
              },
            },
            "&:not(:first-child)": {
              marginInlineStart: n.calc(l).mul(-1).equal(),
              [`&, & > ${r}`]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0,
              },
            },
          },
          [r]: {
            position: "relative",
            zIndex: 1,
            "&:hover, &:focus, &:active": { zIndex: 2 },
            "&[disabled]": { zIndex: 0 },
          },
          [`${r}-icon-only`]: { fontSize: o },
        },
        hy(`${r}-primary`, s),
        hy(`${r}-danger`, f),
      ],
    };
  };
var D5 = ["b"],
  z5 = ["v"],
  jd = function (r) {
    return Math.round(Number(r || 0));
  },
  L5 = function (r) {
    if (r instanceof gt) return r;
    if (r && Xe(r) === "object" && "h" in r && "b" in r) {
      var o = r,
        l = o.b,
        s = $a(o, D5);
      return be(be({}, s), {}, { v: l });
    }
    return typeof r == "string" && /hsb/.test(r) ? r.replace(/hsb/, "hsv") : r;
  },
  xi = (function (n) {
    Ri(o, n);
    var r = Ai(o);
    function o(l) {
      return Xn(this, o), r.call(this, L5(l));
    }
    return (
      Yn(o, [
        {
          key: "toHsbString",
          value: function () {
            var s = this.toHsb(),
              f = jd(s.s * 100),
              d = jd(s.b * 100),
              v = jd(s.h),
              h = s.a,
              m = "hsb(".concat(v, ", ").concat(f, "%, ").concat(d, "%)"),
              p = "hsba("
                .concat(v, ", ")
                .concat(f, "%, ")
                .concat(d, "%, ")
                .concat(h.toFixed(h === 0 ? 0 : 2), ")");
            return h === 1 ? m : p;
          },
        },
        {
          key: "toHsb",
          value: function () {
            var s = this.toHsv(),
              f = s.v,
              d = $a(s, z5);
            return be(be({}, d), {}, { b: f, a: this.a });
          },
        },
      ]),
      o
    );
  })(gt),
  H5 = function (r) {
    return r instanceof xi ? r : new xi(r);
  };
H5("#1677ff");
const B5 = (n, r) =>
    (n == null ? void 0 : n.replace(/[^\w/]/g, "").slice(0, r ? 8 : 6)) || "",
  U5 = (n, r) => (n ? B5(n, r) : "");
let $5 = (function () {
  function n(r) {
    Xn(this, n);
    var o;
    if (((this.cleared = !1), r instanceof n)) {
      (this.metaColor = r.metaColor.clone()),
        (this.colors =
          (o = r.colors) === null || o === void 0
            ? void 0
            : o.map((s) => ({ color: new n(s.color), percent: s.percent }))),
        (this.cleared = r.cleared);
      return;
    }
    const l = Array.isArray(r);
    l && r.length
      ? ((this.colors = r.map((s) => {
          let { color: f, percent: d } = s;
          return { color: new n(f), percent: d };
        })),
        (this.metaColor = new xi(this.colors[0].color.metaColor)))
      : (this.metaColor = new xi(l ? "" : r)),
      (!r || (l && !this.colors)) &&
        ((this.metaColor = this.metaColor.setA(0)), (this.cleared = !0));
  }
  return Yn(n, [
    {
      key: "toHsb",
      value: function () {
        return this.metaColor.toHsb();
      },
    },
    {
      key: "toHsbString",
      value: function () {
        return this.metaColor.toHsbString();
      },
    },
    {
      key: "toHex",
      value: function () {
        return U5(this.toHexString(), this.metaColor.a < 1);
      },
    },
    {
      key: "toHexString",
      value: function () {
        return this.metaColor.toHexString();
      },
    },
    {
      key: "toRgb",
      value: function () {
        return this.metaColor.toRgb();
      },
    },
    {
      key: "toRgbString",
      value: function () {
        return this.metaColor.toRgbString();
      },
    },
    {
      key: "isGradient",
      value: function () {
        return !!this.colors && !this.cleared;
      },
    },
    {
      key: "getColors",
      value: function () {
        return this.colors || [{ color: this, percent: 0 }];
      },
    },
    {
      key: "toCssString",
      value: function () {
        const { colors: o } = this;
        return o
          ? `linear-gradient(90deg, ${o
              .map((s) => `${s.color.toRgbString()} ${s.percent}%`)
              .join(", ")})`
          : this.metaColor.toRgbString();
      },
    },
    {
      key: "equals",
      value: function (o) {
        return !o || this.isGradient() !== o.isGradient()
          ? !1
          : this.isGradient()
          ? this.colors.length === o.colors.length &&
            this.colors.every((l, s) => {
              const f = o.colors[s];
              return l.percent === f.percent && l.color.equals(f.color);
            })
          : this.toHexString() === o.toHexString();
      },
    },
  ]);
})();
const P5 = (n, r) => {
    const { r: o, g: l, b: s, a: f } = n.toRgb(),
      d = new xi(n.toRgbString()).onBackground(r).toHsv();
    return f <= 0.5 ? d.v > 0.5 : o * 0.299 + l * 0.587 + s * 0.114 > 192;
  },
  vb = (n) => {
    const { paddingInline: r, onlyIconSize: o } = n;
    return al(n, {
      buttonPaddingHorizontal: r,
      buttonPaddingVertical: 0,
      buttonIconOnlyFontSize: o,
    });
  },
  pb = (n) => {
    var r, o, l, s, f, d;
    const v = (r = n.contentFontSize) !== null && r !== void 0 ? r : n.fontSize,
      h = (o = n.contentFontSizeSM) !== null && o !== void 0 ? o : n.fontSize,
      m = (l = n.contentFontSizeLG) !== null && l !== void 0 ? l : n.fontSizeLG,
      p = (s = n.contentLineHeight) !== null && s !== void 0 ? s : lc(v),
      y = (f = n.contentLineHeightSM) !== null && f !== void 0 ? f : lc(h),
      b = (d = n.contentLineHeightLG) !== null && d !== void 0 ? d : lc(m),
      T = P5(new $5(n.colorBgSolid), "#fff") ? "#000" : "#fff",
      w = Gh.reduce(
        (O, E) =>
          Object.assign(Object.assign({}, O), {
            [`${E}ShadowColor`]: `0 ${tl(n.controlOutlineWidth)} 0 ${si(
              n[`${E}1`],
              n.colorBgContainer
            )}`,
          }),
        {}
      );
    return Object.assign(Object.assign({}, w), {
      fontWeight: 400,
      defaultShadow: `0 ${n.controlOutlineWidth}px 0 ${n.controlTmpOutline}`,
      primaryShadow: `0 ${n.controlOutlineWidth}px 0 ${n.controlOutline}`,
      dangerShadow: `0 ${n.controlOutlineWidth}px 0 ${n.colorErrorOutline}`,
      primaryColor: n.colorTextLightSolid,
      dangerColor: n.colorTextLightSolid,
      borderColorDisabled: n.colorBorder,
      defaultGhostColor: n.colorBgContainer,
      ghostBg: "transparent",
      defaultGhostBorderColor: n.colorBgContainer,
      paddingInline: n.paddingContentHorizontal - n.lineWidth,
      paddingInlineLG: n.paddingContentHorizontal - n.lineWidth,
      paddingInlineSM: 8 - n.lineWidth,
      onlyIconSize: "inherit",
      onlyIconSizeSM: "inherit",
      onlyIconSizeLG: "inherit",
      groupBorderColor: n.colorPrimaryHover,
      linkHoverBg: "transparent",
      textTextColor: n.colorText,
      textTextHoverColor: n.colorText,
      textTextActiveColor: n.colorText,
      textHoverBg: n.colorFillTertiary,
      defaultColor: n.colorText,
      defaultBg: n.colorBgContainer,
      defaultBorderColor: n.colorBorder,
      defaultBorderColorDisabled: n.colorBorder,
      defaultHoverBg: n.colorBgContainer,
      defaultHoverColor: n.colorPrimaryHover,
      defaultHoverBorderColor: n.colorPrimaryHover,
      defaultActiveBg: n.colorBgContainer,
      defaultActiveColor: n.colorPrimaryActive,
      defaultActiveBorderColor: n.colorPrimaryActive,
      solidTextColor: T,
      contentFontSize: v,
      contentFontSizeSM: h,
      contentFontSizeLG: m,
      contentLineHeight: p,
      contentLineHeightSM: y,
      contentLineHeightLG: b,
      paddingBlock: Math.max((n.controlHeight - v * p) / 2 - n.lineWidth, 0),
      paddingBlockSM: Math.max(
        (n.controlHeightSM - h * y) / 2 - n.lineWidth,
        0
      ),
      paddingBlockLG: Math.max(
        (n.controlHeightLG - m * b) / 2 - n.lineWidth,
        0
      ),
    });
  },
  q5 = (n) => {
    const {
      componentCls: r,
      iconCls: o,
      fontWeight: l,
      opacityLoading: s,
      motionDurationSlow: f,
      motionEaseInOut: d,
      marginXS: v,
      calc: h,
    } = n;
    return {
      [r]: {
        outline: "none",
        position: "relative",
        display: "inline-flex",
        gap: n.marginXS,
        alignItems: "center",
        justifyContent: "center",
        fontWeight: l,
        whiteSpace: "nowrap",
        textAlign: "center",
        backgroundImage: "none",
        background: "transparent",
        border: `${tl(n.lineWidth)} ${n.lineType} transparent`,
        cursor: "pointer",
        transition: `all ${n.motionDurationMid} ${n.motionEaseInOut}`,
        userSelect: "none",
        touchAction: "manipulation",
        color: n.colorText,
        "&:disabled > *": { pointerEvents: "none" },
        [`${r}-icon > svg`]: B1(),
        "> a": { color: "currentColor" },
        "&:not(:disabled)": f6(n),
        [`&${r}-two-chinese-chars::first-letter`]: { letterSpacing: "0.34em" },
        [`&${r}-two-chinese-chars > *:not(${o})`]: {
          marginInlineEnd: "-0.34em",
          letterSpacing: "0.34em",
        },
        [`&${r}-icon-only`]: {
          paddingInline: 0,
          [`&${r}-compact-item`]: { flex: "none" },
          [`&${r}-round`]: { width: "auto" },
        },
        [`&${r}-loading`]: { opacity: s, cursor: "default" },
        [`${r}-loading-icon`]: {
          transition: ["width", "opacity", "margin"]
            .map((m) => `${m} ${f} ${d}`)
            .join(","),
        },
        [`&:not(${r}-icon-end)`]: {
          [`${r}-loading-icon-motion`]: {
            "&-appear-start, &-enter-start": {
              marginInlineEnd: h(v).mul(-1).equal(),
            },
            "&-appear-active, &-enter-active": { marginInlineEnd: 0 },
            "&-leave-start": { marginInlineEnd: 0 },
            "&-leave-active": { marginInlineEnd: h(v).mul(-1).equal() },
          },
        },
        "&-icon-end": {
          flexDirection: "row-reverse",
          [`${r}-loading-icon-motion`]: {
            "&-appear-start, &-enter-start": {
              marginInlineStart: h(v).mul(-1).equal(),
            },
            "&-appear-active, &-enter-active": { marginInlineStart: 0 },
            "&-leave-start": { marginInlineStart: 0 },
            "&-leave-active": { marginInlineStart: h(v).mul(-1).equal() },
          },
        },
      },
    };
  },
  gb = (n, r, o) => ({
    [`&:not(:disabled):not(${n}-disabled)`]: { "&:hover": r, "&:active": o },
  }),
  V5 = (n) => ({
    minWidth: n.controlHeight,
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
    borderRadius: "50%",
  }),
  k5 = (n) => ({
    borderRadius: n.controlHeight,
    paddingInlineStart: n.calc(n.controlHeight).div(2).equal(),
    paddingInlineEnd: n.calc(n.controlHeight).div(2).equal(),
  }),
  G5 = (n) => ({
    cursor: "not-allowed",
    borderColor: n.borderColorDisabled,
    color: n.colorTextDisabled,
    background: n.colorBgContainerDisabled,
    boxShadow: "none",
  }),
  Bc = (n, r, o, l, s, f, d, v) => ({
    [`&${n}-background-ghost`]: Object.assign(
      Object.assign(
        {
          color: o || void 0,
          background: r,
          borderColor: l || void 0,
          boxShadow: "none",
        },
        gb(
          n,
          Object.assign({ background: r }, d),
          Object.assign({ background: r }, v)
        )
      ),
      {
        "&:disabled": {
          cursor: "not-allowed",
          color: s || void 0,
          borderColor: f || void 0,
        },
      }
    ),
  }),
  X5 = (n) => ({
    [`&:disabled, &${n.componentCls}-disabled`]: Object.assign({}, G5(n)),
  }),
  Y5 = (n) => ({
    [`&:disabled, &${n.componentCls}-disabled`]: {
      cursor: "not-allowed",
      color: n.colorTextDisabled,
    },
  }),
  Uc = (n, r, o, l) => {
    const f = l && ["link", "text"].includes(l) ? Y5 : X5;
    return Object.assign(Object.assign({}, f(n)), gb(n.componentCls, r, o));
  },
  $c = (n, r, o, l, s) => ({
    [`&${n.componentCls}-variant-solid`]: Object.assign(
      { color: r, background: o },
      Uc(n, l, s)
    ),
  }),
  Pc = (n, r, o, l, s) => ({
    [`&${n.componentCls}-variant-outlined, &${n.componentCls}-variant-dashed`]:
      Object.assign({ borderColor: r, background: o }, Uc(n, l, s)),
  }),
  qc = (n) => ({
    [`&${n.componentCls}-variant-dashed`]: { borderStyle: "dashed" },
  }),
  Vc = (n, r, o, l) => ({
    [`&${n.componentCls}-variant-filled`]: Object.assign(
      { boxShadow: "none", background: r },
      Uc(n, o, l)
    ),
  }),
  va = (n, r, o, l, s) => ({
    [`&${n.componentCls}-variant-${o}`]: Object.assign(
      { color: r, boxShadow: "none" },
      Uc(n, l, s, o)
    ),
  }),
  F5 = (n) => {
    const { componentCls: r } = n;
    return Gh.reduce((o, l) => {
      const s = n[`${l}6`],
        f = n[`${l}1`],
        d = n[`${l}5`],
        v = n[`${l}2`],
        h = n[`${l}3`],
        m = n[`${l}7`];
      return Object.assign(Object.assign({}, o), {
        [`&${r}-color-${l}`]: Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    { color: s, boxShadow: n[`${l}ShadowColor`] },
                    $c(
                      n,
                      n.colorTextLightSolid,
                      s,
                      { background: d },
                      { background: m }
                    )
                  ),
                  Pc(
                    n,
                    s,
                    n.colorBgContainer,
                    {
                      color: d,
                      borderColor: d,
                      background: n.colorBgContainer,
                    },
                    { color: m, borderColor: m, background: n.colorBgContainer }
                  )
                ),
                qc(n)
              ),
              Vc(n, f, { background: v }, { background: h })
            ),
            va(n, s, "link", { color: d }, { color: m })
          ),
          va(
            n,
            s,
            "text",
            { color: d, background: f },
            { color: m, background: h }
          )
        ),
      });
    }, {});
  },
  I5 = (n) =>
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              { color: n.defaultColor, boxShadow: n.defaultShadow },
              $c(
                n,
                n.solidTextColor,
                n.colorBgSolid,
                { color: n.solidTextColor, background: n.colorBgSolidHover },
                { color: n.solidTextColor, background: n.colorBgSolidActive }
              )
            ),
            qc(n)
          ),
          Vc(
            n,
            n.colorFillTertiary,
            { background: n.colorFillSecondary },
            { background: n.colorFill }
          )
        ),
        Bc(
          n.componentCls,
          n.ghostBg,
          n.defaultGhostColor,
          n.defaultGhostBorderColor,
          n.colorTextDisabled,
          n.colorBorder
        )
      ),
      va(
        n,
        n.textTextColor,
        "link",
        { color: n.colorLinkHover, background: n.linkHoverBg },
        { color: n.colorLinkActive }
      )
    ),
  Q5 = (n) =>
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                { color: n.colorPrimary, boxShadow: n.primaryShadow },
                Pc(
                  n,
                  n.colorPrimary,
                  n.colorBgContainer,
                  {
                    color: n.colorPrimaryTextHover,
                    borderColor: n.colorPrimaryHover,
                    background: n.colorBgContainer,
                  },
                  {
                    color: n.colorPrimaryTextActive,
                    borderColor: n.colorPrimaryActive,
                    background: n.colorBgContainer,
                  }
                )
              ),
              qc(n)
            ),
            Vc(
              n,
              n.colorPrimaryBg,
              { background: n.colorPrimaryBgHover },
              { background: n.colorPrimaryBorder }
            )
          ),
          va(
            n,
            n.colorPrimaryText,
            "text",
            { color: n.colorPrimaryTextHover, background: n.colorPrimaryBg },
            {
              color: n.colorPrimaryTextActive,
              background: n.colorPrimaryBorder,
            }
          )
        ),
        va(
          n,
          n.colorPrimaryText,
          "link",
          { color: n.colorPrimaryTextHover, background: n.linkHoverBg },
          { color: n.colorPrimaryTextActive }
        )
      ),
      Bc(
        n.componentCls,
        n.ghostBg,
        n.colorPrimary,
        n.colorPrimary,
        n.colorTextDisabled,
        n.colorBorder,
        { color: n.colorPrimaryHover, borderColor: n.colorPrimaryHover },
        { color: n.colorPrimaryActive, borderColor: n.colorPrimaryActive }
      )
    ),
  Z5 = (n) =>
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  { color: n.colorError, boxShadow: n.dangerShadow },
                  $c(
                    n,
                    n.dangerColor,
                    n.colorError,
                    { background: n.colorErrorHover },
                    { background: n.colorErrorActive }
                  )
                ),
                Pc(
                  n,
                  n.colorError,
                  n.colorBgContainer,
                  {
                    color: n.colorErrorHover,
                    borderColor: n.colorErrorBorderHover,
                  },
                  { color: n.colorErrorActive, borderColor: n.colorErrorActive }
                )
              ),
              qc(n)
            ),
            Vc(
              n,
              n.colorErrorBg,
              { background: n.colorErrorBgFilledHover },
              { background: n.colorErrorBgActive }
            )
          ),
          va(
            n,
            n.colorError,
            "text",
            { color: n.colorErrorHover, background: n.colorErrorBg },
            { color: n.colorErrorHover, background: n.colorErrorBgActive }
          )
        ),
        va(
          n,
          n.colorError,
          "link",
          { color: n.colorErrorHover },
          { color: n.colorErrorActive }
        )
      ),
      Bc(
        n.componentCls,
        n.ghostBg,
        n.colorError,
        n.colorError,
        n.colorTextDisabled,
        n.colorBorder,
        { color: n.colorErrorHover, borderColor: n.colorErrorHover },
        { color: n.colorErrorActive, borderColor: n.colorErrorActive }
      )
    ),
  K5 = (n) =>
    Object.assign(
      Object.assign(
        {},
        va(
          n,
          n.colorLink,
          "link",
          { color: n.colorLinkHover },
          { color: n.colorLinkActive }
        )
      ),
      Bc(
        n.componentCls,
        n.ghostBg,
        n.colorInfo,
        n.colorInfo,
        n.colorTextDisabled,
        n.colorBorder,
        { color: n.colorInfoHover, borderColor: n.colorInfoHover },
        { color: n.colorInfoActive, borderColor: n.colorInfoActive }
      )
    ),
  J5 = (n) => {
    const { componentCls: r } = n;
    return Object.assign(
      {
        [`${r}-color-default`]: I5(n),
        [`${r}-color-primary`]: Q5(n),
        [`${r}-color-dangerous`]: Z5(n),
        [`${r}-color-link`]: K5(n),
      },
      F5(n)
    );
  },
  W5 = (n) =>
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            {},
            Pc(
              n,
              n.defaultBorderColor,
              n.defaultBg,
              {
                color: n.defaultHoverColor,
                borderColor: n.defaultHoverBorderColor,
                background: n.defaultHoverBg,
              },
              {
                color: n.defaultActiveColor,
                borderColor: n.defaultActiveBorderColor,
                background: n.defaultActiveBg,
              }
            )
          ),
          va(
            n,
            n.textTextColor,
            "text",
            { color: n.textTextHoverColor, background: n.textHoverBg },
            { color: n.textTextActiveColor, background: n.colorBgTextActive }
          )
        ),
        $c(
          n,
          n.primaryColor,
          n.colorPrimary,
          { background: n.colorPrimaryHover, color: n.primaryColor },
          { background: n.colorPrimaryActive, color: n.primaryColor }
        )
      ),
      va(
        n,
        n.colorLink,
        "link",
        { color: n.colorLinkHover, background: n.linkHoverBg },
        { color: n.colorLinkActive }
      )
    ),
  Qh = function (n) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const {
      componentCls: o,
      controlHeight: l,
      fontSize: s,
      borderRadius: f,
      buttonPaddingHorizontal: d,
      iconCls: v,
      buttonPaddingVertical: h,
      buttonIconOnlyFontSize: m,
    } = n;
    return [
      {
        [r]: {
          fontSize: s,
          height: l,
          padding: `${tl(h)} ${tl(d)}`,
          borderRadius: f,
          [`&${o}-icon-only`]: { width: l, [v]: { fontSize: m } },
        },
      },
      { [`${o}${o}-circle${r}`]: V5(n) },
      { [`${o}${o}-round${r}`]: k5(n) },
    ];
  },
  e_ = (n) => {
    const r = al(n, { fontSize: n.contentFontSize });
    return Qh(r, n.componentCls);
  },
  t_ = (n) => {
    const r = al(n, {
      controlHeight: n.controlHeightSM,
      fontSize: n.contentFontSizeSM,
      padding: n.paddingXS,
      buttonPaddingHorizontal: n.paddingInlineSM,
      buttonPaddingVertical: 0,
      borderRadius: n.borderRadiusSM,
      buttonIconOnlyFontSize: n.onlyIconSizeSM,
    });
    return Qh(r, `${n.componentCls}-sm`);
  },
  n_ = (n) => {
    const r = al(n, {
      controlHeight: n.controlHeightLG,
      fontSize: n.contentFontSizeLG,
      buttonPaddingHorizontal: n.paddingInlineLG,
      buttonPaddingVertical: 0,
      borderRadius: n.borderRadiusLG,
      buttonIconOnlyFontSize: n.onlyIconSizeLG,
    });
    return Qh(r, `${n.componentCls}-lg`);
  },
  a_ = (n) => {
    const { componentCls: r } = n;
    return { [r]: { [`&${r}-block`]: { width: "100%" } } };
  },
  r_ = $1(
    "Button",
    (n) => {
      const r = vb(n);
      return [q5(r), e_(r), t_(r), n_(r), a_(r), J5(r), W5(r), M5(r)];
    },
    pb,
    {
      unitless: {
        fontWeight: !0,
        contentLineHeight: !0,
        contentLineHeightSM: !0,
        contentLineHeightLG: !0,
      },
    }
  );
function l_(n, r, o) {
  const { focusElCls: l, focus: s, borderElCls: f } = o,
    d = f ? "> *" : "",
    v = ["hover", s ? "focus" : null, "active"]
      .filter(Boolean)
      .map((h) => `&:${h} ${d}`)
      .join(",");
  return {
    [`&-item:not(${r}-last-item)`]: {
      marginInlineEnd: n.calc(n.lineWidth).mul(-1).equal(),
    },
    "&-item": Object.assign(
      Object.assign(
        { [v]: { zIndex: 2 } },
        l ? { [`&${l}`]: { zIndex: 2 } } : {}
      ),
      { [`&[disabled] ${d}`]: { zIndex: 0 } }
    ),
  };
}
function o_(n, r, o) {
  const { borderElCls: l } = o,
    s = l ? `> ${l}` : "";
  return {
    [`&-item:not(${r}-first-item):not(${r}-last-item) ${s}`]: {
      borderRadius: 0,
    },
    [`&-item:not(${r}-last-item)${r}-first-item`]: {
      [`& ${s}, &${n}-sm ${s}, &${n}-lg ${s}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
      },
    },
    [`&-item:not(${r}-first-item)${r}-last-item`]: {
      [`& ${s}, &${n}-sm ${s}, &${n}-lg ${s}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0,
      },
    },
  };
}
function i_(n) {
  let r =
    arguments.length > 1 && arguments[1] !== void 0
      ? arguments[1]
      : { focus: !0 };
  const { componentCls: o } = n,
    l = `${o}-compact`;
  return { [l]: Object.assign(Object.assign({}, l_(n, l, r)), o_(o, l, r)) };
}
function s_(n, r) {
  return {
    [`&-item:not(${r}-last-item)`]: {
      marginBottom: n.calc(n.lineWidth).mul(-1).equal(),
    },
    "&-item": {
      "&:hover,&:focus,&:active": { zIndex: 2 },
      "&[disabled]": { zIndex: 0 },
    },
  };
}
function c_(n, r) {
  return {
    [`&-item:not(${r}-first-item):not(${r}-last-item)`]: { borderRadius: 0 },
    [`&-item${r}-first-item:not(${r}-last-item)`]: {
      [`&, &${n}-sm, &${n}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0,
      },
    },
    [`&-item${r}-last-item:not(${r}-first-item)`]: {
      [`&, &${n}-sm, &${n}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0,
      },
    },
  };
}
function u_(n) {
  const r = `${n.componentCls}-compact-vertical`;
  return {
    [r]: Object.assign(Object.assign({}, s_(n, r)), c_(n.componentCls, r)),
  };
}
const f_ = (n) => {
    const { componentCls: r, colorPrimaryHover: o, lineWidth: l, calc: s } = n,
      f = s(l).mul(-1).equal(),
      d = (v) => {
        const h = `${r}-compact${
          v ? "-vertical" : ""
        }-item${r}-primary:not([disabled])`;
        return {
          [`${h} + ${h}::before`]: {
            position: "absolute",
            top: v ? f : 0,
            insetInlineStart: v ? 0 : f,
            backgroundColor: o,
            content: '""',
            width: v ? "100%" : l,
            height: v ? l : "100%",
          },
        };
      };
    return Object.assign(Object.assign({}, d()), d(!0));
  },
  d_ = h6(
    ["Button", "compact"],
    (n) => {
      const r = vb(n);
      return [i_(r), u_(r), f_(r)];
    },
    pb
  );
var h_ = function (n, r) {
  var o = {};
  for (var l in n)
    Object.prototype.hasOwnProperty.call(n, l) &&
      r.indexOf(l) < 0 &&
      (o[l] = n[l]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, l = Object.getOwnPropertySymbols(n); s < l.length; s++)
      r.indexOf(l[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(n, l[s]) &&
        (o[l[s]] = n[l[s]]);
  return o;
};
function m_(n) {
  if (typeof n == "object" && n) {
    let r = n == null ? void 0 : n.delay;
    return (
      (r = !Number.isNaN(r) && typeof r == "number" ? r : 0),
      { loading: r <= 0, delay: r }
    );
  }
  return { loading: !!n, delay: 0 };
}
const v_ = {
    default: ["default", "outlined"],
    primary: ["primary", "solid"],
    dashed: ["default", "dashed"],
    link: ["link", "link"],
    text: ["default", "text"],
  },
  p_ = fe.forwardRef((n, r) => {
    var o, l;
    const {
        loading: s = !1,
        prefixCls: f,
        color: d,
        variant: v,
        type: h,
        danger: m = !1,
        shape: p = "default",
        size: y,
        styles: b,
        disabled: T,
        className: w,
        rootClassName: O,
        children: E,
        icon: H,
        iconPosition: j = "start",
        ghost: D = !1,
        block: U = !1,
        htmlType: R = "button",
        classNames: F,
        style: _ = {},
        autoInsertSpace: q,
        autoFocus: K,
      } = n,
      B = h_(n, [
        "loading",
        "prefixCls",
        "color",
        "variant",
        "type",
        "danger",
        "shape",
        "size",
        "styles",
        "disabled",
        "className",
        "rootClassName",
        "children",
        "icon",
        "iconPosition",
        "ghost",
        "block",
        "htmlType",
        "classNames",
        "style",
        "autoInsertSpace",
        "autoFocus",
      ]),
      $ = h || "default",
      { button: k } = fe.useContext(yn),
      [ee, te] = x.useMemo(() => {
        if (d && v) return [d, v];
        if (h || m) {
          const mt = v_[$] || [];
          return m ? ["danger", mt[1]] : mt;
        }
        return k != null && k.color && k != null && k.variant
          ? [k.color, k.variant]
          : ["default", "outlined"];
      }, [
        h,
        d,
        v,
        m,
        k == null ? void 0 : k.variant,
        k == null ? void 0 : k.color,
      ]),
      z = ee === "danger" ? "dangerous" : ee,
      {
        getPrefixCls: W,
        direction: J,
        autoInsertSpace: ve,
        className: A,
        style: Z,
        classNames: le,
        styles: ie,
      } = U4("button"),
      ue = (o = q ?? ve) !== null && o !== void 0 ? o : !0,
      ce = W("btn", f),
      [me, Le, De] = r_(ce),
      ut = x.useContext(yc),
      st = T ?? ut,
      Ft = x.useContext(mb),
      He = x.useMemo(() => m_(s), [s]),
      [Ie, Mt] = x.useState(He.loading),
      [un, ft] = x.useState(!1),
      dt = x.useRef(null),
      nn = c3(r, dt),
      It = x.Children.count(E) === 1 && !H && !_d(te),
      qt = x.useRef(!0);
    fe.useEffect(
      () => (
        (qt.current = !1),
        () => {
          qt.current = !0;
        }
      ),
      []
    ),
      x.useEffect(() => {
        let mt = null;
        He.delay > 0
          ? (mt = setTimeout(() => {
              (mt = null), Mt(!0);
            }, He.delay))
          : Mt(He.loading);
        function Bt() {
          mt && (clearTimeout(mt), (mt = null));
        }
        return Bt;
      }, [He]),
      x.useEffect(() => {
        if (!dt.current || !ue) return;
        const mt = dt.current.textContent || "";
        It && Sh(mt) ? un || ft(!0) : un && ft(!1);
      }),
      x.useEffect(() => {
        K && dt.current && dt.current.focus();
      }, []);
    const Ke = fe.useCallback(
        (mt) => {
          var Bt;
          if (Ie || st) {
            mt.preventDefault();
            return;
          }
          (Bt = n.onClick) === null ||
            Bt === void 0 ||
            Bt.call(n, ("href" in n, mt));
        },
        [n.onClick, Ie, st]
      ),
      { compactSize: ht, compactItemClassnames: Tt } = O5(ce, J),
      xt = { large: "lg", small: "sm", middle: void 0 },
      pt = T5((mt) => {
        var Bt, la;
        return (la = (Bt = y ?? ht) !== null && Bt !== void 0 ? Bt : Ft) !==
          null && la !== void 0
          ? la
          : mt;
      }),
      an = pt && (l = xt[pt]) !== null && l !== void 0 ? l : "",
      jt = Ie ? "loading" : H,
      St = v5(B, ["navigate"]),
      rt = Nt(
        ce,
        Le,
        De,
        {
          [`${ce}-${p}`]: p !== "default" && p,
          [`${ce}-${$}`]: $,
          [`${ce}-dangerous`]: m,
          [`${ce}-color-${z}`]: z,
          [`${ce}-variant-${te}`]: te,
          [`${ce}-${an}`]: an,
          [`${ce}-icon-only`]: !E && E !== 0 && !!jt,
          [`${ce}-background-ghost`]: D && !_d(te),
          [`${ce}-loading`]: Ie,
          [`${ce}-two-chinese-chars`]: un && ue && !Ie,
          [`${ce}-block`]: U,
          [`${ce}-rtl`]: J === "rtl",
          [`${ce}-icon-end`]: j === "end",
        },
        Tt,
        w,
        O,
        A
      ),
      pa = Object.assign(Object.assign({}, Z), _),
      Fn = Nt(F == null ? void 0 : F.icon, le.icon),
      Xa = Object.assign(
        Object.assign({}, (b == null ? void 0 : b.icon) || {}),
        ie.icon || {}
      ),
      Vt =
        H && !Ie
          ? fe.createElement(Ch, { prefixCls: ce, className: Fn, style: Xa }, H)
          : s && typeof s == "object" && s.icon
          ? fe.createElement(
              Ch,
              { prefixCls: ce, className: Fn, style: Xa },
              s.icon
            )
          : fe.createElement(N5, {
              existIcon: !!H,
              prefixCls: ce,
              loading: Ie,
              mount: qt.current,
            }),
      Rn = E || E === 0 ? A5(E, It && ue) : null;
    if (St.href !== void 0)
      return me(
        fe.createElement(
          "a",
          Object.assign({}, St, {
            className: Nt(rt, { [`${ce}-disabled`]: st }),
            href: st ? void 0 : St.href,
            style: pa,
            onClick: Ke,
            ref: nn,
            tabIndex: st ? -1 : 0,
          }),
          Vt,
          Rn
        )
      );
    let Wt = fe.createElement(
      "button",
      Object.assign({}, B, {
        type: R,
        className: rt,
        style: pa,
        onClick: Ke,
        disabled: st,
        ref: nn,
      }),
      Vt,
      Rn,
      Tt && fe.createElement(d_, { prefixCls: ce })
    );
    return (
      _d(te) ||
        (Wt = fe.createElement(E5, { component: "Button", disabled: Ie }, Wt)),
      me(Wt)
    );
  }),
  fi = p_;
fi.Group = j5;
fi.__ANT_BUTTON = !0;
const g_ = fe.createContext({});
let kn = null,
  Fr = (n) => n(),
  Si = [],
  Ci = {};
function my() {
  const { getContainer: n, duration: r, rtl: o, maxCount: l, top: s } = Ci,
    f = (n == null ? void 0 : n()) || document.body;
  return { getContainer: () => f, duration: r, rtl: o, maxCount: l, top: s };
}
const y_ = fe.forwardRef((n, r) => {
    const { messageConfig: o, sync: l } = n,
      { getPrefixCls: s } = x.useContext(yn),
      f = Ci.prefixCls || s("message"),
      d = x.useContext(g_),
      [v, h] = ub(
        Object.assign(
          Object.assign(Object.assign({}, o), { prefixCls: f }),
          d.message
        )
      );
    return (
      fe.useImperativeHandle(r, () => {
        const m = Object.assign({}, v);
        return (
          Object.keys(m).forEach((p) => {
            m[p] = function () {
              return l(), v[p].apply(v, arguments);
            };
          }),
          { instance: m, sync: l }
        );
      }),
      h
    );
  }),
  b_ = fe.forwardRef((n, r) => {
    const [o, l] = fe.useState(my),
      s = () => {
        l(my);
      };
    fe.useEffect(s, []);
    const f = I6(),
      d = f.getRootPrefixCls(),
      v = f.getIconPrefixCls(),
      h = f.getTheme(),
      m = fe.createElement(y_, { ref: r, sync: s, messageConfig: o });
    return fe.createElement(
      to,
      { prefixCls: d, iconPrefixCls: v, theme: h },
      f.holderRender ? f.holderRender(m) : m
    );
  });
function kc() {
  if (!kn) {
    const n = document.createDocumentFragment(),
      r = { fragment: n };
    (kn = r),
      Fr(() => {
        db()(
          fe.createElement(b_, {
            ref: (l) => {
              const { instance: s, sync: f } = l || {};
              Promise.resolve().then(() => {
                !r.instance && s && ((r.instance = s), (r.sync = f), kc());
              });
            },
          }),
          n
        );
      });
    return;
  }
  kn.instance &&
    (Si.forEach((n) => {
      const { type: r, skipped: o } = n;
      if (!o)
        switch (r) {
          case "open": {
            Fr(() => {
              const l = kn.instance.open(
                Object.assign(Object.assign({}, Ci), n.config)
              );
              l == null || l.then(n.resolve), n.setCloseFn(l);
            });
            break;
          }
          case "destroy":
            Fr(() => {
              kn == null || kn.instance.destroy(n.key);
            });
            break;
          default:
            Fr(() => {
              var l;
              const s = (l = kn.instance)[r].apply(l, sn(n.args));
              s == null || s.then(n.resolve), n.setCloseFn(s);
            });
        }
    }),
    (Si = []));
}
function x_(n) {
  (Ci = Object.assign(Object.assign({}, Ci), n)),
    Fr(() => {
      var r;
      (r = kn == null ? void 0 : kn.sync) === null ||
        r === void 0 ||
        r.call(kn);
    });
}
function S_(n) {
  const r = Ih((o) => {
    let l;
    const s = {
      type: "open",
      config: n,
      resolve: o,
      setCloseFn: (f) => {
        l = f;
      },
    };
    return (
      Si.push(s),
      () => {
        l
          ? Fr(() => {
              l();
            })
          : (s.skipped = !0);
      }
    );
  });
  return kc(), r;
}
function C_(n, r) {
  const o = Ih((l) => {
    let s;
    const f = {
      type: n,
      args: r,
      resolve: l,
      setCloseFn: (d) => {
        s = d;
      },
    };
    return (
      Si.push(f),
      () => {
        s
          ? Fr(() => {
              s();
            })
          : (f.skipped = !0);
      }
    );
  });
  return kc(), o;
}
const E_ = (n) => {
    Si.push({ type: "destroy", key: n }), kc();
  },
  T_ = ["success", "info", "warning", "error", "loading"],
  __ = {
    open: S_,
    destroy: E_,
    config: x_,
    useMessage: a5,
    _InternalPanelDoNotUseOrYouWillBeFired: QT,
  },
  yb = __;
T_.forEach((n) => {
  yb[n] = function () {
    for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
      o[l] = arguments[l];
    return C_(n, o);
  };
});
const O_ = (n) => {
  const r = n != null && n.algorithm ? mc(n.algorithm) : Vh,
    o = Object.assign(Object.assign({}, Kl), n == null ? void 0 : n.token);
  return f1(o, { override: n == null ? void 0 : n.token }, r, Xh);
};
function w_(n) {
  const { sizeUnit: r, sizeStep: o } = n,
    l = o - 2;
  return {
    sizeXXL: r * (l + 10),
    sizeXL: r * (l + 6),
    sizeLG: r * (l + 2),
    sizeMD: r * (l + 2),
    sizeMS: r * (l + 1),
    size: r * l,
    sizeSM: r * l,
    sizeXS: r * (l - 1),
    sizeXXS: r * (l - 1),
  };
}
const j_ = (n, r) => {
    const o = r ?? zc(n),
      l = o.fontSizeSM,
      s = o.controlHeight - 4;
    return Object.assign(
      Object.assign(
        Object.assign(Object.assign(Object.assign({}, o), w_(r ?? n)), N1(l)),
        { controlHeight: s }
      ),
      A1(Object.assign(Object.assign({}, o), { controlHeight: s }))
    );
  },
  Vn = (n, r) => new gt(n).setA(r).toRgbString(),
  ql = (n, r) => new gt(n).lighten(r).toHexString(),
  R_ = (n) => {
    const r = nl(n, { theme: "dark" });
    return {
      1: r[0],
      2: r[1],
      3: r[2],
      4: r[3],
      5: r[6],
      6: r[5],
      7: r[4],
      8: r[6],
      9: r[5],
      10: r[4],
    };
  },
  A_ = (n, r) => {
    const o = n || "#000",
      l = r || "#fff";
    return {
      colorBgBase: o,
      colorTextBase: l,
      colorText: Vn(l, 0.85),
      colorTextSecondary: Vn(l, 0.65),
      colorTextTertiary: Vn(l, 0.45),
      colorTextQuaternary: Vn(l, 0.25),
      colorFill: Vn(l, 0.18),
      colorFillSecondary: Vn(l, 0.12),
      colorFillTertiary: Vn(l, 0.08),
      colorFillQuaternary: Vn(l, 0.04),
      colorBgSolid: Vn(l, 0.95),
      colorBgSolidHover: Vn(l, 1),
      colorBgSolidActive: Vn(l, 0.9),
      colorBgElevated: ql(o, 12),
      colorBgContainer: ql(o, 8),
      colorBgLayout: ql(o, 0),
      colorBgSpotlight: ql(o, 26),
      colorBgBlur: Vn(l, 0.04),
      colorBorder: ql(o, 26),
      colorBorderSecondary: ql(o, 19),
    };
  },
  N_ = (n, r) => {
    const o = Object.keys(qh)
        .map((s) => {
          const f = nl(n[s], { theme: "dark" });
          return Array.from({ length: 10 }, () => 1).reduce(
            (d, v, h) => (
              (d[`${s}-${h + 1}`] = f[h]), (d[`${s}${h + 1}`] = f[h]), d
            ),
            {}
          );
        })
        .reduce(
          (s, f) => ((s = Object.assign(Object.assign({}, s), f)), s),
          {}
        ),
      l = r ?? zc(n);
    return Object.assign(
      Object.assign(Object.assign({}, l), o),
      R1(n, { generateColorPalettes: R_, generateNeutralColorPalettes: A_ })
    );
  };
function M_() {
  const [n, r, o] = rl();
  return { theme: n, token: r, hashId: o };
}
const D_ = {
    defaultSeed: gi.token,
    useToken: M_,
    defaultAlgorithm: zc,
    darkAlgorithm: N_,
    compactAlgorithm: j_,
    getDesignToken: O_,
    defaultConfig: gi,
    _internalContext: kh,
  },
  z_ = () => {
    D_.useToken();
    const [n, r] = x.useState(0),
      o = () => {
        r(n + 1);
      },
      l = () => {
        r(n - 1);
      },
      s = [
        {
          title: "User Info",
          content: "This is the content for the first step: User Info.",
        },
        {
          title: "Create Account",
          content: "This is the content for the second step: Create Account.",
        },
      ];
    s.map((v) => ({
      key: v.title,
      title: v.title,
      status:
        n === s.indexOf(v) ? "process" : n > s.indexOf(v) ? "finish" : "wait",
    }));
    const f = {
        width: "100%",
        height: "4px",
        backgroundColor: "red",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      d = (v) => ({
        width: v ? "25px" : "20px",
        height: v ? "25px" : "20px",
        borderRadius: "50%",
        backgroundColor: "red",
        position: "absolute",
        top: "-8px",
      });
    return S.jsxs(S.Fragment, {
      children: [
        S.jsx("h2", { children: "Create your Account" }),
        S.jsxs("div", {
          style: f,
          children: [
            S.jsx("div", { style: { ...d(n === 0), left: "0%" } }),
            S.jsx("div", { style: { ...d(n === 1), right: "0%" } }),
          ],
        }),
        S.jsx("div", {
          style: {
            marginTop: 20,
            display: "flex",
            justifyContent: "space-between",
          },
          children: s.map((v, h) =>
            S.jsxs(
              "div",
              {
                style: { textAlign: "center" },
                children: [
                  S.jsx("div", {
                    style: { fontWeight: n === h ? "bold" : "normal" },
                    children: v.title,
                  }),
                  n >= h &&
                    S.jsx("div", {
                      style: {
                        width: "30px",
                        height: "3px",
                        backgroundColor: "red",
                        margin: "5px auto",
                      },
                    }),
                ],
              },
              h
            )
          ),
        }),
        S.jsx("div", {
          style: {
            marginTop: "20px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#f7f7f7",
          },
          children: s[n].content,
        }),
        S.jsx("div", {
          style: { marginTop: 24 },
          children: S.jsxs("div", {
            style: { display: "flex", justifyContent: "flex-start" },
            children: [
              n > 0 &&
                S.jsx(fi, {
                  style: { marginRight: 8 },
                  onClick: l,
                  children: "Previous",
                }),
              n < s.length - 1
                ? S.jsx(fi, { type: "primary", onClick: o, children: "Next" })
                : S.jsx(fi, {
                    type: "primary",
                    onClick: () => yb.success("Processing complete!"),
                    children: "Done",
                  }),
            ],
          }),
        }),
      ],
    });
  },
  L_ = zC(
    Bd(
      S.jsxs(Pt, {
        path: "/",
        element: S.jsx(iE, {}),
        children: [
          S.jsx(Pt, { index: !0, path: "/", element: S.jsx(sg, {}) }),
          S.jsx(Pt, { index: !0, path: "/", element: S.jsx(sg, {}) }),
          S.jsx(Pt, { index: !0, path: "/register2", element: S.jsx(qE, {}) }),
          S.jsx(Pt, { path: "/inviteuser", element: S.jsx(gE, {}) }),
          S.jsx(Pt, { path: "/demo", element: S.jsx(dE, {}) }),
          S.jsx(Pt, { path: "/password", element: S.jsx(SE, {}) }),
          S.jsx(Pt, { path: "/regsuccess", element: S.jsx(VE, {}) }),
          S.jsx(Pt, { path: "/demo2", element: S.jsx(hE, {}) }),
          S.jsx(Pt, { path: "/login", element: S.jsx(xE, {}) }),
          S.jsx(Pt, { path: "/demo3", element: S.jsx(vE, {}) }),
          S.jsx(Pt, { path: "/demo5", element: S.jsx(z_, {}) }),
          S.jsx(Pt, {
            path: "/dashboard",
            element: S.jsx(GE, { children: S.jsx(fE, {}) }),
          }),
          S.jsx(Pt, {
            path: "/companyregistration",
            element: S.jsx(kE, { children: S.jsx(cE, {}) }),
          }),
          S.jsx(Pt, { path: "/companyregSuc", element: S.jsx(uE, {}) }),
          S.jsx(Pt, { path: "/companydata", element: S.jsx(sE, {}) }),
          S.jsx(Pt, { path: "/demo4", element: S.jsx(XE, {}) }),
          S.jsx(Pt, { path: "*", element: S.jsx(Error, {}) }),
        ],
      })
    )
  ),
  H_ = () =>
    S.jsx("div", {
      className: "h-[100vh]",
      children: S.jsx(VC, { router: L_ }),
    });
M2.createRoot(document.getElementById("root")).render(
  S.jsx(x.StrictMode, {
    children: S.jsxs(bE, {
      children: [
        S.jsx(H_, {}),
        S.jsx(Th, {
          position: "bottom-left",
          autoClose: 2e3,
          hideProgressBar: !1,
          newestOnTop: !1,
          closeOnClick: !1,
          rtl: !1,
          pauseOnFocusLoss: !0,
          draggable: !0,
          pauseOnHover: !0,
          theme: "colored",
        }),
      ],
    }),
  })
);
