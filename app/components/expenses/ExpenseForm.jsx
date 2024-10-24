import { Form, Link, useLoaderData, useNavigation, useParams } from "@remix-run/react";

function ExpenseForm() {
  const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10
  const navigation = useNavigation();

  const isSubmitting = navigation.state !== "idle";

  const expenseData = useLoaderData();

  const defaultValues = expenseData
    ? {
        title: expenseData.title,
        amount: expenseData.amount,
        date: expenseData.date,
      }
    : {
        title: "",
        amount: "",
        date: "",
      };

  return (
    <Form method="post" className="form" id="expense-form">
      <p>
        <label htmlFor="title">Expense Title</label>
        <input type="text" defaultValue={defaultValues.title} id="title" name="title" required maxLength={30} />
      </p>

      <div className="form-row">
        <p>
          <label htmlFor="amount">Amount</label>
          <input type="number" defaultValue={defaultValues.amount} id="amount" name="amount" min="0" step="0.01" required />
        </p>
        <p>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            defaultValue={defaultValues.date ? defaultValues.date.slice(0, 10) : ""}
            id="date"
            name="date"
            max={today}
            required
          />
        </p>
      </div>
      <div className="form-actions">
        <button disabled={isSubmitting}>{isSubmitting ? "Submitting" : "Save Expense"}</button>
        <Link to="..">Cancel</Link>
      </div>
    </Form>
  );
}

export default ExpenseForm;
