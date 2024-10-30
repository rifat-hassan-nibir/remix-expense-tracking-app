import {
  ExpenseForm_default,
  Modal_default,
  require_node
} from "/build/_shared/chunk-K2OBCUVT.js";
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

// app/routes/__app/expenses/add.jsx
var import_node = __toESM(require_node());
var import_expense = __toESM(require_expense());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function AddExpensesPage() {
  const navigate = useNavigate();
  function closeHandler() {
    navigate("..");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, { onClose: closeHandler, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExpenseForm_default, {}, void 0, false, {
    fileName: "app/routes/__app/expenses/add.jsx",
    lineNumber: 20,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/__app/expenses/add.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
export {
  AddExpensesPage as default
};
//# sourceMappingURL=/build/routes/__app/expenses/add-BHSLJTHX.js.map
