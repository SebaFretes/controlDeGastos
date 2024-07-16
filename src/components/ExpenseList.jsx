import { categories } from "../data/categories";
import { useBudget } from "../hooks/useBudget";
import { AmountDisplay } from "./AmountDisplay";
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

export const ExpenseList = () => {

    const { state, dispatch } = useBudget();

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

    const leadingActions = (id) => (
        <LeadingActions>
            <SwipeAction onClick={() => dispatch({ type: 'get-expense-by-id', payload: { id } })}>
                Editar
            </SwipeAction>
        </LeadingActions>
    );

    const trailingActions = (id) => (
        <TrailingActions>
            <SwipeAction onClick={() => dispatch({type: 'remove-expense', payload: {id} })} destructive={true}>
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )

    const filteredExpenses = state.currentCategory ? state.expenses.filter(exp => exp.category === state.currentCategory) : state.expenses;

    return (
        <div className="mt-2">
            {isEmpty ? (
                <h1 className="text-gray-600 text-2xl font-bold">No hay gastos</h1>
            ) : (
                <SwipeableList>
                    <h1 className="text-gray-600 text-2xl font-bold mb-4">Listado de Gastos</h1>
                    {filteredExpenses.map(exp => (
                        <SwipeableListItem
                            key={exp.id}
                            maxSwipe={1}
                            leadingActions={leadingActions(exp.id)}
                            trailingActions={trailingActions(exp.id)}
                        >
                            <div className="bg-white shadow-lg p-10 w-full border-b border-gray-100 mb-4">
                                <div className="flex justify-between items-center gap-5 mb-5">
                                    <div className="flex items-center gap-5">
                                        <img src={`/icono_${getCategoryIcon(exp.category)}.svg`} alt="img" className="w-20" />
                                        <div>
                                            <p className="font-bold uppercase text-slate-500">{getCategoryName(exp.category)}</p>
                                            <p>{exp.expenseName}</p>
                                            <p className="text-slate-600">Pago realizado el: {formatDate(exp.date)}</p>
                                        </div>
                                    </div>
                                    <AmountDisplay amount={exp.amount} />
                                </div>
                            </div>
                        </SwipeableListItem>
                    ))}
                </SwipeableList>
            )}
        </div>
    )
}
