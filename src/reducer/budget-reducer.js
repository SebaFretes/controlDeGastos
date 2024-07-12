import { v4 } from 'uuid';

export const initialState = {
    budget: 0,
    modal: false,
    expenses: [],
};

const createExpenseId = (prevExpense) => {
    return {
        ...prevExpense,
        id: v4()
    }
}

export const budgetReducer = (state = initialState, action) => {
    if(action.type === 'add-budget') {
        return {
            ...state,
            budget: action.payload.budget
        }
    }

    if(action.type === 'show-modal') {
        return {
            ...state,
            modal: true
        }
    }
    
    if(action.type === 'hide-modal') {
        return {
            ...state,
            modal: false
        }
    }

    if(action.type === 'add-expense') {
        const expenseWId = createExpenseId(action.payload.expense)
        return {
            ...state,
            expenses: [...state.expenses, expenseWId],
            modal: false
        }
    }

    if(action.type === 'remove-expense') {
        
        return {
            ...state,
            expenses: state.expenses.filter(exp => exp.id !==  action.payload)
        }
    }

    return state;
};