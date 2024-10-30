import {
  Logo_default
} from "/build/_shared/chunk-HEXB2WG6.js";
import {
  Link,
  NavLink,
  Outlet
} from "/build/_shared/chunk-6IN7NHYX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-S4ZNHW4H.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/components/navigation/MainHeader.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function MainHeader() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { id: "main-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo_default, {}, void 0, false, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { id: "main-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: "Home" }, void 0, false, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 12,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 11,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/pricing", children: "Pricing" }, void 0, false, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 15,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 14,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { id: "cta-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/auth", className: "cta", children: "Login" }, void 0, false, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 22,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 21,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 20,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/navigation/MainHeader.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var MainHeader_default = MainHeader;

// app/styles/marketing.css
var marketing_default = "/build/_assets/marketing-RVXOO7W5.css";

// app/routes/__marketing.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function MarketingLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MainHeader_default, {}, void 0, false, {
      fileName: "app/routes/__marketing.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/__marketing.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    ";"
  ] }, void 0, true, {
    fileName: "app/routes/__marketing.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
function links() {
  return [{ rel: "stylesheet", href: marketing_default }];
}
export {
  MarketingLayout as default,
  links
};
//# sourceMappingURL=/build/routes/__marketing-NFLNWTVA.js.map
