import { UPDATE_USER, IS_ONLINE } from './Type'

export const updateUser = (value: any) => {
    return (dispatch: any) => {
        dispatch({ type: UPDATE_USER, payload: { data: value } });
    }
}

export const isOnline = () => {
    return (dispatch: any, getState: any) => {
        const {isOnline} = getState().ChatList;
        dispatch({ type: IS_ONLINE, payload: { data: !isOnline } });
    }
}
