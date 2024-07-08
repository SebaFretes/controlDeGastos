import { useState } from "react";
import { categories } from "../data/categories";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const ExpenseForm = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [expense, setExpense] = useState({
        expenseName: '',
        amount: 0,
        category: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setExpense({
            ...expense,
            [name] : name === 'amount' ? +value : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(Object.values(expense).includes('')) {
            setError('Todos los campos deben ser completados');
            return;
        }
    }

    return (
        <>
            <form className="space-y-5" onSubmit={handleSubmit}>
                <h1 className="text-center text-2xl uppercase font-black border-blue-500 border-b-4 py-2">Gastos</h1>
                <div className="flex flex-col gap-2">
                    <label className="text-xl">
                        Gasto:
                    </label>
                    <input type="text" name="expenseName" className="bg-slate-100 p-2" placeholder="Añadí el nombre del gasto"
                    value={expense.expenseName} onChange={handleChange}/>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-xl">
                        Cantidad:
                    </label>
                    <input type="number" name="amount" className="bg-slate-100 p-2" placeholder="Agregá la cantidad"
                    value={expense.amount} onChange={handleChange}/>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-xl">
                        Categoría:
                    </label>
                    <select className="bg-slate-100 p-2" name="category"
                    value={expense.category} onChange={handleChange}>
                        <option value="">--Seleccioná la categoría--</option>
                        {categories.map(cat => (
                            <option key={cat.id} value={cat.id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-xl">
                        Fecha:
                    </label>
                    <DatePicker className="bg-slate-100 p-2 border-0"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    value={startDate}
                    />
                </div>
                {error && (<div className="bg-red-600 text-white text-center font-bold">Todos los campos deben ser completados</div>)}

                <input type="submit"
                className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
                value={'Registrar Gasto'}/>

            </form>
        </>
    )
}