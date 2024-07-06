
export const initialState = {
    budget: 0,
    modal: false,
};

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

    return state;
};