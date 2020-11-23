import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {updateContact,createContact} from "../actions/contactActions";
const Form = (props)=>{
    
    const dispatch = useDispatch();
    const [nom,setNom] = useState("")
    const [pnom,setpnom] = useState("")
    const [pstnom,setPstnom] = useState("")
    const [mail,setEmail] = useState("")
    const [tel,setTel] = useState("")
    const [soc,setSoc] = useState("")
    const [birth,setBith] = useState("")
    const [errMsg,seterrMsg] = useState("");

    const user = (props.user !== undefined)?props.user:null;
    
    if (user !== null) {
        setNom(user.name);
        setPstnom(user.username)
        setSoc(user.company)
        setTel(user.phone)
        setEmail(user.email)
    }

    const tchekPhone = (phone)=>{
        let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(phone.match(phoneno)) {
          return true;
        }
        else {
          return false;
        }
    }
    const tchekEmail = (email)=>{
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            return true
        }else{
            return false
        }
    }
    const handler = ()=>{
        //vérification du formulaire via regex
        if(tchekEmail(mail) && tchekPhone(tel)){
            const user = {
                "nom":nom,
                "pnom":pnom,
                "pstnom":pstnom,
                "mail":mail,
                "tel":tel,
                "soc":soc,
                "birth":birth
            }
            if (props.btnText=="Modifier") {
                dispatch(updateContact(user))
             }else{
                 dispatch(createContact(user))
             }
        }else{
            seterrMsg("Il y a une erreur avec les champs du formualaires");
        }
    }
    return (
        <div className="form-zone">
            <form>
                <input value={nom} type="text" placeholder="nom" onChange={e=>setNom(e.target.value)}/>
                <input value={pnom} type="text" placeholder="prénom" onChange={e=>setpnom(e.target.value)}/>
                <input value={pstnom} type="text" placeholder="postnom" onChange={e=>setPstnom(e.target.value)}/>
                <input value={mail} type="text" placeholder="email" onChange={e=>setEmail(e.target.value)}/>
                <input value={tel} type="text" placeholder="numéro de téléphone" onChange={e=>setTel(e.target.value)}/>
                <input value={soc} type="text" placeholder="Société" onChange={e=>setSoc(e.target.value)}/>
                <input value={birth} type="text" placeholder="date de naissance" onChange={e=>setBith(e.target.value)}/>
                <button onClick={(e)=>{e.preventDefault();handler()}}> {props.btnText}</button>
            </form>
            <p>{errMsg}</p>
        </div>
    )
}
export default Form;