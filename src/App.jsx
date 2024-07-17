import { useEffect } from "react";
import { BudgetForm } from "./components/BudgetForm"
import { BudgetTracker } from "./components/BudgetTracker";
import { ExpenseList } from "./components/ExpenseList";
import { Modal } from "./components/Modal";
import { useBudget } from "./hooks/useBudget"
import { FilterList } from "./components/FilterList";

export const App = () => {

  const { state } = useBudget();

  useEffect(() => {
    localStorage.setItem('budget', state.budget.toString())
    localStorage.setItem('expense', JSON.stringify(state.expenses))
  }, [state]);
  
  return (
    <>
      <div className="bg-blue-400 py-8 max-h-72">
        <h1 className="text-white text-center text-3xl font-black uppercase">Planificador de Gastos</h1>
        <p className="text-center text-1xl font-black uppercase text-white">
          Desarrollado por <a href="https://github.com/SebaFretes/" target="_blank">
          <span className="text-blue-800">
            Sebastian Fretes
            </span>
          </a>
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        {state.budget <= 0 ? <BudgetForm /> : <BudgetTracker />}
      </div>

      {state.budget > 0 && (
        <div className="max-w-3xl mx-auto py-10">
          <FilterList />
          <Modal />
          <ExpenseList />
        </div>
      )}
    </>
  )
}