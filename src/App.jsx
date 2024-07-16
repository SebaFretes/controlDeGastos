import { useEffect } from "react";
import { BudgetForm } from "./components/BudgetForm"
import { BudgetTracker } from "./components/BudgetTracker";
import { ExpenseList } from "./components/ExpenseList";
import { Modal } from "./components/Modal";
import { useBudget } from "./hooks/useBudget"

export const App = () => {

  const {state, dispatch} = useBudget();

  useEffect(() => {
    localStorage.setItem('budget', state.budget.toString())
    localStorage.setItem('expense', JSON.stringify(state.expenses))
  }, [state]);
  
  return (
    <>
      <div className="bg-blue-600 py-8 max-h-72">
        <h1 className="text-white text-center text-3xl font-black uppercase">Planificador de Gastos</h1>
      </div>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        {state.budget <= 0 ? <BudgetForm /> : <BudgetTracker />}
      </div>

      {state.budget > 0 && (
        <div className="max-w-3xl mx-auto py-10">
          <Modal />
          <ExpenseList />
        </div>
      )}
      
    </>
  )
}