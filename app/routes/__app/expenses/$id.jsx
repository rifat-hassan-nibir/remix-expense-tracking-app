// /expenses/<some-id> => /expenses/expense-1, /expenses/e-1

import { redirect } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";

import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { deleteExpense, getExpense, updateExpense } from "~/data/expense.server";

export default function UpdateExpensesPage() {
  const navigate = useNavigate();

  function closeHandler() {
    // navigate programmatically
    navigate("..");
  }

  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  );
}

export async function loader({ params }) {
  const expenseId = params.id;
  const expense = await getExpense(expenseId);
  return expense;
}

export async function action({ params, request }) {
  const expenseId = params.id;

  if (request.method === "PATCH") {
    try {
      const formData = await request.formData();
      const updatedExpenseData = Object.fromEntries(formData);
      await updateExpense(expenseId, updatedExpenseData);
      return {
        success: "Expense data added successfully",
      };
    } catch (error) {
      console.log(error);
      return {
        error: "Could not add expense data",
      };
    }
  } else if (request.method === "DELETE") {
    try {
      await deleteExpense(expenseId);
      return {
        success: "Expense data added successfully",
      };
    } catch (error) {
      console.log(error);
      return {
        error: "Could not delete expense",
      };
    }
  }
}
