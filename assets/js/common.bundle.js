!function(t) {
    function e(e) {
        for (var s, r, c = e[0], i = e[1], f = e[2], a = 0, u = []; a < c.length; a++)
            r = c[a],
            Object.prototype.hasOwnProperty.call(n, r) && n[r] && u.push(n[r][0]),
            n[r] = 0;
        for (s in i)
            Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
        for (p && p(e); u.length; )
            u.shift()();
        return l.push.apply(l, f || []),
        o()
    }
    function o() {
        for (var t, e = 0; e < l.length; e++) {
            for (var o = l[e], s = !0, c = 1; c < o.length; c++) {
                var i = o[c];
                0 !== n[i] && (s = !1)
            }
            s && (l.splice(e--, 1),
            t = r(r.s = o[0]))
        }
        return t
    }
    var s = {}
      , n = {
        5: 0
    }
      , l = [];
    function r(e) {
        if (s[e])
            return s[e].exports;
        var o = s[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(o.exports, o, o.exports, r),
        o.l = !0,
        o.exports
    }
    r.m = t,
    r.c = s,
    r.d = function(t, e, o) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
        })
    }
    ,
    r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(t, e) {
        if (1 & e && (t = r(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var o = Object.create(null);
        if (r.r(o),
        Object.defineProperty(o, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var s in t)
                r.d(o, s, function(e) {
                    return t[e]
                }
                .bind(null, s));
        return o
    }
    ,
    r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return r.d(e, "a", e),
        e
    }
    ,
    r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    r.p = "";
    var c = window.webpackJsonpData = window.webpackJsonpData || []
      , i = c.push.bind(c);
    c.push = e,
    c = c.slice();
    for (var f = 0; f < c.length; f++)
        e(c[f]);
    var p = i;
    l.push([692, 1, 0]),
    o()
}({
    6: function(t) {
        t.exports = JSON.parse('{"sitename":"オンゲキ公式サイト","host":"https://ongeki.sega.jp","root":"","ogp":"/assets/img/common/ogp.jpg"}')
    },
    692: function(t, e, o) {
        "use strict";
        o.r(e);
        var s = o(2)
          , n = o(490)
          , l = o(401)
          , r = o(6)
          , c = function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("div", {
                staticClass: "c-scrollTopBtn",
                class: {
                    "is-show": this.show
                },
                on: {
                    click: this.scrollTop
                }
            }, [e("div", {
                staticClass: "c-scrollTopBtn__inner"
            }), this._v(" "), e("span")])
        };
        c._withStripped = !0;
        var i = o(255)
          , f = {
            components: {},
            data: function() {
                return {
                    show: !1
                }
            },
            mounted: function() {
                var t = this;
                window.addEventListener("scroll", (function() {
                    t.checkScrollPosition()
                }
                )),
                this.checkScrollPosition()
            },
            methods: {
                checkScrollPosition: function() {
                    this.offset() > 300 ? this.show = !0 : this.show = !1
                },
                offset: function() {
                    return void 0 !== window.scrollY ? window.scrollY : window.pageYOffset
                },
                scrollTop: function() {
                    Object(i.a)("body", {
                        duration: 500,
                        offset: 0,
                        callback: void 0,
                        a11y: !1
                    })
                }
            }
        }
          , p = o(1)
          , a = Object(p.a)(f, c, [], !1, null, null, null);
        a.options.__file = "src/root/assets/js/components/common/scrolltop-btn.vue";
        var u = a.exports
          , d = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "c-bgAnime"
            }, t._l(t.lines, (function(e, s) {
                return o("div", {
                    directives: [{
                        name: "bgscroll",
                        rawName: "v-bgscroll",
                        value: {
                            offset: e.offset
                        },
                        expression: "{ offset: line.offset }"
                    }],
                    key: s,
                    staticClass: "c-bgAnime__child",
                    style: e.styles
                }, t._l(e.child, (function(t, e) {
                    return o("div", {
                        key: e,
                        staticClass: "c-bgAnime__grandChild",
                        class: t.cls,
                        style: t.styles
                    })
                }
                )), 0)
            }
            )), 0)
        };
        d._withStripped = !0;
        var h = o(491)
          , w = o.n(h)
          , y = o(18)
          , v = o.n(y)
          , b = o(13)
          , m = o.n(b)
          , g = [250, 800, 1150, 1500]
          , _ = [{
            offset: .8,
            styles: {
                width: "110%",
                height: "1px",
                left: 0,
                top: ""
            },
            child: [{
                styles: {
                    top: "0px",
                    left: "54%"
                },
                cls: "c2 w1 h1 d3"
            }, {
                styles: {
                    top: "20px",
                    left: "56%"
                },
                cls: "c1 w1 w2 h2 d1"
            }, {
                styles: {
                    top: "60px",
                    left: "-20%"
                },
                cls: "c2 w2 h4"
            }]
        }, {
            offset: .8,
            styles: {
                width: "72%",
                height: "1px",
                left: "-10%",
                top: ""
            },
            child: [{
                styles: {
                    top: "0px",
                    left: "0%"
                },
                cls: "c2 w1 h2"
            }, {
                styles: {
                    top: "30px",
                    left: "0%"
                },
                cls: "c1 w1 h1 d2"
            }]
        }, {
            offset: .8,
            styles: {
                width: "100%",
                height: "1px",
                left: "-5%",
                top: ""
            },
            child: [{
                styles: {
                    top: "0px",
                    left: "-52%"
                },
                cls: "c2 w1 h1"
            }, {
                styles: {
                    top: "20px",
                    left: "-50%"
                },
                cls: "c1 w1 h3 d1"
            }, {
                styles: {
                    top: "60px",
                    left: "-54%"
                },
                cls: "c2 w1 h1"
            }, {
                styles: {
                    top: "0px",
                    left: "82%"
                },
                cls: "c2 w1 h2"
            }, {
                styles: {
                    top: "40px",
                    left: "74%"
                },
                cls: "c1 w1 h1 d2"
            }]
        }, {
            offset: .8,
            styles: {
                width: "100%",
                height: "1px",
                left: "-10%",
                top: ""
            },
            child: [{
                styles: {
                    top: "0px",
                    left: "84%"
                },
                cls: "c2 w1 h1 d2"
            }, {
                styles: {
                    top: "20px",
                    left: "82%"
                },
                cls: "c2 w1 h3 d1"
            }, {
                styles: {
                    top: "60px",
                    left: "77%"
                },
                cls: "c1 w1 h1 d3"
            }]
        }]
          , x = {
            data: function() {
                return {
                    lines: []
                }
            },
            props: {
                loop: {
                    type: Number,
                    default: 10
                }
            },
            mounted: function() {
                var t = this.loop
                  , e = [];
                if (!!!navigator.userAgent.match(/mobile/i)) {
                    for (var o = function(t) {
                        m()(g).call(g, (function(e, o) {
                            _[o].styles.top = e + 1600 * t + "px"
                        }
                        )),
                        e = v()(e).call(e, JSON.parse(w()(_)))
                    }, s = 0; s < t; s++)
                        o(s);
                    e[0].offset = !1,
                    this.lines = e
                }
            }
        }
          , O = Object(p.a)(x, d, [], !1, null, null, null);
        O.options.__file = "src/root/assets/js/components/common/bg-anime.vue";
        var j, S, k, P = O.exports;
        window.ongekiRelativePath,
        r.root;
        j = !1,
        S = document.querySelector("#l-header"),
        (k = document.querySelector(".l-header__spBtn")) && k.addEventListener("click", (function() {
            j ? (j = !1,
            S.classList.remove("is-show")) : (j = !0,
            S.classList.add("is-show"))
        }
        )),
        Object(n.a)({
            tw: ".l-footer__snsBtn--twitter",
            fb: ".l-footer__snsBtn--facebook",
            line: ".l-footer__snsBtn--line"
        }),
        new s.default({
            el: "#c-scrollTopBtn",
            components: {
                scrolltopBtn: u
            },
            render: function(t) {
                return t(u)
            }
        });
        var B = document.getElementById("c-bgAnime");
        B && (s.default.directive("bgscroll", l.a.bgscroll),
        new s.default({
            el: "#c-bgAnime",
            components: {
                bgAnime: P
            },
            render: function(t) {
                var e = Number(B.getAttribute("loop"));
                return e || (e = 10),
                t(P, {
                    props: {
                        loop: e
                    }
                })
            }
        }))
    }
});
