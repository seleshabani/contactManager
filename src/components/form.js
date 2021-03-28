import { makeStyles, Grid } from "@material-ui/core";
import React from "react";
import {useForm} from 'react-hook-form';
import { useDispatch } from "react-redux";
import {useHistory, useParams } from "react-router-dom";
import {updateContact,createContact} from "../actions/contactActions";
import ControllerInput from "./ControllerInput";

const useStyle = makeStyles((theme)=>({
    Button:{
        marginTop:'10px',
        backgroundColor:'rgb(37,71,170)',
        color:'white',
        border:'none',
        width:'65px',
        height:'35px',
        borderRadius:'3px 3px 3px',
        cursor:'pointer',
        outline:'none',
        '&:hover':{
            backgroundColor:'rgb(37,71,170)',
            transform:'scale(0.99)'
        }
    },
    grid1:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        '& .MuiFormControl-root':{
            width:'90%'
        }
    },
    grid:{
        margin:theme.spacing(1),
        '& .MuiFormControl-root':{
            width:'100%'
        }
    }
}))

const Form = (props)=>{    
    const dispatch = useDispatch();
    const {register,handleSubmit,errors,control} = useForm();
    const params = useParams();
    const classes = useStyle();
    const history = useHistory();

    const handlerForm = (data)=>{
        if (checkUser()) {
            dispatch(updateContact(data,params.id))
        }else{
            dispatch(createContact(data))
        }
        history.push('/contacts')
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
                    <Grid item xs={12} lg={12} className={classes.grid}>
                        <ControllerInput defValue={user?user.name:''} name="name" control={control}/>
                    </Grid>
                    <Grid item xs={12} lg={12} className={classes.grid}>
                        <ControllerInput defValue={user?user.username:''} name="username" control={control}/>
                    </Grid>
                    <Grid item xs={12} lg={12} className={classes.grid}>
                        <ControllerInput defValue={user?user.email:''} name="email" 
                        pattern={/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/} control={control} />
                    </Grid>
                    {errors.mail && <p>veillez entrer une adresse mail valide</p>}
                    <Grid item xs={12} lg={12} className={classes.grid}>
                        <ControllerInput defValue={user?user.tel:''} name="phone" 
                        pattern={/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/}  control={control}/>
                    </Grid>
                    <Grid item xs={12} lg={12} className={classes.grid}>
                        <ControllerInput defValue={user?user.soc:''} name="company" control={control}/>
                    </Grid>
                    <Grid item xs={12} lg={12} className={classes.grid}>
                        <button className={classes.Button}>{props.btnText}</button>
                    </Grid>
                </Grid>
            </form>
    )
    
    
}
export default Form;