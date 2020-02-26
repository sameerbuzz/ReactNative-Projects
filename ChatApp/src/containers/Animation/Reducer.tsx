const initialState = {
    view: false,
    newsArray: []
}

const Reducer = (state = initialState, action: any) => {
    console.warn('done here', action); 

    switch (action.type) {
        case 'show':
            return { ...state, view: action.payload.data }
        case 'HIT_API_ASYNC':
            console.warn('here',action.payload.data);  
            return { ...state, newsArray: action.payload.data }
        default:
            return state
    }
    return state;
}

export default Reducer;