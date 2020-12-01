const defaultState = {
    loading:false,
    data:[],
    errorMessage:"",
    count:0
};

const searchContactReducer = (state = defaultState,action)=>{
    switch (action.type) {
        case 'CONTACT_SEARCH_LOADING':
            return {
                ...state,
                loading:true,
                errorMessage:"En cours de recherche..."
            }
            case 'CONTACT_LIST_FAIL':
                return {
                    ...state,
                    loading:false,
                    errorMessage:"Aucun résultat pour votre recherche"
                }
            case 'CONTACT_SEARCH_SUCCESS':
                return {
                    ...state,
                    data : action.payload,
                    count:action.payload.count,
                    errorMessage:""
                };
        default:
            return state
    }
}
export default searchContactReducer;