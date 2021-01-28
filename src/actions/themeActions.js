export const toggleDrawer = ()=>dispatch=>{
    dispatch({
        type:'TOGGLE_DRAWER'
    })
}

export const toggleFlash = (payload)=>dispatch=>{
    dispatch({
        type:'TOGGLE_FLASH',
        payload:payload
    })
}

export const closeFlash = ()=>dispatch=>{
    dispatch({
        type:'TOGGLE_FLASH',
        payload:''
    })
}