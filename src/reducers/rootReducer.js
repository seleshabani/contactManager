import {combineReducers} from "redux";
import ContactListReducer from "./contactListReducer";
import ContactMultipleReducer from "./contactMultipleReducer";
import searchContactReducer from "./searchContactReducer";
import themeReducer from "./themeReducer";

const RootReducer = combineReducers({
    ContactsList:ContactListReducer,
    Contact:ContactMultipleReducer,
    Recherche:searchContactReducer,
    Theme:themeReducer
});
export default RootReducer;