import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {Card, CardContent,CardActions, CardHeader, Container, makeStyles, Button} from '@material-ui/core';
import {deleteContact, GetContacts, GetContactsList} from "../actions/contactActions";
import _ from "lodash";
import {Link } from "react-router-dom";

const useStyle = makeStyles(()=>({
    card:{
        width:'40%',
        margin:'auto',
        marginTop:'30px'
    }
}))

const Contact = (props)=>{
    const ContactId = props.match.params.id;
    const dispatch = useDispatch();
    const ContactState = useSelector(state=>state.Contact);
    const classes = useStyle();

    const FetchData = (id)=>{
        dispatch(GetContacts(id))
    }
    
    useEffect(()=>{
        FetchData(ContactId);
    },[ContactId])


    const deleteCntct = ()=>{
        dispatch(deleteContact(ContactId))
        dispatch(GetContactsList)
    }

    const showData = ()=>{

            if(!_.isEmpty(ContactState.data)){
                return (
                    <Container>
                        <Card className={classes.card}>
                            {/* <CardHeader>
                            </CardHeader> */}
                            <CardContent>
                                <h1>
                                    {ContactState.data.contactProfil.nom}
                                </h1>
                            </CardContent>
                            <CardActions>
                                <Button  onClick={deleteCntct}>
                                Supprimer
                                </Button>
                                <Button>
                                    <Link to={`/contacts-update/${ContactId}`}>Modifier</Link>
                                </Button>
                            </CardActions>
                        </Card>
                    </Container>
                )
            }

            if (ContactState.loading) {
                return <p>chargement...</p>
            }
            if (ContactState.errorMsg !== "") {
                return <p>{ContactState.errorMsg}</p>
            }
       
    }

    return(
        <>
            {showData()}
        </>
    )
}
export default Contact;