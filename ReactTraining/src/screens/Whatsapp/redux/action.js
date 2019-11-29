export const click = (pic) => {
    return(dispatch)=>{
        dispatch({type: 'getPic', payload:{img: pic}})
      }
}
