const initialState = {
    view: false,
}

const Reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'show':
            return { ...state, view: action.payload.data }
        default:
            return state
    }
}

export default Reducer;