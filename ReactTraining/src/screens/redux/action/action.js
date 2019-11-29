export const incrementCounter = () => {
    return(dispatch, getState)=>{
        const { counter } = getState().countereducer;
        dispatch({type: 'increment', payload:{counter: counter+1}})
      }
}

export const checkState = () => {
  return(dispatch, getState) => {
    const {isChecked} = getState().countereducer;
    dispatch({type: 'checkbox', payload: {isChecked: !isChecked}})
  }
}

export const checkingState = (status) => {
  return (dispatch) => {
    dispatch({type: 'checkingbox', payload: {isChecking: status}})
  }
}

export const mydataArray = () => {
  return (dispatch, getState) => {
    const {dataArray} = getState().countereducer;
    dispatch({type: 'myarray', payload: {dataArray: dataArray.concat({id : Math.random(), isCompleted: false})}})
  }
}

export const addData = (f,l,p) => {
  return (dispatch, getState) => {
    const {showData} = getState().countereducer;
    let arr = showData
    arr = arr.splice(0).concat({['f']: f, ['l']: l, ['p']: p})
    console.warn('arr ',arr)
    dispatch({type: 'myArray', payload: {showData: arr}})
  }
}

export const APIAction = (userData, val) => {
  return (dispatch, getState) => {
    const {userAPIData} = getState().countereducer;
    let arr = userAPIData

    val === 1 ? arr = arr.splice(0).concat(userData) : arr = userData
    dispatch({type: 'APIHit', payload: {userAPIData: arr}})
  }
}