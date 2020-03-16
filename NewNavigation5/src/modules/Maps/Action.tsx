import { UPDATE_MARKERS, UPDATE_RECENT_SEARCH } from './Type'

export const updateMarkers = (data: any) => {
    return (dispatch: any, getState: any) => {
        const { marker } = getState().MyMaps;
        let temp: any[] = []
        temp = marker.concat(data)
        dispatch({ type: UPDATE_MARKERS, payload: { data: temp } });
    }
}

export const updateSearch = (coordinates: any, place: string) => {
    return (dispatch: any, getState: any) => {
        const { recentSearch } = getState().MyMaps;
        let newArray: any[] = [{ address: coordinates, position: place }]
        let temp: any[] = recentSearch
        temp.length < 4 ? null : temp.pop()
        temp = newArray.concat(temp)        
        dispatch({ type: UPDATE_RECENT_SEARCH, payload: { data: temp } });
    }
}