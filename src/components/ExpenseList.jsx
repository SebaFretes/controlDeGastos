import { useBudget } from "../hooks/useBudget";
import { AmountDisplay } from "./AmountDisplay";

export const ExpenseList = () => {

    const {state} = useBudget();

    const isEmpty = state.expenses.length === 0;

    const formatDate = (date) => {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            // hour: 'numeric',
            // minute: 'numeric',
            // second: 'numeric',
            // hour12: true,
        };
        return new Date(date).toLocaleString('es-ES', options);
    };

  return (
    <div className="mt-10">
        {isEmpty ? <h1 className="text-gray-600 text-2xl font-bold">No hay gastos</h1> :
              <>
                  <h1 className="text-gray-600 text-2xl font-bold my-5">
                    Listado de Gastos
                  </h1>
                  <div className="bg-white shadow-lg p-10 w-full border-b border-gray-100 flex gap-5 items-center">
                    {state.expenses.map(exp => (
                        <div key={exp.id}>
                            <h4>{exp.expenseName}</h4>
                            <p>Compra realizada el: {formatDate(exp.date)}</p>
                            <AmountDisplay amount={exp.amount}/>
                        </div>
                    ))}
                  </div>
              </>
        }
    </div>
  )
}
