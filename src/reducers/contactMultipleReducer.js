const defaultState = {
    laoding : false,
    data:{},
    errorMsg:""
};

const ContactMultipleReducer = (state = defaultState,action)=>{
    switch (action.type) {
        case 'CONTACT_MUTIPLE_LOADING':
            return {
                ...state,
                loading:true,
                errorMsg:""
            };
        case 'CONTACT_MUTIPLE_FAIL':
            return {
                ...state,
                loading:false,
                errorMsg:"impossible de trouver le contact demandé"
            };
        case 'CONTACT_MUTIPLE_SUCCESS':
            return {
                ...state,
                loading:false,
                errorMsg:"",
                data:{
                    ...state.data,
                    ["contactProfil"] : action.payload
                }
            };
        case 'CONTACT_DELETE_SUCCESS':
            return {
                ...state,
                loading:false,
                data:action.payload,
                errorMsg : "Contact supprimé!"
            }
            default:
            return state
    }
}
export default ContactMultipleReducer;