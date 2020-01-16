import { UPDATE_USER } from './Type'

export const updateUser = (value: any) => {
    return (dispatch: any) => {
        dispatch({ type: UPDATE_USER, payload: { data: value } });
    }
}
