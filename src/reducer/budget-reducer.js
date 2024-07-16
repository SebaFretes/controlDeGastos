import { v4 } from 'uuid';

const initialBudget = () => {
    const localStorageBudget = localStorage.getItem('budget');
    return localStorageBudget ? +localStorageBudget : 0;
};

const initialExpenses = () => {
    const localStorageExp = localStorage.getItem('expense');
    return localStorageExp ? JSON.parse(localStorageExp) : [];
};

export const initialState = {
    budget: initialBudget(),
    modal: false,
    expenses: initialExpenses(),
    editingId: '',
    currentCategory: '',
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
            modal: false,
            editingId: ''
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
            expenses: state.expenses.filter(exp => exp.id !==  action.payload.id)
        }
    }

    if(action.type === 'get-expense-by-id') {
        return {
            ...state,
            editingId: action.payload.id,
            modal: true,
        }
    }

    if(action.type === 'update-expense') {
        return {
            ...state,
            expenses: state.expenses.map(exp => exp.id === action.payload.expense.id ? action.payload.expense : exp),
            modal: false,
            editingId: '',
        }
    }

    if (action.type === 'reset-app') {
        return {
            ...state,
            budget: 0,
            modal: false,
            expenses: [],
            editingId: '',
        }
    }

    if (action.type === 'add-filter-category') {
        return {
            ...state,
            currentCategory: action.payload.id
        }
    }

    return state;
};