import React, { useEffect } from 'react'
import {useForm} from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const SearchForm = ()=>{
    
    const {register,handleSubmit} = useForm();
    const history = useHistory();

    const handleSearch = (data)=>{
        history.push(`/contacts-search/${data.search}`)
    }

    return(
        <form className="searchBar" onSubmit={handleSubmit(handleSearch)}>
            <input ref={register} name="search" type="text"/>
            <button>Chercher</button>
        </form>
    )
}
export default SearchForm;