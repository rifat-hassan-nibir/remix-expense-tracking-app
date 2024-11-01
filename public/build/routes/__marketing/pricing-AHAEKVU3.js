import {
  FaHandshake,
  FaTrophy
} from "/build/_shared/chunk-MTBYHSGM.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-S4ZNHW4H.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/components/marketing/PricingPlan.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function PricingPlan({ title, price, perks, icon }) {
  const Icon = icon;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, {}, void 0, false, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 7,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 6,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: title }, void 0, false, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: price }, void 0, false, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 10,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/marketing/PricingPlan.jsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "plan-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", { children: perks.map((perk) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: perk }, perk, false, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 15,
        columnNumber: 13
      }, this)) }, void 0, false, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "actions", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/not-implemented", children: "Learn More" }, void 0, false, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 19,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 18,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/marketing/PricingPlan.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/marketing/PricingPlan.jsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}
var PricingPlan_default = PricingPlan;

// app/routes/__marketing/pricing.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var PRICING_PLANS = [
  {
    id: "p1",
    title: "Basic",
    price: "Free forever",
    perks: ["1 User", "Up to 100 expenses/year", "Basic analytics"],
    icon: FaHandshake
  },
  {
    id: "p2",
    title: "Pro",
    price: "$9.99/month",
    perks: ["Unlimited Users", "Unlimited expenses/year", "Detailed analytics"],
    icon: FaTrophy
  }
];
function PricingPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { id: "pricing", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: "Great Product, Simple Pricing" }, void 0, false, {
      fileName: "app/routes/__marketing/pricing.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ol", { id: "pricing-plans", children: PRICING_PLANS.map((plan) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "plan", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      PricingPlan_default,
      {
        title: plan.title,
        price: plan.price,
        perks: plan.perks,
        icon: plan.icon
      },
      void 0,
      false,
      {
        fileName: "app/routes/__marketing/pricing.jsx",
        lineNumber: 29,
        columnNumber: 13
      },
      this
    ) }, plan.id, false, {
      fileName: "app/routes/__marketing/pricing.jsx",
      lineNumber: 28,
      columnNumber: 11
    }, this)) }, void 0, false, {
      fileName: "app/routes/__marketing/pricing.jsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/__marketing/pricing.jsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
function meta() {
}
export {
  PricingPage as default,
  meta
};
//# sourceMappingURL=/build/routes/__marketing/pricing-AHAEKVU3.js.map
