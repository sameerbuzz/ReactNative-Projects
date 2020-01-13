import {LOGIN,UPDATE_EMAIL,UPDATE_PASSWORD} from './Type'

export const updateEmail = (value: string) => {
    console.warn(value);
    return (dispatch: any) => {
        dispatch({ type: UPDATE_EMAIL, payload: { email: value } });
    }
}
export const login = (value: string) => {
    return (dispatch: any) => {
        dispatch({ type: LOGIN, payload: { data: value } });
    }
}

