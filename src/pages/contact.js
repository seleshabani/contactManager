import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {Card, CardContent,CardActions, CardHeader, Container, makeStyles, Button} from '@material-ui/core';
import {deleteContact, GetContacts, GetContactsList} from "../actions/contactActions";
import _ from "lodash";
import {Link,useHistory } from "react-router-dom";
import Loader from "../components/Loader";

const useStyle = makeStyles(()=>({
    card:{
        width:'60%',
        margin:'auto',
        marginTop:'30px'
    }
}))

const Contact = (props)=>{
    const ContactId = props.match.params.id;
    const dispatch = useDispatch();
    const ContactState = useSelector(state=>state.Contact);
    const classes = useStyle();
    const history = useHistory();
    const FetchData = (id)=>{
        dispatch(GetContacts(id))
    }
    
    useEffect(()=>{
        FetchData(ContactId);
    },[ContactId])


    const deleteCntct = ()=>{
        dispatch(deleteContact(ContactId))
        dispatch(GetContactsList())
        history.push('/contacts');
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
                return <Loader/>
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