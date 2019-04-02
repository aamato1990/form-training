export default (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE':
            const name = action.payload.name;
            const value = action.payload.value;
            return {
                ...state,
                [name]: value
            };
        case 'SUBMIT':
            const message = action.payload.message;
            return {
                ...state,
                message
            };
        default:
            return state;
    }
};
