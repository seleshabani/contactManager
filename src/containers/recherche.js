import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchContact } from "../actions/contactActions";
import {Link } from "react-router-dom";
import _ from "lodash";

const Recherche = (props)=>{
    const searchItem = props.match.params.item;
    const dispatch = useDispatch();
    const SearchState = useSelector(state=>state.Recherche);

    useEffect(()=>{
        fetchData(searchItem);
    },[])

    const fetchData = (item)=>{
        dispatch(searchContact(item));
    }

    const showData = ()=>{
        if(!_.isEmpty(SearchState.data)){

            return SearchState.data.map(el=>{

                return(
                    <div className="list-wrapper">
                        <p className="contact-item"> <span>{el.nom}</span> <Link to={`/contacts/${el.id}`}>voir</Link></p>
                    </div>
                )
            })
        }
        return <p>Aucun résultat</p>
    }

    return (
        showData()
    )
}
export default Recherche;