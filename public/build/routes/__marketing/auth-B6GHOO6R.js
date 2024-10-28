import {
  FaLock,
  FaUserPlus
} from "/build/_shared/chunk-MTBYHSGM.js";
import {
  Link,
  useSearchParams
} from "/build/_shared/chunk-CTKU2V6O.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-S4ZNHW4H.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/components/auth/AuthForm.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function AuthForm() {
  const [searchParams] = useSearchParams();
  const authMode = searchParams.get("mode") || "login";
  const submitBtnCaption = authMode === "login" ? "Login" : "Create User";
  const toggleBtnCaption = authMode === "login" ? "Create a new user" : "Log in with existing user";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "post", className: "form", id: "auth-form", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "icon-img", children: authMode === "login" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FaLock, {}, void 0, false, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 15,
      columnNumber: 33
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FaUserPlus, {}, void 0, false, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 15,
      columnNumber: 46
    }, this) }, void 0, false, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", children: "Email Address" }, void 0, false, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", id: "email", name: "email", required: true }, void 0, false, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 19,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", children: "Password" }, void 0, false, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "password", id: "password", name: "password", minLength: 7 }, void 0, false, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-actions", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { children: submitBtnCaption }, void 0, false, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: authMode === "login" ? "?mode=signup" : "?mode=login", children: toggleBtnCaption }, void 0, false, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/auth/AuthForm.jsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
var AuthForm_default = AuthForm;

// app/styles/auth.css
var auth_default = "/build/_assets/auth-7ZCCMTFI.css";

// app/routes/__marketing/auth.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function AuthPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AuthForm_default, {}, void 0, false, {
    fileName: "app/routes/__marketing/auth.jsx",
    lineNumber: 5,
    columnNumber: 10
  }, this);
}
function links() {
  return [{ rel: "stylesheet", href: auth_default }];
}
export {
  AuthPage as default,
  links
};
//# sourceMappingURL=/build/routes/__marketing/auth-B6GHOO6R.js.map