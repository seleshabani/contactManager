import {combineReducers} from "redux";
import ContactListReducer from "./contactListReducer";
import ContactMultipleReducer from "./contactMultipleReducer";

const RootReducer = combineReducers({
    ContactsList:ContactListReducer,
    Contact:ContactMultipleReducer
});
export default RootReducer;