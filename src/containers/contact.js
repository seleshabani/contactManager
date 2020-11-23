import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {deleteContact, GetContacts, GetContactsList} from "../actions/contactActions";
import _ from "lodash";
import { Redirect, useLocation,Link } from "react-router-dom";
import Form from '../components/form'

const Contact = (props)=>{
    const ContactId = props.match.params.id;
    const ContactCreate = props.match.params.create; 
    // vient de l'url
    let action = "";

    if (props.match.params.action !== undefined) {
        action = props.match.params.action;
        console.log(action);
    }

    const dispatch = useDispatch();
    const [deleted,setDeleted] = useState(0);
    const [updated,setUpdated] = useState(0);

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
        if (action==="") {
            if(!_.isEmpty(ContactState.data)){
                return (
                    <div>
                        <h1>
                            {ContactState.data.contactProfil.name}
                        </h1>
                            <button onClick={deleteCntct}>Supprimer</button>
                            <button><Link to={`/contacts/update/${ContactId}`}>Modifier</Link></button>
                    </div>
                )
            }
            if (ContactState.loading) {
                return <p>chargement...</p>
            }
            if (ContactState.errorMsg !== "") {
                return <p>{ContactState.errorMsg}</p>
            }
        }else if(action==="update"){
            return(
                <div>
                    <Form user={ContactState.data.contactProfil} btnText='Modifier'/>
                </div>
            );
        }
        if (ContactCreate == "1") {
            return(
                <div>
                    <Form btnText='Ajouter'/>
                </div>
            );
        }
    }

    return(
        <div>
            <p>{(deleted===0)?"":"Utilisateur supprimé"}</p>
            <p>{(updated===0)?"":"Utilisateur supprimé"}</p>
            {showData()}
        </div>
    )
}
export default Contact;