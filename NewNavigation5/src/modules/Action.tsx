import { UPDATE_UID, UPDATE_EMAIL, UPDATE_PASSWORD } from './Type'

export const updateEmail = (value: string) => {
    return (dispatch: any) => {
        dispatch({ type: UPDATE_EMAIL, payload: { data: value } });
    }
}
export const updateUid = (value: string) => {
    return (dispatch: any) => {
        dispatch({ type: UPDATE_UID, payload: { data: value } });
    }
}
export const updatePassword = (value: string) => {
    return (dispatch: any) => {
        dispatch({ type: UPDATE_PASSWORD, payload: { data: value } });
    }
}