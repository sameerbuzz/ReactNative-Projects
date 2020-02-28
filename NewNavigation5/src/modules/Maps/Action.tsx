import { UPDATE_MARKERS } from './Type'

export const updateMarkers = (data: any) => {
    return (dispatch: any, getState: any) => {
        const { marker } = getState().MyMaps;
        let temp: any[] = []
        temp = marker.concat(data)
        dispatch({ type: UPDATE_MARKERS, payload: { data: temp } });
    }
}