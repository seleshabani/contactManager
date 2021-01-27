import { Input,Button, makeStyles, Grid } from "@material-ui/core";
import React from "react";
import {Controller, useForm} from 'react-hook-form';
import { useDispatch } from "react-redux";
import {useParams } from "react-router-dom";
import {updateContact,createContact} from "../actions/contactActions";
import ControllerInput from "./ControllerInput";

const useStyle = makeStyles(()=>({
    Button:{
        marginTop:'10px',
        backgroundColor:'rgb(37,71,170)',
        color:'white',
        '&:hover':{
            backgroundColor:'rgb(37,71,170)',
            transform:'scale(0.99)'
        }
    }
}))

const Form = (props)=>{    
    const dispatch = useDispatch();
    const {register,handleSubmit,errors,control} = useForm();
    const params = useParams();
    const classes = useStyle();

    const handlerForm = (data)=>{
        console.log(data);
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
            <form onSubmit={handleSubmit(handlerForm)}>
                <Grid container>
                    <Grid item xs="12" lg="5" sm="6" style={{marginRight:'62px'}}>
                        <ControllerInput placeholder={user?user.nom:'nom'} name="nom" control={control}/>
                    </Grid>
                    <Grid item xs="12" lg="6" sm="6">
                        <ControllerInput placeholder={user?user.pnom:'prenom'} name="pnom" control={control}/>
                    </Grid>
                    <Grid item xs="12" lg="12" md={12}>
                        <ControllerInput placeholder={user?user.pstnom:'postnom'} name="pstnom" control={control}/>
                    </Grid>
                    <Grid item xs="12" lg="12">
                        <ControllerInput placeholder={user?user.mail:'mail'} name="mail" 
                        pattern={/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/} control={control} />
                    </Grid>
                    {errors.mail && <p>veillez entrer une adresse mail valide</p>}
                    <Grid item xs="12" lg="12">
                        <ControllerInput placeholder={user?user.tel:'Téléphone'} name="tel" 
                        pattern={/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/}  control={control}/>
                    </Grid>
                    <Grid item xs="12" lg="12">
                        <ControllerInput placeholder={user?user.soc:'société'} name="soc" control={control}/>
                    </Grid>
                    <Grid item xs="12" lg="12">
                        <ControllerInput placeholder={user?user.birth:'date de naissance'} name="birth" control={control}/>
                    </Grid>
                    <Grid item xs="12" lg="12">
                        <Button className={classes.Button}>{props.btnText}</Button>
                    </Grid>
                </Grid>
            </form>
    )
    
    
}
export default Form;