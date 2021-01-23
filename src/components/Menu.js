import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu = ()=>{
    return <nav>
        <NavLink to={"/"}>Contacts</NavLink>
        <NavLink to={"/contacts-create"}>Nouveau <i className="fa fa-pencil"></i></NavLink>
    </nav>
}
export default Menu;