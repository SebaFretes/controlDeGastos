import { createContext, useReducer } from "react";
import { initialState, budgetReducer } from "../reducer/budget-reducer";

export const BudgetContext = createContext(null);


export const BudgetProvider = ({ children }) => {

    const [state, dispatch] = useReducer(budgetReducer, initialState);

    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch,
            }}>
            {children}
        </BudgetContext.Provider>
    )
};