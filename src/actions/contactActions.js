import axios from "axios"
import Contact from "../containers/contact";


export const GetContactsList = (page) => async dispatch => {
    try{
        dispatch({
            type:"CONTACT_LIST_LOADING"
        });

        // const perPage = 15;
        // const offset = (page * perPage) - perPage;

        const res = await axios.get(`http://jsonplaceholder.typicode.com/users`);
        
        dispatch({
            type:"CONTACT_LIST_SUCCESS",
            payload:res.data
        });

    }catch(e){
        dispatch({
            type:"CONTACT_LIST_FAIL",
        })
    }
};

export const GetContacts = (contactID)=>async dispatch =>{
    try{
        dispatch({
            type:"CONTACT_MULTIPLE_LOADING"
        })

        const result = await axios.get(`http://jsonplaceholder.typicode.com/users/${contactID}`)

        dispatch({
            type:"CONTACT_MUTIPLE_SUCCESS",
            payload:result.data
        })

    }catch(e){
        dispatch({
            type:"CONTACT_MULTIPLE_FAIL",
        })
    }
}

export const deleteContact = (contactID)=>async dispatch =>{
    try {

        const result = await axios.delete(`http://jsonplaceholder.typicode.com/users/${contactID}`);

        dispatch({
            type:"CONTACT_DELETE_SUCCESS",
            payload:result.data
        })
        
    } catch (err) {
        dispatch({
            type:"CONTACT_DELETE_FAIL",
        })
    }
}

/**
 * @param Object contact
 */
export const updateContact = (contact)=>async dispatch=>{
    try {
        const result = await axios.put(`http://jsonplaceholder.typicode.com/users/`,contact);
        dispatch({
            type:"CONTACT_UPDATE_SUCCESS",
            payload:result.data
        })
    } catch (err) {
        dispatch({
            type:"CONTACT_UPDATE_FAIL",
        })
    }
}

/**
 * @param Object contact
 */
export const createContact = (contact)=>async dispatch=>{
    try {
        const result = await axios.post(`http://jsonplaceholder.typicode.com/users/`,contact);
        dispatch({
            type:"CONTACT_CREATE_SUCCESS",
            payload:result.data
        })
        
    } catch (err) {
        dispatch({
            type:"CONTACT_CREATE_FAIL",
        })
    }
}