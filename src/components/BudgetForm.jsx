import { useState } from 'react';
import { useBudget } from '../hooks/useBudget';

export const BudgetForm = () => {

    const [budget, setBudget] = useState(0);
    const { dispatch } = useBudget();

    const handleChange = (e) => {
        setBudget(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      
      dispatch({
        type: 'add-budget',
        payload: {budget}
      })
      // setBudget(0);
    }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-5">
            <label className="text-center text-blue-600 font-bold">Definir Presupuesto</label>
            <input type="number"
            className="w-full bg-white border border-gray-200 p-2"
            placeholder="Definí tu presupuesto"
            value={budget}
            onChange={handleChange}
            />
        </div>
        <input type="submit"
        value='Definir Presupuesto'
        className={` cursor-pointer w-full p-2 text-white font-black uppercase ${budget > 0 ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-200'}`}
        disabled={budget <= 0}
        />
    </form>
  )
}
