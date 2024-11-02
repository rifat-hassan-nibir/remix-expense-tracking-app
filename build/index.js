var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/shared.css
var shared_default = "/build/_assets/shared-GGRRQU2L.css";

// app/root.jsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "Expense Tracking App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
function links() {
  return [{ rel: "stylesheet", href: shared_default }];
}

// app/routes/expenses.raw.jsx
var expenses_raw_exports = {};
__export(expenses_raw_exports, {
  loader: () => loader
});
var DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "First Expense",
    amount: 12.99,
    date: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "e2",
    title: "Second Expense",
    amount: 16.99,
    date: (/* @__PURE__ */ new Date()).toISOString()
  }
];
function loader() {
  return DUMMY_EXPENSES;
}

// app/routes/__marketing.jsx
var marketing_exports = {};
__export(marketing_exports, {
  default: () => MarketingLayout,
  links: () => links2
});
var import_react5 = require("@remix-run/react");

// app/components/navigation/MainHeader.jsx
var import_react4 = require("@remix-run/react");

// app/components/util/Logo.jsx
var import_react3 = require("@remix-run/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Logo() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { id: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/", children: "RemixExpenses" }, void 0, !1, {
    fileName: "app/components/util/Logo.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/util/Logo.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var Logo_default = Logo;

// app/components/navigation/MainHeader.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function MainHeader() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("header", { id: "main-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Logo_default, {}, void 0, !1, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("nav", { id: "main-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.NavLink, { to: "/", children: "Home" }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 12,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 11,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.NavLink, { to: "/pricing", children: "Pricing" }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 15,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 14,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("nav", { id: "cta-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: "/auth", className: "cta", children: "Login" }, void 0, !1, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 22,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 21,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 20,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/navigation/MainHeader.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var MainHeader_default = MainHeader;

// app/styles/marketing.css
var marketing_default = "/build/_assets/marketing-RVXOO7W5.css";

// app/routes/__marketing.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function MarketingLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MainHeader_default, {}, void 0, !1, {
      fileName: "app/routes/__marketing.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Outlet, {}, void 0, !1, {
      fileName: "app/routes/__marketing.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    ";"
  ] }, void 0, !0, {
    fileName: "app/routes/__marketing.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
function links2() {
  return [{ rel: "stylesheet", href: marketing_default }];
}

// app/routes/__marketing/pricing.jsx
var pricing_exports = {};
__export(pricing_exports, {
  default: () => PricingPage,
  meta: () => meta2
});
var import_fa = require("react-icons/fa");

// app/components/marketing/PricingPlan.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function PricingPlan({ title, price, perks, icon }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("article", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(icon, {}, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 7,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 6,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { children: title }, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: price }, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 10,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/marketing/PricingPlan.jsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "plan-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ol", { children: perks.map((perk) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: perk }, perk, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 15,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "actions", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { href: "/not-implemented", children: "Learn More" }, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 19,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 18,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/marketing/PricingPlan.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/marketing/PricingPlan.jsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}
var PricingPlan_default = PricingPlan;

// app/routes/__marketing/pricing.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), PRICING_PLANS = [
  {
    id: "p1",
    title: "Basic",
    price: "Free forever",
    perks: ["1 User", "Up to 100 expenses/year", "Basic analytics"],
    icon: import_fa.FaHandshake
  },
  {
    id: "p2",
    title: "Pro",
    price: "$9.99/month",
    perks: ["Unlimited Users", "Unlimited expenses/year", "Detailed analytics"],
    icon: import_fa.FaTrophy
  }
];
function PricingPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("main", { id: "pricing", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { children: "Great Product, Simple Pricing" }, void 0, !1, {
      fileName: "app/routes/__marketing/pricing.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ol", { id: "pricing-plans", children: PRICING_PLANS.map((plan) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { className: "plan", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      PricingPlan_default,
      {
        title: plan.title,
        price: plan.price,
        perks: plan.perks,
        icon: plan.icon
      },
      void 0,
      !1,
      {
        fileName: "app/routes/__marketing/pricing.jsx",
        lineNumber: 29,
        columnNumber: 13
      },
      this
    ) }, plan.id, !1, {
      fileName: "app/routes/__marketing/pricing.jsx",
      lineNumber: 28,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/__marketing/pricing.jsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__marketing/pricing.jsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
function meta2() {
}

// app/routes/__marketing/index.jsx
var marketing_exports2 = {};
__export(marketing_exports2, {
  default: () => Index,
  meta: () => meta3
});
var import_react6 = require("@remix-run/react"), import_fa2 = require("react-icons/fa"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("section", { className: "marketing-section", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_fa2.FaDollarSign, {}, void 0, !1, {
          fileName: "app/routes/__marketing/index.jsx",
          lineNumber: 9,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { children: "A Central Space" }, void 0, !1, {
          fileName: "app/routes/__marketing/index.jsx",
          lineNumber: 10,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__marketing/index.jsx",
        lineNumber: 8,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "marketing-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "marketing-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: "images/expenses-management.jpg", alt: "A list of expenses." }, void 0, !1, {
          fileName: "app/routes/__marketing/index.jsx",
          lineNumber: 14,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/__marketing/index.jsx",
          lineNumber: 13,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "marketing-explanation", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Manage your expenses in one central place." }, void 0, !1, {
            fileName: "app/routes/__marketing/index.jsx",
            lineNumber: 17,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react6.Link, { className: "cta", to: "/expenses", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: "Get Started" }, void 0, !1, {
              fileName: "app/routes/__marketing/index.jsx",
              lineNumber: 20,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_fa2.FaArrowRight, {}, void 0, !1, {
              fileName: "app/routes/__marketing/index.jsx",
              lineNumber: 21,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/__marketing/index.jsx",
            lineNumber: 19,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/__marketing/index.jsx",
            lineNumber: 18,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/__marketing/index.jsx",
          lineNumber: 16,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__marketing/index.jsx",
        lineNumber: 12,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__marketing/index.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("section", { className: "marketing-section", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_fa2.FaChartBar, {}, void 0, !1, {
          fileName: "app/routes/__marketing/index.jsx",
          lineNumber: 29,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { children: "Detailed Analytics" }, void 0, !1, {
          fileName: "app/routes/__marketing/index.jsx",
          lineNumber: 30,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__marketing/index.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "marketing-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "marketing-explanation", children: "Benefit from best-in-class analytics to understand your spending patterns." }, void 0, !1, {
          fileName: "app/routes/__marketing/index.jsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "marketing-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: "images/expenses-chart.jpg", alt: "A demo bar chart." }, void 0, !1, {
          fileName: "app/routes/__marketing/index.jsx",
          lineNumber: 38,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/__marketing/index.jsx",
          lineNumber: 37,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__marketing/index.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__marketing/index.jsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__marketing/index.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
function meta3() {
}

// app/routes/__marketing/auth.jsx
var auth_exports = {};
__export(auth_exports, {
  action: () => action,
  default: () => AuthPage,
  links: () => links3
});
var import_node2 = require("@remix-run/node");

// app/components/auth/AuthForm.jsx
var import_react7 = require("@remix-run/react"), import_fa3 = require("react-icons/fa"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function AuthForm() {
  let navigation = (0, import_react7.useNavigation)(), [searchParams] = (0, import_react7.useSearchParams)(), authMode = searchParams.get("mode") || "login", submitBtnCaption = authMode === "login" ? "Login" : "Create User", toggleBtnCaption = authMode === "login" ? "Create a new user" : "Log in with existing user", isSubmitting = navigation.state !== "idle";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react7.Form, { method: "post", className: "form", id: "auth-form", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "icon-img", children: authMode === "login" ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_fa3.FaLock, {}, void 0, !1, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 16,
      columnNumber: 57
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_fa3.FaUserPlus, {}, void 0, !1, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 16,
      columnNumber: 70
    }, this) }, void 0, !1, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { htmlFor: "email", children: "Email Address" }, void 0, !1, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { type: "email", id: "email", name: "email", required: !0 }, void 0, !1, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 19,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { htmlFor: "password", children: "Password" }, void 0, !1, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { type: "password", id: "password", name: "password", minLength: 7 }, void 0, !1, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "form-actions", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { disabled: isSubmitting, children: isSubmitting ? "Authenticating" : submitBtnCaption }, void 0, !1, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react7.Link, { to: authMode === "login" ? "?mode=signup" : "?mode=login", children: toggleBtnCaption }, void 0, !1, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/auth/AuthForm.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
var AuthForm_default = AuthForm;

// app/styles/auth.css
var auth_default = "/build/_assets/auth-7ZCCMTFI.css";

// app/routes/__marketing/auth.jsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function AuthPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(AuthForm_default, {}, void 0, !1, {
    fileName: "app/routes/__marketing/auth.jsx",
    lineNumber: 6,
    columnNumber: 10
  }, this);
}
async function action({ request }) {
  let authMode = new URL(request.url).searchParams.get("mode") || "login", formData = await request.formData(), credentials = Object.fromEntries(formData);
  return (0, import_node2.redirect)("/auth");
}
function links3() {
  return [{ rel: "stylesheet", href: auth_default }];
}

// app/routes/__app.jsx
var app_exports = {};
__export(app_exports, {
  default: () => ExpensesAppLayout,
  links: () => links4
});
var import_react9 = require("@remix-run/react");

// app/styles/expenses.css
var expenses_default = "/build/_assets/expenses-I2WWZSEC.css";

// app/components/navigation/ExpensesHeader.jsx
var import_react8 = require("@remix-run/react");
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function ExpensesHeader() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("header", { id: "main-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Logo_default, {}, void 0, !1, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("nav", { id: "main-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react8.NavLink, { to: "/expenses", end: !0, children: "Manage Expenses" }, void 0, !1, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 12,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 11,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react8.NavLink, { to: "/expenses/analysis", children: "Analyze Expenses" }, void 0, !1, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 17,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 16,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("nav", { id: "cta-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("button", { className: "cta", children: "Logout" }, void 0, !1, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 22,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/navigation/ExpensesHeader.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var ExpensesHeader_default = ExpensesHeader;

// app/routes/__app.jsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function ExpensesAppLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(ExpensesHeader_default, {}, void 0, !1, {
      fileName: "app/routes/__app.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react9.Outlet, {}, void 0, !1, {
      fileName: "app/routes/__app.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__app.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
function links4() {
  return [{ rel: "stylesheet", href: expenses_default }];
}

// app/routes/__app/expenses.analysis.jsx
var expenses_analysis_exports = {};
__export(expenses_analysis_exports, {
  default: () => ExpensesAnalysisPage
});

// app/components/expenses/ExpenseStatistics.jsx
var import_react10 = require("react"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function calculateSummaryStatistics(expenses) {
  let amounts = expenses.map((expense) => +expense.amount), maxAmount = Math.max(...amounts), minAmount = Math.min(...amounts), sum = expenses.reduce((prevVal, curVal) => curVal.amount + prevVal, 0), mean = sum / expenses.length;
  return { minAmount, maxAmount, sum, mean };
}
function ExpenseStatistics({ expenses }) {
  let { minAmount, maxAmount, sum, mean } = (0, import_react10.useMemo)(
    () => calculateSummaryStatistics(expenses),
    [expenses]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { children: "Summary Statistics" }, void 0, !1, {
      fileName: "app/components/expenses/ExpenseStatistics.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("dl", { id: "expense-statistics", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("dt", { children: "Total" }, void 0, !1, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 24,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("dd", { children: [
          "$",
          sum.toFixed(2)
        ] }, void 0, !0, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 25,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/expenses/ExpenseStatistics.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("dt", { children: "Average" }, void 0, !1, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 28,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("dd", { children: [
          "$",
          mean.toFixed(2)
        ] }, void 0, !0, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 29,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/expenses/ExpenseStatistics.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("dt", { children: " Min. Amount" }, void 0, !1, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("dd", { children: [
          "$",
          minAmount.toFixed(2)
        ] }, void 0, !0, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 33,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/expenses/ExpenseStatistics.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("dt", { children: "Max. Amount" }, void 0, !1, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("dd", { children: [
          "$",
          maxAmount.toFixed(2)
        ] }, void 0, !0, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 37,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/expenses/ExpenseStatistics.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/expenses/ExpenseStatistics.jsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/expenses/ExpenseStatistics.jsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
var ExpenseStatistics_default = ExpenseStatistics;

// app/components/expenses/ChartBar.jsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), ChartBar = ({ maxValue, value, label }) => {
  let barFillHeight = "0%";
  return maxValue > 0 && (barFillHeight = Math.round(value / maxValue * 100) + "%"), /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "chart-bar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "chart-bar--inner", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "div",
      {
        className: "chart-bar--fill",
        style: { height: barFillHeight }
      },
      void 0,
      !1,
      {
        fileName: "app/components/expenses/ChartBar.jsx",
        lineNumber: 11,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/expenses/ChartBar.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "chart-bar--label", children: label }, void 0, !1, {
      fileName: "app/components/expenses/ChartBar.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/expenses/ChartBar.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}, ChartBar_default = ChartBar;

// app/components/expenses/Chart.jsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function Chart({ expenses }) {
  let chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 }
  ];
  for (let expense of expenses) {
    let expenseMonth = new Date(expense.date).getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  let dataPointValues = chartDataPoints.map((dataPoint) => dataPoint.value), totalMaximum = Math.max(...dataPointValues);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { children: "Monthly Expenses" }, void 0, !1, {
      fileName: "app/components/expenses/Chart.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("ol", { className: "chart", children: chartDataPoints.map((dataPoint) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      ChartBar_default,
      {
        value: dataPoint.value,
        maxValue: totalMaximum,
        label: dataPoint.label
      },
      dataPoint.label,
      !1,
      {
        fileName: "app/components/expenses/Chart.jsx",
        lineNumber: 32,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/expenses/Chart.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/expenses/Chart.jsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}
var Chart_default = Chart;

// app/routes/__app/expenses.analysis.jsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), DUMMY_EXPENSES2 = [
  {
    id: "e1",
    title: "First Expense",
    amount: 12.99,
    date: (/* @__PURE__ */ new Date()).toISOString()
  },
  {
    id: "e2",
    title: "Second Expense",
    amount: 16.99,
    date: (/* @__PURE__ */ new Date()).toISOString()
  }
];
function ExpensesAnalysisPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Chart_default, { expenses: DUMMY_EXPENSES2 }, void 0, !1, {
      fileName: "app/routes/__app/expenses.analysis.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(ExpenseStatistics_default, { expenses: DUMMY_EXPENSES2 }, void 0, !1, {
      fileName: "app/routes/__app/expenses.analysis.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__app/expenses.analysis.jsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/routes/__app/expenses.jsx
var expenses_exports = {};
__export(expenses_exports, {
  default: () => ExpensesLayout,
  loader: () => loader2
});
var import_react12 = require("@remix-run/react"), import_fa4 = require("react-icons/fa");

// app/components/expenses/ExpenseListItem.jsx
var import_react11 = require("@remix-run/react"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function ExpenseListItem({ id, title, amount }) {
  let fetcher = (0, import_react11.useFetcher)();
  function deleteExpenseItemHandler() {
    confirm("Do you want to delete the expense?") && fetcher.submit(null, {
      method: "delete",
      action: `/expenses/${id}`
    });
  }
  return fetcher.state !== "idle" ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("article", { className: "expense-item locked", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: "Deleting" }, void 0, !1, {
    fileName: "app/components/expenses/ExpenseListItem.jsx",
    lineNumber: 22,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/expenses/ExpenseListItem.jsx",
    lineNumber: 21,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("article", { className: "expense-item", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h2", { className: "expense-title", children: title }, void 0, !1, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "expense-amount", children: [
        "$",
        amount.toFixed(2)
      ] }, void 0, !0, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/expenses/ExpenseListItem.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("menu", { className: "expense-actions", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("button", { onClick: deleteExpenseItemHandler, children: "Delete" }, void 0, !1, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react11.Link, { to: id, children: "Edit" }, void 0, !1, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/expenses/ExpenseListItem.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/expenses/ExpenseListItem.jsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
var ExpenseListItem_default = ExpenseListItem;

// app/components/expenses/ExpensesList.jsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function ExpensesList({ expenses }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("ol", { id: "expenses-list", children: expenses.map((expense) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
    ExpenseListItem_default,
    {
      id: expense.id,
      title: expense.title,
      amount: expense.amount
    },
    void 0,
    !1,
    {
      fileName: "app/components/expenses/ExpensesList.jsx",
      lineNumber: 9,
      columnNumber: 11
    },
    this
  ) }, expense.id, !1, {
    fileName: "app/components/expenses/ExpensesList.jsx",
    lineNumber: 8,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/components/expenses/ExpensesList.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
var ExpensesList_default = ExpensesList;

// app/data/database.server.js
var import_client = require("@prisma/client"), prisma;
global.__db || (global.__db = new import_client.PrismaClient(), global.__db.$connect()), prisma = global.__db;

// app/data/expense.server.js
async function addExpense(expenseData) {
  try {
    return await prisma.expense.create({
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date)
      }
    });
  } catch (error) {
    throw console.log(error), error;
  }
}
async function getExpenses() {
  try {
    return await prisma.expense.findMany({
      orderBy: { date: "desc" }
    });
  } catch (error) {
    console.log(error);
  }
}
async function getExpense(id) {
  try {
    return await prisma.expense.findFirst({
      where: { id }
    });
  } catch (error) {
    throw console.log(error), error;
  }
}
async function updateExpense(id, expenseData) {
  try {
    return prisma.expense.update({
      where: { id },
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date)
      }
    });
  } catch (error) {
    console.log(error);
  }
}
async function deleteExpense(id) {
  try {
    return prisma.expense.delete({
      where: { id }
    });
  } catch (error) {
    throw error;
  }
}

// app/routes/__app/expenses.jsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function ExpensesLayout() {
  let expenses = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react12.Outlet, {}, void 0, !1, {
      fileName: "app/routes/__app/expenses.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("section", { id: "expenses-actions", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react12.Link, { to: "add", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_fa4.FaPlus, {}, void 0, !1, {
            fileName: "app/routes/__app/expenses.jsx",
            lineNumber: 17,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { children: "Add Expense" }, void 0, !1, {
            fileName: "app/routes/__app/expenses.jsx",
            lineNumber: 18,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/__app/expenses.jsx",
          lineNumber: 16,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("a", { href: "/expenses/raw", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_fa4.FaDownload, {}, void 0, !1, {
            fileName: "app/routes/__app/expenses.jsx",
            lineNumber: 21,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { children: "Load Raw Data" }, void 0, !1, {
            fileName: "app/routes/__app/expenses.jsx",
            lineNumber: 22,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/__app/expenses.jsx",
          lineNumber: 20,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/__app/expenses.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(ExpensesList_default, { expenses }, void 0, !1, {
        fileName: "app/routes/__app/expenses.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/__app/expenses.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__app/expenses.jsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
async function loader2() {
  return await getExpenses();
}

// app/routes/__app/expenses/$id.jsx
var id_exports = {};
__export(id_exports, {
  action: () => action2,
  default: () => UpdateExpensesPage,
  loader: () => loader3
});
var import_react14 = require("@remix-run/react");

// app/components/expenses/ExpenseForm.jsx
var import_react13 = require("@remix-run/react"), import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function ExpenseForm() {
  let today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), navigation = (0, import_react13.useNavigation)(), params = (0, import_react13.useParams)(), expenseData = (0, import_react13.useMatches)().find((match) => match.id === "routes/__app/expenses").data.find((expense) => expense.id === params.id), isSubmitting = navigation.state !== "idle", defaultValues = expenseData ? {
    title: expenseData.title,
    amount: expenseData.amount,
    date: expenseData.date
  } : {
    title: "",
    amount: "",
    date: ""
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react13.Form, { method: expenseData ? "patch" : "post", className: "form", id: "expense-form", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("label", { htmlFor: "title", children: "Expense Title" }, void 0, !1, {
        fileName: "app/components/expenses/ExpenseForm.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("input", { type: "text", defaultValue: defaultValues.title, id: "title", name: "title", required: !0, maxLength: 30 }, void 0, !1, {
        fileName: "app/components/expenses/ExpenseForm.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/expenses/ExpenseForm.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "form-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("label", { htmlFor: "amount", children: "Amount" }, void 0, !1, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 37,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("input", { type: "number", defaultValue: defaultValues.amount, id: "amount", name: "amount", min: "0", step: "0.01", required: !0 }, void 0, !1, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 38,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/expenses/ExpenseForm.jsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("label", { htmlFor: "date", children: "Date" }, void 0, !1, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 41,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          "input",
          {
            type: "date",
            defaultValue: defaultValues.date ? defaultValues.date.slice(0, 10) : "",
            id: "date",
            name: "date",
            max: today,
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/components/expenses/ExpenseForm.jsx",
            lineNumber: 42,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/expenses/ExpenseForm.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/expenses/ExpenseForm.jsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "form-actions", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("button", { disabled: isSubmitting, children: isSubmitting ? "Submitting" : "Save Expense" }, void 0, !1, {
        fileName: "app/components/expenses/ExpenseForm.jsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react13.Link, { to: "..", children: "Cancel" }, void 0, !1, {
        fileName: "app/components/expenses/ExpenseForm.jsx",
        lineNumber: 54,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/expenses/ExpenseForm.jsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/expenses/ExpenseForm.jsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}
var ExpenseForm_default = ExpenseForm;

// app/components/util/Modal.jsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function Modal({ children, onClose }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "modal-backdrop", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
    "dialog",
    {
      className: "modal",
      open: !0,
      onClick: (event) => event.stopPropagation(),
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/util/Modal.jsx",
      lineNumber: 4,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/util/Modal.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
var Modal_default = Modal;

// app/routes/__app/expenses/$id.jsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function UpdateExpensesPage() {
  let navigate = (0, import_react14.useNavigate)();
  function closeHandler() {
    navigate("..");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Modal_default, { onClose: closeHandler, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(ExpenseForm_default, {}, void 0, !1, {
    fileName: "app/routes/__app/expenses/$id.jsx",
    lineNumber: 19,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/__app/expenses/$id.jsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
async function loader3({ params }) {
  let expenseId = params.id;
  return await getExpense(expenseId);
}
async function action2({ params, request }) {
  let expenseId = params.id;
  if (request.method === "PATCH")
    try {
      let formData = await request.formData(), updatedExpenseData = Object.fromEntries(formData);
      return await updateExpense(expenseId, updatedExpenseData), {
        success: "Expense data added successfully"
      };
    } catch (error) {
      return console.log(error), {
        error: "Could not add expense data"
      };
    }
  else if (request.method === "DELETE")
    try {
      return await deleteExpense(expenseId), {
        success: "Expense data added successfully"
      };
    } catch (error) {
      return console.log(error), {
        error: "Could not delete expense"
      };
    }
}

// app/routes/__app/expenses/add.jsx
var add_exports = {};
__export(add_exports, {
  action: () => action3,
  default: () => AddExpensesPage
});
var import_node3 = require("@remix-run/node"), import_react15 = require("@remix-run/react");
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
function AddExpensesPage() {
  let navigate = (0, import_react15.useNavigate)();
  function closeHandler() {
    navigate("..");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Modal_default, { onClose: closeHandler, children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(ExpenseForm_default, {}, void 0, !1, {
    fileName: "app/routes/__app/expenses/add.jsx",
    lineNumber: 20,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/__app/expenses/add.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
async function action3({ request }) {
  let formData = await request.formData(), expenseData = Object.fromEntries(formData);
  return await addExpense(expenseData), (0, import_node3.redirect)("/expenses");
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-LAAMSAT3.js", imports: ["/build/_shared/chunk-6IN7NHYX.js", "/build/_shared/chunk-S4ZNHW4H.js", "/build/_shared/chunk-IU43IUTG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-NAUSJ546.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app": { id: "routes/__app", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__app-BUYL4HLK.js", imports: ["/build/_shared/chunk-42MZQ5FV.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/expenses": { id: "routes/__app/expenses", parentId: "routes/__app", path: "expenses", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/expenses-LMYJP5M4.js", imports: ["/build/_shared/chunk-2UEPIYOR.js", "/build/_shared/chunk-MTBYHSGM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/expenses.analysis": { id: "routes/__app/expenses.analysis", parentId: "routes/__app", path: "expenses/analysis", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/expenses.analysis-HMAAMFDU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/expenses/$id": { id: "routes/__app/expenses/$id", parentId: "routes/__app/expenses", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/expenses/$id-3G6HTC3K.js", imports: ["/build/_shared/chunk-YMGBREHS.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/expenses/add": { id: "routes/__app/expenses/add", parentId: "routes/__app/expenses", path: "add", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/expenses/add-G3NCRH7T.js", imports: ["/build/_shared/chunk-YMGBREHS.js", "/build/_shared/chunk-3K2JK6MY.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__marketing": { id: "routes/__marketing", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__marketing-DHVGILRU.js", imports: ["/build/_shared/chunk-42MZQ5FV.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__marketing/auth": { id: "routes/__marketing/auth", parentId: "routes/__marketing", path: "auth", index: void 0, caseSensitive: void 0, module: "/build/routes/__marketing/auth-S74Y3WMC.js", imports: ["/build/_shared/chunk-3K2JK6MY.js", "/build/_shared/chunk-MTBYHSGM.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__marketing/index": { id: "routes/__marketing/index", parentId: "routes/__marketing", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/__marketing/index-FDBDPMBQ.js", imports: ["/build/_shared/chunk-MTBYHSGM.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__marketing/pricing": { id: "routes/__marketing/pricing", parentId: "routes/__marketing", path: "pricing", index: void 0, caseSensitive: void 0, module: "/build/routes/__marketing/pricing-AHAEKVU3.js", imports: ["/build/_shared/chunk-MTBYHSGM.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/expenses.raw": { id: "routes/expenses.raw", parentId: "root", path: "expenses/raw", index: void 0, caseSensitive: void 0, module: "/build/routes/expenses.raw-F7CTRGBZ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "49c96d9a", hmr: void 0, url: "/build/manifest-49C96D9A.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/expenses.raw": {
    id: "routes/expenses.raw",
    parentId: "root",
    path: "expenses/raw",
    index: void 0,
    caseSensitive: void 0,
    module: expenses_raw_exports
  },
  "routes/__marketing": {
    id: "routes/__marketing",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: marketing_exports
  },
  "routes/__marketing/pricing": {
    id: "routes/__marketing/pricing",
    parentId: "routes/__marketing",
    path: "pricing",
    index: void 0,
    caseSensitive: void 0,
    module: pricing_exports
  },
  "routes/__marketing/index": {
    id: "routes/__marketing/index",
    parentId: "routes/__marketing",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: marketing_exports2
  },
  "routes/__marketing/auth": {
    id: "routes/__marketing/auth",
    parentId: "routes/__marketing",
    path: "auth",
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/__app": {
    id: "routes/__app",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: app_exports
  },
  "routes/__app/expenses.analysis": {
    id: "routes/__app/expenses.analysis",
    parentId: "routes/__app",
    path: "expenses/analysis",
    index: void 0,
    caseSensitive: void 0,
    module: expenses_analysis_exports
  },
  "routes/__app/expenses": {
    id: "routes/__app/expenses",
    parentId: "routes/__app",
    path: "expenses",
    index: void 0,
    caseSensitive: void 0,
    module: expenses_exports
  },
  "routes/__app/expenses/$id": {
    id: "routes/__app/expenses/$id",
    parentId: "routes/__app/expenses",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/__app/expenses/add": {
    id: "routes/__app/expenses/add",
    parentId: "routes/__app/expenses",
    path: "add",
    index: void 0,
    caseSensitive: void 0,
    module: add_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
