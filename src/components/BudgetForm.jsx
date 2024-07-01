import { useState } from 'react';

export const BudgetForm = () => {

    const [budget, setBudget] = useState(0);

    const handleChange = (e) => {
        setBudget(e.target.value);
    }

  return (
    <form className="space-y-5">
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
