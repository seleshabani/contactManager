import React, {useState} from "react";
import {useForm} from 'react-hook-form';
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {updateContact,createContact} from "../actions/contactActions";

const Form = (props)=>{    
    const dispatch = useDispatch();
    const {register,handleSubmit,errors} = useForm();
    const params = useParams();

    const handlerForm = (data)=>{

        if (checkUser()) {
            dispatch(updateContact(data,params.id))
        }else{
            dispatch(createContact(data))
        }
    }
    const checkUser = ()=>{
        if (props.hasOwnProperty('contact')) {
            return true
        }else{
            return false
        }
    }
    const user = checkUser()? props.contact : false;

    return (
        <div className="form-zone">
            <form onSubmit={handleSubmit(handlerForm)}>
                <input ref={register({required:true})} name="nom" type="text"
                 placeholder={user?user.nom:'nom'} />
                <input ref={register({required:true})} name="pnom" type="text" 
                placeholder={user?user.pnom:"prénom"} />
                <input ref={register({required:true})} name="pstnom" type="text" 
                placeholder={user?user.pstnom:"postnom"} />
                <input ref={register({required:true,pattern:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})}
                    name="mail" type="text" 
                    placeholder={user?user.mail:"email"}  />
                {errors.mail && <p>veillez entrer une adresse mail valide</p>}
                <input ref={register({required:true, pattern:/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/})}
                    name="tel" type="text" 
                    placeholder={user?user.tel:"numéro de téléphone"} />
                <input ref={register({required:true})} name="soc" type="text"
                 placeholder={user?user.soc:"Société"} />
                <input ref={register({required:true})} name="birth" type="text" 
                placeholder={user?user.birth:"date de naissance"} />
                <button>{props.btnText}</button>
            </form>
            {/* <p>{console.log(errors)}</p> */}
        </div>
    )
    
    
}
export default Form;