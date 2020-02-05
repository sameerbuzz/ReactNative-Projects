import { SHOW_FOOTER, MULTI_PICS, REMOVE_PICS, CLEAR_BUFFER, HIDE_FOOTER, CURRENT_IMAGE } from './Type'

export const showingFooter = () => {
    return (dispatch: any) => {
        // console.warn('footer  ',true)
        dispatch({ type: SHOW_FOOTER, payload: { data: true } });
    }
}

export const hideFooter = () => {
    return (dispatch: any) => {
        // console.warn(false)
        dispatch({ type: HIDE_FOOTER, payload: { data: false } });
    }
}

export const addImagesToBuffer = (values: Object) => {
    return (dispatch: any, getState: any) => {
        const {images} = getState().Main;
        images.push(values)
        dispatch({ type: MULTI_PICS, payload: { data: images } });
    }
}

export const clearImageBuffer = () => {
    return (dispatch: any) => {
        dispatch({ type: CLEAR_BUFFER, payload: { data: [] } });
    }
}

export const removeImagesFromBuffer = (callback: Function) => {
    return (dispatch: any, getState: any) => {
        const {images} = getState().Main;
        var filterArr = images.splice(1)
        // console.warn('removed   ', filterArr)
        dispatch({ type: REMOVE_PICS, payload: { data: filterArr } });
        if(callback){
            callback()
        }
    }
}

export const changeCurrentImage = (image: string ,callback: Function) => {
    return (dispatch: any) => {
        dispatch({ type: CURRENT_IMAGE, payload: { data: image } });
        if(callback){
            callback()
        }
    }
}

