import axios from "axios"
import {API_URL} from "../config.js";

export const GetContactsList = (page) => async dispatch => {
    try{
        dispatch({
            type:"CONTACT_LIST_LOADING"
        });

        // const perPage = 15;
        // const offset = (page * perPage) - perPage;

        const res = await axios.get(API_URL+"/users/");
        
        dispatch({
            type:"CONTACT_LIST_SUCCESS",
            payload:res.data['hydra:member']
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

        const result = await axios.get(API_URL+`/users/${contactID}`)

        if (result) {
            dispatch({
                type:"CONTACT_MUTIPLE_SUCCESS",
                payload:result.data
            })
        }

    }catch(e){
        dispatch({
            type:"CONTACT_MULTIPLE_FAIL",
        })
    }
}
 
export const deleteContact = (contactID)=>async dispatch =>{
    try {

        dispatch({
            type:"CONTACT_MULTIPLE_LOADING"
        })

        const result = await axios.delete(API_URL+`/users/${contactID}`);

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
export const updateContact = (contact,id=null)=>async dispatch=>{
    try {
        const result = await axios.put(API_URL+`/users/${id}`,contact);
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
        const result = await axios.post(API_URL+`/users`,contact,{headers: {'content-type': 'application/json'}});
        
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

export const searchContact = (item)=>async dispatch=>{
    try {
        dispatch({
            type:"CONTACT_SEARCH_LOADING"
        })

        const result = await axios.get(API_URL+`/users?nom=${item}`);
        //faire une autre requete pour recuperer la liste des contacts par societé
        //const result = await axios.delete(API_URL+`/users?soc=${item}`);
        dispatch({
            type:"CONTACT_SEARCH_SUCCESS",
            payload:result.data['hydra:member']
        })

    } catch (error) {
        dispatch({
            type:"CONTACT_SEARCH_FAIL"
        })
    }
}