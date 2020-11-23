const defaultState = {
    loading:false,
    data:[],
    errorMessage:"",
    count:0
};

export const ContactListReducer = (state = defaultState, action) =>{
    switch(action.type) {
        case "CONTACT_LIST_LOADING":
            return {
                ...state,
                loading:true,
                errorMessage:""
            };
        case "CONTACT_LIST_FAIL":
            return {
                ...state,
                loading:false,
                errorMessage:"impossible de charger la liste des CONTACT"
            }
        case "CONTACT_LIST_SUCCESS":
            return {
                ...state,
                loading : false,
                data : action.payload,
                count:action.payload.count,
                errorMessage:""
            };
        default:
            return state
    }
}
export default ContactListReducer;