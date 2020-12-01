import {combineReducers} from "redux";
import ContactListReducer from "./contactListReducer";
import ContactMultipleReducer from "./contactMultipleReducer";
import searchContactReducer from "./searchContactReducer";

const RootReducer = combineReducers({
    ContactsList:ContactListReducer,
    Contact:ContactMultipleReducer,
    Recherche:searchContactReducer
});
export default RootReducer;