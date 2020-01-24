import { IS_TYPING } from './Type'

export const isTyping = () => {
    return (dispatch: any, getState: any) => {
        const {isTyping} = getState().ChatList;
        dispatch({ type: IS_TYPING, payload: { data: !isTyping } });
    }
}
