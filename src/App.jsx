import { BudgetForm } from "./components/BudgetForm"
import { useBudget } from "./hooks/useBudget"

export const App = () => {

  const {state, dispatch} = useBudget();
  
  return (
    <>
    <div className="bg-blue-600 py-8 max-h-72">
      <h1 className="text-white text-center text-3xl font-black uppercase">Planificador de Gastos</h1>
    </div>
    
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
      <BudgetForm />
    </div>
    
    </>
  )
}