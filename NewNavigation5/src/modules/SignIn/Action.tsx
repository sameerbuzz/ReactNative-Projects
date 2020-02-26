import { UPDATE_TOKEN, HIT_API } from './Type'

export const updateToken = (value: string) => {
    return (dispatch: any) => {
        dispatch({ type: UPDATE_TOKEN, payload: { data: value } });
    }
}