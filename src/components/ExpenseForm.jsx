import { useState, useEffect } from "react";
import { categories } from "../data/categories";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useBudget } from "../hooks/useBudget";
import Swal from 'sweetalert2';

export const ExpenseForm = () => {

    const [expense, setExpense] = useState({
        expenseName: '',
        amount: 0,
        category: '',
        date: new Date()
    });

    const {state, dispatch, totalExpenses, availableMoney} = useBudget();

    useEffect(() => {
        if(state.editingId) {
          const editingExpense = state.expenses.filter(exp => exp.id === state.editingId)[0]
          setExpense(editingExpense);
        }
      }, [state.editingId])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setExpense({
            ...expense,
            [name] : name === 'amount' ? +value : value
        });
    };

    const handleDateChange = (date) => {
        setExpense({
            ...expense,
            date: date
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(Object.values(expense).includes('')) {
            (Swal.fire({
                title: 'Todos los campos deben ser completados',
                icon: 'error',
                confirmButtonText: 'VOLVER'
            }))
            return;
        }

        if (expense.amount > availableMoney) {
            Swal.fire({
                title: 'No tenés suficiente dinero para realizar esta compra',
                icon: 'error',
                confirmButtonText: 'VOLVER'
            });
            dispatch({type: 'hide-modal'})
            return;
        }

        if(state.editingId) {
            dispatch({type: 'update-expense', payload: {expense: {id: state.editingId, ...expense}} })
        } else {
            dispatch({type: 'add-expense', payload: {expense} });
        }

        {state.editingId ? Swal.fire({
            title: 'Gasto actualizado',
            icon: 'success',
            confirmButtonText: 'OK'
        }) : Swal.fire({
            title: 'Gasto agregado',
            icon: 'success',
            confirmButtonText: 'OK'
        })}

    }

    return (
        <>
            <form className="space-y-5" onSubmit={handleSubmit}>
                <h1 className="text-center text-2xl uppercase font-black border-blue-500 border-b-4 py-2">Gasto</h1>
                <div className="flex flex-col gap-2">
                    <label className="text-xl">
                        Producto o servicio:
                    </label>
                    <input type="text" name="expenseName" className="bg-slate-100 p-2" placeholder="Añadí el nombre del gasto"
                    value={expense.expenseName} onChange={handleChange}/>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-xl">
                        Valor:
                    </label>
                    <input type="number" name="amount" className="bg-slate-100 p-2" placeholder="Agregá el valor"
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
                    selected={expense.date}
                    onChange={handleDateChange}
                    />
                </div>
                
                <input type="submit"
                className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
                value={state.editingId ? 'Actualizar Gasto' : 'Registrar Gasto'}/>

            </form>
        </>
    )
}