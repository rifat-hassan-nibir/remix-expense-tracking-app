import {
  ExpenseForm_default,
  Modal_default
} from "/build/_shared/chunk-YMGBREHS.js";
import {
  require_expense
} from "/build/_shared/chunk-2UEPIYOR.js";
import {
  useNavigate
} from "/build/_shared/chunk-6IN7NHYX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-S4ZNHW4H.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/__app/expenses/$id.jsx
var import_expense = __toESM(require_expense());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function UpdateExpensesPage() {
  const navigate = useNavigate();
  function closeHandler() {
    navigate("..");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, { onClose: closeHandler, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExpenseForm_default, {}, void 0, false, {
    fileName: "app/routes/__app/expenses/$id.jsx",
    lineNumber: 19,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/__app/expenses/$id.jsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
export {
  UpdateExpensesPage as default
};
//# sourceMappingURL=/build/routes/__app/expenses/$id-4XPHI2UG.js.map
