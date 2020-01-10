const initialState = {
    data: null
};

const Reducer = (state = initialState, action: { type: string; }) => {
    switch (action.type) {
        case '':
            return { ...state }
        default:
            return state
    }
}

export default Reducer;