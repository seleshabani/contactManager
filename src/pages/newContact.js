import {Container, makeStyles, Paper, Typography} from '@material-ui/core';
import React from 'react';
import Form from '../components/form';

const useStyle = makeStyles(()=>({
  card:{
    width:'70%',
    margin:'auto',
    marginTop:'20px',
    padding:'10px'
  }
}))
const NewContact = ()=>{
    const classes = useStyle();

    return <Container>
            <Paper className={classes.card}>
              <Typography variant="h2" gutterBottom>
                Nouveau Contact
              </Typography>
             <Form btnText="Créer"/>
            </Paper>
            </Container>
}
export default  NewContact;