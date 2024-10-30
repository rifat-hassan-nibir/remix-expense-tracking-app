import {
  Form,
  Link,
  useMatches,
  useNavigation,
  useParams
} from "/build/_shared/chunk-6IN7NHYX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-S4ZNHW4H.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// app/components/expenses/ExpenseForm.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ExpenseForm() {
  const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const navigation = useNavigation();
  const params = useParams();
  const matches = useMatches();
  const expensesData = matches.find((match) => match.id === "routes/__app/expenses").data;
  const expenseData = expensesData.find((expense) => expense.id === params.id);
  const isSubmitting = navigation.state !== "idle";
  const defaultValues = expenseData ? {
    title: expenseData.title,
    amount: expenseData.amount,
    date: expenseData.date
  } : {
    title: "",
    amount: "",
    date: ""
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: expenseData ? "patch" : "post", className: "form", id: "expense-form", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "title", children: "Expense Title" }, void 0, false, {
        fileName: "app/components/expenses/ExpenseForm.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", defaultValue: defaultValues.title, id: "title", name: "title", required: true, maxLength: 30 }, void 0, false, {
        fileName: "app/components/expenses/ExpenseForm.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/expenses/ExpenseForm.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "amount", children: "Amount" }, void 0, false, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 37,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", defaultValue: defaultValues.amount, id: "amount", name: "amount", min: "0", step: "0.01", required: true }, void 0, false, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 38,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/expenses/ExpenseForm.jsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "date", children: "Date" }, void 0, false, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 41,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            type: "date",
            defaultValue: defaultValues.date ? defaultValues.date.slice(0, 10) : "",
            id: "date",
            name: "date",
            max: today,
            required: true
          },
          void 0,
          false,
          {
            fileName: "app/components/expenses/ExpenseForm.jsx",
            lineNumber: 42,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/expenses/ExpenseForm.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/expenses/ExpenseForm.jsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-actions", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { disabled: isSubmitting, children: isSubmitting ? "Submitting" : "Save Expense" }, void 0, false, {
        fileName: "app/components/expenses/ExpenseForm.jsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "..", children: "Cancel" }, void 0, false, {
        fileName: "app/components/expenses/ExpenseForm.jsx",
        lineNumber: 54,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/expenses/ExpenseForm.jsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/expenses/ExpenseForm.jsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}
var ExpenseForm_default = ExpenseForm;

// app/components/util/Modal.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Modal({ children, onClose }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "modal-backdrop", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    "dialog",
    {
      className: "modal",
      open: true,
      onClick: (event) => event.stopPropagation(),
      children
    },
    void 0,
    false,
    {
      fileName: "app/components/util/Modal.jsx",
      lineNumber: 4,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/util/Modal.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
var Modal_default = Modal;

export {
  require_node,
  ExpenseForm_default,
  Modal_default
};
//# sourceMappingURL=/build/_shared/chunk-K2OBCUVT.js.map
