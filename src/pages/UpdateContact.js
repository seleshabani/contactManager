import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { GetContacts } from '../actions/contactActions';
import Form from '../components/form';

const UpdateContact = (props)=>{
    const userId = props.match.params.id;
    const dispatch = useDispatch();
    const contact = useSelector(state=>state.Contact);

    const ContactDetail = ()=>{
        if (contact.data.hasOwnProperty("contactProfil")) {
            return (
                <>
                    <h2>{contact.data.contactProfil.nom}</h2>
                    <Form contact={contact.data.contactProfil} btnText='modifier'/>
                </>
            )
        }
    }
    useEffect(()=>{
        dispatch(GetContacts(userId));
    },[userId])

    return <ContactDetail/>
}
export default  UpdateContact;