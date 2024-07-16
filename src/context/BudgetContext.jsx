import { createContext, useReducer } from "react";
import { initialState, budgetReducer } from "../reducer/budget-reducer";

export const BudgetContext = createContext(null);


export const BudgetProvider = ({ children }) => {

    const [state, dispatch] = useReducer(budgetReducer, initialState);

    const totalExpenses = state.expenses.reduce((total, exp) => exp.amount + total, 0);

    const availableMoney = state.budget - totalExpenses;

    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch,
                totalExpenses,
                availableMoney
            }}>
            {children}
        </BudgetContext.Provider>
    )
};