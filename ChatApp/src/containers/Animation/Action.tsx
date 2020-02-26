export const showView = () => {
    return (dispatch: any, getState: any) => {
        const {view} = getState().Nav;
        dispatch({ type: 'show', payload: { data: !view } });
    }
}

export const hitApiAction = (newsAPI: string) => {
    console.warn('okk yo');
    return (dispatch: any) => {
        dispatch({ type: "HIT_API", payload: { endpoint: newsAPI } });
    }
}