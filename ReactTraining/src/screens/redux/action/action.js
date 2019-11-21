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
