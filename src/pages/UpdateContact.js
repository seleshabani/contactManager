import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { GetContacts } from '../actions/contactActions';
import { Card, Container, makeStyles,Typography } from '@material-ui/core';
import Form from '../components/form';
import { useHistory, useLocation } from 'react-router-dom';

const useStyle = makeStyles(()=>({
    card:{
      width:'70%',
      margin:'auto',
      marginTop:'20px',
      padding:'10px'
    }
  }))

const UpdateContact = (props)=>{
    const userId = props.match.params.id;
    const dispatch = useDispatch();
    const contact = useSelector(state=>state.Contact);
    const classes = useStyle();

    const ContactDetail = ()=>{
        if (contact.data.hasOwnProperty("contactProfil")) {
            return (
                <Container>
                        <Typography variant="h4" gutterBottom>
                            {contact.data.contactProfil.nom}
                        </Typography>
                        <Form contact={contact.data.contactProfil} btnText='modifier'/>
                </Container>
            )
        }
        return <></>
    }
    useEffect(()=>{
        dispatch(GetContacts(userId));
    },[userId])

    return <Container>
            <Card className={classes.card}>
                <ContactDetail/>
            </Card>
            </Container>
}
export default  UpdateContact;