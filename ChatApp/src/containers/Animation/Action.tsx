export const showView = () => {
    return (dispatch: any, getState: any) => {
        const {view} = getState().Nav;
        dispatch({ type: 'show', payload: { data: !view } });
    }
}
