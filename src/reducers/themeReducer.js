const initialState = {
    drawerOpen:false,
    drawerSize:'0',
    FlashMessage:''
}

const themeReducer = (state = initialState,action)=>{

    switch (action.type) {
        case 'TOGGLE_DRAWER':
            return {
                ...state,
                drawerOpen:!state.drawerOpen,
                drawerSize:state.drawerSize === '240'? '0':'240'
            }
        case 'TOGGLE_FLASH':
            return {
                ...state,
                FlashMessage:action.payload
            }
        default:
            return state;
    }

}
export default themeReducer;