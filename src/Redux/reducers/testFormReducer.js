export default (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE':
            const value = action.payload.value;
            return{
                ...state,
                value
            };
        default:
            return state;
    }
};
