(this["webpackJsonpmern-client"] = this["webpackJsonpmern-client"] || []).push([
  [0],
  {
    43: function (e, t, a) {
      e.exports = a.p + "static/media/spinner.ab497855.gif";
    },
    74: function (e, t, a) {
      e.exports = a(89);
    },
    79: function (e, t, a) {},
    88: function (e, t, a) {},
    89: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        c = a(59),
        o = a.n(c),
        l = (a(79), a(3)),
        i = a(10),
        u = a(8),
        s = a(68),
        m = a(91),
        d = a(102),
        p = a(100),
        E = a(67),
        f = a(6);
      function b(e, t, a) {
        return new Promise(function (n, r) {
          var c,
            o,
            l,
            i = window.indexedDB.open("shop-shop", 1);
          (i.onupgradeneeded = function (e) {
            var t = i.result;
            t.createObjectStore("products", { keyPath: "_id" }),
              t.createObjectStore("categories", { keyPath: "_id" }),
              t.createObjectStore("cart", { keyPath: "_id" });
          }),
            (i.onerror = function (e) {
              console.log("There was an error");
            }),
            (i.onsuccess = function (r) {
              switch (
                ((c = i.result),
                (o = c.transaction(e, "readwrite")),
                (l = o.objectStore(e)),
                (c.onerror = function (e) {
                  console.log("error", e);
                }),
                t)
              ) {
                case "put":
                  l.put(a), n(a);
                  break;
                case "get":
                  var u = l.getAll();
                  u.onsuccess = function () {
                    n(u.result);
                  };
                  break;
                case "delete":
                  l.delete(a._id);
                  break;
                default:
                  console.log("No valid method");
              }
              o.oncomplete = function () {
                c.close();
              };
            });
        });
      }
      var g = a(69),
        h = a(26),
        O = function (e, t) {
          switch (t.type) {
            case "UPDATE_PRODUCTS":
              return Object(l.a)(
                Object(l.a)({}, e),
                {},
                { products: Object(h.a)(t.products) }
              );
            case "ADD_TO_CART":
              return Object(l.a)(
                Object(l.a)({}, e),
                {},
                {
                  cartOpen: !0,
                  cart: [].concat(Object(h.a)(e.cart), [t.product]),
                }
              );
            case "ADD_MULTIPLE_TO_CART":
              return Object(l.a)(
                Object(l.a)({}, e),
                {},
                {
                  cart: [].concat(Object(h.a)(e.cart), Object(h.a)(t.products)),
                }
              );
            case "UPDATE_CART_QUANTITY":
              return Object(l.a)(
                Object(l.a)({}, e),
                {},
                {
                  cartOpen: !0,
                  cart: e.cart.map(function (e) {
                    return (
                      t._id === e._id &&
                        (e.purchaseQuantity = t.purchaseQuantity),
                      e
                    );
                  }),
                }
              );
            case "REMOVE_FROM_CART":
              var a = e.cart.filter(function (e) {
                return e._id !== t._id;
              });
              return Object(l.a)(
                Object(l.a)({}, e),
                {},
                { cartOpen: a.length > 0, cart: a }
              );
            case "CLEAR_CART":
              return Object(l.a)(
                Object(l.a)({}, e),
                {},
                { cartOpen: !1, cart: [] }
              );
            case "TOGGLE_CART":
              return Object(l.a)(
                Object(l.a)({}, e),
                {},
                { cartOpen: !e.cartOpen }
              );
            case "UPDATE_CATEGORIES":
              return Object(l.a)(
                Object(l.a)({}, e),
                {},
                { categories: Object(h.a)(t.categories) }
              );
            case "UPDATE_CURRENT_CATEGORY":
              return Object(l.a)(
                Object(l.a)({}, e),
                {},
                { currentCategory: t.currentCategory }
              );
            default:
              return e;
          }
        };
      var v = ["value"],
        y = Object(n.createContext)(),
        j = y.Provider,
        w = function (e) {
          e.value;
          var t,
            a = Object(g.a)(e, v),
            c =
              ((t = {
                products: [],
                cart: [],
                cartOpen: !1,
                categories: [],
                currentCategory: "",
              }),
              Object(n.useReducer)(O, t)),
            o = Object(f.a)(c, 2),
            l = o[0],
            i = o[1];
          return r.a.createElement(j, Object.assign({ value: [l, i] }, a));
        },
        _ = function () {
          return Object(n.useContext)(y);
        };
      var T,
        k,
        N,
        C,
        x,
        A = function (e) {
          var t = _(),
            a = Object(f.a)(t, 2),
            n = a[0],
            c = a[1],
            o = e.image,
            u = e.name,
            s = e._id,
            m = e.price,
            d = e.quantity,
            p = n.cart;
          return r.a.createElement(
            "div",
            { className: "card px-1 py-1" },
            r.a.createElement(
              i.b,
              { to: "/products/".concat(s) },
              r.a.createElement("img", { alt: u, src: "/images/".concat(o) }),
              r.a.createElement("p", null, u)
            ),
            r.a.createElement(
              "div",
              null,
              r.a.createElement(
                "div",
                null,
                d,
                " ",
                (function (e, t) {
                  return 1 === t ? e : e + "s";
                })("item", d),
                " in stock"
              ),
              r.a.createElement("span", null, "$", m)
            ),
            r.a.createElement(
              "button",
              {
                onClick: function () {
                  var t = p.find(function (e) {
                    return e._id === s;
                  });
                  t
                    ? (c({
                        type: "UPDATE_CART_QUANTITY",
                        _id: s,
                        purchaseQuantity: parseInt(t.purchaseQuantity) + 1,
                      }),
                      b(
                        "cart",
                        "put",
                        Object(l.a)(
                          Object(l.a)({}, t),
                          {},
                          { purchaseQuantity: parseInt(t.purchaseQuantity) + 1 }
                        )
                      ))
                    : (c({
                        type: "ADD_TO_CART",
                        product: Object(l.a)(
                          Object(l.a)({}, e),
                          {},
                          { purchaseQuantity: 1 }
                        ),
                      }),
                      b(
                        "cart",
                        "put",
                        Object(l.a)(
                          Object(l.a)({}, e),
                          {},
                          { purchaseQuantity: 1 }
                        )
                      ));
                },
              },
              "Add to cart"
            )
          );
        },
        R = a(62),
        D = a(22),
        S = a(101),
        P = Object(S.a)(
          T ||
            (T = Object(D.a)([
              "\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n",
            ]))
        ),
        U = Object(S.a)(
          k ||
            (k = Object(D.a)([
              "\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n",
            ]))
        ),
        I =
          (Object(S.a)(
            N ||
              (N = Object(D.a)([
                "\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n",
              ]))
          ),
          Object(S.a)(
            C ||
              (C = Object(D.a)([
                "\n  {\n    categories {\n      _id\n      name\n    }\n  }\n",
              ]))
          )),
        Q = Object(S.a)(
          x ||
            (x = Object(D.a)([
              "\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n",
            ]))
        ),
        $ = a(43),
        F = a.n($);
      var L = function () {
        var e = _(),
          t = Object(f.a)(e, 2),
          a = t[0],
          c = t[1],
          o = a.currentCategory,
          l = Object(R.a)(P),
          i = l.loading,
          u = l.data;
        return (
          Object(n.useEffect)(
            function () {
              u
                ? (c({ type: "UPDATE_PRODUCTS", products: u.products }),
                  u.products.forEach(function (e) {
                    b("products", "put", e);
                  }))
                : i ||
                  b("products", "get").then(function (e) {
                    c({ type: "UPDATE_PRODUCTS", products: e });
                  });
            },
            [u, i, c]
          ),
          r.a.createElement(
            "div",
            { className: "my-2" },
            r.a.createElement("h2", null, "Our Products:"),
            a.products.length
              ? r.a.createElement(
                  "div",
                  { className: "flex-row" },
                  (o
                    ? a.products.filter(function (e) {
                        return e.category._id === o;
                      })
                    : a.products
                  ).map(function (e) {
                    return r.a.createElement(A, {
                      key: e._id,
                      _id: e._id,
                      image: e.image,
                      name: e.name,
                      price: e.price,
                      quantity: e.quantity,
                    });
                  })
                )
              : r.a.createElement(
                  "h3",
                  null,
                  "You haven't added any products yet!"
                ),
            i ? r.a.createElement("img", { src: F.a, alt: "loading" }) : null
          )
        );
      };
      var M = function () {
          var e = _(),
            t = Object(f.a)(e, 2),
            a = t[0],
            c = t[1],
            o = a.categories,
            l = Object(R.a)(I),
            i = l.loading,
            u = l.data;
          return (
            Object(n.useEffect)(
              function () {
                u
                  ? (c({ type: "UPDATE_CATEGORIES", categories: u.categories }),
                    u.categories.forEach(function (e) {
                      b("categories", "put", e);
                    }))
                  : i ||
                    b("categories", "get").then(function (e) {
                      c({ type: "UPDATE_CATEGORIES", categories: e });
                    });
              },
              [u, i, c]
            ),
            r.a.createElement(
              "div",
              null,
              r.a.createElement("h2", null, "Choose a Category:"),
              o.map(function (e) {
                return r.a.createElement(
                  "button",
                  {
                    key: e._id,
                    onClick: function () {
                      var t;
                      (t = e._id),
                        c({
                          type: "UPDATE_CURRENT_CATEGORY",
                          currentCategory: t,
                        });
                    },
                  },
                  e.name
                );
              })
            )
          );
        },
        q = a(15),
        G = a.n(q),
        Y = a(25),
        W = a(63),
        B = a(94),
        H = function (e) {
          var t = e.item,
            a = _(),
            n = Object(f.a)(a, 2)[1];
          return r.a.createElement(
            "div",
            { className: "flex-row" },
            r.a.createElement(
              "div",
              null,
              r.a.createElement("img", {
                src: "/images/".concat(t.image),
                alt: "",
              })
            ),
            r.a.createElement(
              "div",
              null,
              r.a.createElement("div", null, t.name, ", $", t.price),
              r.a.createElement(
                "div",
                null,
                r.a.createElement("span", null, "Qty:"),
                r.a.createElement("input", {
                  type: "number",
                  placeholder: "1",
                  value: t.purchaseQuantity,
                  onChange: function (e) {
                    var a = e.target.value;
                    "0" === a
                      ? (n({ type: "REMOVE_FROM_CART", _id: t._id }),
                        b("cart", "delete", Object(l.a)({}, t)))
                      : (n({
                          type: "UPDATE_CART_QUANTITY",
                          _id: t._id,
                          purchaseQuantity: parseInt(a),
                        }),
                        b(
                          "cart",
                          "put",
                          Object(l.a)(
                            Object(l.a)({}, t),
                            {},
                            { purchaseQuantity: parseInt(a) }
                          )
                        ));
                  },
                }),
                r.a.createElement(
                  "span",
                  {
                    role: "img",
                    "aria-label": "trash",
                    onClick: function () {
                      return (function (e) {
                        n({ type: "REMOVE_FROM_CART", _id: e._id }),
                          b("cart", "delete", Object(l.a)({}, e));
                      })(t);
                    },
                  },
                  "\ud83d\uddd1\ufe0f"
                )
              )
            )
          );
        },
        V = a(64),
        J = a(65),
        z = a(51),
        K = a.n(z),
        X = new ((function () {
          function e() {
            Object(V.a)(this, e);
          }
          return (
            Object(J.a)(e, [
              {
                key: "getProfile",
                value: function () {
                  return K()(this.getToken());
                },
              },
              {
                key: "loggedIn",
                value: function () {
                  var e = this.getToken();
                  return !!e && !this.isTokenExpired(e);
                },
              },
              {
                key: "isTokenExpired",
                value: function (e) {
                  try {
                    return K()(e).exp < Date.now() / 1e3;
                  } catch (t) {
                    return !1;
                  }
                },
              },
              {
                key: "getToken",
                value: function () {
                  return localStorage.getItem("id_token");
                },
              },
              {
                key: "login",
                value: function (e) {
                  localStorage.setItem("id_token", e),
                    window.location.assign("/");
                },
              },
              {
                key: "logout",
                value: function () {
                  localStorage.removeItem("id_token"),
                    window.location.assign("/");
                },
              },
            ]),
            e
          );
        })())(),
        Z = (a(88), Object(W.a)("pk_test_TYooMQauvdEDq54NiTphI7jx")),
        ee = function () {
          var e = _(),
            t = Object(f.a)(e, 2),
            a = t[0],
            c = t[1],
            o = Object(B.a)(U),
            l = Object(f.a)(o, 2),
            i = l[0],
            u = l[1].data;
          function s() {
            c({ type: "TOGGLE_CART" });
          }
          return (
            Object(n.useEffect)(
              function () {
                u &&
                  Z.then(function (e) {
                    e.redirectToCheckout({ sessionId: u.checkout.session });
                  });
              },
              [u]
            ),
            Object(n.useEffect)(
              function () {
                function e() {
                  return (e = Object(Y.a)(
                    G.a.mark(function e() {
                      var t;
                      return G.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), b("cart", "get");
                            case 2:
                              (t = e.sent),
                                c({
                                  type: "ADD_MULTIPLE_TO_CART",
                                  products: Object(h.a)(t),
                                });
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )).apply(this, arguments);
                }
                a.cart.length ||
                  (function () {
                    e.apply(this, arguments);
                  })();
              },
              [a.cart.length, c]
            ),
            a.cartOpen
              ? r.a.createElement(
                  "div",
                  { className: "cart" },
                  r.a.createElement(
                    "div",
                    { className: "close", onClick: s },
                    "[close]"
                  ),
                  r.a.createElement("h2", null, "Shopping Cart"),
                  a.cart.length
                    ? r.a.createElement(
                        "div",
                        null,
                        a.cart.map(function (e) {
                          return r.a.createElement(H, { key: e._id, item: e });
                        }),
                        r.a.createElement(
                          "div",
                          { className: "flex-row space-between" },
                          r.a.createElement(
                            "strong",
                            null,
                            "Total: $",
                            (function () {
                              var e = 0;
                              return (
                                a.cart.forEach(function (t) {
                                  e += t.price * t.purchaseQuantity;
                                }),
                                e.toFixed(2)
                              );
                            })()
                          ),
                          X.loggedIn()
                            ? r.a.createElement(
                                "button",
                                {
                                  onClick: function () {
                                    var e = [];
                                    a.cart.forEach(function (t) {
                                      for (
                                        var a = 0;
                                        a < t.purchaseQuantity;
                                        a++
                                      )
                                        e.push(t._id);
                                    }),
                                      i({ variables: { products: e } });
                                  },
                                },
                                "Checkout"
                              )
                            : r.a.createElement(
                                "span",
                                null,
                                "(log in to check out)"
                              )
                        )
                      )
                    : r.a.createElement(
                        "h3",
                        null,
                        r.a.createElement(
                          "span",
                          { role: "img", "aria-label": "shocked" },
                          "\ud83d\ude31"
                        ),
                        "You haven't added anything to your cart yet!"
                      )
                )
              : r.a.createElement(
                  "div",
                  { className: "cart-closed", onClick: s },
                  r.a.createElement(
                    "span",
                    { role: "img", "aria-label": "trash" },
                    "\ud83d\uded2"
                  )
                )
          );
        },
        te = function () {
          return r.a.createElement(
            "div",
            { className: "container" },
            r.a.createElement(M, null),
            r.a.createElement(L, null),
            r.a.createElement(ee, null)
          );
        };
      var ae = function () {
        var e = _(),
          t = Object(f.a)(e, 2),
          a = t[0],
          c = t[1],
          o = Object(u.f)().id,
          s = Object(n.useState)({}),
          m = Object(f.a)(s, 2),
          d = m[0],
          p = m[1],
          E = Object(R.a)(P),
          g = E.loading,
          h = E.data,
          O = a.products,
          v = a.cart;
        return (
          Object(n.useEffect)(
            function () {
              O.length
                ? p(
                    O.find(function (e) {
                      return e._id === o;
                    })
                  )
                : h
                ? (c({ type: "UPDATE_PRODUCTS", products: h.products }),
                  h.products.forEach(function (e) {
                    b("products", "put", e);
                  }))
                : g ||
                  b("products", "get").then(function (e) {
                    c({ type: "UPDATE_PRODUCTS", products: e });
                  });
            },
            [O, h, g, c, o]
          ),
          r.a.createElement(
            r.a.Fragment,
            null,
            d && v
              ? r.a.createElement(
                  "div",
                  { className: "container my-1" },
                  r.a.createElement(
                    i.b,
                    { to: "/" },
                    "\u2190 Back to Products"
                  ),
                  r.a.createElement("h2", null, d.name),
                  r.a.createElement("p", null, d.description),
                  r.a.createElement(
                    "p",
                    null,
                    r.a.createElement("strong", null, "Price:"),
                    "$",
                    d.price,
                    " ",
                    r.a.createElement(
                      "button",
                      {
                        onClick: function () {
                          var e = v.find(function (e) {
                            return e._id === o;
                          });
                          e
                            ? (c({
                                type: "UPDATE_CART_QUANTITY",
                                _id: o,
                                purchaseQuantity:
                                  parseInt(e.purchaseQuantity) + 1,
                              }),
                              b(
                                "cart",
                                "put",
                                Object(l.a)(
                                  Object(l.a)({}, e),
                                  {},
                                  {
                                    purchaseQuantity:
                                      parseInt(e.purchaseQuantity) + 1,
                                  }
                                )
                              ))
                            : (c({
                                type: "ADD_TO_CART",
                                product: Object(l.a)(
                                  Object(l.a)({}, d),
                                  {},
                                  { purchaseQuantity: 1 }
                                ),
                              }),
                              b(
                                "cart",
                                "put",
                                Object(l.a)(
                                  Object(l.a)({}, d),
                                  {},
                                  { purchaseQuantity: 1 }
                                )
                              ));
                        },
                      },
                      "Add to Cart"
                    ),
                    r.a.createElement(
                      "button",
                      {
                        disabled: !v.find(function (e) {
                          return e._id === d._id;
                        }),
                        onClick: function () {
                          c({ type: "REMOVE_FROM_CART", _id: d._id }),
                            b("cart", "delete", Object(l.a)({}, d));
                        },
                      },
                      "Remove from Cart"
                    )
                  ),
                  r.a.createElement("img", {
                    src: "/images/".concat(d.image),
                    alt: d.name,
                  })
                )
              : null,
            g ? r.a.createElement("img", { src: F.a, alt: "loading" }) : null,
            r.a.createElement(ee, null)
          )
        );
      };
      var ne,
        re,
        ce,
        oe = function (e) {
          var t = e.children;
          return r.a.createElement(
            "div",
            {
              style: {
                height: 560,
                clear: "both",
                paddingTop: 120,
                textAlign: "center",
              },
            },
            t
          );
        },
        le = function () {
          return r.a.createElement(
            "div",
            null,
            r.a.createElement(
              oe,
              null,
              r.a.createElement("h1", null, "404 Page Not Found"),
              r.a.createElement(
                "h1",
                null,
                r.a.createElement(
                  "span",
                  { role: "img", "aria-label": "Face With Rolling Eyes Emoji" },
                  "\ud83d\ude44"
                )
              )
            )
          );
        },
        ie = a(31),
        ue = a(95),
        se = Object(S.a)(
          ne ||
            (ne = Object(D.a)([
              "\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n",
            ]))
        ),
        me = Object(S.a)(
          re ||
            (re = Object(D.a)([
              "\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n",
            ]))
        ),
        de = Object(S.a)(
          ce ||
            (ce = Object(D.a)([
              "\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n",
            ]))
        );
      var pe = function (e) {
        var t = Object(n.useState)({ email: "", password: "" }),
          a = Object(f.a)(t, 2),
          c = a[0],
          o = a[1],
          u = Object(ue.a)(se),
          s = Object(f.a)(u, 2),
          m = s[0],
          d = s[1].error,
          p = (function () {
            var e = Object(Y.a)(
              G.a.mark(function e(t) {
                var a, n;
                return G.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            t.preventDefault(),
                            (e.prev = 1),
                            (e.next = 4),
                            m({
                              variables: {
                                email: c.email,
                                password: c.password,
                              },
                            })
                          );
                        case 4:
                          (a = e.sent),
                            (n = a.data.login.token),
                            X.login(n),
                            (e.next = 12);
                          break;
                        case 9:
                          (e.prev = 9), (e.t0 = e.catch(1)), console.log(e.t0);
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 9]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          E = function (e) {
            var t = e.target,
              a = t.name,
              n = t.value;
            o(Object(l.a)(Object(l.a)({}, c), {}, Object(ie.a)({}, a, n)));
          };
        return r.a.createElement(
          "div",
          { className: "container my-1" },
          r.a.createElement(i.b, { to: "/signup" }, "\u2190 Go to Signup"),
          r.a.createElement("h2", null, "Login"),
          r.a.createElement(
            "form",
            { onSubmit: p },
            r.a.createElement(
              "div",
              { className: "flex-row space-between my-2" },
              r.a.createElement(
                "label",
                { htmlFor: "email" },
                "Email address:"
              ),
              r.a.createElement("input", {
                placeholder: "youremail@test.com",
                name: "email",
                type: "email",
                id: "email",
                onChange: E,
              })
            ),
            r.a.createElement(
              "div",
              { className: "flex-row space-between my-2" },
              r.a.createElement("label", { htmlFor: "pwd" }, "Password:"),
              r.a.createElement("input", {
                placeholder: "******",
                name: "password",
                type: "password",
                id: "pwd",
                onChange: E,
              })
            ),
            d
              ? r.a.createElement(
                  "div",
                  null,
                  r.a.createElement(
                    "p",
                    { className: "error-text" },
                    "The provided credentials are incorrect"
                  )
                )
              : null,
            r.a.createElement(
              "div",
              { className: "flex-row flex-end" },
              r.a.createElement("button", { type: "submit" }, "Submit")
            )
          )
        );
      };
      var Ee = function (e) {
        var t = Object(n.useState)({ email: "", password: "" }),
          a = Object(f.a)(t, 2),
          c = a[0],
          o = a[1],
          u = Object(ue.a)(de),
          s = Object(f.a)(u, 1)[0],
          m = (function () {
            var e = Object(Y.a)(
              G.a.mark(function e(t) {
                var a, n;
                return G.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          t.preventDefault(),
                          (e.next = 3),
                          s({
                            variables: {
                              email: c.email,
                              password: c.password,
                              firstName: c.firstName,
                              lastName: c.lastName,
                            },
                          })
                        );
                      case 3:
                        (a = e.sent), (n = a.data.addUser.token), X.login(n);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          d = function (e) {
            var t = e.target,
              a = t.name,
              n = t.value;
            o(Object(l.a)(Object(l.a)({}, c), {}, Object(ie.a)({}, a, n)));
          };
        return r.a.createElement(
          "div",
          { className: "container my-1" },
          r.a.createElement(i.b, { to: "/login" }, "\u2190 Go to Login"),
          r.a.createElement("h2", null, "Signup"),
          r.a.createElement(
            "form",
            { onSubmit: m },
            r.a.createElement(
              "div",
              { className: "flex-row space-between my-2" },
              r.a.createElement(
                "label",
                { htmlFor: "firstName" },
                "First Name:"
              ),
              r.a.createElement("input", {
                placeholder: "First",
                name: "firstName",
                type: "firstName",
                id: "firstName",
                onChange: d,
              })
            ),
            r.a.createElement(
              "div",
              { className: "flex-row space-between my-2" },
              r.a.createElement("label", { htmlFor: "lastName" }, "Last Name:"),
              r.a.createElement("input", {
                placeholder: "Last",
                name: "lastName",
                type: "lastName",
                id: "lastName",
                onChange: d,
              })
            ),
            r.a.createElement(
              "div",
              { className: "flex-row space-between my-2" },
              r.a.createElement("label", { htmlFor: "email" }, "Email:"),
              r.a.createElement("input", {
                placeholder: "youremail@test.com",
                name: "email",
                type: "email",
                id: "email",
                onChange: d,
              })
            ),
            r.a.createElement(
              "div",
              { className: "flex-row space-between my-2" },
              r.a.createElement("label", { htmlFor: "pwd" }, "Password:"),
              r.a.createElement("input", {
                placeholder: "******",
                name: "password",
                type: "password",
                id: "pwd",
                onChange: d,
              })
            ),
            r.a.createElement(
              "div",
              { className: "flex-row flex-end" },
              r.a.createElement("button", { type: "submit" }, "Submit")
            )
          )
        );
      };
      var fe = function () {
        return r.a.createElement(
          "header",
          { className: "flex-row px-1" },
          r.a.createElement(
            "h1",
            null,
            r.a.createElement(
              i.b,
              { to: "/" },
              r.a.createElement(
                "span",
                { role: "img", "aria-label": "shopping bag" },
                "\ud83d\udecd\ufe0f"
              ),
              "-Tech-Finder"
            )
          ),
          r.a.createElement(
            "nav",
            null,
            X.loggedIn()
              ? r.a.createElement(
                  "ul",
                  { className: "flex-row" },
                  r.a.createElement(
                    "li",
                    { className: "mx-1" },
                    r.a.createElement(
                      i.b,
                      { to: "/orderHistory" },
                      "Order History"
                    )
                  ),
                  r.a.createElement(
                    "li",
                    { className: "mx-1" },
                    r.a.createElement(
                      "a",
                      {
                        href: "/",
                        onClick: function () {
                          return X.logout();
                        },
                      },
                      "Logout"
                    )
                  )
                )
              : r.a.createElement(
                  "ul",
                  { className: "flex-row" },
                  r.a.createElement(
                    "li",
                    { className: "mx-1" },
                    r.a.createElement(i.b, { to: "/signup" }, "Signup")
                  ),
                  r.a.createElement(
                    "li",
                    { className: "mx-1" },
                    r.a.createElement(i.b, { to: "/login" }, "Login")
                  )
                )
          )
        );
      };
      var be = function () {
        var e = Object(ue.a)(me),
          t = Object(f.a)(e, 1)[0];
        return (
          Object(n.useEffect)(
            function () {
              function e() {
                return (e = Object(Y.a)(
                  G.a.mark(function e() {
                    var a, n, r, c;
                    return G.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), b("cart", "get");
                          case 2:
                            if (
                              ((a = e.sent),
                              !(n = a.map(function (e) {
                                return e._id;
                              })).length)
                            ) {
                              e.next = 11;
                              break;
                            }
                            return (
                              (e.next = 7), t({ variables: { products: n } })
                            );
                          case 7:
                            (r = e.sent),
                              (c = r.data),
                              c.addOrder.products.forEach(function (e) {
                                b("cart", "delete", e);
                              });
                          case 11:
                            setTimeout(function () {
                              window.location.assign("/");
                            }, 3e3);
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )).apply(this, arguments);
              }
              !(function () {
                e.apply(this, arguments);
              })();
            },
            [t]
          ),
          r.a.createElement(
            "div",
            null,
            r.a.createElement(
              oe,
              null,
              r.a.createElement("h1", null, "Success!"),
              r.a.createElement("h2", null, "Thank you for your purchase!"),
              r.a.createElement(
                "h2",
                null,
                "You will now be redirected to the home page"
              )
            )
          )
        );
      };
      var ge = function () {
          var e,
            t = Object(R.a)(Q).data;
          return (
            t && (e = t.user),
            r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                "div",
                { className: "container my-1" },
                r.a.createElement(i.b, { to: "/" }, "\u2190 Back to Products"),
                e
                  ? r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(
                        "h2",
                        null,
                        "Order History for ",
                        e.firstName,
                        " ",
                        e.lastName
                      ),
                      e.orders.map(function (e) {
                        return r.a.createElement(
                          "div",
                          { key: e._id, className: "my-2" },
                          r.a.createElement(
                            "h3",
                            null,
                            new Date(
                              parseInt(e.purchaseDate)
                            ).toLocaleDateString()
                          ),
                          r.a.createElement(
                            "div",
                            { className: "flex-row" },
                            e.products.map(function (e, t) {
                              var a = e._id,
                                n = e.image,
                                c = e.name,
                                o = e.price;
                              return r.a.createElement(
                                "div",
                                { key: t, className: "card px-1 py-1" },
                                r.a.createElement(
                                  i.b,
                                  { to: "/products/".concat(a) },
                                  r.a.createElement("img", {
                                    alt: c,
                                    src: "/images/".concat(n),
                                  }),
                                  r.a.createElement("p", null, c)
                                ),
                                r.a.createElement(
                                  "div",
                                  null,
                                  r.a.createElement("span", null, "$", o)
                                )
                              );
                            })
                          )
                        );
                      })
                    )
                  : null
              )
            )
          );
        },
        he = Object(s.a)({ uri: "/graphql" }),
        Oe = Object(E.a)(function (e, t) {
          var a = t.headers,
            n = localStorage.getItem("id_token");
          return {
            headers: Object(l.a)(
              Object(l.a)({}, a),
              {},
              { authorization: n ? "Bearer ".concat(n) : "" }
            ),
          };
        }),
        ve = new m.a({ link: Oe.concat(he), cache: new d.a() });
      var ye = function () {
          return r.a.createElement(
            p.a,
            { client: ve },
            r.a.createElement(
              i.a,
              null,
              r.a.createElement(
                "div",
                null,
                r.a.createElement(
                  w,
                  null,
                  r.a.createElement(fe, null),
                  r.a.createElement(
                    u.c,
                    null,
                    r.a.createElement(u.a, {
                      exact: !0,
                      path: "/",
                      component: te,
                    }),
                    r.a.createElement(u.a, {
                      exact: !0,
                      path: "/login",
                      component: pe,
                    }),
                    r.a.createElement(u.a, {
                      exact: !0,
                      path: "/signup",
                      component: Ee,
                    }),
                    r.a.createElement(u.a, {
                      exact: !0,
                      path: "/success",
                      component: be,
                    }),
                    r.a.createElement(u.a, {
                      exact: !0,
                      path: "/orderHistory",
                      component: ge,
                    }),
                    r.a.createElement(u.a, {
                      exact: !0,
                      path: "/products/:id",
                      component: ae,
                    }),
                    r.a.createElement(u.a, { component: le })
                  )
                )
              )
            )
          );
        },
        je = Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      function we(e, t) {
        navigator.serviceWorker
          .register(e)
          .then(function (e) {
            e.onupdatefound = function () {
              var a = e.installing;
              null != a &&
                (a.onstatechange = function () {
                  "installed" === a.state &&
                    (navigator.serviceWorker.controller
                      ? (console.log(
                          "New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."
                        ),
                        t && t.onUpdate && t.onUpdate(e))
                      : (console.log("Content is cached for offline use."),
                        t && t.onSuccess && t.onSuccess(e)));
                });
            };
          })
          .catch(function (e) {
            console.error("Error during service worker registration:", e);
          });
      }
      o.a.render(
        r.a.createElement(r.a.StrictMode, null, r.a.createElement(ye, null)),
        document.getElementById("root")
      ),
        (function (e) {
          if ("serviceWorker" in navigator) {
            if (
              new URL("", window.location.href).origin !==
              window.location.origin
            )
              return;
            window.addEventListener("load", function () {
              var t = "".concat("", "/service-worker.js");
              je
                ? (!(function (e, t) {
                    fetch(e, { headers: { "Service-Worker": "script" } })
                      .then(function (a) {
                        var n = a.headers.get("content-type");
                        404 === a.status ||
                        (null != n && -1 === n.indexOf("javascript"))
                          ? navigator.serviceWorker.ready.then(function (e) {
                              e.unregister().then(function () {
                                window.location.reload();
                              });
                            })
                          : we(e, t);
                      })
                      .catch(function () {
                        console.log(
                          "No internet connection found. App is running in offline mode."
                        );
                      });
                  })(t, e),
                  navigator.serviceWorker.ready.then(function () {
                    console.log(
                      "This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA"
                    );
                  }))
                : we(t, e);
            });
          }
        })();
    },
  },
  [[74, 1, 2]],
]);
//# sourceMappingURL=main.ff7ba88a.chunk.js.map
