function ay(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in e)) {
          const s = Object.getOwnPropertyDescriptor(r, o);
          s &&
            Object.defineProperty(
              e,
              o,
              s.get ? s : { enumerable: !0, get: () => r[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === 'childList')
        for (const i of s.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const s = {};
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (s.credentials = 'omit')
          : (s.credentials = 'same-origin'),
      s
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = n(o);
    fetch(o.href, s);
  }
})();
function Ep(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var Pp = { exports: {} },
  ka = {},
  Tp = { exports: {} },
  de = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Os = Symbol.for('react.element'),
  ly = Symbol.for('react.portal'),
  uy = Symbol.for('react.fragment'),
  cy = Symbol.for('react.strict_mode'),
  dy = Symbol.for('react.profiler'),
  fy = Symbol.for('react.provider'),
  py = Symbol.for('react.context'),
  hy = Symbol.for('react.forward_ref'),
  my = Symbol.for('react.suspense'),
  vy = Symbol.for('react.memo'),
  gy = Symbol.for('react.lazy'),
  Ed = Symbol.iterator;
function yy(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ed && e[Ed]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Rp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Np = Object.assign,
  Op = {};
function wo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Op),
    (this.updater = n || Rp);
}
wo.prototype.isReactComponent = {};
wo.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
wo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Ap() {}
Ap.prototype = wo.prototype;
function ic(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Op),
    (this.updater = n || Rp);
}
var ac = (ic.prototype = new Ap());
ac.constructor = ic;
Np(ac, wo.prototype);
ac.isPureReactComponent = !0;
var Pd = Array.isArray,
  Mp = Object.prototype.hasOwnProperty,
  lc = { current: null },
  Dp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Lp(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (s = '' + t.key),
    t))
      Mp.call(t, r) && !Dp.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: Os,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: lc.current,
  };
}
function xy(e, t) {
  return {
    $$typeof: Os,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function uc(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Os;
}
function wy(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Td = /\/+/g;
function ol(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? wy('' + e.key)
    : t.toString(36);
}
function pi(e, t, n, r, o) {
  var s = typeof e;
  (s === 'undefined' || s === 'boolean') && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (s) {
      case 'string':
      case 'number':
        i = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Os:
          case ly:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === '' ? '.' + ol(i, 0) : r),
      Pd(o)
        ? ((n = ''),
          e != null && (n = e.replace(Td, '$&/') + '/'),
          pi(o, t, n, '', function (u) {
            return u;
          }))
        : o != null &&
          (uc(o) &&
            (o = xy(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ''
                  : ('' + o.key).replace(Td, '$&/') + '/') +
                e,
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === '' ? '.' : r + ':'), Pd(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var l = r + ol(s, a);
      i += pi(s, t, n, l, o);
    }
  else if (((l = yy(e)), typeof l == 'function'))
    for (e = l.call(e), a = 0; !(s = e.next()).done; )
      (s = s.value), (l = r + ol(s, a++)), (i += pi(s, t, n, l, o));
  else if (s === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    );
  return i;
}
function Bs(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    pi(e, r, '', '', function (s) {
      return t.call(n, s, o++);
    }),
    r
  );
}
function _y(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var nt = { current: null },
  hi = { transition: null },
  ky = {
    ReactCurrentDispatcher: nt,
    ReactCurrentBatchConfig: hi,
    ReactCurrentOwner: lc,
  };
function Ip() {
  throw Error('act(...) is not supported in production builds of React.');
}
de.Children = {
  map: Bs,
  forEach: function (e, t, n) {
    Bs(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Bs(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Bs(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!uc(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.',
      );
    return e;
  },
};
de.Component = wo;
de.Fragment = uy;
de.Profiler = dy;
de.PureComponent = ic;
de.StrictMode = cy;
de.Suspense = my;
de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ky;
de.act = Ip;
de.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.',
    );
  var r = Np({}, e.props),
    o = e.key,
    s = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (i = lc.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Mp.call(t, l) &&
        !Dp.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Os, type: e.type, key: o, ref: s, props: r, _owner: i };
};
de.createContext = function (e) {
  return (
    (e = {
      $$typeof: py,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: fy, _context: e }),
    (e.Consumer = e)
  );
};
de.createElement = Lp;
de.createFactory = function (e) {
  var t = Lp.bind(null, e);
  return (t.type = e), t;
};
de.createRef = function () {
  return { current: null };
};
de.forwardRef = function (e) {
  return { $$typeof: hy, render: e };
};
de.isValidElement = uc;
de.lazy = function (e) {
  return { $$typeof: gy, _payload: { _status: -1, _result: e }, _init: _y };
};
de.memo = function (e, t) {
  return { $$typeof: vy, type: e, compare: t === void 0 ? null : t };
};
de.startTransition = function (e) {
  var t = hi.transition;
  hi.transition = {};
  try {
    e();
  } finally {
    hi.transition = t;
  }
};
de.unstable_act = Ip;
de.useCallback = function (e, t) {
  return nt.current.useCallback(e, t);
};
de.useContext = function (e) {
  return nt.current.useContext(e);
};
de.useDebugValue = function () {};
de.useDeferredValue = function (e) {
  return nt.current.useDeferredValue(e);
};
de.useEffect = function (e, t) {
  return nt.current.useEffect(e, t);
};
de.useId = function () {
  return nt.current.useId();
};
de.useImperativeHandle = function (e, t, n) {
  return nt.current.useImperativeHandle(e, t, n);
};
de.useInsertionEffect = function (e, t) {
  return nt.current.useInsertionEffect(e, t);
};
de.useLayoutEffect = function (e, t) {
  return nt.current.useLayoutEffect(e, t);
};
de.useMemo = function (e, t) {
  return nt.current.useMemo(e, t);
};
de.useReducer = function (e, t, n) {
  return nt.current.useReducer(e, t, n);
};
de.useRef = function (e) {
  return nt.current.useRef(e);
};
de.useState = function (e) {
  return nt.current.useState(e);
};
de.useSyncExternalStore = function (e, t, n) {
  return nt.current.useSyncExternalStore(e, t, n);
};
de.useTransition = function () {
  return nt.current.useTransition();
};
de.version = '18.3.1';
Tp.exports = de;
var g = Tp.exports;
const R = Ep(g),
  Sy = ay({ __proto__: null, default: R }, [g]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var by = g,
  Cy = Symbol.for('react.element'),
  Ey = Symbol.for('react.fragment'),
  Py = Object.prototype.hasOwnProperty,
  Ty = by.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ry = { key: !0, ref: !0, __self: !0, __source: !0 };
function jp(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  n !== void 0 && (s = '' + n),
    t.key !== void 0 && (s = '' + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Py.call(t, r) && !Ry.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Cy,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: Ty.current,
  };
}
ka.Fragment = Ey;
ka.jsx = jp;
ka.jsxs = jp;
Pp.exports = ka;
var b = Pp.exports,
  Zl = {},
  Fp = { exports: {} },
  _t = {},
  zp = { exports: {} },
  Vp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(O, A) {
    var V = O.length;
    O.push(A);
    e: for (; 0 < V; ) {
      var ne = (V - 1) >>> 1,
        X = O[ne];
      if (0 < o(X, A)) (O[ne] = A), (O[V] = X), (V = ne);
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var A = O[0],
      V = O.pop();
    if (V !== A) {
      O[0] = V;
      e: for (var ne = 0, X = O.length, ae = X >>> 1; ne < ae; ) {
        var ue = 2 * (ne + 1) - 1,
          Ne = O[ue],
          Me = ue + 1,
          he = O[Me];
        if (0 > o(Ne, V))
          Me < X && 0 > o(he, Ne)
            ? ((O[ne] = he), (O[Me] = V), (ne = Me))
            : ((O[ne] = Ne), (O[ue] = V), (ne = ue));
        else if (Me < X && 0 > o(he, V)) (O[ne] = he), (O[Me] = V), (ne = Me);
        else break e;
      }
    }
    return A;
  }
  function o(O, A) {
    var V = O.sortIndex - A.sortIndex;
    return V !== 0 ? V : O.id - A.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    h = 3,
    f = !1,
    v = !1,
    y = !1,
    k = typeof setTimeout == 'function' ? setTimeout : null,
    m = typeof clearTimeout == 'function' ? clearTimeout : null,
    p = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(O) {
    for (var A = n(u); A !== null; ) {
      if (A.callback === null) r(u);
      else if (A.startTime <= O)
        r(u), (A.sortIndex = A.expirationTime), t(l, A);
      else break;
      A = n(u);
    }
  }
  function _(O) {
    if (((y = !1), x(O), !v))
      if (n(l) !== null) (v = !0), Q(S);
      else {
        var A = n(u);
        A !== null && q(_, A.startTime - O);
      }
  }
  function S(O, A) {
    (v = !1), y && ((y = !1), m(N), (N = -1)), (f = !0);
    var V = h;
    try {
      for (
        x(A), d = n(l);
        d !== null && (!(d.expirationTime > A) || (O && !te()));

      ) {
        var ne = d.callback;
        if (typeof ne == 'function') {
          (d.callback = null), (h = d.priorityLevel);
          var X = ne(d.expirationTime <= A);
          (A = e.unstable_now()),
            typeof X == 'function' ? (d.callback = X) : d === n(l) && r(l),
            x(A);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var ae = !0;
      else {
        var ue = n(u);
        ue !== null && q(_, ue.startTime - A), (ae = !1);
      }
      return ae;
    } finally {
      (d = null), (h = V), (f = !1);
    }
  }
  var P = !1,
    T = null,
    N = -1,
    Z = 5,
    j = -1;
  function te() {
    return !(e.unstable_now() - j < Z);
  }
  function D() {
    if (T !== null) {
      var O = e.unstable_now();
      j = O;
      var A = !0;
      try {
        A = T(!0, O);
      } finally {
        A ? W() : ((P = !1), (T = null));
      }
    } else P = !1;
  }
  var W;
  if (typeof p == 'function')
    W = function () {
      p(D);
    };
  else if (typeof MessageChannel < 'u') {
    var Y = new MessageChannel(),
      ie = Y.port2;
    (Y.port1.onmessage = D),
      (W = function () {
        ie.postMessage(null);
      });
  } else
    W = function () {
      k(D, 0);
    };
  function Q(O) {
    (T = O), P || ((P = !0), W());
  }
  function q(O, A) {
    N = k(function () {
      O(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || f || ((v = !0), Q(S));
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (Z = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (O) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = h;
      }
      var V = h;
      h = A;
      try {
        return O();
      } finally {
        h = V;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, A) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var V = h;
      h = O;
      try {
        return A();
      } finally {
        h = V;
      }
    }),
    (e.unstable_scheduleCallback = function (O, A, V) {
      var ne = e.unstable_now();
      switch (
        (typeof V == 'object' && V !== null
          ? ((V = V.delay), (V = typeof V == 'number' && 0 < V ? ne + V : ne))
          : (V = ne),
        O)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = V + X),
        (O = {
          id: c++,
          callback: A,
          priorityLevel: O,
          startTime: V,
          expirationTime: X,
          sortIndex: -1,
        }),
        V > ne
          ? ((O.sortIndex = V),
            t(u, O),
            n(l) === null &&
              O === n(u) &&
              (y ? (m(N), (N = -1)) : (y = !0), q(_, V - ne)))
          : ((O.sortIndex = X), t(l, O), v || f || ((v = !0), Q(S))),
        O
      );
    }),
    (e.unstable_shouldYield = te),
    (e.unstable_wrapCallback = function (O) {
      var A = h;
      return function () {
        var V = h;
        h = A;
        try {
          return O.apply(this, arguments);
        } finally {
          h = V;
        }
      };
    });
})(Vp);
zp.exports = Vp;
var Ny = zp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oy = g,
  wt = Ny;
function L(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var $p = new Set(),
  us = {};
function Er(e, t) {
  io(e, t), io(e + 'Capture', t);
}
function io(e, t) {
  for (us[e] = t, e = 0; e < t.length; e++) $p.add(t[e]);
}
var xn = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Gl = Object.prototype.hasOwnProperty,
  Ay =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Rd = {},
  Nd = {};
function My(e) {
  return Gl.call(Nd, e)
    ? !0
    : Gl.call(Rd, e)
      ? !1
      : Ay.test(e)
        ? (Nd[e] = !0)
        : ((Rd[e] = !0), !1);
}
function Dy(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Ly(e, t, n, r) {
  if (t === null || typeof t > 'u' || Dy(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function rt(e, t, n, r, o, s, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = i);
}
var Ge = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Ge[e] = new rt(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  Ge[t] = new rt(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Ge[e] = new rt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  Ge[e] = new rt(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Ge[e] = new rt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Ge[e] = new rt(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  Ge[e] = new rt(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Ge[e] = new rt(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  Ge[e] = new rt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var cc = /[\-:]([a-z])/g;
function dc(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(cc, dc);
    Ge[t] = new rt(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(cc, dc);
    Ge[t] = new rt(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(cc, dc);
  Ge[t] = new rt(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  Ge[e] = new rt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ge.xlinkHref = new rt(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1,
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Ge[e] = new rt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function fc(e, t, n, r) {
  var o = Ge.hasOwnProperty(t) ? Ge[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Ly(t, n, o, r) && (n = null),
    r || o === null
      ? My(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Tn = Oy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Us = Symbol.for('react.element'),
  Fr = Symbol.for('react.portal'),
  zr = Symbol.for('react.fragment'),
  pc = Symbol.for('react.strict_mode'),
  Yl = Symbol.for('react.profiler'),
  Bp = Symbol.for('react.provider'),
  Up = Symbol.for('react.context'),
  hc = Symbol.for('react.forward_ref'),
  Kl = Symbol.for('react.suspense'),
  Ql = Symbol.for('react.suspense_list'),
  mc = Symbol.for('react.memo'),
  Dn = Symbol.for('react.lazy'),
  Wp = Symbol.for('react.offscreen'),
  Od = Symbol.iterator;
function Oo(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Od && e[Od]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Re = Object.assign,
  sl;
function Wo(e) {
  if (sl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      sl = (t && t[1]) || '';
    }
  return (
    `
` +
    sl +
    e
  );
}
var il = !1;
function al(e, t) {
  if (!e || il) return '';
  il = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var o = u.stack.split(`
`),
          s = r.stack.split(`
`),
          i = o.length - 1,
          a = s.length - 1;
        1 <= i && 0 <= a && o[i] !== s[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (o[i] !== s[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || o[i] !== s[a])) {
                var l =
                  `
` + o[i].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    l.includes('<anonymous>') &&
                    (l = l.replace('<anonymous>', e.displayName)),
                  l
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (il = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Wo(e) : '';
}
function Iy(e) {
  switch (e.tag) {
    case 5:
      return Wo(e.type);
    case 16:
      return Wo('Lazy');
    case 13:
      return Wo('Suspense');
    case 19:
      return Wo('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = al(e.type, !1)), e;
    case 11:
      return (e = al(e.type.render, !1)), e;
    case 1:
      return (e = al(e.type, !0)), e;
    default:
      return '';
  }
}
function Xl(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case zr:
      return 'Fragment';
    case Fr:
      return 'Portal';
    case Yl:
      return 'Profiler';
    case pc:
      return 'StrictMode';
    case Kl:
      return 'Suspense';
    case Ql:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Up:
        return (e.displayName || 'Context') + '.Consumer';
      case Bp:
        return (e._context.displayName || 'Context') + '.Provider';
      case hc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case mc:
        return (
          (t = e.displayName || null), t !== null ? t : Xl(e.type) || 'Memo'
        );
      case Dn:
        (t = e._payload), (e = e._init);
        try {
          return Xl(e(t));
        } catch {}
    }
  return null;
}
function jy(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Xl(t);
    case 8:
      return t === pc ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function Qn(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Hp(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function Fy(e) {
  var t = Hp(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          (r = '' + i), s.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = '' + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ws(e) {
  e._valueTracker || (e._valueTracker = Fy(e));
}
function Zp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Hp(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ni(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ql(e, t) {
  var n = t.checked;
  return Re({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ad(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Qn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function Gp(e, t) {
  (t = t.checked), t != null && fc(e, 'checked', t, !1);
}
function Jl(e, t) {
  Gp(e, t);
  var n = Qn(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? eu(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && eu(e, t.type, Qn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Md(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function eu(e, t, n) {
  (t !== 'number' || Ni(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Ho = Array.isArray;
function Qr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Qn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function tu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return Re({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Dd(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92));
      if (Ho(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Qn(n) };
}
function Yp(e, t) {
  var n = Qn(t.value),
    r = Qn(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Ld(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Kp(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function nu(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Kp(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var Hs,
  Qp = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        Hs = Hs || document.createElement('div'),
          Hs.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Hs.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function cs(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Xo = {
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
  zy = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Xo).forEach(function (e) {
  zy.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Xo[t] = Xo[e]);
  });
});
function Xp(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Xo.hasOwnProperty(e) && Xo[e])
      ? ('' + t).trim()
      : t + 'px';
}
function qp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = Xp(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Vy = Re(
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
  },
);
function ru(e, t) {
  if (t) {
    if (Vy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(L(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(L(62));
  }
}
function ou(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var su = null;
function vc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var iu = null,
  Xr = null,
  qr = null;
function Id(e) {
  if ((e = Ds(e))) {
    if (typeof iu != 'function') throw Error(L(280));
    var t = e.stateNode;
    t && ((t = Pa(t)), iu(e.stateNode, e.type, t));
  }
}
function Jp(e) {
  Xr ? (qr ? qr.push(e) : (qr = [e])) : (Xr = e);
}
function eh() {
  if (Xr) {
    var e = Xr,
      t = qr;
    if (((qr = Xr = null), Id(e), t)) for (e = 0; e < t.length; e++) Id(t[e]);
  }
}
function th(e, t) {
  return e(t);
}
function nh() {}
var ll = !1;
function rh(e, t, n) {
  if (ll) return e(t, n);
  ll = !0;
  try {
    return th(e, t, n);
  } finally {
    (ll = !1), (Xr !== null || qr !== null) && (nh(), eh());
  }
}
function ds(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Pa(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(L(231, t, typeof n));
  return n;
}
var au = !1;
if (xn)
  try {
    var Ao = {};
    Object.defineProperty(Ao, 'passive', {
      get: function () {
        au = !0;
      },
    }),
      window.addEventListener('test', Ao, Ao),
      window.removeEventListener('test', Ao, Ao);
  } catch {
    au = !1;
  }
function $y(e, t, n, r, o, s, i, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var qo = !1,
  Oi = null,
  Ai = !1,
  lu = null,
  By = {
    onError: function (e) {
      (qo = !0), (Oi = e);
    },
  };
function Uy(e, t, n, r, o, s, i, a, l) {
  (qo = !1), (Oi = null), $y.apply(By, arguments);
}
function Wy(e, t, n, r, o, s, i, a, l) {
  if ((Uy.apply(this, arguments), qo)) {
    if (qo) {
      var u = Oi;
      (qo = !1), (Oi = null);
    } else throw Error(L(198));
    Ai || ((Ai = !0), (lu = u));
  }
}
function Pr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function oh(e) {
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
function jd(e) {
  if (Pr(e) !== e) throw Error(L(188));
}
function Hy(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Pr(e)), t === null)) throw Error(L(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var s = o.alternate;
    if (s === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === s.child) {
      for (s = o.child; s; ) {
        if (s === n) return jd(o), e;
        if (s === r) return jd(o), t;
        s = s.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) (n = o), (r = s);
    else {
      for (var i = !1, a = o.child; a; ) {
        if (a === n) {
          (i = !0), (n = o), (r = s);
          break;
        }
        if (a === r) {
          (i = !0), (r = o), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = s.child; a; ) {
          if (a === n) {
            (i = !0), (n = s), (r = o);
            break;
          }
          if (a === r) {
            (i = !0), (r = s), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function sh(e) {
  return (e = Hy(e)), e !== null ? ih(e) : null;
}
function ih(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ih(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ah = wt.unstable_scheduleCallback,
  Fd = wt.unstable_cancelCallback,
  Zy = wt.unstable_shouldYield,
  Gy = wt.unstable_requestPaint,
  De = wt.unstable_now,
  Yy = wt.unstable_getCurrentPriorityLevel,
  gc = wt.unstable_ImmediatePriority,
  lh = wt.unstable_UserBlockingPriority,
  Mi = wt.unstable_NormalPriority,
  Ky = wt.unstable_LowPriority,
  uh = wt.unstable_IdlePriority,
  Sa = null,
  en = null;
function Qy(e) {
  if (en && typeof en.onCommitFiberRoot == 'function')
    try {
      en.onCommitFiberRoot(Sa, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var zt = Math.clz32 ? Math.clz32 : Jy,
  Xy = Math.log,
  qy = Math.LN2;
function Jy(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Xy(e) / qy) | 0)) | 0;
}
var Zs = 64,
  Gs = 4194304;
function Zo(e) {
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
function Di(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    s = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~o;
    a !== 0 ? (r = Zo(a)) : ((s &= i), s !== 0 && (r = Zo(s)));
  } else (i = n & ~o), i !== 0 ? (r = Zo(i)) : s !== 0 && (r = Zo(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (s = t & -t), o >= s || (o === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - zt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function e0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
function t0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var i = 31 - zt(s),
      a = 1 << i,
      l = o[i];
    l === -1
      ? (!(a & n) || a & r) && (o[i] = e0(a, t))
      : l <= t && (e.expiredLanes |= a),
      (s &= ~a);
  }
}
function uu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ch() {
  var e = Zs;
  return (Zs <<= 1), !(Zs & 4194240) && (Zs = 64), e;
}
function ul(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function As(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - zt(t)),
    (e[t] = n);
}
function n0(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - zt(n),
      s = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~s);
  }
}
function yc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - zt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ve = 0;
function dh(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var fh,
  xc,
  ph,
  hh,
  mh,
  cu = !1,
  Ys = [],
  $n = null,
  Bn = null,
  Un = null,
  fs = new Map(),
  ps = new Map(),
  In = [],
  r0 =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function zd(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      $n = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Bn = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Un = null;
      break;
    case 'pointerover':
    case 'pointerout':
      fs.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      ps.delete(t.pointerId);
  }
}
function Mo(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o],
      }),
      t !== null && ((t = Ds(t)), t !== null && xc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function o0(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return ($n = Mo($n, e, t, n, r, o)), !0;
    case 'dragenter':
      return (Bn = Mo(Bn, e, t, n, r, o)), !0;
    case 'mouseover':
      return (Un = Mo(Un, e, t, n, r, o)), !0;
    case 'pointerover':
      var s = o.pointerId;
      return fs.set(s, Mo(fs.get(s) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (
        (s = o.pointerId), ps.set(s, Mo(ps.get(s) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function vh(e) {
  var t = cr(e.target);
  if (t !== null) {
    var n = Pr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = oh(n)), t !== null)) {
          (e.blockedOn = t),
            mh(e.priority, function () {
              ph(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function mi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = du(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (su = r), n.target.dispatchEvent(r), (su = null);
    } else return (t = Ds(n)), t !== null && xc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Vd(e, t, n) {
  mi(e) && n.delete(t);
}
function s0() {
  (cu = !1),
    $n !== null && mi($n) && ($n = null),
    Bn !== null && mi(Bn) && (Bn = null),
    Un !== null && mi(Un) && (Un = null),
    fs.forEach(Vd),
    ps.forEach(Vd);
}
function Do(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    cu ||
      ((cu = !0),
      wt.unstable_scheduleCallback(wt.unstable_NormalPriority, s0)));
}
function hs(e) {
  function t(o) {
    return Do(o, e);
  }
  if (0 < Ys.length) {
    Do(Ys[0], e);
    for (var n = 1; n < Ys.length; n++) {
      var r = Ys[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    $n !== null && Do($n, e),
      Bn !== null && Do(Bn, e),
      Un !== null && Do(Un, e),
      fs.forEach(t),
      ps.forEach(t),
      n = 0;
    n < In.length;
    n++
  )
    (r = In[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < In.length && ((n = In[0]), n.blockedOn === null); )
    vh(n), n.blockedOn === null && In.shift();
}
var Jr = Tn.ReactCurrentBatchConfig,
  Li = !0;
function i0(e, t, n, r) {
  var o = ve,
    s = Jr.transition;
  Jr.transition = null;
  try {
    (ve = 1), wc(e, t, n, r);
  } finally {
    (ve = o), (Jr.transition = s);
  }
}
function a0(e, t, n, r) {
  var o = ve,
    s = Jr.transition;
  Jr.transition = null;
  try {
    (ve = 4), wc(e, t, n, r);
  } finally {
    (ve = o), (Jr.transition = s);
  }
}
function wc(e, t, n, r) {
  if (Li) {
    var o = du(e, t, n, r);
    if (o === null) xl(e, t, r, Ii, n), zd(e, r);
    else if (o0(o, e, t, n, r)) r.stopPropagation();
    else if ((zd(e, r), t & 4 && -1 < r0.indexOf(e))) {
      for (; o !== null; ) {
        var s = Ds(o);
        if (
          (s !== null && fh(s),
          (s = du(e, t, n, r)),
          s === null && xl(e, t, r, Ii, n),
          s === o)
        )
          break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else xl(e, t, r, null, n);
  }
}
var Ii = null;
function du(e, t, n, r) {
  if (((Ii = null), (e = vc(r)), (e = cr(e)), e !== null))
    if (((t = Pr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = oh(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ii = e), null;
}
function gh(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Yy()) {
        case gc:
          return 1;
        case lh:
          return 4;
        case Mi:
        case Ky:
          return 16;
        case uh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var zn = null,
  _c = null,
  vi = null;
function yh() {
  if (vi) return vi;
  var e,
    t = _c,
    n = t.length,
    r,
    o = 'value' in zn ? zn.value : zn.textContent,
    s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++);
  return (vi = o.slice(e, 1 < r ? 1 - r : void 0));
}
function gi(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ks() {
  return !0;
}
function $d() {
  return !1;
}
function kt(e) {
  function t(n, r, o, s, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Ks
        : $d),
      (this.isPropagationStopped = $d),
      this
    );
  }
  return (
    Re(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Ks));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ks));
      },
      persist: function () {},
      isPersistent: Ks,
    }),
    t
  );
}
var _o = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  kc = kt(_o),
  Ms = Re({}, _o, { view: 0, detail: 0 }),
  l0 = kt(Ms),
  cl,
  dl,
  Lo,
  ba = Re({}, Ms, {
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
    getModifierState: Sc,
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
      return 'movementX' in e
        ? e.movementX
        : (e !== Lo &&
            (Lo && e.type === 'mousemove'
              ? ((cl = e.screenX - Lo.screenX), (dl = e.screenY - Lo.screenY))
              : (dl = cl = 0),
            (Lo = e)),
          cl);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : dl;
    },
  }),
  Bd = kt(ba),
  u0 = Re({}, ba, { dataTransfer: 0 }),
  c0 = kt(u0),
  d0 = Re({}, Ms, { relatedTarget: 0 }),
  fl = kt(d0),
  f0 = Re({}, _o, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  p0 = kt(f0),
  h0 = Re({}, _o, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  m0 = kt(h0),
  v0 = Re({}, _o, { data: 0 }),
  Ud = kt(v0),
  g0 = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  y0 = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  x0 = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function w0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = x0[e]) ? !!t[e] : !1;
}
function Sc() {
  return w0;
}
var _0 = Re({}, Ms, {
    key: function (e) {
      if (e.key) {
        var t = g0[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = gi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? y0[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Sc,
    charCode: function (e) {
      return e.type === 'keypress' ? gi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? gi(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  k0 = kt(_0),
  S0 = Re({}, ba, {
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
  Wd = kt(S0),
  b0 = Re({}, Ms, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Sc,
  }),
  C0 = kt(b0),
  E0 = Re({}, _o, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  P0 = kt(E0),
  T0 = Re({}, ba, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  R0 = kt(T0),
  N0 = [9, 13, 27, 32],
  bc = xn && 'CompositionEvent' in window,
  Jo = null;
xn && 'documentMode' in document && (Jo = document.documentMode);
var O0 = xn && 'TextEvent' in window && !Jo,
  xh = xn && (!bc || (Jo && 8 < Jo && 11 >= Jo)),
  Hd = ' ',
  Zd = !1;
function wh(e, t) {
  switch (e) {
    case 'keyup':
      return N0.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function _h(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Vr = !1;
function A0(e, t) {
  switch (e) {
    case 'compositionend':
      return _h(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Zd = !0), Hd);
    case 'textInput':
      return (e = t.data), e === Hd && Zd ? null : e;
    default:
      return null;
  }
}
function M0(e, t) {
  if (Vr)
    return e === 'compositionend' || (!bc && wh(e, t))
      ? ((e = yh()), (vi = _c = zn = null), (Vr = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return xh && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var D0 = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
function Gd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!D0[e.type] : t === 'textarea';
}
function kh(e, t, n, r) {
  Jp(r),
    (t = ji(t, 'onChange')),
    0 < t.length &&
      ((n = new kc('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var es = null,
  ms = null;
function L0(e) {
  Mh(e, 0);
}
function Ca(e) {
  var t = Ur(e);
  if (Zp(t)) return e;
}
function I0(e, t) {
  if (e === 'change') return t;
}
var Sh = !1;
if (xn) {
  var pl;
  if (xn) {
    var hl = 'oninput' in document;
    if (!hl) {
      var Yd = document.createElement('div');
      Yd.setAttribute('oninput', 'return;'),
        (hl = typeof Yd.oninput == 'function');
    }
    pl = hl;
  } else pl = !1;
  Sh = pl && (!document.documentMode || 9 < document.documentMode);
}
function Kd() {
  es && (es.detachEvent('onpropertychange', bh), (ms = es = null));
}
function bh(e) {
  if (e.propertyName === 'value' && Ca(ms)) {
    var t = [];
    kh(t, ms, e, vc(e)), rh(L0, t);
  }
}
function j0(e, t, n) {
  e === 'focusin'
    ? (Kd(), (es = t), (ms = n), es.attachEvent('onpropertychange', bh))
    : e === 'focusout' && Kd();
}
function F0(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Ca(ms);
}
function z0(e, t) {
  if (e === 'click') return Ca(t);
}
function V0(e, t) {
  if (e === 'input' || e === 'change') return Ca(t);
}
function $0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var $t = typeof Object.is == 'function' ? Object.is : $0;
function vs(e, t) {
  if ($t(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Gl.call(t, o) || !$t(e[o], t[o])) return !1;
  }
  return !0;
}
function Qd(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Xd(e, t) {
  var n = Qd(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Qd(n);
  }
}
function Ch(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Ch(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Eh() {
  for (var e = window, t = Ni(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ni(e.document);
  }
  return t;
}
function Cc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function B0(e) {
  var t = Eh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ch(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Cc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          s = Math.min(r.start, o);
        (r = r.end === void 0 ? s : Math.min(r.end, o)),
          !e.extend && s > r && ((o = r), (r = s), (s = o)),
          (o = Xd(n, s));
        var i = Xd(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var U0 = xn && 'documentMode' in document && 11 >= document.documentMode,
  $r = null,
  fu = null,
  ts = null,
  pu = !1;
function qd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  pu ||
    $r == null ||
    $r !== Ni(r) ||
    ((r = $r),
    'selectionStart' in r && Cc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ts && vs(ts, r)) ||
      ((ts = r),
      (r = ji(fu, 'onSelect')),
      0 < r.length &&
        ((t = new kc('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = $r))));
}
function Qs(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Br = {
    animationend: Qs('Animation', 'AnimationEnd'),
    animationiteration: Qs('Animation', 'AnimationIteration'),
    animationstart: Qs('Animation', 'AnimationStart'),
    transitionend: Qs('Transition', 'TransitionEnd'),
  },
  ml = {},
  Ph = {};
xn &&
  ((Ph = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Br.animationend.animation,
    delete Br.animationiteration.animation,
    delete Br.animationstart.animation),
  'TransitionEvent' in window || delete Br.transitionend.transition);
function Ea(e) {
  if (ml[e]) return ml[e];
  if (!Br[e]) return e;
  var t = Br[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ph) return (ml[e] = t[n]);
  return e;
}
var Th = Ea('animationend'),
  Rh = Ea('animationiteration'),
  Nh = Ea('animationstart'),
  Oh = Ea('transitionend'),
  Ah = new Map(),
  Jd =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    );
function nr(e, t) {
  Ah.set(e, t), Er(t, [e]);
}
for (var vl = 0; vl < Jd.length; vl++) {
  var gl = Jd[vl],
    W0 = gl.toLowerCase(),
    H0 = gl[0].toUpperCase() + gl.slice(1);
  nr(W0, 'on' + H0);
}
nr(Th, 'onAnimationEnd');
nr(Rh, 'onAnimationIteration');
nr(Nh, 'onAnimationStart');
nr('dblclick', 'onDoubleClick');
nr('focusin', 'onFocus');
nr('focusout', 'onBlur');
nr(Oh, 'onTransitionEnd');
io('onMouseEnter', ['mouseout', 'mouseover']);
io('onMouseLeave', ['mouseout', 'mouseover']);
io('onPointerEnter', ['pointerout', 'pointerover']);
io('onPointerLeave', ['pointerout', 'pointerover']);
Er(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(
    ' ',
  ),
);
Er(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' ',
  ),
);
Er('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Er(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' '),
);
Er(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
);
Er(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
);
var Go =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  Z0 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Go));
function ef(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Wy(r, t, void 0, e), (e.currentTarget = null);
}
function Mh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== s && o.isPropagationStopped())) break e;
          ef(o, a, u), (s = l);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== s && o.isPropagationStopped())
          )
            break e;
          ef(o, a, u), (s = l);
        }
    }
  }
  if (Ai) throw ((e = lu), (Ai = !1), (lu = null), e);
}
function we(e, t) {
  var n = t[yu];
  n === void 0 && (n = t[yu] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Dh(t, e, 2, !1), n.add(r));
}
function yl(e, t, n) {
  var r = 0;
  t && (r |= 4), Dh(n, e, r, t);
}
var Xs = '_reactListening' + Math.random().toString(36).slice(2);
function gs(e) {
  if (!e[Xs]) {
    (e[Xs] = !0),
      $p.forEach(function (n) {
        n !== 'selectionchange' && (Z0.has(n) || yl(n, !1, e), yl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Xs] || ((t[Xs] = !0), yl('selectionchange', !1, t));
  }
}
function Dh(e, t, n, r) {
  switch (gh(t)) {
    case 1:
      var o = i0;
      break;
    case 4:
      o = a0;
      break;
    default:
      o = wc;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !au ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
}
function xl(e, t, n, r, o) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var l = i.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = i.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = cr(a)), i === null)) return;
          if (((l = i.tag), l === 5 || l === 6)) {
            r = s = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  rh(function () {
    var u = s,
      c = vc(n),
      d = [];
    e: {
      var h = Ah.get(e);
      if (h !== void 0) {
        var f = kc,
          v = e;
        switch (e) {
          case 'keypress':
            if (gi(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            f = k0;
            break;
          case 'focusin':
            (v = 'focus'), (f = fl);
            break;
          case 'focusout':
            (v = 'blur'), (f = fl);
            break;
          case 'beforeblur':
          case 'afterblur':
            f = fl;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            f = Bd;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            f = c0;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            f = C0;
            break;
          case Th:
          case Rh:
          case Nh:
            f = p0;
            break;
          case Oh:
            f = P0;
            break;
          case 'scroll':
            f = l0;
            break;
          case 'wheel':
            f = R0;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            f = m0;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            f = Wd;
        }
        var y = (t & 4) !== 0,
          k = !y && e === 'scroll',
          m = y ? (h !== null ? h + 'Capture' : null) : h;
        y = [];
        for (var p = u, x; p !== null; ) {
          x = p;
          var _ = x.stateNode;
          if (
            (x.tag === 5 &&
              _ !== null &&
              ((x = _),
              m !== null && ((_ = ds(p, m)), _ != null && y.push(ys(p, _, x)))),
            k)
          )
            break;
          p = p.return;
        }
        0 < y.length &&
          ((h = new f(h, v, null, n, c)), d.push({ event: h, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === 'mouseover' || e === 'pointerover'),
          (f = e === 'mouseout' || e === 'pointerout'),
          h &&
            n !== su &&
            (v = n.relatedTarget || n.fromElement) &&
            (cr(v) || v[wn]))
        )
          break e;
        if (
          (f || h) &&
          ((h =
            c.window === c
              ? c
              : (h = c.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
          f
            ? ((v = n.relatedTarget || n.toElement),
              (f = u),
              (v = v ? cr(v) : null),
              v !== null &&
                ((k = Pr(v)), v !== k || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((f = null), (v = u)),
          f !== v)
        ) {
          if (
            ((y = Bd),
            (_ = 'onMouseLeave'),
            (m = 'onMouseEnter'),
            (p = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((y = Wd),
              (_ = 'onPointerLeave'),
              (m = 'onPointerEnter'),
              (p = 'pointer')),
            (k = f == null ? h : Ur(f)),
            (x = v == null ? h : Ur(v)),
            (h = new y(_, p + 'leave', f, n, c)),
            (h.target = k),
            (h.relatedTarget = x),
            (_ = null),
            cr(c) === u &&
              ((y = new y(m, p + 'enter', v, n, c)),
              (y.target = x),
              (y.relatedTarget = k),
              (_ = y)),
            (k = _),
            f && v)
          )
            t: {
              for (y = f, m = v, p = 0, x = y; x; x = Ar(x)) p++;
              for (x = 0, _ = m; _; _ = Ar(_)) x++;
              for (; 0 < p - x; ) (y = Ar(y)), p--;
              for (; 0 < x - p; ) (m = Ar(m)), x--;
              for (; p--; ) {
                if (y === m || (m !== null && y === m.alternate)) break t;
                (y = Ar(y)), (m = Ar(m));
              }
              y = null;
            }
          else y = null;
          f !== null && tf(d, h, f, y, !1),
            v !== null && k !== null && tf(d, k, v, y, !0);
        }
      }
      e: {
        if (
          ((h = u ? Ur(u) : window),
          (f = h.nodeName && h.nodeName.toLowerCase()),
          f === 'select' || (f === 'input' && h.type === 'file'))
        )
          var S = I0;
        else if (Gd(h))
          if (Sh) S = V0;
          else {
            S = F0;
            var P = j0;
          }
        else
          (f = h.nodeName) &&
            f.toLowerCase() === 'input' &&
            (h.type === 'checkbox' || h.type === 'radio') &&
            (S = z0);
        if (S && (S = S(e, u))) {
          kh(d, S, n, c);
          break e;
        }
        P && P(e, h, u),
          e === 'focusout' &&
            (P = h._wrapperState) &&
            P.controlled &&
            h.type === 'number' &&
            eu(h, 'number', h.value);
      }
      switch (((P = u ? Ur(u) : window), e)) {
        case 'focusin':
          (Gd(P) || P.contentEditable === 'true') &&
            (($r = P), (fu = u), (ts = null));
          break;
        case 'focusout':
          ts = fu = $r = null;
          break;
        case 'mousedown':
          pu = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (pu = !1), qd(d, n, c);
          break;
        case 'selectionchange':
          if (U0) break;
        case 'keydown':
        case 'keyup':
          qd(d, n, c);
      }
      var T;
      if (bc)
        e: {
          switch (e) {
            case 'compositionstart':
              var N = 'onCompositionStart';
              break e;
            case 'compositionend':
              N = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              N = 'onCompositionUpdate';
              break e;
          }
          N = void 0;
        }
      else
        Vr
          ? wh(e, n) && (N = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (N = 'onCompositionStart');
      N &&
        (xh &&
          n.locale !== 'ko' &&
          (Vr || N !== 'onCompositionStart'
            ? N === 'onCompositionEnd' && Vr && (T = yh())
            : ((zn = c),
              (_c = 'value' in zn ? zn.value : zn.textContent),
              (Vr = !0))),
        (P = ji(u, N)),
        0 < P.length &&
          ((N = new Ud(N, e, null, n, c)),
          d.push({ event: N, listeners: P }),
          T ? (N.data = T) : ((T = _h(n)), T !== null && (N.data = T)))),
        (T = O0 ? A0(e, n) : M0(e, n)) &&
          ((u = ji(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new Ud('onBeforeInput', 'beforeinput', null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = T)));
    }
    Mh(d, t);
  });
}
function ys(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ji(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      s = o.stateNode;
    o.tag === 5 &&
      s !== null &&
      ((o = s),
      (s = ds(e, n)),
      s != null && r.unshift(ys(e, s, o)),
      (s = ds(e, t)),
      s != null && r.push(ys(e, s, o))),
      (e = e.return);
  }
  return r;
}
function Ar(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function tf(e, t, n, r, o) {
  for (var s = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = ds(n, s)), l != null && i.unshift(ys(n, l, a)))
        : o || ((l = ds(n, s)), l != null && i.push(ys(n, l, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var G0 = /\r\n?/g,
  Y0 = /\u0000|\uFFFD/g;
function nf(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      G0,
      `
`,
    )
    .replace(Y0, '');
}
function qs(e, t, n) {
  if (((t = nf(t)), nf(e) !== t && n)) throw Error(L(425));
}
function Fi() {}
var hu = null,
  mu = null;
function vu(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var gu = typeof setTimeout == 'function' ? setTimeout : void 0,
  K0 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  rf = typeof Promise == 'function' ? Promise : void 0,
  Q0 =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof rf < 'u'
        ? function (e) {
            return rf.resolve(null).then(e).catch(X0);
          }
        : gu;
function X0(e) {
  setTimeout(function () {
    throw e;
  });
}
function wl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), hs(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  hs(t);
}
function Wn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function of(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ko = Math.random().toString(36).slice(2),
  Qt = '__reactFiber$' + ko,
  xs = '__reactProps$' + ko,
  wn = '__reactContainer$' + ko,
  yu = '__reactEvents$' + ko,
  q0 = '__reactListeners$' + ko,
  J0 = '__reactHandles$' + ko;
function cr(e) {
  var t = e[Qt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[wn] || n[Qt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = of(e); e !== null; ) {
          if ((n = e[Qt])) return n;
          e = of(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ds(e) {
  return (
    (e = e[Qt] || e[wn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ur(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function Pa(e) {
  return e[xs] || null;
}
var xu = [],
  Wr = -1;
function rr(e) {
  return { current: e };
}
function ke(e) {
  0 > Wr || ((e.current = xu[Wr]), (xu[Wr] = null), Wr--);
}
function ye(e, t) {
  Wr++, (xu[Wr] = e.current), (e.current = t);
}
var Xn = {},
  Xe = rr(Xn),
  lt = rr(!1),
  vr = Xn;
function ao(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Xn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    s;
  for (s in n) o[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function ut(e) {
  return (e = e.childContextTypes), e != null;
}
function zi() {
  ke(lt), ke(Xe);
}
function sf(e, t, n) {
  if (Xe.current !== Xn) throw Error(L(168));
  ye(Xe, t), ye(lt, n);
}
function Lh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(L(108, jy(e) || 'Unknown', o));
  return Re({}, n, r);
}
function Vi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Xn),
    (vr = Xe.current),
    ye(Xe, e),
    ye(lt, lt.current),
    !0
  );
}
function af(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n
    ? ((e = Lh(e, t, vr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ke(lt),
      ke(Xe),
      ye(Xe, e))
    : ke(lt),
    ye(lt, n);
}
var pn = null,
  Ta = !1,
  _l = !1;
function Ih(e) {
  pn === null ? (pn = [e]) : pn.push(e);
}
function ex(e) {
  (Ta = !0), Ih(e);
}
function or() {
  if (!_l && pn !== null) {
    _l = !0;
    var e = 0,
      t = ve;
    try {
      var n = pn;
      for (ve = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (pn = null), (Ta = !1);
    } catch (o) {
      throw (pn !== null && (pn = pn.slice(e + 1)), ah(gc, or), o);
    } finally {
      (ve = t), (_l = !1);
    }
  }
  return null;
}
var Hr = [],
  Zr = 0,
  $i = null,
  Bi = 0,
  St = [],
  bt = 0,
  gr = null,
  hn = 1,
  mn = '';
function ar(e, t) {
  (Hr[Zr++] = Bi), (Hr[Zr++] = $i), ($i = e), (Bi = t);
}
function jh(e, t, n) {
  (St[bt++] = hn), (St[bt++] = mn), (St[bt++] = gr), (gr = e);
  var r = hn;
  e = mn;
  var o = 32 - zt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var s = 32 - zt(t) + o;
  if (30 < s) {
    var i = o - (o % 5);
    (s = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (hn = (1 << (32 - zt(t) + o)) | (n << o) | r),
      (mn = s + e);
  } else (hn = (1 << s) | (n << o) | r), (mn = e);
}
function Ec(e) {
  e.return !== null && (ar(e, 1), jh(e, 1, 0));
}
function Pc(e) {
  for (; e === $i; )
    ($i = Hr[--Zr]), (Hr[Zr] = null), (Bi = Hr[--Zr]), (Hr[Zr] = null);
  for (; e === gr; )
    (gr = St[--bt]),
      (St[bt] = null),
      (mn = St[--bt]),
      (St[bt] = null),
      (hn = St[--bt]),
      (St[bt] = null);
}
var yt = null,
  gt = null,
  be = !1,
  jt = null;
function Fh(e, t) {
  var n = Ct(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function lf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (yt = e), (gt = Wn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (yt = e), (gt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = gr !== null ? { id: hn, overflow: mn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ct(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (yt = e),
            (gt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function wu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function _u(e) {
  if (be) {
    var t = gt;
    if (t) {
      var n = t;
      if (!lf(e, t)) {
        if (wu(e)) throw Error(L(418));
        t = Wn(n.nextSibling);
        var r = yt;
        t && lf(e, t)
          ? Fh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (be = !1), (yt = e));
      }
    } else {
      if (wu(e)) throw Error(L(418));
      (e.flags = (e.flags & -4097) | 2), (be = !1), (yt = e);
    }
  }
}
function uf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  yt = e;
}
function Js(e) {
  if (e !== yt) return !1;
  if (!be) return uf(e), (be = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !vu(e.type, e.memoizedProps))),
    t && (t = gt))
  ) {
    if (wu(e)) throw (zh(), Error(L(418)));
    for (; t; ) Fh(e, t), (t = Wn(t.nextSibling));
  }
  if ((uf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              gt = Wn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      gt = null;
    }
  } else gt = yt ? Wn(e.stateNode.nextSibling) : null;
  return !0;
}
function zh() {
  for (var e = gt; e; ) e = Wn(e.nextSibling);
}
function lo() {
  (gt = yt = null), (be = !1);
}
function Tc(e) {
  jt === null ? (jt = [e]) : jt.push(e);
}
var tx = Tn.ReactCurrentBatchConfig;
function Io(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var o = r,
        s = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (i) {
            var a = o.refs;
            i === null ? delete a[s] : (a[s] = i);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != 'string') throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function ei(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      L(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e,
      ),
    ))
  );
}
function cf(e) {
  var t = e._init;
  return t(e._payload);
}
function Vh(e) {
  function t(m, p) {
    if (e) {
      var x = m.deletions;
      x === null ? ((m.deletions = [p]), (m.flags |= 16)) : x.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function o(m, p) {
    return (m = Yn(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function s(m, p, x) {
    return (
      (m.index = x),
      e
        ? ((x = m.alternate),
          x !== null
            ? ((x = x.index), x < p ? ((m.flags |= 2), p) : x)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function i(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, p, x, _) {
    return p === null || p.tag !== 6
      ? ((p = Tl(x, m.mode, _)), (p.return = m), p)
      : ((p = o(p, x)), (p.return = m), p);
  }
  function l(m, p, x, _) {
    var S = x.type;
    return S === zr
      ? c(m, p, x.props.children, _, x.key)
      : p !== null &&
          (p.elementType === S ||
            (typeof S == 'object' &&
              S !== null &&
              S.$$typeof === Dn &&
              cf(S) === p.type))
        ? ((_ = o(p, x.props)), (_.ref = Io(m, p, x)), (_.return = m), _)
        : ((_ = bi(x.type, x.key, x.props, null, m.mode, _)),
          (_.ref = Io(m, p, x)),
          (_.return = m),
          _);
  }
  function u(m, p, x, _) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== x.containerInfo ||
      p.stateNode.implementation !== x.implementation
      ? ((p = Rl(x, m.mode, _)), (p.return = m), p)
      : ((p = o(p, x.children || [])), (p.return = m), p);
  }
  function c(m, p, x, _, S) {
    return p === null || p.tag !== 7
      ? ((p = mr(x, m.mode, _, S)), (p.return = m), p)
      : ((p = o(p, x)), (p.return = m), p);
  }
  function d(m, p, x) {
    if ((typeof p == 'string' && p !== '') || typeof p == 'number')
      return (p = Tl('' + p, m.mode, x)), (p.return = m), p;
    if (typeof p == 'object' && p !== null) {
      switch (p.$$typeof) {
        case Us:
          return (
            (x = bi(p.type, p.key, p.props, null, m.mode, x)),
            (x.ref = Io(m, null, p)),
            (x.return = m),
            x
          );
        case Fr:
          return (p = Rl(p, m.mode, x)), (p.return = m), p;
        case Dn:
          var _ = p._init;
          return d(m, _(p._payload), x);
      }
      if (Ho(p) || Oo(p))
        return (p = mr(p, m.mode, x, null)), (p.return = m), p;
      ei(m, p);
    }
    return null;
  }
  function h(m, p, x, _) {
    var S = p !== null ? p.key : null;
    if ((typeof x == 'string' && x !== '') || typeof x == 'number')
      return S !== null ? null : a(m, p, '' + x, _);
    if (typeof x == 'object' && x !== null) {
      switch (x.$$typeof) {
        case Us:
          return x.key === S ? l(m, p, x, _) : null;
        case Fr:
          return x.key === S ? u(m, p, x, _) : null;
        case Dn:
          return (S = x._init), h(m, p, S(x._payload), _);
      }
      if (Ho(x) || Oo(x)) return S !== null ? null : c(m, p, x, _, null);
      ei(m, x);
    }
    return null;
  }
  function f(m, p, x, _, S) {
    if ((typeof _ == 'string' && _ !== '') || typeof _ == 'number')
      return (m = m.get(x) || null), a(p, m, '' + _, S);
    if (typeof _ == 'object' && _ !== null) {
      switch (_.$$typeof) {
        case Us:
          return (m = m.get(_.key === null ? x : _.key) || null), l(p, m, _, S);
        case Fr:
          return (m = m.get(_.key === null ? x : _.key) || null), u(p, m, _, S);
        case Dn:
          var P = _._init;
          return f(m, p, x, P(_._payload), S);
      }
      if (Ho(_) || Oo(_)) return (m = m.get(x) || null), c(p, m, _, S, null);
      ei(p, _);
    }
    return null;
  }
  function v(m, p, x, _) {
    for (
      var S = null, P = null, T = p, N = (p = 0), Z = null;
      T !== null && N < x.length;
      N++
    ) {
      T.index > N ? ((Z = T), (T = null)) : (Z = T.sibling);
      var j = h(m, T, x[N], _);
      if (j === null) {
        T === null && (T = Z);
        break;
      }
      e && T && j.alternate === null && t(m, T),
        (p = s(j, p, N)),
        P === null ? (S = j) : (P.sibling = j),
        (P = j),
        (T = Z);
    }
    if (N === x.length) return n(m, T), be && ar(m, N), S;
    if (T === null) {
      for (; N < x.length; N++)
        (T = d(m, x[N], _)),
          T !== null &&
            ((p = s(T, p, N)), P === null ? (S = T) : (P.sibling = T), (P = T));
      return be && ar(m, N), S;
    }
    for (T = r(m, T); N < x.length; N++)
      (Z = f(T, m, N, x[N], _)),
        Z !== null &&
          (e && Z.alternate !== null && T.delete(Z.key === null ? N : Z.key),
          (p = s(Z, p, N)),
          P === null ? (S = Z) : (P.sibling = Z),
          (P = Z));
    return (
      e &&
        T.forEach(function (te) {
          return t(m, te);
        }),
      be && ar(m, N),
      S
    );
  }
  function y(m, p, x, _) {
    var S = Oo(x);
    if (typeof S != 'function') throw Error(L(150));
    if (((x = S.call(x)), x == null)) throw Error(L(151));
    for (
      var P = (S = null), T = p, N = (p = 0), Z = null, j = x.next();
      T !== null && !j.done;
      N++, j = x.next()
    ) {
      T.index > N ? ((Z = T), (T = null)) : (Z = T.sibling);
      var te = h(m, T, j.value, _);
      if (te === null) {
        T === null && (T = Z);
        break;
      }
      e && T && te.alternate === null && t(m, T),
        (p = s(te, p, N)),
        P === null ? (S = te) : (P.sibling = te),
        (P = te),
        (T = Z);
    }
    if (j.done) return n(m, T), be && ar(m, N), S;
    if (T === null) {
      for (; !j.done; N++, j = x.next())
        (j = d(m, j.value, _)),
          j !== null &&
            ((p = s(j, p, N)), P === null ? (S = j) : (P.sibling = j), (P = j));
      return be && ar(m, N), S;
    }
    for (T = r(m, T); !j.done; N++, j = x.next())
      (j = f(T, m, N, j.value, _)),
        j !== null &&
          (e && j.alternate !== null && T.delete(j.key === null ? N : j.key),
          (p = s(j, p, N)),
          P === null ? (S = j) : (P.sibling = j),
          (P = j));
    return (
      e &&
        T.forEach(function (D) {
          return t(m, D);
        }),
      be && ar(m, N),
      S
    );
  }
  function k(m, p, x, _) {
    if (
      (typeof x == 'object' &&
        x !== null &&
        x.type === zr &&
        x.key === null &&
        (x = x.props.children),
      typeof x == 'object' && x !== null)
    ) {
      switch (x.$$typeof) {
        case Us:
          e: {
            for (var S = x.key, P = p; P !== null; ) {
              if (P.key === S) {
                if (((S = x.type), S === zr)) {
                  if (P.tag === 7) {
                    n(m, P.sibling),
                      (p = o(P, x.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  P.elementType === S ||
                  (typeof S == 'object' &&
                    S !== null &&
                    S.$$typeof === Dn &&
                    cf(S) === P.type)
                ) {
                  n(m, P.sibling),
                    (p = o(P, x.props)),
                    (p.ref = Io(m, P, x)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, P);
                break;
              } else t(m, P);
              P = P.sibling;
            }
            x.type === zr
              ? ((p = mr(x.props.children, m.mode, _, x.key)),
                (p.return = m),
                (m = p))
              : ((_ = bi(x.type, x.key, x.props, null, m.mode, _)),
                (_.ref = Io(m, p, x)),
                (_.return = m),
                (m = _));
          }
          return i(m);
        case Fr:
          e: {
            for (P = x.key; p !== null; ) {
              if (p.key === P)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === x.containerInfo &&
                  p.stateNode.implementation === x.implementation
                ) {
                  n(m, p.sibling),
                    (p = o(p, x.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = Rl(x, m.mode, _)), (p.return = m), (m = p);
          }
          return i(m);
        case Dn:
          return (P = x._init), k(m, p, P(x._payload), _);
      }
      if (Ho(x)) return v(m, p, x, _);
      if (Oo(x)) return y(m, p, x, _);
      ei(m, x);
    }
    return (typeof x == 'string' && x !== '') || typeof x == 'number'
      ? ((x = '' + x),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = o(p, x)), (p.return = m), (m = p))
          : (n(m, p), (p = Tl(x, m.mode, _)), (p.return = m), (m = p)),
        i(m))
      : n(m, p);
  }
  return k;
}
var uo = Vh(!0),
  $h = Vh(!1),
  Ui = rr(null),
  Wi = null,
  Gr = null,
  Rc = null;
function Nc() {
  Rc = Gr = Wi = null;
}
function Oc(e) {
  var t = Ui.current;
  ke(Ui), (e._currentValue = t);
}
function ku(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function eo(e, t) {
  (Wi = e),
    (Rc = Gr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (at = !0), (e.firstContext = null));
}
function Tt(e) {
  var t = e._currentValue;
  if (Rc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Gr === null)) {
      if (Wi === null) throw Error(L(308));
      (Gr = e), (Wi.dependencies = { lanes: 0, firstContext: e });
    } else Gr = Gr.next = e;
  return t;
}
var dr = null;
function Ac(e) {
  dr === null ? (dr = [e]) : dr.push(e);
}
function Bh(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Ac(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    _n(e, r)
  );
}
function _n(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ln = !1;
function Mc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Uh(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function gn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Hn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), pe & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      _n(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Ac(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    _n(e, n)
  );
}
function yi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), yc(e, n);
  }
}
function df(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (o = s = i) : (s = s.next = i), (n = n.next);
      } while (n !== null);
      s === null ? (o = s = t) : (s = s.next = t);
    } else o = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Hi(e, t, n, r) {
  var o = e.updateQueue;
  Ln = !1;
  var s = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), i === null ? (s = u) : (i.next = u), (i = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== i &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var d = o.baseState;
    (i = 0), (c = u = l = null), (a = s);
    do {
      var h = a.lane,
        f = a.eventTime;
      if ((r & h) === h) {
        c !== null &&
          (c = c.next =
            {
              eventTime: f,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            y = a;
          switch (((h = t), (f = n), y.tag)) {
            case 1:
              if (((v = y.payload), typeof v == 'function')) {
                d = v.call(f, d, h);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = y.payload),
                (h = typeof v == 'function' ? v.call(f, d, h) : v),
                h == null)
              )
                break e;
              d = Re({}, d, h);
              break e;
            case 2:
              Ln = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = o.effects),
          h === null ? (o.effects = [a]) : h.push(a));
      } else
        (f = {
          eventTime: f,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = f), (l = d)) : (c = c.next = f),
          (i |= h);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (o.lastBaseUpdate = h),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else s === null && (o.shared.lanes = 0);
    (xr |= i), (e.lanes = i), (e.memoizedState = d);
  }
}
function ff(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(L(191, o));
        o.call(r);
      }
    }
}
var Ls = {},
  tn = rr(Ls),
  ws = rr(Ls),
  _s = rr(Ls);
function fr(e) {
  if (e === Ls) throw Error(L(174));
  return e;
}
function Dc(e, t) {
  switch ((ye(_s, t), ye(ws, e), ye(tn, Ls), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : nu(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = nu(t, e));
  }
  ke(tn), ye(tn, t);
}
function co() {
  ke(tn), ke(ws), ke(_s);
}
function Wh(e) {
  fr(_s.current);
  var t = fr(tn.current),
    n = nu(t, e.type);
  t !== n && (ye(ws, e), ye(tn, n));
}
function Lc(e) {
  ws.current === e && (ke(tn), ke(ws));
}
var Pe = rr(0);
function Zi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
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
var kl = [];
function Ic() {
  for (var e = 0; e < kl.length; e++)
    kl[e]._workInProgressVersionPrimary = null;
  kl.length = 0;
}
var xi = Tn.ReactCurrentDispatcher,
  Sl = Tn.ReactCurrentBatchConfig,
  yr = 0,
  Te = null,
  $e = null,
  Ue = null,
  Gi = !1,
  ns = !1,
  ks = 0,
  nx = 0;
function Ye() {
  throw Error(L(321));
}
function jc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!$t(e[n], t[n])) return !1;
  return !0;
}
function Fc(e, t, n, r, o, s) {
  if (
    ((yr = s),
    (Te = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (xi.current = e === null || e.memoizedState === null ? ix : ax),
    (e = n(r, o)),
    ns)
  ) {
    s = 0;
    do {
      if (((ns = !1), (ks = 0), 25 <= s)) throw Error(L(301));
      (s += 1),
        (Ue = $e = null),
        (t.updateQueue = null),
        (xi.current = lx),
        (e = n(r, o));
    } while (ns);
  }
  if (
    ((xi.current = Yi),
    (t = $e !== null && $e.next !== null),
    (yr = 0),
    (Ue = $e = Te = null),
    (Gi = !1),
    t)
  )
    throw Error(L(300));
  return e;
}
function zc() {
  var e = ks !== 0;
  return (ks = 0), e;
}
function Kt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ue === null ? (Te.memoizedState = Ue = e) : (Ue = Ue.next = e), Ue;
}
function Rt() {
  if ($e === null) {
    var e = Te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = $e.next;
  var t = Ue === null ? Te.memoizedState : Ue.next;
  if (t !== null) (Ue = t), ($e = e);
  else {
    if (e === null) throw Error(L(310));
    ($e = e),
      (e = {
        memoizedState: $e.memoizedState,
        baseState: $e.baseState,
        baseQueue: $e.baseQueue,
        queue: $e.queue,
        next: null,
      }),
      Ue === null ? (Te.memoizedState = Ue = e) : (Ue = Ue.next = e);
  }
  return Ue;
}
function Ss(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function bl(e) {
  var t = Rt(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = $e,
    o = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = s.next), (s.next = i);
    }
    (r.baseQueue = o = s), (n.pending = null);
  }
  if (o !== null) {
    (s = o.next), (r = r.baseState);
    var a = (i = null),
      l = null,
      u = s;
    do {
      var c = u.lane;
      if ((yr & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (i = r)) : (l = l.next = d),
          (Te.lanes |= c),
          (xr |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? (i = r) : (l.next = a),
      $t(r, t.memoizedState) || (at = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (s = o.lane), (Te.lanes |= s), (xr |= s), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Cl(e) {
  var t = Rt(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    s = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (s = e(s, i.action)), (i = i.next);
    while (i !== o);
    $t(s, t.memoizedState) || (at = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Hh() {}
function Zh(e, t) {
  var n = Te,
    r = Rt(),
    o = t(),
    s = !$t(r.memoizedState, o);
  if (
    (s && ((r.memoizedState = o), (at = !0)),
    (r = r.queue),
    Vc(Kh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (Ue !== null && Ue.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      bs(9, Yh.bind(null, n, r, o, t), void 0, null),
      We === null)
    )
      throw Error(L(349));
    yr & 30 || Gh(n, t, o);
  }
  return o;
}
function Gh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Te.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Yh(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Qh(t) && Xh(e);
}
function Kh(e, t, n) {
  return n(function () {
    Qh(t) && Xh(e);
  });
}
function Qh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !$t(e, n);
  } catch {
    return !0;
  }
}
function Xh(e) {
  var t = _n(e, 1);
  t !== null && Vt(t, e, 1, -1);
}
function pf(e) {
  var t = Kt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ss,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = sx.bind(null, Te, e)),
    [t.memoizedState, e]
  );
}
function bs(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Te.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function qh() {
  return Rt().memoizedState;
}
function wi(e, t, n, r) {
  var o = Kt();
  (Te.flags |= e),
    (o.memoizedState = bs(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ra(e, t, n, r) {
  var o = Rt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if ($e !== null) {
    var i = $e.memoizedState;
    if (((s = i.destroy), r !== null && jc(r, i.deps))) {
      o.memoizedState = bs(t, n, s, r);
      return;
    }
  }
  (Te.flags |= e), (o.memoizedState = bs(1 | t, n, s, r));
}
function hf(e, t) {
  return wi(8390656, 8, e, t);
}
function Vc(e, t) {
  return Ra(2048, 8, e, t);
}
function Jh(e, t) {
  return Ra(4, 2, e, t);
}
function em(e, t) {
  return Ra(4, 4, e, t);
}
function tm(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function nm(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ra(4, 4, tm.bind(null, t, e), n)
  );
}
function $c() {}
function rm(e, t) {
  var n = Rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && jc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function om(e, t) {
  var n = Rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && jc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function sm(e, t, n) {
  return yr & 21
    ? ($t(n, t) || ((n = ch()), (Te.lanes |= n), (xr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (at = !0)), (e.memoizedState = n));
}
function rx(e, t) {
  var n = ve;
  (ve = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Sl.transition;
  Sl.transition = {};
  try {
    e(!1), t();
  } finally {
    (ve = n), (Sl.transition = r);
  }
}
function im() {
  return Rt().memoizedState;
}
function ox(e, t, n) {
  var r = Gn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    am(e))
  )
    lm(t, n);
  else if (((n = Bh(e, t, n, r)), n !== null)) {
    var o = et();
    Vt(n, e, r, o), um(n, t, r);
  }
}
function sx(e, t, n) {
  var r = Gn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (am(e)) lm(t, o);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = s(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), $t(a, i))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), Ac(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Bh(e, t, o, r)),
      n !== null && ((o = et()), Vt(n, e, r, o), um(n, t, r));
  }
}
function am(e) {
  var t = e.alternate;
  return e === Te || (t !== null && t === Te);
}
function lm(e, t) {
  ns = Gi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function um(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), yc(e, n);
  }
}
var Yi = {
    readContext: Tt,
    useCallback: Ye,
    useContext: Ye,
    useEffect: Ye,
    useImperativeHandle: Ye,
    useInsertionEffect: Ye,
    useLayoutEffect: Ye,
    useMemo: Ye,
    useReducer: Ye,
    useRef: Ye,
    useState: Ye,
    useDebugValue: Ye,
    useDeferredValue: Ye,
    useTransition: Ye,
    useMutableSource: Ye,
    useSyncExternalStore: Ye,
    useId: Ye,
    unstable_isNewReconciler: !1,
  },
  ix = {
    readContext: Tt,
    useCallback: function (e, t) {
      return (Kt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Tt,
    useEffect: hf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        wi(4194308, 4, tm.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return wi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return wi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Kt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Kt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = ox.bind(null, Te, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Kt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: pf,
    useDebugValue: $c,
    useDeferredValue: function (e) {
      return (Kt().memoizedState = e);
    },
    useTransition: function () {
      var e = pf(!1),
        t = e[0];
      return (e = rx.bind(null, e[1])), (Kt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Te,
        o = Kt();
      if (be) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = t()), We === null)) throw Error(L(349));
        yr & 30 || Gh(r, t, n);
      }
      o.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (o.queue = s),
        hf(Kh.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        bs(9, Yh.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Kt(),
        t = We.identifierPrefix;
      if (be) {
        var n = mn,
          r = hn;
        (n = (r & ~(1 << (32 - zt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = ks++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = nx++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ax = {
    readContext: Tt,
    useCallback: rm,
    useContext: Tt,
    useEffect: Vc,
    useImperativeHandle: nm,
    useInsertionEffect: Jh,
    useLayoutEffect: em,
    useMemo: om,
    useReducer: bl,
    useRef: qh,
    useState: function () {
      return bl(Ss);
    },
    useDebugValue: $c,
    useDeferredValue: function (e) {
      var t = Rt();
      return sm(t, $e.memoizedState, e);
    },
    useTransition: function () {
      var e = bl(Ss)[0],
        t = Rt().memoizedState;
      return [e, t];
    },
    useMutableSource: Hh,
    useSyncExternalStore: Zh,
    useId: im,
    unstable_isNewReconciler: !1,
  },
  lx = {
    readContext: Tt,
    useCallback: rm,
    useContext: Tt,
    useEffect: Vc,
    useImperativeHandle: nm,
    useInsertionEffect: Jh,
    useLayoutEffect: em,
    useMemo: om,
    useReducer: Cl,
    useRef: qh,
    useState: function () {
      return Cl(Ss);
    },
    useDebugValue: $c,
    useDeferredValue: function (e) {
      var t = Rt();
      return $e === null ? (t.memoizedState = e) : sm(t, $e.memoizedState, e);
    },
    useTransition: function () {
      var e = Cl(Ss)[0],
        t = Rt().memoizedState;
      return [e, t];
    },
    useMutableSource: Hh,
    useSyncExternalStore: Zh,
    useId: im,
    unstable_isNewReconciler: !1,
  };
function Lt(e, t) {
  if (e && e.defaultProps) {
    (t = Re({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Su(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Re({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Na = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Pr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = et(),
      o = Gn(e),
      s = gn(r, o);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = Hn(e, s, o)),
      t !== null && (Vt(t, e, o, r), yi(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = et(),
      o = Gn(e),
      s = gn(r, o);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Hn(e, s, o)),
      t !== null && (Vt(t, e, o, r), yi(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = et(),
      r = Gn(e),
      o = gn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Hn(e, o, r)),
      t !== null && (Vt(t, e, r, n), yi(t, e, r));
  },
};
function mf(e, t, n, r, o, s, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, s, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !vs(n, r) || !vs(o, s)
        : !0
  );
}
function cm(e, t, n) {
  var r = !1,
    o = Xn,
    s = t.contextType;
  return (
    typeof s == 'object' && s !== null
      ? (s = Tt(s))
      : ((o = ut(t) ? vr : Xe.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? ao(e, o) : Xn)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Na),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function vf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Na.enqueueReplaceState(t, t.state, null);
}
function bu(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Mc(e);
  var s = t.contextType;
  typeof s == 'object' && s !== null
    ? (o.context = Tt(s))
    : ((s = ut(t) ? vr : Xe.current), (o.context = ao(e, s))),
    (o.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == 'function' && (Su(e, t, s, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Na.enqueueReplaceState(o, o.state, null),
      Hi(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function fo(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Iy(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (s) {
    o =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function El(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Cu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var ux = typeof WeakMap == 'function' ? WeakMap : Map;
function dm(e, t, n) {
  (n = gn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Qi || ((Qi = !0), (Lu = r)), Cu(e, t);
    }),
    n
  );
}
function fm(e, t, n) {
  (n = gn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Cu(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == 'function' &&
      (n.callback = function () {
        Cu(e, t),
          typeof r != 'function' &&
            (Zn === null ? (Zn = new Set([this])) : Zn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : '',
        });
      }),
    n
  );
}
function gf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ux();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Sx.bind(null, e, t, n)), t.then(e, e));
}
function yf(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function xf(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = gn(-1, 1)), (t.tag = 2), Hn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var cx = Tn.ReactCurrentOwner,
  at = !1;
function qe(e, t, n, r) {
  t.child = e === null ? $h(t, null, n, r) : uo(t, e.child, n, r);
}
function wf(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return (
    eo(t, o),
    (r = Fc(e, t, n, r, s, o)),
    (n = zc()),
    e !== null && !at
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        kn(e, t, o))
      : (be && n && Ec(t), (t.flags |= 1), qe(e, t, r, o), t.child)
  );
}
function _f(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == 'function' &&
      !Kc(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), pm(e, t, s, r, o))
      : ((e = bi(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & o))) {
    var i = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : vs), n(i, r) && e.ref === t.ref)
    )
      return kn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Yn(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function pm(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (vs(s, r) && e.ref === t.ref)
      if (((at = !1), (t.pendingProps = r = s), (e.lanes & o) !== 0))
        e.flags & 131072 && (at = !0);
      else return (t.lanes = e.lanes), kn(e, t, o);
  }
  return Eu(e, t, n, r, o);
}
function hm(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ye(Kr, ht),
        (ht |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ye(Kr, ht),
          (ht |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        ye(Kr, ht),
        (ht |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ye(Kr, ht),
      (ht |= r);
  return qe(e, t, o, n), t.child;
}
function mm(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Eu(e, t, n, r, o) {
  var s = ut(n) ? vr : Xe.current;
  return (
    (s = ao(t, s)),
    eo(t, o),
    (n = Fc(e, t, n, r, s, o)),
    (r = zc()),
    e !== null && !at
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        kn(e, t, o))
      : (be && r && Ec(t), (t.flags |= 1), qe(e, t, n, o), t.child)
  );
}
function kf(e, t, n, r, o) {
  if (ut(n)) {
    var s = !0;
    Vi(t);
  } else s = !1;
  if ((eo(t, o), t.stateNode === null))
    _i(e, t), cm(t, n, r), bu(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var l = i.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = Tt(u))
      : ((u = ut(n) ? vr : Xe.current), (u = ao(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function';
    d ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((a !== r || l !== u) && vf(t, i, r, u)),
      (Ln = !1);
    var h = t.memoizedState;
    (i.state = h),
      Hi(t, r, i, o),
      (l = t.memoizedState),
      a !== r || h !== l || lt.current || Ln
        ? (typeof c == 'function' && (Su(t, n, c, r), (l = t.memoizedState)),
          (a = Ln || mf(t, n, a, r, h, l, u))
            ? (d ||
                (typeof i.UNSAFE_componentWillMount != 'function' &&
                  typeof i.componentWillMount != 'function') ||
                (typeof i.componentWillMount == 'function' &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == 'function' &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (i.props = r),
          (i.state = l),
          (i.context = u),
          (r = a))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Uh(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Lt(t.type, a)),
      (i.props = u),
      (d = t.pendingProps),
      (h = i.context),
      (l = n.contextType),
      typeof l == 'object' && l !== null
        ? (l = Tt(l))
        : ((l = ut(n) ? vr : Xe.current), (l = ao(t, l)));
    var f = n.getDerivedStateFromProps;
    (c =
      typeof f == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((a !== d || h !== l) && vf(t, i, r, l)),
      (Ln = !1),
      (h = t.memoizedState),
      (i.state = h),
      Hi(t, r, i, o);
    var v = t.memoizedState;
    a !== d || h !== v || lt.current || Ln
      ? (typeof f == 'function' && (Su(t, n, f, r), (v = t.memoizedState)),
        (u = Ln || mf(t, n, u, r, h, v, l) || !1)
          ? (c ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' &&
                i.componentWillUpdate(r, v, l),
              typeof i.UNSAFE_componentWillUpdate == 'function' &&
                i.UNSAFE_componentWillUpdate(r, v, l)),
            typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (i.props = r),
        (i.state = v),
        (i.context = l),
        (r = u))
      : (typeof i.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Pu(e, t, n, r, s, o);
}
function Pu(e, t, n, r, o, s) {
  mm(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && af(t, n, !1), kn(e, t, s);
  (r = t.stateNode), (cx.current = t);
  var a =
    i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = uo(t, e.child, null, s)), (t.child = uo(t, null, a, s)))
      : qe(e, t, a, s),
    (t.memoizedState = r.state),
    o && af(t, n, !0),
    t.child
  );
}
function vm(e) {
  var t = e.stateNode;
  t.pendingContext
    ? sf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && sf(e, t.context, !1),
    Dc(e, t.containerInfo);
}
function Sf(e, t, n, r, o) {
  return lo(), Tc(o), (t.flags |= 256), qe(e, t, n, r), t.child;
}
var Tu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ru(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function gm(e, t, n) {
  var r = t.pendingProps,
    o = Pe.current,
    s = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ye(Pe, o & 1),
    e === null)
  )
    return (
      _u(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (i = { mode: 'hidden', children: i }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = i))
                : (s = Ma(i, r, 0, null)),
              (e = mr(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Ru(n)),
              (t.memoizedState = Tu),
              e)
            : Bc(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return dx(e, t, i, r, a, o, n);
  if (s) {
    (s = r.fallback), (i = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: 'hidden', children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Yn(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (s = Yn(a, s)) : ((s = mr(s, i, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Ru(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (s.memoizedState = i),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Tu),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Yn(s, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Bc(e, t) {
  return (
    (t = Ma({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ti(e, t, n, r) {
  return (
    r !== null && Tc(r),
    uo(t, e.child, null, n),
    (e = Bc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function dx(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = El(Error(L(422)))), ti(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (o = t.mode),
          (r = Ma({ mode: 'visible', children: r.children }, o, 0, null)),
          (s = mr(s, o, i, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          t.mode & 1 && uo(t, e.child, null, i),
          (t.child.memoizedState = Ru(i)),
          (t.memoizedState = Tu),
          s);
  if (!(t.mode & 1)) return ti(e, t, i, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(L(419))), (r = El(s, r, void 0)), ti(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), at || a)) {
    if (((r = We), r !== null)) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== s.retryLane &&
          ((s.retryLane = o), _n(e, o), Vt(r, e, o, -1));
    }
    return Yc(), (r = El(Error(L(421)))), ti(e, t, i, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = bx.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (gt = Wn(o.nextSibling)),
      (yt = t),
      (be = !0),
      (jt = null),
      e !== null &&
        ((St[bt++] = hn),
        (St[bt++] = mn),
        (St[bt++] = gr),
        (hn = e.id),
        (mn = e.overflow),
        (gr = t)),
      (t = Bc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function bf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ku(e.return, t, n);
}
function Pl(e, t, n, r, o) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = o));
}
function ym(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    s = r.tail;
  if ((qe(e, t, r.children, n), (r = Pe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && bf(e, n, t);
        else if (e.tag === 19) bf(e, n, t);
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
    r &= 1;
  }
  if ((ye(Pe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Zi(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Pl(t, !1, o, n, s);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Zi(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Pl(t, !0, n, null, s);
        break;
      case 'together':
        Pl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function _i(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function kn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (xr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Yn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Yn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function fx(e, t, n) {
  switch (t.tag) {
    case 3:
      vm(t), lo();
      break;
    case 5:
      Wh(t);
      break;
    case 1:
      ut(t.type) && Vi(t);
      break;
    case 4:
      Dc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ye(Ui, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ye(Pe, Pe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? gm(e, t, n)
            : (ye(Pe, Pe.current & 1),
              (e = kn(e, t, n)),
              e !== null ? e.sibling : null);
      ye(Pe, Pe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return ym(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ye(Pe, Pe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), hm(e, t, n);
  }
  return kn(e, t, n);
}
var xm, Nu, wm, _m;
xm = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Nu = function () {};
wm = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), fr(tn.current);
    var s = null;
    switch (n) {
      case 'input':
        (o = ql(e, o)), (r = ql(e, r)), (s = []);
        break;
      case 'select':
        (o = Re({}, o, { value: void 0 })),
          (r = Re({}, r, { value: void 0 })),
          (s = []);
        break;
      case 'textarea':
        (o = tu(e, o)), (r = tu(e, r)), (s = []);
        break;
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Fi);
    }
    ru(n, r);
    var i;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === 'style') {
          var a = o[u];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (us.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === 'style')
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (l && l.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ''));
            for (i in l)
              l.hasOwnProperty(i) &&
                a[i] !== l[i] &&
                (n || (n = {}), (n[i] = l[i]));
          } else n || (s || (s = []), s.push(u, n)), (n = l);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(u, l))
            : u === 'children'
              ? (typeof l != 'string' && typeof l != 'number') ||
                (s = s || []).push(u, '' + l)
              : u !== 'suppressContentEditableWarning' &&
                u !== 'suppressHydrationWarning' &&
                (us.hasOwnProperty(u)
                  ? (l != null && u === 'onScroll' && we('scroll', e),
                    s || a === l || (s = []))
                  : (s = s || []).push(u, l));
    }
    n && (s = s || []).push('style', n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
_m = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function jo(e, t) {
  if (!be)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ke(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function px(e, t, n) {
  var r = t.pendingProps;
  switch ((Pc(t), t.tag)) {
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
      return Ke(t), null;
    case 1:
      return ut(t.type) && zi(), Ke(t), null;
    case 3:
      return (
        (r = t.stateNode),
        co(),
        ke(lt),
        ke(Xe),
        Ic(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Js(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), jt !== null && (Fu(jt), (jt = null)))),
        Nu(e, t),
        Ke(t),
        null
      );
    case 5:
      Lc(t);
      var o = fr(_s.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        wm(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return Ke(t), null;
        }
        if (((e = fr(tn.current)), Js(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[Qt] = t), (r[xs] = s), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              we('cancel', r), we('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              we('load', r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < Go.length; o++) we(Go[o], r);
              break;
            case 'source':
              we('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              we('error', r), we('load', r);
              break;
            case 'details':
              we('toggle', r);
              break;
            case 'input':
              Ad(r, s), we('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                we('invalid', r);
              break;
            case 'textarea':
              Dd(r, s), we('invalid', r);
          }
          ru(n, s), (o = null);
          for (var i in s)
            if (s.hasOwnProperty(i)) {
              var a = s[i];
              i === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      qs(r.textContent, a, e),
                    (o = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      qs(r.textContent, a, e),
                    (o = ['children', '' + a]))
                : us.hasOwnProperty(i) &&
                  a != null &&
                  i === 'onScroll' &&
                  we('scroll', r);
            }
          switch (n) {
            case 'input':
              Ws(r), Md(r, s, !0);
              break;
            case 'textarea':
              Ws(r), Ld(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof s.onClick == 'function' && (r.onclick = Fi);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Kp(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = i.createElement('div')),
                  (e.innerHTML = '<script><\/script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === 'select' &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Qt] = t),
            (e[xs] = r),
            xm(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = ou(n, r)), n)) {
              case 'dialog':
                we('cancel', e), we('close', e), (o = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                we('load', e), (o = r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < Go.length; o++) we(Go[o], e);
                o = r;
                break;
              case 'source':
                we('error', e), (o = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                we('error', e), we('load', e), (o = r);
                break;
              case 'details':
                we('toggle', e), (o = r);
                break;
              case 'input':
                Ad(e, r), (o = ql(e, r)), we('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Re({}, r, { value: void 0 })),
                  we('invalid', e);
                break;
              case 'textarea':
                Dd(e, r), (o = tu(e, r)), we('invalid', e);
                break;
              default:
                o = r;
            }
            ru(n, o), (a = o);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === 'style'
                  ? qp(e, l)
                  : s === 'dangerouslySetInnerHTML'
                    ? ((l = l ? l.__html : void 0), l != null && Qp(e, l))
                    : s === 'children'
                      ? typeof l == 'string'
                        ? (n !== 'textarea' || l !== '') && cs(e, l)
                        : typeof l == 'number' && cs(e, '' + l)
                      : s !== 'suppressContentEditableWarning' &&
                        s !== 'suppressHydrationWarning' &&
                        s !== 'autoFocus' &&
                        (us.hasOwnProperty(s)
                          ? l != null && s === 'onScroll' && we('scroll', e)
                          : l != null && fc(e, s, l, i));
              }
            switch (n) {
              case 'input':
                Ws(e), Md(e, r, !1);
                break;
              case 'textarea':
                Ws(e), Ld(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + Qn(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Qr(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Qr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = Fi);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ke(t), null;
    case 6:
      if (e && t.stateNode != null) _m(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(L(166));
        if (((n = fr(_s.current)), fr(tn.current), Js(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Qt] = t),
            (s = r.nodeValue !== n) && ((e = yt), e !== null))
          )
            switch (e.tag) {
              case 3:
                qs(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  qs(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Qt] = t),
            (t.stateNode = r);
      }
      return Ke(t), null;
    case 13:
      if (
        (ke(Pe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (be && gt !== null && t.mode & 1 && !(t.flags & 128))
          zh(), lo(), (t.flags |= 98560), (s = !1);
        else if (((s = Js(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(L(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(L(317));
            s[Qt] = t;
          } else
            lo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ke(t), (s = !1);
        } else jt !== null && (Fu(jt), (jt = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Pe.current & 1 ? Be === 0 && (Be = 3) : Yc())),
          t.updateQueue !== null && (t.flags |= 4),
          Ke(t),
          null);
    case 4:
      return (
        co(), Nu(e, t), e === null && gs(t.stateNode.containerInfo), Ke(t), null
      );
    case 10:
      return Oc(t.type._context), Ke(t), null;
    case 17:
      return ut(t.type) && zi(), Ke(t), null;
    case 19:
      if ((ke(Pe), (s = t.memoizedState), s === null)) return Ke(t), null;
      if (((r = (t.flags & 128) !== 0), (i = s.rendering), i === null))
        if (r) jo(s, !1);
        else {
          if (Be !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Zi(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    jo(s, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (i = s.alternate),
                    i === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = i.childLanes),
                        (s.lanes = i.lanes),
                        (s.child = i.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = i.memoizedProps),
                        (s.memoizedState = i.memoizedState),
                        (s.updateQueue = i.updateQueue),
                        (s.type = i.type),
                        (e = i.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ye(Pe, (Pe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            De() > po &&
            ((t.flags |= 128), (r = !0), jo(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Zi(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              jo(s, !0),
              s.tail === null && s.tailMode === 'hidden' && !i.alternate && !be)
            )
              return Ke(t), null;
          } else
            2 * De() - s.renderingStartTime > po &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), jo(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = s.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (s.last = i));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = De()),
          (t.sibling = null),
          (n = Pe.current),
          ye(Pe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ke(t), null);
    case 22:
    case 23:
      return (
        Gc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ht & 1073741824 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ke(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function hx(e, t) {
  switch ((Pc(t), t.tag)) {
    case 1:
      return (
        ut(t.type) && zi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        co(),
        ke(lt),
        ke(Xe),
        Ic(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Lc(t), null;
    case 13:
      if (
        (ke(Pe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(L(340));
        lo();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ke(Pe), null;
    case 4:
      return co(), null;
    case 10:
      return Oc(t.type._context), null;
    case 22:
    case 23:
      return Gc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ni = !1,
  Qe = !1,
  mx = typeof WeakSet == 'function' ? WeakSet : Set,
  H = null;
function Yr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        Ae(e, t, r);
      }
    else n.current = null;
}
function Ou(e, t, n) {
  try {
    n();
  } catch (r) {
    Ae(e, t, r);
  }
}
var Cf = !1;
function vx(e, t) {
  if (((hu = Li), (e = Eh()), Cc(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            h = null;
          t: for (;;) {
            for (
              var f;
              d !== n || (o !== 0 && d.nodeType !== 3) || (a = i + o),
                d !== s || (r !== 0 && d.nodeType !== 3) || (l = i + r),
                d.nodeType === 3 && (i += d.nodeValue.length),
                (f = d.firstChild) !== null;

            )
              (h = d), (d = f);
            for (;;) {
              if (d === e) break t;
              if (
                (h === n && ++u === o && (a = i),
                h === s && ++c === r && (l = i),
                (f = d.nextSibling) !== null)
              )
                break;
              (d = h), (h = d.parentNode);
            }
            d = f;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (mu = { focusedElem: e, selectionRange: n }, Li = !1, H = t; H !== null; )
    if (((t = H), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (H = e);
    else
      for (; H !== null; ) {
        t = H;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var y = v.memoizedProps,
                    k = v.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Lt(t.type, y),
                      k,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var x = t.stateNode.containerInfo;
                x.nodeType === 1
                  ? (x.textContent = '')
                  : x.nodeType === 9 &&
                    x.documentElement &&
                    x.removeChild(x.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (_) {
          Ae(t, t.return, _);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (H = e);
          break;
        }
        H = t.return;
      }
  return (v = Cf), (Cf = !1), v;
}
function rs(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy;
        (o.destroy = void 0), s !== void 0 && Ou(t, n, s);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Oa(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Au(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function km(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), km(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Qt], delete t[xs], delete t[yu], delete t[q0], delete t[J0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Sm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ef(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Sm(e.return)) return null;
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
function Mu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Fi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Mu(e, t, n), e = e.sibling; e !== null; ) Mu(e, t, n), (e = e.sibling);
}
function Du(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Du(e, t, n), e = e.sibling; e !== null; ) Du(e, t, n), (e = e.sibling);
}
var He = null,
  It = !1;
function Nn(e, t, n) {
  for (n = n.child; n !== null; ) bm(e, t, n), (n = n.sibling);
}
function bm(e, t, n) {
  if (en && typeof en.onCommitFiberUnmount == 'function')
    try {
      en.onCommitFiberUnmount(Sa, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Qe || Yr(n, t);
    case 6:
      var r = He,
        o = It;
      (He = null),
        Nn(e, t, n),
        (He = r),
        (It = o),
        He !== null &&
          (It
            ? ((e = He),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : He.removeChild(n.stateNode));
      break;
    case 18:
      He !== null &&
        (It
          ? ((e = He),
            (n = n.stateNode),
            e.nodeType === 8
              ? wl(e.parentNode, n)
              : e.nodeType === 1 && wl(e, n),
            hs(e))
          : wl(He, n.stateNode));
      break;
    case 4:
      (r = He),
        (o = It),
        (He = n.stateNode.containerInfo),
        (It = !0),
        Nn(e, t, n),
        (He = r),
        (It = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Qe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var s = o,
            i = s.destroy;
          (s = s.tag),
            i !== void 0 && (s & 2 || s & 4) && Ou(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      Nn(e, t, n);
      break;
    case 1:
      if (
        !Qe &&
        (Yr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Ae(n, t, a);
        }
      Nn(e, t, n);
      break;
    case 21:
      Nn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Qe = (r = Qe) || n.memoizedState !== null), Nn(e, t, n), (Qe = r))
        : Nn(e, t, n);
      break;
    default:
      Nn(e, t, n);
  }
}
function Pf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new mx()),
      t.forEach(function (r) {
        var o = Cx.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Dt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var s = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (He = a.stateNode), (It = !1);
              break e;
            case 3:
              (He = a.stateNode.containerInfo), (It = !0);
              break e;
            case 4:
              (He = a.stateNode.containerInfo), (It = !0);
              break e;
          }
          a = a.return;
        }
        if (He === null) throw Error(L(160));
        bm(s, i, o), (He = null), (It = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        Ae(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Cm(t, e), (t = t.sibling);
}
function Cm(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Dt(t, e), Yt(e), r & 4)) {
        try {
          rs(3, e, e.return), Oa(3, e);
        } catch (y) {
          Ae(e, e.return, y);
        }
        try {
          rs(5, e, e.return);
        } catch (y) {
          Ae(e, e.return, y);
        }
      }
      break;
    case 1:
      Dt(t, e), Yt(e), r & 512 && n !== null && Yr(n, n.return);
      break;
    case 5:
      if (
        (Dt(t, e),
        Yt(e),
        r & 512 && n !== null && Yr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          cs(o, '');
        } catch (y) {
          Ae(e, e.return, y);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var s = e.memoizedProps,
          i = n !== null ? n.memoizedProps : s,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === 'input' && s.type === 'radio' && s.name != null && Gp(o, s),
              ou(a, i);
            var u = ou(a, s);
            for (i = 0; i < l.length; i += 2) {
              var c = l[i],
                d = l[i + 1];
              c === 'style'
                ? qp(o, d)
                : c === 'dangerouslySetInnerHTML'
                  ? Qp(o, d)
                  : c === 'children'
                    ? cs(o, d)
                    : fc(o, c, d, u);
            }
            switch (a) {
              case 'input':
                Jl(o, s);
                break;
              case 'textarea':
                Yp(o, s);
                break;
              case 'select':
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!s.multiple;
                var f = s.value;
                f != null
                  ? Qr(o, !!s.multiple, f, !1)
                  : h !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Qr(o, !!s.multiple, s.defaultValue, !0)
                      : Qr(o, !!s.multiple, s.multiple ? [] : '', !1));
            }
            o[xs] = s;
          } catch (y) {
            Ae(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Dt(t, e), Yt(e), r & 4)) {
        if (e.stateNode === null) throw Error(L(162));
        (o = e.stateNode), (s = e.memoizedProps);
        try {
          o.nodeValue = s;
        } catch (y) {
          Ae(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Dt(t, e), Yt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          hs(t.containerInfo);
        } catch (y) {
          Ae(e, e.return, y);
        }
      break;
    case 4:
      Dt(t, e), Yt(e);
      break;
    case 13:
      Dt(t, e),
        Yt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((s = o.memoizedState !== null),
          (o.stateNode.isHidden = s),
          !s ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Hc = De())),
        r & 4 && Pf(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Qe = (u = Qe) || c), Dt(t, e), (Qe = u)) : Dt(t, e),
        Yt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (H = e, c = e.child; c !== null; ) {
            for (d = H = c; H !== null; ) {
              switch (((h = H), (f = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  rs(4, h, h.return);
                  break;
                case 1:
                  Yr(h, h.return);
                  var v = h.stateNode;
                  if (typeof v.componentWillUnmount == 'function') {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (y) {
                      Ae(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Yr(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Rf(d);
                    continue;
                  }
              }
              f !== null ? ((f.return = h), (H = f)) : Rf(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((s = o.style),
                      typeof s.setProperty == 'function'
                        ? s.setProperty('display', 'none', 'important')
                        : (s.display = 'none'))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (i =
                        l != null && l.hasOwnProperty('display')
                          ? l.display
                          : null),
                      (a.style.display = Xp('display', i)));
              } catch (y) {
                Ae(e, e.return, y);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? '' : d.memoizedProps;
              } catch (y) {
                Ae(e, e.return, y);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Dt(t, e), Yt(e), r & 4 && Pf(e);
      break;
    case 21:
      break;
    default:
      Dt(t, e), Yt(e);
  }
}
function Yt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Sm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (cs(o, ''), (r.flags &= -33));
          var s = Ef(e);
          Du(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = Ef(e);
          Mu(e, a, i);
          break;
        default:
          throw Error(L(161));
      }
    } catch (l) {
      Ae(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function gx(e, t, n) {
  (H = e), Em(e);
}
function Em(e, t, n) {
  for (var r = (e.mode & 1) !== 0; H !== null; ) {
    var o = H,
      s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || ni;
      if (!i) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || Qe;
        a = ni;
        var u = Qe;
        if (((ni = i), (Qe = l) && !u))
          for (H = o; H !== null; )
            (i = H),
              (l = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Nf(o)
                : l !== null
                  ? ((l.return = i), (H = l))
                  : Nf(o);
        for (; s !== null; ) (H = s), Em(s), (s = s.sibling);
        (H = o), (ni = a), (Qe = u);
      }
      Tf(e);
    } else
      o.subtreeFlags & 8772 && s !== null ? ((s.return = o), (H = s)) : Tf(e);
  }
}
function Tf(e) {
  for (; H !== null; ) {
    var t = H;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Qe || Oa(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Qe)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Lt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = t.updateQueue;
              s !== null && ff(t, s, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ff(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    l.autoFocus && n.focus();
                    break;
                  case 'img':
                    l.src && (n.src = l.src);
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
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && hs(d);
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
              throw Error(L(163));
          }
        Qe || (t.flags & 512 && Au(t));
      } catch (h) {
        Ae(t, t.return, h);
      }
    }
    if (t === e) {
      H = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (H = n);
      break;
    }
    H = t.return;
  }
}
function Rf(e) {
  for (; H !== null; ) {
    var t = H;
    if (t === e) {
      H = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (H = n);
      break;
    }
    H = t.return;
  }
}
function Nf(e) {
  for (; H !== null; ) {
    var t = H;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Oa(4, t);
          } catch (l) {
            Ae(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Ae(t, o, l);
            }
          }
          var s = t.return;
          try {
            Au(t);
          } catch (l) {
            Ae(t, s, l);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Au(t);
          } catch (l) {
            Ae(t, i, l);
          }
      }
    } catch (l) {
      Ae(t, t.return, l);
    }
    if (t === e) {
      H = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (H = a);
      break;
    }
    H = t.return;
  }
}
var yx = Math.ceil,
  Ki = Tn.ReactCurrentDispatcher,
  Uc = Tn.ReactCurrentOwner,
  Et = Tn.ReactCurrentBatchConfig,
  pe = 0,
  We = null,
  Fe = null,
  Ze = 0,
  ht = 0,
  Kr = rr(0),
  Be = 0,
  Cs = null,
  xr = 0,
  Aa = 0,
  Wc = 0,
  os = null,
  it = null,
  Hc = 0,
  po = 1 / 0,
  fn = null,
  Qi = !1,
  Lu = null,
  Zn = null,
  ri = !1,
  Vn = null,
  Xi = 0,
  ss = 0,
  Iu = null,
  ki = -1,
  Si = 0;
function et() {
  return pe & 6 ? De() : ki !== -1 ? ki : (ki = De());
}
function Gn(e) {
  return e.mode & 1
    ? pe & 2 && Ze !== 0
      ? Ze & -Ze
      : tx.transition !== null
        ? (Si === 0 && (Si = ch()), Si)
        : ((e = ve),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : gh(e.type))),
          e)
    : 1;
}
function Vt(e, t, n, r) {
  if (50 < ss) throw ((ss = 0), (Iu = null), Error(L(185)));
  As(e, n, r),
    (!(pe & 2) || e !== We) &&
      (e === We && (!(pe & 2) && (Aa |= n), Be === 4 && jn(e, Ze)),
      ct(e, r),
      n === 1 && pe === 0 && !(t.mode & 1) && ((po = De() + 500), Ta && or()));
}
function ct(e, t) {
  var n = e.callbackNode;
  t0(e, t);
  var r = Di(e, e === We ? Ze : 0);
  if (r === 0)
    n !== null && Fd(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Fd(n), t === 1))
      e.tag === 0 ? ex(Of.bind(null, e)) : Ih(Of.bind(null, e)),
        Q0(function () {
          !(pe & 6) && or();
        }),
        (n = null);
    else {
      switch (dh(r)) {
        case 1:
          n = gc;
          break;
        case 4:
          n = lh;
          break;
        case 16:
          n = Mi;
          break;
        case 536870912:
          n = uh;
          break;
        default:
          n = Mi;
      }
      n = Dm(n, Pm.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Pm(e, t) {
  if (((ki = -1), (Si = 0), pe & 6)) throw Error(L(327));
  var n = e.callbackNode;
  if (to() && e.callbackNode !== n) return null;
  var r = Di(e, e === We ? Ze : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = qi(e, r);
  else {
    t = r;
    var o = pe;
    pe |= 2;
    var s = Rm();
    (We !== e || Ze !== t) && ((fn = null), (po = De() + 500), hr(e, t));
    do
      try {
        _x();
        break;
      } catch (a) {
        Tm(e, a);
      }
    while (!0);
    Nc(),
      (Ki.current = s),
      (pe = o),
      Fe !== null ? (t = 0) : ((We = null), (Ze = 0), (t = Be));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = uu(e)), o !== 0 && ((r = o), (t = ju(e, o)))), t === 1)
    )
      throw ((n = Cs), hr(e, 0), jn(e, r), ct(e, De()), n);
    if (t === 6) jn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !xx(o) &&
          ((t = qi(e, r)),
          t === 2 && ((s = uu(e)), s !== 0 && ((r = s), (t = ju(e, s)))),
          t === 1))
      )
        throw ((n = Cs), hr(e, 0), jn(e, r), ct(e, De()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          lr(e, it, fn);
          break;
        case 3:
          if (
            (jn(e, r), (r & 130023424) === r && ((t = Hc + 500 - De()), 10 < t))
          ) {
            if (Di(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              et(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = gu(lr.bind(null, e, it, fn), t);
            break;
          }
          lr(e, it, fn);
          break;
        case 4:
          if ((jn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - zt(r);
            (s = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~s);
          }
          if (
            ((r = o),
            (r = De() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * yx(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = gu(lr.bind(null, e, it, fn), r);
            break;
          }
          lr(e, it, fn);
          break;
        case 5:
          lr(e, it, fn);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return ct(e, De()), e.callbackNode === n ? Pm.bind(null, e) : null;
}
function ju(e, t) {
  var n = os;
  return (
    e.current.memoizedState.isDehydrated && (hr(e, t).flags |= 256),
    (e = qi(e, t)),
    e !== 2 && ((t = it), (it = n), t !== null && Fu(t)),
    e
  );
}
function Fu(e) {
  it === null ? (it = e) : it.push.apply(it, e);
}
function xx(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            s = o.getSnapshot;
          o = o.value;
          try {
            if (!$t(s(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
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
function jn(e, t) {
  for (
    t &= ~Wc,
      t &= ~Aa,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - zt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Of(e) {
  if (pe & 6) throw Error(L(327));
  to();
  var t = Di(e, 0);
  if (!(t & 1)) return ct(e, De()), null;
  var n = qi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = uu(e);
    r !== 0 && ((t = r), (n = ju(e, r)));
  }
  if (n === 1) throw ((n = Cs), hr(e, 0), jn(e, t), ct(e, De()), n);
  if (n === 6) throw Error(L(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    lr(e, it, fn),
    ct(e, De()),
    null
  );
}
function Zc(e, t) {
  var n = pe;
  pe |= 1;
  try {
    return e(t);
  } finally {
    (pe = n), pe === 0 && ((po = De() + 500), Ta && or());
  }
}
function wr(e) {
  Vn !== null && Vn.tag === 0 && !(pe & 6) && to();
  var t = pe;
  pe |= 1;
  var n = Et.transition,
    r = ve;
  try {
    if (((Et.transition = null), (ve = 1), e)) return e();
  } finally {
    (ve = r), (Et.transition = n), (pe = t), !(pe & 6) && or();
  }
}
function Gc() {
  (ht = Kr.current), ke(Kr);
}
function hr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), K0(n)), Fe !== null))
    for (n = Fe.return; n !== null; ) {
      var r = n;
      switch ((Pc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && zi();
          break;
        case 3:
          co(), ke(lt), ke(Xe), Ic();
          break;
        case 5:
          Lc(r);
          break;
        case 4:
          co();
          break;
        case 13:
          ke(Pe);
          break;
        case 19:
          ke(Pe);
          break;
        case 10:
          Oc(r.type._context);
          break;
        case 22:
        case 23:
          Gc();
      }
      n = n.return;
    }
  if (
    ((We = e),
    (Fe = e = Yn(e.current, null)),
    (Ze = ht = t),
    (Be = 0),
    (Cs = null),
    (Wc = Aa = xr = 0),
    (it = os = null),
    dr !== null)
  ) {
    for (t = 0; t < dr.length; t++)
      if (((n = dr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          s = n.pending;
        if (s !== null) {
          var i = s.next;
          (s.next = o), (r.next = i);
        }
        n.pending = r;
      }
    dr = null;
  }
  return e;
}
function Tm(e, t) {
  do {
    var n = Fe;
    try {
      if ((Nc(), (xi.current = Yi), Gi)) {
        for (var r = Te.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Gi = !1;
      }
      if (
        ((yr = 0),
        (Ue = $e = Te = null),
        (ns = !1),
        (ks = 0),
        (Uc.current = null),
        n === null || n.return === null)
      ) {
        (Be = 1), (Cs = t), (Fe = null);
        break;
      }
      e: {
        var s = e,
          i = n.return,
          a = n,
          l = t;
        if (
          ((t = Ze),
          (a.flags |= 32768),
          l !== null && typeof l == 'object' && typeof l.then == 'function')
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = c.alternate;
            h
              ? ((c.updateQueue = h.updateQueue),
                (c.memoizedState = h.memoizedState),
                (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var f = yf(i);
          if (f !== null) {
            (f.flags &= -257),
              xf(f, i, a, s, t),
              f.mode & 1 && gf(s, u, t),
              (t = f),
              (l = u);
            var v = t.updateQueue;
            if (v === null) {
              var y = new Set();
              y.add(l), (t.updateQueue = y);
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              gf(s, u, t), Yc();
              break e;
            }
            l = Error(L(426));
          }
        } else if (be && a.mode & 1) {
          var k = yf(i);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              xf(k, i, a, s, t),
              Tc(fo(l, a));
            break e;
          }
        }
        (s = l = fo(l, a)),
          Be !== 4 && (Be = 2),
          os === null ? (os = [s]) : os.push(s),
          (s = i);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var m = dm(s, l, t);
              df(s, m);
              break e;
            case 1:
              a = l;
              var p = s.type,
                x = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof p.getDerivedStateFromError == 'function' ||
                  (x !== null &&
                    typeof x.componentDidCatch == 'function' &&
                    (Zn === null || !Zn.has(x))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var _ = fm(s, a, t);
                df(s, _);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Om(n);
    } catch (S) {
      (t = S), Fe === n && n !== null && (Fe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Rm() {
  var e = Ki.current;
  return (Ki.current = Yi), e === null ? Yi : e;
}
function Yc() {
  (Be === 0 || Be === 3 || Be === 2) && (Be = 4),
    We === null || (!(xr & 268435455) && !(Aa & 268435455)) || jn(We, Ze);
}
function qi(e, t) {
  var n = pe;
  pe |= 2;
  var r = Rm();
  (We !== e || Ze !== t) && ((fn = null), hr(e, t));
  do
    try {
      wx();
      break;
    } catch (o) {
      Tm(e, o);
    }
  while (!0);
  if ((Nc(), (pe = n), (Ki.current = r), Fe !== null)) throw Error(L(261));
  return (We = null), (Ze = 0), Be;
}
function wx() {
  for (; Fe !== null; ) Nm(Fe);
}
function _x() {
  for (; Fe !== null && !Zy(); ) Nm(Fe);
}
function Nm(e) {
  var t = Mm(e.alternate, e, ht);
  (e.memoizedProps = e.pendingProps),
    t === null ? Om(e) : (Fe = t),
    (Uc.current = null);
}
function Om(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = hx(n, t)), n !== null)) {
        (n.flags &= 32767), (Fe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Be = 6), (Fe = null);
        return;
      }
    } else if (((n = px(n, t, ht)), n !== null)) {
      Fe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Fe = t;
      return;
    }
    Fe = t = e;
  } while (t !== null);
  Be === 0 && (Be = 5);
}
function lr(e, t, n) {
  var r = ve,
    o = Et.transition;
  try {
    (Et.transition = null), (ve = 1), kx(e, t, n, r);
  } finally {
    (Et.transition = o), (ve = r);
  }
  return null;
}
function kx(e, t, n, r) {
  do to();
  while (Vn !== null);
  if (pe & 6) throw Error(L(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(L(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (n0(e, s),
    e === We && ((Fe = We = null), (Ze = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ri ||
      ((ri = !0),
      Dm(Mi, function () {
        return to(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Et.transition), (Et.transition = null);
    var i = ve;
    ve = 1;
    var a = pe;
    (pe |= 4),
      (Uc.current = null),
      vx(e, n),
      Cm(n, e),
      B0(mu),
      (Li = !!hu),
      (mu = hu = null),
      (e.current = n),
      gx(n),
      Gy(),
      (pe = a),
      (ve = i),
      (Et.transition = s);
  } else e.current = n;
  if (
    (ri && ((ri = !1), (Vn = e), (Xi = o)),
    (s = e.pendingLanes),
    s === 0 && (Zn = null),
    Qy(n.stateNode),
    ct(e, De()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Qi) throw ((Qi = !1), (e = Lu), (Lu = null), e);
  return (
    Xi & 1 && e.tag !== 0 && to(),
    (s = e.pendingLanes),
    s & 1 ? (e === Iu ? ss++ : ((ss = 0), (Iu = e))) : (ss = 0),
    or(),
    null
  );
}
function to() {
  if (Vn !== null) {
    var e = dh(Xi),
      t = Et.transition,
      n = ve;
    try {
      if (((Et.transition = null), (ve = 16 > e ? 16 : e), Vn === null))
        var r = !1;
      else {
        if (((e = Vn), (Vn = null), (Xi = 0), pe & 6)) throw Error(L(331));
        var o = pe;
        for (pe |= 4, H = e.current; H !== null; ) {
          var s = H,
            i = s.child;
          if (H.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (H = u; H !== null; ) {
                  var c = H;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      rs(8, c, s);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (H = d);
                  else
                    for (; H !== null; ) {
                      c = H;
                      var h = c.sibling,
                        f = c.return;
                      if ((km(c), c === u)) {
                        H = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = f), (H = h);
                        break;
                      }
                      H = f;
                    }
                }
              }
              var v = s.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var k = y.sibling;
                    (y.sibling = null), (y = k);
                  } while (y !== null);
                }
              }
              H = s;
            }
          }
          if (s.subtreeFlags & 2064 && i !== null) (i.return = s), (H = i);
          else
            e: for (; H !== null; ) {
              if (((s = H), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    rs(9, s, s.return);
                }
              var m = s.sibling;
              if (m !== null) {
                (m.return = s.return), (H = m);
                break e;
              }
              H = s.return;
            }
        }
        var p = e.current;
        for (H = p; H !== null; ) {
          i = H;
          var x = i.child;
          if (i.subtreeFlags & 2064 && x !== null) (x.return = i), (H = x);
          else
            e: for (i = p; H !== null; ) {
              if (((a = H), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Oa(9, a);
                  }
                } catch (S) {
                  Ae(a, a.return, S);
                }
              if (a === i) {
                H = null;
                break e;
              }
              var _ = a.sibling;
              if (_ !== null) {
                (_.return = a.return), (H = _);
                break e;
              }
              H = a.return;
            }
        }
        if (
          ((pe = o), or(), en && typeof en.onPostCommitFiberRoot == 'function')
        )
          try {
            en.onPostCommitFiberRoot(Sa, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ve = n), (Et.transition = t);
    }
  }
  return !1;
}
function Af(e, t, n) {
  (t = fo(n, t)),
    (t = dm(e, t, 1)),
    (e = Hn(e, t, 1)),
    (t = et()),
    e !== null && (As(e, 1, t), ct(e, t));
}
function Ae(e, t, n) {
  if (e.tag === 3) Af(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Af(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Zn === null || !Zn.has(r)))
        ) {
          (e = fo(n, e)),
            (e = fm(t, e, 1)),
            (t = Hn(t, e, 1)),
            (e = et()),
            t !== null && (As(t, 1, e), ct(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Sx(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = et()),
    (e.pingedLanes |= e.suspendedLanes & n),
    We === e &&
      (Ze & n) === n &&
      (Be === 4 || (Be === 3 && (Ze & 130023424) === Ze && 500 > De() - Hc)
        ? hr(e, 0)
        : (Wc |= n)),
    ct(e, t);
}
function Am(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Gs), (Gs <<= 1), !(Gs & 130023424) && (Gs = 4194304))
      : (t = 1));
  var n = et();
  (e = _n(e, t)), e !== null && (As(e, t, n), ct(e, n));
}
function bx(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Am(e, n);
}
function Cx(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(L(314));
  }
  r !== null && r.delete(t), Am(e, n);
}
var Mm;
Mm = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || lt.current) at = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (at = !1), fx(e, t, n);
      at = !!(e.flags & 131072);
    }
  else (at = !1), be && t.flags & 1048576 && jh(t, Bi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      _i(e, t), (e = t.pendingProps);
      var o = ao(t, Xe.current);
      eo(t, n), (o = Fc(null, t, r, e, o, n));
      var s = zc();
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ut(r) ? ((s = !0), Vi(t)) : (s = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Mc(t),
            (o.updater = Na),
            (t.stateNode = o),
            (o._reactInternals = t),
            bu(t, r, e, n),
            (t = Pu(null, t, r, !0, s, n)))
          : ((t.tag = 0), be && s && Ec(t), qe(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (_i(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Px(r)),
          (e = Lt(r, e)),
          o)
        ) {
          case 0:
            t = Eu(null, t, r, e, n);
            break e;
          case 1:
            t = kf(null, t, r, e, n);
            break e;
          case 11:
            t = wf(null, t, r, e, n);
            break e;
          case 14:
            t = _f(null, t, r, Lt(r.type, e), n);
            break e;
        }
        throw Error(L(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Lt(r, o)),
        Eu(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Lt(r, o)),
        kf(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((vm(t), e === null)) throw Error(L(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (o = s.element),
          Uh(e, t),
          Hi(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (o = fo(Error(L(423)), t)), (t = Sf(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = fo(Error(L(424)), t)), (t = Sf(e, t, r, n, o));
            break e;
          } else
            for (
              gt = Wn(t.stateNode.containerInfo.firstChild),
                yt = t,
                be = !0,
                jt = null,
                n = $h(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((lo(), r === o)) {
            t = kn(e, t, n);
            break e;
          }
          qe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Wh(t),
        e === null && _u(t),
        (r = t.type),
        (o = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (i = o.children),
        vu(r, o) ? (i = null) : s !== null && vu(r, s) && (t.flags |= 32),
        mm(e, t),
        qe(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && _u(t), null;
    case 13:
      return gm(e, t, n);
    case 4:
      return (
        Dc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = uo(t, null, r, n)) : qe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Lt(r, o)),
        wf(e, t, r, o, n)
      );
    case 7:
      return qe(e, t, t.pendingProps, n), t.child;
    case 8:
      return qe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return qe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (s = t.memoizedProps),
          (i = o.value),
          ye(Ui, r._currentValue),
          (r._currentValue = i),
          s !== null)
        )
          if ($t(s.value, i)) {
            if (s.children === o.children && !lt.current) {
              t = kn(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                i = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      (l = gn(-1, n & -n)), (l.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      ku(s.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) i = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((i = s.return), i === null)) throw Error(L(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  ku(i, n, t),
                  (i = s.sibling);
              } else i = s.child;
              if (i !== null) i.return = s;
              else
                for (i = s; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((s = i.sibling), s !== null)) {
                    (s.return = i.return), (i = s);
                    break;
                  }
                  i = i.return;
                }
              s = i;
            }
        qe(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        eo(t, n),
        (o = Tt(o)),
        (r = r(o)),
        (t.flags |= 1),
        qe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Lt(r, t.pendingProps)),
        (o = Lt(r.type, o)),
        _f(e, t, r, o, n)
      );
    case 15:
      return pm(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Lt(r, o)),
        _i(e, t),
        (t.tag = 1),
        ut(r) ? ((e = !0), Vi(t)) : (e = !1),
        eo(t, n),
        cm(t, r, o),
        bu(t, r, o, n),
        Pu(null, t, r, !0, e, n)
      );
    case 19:
      return ym(e, t, n);
    case 22:
      return hm(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function Dm(e, t) {
  return ah(e, t);
}
function Ex(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ct(e, t, n, r) {
  return new Ex(e, t, n, r);
}
function Kc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Px(e) {
  if (typeof e == 'function') return Kc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === hc)) return 11;
    if (e === mc) return 14;
  }
  return 2;
}
function Yn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ct(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function bi(e, t, n, r, o, s) {
  var i = 2;
  if (((r = e), typeof e == 'function')) Kc(e) && (i = 1);
  else if (typeof e == 'string') i = 5;
  else
    e: switch (e) {
      case zr:
        return mr(n.children, o, s, t);
      case pc:
        (i = 8), (o |= 8);
        break;
      case Yl:
        return (
          (e = Ct(12, n, t, o | 2)), (e.elementType = Yl), (e.lanes = s), e
        );
      case Kl:
        return (e = Ct(13, n, t, o)), (e.elementType = Kl), (e.lanes = s), e;
      case Ql:
        return (e = Ct(19, n, t, o)), (e.elementType = Ql), (e.lanes = s), e;
      case Wp:
        return Ma(n, o, s, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Bp:
              i = 10;
              break e;
            case Up:
              i = 9;
              break e;
            case hc:
              i = 11;
              break e;
            case mc:
              i = 14;
              break e;
            case Dn:
              (i = 16), (r = null);
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Ct(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function mr(e, t, n, r) {
  return (e = Ct(7, e, r, t)), (e.lanes = n), e;
}
function Ma(e, t, n, r) {
  return (
    (e = Ct(22, e, r, t)),
    (e.elementType = Wp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Tl(e, t, n) {
  return (e = Ct(6, e, null, t)), (e.lanes = n), e;
}
function Rl(e, t, n) {
  return (
    (t = Ct(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Tx(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ul(0)),
    (this.expirationTimes = ul(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ul(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Qc(e, t, n, r, o, s, i, a, l) {
  return (
    (e = new Tx(e, t, n, a, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Ct(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Mc(s),
    e
  );
}
function Rx(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Fr,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Lm(e) {
  if (!e) return Xn;
  e = e._reactInternals;
  e: {
    if (Pr(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ut(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ut(n)) return Lh(e, n, t);
  }
  return t;
}
function Im(e, t, n, r, o, s, i, a, l) {
  return (
    (e = Qc(n, r, !0, e, o, s, i, a, l)),
    (e.context = Lm(null)),
    (n = e.current),
    (r = et()),
    (o = Gn(n)),
    (s = gn(r, o)),
    (s.callback = t ?? null),
    Hn(n, s, o),
    (e.current.lanes = o),
    As(e, o, r),
    ct(e, r),
    e
  );
}
function Da(e, t, n, r) {
  var o = t.current,
    s = et(),
    i = Gn(o);
  return (
    (n = Lm(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = gn(s, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Hn(o, t, i)),
    e !== null && (Vt(e, o, i, s), yi(e, o, i)),
    i
  );
}
function Ji(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Mf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Xc(e, t) {
  Mf(e, t), (e = e.alternate) && Mf(e, t);
}
function Nx() {
  return null;
}
var jm =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function qc(e) {
  this._internalRoot = e;
}
La.prototype.render = qc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  Da(e, t, null, null);
};
La.prototype.unmount = qc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    wr(function () {
      Da(null, e, null, null);
    }),
      (t[wn] = null);
  }
};
function La(e) {
  this._internalRoot = e;
}
La.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = hh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < In.length && t !== 0 && t < In[n].priority; n++);
    In.splice(n, 0, e), n === 0 && vh(e);
  }
};
function Jc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ia(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Df() {}
function Ox(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var s = r;
      r = function () {
        var u = Ji(i);
        s.call(u);
      };
    }
    var i = Im(t, r, e, 0, null, !1, !1, '', Df);
    return (
      (e._reactRootContainer = i),
      (e[wn] = i.current),
      gs(e.nodeType === 8 ? e.parentNode : e),
      wr(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var a = r;
    r = function () {
      var u = Ji(l);
      a.call(u);
    };
  }
  var l = Qc(e, 0, !1, null, null, !1, !1, '', Df);
  return (
    (e._reactRootContainer = l),
    (e[wn] = l.current),
    gs(e.nodeType === 8 ? e.parentNode : e),
    wr(function () {
      Da(t, l, n, r);
    }),
    l
  );
}
function ja(e, t, n, r, o) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof o == 'function') {
      var a = o;
      o = function () {
        var l = Ji(i);
        a.call(l);
      };
    }
    Da(t, i, e, o);
  } else i = Ox(n, t, e, o, r);
  return Ji(i);
}
fh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Zo(t.pendingLanes);
        n !== 0 &&
          (yc(t, n | 1), ct(t, De()), !(pe & 6) && ((po = De() + 500), or()));
      }
      break;
    case 13:
      wr(function () {
        var r = _n(e, 1);
        if (r !== null) {
          var o = et();
          Vt(r, e, 1, o);
        }
      }),
        Xc(e, 1);
  }
};
xc = function (e) {
  if (e.tag === 13) {
    var t = _n(e, 134217728);
    if (t !== null) {
      var n = et();
      Vt(t, e, 134217728, n);
    }
    Xc(e, 134217728);
  }
};
ph = function (e) {
  if (e.tag === 13) {
    var t = Gn(e),
      n = _n(e, t);
    if (n !== null) {
      var r = et();
      Vt(n, e, t, r);
    }
    Xc(e, t);
  }
};
hh = function () {
  return ve;
};
mh = function (e, t) {
  var n = ve;
  try {
    return (ve = e), t();
  } finally {
    ve = n;
  }
};
iu = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Jl(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Pa(r);
            if (!o) throw Error(L(90));
            Zp(r), Jl(r, o);
          }
        }
      }
      break;
    case 'textarea':
      Yp(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Qr(e, !!n.multiple, t, !1);
  }
};
th = Zc;
nh = wr;
var Ax = { usingClientEntryPoint: !1, Events: [Ds, Ur, Pa, Jp, eh, Zc] },
  Fo = {
    findFiberByHostInstance: cr,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  Mx = {
    bundleType: Fo.bundleType,
    version: Fo.version,
    rendererPackageName: Fo.rendererPackageName,
    rendererConfig: Fo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Tn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = sh(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Fo.findFiberByHostInstance || Nx,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var oi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!oi.isDisabled && oi.supportsFiber)
    try {
      (Sa = oi.inject(Mx)), (en = oi);
    } catch {}
}
_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ax;
_t.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Jc(t)) throw Error(L(200));
  return Rx(e, t, null, n);
};
_t.createRoot = function (e, t) {
  if (!Jc(e)) throw Error(L(299));
  var n = !1,
    r = '',
    o = jm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Qc(e, 1, !1, null, null, n, !1, r, o)),
    (e[wn] = t.current),
    gs(e.nodeType === 8 ? e.parentNode : e),
    new qc(t)
  );
};
_t.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(L(188))
      : ((e = Object.keys(e).join(',')), Error(L(268, e)));
  return (e = sh(t)), (e = e === null ? null : e.stateNode), e;
};
_t.flushSync = function (e) {
  return wr(e);
};
_t.hydrate = function (e, t, n) {
  if (!Ia(t)) throw Error(L(200));
  return ja(null, e, t, !0, n);
};
_t.hydrateRoot = function (e, t, n) {
  if (!Jc(e)) throw Error(L(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    s = '',
    i = jm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Im(t, null, e, 1, n ?? null, o, !1, s, i)),
    (e[wn] = t.current),
    gs(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new La(t);
};
_t.render = function (e, t, n) {
  if (!Ia(t)) throw Error(L(200));
  return ja(null, e, t, !1, n);
};
_t.unmountComponentAtNode = function (e) {
  if (!Ia(e)) throw Error(L(40));
  return e._reactRootContainer
    ? (wr(function () {
        ja(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[wn] = null);
        });
      }),
      !0)
    : !1;
};
_t.unstable_batchedUpdates = Zc;
_t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ia(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return ja(e, t, n, !1, r);
};
_t.version = '18.3.1-next-f1338f8080-20240426';
function Fm() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fm);
    } catch (e) {
      console.error(e);
    }
}
Fm(), (Fp.exports = _t);
var Fa = Fp.exports;
const zm = Ep(Fa);
var Lf = Fa;
(Zl.createRoot = Lf.createRoot), (Zl.hydrateRoot = Lf.hydrateRoot);
var Is = (e) => e.type === 'checkbox',
  pr = (e) => e instanceof Date,
  Je = (e) => e == null;
const Vm = (e) => typeof e == 'object';
var Le = (e) => !Je(e) && !Array.isArray(e) && Vm(e) && !pr(e),
  $m = (e) =>
    Le(e) && e.target ? (Is(e.target) ? e.target.checked : e.target.value) : e,
  Dx = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  Bm = (e, t) => e.has(Dx(t)),
  Lx = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return Le(t) && t.hasOwnProperty('isPrototypeOf');
  },
  ed =
    typeof window < 'u' &&
    typeof window.HTMLElement < 'u' &&
    typeof document < 'u';
function ot(e) {
  let t;
  const n = Array.isArray(e),
    r = typeof FileList < 'u' ? e instanceof FileList : !1;
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (!(ed && (e instanceof Blob || r)) && (n || Le(e)))
    if (((t = n ? [] : {}), !n && !Lx(e))) t = e;
    else for (const o in e) e.hasOwnProperty(o) && (t[o] = ot(e[o]));
  else return e;
  return t;
}
var za = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  Ee = (e) => e === void 0,
  F = (e, t, n) => {
    if (!t || !Le(e)) return n;
    const r = za(t.split(/[,[\].]+?/)).reduce((o, s) => (Je(o) ? o : o[s]), e);
    return Ee(r) || r === e ? (Ee(e[t]) ? n : e[t]) : r;
  },
  mt = (e) => typeof e == 'boolean',
  td = (e) => /^\w*$/.test(e),
  Um = (e) => za(e.replace(/["|']|\]/g, '').split(/\.|\[/)),
  me = (e, t, n) => {
    let r = -1;
    const o = td(t) ? [t] : Um(t),
      s = o.length,
      i = s - 1;
    for (; ++r < s; ) {
      const a = o[r];
      let l = n;
      if (r !== i) {
        const u = e[a];
        l = Le(u) || Array.isArray(u) ? u : isNaN(+o[r + 1]) ? {} : [];
      }
      if (a === '__proto__' || a === 'constructor' || a === 'prototype') return;
      (e[a] = l), (e = e[a]);
    }
    return e;
  };
const ea = { BLUR: 'blur', FOCUS_OUT: 'focusout', CHANGE: 'change' },
  Ft = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
  },
  un = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
  },
  Wm = R.createContext(null),
  Va = () => R.useContext(Wm),
  Ix = (e) => {
    const { children: t, ...n } = e;
    return R.createElement(Wm.Provider, { value: n }, t);
  };
var Hm = (e, t, n, r = !0) => {
    const o = { defaultValues: t._defaultValues };
    for (const s in e)
      Object.defineProperty(o, s, {
        get: () => {
          const i = s;
          return (
            t._proxyFormState[i] !== Ft.all &&
              (t._proxyFormState[i] = !r || Ft.all),
            n && (n[i] = !0),
            e[i]
          );
        },
      });
    return o;
  },
  st = (e) => Le(e) && !Object.keys(e).length,
  Zm = (e, t, n, r) => {
    n(e);
    const { name: o, ...s } = e;
    return (
      st(s) ||
      Object.keys(s).length >= Object.keys(t).length ||
      Object.keys(s).find((i) => t[i] === (!r || Ft.all))
    );
  },
  is = (e) => (Array.isArray(e) ? e : [e]),
  Gm = (e, t, n) =>
    !e ||
    !t ||
    e === t ||
    is(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function nd(e) {
  const t = R.useRef(e);
  (t.current = e),
    R.useEffect(() => {
      const n =
        !e.disabled &&
        t.current.subject &&
        t.current.subject.subscribe({ next: t.current.next });
      return () => {
        n && n.unsubscribe();
      };
    }, [e.disabled]);
}
function jx(e) {
  const t = Va(),
    { control: n = t.control, disabled: r, name: o, exact: s } = e || {},
    [i, a] = R.useState(n._formState),
    l = R.useRef(!0),
    u = R.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    }),
    c = R.useRef(o);
  return (
    (c.current = o),
    nd({
      disabled: r,
      next: (d) =>
        l.current &&
        Gm(c.current, d.name, s) &&
        Zm(d, u.current, n._updateFormState) &&
        a({ ...n._formState, ...d }),
      subject: n._subjects.state,
    }),
    R.useEffect(
      () => (
        (l.current = !0),
        u.current.isValid && n._updateValid(!0),
        () => {
          l.current = !1;
        }
      ),
      [n],
    ),
    R.useMemo(() => Hm(i, n, u.current, !1), [i, n])
  );
}
var Jt = (e) => typeof e == 'string',
  Ym = (e, t, n, r, o) =>
    Jt(e)
      ? (r && t.watch.add(e), F(n, e, o))
      : Array.isArray(e)
        ? e.map((s) => (r && t.watch.add(s), F(n, s)))
        : (r && (t.watchAll = !0), n);
function Fx(e) {
  const t = Va(),
    {
      control: n = t.control,
      name: r,
      defaultValue: o,
      disabled: s,
      exact: i,
    } = e || {},
    a = R.useRef(r);
  (a.current = r),
    nd({
      disabled: s,
      subject: n._subjects.values,
      next: (c) => {
        Gm(a.current, c.name, i) &&
          u(ot(Ym(a.current, n._names, c.values || n._formValues, !1, o)));
      },
    });
  const [l, u] = R.useState(n._getWatch(r, o));
  return R.useEffect(() => n._removeUnmounted()), l;
}
function zx(e) {
  const t = Va(),
    { name: n, disabled: r, control: o = t.control, shouldUnregister: s } = e,
    i = Bm(o._names.array, n),
    a = Fx({
      control: o,
      name: n,
      defaultValue: F(o._formValues, n, F(o._defaultValues, n, e.defaultValue)),
      exact: !0,
    }),
    l = jx({ control: o, name: n, exact: !0 }),
    u = R.useRef(
      o.register(n, {
        ...e.rules,
        value: a,
        ...(mt(e.disabled) ? { disabled: e.disabled } : {}),
      }),
    ),
    c = R.useMemo(
      () =>
        Object.defineProperties(
          {},
          {
            invalid: { enumerable: !0, get: () => !!F(l.errors, n) },
            isDirty: { enumerable: !0, get: () => !!F(l.dirtyFields, n) },
            isTouched: { enumerable: !0, get: () => !!F(l.touchedFields, n) },
            isValidating: {
              enumerable: !0,
              get: () => !!F(l.validatingFields, n),
            },
            error: { enumerable: !0, get: () => F(l.errors, n) },
          },
        ),
      [l, n],
    ),
    d = R.useMemo(
      () => ({
        name: n,
        value: a,
        ...(mt(r) || l.disabled ? { disabled: l.disabled || r } : {}),
        onChange: (h) =>
          u.current.onChange({
            target: { value: $m(h), name: n },
            type: ea.CHANGE,
          }),
        onBlur: () =>
          u.current.onBlur({
            target: { value: F(o._formValues, n), name: n },
            type: ea.BLUR,
          }),
        ref: (h) => {
          const f = F(o._fields, n);
          f &&
            h &&
            (f._f.ref = {
              focus: () => h.focus(),
              select: () => h.select(),
              setCustomValidity: (v) => h.setCustomValidity(v),
              reportValidity: () => h.reportValidity(),
            });
        },
      }),
      [n, o._formValues, r, l.disabled, a, o._fields],
    );
  return (
    R.useEffect(() => {
      const h = o._options.shouldUnregister || s,
        f = (v, y) => {
          const k = F(o._fields, v);
          k && k._f && (k._f.mount = y);
        };
      if ((f(n, !0), h)) {
        const v = ot(F(o._options.defaultValues, n));
        me(o._defaultValues, n, v),
          Ee(F(o._formValues, n)) && me(o._formValues, n, v);
      }
      return () => {
        (i ? h && !o._state.action : h) ? o.unregister(n) : f(n, !1);
      };
    }, [n, o, i, s]),
    R.useEffect(() => {
      mt(r) &&
        F(o._fields, n) &&
        o._updateDisabledField({
          disabled: r,
          fields: o._fields,
          name: n,
          value: F(o._fields, n)._f.value,
        });
    }, [r, n, o]),
    R.useMemo(() => ({ field: d, formState: l, fieldState: c }), [d, l, c])
  );
}
const Vx = (e) => e.render(zx(e));
var Km = (e, t, n, r, o) =>
    t
      ? {
          ...n[e],
          types: { ...(n[e] && n[e].types ? n[e].types : {}), [r]: o || !0 },
        }
      : {},
  If = (e) => ({
    isOnSubmit: !e || e === Ft.onSubmit,
    isOnBlur: e === Ft.onBlur,
    isOnChange: e === Ft.onChange,
    isOnAll: e === Ft.all,
    isOnTouch: e === Ft.onTouched,
  }),
  jf = (e, t, n) =>
    !n &&
    (t.watchAll ||
      t.watch.has(e) ||
      [...t.watch].some(
        (r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length)),
      ));
const as = (e, t, n, r) => {
  for (const o of n || Object.keys(e)) {
    const s = F(e, o);
    if (s) {
      const { _f: i, ...a } = s;
      if (i) {
        if (i.refs && i.refs[0] && t(i.refs[0], o) && !r) return !0;
        if (i.ref && t(i.ref, i.name) && !r) return !0;
        if (as(a, t)) break;
      } else if (Le(a) && as(a, t)) break;
    }
  }
};
var $x = (e, t, n) => {
    const r = is(F(e, n));
    return me(r, 'root', t[n]), me(e, n, r), e;
  },
  rd = (e) => e.type === 'file',
  Xt = (e) => typeof e == 'function',
  ta = (e) => {
    if (!ed) return !1;
    const t = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    );
  },
  Ci = (e) => Jt(e),
  od = (e) => e.type === 'radio',
  na = (e) => e instanceof RegExp;
const Ff = { value: !1, isValid: !1 },
  zf = { value: !0, isValid: !0 };
var Qm = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e
        .filter((n) => n && n.checked && !n.disabled)
        .map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !Ee(e[0].attributes.value)
        ? Ee(e[0].value) || e[0].value === ''
          ? zf
          : { value: e[0].value, isValid: !0 }
        : zf
      : Ff;
  }
  return Ff;
};
const Vf = { isValid: !1, value: null };
var Xm = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (t, n) =>
          n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : t,
        Vf,
      )
    : Vf;
function $f(e, t, n = 'validate') {
  if (Ci(e) || (Array.isArray(e) && e.every(Ci)) || (mt(e) && !e))
    return { type: n, message: Ci(e) ? e : '', ref: t };
}
var Mr = (e) => (Le(e) && !na(e) ? e : { value: e, message: '' }),
  Bf = async (e, t, n, r, o) => {
    const {
        ref: s,
        refs: i,
        required: a,
        maxLength: l,
        minLength: u,
        min: c,
        max: d,
        pattern: h,
        validate: f,
        name: v,
        valueAsNumber: y,
        mount: k,
        disabled: m,
      } = e._f,
      p = F(t, v);
    if (!k || m) return {};
    const x = i ? i[0] : s,
      _ = (D) => {
        r &&
          x.reportValidity &&
          (x.setCustomValidity(mt(D) ? '' : D || ''), x.reportValidity());
      },
      S = {},
      P = od(s),
      T = Is(s),
      N = P || T,
      Z =
        ((y || rd(s)) && Ee(s.value) && Ee(p)) ||
        (ta(s) && s.value === '') ||
        p === '' ||
        (Array.isArray(p) && !p.length),
      j = Km.bind(null, v, n, S),
      te = (D, W, Y, ie = un.maxLength, Q = un.minLength) => {
        const q = D ? W : Y;
        S[v] = { type: D ? ie : Q, message: q, ref: s, ...j(D ? ie : Q, q) };
      };
    if (
      o
        ? !Array.isArray(p) || !p.length
        : a &&
          ((!N && (Z || Je(p))) ||
            (mt(p) && !p) ||
            (T && !Qm(i).isValid) ||
            (P && !Xm(i).isValid))
    ) {
      const { value: D, message: W } = Ci(a)
        ? { value: !!a, message: a }
        : Mr(a);
      if (
        D &&
        ((S[v] = {
          type: un.required,
          message: W,
          ref: x,
          ...j(un.required, W),
        }),
        !n)
      )
        return _(W), S;
    }
    if (!Z && (!Je(c) || !Je(d))) {
      let D, W;
      const Y = Mr(d),
        ie = Mr(c);
      if (!Je(p) && !isNaN(p)) {
        const Q = s.valueAsNumber || (p && +p);
        Je(Y.value) || (D = Q > Y.value), Je(ie.value) || (W = Q < ie.value);
      } else {
        const Q = s.valueAsDate || new Date(p),
          q = (V) => new Date(new Date().toDateString() + ' ' + V),
          O = s.type == 'time',
          A = s.type == 'week';
        Jt(Y.value) &&
          p &&
          (D = O ? q(p) > q(Y.value) : A ? p > Y.value : Q > new Date(Y.value)),
          Jt(ie.value) &&
            p &&
            (W = O
              ? q(p) < q(ie.value)
              : A
                ? p < ie.value
                : Q < new Date(ie.value));
      }
      if ((D || W) && (te(!!D, Y.message, ie.message, un.max, un.min), !n))
        return _(S[v].message), S;
    }
    if ((l || u) && !Z && (Jt(p) || (o && Array.isArray(p)))) {
      const D = Mr(l),
        W = Mr(u),
        Y = !Je(D.value) && p.length > +D.value,
        ie = !Je(W.value) && p.length < +W.value;
      if ((Y || ie) && (te(Y, D.message, W.message), !n))
        return _(S[v].message), S;
    }
    if (h && !Z && Jt(p)) {
      const { value: D, message: W } = Mr(h);
      if (
        na(D) &&
        !p.match(D) &&
        ((S[v] = { type: un.pattern, message: W, ref: s, ...j(un.pattern, W) }),
        !n)
      )
        return _(W), S;
    }
    if (f) {
      if (Xt(f)) {
        const D = await f(p, t),
          W = $f(D, x);
        if (W && ((S[v] = { ...W, ...j(un.validate, W.message) }), !n))
          return _(W.message), S;
      } else if (Le(f)) {
        let D = {};
        for (const W in f) {
          if (!st(D) && !n) break;
          const Y = $f(await f[W](p, t), x, W);
          Y &&
            ((D = { ...Y, ...j(W, Y.message) }), _(Y.message), n && (S[v] = D));
        }
        if (!st(D) && ((S[v] = { ref: x, ...D }), !n)) return S;
      }
    }
    return _(!0), S;
  };
function Bx(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; ) e = Ee(e) ? r++ : e[t[r++]];
  return e;
}
function Ux(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !Ee(e[t])) return !1;
  return !0;
}
function Ve(e, t) {
  const n = Array.isArray(t) ? t : td(t) ? [t] : Um(t),
    r = n.length === 1 ? e : Bx(e, n),
    o = n.length - 1,
    s = n[o];
  return (
    r && delete r[s],
    o !== 0 &&
      ((Le(r) && st(r)) || (Array.isArray(r) && Ux(r))) &&
      Ve(e, n.slice(0, -1)),
    e
  );
}
var Nl = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: (o) => {
        for (const s of e) s.next && s.next(o);
      },
      subscribe: (o) => (
        e.push(o),
        {
          unsubscribe: () => {
            e = e.filter((s) => s !== o);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  },
  zu = (e) => Je(e) || !Vm(e);
function Fn(e, t) {
  if (zu(e) || zu(t)) return e === t;
  if (pr(e) && pr(t)) return e.getTime() === t.getTime();
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const o of n) {
    const s = e[o];
    if (!r.includes(o)) return !1;
    if (o !== 'ref') {
      const i = t[o];
      if (
        (pr(s) && pr(i)) ||
        (Le(s) && Le(i)) ||
        (Array.isArray(s) && Array.isArray(i))
          ? !Fn(s, i)
          : s !== i
      )
        return !1;
    }
  }
  return !0;
}
var qm = (e) => e.type === 'select-multiple',
  Wx = (e) => od(e) || Is(e),
  Ol = (e) => ta(e) && e.isConnected,
  Jm = (e) => {
    for (const t in e) if (Xt(e[t])) return !0;
    return !1;
  };
function ra(e, t = {}) {
  const n = Array.isArray(e);
  if (Le(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || (Le(e[r]) && !Jm(e[r]))
        ? ((t[r] = Array.isArray(e[r]) ? [] : {}), ra(e[r], t[r]))
        : Je(e[r]) || (t[r] = !0);
  return t;
}
function ev(e, t, n) {
  const r = Array.isArray(e);
  if (Le(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || (Le(e[o]) && !Jm(e[o]))
        ? Ee(t) || zu(n[o])
          ? (n[o] = Array.isArray(e[o]) ? ra(e[o], []) : { ...ra(e[o]) })
          : ev(e[o], Je(t) ? {} : t[o], n[o])
        : (n[o] = !Fn(e[o], t[o]));
  return n;
}
var zo = (e, t) => ev(e, t, ra(t)),
  tv = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) =>
    Ee(e)
      ? e
      : t
        ? e === ''
          ? NaN
          : e && +e
        : n && Jt(e)
          ? new Date(e)
          : r
            ? r(e)
            : e;
function Al(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return rd(t)
      ? t.files
      : od(t)
        ? Xm(e.refs).value
        : qm(t)
          ? [...t.selectedOptions].map(({ value: n }) => n)
          : Is(t)
            ? Qm(e.refs).value
            : tv(Ee(t.value) ? e.ref.value : t.value, e);
}
var Hx = (e, t, n, r) => {
    const o = {};
    for (const s of e) {
      const i = F(t, s);
      i && me(o, s, i._f);
    }
    return {
      criteriaMode: n,
      names: [...e],
      fields: o,
      shouldUseNativeValidation: r,
    };
  },
  Vo = (e) =>
    Ee(e)
      ? e
      : na(e)
        ? e.source
        : Le(e)
          ? na(e.value)
            ? e.value.source
            : e.value
          : e;
const Uf = 'AsyncFunction';
var Zx = (e) =>
    !!e &&
    !!e.validate &&
    !!(
      (Xt(e.validate) && e.validate.constructor.name === Uf) ||
      (Le(e.validate) &&
        Object.values(e.validate).find((t) => t.constructor.name === Uf))
    ),
  Gx = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function Wf(e, t, n) {
  const r = F(e, n);
  if (r || td(n)) return { error: r, name: n };
  const o = n.split('.');
  for (; o.length; ) {
    const s = o.join('.'),
      i = F(t, s),
      a = F(e, s);
    if (i && !Array.isArray(i) && n !== s) return { name: n };
    if (a && a.type) return { name: s, error: a };
    o.pop();
  }
  return { name: n };
}
var Yx = (e, t, n, r, o) =>
    o.isOnAll
      ? !1
      : !n && o.isOnTouch
        ? !(t || e)
        : (n ? r.isOnBlur : o.isOnBlur)
          ? !e
          : (n ? r.isOnChange : o.isOnChange)
            ? e
            : !0,
  Kx = (e, t) => !za(F(e, t)).length && Ve(e, t);
const Qx = {
  mode: Ft.onSubmit,
  reValidateMode: Ft.onChange,
  shouldFocusError: !0,
};
function Xx(e = {}) {
  let t = { ...Qx, ...e },
    n = {
      submitCount: 0,
      isDirty: !1,
      isLoading: Xt(t.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: t.errors || {},
      disabled: t.disabled || !1,
    },
    r = {},
    o =
      Le(t.defaultValues) || Le(t.values)
        ? ot(t.defaultValues || t.values) || {}
        : {},
    s = t.shouldUnregister ? {} : ot(o),
    i = { action: !1, mount: !1, watch: !1 },
    a = {
      mount: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    l,
    u = 0;
  const c = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    d = { values: Nl(), array: Nl(), state: Nl() },
    h = If(t.mode),
    f = If(t.reValidateMode),
    v = t.criteriaMode === Ft.all,
    y = (w) => (C) => {
      clearTimeout(u), (u = setTimeout(w, C));
    },
    k = async (w) => {
      if (!t.disabled && (c.isValid || w)) {
        const C = t.resolver ? st((await N()).errors) : await j(r, !0);
        C !== n.isValid && d.state.next({ isValid: C });
      }
    },
    m = (w, C) => {
      !t.disabled &&
        (c.isValidating || c.validatingFields) &&
        ((w || Array.from(a.mount)).forEach((E) => {
          E && (C ? me(n.validatingFields, E, C) : Ve(n.validatingFields, E));
        }),
        d.state.next({
          validatingFields: n.validatingFields,
          isValidating: !st(n.validatingFields),
        }));
    },
    p = (w, C = [], E, $, z = !0, M = !0) => {
      if ($ && E && !t.disabled) {
        if (((i.action = !0), M && Array.isArray(F(r, w)))) {
          const G = E(F(r, w), $.argA, $.argB);
          z && me(r, w, G);
        }
        if (M && Array.isArray(F(n.errors, w))) {
          const G = E(F(n.errors, w), $.argA, $.argB);
          z && me(n.errors, w, G), Kx(n.errors, w);
        }
        if (c.touchedFields && M && Array.isArray(F(n.touchedFields, w))) {
          const G = E(F(n.touchedFields, w), $.argA, $.argB);
          z && me(n.touchedFields, w, G);
        }
        c.dirtyFields && (n.dirtyFields = zo(o, s)),
          d.state.next({
            name: w,
            isDirty: D(w, C),
            dirtyFields: n.dirtyFields,
            errors: n.errors,
            isValid: n.isValid,
          });
      } else me(s, w, C);
    },
    x = (w, C) => {
      me(n.errors, w, C), d.state.next({ errors: n.errors });
    },
    _ = (w) => {
      (n.errors = w), d.state.next({ errors: n.errors, isValid: !1 });
    },
    S = (w, C, E, $) => {
      const z = F(r, w);
      if (z) {
        const M = F(s, w, Ee(E) ? F(o, w) : E);
        Ee(M) || ($ && $.defaultChecked) || C
          ? me(s, w, C ? M : Al(z._f))
          : ie(w, M),
          i.mount && k();
      }
    },
    P = (w, C, E, $, z) => {
      let M = !1,
        G = !1;
      const le = { name: w };
      if (!t.disabled) {
        const je = !!(F(r, w) && F(r, w)._f && F(r, w)._f.disabled);
        if (!E || $) {
          c.isDirty &&
            ((G = n.isDirty),
            (n.isDirty = le.isDirty = D()),
            (M = G !== le.isDirty));
          const Ce = je || Fn(F(o, w), C);
          (G = !!(!je && F(n.dirtyFields, w))),
            Ce || je ? Ve(n.dirtyFields, w) : me(n.dirtyFields, w, !0),
            (le.dirtyFields = n.dirtyFields),
            (M = M || (c.dirtyFields && G !== !Ce));
        }
        if (E) {
          const Ce = F(n.touchedFields, w);
          Ce ||
            (me(n.touchedFields, w, E),
            (le.touchedFields = n.touchedFields),
            (M = M || (c.touchedFields && Ce !== E)));
        }
        M && z && d.state.next(le);
      }
      return M ? le : {};
    },
    T = (w, C, E, $) => {
      const z = F(n.errors, w),
        M = c.isValid && mt(C) && n.isValid !== C;
      if (
        (t.delayError && E
          ? ((l = y(() => x(w, E))), l(t.delayError))
          : (clearTimeout(u),
            (l = null),
            E ? me(n.errors, w, E) : Ve(n.errors, w)),
        (E ? !Fn(z, E) : z) || !st($) || M)
      ) {
        const G = {
          ...$,
          ...(M && mt(C) ? { isValid: C } : {}),
          errors: n.errors,
          name: w,
        };
        (n = { ...n, ...G }), d.state.next(G);
      }
    },
    N = async (w) => {
      m(w, !0);
      const C = await t.resolver(
        s,
        t.context,
        Hx(w || a.mount, r, t.criteriaMode, t.shouldUseNativeValidation),
      );
      return m(w), C;
    },
    Z = async (w) => {
      const { errors: C } = await N(w);
      if (w)
        for (const E of w) {
          const $ = F(C, E);
          $ ? me(n.errors, E, $) : Ve(n.errors, E);
        }
      else n.errors = C;
      return C;
    },
    j = async (w, C, E = { valid: !0 }) => {
      for (const $ in w) {
        const z = w[$];
        if (z) {
          const { _f: M, ...G } = z;
          if (M) {
            const le = a.array.has(M.name),
              je = z._f && Zx(z._f);
            je && c.validatingFields && m([$], !0);
            const Ce = await Bf(z, s, v, t.shouldUseNativeValidation && !C, le);
            if (
              (je && c.validatingFields && m([$]),
              Ce[M.name] && ((E.valid = !1), C))
            )
              break;
            !C &&
              (F(Ce, M.name)
                ? le
                  ? $x(n.errors, Ce, M.name)
                  : me(n.errors, M.name, Ce[M.name])
                : Ve(n.errors, M.name));
          }
          !st(G) && (await j(G, C, E));
        }
      }
      return E.valid;
    },
    te = () => {
      for (const w of a.unMount) {
        const C = F(r, w);
        C &&
          (C._f.refs ? C._f.refs.every((E) => !Ol(E)) : !Ol(C._f.ref)) &&
          Me(w);
      }
      a.unMount = new Set();
    },
    D = (w, C) => !t.disabled && (w && C && me(s, w, C), !Fn(ne(), o)),
    W = (w, C, E) =>
      Ym(w, a, { ...(i.mount ? s : Ee(C) ? o : Jt(w) ? { [w]: C } : C) }, E, C),
    Y = (w) => za(F(i.mount ? s : o, w, t.shouldUnregister ? F(o, w, []) : [])),
    ie = (w, C, E = {}) => {
      const $ = F(r, w);
      let z = C;
      if ($) {
        const M = $._f;
        M &&
          (!M.disabled && me(s, w, tv(C, M)),
          (z = ta(M.ref) && Je(C) ? '' : C),
          qm(M.ref)
            ? [...M.ref.options].forEach(
                (G) => (G.selected = z.includes(G.value)),
              )
            : M.refs
              ? Is(M.ref)
                ? M.refs.length > 1
                  ? M.refs.forEach(
                      (G) =>
                        (!G.defaultChecked || !G.disabled) &&
                        (G.checked = Array.isArray(z)
                          ? !!z.find((le) => le === G.value)
                          : z === G.value),
                    )
                  : M.refs[0] && (M.refs[0].checked = !!z)
                : M.refs.forEach((G) => (G.checked = G.value === z))
              : rd(M.ref)
                ? (M.ref.value = '')
                : ((M.ref.value = z),
                  M.ref.type || d.values.next({ name: w, values: { ...s } })));
      }
      (E.shouldDirty || E.shouldTouch) &&
        P(w, z, E.shouldTouch, E.shouldDirty, !0),
        E.shouldValidate && V(w);
    },
    Q = (w, C, E) => {
      for (const $ in C) {
        const z = C[$],
          M = `${w}.${$}`,
          G = F(r, M);
        (a.array.has(w) || Le(z) || (G && !G._f)) && !pr(z)
          ? Q(M, z, E)
          : ie(M, z, E);
      }
    },
    q = (w, C, E = {}) => {
      const $ = F(r, w),
        z = a.array.has(w),
        M = ot(C);
      me(s, w, M),
        z
          ? (d.array.next({ name: w, values: { ...s } }),
            (c.isDirty || c.dirtyFields) &&
              E.shouldDirty &&
              d.state.next({
                name: w,
                dirtyFields: zo(o, s),
                isDirty: D(w, M),
              }))
          : $ && !$._f && !Je(M)
            ? Q(w, M, E)
            : ie(w, M, E),
        jf(w, a) && d.state.next({ ...n }),
        d.values.next({ name: i.mount ? w : void 0, values: { ...s } });
    },
    O = async (w) => {
      i.mount = !0;
      const C = w.target;
      let E = C.name,
        $ = !0;
      const z = F(r, E),
        M = () => (C.type ? Al(z._f) : $m(w)),
        G = (le) => {
          $ =
            Number.isNaN(le) ||
            (pr(le) && isNaN(le.getTime())) ||
            Fn(le, F(s, E, le));
        };
      if (z) {
        let le, je;
        const Ce = M(),
          ln = w.type === ea.BLUR || w.type === ea.FOCUS_OUT,
          To =
            (!Gx(z._f) && !t.resolver && !F(n.errors, E) && !z._f.deps) ||
            Yx(ln, F(n.touchedFields, E), n.isSubmitted, f, h),
          Zt = jf(E, a, ln);
        me(s, E, Ce),
          ln
            ? (z._f.onBlur && z._f.onBlur(w), l && l(0))
            : z._f.onChange && z._f.onChange(w);
        const Nr = P(E, Ce, ln, !1),
          Or = !st(Nr) || Zt;
        if (
          (!ln && d.values.next({ name: E, type: w.type, values: { ...s } }),
          To)
        )
          return (
            c.isValid && (t.mode === 'onBlur' ? ln && k() : k()),
            Or && d.state.next({ name: E, ...(Zt ? {} : Nr) })
          );
        if ((!ln && Zt && d.state.next({ ...n }), t.resolver)) {
          const { errors: Ro } = await N([E]);
          if ((G(Ce), $)) {
            const nl = Wf(n.errors, r, E),
              No = Wf(Ro, r, nl.name || E);
            (le = No.error), (E = No.name), (je = st(Ro));
          }
        } else
          m([E], !0),
            (le = (await Bf(z, s, v, t.shouldUseNativeValidation))[E]),
            m([E]),
            G(Ce),
            $ && (le ? (je = !1) : c.isValid && (je = await j(r, !0)));
        $ && (z._f.deps && V(z._f.deps), T(E, je, le, Nr));
      }
    },
    A = (w, C) => {
      if (F(n.errors, C) && w.focus) return w.focus(), 1;
    },
    V = async (w, C = {}) => {
      let E, $;
      const z = is(w);
      if (t.resolver) {
        const M = await Z(Ee(w) ? w : z);
        (E = st(M)), ($ = w ? !z.some((G) => F(M, G)) : E);
      } else
        w
          ? (($ = (
              await Promise.all(
                z.map(async (M) => {
                  const G = F(r, M);
                  return await j(G && G._f ? { [M]: G } : G);
                }),
              )
            ).every(Boolean)),
            !(!$ && !n.isValid) && k())
          : ($ = E = await j(r));
      return (
        d.state.next({
          ...(!Jt(w) || (c.isValid && E !== n.isValid) ? {} : { name: w }),
          ...(t.resolver || !w ? { isValid: E } : {}),
          errors: n.errors,
        }),
        C.shouldFocus && !$ && as(r, A, w ? z : a.mount),
        $
      );
    },
    ne = (w) => {
      const C = { ...(i.mount ? s : o) };
      return Ee(w) ? C : Jt(w) ? F(C, w) : w.map((E) => F(C, E));
    },
    X = (w, C) => ({
      invalid: !!F((C || n).errors, w),
      isDirty: !!F((C || n).dirtyFields, w),
      error: F((C || n).errors, w),
      isValidating: !!F(n.validatingFields, w),
      isTouched: !!F((C || n).touchedFields, w),
    }),
    ae = (w) => {
      w && is(w).forEach((C) => Ve(n.errors, C)),
        d.state.next({ errors: w ? n.errors : {} });
    },
    ue = (w, C, E) => {
      const $ = (F(r, w, { _f: {} })._f || {}).ref,
        z = F(n.errors, w) || {},
        { ref: M, message: G, type: le, ...je } = z;
      me(n.errors, w, { ...je, ...C, ref: $ }),
        d.state.next({ name: w, errors: n.errors, isValid: !1 }),
        E && E.shouldFocus && $ && $.focus && $.focus();
    },
    Ne = (w, C) =>
      Xt(w)
        ? d.values.subscribe({ next: (E) => w(W(void 0, C), E) })
        : W(w, C, !0),
    Me = (w, C = {}) => {
      for (const E of w ? is(w) : a.mount)
        a.mount.delete(E),
          a.array.delete(E),
          C.keepValue || (Ve(r, E), Ve(s, E)),
          !C.keepError && Ve(n.errors, E),
          !C.keepDirty && Ve(n.dirtyFields, E),
          !C.keepTouched && Ve(n.touchedFields, E),
          !C.keepIsValidating && Ve(n.validatingFields, E),
          !t.shouldUnregister && !C.keepDefaultValue && Ve(o, E);
      d.values.next({ values: { ...s } }),
        d.state.next({ ...n, ...(C.keepDirty ? { isDirty: D() } : {}) }),
        !C.keepIsValid && k();
    },
    he = ({ disabled: w, name: C, field: E, fields: $, value: z }) => {
      if ((mt(w) && i.mount) || w) {
        const M = w ? void 0 : Ee(z) ? Al(E ? E._f : F($, C)._f) : z;
        (w || (!w && !Ee(M))) && me(s, C, M), P(C, M, !1, !1, !0);
      }
    },
    Wt = (w, C = {}) => {
      let E = F(r, w);
      const $ = mt(C.disabled) || mt(t.disabled);
      return (
        me(r, w, {
          ...(E || {}),
          _f: {
            ...(E && E._f ? E._f : { ref: { name: w } }),
            name: w,
            mount: !0,
            ...C,
          },
        }),
        a.mount.add(w),
        E
          ? he({
              field: E,
              disabled: mt(C.disabled) ? C.disabled : t.disabled,
              name: w,
              value: C.value,
            })
          : S(w, !0, C.value),
        {
          ...($ ? { disabled: C.disabled || t.disabled } : {}),
          ...(t.progressive
            ? {
                required: !!C.required,
                min: Vo(C.min),
                max: Vo(C.max),
                minLength: Vo(C.minLength),
                maxLength: Vo(C.maxLength),
                pattern: Vo(C.pattern),
              }
            : {}),
          name: w,
          onChange: O,
          onBlur: O,
          ref: (z) => {
            if (z) {
              Wt(w, C), (E = F(r, w));
              const M =
                  (Ee(z.value) &&
                    z.querySelectorAll &&
                    z.querySelectorAll('input,select,textarea')[0]) ||
                  z,
                G = Wx(M),
                le = E._f.refs || [];
              if (G ? le.find((je) => je === M) : M === E._f.ref) return;
              me(r, w, {
                _f: {
                  ...E._f,
                  ...(G
                    ? {
                        refs: [
                          ...le.filter(Ol),
                          M,
                          ...(Array.isArray(F(o, w)) ? [{}] : []),
                        ],
                        ref: { type: M.type, name: w },
                      }
                    : { ref: M }),
                },
              }),
                S(w, !1, void 0, M);
            } else
              (E = F(r, w, {})),
                E._f && (E._f.mount = !1),
                (t.shouldUnregister || C.shouldUnregister) &&
                  !(Bm(a.array, w) && i.action) &&
                  a.unMount.add(w);
          },
        }
      );
    },
    Nt = () => t.shouldFocusError && as(r, A, a.mount),
    Ht = (w) => {
      mt(w) &&
        (d.state.next({ disabled: w }),
        as(
          r,
          (C, E) => {
            const $ = F(r, E);
            $ &&
              ((C.disabled = $._f.disabled || w),
              Array.isArray($._f.refs) &&
                $._f.refs.forEach((z) => {
                  z.disabled = $._f.disabled || w;
                }));
          },
          0,
          !1,
        ));
    },
    Ot = (w, C) => async (E) => {
      let $;
      if (
        (E &&
          (E.preventDefault && E.preventDefault(), E.persist && E.persist()),
        t.disabled)
      ) {
        C && (await C({ ...n.errors }, E));
        return;
      }
      let z = ot(s);
      if ((d.state.next({ isSubmitting: !0 }), t.resolver)) {
        const { errors: M, values: G } = await N();
        (n.errors = M), (z = G);
      } else await j(r);
      if ((Ve(n.errors, 'root'), st(n.errors))) {
        d.state.next({ errors: {} });
        try {
          await w(z, E);
        } catch (M) {
          $ = M;
        }
      } else C && (await C({ ...n.errors }, E)), Nt(), setTimeout(Nt);
      if (
        (d.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: st(n.errors) && !$,
          submitCount: n.submitCount + 1,
          errors: n.errors,
        }),
        $)
      )
        throw $;
    },
    Tr = (w, C = {}) => {
      F(r, w) &&
        (Ee(C.defaultValue)
          ? q(w, ot(F(o, w)))
          : (q(w, C.defaultValue), me(o, w, ot(C.defaultValue))),
        C.keepTouched || Ve(n.touchedFields, w),
        C.keepDirty ||
          (Ve(n.dirtyFields, w),
          (n.isDirty = C.defaultValue ? D(w, ot(F(o, w))) : D())),
        C.keepError || (Ve(n.errors, w), c.isValid && k()),
        d.state.next({ ...n }));
    },
    At = (w, C = {}) => {
      const E = w ? ot(w) : o,
        $ = ot(E),
        z = st(w),
        M = z ? o : $;
      if ((C.keepDefaultValues || (o = E), !C.keepValues)) {
        if (C.keepDirtyValues) {
          const G = new Set([...a.mount, ...Object.keys(zo(o, s))]);
          for (const le of Array.from(G))
            F(n.dirtyFields, le) ? me(M, le, F(s, le)) : q(le, F(M, le));
        } else {
          if (ed && Ee(w))
            for (const G of a.mount) {
              const le = F(r, G);
              if (le && le._f) {
                const je = Array.isArray(le._f.refs)
                  ? le._f.refs[0]
                  : le._f.ref;
                if (ta(je)) {
                  const Ce = je.closest('form');
                  if (Ce) {
                    Ce.reset();
                    break;
                  }
                }
              }
            }
          r = {};
        }
        (s = t.shouldUnregister ? (C.keepDefaultValues ? ot(o) : {}) : ot(M)),
          d.array.next({ values: { ...M } }),
          d.values.next({ values: { ...M } });
      }
      (a = {
        mount: C.keepDirtyValues ? a.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: '',
      }),
        (i.mount = !c.isValid || !!C.keepIsValid || !!C.keepDirtyValues),
        (i.watch = !!t.shouldUnregister),
        d.state.next({
          submitCount: C.keepSubmitCount ? n.submitCount : 0,
          isDirty: z
            ? !1
            : C.keepDirty
              ? n.isDirty
              : !!(C.keepDefaultValues && !Fn(w, o)),
          isSubmitted: C.keepIsSubmitted ? n.isSubmitted : !1,
          dirtyFields: z
            ? {}
            : C.keepDirtyValues
              ? C.keepDefaultValues && s
                ? zo(o, s)
                : n.dirtyFields
              : C.keepDefaultValues && w
                ? zo(o, w)
                : C.keepDirty
                  ? n.dirtyFields
                  : {},
          touchedFields: C.keepTouched ? n.touchedFields : {},
          errors: C.keepErrors ? n.errors : {},
          isSubmitSuccessful: C.keepIsSubmitSuccessful
            ? n.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    ir = (w, C) => At(Xt(w) ? w(s) : w, C);
  return {
    control: {
      register: Wt,
      unregister: Me,
      getFieldState: X,
      handleSubmit: Ot,
      setError: ue,
      _executeSchema: N,
      _getWatch: W,
      _getDirty: D,
      _updateValid: k,
      _removeUnmounted: te,
      _updateFieldArray: p,
      _updateDisabledField: he,
      _getFieldArray: Y,
      _reset: At,
      _resetDefaultValues: () =>
        Xt(t.defaultValues) &&
        t.defaultValues().then((w) => {
          ir(w, t.resetOptions), d.state.next({ isLoading: !1 });
        }),
      _updateFormState: (w) => {
        n = { ...n, ...w };
      },
      _disableForm: Ht,
      _subjects: d,
      _proxyFormState: c,
      _setErrors: _,
      get _fields() {
        return r;
      },
      get _formValues() {
        return s;
      },
      get _state() {
        return i;
      },
      set _state(w) {
        i = w;
      },
      get _defaultValues() {
        return o;
      },
      get _names() {
        return a;
      },
      set _names(w) {
        a = w;
      },
      get _formState() {
        return n;
      },
      set _formState(w) {
        n = w;
      },
      get _options() {
        return t;
      },
      set _options(w) {
        t = { ...t, ...w };
      },
    },
    trigger: V,
    register: Wt,
    handleSubmit: Ot,
    watch: Ne,
    setValue: q,
    getValues: ne,
    reset: ir,
    resetField: Tr,
    clearErrors: ae,
    unregister: Me,
    setError: ue,
    setFocus: (w, C = {}) => {
      const E = F(r, w),
        $ = E && E._f;
      if ($) {
        const z = $.refs ? $.refs[0] : $.ref;
        z.focus && (z.focus(), C.shouldSelect && Xt(z.select) && z.select());
      }
    },
    getFieldState: X,
  };
}
function qx(e = {}) {
  const t = R.useRef(),
    n = R.useRef(),
    [r, o] = R.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: Xt(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: Xt(e.defaultValues) ? void 0 : e.defaultValues,
    });
  t.current || (t.current = { ...Xx(e), formState: r });
  const s = t.current.control;
  return (
    (s._options = e),
    nd({
      subject: s._subjects.state,
      next: (i) => {
        Zm(i, s._proxyFormState, s._updateFormState, !0) &&
          o({ ...s._formState });
      },
    }),
    R.useEffect(() => s._disableForm(e.disabled), [s, e.disabled]),
    R.useEffect(() => {
      if (s._proxyFormState.isDirty) {
        const i = s._getDirty();
        i !== r.isDirty && s._subjects.state.next({ isDirty: i });
      }
    }, [s, r.isDirty]),
    R.useEffect(() => {
      e.values && !Fn(e.values, n.current)
        ? (s._reset(e.values, s._options.resetOptions),
          (n.current = e.values),
          o((i) => ({ ...i })))
        : s._resetDefaultValues();
    }, [e.values, s]),
    R.useEffect(() => {
      e.errors && s._setErrors(e.errors);
    }, [e.errors, s]),
    R.useEffect(() => {
      s._state.mount || (s._updateValid(), (s._state.mount = !0)),
        s._state.watch &&
          ((s._state.watch = !1), s._subjects.state.next({ ...s._formState })),
        s._removeUnmounted();
    }),
    R.useEffect(() => {
      e.shouldUnregister && s._subjects.values.next({ values: s._getWatch() });
    }, [e.shouldUnregister, s]),
    R.useMemo(() => ({ ...t.current, formState: Hm(r, s) }), [r, s])
  );
}
const Hf = (e, t, n) => {
    if (e && 'reportValidity' in e) {
      const r = F(n, t);
      e.setCustomValidity((r && r.message) || ''), e.reportValidity();
    }
  },
  nv = (e, t) => {
    for (const n in t.fields) {
      const r = t.fields[n];
      r && r.ref && 'reportValidity' in r.ref
        ? Hf(r.ref, n, e)
        : r.refs && r.refs.forEach((o) => Hf(o, n, e));
    }
  },
  Jx = (e, t) => {
    t.shouldUseNativeValidation && nv(e, t);
    const n = {};
    for (const r in e) {
      const o = F(t.fields, r),
        s = Object.assign(e[r] || {}, { ref: o && o.ref });
      if (ew(t.names || Object.keys(e), r)) {
        const i = Object.assign({}, F(n, r));
        me(i, 'root', s), me(n, r, i);
      } else me(n, r, s);
    }
    return n;
  },
  ew = (e, t) => e.some((n) => n.startsWith(t + '.'));
var tw = function (e, t) {
    for (var n = {}; e.length; ) {
      var r = e[0],
        o = r.code,
        s = r.message,
        i = r.path.join('.');
      if (!n[i])
        if ('unionErrors' in r) {
          var a = r.unionErrors[0].errors[0];
          n[i] = { message: a.message, type: a.code };
        } else n[i] = { message: s, type: o };
      if (
        ('unionErrors' in r &&
          r.unionErrors.forEach(function (c) {
            return c.errors.forEach(function (d) {
              return e.push(d);
            });
          }),
        t)
      ) {
        var l = n[i].types,
          u = l && l[r.code];
        n[i] = Km(i, t, n, o, u ? [].concat(u, r.message) : r.message);
      }
      e.shift();
    }
    return n;
  },
  nw = function (e, t, n) {
    return (
      n === void 0 && (n = {}),
      function (r, o, s) {
        try {
          return Promise.resolve(
            (function (i, a) {
              try {
                var l = Promise.resolve(
                  e[n.mode === 'sync' ? 'parse' : 'parseAsync'](r, t),
                ).then(function (u) {
                  return (
                    s.shouldUseNativeValidation && nv({}, s),
                    { errors: {}, values: n.raw ? r : u }
                  );
                });
              } catch (u) {
                return a(u);
              }
              return l && l.then ? l.then(void 0, a) : l;
            })(0, function (i) {
              if (
                (function (a) {
                  return Array.isArray(a == null ? void 0 : a.errors);
                })(i)
              )
                return {
                  values: {},
                  errors: Jx(
                    tw(
                      i.errors,
                      !s.shouldUseNativeValidation && s.criteriaMode === 'all',
                    ),
                    s,
                  ),
                };
              throw i;
            }),
          );
        } catch (i) {
          return Promise.reject(i);
        }
      }
    );
  };
/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rw = (e) => e.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  rv = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(' ');
/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var ow = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sw = g.forwardRef(
  (
    {
      color: e = 'currentColor',
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = '',
      children: s,
      iconNode: i,
      ...a
    },
    l,
  ) =>
    g.createElement(
      'svg',
      {
        ref: l,
        ...ow,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: rv('lucide', o),
        ...a,
      },
      [
        ...i.map(([u, c]) => g.createElement(u, c)),
        ...(Array.isArray(s) ? s : [s]),
      ],
    ),
);
/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $a = (e, t) => {
  const n = g.forwardRef(({ className: r, ...o }, s) =>
    g.createElement(sw, {
      ref: s,
      iconNode: t,
      className: rv(`lucide-${rw(e)}`, r),
      ...o,
    }),
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iw = $a('Check', [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]]);
/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const aw = $a('Image', [
  [
    'rect',
    {
      width: '18',
      height: '18',
      x: '3',
      y: '3',
      rx: '2',
      ry: '2',
      key: '1m3agn',
    },
  ],
  ['circle', { cx: '9', cy: '9', r: '2', key: 'af1f0g' }],
  ['path', { d: 'm21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21', key: '1xmnt7' }],
]);
/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lw = $a('LoaderCircle', [
  ['path', { d: 'M21 12a9 9 0 1 1-6.219-8.56', key: '13zald' }],
]);
/**
 * @license lucide-react v0.451.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uw = $a('TriangleAlert', [
  [
    'path',
    {
      d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3',
      key: 'wmoenq',
    },
  ],
  ['path', { d: 'M12 9v4', key: 'juzpu7' }],
  ['path', { d: 'M12 17h.01', key: 'p32p05' }],
]);
var cw = (e) => {
    switch (e) {
      case 'success':
        return pw;
      case 'info':
        return mw;
      case 'warning':
        return hw;
      case 'error':
        return vw;
      default:
        return null;
    }
  },
  dw = Array(12).fill(0),
  fw = ({ visible: e, className: t }) =>
    R.createElement(
      'div',
      {
        className: ['sonner-loading-wrapper', t].filter(Boolean).join(' '),
        'data-visible': e,
      },
      R.createElement(
        'div',
        { className: 'sonner-spinner' },
        dw.map((n, r) =>
          R.createElement('div', {
            className: 'sonner-loading-bar',
            key: `spinner-bar-${r}`,
          }),
        ),
      ),
    ),
  pw = R.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 20 20',
      fill: 'currentColor',
      height: '20',
      width: '20',
    },
    R.createElement('path', {
      fillRule: 'evenodd',
      d: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z',
      clipRule: 'evenodd',
    }),
  ),
  hw = R.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 24 24',
      fill: 'currentColor',
      height: '20',
      width: '20',
    },
    R.createElement('path', {
      fillRule: 'evenodd',
      d: 'M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z',
      clipRule: 'evenodd',
    }),
  ),
  mw = R.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 20 20',
      fill: 'currentColor',
      height: '20',
      width: '20',
    },
    R.createElement('path', {
      fillRule: 'evenodd',
      d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z',
      clipRule: 'evenodd',
    }),
  ),
  vw = R.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 20 20',
      fill: 'currentColor',
      height: '20',
      width: '20',
    },
    R.createElement('path', {
      fillRule: 'evenodd',
      d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z',
      clipRule: 'evenodd',
    }),
  ),
  gw = R.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '12',
      height: '12',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '1.5',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    R.createElement('line', { x1: '18', y1: '6', x2: '6', y2: '18' }),
    R.createElement('line', { x1: '6', y1: '6', x2: '18', y2: '18' }),
  ),
  yw = () => {
    let [e, t] = R.useState(document.hidden);
    return (
      R.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener('visibilitychange', n),
          () => window.removeEventListener('visibilitychange', n)
        );
      }, []),
      e
    );
  },
  Vu = 1,
  xw = class {
    constructor() {
      (this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          this.publish(e), (this.toasts = [...this.toasts, e]);
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...r } = e,
            o =
              typeof (e == null ? void 0 : e.id) == 'number' ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : Vu++,
            s = this.toasts.find((a) => a.id === o),
            i = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            s
              ? (this.toasts = this.toasts.map((a) =>
                  a.id === o
                    ? (this.publish({ ...a, ...e, id: o, title: n }),
                      { ...a, ...e, id: o, dismissible: i, title: n })
                    : a,
                ))
              : this.addToast({ title: n, ...r, dismissible: i, id: o }),
            o
          );
        }),
        (this.dismiss = (e) => (
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: 'error' })),
        (this.success = (e, t) =>
          this.create({ ...t, type: 'success', message: e })),
        (this.info = (e, t) => this.create({ ...t, type: 'info', message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: 'warning', message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: 'loading', message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: 'loading',
              message: t.loading,
              description:
                typeof t.description != 'function' ? t.description : void 0,
            }));
          let r = e instanceof Promise ? e : e(),
            o = n !== void 0,
            s,
            i = r
              .then(async (l) => {
                if (((s = ['resolve', l]), R.isValidElement(l)))
                  (o = !1), this.create({ id: n, type: 'default', message: l });
                else if (_w(l) && !l.ok) {
                  o = !1;
                  let u =
                      typeof t.error == 'function'
                        ? await t.error(`HTTP error! status: ${l.status}`)
                        : t.error,
                    c =
                      typeof t.description == 'function'
                        ? await t.description(`HTTP error! status: ${l.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: 'error',
                    message: u,
                    description: c,
                  });
                } else if (t.success !== void 0) {
                  o = !1;
                  let u =
                      typeof t.success == 'function'
                        ? await t.success(l)
                        : t.success,
                    c =
                      typeof t.description == 'function'
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: n,
                    type: 'success',
                    message: u,
                    description: c,
                  });
                }
              })
              .catch(async (l) => {
                if (((s = ['reject', l]), t.error !== void 0)) {
                  o = !1;
                  let u =
                      typeof t.error == 'function' ? await t.error(l) : t.error,
                    c =
                      typeof t.description == 'function'
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: n,
                    type: 'error',
                    message: u,
                    description: c,
                  });
                }
              })
              .finally(() => {
                var l;
                o && (this.dismiss(n), (n = void 0)),
                  (l = t.finally) == null || l.call(t);
              }),
            a = () =>
              new Promise((l, u) =>
                i.then(() => (s[0] === 'reject' ? u(s[1]) : l(s[1]))).catch(u),
              );
          return typeof n != 'string' && typeof n != 'number'
            ? { unwrap: a }
            : Object.assign(n, { unwrap: a });
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || Vu++;
          return this.create({ jsx: e(n), id: n, ...t }), n;
        }),
        (this.subscribers = []),
        (this.toasts = []);
    }
  },
  pt = new xw(),
  ww = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Vu++;
    return pt.addToast({ title: e, ...t, id: n }), n;
  },
  _w = (e) =>
    e &&
    typeof e == 'object' &&
    'ok' in e &&
    typeof e.ok == 'boolean' &&
    'status' in e &&
    typeof e.status == 'number',
  kw = ww,
  Sw = () => pt.toasts;
Object.assign(
  kw,
  {
    success: pt.success,
    info: pt.info,
    warning: pt.warning,
    error: pt.error,
    custom: pt.custom,
    message: pt.message,
    promise: pt.promise,
    dismiss: pt.dismiss,
    loading: pt.loading,
  },
  { getHistory: Sw },
);
function bw(e, { insertAt: t } = {}) {
  if (typeof document > 'u') return;
  let n = document.head || document.getElementsByTagName('head')[0],
    r = document.createElement('style');
  (r.type = 'text/css'),
    t === 'top' && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e));
}
bw(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function si(e) {
  return e.label !== void 0;
}
var Cw = 3,
  Ew = '32px',
  Zf = 4e3,
  Pw = 356,
  Tw = 14,
  Rw = 20,
  Nw = 200;
function Ow(...e) {
  return e.filter(Boolean).join(' ');
}
var Aw = (e) => {
  var t, n, r, o, s, i, a, l, u, c, d;
  let {
      invert: h,
      toast: f,
      unstyled: v,
      interacting: y,
      setHeights: k,
      visibleToasts: m,
      heights: p,
      index: x,
      toasts: _,
      expanded: S,
      removeToast: P,
      defaultRichColors: T,
      closeButton: N,
      style: Z,
      cancelButtonStyle: j,
      actionButtonStyle: te,
      className: D = '',
      descriptionClassName: W = '',
      duration: Y,
      position: ie,
      gap: Q,
      loadingIcon: q,
      expandByDefault: O,
      classNames: A,
      icons: V,
      closeButtonAriaLabel: ne = 'Close toast',
      pauseWhenPageIsHidden: X,
      cn: ae,
    } = e,
    [ue, Ne] = R.useState(!1),
    [Me, he] = R.useState(!1),
    [Wt, Nt] = R.useState(!1),
    [Ht, Ot] = R.useState(!1),
    [Tr, At] = R.useState(!1),
    [ir, Rr] = R.useState(0),
    [Vs, Po] = R.useState(0),
    w = R.useRef(f.duration || Y || Zf),
    C = R.useRef(null),
    E = R.useRef(null),
    $ = x === 0,
    z = x + 1 <= m,
    M = f.type,
    G = f.dismissible !== !1,
    le = f.className || '',
    je = f.descriptionClassName || '',
    Ce = R.useMemo(
      () => p.findIndex((re) => re.toastId === f.id) || 0,
      [p, f.id],
    ),
    ln = R.useMemo(() => {
      var re;
      return (re = f.closeButton) != null ? re : N;
    }, [f.closeButton, N]);
  R.useMemo(() => f.duration || Y || Zf, [f.duration, Y]);
  let To = R.useRef(0),
    Zt = R.useRef(0),
    Nr = R.useRef(0),
    Or = R.useRef(null),
    [Ro, nl] = ie.split('-'),
    No = R.useMemo(
      () => p.reduce((re, ge, Se) => (Se >= Ce ? re : re + ge.height), 0),
      [p, Ce],
    ),
    Cd = yw(),
    oy = f.invert || h,
    rl = M === 'loading';
  (Zt.current = R.useMemo(() => Ce * Q + No, [Ce, No])),
    R.useEffect(() => {
      Ne(!0);
    }, []),
    R.useEffect(() => {
      let re = E.current;
      if (re) {
        let ge = re.getBoundingClientRect().height;
        return (
          Po(ge),
          k((Se) => [
            { toastId: f.id, height: ge, position: f.position },
            ...Se,
          ]),
          () => k((Se) => Se.filter((Mt) => Mt.toastId !== f.id))
        );
      }
    }, [k, f.id]),
    R.useLayoutEffect(() => {
      if (!ue) return;
      let re = E.current,
        ge = re.style.height;
      re.style.height = 'auto';
      let Se = re.getBoundingClientRect().height;
      (re.style.height = ge),
        Po(Se),
        k((Mt) =>
          Mt.find((Gt) => Gt.toastId === f.id)
            ? Mt.map((Gt) => (Gt.toastId === f.id ? { ...Gt, height: Se } : Gt))
            : [{ toastId: f.id, height: Se, position: f.position }, ...Mt],
        );
    }, [ue, f.title, f.description, k, f.id]);
  let Rn = R.useCallback(() => {
    he(!0),
      Rr(Zt.current),
      k((re) => re.filter((ge) => ge.toastId !== f.id)),
      setTimeout(() => {
        P(f);
      }, Nw);
  }, [f, P, k, Zt]);
  R.useEffect(() => {
    if (
      (f.promise && M === 'loading') ||
      f.duration === 1 / 0 ||
      f.type === 'loading'
    )
      return;
    let re;
    return (
      S || y || (X && Cd)
        ? (() => {
            if (Nr.current < To.current) {
              let ge = new Date().getTime() - To.current;
              w.current = w.current - ge;
            }
            Nr.current = new Date().getTime();
          })()
        : w.current !== 1 / 0 &&
          ((To.current = new Date().getTime()),
          (re = setTimeout(() => {
            var ge;
            (ge = f.onAutoClose) == null || ge.call(f, f), Rn();
          }, w.current))),
      () => clearTimeout(re)
    );
  }, [S, y, f, M, X, Cd, Rn]),
    R.useEffect(() => {
      f.delete && Rn();
    }, [Rn, f.delete]);
  function sy() {
    var re, ge, Se;
    return V != null && V.loading
      ? R.createElement(
          'div',
          {
            className: ae(
              A == null ? void 0 : A.loader,
              (re = f == null ? void 0 : f.classNames) == null
                ? void 0
                : re.loader,
              'sonner-loader',
            ),
            'data-visible': M === 'loading',
          },
          V.loading,
        )
      : q
        ? R.createElement(
            'div',
            {
              className: ae(
                A == null ? void 0 : A.loader,
                (ge = f == null ? void 0 : f.classNames) == null
                  ? void 0
                  : ge.loader,
                'sonner-loader',
              ),
              'data-visible': M === 'loading',
            },
            q,
          )
        : R.createElement(fw, {
            className: ae(
              A == null ? void 0 : A.loader,
              (Se = f == null ? void 0 : f.classNames) == null
                ? void 0
                : Se.loader,
            ),
            visible: M === 'loading',
          });
  }
  return R.createElement(
    'li',
    {
      tabIndex: 0,
      ref: E,
      className: ae(
        D,
        le,
        A == null ? void 0 : A.toast,
        (t = f == null ? void 0 : f.classNames) == null ? void 0 : t.toast,
        A == null ? void 0 : A.default,
        A == null ? void 0 : A[M],
        (n = f == null ? void 0 : f.classNames) == null ? void 0 : n[M],
      ),
      'data-sonner-toast': '',
      'data-rich-colors': (r = f.richColors) != null ? r : T,
      'data-styled': !(f.jsx || f.unstyled || v),
      'data-mounted': ue,
      'data-promise': !!f.promise,
      'data-swiped': Tr,
      'data-removed': Me,
      'data-visible': z,
      'data-y-position': Ro,
      'data-x-position': nl,
      'data-index': x,
      'data-front': $,
      'data-swiping': Wt,
      'data-dismissible': G,
      'data-type': M,
      'data-invert': oy,
      'data-swipe-out': Ht,
      'data-expanded': !!(S || (O && ue)),
      style: {
        '--index': x,
        '--toasts-before': x,
        '--z-index': _.length - x,
        '--offset': `${Me ? ir : Zt.current}px`,
        '--initial-height': O ? 'auto' : `${Vs}px`,
        ...Z,
        ...f.style,
      },
      onPointerDown: (re) => {
        rl ||
          !G ||
          ((C.current = new Date()),
          Rr(Zt.current),
          re.target.setPointerCapture(re.pointerId),
          re.target.tagName !== 'BUTTON' &&
            (Nt(!0), (Or.current = { x: re.clientX, y: re.clientY })));
      },
      onPointerUp: () => {
        var re, ge, Se, Mt;
        if (Ht || !G) return;
        Or.current = null;
        let Gt = Number(
            ((re = E.current) == null
              ? void 0
              : re.style
                  .getPropertyValue('--swipe-amount')
                  .replace('px', '')) || 0,
          ),
          $s =
            new Date().getTime() -
            ((ge = C.current) == null ? void 0 : ge.getTime()),
          iy = Math.abs(Gt) / $s;
        if (Math.abs(Gt) >= Rw || iy > 0.11) {
          Rr(Zt.current),
            (Se = f.onDismiss) == null || Se.call(f, f),
            Rn(),
            Ot(!0),
            At(!1);
          return;
        }
        (Mt = E.current) == null ||
          Mt.style.setProperty('--swipe-amount', '0px'),
          Nt(!1);
      },
      onPointerMove: (re) => {
        var ge, Se;
        if (!Or.current || !G) return;
        let Mt = re.clientY - Or.current.y,
          Gt =
            ((ge = window.getSelection()) == null
              ? void 0
              : ge.toString().length) > 0,
          $s = Ro === 'top' ? Math.min(0, Mt) : Math.max(0, Mt);
        Math.abs($s) > 0 && At(!0),
          !Gt &&
            ((Se = E.current) == null ||
              Se.style.setProperty('--swipe-amount', `${$s}px`));
      },
    },
    ln && !f.jsx
      ? R.createElement(
          'button',
          {
            'aria-label': ne,
            'data-disabled': rl,
            'data-close-button': !0,
            onClick:
              rl || !G
                ? () => {}
                : () => {
                    var re;
                    Rn(), (re = f.onDismiss) == null || re.call(f, f);
                  },
            className: ae(
              A == null ? void 0 : A.closeButton,
              (o = f == null ? void 0 : f.classNames) == null
                ? void 0
                : o.closeButton,
            ),
          },
          (s = V == null ? void 0 : V.close) != null ? s : gw,
        )
      : null,
    f.jsx || R.isValidElement(f.title)
      ? f.jsx
        ? f.jsx
        : typeof f.title == 'function'
          ? f.title()
          : f.title
      : R.createElement(
          R.Fragment,
          null,
          M || f.icon || f.promise
            ? R.createElement(
                'div',
                {
                  'data-icon': '',
                  className: ae(
                    A == null ? void 0 : A.icon,
                    (i = f == null ? void 0 : f.classNames) == null
                      ? void 0
                      : i.icon,
                  ),
                },
                f.promise || (f.type === 'loading' && !f.icon)
                  ? f.icon || sy()
                  : null,
                f.type !== 'loading'
                  ? f.icon || (V == null ? void 0 : V[M]) || cw(M)
                  : null,
              )
            : null,
          R.createElement(
            'div',
            {
              'data-content': '',
              className: ae(
                A == null ? void 0 : A.content,
                (a = f == null ? void 0 : f.classNames) == null
                  ? void 0
                  : a.content,
              ),
            },
            R.createElement(
              'div',
              {
                'data-title': '',
                className: ae(
                  A == null ? void 0 : A.title,
                  (l = f == null ? void 0 : f.classNames) == null
                    ? void 0
                    : l.title,
                ),
              },
              typeof f.title == 'function' ? f.title() : f.title,
            ),
            f.description
              ? R.createElement(
                  'div',
                  {
                    'data-description': '',
                    className: ae(
                      W,
                      je,
                      A == null ? void 0 : A.description,
                      (u = f == null ? void 0 : f.classNames) == null
                        ? void 0
                        : u.description,
                    ),
                  },
                  typeof f.description == 'function'
                    ? f.description()
                    : f.description,
                )
              : null,
          ),
          R.isValidElement(f.cancel)
            ? f.cancel
            : f.cancel && si(f.cancel)
              ? R.createElement(
                  'button',
                  {
                    'data-button': !0,
                    'data-cancel': !0,
                    style: f.cancelButtonStyle || j,
                    onClick: (re) => {
                      var ge, Se;
                      si(f.cancel) &&
                        G &&
                        ((Se = (ge = f.cancel).onClick) == null ||
                          Se.call(ge, re),
                        Rn());
                    },
                    className: ae(
                      A == null ? void 0 : A.cancelButton,
                      (c = f == null ? void 0 : f.classNames) == null
                        ? void 0
                        : c.cancelButton,
                    ),
                  },
                  f.cancel.label,
                )
              : null,
          R.isValidElement(f.action)
            ? f.action
            : f.action && si(f.action)
              ? R.createElement(
                  'button',
                  {
                    'data-button': !0,
                    'data-action': !0,
                    style: f.actionButtonStyle || te,
                    onClick: (re) => {
                      var ge, Se;
                      si(f.action) &&
                        ((Se = (ge = f.action).onClick) == null ||
                          Se.call(ge, re),
                        !re.defaultPrevented && Rn());
                    },
                    className: ae(
                      A == null ? void 0 : A.actionButton,
                      (d = f == null ? void 0 : f.classNames) == null
                        ? void 0
                        : d.actionButton,
                    ),
                  },
                  f.action.label,
                )
              : null,
        ),
  );
};
function Gf() {
  if (typeof window > 'u' || typeof document > 'u') return 'ltr';
  let e = document.documentElement.getAttribute('dir');
  return e === 'auto' || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
g.forwardRef(function (e, t) {
  let {
      invert: n,
      position: r = 'bottom-right',
      hotkey: o = ['altKey', 'KeyT'],
      expand: s,
      closeButton: i,
      className: a,
      offset: l,
      theme: u = 'light',
      richColors: c,
      duration: d,
      style: h,
      visibleToasts: f = Cw,
      toastOptions: v,
      dir: y = Gf(),
      gap: k = Tw,
      loadingIcon: m,
      icons: p,
      containerAriaLabel: x = 'Notifications',
      pauseWhenPageIsHidden: _,
      cn: S = Ow,
    } = e,
    [P, T] = R.useState([]),
    N = R.useMemo(
      () =>
        Array.from(
          new Set(
            [r].concat(P.filter((X) => X.position).map((X) => X.position)),
          ),
        ),
      [P, r],
    ),
    [Z, j] = R.useState([]),
    [te, D] = R.useState(!1),
    [W, Y] = R.useState(!1),
    [ie, Q] = R.useState(
      u !== 'system'
        ? u
        : typeof window < 'u' &&
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light',
    ),
    q = R.useRef(null),
    O = o.join('+').replace(/Key/g, '').replace(/Digit/g, ''),
    A = R.useRef(null),
    V = R.useRef(!1),
    ne = R.useCallback((X) => {
      T((ae) => {
        var ue;
        return (
          ((ue = ae.find((Ne) => Ne.id === X.id)) != null && ue.delete) ||
            pt.dismiss(X.id),
          ae.filter(({ id: Ne }) => Ne !== X.id)
        );
      });
    }, []);
  return (
    R.useEffect(
      () =>
        pt.subscribe((X) => {
          if (X.dismiss) {
            T((ae) =>
              ae.map((ue) => (ue.id === X.id ? { ...ue, delete: !0 } : ue)),
            );
            return;
          }
          setTimeout(() => {
            zm.flushSync(() => {
              T((ae) => {
                let ue = ae.findIndex((Ne) => Ne.id === X.id);
                return ue !== -1
                  ? [
                      ...ae.slice(0, ue),
                      { ...ae[ue], ...X },
                      ...ae.slice(ue + 1),
                    ]
                  : [X, ...ae];
              });
            });
          });
        }),
      [],
    ),
    R.useEffect(() => {
      if (u !== 'system') {
        Q(u);
        return;
      }
      if (
        (u === 'system' &&
          (window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches
            ? Q('dark')
            : Q('light')),
        typeof window > 'u')
      )
        return;
      let X = window.matchMedia('(prefers-color-scheme: dark)');
      try {
        X.addEventListener('change', ({ matches: ae }) => {
          Q(ae ? 'dark' : 'light');
        });
      } catch {
        X.addListener(({ matches: ue }) => {
          try {
            Q(ue ? 'dark' : 'light');
          } catch (Ne) {
            console.error(Ne);
          }
        });
      }
    }, [u]),
    R.useEffect(() => {
      P.length <= 1 && D(!1);
    }, [P]),
    R.useEffect(() => {
      let X = (ae) => {
        var ue, Ne;
        o.every((Me) => ae[Me] || ae.code === Me) &&
          (D(!0), (ue = q.current) == null || ue.focus()),
          ae.code === 'Escape' &&
            (document.activeElement === q.current ||
              ((Ne = q.current) != null &&
                Ne.contains(document.activeElement))) &&
            D(!1);
      };
      return (
        document.addEventListener('keydown', X),
        () => document.removeEventListener('keydown', X)
      );
    }, [o]),
    R.useEffect(() => {
      if (q.current)
        return () => {
          A.current &&
            (A.current.focus({ preventScroll: !0 }),
            (A.current = null),
            (V.current = !1));
        };
    }, [q.current]),
    R.createElement(
      'section',
      {
        'aria-label': `${x} ${O}`,
        tabIndex: -1,
        'aria-live': 'polite',
        'aria-relevant': 'additions text',
        'aria-atomic': 'false',
      },
      N.map((X, ae) => {
        var ue;
        let [Ne, Me] = X.split('-');
        return P.length
          ? R.createElement(
              'ol',
              {
                key: X,
                dir: y === 'auto' ? Gf() : y,
                tabIndex: -1,
                ref: q,
                className: a,
                'data-sonner-toaster': !0,
                'data-theme': ie,
                'data-y-position': Ne,
                'data-lifted': te && P.length > 1 && !s,
                'data-x-position': Me,
                style: {
                  '--front-toast-height': `${((ue = Z[0]) == null ? void 0 : ue.height) || 0}px`,
                  '--offset': typeof l == 'number' ? `${l}px` : l || Ew,
                  '--width': `${Pw}px`,
                  '--gap': `${k}px`,
                  ...h,
                },
                onBlur: (he) => {
                  V.current &&
                    !he.currentTarget.contains(he.relatedTarget) &&
                    ((V.current = !1),
                    A.current &&
                      (A.current.focus({ preventScroll: !0 }),
                      (A.current = null)));
                },
                onFocus: (he) => {
                  (he.target instanceof HTMLElement &&
                    he.target.dataset.dismissible === 'false') ||
                    V.current ||
                    ((V.current = !0), (A.current = he.relatedTarget));
                },
                onMouseEnter: () => D(!0),
                onMouseMove: () => D(!0),
                onMouseLeave: () => {
                  W || D(!1);
                },
                onPointerDown: (he) => {
                  (he.target instanceof HTMLElement &&
                    he.target.dataset.dismissible === 'false') ||
                    Y(!0);
                },
                onPointerUp: () => Y(!1),
              },
              P.filter(
                (he) => (!he.position && ae === 0) || he.position === X,
              ).map((he, Wt) => {
                var Nt, Ht;
                return R.createElement(Aw, {
                  key: he.id,
                  icons: p,
                  index: Wt,
                  toast: he,
                  defaultRichColors: c,
                  duration:
                    (Nt = v == null ? void 0 : v.duration) != null ? Nt : d,
                  className: v == null ? void 0 : v.className,
                  descriptionClassName:
                    v == null ? void 0 : v.descriptionClassName,
                  invert: n,
                  visibleToasts: f,
                  closeButton:
                    (Ht = v == null ? void 0 : v.closeButton) != null ? Ht : i,
                  interacting: W,
                  position: X,
                  style: v == null ? void 0 : v.style,
                  unstyled: v == null ? void 0 : v.unstyled,
                  classNames: v == null ? void 0 : v.classNames,
                  cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle,
                  actionButtonStyle: v == null ? void 0 : v.actionButtonStyle,
                  removeToast: ne,
                  toasts: P.filter((Ot) => Ot.position == he.position),
                  heights: Z.filter((Ot) => Ot.position == he.position),
                  setHeights: j,
                  expandByDefault: s,
                  gap: k,
                  loadingIcon: m,
                  expanded: te,
                  pauseWhenPageIsHidden: _,
                  cn: S,
                });
              }),
            )
          : null;
      }),
    )
  );
});
var fe;
(function (e) {
  e.assertEqual = (o) => o;
  function t(o) {}
  e.assertIs = t;
  function n(o) {
    throw new Error();
  }
  (e.assertNever = n),
    (e.arrayToEnum = (o) => {
      const s = {};
      for (const i of o) s[i] = i;
      return s;
    }),
    (e.getValidEnumValues = (o) => {
      const s = e.objectKeys(o).filter((a) => typeof o[o[a]] != 'number'),
        i = {};
      for (const a of s) i[a] = o[a];
      return e.objectValues(i);
    }),
    (e.objectValues = (o) =>
      e.objectKeys(o).map(function (s) {
        return o[s];
      })),
    (e.objectKeys =
      typeof Object.keys == 'function'
        ? (o) => Object.keys(o)
        : (o) => {
            const s = [];
            for (const i in o)
              Object.prototype.hasOwnProperty.call(o, i) && s.push(i);
            return s;
          }),
    (e.find = (o, s) => {
      for (const i of o) if (s(i)) return i;
    }),
    (e.isInteger =
      typeof Number.isInteger == 'function'
        ? (o) => Number.isInteger(o)
        : (o) => typeof o == 'number' && isFinite(o) && Math.floor(o) === o);
  function r(o, s = ' | ') {
    return o.map((i) => (typeof i == 'string' ? `'${i}'` : i)).join(s);
  }
  (e.joinValues = r),
    (e.jsonStringifyReplacer = (o, s) =>
      typeof s == 'bigint' ? s.toString() : s);
})(fe || (fe = {}));
var Yf;
(function (e) {
  e.mergeShapes = (t, n) => ({ ...t, ...n });
})(Yf || (Yf = {}));
const U = fe.arrayToEnum([
    'string',
    'nan',
    'number',
    'integer',
    'float',
    'boolean',
    'date',
    'bigint',
    'symbol',
    'function',
    'undefined',
    'null',
    'array',
    'object',
    'unknown',
    'promise',
    'void',
    'never',
    'map',
    'set',
  ]),
  ur = (e) => {
    switch (typeof e) {
      case 'undefined':
        return U.undefined;
      case 'string':
        return U.string;
      case 'number':
        return isNaN(e) ? U.nan : U.number;
      case 'boolean':
        return U.boolean;
      case 'function':
        return U.function;
      case 'bigint':
        return U.bigint;
      case 'symbol':
        return U.symbol;
      case 'object':
        return Array.isArray(e)
          ? U.array
          : e === null
            ? U.null
            : e.then &&
                typeof e.then == 'function' &&
                e.catch &&
                typeof e.catch == 'function'
              ? U.promise
              : typeof Map < 'u' && e instanceof Map
                ? U.map
                : typeof Set < 'u' && e instanceof Set
                  ? U.set
                  : typeof Date < 'u' && e instanceof Date
                    ? U.date
                    : U.object;
      default:
        return U.unknown;
    }
  },
  I = fe.arrayToEnum([
    'invalid_type',
    'invalid_literal',
    'custom',
    'invalid_union',
    'invalid_union_discriminator',
    'invalid_enum_value',
    'unrecognized_keys',
    'invalid_arguments',
    'invalid_return_type',
    'invalid_date',
    'invalid_string',
    'too_small',
    'too_big',
    'invalid_intersection_types',
    'not_multiple_of',
    'not_finite',
  ]);
class Pt extends Error {
  constructor(t) {
    super(),
      (this.issues = []),
      (this.addIssue = (r) => {
        this.issues = [...this.issues, r];
      }),
      (this.addIssues = (r = []) => {
        this.issues = [...this.issues, ...r];
      });
    const n = new.target.prototype;
    Object.setPrototypeOf
      ? Object.setPrototypeOf(this, n)
      : (this.__proto__ = n),
      (this.name = 'ZodError'),
      (this.issues = t);
  }
  get errors() {
    return this.issues;
  }
  format(t) {
    const n =
        t ||
        function (s) {
          return s.message;
        },
      r = { _errors: [] },
      o = (s) => {
        for (const i of s.issues)
          if (i.code === 'invalid_union') i.unionErrors.map(o);
          else if (i.code === 'invalid_return_type') o(i.returnTypeError);
          else if (i.code === 'invalid_arguments') o(i.argumentsError);
          else if (i.path.length === 0) r._errors.push(n(i));
          else {
            let a = r,
              l = 0;
            for (; l < i.path.length; ) {
              const u = i.path[l];
              l === i.path.length - 1
                ? ((a[u] = a[u] || { _errors: [] }), a[u]._errors.push(n(i)))
                : (a[u] = a[u] || { _errors: [] }),
                (a = a[u]),
                l++;
            }
          }
      };
    return o(this), r;
  }
  static assert(t) {
    if (!(t instanceof Pt)) throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, fe.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {},
      r = [];
    for (const o of this.issues)
      o.path.length > 0
        ? ((n[o.path[0]] = n[o.path[0]] || []), n[o.path[0]].push(t(o)))
        : r.push(t(o));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
Pt.create = (e) => new Pt(e);
const Es = (e, t) => {
  let n;
  switch (e.code) {
    case I.invalid_type:
      e.received === U.undefined
        ? (n = 'Required')
        : (n = `Expected ${e.expected}, received ${e.received}`);
      break;
    case I.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, fe.jsonStringifyReplacer)}`;
      break;
    case I.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${fe.joinValues(e.keys, ', ')}`;
      break;
    case I.invalid_union:
      n = 'Invalid input';
      break;
    case I.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${fe.joinValues(e.options)}`;
      break;
    case I.invalid_enum_value:
      n = `Invalid enum value. Expected ${fe.joinValues(e.options)}, received '${e.received}'`;
      break;
    case I.invalid_arguments:
      n = 'Invalid function arguments';
      break;
    case I.invalid_return_type:
      n = 'Invalid function return type';
      break;
    case I.invalid_date:
      n = 'Invalid date';
      break;
    case I.invalid_string:
      typeof e.validation == 'object'
        ? 'includes' in e.validation
          ? ((n = `Invalid input: must include "${e.validation.includes}"`),
            typeof e.validation.position == 'number' &&
              (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`))
          : 'startsWith' in e.validation
            ? (n = `Invalid input: must start with "${e.validation.startsWith}"`)
            : 'endsWith' in e.validation
              ? (n = `Invalid input: must end with "${e.validation.endsWith}"`)
              : fe.assertNever(e.validation)
        : e.validation !== 'regex'
          ? (n = `Invalid ${e.validation}`)
          : (n = 'Invalid');
      break;
    case I.too_small:
      e.type === 'array'
        ? (n = `Array must contain ${e.exact ? 'exactly' : e.inclusive ? 'at least' : 'more than'} ${e.minimum} element(s)`)
        : e.type === 'string'
          ? (n = `String must contain ${e.exact ? 'exactly' : e.inclusive ? 'at least' : 'over'} ${e.minimum} character(s)`)
          : e.type === 'number'
            ? (n = `Number must be ${e.exact ? 'exactly equal to ' : e.inclusive ? 'greater than or equal to ' : 'greater than '}${e.minimum}`)
            : e.type === 'date'
              ? (n = `Date must be ${e.exact ? 'exactly equal to ' : e.inclusive ? 'greater than or equal to ' : 'greater than '}${new Date(Number(e.minimum))}`)
              : (n = 'Invalid input');
      break;
    case I.too_big:
      e.type === 'array'
        ? (n = `Array must contain ${e.exact ? 'exactly' : e.inclusive ? 'at most' : 'less than'} ${e.maximum} element(s)`)
        : e.type === 'string'
          ? (n = `String must contain ${e.exact ? 'exactly' : e.inclusive ? 'at most' : 'under'} ${e.maximum} character(s)`)
          : e.type === 'number'
            ? (n = `Number must be ${e.exact ? 'exactly' : e.inclusive ? 'less than or equal to' : 'less than'} ${e.maximum}`)
            : e.type === 'bigint'
              ? (n = `BigInt must be ${e.exact ? 'exactly' : e.inclusive ? 'less than or equal to' : 'less than'} ${e.maximum}`)
              : e.type === 'date'
                ? (n = `Date must be ${e.exact ? 'exactly' : e.inclusive ? 'smaller than or equal to' : 'smaller than'} ${new Date(Number(e.maximum))}`)
                : (n = 'Invalid input');
      break;
    case I.custom:
      n = 'Invalid input';
      break;
    case I.invalid_intersection_types:
      n = 'Intersection results could not be merged';
      break;
    case I.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case I.not_finite:
      n = 'Number must be finite';
      break;
    default:
      (n = t.defaultError), fe.assertNever(e);
  }
  return { message: n };
};
let Mw = Es;
function $u() {
  return Mw;
}
const Bu = (e) => {
  const { data: t, path: n, errorMaps: r, issueData: o } = e,
    s = [...n, ...(o.path || [])],
    i = { ...o, path: s };
  if (o.message !== void 0) return { ...o, path: s, message: o.message };
  let a = '';
  const l = r
    .filter((u) => !!u)
    .slice()
    .reverse();
  for (const u of l) a = u(i, { data: t, defaultError: a }).message;
  return { ...o, path: s, message: a };
};
function B(e, t) {
  const n = $u(),
    r = Bu({
      issueData: t,
      data: e.data,
      path: e.path,
      errorMaps: [
        e.common.contextualErrorMap,
        e.schemaErrorMap,
        n,
        n === Es ? void 0 : Es,
      ].filter((o) => !!o),
    });
  e.common.issues.push(r);
}
class tt {
  constructor() {
    this.value = 'valid';
  }
  dirty() {
    this.value === 'valid' && (this.value = 'dirty');
  }
  abort() {
    this.value !== 'aborted' && (this.value = 'aborted');
  }
  static mergeArray(t, n) {
    const r = [];
    for (const o of n) {
      if (o.status === 'aborted') return ee;
      o.status === 'dirty' && t.dirty(), r.push(o.value);
    }
    return { status: t.value, value: r };
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const o of n) {
      const s = await o.key,
        i = await o.value;
      r.push({ key: s, value: i });
    }
    return tt.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const o of n) {
      const { key: s, value: i } = o;
      if (s.status === 'aborted' || i.status === 'aborted') return ee;
      s.status === 'dirty' && t.dirty(),
        i.status === 'dirty' && t.dirty(),
        s.value !== '__proto__' &&
          (typeof i.value < 'u' || o.alwaysSet) &&
          (r[s.value] = i.value);
    }
    return { status: t.value, value: r };
  }
}
const ee = Object.freeze({ status: 'aborted' }),
  Yo = (e) => ({ status: 'dirty', value: e }),
  dt = (e) => ({ status: 'valid', value: e }),
  Kf = (e) => e.status === 'aborted',
  Qf = (e) => e.status === 'dirty',
  oa = (e) => e.status === 'valid',
  sa = (e) => typeof Promise < 'u' && e instanceof Promise;
function ia(e, t, n, r) {
  if (typeof t == 'function' ? e !== t || !r : !t.has(e))
    throw new TypeError(
      'Cannot read private member from an object whose class did not declare it',
    );
  return t.get(e);
}
function ov(e, t, n, r, o) {
  if (typeof t == 'function' ? e !== t || !o : !t.has(e))
    throw new TypeError(
      'Cannot write private member to an object whose class did not declare it',
    );
  return t.set(e, n), n;
}
var K;
(function (e) {
  (e.errToObj = (t) => (typeof t == 'string' ? { message: t } : t || {})),
    (e.toString = (t) =>
      typeof t == 'string' ? t : t == null ? void 0 : t.message);
})(K || (K = {}));
var Ko, Qo;
class on {
  constructor(t, n, r, o) {
    (this._cachedPath = []),
      (this.parent = t),
      (this.data = n),
      (this._path = r),
      (this._key = o);
  }
  get path() {
    return (
      this._cachedPath.length ||
        (this._key instanceof Array
          ? this._cachedPath.push(...this._path, ...this._key)
          : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    );
  }
}
const Xf = (e, t) => {
  if (oa(t)) return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error('Validation failed but no issues detected.');
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const n = new Pt(e.common.issues);
      return (this._error = n), this._error;
    },
  };
};
function oe(e) {
  if (!e) return {};
  const {
    errorMap: t,
    invalid_type_error: n,
    required_error: r,
    description: o,
  } = e;
  if (t && (n || r))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
    );
  return t
    ? { errorMap: t, description: o }
    : {
        errorMap: (i, a) => {
          var l, u;
          const { message: c } = e;
          return i.code === 'invalid_enum_value'
            ? { message: c ?? a.defaultError }
            : typeof a.data > 'u'
              ? {
                  message:
                    (l = c ?? r) !== null && l !== void 0 ? l : a.defaultError,
                }
              : i.code !== 'invalid_type'
                ? { message: a.defaultError }
                : {
                    message:
                      (u = c ?? n) !== null && u !== void 0
                        ? u
                        : a.defaultError,
                  };
        },
        description: o,
      };
}
class ce {
  constructor(t) {
    (this.spa = this.safeParseAsync),
      (this._def = t),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this));
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return ur(t.data);
  }
  _getOrReturnCtx(t, n) {
    return (
      n || {
        common: t.parent.common,
        data: t.data,
        parsedType: ur(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      }
    );
  }
  _processInputParams(t) {
    return {
      status: new tt(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: ur(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      },
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (sa(n)) throw new Error('Synchronous parse encountered promise.');
    return n;
  }
  _parseAsync(t) {
    const n = this._parse(t);
    return Promise.resolve(n);
  }
  parse(t, n) {
    const r = this.safeParse(t, n);
    if (r.success) return r.data;
    throw r.error;
  }
  safeParse(t, n) {
    var r;
    const o = {
        common: {
          issues: [],
          async:
            (r = n == null ? void 0 : n.async) !== null && r !== void 0
              ? r
              : !1,
          contextualErrorMap: n == null ? void 0 : n.errorMap,
        },
        path: (n == null ? void 0 : n.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: ur(t),
      },
      s = this._parseSync({ data: t, path: o.path, parent: o });
    return Xf(o, s);
  }
  async parseAsync(t, n) {
    const r = await this.safeParseAsync(t, n);
    if (r.success) return r.data;
    throw r.error;
  }
  async safeParseAsync(t, n) {
    const r = {
        common: {
          issues: [],
          contextualErrorMap: n == null ? void 0 : n.errorMap,
          async: !0,
        },
        path: (n == null ? void 0 : n.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: ur(t),
      },
      o = this._parse({ data: t, path: r.path, parent: r }),
      s = await (sa(o) ? o : Promise.resolve(o));
    return Xf(r, s);
  }
  refine(t, n) {
    const r = (o) =>
      typeof n == 'string' || typeof n > 'u'
        ? { message: n }
        : typeof n == 'function'
          ? n(o)
          : n;
    return this._refinement((o, s) => {
      const i = t(o),
        a = () => s.addIssue({ code: I.custom, ...r(o) });
      return typeof Promise < 'u' && i instanceof Promise
        ? i.then((l) => (l ? !0 : (a(), !1)))
        : i
          ? !0
          : (a(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, o) =>
      t(r) ? !0 : (o.addIssue(typeof n == 'function' ? n(r, o) : n), !1),
    );
  }
  _refinement(t) {
    return new bn({
      schema: this,
      typeName: J.ZodEffects,
      effect: { type: 'refinement', refinement: t },
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return yn.create(this, this._def);
  }
  nullable() {
    return kr.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return nn.create(this, this._def);
  }
  promise() {
    return Ts.create(this, this._def);
  }
  or(t) {
    return ua.create([this, t], this._def);
  }
  and(t) {
    return ca.create(this, t, this._def);
  }
  transform(t) {
    return new bn({
      ...oe(this._def),
      schema: this,
      typeName: J.ZodEffects,
      effect: { type: 'transform', transform: t },
    });
  }
  default(t) {
    const n = typeof t == 'function' ? t : () => t;
    return new ma({
      ...oe(this._def),
      innerType: this,
      defaultValue: n,
      typeName: J.ZodDefault,
    });
  }
  brand() {
    return new lv({ typeName: J.ZodBranded, type: this, ...oe(this._def) });
  }
  catch(t) {
    const n = typeof t == 'function' ? t : () => t;
    return new va({
      ...oe(this._def),
      innerType: this,
      catchValue: n,
      typeName: J.ZodCatch,
    });
  }
  describe(t) {
    const n = this.constructor;
    return new n({ ...this._def, description: t });
  }
  pipe(t) {
    return Ba.create(this, t);
  }
  readonly() {
    return ga.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Dw = /^c[^\s-]{8,}$/i,
  Lw = /^[0-9a-z]+$/,
  Iw = /^[0-9A-HJKMNP-TV-Z]{26}$/,
  jw =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  Fw = /^[a-z0-9_-]{21}$/i,
  zw =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  Vw =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  $w = '^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$';
let Ml;
const Bw =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  Uw =
    /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  Ww = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  sv =
    '((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))',
  Hw = new RegExp(`^${sv}$`);
function iv(e) {
  let t = '([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d';
  return (
    e.precision
      ? (t = `${t}\\.\\d{${e.precision}}`)
      : e.precision == null && (t = `${t}(\\.\\d+)?`),
    t
  );
}
function Zw(e) {
  return new RegExp(`^${iv(e)}$`);
}
function Gw(e) {
  let t = `${sv}T${iv(e)}`;
  const n = [];
  return (
    n.push(e.local ? 'Z?' : 'Z'),
    e.offset && n.push('([+-]\\d{2}:?\\d{2})'),
    (t = `${t}(${n.join('|')})`),
    new RegExp(`^${t}$`)
  );
}
function Yw(e, t) {
  return !!(
    ((t === 'v4' || !t) && Bw.test(e)) ||
    ((t === 'v6' || !t) && Uw.test(e))
  );
}
class vn extends ce {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = String(t.data)),
      this._getType(t) !== U.string)
    ) {
      const s = this._getOrReturnCtx(t);
      return (
        B(s, {
          code: I.invalid_type,
          expected: U.string,
          received: s.parsedType,
        }),
        ee
      );
    }
    const r = new tt();
    let o;
    for (const s of this._def.checks)
      if (s.kind === 'min')
        t.data.length < s.value &&
          ((o = this._getOrReturnCtx(t, o)),
          B(o, {
            code: I.too_small,
            minimum: s.value,
            type: 'string',
            inclusive: !0,
            exact: !1,
            message: s.message,
          }),
          r.dirty());
      else if (s.kind === 'max')
        t.data.length > s.value &&
          ((o = this._getOrReturnCtx(t, o)),
          B(o, {
            code: I.too_big,
            maximum: s.value,
            type: 'string',
            inclusive: !0,
            exact: !1,
            message: s.message,
          }),
          r.dirty());
      else if (s.kind === 'length') {
        const i = t.data.length > s.value,
          a = t.data.length < s.value;
        (i || a) &&
          ((o = this._getOrReturnCtx(t, o)),
          i
            ? B(o, {
                code: I.too_big,
                maximum: s.value,
                type: 'string',
                inclusive: !0,
                exact: !0,
                message: s.message,
              })
            : a &&
              B(o, {
                code: I.too_small,
                minimum: s.value,
                type: 'string',
                inclusive: !0,
                exact: !0,
                message: s.message,
              }),
          r.dirty());
      } else if (s.kind === 'email')
        Vw.test(t.data) ||
          ((o = this._getOrReturnCtx(t, o)),
          B(o, {
            validation: 'email',
            code: I.invalid_string,
            message: s.message,
          }),
          r.dirty());
      else if (s.kind === 'emoji')
        Ml || (Ml = new RegExp($w, 'u')),
          Ml.test(t.data) ||
            ((o = this._getOrReturnCtx(t, o)),
            B(o, {
              validation: 'emoji',
              code: I.invalid_string,
              message: s.message,
            }),
            r.dirty());
      else if (s.kind === 'uuid')
        jw.test(t.data) ||
          ((o = this._getOrReturnCtx(t, o)),
          B(o, {
            validation: 'uuid',
            code: I.invalid_string,
            message: s.message,
          }),
          r.dirty());
      else if (s.kind === 'nanoid')
        Fw.test(t.data) ||
          ((o = this._getOrReturnCtx(t, o)),
          B(o, {
            validation: 'nanoid',
            code: I.invalid_string,
            message: s.message,
          }),
          r.dirty());
      else if (s.kind === 'cuid')
        Dw.test(t.data) ||
          ((o = this._getOrReturnCtx(t, o)),
          B(o, {
            validation: 'cuid',
            code: I.invalid_string,
            message: s.message,
          }),
          r.dirty());
      else if (s.kind === 'cuid2')
        Lw.test(t.data) ||
          ((o = this._getOrReturnCtx(t, o)),
          B(o, {
            validation: 'cuid2',
            code: I.invalid_string,
            message: s.message,
          }),
          r.dirty());
      else if (s.kind === 'ulid')
        Iw.test(t.data) ||
          ((o = this._getOrReturnCtx(t, o)),
          B(o, {
            validation: 'ulid',
            code: I.invalid_string,
            message: s.message,
          }),
          r.dirty());
      else if (s.kind === 'url')
        try {
          new URL(t.data);
        } catch {
          (o = this._getOrReturnCtx(t, o)),
            B(o, {
              validation: 'url',
              code: I.invalid_string,
              message: s.message,
            }),
            r.dirty();
        }
      else
        s.kind === 'regex'
          ? ((s.regex.lastIndex = 0),
            s.regex.test(t.data) ||
              ((o = this._getOrReturnCtx(t, o)),
              B(o, {
                validation: 'regex',
                code: I.invalid_string,
                message: s.message,
              }),
              r.dirty()))
          : s.kind === 'trim'
            ? (t.data = t.data.trim())
            : s.kind === 'includes'
              ? t.data.includes(s.value, s.position) ||
                ((o = this._getOrReturnCtx(t, o)),
                B(o, {
                  code: I.invalid_string,
                  validation: { includes: s.value, position: s.position },
                  message: s.message,
                }),
                r.dirty())
              : s.kind === 'toLowerCase'
                ? (t.data = t.data.toLowerCase())
                : s.kind === 'toUpperCase'
                  ? (t.data = t.data.toUpperCase())
                  : s.kind === 'startsWith'
                    ? t.data.startsWith(s.value) ||
                      ((o = this._getOrReturnCtx(t, o)),
                      B(o, {
                        code: I.invalid_string,
                        validation: { startsWith: s.value },
                        message: s.message,
                      }),
                      r.dirty())
                    : s.kind === 'endsWith'
                      ? t.data.endsWith(s.value) ||
                        ((o = this._getOrReturnCtx(t, o)),
                        B(o, {
                          code: I.invalid_string,
                          validation: { endsWith: s.value },
                          message: s.message,
                        }),
                        r.dirty())
                      : s.kind === 'datetime'
                        ? Gw(s).test(t.data) ||
                          ((o = this._getOrReturnCtx(t, o)),
                          B(o, {
                            code: I.invalid_string,
                            validation: 'datetime',
                            message: s.message,
                          }),
                          r.dirty())
                        : s.kind === 'date'
                          ? Hw.test(t.data) ||
                            ((o = this._getOrReturnCtx(t, o)),
                            B(o, {
                              code: I.invalid_string,
                              validation: 'date',
                              message: s.message,
                            }),
                            r.dirty())
                          : s.kind === 'time'
                            ? Zw(s).test(t.data) ||
                              ((o = this._getOrReturnCtx(t, o)),
                              B(o, {
                                code: I.invalid_string,
                                validation: 'time',
                                message: s.message,
                              }),
                              r.dirty())
                            : s.kind === 'duration'
                              ? zw.test(t.data) ||
                                ((o = this._getOrReturnCtx(t, o)),
                                B(o, {
                                  validation: 'duration',
                                  code: I.invalid_string,
                                  message: s.message,
                                }),
                                r.dirty())
                              : s.kind === 'ip'
                                ? Yw(t.data, s.version) ||
                                  ((o = this._getOrReturnCtx(t, o)),
                                  B(o, {
                                    validation: 'ip',
                                    code: I.invalid_string,
                                    message: s.message,
                                  }),
                                  r.dirty())
                                : s.kind === 'base64'
                                  ? Ww.test(t.data) ||
                                    ((o = this._getOrReturnCtx(t, o)),
                                    B(o, {
                                      validation: 'base64',
                                      code: I.invalid_string,
                                      message: s.message,
                                    }),
                                    r.dirty())
                                  : fe.assertNever(s);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((o) => t.test(o), {
      validation: n,
      code: I.invalid_string,
      ...K.errToObj(r),
    });
  }
  _addCheck(t) {
    return new vn({ ...this._def, checks: [...this._def.checks, t] });
  }
  email(t) {
    return this._addCheck({ kind: 'email', ...K.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: 'url', ...K.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: 'emoji', ...K.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: 'uuid', ...K.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: 'nanoid', ...K.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: 'cuid', ...K.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: 'cuid2', ...K.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: 'ulid', ...K.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: 'base64', ...K.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: 'ip', ...K.errToObj(t) });
  }
  datetime(t) {
    var n, r;
    return typeof t == 'string'
      ? this._addCheck({
          kind: 'datetime',
          precision: null,
          offset: !1,
          local: !1,
          message: t,
        })
      : this._addCheck({
          kind: 'datetime',
          precision:
            typeof (t == null ? void 0 : t.precision) > 'u'
              ? null
              : t == null
                ? void 0
                : t.precision,
          offset:
            (n = t == null ? void 0 : t.offset) !== null && n !== void 0
              ? n
              : !1,
          local:
            (r = t == null ? void 0 : t.local) !== null && r !== void 0
              ? r
              : !1,
          ...K.errToObj(t == null ? void 0 : t.message),
        });
  }
  date(t) {
    return this._addCheck({ kind: 'date', message: t });
  }
  time(t) {
    return typeof t == 'string'
      ? this._addCheck({ kind: 'time', precision: null, message: t })
      : this._addCheck({
          kind: 'time',
          precision:
            typeof (t == null ? void 0 : t.precision) > 'u'
              ? null
              : t == null
                ? void 0
                : t.precision,
          ...K.errToObj(t == null ? void 0 : t.message),
        });
  }
  duration(t) {
    return this._addCheck({ kind: 'duration', ...K.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({ kind: 'regex', regex: t, ...K.errToObj(n) });
  }
  includes(t, n) {
    return this._addCheck({
      kind: 'includes',
      value: t,
      position: n == null ? void 0 : n.position,
      ...K.errToObj(n == null ? void 0 : n.message),
    });
  }
  startsWith(t, n) {
    return this._addCheck({ kind: 'startsWith', value: t, ...K.errToObj(n) });
  }
  endsWith(t, n) {
    return this._addCheck({ kind: 'endsWith', value: t, ...K.errToObj(n) });
  }
  min(t, n) {
    return this._addCheck({ kind: 'min', value: t, ...K.errToObj(n) });
  }
  max(t, n) {
    return this._addCheck({ kind: 'max', value: t, ...K.errToObj(n) });
  }
  length(t, n) {
    return this._addCheck({ kind: 'length', value: t, ...K.errToObj(n) });
  }
  nonempty(t) {
    return this.min(1, K.errToObj(t));
  }
  trim() {
    return new vn({
      ...this._def,
      checks: [...this._def.checks, { kind: 'trim' }],
    });
  }
  toLowerCase() {
    return new vn({
      ...this._def,
      checks: [...this._def.checks, { kind: 'toLowerCase' }],
    });
  }
  toUpperCase() {
    return new vn({
      ...this._def,
      checks: [...this._def.checks, { kind: 'toUpperCase' }],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === 'datetime');
  }
  get isDate() {
    return !!this._def.checks.find((t) => t.kind === 'date');
  }
  get isTime() {
    return !!this._def.checks.find((t) => t.kind === 'time');
  }
  get isDuration() {
    return !!this._def.checks.find((t) => t.kind === 'duration');
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === 'email');
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === 'url');
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === 'emoji');
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === 'uuid');
  }
  get isNANOID() {
    return !!this._def.checks.find((t) => t.kind === 'nanoid');
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === 'cuid');
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === 'cuid2');
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === 'ulid');
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === 'ip');
  }
  get isBase64() {
    return !!this._def.checks.find((t) => t.kind === 'base64');
  }
  get minLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === 'min' && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === 'max' && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
vn.create = (e) => {
  var t;
  return new vn({
    checks: [],
    typeName: J.ZodString,
    coerce:
      (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...oe(e),
  });
};
function Kw(e, t) {
  const n = (e.toString().split('.')[1] || '').length,
    r = (t.toString().split('.')[1] || '').length,
    o = n > r ? n : r,
    s = parseInt(e.toFixed(o).replace('.', '')),
    i = parseInt(t.toFixed(o).replace('.', ''));
  return (s % i) / Math.pow(10, o);
}
class ho extends ce {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(t) {
    if (
      (this._def.coerce && (t.data = Number(t.data)),
      this._getType(t) !== U.number)
    ) {
      const s = this._getOrReturnCtx(t);
      return (
        B(s, {
          code: I.invalid_type,
          expected: U.number,
          received: s.parsedType,
        }),
        ee
      );
    }
    let r;
    const o = new tt();
    for (const s of this._def.checks)
      s.kind === 'int'
        ? fe.isInteger(t.data) ||
          ((r = this._getOrReturnCtx(t, r)),
          B(r, {
            code: I.invalid_type,
            expected: 'integer',
            received: 'float',
            message: s.message,
          }),
          o.dirty())
        : s.kind === 'min'
          ? (s.inclusive ? t.data < s.value : t.data <= s.value) &&
            ((r = this._getOrReturnCtx(t, r)),
            B(r, {
              code: I.too_small,
              minimum: s.value,
              type: 'number',
              inclusive: s.inclusive,
              exact: !1,
              message: s.message,
            }),
            o.dirty())
          : s.kind === 'max'
            ? (s.inclusive ? t.data > s.value : t.data >= s.value) &&
              ((r = this._getOrReturnCtx(t, r)),
              B(r, {
                code: I.too_big,
                maximum: s.value,
                type: 'number',
                inclusive: s.inclusive,
                exact: !1,
                message: s.message,
              }),
              o.dirty())
            : s.kind === 'multipleOf'
              ? Kw(t.data, s.value) !== 0 &&
                ((r = this._getOrReturnCtx(t, r)),
                B(r, {
                  code: I.not_multiple_of,
                  multipleOf: s.value,
                  message: s.message,
                }),
                o.dirty())
              : s.kind === 'finite'
                ? Number.isFinite(t.data) ||
                  ((r = this._getOrReturnCtx(t, r)),
                  B(r, { code: I.not_finite, message: s.message }),
                  o.dirty())
                : fe.assertNever(s);
    return { status: o.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit('min', t, !0, K.toString(n));
  }
  gt(t, n) {
    return this.setLimit('min', t, !1, K.toString(n));
  }
  lte(t, n) {
    return this.setLimit('max', t, !0, K.toString(n));
  }
  lt(t, n) {
    return this.setLimit('max', t, !1, K.toString(n));
  }
  setLimit(t, n, r, o) {
    return new ho({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: n, inclusive: r, message: K.toString(o) },
      ],
    });
  }
  _addCheck(t) {
    return new ho({ ...this._def, checks: [...this._def.checks, t] });
  }
  int(t) {
    return this._addCheck({ kind: 'int', message: K.toString(t) });
  }
  positive(t) {
    return this._addCheck({
      kind: 'min',
      value: 0,
      inclusive: !1,
      message: K.toString(t),
    });
  }
  negative(t) {
    return this._addCheck({
      kind: 'max',
      value: 0,
      inclusive: !1,
      message: K.toString(t),
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: 'max',
      value: 0,
      inclusive: !0,
      message: K.toString(t),
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: 'min',
      value: 0,
      inclusive: !0,
      message: K.toString(t),
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: 'multipleOf',
      value: t,
      message: K.toString(n),
    });
  }
  finite(t) {
    return this._addCheck({ kind: 'finite', message: K.toString(t) });
  }
  safe(t) {
    return this._addCheck({
      kind: 'min',
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: K.toString(t),
    })._addCheck({
      kind: 'max',
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: K.toString(t),
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === 'min' && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === 'max' && (t === null || n.value < t) && (t = n.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find(
      (t) =>
        t.kind === 'int' || (t.kind === 'multipleOf' && fe.isInteger(t.value)),
    );
  }
  get isFinite() {
    let t = null,
      n = null;
    for (const r of this._def.checks) {
      if (r.kind === 'finite' || r.kind === 'int' || r.kind === 'multipleOf')
        return !0;
      r.kind === 'min'
        ? (n === null || r.value > n) && (n = r.value)
        : r.kind === 'max' && (t === null || r.value < t) && (t = r.value);
    }
    return Number.isFinite(n) && Number.isFinite(t);
  }
}
ho.create = (e) =>
  new ho({
    checks: [],
    typeName: J.ZodNumber,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...oe(e),
  });
class mo extends ce {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte);
  }
  _parse(t) {
    if (
      (this._def.coerce && (t.data = BigInt(t.data)),
      this._getType(t) !== U.bigint)
    ) {
      const s = this._getOrReturnCtx(t);
      return (
        B(s, {
          code: I.invalid_type,
          expected: U.bigint,
          received: s.parsedType,
        }),
        ee
      );
    }
    let r;
    const o = new tt();
    for (const s of this._def.checks)
      s.kind === 'min'
        ? (s.inclusive ? t.data < s.value : t.data <= s.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          B(r, {
            code: I.too_small,
            type: 'bigint',
            minimum: s.value,
            inclusive: s.inclusive,
            message: s.message,
          }),
          o.dirty())
        : s.kind === 'max'
          ? (s.inclusive ? t.data > s.value : t.data >= s.value) &&
            ((r = this._getOrReturnCtx(t, r)),
            B(r, {
              code: I.too_big,
              type: 'bigint',
              maximum: s.value,
              inclusive: s.inclusive,
              message: s.message,
            }),
            o.dirty())
          : s.kind === 'multipleOf'
            ? t.data % s.value !== BigInt(0) &&
              ((r = this._getOrReturnCtx(t, r)),
              B(r, {
                code: I.not_multiple_of,
                multipleOf: s.value,
                message: s.message,
              }),
              o.dirty())
            : fe.assertNever(s);
    return { status: o.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit('min', t, !0, K.toString(n));
  }
  gt(t, n) {
    return this.setLimit('min', t, !1, K.toString(n));
  }
  lte(t, n) {
    return this.setLimit('max', t, !0, K.toString(n));
  }
  lt(t, n) {
    return this.setLimit('max', t, !1, K.toString(n));
  }
  setLimit(t, n, r, o) {
    return new mo({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: n, inclusive: r, message: K.toString(o) },
      ],
    });
  }
  _addCheck(t) {
    return new mo({ ...this._def, checks: [...this._def.checks, t] });
  }
  positive(t) {
    return this._addCheck({
      kind: 'min',
      value: BigInt(0),
      inclusive: !1,
      message: K.toString(t),
    });
  }
  negative(t) {
    return this._addCheck({
      kind: 'max',
      value: BigInt(0),
      inclusive: !1,
      message: K.toString(t),
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: 'max',
      value: BigInt(0),
      inclusive: !0,
      message: K.toString(t),
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: 'min',
      value: BigInt(0),
      inclusive: !0,
      message: K.toString(t),
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: 'multipleOf',
      value: t,
      message: K.toString(n),
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === 'min' && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === 'max' && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
mo.create = (e) => {
  var t;
  return new mo({
    checks: [],
    typeName: J.ZodBigInt,
    coerce:
      (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...oe(e),
  });
};
class Uu extends ce {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = !!t.data), this._getType(t) !== U.boolean)
    ) {
      const r = this._getOrReturnCtx(t);
      return (
        B(r, {
          code: I.invalid_type,
          expected: U.boolean,
          received: r.parsedType,
        }),
        ee
      );
    }
    return dt(t.data);
  }
}
Uu.create = (e) =>
  new Uu({
    typeName: J.ZodBoolean,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...oe(e),
  });
class Ps extends ce {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = new Date(t.data)),
      this._getType(t) !== U.date)
    ) {
      const s = this._getOrReturnCtx(t);
      return (
        B(s, {
          code: I.invalid_type,
          expected: U.date,
          received: s.parsedType,
        }),
        ee
      );
    }
    if (isNaN(t.data.getTime())) {
      const s = this._getOrReturnCtx(t);
      return B(s, { code: I.invalid_date }), ee;
    }
    const r = new tt();
    let o;
    for (const s of this._def.checks)
      s.kind === 'min'
        ? t.data.getTime() < s.value &&
          ((o = this._getOrReturnCtx(t, o)),
          B(o, {
            code: I.too_small,
            message: s.message,
            inclusive: !0,
            exact: !1,
            minimum: s.value,
            type: 'date',
          }),
          r.dirty())
        : s.kind === 'max'
          ? t.data.getTime() > s.value &&
            ((o = this._getOrReturnCtx(t, o)),
            B(o, {
              code: I.too_big,
              message: s.message,
              inclusive: !0,
              exact: !1,
              maximum: s.value,
              type: 'date',
            }),
            r.dirty())
          : fe.assertNever(s);
    return { status: r.value, value: new Date(t.data.getTime()) };
  }
  _addCheck(t) {
    return new Ps({ ...this._def, checks: [...this._def.checks, t] });
  }
  min(t, n) {
    return this._addCheck({
      kind: 'min',
      value: t.getTime(),
      message: K.toString(n),
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: 'max',
      value: t.getTime(),
      message: K.toString(n),
    });
  }
  get minDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === 'min' && (t === null || n.value > t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === 'max' && (t === null || n.value < t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
}
Ps.create = (e) =>
  new Ps({
    checks: [],
    coerce: (e == null ? void 0 : e.coerce) || !1,
    typeName: J.ZodDate,
    ...oe(e),
  });
class Wu extends ce {
  _parse(t) {
    if (this._getType(t) !== U.symbol) {
      const r = this._getOrReturnCtx(t);
      return (
        B(r, {
          code: I.invalid_type,
          expected: U.symbol,
          received: r.parsedType,
        }),
        ee
      );
    }
    return dt(t.data);
  }
}
Wu.create = (e) => new Wu({ typeName: J.ZodSymbol, ...oe(e) });
class aa extends ce {
  _parse(t) {
    if (this._getType(t) !== U.undefined) {
      const r = this._getOrReturnCtx(t);
      return (
        B(r, {
          code: I.invalid_type,
          expected: U.undefined,
          received: r.parsedType,
        }),
        ee
      );
    }
    return dt(t.data);
  }
}
aa.create = (e) => new aa({ typeName: J.ZodUndefined, ...oe(e) });
class la extends ce {
  _parse(t) {
    if (this._getType(t) !== U.null) {
      const r = this._getOrReturnCtx(t);
      return (
        B(r, {
          code: I.invalid_type,
          expected: U.null,
          received: r.parsedType,
        }),
        ee
      );
    }
    return dt(t.data);
  }
}
la.create = (e) => new la({ typeName: J.ZodNull, ...oe(e) });
class Hu extends ce {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(t) {
    return dt(t.data);
  }
}
Hu.create = (e) => new Hu({ typeName: J.ZodAny, ...oe(e) });
class no extends ce {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(t) {
    return dt(t.data);
  }
}
no.create = (e) => new no({ typeName: J.ZodUnknown, ...oe(e) });
class qn extends ce {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return (
      B(n, { code: I.invalid_type, expected: U.never, received: n.parsedType }),
      ee
    );
  }
}
qn.create = (e) => new qn({ typeName: J.ZodNever, ...oe(e) });
class Zu extends ce {
  _parse(t) {
    if (this._getType(t) !== U.undefined) {
      const r = this._getOrReturnCtx(t);
      return (
        B(r, {
          code: I.invalid_type,
          expected: U.void,
          received: r.parsedType,
        }),
        ee
      );
    }
    return dt(t.data);
  }
}
Zu.create = (e) => new Zu({ typeName: J.ZodVoid, ...oe(e) });
class nn extends ce {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t),
      o = this._def;
    if (n.parsedType !== U.array)
      return (
        B(n, {
          code: I.invalid_type,
          expected: U.array,
          received: n.parsedType,
        }),
        ee
      );
    if (o.exactLength !== null) {
      const i = n.data.length > o.exactLength.value,
        a = n.data.length < o.exactLength.value;
      (i || a) &&
        (B(n, {
          code: i ? I.too_big : I.too_small,
          minimum: a ? o.exactLength.value : void 0,
          maximum: i ? o.exactLength.value : void 0,
          type: 'array',
          inclusive: !0,
          exact: !0,
          message: o.exactLength.message,
        }),
        r.dirty());
    }
    if (
      (o.minLength !== null &&
        n.data.length < o.minLength.value &&
        (B(n, {
          code: I.too_small,
          minimum: o.minLength.value,
          type: 'array',
          inclusive: !0,
          exact: !1,
          message: o.minLength.message,
        }),
        r.dirty()),
      o.maxLength !== null &&
        n.data.length > o.maxLength.value &&
        (B(n, {
          code: I.too_big,
          maximum: o.maxLength.value,
          type: 'array',
          inclusive: !0,
          exact: !1,
          message: o.maxLength.message,
        }),
        r.dirty()),
      n.common.async)
    )
      return Promise.all(
        [...n.data].map((i, a) => o.type._parseAsync(new on(n, i, n.path, a))),
      ).then((i) => tt.mergeArray(r, i));
    const s = [...n.data].map((i, a) =>
      o.type._parseSync(new on(n, i, n.path, a)),
    );
    return tt.mergeArray(r, s);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new nn({
      ...this._def,
      minLength: { value: t, message: K.toString(n) },
    });
  }
  max(t, n) {
    return new nn({
      ...this._def,
      maxLength: { value: t, message: K.toString(n) },
    });
  }
  length(t, n) {
    return new nn({
      ...this._def,
      exactLength: { value: t, message: K.toString(n) },
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
nn.create = (e, t) =>
  new nn({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: J.ZodArray,
    ...oe(t),
  });
function jr(e) {
  if (e instanceof Oe) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = yn.create(jr(r));
    }
    return new Oe({ ...e._def, shape: () => t });
  } else
    return e instanceof nn
      ? new nn({ ...e._def, type: jr(e.element) })
      : e instanceof yn
        ? yn.create(jr(e.unwrap()))
        : e instanceof kr
          ? kr.create(jr(e.unwrap()))
          : e instanceof Sn
            ? Sn.create(e.items.map((t) => jr(t)))
            : e;
}
class Oe extends ce {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const t = this._def.shape(),
      n = fe.objectKeys(t);
    return (this._cached = { shape: t, keys: n });
  }
  _parse(t) {
    if (this._getType(t) !== U.object) {
      const u = this._getOrReturnCtx(t);
      return (
        B(u, {
          code: I.invalid_type,
          expected: U.object,
          received: u.parsedType,
        }),
        ee
      );
    }
    const { status: r, ctx: o } = this._processInputParams(t),
      { shape: s, keys: i } = this._getCached(),
      a = [];
    if (
      !(this._def.catchall instanceof qn && this._def.unknownKeys === 'strip')
    )
      for (const u in o.data) i.includes(u) || a.push(u);
    const l = [];
    for (const u of i) {
      const c = s[u],
        d = o.data[u];
      l.push({
        key: { status: 'valid', value: u },
        value: c._parse(new on(o, d, o.path, u)),
        alwaysSet: u in o.data,
      });
    }
    if (this._def.catchall instanceof qn) {
      const u = this._def.unknownKeys;
      if (u === 'passthrough')
        for (const c of a)
          l.push({
            key: { status: 'valid', value: c },
            value: { status: 'valid', value: o.data[c] },
          });
      else if (u === 'strict')
        a.length > 0 &&
          (B(o, { code: I.unrecognized_keys, keys: a }), r.dirty());
      else if (u !== 'strip')
        throw new Error('Internal ZodObject error: invalid unknownKeys value.');
    } else {
      const u = this._def.catchall;
      for (const c of a) {
        const d = o.data[c];
        l.push({
          key: { status: 'valid', value: c },
          value: u._parse(new on(o, d, o.path, c)),
          alwaysSet: c in o.data,
        });
      }
    }
    return o.common.async
      ? Promise.resolve()
          .then(async () => {
            const u = [];
            for (const c of l) {
              const d = await c.key,
                h = await c.value;
              u.push({ key: d, value: h, alwaysSet: c.alwaysSet });
            }
            return u;
          })
          .then((u) => tt.mergeObjectSync(r, u))
      : tt.mergeObjectSync(r, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return (
      K.errToObj,
      new Oe({
        ...this._def,
        unknownKeys: 'strict',
        ...(t !== void 0
          ? {
              errorMap: (n, r) => {
                var o, s, i, a;
                const l =
                  (i =
                    (s = (o = this._def).errorMap) === null || s === void 0
                      ? void 0
                      : s.call(o, n, r).message) !== null && i !== void 0
                    ? i
                    : r.defaultError;
                return n.code === 'unrecognized_keys'
                  ? {
                      message:
                        (a = K.errToObj(t).message) !== null && a !== void 0
                          ? a
                          : l,
                    }
                  : { message: l };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new Oe({ ...this._def, unknownKeys: 'strip' });
  }
  passthrough() {
    return new Oe({ ...this._def, unknownKeys: 'passthrough' });
  }
  extend(t) {
    return new Oe({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...t }),
    });
  }
  merge(t) {
    return new Oe({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({ ...this._def.shape(), ...t._def.shape() }),
      typeName: J.ZodObject,
    });
  }
  setKey(t, n) {
    return this.augment({ [t]: n });
  }
  catchall(t) {
    return new Oe({ ...this._def, catchall: t });
  }
  pick(t) {
    const n = {};
    return (
      fe.objectKeys(t).forEach((r) => {
        t[r] && this.shape[r] && (n[r] = this.shape[r]);
      }),
      new Oe({ ...this._def, shape: () => n })
    );
  }
  omit(t) {
    const n = {};
    return (
      fe.objectKeys(this.shape).forEach((r) => {
        t[r] || (n[r] = this.shape[r]);
      }),
      new Oe({ ...this._def, shape: () => n })
    );
  }
  deepPartial() {
    return jr(this);
  }
  partial(t) {
    const n = {};
    return (
      fe.objectKeys(this.shape).forEach((r) => {
        const o = this.shape[r];
        t && !t[r] ? (n[r] = o) : (n[r] = o.optional());
      }),
      new Oe({ ...this._def, shape: () => n })
    );
  }
  required(t) {
    const n = {};
    return (
      fe.objectKeys(this.shape).forEach((r) => {
        if (t && !t[r]) n[r] = this.shape[r];
        else {
          let s = this.shape[r];
          for (; s instanceof yn; ) s = s._def.innerType;
          n[r] = s;
        }
      }),
      new Oe({ ...this._def, shape: () => n })
    );
  }
  keyof() {
    return av(fe.objectKeys(this.shape));
  }
}
Oe.create = (e, t) =>
  new Oe({
    shape: () => e,
    unknownKeys: 'strip',
    catchall: qn.create(),
    typeName: J.ZodObject,
    ...oe(t),
  });
Oe.strictCreate = (e, t) =>
  new Oe({
    shape: () => e,
    unknownKeys: 'strict',
    catchall: qn.create(),
    typeName: J.ZodObject,
    ...oe(t),
  });
Oe.lazycreate = (e, t) =>
  new Oe({
    shape: e,
    unknownKeys: 'strip',
    catchall: qn.create(),
    typeName: J.ZodObject,
    ...oe(t),
  });
class ua extends ce {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = this._def.options;
    function o(s) {
      for (const a of s) if (a.result.status === 'valid') return a.result;
      for (const a of s)
        if (a.result.status === 'dirty')
          return n.common.issues.push(...a.ctx.common.issues), a.result;
      const i = s.map((a) => new Pt(a.ctx.common.issues));
      return B(n, { code: I.invalid_union, unionErrors: i }), ee;
    }
    if (n.common.async)
      return Promise.all(
        r.map(async (s) => {
          const i = { ...n, common: { ...n.common, issues: [] }, parent: null };
          return {
            result: await s._parseAsync({
              data: n.data,
              path: n.path,
              parent: i,
            }),
            ctx: i,
          };
        }),
      ).then(o);
    {
      let s;
      const i = [];
      for (const l of r) {
        const u = { ...n, common: { ...n.common, issues: [] }, parent: null },
          c = l._parseSync({ data: n.data, path: n.path, parent: u });
        if (c.status === 'valid') return c;
        c.status === 'dirty' && !s && (s = { result: c, ctx: u }),
          u.common.issues.length && i.push(u.common.issues);
      }
      if (s) return n.common.issues.push(...s.ctx.common.issues), s.result;
      const a = i.map((l) => new Pt(l));
      return B(n, { code: I.invalid_union, unionErrors: a }), ee;
    }
  }
  get options() {
    return this._def.options;
  }
}
ua.create = (e, t) => new ua({ options: e, typeName: J.ZodUnion, ...oe(t) });
const dn = (e) =>
  e instanceof fa
    ? dn(e.schema)
    : e instanceof bn
      ? dn(e.innerType())
      : e instanceof pa
        ? [e.value]
        : e instanceof _r
          ? e.options
          : e instanceof ha
            ? fe.objectValues(e.enum)
            : e instanceof ma
              ? dn(e._def.innerType)
              : e instanceof aa
                ? [void 0]
                : e instanceof la
                  ? [null]
                  : e instanceof yn
                    ? [void 0, ...dn(e.unwrap())]
                    : e instanceof kr
                      ? [null, ...dn(e.unwrap())]
                      : e instanceof lv || e instanceof ga
                        ? dn(e.unwrap())
                        : e instanceof va
                          ? dn(e._def.innerType)
                          : [];
class sd extends ce {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== U.object)
      return (
        B(n, {
          code: I.invalid_type,
          expected: U.object,
          received: n.parsedType,
        }),
        ee
      );
    const r = this.discriminator,
      o = n.data[r],
      s = this.optionsMap.get(o);
    return s
      ? n.common.async
        ? s._parseAsync({ data: n.data, path: n.path, parent: n })
        : s._parseSync({ data: n.data, path: n.path, parent: n })
      : (B(n, {
          code: I.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [r],
        }),
        ee);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(t, n, r) {
    const o = new Map();
    for (const s of n) {
      const i = dn(s.shape[t]);
      if (!i.length)
        throw new Error(
          `A discriminator value for key \`${t}\` could not be extracted from all schema options`,
        );
      for (const a of i) {
        if (o.has(a))
          throw new Error(
            `Discriminator property ${String(t)} has duplicate value ${String(a)}`,
          );
        o.set(a, s);
      }
    }
    return new sd({
      typeName: J.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: o,
      ...oe(r),
    });
  }
}
function Gu(e, t) {
  const n = ur(e),
    r = ur(t);
  if (e === t) return { valid: !0, data: e };
  if (n === U.object && r === U.object) {
    const o = fe.objectKeys(t),
      s = fe.objectKeys(e).filter((a) => o.indexOf(a) !== -1),
      i = { ...e, ...t };
    for (const a of s) {
      const l = Gu(e[a], t[a]);
      if (!l.valid) return { valid: !1 };
      i[a] = l.data;
    }
    return { valid: !0, data: i };
  } else if (n === U.array && r === U.array) {
    if (e.length !== t.length) return { valid: !1 };
    const o = [];
    for (let s = 0; s < e.length; s++) {
      const i = e[s],
        a = t[s],
        l = Gu(i, a);
      if (!l.valid) return { valid: !1 };
      o.push(l.data);
    }
    return { valid: !0, data: o };
  } else
    return n === U.date && r === U.date && +e == +t
      ? { valid: !0, data: e }
      : { valid: !1 };
}
class ca extends ce {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t),
      o = (s, i) => {
        if (Kf(s) || Kf(i)) return ee;
        const a = Gu(s.value, i.value);
        return a.valid
          ? ((Qf(s) || Qf(i)) && n.dirty(), { status: n.value, value: a.data })
          : (B(r, { code: I.invalid_intersection_types }), ee);
      };
    return r.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: r.data, path: r.path, parent: r }),
          this._def.right._parseAsync({
            data: r.data,
            path: r.path,
            parent: r,
          }),
        ]).then(([s, i]) => o(s, i))
      : o(
          this._def.left._parseSync({ data: r.data, path: r.path, parent: r }),
          this._def.right._parseSync({ data: r.data, path: r.path, parent: r }),
        );
  }
}
ca.create = (e, t, n) =>
  new ca({ left: e, right: t, typeName: J.ZodIntersection, ...oe(n) });
class Sn extends ce {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== U.array)
      return (
        B(r, {
          code: I.invalid_type,
          expected: U.array,
          received: r.parsedType,
        }),
        ee
      );
    if (r.data.length < this._def.items.length)
      return (
        B(r, {
          code: I.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: 'array',
        }),
        ee
      );
    !this._def.rest &&
      r.data.length > this._def.items.length &&
      (B(r, {
        code: I.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: 'array',
      }),
      n.dirty());
    const s = [...r.data]
      .map((i, a) => {
        const l = this._def.items[a] || this._def.rest;
        return l ? l._parse(new on(r, i, r.path, a)) : null;
      })
      .filter((i) => !!i);
    return r.common.async
      ? Promise.all(s).then((i) => tt.mergeArray(n, i))
      : tt.mergeArray(n, s);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Sn({ ...this._def, rest: t });
  }
}
Sn.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error('You must pass an array of schemas to z.tuple([ ... ])');
  return new Sn({ items: e, typeName: J.ZodTuple, rest: null, ...oe(t) });
};
class da extends ce {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== U.object)
      return (
        B(r, {
          code: I.invalid_type,
          expected: U.object,
          received: r.parsedType,
        }),
        ee
      );
    const o = [],
      s = this._def.keyType,
      i = this._def.valueType;
    for (const a in r.data)
      o.push({
        key: s._parse(new on(r, a, r.path, a)),
        value: i._parse(new on(r, r.data[a], r.path, a)),
        alwaysSet: a in r.data,
      });
    return r.common.async
      ? tt.mergeObjectAsync(n, o)
      : tt.mergeObjectSync(n, o);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof ce
      ? new da({ keyType: t, valueType: n, typeName: J.ZodRecord, ...oe(r) })
      : new da({
          keyType: vn.create(),
          valueType: t,
          typeName: J.ZodRecord,
          ...oe(n),
        });
  }
}
class Yu extends ce {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== U.map)
      return (
        B(r, { code: I.invalid_type, expected: U.map, received: r.parsedType }),
        ee
      );
    const o = this._def.keyType,
      s = this._def.valueType,
      i = [...r.data.entries()].map(([a, l], u) => ({
        key: o._parse(new on(r, a, r.path, [u, 'key'])),
        value: s._parse(new on(r, l, r.path, [u, 'value'])),
      }));
    if (r.common.async) {
      const a = new Map();
      return Promise.resolve().then(async () => {
        for (const l of i) {
          const u = await l.key,
            c = await l.value;
          if (u.status === 'aborted' || c.status === 'aborted') return ee;
          (u.status === 'dirty' || c.status === 'dirty') && n.dirty(),
            a.set(u.value, c.value);
        }
        return { status: n.value, value: a };
      });
    } else {
      const a = new Map();
      for (const l of i) {
        const u = l.key,
          c = l.value;
        if (u.status === 'aborted' || c.status === 'aborted') return ee;
        (u.status === 'dirty' || c.status === 'dirty') && n.dirty(),
          a.set(u.value, c.value);
      }
      return { status: n.value, value: a };
    }
  }
}
Yu.create = (e, t, n) =>
  new Yu({ valueType: t, keyType: e, typeName: J.ZodMap, ...oe(n) });
class vo extends ce {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== U.set)
      return (
        B(r, { code: I.invalid_type, expected: U.set, received: r.parsedType }),
        ee
      );
    const o = this._def;
    o.minSize !== null &&
      r.data.size < o.minSize.value &&
      (B(r, {
        code: I.too_small,
        minimum: o.minSize.value,
        type: 'set',
        inclusive: !0,
        exact: !1,
        message: o.minSize.message,
      }),
      n.dirty()),
      o.maxSize !== null &&
        r.data.size > o.maxSize.value &&
        (B(r, {
          code: I.too_big,
          maximum: o.maxSize.value,
          type: 'set',
          inclusive: !0,
          exact: !1,
          message: o.maxSize.message,
        }),
        n.dirty());
    const s = this._def.valueType;
    function i(l) {
      const u = new Set();
      for (const c of l) {
        if (c.status === 'aborted') return ee;
        c.status === 'dirty' && n.dirty(), u.add(c.value);
      }
      return { status: n.value, value: u };
    }
    const a = [...r.data.values()].map((l, u) =>
      s._parse(new on(r, l, r.path, u)),
    );
    return r.common.async ? Promise.all(a).then((l) => i(l)) : i(a);
  }
  min(t, n) {
    return new vo({
      ...this._def,
      minSize: { value: t, message: K.toString(n) },
    });
  }
  max(t, n) {
    return new vo({
      ...this._def,
      maxSize: { value: t, message: K.toString(n) },
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
vo.create = (e, t) =>
  new vo({
    valueType: e,
    minSize: null,
    maxSize: null,
    typeName: J.ZodSet,
    ...oe(t),
  });
class ls extends ce {
  constructor() {
    super(...arguments), (this.validate = this.implement);
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== U.function)
      return (
        B(n, {
          code: I.invalid_type,
          expected: U.function,
          received: n.parsedType,
        }),
        ee
      );
    function r(a, l) {
      return Bu({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          $u(),
          Es,
        ].filter((u) => !!u),
        issueData: { code: I.invalid_arguments, argumentsError: l },
      });
    }
    function o(a, l) {
      return Bu({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          $u(),
          Es,
        ].filter((u) => !!u),
        issueData: { code: I.invalid_return_type, returnTypeError: l },
      });
    }
    const s = { errorMap: n.common.contextualErrorMap },
      i = n.data;
    if (this._def.returns instanceof Ts) {
      const a = this;
      return dt(async function (...l) {
        const u = new Pt([]),
          c = await a._def.args.parseAsync(l, s).catch((f) => {
            throw (u.addIssue(r(l, f)), u);
          }),
          d = await Reflect.apply(i, this, c);
        return await a._def.returns._def.type.parseAsync(d, s).catch((f) => {
          throw (u.addIssue(o(d, f)), u);
        });
      });
    } else {
      const a = this;
      return dt(function (...l) {
        const u = a._def.args.safeParse(l, s);
        if (!u.success) throw new Pt([r(l, u.error)]);
        const c = Reflect.apply(i, this, u.data),
          d = a._def.returns.safeParse(c, s);
        if (!d.success) throw new Pt([o(c, d.error)]);
        return d.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new ls({ ...this._def, args: Sn.create(t).rest(no.create()) });
  }
  returns(t) {
    return new ls({ ...this._def, returns: t });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, n, r) {
    return new ls({
      args: t || Sn.create([]).rest(no.create()),
      returns: n || no.create(),
      typeName: J.ZodFunction,
      ...oe(r),
    });
  }
}
class fa extends ce {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
fa.create = (e, t) => new fa({ getter: e, typeName: J.ZodLazy, ...oe(t) });
class pa extends ce {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return (
        B(n, {
          received: n.data,
          code: I.invalid_literal,
          expected: this._def.value,
        }),
        ee
      );
    }
    return { status: 'valid', value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
pa.create = (e, t) => new pa({ value: e, typeName: J.ZodLiteral, ...oe(t) });
function av(e, t) {
  return new _r({ values: e, typeName: J.ZodEnum, ...oe(t) });
}
class _r extends ce {
  constructor() {
    super(...arguments), Ko.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != 'string') {
      const n = this._getOrReturnCtx(t),
        r = this._def.values;
      return (
        B(n, {
          expected: fe.joinValues(r),
          received: n.parsedType,
          code: I.invalid_type,
        }),
        ee
      );
    }
    if (
      (ia(this, Ko) || ov(this, Ko, new Set(this._def.values)),
      !ia(this, Ko).has(t.data))
    ) {
      const n = this._getOrReturnCtx(t),
        r = this._def.values;
      return (
        B(n, { received: n.data, code: I.invalid_enum_value, options: r }), ee
      );
    }
    return dt(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  get Values() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  get Enum() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  extract(t, n = this._def) {
    return _r.create(t, { ...this._def, ...n });
  }
  exclude(t, n = this._def) {
    return _r.create(
      this.options.filter((r) => !t.includes(r)),
      { ...this._def, ...n },
    );
  }
}
Ko = new WeakMap();
_r.create = av;
class ha extends ce {
  constructor() {
    super(...arguments), Qo.set(this, void 0);
  }
  _parse(t) {
    const n = fe.getValidEnumValues(this._def.values),
      r = this._getOrReturnCtx(t);
    if (r.parsedType !== U.string && r.parsedType !== U.number) {
      const o = fe.objectValues(n);
      return (
        B(r, {
          expected: fe.joinValues(o),
          received: r.parsedType,
          code: I.invalid_type,
        }),
        ee
      );
    }
    if (
      (ia(this, Qo) ||
        ov(this, Qo, new Set(fe.getValidEnumValues(this._def.values))),
      !ia(this, Qo).has(t.data))
    ) {
      const o = fe.objectValues(n);
      return (
        B(r, { received: r.data, code: I.invalid_enum_value, options: o }), ee
      );
    }
    return dt(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Qo = new WeakMap();
ha.create = (e, t) =>
  new ha({ values: e, typeName: J.ZodNativeEnum, ...oe(t) });
class Ts extends ce {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== U.promise && n.common.async === !1)
      return (
        B(n, {
          code: I.invalid_type,
          expected: U.promise,
          received: n.parsedType,
        }),
        ee
      );
    const r = n.parsedType === U.promise ? n.data : Promise.resolve(n.data);
    return dt(
      r.then((o) =>
        this._def.type.parseAsync(o, {
          path: n.path,
          errorMap: n.common.contextualErrorMap,
        }),
      ),
    );
  }
}
Ts.create = (e, t) => new Ts({ type: e, typeName: J.ZodPromise, ...oe(t) });
class bn extends ce {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === J.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t),
      o = this._def.effect || null,
      s = {
        addIssue: (i) => {
          B(r, i), i.fatal ? n.abort() : n.dirty();
        },
        get path() {
          return r.path;
        },
      };
    if (((s.addIssue = s.addIssue.bind(s)), o.type === 'preprocess')) {
      const i = o.transform(r.data, s);
      if (r.common.async)
        return Promise.resolve(i).then(async (a) => {
          if (n.value === 'aborted') return ee;
          const l = await this._def.schema._parseAsync({
            data: a,
            path: r.path,
            parent: r,
          });
          return l.status === 'aborted'
            ? ee
            : l.status === 'dirty' || n.value === 'dirty'
              ? Yo(l.value)
              : l;
        });
      {
        if (n.value === 'aborted') return ee;
        const a = this._def.schema._parseSync({
          data: i,
          path: r.path,
          parent: r,
        });
        return a.status === 'aborted'
          ? ee
          : a.status === 'dirty' || n.value === 'dirty'
            ? Yo(a.value)
            : a;
      }
    }
    if (o.type === 'refinement') {
      const i = (a) => {
        const l = o.refinement(a, s);
        if (r.common.async) return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error(
            'Async refinement encountered during synchronous parse operation. Use .parseAsync instead.',
          );
        return a;
      };
      if (r.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        return a.status === 'aborted'
          ? ee
          : (a.status === 'dirty' && n.dirty(),
            i(a.value),
            { status: n.value, value: a.value });
      } else
        return this._def.schema
          ._parseAsync({ data: r.data, path: r.path, parent: r })
          .then((a) =>
            a.status === 'aborted'
              ? ee
              : (a.status === 'dirty' && n.dirty(),
                i(a.value).then(() => ({ status: n.value, value: a.value }))),
          );
    }
    if (o.type === 'transform')
      if (r.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        if (!oa(i)) return i;
        const a = o.transform(i.value, s);
        if (a instanceof Promise)
          throw new Error(
            'Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.',
          );
        return { status: n.value, value: a };
      } else
        return this._def.schema
          ._parseAsync({ data: r.data, path: r.path, parent: r })
          .then((i) =>
            oa(i)
              ? Promise.resolve(o.transform(i.value, s)).then((a) => ({
                  status: n.value,
                  value: a,
                }))
              : i,
          );
    fe.assertNever(o);
  }
}
bn.create = (e, t, n) =>
  new bn({ schema: e, typeName: J.ZodEffects, effect: t, ...oe(n) });
bn.createWithPreprocess = (e, t, n) =>
  new bn({
    schema: t,
    effect: { type: 'preprocess', transform: e },
    typeName: J.ZodEffects,
    ...oe(n),
  });
class yn extends ce {
  _parse(t) {
    return this._getType(t) === U.undefined
      ? dt(void 0)
      : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
yn.create = (e, t) =>
  new yn({ innerType: e, typeName: J.ZodOptional, ...oe(t) });
class kr extends ce {
  _parse(t) {
    return this._getType(t) === U.null
      ? dt(null)
      : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
kr.create = (e, t) =>
  new kr({ innerType: e, typeName: J.ZodNullable, ...oe(t) });
class ma extends ce {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return (
      n.parsedType === U.undefined && (r = this._def.defaultValue()),
      this._def.innerType._parse({ data: r, path: n.path, parent: n })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ma.create = (e, t) =>
  new ma({
    innerType: e,
    typeName: J.ZodDefault,
    defaultValue: typeof t.default == 'function' ? t.default : () => t.default,
    ...oe(t),
  });
class va extends ce {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = { ...n, common: { ...n.common, issues: [] } },
      o = this._def.innerType._parse({
        data: r.data,
        path: r.path,
        parent: { ...r },
      });
    return sa(o)
      ? o.then((s) => ({
          status: 'valid',
          value:
            s.status === 'valid'
              ? s.value
              : this._def.catchValue({
                  get error() {
                    return new Pt(r.common.issues);
                  },
                  input: r.data,
                }),
        }))
      : {
          status: 'valid',
          value:
            o.status === 'valid'
              ? o.value
              : this._def.catchValue({
                  get error() {
                    return new Pt(r.common.issues);
                  },
                  input: r.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
va.create = (e, t) =>
  new va({
    innerType: e,
    typeName: J.ZodCatch,
    catchValue: typeof t.catch == 'function' ? t.catch : () => t.catch,
    ...oe(t),
  });
class Ku extends ce {
  _parse(t) {
    if (this._getType(t) !== U.nan) {
      const r = this._getOrReturnCtx(t);
      return (
        B(r, { code: I.invalid_type, expected: U.nan, received: r.parsedType }),
        ee
      );
    }
    return { status: 'valid', value: t.data };
  }
}
Ku.create = (e) => new Ku({ typeName: J.ZodNaN, ...oe(e) });
class lv extends ce {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = n.data;
    return this._def.type._parse({ data: r, path: n.path, parent: n });
  }
  unwrap() {
    return this._def.type;
  }
}
class Ba extends ce {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const s = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        return s.status === 'aborted'
          ? ee
          : s.status === 'dirty'
            ? (n.dirty(), Yo(s.value))
            : this._def.out._parseAsync({
                data: s.value,
                path: r.path,
                parent: r,
              });
      })();
    {
      const o = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r,
      });
      return o.status === 'aborted'
        ? ee
        : o.status === 'dirty'
          ? (n.dirty(), { status: 'dirty', value: o.value })
          : this._def.out._parseSync({
              data: o.value,
              path: r.path,
              parent: r,
            });
    }
  }
  static create(t, n) {
    return new Ba({ in: t, out: n, typeName: J.ZodPipeline });
  }
}
class ga extends ce {
  _parse(t) {
    const n = this._def.innerType._parse(t),
      r = (o) => (oa(o) && (o.value = Object.freeze(o.value)), o);
    return sa(n) ? n.then((o) => r(o)) : r(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ga.create = (e, t) =>
  new ga({ innerType: e, typeName: J.ZodReadonly, ...oe(t) });
Oe.lazycreate;
var J;
(function (e) {
  (e.ZodString = 'ZodString'),
    (e.ZodNumber = 'ZodNumber'),
    (e.ZodNaN = 'ZodNaN'),
    (e.ZodBigInt = 'ZodBigInt'),
    (e.ZodBoolean = 'ZodBoolean'),
    (e.ZodDate = 'ZodDate'),
    (e.ZodSymbol = 'ZodSymbol'),
    (e.ZodUndefined = 'ZodUndefined'),
    (e.ZodNull = 'ZodNull'),
    (e.ZodAny = 'ZodAny'),
    (e.ZodUnknown = 'ZodUnknown'),
    (e.ZodNever = 'ZodNever'),
    (e.ZodVoid = 'ZodVoid'),
    (e.ZodArray = 'ZodArray'),
    (e.ZodObject = 'ZodObject'),
    (e.ZodUnion = 'ZodUnion'),
    (e.ZodDiscriminatedUnion = 'ZodDiscriminatedUnion'),
    (e.ZodIntersection = 'ZodIntersection'),
    (e.ZodTuple = 'ZodTuple'),
    (e.ZodRecord = 'ZodRecord'),
    (e.ZodMap = 'ZodMap'),
    (e.ZodSet = 'ZodSet'),
    (e.ZodFunction = 'ZodFunction'),
    (e.ZodLazy = 'ZodLazy'),
    (e.ZodLiteral = 'ZodLiteral'),
    (e.ZodEnum = 'ZodEnum'),
    (e.ZodEffects = 'ZodEffects'),
    (e.ZodNativeEnum = 'ZodNativeEnum'),
    (e.ZodOptional = 'ZodOptional'),
    (e.ZodNullable = 'ZodNullable'),
    (e.ZodDefault = 'ZodDefault'),
    (e.ZodCatch = 'ZodCatch'),
    (e.ZodPromise = 'ZodPromise'),
    (e.ZodBranded = 'ZodBranded'),
    (e.ZodPipeline = 'ZodPipeline'),
    (e.ZodReadonly = 'ZodReadonly');
})(J || (J = {}));
const ii = vn.create,
  qf = ho.create;
Ku.create;
mo.create;
const Qw = Uu.create;
Ps.create;
Wu.create;
aa.create;
la.create;
const Xw = Hu.create;
no.create;
qn.create;
Zu.create;
const Jf = nn.create,
  Dl = Oe.create;
Oe.strictCreate;
ua.create;
sd.create;
ca.create;
Sn.create;
const qw = da.create;
Yu.create;
vo.create;
ls.create;
fa.create;
pa.create;
_r.create;
ha.create;
Ts.create;
bn.create;
yn.create;
kr.create;
bn.createWithPreprocess;
Ba.create;
const Jw = {
    version: '1.0.0',
    domainNameProduction: '',
    domainNameSandbox: '',
  },
  e1 = ({ children: e }) => {
    const { version: t } = Jw;
    return b.jsxs('div', {
      className: 'p-10 min-h-svh',
      children: [
        e,
        b.jsxs('p', {
          className:
            'fixed p-4 m-0 right-0 bottom-0 text-xs opacity-65 text-red-400',
          children: ['v', t],
        }),
      ],
    });
  },
  t1 = ({ msg: e = null }) =>
    b.jsx('div', {
      className: 'absolute w-full h-full flex items-center justify-center',
      children: b.jsxs('div', {
        className:
          'animate-pulse flex flex-col justify-center items-center gap-2',
        children: [
          b.jsx(lw, { className: 'animate-spin size-8', strokeWidth: 1 }),
          e && b.jsx('h1', { className: 'font-bold text-lg', children: e }),
        ],
      }),
    }),
  ep = (e) => {
    let t;
    const n = new Set(),
      r = (u, c) => {
        const d = typeof u == 'function' ? u(t) : u;
        if (!Object.is(d, t)) {
          const h = t;
          (t =
            (c ?? (typeof d != 'object' || d === null))
              ? d
              : Object.assign({}, t, d)),
            n.forEach((f) => f(t, h));
        }
      },
      o = () => t,
      a = {
        setState: r,
        getState: o,
        getInitialState: () => l,
        subscribe: (u) => (n.add(u), () => n.delete(u)),
      },
      l = (t = e(r, o, a));
    return a;
  },
  n1 = (e) => (e ? ep(e) : ep),
  r1 = (e) => e;
function o1(e, t = r1) {
  const n = R.useSyncExternalStore(
    e.subscribe,
    () => t(e.getState()),
    () => t(e.getInitialState()),
  );
  return R.useDebugValue(n), n;
}
const tp = (e) => {
    const t = n1(e),
      n = (r) => o1(t, r);
    return Object.assign(n, t), n;
  },
  s1 = (e) => (e ? tp(e) : tp),
  uv = s1(() => ({ isLoading: !0 }));
function cv(e) {
  var t,
    n,
    r = '';
  if (typeof e == 'string' || typeof e == 'number') r += e;
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = cv(e[t])) && (r && (r += ' '), (r += n));
    } else for (n in e) e[n] && (r && (r += ' '), (r += n));
  return r;
}
function dv() {
  for (var e, t, n = 0, r = '', o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = cv(e)) && (r && (r += ' '), (r += t));
  return r;
}
const id = '-',
  i1 = (e) => {
    const t = l1(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (i) => {
        const a = i.split(id);
        return a[0] === '' && a.length !== 1 && a.shift(), fv(a, t) || a1(i);
      },
      getConflictingClassGroupIds: (i, a) => {
        const l = n[i] || [];
        return a && r[i] ? [...l, ...r[i]] : l;
      },
    };
  },
  fv = (e, t) => {
    var i;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? fv(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const s = e.join(id);
    return (i = t.validators.find(({ validator: a }) => a(s))) == null
      ? void 0
      : i.classGroupId;
  },
  np = /^\[(.+)\]$/,
  a1 = (e) => {
    if (np.test(e)) {
      const t = np.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(':'));
      if (n) return 'arbitrary..' + n;
    }
  },
  l1 = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      c1(Object.entries(e.classGroups), n).forEach(([s, i]) => {
        Qu(i, r, s, t);
      }),
      r
    );
  },
  Qu = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == 'string') {
        const s = o === '' ? t : rp(t, o);
        s.classGroupId = n;
        return;
      }
      if (typeof o == 'function') {
        if (u1(o)) {
          Qu(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([s, i]) => {
        Qu(i, rp(t, s), n, r);
      });
    });
  },
  rp = (e, t) => {
    let n = e;
    return (
      t.split(id).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  u1 = (e) => e.isThemeGetter,
  c1 = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((s) =>
            typeof s == 'string'
              ? t + s
              : typeof s == 'object'
                ? Object.fromEntries(
                    Object.entries(s).map(([i, a]) => [t + i, a]),
                  )
                : s,
          );
          return [n, o];
        })
      : e,
  d1 = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (s, i) => {
      n.set(s, i), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(s) {
        let i = n.get(s);
        if (i !== void 0) return i;
        if ((i = r.get(s)) !== void 0) return o(s, i), i;
      },
      set(s, i) {
        n.has(s) ? n.set(s, i) : o(s, i);
      },
    };
  },
  pv = '!',
  f1 = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      s = t.length,
      i = (a) => {
        const l = [];
        let u = 0,
          c = 0,
          d;
        for (let k = 0; k < a.length; k++) {
          let m = a[k];
          if (u === 0) {
            if (m === o && (r || a.slice(k, k + s) === t)) {
              l.push(a.slice(c, k)), (c = k + s);
              continue;
            }
            if (m === '/') {
              d = k;
              continue;
            }
          }
          m === '[' ? u++ : m === ']' && u--;
        }
        const h = l.length === 0 ? a : a.substring(c),
          f = h.startsWith(pv),
          v = f ? h.substring(1) : h,
          y = d && d > c ? d - c : void 0;
        return {
          modifiers: l,
          hasImportantModifier: f,
          baseClassName: v,
          maybePostfixModifierPosition: y,
        };
      };
    return n ? (a) => n({ className: a, parseClassName: i }) : i;
  },
  p1 = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === '[' ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  h1 = (e) => ({ cache: d1(e.cacheSize), parseClassName: f1(e), ...i1(e) }),
  m1 = /\s+/,
  v1 = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      s = [],
      i = e.trim().split(m1);
    let a = '';
    for (let l = i.length - 1; l >= 0; l -= 1) {
      const u = i[l],
        {
          modifiers: c,
          hasImportantModifier: d,
          baseClassName: h,
          maybePostfixModifierPosition: f,
        } = n(u);
      let v = !!f,
        y = r(v ? h.substring(0, f) : h);
      if (!y) {
        if (!v) {
          a = u + (a.length > 0 ? ' ' + a : a);
          continue;
        }
        if (((y = r(h)), !y)) {
          a = u + (a.length > 0 ? ' ' + a : a);
          continue;
        }
        v = !1;
      }
      const k = p1(c).join(':'),
        m = d ? k + pv : k,
        p = m + y;
      if (s.includes(p)) continue;
      s.push(p);
      const x = o(y, v);
      for (let _ = 0; _ < x.length; ++_) {
        const S = x[_];
        s.push(m + S);
      }
      a = u + (a.length > 0 ? ' ' + a : a);
    }
    return a;
  };
function g1() {
  let e = 0,
    t,
    n,
    r = '';
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = hv(t)) && (r && (r += ' '), (r += n));
  return r;
}
const hv = (e) => {
  if (typeof e == 'string') return e;
  let t,
    n = '';
  for (let r = 0; r < e.length; r++)
    e[r] && (t = hv(e[r])) && (n && (n += ' '), (n += t));
  return n;
};
function y1(e, ...t) {
  let n,
    r,
    o,
    s = i;
  function i(l) {
    const u = t.reduce((c, d) => d(c), e());
    return (n = h1(u)), (r = n.cache.get), (o = n.cache.set), (s = a), a(l);
  }
  function a(l) {
    const u = r(l);
    if (u) return u;
    const c = v1(l, n);
    return o(l, c), c;
  }
  return function () {
    return s(g1.apply(null, arguments));
  };
}
const xe = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  mv = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  x1 = /^\d+\/\d+$/,
  w1 = new Set(['px', 'full', 'screen']),
  _1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  k1 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  S1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  b1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  C1 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  cn = (e) => ro(e) || w1.has(e) || x1.test(e),
  On = (e) => So(e, 'length', M1),
  ro = (e) => !!e && !Number.isNaN(Number(e)),
  Ll = (e) => So(e, 'number', ro),
  $o = (e) => !!e && Number.isInteger(Number(e)),
  E1 = (e) => e.endsWith('%') && ro(e.slice(0, -1)),
  se = (e) => mv.test(e),
  An = (e) => _1.test(e),
  P1 = new Set(['length', 'size', 'percentage']),
  T1 = (e) => So(e, P1, vv),
  R1 = (e) => So(e, 'position', vv),
  N1 = new Set(['image', 'url']),
  O1 = (e) => So(e, N1, L1),
  A1 = (e) => So(e, '', D1),
  Bo = () => !0,
  So = (e, t, n) => {
    const r = mv.exec(e);
    return r
      ? r[1]
        ? typeof t == 'string'
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  M1 = (e) => k1.test(e) && !S1.test(e),
  vv = () => !1,
  D1 = (e) => b1.test(e),
  L1 = (e) => C1.test(e),
  I1 = () => {
    const e = xe('colors'),
      t = xe('spacing'),
      n = xe('blur'),
      r = xe('brightness'),
      o = xe('borderColor'),
      s = xe('borderRadius'),
      i = xe('borderSpacing'),
      a = xe('borderWidth'),
      l = xe('contrast'),
      u = xe('grayscale'),
      c = xe('hueRotate'),
      d = xe('invert'),
      h = xe('gap'),
      f = xe('gradientColorStops'),
      v = xe('gradientColorStopPositions'),
      y = xe('inset'),
      k = xe('margin'),
      m = xe('opacity'),
      p = xe('padding'),
      x = xe('saturate'),
      _ = xe('scale'),
      S = xe('sepia'),
      P = xe('skew'),
      T = xe('space'),
      N = xe('translate'),
      Z = () => ['auto', 'contain', 'none'],
      j = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
      te = () => ['auto', se, t],
      D = () => [se, t],
      W = () => ['', cn, On],
      Y = () => ['auto', ro, se],
      ie = () => [
        'bottom',
        'center',
        'left',
        'left-bottom',
        'left-top',
        'right',
        'right-bottom',
        'right-top',
        'top',
      ],
      Q = () => ['solid', 'dashed', 'dotted', 'double', 'none'],
      q = () => [
        'normal',
        'multiply',
        'screen',
        'overlay',
        'darken',
        'lighten',
        'color-dodge',
        'color-burn',
        'hard-light',
        'soft-light',
        'difference',
        'exclusion',
        'hue',
        'saturation',
        'color',
        'luminosity',
      ],
      O = () => [
        'start',
        'end',
        'center',
        'between',
        'around',
        'evenly',
        'stretch',
      ],
      A = () => ['', '0', se],
      V = () => [
        'auto',
        'avoid',
        'all',
        'avoid-page',
        'page',
        'left',
        'right',
        'column',
      ],
      ne = () => [ro, se];
    return {
      cacheSize: 500,
      separator: ':',
      theme: {
        colors: [Bo],
        spacing: [cn, On],
        blur: ['none', '', An, se],
        brightness: ne(),
        borderColor: [e],
        borderRadius: ['none', '', 'full', An, se],
        borderSpacing: D(),
        borderWidth: W(),
        contrast: ne(),
        grayscale: A(),
        hueRotate: ne(),
        invert: A(),
        gap: D(),
        gradientColorStops: [e],
        gradientColorStopPositions: [E1, On],
        inset: te(),
        margin: te(),
        opacity: ne(),
        padding: D(),
        saturate: ne(),
        scale: ne(),
        sepia: A(),
        skew: ne(),
        space: D(),
        translate: D(),
      },
      classGroups: {
        aspect: [{ aspect: ['auto', 'square', 'video', se] }],
        container: ['container'],
        columns: [{ columns: [An] }],
        'break-after': [{ 'break-after': V() }],
        'break-before': [{ 'break-before': V() }],
        'break-inside': [
          { 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] },
        ],
        'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
        box: [{ box: ['border', 'content'] }],
        display: [
          'block',
          'inline-block',
          'inline',
          'flex',
          'inline-flex',
          'table',
          'inline-table',
          'table-caption',
          'table-cell',
          'table-column',
          'table-column-group',
          'table-footer-group',
          'table-header-group',
          'table-row-group',
          'table-row',
          'flow-root',
          'grid',
          'inline-grid',
          'contents',
          'list-item',
          'hidden',
        ],
        float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
        clear: [{ clear: ['left', 'right', 'both', 'none', 'start', 'end'] }],
        isolation: ['isolate', 'isolation-auto'],
        'object-fit': [
          { object: ['contain', 'cover', 'fill', 'none', 'scale-down'] },
        ],
        'object-position': [{ object: [...ie(), se] }],
        overflow: [{ overflow: j() }],
        'overflow-x': [{ 'overflow-x': j() }],
        'overflow-y': [{ 'overflow-y': j() }],
        overscroll: [{ overscroll: Z() }],
        'overscroll-x': [{ 'overscroll-x': Z() }],
        'overscroll-y': [{ 'overscroll-y': Z() }],
        position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
        inset: [{ inset: [y] }],
        'inset-x': [{ 'inset-x': [y] }],
        'inset-y': [{ 'inset-y': [y] }],
        start: [{ start: [y] }],
        end: [{ end: [y] }],
        top: [{ top: [y] }],
        right: [{ right: [y] }],
        bottom: [{ bottom: [y] }],
        left: [{ left: [y] }],
        visibility: ['visible', 'invisible', 'collapse'],
        z: [{ z: ['auto', $o, se] }],
        basis: [{ basis: te() }],
        'flex-direction': [
          { flex: ['row', 'row-reverse', 'col', 'col-reverse'] },
        ],
        'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
        flex: [{ flex: ['1', 'auto', 'initial', 'none', se] }],
        grow: [{ grow: A() }],
        shrink: [{ shrink: A() }],
        order: [{ order: ['first', 'last', 'none', $o, se] }],
        'grid-cols': [{ 'grid-cols': [Bo] }],
        'col-start-end': [{ col: ['auto', { span: ['full', $o, se] }, se] }],
        'col-start': [{ 'col-start': Y() }],
        'col-end': [{ 'col-end': Y() }],
        'grid-rows': [{ 'grid-rows': [Bo] }],
        'row-start-end': [{ row: ['auto', { span: [$o, se] }, se] }],
        'row-start': [{ 'row-start': Y() }],
        'row-end': [{ 'row-end': Y() }],
        'grid-flow': [
          { 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] },
        ],
        'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', se] }],
        'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', se] }],
        gap: [{ gap: [h] }],
        'gap-x': [{ 'gap-x': [h] }],
        'gap-y': [{ 'gap-y': [h] }],
        'justify-content': [{ justify: ['normal', ...O()] }],
        'justify-items': [
          { 'justify-items': ['start', 'end', 'center', 'stretch'] },
        ],
        'justify-self': [
          { 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] },
        ],
        'align-content': [{ content: ['normal', ...O(), 'baseline'] }],
        'align-items': [
          { items: ['start', 'end', 'center', 'baseline', 'stretch'] },
        ],
        'align-self': [
          { self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'] },
        ],
        'place-content': [{ 'place-content': [...O(), 'baseline'] }],
        'place-items': [
          { 'place-items': ['start', 'end', 'center', 'baseline', 'stretch'] },
        ],
        'place-self': [
          { 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] },
        ],
        p: [{ p: [p] }],
        px: [{ px: [p] }],
        py: [{ py: [p] }],
        ps: [{ ps: [p] }],
        pe: [{ pe: [p] }],
        pt: [{ pt: [p] }],
        pr: [{ pr: [p] }],
        pb: [{ pb: [p] }],
        pl: [{ pl: [p] }],
        m: [{ m: [k] }],
        mx: [{ mx: [k] }],
        my: [{ my: [k] }],
        ms: [{ ms: [k] }],
        me: [{ me: [k] }],
        mt: [{ mt: [k] }],
        mr: [{ mr: [k] }],
        mb: [{ mb: [k] }],
        ml: [{ ml: [k] }],
        'space-x': [{ 'space-x': [T] }],
        'space-x-reverse': ['space-x-reverse'],
        'space-y': [{ 'space-y': [T] }],
        'space-y-reverse': ['space-y-reverse'],
        w: [{ w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', se, t] }],
        'min-w': [{ 'min-w': [se, t, 'min', 'max', 'fit'] }],
        'max-w': [
          {
            'max-w': [
              se,
              t,
              'none',
              'full',
              'min',
              'max',
              'fit',
              'prose',
              { screen: [An] },
              An,
            ],
          },
        ],
        h: [{ h: [se, t, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
        'min-h': [
          { 'min-h': [se, t, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] },
        ],
        'max-h': [
          { 'max-h': [se, t, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] },
        ],
        size: [{ size: [se, t, 'auto', 'min', 'max', 'fit'] }],
        'font-size': [{ text: ['base', An, On] }],
        'font-smoothing': ['antialiased', 'subpixel-antialiased'],
        'font-style': ['italic', 'not-italic'],
        'font-weight': [
          {
            font: [
              'thin',
              'extralight',
              'light',
              'normal',
              'medium',
              'semibold',
              'bold',
              'extrabold',
              'black',
              Ll,
            ],
          },
        ],
        'font-family': [{ font: [Bo] }],
        'fvn-normal': ['normal-nums'],
        'fvn-ordinal': ['ordinal'],
        'fvn-slashed-zero': ['slashed-zero'],
        'fvn-figure': ['lining-nums', 'oldstyle-nums'],
        'fvn-spacing': ['proportional-nums', 'tabular-nums'],
        'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
        tracking: [
          {
            tracking: [
              'tighter',
              'tight',
              'normal',
              'wide',
              'wider',
              'widest',
              se,
            ],
          },
        ],
        'line-clamp': [{ 'line-clamp': ['none', ro, Ll] }],
        leading: [
          {
            leading: [
              'none',
              'tight',
              'snug',
              'normal',
              'relaxed',
              'loose',
              cn,
              se,
            ],
          },
        ],
        'list-image': [{ 'list-image': ['none', se] }],
        'list-style-type': [{ list: ['none', 'disc', 'decimal', se] }],
        'list-style-position': [{ list: ['inside', 'outside'] }],
        'placeholder-color': [{ placeholder: [e] }],
        'placeholder-opacity': [{ 'placeholder-opacity': [m] }],
        'text-alignment': [
          { text: ['left', 'center', 'right', 'justify', 'start', 'end'] },
        ],
        'text-color': [{ text: [e] }],
        'text-opacity': [{ 'text-opacity': [m] }],
        'text-decoration': [
          'underline',
          'overline',
          'line-through',
          'no-underline',
        ],
        'text-decoration-style': [{ decoration: [...Q(), 'wavy'] }],
        'text-decoration-thickness': [
          { decoration: ['auto', 'from-font', cn, On] },
        ],
        'underline-offset': [{ 'underline-offset': ['auto', cn, se] }],
        'text-decoration-color': [{ decoration: [e] }],
        'text-transform': [
          'uppercase',
          'lowercase',
          'capitalize',
          'normal-case',
        ],
        'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
        'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
        indent: [{ indent: D() }],
        'vertical-align': [
          {
            align: [
              'baseline',
              'top',
              'middle',
              'bottom',
              'text-top',
              'text-bottom',
              'sub',
              'super',
              se,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              'normal',
              'nowrap',
              'pre',
              'pre-line',
              'pre-wrap',
              'break-spaces',
            ],
          },
        ],
        break: [{ break: ['normal', 'words', 'all', 'keep'] }],
        hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
        content: [{ content: ['none', se] }],
        'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
        'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
        'bg-opacity': [{ 'bg-opacity': [m] }],
        'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
        'bg-position': [{ bg: [...ie(), R1] }],
        'bg-repeat': [
          { bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }] },
        ],
        'bg-size': [{ bg: ['auto', 'cover', 'contain', T1] }],
        'bg-image': [
          {
            bg: [
              'none',
              { 'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] },
              O1,
            ],
          },
        ],
        'bg-color': [{ bg: [e] }],
        'gradient-from-pos': [{ from: [v] }],
        'gradient-via-pos': [{ via: [v] }],
        'gradient-to-pos': [{ to: [v] }],
        'gradient-from': [{ from: [f] }],
        'gradient-via': [{ via: [f] }],
        'gradient-to': [{ to: [f] }],
        rounded: [{ rounded: [s] }],
        'rounded-s': [{ 'rounded-s': [s] }],
        'rounded-e': [{ 'rounded-e': [s] }],
        'rounded-t': [{ 'rounded-t': [s] }],
        'rounded-r': [{ 'rounded-r': [s] }],
        'rounded-b': [{ 'rounded-b': [s] }],
        'rounded-l': [{ 'rounded-l': [s] }],
        'rounded-ss': [{ 'rounded-ss': [s] }],
        'rounded-se': [{ 'rounded-se': [s] }],
        'rounded-ee': [{ 'rounded-ee': [s] }],
        'rounded-es': [{ 'rounded-es': [s] }],
        'rounded-tl': [{ 'rounded-tl': [s] }],
        'rounded-tr': [{ 'rounded-tr': [s] }],
        'rounded-br': [{ 'rounded-br': [s] }],
        'rounded-bl': [{ 'rounded-bl': [s] }],
        'border-w': [{ border: [a] }],
        'border-w-x': [{ 'border-x': [a] }],
        'border-w-y': [{ 'border-y': [a] }],
        'border-w-s': [{ 'border-s': [a] }],
        'border-w-e': [{ 'border-e': [a] }],
        'border-w-t': [{ 'border-t': [a] }],
        'border-w-r': [{ 'border-r': [a] }],
        'border-w-b': [{ 'border-b': [a] }],
        'border-w-l': [{ 'border-l': [a] }],
        'border-opacity': [{ 'border-opacity': [m] }],
        'border-style': [{ border: [...Q(), 'hidden'] }],
        'divide-x': [{ 'divide-x': [a] }],
        'divide-x-reverse': ['divide-x-reverse'],
        'divide-y': [{ 'divide-y': [a] }],
        'divide-y-reverse': ['divide-y-reverse'],
        'divide-opacity': [{ 'divide-opacity': [m] }],
        'divide-style': [{ divide: Q() }],
        'border-color': [{ border: [o] }],
        'border-color-x': [{ 'border-x': [o] }],
        'border-color-y': [{ 'border-y': [o] }],
        'border-color-s': [{ 'border-s': [o] }],
        'border-color-e': [{ 'border-e': [o] }],
        'border-color-t': [{ 'border-t': [o] }],
        'border-color-r': [{ 'border-r': [o] }],
        'border-color-b': [{ 'border-b': [o] }],
        'border-color-l': [{ 'border-l': [o] }],
        'divide-color': [{ divide: [o] }],
        'outline-style': [{ outline: ['', ...Q()] }],
        'outline-offset': [{ 'outline-offset': [cn, se] }],
        'outline-w': [{ outline: [cn, On] }],
        'outline-color': [{ outline: [e] }],
        'ring-w': [{ ring: W() }],
        'ring-w-inset': ['ring-inset'],
        'ring-color': [{ ring: [e] }],
        'ring-opacity': [{ 'ring-opacity': [m] }],
        'ring-offset-w': [{ 'ring-offset': [cn, On] }],
        'ring-offset-color': [{ 'ring-offset': [e] }],
        shadow: [{ shadow: ['', 'inner', 'none', An, A1] }],
        'shadow-color': [{ shadow: [Bo] }],
        opacity: [{ opacity: [m] }],
        'mix-blend': [{ 'mix-blend': [...q(), 'plus-lighter', 'plus-darker'] }],
        'bg-blend': [{ 'bg-blend': q() }],
        filter: [{ filter: ['', 'none'] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [l] }],
        'drop-shadow': [{ 'drop-shadow': ['', 'none', An, se] }],
        grayscale: [{ grayscale: [u] }],
        'hue-rotate': [{ 'hue-rotate': [c] }],
        invert: [{ invert: [d] }],
        saturate: [{ saturate: [x] }],
        sepia: [{ sepia: [S] }],
        'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
        'backdrop-blur': [{ 'backdrop-blur': [n] }],
        'backdrop-brightness': [{ 'backdrop-brightness': [r] }],
        'backdrop-contrast': [{ 'backdrop-contrast': [l] }],
        'backdrop-grayscale': [{ 'backdrop-grayscale': [u] }],
        'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [c] }],
        'backdrop-invert': [{ 'backdrop-invert': [d] }],
        'backdrop-opacity': [{ 'backdrop-opacity': [m] }],
        'backdrop-saturate': [{ 'backdrop-saturate': [x] }],
        'backdrop-sepia': [{ 'backdrop-sepia': [S] }],
        'border-collapse': [{ border: ['collapse', 'separate'] }],
        'border-spacing': [{ 'border-spacing': [i] }],
        'border-spacing-x': [{ 'border-spacing-x': [i] }],
        'border-spacing-y': [{ 'border-spacing-y': [i] }],
        'table-layout': [{ table: ['auto', 'fixed'] }],
        caption: [{ caption: ['top', 'bottom'] }],
        transition: [
          {
            transition: [
              'none',
              'all',
              '',
              'colors',
              'opacity',
              'shadow',
              'transform',
              se,
            ],
          },
        ],
        duration: [{ duration: ne() }],
        ease: [{ ease: ['linear', 'in', 'out', 'in-out', se] }],
        delay: [{ delay: ne() }],
        animate: [{ animate: ['none', 'spin', 'ping', 'pulse', 'bounce', se] }],
        transform: [{ transform: ['', 'gpu', 'none'] }],
        scale: [{ scale: [_] }],
        'scale-x': [{ 'scale-x': [_] }],
        'scale-y': [{ 'scale-y': [_] }],
        rotate: [{ rotate: [$o, se] }],
        'translate-x': [{ 'translate-x': [N] }],
        'translate-y': [{ 'translate-y': [N] }],
        'skew-x': [{ 'skew-x': [P] }],
        'skew-y': [{ 'skew-y': [P] }],
        'transform-origin': [
          {
            origin: [
              'center',
              'top',
              'top-right',
              'right',
              'bottom-right',
              'bottom',
              'bottom-left',
              'left',
              'top-left',
              se,
            ],
          },
        ],
        accent: [{ accent: ['auto', e] }],
        appearance: [{ appearance: ['none', 'auto'] }],
        cursor: [
          {
            cursor: [
              'auto',
              'default',
              'pointer',
              'wait',
              'text',
              'move',
              'help',
              'not-allowed',
              'none',
              'context-menu',
              'progress',
              'cell',
              'crosshair',
              'vertical-text',
              'alias',
              'copy',
              'no-drop',
              'grab',
              'grabbing',
              'all-scroll',
              'col-resize',
              'row-resize',
              'n-resize',
              'e-resize',
              's-resize',
              'w-resize',
              'ne-resize',
              'nw-resize',
              'se-resize',
              'sw-resize',
              'ew-resize',
              'ns-resize',
              'nesw-resize',
              'nwse-resize',
              'zoom-in',
              'zoom-out',
              se,
            ],
          },
        ],
        'caret-color': [{ caret: [e] }],
        'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
        resize: [{ resize: ['none', 'y', 'x', ''] }],
        'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
        'scroll-m': [{ 'scroll-m': D() }],
        'scroll-mx': [{ 'scroll-mx': D() }],
        'scroll-my': [{ 'scroll-my': D() }],
        'scroll-ms': [{ 'scroll-ms': D() }],
        'scroll-me': [{ 'scroll-me': D() }],
        'scroll-mt': [{ 'scroll-mt': D() }],
        'scroll-mr': [{ 'scroll-mr': D() }],
        'scroll-mb': [{ 'scroll-mb': D() }],
        'scroll-ml': [{ 'scroll-ml': D() }],
        'scroll-p': [{ 'scroll-p': D() }],
        'scroll-px': [{ 'scroll-px': D() }],
        'scroll-py': [{ 'scroll-py': D() }],
        'scroll-ps': [{ 'scroll-ps': D() }],
        'scroll-pe': [{ 'scroll-pe': D() }],
        'scroll-pt': [{ 'scroll-pt': D() }],
        'scroll-pr': [{ 'scroll-pr': D() }],
        'scroll-pb': [{ 'scroll-pb': D() }],
        'scroll-pl': [{ 'scroll-pl': D() }],
        'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
        'snap-stop': [{ snap: ['normal', 'always'] }],
        'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
        'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
        touch: [{ touch: ['auto', 'none', 'manipulation'] }],
        'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
        'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
        'touch-pz': ['touch-pinch-zoom'],
        select: [{ select: ['none', 'text', 'all', 'auto'] }],
        'will-change': [
          { 'will-change': ['auto', 'scroll', 'contents', 'transform', se] },
        ],
        fill: [{ fill: [e, 'none'] }],
        'stroke-w': [{ stroke: [cn, On, Ll] }],
        stroke: [{ stroke: [e, 'none'] }],
        sr: ['sr-only', 'not-sr-only'],
        'forced-color-adjust': [{ 'forced-color-adjust': ['auto', 'none'] }],
      },
      conflictingClassGroups: {
        overflow: ['overflow-x', 'overflow-y'],
        overscroll: ['overscroll-x', 'overscroll-y'],
        inset: [
          'inset-x',
          'inset-y',
          'start',
          'end',
          'top',
          'right',
          'bottom',
          'left',
        ],
        'inset-x': ['right', 'left'],
        'inset-y': ['top', 'bottom'],
        flex: ['basis', 'grow', 'shrink'],
        gap: ['gap-x', 'gap-y'],
        p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
        px: ['pr', 'pl'],
        py: ['pt', 'pb'],
        m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
        mx: ['mr', 'ml'],
        my: ['mt', 'mb'],
        size: ['w', 'h'],
        'font-size': ['leading'],
        'fvn-normal': [
          'fvn-ordinal',
          'fvn-slashed-zero',
          'fvn-figure',
          'fvn-spacing',
          'fvn-fraction',
        ],
        'fvn-ordinal': ['fvn-normal'],
        'fvn-slashed-zero': ['fvn-normal'],
        'fvn-figure': ['fvn-normal'],
        'fvn-spacing': ['fvn-normal'],
        'fvn-fraction': ['fvn-normal'],
        'line-clamp': ['display', 'overflow'],
        rounded: [
          'rounded-s',
          'rounded-e',
          'rounded-t',
          'rounded-r',
          'rounded-b',
          'rounded-l',
          'rounded-ss',
          'rounded-se',
          'rounded-ee',
          'rounded-es',
          'rounded-tl',
          'rounded-tr',
          'rounded-br',
          'rounded-bl',
        ],
        'rounded-s': ['rounded-ss', 'rounded-es'],
        'rounded-e': ['rounded-se', 'rounded-ee'],
        'rounded-t': ['rounded-tl', 'rounded-tr'],
        'rounded-r': ['rounded-tr', 'rounded-br'],
        'rounded-b': ['rounded-br', 'rounded-bl'],
        'rounded-l': ['rounded-tl', 'rounded-bl'],
        'border-spacing': ['border-spacing-x', 'border-spacing-y'],
        'border-w': [
          'border-w-s',
          'border-w-e',
          'border-w-t',
          'border-w-r',
          'border-w-b',
          'border-w-l',
        ],
        'border-w-x': ['border-w-r', 'border-w-l'],
        'border-w-y': ['border-w-t', 'border-w-b'],
        'border-color': [
          'border-color-s',
          'border-color-e',
          'border-color-t',
          'border-color-r',
          'border-color-b',
          'border-color-l',
        ],
        'border-color-x': ['border-color-r', 'border-color-l'],
        'border-color-y': ['border-color-t', 'border-color-b'],
        'scroll-m': [
          'scroll-mx',
          'scroll-my',
          'scroll-ms',
          'scroll-me',
          'scroll-mt',
          'scroll-mr',
          'scroll-mb',
          'scroll-ml',
        ],
        'scroll-mx': ['scroll-mr', 'scroll-ml'],
        'scroll-my': ['scroll-mt', 'scroll-mb'],
        'scroll-p': [
          'scroll-px',
          'scroll-py',
          'scroll-ps',
          'scroll-pe',
          'scroll-pt',
          'scroll-pr',
          'scroll-pb',
          'scroll-pl',
        ],
        'scroll-px': ['scroll-pr', 'scroll-pl'],
        'scroll-py': ['scroll-pt', 'scroll-pb'],
        touch: ['touch-x', 'touch-y', 'touch-pz'],
        'touch-x': ['touch'],
        'touch-y': ['touch'],
        'touch-pz': ['touch'],
      },
      conflictingClassGroupModifiers: { 'font-size': ['leading'] },
    };
  },
  j1 = y1(I1);
function Ie(...e) {
  return j1(dv(e));
}
function F1(e, t) {
  typeof e == 'function' ? e(t) : e != null && (e.current = t);
}
function gv(...e) {
  return (t) => e.forEach((n) => F1(n, t));
}
function ft(...e) {
  return g.useCallback(gv(...e), e);
}
function Ua(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = g.createContext(i),
      l = n.length;
    n = [...n, i];
    const u = (d) => {
      var m;
      const { scope: h, children: f, ...v } = d,
        y = ((m = h == null ? void 0 : h[e]) == null ? void 0 : m[l]) || a,
        k = g.useMemo(() => v, Object.values(v));
      return b.jsx(y.Provider, { value: k, children: f });
    };
    u.displayName = s + 'Provider';
    function c(d, h) {
      var y;
      const f = ((y = h == null ? void 0 : h[e]) == null ? void 0 : y[l]) || a,
        v = g.useContext(f);
      if (v) return v;
      if (i !== void 0) return i;
      throw new Error(`\`${d}\` must be used within \`${s}\``);
    }
    return [u, c];
  }
  const o = () => {
    const s = n.map((i) => g.createContext(i));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || s;
      return g.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (o.scopeName = e), [r, z1(o, ...t)];
}
function z1(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (s) {
      const i = r.reduce((a, { useScope: l, scopeName: u }) => {
        const d = l(s)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return g.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function _e(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function Cn(e) {
  const t = g.useRef(e);
  return (
    g.useEffect(() => {
      t.current = e;
    }),
    g.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      [],
    )
  );
}
function js({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = V1({ defaultProp: t, onChange: n }),
    s = e !== void 0,
    i = s ? e : r,
    a = Cn(n),
    l = g.useCallback(
      (u) => {
        if (s) {
          const d = typeof u == 'function' ? u(e) : u;
          d !== e && a(d);
        } else o(u);
      },
      [s, e, o, a],
    );
  return [i, l];
}
function V1({ defaultProp: e, onChange: t }) {
  const n = g.useState(e),
    [r] = n,
    o = g.useRef(r),
    s = Cn(t);
  return (
    g.useEffect(() => {
      o.current !== r && (s(r), (o.current = r));
    }, [r, o, s]),
    n
  );
}
function $1(e) {
  const t = g.useRef({ value: e, previous: e });
  return g.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e],
  );
}
var Sr =
  globalThis != null && globalThis.document ? g.useLayoutEffect : () => {};
function yv(e) {
  const [t, n] = g.useState(void 0);
  return (
    Sr(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const s = o[0];
          let i, a;
          if ('borderBoxSize' in s) {
            const l = s.borderBoxSize,
              u = Array.isArray(l) ? l[0] : l;
            (i = u.inlineSize), (a = u.blockSize);
          } else (i = e.offsetWidth), (a = e.offsetHeight);
          n({ width: i, height: a });
        });
        return r.observe(e, { box: 'border-box' }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
function B1(e, t) {
  return g.useReducer((n, r) => t[n][r] ?? n, e);
}
var bo = (e) => {
  const { present: t, children: n } = e,
    r = U1(t),
    o =
      typeof n == 'function' ? n({ present: r.isPresent }) : g.Children.only(n),
    s = ft(r.ref, W1(o));
  return typeof n == 'function' || r.isPresent
    ? g.cloneElement(o, { ref: s })
    : null;
};
bo.displayName = 'Presence';
function U1(e) {
  const [t, n] = g.useState(),
    r = g.useRef({}),
    o = g.useRef(e),
    s = g.useRef('none'),
    i = e ? 'mounted' : 'unmounted',
    [a, l] = B1(i, {
      mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
      unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
      unmounted: { MOUNT: 'mounted' },
    });
  return (
    g.useEffect(() => {
      const u = ai(r.current);
      s.current = a === 'mounted' ? u : 'none';
    }, [a]),
    Sr(() => {
      const u = r.current,
        c = o.current;
      if (c !== e) {
        const h = s.current,
          f = ai(u);
        e
          ? l('MOUNT')
          : f === 'none' || (u == null ? void 0 : u.display) === 'none'
            ? l('UNMOUNT')
            : l(c && h !== f ? 'ANIMATION_OUT' : 'UNMOUNT'),
          (o.current = e);
      }
    }, [e, l]),
    Sr(() => {
      if (t) {
        let u;
        const c = t.ownerDocument.defaultView ?? window,
          d = (f) => {
            const y = ai(r.current).includes(f.animationName);
            if (f.target === t && y && (l('ANIMATION_END'), !o.current)) {
              const k = t.style.animationFillMode;
              (t.style.animationFillMode = 'forwards'),
                (u = c.setTimeout(() => {
                  t.style.animationFillMode === 'forwards' &&
                    (t.style.animationFillMode = k);
                }));
            }
          },
          h = (f) => {
            f.target === t && (s.current = ai(r.current));
          };
        return (
          t.addEventListener('animationstart', h),
          t.addEventListener('animationcancel', d),
          t.addEventListener('animationend', d),
          () => {
            c.clearTimeout(u),
              t.removeEventListener('animationstart', h),
              t.removeEventListener('animationcancel', d),
              t.removeEventListener('animationend', d);
          }
        );
      } else l('ANIMATION_END');
    }, [t, l]),
    {
      isPresent: ['mounted', 'unmountSuspended'].includes(a),
      ref: g.useCallback((u) => {
        u && (r.current = getComputedStyle(u)), n(u);
      }, []),
    }
  );
}
function ai(e) {
  return (e == null ? void 0 : e.animationName) || 'none';
}
function W1(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, 'ref')) == null
        ? void 0
        : r.get,
    n = t && 'isReactWarning' in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, 'ref')) == null
          ? void 0
          : o.get),
      (n = t && 'isReactWarning' in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var br = g.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = g.Children.toArray(n),
    s = o.find(H1);
  if (s) {
    const i = s.props.children,
      a = o.map((l) =>
        l === s
          ? g.Children.count(i) > 1
            ? g.Children.only(null)
            : g.isValidElement(i)
              ? i.props.children
              : null
          : l,
      );
    return b.jsx(Xu, {
      ...r,
      ref: t,
      children: g.isValidElement(i) ? g.cloneElement(i, void 0, a) : null,
    });
  }
  return b.jsx(Xu, { ...r, ref: t, children: n });
});
br.displayName = 'Slot';
var Xu = g.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (g.isValidElement(n)) {
    const o = G1(n);
    return g.cloneElement(n, { ...Z1(r, n.props), ref: t ? gv(t, o) : o });
  }
  return g.Children.count(n) > 1 ? g.Children.only(null) : null;
});
Xu.displayName = 'SlotClone';
var xv = ({ children: e }) => b.jsx(b.Fragment, { children: e });
function H1(e) {
  return g.isValidElement(e) && e.type === xv;
}
function Z1(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      s = t[r];
    /^on[A-Z]/.test(r)
      ? o && s
        ? (n[r] = (...a) => {
            s(...a), o(...a);
          })
        : o && (n[r] = o)
      : r === 'style'
        ? (n[r] = { ...o, ...s })
        : r === 'className' && (n[r] = [o, s].filter(Boolean).join(' '));
  }
  return { ...e, ...n };
}
function G1(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, 'ref')) == null
        ? void 0
        : r.get,
    n = t && 'isReactWarning' in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, 'ref')) == null
          ? void 0
          : o.get),
      (n = t && 'isReactWarning' in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var Y1 = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'span',
    'svg',
    'ul',
  ],
  ze = Y1.reduce((e, t) => {
    const n = g.forwardRef((r, o) => {
      const { asChild: s, ...i } = r,
        a = s ? br : t;
      return (
        typeof window < 'u' && (window[Symbol.for('radix-ui')] = !0),
        b.jsx(a, { ...i, ref: o })
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function K1(e, t) {
  e && Fa.flushSync(() => e.dispatchEvent(t));
}
var ad = 'Checkbox',
  [Q1, Vb] = Ua(ad),
  [X1, q1] = Q1(ad),
  wv = g.forwardRef((e, t) => {
    const {
        __scopeCheckbox: n,
        name: r,
        checked: o,
        defaultChecked: s,
        required: i,
        disabled: a,
        value: l = 'on',
        onCheckedChange: u,
        form: c,
        ...d
      } = e,
      [h, f] = g.useState(null),
      v = ft(t, (_) => f(_)),
      y = g.useRef(!1),
      k = h ? c || !!h.closest('form') : !0,
      [m = !1, p] = js({ prop: o, defaultProp: s, onChange: u }),
      x = g.useRef(m);
    return (
      g.useEffect(() => {
        const _ = h == null ? void 0 : h.form;
        if (_) {
          const S = () => p(x.current);
          return (
            _.addEventListener('reset', S),
            () => _.removeEventListener('reset', S)
          );
        }
      }, [h, p]),
      b.jsxs(X1, {
        scope: n,
        state: m,
        disabled: a,
        children: [
          b.jsx(ze.button, {
            type: 'button',
            role: 'checkbox',
            'aria-checked': Kn(m) ? 'mixed' : m,
            'aria-required': i,
            'data-state': Sv(m),
            'data-disabled': a ? '' : void 0,
            disabled: a,
            value: l,
            ...d,
            ref: v,
            onKeyDown: _e(e.onKeyDown, (_) => {
              _.key === 'Enter' && _.preventDefault();
            }),
            onClick: _e(e.onClick, (_) => {
              p((S) => (Kn(S) ? !0 : !S)),
                k &&
                  ((y.current = _.isPropagationStopped()),
                  y.current || _.stopPropagation());
            }),
          }),
          k &&
            b.jsx(J1, {
              control: h,
              bubbles: !y.current,
              name: r,
              value: l,
              checked: m,
              required: i,
              disabled: a,
              form: c,
              style: { transform: 'translateX(-100%)' },
              defaultChecked: Kn(s) ? !1 : s,
            }),
        ],
      })
    );
  });
wv.displayName = ad;
var _v = 'CheckboxIndicator',
  kv = g.forwardRef((e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e,
      s = q1(_v, n);
    return b.jsx(bo, {
      present: r || Kn(s.state) || s.state === !0,
      children: b.jsx(ze.span, {
        'data-state': Sv(s.state),
        'data-disabled': s.disabled ? '' : void 0,
        ...o,
        ref: t,
        style: { pointerEvents: 'none', ...e.style },
      }),
    });
  });
kv.displayName = _v;
var J1 = (e) => {
  const {
      control: t,
      checked: n,
      bubbles: r = !0,
      defaultChecked: o,
      ...s
    } = e,
    i = g.useRef(null),
    a = $1(n),
    l = yv(t);
  g.useEffect(() => {
    const c = i.current,
      d = window.HTMLInputElement.prototype,
      f = Object.getOwnPropertyDescriptor(d, 'checked').set;
    if (a !== n && f) {
      const v = new Event('click', { bubbles: r });
      (c.indeterminate = Kn(n)), f.call(c, Kn(n) ? !1 : n), c.dispatchEvent(v);
    }
  }, [a, n, r]);
  const u = g.useRef(Kn(n) ? !1 : n);
  return b.jsx('input', {
    type: 'checkbox',
    'aria-hidden': !0,
    defaultChecked: o ?? u.current,
    ...s,
    tabIndex: -1,
    ref: i,
    style: {
      ...e.style,
      ...l,
      position: 'absolute',
      pointerEvents: 'none',
      opacity: 0,
      margin: 0,
    },
  });
};
function Kn(e) {
  return e === 'indeterminate';
}
function Sv(e) {
  return Kn(e) ? 'indeterminate' : e ? 'checked' : 'unchecked';
}
var e_ = wv,
  t_ = kv;
const bv = R.forwardRef(({ className: e, ...t }, n) =>
  b.jsx(e_, {
    ref: n,
    className: Ie(
      'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      e,
    ),
    ...t,
    children: b.jsx(t_, {
      className: Ie('flex items-center justify-center text-current'),
      children: b.jsx(iw, { className: 'h-4 w-4' }),
    }),
  }),
);
bv.displayName = 'Checkbox';
function n_(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Cn(e);
  g.useEffect(() => {
    const r = (o) => {
      o.key === 'Escape' && n(o);
    };
    return (
      t.addEventListener('keydown', r, { capture: !0 }),
      () => t.removeEventListener('keydown', r, { capture: !0 })
    );
  }, [n, t]);
}
var r_ = 'DismissableLayer',
  qu = 'dismissableLayer.update',
  o_ = 'dismissableLayer.pointerDownOutside',
  s_ = 'dismissableLayer.focusOutside',
  op,
  Cv = g.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  ld = g.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: s,
        onInteractOutside: i,
        onDismiss: a,
        ...l
      } = e,
      u = g.useContext(Cv),
      [c, d] = g.useState(null),
      h =
        (c == null ? void 0 : c.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, f] = g.useState({}),
      v = ft(t, (T) => d(T)),
      y = Array.from(u.layers),
      [k] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      m = y.indexOf(k),
      p = c ? y.indexOf(c) : -1,
      x = u.layersWithOutsidePointerEventsDisabled.size > 0,
      _ = p >= m,
      S = l_((T) => {
        const N = T.target,
          Z = [...u.branches].some((j) => j.contains(N));
        !_ ||
          Z ||
          (o == null || o(T),
          i == null || i(T),
          T.defaultPrevented || a == null || a());
      }, h),
      P = u_((T) => {
        const N = T.target;
        [...u.branches].some((j) => j.contains(N)) ||
          (s == null || s(T),
          i == null || i(T),
          T.defaultPrevented || a == null || a());
      }, h);
    return (
      n_((T) => {
        p === u.layers.size - 1 &&
          (r == null || r(T),
          !T.defaultPrevented && a && (T.preventDefault(), a()));
      }, h),
      g.useEffect(() => {
        if (c)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((op = h.body.style.pointerEvents),
                (h.body.style.pointerEvents = 'none')),
              u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            sp(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (h.body.style.pointerEvents = op);
            }
          );
      }, [c, h, n, u]),
      g.useEffect(
        () => () => {
          c &&
            (u.layers.delete(c),
            u.layersWithOutsidePointerEventsDisabled.delete(c),
            sp());
        },
        [c, u],
      ),
      g.useEffect(() => {
        const T = () => f({});
        return (
          document.addEventListener(qu, T),
          () => document.removeEventListener(qu, T)
        );
      }, []),
      b.jsx(ze.div, {
        ...l,
        ref: v,
        style: {
          pointerEvents: x ? (_ ? 'auto' : 'none') : void 0,
          ...e.style,
        },
        onFocusCapture: _e(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: _e(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: _e(
          e.onPointerDownCapture,
          S.onPointerDownCapture,
        ),
      })
    );
  });
ld.displayName = r_;
var i_ = 'DismissableLayerBranch',
  a_ = g.forwardRef((e, t) => {
    const n = g.useContext(Cv),
      r = g.useRef(null),
      o = ft(t, r);
    return (
      g.useEffect(() => {
        const s = r.current;
        if (s)
          return (
            n.branches.add(s),
            () => {
              n.branches.delete(s);
            }
          );
      }, [n.branches]),
      b.jsx(ze.div, { ...e, ref: o })
    );
  });
a_.displayName = i_;
function l_(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Cn(e),
    r = g.useRef(!1),
    o = g.useRef(() => {});
  return (
    g.useEffect(() => {
      const s = (a) => {
          if (a.target && !r.current) {
            let l = function () {
              Ev(o_, n, u, { discrete: !0 });
            };
            const u = { originalEvent: a };
            a.pointerType === 'touch'
              ? (t.removeEventListener('click', o.current),
                (o.current = l),
                t.addEventListener('click', o.current, { once: !0 }))
              : l();
          } else t.removeEventListener('click', o.current);
          r.current = !1;
        },
        i = window.setTimeout(() => {
          t.addEventListener('pointerdown', s);
        }, 0);
      return () => {
        window.clearTimeout(i),
          t.removeEventListener('pointerdown', s),
          t.removeEventListener('click', o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function u_(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Cn(e),
    r = g.useRef(!1);
  return (
    g.useEffect(() => {
      const o = (s) => {
        s.target &&
          !r.current &&
          Ev(s_, n, { originalEvent: s }, { discrete: !1 });
      };
      return (
        t.addEventListener('focusin', o),
        () => t.removeEventListener('focusin', o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function sp() {
  const e = new CustomEvent(qu);
  document.dispatchEvent(e);
}
function Ev(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? K1(o, s) : o.dispatchEvent(s);
}
var Il = 0;
function c_() {
  g.useEffect(() => {
    const e = document.querySelectorAll('[data-radix-focus-guard]');
    return (
      document.body.insertAdjacentElement('afterbegin', e[0] ?? ip()),
      document.body.insertAdjacentElement('beforeend', e[1] ?? ip()),
      Il++,
      () => {
        Il === 1 &&
          document
            .querySelectorAll('[data-radix-focus-guard]')
            .forEach((t) => t.remove()),
          Il--;
      }
    );
  }, []);
}
function ip() {
  const e = document.createElement('span');
  return (
    e.setAttribute('data-radix-focus-guard', ''),
    (e.tabIndex = 0),
    (e.style.outline = 'none'),
    (e.style.opacity = '0'),
    (e.style.position = 'fixed'),
    (e.style.pointerEvents = 'none'),
    e
  );
}
var jl = 'focusScope.autoFocusOnMount',
  Fl = 'focusScope.autoFocusOnUnmount',
  ap = { bubbles: !1, cancelable: !0 },
  d_ = 'FocusScope',
  Pv = g.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: s,
        ...i
      } = e,
      [a, l] = g.useState(null),
      u = Cn(o),
      c = Cn(s),
      d = g.useRef(null),
      h = ft(t, (y) => l(y)),
      f = g.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    g.useEffect(() => {
      if (r) {
        let y = function (x) {
            if (f.paused || !a) return;
            const _ = x.target;
            a.contains(_) ? (d.current = _) : Mn(d.current, { select: !0 });
          },
          k = function (x) {
            if (f.paused || !a) return;
            const _ = x.relatedTarget;
            _ !== null && (a.contains(_) || Mn(d.current, { select: !0 }));
          },
          m = function (x) {
            if (document.activeElement === document.body)
              for (const S of x) S.removedNodes.length > 0 && Mn(a);
          };
        document.addEventListener('focusin', y),
          document.addEventListener('focusout', k);
        const p = new MutationObserver(m);
        return (
          a && p.observe(a, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener('focusin', y),
              document.removeEventListener('focusout', k),
              p.disconnect();
          }
        );
      }
    }, [r, a, f.paused]),
      g.useEffect(() => {
        if (a) {
          up.add(f);
          const y = document.activeElement;
          if (!a.contains(y)) {
            const m = new CustomEvent(jl, ap);
            a.addEventListener(jl, u),
              a.dispatchEvent(m),
              m.defaultPrevented ||
                (f_(g_(Tv(a)), { select: !0 }),
                document.activeElement === y && Mn(a));
          }
          return () => {
            a.removeEventListener(jl, u),
              setTimeout(() => {
                const m = new CustomEvent(Fl, ap);
                a.addEventListener(Fl, c),
                  a.dispatchEvent(m),
                  m.defaultPrevented || Mn(y ?? document.body, { select: !0 }),
                  a.removeEventListener(Fl, c),
                  up.remove(f);
              }, 0);
          };
        }
      }, [a, u, c, f]);
    const v = g.useCallback(
      (y) => {
        if ((!n && !r) || f.paused) return;
        const k = y.key === 'Tab' && !y.altKey && !y.ctrlKey && !y.metaKey,
          m = document.activeElement;
        if (k && m) {
          const p = y.currentTarget,
            [x, _] = p_(p);
          x && _
            ? !y.shiftKey && m === _
              ? (y.preventDefault(), n && Mn(x, { select: !0 }))
              : y.shiftKey &&
                m === x &&
                (y.preventDefault(), n && Mn(_, { select: !0 }))
            : m === p && y.preventDefault();
        }
      },
      [n, r, f.paused],
    );
    return b.jsx(ze.div, { tabIndex: -1, ...i, ref: h, onKeyDown: v });
  });
Pv.displayName = d_;
function f_(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((Mn(r, { select: t }), document.activeElement !== n)) return;
}
function p_(e) {
  const t = Tv(e),
    n = lp(t, e),
    r = lp(t.reverse(), e);
  return [n, r];
}
function Tv(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === 'INPUT' && r.type === 'hidden';
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function lp(e, t) {
  for (const n of e) if (!h_(n, { upTo: t })) return n;
}
function h_(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === 'hidden') return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === 'none') return !0;
    e = e.parentElement;
  }
  return !1;
}
function m_(e) {
  return e instanceof HTMLInputElement && 'select' in e;
}
function Mn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && m_(e) && t && e.select();
  }
}
var up = v_();
function v_() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = cp(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = cp(e, t)), (n = e[0]) == null || n.resume();
    },
  };
}
function cp(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function g_(e) {
  return e.filter((t) => t.tagName !== 'A');
}
var y_ = Sy.useId || (() => {}),
  x_ = 0;
function Wa(e) {
  const [t, n] = g.useState(y_());
  return (
    Sr(() => {
      e || n((r) => r ?? String(x_++));
    }, [e]),
    e || (t ? `radix-${t}` : '')
  );
}
const w_ = ['top', 'right', 'bottom', 'left'],
  Jn = Math.min,
  vt = Math.max,
  ya = Math.round,
  li = Math.floor,
  rn = (e) => ({ x: e, y: e }),
  __ = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
  k_ = { start: 'end', end: 'start' };
function Ju(e, t, n) {
  return vt(e, Jn(t, n));
}
function En(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function Pn(e) {
  return e.split('-')[0];
}
function Co(e) {
  return e.split('-')[1];
}
function ud(e) {
  return e === 'x' ? 'y' : 'x';
}
function cd(e) {
  return e === 'y' ? 'height' : 'width';
}
function er(e) {
  return ['top', 'bottom'].includes(Pn(e)) ? 'y' : 'x';
}
function dd(e) {
  return ud(er(e));
}
function S_(e, t, n) {
  n === void 0 && (n = !1);
  const r = Co(e),
    o = dd(e),
    s = cd(o);
  let i =
    o === 'x'
      ? r === (n ? 'end' : 'start')
        ? 'right'
        : 'left'
      : r === 'start'
        ? 'bottom'
        : 'top';
  return t.reference[s] > t.floating[s] && (i = xa(i)), [i, xa(i)];
}
function b_(e) {
  const t = xa(e);
  return [ec(e), t, ec(t)];
}
function ec(e) {
  return e.replace(/start|end/g, (t) => k_[t]);
}
function C_(e, t, n) {
  const r = ['left', 'right'],
    o = ['right', 'left'],
    s = ['top', 'bottom'],
    i = ['bottom', 'top'];
  switch (e) {
    case 'top':
    case 'bottom':
      return n ? (t ? o : r) : t ? r : o;
    case 'left':
    case 'right':
      return t ? s : i;
    default:
      return [];
  }
}
function E_(e, t, n, r) {
  const o = Co(e);
  let s = C_(Pn(e), n === 'start', r);
  return (
    o && ((s = s.map((i) => i + '-' + o)), t && (s = s.concat(s.map(ec)))), s
  );
}
function xa(e) {
  return e.replace(/left|right|bottom|top/g, (t) => __[t]);
}
function P_(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Rv(e) {
  return typeof e != 'number'
    ? P_(e)
    : { top: e, right: e, bottom: e, left: e };
}
function wa(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function dp(e, t, n) {
  let { reference: r, floating: o } = e;
  const s = er(t),
    i = dd(t),
    a = cd(i),
    l = Pn(t),
    u = s === 'y',
    c = r.x + r.width / 2 - o.width / 2,
    d = r.y + r.height / 2 - o.height / 2,
    h = r[a] / 2 - o[a] / 2;
  let f;
  switch (l) {
    case 'top':
      f = { x: c, y: r.y - o.height };
      break;
    case 'bottom':
      f = { x: c, y: r.y + r.height };
      break;
    case 'right':
      f = { x: r.x + r.width, y: d };
      break;
    case 'left':
      f = { x: r.x - o.width, y: d };
      break;
    default:
      f = { x: r.x, y: r.y };
  }
  switch (Co(t)) {
    case 'start':
      f[i] -= h * (n && u ? -1 : 1);
      break;
    case 'end':
      f[i] += h * (n && u ? -1 : 1);
      break;
  }
  return f;
}
const T_ = async (e, t, n) => {
  const {
      placement: r = 'bottom',
      strategy: o = 'absolute',
      middleware: s = [],
      platform: i,
    } = n,
    a = s.filter(Boolean),
    l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: c, y: d } = dp(u, r, l),
    h = r,
    f = {},
    v = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: k, fn: m } = a[y],
      {
        x: p,
        y: x,
        data: _,
        reset: S,
      } = await m({
        x: c,
        y: d,
        initialPlacement: r,
        placement: h,
        strategy: o,
        middlewareData: f,
        rects: u,
        platform: i,
        elements: { reference: e, floating: t },
      });
    (c = p ?? c),
      (d = x ?? d),
      (f = { ...f, [k]: { ...f[k], ..._ } }),
      S &&
        v <= 50 &&
        (v++,
        typeof S == 'object' &&
          (S.placement && (h = S.placement),
          S.rects &&
            (u =
              S.rects === !0
                ? await i.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : S.rects),
          ({ x: c, y: d } = dp(u, h, l))),
        (y = -1));
  }
  return { x: c, y: d, placement: h, strategy: o, middlewareData: f };
};
async function Rs(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: s, rects: i, elements: a, strategy: l } = e,
    {
      boundary: u = 'clippingAncestors',
      rootBoundary: c = 'viewport',
      elementContext: d = 'floating',
      altBoundary: h = !1,
      padding: f = 0,
    } = En(t, e),
    v = Rv(f),
    k = a[h ? (d === 'floating' ? 'reference' : 'floating') : d],
    m = wa(
      await s.getClippingRect({
        element:
          (n = await (s.isElement == null ? void 0 : s.isElement(k))) == null ||
          n
            ? k
            : k.contextElement ||
              (await (s.getDocumentElement == null
                ? void 0
                : s.getDocumentElement(a.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: l,
      }),
    ),
    p =
      d === 'floating'
        ? { x: r, y: o, width: i.floating.width, height: i.floating.height }
        : i.reference,
    x = await (s.getOffsetParent == null
      ? void 0
      : s.getOffsetParent(a.floating)),
    _ = (await (s.isElement == null ? void 0 : s.isElement(x)))
      ? (await (s.getScale == null ? void 0 : s.getScale(x))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    S = wa(
      s.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: p,
            offsetParent: x,
            strategy: l,
          })
        : p,
    );
  return {
    top: (m.top - S.top + v.top) / _.y,
    bottom: (S.bottom - m.bottom + v.bottom) / _.y,
    left: (m.left - S.left + v.left) / _.x,
    right: (S.right - m.right + v.right) / _.x,
  };
}
const R_ = (e) => ({
    name: 'arrow',
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: s,
          platform: i,
          elements: a,
          middlewareData: l,
        } = t,
        { element: u, padding: c = 0 } = En(e, t) || {};
      if (u == null) return {};
      const d = Rv(c),
        h = { x: n, y: r },
        f = dd(o),
        v = cd(f),
        y = await i.getDimensions(u),
        k = f === 'y',
        m = k ? 'top' : 'left',
        p = k ? 'bottom' : 'right',
        x = k ? 'clientHeight' : 'clientWidth',
        _ = s.reference[v] + s.reference[f] - h[f] - s.floating[v],
        S = h[f] - s.reference[f],
        P = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
      let T = P ? P[x] : 0;
      (!T || !(await (i.isElement == null ? void 0 : i.isElement(P)))) &&
        (T = a.floating[x] || s.floating[v]);
      const N = _ / 2 - S / 2,
        Z = T / 2 - y[v] / 2 - 1,
        j = Jn(d[m], Z),
        te = Jn(d[p], Z),
        D = j,
        W = T - y[v] - te,
        Y = T / 2 - y[v] / 2 + N,
        ie = Ju(D, Y, W),
        Q =
          !l.arrow &&
          Co(o) != null &&
          Y !== ie &&
          s.reference[v] / 2 - (Y < D ? j : te) - y[v] / 2 < 0,
        q = Q ? (Y < D ? Y - D : Y - W) : 0;
      return {
        [f]: h[f] + q,
        data: {
          [f]: ie,
          centerOffset: Y - ie - q,
          ...(Q && { alignmentOffset: q }),
        },
        reset: Q,
      };
    },
  }),
  N_ = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'flip',
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: s,
              rects: i,
              initialPlacement: a,
              platform: l,
              elements: u,
            } = t,
            {
              mainAxis: c = !0,
              crossAxis: d = !0,
              fallbackPlacements: h,
              fallbackStrategy: f = 'bestFit',
              fallbackAxisSideDirection: v = 'none',
              flipAlignment: y = !0,
              ...k
            } = En(e, t);
          if ((n = s.arrow) != null && n.alignmentOffset) return {};
          const m = Pn(o),
            p = er(a),
            x = Pn(a) === a,
            _ = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
            S = h || (x || !y ? [xa(a)] : b_(a)),
            P = v !== 'none';
          !h && P && S.push(...E_(a, y, v, _));
          const T = [a, ...S],
            N = await Rs(t, k),
            Z = [];
          let j = ((r = s.flip) == null ? void 0 : r.overflows) || [];
          if ((c && Z.push(N[m]), d)) {
            const Y = S_(o, i, _);
            Z.push(N[Y[0]], N[Y[1]]);
          }
          if (
            ((j = [...j, { placement: o, overflows: Z }]),
            !Z.every((Y) => Y <= 0))
          ) {
            var te, D;
            const Y = (((te = s.flip) == null ? void 0 : te.index) || 0) + 1,
              ie = T[Y];
            if (ie)
              return {
                data: { index: Y, overflows: j },
                reset: { placement: ie },
              };
            let Q =
              (D = j
                .filter((q) => q.overflows[0] <= 0)
                .sort((q, O) => q.overflows[1] - O.overflows[1])[0]) == null
                ? void 0
                : D.placement;
            if (!Q)
              switch (f) {
                case 'bestFit': {
                  var W;
                  const q =
                    (W = j
                      .filter((O) => {
                        if (P) {
                          const A = er(O.placement);
                          return A === p || A === 'y';
                        }
                        return !0;
                      })
                      .map((O) => [
                        O.placement,
                        O.overflows
                          .filter((A) => A > 0)
                          .reduce((A, V) => A + V, 0),
                      ])
                      .sort((O, A) => O[1] - A[1])[0]) == null
                      ? void 0
                      : W[0];
                  q && (Q = q);
                  break;
                }
                case 'initialPlacement':
                  Q = a;
                  break;
              }
            if (o !== Q) return { reset: { placement: Q } };
          }
          return {};
        },
      }
    );
  };
function fp(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function pp(e) {
  return w_.some((t) => e[t] >= 0);
}
const O_ = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: 'hide',
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = 'referenceHidden', ...o } = En(e, t);
        switch (r) {
          case 'referenceHidden': {
            const s = await Rs(t, { ...o, elementContext: 'reference' }),
              i = fp(s, n.reference);
            return {
              data: { referenceHiddenOffsets: i, referenceHidden: pp(i) },
            };
          }
          case 'escaped': {
            const s = await Rs(t, { ...o, altBoundary: !0 }),
              i = fp(s, n.floating);
            return { data: { escapedOffsets: i, escaped: pp(i) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function A_(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    i = Pn(n),
    a = Co(n),
    l = er(n) === 'y',
    u = ['left', 'top'].includes(i) ? -1 : 1,
    c = s && l ? -1 : 1,
    d = En(t, e);
  let {
    mainAxis: h,
    crossAxis: f,
    alignmentAxis: v,
  } = typeof d == 'number'
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis,
      };
  return (
    a && typeof v == 'number' && (f = a === 'end' ? v * -1 : v),
    l ? { x: f * c, y: h * u } : { x: h * u, y: f * c }
  );
}
const M_ = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: 'offset',
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: s, placement: i, middlewareData: a } = t,
            l = await A_(t, e);
          return i === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + l.x, y: s + l.y, data: { ...l, placement: i } };
        },
      }
    );
  },
  D_ = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'shift',
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: s = !0,
              crossAxis: i = !1,
              limiter: a = {
                fn: (k) => {
                  let { x: m, y: p } = k;
                  return { x: m, y: p };
                },
              },
              ...l
            } = En(e, t),
            u = { x: n, y: r },
            c = await Rs(t, l),
            d = er(Pn(o)),
            h = ud(d);
          let f = u[h],
            v = u[d];
          if (s) {
            const k = h === 'y' ? 'top' : 'left',
              m = h === 'y' ? 'bottom' : 'right',
              p = f + c[k],
              x = f - c[m];
            f = Ju(p, f, x);
          }
          if (i) {
            const k = d === 'y' ? 'top' : 'left',
              m = d === 'y' ? 'bottom' : 'right',
              p = v + c[k],
              x = v - c[m];
            v = Ju(p, v, x);
          }
          const y = a.fn({ ...t, [h]: f, [d]: v });
          return {
            ...y,
            data: { x: y.x - n, y: y.y - r, enabled: { [h]: s, [d]: i } },
          };
        },
      }
    );
  },
  L_ = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: s, middlewareData: i } = t,
            { offset: a = 0, mainAxis: l = !0, crossAxis: u = !0 } = En(e, t),
            c = { x: n, y: r },
            d = er(o),
            h = ud(d);
          let f = c[h],
            v = c[d];
          const y = En(a, t),
            k =
              typeof y == 'number'
                ? { mainAxis: y, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...y };
          if (l) {
            const x = h === 'y' ? 'height' : 'width',
              _ = s.reference[h] - s.floating[x] + k.mainAxis,
              S = s.reference[h] + s.reference[x] - k.mainAxis;
            f < _ ? (f = _) : f > S && (f = S);
          }
          if (u) {
            var m, p;
            const x = h === 'y' ? 'width' : 'height',
              _ = ['top', 'left'].includes(Pn(o)),
              S =
                s.reference[d] -
                s.floating[x] +
                ((_ && ((m = i.offset) == null ? void 0 : m[d])) || 0) +
                (_ ? 0 : k.crossAxis),
              P =
                s.reference[d] +
                s.reference[x] +
                (_ ? 0 : ((p = i.offset) == null ? void 0 : p[d]) || 0) -
                (_ ? k.crossAxis : 0);
            v < S ? (v = S) : v > P && (v = P);
          }
          return { [h]: f, [d]: v };
        },
      }
    );
  },
  I_ = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'size',
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: s, platform: i, elements: a } = t,
            { apply: l = () => {}, ...u } = En(e, t),
            c = await Rs(t, u),
            d = Pn(o),
            h = Co(o),
            f = er(o) === 'y',
            { width: v, height: y } = s.floating;
          let k, m;
          d === 'top' || d === 'bottom'
            ? ((k = d),
              (m =
                h ===
                ((await (i.isRTL == null ? void 0 : i.isRTL(a.floating)))
                  ? 'start'
                  : 'end')
                  ? 'left'
                  : 'right'))
            : ((m = d), (k = h === 'end' ? 'top' : 'bottom'));
          const p = y - c.top - c.bottom,
            x = v - c.left - c.right,
            _ = Jn(y - c[k], p),
            S = Jn(v - c[m], x),
            P = !t.middlewareData.shift;
          let T = _,
            N = S;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (N = x),
            (r = t.middlewareData.shift) != null && r.enabled.y && (T = p),
            P && !h)
          ) {
            const j = vt(c.left, 0),
              te = vt(c.right, 0),
              D = vt(c.top, 0),
              W = vt(c.bottom, 0);
            f
              ? (N =
                  v - 2 * (j !== 0 || te !== 0 ? j + te : vt(c.left, c.right)))
              : (T =
                  y - 2 * (D !== 0 || W !== 0 ? D + W : vt(c.top, c.bottom)));
          }
          await l({ ...t, availableWidth: N, availableHeight: T });
          const Z = await i.getDimensions(a.floating);
          return v !== Z.width || y !== Z.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Ha() {
  return typeof window < 'u';
}
function Eo(e) {
  return Nv(e) ? (e.nodeName || '').toLowerCase() : '#document';
}
function xt(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function an(e) {
  var t;
  return (t = (Nv(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Nv(e) {
  return Ha() ? e instanceof Node || e instanceof xt(e).Node : !1;
}
function Bt(e) {
  return Ha() ? e instanceof Element || e instanceof xt(e).Element : !1;
}
function sn(e) {
  return Ha() ? e instanceof HTMLElement || e instanceof xt(e).HTMLElement : !1;
}
function hp(e) {
  return !Ha() || typeof ShadowRoot > 'u'
    ? !1
    : e instanceof ShadowRoot || e instanceof xt(e).ShadowRoot;
}
function Fs(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = Ut(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !['inline', 'contents'].includes(o)
  );
}
function j_(e) {
  return ['table', 'td', 'th'].includes(Eo(e));
}
function Za(e) {
  return [':popover-open', ':modal'].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function fd(e) {
  const t = pd(),
    n = Bt(e) ? Ut(e) : e;
  return (
    n.transform !== 'none' ||
    n.perspective !== 'none' ||
    (n.containerType ? n.containerType !== 'normal' : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== 'none' : !1)) ||
    (!t && (n.filter ? n.filter !== 'none' : !1)) ||
    ['transform', 'perspective', 'filter'].some((r) =>
      (n.willChange || '').includes(r),
    ) ||
    ['paint', 'layout', 'strict', 'content'].some((r) =>
      (n.contain || '').includes(r),
    )
  );
}
function F_(e) {
  let t = tr(e);
  for (; sn(t) && !go(t); ) {
    if (fd(t)) return t;
    if (Za(t)) return null;
    t = tr(t);
  }
  return null;
}
function pd() {
  return typeof CSS > 'u' || !CSS.supports
    ? !1
    : CSS.supports('-webkit-backdrop-filter', 'none');
}
function go(e) {
  return ['html', 'body', '#document'].includes(Eo(e));
}
function Ut(e) {
  return xt(e).getComputedStyle(e);
}
function Ga(e) {
  return Bt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function tr(e) {
  if (Eo(e) === 'html') return e;
  const t = e.assignedSlot || e.parentNode || (hp(e) && e.host) || an(e);
  return hp(t) ? t.host : t;
}
function Ov(e) {
  const t = tr(e);
  return go(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : sn(t) && Fs(t)
      ? t
      : Ov(t);
}
function Ns(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Ov(e),
    s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = xt(o);
  if (s) {
    const a = tc(i);
    return t.concat(
      i,
      i.visualViewport || [],
      Fs(o) ? o : [],
      a && n ? Ns(a) : [],
    );
  }
  return t.concat(o, Ns(o, [], n));
}
function tc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Av(e) {
  const t = Ut(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = sn(e),
    s = o ? e.offsetWidth : n,
    i = o ? e.offsetHeight : r,
    a = ya(n) !== s || ya(r) !== i;
  return a && ((n = s), (r = i)), { width: n, height: r, $: a };
}
function hd(e) {
  return Bt(e) ? e : e.contextElement;
}
function oo(e) {
  const t = hd(e);
  if (!sn(t)) return rn(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: s } = Av(t);
  let i = (s ? ya(n.width) : n.width) / r,
    a = (s ? ya(n.height) : n.height) / o;
  return (
    (!i || !Number.isFinite(i)) && (i = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: i, y: a }
  );
}
const z_ = rn(0);
function Mv(e) {
  const t = xt(e);
  return !pd() || !t.visualViewport
    ? z_
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function V_(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== xt(e)) ? !1 : t;
}
function Cr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    s = hd(e);
  let i = rn(1);
  t && (r ? Bt(r) && (i = oo(r)) : (i = oo(e)));
  const a = V_(s, n, r) ? Mv(s) : rn(0);
  let l = (o.left + a.x) / i.x,
    u = (o.top + a.y) / i.y,
    c = o.width / i.x,
    d = o.height / i.y;
  if (s) {
    const h = xt(s),
      f = r && Bt(r) ? xt(r) : r;
    let v = h,
      y = tc(v);
    for (; y && r && f !== v; ) {
      const k = oo(y),
        m = y.getBoundingClientRect(),
        p = Ut(y),
        x = m.left + (y.clientLeft + parseFloat(p.paddingLeft)) * k.x,
        _ = m.top + (y.clientTop + parseFloat(p.paddingTop)) * k.y;
      (l *= k.x),
        (u *= k.y),
        (c *= k.x),
        (d *= k.y),
        (l += x),
        (u += _),
        (v = xt(y)),
        (y = tc(v));
    }
  }
  return wa({ width: c, height: d, x: l, y: u });
}
function md(e, t) {
  const n = Ga(e).scrollLeft;
  return t ? t.left + n : Cr(an(e)).left + n;
}
function Dv(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    o = r.left + t.scrollLeft - (n ? 0 : md(e, r)),
    s = r.top + t.scrollTop;
  return { x: o, y: s };
}
function $_(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const s = o === 'fixed',
    i = an(r),
    a = t ? Za(t.floating) : !1;
  if (r === i || (a && s)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    u = rn(1);
  const c = rn(0),
    d = sn(r);
  if (
    (d || (!d && !s)) &&
    ((Eo(r) !== 'body' || Fs(i)) && (l = Ga(r)), sn(r))
  ) {
    const f = Cr(r);
    (u = oo(r)), (c.x = f.x + r.clientLeft), (c.y = f.y + r.clientTop);
  }
  const h = i && !d && !s ? Dv(i, l, !0) : rn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + h.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + h.y,
  };
}
function B_(e) {
  return Array.from(e.getClientRects());
}
function U_(e) {
  const t = an(e),
    n = Ga(e),
    r = e.ownerDocument.body,
    o = vt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    s = vt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + md(e);
  const a = -n.scrollTop;
  return (
    Ut(r).direction === 'rtl' && (i += vt(t.clientWidth, r.clientWidth) - o),
    { width: o, height: s, x: i, y: a }
  );
}
function W_(e, t) {
  const n = xt(e),
    r = an(e),
    o = n.visualViewport;
  let s = r.clientWidth,
    i = r.clientHeight,
    a = 0,
    l = 0;
  if (o) {
    (s = o.width), (i = o.height);
    const u = pd();
    (!u || (u && t === 'fixed')) && ((a = o.offsetLeft), (l = o.offsetTop));
  }
  return { width: s, height: i, x: a, y: l };
}
function H_(e, t) {
  const n = Cr(e, !0, t === 'fixed'),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    s = sn(e) ? oo(e) : rn(1),
    i = e.clientWidth * s.x,
    a = e.clientHeight * s.y,
    l = o * s.x,
    u = r * s.y;
  return { width: i, height: a, x: l, y: u };
}
function mp(e, t, n) {
  let r;
  if (t === 'viewport') r = W_(e, n);
  else if (t === 'document') r = U_(an(e));
  else if (Bt(t)) r = H_(t, n);
  else {
    const o = Mv(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return wa(r);
}
function Lv(e, t) {
  const n = tr(e);
  return n === t || !Bt(n) || go(n)
    ? !1
    : Ut(n).position === 'fixed' || Lv(n, t);
}
function Z_(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Ns(e, [], !1).filter((a) => Bt(a) && Eo(a) !== 'body'),
    o = null;
  const s = Ut(e).position === 'fixed';
  let i = s ? tr(e) : e;
  for (; Bt(i) && !go(i); ) {
    const a = Ut(i),
      l = fd(i);
    !l && a.position === 'fixed' && (o = null),
      (
        s
          ? !l && !o
          : (!l &&
              a.position === 'static' &&
              !!o &&
              ['absolute', 'fixed'].includes(o.position)) ||
            (Fs(i) && !l && Lv(e, i))
      )
        ? (r = r.filter((c) => c !== i))
        : (o = a),
      (i = tr(i));
  }
  return t.set(e, r), r;
}
function G_(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const i = [
      ...(n === 'clippingAncestors'
        ? Za(t)
          ? []
          : Z_(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = i[0],
    l = i.reduce(
      (u, c) => {
        const d = mp(t, c, o);
        return (
          (u.top = vt(d.top, u.top)),
          (u.right = Jn(d.right, u.right)),
          (u.bottom = Jn(d.bottom, u.bottom)),
          (u.left = vt(d.left, u.left)),
          u
        );
      },
      mp(t, a, o),
    );
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function Y_(e) {
  const { width: t, height: n } = Av(e);
  return { width: t, height: n };
}
function K_(e, t, n) {
  const r = sn(t),
    o = an(t),
    s = n === 'fixed',
    i = Cr(e, !0, s, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = rn(0);
  if (r || (!r && !s))
    if (((Eo(t) !== 'body' || Fs(o)) && (a = Ga(t)), r)) {
      const h = Cr(t, !0, s, t);
      (l.x = h.x + t.clientLeft), (l.y = h.y + t.clientTop);
    } else o && (l.x = md(o));
  const u = o && !r && !s ? Dv(o, a) : rn(0),
    c = i.left + a.scrollLeft - l.x - u.x,
    d = i.top + a.scrollTop - l.y - u.y;
  return { x: c, y: d, width: i.width, height: i.height };
}
function zl(e) {
  return Ut(e).position === 'static';
}
function vp(e, t) {
  if (!sn(e) || Ut(e).position === 'fixed') return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return an(e) === n && (n = n.ownerDocument.body), n;
}
function Iv(e, t) {
  const n = xt(e);
  if (Za(e)) return n;
  if (!sn(e)) {
    let o = tr(e);
    for (; o && !go(o); ) {
      if (Bt(o) && !zl(o)) return o;
      o = tr(o);
    }
    return n;
  }
  let r = vp(e, t);
  for (; r && j_(r) && zl(r); ) r = vp(r, t);
  return r && go(r) && zl(r) && !fd(r) ? n : r || F_(e) || n;
}
const Q_ = async function (e) {
  const t = this.getOffsetParent || Iv,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: K_(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function X_(e) {
  return Ut(e).direction === 'rtl';
}
const q_ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: $_,
  getDocumentElement: an,
  getClippingRect: G_,
  getOffsetParent: Iv,
  getElementRects: Q_,
  getClientRects: B_,
  getDimensions: Y_,
  getScale: oo,
  isElement: Bt,
  isRTL: X_,
};
function J_(e, t) {
  let n = null,
    r;
  const o = an(e);
  function s() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
  }
  function i(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), s();
    const { left: u, top: c, width: d, height: h } = e.getBoundingClientRect();
    if ((a || t(), !d || !h)) return;
    const f = li(c),
      v = li(o.clientWidth - (u + d)),
      y = li(o.clientHeight - (c + h)),
      k = li(u),
      p = {
        rootMargin: -f + 'px ' + -v + 'px ' + -y + 'px ' + -k + 'px',
        threshold: vt(0, Jn(1, l)) || 1,
      };
    let x = !0;
    function _(S) {
      const P = S[0].intersectionRatio;
      if (P !== l) {
        if (!x) return i();
        P
          ? i(!1, P)
          : (r = setTimeout(() => {
              i(!1, 1e-7);
            }, 1e3));
      }
      x = !1;
    }
    try {
      n = new IntersectionObserver(_, { ...p, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(_, p);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function ek(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: s = !0,
      elementResize: i = typeof ResizeObserver == 'function',
      layoutShift: a = typeof IntersectionObserver == 'function',
      animationFrame: l = !1,
    } = r,
    u = hd(e),
    c = o || s ? [...(u ? Ns(u) : []), ...Ns(t)] : [];
  c.forEach((m) => {
    o && m.addEventListener('scroll', n, { passive: !0 }),
      s && m.addEventListener('resize', n);
  });
  const d = u && a ? J_(u, n) : null;
  let h = -1,
    f = null;
  i &&
    ((f = new ResizeObserver((m) => {
      let [p] = m;
      p &&
        p.target === u &&
        f &&
        (f.unobserve(t),
        cancelAnimationFrame(h),
        (h = requestAnimationFrame(() => {
          var x;
          (x = f) == null || x.observe(t);
        }))),
        n();
    })),
    u && !l && f.observe(u),
    f.observe(t));
  let v,
    y = l ? Cr(e) : null;
  l && k();
  function k() {
    const m = Cr(e);
    y &&
      (m.x !== y.x ||
        m.y !== y.y ||
        m.width !== y.width ||
        m.height !== y.height) &&
      n(),
      (y = m),
      (v = requestAnimationFrame(k));
  }
  return (
    n(),
    () => {
      var m;
      c.forEach((p) => {
        o && p.removeEventListener('scroll', n),
          s && p.removeEventListener('resize', n);
      }),
        d == null || d(),
        (m = f) == null || m.disconnect(),
        (f = null),
        l && cancelAnimationFrame(v);
    }
  );
}
const tk = M_,
  nk = D_,
  rk = N_,
  ok = I_,
  sk = O_,
  gp = R_,
  ik = L_,
  ak = (e, t, n) => {
    const r = new Map(),
      o = { platform: q_, ...n },
      s = { ...o.platform, _c: r };
    return T_(e, t, { ...o, platform: s });
  };
var Ei = typeof document < 'u' ? g.useLayoutEffect : g.useEffect;
function _a(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == 'function' && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == 'object') {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!_a(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === '_owner' && e.$$typeof) && !_a(e[s], t[s])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function jv(e) {
  return typeof window > 'u'
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function yp(e, t) {
  const n = jv(e);
  return Math.round(t * n) / n;
}
function Vl(e) {
  const t = g.useRef(e);
  return (
    Ei(() => {
      t.current = e;
    }),
    t
  );
}
function lk(e) {
  e === void 0 && (e = {});
  const {
      placement: t = 'bottom',
      strategy: n = 'absolute',
      middleware: r = [],
      platform: o,
      elements: { reference: s, floating: i } = {},
      transform: a = !0,
      whileElementsMounted: l,
      open: u,
    } = e,
    [c, d] = g.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [h, f] = g.useState(r);
  _a(h, r) || f(r);
  const [v, y] = g.useState(null),
    [k, m] = g.useState(null),
    p = g.useCallback((O) => {
      O !== P.current && ((P.current = O), y(O));
    }, []),
    x = g.useCallback((O) => {
      O !== T.current && ((T.current = O), m(O));
    }, []),
    _ = s || v,
    S = i || k,
    P = g.useRef(null),
    T = g.useRef(null),
    N = g.useRef(c),
    Z = l != null,
    j = Vl(l),
    te = Vl(o),
    D = Vl(u),
    W = g.useCallback(() => {
      if (!P.current || !T.current) return;
      const O = { placement: t, strategy: n, middleware: h };
      te.current && (O.platform = te.current),
        ak(P.current, T.current, O).then((A) => {
          const V = { ...A, isPositioned: D.current !== !1 };
          Y.current &&
            !_a(N.current, V) &&
            ((N.current = V),
            Fa.flushSync(() => {
              d(V);
            }));
        });
    }, [h, t, n, te, D]);
  Ei(() => {
    u === !1 &&
      N.current.isPositioned &&
      ((N.current.isPositioned = !1), d((O) => ({ ...O, isPositioned: !1 })));
  }, [u]);
  const Y = g.useRef(!1);
  Ei(
    () => (
      (Y.current = !0),
      () => {
        Y.current = !1;
      }
    ),
    [],
  ),
    Ei(() => {
      if ((_ && (P.current = _), S && (T.current = S), _ && S)) {
        if (j.current) return j.current(_, S, W);
        W();
      }
    }, [_, S, W, j, Z]);
  const ie = g.useMemo(
      () => ({ reference: P, floating: T, setReference: p, setFloating: x }),
      [p, x],
    ),
    Q = g.useMemo(() => ({ reference: _, floating: S }), [_, S]),
    q = g.useMemo(() => {
      const O = { position: n, left: 0, top: 0 };
      if (!Q.floating) return O;
      const A = yp(Q.floating, c.x),
        V = yp(Q.floating, c.y);
      return a
        ? {
            ...O,
            transform: 'translate(' + A + 'px, ' + V + 'px)',
            ...(jv(Q.floating) >= 1.5 && { willChange: 'transform' }),
          }
        : { position: n, left: A, top: V };
    }, [n, a, Q.floating, c.x, c.y]);
  return g.useMemo(
    () => ({ ...c, update: W, refs: ie, elements: Q, floatingStyles: q }),
    [c, W, ie, Q, q],
  );
}
const uk = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, 'current');
    }
    return {
      name: 'arrow',
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == 'function' ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? gp({ element: r.current, padding: o }).fn(n)
            : {}
          : r
            ? gp({ element: r, padding: o }).fn(n)
            : {};
      },
    };
  },
  ck = (e, t) => ({ ...tk(e), options: [e, t] }),
  dk = (e, t) => ({ ...nk(e), options: [e, t] }),
  fk = (e, t) => ({ ...ik(e), options: [e, t] }),
  pk = (e, t) => ({ ...rk(e), options: [e, t] }),
  hk = (e, t) => ({ ...ok(e), options: [e, t] }),
  mk = (e, t) => ({ ...sk(e), options: [e, t] }),
  vk = (e, t) => ({ ...uk(e), options: [e, t] });
var gk = 'Arrow',
  Fv = g.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...s } = e;
    return b.jsx(ze.svg, {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: '0 0 30 10',
      preserveAspectRatio: 'none',
      children: e.asChild ? n : b.jsx('polygon', { points: '0,0 30,0 15,10' }),
    });
  });
Fv.displayName = gk;
var yk = Fv;
function xk(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = g.createContext(i),
      l = n.length;
    n = [...n, i];
    function u(d) {
      const { scope: h, children: f, ...v } = d,
        y = (h == null ? void 0 : h[e][l]) || a,
        k = g.useMemo(() => v, Object.values(v));
      return b.jsx(y.Provider, { value: k, children: f });
    }
    function c(d, h) {
      const f = (h == null ? void 0 : h[e][l]) || a,
        v = g.useContext(f);
      if (v) return v;
      if (i !== void 0) return i;
      throw new Error(`\`${d}\` must be used within \`${s}\``);
    }
    return (u.displayName = s + 'Provider'), [u, c];
  }
  const o = () => {
    const s = n.map((i) => g.createContext(i));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || s;
      return g.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (o.scopeName = e), [r, wk(o, ...t)];
}
function wk(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (s) {
      const i = r.reduce((a, { useScope: l, scopeName: u }) => {
        const d = l(s)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return g.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var vd = 'Popper',
  [zv, Ya] = xk(vd),
  [_k, Vv] = zv(vd),
  $v = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = g.useState(null);
    return b.jsx(_k, { scope: t, anchor: r, onAnchorChange: o, children: n });
  };
$v.displayName = vd;
var Bv = 'PopperAnchor',
  Uv = g.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      s = Vv(Bv, n),
      i = g.useRef(null),
      a = ft(t, i);
    return (
      g.useEffect(() => {
        s.onAnchorChange((r == null ? void 0 : r.current) || i.current);
      }),
      r ? null : b.jsx(ze.div, { ...o, ref: a })
    );
  });
Uv.displayName = Bv;
var gd = 'PopperContent',
  [kk, Sk] = zv(gd),
  Wv = g.forwardRef((e, t) => {
    var he, Wt, Nt, Ht, Ot, Tr;
    const {
        __scopePopper: n,
        side: r = 'bottom',
        sideOffset: o = 0,
        align: s = 'center',
        alignOffset: i = 0,
        arrowPadding: a = 0,
        avoidCollisions: l = !0,
        collisionBoundary: u = [],
        collisionPadding: c = 0,
        sticky: d = 'partial',
        hideWhenDetached: h = !1,
        updatePositionStrategy: f = 'optimized',
        onPlaced: v,
        ...y
      } = e,
      k = Vv(gd, n),
      [m, p] = g.useState(null),
      x = ft(t, (At) => p(At)),
      [_, S] = g.useState(null),
      P = yv(_),
      T = (P == null ? void 0 : P.width) ?? 0,
      N = (P == null ? void 0 : P.height) ?? 0,
      Z = r + (s !== 'center' ? '-' + s : ''),
      j =
        typeof c == 'number'
          ? c
          : { top: 0, right: 0, bottom: 0, left: 0, ...c },
      te = Array.isArray(u) ? u : [u],
      D = te.length > 0,
      W = { padding: j, boundary: te.filter(Ck), altBoundary: D },
      {
        refs: Y,
        floatingStyles: ie,
        placement: Q,
        isPositioned: q,
        middlewareData: O,
      } = lk({
        strategy: 'fixed',
        placement: Z,
        whileElementsMounted: (...At) =>
          ek(...At, { animationFrame: f === 'always' }),
        elements: { reference: k.anchor },
        middleware: [
          ck({ mainAxis: o + N, alignmentAxis: i }),
          l &&
            dk({
              mainAxis: !0,
              crossAxis: !1,
              limiter: d === 'partial' ? fk() : void 0,
              ...W,
            }),
          l && pk({ ...W }),
          hk({
            ...W,
            apply: ({
              elements: At,
              rects: ir,
              availableWidth: Rr,
              availableHeight: Vs,
            }) => {
              const { width: Po, height: w } = ir.reference,
                C = At.floating.style;
              C.setProperty('--radix-popper-available-width', `${Rr}px`),
                C.setProperty('--radix-popper-available-height', `${Vs}px`),
                C.setProperty('--radix-popper-anchor-width', `${Po}px`),
                C.setProperty('--radix-popper-anchor-height', `${w}px`);
            },
          }),
          _ && vk({ element: _, padding: a }),
          Ek({ arrowWidth: T, arrowHeight: N }),
          h && mk({ strategy: 'referenceHidden', ...W }),
        ],
      }),
      [A, V] = Gv(Q),
      ne = Cn(v);
    Sr(() => {
      q && (ne == null || ne());
    }, [q, ne]);
    const X = (he = O.arrow) == null ? void 0 : he.x,
      ae = (Wt = O.arrow) == null ? void 0 : Wt.y,
      ue = ((Nt = O.arrow) == null ? void 0 : Nt.centerOffset) !== 0,
      [Ne, Me] = g.useState();
    return (
      Sr(() => {
        m && Me(window.getComputedStyle(m).zIndex);
      }, [m]),
      b.jsx('div', {
        ref: Y.setFloating,
        'data-radix-popper-content-wrapper': '',
        style: {
          ...ie,
          transform: q ? ie.transform : 'translate(0, -200%)',
          minWidth: 'max-content',
          zIndex: Ne,
          '--radix-popper-transform-origin': [
            (Ht = O.transformOrigin) == null ? void 0 : Ht.x,
            (Ot = O.transformOrigin) == null ? void 0 : Ot.y,
          ].join(' '),
          ...(((Tr = O.hide) == null ? void 0 : Tr.referenceHidden) && {
            visibility: 'hidden',
            pointerEvents: 'none',
          }),
        },
        dir: e.dir,
        children: b.jsx(kk, {
          scope: n,
          placedSide: A,
          onArrowChange: S,
          arrowX: X,
          arrowY: ae,
          shouldHideArrow: ue,
          children: b.jsx(ze.div, {
            'data-side': A,
            'data-align': V,
            ...y,
            ref: x,
            style: { ...y.style, animation: q ? void 0 : 'none' },
          }),
        }),
      })
    );
  });
Wv.displayName = gd;
var Hv = 'PopperArrow',
  bk = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
  Zv = g.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      s = Sk(Hv, r),
      i = bk[s.placedSide];
    return b.jsx('span', {
      ref: s.onArrowChange,
      style: {
        position: 'absolute',
        left: s.arrowX,
        top: s.arrowY,
        [i]: 0,
        transformOrigin: {
          top: '',
          right: '0 0',
          bottom: 'center 0',
          left: '100% 0',
        }[s.placedSide],
        transform: {
          top: 'translateY(100%)',
          right: 'translateY(50%) rotate(90deg) translateX(-50%)',
          bottom: 'rotate(180deg)',
          left: 'translateY(50%) rotate(-90deg) translateX(50%)',
        }[s.placedSide],
        visibility: s.shouldHideArrow ? 'hidden' : void 0,
      },
      children: b.jsx(yk, {
        ...o,
        ref: n,
        style: { ...o.style, display: 'block' },
      }),
    });
  });
Zv.displayName = Hv;
function Ck(e) {
  return e !== null;
}
var Ek = (e) => ({
  name: 'transformOrigin',
  options: e,
  fn(t) {
    var k, m, p;
    const { placement: n, rects: r, middlewareData: o } = t,
      i = ((k = o.arrow) == null ? void 0 : k.centerOffset) !== 0,
      a = i ? 0 : e.arrowWidth,
      l = i ? 0 : e.arrowHeight,
      [u, c] = Gv(n),
      d = { start: '0%', center: '50%', end: '100%' }[c],
      h = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + a / 2,
      f = (((p = o.arrow) == null ? void 0 : p.y) ?? 0) + l / 2;
    let v = '',
      y = '';
    return (
      u === 'bottom'
        ? ((v = i ? d : `${h}px`), (y = `${-l}px`))
        : u === 'top'
          ? ((v = i ? d : `${h}px`), (y = `${r.floating.height + l}px`))
          : u === 'right'
            ? ((v = `${-l}px`), (y = i ? d : `${f}px`))
            : u === 'left' &&
              ((v = `${r.floating.width + l}px`), (y = i ? d : `${f}px`)),
      { data: { x: v, y } }
    );
  },
});
function Gv(e) {
  const [t, n = 'center'] = e.split('-');
  return [t, n];
}
var Yv = $v,
  yd = Uv,
  Kv = Wv,
  Qv = Zv,
  Pk = 'Portal',
  Xv = g.forwardRef((e, t) => {
    var a;
    const { container: n, ...r } = e,
      [o, s] = g.useState(!1);
    Sr(() => s(!0), []);
    const i =
      n ||
      (o &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return i ? zm.createPortal(b.jsx(ze.div, { ...r, ref: t }), i) : null;
  });
Xv.displayName = Pk;
var Tk = function (e) {
    if (typeof document > 'u') return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Dr = new WeakMap(),
  ui = new WeakMap(),
  ci = {},
  $l = 0,
  qv = function (e) {
    return e && (e.host || qv(e.parentNode));
  },
  Rk = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = qv(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              'aria-hidden',
              n,
              'in not contained inside',
              e,
              '. Doing nothing',
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  Nk = function (e, t, n, r) {
    var o = Rk(t, Array.isArray(e) ? e : [e]);
    ci[n] || (ci[n] = new WeakMap());
    var s = ci[n],
      i = [],
      a = new Set(),
      l = new Set(o),
      u = function (d) {
        !d || a.has(d) || (a.add(d), u(d.parentNode));
      };
    o.forEach(u);
    var c = function (d) {
      !d ||
        l.has(d) ||
        Array.prototype.forEach.call(d.children, function (h) {
          if (a.has(h)) c(h);
          else
            try {
              var f = h.getAttribute(r),
                v = f !== null && f !== 'false',
                y = (Dr.get(h) || 0) + 1,
                k = (s.get(h) || 0) + 1;
              Dr.set(h, y),
                s.set(h, k),
                i.push(h),
                y === 1 && v && ui.set(h, !0),
                k === 1 && h.setAttribute(n, 'true'),
                v || h.setAttribute(r, 'true');
            } catch (m) {
              console.error('aria-hidden: cannot operate on ', h, m);
            }
        });
    };
    return (
      c(t),
      a.clear(),
      $l++,
      function () {
        i.forEach(function (d) {
          var h = Dr.get(d) - 1,
            f = s.get(d) - 1;
          Dr.set(d, h),
            s.set(d, f),
            h || (ui.has(d) || d.removeAttribute(r), ui.delete(d)),
            f || d.removeAttribute(n);
        }),
          $l--,
          $l ||
            ((Dr = new WeakMap()),
            (Dr = new WeakMap()),
            (ui = new WeakMap()),
            (ci = {}));
      }
    );
  },
  Ok = function (e, t, n) {
    n === void 0 && (n = 'data-aria-hidden');
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = Tk(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll('[aria-live]'))),
        Nk(r, o, n, 'aria-hidden'))
      : function () {
          return null;
        };
  },
  qt = function () {
    return (
      (qt =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var s in n)
              Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
          }
          return t;
        }),
      qt.apply(this, arguments)
    );
  };
function Jv(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function Ak(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, s; r < o; r++)
      (s || !(r in t)) &&
        (s || (s = Array.prototype.slice.call(t, 0, r)), (s[r] = t[r]));
  return e.concat(s || Array.prototype.slice.call(t));
}
var Pi = 'right-scroll-bar-position',
  Ti = 'width-before-scroll-bar',
  Mk = 'with-scroll-bars-hidden',
  Dk = '--removed-body-scroll-bar-size';
function Bl(e, t) {
  return typeof e == 'function' ? e(t) : e && (e.current = t), e;
}
function Lk(e, t) {
  var n = g.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var Ik = typeof window < 'u' ? g.useLayoutEffect : g.useEffect,
  xp = new WeakMap();
function jk(e, t) {
  var n = Lk(null, function (r) {
    return e.forEach(function (o) {
      return Bl(o, r);
    });
  });
  return (
    Ik(
      function () {
        var r = xp.get(n);
        if (r) {
          var o = new Set(r),
            s = new Set(e),
            i = n.current;
          o.forEach(function (a) {
            s.has(a) || Bl(a, null);
          }),
            s.forEach(function (a) {
              o.has(a) || Bl(a, i);
            });
        }
        xp.set(n, e);
      },
      [e],
    ),
    n
  );
}
function Fk(e) {
  return e;
}
function zk(e, t) {
  t === void 0 && (t = Fk);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.',
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (s) {
        var i = t(s, r);
        return (
          n.push(i),
          function () {
            n = n.filter(function (a) {
              return a !== i;
            });
          }
        );
      },
      assignSyncMedium: function (s) {
        for (r = !0; n.length; ) {
          var i = n;
          (n = []), i.forEach(s);
        }
        n = {
          push: function (a) {
            return s(a);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (s) {
        r = !0;
        var i = [];
        if (n.length) {
          var a = n;
          (n = []), a.forEach(s), (i = n);
        }
        var l = function () {
            var c = i;
            (i = []), c.forEach(s);
          },
          u = function () {
            return Promise.resolve().then(l);
          };
        u(),
          (n = {
            push: function (c) {
              i.push(c), u();
            },
            filter: function (c) {
              return (i = i.filter(c)), n;
            },
          });
      },
    };
  return o;
}
function Vk(e) {
  e === void 0 && (e = {});
  var t = zk(null);
  return (t.options = qt({ async: !0, ssr: !1 }, e)), t;
}
var eg = function (e) {
  var t = e.sideCar,
    n = Jv(e, ['sideCar']);
  if (!t)
    throw new Error(
      'Sidecar: please provide `sideCar` property to import the right car',
    );
  var r = t.read();
  if (!r) throw new Error('Sidecar medium not found');
  return g.createElement(r, qt({}, n));
};
eg.isSideCarExport = !0;
function $k(e, t) {
  return e.useMedium(t), eg;
}
var tg = Vk(),
  Ul = function () {},
  Ka = g.forwardRef(function (e, t) {
    var n = g.useRef(null),
      r = g.useState({
        onScrollCapture: Ul,
        onWheelCapture: Ul,
        onTouchMoveCapture: Ul,
      }),
      o = r[0],
      s = r[1],
      i = e.forwardProps,
      a = e.children,
      l = e.className,
      u = e.removeScrollBar,
      c = e.enabled,
      d = e.shards,
      h = e.sideCar,
      f = e.noIsolation,
      v = e.inert,
      y = e.allowPinchZoom,
      k = e.as,
      m = k === void 0 ? 'div' : k,
      p = e.gapMode,
      x = Jv(e, [
        'forwardProps',
        'children',
        'className',
        'removeScrollBar',
        'enabled',
        'shards',
        'sideCar',
        'noIsolation',
        'inert',
        'allowPinchZoom',
        'as',
        'gapMode',
      ]),
      _ = h,
      S = jk([n, t]),
      P = qt(qt({}, x), o);
    return g.createElement(
      g.Fragment,
      null,
      c &&
        g.createElement(_, {
          sideCar: tg,
          removeScrollBar: u,
          shards: d,
          noIsolation: f,
          inert: v,
          setCallbacks: s,
          allowPinchZoom: !!y,
          lockRef: n,
          gapMode: p,
        }),
      i
        ? g.cloneElement(g.Children.only(a), qt(qt({}, P), { ref: S }))
        : g.createElement(m, qt({}, P, { className: l, ref: S }), a),
    );
  });
Ka.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Ka.classNames = { fullWidth: Ti, zeroRight: Pi };
var Bk = function () {
  if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__;
};
function Uk() {
  if (!document) return null;
  var e = document.createElement('style');
  e.type = 'text/css';
  var t = Bk();
  return t && e.setAttribute('nonce', t), e;
}
function Wk(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function Hk(e) {
  var t = document.head || document.getElementsByTagName('head')[0];
  t.appendChild(e);
}
var Zk = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = Uk()) && (Wk(t, n), Hk(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  Gk = function () {
    var e = Zk();
    return function (t, n) {
      g.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n],
      );
    };
  },
  ng = function () {
    var e = Gk(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  Yk = { left: 0, top: 0, right: 0, gap: 0 },
  Wl = function (e) {
    return parseInt(e || '', 10) || 0;
  },
  Kk = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === 'padding' ? 'paddingLeft' : 'marginLeft'],
      r = t[e === 'padding' ? 'paddingTop' : 'marginTop'],
      o = t[e === 'padding' ? 'paddingRight' : 'marginRight'];
    return [Wl(n), Wl(r), Wl(o)];
  },
  Qk = function (e) {
    if ((e === void 0 && (e = 'margin'), typeof window > 'u')) return Yk;
    var t = Kk(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  Xk = ng(),
  so = 'data-scroll-locked',
  qk = function (e, t, n, r) {
    var o = e.left,
      s = e.top,
      i = e.right,
      a = e.gap;
    return (
      n === void 0 && (n = 'margin'),
      `
  .`
        .concat(
          Mk,
          ` {
   overflow: hidden `,
        )
        .concat(
          r,
          `;
   padding-right: `,
        )
        .concat(a, 'px ')
        .concat(
          r,
          `;
  }
  body[`,
        )
        .concat(
          so,
          `] {
    overflow: hidden `,
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && 'position: relative '.concat(r, ';'),
            n === 'margin' &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `,
                )
                .concat(
                  s,
                  `px;
    padding-right: `,
                )
                .concat(
                  i,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(a, 'px ')
                .concat(
                  r,
                  `;
    `,
                ),
            n === 'padding' &&
              'padding-right: '.concat(a, 'px ').concat(r, ';'),
          ]
            .filter(Boolean)
            .join(''),
          `
  }
  
  .`,
        )
        .concat(
          Pi,
          ` {
    right: `,
        )
        .concat(a, 'px ')
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(
          Ti,
          ` {
    margin-right: `,
        )
        .concat(a, 'px ')
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(Pi, ' .')
        .concat(
          Pi,
          ` {
    right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(Ti, ' .')
        .concat(
          Ti,
          ` {
    margin-right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  body[`,
        )
        .concat(
          so,
          `] {
    `,
        )
        .concat(Dk, ': ')
        .concat(
          a,
          `px;
  }
`,
        )
    );
  },
  wp = function () {
    var e = parseInt(document.body.getAttribute(so) || '0', 10);
    return isFinite(e) ? e : 0;
  },
  Jk = function () {
    g.useEffect(function () {
      return (
        document.body.setAttribute(so, (wp() + 1).toString()),
        function () {
          var e = wp() - 1;
          e <= 0
            ? document.body.removeAttribute(so)
            : document.body.setAttribute(so, e.toString());
        }
      );
    }, []);
  },
  eS = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? 'margin' : r;
    Jk();
    var s = g.useMemo(
      function () {
        return Qk(o);
      },
      [o],
    );
    return g.createElement(Xk, { styles: qk(s, !t, o, n ? '' : '!important') });
  },
  nc = !1;
if (typeof window < 'u')
  try {
    var di = Object.defineProperty({}, 'passive', {
      get: function () {
        return (nc = !0), !0;
      },
    });
    window.addEventListener('test', di, di),
      window.removeEventListener('test', di, di);
  } catch {
    nc = !1;
  }
var Lr = nc ? { passive: !1 } : !1,
  tS = function (e) {
    return e.tagName === 'TEXTAREA';
  },
  rg = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== 'hidden' &&
      !(n.overflowY === n.overflowX && !tS(e) && n[t] === 'visible')
    );
  },
  nS = function (e) {
    return rg(e, 'overflowY');
  },
  rS = function (e) {
    return rg(e, 'overflowX');
  },
  _p = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < 'u' && r instanceof ShadowRoot && (r = r.host);
      var o = og(e, r);
      if (o) {
        var s = sg(e, r),
          i = s[1],
          a = s[2];
        if (i > a) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  oS = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  sS = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  og = function (e, t) {
    return e === 'v' ? nS(t) : rS(t);
  },
  sg = function (e, t) {
    return e === 'v' ? oS(t) : sS(t);
  },
  iS = function (e, t) {
    return e === 'h' && t === 'rtl' ? -1 : 1;
  },
  aS = function (e, t, n, r, o) {
    var s = iS(e, window.getComputedStyle(t).direction),
      i = s * r,
      a = n.target,
      l = t.contains(a),
      u = !1,
      c = i > 0,
      d = 0,
      h = 0;
    do {
      var f = sg(e, a),
        v = f[0],
        y = f[1],
        k = f[2],
        m = y - k - s * v;
      (v || m) && og(e, a) && ((d += m), (h += v)),
        a instanceof ShadowRoot ? (a = a.host) : (a = a.parentNode);
    } while ((!l && a !== document.body) || (l && (t.contains(a) || t === a)));
    return (
      ((c && (Math.abs(d) < 1 || !o)) || (!c && (Math.abs(h) < 1 || !o))) &&
        (u = !0),
      u
    );
  },
  fi = function (e) {
    return 'changedTouches' in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  kp = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Sp = function (e) {
    return e && 'current' in e ? e.current : e;
  },
  lS = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  uS = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  cS = 0,
  Ir = [];
function dS(e) {
  var t = g.useRef([]),
    n = g.useRef([0, 0]),
    r = g.useRef(),
    o = g.useState(cS++)[0],
    s = g.useState(ng)[0],
    i = g.useRef(e);
  g.useEffect(
    function () {
      i.current = e;
    },
    [e],
  ),
    g.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add('block-interactivity-'.concat(o));
          var y = Ak([e.lockRef.current], (e.shards || []).map(Sp), !0).filter(
            Boolean,
          );
          return (
            y.forEach(function (k) {
              return k.classList.add('allow-interactivity-'.concat(o));
            }),
            function () {
              document.body.classList.remove('block-interactivity-'.concat(o)),
                y.forEach(function (k) {
                  return k.classList.remove('allow-interactivity-'.concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    );
  var a = g.useCallback(function (y, k) {
      if (
        ('touches' in y && y.touches.length === 2) ||
        (y.type === 'wheel' && y.ctrlKey)
      )
        return !i.current.allowPinchZoom;
      var m = fi(y),
        p = n.current,
        x = 'deltaX' in y ? y.deltaX : p[0] - m[0],
        _ = 'deltaY' in y ? y.deltaY : p[1] - m[1],
        S,
        P = y.target,
        T = Math.abs(x) > Math.abs(_) ? 'h' : 'v';
      if ('touches' in y && T === 'h' && P.type === 'range') return !1;
      var N = _p(T, P);
      if (!N) return !0;
      if ((N ? (S = T) : ((S = T === 'v' ? 'h' : 'v'), (N = _p(T, P))), !N))
        return !1;
      if (
        (!r.current && 'changedTouches' in y && (x || _) && (r.current = S), !S)
      )
        return !0;
      var Z = r.current || S;
      return aS(Z, k, y, Z === 'h' ? x : _, !0);
    }, []),
    l = g.useCallback(function (y) {
      var k = y;
      if (!(!Ir.length || Ir[Ir.length - 1] !== s)) {
        var m = 'deltaY' in k ? kp(k) : fi(k),
          p = t.current.filter(function (S) {
            return (
              S.name === k.type &&
              (S.target === k.target || k.target === S.shadowParent) &&
              lS(S.delta, m)
            );
          })[0];
        if (p && p.should) {
          k.cancelable && k.preventDefault();
          return;
        }
        if (!p) {
          var x = (i.current.shards || [])
              .map(Sp)
              .filter(Boolean)
              .filter(function (S) {
                return S.contains(k.target);
              }),
            _ = x.length > 0 ? a(k, x[0]) : !i.current.noIsolation;
          _ && k.cancelable && k.preventDefault();
        }
      }
    }, []),
    u = g.useCallback(function (y, k, m, p) {
      var x = { name: y, delta: k, target: m, should: p, shadowParent: fS(m) };
      t.current.push(x),
        setTimeout(function () {
          t.current = t.current.filter(function (_) {
            return _ !== x;
          });
        }, 1);
    }, []),
    c = g.useCallback(function (y) {
      (n.current = fi(y)), (r.current = void 0);
    }, []),
    d = g.useCallback(function (y) {
      u(y.type, kp(y), y.target, a(y, e.lockRef.current));
    }, []),
    h = g.useCallback(function (y) {
      u(y.type, fi(y), y.target, a(y, e.lockRef.current));
    }, []);
  g.useEffect(function () {
    return (
      Ir.push(s),
      e.setCallbacks({
        onScrollCapture: d,
        onWheelCapture: d,
        onTouchMoveCapture: h,
      }),
      document.addEventListener('wheel', l, Lr),
      document.addEventListener('touchmove', l, Lr),
      document.addEventListener('touchstart', c, Lr),
      function () {
        (Ir = Ir.filter(function (y) {
          return y !== s;
        })),
          document.removeEventListener('wheel', l, Lr),
          document.removeEventListener('touchmove', l, Lr),
          document.removeEventListener('touchstart', c, Lr);
      }
    );
  }, []);
  var f = e.removeScrollBar,
    v = e.inert;
  return g.createElement(
    g.Fragment,
    null,
    v ? g.createElement(s, { styles: uS(o) }) : null,
    f ? g.createElement(eS, { gapMode: e.gapMode }) : null,
  );
}
function fS(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const pS = $k(tg, dS);
var ig = g.forwardRef(function (e, t) {
  return g.createElement(Ka, qt({}, e, { ref: t, sideCar: pS }));
});
ig.classNames = Ka.classNames;
var xd = 'Popover',
  [ag, $b] = Ua(xd, [Ya]),
  zs = Ya(),
  [hS, sr] = ag(xd),
  lg = (e) => {
    const {
        __scopePopover: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: s,
        modal: i = !1,
      } = e,
      a = zs(t),
      l = g.useRef(null),
      [u, c] = g.useState(!1),
      [d = !1, h] = js({ prop: r, defaultProp: o, onChange: s });
    return b.jsx(Yv, {
      ...a,
      children: b.jsx(hS, {
        scope: t,
        contentId: Wa(),
        triggerRef: l,
        open: d,
        onOpenChange: h,
        onOpenToggle: g.useCallback(() => h((f) => !f), [h]),
        hasCustomAnchor: u,
        onCustomAnchorAdd: g.useCallback(() => c(!0), []),
        onCustomAnchorRemove: g.useCallback(() => c(!1), []),
        modal: i,
        children: n,
      }),
    });
  };
lg.displayName = xd;
var ug = 'PopoverAnchor',
  mS = g.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      o = sr(ug, n),
      s = zs(n),
      { onCustomAnchorAdd: i, onCustomAnchorRemove: a } = o;
    return (
      g.useEffect(() => (i(), () => a()), [i, a]),
      b.jsx(yd, { ...s, ...r, ref: t })
    );
  });
mS.displayName = ug;
var cg = 'PopoverTrigger',
  dg = g.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      o = sr(cg, n),
      s = zs(n),
      i = ft(t, o.triggerRef),
      a = b.jsx(ze.button, {
        type: 'button',
        'aria-haspopup': 'dialog',
        'aria-expanded': o.open,
        'aria-controls': o.contentId,
        'data-state': vg(o.open),
        ...r,
        ref: i,
        onClick: _e(e.onClick, o.onOpenToggle),
      });
    return o.hasCustomAnchor
      ? a
      : b.jsx(yd, { asChild: !0, ...s, children: a });
  });
dg.displayName = cg;
var wd = 'PopoverPortal',
  [vS, gS] = ag(wd, { forceMount: void 0 }),
  fg = (e) => {
    const { __scopePopover: t, forceMount: n, children: r, container: o } = e,
      s = sr(wd, t);
    return b.jsx(vS, {
      scope: t,
      forceMount: n,
      children: b.jsx(bo, {
        present: n || s.open,
        children: b.jsx(Xv, { asChild: !0, container: o, children: r }),
      }),
    });
  };
fg.displayName = wd;
var yo = 'PopoverContent',
  pg = g.forwardRef((e, t) => {
    const n = gS(yo, e.__scopePopover),
      { forceMount: r = n.forceMount, ...o } = e,
      s = sr(yo, e.__scopePopover);
    return b.jsx(bo, {
      present: r || s.open,
      children: s.modal
        ? b.jsx(yS, { ...o, ref: t })
        : b.jsx(xS, { ...o, ref: t }),
    });
  });
pg.displayName = yo;
var yS = g.forwardRef((e, t) => {
    const n = sr(yo, e.__scopePopover),
      r = g.useRef(null),
      o = ft(t, r),
      s = g.useRef(!1);
    return (
      g.useEffect(() => {
        const i = r.current;
        if (i) return Ok(i);
      }, []),
      b.jsx(ig, {
        as: br,
        allowPinchZoom: !0,
        children: b.jsx(hg, {
          ...e,
          ref: o,
          trapFocus: n.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: _e(e.onCloseAutoFocus, (i) => {
            var a;
            i.preventDefault(),
              s.current || (a = n.triggerRef.current) == null || a.focus();
          }),
          onPointerDownOutside: _e(
            e.onPointerDownOutside,
            (i) => {
              const a = i.detail.originalEvent,
                l = a.button === 0 && a.ctrlKey === !0,
                u = a.button === 2 || l;
              s.current = u;
            },
            { checkForDefaultPrevented: !1 },
          ),
          onFocusOutside: _e(e.onFocusOutside, (i) => i.preventDefault(), {
            checkForDefaultPrevented: !1,
          }),
        }),
      })
    );
  }),
  xS = g.forwardRef((e, t) => {
    const n = sr(yo, e.__scopePopover),
      r = g.useRef(!1),
      o = g.useRef(!1);
    return b.jsx(hg, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (s) => {
        var i, a;
        (i = e.onCloseAutoFocus) == null || i.call(e, s),
          s.defaultPrevented ||
            (r.current || (a = n.triggerRef.current) == null || a.focus(),
            s.preventDefault()),
          (r.current = !1),
          (o.current = !1);
      },
      onInteractOutside: (s) => {
        var l, u;
        (l = e.onInteractOutside) == null || l.call(e, s),
          s.defaultPrevented ||
            ((r.current = !0),
            s.detail.originalEvent.type === 'pointerdown' && (o.current = !0));
        const i = s.target;
        ((u = n.triggerRef.current) == null ? void 0 : u.contains(i)) &&
          s.preventDefault(),
          s.detail.originalEvent.type === 'focusin' &&
            o.current &&
            s.preventDefault();
      },
    });
  }),
  hg = g.forwardRef((e, t) => {
    const {
        __scopePopover: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: s,
        disableOutsidePointerEvents: i,
        onEscapeKeyDown: a,
        onPointerDownOutside: l,
        onFocusOutside: u,
        onInteractOutside: c,
        ...d
      } = e,
      h = sr(yo, n),
      f = zs(n);
    return (
      c_(),
      b.jsx(Pv, {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: s,
        children: b.jsx(ld, {
          asChild: !0,
          disableOutsidePointerEvents: i,
          onInteractOutside: c,
          onEscapeKeyDown: a,
          onPointerDownOutside: l,
          onFocusOutside: u,
          onDismiss: () => h.onOpenChange(!1),
          children: b.jsx(Kv, {
            'data-state': vg(h.open),
            role: 'dialog',
            id: h.contentId,
            ...f,
            ...d,
            ref: t,
            style: {
              ...d.style,
              '--radix-popover-content-transform-origin':
                'var(--radix-popper-transform-origin)',
              '--radix-popover-content-available-width':
                'var(--radix-popper-available-width)',
              '--radix-popover-content-available-height':
                'var(--radix-popper-available-height)',
              '--radix-popover-trigger-width':
                'var(--radix-popper-anchor-width)',
              '--radix-popover-trigger-height':
                'var(--radix-popper-anchor-height)',
            },
          }),
        }),
      })
    );
  }),
  mg = 'PopoverClose',
  wS = g.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      o = sr(mg, n);
    return b.jsx(ze.button, {
      type: 'button',
      ...r,
      ref: t,
      onClick: _e(e.onClick, () => o.onOpenChange(!1)),
    });
  });
wS.displayName = mg;
var _S = 'PopoverArrow',
  kS = g.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      o = zs(n);
    return b.jsx(Qv, { ...o, ...r, ref: t });
  });
kS.displayName = _S;
function vg(e) {
  return e ? 'open' : 'closed';
}
var SS = lg,
  bS = dg,
  CS = fg,
  gg = pg;
const ES = SS,
  PS = bS,
  yg = g.forwardRef(
    ({ className: e, align: t = 'center', sideOffset: n = 4, ...r }, o) =>
      b.jsx(CS, {
        children: b.jsx(gg, {
          ref: o,
          align: t,
          sideOffset: n,
          className: Ie(
            'z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            e,
          ),
          ...r,
        }),
      }),
  );
yg.displayName = gg.displayName;
var TS = 'VisuallyHidden',
  xg = g.forwardRef((e, t) =>
    b.jsx(ze.span, {
      ...e,
      ref: t,
      style: {
        position: 'absolute',
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        wordWrap: 'normal',
        ...e.style,
      },
    }),
  );
xg.displayName = TS;
var RS = xg,
  [Qa, Bb] = Ua('Tooltip', [Ya]),
  Xa = Ya(),
  wg = 'TooltipProvider',
  NS = 700,
  rc = 'tooltip.open',
  [OS, _d] = Qa(wg),
  _g = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = NS,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: s,
      } = e,
      [i, a] = g.useState(!0),
      l = g.useRef(!1),
      u = g.useRef(0);
    return (
      g.useEffect(() => {
        const c = u.current;
        return () => window.clearTimeout(c);
      }, []),
      b.jsx(OS, {
        scope: t,
        isOpenDelayed: i,
        delayDuration: n,
        onOpen: g.useCallback(() => {
          window.clearTimeout(u.current), a(!1);
        }, []),
        onClose: g.useCallback(() => {
          window.clearTimeout(u.current),
            (u.current = window.setTimeout(() => a(!0), r));
        }, [r]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: g.useCallback((c) => {
          l.current = c;
        }, []),
        disableHoverableContent: o,
        children: s,
      })
    );
  };
_g.displayName = wg;
var qa = 'Tooltip',
  [AS, Ja] = Qa(qa),
  kg = (e) => {
    const {
        __scopeTooltip: t,
        children: n,
        open: r,
        defaultOpen: o = !1,
        onOpenChange: s,
        disableHoverableContent: i,
        delayDuration: a,
      } = e,
      l = _d(qa, e.__scopeTooltip),
      u = Xa(t),
      [c, d] = g.useState(null),
      h = Wa(),
      f = g.useRef(0),
      v = i ?? l.disableHoverableContent,
      y = a ?? l.delayDuration,
      k = g.useRef(!1),
      [m = !1, p] = js({
        prop: r,
        defaultProp: o,
        onChange: (T) => {
          T
            ? (l.onOpen(), document.dispatchEvent(new CustomEvent(rc)))
            : l.onClose(),
            s == null || s(T);
        },
      }),
      x = g.useMemo(
        () => (m ? (k.current ? 'delayed-open' : 'instant-open') : 'closed'),
        [m],
      ),
      _ = g.useCallback(() => {
        window.clearTimeout(f.current),
          (f.current = 0),
          (k.current = !1),
          p(!0);
      }, [p]),
      S = g.useCallback(() => {
        window.clearTimeout(f.current), (f.current = 0), p(!1);
      }, [p]),
      P = g.useCallback(() => {
        window.clearTimeout(f.current),
          (f.current = window.setTimeout(() => {
            (k.current = !0), p(!0), (f.current = 0);
          }, y));
      }, [y, p]);
    return (
      g.useEffect(
        () => () => {
          f.current && (window.clearTimeout(f.current), (f.current = 0));
        },
        [],
      ),
      b.jsx(Yv, {
        ...u,
        children: b.jsx(AS, {
          scope: t,
          contentId: h,
          open: m,
          stateAttribute: x,
          trigger: c,
          onTriggerChange: d,
          onTriggerEnter: g.useCallback(() => {
            l.isOpenDelayed ? P() : _();
          }, [l.isOpenDelayed, P, _]),
          onTriggerLeave: g.useCallback(() => {
            v ? S() : (window.clearTimeout(f.current), (f.current = 0));
          }, [S, v]),
          onOpen: _,
          onClose: S,
          disableHoverableContent: v,
          children: n,
        }),
      })
    );
  };
kg.displayName = qa;
var oc = 'TooltipTrigger',
  Sg = g.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = Ja(oc, n),
      s = _d(oc, n),
      i = Xa(n),
      a = g.useRef(null),
      l = ft(t, a, o.onTriggerChange),
      u = g.useRef(!1),
      c = g.useRef(!1),
      d = g.useCallback(() => (u.current = !1), []);
    return (
      g.useEffect(
        () => () => document.removeEventListener('pointerup', d),
        [d],
      ),
      b.jsx(yd, {
        asChild: !0,
        ...i,
        children: b.jsx(ze.button, {
          'aria-describedby': o.open ? o.contentId : void 0,
          'data-state': o.stateAttribute,
          ...r,
          ref: l,
          onPointerMove: _e(e.onPointerMove, (h) => {
            h.pointerType !== 'touch' &&
              !c.current &&
              !s.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (c.current = !0));
          }),
          onPointerLeave: _e(e.onPointerLeave, () => {
            o.onTriggerLeave(), (c.current = !1);
          }),
          onPointerDown: _e(e.onPointerDown, () => {
            (u.current = !0),
              document.addEventListener('pointerup', d, { once: !0 });
          }),
          onFocus: _e(e.onFocus, () => {
            u.current || o.onOpen();
          }),
          onBlur: _e(e.onBlur, o.onClose),
          onClick: _e(e.onClick, o.onClose),
        }),
      })
    );
  });
Sg.displayName = oc;
var MS = 'TooltipPortal',
  [Ub, DS] = Qa(MS, { forceMount: void 0 }),
  xo = 'TooltipContent',
  bg = g.forwardRef((e, t) => {
    const n = DS(xo, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: o = 'top', ...s } = e,
      i = Ja(xo, e.__scopeTooltip);
    return b.jsx(bo, {
      present: r || i.open,
      children: i.disableHoverableContent
        ? b.jsx(Cg, { side: o, ...s, ref: t })
        : b.jsx(LS, { side: o, ...s, ref: t }),
    });
  }),
  LS = g.forwardRef((e, t) => {
    const n = Ja(xo, e.__scopeTooltip),
      r = _d(xo, e.__scopeTooltip),
      o = g.useRef(null),
      s = ft(t, o),
      [i, a] = g.useState(null),
      { trigger: l, onClose: u } = n,
      c = o.current,
      { onPointerInTransitChange: d } = r,
      h = g.useCallback(() => {
        a(null), d(!1);
      }, [d]),
      f = g.useCallback(
        (v, y) => {
          const k = v.currentTarget,
            m = { x: v.clientX, y: v.clientY },
            p = zS(m, k.getBoundingClientRect()),
            x = VS(m, p),
            _ = $S(y.getBoundingClientRect()),
            S = US([...x, ..._]);
          a(S), d(!0);
        },
        [d],
      );
    return (
      g.useEffect(() => () => h(), [h]),
      g.useEffect(() => {
        if (l && c) {
          const v = (k) => f(k, c),
            y = (k) => f(k, l);
          return (
            l.addEventListener('pointerleave', v),
            c.addEventListener('pointerleave', y),
            () => {
              l.removeEventListener('pointerleave', v),
                c.removeEventListener('pointerleave', y);
            }
          );
        }
      }, [l, c, f, h]),
      g.useEffect(() => {
        if (i) {
          const v = (y) => {
            const k = y.target,
              m = { x: y.clientX, y: y.clientY },
              p =
                (l == null ? void 0 : l.contains(k)) ||
                (c == null ? void 0 : c.contains(k)),
              x = !BS(m, i);
            p ? h() : x && (h(), u());
          };
          return (
            document.addEventListener('pointermove', v),
            () => document.removeEventListener('pointermove', v)
          );
        }
      }, [l, c, i, u, h]),
      b.jsx(Cg, { ...e, ref: s })
    );
  }),
  [IS, jS] = Qa(qa, { isInside: !1 }),
  Cg = g.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        'aria-label': o,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        ...a
      } = e,
      l = Ja(xo, n),
      u = Xa(n),
      { onClose: c } = l;
    return (
      g.useEffect(
        () => (
          document.addEventListener(rc, c),
          () => document.removeEventListener(rc, c)
        ),
        [c],
      ),
      g.useEffect(() => {
        if (l.trigger) {
          const d = (h) => {
            const f = h.target;
            f != null && f.contains(l.trigger) && c();
          };
          return (
            window.addEventListener('scroll', d, { capture: !0 }),
            () => window.removeEventListener('scroll', d, { capture: !0 })
          );
        }
      }, [l.trigger, c]),
      b.jsx(ld, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: c,
        children: b.jsxs(Kv, {
          'data-state': l.stateAttribute,
          ...u,
          ...a,
          ref: t,
          style: {
            ...a.style,
            '--radix-tooltip-content-transform-origin':
              'var(--radix-popper-transform-origin)',
            '--radix-tooltip-content-available-width':
              'var(--radix-popper-available-width)',
            '--radix-tooltip-content-available-height':
              'var(--radix-popper-available-height)',
            '--radix-tooltip-trigger-width': 'var(--radix-popper-anchor-width)',
            '--radix-tooltip-trigger-height':
              'var(--radix-popper-anchor-height)',
          },
          children: [
            b.jsx(xv, { children: r }),
            b.jsx(IS, {
              scope: n,
              isInside: !0,
              children: b.jsx(RS, {
                id: l.contentId,
                role: 'tooltip',
                children: o || r,
              }),
            }),
          ],
        }),
      })
    );
  });
bg.displayName = xo;
var Eg = 'TooltipArrow',
  FS = g.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = Xa(n);
    return jS(Eg, n).isInside ? null : b.jsx(Qv, { ...o, ...r, ref: t });
  });
FS.displayName = Eg;
function zS(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    s = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, s)) {
    case s:
      return 'left';
    case o:
      return 'right';
    case n:
      return 'top';
    case r:
      return 'bottom';
    default:
      throw new Error('unreachable');
  }
}
function VS(e, t, n = 5) {
  const r = [];
  switch (t) {
    case 'top':
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case 'bottom':
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case 'left':
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case 'right':
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function $S(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r },
  ];
}
function BS(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const a = t[s].x,
      l = t[s].y,
      u = t[i].x,
      c = t[i].y;
    l > r != c > r && n < ((u - a) * (r - l)) / (c - l) + a && (o = !o);
  }
  return o;
}
function US(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0,
    ),
    WS(t)
  );
}
function WS(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1],
        i = t[t.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1],
        i = n[n.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var HS = _g,
  ZS = kg,
  GS = Sg,
  Pg = bg;
const YS = HS,
  KS = ZS,
  QS = GS,
  Tg = g.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    b.jsx(Pg, {
      ref: r,
      sideOffset: t,
      className: Ie(
        'z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        e,
      ),
      ...n,
    }),
  );
Tg.displayName = Pg.displayName;
var XS = 'Label',
  Rg = g.forwardRef((e, t) =>
    b.jsx(ze.label, {
      ...e,
      ref: t,
      onMouseDown: (n) => {
        var o;
        n.target.closest('button, input, select, textarea') ||
          ((o = e.onMouseDown) == null || o.call(e, n),
          !n.defaultPrevented && n.detail > 1 && n.preventDefault());
      },
    }),
  );
Rg.displayName = XS;
var qS = Rg;
const kd = R.forwardRef(({ className: e, ...t }, n) =>
  b.jsx(qS, {
    ref: n,
    className: Ie(
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      e,
    ),
    ...t,
  }),
);
kd.displayName = 'Label';
const JS = ({ dot: e, onToggle: t, onSelect: n, disabled: r }) => {
  var o;
  return b.jsx(YS, {
    children: b.jsxs(KS, {
      children: [
        b.jsxs(ES, {
          children: [
            b.jsx(PS, {
              asChild: !0,
              children: b.jsx(QS, {
                type: 'button',
                className: 'absolute origin-center',
                style: {
                  left: e.x,
                  top: e.y,
                  transform: 'translate(-50%, -50%)',
                },
                children: b.jsx('input', {
                  type: 'text',
                  readOnly: !0,
                  className: Ie(
                    'rounded-full truncate focus:z-10 transition-transform size-6 text-xs text-center text-primary-foreground',
                    e.status ? 'bg-red-400' : 'bg-gray-600',
                    r && 'pointer-events-none',
                    'outline-none ring-0 cursor-pointer',
                  ),
                  value: e.name,
                  onClick: e.type === 'single' ? () => t() : void 0,
                }),
              }),
            }),
            e.type === 'multi' &&
              ((o = e.options) == null ? void 0 : o.length) &&
              b.jsx(yg, {
                side: 'right',
                className: 'flex flex-col gap-2 max-w-40',
                children: e.options.map((s) => {
                  var i;
                  return b.jsxs(
                    'div',
                    {
                      className: 'flex items-center gap-2',
                      children: [
                        b.jsx(bv, {
                          id: s.value,
                          checked:
                            (i = e.value) == null
                              ? void 0
                              : i.includes(s.value),
                          onCheckedChange: () => n(s.value),
                          disabled: r,
                        }),
                        b.jsx(kd, { htmlFor: s.value, children: s.label }),
                      ],
                    },
                    s.value,
                  );
                }),
              }),
          ],
        }),
        b.jsx(Tg, { children: e.name }),
      ],
    }),
  });
};
function eb({ label: e, children: t }) {
  return b.jsxs('div', {
    className: 'w-full',
    children: [
      b.jsx('h1', { className: 'font-bold text-2xl', children: e }),
      b.jsx('div', { className: 'flex flex-col gap-4 mt-6', children: t }),
    ],
  });
}
const tb = Ix,
  Ng = g.createContext({}),
  nb = ({ ...e }) =>
    b.jsx(Ng.Provider, {
      value: { name: e.name },
      children: b.jsx(Vx, { ...e }),
    }),
  el = () => {
    const e = g.useContext(Ng),
      t = g.useContext(Og),
      { getFieldState: n, formState: r } = Va(),
      o = n(e.name, r);
    if (!e) throw new Error('useFormField should be used within <FormField>');
    const { id: s, variant: i } = t;
    return {
      id: s,
      name: e.name,
      formItemId: `${s}-form-item`,
      formDescriptionId: `${s}-form-item-description`,
      formMessageId: `${s}-form-item-message`,
      variant: i,
      ...o,
    };
  },
  Og = g.createContext({}),
  Ag = g.forwardRef(({ className: e, variant: t = 'default', ...n }, r) => {
    const o = g.useId(),
      s = { default: '', portal: 'space-y-1.5 lg:space-y-2.5' };
    return b.jsx(Og.Provider, {
      value: { id: o, variant: t },
      children: b.jsx('div', {
        ref: r,
        className: Ie('space-y-2', s[t], e),
        ...n,
      }),
    });
  });
Ag.displayName = 'FormItem';
const rb = g.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o, variant: s } = el(),
    i = {
      default: '',
      portal: '!text-portal-text font-noto-ikea !text-xs !font-normal',
    };
  return b.jsxs(kd, {
    ref: n,
    className: Ie(r && 'text-destructive', i[s], e),
    htmlFor: o,
    children: [
      t.children,
      ' ',
      t != null && t.required
        ? b.jsx('span', { className: 'text-red-600', children: '*' })
        : null,
    ],
  });
});
rb.displayName = 'FormLabel';
const Mg = g.forwardRef(({ ...e }, t) => {
  const {
    error: n,
    formItemId: r,
    formDescriptionId: o,
    formMessageId: s,
    variant: i,
  } = el();
  return b.jsx(br, {
    ref: t,
    id: r,
    'aria-describedby': n ? `${o} ${s}` : `${o}`,
    'aria-invalid': !!n,
    variant: i,
    ...e,
  });
});
Mg.displayName = 'FormControl';
const ob = g.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = el();
  return b.jsx('p', {
    ref: n,
    id: r,
    className: Ie('text-sm text-muted-foreground', e),
    ...t,
  });
});
ob.displayName = 'FormDescription';
const sb = g.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: s } = el(),
    i = o ? String(o == null ? void 0 : o.message) : t;
  return i
    ? b.jsx('p', {
        ref: r,
        id: s,
        className: Ie('text-sm font-medium text-destructive', e),
        ...n,
        children: i,
      })
    : null;
});
sb.displayName = 'FormMessage';
function ib(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = g.createContext(i),
      l = n.length;
    n = [...n, i];
    function u(d) {
      const { scope: h, children: f, ...v } = d,
        y = (h == null ? void 0 : h[e][l]) || a,
        k = g.useMemo(() => v, Object.values(v));
      return b.jsx(y.Provider, { value: k, children: f });
    }
    function c(d, h) {
      const f = (h == null ? void 0 : h[e][l]) || a,
        v = g.useContext(f);
      if (v) return v;
      if (i !== void 0) return i;
      throw new Error(`\`${d}\` must be used within \`${s}\``);
    }
    return (u.displayName = s + 'Provider'), [u, c];
  }
  const o = () => {
    const s = n.map((i) => g.createContext(i));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || s;
      return g.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (o.scopeName = e), [r, ab(o, ...t)];
}
function ab(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (s) {
      const i = r.reduce((a, { useScope: l, scopeName: u }) => {
        const d = l(s)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return g.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function lb(e) {
  const t = e + 'CollectionProvider',
    [n, r] = ib(t),
    [o, s] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    i = (f) => {
      const { scope: v, children: y } = f,
        k = R.useRef(null),
        m = R.useRef(new Map()).current;
      return b.jsx(o, { scope: v, itemMap: m, collectionRef: k, children: y });
    };
  i.displayName = t;
  const a = e + 'CollectionSlot',
    l = R.forwardRef((f, v) => {
      const { scope: y, children: k } = f,
        m = s(a, y),
        p = ft(v, m.collectionRef);
      return b.jsx(br, { ref: p, children: k });
    });
  l.displayName = a;
  const u = e + 'CollectionItemSlot',
    c = 'data-radix-collection-item',
    d = R.forwardRef((f, v) => {
      const { scope: y, children: k, ...m } = f,
        p = R.useRef(null),
        x = ft(v, p),
        _ = s(u, y);
      return (
        R.useEffect(
          () => (
            _.itemMap.set(p, { ref: p, ...m }), () => void _.itemMap.delete(p)
          ),
        ),
        b.jsx(br, { [c]: '', ref: x, children: k })
      );
    });
  d.displayName = u;
  function h(f) {
    const v = s(e + 'CollectionConsumer', f);
    return R.useCallback(() => {
      const k = v.collectionRef.current;
      if (!k) return [];
      const m = Array.from(k.querySelectorAll(`[${c}]`));
      return Array.from(v.itemMap.values()).sort(
        (_, S) => m.indexOf(_.ref.current) - m.indexOf(S.ref.current),
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return [{ Provider: i, Slot: l, ItemSlot: d }, h, r];
}
function ub(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = g.createContext(i),
      l = n.length;
    n = [...n, i];
    function u(d) {
      const { scope: h, children: f, ...v } = d,
        y = (h == null ? void 0 : h[e][l]) || a,
        k = g.useMemo(() => v, Object.values(v));
      return b.jsx(y.Provider, { value: k, children: f });
    }
    function c(d, h) {
      const f = (h == null ? void 0 : h[e][l]) || a,
        v = g.useContext(f);
      if (v) return v;
      if (i !== void 0) return i;
      throw new Error(`\`${d}\` must be used within \`${s}\``);
    }
    return (u.displayName = s + 'Provider'), [u, c];
  }
  const o = () => {
    const s = n.map((i) => g.createContext(i));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || s;
      return g.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (o.scopeName = e), [r, cb(o, ...t)];
}
function cb(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (s) {
      const i = r.reduce((a, { useScope: l, scopeName: u }) => {
        const d = l(s)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return g.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var db = g.createContext(void 0);
function Dg(e) {
  const t = g.useContext(db);
  return e || t || 'ltr';
}
var Hl = 'rovingFocusGroup.onEntryFocus',
  fb = { bubbles: !1, cancelable: !0 },
  tl = 'RovingFocusGroup',
  [sc, Lg, pb] = lb(tl),
  [hb, Ig] = ub(tl, [pb]),
  [mb, vb] = hb(tl),
  jg = g.forwardRef((e, t) =>
    b.jsx(sc.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: b.jsx(sc.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: b.jsx(gb, { ...e, ref: t }),
      }),
    }),
  );
jg.displayName = tl;
var gb = g.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: r,
        loop: o = !1,
        dir: s,
        currentTabStopId: i,
        defaultCurrentTabStopId: a,
        onCurrentTabStopIdChange: l,
        onEntryFocus: u,
        preventScrollOnEntryFocus: c = !1,
        ...d
      } = e,
      h = g.useRef(null),
      f = ft(t, h),
      v = Dg(s),
      [y = null, k] = js({ prop: i, defaultProp: a, onChange: l }),
      [m, p] = g.useState(!1),
      x = Cn(u),
      _ = Lg(n),
      S = g.useRef(!1),
      [P, T] = g.useState(0);
    return (
      g.useEffect(() => {
        const N = h.current;
        if (N)
          return N.addEventListener(Hl, x), () => N.removeEventListener(Hl, x);
      }, [x]),
      b.jsx(mb, {
        scope: n,
        orientation: r,
        dir: v,
        loop: o,
        currentTabStopId: y,
        onItemFocus: g.useCallback((N) => k(N), [k]),
        onItemShiftTab: g.useCallback(() => p(!0), []),
        onFocusableItemAdd: g.useCallback(() => T((N) => N + 1), []),
        onFocusableItemRemove: g.useCallback(() => T((N) => N - 1), []),
        children: b.jsx(ze.div, {
          tabIndex: m || P === 0 ? -1 : 0,
          'data-orientation': r,
          ...d,
          ref: f,
          style: { outline: 'none', ...e.style },
          onMouseDown: _e(e.onMouseDown, () => {
            S.current = !0;
          }),
          onFocus: _e(e.onFocus, (N) => {
            const Z = !S.current;
            if (N.target === N.currentTarget && Z && !m) {
              const j = new CustomEvent(Hl, fb);
              if ((N.currentTarget.dispatchEvent(j), !j.defaultPrevented)) {
                const te = _().filter((Q) => Q.focusable),
                  D = te.find((Q) => Q.active),
                  W = te.find((Q) => Q.id === y),
                  ie = [D, W, ...te].filter(Boolean).map((Q) => Q.ref.current);
                Vg(ie, c);
              }
            }
            S.current = !1;
          }),
          onBlur: _e(e.onBlur, () => p(!1)),
        }),
      })
    );
  }),
  Fg = 'RovingFocusGroupItem',
  zg = g.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: r = !0,
        active: o = !1,
        tabStopId: s,
        ...i
      } = e,
      a = Wa(),
      l = s || a,
      u = vb(Fg, n),
      c = u.currentTabStopId === l,
      d = Lg(n),
      { onFocusableItemAdd: h, onFocusableItemRemove: f } = u;
    return (
      g.useEffect(() => {
        if (r) return h(), () => f();
      }, [r, h, f]),
      b.jsx(sc.ItemSlot, {
        scope: n,
        id: l,
        focusable: r,
        active: o,
        children: b.jsx(ze.span, {
          tabIndex: c ? 0 : -1,
          'data-orientation': u.orientation,
          ...i,
          ref: t,
          onMouseDown: _e(e.onMouseDown, (v) => {
            r ? u.onItemFocus(l) : v.preventDefault();
          }),
          onFocus: _e(e.onFocus, () => u.onItemFocus(l)),
          onKeyDown: _e(e.onKeyDown, (v) => {
            if (v.key === 'Tab' && v.shiftKey) {
              u.onItemShiftTab();
              return;
            }
            if (v.target !== v.currentTarget) return;
            const y = wb(v, u.orientation, u.dir);
            if (y !== void 0) {
              if (v.metaKey || v.ctrlKey || v.altKey || v.shiftKey) return;
              v.preventDefault();
              let m = d()
                .filter((p) => p.focusable)
                .map((p) => p.ref.current);
              if (y === 'last') m.reverse();
              else if (y === 'prev' || y === 'next') {
                y === 'prev' && m.reverse();
                const p = m.indexOf(v.currentTarget);
                m = u.loop ? _b(m, p + 1) : m.slice(p + 1);
              }
              setTimeout(() => Vg(m));
            }
          }),
        }),
      })
    );
  });
zg.displayName = Fg;
var yb = {
  ArrowLeft: 'prev',
  ArrowUp: 'prev',
  ArrowRight: 'next',
  ArrowDown: 'next',
  PageUp: 'first',
  Home: 'first',
  PageDown: 'last',
  End: 'last',
};
function xb(e, t) {
  return t !== 'rtl'
    ? e
    : e === 'ArrowLeft'
      ? 'ArrowRight'
      : e === 'ArrowRight'
        ? 'ArrowLeft'
        : e;
}
function wb(e, t, n) {
  const r = xb(e.key, n);
  if (
    !(t === 'vertical' && ['ArrowLeft', 'ArrowRight'].includes(r)) &&
    !(t === 'horizontal' && ['ArrowUp', 'ArrowDown'].includes(r))
  )
    return yb[r];
}
function Vg(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (
      r === n ||
      (r.focus({ preventScroll: t }), document.activeElement !== n)
    )
      return;
}
function _b(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var kb = jg,
  Sb = zg,
  Sd = 'Tabs',
  [bb, Wb] = Ua(Sd, [Ig]),
  $g = Ig(),
  [Cb, bd] = bb(Sd),
  Bg = g.forwardRef((e, t) => {
    const {
        __scopeTabs: n,
        value: r,
        onValueChange: o,
        defaultValue: s,
        orientation: i = 'horizontal',
        dir: a,
        activationMode: l = 'automatic',
        ...u
      } = e,
      c = Dg(a),
      [d, h] = js({ prop: r, onChange: o, defaultProp: s });
    return b.jsx(Cb, {
      scope: n,
      baseId: Wa(),
      value: d,
      onValueChange: h,
      orientation: i,
      dir: c,
      activationMode: l,
      children: b.jsx(ze.div, { dir: c, 'data-orientation': i, ...u, ref: t }),
    });
  });
Bg.displayName = Sd;
var Ug = 'TabsList',
  Wg = g.forwardRef((e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e,
      s = bd(Ug, n),
      i = $g(n);
    return b.jsx(kb, {
      asChild: !0,
      ...i,
      orientation: s.orientation,
      dir: s.dir,
      loop: r,
      children: b.jsx(ze.div, {
        role: 'tablist',
        'aria-orientation': s.orientation,
        ...o,
        ref: t,
      }),
    });
  });
Wg.displayName = Ug;
var Hg = 'TabsTrigger',
  Zg = g.forwardRef((e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...s } = e,
      i = bd(Hg, n),
      a = $g(n),
      l = Kg(i.baseId, r),
      u = Qg(i.baseId, r),
      c = r === i.value;
    return b.jsx(Sb, {
      asChild: !0,
      ...a,
      focusable: !o,
      active: c,
      children: b.jsx(ze.button, {
        type: 'button',
        role: 'tab',
        'aria-selected': c,
        'aria-controls': u,
        'data-state': c ? 'active' : 'inactive',
        'data-disabled': o ? '' : void 0,
        disabled: o,
        id: l,
        ...s,
        ref: t,
        onMouseDown: _e(e.onMouseDown, (d) => {
          !o && d.button === 0 && d.ctrlKey === !1
            ? i.onValueChange(r)
            : d.preventDefault();
        }),
        onKeyDown: _e(e.onKeyDown, (d) => {
          [' ', 'Enter'].includes(d.key) && i.onValueChange(r);
        }),
        onFocus: _e(e.onFocus, () => {
          const d = i.activationMode !== 'manual';
          !c && !o && d && i.onValueChange(r);
        }),
      }),
    });
  });
Zg.displayName = Hg;
var Gg = 'TabsContent',
  Yg = g.forwardRef((e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: s, ...i } = e,
      a = bd(Gg, n),
      l = Kg(a.baseId, r),
      u = Qg(a.baseId, r),
      c = r === a.value,
      d = g.useRef(c);
    return (
      g.useEffect(() => {
        const h = requestAnimationFrame(() => (d.current = !1));
        return () => cancelAnimationFrame(h);
      }, []),
      b.jsx(bo, {
        present: o || c,
        children: ({ present: h }) =>
          b.jsx(ze.div, {
            'data-state': c ? 'active' : 'inactive',
            'data-orientation': a.orientation,
            role: 'tabpanel',
            'aria-labelledby': l,
            hidden: !h,
            id: u,
            tabIndex: 0,
            ...i,
            ref: t,
            style: { ...e.style, animationDuration: d.current ? '0s' : void 0 },
            children: h && s,
          }),
      })
    );
  });
Yg.displayName = Gg;
function Kg(e, t) {
  return `${e}-trigger-${t}`;
}
function Qg(e, t) {
  return `${e}-content-${t}`;
}
var Eb = Bg,
  Pb = Wg,
  Tb = Zg,
  Rb = Yg;
const Nb = Eb,
  Xg = R.forwardRef(({ className: e, ...t }, n) =>
    b.jsx(Pb, {
      ref: n,
      className: Ie(
        'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
        e,
      ),
      ...t,
    }),
  );
Xg.displayName = 'TabsList';
const qg = R.forwardRef(({ className: e, ...t }, n) =>
  b.jsx(Tb, {
    ref: n,
    className: Ie(
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
      e,
    ),
    ...t,
  }),
);
qg.displayName = 'TabsTrigger';
const Jg = R.forwardRef(({ className: e, ...t }, n) =>
  b.jsx(Rb, {
    ref: n,
    className: Ie(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      e,
    ),
    ...t,
  }),
);
Jg.displayName = 'TabsContent';
const Uo = {
    ALL: {
      IMAGE:
        'https://previewengine-accl.zohoexternal.com/image/WD/letco0f5069236adb4cba9e4a7036e2c22d12',
      DOTS: [
        {
          id: 1,
          name: 'Roda Frente Esquerda',
          x: 34,
          y: 212,
          status: !1,
          type: 'single',
        },
        {
          id: 2,
          name: 'Guarda-Lamas Esquerdo',
          x: 71,
          y: 217,
          status: !1,
          type: 'single',
        },
        {
          id: 3,
          name: 'Porta Dianteira Esquerda',
          x: 52,
          y: 284,
          status: !1,
          type: 'single',
        },
        {
          id: 4,
          name: 'Porta Traseira Esquerda',
          x: 52,
          y: 347,
          status: !1,
          type: 'single',
        },
        {
          id: 5,
          name: 'Roda Traseira Esquerda',
          x: 34,
          y: 401,
          status: !1,
          type: 'single',
        },
        {
          id: 6,
          name: 'Painel de Trás Esquerdo',
          x: 82,
          y: 407,
          status: !1,
          type: 'single',
        },
        {
          id: 7,
          name: 'Pára-choques Traseiro',
          x: 197,
          y: 540,
          status: !1,
          type: 'single',
        },
        {
          id: 8,
          name: 'Painel de Trás Direito',
          x: 312,
          y: 397,
          status: !1,
          type: 'single',
        },
        {
          id: 9,
          name: 'Roda Traseira Direita',
          x: 355,
          y: 391,
          status: !1,
          type: 'single',
        },
        {
          id: 10,
          name: 'Porta Traseira Direita',
          x: 327,
          y: 332,
          status: !1,
          type: 'single',
        },
        {
          id: 11,
          name: 'Porta Dianteira Direita',
          x: 333,
          y: 267,
          status: !1,
          type: 'single',
        },
        {
          id: 12,
          name: 'Guarda-Lamas Direito',
          x: 313,
          y: 206,
          status: !1,
          type: 'single',
        },
        {
          id: 13,
          name: 'Roda Dianteira Direita',
          x: 355,
          y: 202,
          status: !1,
          type: 'single',
        },
        {
          id: 14,
          name: 'Pára-choques Dianteiro',
          x: 194,
          y: 47,
          status: !1,
          type: 'single',
        },
        { id: 15, name: 'Capô', x: 194, y: 180, status: !1, type: 'single' },
        {
          id: 16,
          name: 'Tejadilho',
          x: 194,
          y: 243,
          status: !1,
          type: 'single',
        },
        {
          id: 22,
          name: 'Tampa da Mala',
          x: 197,
          y: 404,
          status: !1,
          type: 'single',
        },
        {
          id: 23,
          name: 'Tampa da Mala',
          x: 197,
          y: 442,
          status: !1,
          type: 'single',
        },
      ],
    },
    GLASS: {
      IMAGE:
        'https://previewengine-accl.zohoexternal.com/image/WD/letco0f5069236adb4cba9e4a7036e2c22d12',
      DOTS: [
        {
          id: 1,
          x: 195,
          y: 242,
          status: !1,
          name: 'Parabrisa',
          type: 'multi',
          options: [
            { label: 'Estalado', value: 'Estalado' },
            { label: 'Picado', value: 'Picado' },
            { label: 'Partido', value: 'Partido' },
          ],
        },
        {
          id: 2,
          x: 143,
          y: 279,
          status: !1,
          name: 'Vidro Lateral Frente Esquerdo',
          type: 'multi',
          options: [
            { label: 'Estalado', value: 'Estalado' },
            { label: 'Picado', value: 'Picado' },
            { label: 'Partido', value: 'Partido' },
          ],
        },
        {
          id: 3,
          x: 247,
          y: 280,
          status: !1,
          name: 'Vidro Lateral Frente Direito',
          type: 'multi',
          options: [
            { label: 'Estalado', value: 'Estalado' },
            { label: 'Picado', value: 'Picado' },
            { label: 'Partido', value: 'Partido' },
          ],
        },
        {
          id: 4,
          x: 143,
          y: 333,
          status: !1,
          name: 'Vidro Lateral Trás Esquerdo',
          type: 'multi',
          options: [
            { label: 'Estalado', value: 'Estalado' },
            { label: 'Picado', value: 'Picado' },
            { label: 'Partido', value: 'Partido' },
          ],
        },
        {
          id: 5,
          x: 247,
          y: 333,
          status: !1,
          name: 'Vidro Lateral Trás Direito',
          type: 'multi',
          options: [
            { label: 'Estalado', value: 'Estalado' },
            { label: 'Picado', value: 'Picado' },
            { label: 'Partido', value: 'Partido' },
          ],
        },
        {
          id: 6,
          x: 195,
          y: 380,
          status: !1,
          name: 'Óculo',
          type: 'multi',
          options: [
            { label: 'Estalado', value: 'Estalado' },
            { label: 'Picado', value: 'Picado' },
            { label: 'Partido', value: 'Partido' },
          ],
        },
      ],
    },
    TESTE1: {
      IMAGE:
        'https://previewengine-accl.zohoexternal.com/image/WD/letco0f5069236adb4cba9e4a7036e2c22d12',
      DOTS: [
        {
          id: 1,
          name: 'Roda Frente Esquerda',
          x: 34,
          y: 212,
          status: !1,
          type: 'multi',
          options: [
            { label: 'Mossa', value: 'Mossa' },
            { label: 'Risco', value: 'Risco' },
            { label: 'Outros Danos', value: 'Outros Danos' },
          ],
        },
        {
          id: 2,
          name: 'Guarda-Lamas Esquerdo',
          x: 71,
          y: 217,
          status: !1,
          type: 'multi',
          options: [
            { label: 'Mossa', value: 'Mossa' },
            { label: 'Risco', value: 'Risco' },
            { label: 'Outros Danos', value: 'Outros Danos' },
          ],
        },
        {
          id: 3,
          name: 'Porta Dianteira Esquerda',
          x: 52,
          y: 284,
          status: !1,
          type: 'multi',
          options: [
            { label: 'Mossa', value: 'Mossa' },
            { label: 'Risco', value: 'Risco' },
            { label: 'Outros Danos', value: 'Outros Danos' },
          ],
        },
        {
          id: 4,
          name: 'Porta Traseira Esquerda',
          x: 52,
          y: 347,
          status: !1,
          type: 'multi',
          options: [
            { label: 'Mossa', value: 'Mossa' },
            { label: 'Risco', value: 'Risco' },
            { label: 'Outros Danos', value: 'Outros Danos' },
          ],
        },
        {
          id: 5,
          name: 'Roda Traseira Esquerda',
          x: 34,
          y: 401,
          status: !1,
          type: 'multi',
          options: [
            { label: 'Mossa', value: 'Mossa' },
            { label: 'Risco', value: 'Risco' },
            { label: 'Outros Danos', value: 'Outros Danos' },
          ],
        },
        {
          id: 6,
          name: 'Painel de Trás Esquerdo',
          x: 82,
          y: 407,
          status: !1,
          type: 'multi',
          options: [
            { label: 'Mossa', value: 'Mossa' },
            { label: 'Risco', value: 'Risco' },
            { label: 'Outros Danos', value: 'Outros Danos' },
          ],
        },
        {
          id: 7,
          name: 'Pára-choques Traseiro',
          x: 197,
          y: 540,
          status: !1,
          type: 'multi',
          options: [
            { label: 'Mossa', value: 'Mossa' },
            { label: 'Risco', value: 'Risco' },
            { label: 'Outros Danos', value: 'Outros Danos' },
          ],
        },
        {
          id: 8,
          name: 'Painel de Trás Direito',
          x: 312,
          y: 397,
          status: !1,
          type: 'multi',
          options: [
            { label: 'Mossa', value: 'Mossa' },
            { label: 'Risco', value: 'Risco' },
            { label: 'Outros Danos', value: 'Outros Danos' },
          ],
        },
        {
          id: 9,
          name: 'Roda Traseira Direita',
          x: 355,
          y: 391,
          status: !1,
          type: 'multi',
          options: [
            { label: 'Mossa', value: 'Mossa' },
            { label: 'Risco', value: 'Risco' },
            { label: 'Outros Danos', value: 'Outros Danos' },
          ],
        },
        {
          id: 10,
          name: 'Porta Traseira Direita',
          x: 327,
          y: 332,
          status: !1,
          type: 'multi',
          options: [
            { label: 'Mossa', value: 'Mossa' },
            { label: 'Risco', value: 'Risco' },
            { label: 'Outros Danos', value: 'Outros Danos' },
          ],
        },
        {
          id: 11,
          name: 'Porta Dianteira Direita',
          x: 333,
          y: 267,
          status: !1,
          type: 'multi',
          options: [
            { label: 'Mossa', value: 'Mossa' },
            { label: 'Risco', value: 'Risco' },
            { label: 'Outros Danos', value: 'Outros Danos' },
          ],
        },
        {
          id: 12,
          name: 'Guarda-Lamas Direito',
          x: 313,
          y: 206,
          status: !1,
          type: 'multi',
          options: [
            { label: 'Mossa', value: 'Mossa' },
            { label: 'Risco', value: 'Risco' },
            { label: 'Outros Danos', value: 'Outros Danos' },
          ],
        },
        {
          id: 13,
          name: 'Roda Dianteira Direita',
          x: 355,
          y: 202,
          status: !1,
          type: 'multi',
          options: [
            { label: 'Mossa', value: 'Mossa' },
            { label: 'Risco', value: 'Risco' },
            { label: 'Outros Danos', value: 'Outros Danos' },
          ],
        },
        {
          id: 14,
          name: 'Pára-choques Dianteiro',
          x: 194,
          y: 47,
          status: !1,
          type: 'multi',
          options: [
            { label: 'Mossa', value: 'Mossa' },
            { label: 'Risco', value: 'Risco' },
            { label: 'Outros Danos', value: 'Outros Danos' },
          ],
        },
        {
          id: 15,
          name: 'Capô',
          x: 194,
          y: 180,
          status: !1,
          type: 'multi',
          options: [
            { label: 'Mossa', value: 'Mossa' },
            { label: 'Risco', value: 'Risco' },
            { label: 'Outros Danos', value: 'Outros Danos' },
          ],
        },
        {
          id: 16,
          name: 'Tejadilho',
          x: 194,
          y: 243,
          status: !1,
          type: 'multi',
          options: [
            { label: 'Mossa', value: 'Mossa' },
            { label: 'Risco', value: 'Risco' },
            { label: 'Outros Danos', value: 'Outros Danos' },
          ],
        },
        {
          id: 22,
          name: 'Tampa da Mala',
          x: 197,
          y: 404,
          status: !1,
          type: 'multi',
          options: [
            { label: 'Mossa', value: 'Mossa' },
            { label: 'Risco', value: 'Risco' },
            { label: 'Outros Danos', value: 'Outros Danos' },
          ],
        },
        {
          id: 23,
          name: 'Tampa da Mala',
          x: 197,
          y: 442,
          status: !1,
          type: 'multi',
          options: [
            { label: 'Mossa', value: 'Mossa' },
            { label: 'Risco', value: 'Risco' },
            { label: 'Outros Danos', value: 'Outros Danos' },
          ],
        },
      ],
    },
  },
  Ri = [
    { id: 'mossa', label: 'Mossa', CONFIG_MAP: Uo.ALL },
    { id: 'risco', label: 'Risco', CONFIG_MAP: Uo.ALL },
    { id: 'outros_danos', label: 'Outros Danos', CONFIG_MAP: Uo.ALL },
    {
      id: 'outros_danos2',
      label: 'Mossa/Risco/Outros Danos',
      CONFIG_MAP: Uo.TESTE1,
    },
    { id: 'estalado', label: 'Estalado/Picado/Partido', CONFIG_MAP: Uo.GLASS },
  ],
  Ob = ({ form: e }) => {
    const t = (r, o) => {
        const s = o.value === void 0 ? o.id : void 0,
          i = e.getValues('dots'),
          l = (i[r] || []).map((u) =>
            u.id === o.id ? { ...u, status: !u.status, value: s } : u,
          );
        e.setValue('dots', { ...i, [r]: l });
      },
      n = (r, o, s) => {
        const i = e.getValues('dots'),
          l = (i[o] || []).map((u) => {
            var c;
            return u.id === s.id
              ? {
                  ...u,
                  value: u.value
                    ? u.value.includes(r)
                      ? u.value.filter((d) => d !== r)
                      : [...u.value, r]
                    : [r],
                  status: !!(
                    (c = u.value
                      ? u.value.includes(r)
                        ? u.value.filter((d) => d !== r)
                        : [...u.value, r]
                      : [r]) != null && c.length
                  ),
                }
              : u;
          });
        console.log(l), e.setValue('dots', { ...i, [o]: l });
      };
    return b.jsx(eb, {
      label: 'Estado da Viatura',
      children: b.jsx(nb, {
        control: e.control,
        name: 'dots',
        render: ({ field: r }) =>
          b.jsx(Ag, {
            children: b.jsx(Mg, {
              children: b.jsxs(Nb, {
                defaultValue: Ri[0].id,
                children: [
                  b.jsx(Xg, {
                    children: Ri.map((o) =>
                      b.jsx(qg, { value: o.id, children: o.label }, o.id),
                    ),
                  }),
                  b.jsx('div', {
                    className: 'border rounded-lg flex justify-center mt-2',
                    children: Ri.map((o) => {
                      var s, i;
                      return b.jsx(
                        Jg,
                        {
                          value: o.id,
                          children: b.jsxs('div', {
                            className:
                              'relative flex items-center justify-center min-w-[380px] w-[380px]',
                            children: [
                              b.jsx('img', {
                                className:
                                  'min-w-[380px] w-[380px] select-none pointer-events-none',
                                src: o.CONFIG_MAP.IMAGE,
                                alt: o.label,
                              }),
                              (i = (s = r.value) == null ? void 0 : s[o.id]) ==
                              null
                                ? void 0
                                : i.map((a) =>
                                    b.jsx(
                                      JS,
                                      {
                                        dot: a,
                                        onToggle: () => t(o.id, a),
                                        onSelect: (l) => n(l, o.id, a),
                                      },
                                      a.id,
                                    ),
                                  ),
                            ],
                          }),
                        },
                        o.id,
                      );
                    }),
                  }),
                ],
              }),
            }),
          }),
      }),
    });
  },
  ey = g.forwardRef(({ className: e, ...t }, n) =>
    b.jsx('div', {
      ref: n,
      className: Ie(
        'rounded-lg border border-muted-foreground/35 bg-muted text-card-foreground shadow-sm dark:bg-muted/40',
        e,
      ),
      ...t,
    }),
  );
ey.displayName = 'Card';
const Ab = g.forwardRef(({ className: e, ...t }, n) =>
  b.jsx('div', {
    ref: n,
    className: Ie('flex flex-col space-y-1.5 p-6', e),
    ...t,
  }),
);
Ab.displayName = 'CardHeader';
const ty = g.forwardRef(({ className: e, ...t }, n) =>
  b.jsx('h3', {
    ref: n,
    className: Ie('text-2xl font-semibold leading-none tracking-tight', e),
    ...t,
  }),
);
ty.displayName = 'CardTitle';
const ny = g.forwardRef(({ className: e, ...t }, n) =>
  b.jsx('p', {
    ref: n,
    className: Ie('text-sm text-muted-foreground', e),
    ...t,
  }),
);
ny.displayName = 'CardDescription';
const Mb = g.forwardRef(({ className: e, ...t }, n) =>
  b.jsx('div', { ref: n, className: Ie('p-6 pt-0', e), ...t }),
);
Mb.displayName = 'CardContent';
const Db = g.forwardRef(({ className: e, ...t }, n) =>
  b.jsx('div', {
    ref: n,
    className: Ie('flex items-center p-6 pt-0', e),
    ...t,
  }),
);
Db.displayName = 'CardFooter';
function Lb({
  title: e,
  description: t,
  icon: n = aw,
  action: r,
  className: o,
  ...s
}) {
  return b.jsxs(ey, {
    className: Ie(
      'flex w-full flex-col items-center justify-center space-y-3 bg-secondary p-16',
      o,
    ),
    ...s,
    children: [
      b.jsx('div', {
        className: 'mr-4 shrink-0 rounded-full p-4',
        children: b.jsx(n, {
          className: 'size-8 text-muted-foreground',
          'aria-hidden': 'true',
        }),
      }),
      b.jsxs('div', {
        className: 'flex flex-col items-center gap-1.5 text-center',
        children: [
          b.jsx(ty, { children: e }),
          t ? b.jsx(ny, { children: t }) : null,
        ],
      }),
      r || null,
    ],
  });
}
const bp = (e) => (typeof e == 'boolean' ? `${e}` : e === 0 ? '0' : e),
  Cp = dv,
  Ib = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Cp(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: o, defaultVariants: s } = t,
      i = Object.keys(o).map((u) => {
        const c = n == null ? void 0 : n[u],
          d = s == null ? void 0 : s[u];
        if (c === null) return null;
        const h = bp(c) || bp(d);
        return o[u][h];
      }),
      a =
        n &&
        Object.entries(n).reduce((u, c) => {
          let [d, h] = c;
          return h === void 0 || (u[d] = h), u;
        }, {}),
      l =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, c) => {
              let { class: d, className: h, ...f } = c;
              return Object.entries(f).every((v) => {
                let [y, k] = v;
                return Array.isArray(k)
                  ? k.includes({ ...s, ...a }[y])
                  : { ...s, ...a }[y] === k;
              })
                ? [...u, d, h]
                : u;
            }, []);
    return Cp(
      e,
      i,
      l,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className,
    );
  },
  jb = Ib(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    {
      variants: {
        variant: {
          default: 'bg-primary text-primary-foreground hover:bg-primary/90',
          destructive:
            'bg-destructive text-destructive-foreground hover:bg-destructive/90',
          outline:
            'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
          secondary:
            'bg-secondary text-secondary-foreground hover:bg-secondary/80',
          ghost: 'hover:bg-accent hover:text-accent-foreground',
          link: 'text-primary underline-offset-4 hover:underline',
        },
        size: {
          default: 'h-10 px-4 py-2',
          sm: 'h-9 rounded-md px-3',
          lg: 'h-11 rounded-md px-8',
          icon: 'h-10 w-10',
        },
      },
      defaultVariants: { variant: 'default', size: 'default' },
    },
  ),
  ry = g.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, s) => {
      const i = r ? br : 'button';
      return b.jsx(i, {
        className: Ie(jb({ variant: t, size: n, className: e })),
        ref: s,
        ...o,
      });
    },
  );
ry.displayName = 'Button';
const Fb = Dl({
  dots: qw(
    Jf(
      Dl({
        id: ii(),
        value: Xw(),
        status: Qw(),
        x: qf(),
        y: qf(),
        type: ii(),
        options: Jf(Dl({ value: ii(), label: ii() })).optional(),
      }),
    ).optional(),
  ),
});
function zb() {
  const { isLoading: e } = uv(),
    t = ZOHO.CREATOR.UTIL.getQueryParams(),
    n = t == null ? void 0 : t.temporaryId,
    r = qx({
      mode: 'onSubmit',
      resolver: nw(Fb),
      defaultValues: {
        dots: Ri.reduce(
          (s, i) => ((s[i.id] = i.CONFIG_MAP.DOTS.map((a) => a)), s),
          {},
        ),
      },
    }),
    o = (s) => {
      console.log('===================================='),
        console.log('====================================');
    };
  return b.jsx(e1, {
    children: e
      ? b.jsx(t1, { msg: 'A carregar Widget' })
      : n
        ? b.jsx(tb, {
            ...r,
            children: b.jsxs('form', {
              onSubmit: r.handleSubmit(o),
              className: 'space-y-20',
              children: [
                b.jsx(Ob, { form: r }),
                b.jsx(ry, { type: 'submit', children: 'Submit' }),
              ],
            }),
          })
        : b.jsx(b.Fragment, {
            children: b.jsx(Lb, {
              icon: uw,
              title: 'Parâmetro Necessário',
              description:
                "Falta o parâmetro 'temporaryId' para continuar. Verifique os parâmetros fornecidos na URL e tente novamente.",
            }),
          }),
  });
}
ZOHO.CREATOR.init()
  .then(function (e) {
    uv.setState(() => ({ isLoading: !1 }));
  })
  .catch((e) => {
    console.log({ err: e });
  });
Zl.createRoot(document.getElementById('root')).render(
  b.jsx(R.StrictMode, { children: b.jsx(zb, {}) }),
);
