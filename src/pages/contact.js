import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {deleteContact, GetContacts, GetContactsList} from "../actions/contactActions";
import _ from "lodash";
import {Link } from "react-router-dom";

const Contact = (props)=>{
    const ContactId = props.match.params.id;
    const dispatch = useDispatch();
    const [deleted,setDeleted] = useState(0);
    const ContactState = useSelector(state=>state.Contact);
     
    useEffect(()=>{
        FetchData(ContactId);
    },[])

    const FetchData = (id)=>{
        dispatch(GetContacts(id))
    }

    const deleteCntct = ()=>{
        dispatch(deleteContact(ContactId))
        dispatch(GetContactsList)
        setDeleted(1)
    }

    const showData = ()=>{

            if(!_.isEmpty(ContactState.data)){
                return (
                    <div className="single-wrapper">
                        <h1>
                            {ContactState.data.contactProfil.nom}
                        </h1>
                        <button onClick={deleteCntct}>Supprimer</button>
                        <button><Link to={`/contacts-update/${ContactId}`}>Modifier</Link></button>
                    </div>
                )
            }

            if (ContactState.loading) {
                return <p>chargement...</p>
            }
            if (ContactState.errorMsg !== "") {
                return <p>{ContactState.errorMsg}</p>
            }
       
    }

    return(
        <div>
            {showData()}
        </div>
    )
}
export default Contact;