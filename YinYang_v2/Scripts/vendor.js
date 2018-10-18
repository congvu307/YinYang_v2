! function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = "length" in e && e.length,
            n = J.type(e);
        return "function" !== n && !J.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }

    function i(e, t, n) {
        if (J.isFunction(t)) return J.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return J.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (se.test(t)) return J.filter(t, e, n);
            t = J.filter(t, e)
        }
        return J.grep(e, function (e) {
            return _.call(t, e) >= 0 !== n
        })
    }

    function o(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function r(e) {
        var t = pe[e] = {};
        return J.each(e.match(de) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function s() {
        K.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1), J.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = J.expando + a.uid++
    }

    function l(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(ye, "-$1").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : me.test(n) ? J.parseJSON(n) : n)
                } catch (e) { }
                ge.set(e, t, n)
            } else n = void 0;
        return n
    }

    function c() {
        return !0
    }

    function u() {
        return !1
    }

    function d() {
        try {
            return K.activeElement
        } catch (e) { }
    }

    function p(e, t) {
        return J.nodeName(e, "table") && J.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function f(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function h(e) {
        var t = Ne.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function v(e, t) {
        for (var n = 0, i = e.length; n < i; n++) ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
    }

    function g(e, t) {
        var n, i, o, r, s, a, l, c;
        if (1 === t.nodeType) {
            if (ve.hasData(e) && (r = ve.access(e), s = ve.set(t, r), c = r.events)) {
                delete s.handle, s.events = {};
                for (o in c)
                    for (n = 0, i = c[o].length; n < i; n++) J.event.add(t, o, c[o][n])
            }
            ge.hasData(e) && (a = ge.access(e), l = J.extend({}, a), ge.set(t, l))
        }
    }

    function m(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && J.nodeName(e, t) ? J.merge([e], n) : n
    }

    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ke.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function w(t, n) {
        var i, o = J(n.createElement(t)).appendTo(n.body),
            r = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(o[0])) ? i.display : J.css(o[0], "display");
        return o.detach(), r
    }

    function b(e) {
        var t = K,
            n = Ie[e];
        return n || (n = w(e, t), "none" !== n && n || (Pe = (Pe || J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Pe[0].contentDocument, t.write(), t.close(), n = w(e, t), Pe.detach()), Ie[e] = n), n
    }

    function x(e, t, n) {
        var i, o, r, s, a = e.style;
        return n = n || Re(e), n && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || J.contains(e.ownerDocument, e) || (s = J.style(e, t)), ze.test(s) && qe.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
    }

    function k(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function S(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), i = t, o = _e.length; o--;)
            if ((t = _e[o] + n) in e) return t;
        return i
    }

    function T(e, t, n) {
        var i = We.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function C(e, t, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; r < 4; r += 2) "margin" === n && (s += J.css(e, n + be[r], !0, o)), i ? ("content" === n && (s -= J.css(e, "padding" + be[r], !0, o)), "margin" !== n && (s -= J.css(e, "border" + be[r] + "Width", !0, o))) : (s += J.css(e, "padding" + be[r], !0, o), "padding" !== n && (s += J.css(e, "border" + be[r] + "Width", !0, o)));
        return s
    }

    function $(e, t, n) {
        var i = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = Re(e),
            s = "border-box" === J.css(e, "boxSizing", !1, r);
        if (o <= 0 || null == o) {
            if (o = x(e, t, r), (o < 0 || null == o) && (o = e.style[t]), ze.test(o)) return o;
            i = s && (G.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + C(e, t, n || (s ? "border" : "content"), i, r) + "px"
    }

    function E(e, t) {
        for (var n, i, o, r = [], s = 0, a = e.length; s < a; s++) i = e[s], i.style && (r[s] = ve.get(i, "olddisplay"), n = i.style.display, t ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && xe(i) && (r[s] = ve.access(i, "olddisplay", b(i.nodeName)))) : (o = xe(i), "none" === n && o || ve.set(i, "olddisplay", o ? n : J.css(i, "display"))));
        for (s = 0; s < a; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[s] || "" : "none"));
        return e
    }

    function A(e, t, n, i, o) {
        return new A.prototype.init(e, t, n, i, o)
    }

    function L() {
        return setTimeout(function () {
            Ve = void 0
        }), Ve = J.now()
    }

    function O(e, t) {
        var n, i = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) n = be[i], o["margin" + n] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function M(e, t, n) {
        for (var i, o = (Ze[t] || []).concat(Ze["*"]), r = 0, s = o.length; r < s; r++)
            if (i = o[r].call(n, t, e)) return i
    }

    function j(e, t, n) {
        var i, o, r, s, a, l, c, u = this,
            d = {},
            p = e.style,
            f = e.nodeType && xe(e),
            h = ve.get(e, "fxshow");
        n.queue || (a = J._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
            a.unqueued || l()
        }), a.unqueued++ , u.always(function () {
            u.always(function () {
                a.unqueued-- , J.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = J.css(e, "display"), "inline" === ("none" === c ? ve.get(e, "olddisplay") || b(e.nodeName) : c) && "none" === J.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", u.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (o = t[i], Qe.exec(o)) {
                if (delete t[i], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
                    if ("show" !== o || !h || void 0 === h[i]) continue;
                    f = !0
                }
                d[i] = h && h[i] || J.style(e, i)
            } else c = void 0;
        if (J.isEmptyObject(d)) "inline" === ("none" === c ? b(e.nodeName) : c) && (p.display = c);
        else {
            h ? "hidden" in h && (f = h.hidden) : h = ve.access(e, "fxshow", {}), r && (h.hidden = !f), f ? J(e).show() : u.done(function () {
                J(e).hide()
            }), u.done(function () {
                var t;
                ve.remove(e, "fxshow");
                for (t in d) J.style(e, t, d[t])
            });
            for (i in d) s = M(f ? h[i] : 0, i, u), i in h || (h[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function N(e, t) {
        var n, i, o, r, s;
        for (n in e)
            if (i = J.camelCase(n), o = t[i], r = e[n], J.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = J.cssHooks[i]) && "expand" in s) {
                r = s.expand(r), delete e[i];
                for (n in r) n in e || (e[n] = r[n], t[n] = o)
            } else t[i] = o
    }

    function D(e, t, n) {
        var i, o, r = 0,
            s = Je.length,
            a = J.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (o) return !1;
                for (var t = Ve || L(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, s = 0, l = c.tweens.length; s < l; s++) c.tweens[s].run(r);
                return a.notifyWith(e, [c, r, n]), r < 1 && l ? n : (a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: J.extend({}, t),
                opts: J.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ve || L(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = J.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < i; n++) c.tweens[n].run(1);
                    return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (N(u, c.opts.specialEasing); r < s; r++)
            if (i = Je[r].call(c, e, u, c.opts)) return i;
        return J.map(u, M, c), J.isFunction(c.opts.start) && c.opts.start.call(e, c), J.fx.timer(J.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function H(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0,
                r = t.toLowerCase().match(de) || [];
            if (J.isFunction(n))
                for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function P(e, t, n, i) {
        function o(a) {
            var l;
            return r[a] = !0, J.each(e[a] || [], function (e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        var r = {},
            s = e === vt;
        return o(t.dataTypes[0]) || !r["*"] && o("*")
    }

    function I(e, t) {
        var n, i, o = J.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && J.extend(!0, e, i), e
    }

    function q(e, t, n) {
        for (var i, o, r, s, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (o in a)
                if (a[o] && a[o].test(i)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in n) r = l[0];
        else {
            for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                s || (s = o)
            }
            r = r || s
        }
        if (r) return r !== l[0] && l.unshift(r), n[r]
    }

    function z(e, t, n, i) {
        var o, r, s, a, l, c = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
        for (r = u.shift(); r;)
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
                    if (!(s = c[l + " " + r] || c["* " + r]))
                        for (o in c)
                            if (a = o.split(" "), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                                break
                            }
                    if (!0 !== s)
                        if (s && e.throws) t = s(t);
                        else try {
                            t = s(t)
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: s ? e : "No conversion from " + l + " to " + r
                            }
                        }
                }
        return {
            state: "success",
            data: t
        }
    }

    function R(e, t, n, i) {
        var o;
        if (J.isArray(t)) J.each(t, function (t, o) {
            n || bt.test(e) ? i(e, o) : R(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i)
        });
        else if (n || "object" !== J.type(t)) i(e, t);
        else
            for (o in t) R(e + "[" + o + "]", t[o], n, i)
    }

    function F(e) {
        return J.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var W = [],
        B = W.slice,
        U = W.concat,
        X = W.push,
        _ = W.indexOf,
        V = {},
        Y = V.toString,
        Q = V.hasOwnProperty,
        G = {},
        K = e.document,
        J = function (e, t) {
            return new J.fn.init(e, t)
        },
        Z = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ee = /^-ms-/,
        te = /-([\da-z])/gi,
        ne = function (e, t) {
            return t.toUpperCase()
        };
    J.fn = J.prototype = {
        jquery: "2.1.4",
        constructor: J,
        selector: "",
        length: 0,
        toArray: function () {
            return B.call(this)
        },
        get: function (e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : B.call(this)
        },
        pushStack: function (e) {
            var t = J.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return J.each(this, e, t)
        },
        map: function (e) {
            return this.pushStack(J.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(B.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: X,
        sort: W.sort,
        splice: W.splice
    }, J.extend = J.fn.extend = function () {
        var e, t, n, i, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || J.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], i = e[t], s !== i && (c && i && (J.isPlainObject(i) || (o = J.isArray(i))) ? (o ? (o = !1, r = n && J.isArray(n) ? n : []) : r = n && J.isPlainObject(n) ? n : {}, s[t] = J.extend(c, r, i)) : void 0 !== i && (s[t] = i));
        return s
    }, J.extend({
        expando: "jQuery" + ("2.1.4" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () { },
        isFunction: function (e) {
            return "function" === J.type(e)
        },
        isArray: Array.isArray,
        isWindow: function (e) {
            return null != e && e === e.window
        },
        isNumeric: function (e) {
            return !J.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function (e) {
            return "object" === J.type(e) && !e.nodeType && !J.isWindow(e) && !(e.constructor && !Q.call(e.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[Y.call(e)] || "object" : typeof e
        },
        globalEval: function (e) {
            var t, n = eval;
            (e = J.trim(e)) && (1 === e.indexOf("use strict") ? (t = K.createElement("script"), t.text = e, K.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function (e) {
            return e.replace(ee, "ms-").replace(te, ne)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, i) {
            var o = 0,
                r = e.length,
                s = n(e);
            if (i) {
                if (s)
                    for (; o < r && !1 !== t.apply(e[o], i); o++);
                else
                    for (o in e)
                        if (!1 === t.apply(e[o], i)) break
            } else if (s)
                for (; o < r && !1 !== t.call(e[o], o, e[o]); o++);
            else
                for (o in e)
                    if (!1 === t.call(e[o], o, e[o])) break; return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(Z, "")
        },
        makeArray: function (e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? J.merge(i, "string" == typeof e ? [e] : e) : X.call(i, e)), i
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : _.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
            return e.length = o, e
        },
        grep: function (e, t, n) {
            for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) !== s && i.push(e[o]);
            return i
        },
        map: function (e, t, i) {
            var o, r = 0,
                s = e.length,
                a = n(e),
                l = [];
            if (a)
                for (; r < s; r++) null != (o = t(e[r], r, i)) && l.push(o);
            else
                for (r in e) null != (o = t(e[r], r, i)) && l.push(o);
            return U.apply([], l)
        },
        guid: 1,
        proxy: function (e, t) {
            var n, i, o;
            if ("string" == typeof t && (n = e[t], t = e, e = n), J.isFunction(e)) return i = B.call(arguments, 2), o = function () {
                return e.apply(t || this, i.concat(B.call(arguments)))
            }, o.guid = e.guid = e.guid || J.guid++ , o
        },
        now: Date.now,
        support: G
    }), J.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        V["[object " + t + "]"] = t.toLowerCase()
    });
    var ie = function (e) {
        function t(e, t, n, i) {
            var o, r, s, a, c, d, p, f, h, v;
            if ((t ? t.ownerDocument || t : q) !== O && L(t), t = t || O, n = n || [], a = t.nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a) return n;
            if (!i && j) {
                if (11 !== a && (o = ge.exec(e)))
                    if (s = o[1]) {
                        if (9 === a) {
                            if (!(r = t.getElementById(s)) || !r.parentNode) return n;
                            if (r.id === s) return n.push(r), n
                        } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(s)) && P(t, r) && r.id === s) return n.push(r), n
                    } else {
                        if (o[2]) return G.apply(n, t.getElementsByTagName(e)), n;
                        if ((s = o[3]) && w.getElementsByClassName) return G.apply(n, t.getElementsByClassName(s)), n
                    }
                if (w.qsa && (!N || !N.test(e))) {
                    if (f = p = I, h = t, v = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (d = S(e), (p = t.getAttribute("id")) ? f = p.replace(ye, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", c = d.length; c--;) d[c] = f + u(d[c]);
                        h = me.test(e) && l(t.parentNode) || t, v = d.join(",")
                    }
                    if (v) try {
                        return G.apply(n, h.querySelectorAll(v)), n
                    } catch (e) { } finally {
                            p || t.removeAttribute("id")
                        }
                }
            }
            return C(e.replace(se, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > b.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[I] = !0, e
        }

        function o(e) {
            var t = O.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function r(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) b.attrHandle[n[i]] = t
        }

        function s(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return i(function (t) {
                return t = +t, i(function (n, i) {
                    for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function l(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function c() { }

        function u(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function d(e, t, n) {
            var i = t.dir,
                o = n && "parentNode" === i,
                r = R++;
            return t.first ? function (t, n, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || o) return e(t, n, r)
            } : function (t, n, s) {
                var a, l, c = [z, r];
                if (s) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || o) {
                            if (l = t[I] || (t[I] = {}), (a = l[i]) && a[0] === z && a[1] === r) return c[2] = a[2];
                            if (l[i] = c, c[2] = e(t, n, s)) return !0
                        }
            }
        }

        function p(e) {
            return e.length > 1 ? function (t, n, i) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function f(e, n, i) {
            for (var o = 0, r = n.length; o < r; o++) t(e, n[o], i);
            return i
        }

        function h(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
            return s
        }

        function v(e, t, n, o, r, s) {
            return o && !o[I] && (o = v(o)), r && !r[I] && (r = v(r, s)), i(function (i, s, a, l) {
                var c, u, d, p = [],
                    v = [],
                    g = s.length,
                    m = i || f(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !i && t ? m : h(m, p, e, a, l),
                    w = n ? r || (i ? e : g || o) ? [] : s : y;
                if (n && n(y, w, a, l), o)
                    for (c = h(w, v), o(c, [], a, l), u = c.length; u--;)(d = c[u]) && (w[v[u]] = !(y[v[u]] = d));
                if (i) {
                    if (r || e) {
                        if (r) {
                            for (c = [], u = w.length; u--;)(d = w[u]) && c.push(y[u] = d);
                            r(null, w = [], c, l)
                        }
                        for (u = w.length; u--;)(d = w[u]) && (c = r ? J(i, d) : p[u]) > -1 && (i[c] = !(s[c] = d))
                    }
                } else w = h(w === s ? w.splice(g, w.length) : w), r ? r(null, s, w, l) : G.apply(s, w)
            })
        }

        function g(e) {
            for (var t, n, i, o = e.length, r = b.relative[e[0].type], s = r || b.relative[" "], a = r ? 1 : 0, l = d(function (e) {
                return e === t
            }, s, !0), c = d(function (e) {
                return J(t, e) > -1
            }, s, !0), f = [function (e, n, i) {
                var o = !r && (i || n !== $) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                return t = null, o
            }]; a < o; a++)
                if (n = b.relative[e[a].type]) f = [d(p(f), n)];
                else {
                    if (n = b.filter[e[a].type].apply(null, e[a].matches), n[I]) {
                        for (i = ++a; i < o && !b.relative[e[i].type]; i++);
                        return v(a > 1 && p(f), a > 1 && u(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(se, "$1"), n, a < i && g(e.slice(a, i)), i < o && g(e = e.slice(i)), i < o && u(e))
                    }
                    f.push(n)
                }
            return p(f)
        }

        function m(e, n) {
            var o = n.length > 0,
                r = e.length > 0,
                s = function (i, s, a, l, c) {
                    var u, d, p, f = 0,
                        v = "0",
                        g = i && [],
                        m = [],
                        y = $,
                        w = i || r && b.find.TAG("*", c),
                        x = z += null == y ? 1 : Math.random() || .1,
                        k = w.length;
                    for (c && ($ = s !== O && s); v !== k && null != (u = w[v]); v++) {
                        if (r && u) {
                            for (d = 0; p = e[d++];)
                                if (p(u, s, a)) {
                                    l.push(u);
                                    break
                                }
                            c && (z = x)
                        }
                        o && ((u = !p && u) && f-- , i && g.push(u))
                    }
                    if (f += v, o && v !== f) {
                        for (d = 0; p = n[d++];) p(g, m, s, a);
                        if (i) {
                            if (f > 0)
                                for (; v--;) g[v] || m[v] || (m[v] = Y.call(l));
                            m = h(m)
                        }
                        G.apply(l, m), c && !i && m.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                    }
                    return c && (z = x, $ = y), g
                };
            return o ? i(s) : s
        }
        var y, w, b, x, k, S, T, C, $, E, A, L, O, M, j, N, D, H, P, I = "sizzle" + 1 * new Date,
            q = e.document,
            z = 0,
            R = 0,
            F = n(),
            W = n(),
            B = n(),
            U = function (e, t) {
                return e === t && (A = !0), 0
            },
            X = 1 << 31,
            _ = {}.hasOwnProperty,
            V = [],
            Y = V.pop,
            Q = V.push,
            G = V.push,
            K = V.slice,
            J = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]",
            te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ne = te.replace("w", "w#"),
            ie = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + ee + "*\\]",
            oe = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
            re = new RegExp(ee + "+", "g"),
            se = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            ae = new RegExp("^" + ee + "*," + ee + "*"),
            le = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            ce = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
            ue = new RegExp(oe),
            de = new RegExp("^" + ne + "$"),
            pe = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ie),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + Z + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            },
            fe = /^(?:input|select|textarea|button)$/i,
            he = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            me = /[+~]/,
            ye = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
            be = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            xe = function () {
                L()
            };
        try {
            G.apply(V = K.call(q.childNodes), q.childNodes), V[q.childNodes.length].nodeType
        } catch (e) {
            G = {
                apply: V.length ? function (e, t) {
                    Q.apply(e, K.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, k = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, L = t.setDocument = function (e) {
            var t, n, i = e ? e.ownerDocument || e : q;
            return i !== O && 9 === i.nodeType && i.documentElement ? (O = i, M = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), j = !k(i), w.attributes = o(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = o(function (e) {
                return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = ve.test(i.getElementsByClassName), w.getById = o(function (e) {
                return M.appendChild(e).id = I, !i.getElementsByName || !i.getElementsByName(I).length
            }), w.getById ? (b.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && j) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, b.filter.ID = function (e) {
                var t = e.replace(we, be);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete b.find.ID, b.filter.ID = function (e) {
                var t = e.replace(we, be);
                return function (e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), b.find.TAG = w.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, i = [],
                    o = 0,
                    r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }, b.find.CLASS = w.getElementsByClassName && function (e, t) {
                if (j) return t.getElementsByClassName(e)
            }, D = [], N = [], (w.qsa = ve.test(i.querySelectorAll)) && (o(function (e) {
                M.appendChild(e).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || N.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + I + "-]").length || N.push("~="), e.querySelectorAll(":checked").length || N.push(":checked"), e.querySelectorAll("a#" + I + "+*").length || N.push(".#.+[+~]")
            }), o(function (e) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && N.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), N.push(",.*:")
            })), (w.matchesSelector = ve.test(H = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && o(function (e) {
                w.disconnectedMatch = H.call(e, "div"), H.call(e, "[s!='']:x"), D.push("!=", oe)
            }), N = N.length && new RegExp(N.join("|")), D = D.length && new RegExp(D.join("|")), t = ve.test(M.compareDocumentPosition), P = t || ve.test(M.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, U = t ? function (e, t) {
                if (e === t) return A = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === q && P(q, e) ? -1 : t === i || t.ownerDocument === q && P(q, t) ? 1 : E ? J(E, e) - J(E, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return A = !0, 0;
                var n, o = 0,
                    r = e.parentNode,
                    a = t.parentNode,
                    l = [e],
                    c = [t];
                if (!r || !a) return e === i ? -1 : t === i ? 1 : r ? -1 : a ? 1 : E ? J(E, e) - J(E, t) : 0;
                if (r === a) return s(e, t);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (n = t; n = n.parentNode;) c.unshift(n);
                for (; l[o] === c[o];) o++;
                return o ? s(l[o], c[o]) : l[o] === q ? -1 : c[o] === q ? 1 : 0
            }, i) : O
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== O && L(e), n = n.replace(ce, "='$1']"), w.matchesSelector && j && (!D || !D.test(n)) && (!N || !N.test(n))) try {
                var i = H.call(e, n);
                if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) { }
            return t(n, O, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== O && L(e), P(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== O && L(e);
            var n = b.attrHandle[t.toLowerCase()],
                i = n && _.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !j) : void 0;
            return void 0 !== i ? i : w.attributes || !j ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [],
                i = 0,
                o = 0;
            if (A = !w.detectDuplicates, E = !w.sortStable && e.slice(0), e.sort(U), A) {
                for (; t = e[o++];) t === e[o] && (i = n.push(o));
                for (; i--;) e.splice(n[i], 1)
            }
            return E = null, e
        }, x = t.getText = function (e) {
            var t, n = "",
                i = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += x(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[i++];) n += x(t);
            return n
        }, b = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(we, be), e[3] = (e[3] || e[4] || e[5] || "").replace(we, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(we, be).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = F[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && F(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, n, i) {
                    return function (o) {
                        var r = t.attr(o, e);
                        return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(re, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function (e, t, n, i, o) {
                    var r = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === i && 0 === o ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var c, u, d, p, f, h, v = r !== s ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            m = a && t.nodeName.toLowerCase(),
                            y = !l && !a;
                        if (g) {
                            if (r) {
                                for (; v;) {
                                    for (d = t; d = d[v];)
                                        if (a ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                                    h = v = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? g.firstChild : g.lastChild], s && y) {
                                for (u = g[I] || (g[I] = {}), c = u[e] || [], f = c[0] === z && c[1], p = c[0] === z && c[2], d = f && g.childNodes[f]; d = ++f && d && d[v] || (p = f = 0) || h.pop();)
                                    if (1 === d.nodeType && ++p && d === t) {
                                        u[e] = [z, f, p];
                                        break
                                    }
                            } else if (y && (c = (t[I] || (t[I] = {}))[e]) && c[0] === z) p = c[1];
                            else
                                for (;
                                    (d = ++f && d && d[v] || (p = f = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++p || (y && ((d[I] || (d[I] = {}))[e] = [z, p]), d !== t)););
                            return (p -= o) === i || p % i == 0 && p / i >= 0
                        }
                    }
                },
                PSEUDO: function (e, n) {
                    var o, r = b.pseudos[e] || b.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[I] ? r(n) : r.length > 1 ? (o = [e, e, "", n], b.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                        for (var i, o = r(e, n), s = o.length; s--;) i = J(e, o[s]), e[i] = !(t[i] = o[s])
                    }) : function (e) {
                        return r(e, 0, o)
                    }) : r
                }
            },
            pseudos: {
                not: i(function (e) {
                    var t = [],
                        n = [],
                        o = T(e.replace(se, "$1"));
                    return o[I] ? i(function (e, t, n, i) {
                        for (var r, s = o(e, null, i, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                    }) : function (e, i, r) {
                        return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function (e) {
                    return e = e.replace(we, be),
                        function (t) {
                            return (t.textContent || t.innerText || x(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function (e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, be).toLowerCase(),
                        function (t) {
                            var n;
                            do {
                                if (n = j ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === M
                },
                focus: function (e) {
                    return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return !1 === e.disabled
                },
                disabled: function (e) {
                    return !0 === e.disabled
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !b.pseudos.empty(e)
                },
                header: function (e) {
                    return he.test(e.nodeName)
                },
                input: function (e) {
                    return fe.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: a(function () {
                    return [0]
                }),
                last: a(function (e, t) {
                    return [t - 1]
                }),
                eq: a(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: a(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: a(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: a(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: a(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, b.pseudos.nth = b.pseudos.eq;
        for (y in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) b.pseudos[y] = function (e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(y);
        for (y in {
            submit: !0,
            reset: !0
        }) b.pseudos[y] = function (e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }(y);
        return c.prototype = b.filters = b.pseudos, b.setFilters = new c, S = t.tokenize = function (e, n) {
            var i, o, r, s, a, l, c, u = W[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (a = e, l = [], c = b.preFilter; a;) {
                i && !(o = ae.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = le.exec(a)) && (i = o.shift(), r.push({
                    value: i,
                    type: o[0].replace(se, " ")
                }), a = a.slice(i.length));
                for (s in b.filter) !(o = pe[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({
                    value: i,
                    type: s,
                    matches: o
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? t.error(e) : W(e, l).slice(0)
        }, T = t.compile = function (e, t) {
            var n, i = [],
                o = [],
                r = B[e + " "];
            if (!r) {
                for (t || (t = S(e)), n = t.length; n--;) r = g(t[n]), r[I] ? i.push(r) : o.push(r);
                r = B(e, m(o, i)), r.selector = e
            }
            return r
        }, C = t.select = function (e, t, n, i) {
            var o, r, s, a, c, d = "function" == typeof e && e,
                p = !i && S(e = d.selector || e);
            if (n = n || [], 1 === p.length) {
                if (r = p[0] = p[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && w.getById && 9 === t.nodeType && j && b.relative[r[1].type]) {
                    if (!(t = (b.find.ID(s.matches[0].replace(we, be), t) || [])[0])) return n;
                    d && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (o = pe.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !b.relative[a = s.type]);)
                    if ((c = b.find[a]) && (i = c(s.matches[0].replace(we, be), me.test(r[0].type) && l(t.parentNode) || t))) {
                        if (r.splice(o, 1), !(e = i.length && u(r))) return G.apply(n, i), n;
                        break
                    }
            }
            return (d || T(e, p))(i, t, !j, n, me.test(e) && l(t.parentNode) || t), n
        }, w.sortStable = I.split("").sort(U).join("") === I, w.detectDuplicates = !!A, L(), w.sortDetached = o(function (e) {
            return 1 & e.compareDocumentPosition(O.createElement("div"))
        }), o(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && o(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || r("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), o(function (e) {
            return null == e.getAttribute("disabled")
        }) || r(Z, function (e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    J.find = ie, J.expr = ie.selectors, J.expr[":"] = J.expr.pseudos, J.unique = ie.uniqueSort, J.text = ie.getText, J.isXMLDoc = ie.isXML, J.contains = ie.contains;
    var oe = J.expr.match.needsContext,
        re = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        se = /^.[^:#\[\.,]*$/;
    J.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? J.find.matchesSelector(i, e) ? [i] : [] : J.find.matches(e, J.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, J.fn.extend({
        find: function (e) {
            var t, n = this.length,
                i = [],
                o = this;
            if ("string" != typeof e) return this.pushStack(J(e).filter(function () {
                for (t = 0; t < n; t++)
                    if (J.contains(o[t], this)) return !0
            }));
            for (t = 0; t < n; t++) J.find(e, o[t], i);
            return i = this.pushStack(n > 1 ? J.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function (e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function (e) {
            return !!i(this, "string" == typeof e && oe.test(e) ? J(e) : e || [], !1).length
        }
    });
    var ae, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (J.fn.init = function (e, t) {
        var n, i;
        if (!e) return this;
        if ("string" == typeof e) {
            if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : le.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || ae).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof J ? t[0] : t, J.merge(this, J.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : K, !0)), re.test(n[1]) && J.isPlainObject(t))
                    for (n in t) J.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return i = K.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = K, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : J.isFunction(e) ? void 0 !== ae.ready ? ae.ready(e) : e(J) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), J.makeArray(e, this))
    }).prototype = J.fn, ae = J(K);
    var ce = /^(?:parents|prev(?:Until|All))/,
        ue = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    J.extend({
        dir: function (e, t, n) {
            for (var i = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && J(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), J.fn.extend({
        has: function (e) {
            var t = J(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (J.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            for (var n, i = 0, o = this.length, r = [], s = oe.test(e) || "string" != typeof e ? J(e, t || this.context) : 0; i < o; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && J.find.matchesSelector(n, e))) {
                        r.push(n);
                        break
                    }
            return this.pushStack(r.length > 1 ? J.unique(r) : r)
        },
        index: function (e) {
            return e ? "string" == typeof e ? _.call(J(e), this[0]) : _.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(J.unique(J.merge(this.get(), J(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), J.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return J.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return J.dir(e, "parentNode", n)
        },
        next: function (e) {
            return o(e, "nextSibling")
        },
        prev: function (e) {
            return o(e, "previousSibling")
        },
        nextAll: function (e) {
            return J.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return J.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return J.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return J.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return J.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return J.sibling(e.firstChild)
        },
        contents: function (e) {
            return e.contentDocument || J.merge([], e.childNodes)
        }
    }, function (e, t) {
        J.fn[e] = function (n, i) {
            var o = J.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = J.filter(i, o)), this.length > 1 && (ue[e] || J.unique(o), ce.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var de = /\S+/g,
        pe = {};
    J.Callbacks = function (e) {
        e = "string" == typeof e ? pe[e] || r(e) : J.extend({}, e);
        var t, n, i, o, s, a, l = [],
            c = !e.once && [],
            u = function (r) {
                for (t = e.memory && r, n = !0, a = o || 0, o = 0, s = l.length, i = !0; l && a < s; a++)
                    if (!1 === l[a].apply(r[0], r[1]) && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                i = !1, l && (c ? c.length && u(c.shift()) : t ? l = [] : d.disable())
            },
            d = {
                add: function () {
                    if (l) {
                        var n = l.length;
                        ! function t(n) {
                            J.each(n, function (n, i) {
                                var o = J.type(i);
                                "function" === o ? e.unique && d.has(i) || l.push(i) : i && i.length && "string" !== o && t(i)
                            })
                        }(arguments), i ? s = l.length : t && (o = n, u(t))
                    }
                    return this
                },
                remove: function () {
                    return l && J.each(arguments, function (e, t) {
                        for (var n;
                            (n = J.inArray(t, l, n)) > -1;) l.splice(n, 1), i && (n <= s && s-- , n <= a && a--)
                    }), this
                },
                has: function (e) {
                    return e ? J.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function () {
                    return l = [], s = 0, this
                },
                disable: function () {
                    return l = c = t = void 0, this
                },
                disabled: function () {
                    return !l
                },
                lock: function () {
                    return c = void 0, t || d.disable(), this
                },
                locked: function () {
                    return !c
                },
                fireWith: function (e, t) {
                    return !l || n && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], i ? c.push(t) : u(t)), this
                },
                fire: function () {
                    return d.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!n
                }
            };
        return d
    }, J.extend({
        Deferred: function (e) {
            var t = [
                ["resolve", "done", J.Callbacks("once memory"), "resolved"],
                ["reject", "fail", J.Callbacks("once memory"), "rejected"],
                ["notify", "progress", J.Callbacks("memory")]
            ],
                n = "pending",
                i = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return J.Deferred(function (n) {
                            J.each(t, function (t, r) {
                                var s = J.isFunction(e[t]) && e[t];
                                o[r[1]](function () {
                                    var e = s && s.apply(this, arguments);
                                    e && J.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? J.extend(e, i) : i
                    }
                },
                o = {};
            return i.pipe = i.then, J.each(t, function (e, r) {
                var s = r[2],
                    a = r[3];
                i[r[1]] = s.add, a && s.add(function () {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function () {
                    return o[r[0] + "With"](this === o ? i : this, arguments), this
                }, o[r[0] + "With"] = s.fireWith
            }), i.promise(o), e && e.call(o, o), o
        },
        when: function (e) {
            var t, n, i, o = 0,
                r = B.call(arguments),
                s = r.length,
                a = 1 !== s || e && J.isFunction(e.promise) ? s : 0,
                l = 1 === a ? e : J.Deferred(),
                c = function (e, n, i) {
                    return function (o) {
                        n[e] = this, i[e] = arguments.length > 1 ? B.call(arguments) : o, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), i = new Array(s); o < s; o++) r[o] && J.isFunction(r[o].promise) ? r[o].promise().done(c(o, i, r)).fail(l.reject).progress(c(o, n, t)) : --a;
            return a || l.resolveWith(i, r), l.promise()
        }
    });
    var fe;
    J.fn.ready = function (e) {
        return J.ready.promise().done(e), this
    }, J.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? J.readyWait++ : J.ready(!0)
        },
        ready: function (e) {
            (!0 === e ? --J.readyWait : J.isReady) || (J.isReady = !0, !0 !== e && --J.readyWait > 0 || (fe.resolveWith(K, [J]), J.fn.triggerHandler && (J(K).triggerHandler("ready"), J(K).off("ready"))))
        }
    }), J.ready.promise = function (t) {
        return fe || (fe = J.Deferred(), "complete" === K.readyState ? setTimeout(J.ready) : (K.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))), fe.promise(t)
    }, J.ready.promise();
    var he = J.access = function (e, t, n, i, o, r, s) {
        var a = 0,
            l = e.length,
            c = null == n;
        if ("object" === J.type(n)) {
            o = !0;
            for (a in n) J.access(e, t, a, n[a], !0, r, s)
        } else if (void 0 !== i && (o = !0, J.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
            return c.call(J(e), n)
        })), t))
            for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
    };
    J.acceptData = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, a.uid = 1, a.accepts = J.acceptData, a.prototype = {
        key: function (e) {
            if (!a.accepts(e)) return 0;
            var t = {},
                n = e[this.expando];
            if (!n) {
                n = a.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t)
                } catch (i) {
                    t[this.expando] = n, J.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function (e, t, n) {
            var i, o = this.key(e),
                r = this.cache[o];
            if ("string" == typeof t) r[t] = n;
            else if (J.isEmptyObject(r)) J.extend(this.cache[o], t);
            else
                for (i in t) r[i] = t[i];
            return r
        },
        get: function (e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function (e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, J.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, i, o, r = this.key(e),
                s = this.cache[r];
            if (void 0 === t) this.cache[r] = {};
            else {
                J.isArray(t) ? i = t.concat(t.map(J.camelCase)) : (o = J.camelCase(t), t in s ? i = [t, o] : (i = o, i = i in s ? [i] : i.match(de) || [])), n = i.length;
                for (; n--;) delete s[i[n]]
            }
        },
        hasData: function (e) {
            return !J.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function (e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var ve = new a,
        ge = new a,
        me = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ye = /([A-Z])/g;
    J.extend({
        hasData: function (e) {
            return ge.hasData(e) || ve.hasData(e)
        },
        data: function (e, t, n) {
            return ge.access(e, t, n)
        },
        removeData: function (e, t) {
            ge.remove(e, t)
        },
        _data: function (e, t, n) {
            return ve.access(e, t, n)
        },
        _removeData: function (e, t) {
            ve.remove(e, t)
        }
    }), J.fn.extend({
        data: function (e, t) {
            var n, i, o, r = this[0],
                s = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = ge.get(r), 1 === r.nodeType && !ve.get(r, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = J.camelCase(i.slice(5)), l(r, i, o[i])));
                    ve.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function () {
                ge.set(this, e)
            }) : he(this, function (t) {
                var n, i = J.camelCase(e);
                if (r && void 0 === t) {
                    if (void 0 !== (n = ge.get(r, e))) return n;
                    if (void 0 !== (n = ge.get(r, i))) return n;
                    if (void 0 !== (n = l(r, i, void 0))) return n
                } else this.each(function () {
                    var n = ge.get(this, i);
                    ge.set(this, i, t), -1 !== e.indexOf("-") && void 0 !== n && ge.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                ge.remove(this, e)
            })
        }
    }), J.extend({
        queue: function (e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = ve.get(e, t), n && (!i || J.isArray(n) ? i = ve.access(e, t, J.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = J.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = J._queueHooks(e, t),
                s = function () {
                    J.dequeue(e, t)
                };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, s, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return ve.get(e, n) || ve.access(e, n, {
                empty: J.Callbacks("once memory").add(function () {
                    ve.remove(e, [t + "queue", n])
                })
            })
        }
    }), J.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? J.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = J.queue(this, e, t);
                J._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && J.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                J.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, i = 1,
                o = J.Deferred(),
                r = this,
                s = this.length,
                a = function () {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = ve.get(r[s], e + "queueHooks")) && n.empty && (i++ , n.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        be = ["Top", "Right", "Bottom", "Left"],
        xe = function (e, t) {
            return e = t || e, "none" === J.css(e, "display") || !J.contains(e.ownerDocument, e)
        },
        ke = /^(?:checkbox|radio)$/i;
    ! function () {
        var e = K.createDocumentFragment(),
            t = e.appendChild(K.createElement("div")),
            n = K.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), G.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", G.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    G.focusinBubbles = "onfocusin" in e;
    var Se = /^key/,
        Te = /^(?:mouse|pointer|contextmenu)|click/,
        Ce = /^(?:focusinfocus|focusoutblur)$/,
        $e = /^([^.]*)(?:\.(.+)|)$/;
    J.event = {
        global: {},
        add: function (e, t, n, i, o) {
            var r, s, a, l, c, u, d, p, f, h, v, g = ve.get(e);
            if (g)
                for (n.handler && (r = n, n = r.handler, o = r.selector), n.guid || (n.guid = J.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function (t) {
                    return void 0 !== J && J.event.triggered !== t.type ? J.event.dispatch.apply(e, arguments) : void 0
                }), t = (t || "").match(de) || [""], c = t.length; c--;) a = $e.exec(t[c]) || [], f = v = a[1], h = (a[2] || "").split(".").sort(), f && (d = J.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = J.event.special[f] || {}, u = J.extend({
                    type: f,
                    origType: v,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && J.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, r), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, h, s) || e.addEventListener && e.addEventListener(f, s, !1)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), J.event.global[f] = !0)
        },
        remove: function (e, t, n, i, o) {
            var r, s, a, l, c, u, d, p, f, h, v, g = ve.hasData(e) && ve.get(e);
            if (g && (l = g.events)) {
                for (t = (t || "").match(de) || [""], c = t.length; c--;)
                    if (a = $e.exec(t[c]) || [], f = v = a[1], h = (a[2] || "").split(".").sort(), f) {
                        for (d = J.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, p = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) u = p[r], !o && v !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(r, 1), u.selector && p.delegateCount-- , d.remove && d.remove.call(e, u));
                        s && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || J.removeEvent(e, f, g.handle), delete l[f])
                    } else
                        for (f in l) J.event.remove(e, f + t[c], n, i, !0);
                J.isEmptyObject(l) && (delete g.handle, ve.remove(e, "events"))
            }
        },
        trigger: function (t, n, i, o) {
            var r, s, a, l, c, u, d, p = [i || K],
                f = Q.call(t, "type") ? t.type : t,
                h = Q.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = i = i || K, 3 !== i.nodeType && 8 !== i.nodeType && !Ce.test(f + J.event.triggered) && (f.indexOf(".") >= 0 && (h = f.split("."), f = h.shift(), h.sort()), c = f.indexOf(":") < 0 && "on" + f, t = t[J.expando] ? t : new J.Event(f, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : J.makeArray(n, [t]), d = J.event.special[f] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !J.isWindow(i)) {
                    for (l = d.delegateType || f, Ce.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                    a === (i.ownerDocument || K) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (r = 0;
                    (s = p[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : d.bindType || f, u = (ve.get(s, "events") || {})[t.type] && ve.get(s, "handle"), u && u.apply(s, n), (u = c && s[c]) && u.apply && J.acceptData(s) && (t.result = u.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = f, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(p.pop(), n) || !J.acceptData(i) || c && J.isFunction(i[f]) && !J.isWindow(i) && (a = i[c], a && (i[c] = null), J.event.triggered = f, i[f](), J.event.triggered = void 0, a && (i[c] = a)), t.result
            }
        },
        dispatch: function (e) {
            e = J.event.fix(e);
            var t, n, i, o, r, s = [],
                a = B.call(arguments),
                l = (ve.get(this, "events") || {})[e.type] || [],
                c = J.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (s = J.event.handlers.call(this, e, l), t = 0;
                    (o = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, n = 0;
                        (r = o.handlers[n++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(r.namespace) || (e.handleObj = r, e.data = r.data, void 0 !== (i = ((J.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, i, o, r, s = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && (!e.button || "click" !== e.type))
                for (; l !== this; l = l.parentNode || this)
                    if (!0 !== l.disabled || "click" !== e.type) {
                        for (i = [], n = 0; n < a; n++) r = t[n], o = r.selector + " ", void 0 === i[o] && (i[o] = r.needsContext ? J(o, this).index(l) >= 0 : J.find(o, this, null, [l]).length), i[o] && i.push(r);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, i, o, r = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || K, i = n.documentElement, o = n.body, e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[J.expando]) return e;
            var t, n, i, o = e.type,
                r = e,
                s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = Te.test(o) ? this.mouseHooks : Se.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new J.Event(r), t = i.length; t--;) n = i[t], e[n] = r[n];
            return e.target || (e.target = K), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, r) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== d() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === d() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && J.nodeName(this, "input")) return this.click(), !1
                },
                _default: function (e) {
                    return J.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, i) {
            var o = J.extend(new J.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? J.event.trigger(o, null, t) : J.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, J.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, J.Event = function (e, t) {
        if (!(this instanceof J.Event)) return new J.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? c : u) : this.type = e, t && J.extend(this, t), this.timeStamp = e && e.timeStamp || J.now(), this[J.expando] = !0
    }, J.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = c, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = c, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = c, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, J.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        J.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, i = this,
                    o = e.relatedTarget,
                    r = e.handleObj;
                return o && (o === i || J.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), G.focusinBubbles || J.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            J.event.simulate(t, e.target, J.event.fix(e), !0)
        };
        J.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this,
                    o = ve.access(i, t);
                o || i.addEventListener(e, n, !0), ve.access(i, t, (o || 0) + 1)
            },
            teardown: function () {
                var i = this.ownerDocument || this,
                    o = ve.access(i, t) - 1;
                o ? ve.access(i, t, o) : (i.removeEventListener(e, n, !0), ve.remove(i, t))
            }
        }
    }), J.fn.extend({
        on: function (e, t, n, i, o) {
            var r, s;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (s in e) this.on(s, t, n, e[s], o);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), !1 === i) i = u;
            else if (!i) return this;
            return 1 === o && (r = i, i = function (e) {
                return J().off(e), r.apply(this, arguments)
            }, i.guid = r.guid || (r.guid = J.guid++)), this.each(function () {
                J.event.add(this, e, i, n, t)
            })
        },
        one: function (e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function (e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, J(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = u), this.each(function () {
                J.event.remove(this, e, n, t)
            })
        },
        trigger: function (e, t) {
            return this.each(function () {
                J.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return J.event.trigger(e, t, n, !0)
        }
    });
    var Ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ae = /<([\w:]+)/,
        Le = /<|&#?\w+;/,
        Oe = /<(?:script|style|link)/i,
        Me = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^$|\/(?:java|ecma)script/i,
        Ne = /^true\/(.*)/,
        De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        He = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    He.optgroup = He.option, He.tbody = He.tfoot = He.colgroup = He.caption = He.thead, He.th = He.td, J.extend({
        clone: function (e, t, n) {
            var i, o, r, s, a = e.cloneNode(!0),
                l = J.contains(e.ownerDocument, e);
            if (!(G.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || J.isXMLDoc(e)))
                for (s = m(a), r = m(e), i = 0, o = r.length; i < o; i++) y(r[i], s[i]);
            if (t)
                if (n)
                    for (r = r || m(e), s = s || m(a), i = 0, o = r.length; i < o; i++) g(r[i], s[i]);
                else g(e, a);
            return s = m(a, "script"), s.length > 0 && v(s, !l && m(e, "script")), a
        },
        buildFragment: function (e, t, n, i) {
            for (var o, r, s, a, l, c, u = t.createDocumentFragment(), d = [], p = 0, f = e.length; p < f; p++)
                if ((o = e[p]) || 0 === o)
                    if ("object" === J.type(o)) J.merge(d, o.nodeType ? [o] : o);
                    else if (Le.test(o)) {
                        for (r = r || u.appendChild(t.createElement("div")), s = (Ae.exec(o) || ["", ""])[1].toLowerCase(), a = He[s] || He._default, r.innerHTML = a[1] + o.replace(Ee, "<$1></$2>") + a[2], c = a[0]; c--;) r = r.lastChild;
                        J.merge(d, r.childNodes), r = u.firstChild, r.textContent = ""
                    } else d.push(t.createTextNode(o));
            for (u.textContent = "", p = 0; o = d[p++];)
                if ((!i || -1 === J.inArray(o, i)) && (l = J.contains(o.ownerDocument, o), r = m(u.appendChild(o), "script"), l && v(r), n))
                    for (c = 0; o = r[c++];) je.test(o.type || "") && n.push(o);
            return u
        },
        cleanData: function (e) {
            for (var t, n, i, o, r = J.event.special, s = 0; void 0 !== (n = e[s]); s++) {
                if (J.acceptData(n) && (o = n[ve.expando]) && (t = ve.cache[o])) {
                    if (t.events)
                        for (i in t.events) r[i] ? J.event.remove(n, i) : J.removeEvent(n, i, t.handle);
                    ve.cache[o] && delete ve.cache[o]
                }
                delete ge.cache[n[ge.expando]]
            }
        }
    }), J.fn.extend({
        text: function (e) {
            return he(this, function (e) {
                return void 0 === e ? J.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    p(this, e).appendChild(e)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            for (var n, i = e ? J.filter(e, this) : this, o = 0; null != (n = i[o]); o++) t || 1 !== n.nodeType || J.cleanData(m(n)), n.parentNode && (t && J.contains(n.ownerDocument, n) && v(m(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (J.cleanData(m(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return J.clone(this, e, t)
            })
        },
        html: function (e) {
            return he(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Oe.test(e) && !He[(Ae.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Ee, "<$1></$2>");
                    try {
                        for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (J.cleanData(m(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) { }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = arguments[0];
            return this.domManip(arguments, function (t) {
                e = this.parentNode, J.cleanData(m(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, t) {
            e = U.apply([], e);
            var n, i, o, r, s, a, l = 0,
                c = this.length,
                u = this,
                d = c - 1,
                p = e[0],
                v = J.isFunction(p);
            if (v || c > 1 && "string" == typeof p && !G.checkClone && Me.test(p)) return this.each(function (n) {
                var i = u.eq(n);
                v && (e[0] = p.call(this, n, i.html())), i.domManip(e, t)
            });
            if (c && (n = J.buildFragment(e, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                for (o = J.map(m(n, "script"), f), r = o.length; l < c; l++) s = n, l !== d && (s = J.clone(s, !0, !0), r && J.merge(o, m(s, "script"))), t.call(this[l], s, l);
                if (r)
                    for (a = o[o.length - 1].ownerDocument, J.map(o, h), l = 0; l < r; l++) s = o[l], je.test(s.type || "") && !ve.access(s, "globalEval") && J.contains(a, s) && (s.src ? J._evalUrl && J._evalUrl(s.src) : J.globalEval(s.textContent.replace(De, "")))
            }
            return this
        }
    }), J.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        J.fn[e] = function (e) {
            for (var n, i = [], o = J(e), r = o.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), J(o[s])[t](n), X.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Pe, Ie = {},
        qe = /^margin/,
        ze = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"),
        Re = function (t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        };
    ! function () {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", o.appendChild(r);
            var t = e.getComputedStyle(s, null);
            n = "1%" !== t.top, i = "4px" === t.width, o.removeChild(r)
        }
        var n, i, o = K.documentElement,
            r = K.createElement("div"),
            s = K.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = "content-box" === s.style.backgroundClip, r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", r.appendChild(s), e.getComputedStyle && J.extend(G, {
            pixelPosition: function () {
                return t(), n
            },
            boxSizingReliable: function () {
                return null == i && t(), i
            },
            reliableMarginRight: function () {
                var t, n = s.appendChild(K.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", o.appendChild(r), t = !parseFloat(e.getComputedStyle(n, null).marginRight), o.removeChild(r), s.removeChild(n), t
            }
        }))
    }(), J.swap = function (e, t, n, i) {
        var o, r, s = {};
        for (r in t) s[r] = e.style[r], e.style[r] = t[r];
        o = n.apply(e, i || []);
        for (r in t) e.style[r] = s[r];
        return o
    };
    var Fe = /^(none|table(?!-c[ea]).+)/,
        We = new RegExp("^(" + we + ")(.*)$", "i"),
        Be = new RegExp("^([+-])=(" + we + ")", "i"),
        Ue = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Xe = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        _e = ["Webkit", "O", "Moz", "ms"];
    J.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = x(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = J.camelCase(t),
                    l = e.style;
                if (t = J.cssProps[a] || (J.cssProps[a] = S(l, a)), s = J.cssHooks[t] || J.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : l[t];
                r = typeof n, "string" === r && (o = Be.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(J.css(e, t)), r = "number"), null != n && n === n && ("number" !== r || J.cssNumber[a] || (n += "px"), G.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n))
            }
        },
        css: function (e, t, n, i) {
            var o, r, s, a = J.camelCase(t);
            return t = J.cssProps[a] || (J.cssProps[a] = S(e.style, a)), s = J.cssHooks[t] || J.cssHooks[a], s && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = x(e, t, i)), "normal" === o && t in Xe && (o = Xe[t]), "" === n || n ? (r = parseFloat(o), !0 === n || J.isNumeric(r) ? r || 0 : o) : o
        }
    }), J.each(["height", "width"], function (e, t) {
        J.cssHooks[t] = {
            get: function (e, n, i) {
                if (n) return Fe.test(J.css(e, "display")) && 0 === e.offsetWidth ? J.swap(e, Ue, function () {
                    return $(e, t, i)
                }) : $(e, t, i)
            },
            set: function (e, n, i) {
                var o = i && Re(e);
                return T(e, n, i ? C(e, t, i, "border-box" === J.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }), J.cssHooks.marginRight = k(G.reliableMarginRight, function (e, t) {
        if (t) return J.swap(e, {
            display: "inline-block"
        }, x, [e, "marginRight"])
    }), J.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        J.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + be[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, qe.test(e) || (J.cssHooks[e + t].set = T)
    }), J.fn.extend({
        css: function (e, t) {
            return he(this, function (e, t, n) {
                var i, o, r = {},
                    s = 0;
                if (J.isArray(t)) {
                    for (i = Re(e), o = t.length; s < o; s++) r[t[s]] = J.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? J.style(e, t, n) : J.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function () {
            return E(this, !0)
        },
        hide: function () {
            return E(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                xe(this) ? J(this).show() : J(this).hide()
            })
        }
    }), J.Tween = A, A.prototype = {
        constructor: A,
        init: function (e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (J.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = A.propHooks[this.prop];
            return e && e.get ? e.get(this) : A.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = A.propHooks[this.prop];
            return this.options.duration ? this.pos = t = J.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : A.propHooks._default.set(this), this
        }
    }, A.prototype.init.prototype = A.prototype, A.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = J.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function (e) {
                J.fx.step[e.prop] ? J.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[J.cssProps[e.prop]] || J.cssHooks[e.prop]) ? J.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, A.propHooks.scrollTop = A.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, J.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, J.fx = A.prototype.init, J.fx.step = {};
    var Ve, Ye, Qe = /^(?:toggle|show|hide)$/,
        Ge = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"),
        Ke = /queueHooks$/,
        Je = [j],
        Ze = {
            "*": [function (e, t) {
                var n = this.createTween(e, t),
                    i = n.cur(),
                    o = Ge.exec(t),
                    r = o && o[3] || (J.cssNumber[e] ? "" : "px"),
                    s = (J.cssNumber[e] || "px" !== r && +i) && Ge.exec(J.css(n.elem, e)),
                    a = 1,
                    l = 20;
                if (s && s[3] !== r) {
                    r = r || s[3], o = o || [], s = +i || 1;
                    do {
                        a = a || ".5", s /= a, J.style(n.elem, e, s + r)
                    } while (a !== (a = n.cur() / i) && 1 !== a && --l)
                }
                return o && (s = n.start = +s || +i || 0, n.unit = r, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), n
            }]
        };
    J.Animation = J.extend(D, {
        tweener: function (e, t) {
            J.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, i = 0, o = e.length; i < o; i++) n = e[i], Ze[n] = Ze[n] || [], Ze[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? Je.unshift(e) : Je.push(e)
        }
    }), J.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? J.extend({}, e) : {
            complete: n || !n && t || J.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !J.isFunction(t) && t
        };
        return i.duration = J.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in J.fx.speeds ? J.fx.speeds[i.duration] : J.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            J.isFunction(i.old) && i.old.call(this), i.queue && J.dequeue(this, i.queue)
        }, i
    }, J.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(xe).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function (e, t, n, i) {
            var o = J.isEmptyObject(e),
                r = J.speed(t, n, i),
                s = function () {
                    var t = D(this, J.extend({}, e), r);
                    (o || ve.get(this, "finish")) && t.stop(!0)
                };
            return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function (e, t, n) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    o = null != e && e + "queueHooks",
                    r = J.timers,
                    s = ve.get(this);
                if (o) s[o] && s[o].stop && i(s[o]);
                else
                    for (o in s) s[o] && s[o].stop && Ke.test(o) && i(s[o]);
                for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                !t && n || J.dequeue(this, e)
            })
        },
        finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, n = ve.get(this),
                    i = n[e + "queue"],
                    o = n[e + "queueHooks"],
                    r = J.timers,
                    s = i ? i.length : 0;
                for (n.finish = !0, J.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }),
        J.each(["toggle", "show", "hide"], function (e, t) {
            var n = J.fn[t];
            J.fn[t] = function (e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(O(t, !0), e, i, o)
            }
        }), J.each({
            slideDown: O("show"),
            slideUp: O("hide"),
            slideToggle: O("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            J.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), J.timers = [], J.fx.tick = function () {
            var e, t = 0,
                n = J.timers;
            for (Ve = J.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || J.fx.stop(), Ve = void 0
        }, J.fx.timer = function (e) {
            J.timers.push(e), e() ? J.fx.start() : J.timers.pop()
        }, J.fx.interval = 13, J.fx.start = function () {
            Ye || (Ye = setInterval(J.fx.tick, J.fx.interval))
        }, J.fx.stop = function () {
            clearInterval(Ye), Ye = null
        }, J.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, J.fn.delay = function (e, t) {
            return e = J.fx ? J.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var i = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(i)
                }
            })
        },
        function () {
            var e = K.createElement("input"),
                t = K.createElement("select"),
                n = t.appendChild(K.createElement("option"));
            e.type = "checkbox", G.checkOn = "" !== e.value, G.optSelected = n.selected, t.disabled = !0, G.optDisabled = !n.disabled, e = K.createElement("input"), e.value = "t", e.type = "radio", G.radioValue = "t" === e.value
        }();
    var et, tt = J.expr.attrHandle;
    J.fn.extend({
        attr: function (e, t) {
            return he(this, J.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                J.removeAttr(this, e)
            })
        }
    }), J.extend({
        attr: function (e, t, n) {
            var i, o, r = e.nodeType;
            if (e && 3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? J.prop(e, t, n) : (1 === r && J.isXMLDoc(e) || (t = t.toLowerCase(), i = J.attrHooks[t] || (J.expr.match.bool.test(t) ? et : void 0)), void 0 === n ? i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = J.find.attr(e, t), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void J.removeAttr(e, t))
        },
        removeAttr: function (e, t) {
            var n, i, o = 0,
                r = t && t.match(de);
            if (r && 1 === e.nodeType)
                for (; n = r[o++];) i = J.propFix[n] || n, J.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!G.radioValue && "radio" === t && J.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), et = {
        set: function (e, t, n) {
            return !1 === t ? J.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, J.each(J.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = tt[t] || J.find.attr;
        tt[t] = function (e, t, i) {
            var o, r;
            return i || (r = tt[t], tt[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, tt[t] = r), o
        }
    });
    var nt = /^(?:input|select|textarea|button)$/i;
    J.fn.extend({
        prop: function (e, t) {
            return he(this, J.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[J.propFix[e] || e]
            })
        }
    }), J.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function (e, t, n) {
            var i, o, r, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return r = 1 !== s || !J.isXMLDoc(e), r && (t = J.propFix[t] || t, o = J.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    return e.hasAttribute("tabindex") || nt.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), G.optSelected || (J.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), J.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        J.propFix[this.toLowerCase()] = this
    });
    var it = /[\t\r\n\f]/g;
    J.fn.extend({
        addClass: function (e) {
            var t, n, i, o, r, s, a = "string" == typeof e && e,
                l = 0,
                c = this.length;
            if (J.isFunction(e)) return this.each(function (t) {
                J(this).addClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(de) || []; l < c; l++)
                    if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(it, " ") : " ")) {
                        for (r = 0; o = t[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        s = J.trim(i), n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function (e) {
            var t, n, i, o, r, s, a = 0 === arguments.length || "string" == typeof e && e,
                l = 0,
                c = this.length;
            if (J.isFunction(e)) return this.each(function (t) {
                J(this).removeClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(de) || []; l < c; l++)
                    if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(it, " ") : "")) {
                        for (r = 0; o = t[r++];)
                            for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                        s = e ? J.trim(i) : "", n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : J.isFunction(e) ? this.each(function (n) {
                J(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if ("string" === n)
                    for (var t, i = 0, o = J(this), r = e.match(de) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else "undefined" !== n && "boolean" !== n || (this.className && ve.set(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : ve.get(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(it, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var ot = /\r/g;
    J.fn.extend({
        val: function (e) {
            var t, n, i, o = this[0]; {
                if (arguments.length) return i = J.isFunction(e), this.each(function (n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, J(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : J.isArray(o) && (o = J.map(o, function (e) {
                        return null == e ? "" : e + ""
                    })), (t = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                });
                if (o) return (t = J.valHooks[o.type] || J.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(ot, "") : null == n ? "" : n)
            }
        }
    }), J.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = J.find.attr(e, "value");
                    return null != t ? t : J.trim(J.text(e))
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || o < 0, s = r ? null : [], a = r ? o + 1 : i.length, l = o < 0 ? a : r ? o : 0; l < a; l++)
                        if (n = i[l], (n.selected || l === o) && (G.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !J.nodeName(n.parentNode, "optgroup"))) {
                            if (t = J(n).val(), r) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function (e, t) {
                    for (var n, i, o = e.options, r = J.makeArray(t), s = o.length; s--;) i = o[s], (i.selected = J.inArray(i.value, r) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), J.each(["radio", "checkbox"], function () {
        J.valHooks[this] = {
            set: function (e, t) {
                if (J.isArray(t)) return e.checked = J.inArray(J(e).val(), t) >= 0
            }
        }, G.checkOn || (J.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        J.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), J.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var rt = J.now(),
        st = /\?/;
    J.parseJSON = function (e) {
        return JSON.parse(e + "")
    }, J.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || J.error("Invalid XML: " + e), t
    };
    var at = /#.*$/,
        lt = /([?&])_=[^&]*/,
        ct = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ut = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        dt = /^(?:GET|HEAD)$/,
        pt = /^\/\//,
        ft = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        ht = {},
        vt = {},
        gt = "*/".concat("*"),
        mt = e.location.href,
        yt = ft.exec(mt.toLowerCase()) || [];
    J.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: mt,
            type: "GET",
            isLocal: ut.test(yt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": gt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": J.parseJSON,
                "text xml": J.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? I(I(e, J.ajaxSettings), t) : I(J.ajaxSettings, e)
        },
        ajaxPrefilter: H(ht),
        ajaxTransport: H(vt),
        ajax: function (e, t) {
            function n(e, t, n, s) {
                var l, u, m, y, b, k = t;
                2 !== w && (w = 2, a && clearTimeout(a), i = void 0, r = s || "", x.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, n && (y = q(d, x, n)), y = z(d, y, x, l), l ? (d.ifModified && (b = x.getResponseHeader("Last-Modified"), b && (J.lastModified[o] = b), (b = x.getResponseHeader("etag")) && (J.etag[o] = b)), 204 === e || "HEAD" === d.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = y.state, u = y.data, m = y.error, l = !m)) : (m = k, !e && k || (k = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || k) + "", l ? h.resolveWith(p, [u, k, x]) : h.rejectWith(p, [x, k, m]), x.statusCode(g), g = void 0, c && f.trigger(l ? "ajaxSuccess" : "ajaxError", [x, d, l ? u : m]), v.fireWith(p, [x, k]), c && (f.trigger("ajaxComplete", [x, d]), --J.active || J.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, o, r, s, a, l, c, u, d = J.ajaxSetup({}, t),
                p = d.context || d,
                f = d.context && (p.nodeType || p.jquery) ? J(p) : J.event,
                h = J.Deferred(),
                v = J.Callbacks("once memory"),
                g = d.statusCode || {},
                m = {},
                y = {},
                w = 0,
                b = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === w) {
                            if (!s)
                                for (s = {}; t = ct.exec(r);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === w ? r : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return w || (e = y[n] = y[n] || e, m[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return w || (d.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (w < 2)
                                for (t in e) g[t] = [g[t], e[t]];
                            else x.always(e[x.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || b;
                        return i && i.abort(t), n(0, t), this
                    }
                };
            if (h.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, d.url = ((e || d.url || mt) + "").replace(at, "").replace(pt, yt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = J.trim(d.dataType || "*").toLowerCase().match(de) || [""], null == d.crossDomain && (l = ft.exec(d.url.toLowerCase()), d.crossDomain = !(!l || l[1] === yt[1] && l[2] === yt[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (yt[3] || ("http:" === yt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = J.param(d.data, d.traditional)), P(ht, d, t, x), 2 === w) return x;
            c = J.event && d.global, c && 0 == J.active++ && J.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !dt.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (st.test(o) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = lt.test(o) ? o.replace(lt, "$1_=" + rt++) : o + (st.test(o) ? "&" : "?") + "_=" + rt++)), d.ifModified && (J.lastModified[o] && x.setRequestHeader("If-Modified-Since", J.lastModified[o]), J.etag[o] && x.setRequestHeader("If-None-Match", J.etag[o])), (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + gt + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers) x.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (!1 === d.beforeSend.call(p, x, d) || 2 === w)) return x.abort();
            b = "abort";
            for (u in {
                success: 1,
                error: 1,
                complete: 1
            }) x[u](d[u]);
            if (i = P(vt, d, t, x)) {
                x.readyState = 1, c && f.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (a = setTimeout(function () {
                    x.abort("timeout")
                }, d.timeout));
                try {
                    w = 1, i.send(m, n)
                } catch (e) {
                    if (!(w < 2)) throw e;
                    n(-1, e)
                }
            } else n(-1, "No Transport");
            return x
        },
        getJSON: function (e, t, n) {
            return J.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return J.get(e, void 0, t, "script")
        }
    }), J.each(["get", "post"], function (e, t) {
        J[t] = function (e, n, i, o) {
            return J.isFunction(n) && (o = o || i, i = n, n = void 0), J.ajax({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            })
        }
    }), J._evalUrl = function (e) {
        return J.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, J.fn.extend({
        wrapAll: function (e) {
            var t;
            return J.isFunction(e) ? this.each(function (t) {
                J(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = J(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function (e) {
            return J.isFunction(e) ? this.each(function (t) {
                J(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = J(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = J.isFunction(e);
            return this.each(function (n) {
                J(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
            }).end()
        }
    }), J.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, J.expr.filters.visible = function (e) {
        return !J.expr.filters.hidden(e)
    };
    var wt = /%20/g,
        bt = /\[\]$/,
        xt = /\r?\n/g,
        kt = /^(?:submit|button|image|reset|file)$/i,
        St = /^(?:input|select|textarea|keygen)/i;
    J.param = function (e, t) {
        var n, i = [],
            o = function (e, t) {
                t = J.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(e) || e.jquery && !J.isPlainObject(e)) J.each(e, function () {
            o(this.name, this.value)
        });
        else
            for (n in e) R(n, e[n], t, o);
        return i.join("&").replace(wt, "+")
    }, J.fn.extend({
        serialize: function () {
            return J.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = J.prop(this, "elements");
                return e ? J.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !J(this).is(":disabled") && St.test(this.nodeName) && !kt.test(e) && (this.checked || !ke.test(e))
            }).map(function (e, t) {
                var n = J(this).val();
                return null == n ? null : J.isArray(n) ? J.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(xt, "\r\n")
                    }
                }) : {
                        name: t.name,
                        value: n.replace(xt, "\r\n")
                    }
            }).get()
        }
    }), J.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (e) { }
    };
    var Tt = 0,
        Ct = {},
        $t = {
            0: 200,
            1223: 204
        },
        Et = J.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function () {
        for (var e in Ct) Ct[e]()
    }), G.cors = !!Et && "withCredentials" in Et, G.ajax = Et = !!Et, J.ajaxTransport(function (e) {
        var t;
        if (G.cors || Et && !e.crossDomain) return {
            send: function (n, i) {
                var o, r = e.xhr(),
                    s = ++Tt;
                if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (o in e.xhrFields) r[o] = e.xhrFields[o];
                e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (o in n) r.setRequestHeader(o, n[o]);
                t = function (e) {
                    return function () {
                        t && (delete Ct[s], t = r.onload = r.onerror = null, "abort" === e ? r.abort() : "error" === e ? i(r.status, r.statusText) : i($t[r.status] || r.status, r.statusText, "string" == typeof r.responseText ? {
                            text: r.responseText
                        } : void 0, r.getAllResponseHeaders()))
                    }
                }, r.onload = t(), r.onerror = t("error"), t = Ct[s] = t("abort");
                try {
                    r.send(e.hasContent && e.data || null)
                } catch (e) {
                    if (t) throw e
                }
            },
            abort: function () {
                t && t()
            }
        }
    }), J.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return J.globalEval(e), e
            }
        }
    }), J.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), J.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (i, o) {
                    t = J("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), K.head.appendChild(t[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }
    });
    var At = [],
        Lt = /(=)\?(?=&|$)|\?\?/;
    J.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = At.pop() || J.expando + "_" + rt++;
            return this[e] = !0, e
        }
    }), J.ajaxPrefilter("json jsonp", function (t, n, i) {
        var o, r, s, a = !1 !== t.jsonp && (Lt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Lt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = J.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Lt, "$1" + o) : !1 !== t.jsonp && (t.url += (st.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
            return s || J.error(o + " was not called"), s[0]
        }, t.dataTypes[0] = "json", r = e[o], e[o] = function () {
            s = arguments
        }, i.always(function () {
            e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, At.push(o)), s && J.isFunction(r) && r(s[0]), s = r = void 0
        }), "script"
    }), J.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || K;
        var i = re.exec(e),
            o = !n && [];
        return i ? [t.createElement(i[1])] : (i = J.buildFragment([e], t, o), o && o.length && J(o).remove(), J.merge([], i.childNodes))
    };
    var Ot = J.fn.load;
    J.fn.load = function (e, t, n) {
        if ("string" != typeof e && Ot) return Ot.apply(this, arguments);
        var i, o, r, s = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = J.trim(e.slice(a)), e = e.slice(0, a)), J.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && J.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function (e) {
            r = arguments, s.html(i ? J("<div>").append(J.parseHTML(e)).find(i) : e)
        }).complete(n && function (e, t) {
            s.each(n, r || [e.responseText, t, e])
        }), this
    }, J.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        J.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), J.expr.filters.animated = function (e) {
        return J.grep(J.timers, function (t) {
            return e === t.elem
        }).length
    };
    var Mt = e.document.documentElement;
    J.offset = {
        setOffset: function (e, t, n) {
            var i, o, r, s, a, l, c, u = J.css(e, "position"),
                d = J(e),
                p = {};
            "static" === u && (e.style.position = "relative"), a = d.offset(), r = J.css(e, "top"), l = J.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1, c ? (i = d.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), J.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + o), "using" in t ? t.using.call(e, p) : d.css(p)
        }
    }, J.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                J.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0],
                o = {
                    top: 0,
                    left: 0
                },
                r = i && i.ownerDocument;
            if (r) return t = r.documentElement, J.contains(t, i) ? (void 0 !== i.getBoundingClientRect && (o = i.getBoundingClientRect()), n = F(r), {
                top: o.top + n.pageYOffset - t.clientTop,
                left: o.left + n.pageXOffset - t.clientLeft
            }) : o
        },
        position: function () {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === J.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), J.nodeName(e[0], "html") || (i = e.offset()), i.top += J.css(e[0], "borderTopWidth", !0), i.left += J.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - J.css(n, "marginTop", !0),
                    left: t.left - i.left - J.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || Mt; e && !J.nodeName(e, "html") && "static" === J.css(e, "position");) e = e.offsetParent;
                return e || Mt
            })
        }
    }), J.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, n) {
        var i = "pageYOffset" === n;
        J.fn[t] = function (o) {
            return he(this, function (t, o, r) {
                var s = F(t);
                if (void 0 === r) return s ? s[n] : t[o];
                s ? s.scrollTo(i ? e.pageXOffset : r, i ? r : e.pageYOffset) : t[o] = r
            }, t, o, arguments.length, null)
        }
    }), J.each(["top", "left"], function (e, t) {
        J.cssHooks[t] = k(G.pixelPosition, function (e, n) {
            if (n) return n = x(e, t), ze.test(n) ? J(e).position()[t] + "px" : n
        })
    }), J.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        J.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, i) {
            J.fn[i] = function (i, o) {
                var r = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return he(this, function (t, n, i) {
                    var o;
                    return J.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? J.css(t, n, s) : J.style(t, n, i, s)
                }, t, r ? i : void 0, r, null)
            }
        })
    }), J.fn.size = function () {
        return this.length
    }, J.fn.andSelf = J.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return J
    });
    var jt = e.jQuery,
        Nt = e.$;
    return J.noConflict = function (t) {
        return e.$ === J && (e.$ = Nt), t && e.jQuery === J && (e.jQuery = jt), J
    }, void 0 === t && (e.jQuery = e.$ = J), J
}), window.Modernizr = function (e, t, n) {
    function i(e) {
        g.cssText = e
    }

    function o(e, t) {
        return i(b.join(e + ";") + (t || ""))
    }

    function r(e, t) {
        return typeof e === t
    }

    function s(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function a(e, t) {
        for (var i in e) {
            var o = e[i];
            if (!s(o, "-") && g[o] !== n) return "pfx" != t || o
        }
        return !1
    }

    function l(e, t, i) {
        for (var o in e) {
            var s = t[e[o]];
            if (s !== n) return !1 === i ? e[o] : r(s, "function") ? s.bind(i || t) : s
        }
        return !1
    }

    function c(e, t, n) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            o = (e + " " + k.join(i + " ") + i).split(" ");
        return r(t, "string") || r(t, "undefined") ? a(o, t) : (o = (e + " " + S.join(i + " ") + i).split(" "), l(o, t, n))
    }
    var u, d, p = {},
        f = t.documentElement,
        h = "modernizr",
        v = t.createElement(h),
        g = v.style,
        m = t.createElement("input"),
        y = ":)",
        w = {}.toString,
        b = " -webkit- -moz- -o- -ms- ".split(" "),
        x = "Webkit Moz O ms",
        k = x.split(" "),
        S = x.toLowerCase().split(" "),
        T = {
            svg: "http://www.w3.org/2000/svg"
        },
        C = {},
        $ = {},
        E = {},
        A = [],
        L = A.slice,
        O = function (e, n, i, o) {
            var r, s, a, l, c = t.createElement("div"),
                u = t.body,
                d = u || t.createElement("body");
            if (parseInt(i, 10))
                for (; i--;) a = t.createElement("div"), a.id = o ? o[i] : h + (i + 1), c.appendChild(a);
            return r = ["&#173;", '<style id="s', h, '">', e, "</style>"].join(""), c.id = h, (u ? c : d).innerHTML += r, d.appendChild(c), u || (d.style.background = "", d.style.overflow = "hidden", l = f.style.overflow, f.style.overflow = "hidden", f.appendChild(d)), s = n(c, e), u ? c.parentNode.removeChild(c) : (d.parentNode.removeChild(d), f.style.overflow = l), !!s
        },
        M = function (t) {
            var n = e.matchMedia || e.msMatchMedia;
            if (n) return n(t) && n(t).matches || !1;
            var i;
            return O("@media " + t + " { #" + h + " { position: absolute; } }", function (t) {
                i = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
            }), i
        },
        j = function () {
            function e(e, o) {
                o = o || t.createElement(i[e] || "div"), e = "on" + e;
                var s = e in o;
                return s || (o.setAttribute || (o = t.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(e, ""), s = r(o[e], "function"), r(o[e], "undefined") || (o[e] = n), o.removeAttribute(e))), o = null, s
            }
            var i = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return e
        }(),
        N = {}.hasOwnProperty;
    d = r(N, "undefined") || r(N.call, "undefined") ? function (e, t) {
        return t in e && r(e.constructor.prototype[t], "undefined")
    } : function (e, t) {
        return N.call(e, t)
    }, Function.prototype.bind || (Function.prototype.bind = function (e) {
        var t = this;
        if ("function" != typeof t) throw new TypeError;
        var n = L.call(arguments, 1),
            i = function () {
                if (this instanceof i) {
                    var o = function () { };
                    o.prototype = t.prototype;
                    var r = new o,
                        s = t.apply(r, n.concat(L.call(arguments)));
                    return Object(s) === s ? s : r
                }
                return t.apply(e, n.concat(L.call(arguments)))
            };
        return i
    }), C.flexbox = function () {
        return c("flexWrap")
    }, C.flexboxlegacy = function () {
        return c("boxDirection")
    }, C.canvas = function () {
        var e = t.createElement("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    }, C.canvastext = function () {
        return !(!p.canvas || !r(t.createElement("canvas").getContext("2d").fillText, "function"))
    }, C.webgl = function () {
        return !!e.WebGLRenderingContext
    }, C.touch = function () {
        var n;
        return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : O(["@media (", b.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (e) {
            n = 9 === e.offsetTop
        }), n
    }, C.geolocation = function () {
        return "geolocation" in navigator
    }, C.postmessage = function () {
        return !!e.postMessage
    }, C.websqldatabase = function () {
        return !!e.openDatabase
    }, C.indexedDB = function () {
        return !!c("indexedDB", e)
    }, C.hashchange = function () {
        return j("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
    }, C.history = function () {
        return !(!e.history || !history.pushState)
    }, C.draganddrop = function () {
        var e = t.createElement("div");
        return "draggable" in e || "ondragstart" in e && "ondrop" in e
    }, C.websockets = function () {
        return "WebSocket" in e || "MozWebSocket" in e
    }, C.rgba = function () {
        return i("background-color:rgba(150,255,150,.5)"), s(g.backgroundColor, "rgba")
    }, C.hsla = function () {
        return i("background-color:hsla(120,40%,100%,.5)"), s(g.backgroundColor, "rgba") || s(g.backgroundColor, "hsla")
    }, C.multiplebgs = function () {
        return i("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(g.background)
    }, C.backgroundsize = function () {
        return c("backgroundSize")
    }, C.borderimage = function () {
        return c("borderImage")
    }, C.borderradius = function () {
        return c("borderRadius")
    }, C.boxshadow = function () {
        return c("boxShadow")
    }, C.textshadow = function () {
        return "" === t.createElement("div").style.textShadow
    }, C.opacity = function () {
        return o("opacity:.55"), /^0.55$/.test(g.opacity)
    }, C.cssanimations = function () {
        return c("animationName")
    }, C.csscolumns = function () {
        return c("columnCount")
    }, C.cssgradients = function () {
        var e = "background-image:";
        return i((e + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + e) + b.join("linear-gradient(left top,#9f9, white);" + e)).slice(0, -e.length)), s(g.backgroundImage, "gradient")
    }, C.cssreflections = function () {
        return c("boxReflect")
    }, C.csstransforms = function () {
        return !!c("transform")
    }, C.csstransforms3d = function () {
        var e = !!c("perspective");
        return e && "webkitPerspective" in f.style && O("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (t, n) {
            e = 9 === t.offsetLeft && 3 === t.offsetHeight
        }), e
    }, C.csstransitions = function () {
        return c("transition")
    }, C.fontface = function () {
        var e;
        return O('@font-face {font-family:"font";src:url("https://")}', function (n, i) {
            var o = t.getElementById("smodernizr"),
                r = o.sheet || o.styleSheet,
                s = r ? r.cssRules && r.cssRules[0] ? r.cssRules[0].cssText : r.cssText || "" : "";
            e = /src/i.test(s) && 0 === s.indexOf(i.split(" ")[0])
        }), e
    }, C.generatedcontent = function () {
        var e;
        return O(["#", h, "{font:0/0 a}#", h, ':after{content:"', y, '";visibility:hidden;font:3px/1 a}'].join(""), function (t) {
            e = t.offsetHeight >= 3
        }), e
    }, C.video = function () {
        var e = t.createElement("video"),
            n = !1;
        try {
            (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (e) { }
        return n
    }, C.audio = function () {
        var e = t.createElement("audio"),
            n = !1;
        try {
            (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (e) { }
        return n
    }, C.localstorage = function () {
        try {
            return localStorage.setItem(h, h), localStorage.removeItem(h), !0
        } catch (e) {
            return !1
        }
    }, C.sessionstorage = function () {
        try {
            return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0
        } catch (e) {
            return !1
        }
    }, C.webworkers = function () {
        return !!e.Worker
    }, C.applicationcache = function () {
        return !!e.applicationCache
    }, C.svg = function () {
        return !!t.createElementNS && !!t.createElementNS(T.svg, "svg").createSVGRect
    }, C.inlinesvg = function () {
        var e = t.createElement("div");
        return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == T.svg
    }, C.smil = function () {
        return !!t.createElementNS && /SVGAnimate/.test(w.call(t.createElementNS(T.svg, "animate")))
    }, C.svgclippaths = function () {
        return !!t.createElementNS && /SVGClipPath/.test(w.call(t.createElementNS(T.svg, "clipPath")))
    };
    for (var D in C) d(C, D) && (u = D.toLowerCase(), p[u] = C[D](), A.push((p[u] ? "" : "no-") + u));
    return p.input || function () {
        p.input = function (n) {
            for (var i = 0, o = n.length; i < o; i++) E[n[i]] = !!(n[i] in m);
            return E.list && (E.list = !(!t.createElement("datalist") || !e.HTMLDataListElement)), E
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), p.inputtypes = function (e) {
            for (var i, o, r, s = 0, a = e.length; s < a; s++) m.setAttribute("type", o = e[s]), i = "text" !== m.type, i && (m.value = y, m.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && m.style.WebkitAppearance !== n ? (f.appendChild(m), r = t.defaultView, i = r.getComputedStyle && "textfield" !== r.getComputedStyle(m, null).WebkitAppearance && 0 !== m.offsetHeight, f.removeChild(m)) : /^(search|tel)$/.test(o) || (i = /^(url|email)$/.test(o) ? m.checkValidity && !1 === m.checkValidity() : m.value != y)), $[e[s]] = !!i;
            return $
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }(), p.addTest = function (e, t) {
        if ("object" == typeof e)
            for (var i in e) d(e, i) && p.addTest(i, e[i]);
        else {
            if (e = e.toLowerCase(), p[e] !== n) return p;
            t = "function" == typeof t ? t() : t, f.className += " " + (t ? "" : "no-") + e, p[e] = t
        }
        return p
    }, i(""), v = m = null,
        function (e, t) {
            function n(e, t) {
                var n = e.createElement("p"),
                    i = e.getElementsByTagName("head")[0] || e.documentElement;
                return n.innerHTML = "x<style>" + t + "</style>", i.insertBefore(n.lastChild, i.firstChild)
            }

            function i() {
                var e = m.elements;
                return "string" == typeof e ? e.split(" ") : e
            }

            function o(e) {
                var t = g[e[h]];
                return t || (t = {}, v++ , e[h] = v, g[v] = t), t
            }

            function r(e, n, i) {
                if (n || (n = t), u) return n.createElement(e);
                i || (i = o(n));
                var r;
                return r = i.cache[e] ? i.cache[e].cloneNode() : f.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e), !r.canHaveChildren || p.test(e) || r.tagUrn ? r : i.frag.appendChild(r)
            }

            function s(e, n) {
                if (e || (e = t), u) return e.createDocumentFragment();
                n = n || o(e);
                for (var r = n.frag.cloneNode(), s = 0, a = i(), l = a.length; s < l; s++) r.createElement(a[s]);
                return r
            }

            function a(e, t) {
                t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
                    return m.shivMethods ? r(n, e, t) : t.createElem(n)
                }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-]+/g, function (e) {
                    return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                }) + ");return n}")(m, t.frag)
            }

            function l(e) {
                e || (e = t);
                var i = o(e);
                return !m.shivCSS || c || i.hasCSS || (i.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), u || a(e, i), e
            }
            var c, u, d = e.html5 || {},
                p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                h = "_html5shiv",
                v = 0,
                g = {};
            ! function () {
                try {
                    var e = t.createElement("a");
                    e.innerHTML = "<xyz></xyz>", c = "hidden" in e, u = 1 == e.childNodes.length || function () {
                        t.createElement("a");
                        var e = t.createDocumentFragment();
                        return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement
                    }()
                } catch (e) {
                    c = !0, u = !0
                }
            }();
            var m = {
                elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                version: "3.7.0",
                shivCSS: !1 !== d.shivCSS,
                supportsUnknownElements: u,
                shivMethods: !1 !== d.shivMethods,
                type: "default",
                shivDocument: l,
                createElement: r,
                createDocumentFragment: s
            };
            e.html5 = m, l(t)
        }(this, t), p._version = "2.8.3", p._prefixes = b, p._domPrefixes = S, p._cssomPrefixes = k, p.mq = M, p.hasEvent = j, p.testProp = function (e) {
            return a([e])
        }, p.testAllProps = c, p.testStyles = O, p.prefixed = function (e, t, n) {
            return t ? c(e, t, n) : c(e, "pfx")
        }, f.className = f.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + A.join(" "), p
}(this, this.document),
    function () {
        var e, t, n, i, o, r, s, a, l, c, u, d, p, f, h, v, g, m, y, w, b, x, k, S, T, C, $, E, A, L, O, M, j, N, D, H, P, I, q, z, R, F, W, B, U, X, _, V, Y, Q = [].slice,
            G = {}.hasOwnProperty,
            K = function (e, t) {
                function n() {
                    this.constructor = e
                }
                for (var i in t) G.call(t, i) && (e[i] = t[i]);
                return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
            },
            J = [].indexOf || function (e) {
                for (var t = 0, n = this.length; t < n; t++)
                    if (t in this && this[t] === e) return t;
                return -1
            };
        for (b = {
            catchupTime: 100,
            initialRate: .03,
            minTime: 250,
            ghostTime: 100,
            maxProgressPerFrame: 20,
            easeFactor: 1.25,
            startOnPageLoad: !0,
            restartOnPushState: !0,
            restartOnRequestAfter: 500,
            target: "body",
            elements: {
                checkInterval: 100,
                selectors: ["body"]
            },
            eventLag: {
                minSamples: 10,
                sampleCount: 3,
                lagThreshold: 3
            },
            ajax: {
                trackMethods: ["GET"],
                trackWebSockets: !0,
                ignoreURLs: []
            }
        }, A = function () {
            var e;
            return null != (e = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? e : +new Date
        },
            O = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, w = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == O && (O = function (e) {
                return setTimeout(e, 50)
            }, w = function (e) {
                return clearTimeout(e)
            }), j = function (e) {
                var t, n;
                return t = A(), (n = function () {
                    var i;
                    return i = A() - t, i >= 33 ? (t = A(), e(i, function () {
                        return O(n)
                    })) : setTimeout(n, 33 - i)
                })()
            }, M = function () {
                var e, t, n;
                return n = arguments[0], t = arguments[1], e = 3 <= arguments.length ? Q.call(arguments, 2) : [], "function" == typeof n[t] ? n[t].apply(n, e) : n[t]
            }, x = function () {
                var e, t, n, i, o, r, s;
                for (t = arguments[0], i = 2 <= arguments.length ? Q.call(arguments, 1) : [], r = 0, s = i.length; r < s; r++)
                    if (n = i[r])
                        for (e in n) G.call(n, e) && (o = n[e], null != t[e] && "object" == typeof t[e] && null != o && "object" == typeof o ? x(t[e], o) : t[e] = o);
                return t
            }, g = function (e) {
                var t, n, i, o, r;
                for (n = t = 0, o = 0, r = e.length; o < r; o++) i = e[o], n += Math.abs(i), t++;
                return n / t
            }, S = function (e, t) {
                var n, i;
                if (null == e && (e = "options"), null == t && (t = !0), i = document.querySelector("[data-pace-" + e + "]")) {
                    if (n = i.getAttribute("data-pace-" + e), !t) return n;
                    try {
                        return JSON.parse(n)
                    } catch (e) {
                        return e, void ("undefined" != typeof console && console)
                    }
                }
            }, s = function () {
                function e() { }
                return e.prototype.on = function (e, t, n, i) {
                    var o;
                    return null == i && (i = !1), null == this.bindings && (this.bindings = {}), null == (o = this.bindings)[e] && (o[e] = []), this.bindings[e].push({
                        handler: t,
                        ctx: n,
                        once: i
                    })
                }, e.prototype.once = function (e, t, n) {
                    return this.on(e, t, n, !0)
                }, e.prototype.off = function (e, t) {
                    var n, i, o;
                    if (null != (null != (i = this.bindings) ? i[e] : void 0)) {
                        if (null == t) return delete this.bindings[e];
                        for (n = 0, o = []; n < this.bindings[e].length;) this.bindings[e][n].handler === t ? o.push(this.bindings[e].splice(n, 1)) : o.push(n++);
                        return o
                    }
                }, e.prototype.trigger = function () {
                    var e, t, n, i, o, r, s, a, l;
                    if (n = arguments[0], e = 2 <= arguments.length ? Q.call(arguments, 1) : [], null != (s = this.bindings) ? s[n] : void 0) {
                        for (o = 0, l = []; o < this.bindings[n].length;) a = this.bindings[n][o], i = a.handler, t = a.ctx, r = a.once, i.apply(null != t ? t : this, e), r ? l.push(this.bindings[n].splice(o, 1)) : l.push(o++);
                        return l
                    }
                }, e
            }(), c = window.Pace || {}, window.Pace = c, x(c, s.prototype), L = c.options = x({}, b, window.paceOptions, S()), _ = ["ajax", "document", "eventLag", "elements"], W = 0, U = _.length; W < U; W++) P = _[W], !0 === L[P] && (L[P] = b[P]);
        l = function (e) {
            function t() {
                return V = t.__super__.constructor.apply(this, arguments)
            }
            return K(t, e), t
        }(Error), t = function () {
            function e() {
                this.progress = 0
            }
            return e.prototype.getElement = function () {
                var e;
                if (null == this.el) {
                    if (!(e = document.querySelector(L.target))) throw new l;
                    this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != e.firstChild ? e.insertBefore(this.el, e.firstChild) : e.appendChild(this.el)
                }
                return this.el
            }, e.prototype.finish = function () {
                var e;
                return e = this.getElement(), e.className = e.className.replace("pace-active", ""), e.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done"
            }, e.prototype.update = function (e) {
                return this.progress = e, this.render()
            }, e.prototype.destroy = function () {
                try {
                    this.getElement().parentNode.removeChild(this.getElement())
                } catch (e) {
                    l = e
                }
                return this.el = void 0
            }, e.prototype.render = function () {
                var e, t, n, i, o, r, s;
                if (null == document.querySelector(L.target)) return !1;
                for (e = this.getElement(), i = "translate3d(" + this.progress + "%, 0, 0)", s = ["webkitTransform", "msTransform", "transform"], o = 0, r = s.length; o < r; o++) t = s[o], e.children[0].style[t] = i;
                return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (e.children[0].setAttribute("data-progress-text", (0 | this.progress) + "%"), this.progress >= 100 ? n = "99" : (n = this.progress < 10 ? "0" : "", n += 0 | this.progress), e.children[0].setAttribute("data-progress", "" + n)), this.lastRenderedProgress = this.progress
            }, e.prototype.done = function () {
                return this.progress >= 100
            }, e
        }(), a = function () {
            function e() {
                this.bindings = {}
            }
            return e.prototype.trigger = function (e, t) {
                var n, i, o, r, s;
                if (null != this.bindings[e]) {
                    for (r = this.bindings[e], s = [], i = 0, o = r.length; i < o; i++) n = r[i], s.push(n.call(this, t));
                    return s
                }
            }, e.prototype.on = function (e, t) {
                var n;
                return null == (n = this.bindings)[e] && (n[e] = []), this.bindings[e].push(t)
            }, e
        }(), F = window.XMLHttpRequest, R = window.XDomainRequest, z = window.WebSocket, k = function (e, t) {
            var n, i;
            i = [];
            for (n in t.prototype) try {
                null == e[n] && "function" != typeof t[n] ? "function" == typeof Object.defineProperty ? i.push(Object.defineProperty(e, n, {
                    get: function () {
                        return t.prototype[n]
                    },
                    configurable: !0,
                    enumerable: !0
                })) : i.push(e[n] = t.prototype[n]) : i.push(void 0)
            } catch (e) {
                e
            }
            return i
        }, $ = [], c.ignore = function () {
            var e, t, n;
            return t = arguments[0], e = 2 <= arguments.length ? Q.call(arguments, 1) : [], $.unshift("ignore"), n = t.apply(null, e), $.shift(), n
        }, c.track = function () {
            var e, t, n;
            return t = arguments[0], e = 2 <= arguments.length ? Q.call(arguments, 1) : [], $.unshift("track"), n = t.apply(null, e), $.shift(), n
        }, H = function (e) {
            var t;
            if (null == e && (e = "GET"), "track" === $[0]) return "force";
            if (!$.length && L.ajax) {
                if ("socket" === e && L.ajax.trackWebSockets) return !0;
                if (t = e.toUpperCase(), J.call(L.ajax.trackMethods, t) >= 0) return !0
            }
            return !1
        }, u = function (e) {
            function t() {
                var e, n = this;
                t.__super__.constructor.apply(this, arguments), e = function (e) {
                    var t;
                    return t = e.open, e.open = function (i, o, r) {
                        return H(i) && n.trigger("request", {
                            type: i,
                            url: o,
                            request: e
                        }), t.apply(e, arguments)
                    }
                }, window.XMLHttpRequest = function (t) {
                    var n;
                    return n = new F(t), e(n), n
                };
                try {
                    k(window.XMLHttpRequest, F)
                } catch (e) { }
                if (null != R) {
                    window.XDomainRequest = function () {
                        var t;
                        return t = new R, e(t), t
                    };
                    try {
                        k(window.XDomainRequest, R)
                    } catch (e) { }
                }
                if (null != z && L.ajax.trackWebSockets) {
                    window.WebSocket = function (e, t) {
                        var i;
                        return i = null != t ? new z(e, t) : new z(e), H("socket") && n.trigger("request", {
                            type: "socket",
                            url: e,
                            protocols: t,
                            request: i
                        }), i
                    };
                    try {
                        k(window.WebSocket, z)
                    } catch (e) { }
                }
            }
            return K(t, e), t
        }(a), B = null, T = function () {
            return null == B && (B = new u), B
        }, D = function (e) {
            var t, n, i, o;
            for (o = L.ajax.ignoreURLs, n = 0, i = o.length; n < i; n++)
                if ("string" == typeof (t = o[n])) {
                    if (-1 !== e.indexOf(t)) return !0
                } else if (t.test(e)) return !0;
            return !1
        }, T().on("request", function (t) {
            var n, i, o, r, s;
            if (r = t.type, o = t.request, s = t.url, !D(s)) return c.running || !1 === L.restartOnRequestAfter && "force" !== H(r) ? void 0 : (i = arguments, n = L.restartOnRequestAfter || 0, "boolean" == typeof n && (n = 0), setTimeout(function () {
                var t, n, s, a, l;
                if ("socket" === r ? o.readyState < 2 : 0 < (s = o.readyState) && s < 4) {
                    for (c.restart(), a = c.sources, l = [], t = 0, n = a.length; t < n; t++) {
                        if ((P = a[t]) instanceof e) {
                            P.watch.apply(P, i);
                            break
                        }
                        l.push(void 0)
                    }
                    return l
                }
            }, n))
        }), e = function () {
            function e() {
                var e = this;
                this.elements = [], T().on("request", function () {
                    return e.watch.apply(e, arguments)
                })
            }
            return e.prototype.watch = function (e) {
                var t, n, i, o;
                if (i = e.type, t = e.request, o = e.url, !D(o)) return n = "socket" === i ? new f(t) : new h(t), this.elements.push(n)
            }, e
        }(), h = function () {
            function e(e) {
                var t, n, i, o, r, s = this;
                if (this.progress = 0, null != window.ProgressEvent)
                    for (null, e.addEventListener("progress", function (e) {
                        return e.lengthComputable ? s.progress = 100 * e.loaded / e.total : s.progress = s.progress + (100 - s.progress) / 2
                    }, !1), r = ["load", "abort", "timeout", "error"], n = 0, i = r.length; n < i; n++) t = r[n], e.addEventListener(t, function () {
                        return s.progress = 100
                    }, !1);
                else o = e.onreadystatechange, e.onreadystatechange = function () {
                    var t;
                    return 0 === (t = e.readyState) || 4 === t ? s.progress = 100 : 3 === e.readyState && (s.progress = 50), "function" == typeof o ? o.apply(null, arguments) : void 0
                }
            }
            return e
        }(), f = function () {
            function e(e) {
                var t, n, i, o, r = this;
                for (this.progress = 0, o = ["error", "open"], n = 0, i = o.length; n < i; n++) t = o[n], e.addEventListener(t, function () {
                    return r.progress = 100
                }, !1)
            }
            return e
        }(), i = function () {
            function e(e) {
                var t, n, i, r;
                for (null == e && (e = {}), this.elements = [], null == e.selectors && (e.selectors = []), r = e.selectors, n = 0, i = r.length; n < i; n++) t = r[n], this.elements.push(new o(t))
            }
            return e
        }(), o = function () {
            function e(e) {
                this.selector = e, this.progress = 0, this.check()
            }
            return e.prototype.check = function () {
                var e = this;
                return document.querySelector(this.selector) ? this.done() : setTimeout(function () {
                    return e.check()
                }, L.elements.checkInterval)
            }, e.prototype.done = function () {
                return this.progress = 100
            }, e
        }(), n = function () {
            function e() {
                var e, t, n = this;
                this.progress = null != (t = this.states[document.readyState]) ? t : 100, e = document.onreadystatechange, document.onreadystatechange = function () {
                    return null != n.states[document.readyState] && (n.progress = n.states[document.readyState]), "function" == typeof e ? e.apply(null, arguments) : void 0
                }
            }
            return e.prototype.states = {
                loading: 0,
                interactive: 50,
                complete: 100
            }, e
        }(), r = function () {
            function e() {
                var e, t, n, i, o, r = this;
                this.progress = 0, e = 0, o = [], i = 0, n = A(), t = setInterval(function () {
                    var s;
                    return s = A() - n - 50, n = A(), o.push(s), o.length > L.eventLag.sampleCount && o.shift(), e = g(o), ++i >= L.eventLag.minSamples && e < L.eventLag.lagThreshold ? (r.progress = 100, clearInterval(t)) : r.progress = 3 / (e + 3) * 100
                }, 50)
            }
            return e
        }(), p = function () {
            function e(e) {
                this.source = e, this.last = this.sinceLastUpdate = 0, this.rate = L.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = M(this.source, "progress"))
            }
            return e.prototype.tick = function (e, t) {
                var n;
                return null == t && (t = M(this.source, "progress")), t >= 100 && (this.done = !0), t === this.last ? this.sinceLastUpdate += e : (this.sinceLastUpdate && (this.rate = (t - this.last) / this.sinceLastUpdate), this.catchup = (t - this.progress) / L.catchupTime, this.sinceLastUpdate = 0, this.last = t), t > this.progress && (this.progress += this.catchup * e), n = 1 - Math.pow(this.progress / 100, L.easeFactor), this.progress += n * this.rate * e, this.progress = Math.min(this.lastProgress + L.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
            }, e
        }(), I = null, N = null, m = null, q = null, v = null, y = null, c.running = !1, C = function () {
            if (L.restartOnPushState) return c.restart()
        }, null != window.history.pushState && (X = window.history.pushState, window.history.pushState = function () {
            return C(), X.apply(window.history, arguments)
        }), null != window.history.replaceState && (Y = window.history.replaceState, window.history.replaceState = function () {
            return C(), Y.apply(window.history, arguments)
        }), d = {
            ajax: e,
            elements: i,
            document: n,
            eventLag: r
        }, (E = function () {
            var e, n, i, o, r, s, a, l;
            for (c.sources = I = [], s = ["ajax", "elements", "document", "eventLag"], n = 0, o = s.length; n < o; n++) e = s[n], !1 !== L[e] && I.push(new d[e](L[e]));
            for (l = null != (a = L.extraSources) ? a : [], i = 0, r = l.length; i < r; i++) P = l[i], I.push(new P(L));
            return c.bar = m = new t, N = [], q = new p
        })(), c.stop = function () {
            return c.trigger("stop"), c.running = !1, m.destroy(), y = !0, null != v && ("function" == typeof w && w(v), v = null), E()
        }, c.restart = function () {
            return c.trigger("restart"), c.stop(), c.start()
        }, c.go = function () {
            var e;
            return c.running = !0, m.render(), e = A(), y = !1, v = j(function (t, n) {
                var i, o, r, s, a, l, u, d, f, h, v, g, w, b, x;
                for (100 - m.progress, o = h = 0, r = !0, l = v = 0, w = I.length; v < w; l = ++v)
                    for (P = I[l], f = null != N[l] ? N[l] : N[l] = [], a = null != (x = P.elements) ? x : [P], u = g = 0, b = a.length; g < b; u = ++g) s = a[u], d = null != f[u] ? f[u] : f[u] = new p(s), r &= d.done, d.done || (o++ , h += d.tick(t));
                return i = h / o, m.update(q.tick(t, i)), m.done() || r || y ? (m.update(100), c.trigger("done"), setTimeout(function () {
                    return m.finish(), c.running = !1, c.trigger("hide")
                }, Math.max(L.ghostTime, Math.max(L.minTime - (A() - e), 0)))) : n()
            })
        }, c.start = function (e) {
            x(L, e), c.running = !0;
            try {
                m.render()
            } catch (e) {
                l = e
            }
            return document.querySelector(".pace") ? (c.trigger("start"), c.go()) : setTimeout(c.start, 50)
        }, "function" == typeof define && define.amd ? define(["pace"], function () {
            return c
        }) : "object" == typeof exports ? module.exports = c : L.startOnPageLoad && c.start()
    }.call(this),
    function (e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], function (n) {
            return t(n, e, e.document, e.Math)
        }) : "object" == typeof exports && exports ? module.exports = t(require("jquery"), e, e.document, e.Math) : t(jQuery, e, e.document, e.Math)
    }("undefined" != typeof window ? window : this, function (e, t, n, i, o) {
        "use strict";
        var r = "fullpage-wrapper",
            s = "." + r,
            a = "fp-responsive",
            l = "fp-notransition",
            c = "fp-destroyed",
            u = "fp-enabled",
            d = "fp-viewing",
            p = "active",
            f = "." + p,
            h = "fp-completely",
            v = "." + h,
            g = "fp-section",
            m = "." + g,
            y = m + f,
            w = m + ":first",
            b = m + ":last",
            x = "fp-tableCell",
            k = "." + x,
            S = "fp-nav",
            T = "#" + S,
            C = "fp-tooltip",
            $ = "." + C,
            E = "fp-slide",
            A = "." + E,
            L = A + f,
            O = "fp-slides",
            M = "." + O,
            j = "fp-slidesContainer",
            N = "." + j,
            D = "fp-table",
            H = "fp-slidesNav",
            P = "." + H,
            I = P + " a",
            q = ".fp-controlArrow",
            z = "fp-prev",
            R = "." + z,
            F = "fp-controlArrow " + z,
            W = q + R,
            B = q + ".fp-next",
            U = e(t),
            X = e(n),
            _ = {
                scrollbars: !0,
                mouseWheel: !0,
                hideScrollbars: !1,
                fadeScrollbars: !1,
                disableMouse: !0,
                interactiveScrollbars: !0
            };
        e.fn.fullpage = function (R) {
            function Y(t, n) {
                t || Xt(0), Gt("autoScrolling", t, n);
                var i = e(y);
                R.autoScrolling && !R.scrollBar ? (Zt.css({
                    overflow: "hidden",
                    height: "100%"
                }), Q(Cn.recordHistory, "internal"), un.css({
                    "-ms-touch-action": "none",
                    "touch-action": "none"
                }), i.length && Xt(i.position().top)) : (Zt.css({
                    overflow: "visible",
                    height: "initial"
                }), Q(!1, "internal"), un.css({
                    "-ms-touch-action": "",
                    "touch-action": ""
                }), i.length && Zt.scrollTop(i.position().top))
            }

            function Q(e, t) {
                Gt("recordHistory", e, t)
            }

            function G(e, t) {
                Gt("scrollingSpeed", e, t)
            }

            function K(e, t) {
                Gt("fitToSection", e, t)
            }

            function J(e) {
                R.lockAnchors = e
            }

            function Z(e) {
                e ? (qt(), zt()) : (It(), Rt())
            }

            function ee(t, n) {
                void 0 !== n ? (n = n.replace(/ /g, "").split(","), e.each(n, function (e, n) {
                    Vt(t, n, "m")
                })) : t ? (Z(!0), Ft()) : (Z(!1), Wt())
            }

            function te(t, n) {
                void 0 !== n ? (n = n.replace(/ /g, "").split(","), e.each(n, function (e, n) {
                    Vt(t, n, "k")
                })) : R.keyboardScrolling = t
            }

            function ne() {
                var t = e(y).prev(m);
                t.length || !R.loopTop && !R.continuousVertical || (t = e(m).last()), t.length && ze(t, null, !0)
            }

            function ie() {
                var t = e(y).next(m);
                t.length || !R.loopBottom && !R.continuousVertical || (t = e(m).first()), t.length && ze(t, null, !1)
            }

            function oe(e, t) {
                G(0, "internal"), re(e, t), G(Cn.scrollingSpeed, "internal")
            }

            function re(e, t) {
                var n = Et(e);
                void 0 !== t ? Lt(e, t) : n.length > 0 && ze(n)
            }

            function se(e) {
                Pe("right", e)
            }

            function ae(e) {
                Pe("left", e)
            }

            function le(t) {
                if (!un.hasClass(c)) {
                    pn = !0, dn = U.height(), e(m).each(function () {
                        var t = e(this).find(M),
                            n = e(this).find(A);
                        R.verticalCentered && e(this).find(k).css("height", Ct(e(this)) + "px"), e(this).css("height", dn + "px"), R.scrollOverflow && (n.length ? n.each(function () {
                            St(e(this))
                        }) : St(e(this))), n.length > 1 && ut(t, t.find(L))
                    });
                    var n = e(y),
                        i = n.index(m);
                    i && oe(i + 1), pn = !1, e.isFunction(R.afterResize) && t && R.afterResize.call(un), e.isFunction(R.afterReBuild) && !t && R.afterReBuild.call(un)
                }
            }

            function ce(t) {
                var n = en.hasClass(a);
                t ? n || (Y(!1, "internal"), K(!1, "internal"), e(T).hide(), en.addClass(a), e.isFunction(R.afterResponsive) && R.afterResponsive.call(un, t)) : n && (Y(Cn.autoScrolling, "internal"), K(Cn.autoScrolling, "internal"), e(T).show(), en.removeClass(a), e.isFunction(R.afterResponsive) && R.afterResponsive.call(un, t))
            }

            function ue() {
                var t = un.find(R.sectionSelector);
                R.anchors.length || (R.anchors = t.filter("[data-anchor]").map(function () {
                    return e(this).data("anchor").toString()
                }).get()), R.navigationTooltips.length || (R.navigationTooltips = t.filter("[data-tooltip]").map(function () {
                    return e(this).data("tooltip").toString()
                }).get())
            }

            function de() {
                un.css({
                    height: "100%",
                    position: "relative"
                }), un.addClass(r), e("html").addClass(u), dn = U.height(), un.removeClass(c), ve(), e(m).each(function (t) {
                    var n = e(this),
                        i = n.find(A),
                        o = i.length;
                    fe(n, t), he(n, t), o > 0 ? pe(n, i, o) : R.verticalCentered && Tt(n)
                }), R.fixedElements && R.css3 && e(R.fixedElements).appendTo(en), R.navigation && me(), we(), R.scrollOverflow ? ("complete" === n.readyState && ye(), U.on("load", ye)) : ke()
            }

            function pe(t, n, i) {
                var o = 100 * i,
                    r = 100 / i;
                n.wrapAll('<div class="' + j + '" />'), n.parent().wrap('<div class="' + O + '" />'), t.find(N).css("width", o + "%"), i > 1 && (R.controlArrows && ge(t), R.slidesNavigation && Mt(t, i)), n.each(function (t) {
                    e(this).css("width", r + "%"), R.verticalCentered && Tt(e(this))
                });
                var s = t.find(L);
                s.length && (0 !== e(y).index(m) || 0 === e(y).index(m) && 0 !== s.index()) ? Ut(s, "internal") : n.eq(0).addClass(p)
            }

            function fe(t, n) {
                n || 0 !== e(y).length || t.addClass(p), sn = e(y), t.css("height", dn + "px"), R.paddingTop && t.css("padding-top", R.paddingTop), R.paddingBottom && t.css("padding-bottom", R.paddingBottom), void 0 !== R.sectionsColor[n] && t.css("background-color", R.sectionsColor[n]), void 0 !== R.anchors[n] && t.attr("data-anchor", R.anchors[n])
            }

            function he(t, n) {
                void 0 !== R.anchors[n] && t.hasClass(p) && bt(R.anchors[n], n), R.menu && R.css3 && e(R.menu).closest(s).length && e(R.menu).appendTo(en)
            }

            function ve() {
                un.find(R.sectionSelector).addClass(g), un.find(R.slideSelector).addClass(E)
            }

            function ge(e) {
                e.find(M).after('<div class="' + F + '"></div><div class="fp-controlArrow fp-next"></div>'), "#fff" != R.controlArrowColor && (e.find(B).css("border-color", "transparent transparent transparent " + R.controlArrowColor), e.find(W).css("border-color", "transparent " + R.controlArrowColor + " transparent transparent")), R.loopHorizontal || e.find(W).hide()
            }

            function me() {
                en.append('<div id="' + S + '"><ul></ul></div>');
                var t = e(T);
                t.addClass(function () {
                    return R.showActiveTooltip ? "fp-show-active " + R.navigationPosition : R.navigationPosition
                });
                for (var n = 0; n < e(m).length; n++) {
                    var i = "";
                    R.anchors.length && (i = R.anchors[n]);
                    var o = '<li><a href="#' + i + '"><span></span></a>',
                        r = R.navigationTooltips[n];
                    void 0 !== r && "" !== r && (o += '<div class="' + C + " " + R.navigationPosition + '">' + r + "</div>"), o += "</li>", t.find("ul").append(o)
                }
                e(T).css("margin-top", "-" + e(T).height() / 2 + "px"), e(T).find("li").eq(e(y).index(m)).find("a").addClass(p)
            }

            function ye() {
                e(m).each(function () {
                    var t = e(this).find(A);
                    t.length ? t.each(function () {
                        St(e(this))
                    }) : St(e(this))
                }), ke()
            }

            function we() {
                un.find('iframe[src*="youtube.com/embed/"]').each(function () {
                    be(e(this), "enablejsapi=1")
                })
            }

            function be(e, t) {
                var n = e.attr("src");
                e.attr("src", n + xe(n) + t)
            }

            function xe(e) {
                return /\?/.test(e) ? "&" : "?"
            }

            function ke() {
                var t = e(y);
                t.addClass(h), R.scrollOverflowHandler.afterRender && R.scrollOverflowHandler.afterRender(t), _e(t), Ve(t), R.scrollOverflowHandler.afterLoad(), Se() && e.isFunction(R.afterLoad) && R.afterLoad.call(t, t.data("anchor"), t.index(m) + 1), e.isFunction(R.afterRender) && R.afterRender.call(un)
            }

            function Se() {
                var e = t.location.hash.replace("#", "").split("/"),
                    n = Et(decodeURIComponent(e[0]));
                return !n.length || n.length && n.index() === sn.index()
            }

            function Te() {
                var t;
                if (!R.autoScrolling || R.scrollBar) {
                    var i = U.scrollTop(),
                        o = Ee(i),
                        r = 0,
                        s = i + U.height() / 2,
                        a = en.height() - U.height() === i,
                        l = n.querySelectorAll(m);
                    if (a) r = l.length - 1;
                    else if (i)
                        for (var c = 0; c < l.length; ++c) {
                            var u = l[c];
                            u.offsetTop <= s && (r = c)
                        } else r = 0;
                    if ($e(o) && (e(y).hasClass(h) || e(y).addClass(h).siblings().removeClass(h)), t = e(l).eq(r), !t.hasClass(p)) {
                        $n = !0;
                        var d, f, v = e(y),
                            g = v.index(m) + 1,
                            w = xt(t),
                            b = t.data("anchor"),
                            x = t.index(m) + 1,
                            k = t.find(L);
                        k.length && (f = k.data("anchor"), d = k.index()), hn && (t.addClass(p).siblings().removeClass(p), e.isFunction(R.onLeave) && R.onLeave.call(v, g, x, w), e.isFunction(R.afterLoad) && R.afterLoad.call(t, b, x), Qe(v), _e(t), Ve(t), bt(b, x - 1), R.anchors.length && (nn = b), jt(d, f, b, x)), clearTimeout(bn), bn = setTimeout(function () {
                            $n = !1
                        }, 100)
                    }
                    R.fitToSection && (clearTimeout(xn), xn = setTimeout(function () {
                        R.fitToSection && Ce()
                    }, R.fitToSectionDelay))
                }
            }

            function Ce() {
                hn && (pn = !0, ze(e(y)), pn = !1)
            }

            function $e(t) {
                var n = e(y).position().top,
                    i = n + U.height();
                return "up" == t ? i >= U.scrollTop() + U.height() : n <= U.scrollTop()
            }

            function Ee(e) {
                var t = e > En ? "down" : "up";
                return En = e, Nn = e, t
            }

            function Ae(e, t) {
                if (gn.m[e]) {
                    var n = "down" === e ? "bottom" : "top",
                        i = "down" === e ? ie : ne;
                    if (t.length > 0) {
                        if (!R.scrollOverflowHandler.isScrolled(n, t)) return !0;
                        i()
                    } else i()
                }
            }

            function Le(e) {
                var t = e.originalEvent;
                !Me(e.target) && R.autoScrolling && je(t) && e.preventDefault()
            }

            function Oe(t) {
                var n = t.originalEvent,
                    o = e(n.target).closest(m);
                if (!Me(t.target) && je(n)) {
                    R.autoScrolling && t.preventDefault();
                    var r = R.scrollOverflowHandler.scrollable(o),
                        s = Bt(n);
                    On = s.y, Mn = s.x, o.find(M).length && i.abs(Ln - Mn) > i.abs(An - On) ? !an && i.abs(Ln - Mn) > U.outerWidth() / 100 * R.touchSensitivity && (Ln > Mn ? gn.m.right && se(o) : gn.m.left && ae(o)) : R.autoScrolling && hn && i.abs(An - On) > U.height() / 100 * R.touchSensitivity && (An > On ? Ae("down", r) : On > An && Ae("up", r))
                }
            }

            function Me(t, n) {
                n = n || 0;
                var i = e(t).parent();
                return !!(n < R.normalScrollElementTouchThreshold && i.is(R.normalScrollElements)) || n != R.normalScrollElementTouchThreshold && Me(i, ++n)
            }

            function je(e) {
                return void 0 === e.pointerType || "mouse" != e.pointerType
            }

            function Ne(e) {
                var t = e.originalEvent;
                if (R.fitToSection && Zt.stop(), je(t)) {
                    var n = Bt(t);
                    An = n.y, Ln = n.x
                }
            }

            function De(e, t) {
                for (var n = 0, o = e.slice(i.max(e.length - t, 1)), r = 0; r < o.length; r++) n += o[r];
                return i.ceil(n / t)
            }

            function He(n) {
                var o = (new Date).getTime(),
                    r = e(v).hasClass("fp-normal-scroll");
                if (R.autoScrolling && !rn && !r) {
                    n = n || t.event;
                    var s = n.wheelDelta || -n.deltaY || -n.detail,
                        a = i.max(-1, i.min(1, s)),
                        l = void 0 !== n.wheelDeltaX || void 0 !== n.deltaX,
                        c = i.abs(n.wheelDeltaX) < i.abs(n.wheelDelta) || i.abs(n.deltaX) < i.abs(n.deltaY) || !l;
                    vn.length > 149 && vn.shift(), vn.push(i.abs(s)), R.scrollBar && (n.preventDefault ? n.preventDefault() : n.returnValue = !1);
                    var u = e(y),
                        d = R.scrollOverflowHandler.scrollable(u),
                        p = o - jn;
                    return jn = o, p > 200 && (vn = []), hn && De(vn, 10) >= De(vn, 70) && c && (a < 0 ? Ae("down", d) : Ae("up", d)), !1
                }
                R.fitToSection && Zt.stop()
            }

            function Pe(t, n) {
                var i = void 0 === n ? e(y) : n,
                    o = i.find(M),
                    r = o.find(A).length;
                if (!(!o.length || an || r < 2)) {
                    var s = o.find(L),
                        a = null;
                    if (a = "left" === t ? s.prev(A) : s.next(A), !a.length) {
                        if (!R.loopHorizontal) return;
                        a = "left" === t ? s.siblings(":last") : s.siblings(":first")
                    }
                    an = !0, ut(o, a, t)
                }
            }

            function Ie() {
                e(L).each(function () {
                    Ut(e(this), "internal")
                })
            }

            function qe(e) {
                var t = e.position(),
                    n = t.top,
                    i = t.top > Nn,
                    o = n - dn + e.outerHeight(),
                    r = R.bigSectionsDestination;
                return e.outerHeight() > dn ? (i || r) && "bottom" !== r || (n = o) : (i || pn && e.is(":last-child")) && (n = o), Nn = n, n
            }

            function ze(t, n, i) {
                if (void 0 !== t) {
                    var o, r, s = qe(t),
                        a = {
                            element: t,
                            callback: n,
                            isMovementUp: i,
                            dtop: s,
                            yMovement: xt(t),
                            anchorLink: t.data("anchor"),
                            sectionIndex: t.index(m),
                            activeSlide: t.find(L),
                            activeSection: e(y),
                            leavingSection: e(y).index(m) + 1,
                            localIsResizing: pn
                        };
                    a.activeSection.is(t) && !pn || R.scrollBar && U.scrollTop() === a.dtop && !t.hasClass("fp-auto-height") || (a.activeSlide.length && (o = a.activeSlide.data("anchor"), r = a.activeSlide.index()), R.autoScrolling && R.continuousVertical && void 0 !== a.isMovementUp && (!a.isMovementUp && "up" == a.yMovement || a.isMovementUp && "down" == a.yMovement) && (a = We(a)), e.isFunction(R.onLeave) && !a.localIsResizing && !1 === R.onLeave.call(a.activeSection, a.leavingSection, a.sectionIndex + 1, a.yMovement) || (a.localIsResizing || Qe(a.activeSection), R.scrollOverflowHandler.beforeLeave(), t.addClass(p).siblings().removeClass(p), _e(t), R.scrollOverflowHandler.onLeave(), hn = !1, jt(r, o, a.anchorLink, a.sectionIndex), Re(a), nn = a.anchorLink, bt(a.anchorLink, a.sectionIndex)))
                }
            }

            function Re(t) {
                if (R.css3 && R.autoScrolling && !R.scrollBar) $t("translate3d(0px, -" + i.round(t.dtop) + "px, 0px)", !0), R.scrollingSpeed ? (clearTimeout(yn), yn = setTimeout(function () {
                    Ue(t)
                }, R.scrollingSpeed)) : Ue(t);
                else {
                    var n = Fe(t);
                    e(n.element).animate(n.options, R.scrollingSpeed, R.easing).promise().done(function () {
                        R.scrollBar ? setTimeout(function () {
                            Ue(t)
                        }, 30) : Ue(t)
                    })
                }
            }

            function Fe(e) {
                var t = {};
                return R.autoScrolling && !R.scrollBar ? (t.options = {
                    top: -e.dtop
                }, t.element = s) : (t.options = {
                    scrollTop: e.dtop
                }, t.element = "html, body"), t
            }

            function We(t) {
                return t.isMovementUp ? e(y).before(t.activeSection.nextAll(m)) : e(y).after(t.activeSection.prevAll(m).get().reverse()), Xt(e(y).position().top), Ie(), t.wrapAroundElements = t.activeSection, t.dtop = t.element.position().top, t.yMovement = xt(t.element), t
            }

            function Be(t) {
                t.wrapAroundElements && t.wrapAroundElements.length && (t.isMovementUp ? e(w).before(t.wrapAroundElements) : e(b).after(t.wrapAroundElements), Xt(e(y).position().top), Ie())
            }

            function Ue(t) {
                Be(t), e.isFunction(R.afterLoad) && !t.localIsResizing && R.afterLoad.call(t.element, t.anchorLink, t.sectionIndex + 1), R.scrollOverflowHandler.afterLoad(), t.localIsResizing || Ve(t.element), t.element.addClass(h).siblings().removeClass(h), hn = !0, e.isFunction(t.callback) && t.callback.call(this)
            }

            function Xe(e, t) {
                e.attr(t, e.data(t)).removeAttr("data-" + t)
            }

            function _e(t) {
                if (R.lazyLoading) {
                    var n;
                    Ge(t).find("img[data-src], img[data-srcset], source[data-src], audio[data-src], iframe[data-src]").each(function () {
                        n = e(this), e.each(["src", "srcset"], function (e, t) {
                            var i = n.attr("data-" + t);
                            void 0 !== i && i && Xe(n, t)
                        }), n.is("source") && n.closest("video").get(0).load()
                    })
                }
            }

            function Ve(t) {
                var n = Ge(t);
                n.find("video, audio").each(function () {
                    var t = e(this).get(0);
                    t.hasAttribute("data-autoplay") && "function" == typeof t.play && t.play()
                }), n.find('iframe[src*="youtube.com/embed/"]').each(function () {
                    var t = e(this).get(0);
                    t.hasAttribute("data-autoplay") && Ye(t), t.onload = function () {
                        t.hasAttribute("data-autoplay") && Ye(t)
                    }
                })
            }

            function Ye(e) {
                e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
            }

            function Qe(t) {
                var n = Ge(t);
                n.find("video, audio").each(function () {
                    var t = e(this).get(0);
                    t.hasAttribute("data-keepplaying") || "function" != typeof t.pause || t.pause()
                }), n.find('iframe[src*="youtube.com/embed/"]').each(function () {
                    var t = e(this).get(0);
                    /youtube\.com\/embed\//.test(e(this).attr("src")) && !t.hasAttribute("data-keepplaying") && e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
                })
            }

            function Ge(t) {
                var n = t.find(L);
                return n.length && (t = e(n)), t
            }

            function Ke() {
                var e = t.location.hash.replace("#", "").split("/"),
                    n = decodeURIComponent(e[0]),
                    i = decodeURIComponent(e[1]);
                n && (R.animateAnchor ? Lt(n, i) : oe(n, i))
            }

            function Je() {
                if (!$n && !R.lockAnchors) {
                    var e = t.location.hash.replace("#", "").split("/"),
                        n = decodeURIComponent(e[0]),
                        i = decodeURIComponent(e[1]),
                        o = void 0 === nn,
                        r = void 0 === nn && void 0 === i && !an;
                    n.length && (n && n !== nn && !o || r || !an && on != i) && Lt(n, i)
                }
            }

            function Ze(t) {
                clearTimeout(kn);
                var n = e(":focus");
                if (!n.is("textarea") && !n.is("input") && !n.is("select") && "true" !== n.attr("contentEditable") && "" !== n.attr("contentEditable") && R.keyboardScrolling && R.autoScrolling) {
                    var i = t.which,
                        o = [40, 38, 32, 33, 34];
                    e.inArray(i, o) > -1 && t.preventDefault(), rn = t.ctrlKey, kn = setTimeout(function () {
                        lt(t)
                    }, 150)
                }
            }

            function et() {
                e(this).prev().trigger("click")
            }

            function tt(e) {
                fn && (rn = e.ctrlKey)
            }

            function nt(e) {
                2 == e.which && (Dn = e.pageY, un.on("mousemove", ct))
            }

            function it(e) {
                2 == e.which && un.off("mousemove")
            }

            function ot() {
                var t = e(this).closest(m);
                e(this).hasClass(z) ? gn.m.left && ae(t) : gn.m.right && se(t)
            }

            function rt() {
                fn = !1, rn = !1
            }

            function st(t) {
                t.preventDefault();
                var n = e(this).parent().index();
                ze(e(m).eq(n))
            }

            function at(t) {
                t.preventDefault();
                var n = e(this).closest(m).find(M);
                ut(n, n.find(A).eq(e(this).closest("li").index()))
            }

            function lt(t) {
                var n = t.shiftKey;
                if (hn || !([37, 39].indexOf(t.which) < 0)) switch (t.which) {
                    case 38:
                    case 33:
                        gn.k.up && ne();
                        break;
                    case 32:
                        if (n && gn.k.up) {
                            ne();
                            break
                        }
                    case 40:
                    case 34:
                        gn.k.down && ie();
                        break;
                    case 36:
                        gn.k.up && re(1);
                        break;
                    case 35:
                        gn.k.down && re(e(m).length);
                        break;
                    case 37:
                        gn.k.left && ae();
                        break;
                    case 39:
                        gn.k.right && se();
                        break;
                    default:
                        return
                }
            }

            function ct(e) {
                hn && (e.pageY < Dn && gn.m.up ? ne() : e.pageY > Dn && gn.m.down && ie()), Dn = e.pageY
            }

            function ut(t, n, i) {
                var o = t.closest(m),
                    r = {
                        slides: t,
                        destiny: n,
                        direction: i,
                        destinyPos: n.position(),
                        slideIndex: n.index(),
                        section: o,
                        sectionIndex: o.index(m),
                        anchorLink: o.data("anchor"),
                        slidesNav: o.find(P),
                        slideAnchor: Dt(n),
                        prevSlide: o.find(L),
                        prevSlideIndex: o.find(L).index(),
                        localIsResizing: pn
                    };
                if (r.xMovement = kt(r.prevSlideIndex, r.slideIndex), r.localIsResizing || (hn = !1), R.onSlideLeave && !r.localIsResizing && "none" !== r.xMovement && e.isFunction(R.onSlideLeave) && !1 === R.onSlideLeave.call(r.prevSlide, r.anchorLink, r.sectionIndex + 1, r.prevSlideIndex, r.xMovement, r.slideIndex)) return void (an = !1);
                n.addClass(p).siblings().removeClass(p), r.localIsResizing || (Qe(r.prevSlide), _e(n)), !R.loopHorizontal && R.controlArrows && (o.find(W).toggle(0 !== r.slideIndex), o.find(B).toggle(!n.is(":last-child"))), o.hasClass(p) && !r.localIsResizing && jt(r.slideIndex, r.slideAnchor, r.anchorLink, r.sectionIndex), pt(t, r, !0)
            }

            function dt(t) {
                ft(t.slidesNav, t.slideIndex), t.localIsResizing || (e.isFunction(R.afterSlideLoad) && R.afterSlideLoad.call(t.destiny, t.anchorLink, t.sectionIndex + 1, t.slideAnchor, t.slideIndex), hn = !0, Ve(t.destiny)), an = !1
            }

            function pt(e, t, n) {
                var o = t.destinyPos;
                if (R.css3) {
                    var r = "translate3d(-" + i.round(o.left) + "px, 0px, 0px)";
                    gt(e.find(N)).css(_t(r)), wn = setTimeout(function () {
                        n && dt(t)
                    }, R.scrollingSpeed, R.easing)
                } else e.animate({
                    scrollLeft: i.round(o.left)
                }, R.scrollingSpeed, R.easing, function () {
                    n && dt(t)
                })
            }

            function ft(e, t) {
                e.find(f).removeClass(p), e.find("li").eq(t).find("a").addClass(p)
            }

            function ht() {
                if (vt(), ln) {
                    var t = e(n.activeElement);
                    if (!t.is("textarea") && !t.is("input") && !t.is("select")) {
                        var o = U.height();
                        i.abs(o - Hn) > 20 * i.max(Hn, o) / 100 && (le(!0), Hn = o)
                    }
                } else clearTimeout(mn), mn = setTimeout(function () {
                    le(!0)
                }, 350)
            }

            function vt() {
                var e = R.responsive || R.responsiveWidth,
                    t = R.responsiveHeight,
                    n = e && U.outerWidth() < e,
                    i = t && U.height() < t;
                e && t ? ce(n || i) : e ? ce(n) : t && ce(i)
            }

            function gt(e) {
                var t = "all " + R.scrollingSpeed + "ms " + R.easingcss3;
                return e.removeClass(l), e.css({
                    "-webkit-transition": t,
                    transition: t
                })
            }

            function mt(e) {
                return e.addClass(l)
            }

            function yt(t, n) {
                R.navigation && (e(T).find(f).removeClass(p), t ? e(T).find('a[href="#' + t + '"]').addClass(p) : e(T).find("li").eq(n).find("a").addClass(p))
            }

            function wt(t) {
                R.menu && (e(R.menu).find(f).removeClass(p), e(R.menu).find('[data-menuanchor="' + t + '"]').addClass(p))
            }

            function bt(e, t) {
                wt(e), yt(e, t)
            }

            function xt(t) {
                var n = e(y).index(m),
                    i = t.index(m);
                return n == i ? "none" : n > i ? "up" : "down"
            }

            function kt(e, t) {
                return e == t ? "none" : e > t ? "left" : "right"
            }

            function St(e) {
                if (!e.hasClass("fp-noscroll")) {
                    e.css("overflow", "hidden");
                    var t, n = R.scrollOverflowHandler,
                        i = n.wrapContent(),
                        o = e.closest(m),
                        r = n.scrollable(e);
                    r.length ? t = n.scrollHeight(e) : (t = e.get(0).scrollHeight, R.verticalCentered && (t = e.find(k).get(0).scrollHeight));
                    var s = dn - parseInt(o.css("padding-bottom")) - parseInt(o.css("padding-top"));
                    t > s ? r.length ? n.update(e, s) : (R.verticalCentered ? e.find(k).wrapInner(i) : e.wrapInner(i), n.create(e, s)) : n.remove(e), e.css("overflow", "")
                }
            }

            function Tt(e) {
                e.hasClass(D) || e.addClass(D).wrapInner('<div class="' + x + '" style="height:' + Ct(e) + 'px;" />')
            }

            function Ct(e) {
                var t = dn;
                if (R.paddingTop || R.paddingBottom) {
                    var n = e;
                    n.hasClass(g) || (n = e.closest(m));
                    var i = parseInt(n.css("padding-top")) + parseInt(n.css("padding-bottom"));
                    t = dn - i
                }
                return t
            }

            function $t(e, t) {
                t ? gt(un) : mt(un), un.css(_t(e)), setTimeout(function () {
                    un.removeClass(l)
                }, 10)
            }

            function Et(t) {
                if (!t) return [];
                var n = un.find(m + '[data-anchor="' + t + '"]');
                return n.length || (n = e(m).eq(t - 1)), n
            }

            function At(e, t) {
                var n = t.find(M),
                    i = n.find(A + '[data-anchor="' + e + '"]');
                return i.length || (i = n.find(A).eq(e)), i
            }

            function Lt(e, t) {
                var n = Et(e);
                n.length && (void 0 === t && (t = 0), e === nn || n.hasClass(p) ? Ot(n, t) : ze(n, function () {
                    Ot(n, t)
                }))
            }

            function Ot(e, t) {
                if (void 0 !== t) {
                    var n = e.find(M),
                        i = At(t, e);
                    i.length && ut(n, i)
                }
            }

            function Mt(e, t) {
                e.append('<div class="' + H + '"><ul></ul></div>');
                var n = e.find(P);
                n.addClass(R.slidesNavPosition);
                for (var i = 0; i < t; i++) n.find("ul").append('<li><a href="#"><span></span></a></li>');
                n.css("margin-left", "-" + n.width() / 2 + "px"), n.find("li").first().find("a").addClass(p)
            }

            function jt(e, t, n, i) {
                var o = "";
                R.anchors.length && !R.lockAnchors && (e ? (void 0 !== n && (o = n), void 0 === t && (t = e), on = t, Nt(o + "/" + t)) : void 0 !== e ? (on = t, Nt(n)) : Nt(n)), Ht()
            }

            function Nt(e) {
                if (R.recordHistory) location.hash = e;
                else if (ln || cn) t.history.replaceState(o, o, "#" + e);
                else {
                    var n = t.location.href.split("#")[0];
                    t.location.replace(n + "#" + e)
                }
            }

            function Dt(e) {
                var t = e.data("anchor"),
                    n = e.index();
                return void 0 === t && (t = n), t
            }

            function Ht() {
                var t = e(y),
                    n = t.find(L),
                    i = Dt(t),
                    o = Dt(n),
                    r = String(i);
                n.length && (r = r + "-" + o), r = r.replace("/", "-").replace("#", "");
                var s = new RegExp("\\b\\s?" + d + "-[^\\s]+\\b", "g");
                en[0].className = en[0].className.replace(s, ""), en.addClass(d + "-" + r)
            }

            function Pt() {
                var e, i = n.createElement("p"),
                    r = {
                        webkitTransform: "-webkit-transform",
                        OTransform: "-o-transform",
                        msTransform: "-ms-transform",
                        MozTransform: "-moz-transform",
                        transform: "transform"
                    };
                n.body.insertBefore(i, null);
                for (var s in r) i.style[s] !== o && (i.style[s] = "translate3d(1px,1px,1px)", e = t.getComputedStyle(i).getPropertyValue(r[s]));
                return n.body.removeChild(i), e !== o && e.length > 0 && "none" !== e
            }

            function It() {
                n.addEventListener ? (n.removeEventListener("mousewheel", He, !1), n.removeEventListener("wheel", He, !1), n.removeEventListener("MozMousePixelScroll", He, !1)) : n.detachEvent("onmousewheel", He)
            }

            function qt() {
                var e, i = "";
                t.addEventListener ? e = "addEventListener" : (e = "attachEvent", i = "on");
                var r = "onwheel" in n.createElement("div") ? "wheel" : n.onmousewheel !== o ? "mousewheel" : "DOMMouseScroll";
                "DOMMouseScroll" == r ? n[e](i + "MozMousePixelScroll", He, !1) : n[e](i + r, He, !1)
            }

            function zt() {
                un.on("mousedown", nt).on("mouseup", it)
            }

            function Rt() {
                un.off("mousedown", nt).off("mouseup", it)
            }

            function Ft() {
                (ln || cn) && (R.autoScrolling && en.off(Tn.touchmove).on(Tn.touchmove, Le), e(s).off(Tn.touchstart).on(Tn.touchstart, Ne).off(Tn.touchmove).on(Tn.touchmove, Oe))
            }

            function Wt() {
                (ln || cn) && e(s).off(Tn.touchstart).off(Tn.touchmove)
            }

            function Bt(e) {
                var t = [];
                return t.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, cn && je(e) && R.scrollBar && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t
            }

            function Ut(e, t) {
                G(0, "internal"), void 0 !== t && (pn = !0), ut(e.closest(M), e), void 0 !== t && (pn = !1), G(Cn.scrollingSpeed, "internal")
            }

            function Xt(e) {
                var t = i.round(e);
                R.css3 && R.autoScrolling && !R.scrollBar ? $t("translate3d(0px, -" + t + "px, 0px)", !1) : R.autoScrolling && !R.scrollBar ? un.css("top", -t) : Zt.scrollTop(t)
            }

            function _t(e) {
                return {
                    "-webkit-transform": e,
                    "-moz-transform": e,
                    "-ms-transform": e,
                    transform: e
                }
            }

            function Vt(e, t, n) {
                switch (t) {
                    case "up":
                        gn[n].up = e;
                        break;
                    case "down":
                        gn[n].down = e;
                        break;
                    case "left":
                        gn[n].left = e;
                        break;
                    case "right":
                        gn[n].right = e;
                        break;
                    case "all":
                        "m" == n ? ee(e) : te(e)
                }
            }

            function Yt(t) {
                Y(!1, "internal"), ee(!1), te(!1), un.addClass(c), clearTimeout(wn), clearTimeout(yn), clearTimeout(mn), clearTimeout(bn), clearTimeout(xn), U.off("scroll", Te).off("hashchange", Je).off("resize", ht), X.off("click touchstart", T + " a").off("mouseenter", T + " li").off("mouseleave", T + " li").off("click touchstart", I).off("mouseover", R.normalScrollElements).off("mouseout", R.normalScrollElements), e(m).off("click touchstart", q), clearTimeout(wn), clearTimeout(yn), t && Qt()
            }

            function Qt() {
                Xt(0), un.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function () {
                    Xe(e(this), "src")
                }), un.find("img[data-srcset]").each(function () {
                    Xe(e(this), "srcset")
                }), e(T + ", " + P + ", " + q).remove(), e(m).css({
                    height: "",
                    "background-color": "",
                    padding: ""
                }), e(A).css({
                    width: ""
                }), un.css({
                    height: "",
                    position: "",
                    "-ms-touch-action": "",
                    "touch-action": ""
                }), Zt.css({
                    overflow: "",
                    height: ""
                }), e("html").removeClass(u), en.removeClass(a), e.each(en.get(0).className.split(/\s+/), function (e, t) {
                    0 === t.indexOf(d) && en.removeClass(t)
                }), e(m + ", " + A).each(function () {
                    R.scrollOverflowHandler.remove(e(this)), e(this).removeClass(D + " " + p)
                }), mt(un), un.find(k + ", " + N + ", " + M).each(function () {
                    e(this).replaceWith(this.childNodes)
                }), un.css({
                    "-webkit-transition": "none",
                    transition: "none"
                }), Zt.scrollTop(0);
                var t = [g, E, j];
                e.each(t, function (t, n) {
                    e("." + n).removeClass(n)
                })
            }

            function Gt(e, t, n) {
                R[e] = t, "internal" !== n && (Cn[e] = t)
            }

            function Kt() {
                var t = ["fadingEffect", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "resetSliders", "responsiveSlides", "offsetSections", "dragAndMove", "scrollOverflowReset", "parallax"];
                if (e("html").hasClass(u)) return void Jt("error", "Fullpage.js can only be initialized once and you are doing it multiple times!");
                R.continuousVertical && (R.loopTop || R.loopBottom) && (R.continuousVertical = !1, Jt("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), R.scrollBar && R.scrollOverflow && Jt("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), !R.continuousVertical || !R.scrollBar && R.autoScrolling || (R.continuousVertical = !1, Jt("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), e.each(t, function (e, t) {
                    R[t] && Jt("warn", "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: " + t)
                }), e.each(R.anchors, function (t, n) {
                    var i = X.find("[name]").filter(function () {
                        return e(this).attr("name") && e(this).attr("name").toLowerCase() == n.toLowerCase()
                    }),
                        o = X.find("[id]").filter(function () {
                            return e(this).attr("id") && e(this).attr("id").toLowerCase() == n.toLowerCase()
                        });
                    (o.length || i.length) && (Jt("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), o.length && Jt("error", '"' + n + '" is is being used by another element `id` property'), i.length && Jt("error", '"' + n + '" is is being used by another element `name` property'))
                })
            }

            function Jt(e, t) {
                console && console[e]
            }
            if (e("html").hasClass(u)) return void Kt();
            var Zt = e("html, body"),
                en = e("body"),
                tn = e.fn.fullpage;
            R = e.extend({
                menu: !1,
                anchors: [],
                lockAnchors: !1,
                navigation: !1,
                navigationPosition: "right",
                navigationTooltips: [],
                showActiveTooltip: !1,
                slidesNavigation: !1,
                slidesNavPosition: "bottom",
                scrollBar: !1,
                hybrid: !1,
                css3: !0,
                scrollingSpeed: 700,
                autoScrolling: !0,
                fitToSection: !0,
                fitToSectionDelay: 1e3,
                easing: "easeInOutCubic",
                easingcss3: "ease",
                loopBottom: !1,
                loopTop: !1,
                loopHorizontal: !0,
                continuousVertical: !1,
                continuousHorizontal: !1,
                scrollHorizontally: !1,
                interlockedSlides: !1,
                dragAndMove: !1,
                offsetSections: !1,
                resetSliders: !1,
                fadingEffect: !1,
                normalScrollElements: null,
                scrollOverflow: !1,
                scrollOverflowReset: !1,
                scrollOverflowHandler: V,
                scrollOverflowOptions: null,
                touchSensitivity: 5,
                normalScrollElementTouchThreshold: 5,
                bigSectionsDestination: null,
                keyboardScrolling: !0,
                animateAnchor: !0,
                recordHistory: !0,
                controlArrows: !0,
                controlArrowColor: "#fff",
                verticalCentered: !0,
                sectionsColor: [],
                paddingTop: 0,
                paddingBottom: 0,
                fixedElements: null,
                responsive: 0,
                responsiveWidth: 0,
                responsiveHeight: 0,
                responsiveSlides: !1,
                parallax: !1,
                parallaxOptions: {
                    type: "reveal",
                    percentage: 62,
                    property: "translate"
                },
                sectionSelector: ".section",
                slideSelector: ".slide",
                afterLoad: null,
                onLeave: null,
                afterRender: null,
                afterResize: null,
                afterReBuild: null,
                afterSlideLoad: null,
                onSlideLeave: null,
                afterResponsive: null,
                lazyLoading: !0
            }, R);
            var nn, on, rn, sn, an = !1,
                ln = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
                cn = "ontouchstart" in t || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
                un = e(this),
                dn = U.height(),
                pn = !1,
                fn = !0,
                hn = !0,
                vn = [],
                gn = {};
            gn.m = {
                up: !0,
                down: !0,
                left: !0,
                right: !0
            }, gn.k = e.extend(!0, {}, gn.m);
            var mn, yn, wn, bn, xn, kn, Sn = function () {
                return t.PointerEvent ? {
                    down: "pointerdown",
                    move: "pointermove"
                } : {
                        down: "MSPointerDown",
                        move: "MSPointerMove"
                    }
            }(),
                Tn = {
                    touchmove: "ontouchmove" in t ? "touchmove" : Sn.move,
                    touchstart: "ontouchstart" in t ? "touchstart" : Sn.down
                },
                Cn = e.extend(!0, {}, R);
            Kt(), _.click = cn, _ = e.extend(_, R.scrollOverflowOptions), e.extend(e.easing, {
                easeInOutCubic: function (e, t, n, i, o) {
                    return (t /= o / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
                }
            }), e(this).length && (tn.setAutoScrolling = Y, tn.setRecordHistory = Q, tn.setScrollingSpeed = G, tn.setFitToSection = K, tn.setLockAnchors = J, tn.setMouseWheelScrolling = Z, tn.setAllowScrolling = ee, tn.setKeyboardScrolling = te, tn.moveSectionUp = ne, tn.moveSectionDown = ie, tn.silentMoveTo = oe, tn.moveTo = re, tn.moveSlideRight = se, tn.moveSlideLeft = ae, tn.fitToSection = Ce, tn.reBuild = le, tn.setResponsive = ce, tn.destroy = Yt, function () {
                R.css3 && (R.css3 = Pt()), R.scrollBar = R.scrollBar || R.hybrid, ue(), de(), ee(!0), Y(R.autoScrolling, "internal"), vt(), Ht(), "complete" === n.readyState && Ke(), U.on("load", Ke)
            }(), function () {
                U.on("scroll", Te).on("hashchange", Je).blur(rt).resize(ht), X.keydown(Ze).keyup(tt).on("click touchstart", T + " a", st).on("click touchstart", I, at).on("click", $, et), e(m).on("click touchstart", q, ot), R.normalScrollElements && (X.on("mouseenter", R.normalScrollElements, function () {
                    Z(!1)
                }), X.on("mouseleave", R.normalScrollElements, function () {
                    Z(!0)
                }))
            }());
            var $n = !1,
                En = 0,
                An = 0,
                Ln = 0,
                On = 0,
                Mn = 0,
                jn = (new Date).getTime(),
                Nn = 0,
                Dn = 0,
                Hn = dn
        }, "undefined" != typeof IScroll && (IScroll.prototype.wheelOn = function () {
            this.wrapper.addEventListener("wheel", this), this.wrapper.addEventListener("mousewheel", this), this.wrapper.addEventListener("DOMMouseScroll", this)
        }, IScroll.prototype.wheelOff = function () {
            this.wrapper.removeEventListener("wheel", this), this.wrapper.removeEventListener("mousewheel", this), this.wrapper.removeEventListener("DOMMouseScroll", this)
        });
        var V = {
            refreshId: null,
            iScrollInstances: [],
            toggleWheel: function (t) {
                e(y).find(".fp-scrollable").each(function () {
                    var n = e(this).data("iscrollInstance");
                    void 0 !== n && n && (t ? n.wheelOn() : n.wheelOff())
                })
            },
            onLeave: function () {
                V.toggleWheel(!1)
            },
            beforeLeave: function () {
                V.onLeave()
            },
            afterLoad: function () {
                V.toggleWheel(!0)
            },
            create: function (t, n) {
                var i = t.find(".fp-scrollable");
                i.height(n), i.each(function () {
                    var t = e(this),
                        n = t.data("iscrollInstance");
                    n && e.each(V.iScrollInstances, function () {
                        e(this).destroy()
                    }), n = new IScroll(t.get(0), _), V.iScrollInstances.push(n), n.wheelOff(), t.data("iscrollInstance", n)
                })
            },
            isScrolled: function (e, t) {
                var n = t.data("iscrollInstance");
                return !n || ("top" === e ? n.y >= 0 && !t.scrollTop() : "bottom" === e ? 0 - n.y + t.scrollTop() + 1 + t.innerHeight() >= t[0].scrollHeight : void 0)
            },
            scrollable: function (e) {
                return e.find(M).length ? e.find(L).find(".fp-scrollable") : e.find(".fp-scrollable")
            },
            scrollHeight: function (e) {
                return e.find(".fp-scrollable").children().first().get(0).scrollHeight
            },
            remove: function (e) {
                var t = e.find(".fp-scrollable");
                if (t.length) {
                    t.data("iscrollInstance").destroy(), t.data("iscrollInstance", null)
                }
                e.find(".fp-scrollable").children().first().children().first().unwrap().unwrap()
            },
            update: function (t, n) {
                clearTimeout(V.refreshId), V.refreshId = setTimeout(function () {
                    e.each(V.iScrollInstances, function () {
                        e(this).get(0).refresh()
                    })
                }, 150), t.find(".fp-scrollable").css("height", n + "px").parent().css("height", n + "px")
            },
            wrapContent: function () {
                return '<div class="fp-scrollable"><div class="fp-scroller"></div></div>'
            }
        }
    }), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function (e, t, n, i, o) {
            return jQuery.easing[jQuery.easing.def](e, t, n, i, o)
        },
        easeInQuad: function (e, t, n, i, o) {
            return i * (t /= o) * t + n
        },
        easeOutQuad: function (e, t, n, i, o) {
            return -i * (t /= o) * (t - 2) + n
        },
        easeInOutQuad: function (e, t, n, i, o) {
            return (t /= o / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
        },
        easeInCubic: function (e, t, n, i, o) {
            return i * (t /= o) * t * t + n
        },
        easeOutCubic: function (e, t, n, i, o) {
            return i * ((t = t / o - 1) * t * t + 1) + n
        },
        easeInOutCubic: function (e, t, n, i, o) {
            return (t /= o / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
        },
        easeInQuart: function (e, t, n, i, o) {
            return i * (t /= o) * t * t * t + n
        },
        easeOutQuart: function (e, t, n, i, o) {
            return -i * ((t = t / o - 1) * t * t * t - 1) + n
        },
        easeInOutQuart: function (e, t, n, i, o) {
            return (t /= o / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n
        },
        easeInQuint: function (e, t, n, i, o) {
            return i * (t /= o) * t * t * t * t + n
        },
        easeOutQuint: function (e, t, n, i, o) {
            return i * ((t = t / o - 1) * t * t * t * t + 1) + n
        },
        easeInOutQuint: function (e, t, n, i, o) {
            return (t /= o / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
        },
        easeInSine: function (e, t, n, i, o) {
            return -i * Math.cos(t / o * (Math.PI / 2)) + i + n
        },
        easeOutSine: function (e, t, n, i, o) {
            return i * Math.sin(t / o * (Math.PI / 2)) + n
        },
        easeInOutSine: function (e, t, n, i, o) {
            return -i / 2 * (Math.cos(Math.PI * t / o) - 1) + n
        },
        easeInExpo: function (e, t, n, i, o) {
            return 0 == t ? n : i * Math.pow(2, 10 * (t / o - 1)) + n
        },
        easeOutExpo: function (e, t, n, i, o) {
            return t == o ? n + i : i * (1 - Math.pow(2, -10 * t / o)) + n
        },
        easeInOutExpo: function (e, t, n, i, o) {
            return 0 == t ? n : t == o ? n + i : (t /= o / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --t)) + n
        },
        easeInCirc: function (e, t, n, i, o) {
            return -i * (Math.sqrt(1 - (t /= o) * t) - 1) + n
        },
        easeOutCirc: function (e, t, n, i, o) {
            return i * Math.sqrt(1 - (t = t / o - 1) * t) + n
        },
        easeInOutCirc: function (e, t, n, i, o) {
            return (t /= o / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
        },
        easeInElastic: function (e, t, n, i, o) {
            var r = 1.70158,
                s = 0,
                a = i;
            if (0 == t) return n;
            if (1 == (t /= o)) return n + i;
            if (s || (s = .3 * o), a < Math.abs(i)) {
                a = i;
                var r = s / 4
            } else var r = s / (2 * Math.PI) * Math.asin(i / a);
            return -a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * o - r) * (2 * Math.PI) / s) + n
        },
        easeOutElastic: function (e, t, n, i, o) {
            var r = 1.70158,
                s = 0,
                a = i;
            if (0 == t) return n;
            if (1 == (t /= o)) return n + i;
            if (s || (s = .3 * o), a < Math.abs(i)) {
                a = i;
                var r = s / 4
            } else var r = s / (2 * Math.PI) * Math.asin(i / a);
            return a * Math.pow(2, -10 * t) * Math.sin((t * o - r) * (2 * Math.PI) / s) + i + n
        },
        easeInOutElastic: function (e, t, n, i, o) {
            var r = 1.70158,
                s = 0,
                a = i;
            if (0 == t) return n;
            if (2 == (t /= o / 2)) return n + i;
            if (s || (s = o * (.3 * 1.5)), a < Math.abs(i)) {
                a = i;
                var r = s / 4
            } else var r = s / (2 * Math.PI) * Math.asin(i / a);
            return t < 1 ? a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * o - r) * (2 * Math.PI) / s) * -.5 + n : a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * o - r) * (2 * Math.PI) / s) * .5 + i + n
        },
        easeInBack: function (e, t, n, i, o, r) {
            return void 0 == r && (r = 1.70158), i * (t /= o) * t * ((r + 1) * t - r) + n
        },
        easeOutBack: function (e, t, n, i, o, r) {
            return void 0 == r && (r = 1.70158), i * ((t = t / o - 1) * t * ((r + 1) * t + r) + 1) + n
        },
        easeInOutBack: function (e, t, n, i, o, r) {
            return void 0 == r && (r = 1.70158), (t /= o / 2) < 1 ? i / 2 * (t * t * ((1 + (r *= 1.525)) * t - r)) + n : i / 2 * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + n
        },
        easeInBounce: function (e, t, n, i, o) {
            return i - jQuery.easing.easeOutBounce(e, o - t, 0, i, o) + n
        },
        easeOutBounce: function (e, t, n, i, o) {
            return (t /= o) < 1 / 2.75 ? i * (7.5625 * t * t) + n : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        },
        easeInOutBounce: function (e, t, n, i, o) {
            return t < o / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, i, o) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - o, 0, i, o) + .5 * i + n
        }
    }),
    function (e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function (e) {
        "use strict";
        var t = window.Slick || {};
        t = function () {
            function t(t, i) {
                var o, r = this;
                r.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: e(t),
                    appendDots: e(t),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (t, n) {
                        return e('<button type="button" />').text(n + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, r.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(t), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = e(t).data("slick") || {}, r.options = e.extend({}, r.defaults, i, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, void 0 !== document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.instanceUid = n++ , r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
            }
            var n = 0;
            return t
        }(), t.prototype.activateADA = function () {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, t.prototype.addSlide = t.prototype.slickAdd = function (t, n, i) {
            var o = this;
            if ("boolean" == typeof n) i = n, n = null;
            else if (n < 0 || n >= o.slideCount) return !1;
            o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : !0 === i ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function (t, n) {
                e(n).attr("data-slick-index", t)
            }), o.$slidesCache = o.$slides, o.reinit()
        }, t.prototype.animateHeight = function () {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.animate({
                    height: t
                }, e.options.speed)
            }
        }, t.prototype.animateSlide = function (t, n) {
            var i = {},
                o = this;
            o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
                left: t
            }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({
                top: t
            }, o.options.speed, o.options.easing, n) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({
                animStart: o.currentLeft
            }).animate({
                animStart: t
            }, {
                    duration: o.options.speed,
                    easing: o.options.easing,
                    step: function (e) {
                        e = Math.ceil(e), !1 === o.options.vertical ? (i[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i))
                    },
                    complete: function () {
                        n && n.call()
                    }
                })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? i[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(i), n && setTimeout(function () {
                    o.disableTransition(), n.call()
                }, o.options.speed))
        }, t.prototype.getNavTarget = function () {
            var t = this,
                n = t.options.asNavFor;
            return n && null !== n && (n = e(n).not(t.$slider)), n
        }, t.prototype.asNavFor = function (t) {
            var n = this,
                i = n.getNavTarget();
            null !== i && "object" == typeof i && i.each(function () {
                var n = e(this).slick("getSlick");
                n.unslicked || n.slideHandler(t, !0)
            })
        }, t.prototype.applyTransition = function (e) {
            var t = this,
                n = {};
            !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
        }, t.prototype.autoPlay = function () {
            var e = this;
            e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, t.prototype.autoPlayClear = function () {
            var e = this;
            e.autoPlayTimer && clearInterval(e.autoPlayTimer)
        }, t.prototype.autoPlayIterator = function () {
            var e = this,
                t = e.currentSlide + e.options.slidesToScroll;
            e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
        }, t.prototype.buildArrows = function () {
            var t = this;
            !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, t.prototype.buildDots = function () {
            var t, n, i = this;
            if (!0 === i.options.dots) {
                for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
                i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
            }
        }, t.prototype.buildOut = function () {
            var t = this;
            t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function (t, n) {
                e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")
            }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
        }, t.prototype.buildRows = function () {
            var e, t, n, i, o, r, s, a = this;
            if (i = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) {
                for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; e < o; e++) {
                    var l = document.createElement("div");
                    for (t = 0; t < a.options.rows; t++) {
                        var c = document.createElement("div");
                        for (n = 0; n < a.options.slidesPerRow; n++) {
                            var u = e * s + (t * a.options.slidesPerRow + n);
                            r.get(u) && c.appendChild(r.get(u))
                        }
                        l.appendChild(c)
                    }
                    i.appendChild(l)
                }
                a.$slider.empty().append(i), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, t.prototype.checkResponsive = function (t, n) {
            var i, o, r, s = this,
                a = !1,
                l = s.$slider.width(),
                c = window.innerWidth || e(window).width();
            if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
                o = null;
                for (i in s.breakpoints) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
                null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || n) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = o), t || !1 === a || s.$slider.trigger("breakpoint", [s, a])
            }
        }, t.prototype.changeSlide = function (t, n) {
            var i, o, r, s = this,
                a = e(t.currentTarget);
            switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), r = s.slideCount % s.options.slidesToScroll != 0, i = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
                case "previous":
                    o = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, n);
                    break;
                case "next":
                    o = 0 === i ? s.options.slidesToScroll : i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, n);
                    break;
                case "index":
                    var l = 0 === t.data.index ? 0 : t.data.index || a.index() * s.options.slidesToScroll;
                    s.slideHandler(s.checkNavigable(l), !1, n), a.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, t.prototype.checkNavigable = function (e) {
            var t, n, i = this;
            if (t = i.getNavigableIndexes(), n = 0, e > t[t.length - 1]) e = t[t.length - 1];
            else
                for (var o in t) {
                    if (e < t[o]) {
                        e = n;
                        break
                    }
                    n = t[o]
                }
            return e
        }, t.prototype.cleanUpEvents = function () {
            var t = this;
            t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.cleanUpSlideEvents = function () {
            var t = this;
            t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
        }, t.prototype.cleanUpRows = function () {
            var e, t = this;
            t.options.rows > 1 && (e = t.$slides.children().children(), e.removeAttr("style"), t.$slider.empty().append(e))
        }, t.prototype.clickHandler = function (e) {
            !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, t.prototype.destroy = function (t) {
            var n = this;
            n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
                e(this).attr("style", e(this).data("originalStyling"))
            }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n])
        }, t.prototype.disableTransition = function (e) {
            var t = this,
                n = {};
            n[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
        }, t.prototype.fadeSlide = function (e, t) {
            var n = this;
            !1 === n.cssTransitions ? (n.$slides.eq(e).css({
                zIndex: n.options.zIndex
            }), n.$slides.eq(e).animate({
                opacity: 1
            }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
                opacity: 1,
                zIndex: n.options.zIndex
            }), t && setTimeout(function () {
                n.disableTransition(e), t.call()
            }, n.options.speed))
        }, t.prototype.fadeSlideOut = function (e) {
            var t = this;
            !1 === t.cssTransitions ? t.$slides.eq(e).animate({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }))
        }, t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
            var t = this;
            null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
        }, t.prototype.focusHandler = function () {
            var t = this;
            t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (n) {
                n.stopImmediatePropagation();
                var i = e(this);
                setTimeout(function () {
                    t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay())
                }, 0)
            })
        }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
            return this.currentSlide
        }, t.prototype.getDotCount = function () {
            var e = this,
                t = 0,
                n = 0,
                i = 0;
            if (!0 === e.options.infinite)
                if (e.slideCount <= e.options.slidesToShow)++i;
                else
                    for (; t < e.slideCount;)++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else if (!0 === e.options.centerMode) i = e.slideCount;
            else if (e.options.asNavFor)
                for (; t < e.slideCount;)++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
            return i - 1
        }, t.prototype.getLeft = function (e) {
            var t, n, i, o = this,
                r = 0;
            return o.slideOffset = 0, n = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, r = n * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll != 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, r = (o.options.slidesToShow - (e - o.slideCount)) * n * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, r = o.slideCount % o.options.slidesToScroll * n * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, r = (e + o.options.slidesToShow - o.slideCount) * n), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, r = 0), !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow ? o.slideOffset = o.slideWidth * Math.floor(o.options.slidesToShow) / 2 - o.slideWidth * o.slideCount / 2 : !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = !1 === o.options.vertical ? e * o.slideWidth * -1 + o.slideOffset : e * n * -1 + r, !0 === o.options.variableWidth && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow), t = !0 === o.options.rtl ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === o.options.centerMode && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1), t = !0 === o.options.rtl ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (o.$list.width() - i.outerWidth()) / 2)), t
        }, t.prototype.getOption = t.prototype.slickGetOption = function (e) {
            return this.options[e]
        }, t.prototype.getNavigableIndexes = function () {
            var e, t = this,
                n = 0,
                i = 0,
                o = [];
            for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); n < e;) o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            return o
        }, t.prototype.getSlick = function () {
            return this
        }, t.prototype.getSlideCount = function () {
            var t, n, i = this;
            return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function (o, r) {
                if (r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * i.swipeLeft) return t = r, !1
            }), Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
        }, t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(e)
                }
            }, t)
        }, t.prototype.init = function (t) {
            var n = this;
            e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger("init", [n]), !0 === n.options.accessibility && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay())
        }, t.prototype.initADA = function () {
            var t = this,
                n = Math.ceil(t.slideCount / t.options.slidesToShow),
                i = t.getNavigableIndexes().filter(function (e) {
                    return e >= 0 && e < t.slideCount
                });
            t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (n) {
                var o = i.indexOf(n);
                e(this).attr({
                    role: "tabpanel",
                    id: "slick-slide" + t.instanceUid + n,
                    tabindex: -1
                }), -1 !== o && e(this).attr({
                    "aria-describedby": "slick-slide-control" + t.instanceUid + o
                })
            }), t.$dots.attr("role", "tablist").find("li").each(function (o) {
                var r = i[o];
                e(this).attr({
                    role: "presentation"
                }), e(this).find("button").first().attr({
                    role: "tab",
                    id: "slick-slide-control" + t.instanceUid + o,
                    "aria-controls": "slick-slide" + t.instanceUid + r,
                    "aria-label": o + 1 + " of " + n,
                    "aria-selected": null,
                    tabindex: "-1"
                })
            }).eq(t.currentSlide).find("button").attr({
                "aria-selected": "true",
                tabindex: "0"
            }).end());
            for (var o = t.currentSlide, r = o + t.options.slidesToShow; o < r; o++) t.$slides.eq(o).attr("tabindex", 0);
            t.activateADA()
        }, t.prototype.initArrowEvents = function () {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
        }, t.prototype.initDotEvents = function () {
            var t = this;
            !0 === t.options.dots && (e("li", t.$dots).on("click.slick", {
                message: "index"
            }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
        }, t.prototype.initSlideEvents = function () {
            var t = this;
            t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
        }, t.prototype.initializeEvents = function () {
            var t = this;
            t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
        }, t.prototype.initUI = function () {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
        }, t.prototype.keyHandler = function (e) {
            var t = this;
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
                data: {
                    message: !0 === t.options.rtl ? "next" : "previous"
                }
            }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
                data: {
                    message: !0 === t.options.rtl ? "previous" : "next"
                }
            }))
        }, t.prototype.lazyLoad = function () {
            function t(t) {
                e("img[data-lazy]", t).each(function () {
                    var t = e(this),
                        n = e(this).attr("data-lazy"),
                        i = e(this).attr("data-srcset"),
                        o = e(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
                        r = document.createElement("img");
                    r.onload = function () {
                        t.animate({
                            opacity: 0
                        }, 100, function () {
                            i && (t.attr("srcset", i), o && t.attr("sizes", o)), t.attr("src", n).animate({
                                opacity: 1
                            }, 200, function () {
                                t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                            }), s.$slider.trigger("lazyLoaded", [s, t, n])
                        })
                    }, r.onerror = function () {
                        t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, n])
                    }, r.src = n
                })
            }
            var n, i, o, r, s = this;
            if (!0 === s.options.centerMode ? !0 === s.options.infinite ? (o = s.currentSlide + (s.options.slidesToShow / 2 + 1), r = o + s.options.slidesToShow + 2) : (o = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), r = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (o = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, r = Math.ceil(o + s.options.slidesToShow), !0 === s.options.fade && (o > 0 && o-- , r <= s.slideCount && r++)), n = s.$slider.find(".slick-slide").slice(o, r), "anticipated" === s.options.lazyLoad)
                for (var a = o - 1, l = r, c = s.$slider.find(".slick-slide"), u = 0; u < s.options.slidesToScroll; u++) a < 0 && (a = s.slideCount - 1), n = n.add(c.eq(a)), n = n.add(c.eq(l)), a-- , l++;
            t(n), s.slideCount <= s.options.slidesToShow ? (i = s.$slider.find(".slick-slide"), t(i)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (i = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow), t(i)) : 0 === s.currentSlide && (i = s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow), t(i))
        }, t.prototype.loadSlider = function () {
            var e = this;
            e.setPosition(), e.$slideTrack.css({
                opacity: 1
            }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
        }, t.prototype.next = t.prototype.slickNext = function () {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, t.prototype.orientationChange = function () {
            var e = this;
            e.checkResponsive(), e.setPosition()
        }, t.prototype.pause = t.prototype.slickPause = function () {
            var e = this;
            e.autoPlayClear(), e.paused = !0
        }, t.prototype.play = t.prototype.slickPlay = function () {
            var e = this;
            e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
        }, t.prototype.postSlide = function (t) {
            var n = this;
            if (!n.unslicked && (n.$slider.trigger("afterChange", [n, t]), n.animating = !1, n.slideCount > n.options.slidesToShow && n.setPosition(), n.swipeLeft = null, n.options.autoplay && n.autoPlay(), !0 === n.options.accessibility && (n.initADA(), !n.options.autoplay))) {
                e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()
            }
        }, t.prototype.prev = t.prototype.slickPrev = function () {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, t.prototype.preventDefault = function (e) {
            e.preventDefault()
        }, t.prototype.progressiveLazyLoad = function (t) {
            t = t || 1;
            var n, i, o, r, s, a = this,
                l = e("img[data-lazy]", a.$slider);
            l.length ? (n = l.first(), i = n.attr("data-lazy"), o = n.attr("data-srcset"), r = n.attr("data-sizes") || a.$slider.attr("data-sizes"), s = document.createElement("img"), s.onload = function () {
                o && (n.attr("srcset", o), r && n.attr("sizes", r)), n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, n, i]), a.progressiveLazyLoad()
            }, s.onerror = function () {
                t < 3 ? setTimeout(function () {
                    a.progressiveLazyLoad(t + 1)
                }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, n, i]), a.progressiveLazyLoad())
            }, s.src = i) : a.$slider.trigger("allImagesLoaded", [a])
        }, t.prototype.refresh = function (t) {
            var n, i, o = this;
            i = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > i && (o.currentSlide = i), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), n = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {
                currentSlide: n
            }), o.init(), t || o.changeSlide({
                data: {
                    message: "index",
                    index: n
                }
            }, !1)
        }, t.prototype.registerBreakpoints = function () {
            var t, n, i, o = this,
                r = o.options.responsive || null;
            if ("array" === e.type(r) && r.length) {
                o.respondTo = o.options.respondTo || "window";
                for (t in r)
                    if (i = o.breakpoints.length - 1, r.hasOwnProperty(t)) {
                        for (n = r[t].breakpoint; i >= 0;) o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
                        o.breakpoints.push(n), o.breakpointSettings[n] = r[t].settings
                    }
                o.breakpoints.sort(function (e, t) {
                    return o.options.mobileFirst ? e - t : t - e
                })
            }
        }, t.prototype.reinit = function () {
            var t = this;
            t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
        }, t.prototype.resize = function () {
            var t = this;
            e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {
                t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
            }, 50))
        }, t.prototype.removeSlide = t.prototype.slickRemove = function (e, t, n) {
            var i = this;
            if ("boolean" == typeof e ? (t = e, e = !0 === t ? 0 : i.slideCount - 1) : e = !0 === t ? --e : e, i.slideCount < 1 || e < 0 || e > i.slideCount - 1) return !1;
            i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit()
        }, t.prototype.setCSS = function (e) {
            var t, n, i = this,
                o = {};
            !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, !1 === i.transformsEnabled ? i.$slideTrack.css(o) : (o = {}, !1 === i.cssTransitions ? (o[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(o)))
        }, t.prototype.setDimensions = function () {
            var e = this;
            !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
                padding: "0px " + e.options.centerPadding
            }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
                padding: e.options.centerPadding + " 0px"
            })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
            var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
        }, t.prototype.setFade = function () {
            var t, n = this;
            n.$slides.each(function (i, o) {
                t = n.slideWidth * i * -1, !0 === n.options.rtl ? e(o).css({
                    position: "relative",
                    right: t,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                }) : e(o).css({
                    position: "relative",
                    left: t,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                })
            }), n.$slides.eq(n.currentSlide).css({
                zIndex: n.options.zIndex - 1,
                opacity: 1
            })
        }, t.prototype.setHeight = function () {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.css("height", t)
            }
        }, t.prototype.setOption = t.prototype.slickSetOption = function () {
            var t, n, i, o, r, s = this,
                a = !1;
            if ("object" === e.type(arguments[0]) ? (i = arguments[0], a = arguments[1], r = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) s.options[i] = o;
            else if ("multiple" === r) e.each(i, function (e, t) {
                s.options[e] = t
            });
            else if ("responsive" === r)
                for (n in o)
                    if ("array" !== e.type(s.options.responsive)) s.options.responsive = [o[n]];
                    else {
                        for (t = s.options.responsive.length - 1; t >= 0;) s.options.responsive[t].breakpoint === o[n].breakpoint && s.options.responsive.splice(t, 1), t--;
                        s.options.responsive.push(o[n])
                    }
            a && (s.unload(), s.reinit())
        }, t.prototype.setPosition = function () {
            var e = this;
            e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
        }, t.prototype.setProps = function () {
            var e = this,
                t = document.body.style;
            e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
        }, t.prototype.setSlideClasses = function (e) {
            var t, n, i, o, r = this;
            n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode ? (t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + e, n.slice(i - t + 1, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, i = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad()
        }, t.prototype.setupInfinite = function () {
            var t, n, i, o = this;
            if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (n = null, o.slideCount > o.options.slidesToShow)) {
                for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1) n = t - 1, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
                for (t = 0; t < i + o.slideCount; t += 1) n = t, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
                o.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                    e(this).attr("id", "")
                })
            }
        }, t.prototype.interrupt = function (e) {
            var t = this;
            e || t.autoPlay(), t.interrupted = e
        }, t.prototype.selectHandler = function (t) {
            var n = this,
                i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                o = parseInt(i.attr("data-slick-index"));
            if (o || (o = 0), n.slideCount <= n.options.slidesToShow) return void n.slideHandler(o, !1, !0);
            n.slideHandler(o)
        }, t.prototype.slideHandler = function (e, t, n) {
            var i, o, r, s, a, l = null,
                c = this;
            if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e)) {
                if (!1 === t && c.asNavFor(e), i = e, l = c.getLeft(i), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) return void (!1 === c.options.fade && (i = c.currentSlide, !0 !== n ? c.animateSlide(s, function () {
                    c.postSlide(i)
                }) : c.postSlide(i)));
                if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) return void (!1 === c.options.fade && (i = c.currentSlide, !0 !== n ? c.animateSlide(s, function () {
                    c.postSlide(i)
                }) : c.postSlide(i)));
                if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = c.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== n ? (c.fadeSlideOut(r), c.fadeSlide(o, function () {
                    c.postSlide(o)
                })) : c.postSlide(o), void c.animateHeight();
                !0 !== n ? c.animateSlide(l, function () {
                    c.postSlide(o)
                }) : c.postSlide(o)
            }
        }, t.prototype.startLoad = function () {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, t.prototype.swipeDirection = function () {
            var e, t, n, i, o = this;
            return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), i = Math.round(180 * n / Math.PI), i < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 ? !1 === o.options.rtl ? "left" : "right" : i <= 360 && i >= 315 ? !1 === o.options.rtl ? "left" : "right" : i >= 135 && i <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? i >= 35 && i <= 135 ? "down" : "up" : "vertical"
        }, t.prototype.swipeEnd = function (e) {
            var t, n, i = this;
            if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1, !1;
            if (i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;
            if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
                switch (n = i.swipeDirection()) {
                    case "left":
                    case "down":
                        t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
                }
                "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
            } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
        }, t.prototype.swipeHandler = function (e) {
            var t = this;
            if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
                case "start":
                    t.swipeStart(e);
                    break;
                case "move":
                    t.swipeMove(e);
                    break;
                case "end":
                    t.swipeEnd(e)
            }
        }, t.prototype.swipeMove = function (e) {
            var t, n, i, o, r, s, a = this;
            return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || r && 1 !== r.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s), n = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + i * o : a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
        }, t.prototype.swipeStart = function (e) {
            var t, n = this;
            if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return n.touchObject = {}, !1;
            void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, n.dragging = !0
        }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, t.prototype.unload = function () {
            var t = this;
            e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, t.prototype.unslick = function (e) {
            var t = this;
            t.$slider.trigger("unslick", [t, e]), t.destroy()
        }, t.prototype.updateArrows = function () {
            var e = this;
            Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, t.prototype.updateDots = function () {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
        }, t.prototype.visibility = function () {
            var e = this;
            e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
        }, e.fn.slick = function () {
            var e, n, i = this,
                o = arguments[0],
                r = Array.prototype.slice.call(arguments, 1),
                s = i.length;
            for (e = 0; e < s; e++)
                if ("object" == typeof o || void 0 === o ? i[e].slick = new t(i[e], o) : n = i[e].slick[o].apply(i[e].slick, r), void 0 !== n) return n;
            return i
        }
    });