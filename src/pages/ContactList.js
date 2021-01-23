import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetContactsList } from "../actions/contactActions";
import _ from "lodash";
import {Link} from "react-router-dom";


const ContactsList = (props)=>{
    const dispatch = useDispatch();
    const ContactsList = useSelector(state=>state.ContactsList);

    useEffect(()=>{
        FetchData(1)
    },[]);

    const FetchData = (page=1)=>{
        dispatch(GetContactsList(page))
    }

    
    const ShowData = ()=>{
        if(!_.isEmpty(ContactsList.data)){

            return ContactsList.data.map(el=>{
            return(
                <div key={el.id} className="list-wrapper">
                    <p className="contact-item"> <span>{el.nom}</span> <Link to={`/contacts/${el.id}`}>voir</Link></p>
                </div>
            )
            })
        }
        if (ContactsList.loading) {
            return <p>chargement...</p>
        }

        if (ContactsList.errorMessage !== "") {
            return <p>{ContactsList.errorMessage}</p>
        }

        return <p>impossible de charger la liste</p>
    }


    return(
        <div>
            {ShowData()}
        </div>

    )
}
export default ContactsList;