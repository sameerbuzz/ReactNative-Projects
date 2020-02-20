import { UPDATE_TOKEN } from './Type'

export const updateToken = (value: string) => {
    return (dispatch: any) => {
        dispatch({ type: UPDATE_TOKEN, payload: { data: value } });
    }
}