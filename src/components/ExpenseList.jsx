import { categories } from "../data/categories";
import { useBudget } from "../hooks/useBudget";
import { AmountDisplay } from "./AmountDisplay";

export const ExpenseList = () => {

    const { state } = useBudget();

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


    const getCategoryName = (categoryId) => {
        const category = categories.find(cat => cat.id === categoryId);
        return category.name;
    };

    const getCategoryIcon = (categoryId) => {
        const category = categories.find(cat => cat.id === categoryId);
        return category.icon;
    };

    return (
        <div className="mt-10">
            {isEmpty ? <h1 className="text-gray-600 text-2xl font-bold">No hay gastos</h1> :
                <>
                    <h1 className="text-gray-600 text-2xl font-bold my-5">
                        Listado de Gastos
                    </h1>
                    {state.expenses.map(exp => (
                        <div className="bg-white shadow-lg p-10 w-full border-b border-gray-100 mb-4">
                            <div key={exp.id} className="flex justify-between items-center gap-5 mb-5">
                                <div className="flex items-center gap-5">
                                    <img src={`/icono_${getCategoryIcon(exp.category)}.svg`} alt="img" className="w-20" />
                                    <div>
                                        <p className="font-bold uppercase text-slate-500">{getCategoryName(exp.category)}</p>
                                        <p>{exp.expenseName}</p>
                                        <p className="text-slate-600">Compra realizada el: {formatDate(exp.date)}</p>
                                    </div>
                                </div>
                                <AmountDisplay amount={exp.amount} />
                            </div>
                        </div>
                    ))}
                </>
            }
        </div>
    )
}
