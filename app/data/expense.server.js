import { prisma } from "./database.server";

// ADD EXPENSES DATA TO DB
export async function addExpense(expenseData) {
  try {
    return await prisma.expense.create({
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date),
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// GET EXPENSE DATA FROM DB
export async function getExpenses() {
  try {
    const expenses = await prisma.expense.findMany({
      orderBy: { date: "desc" },
    });
    return expenses;
  } catch (error) {
    console.log(error);
  }
}

// GET SINGLE EXPENSE DATA FROM DB
export async function getExpense(id) {
  try {
    const expense = await prisma.expense.findFirst({
      where: { id },
    });
    return expense;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// UPDATE EXPENSE DATA
export async function updateExpense(id, expenseData) {
  try {
    return prisma.expense.update({
      where: { id },
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date),
      },
    });
  } catch (error) {
    console.log(error);
  }
}

// DELETE EXPENSE DATA FROM DB
export async function deleteExpense(id) {
  try {
    return prisma.expense.delete({
      where: { id },
    });
  } catch (error) {
    throw error;
  }
}
