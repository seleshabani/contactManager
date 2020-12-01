import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetContactsList } from "../actions/contactActions";
import _ from "lodash";
import {Link} from "react-router-dom";
 
const ContactsList = (props)=>{

    const [search,setSearch] = useState("");
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
                <div className="list-wrapper">
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

    const handleSearch = ()=>{
        props.history.push(`/search/${search}`)
    }
    return(
        <div>
            <p>Recherche: </p>
            <input type="text" onChange={e=>setSearch(e.target.value)}/>
            <button onClick={()=>handleSearch()}>Chercher</button>
            {ShowData()}
        </div>
    )
}
export default ContactsList;