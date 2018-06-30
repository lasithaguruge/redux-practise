const userReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            return [
                ...state,
                action.payload
            ];
        case 'DELETE':
            state = [...state];
            let index = state.findIndex(user => user.firstName === action.id);
            state.splice(index, 1);
            return state;
        default:
            return state;
    }
}

export default userReducer;